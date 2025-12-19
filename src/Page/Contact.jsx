import { useState } from 'react'
import { signup } from '../auth'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await signup({ name, email, password })
      alert('Signup successful!')
      console.log(result)
    } catch (error) {
      alert('Signup failed: ' + error.response?.data?.message)
    }
    setLoading(false)
  }

  return (
    <div className="p-8 max-w-2xl mx-auto min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&opacity=0.3)'}}>
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">📧 Email</h3>
          <p>support@memeapp.com</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">📱 Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg" 
            required
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg" 
            required
          />
          <input 
            type="password" 
            placeholder="Your Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg" 
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-bold"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact