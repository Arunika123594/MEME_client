import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      navigate('/')
      return
    }
    
    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== 'admin') {
      navigate('/home')
      return
    }
    
    setUser(parsedUser)
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <nav className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="space-x-4">
            <span>Welcome, {user?.name}</span>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Admin Panel</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Total Memes</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-purple-600">1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard