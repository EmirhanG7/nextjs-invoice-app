'use client'

import NextError from 'next/error'

export default function Error({ error }) {

  return (
    <NextError statusCode={400} title={error.message} />

  )
}