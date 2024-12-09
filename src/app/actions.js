'use server';

import { redirect } from "next/navigation";
import { db } from '@/db'
import {Customers, Invoices} from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import {and, eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

export async function createAction( FormData ) {
  const { userId } = await auth()

  if(!userId) {
    return
  }

  const value = Math.floor(parseFloat(String(FormData.get('value'))) * 100)
  const description = FormData.get('description');
  const name = FormData.get('name');
  const email = FormData.get('email');

  const [customer] = await db.insert(Customers)
    .values({
      name,
      email,
      userId,
    })
    .returning({
      id: Customers.id
    })

  const results = await db.insert(Invoices)
    .values({
      value,
      description,
      userId,
      customerId: customer.id,
      status: 'open',
    })
    .returning({
      id: Invoices.id
    })

    redirect(`/invoices/${results[0].id}`)
}

export async function updateStatusAction(FormData) {
  const { userId } = await auth()

  if(!userId) {
    return
  }

  const id = FormData.get('id')
  const status = FormData.get('status')

  const results = await db.update(Invoices)
    .set({ status })
    .where(
      and(
        eq(Invoices.id, id),
        eq(Invoices.userId, userId)
      )
    )
  revalidatePath(`/invoices/${id}`, 'page')

}

export async function deleteInvoiceAction(FormData) {
  const { userId } = await auth()

  if(!userId) {
    return
  }

  const id = FormData.get('id')


  const results = await db.delete(Invoices)
    .where(
      and(
        eq(Invoices.id, id),
        eq(Invoices.userId, userId)
      )
    )
  redirect('/dashboard')

}