import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, signup } from '../auth'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = isLogin 
        ? await login({ email: formData.email, password: formData.password })
        : await signup(formData)
      
      console.log('Login result:', result)
      console.log('User role:', result.user?.role)
      
      if (result.user?.role === 'admin') {
        console.log('Navigating to admin dashboard')
        navigate('/admin')
      } else {
        console.log('Navigating to home page')
        navigate('/home')
      }
    } catch (error) {
      alert(`${isLogin ? 'Login' : 'Signup'} failed: ` + error.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&opacity=0.2)'}}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border rounded-lg" 
                required
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 border rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-3 border rounded-lg" 
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-bold"
          >
            {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-600 font-bold"
          >
            {isLogin ? 'Sign up here' : 'Login here'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth