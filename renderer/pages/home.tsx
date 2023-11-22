import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Password Manager</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image
          className="w-60"
          src="/logo.png"
          alt="Password Manager Logo"
          width={200}
          height={200}
        />
        <h1 className="text-6xl font-bold">Password Manager</h1>
        <p className="mt-3 text-2xl">
          <Link href="/login">
            <a className="text-blue-600">Login</a>
          </Link>{' '}
          /{' '}
          <Link href="/register">
            <a className="text-blue-600">Register</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}
