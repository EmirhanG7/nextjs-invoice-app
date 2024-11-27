'use server';

import { redirect } from "next/navigation";
import { db } from '@/db'
import { Invoices } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import {and, eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

export async function createAction( FormData ) {
  const { userId } = await auth()
  const value = Math.floor(parseFloat(String(FormData.get('value'))) * 100)
  const description = FormData.get('description');

  if(!userId) {
    return
  }

  const results = await db.insert(Invoices)
    .values({
      value,
      description,
      userId,
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