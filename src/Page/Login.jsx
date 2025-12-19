import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await login({ email, password })
      localStorage.setItem('user', JSON.stringify(result.user))
      
      if (result.user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/home')
      }
    } catch (error) {
      alert('Login failed: ' + error.message)
    }
    setLoading(false)
  }

  return (
    <div className="p-8 max-w-md mx-auto min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&opacity=0.2)'}}>
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
              autoComplete="current-password"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-bold"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <button className="text-blue-500 hover:text-blue-600 font-bold">Sign up here</button>
        </div>
      </div>
    </div>
  )
}

export default Login