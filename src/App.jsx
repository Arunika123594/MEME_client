import { useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Page/Home'
import Contact from './Page/Contact'
import SimpleLogin from './Page/SimpleLogin'
import AdminDashboard from './Dashboard/AdminDashBoard'


function MemeGenerator() {
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [image, setImage] = useState('https://via.placeholder.com/500x400?text=Upload+Image')
  const canvasRef = useRef()

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const downloadMeme = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      
      ctx.font = '40px Arial'
      ctx.fillStyle = 'white'
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 2
      ctx.textAlign = 'center'
      
      if (topText) {
        ctx.fillText(topText, canvas.width / 2, 50)
        ctx.strokeText(topText, canvas.width / 2, 50)
      }
      
      if (bottomText) {
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20)
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20)
      }
      
      const link = document.createElement('a')
      link.download = 'meme.png'
      link.href = canvas.toDataURL()
      link.click()
    }
    
    img.src = image
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat p-8" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}>
      <h1 className="text-4xl font-bold text-center mb-8">Meme Generator</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 w-full"
          />
          
          <input
            type="text"
            placeholder="Top text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          
          <input
            type="text"
            placeholder="Bottom text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          
          <button
            onClick={downloadMeme}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Download Meme
          </button>
        </div>
        
        <div className="relative text-center">
          <img src={image} alt="Meme" className="max-w-full rounded" />
          {topText && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold stroke-black">
              {topText}
            </div>
          )}
          {bottomText && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold stroke-black">
              {bottomText}
            </div>
          )}
        </div>
        
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">MemeApp</h1>
            <div className="space-x-4">
              <Link to="/home" className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Home</Link>
              <Link to="/contact" className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Contact</Link>
              <Link to="/generator" className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Generator</Link>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<SimpleLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/generator" element={<MemeGenerator />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 MemeApp. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Made with ❤️ for meme lovers everywhere</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
