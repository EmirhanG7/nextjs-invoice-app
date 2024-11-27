"use client";

import { useFormStatus } from 'react-dom';
import {Button} from "@/components/ui/button";
import { LoaderCircle } from 'lucide-react';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending)
  return (
    <Button className="w-full font-semibold relative" type="submit">
      <span className={pending ? 'text-transparent' : ''}>Submit</span>
      {pending && (
       <span className="flex items-center justify-center w-full h-full absolute text-gray-400">
         <LoaderCircle className="animate-spin" />
       </span>
      )}
    </Button>
  )
}