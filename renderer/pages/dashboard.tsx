import { useState } from "react"
import NewPasswordModal from "../components/dashboard/NewPasswordModal"

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Welcome back, [user]</h1>
      <button onClick={() => setModalOpen(true)}>Add New Password</button>
      <p>{password}</p>
      {
        modalOpen && (
          <div>
            <NewPasswordModal setModalOpen={setModalOpen} />
          </div>
        )
      }
    </div>
  )
}