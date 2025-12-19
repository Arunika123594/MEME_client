import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SimpleLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simple hardcoded login check
    if (email === 'admin@test.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({
        name: 'Admin User',
        email: 'admin@test.com',
        role: 'admin'
      }))
      navigate('/admin')
    } else if (email === 'user@test.com' && password === '1234') {
      localStorage.setItem('user', JSON.stringify({
        name: 'Test User',
        email: 'user@test.com',
        role: 'user'
      }))
      navigate('/home')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto min-h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg" 
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-bold"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>Admin: admin@test.com / password</p>
          <p>User: user@test.com / 1234</p>
        </div>
      </div>
    </div>
  )
}

export default SimpleLogin