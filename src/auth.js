const API_URL = 'http://localhost:5000/api'

export const signup = async (userData) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  
  if (!response.ok) {
    throw new Error('Signup failed')
  }
  
  return response.json()
}

export const login = async (userData) => {
  try {
    console.log('Attempting login to:', `${API_URL}/login`)
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    
    console.log('Response status:', response.status)
    const data = await response.json()
    console.log('Response data:', data)
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }
    
    return data
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}