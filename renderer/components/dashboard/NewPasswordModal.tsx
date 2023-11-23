'use client'
import { useEffect, useState } from "react"

export default function NewPasswordModal({ setModalOpen }) {
  const [formData, setFormData] = useState({})
  const [password, setPassword] = useState('')

  useEffect(() => {
    generateNewPassword()
  }, [])

  function updateFormData(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  function generateNewPassword() {
    event.preventDefault();
    const newPassword = Math.random().toString(36).slice(-10)
    setPassword(newPassword)
  }

  const passwordList = []

  return (
    <div>
      <h1>New Password</h1>
      <form onSubmit={() => passwordList.push(password)} className="flex flex-col w-1/2">
        <label htmlFor="name">Service:</label>
        <input onChange={() => updateFormData} type="text" name="name" id="name" className="text-gray-900" />
        <div className="flex">
          <p>Password: {password}</p>
          <button onClick={() => generateNewPassword()} className="ml-2">
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/></svg>
          </button>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setModalOpen(false)}>Cancel</button>
      </form>
    </div>
  )
}