import Head from "next/head"
import { Fragment, useState } from "react"

export default function Register() {

  const [formData, setFormData] = useState({});

  function updateFormData(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    console.log(formData);
  }

  function handleSubmit() {
    console.log("Registering...")

  }

  return (
    <Fragment>
      <Head>
        <title>Password Manager</title>
      </Head>
      <form className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Register</h1>
        <div className="flex flex-col justify-center text-gray-900">
          <input onChange={updateFormData} id="username" className="mt-3 text-2xl" type="text" placeholder="Username" />
          <input onChange={updateFormData} id="email" className="mt-3 text-2xl" type="email" placeholder="Email" />
          <input onChange={updateFormData} id="password" className="mt-3 text-2xl" type="password" placeholder="Password" />
          <input onChange={updateFormData} id="confirmPassowrd" className="mt-3 text-2xl" type="password" placeholder="Confirm Password" />
        </div>
        <button className="mt-3 text-2xl" type="submit">Register</button>
      </form>
    </Fragment>
  )
}