import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
  const [memes, setMemes] = useState([
    {
      _id: '1',
      title: 'Exam Stress 😵💫',
      imageUrl: 'https://i.imgflip.com/1bij.jpg',
      topText: 'When exams are tomorrow',
      bottomText: 'And you start studying today',
      category: 'Student Life',
      likes: 12
    },
    {
      _id: '2',
      title: 'Coding Bug 🐞',
      imageUrl: 'https://i.imgflip.com/26am.jpg',
      topText: 'Code works perfectly',
      bottomText: 'Until you submit it',
      category: 'Programming',
      likes: 25
    },
    {
      _id: '3',
      title: 'Monday Mood 😴',
      imageUrl: 'https://i.imgflip.com/9ehk.jpg',
      topText: 'Monday morning',
      bottomText: 'After weekend sleep',
      category: 'Work Life',
      likes: 8
    }
  ])
  const [loading, setLoading] = useState(false)

  return (
    <div className="p-8 text-center min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}>
      <h2 className="text-4xl font-bold mb-8">Welcome to Meme Generator</h2>
      <p className="text-xl mb-8">Create hilarious memes with our easy-to-use generator!</p>
      
      <Link to="/generator" className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl mb-8 inline-block">
        Create Meme
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">🎨 Create</h3>
          <p>Upload your images and add custom text to create amazing memes</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">📱 Share</h3>
          <p>Download your memes and share them with friends on social media</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">😂 Enjoy</h3>
          <p>Browse popular meme templates and get inspired for your next creation</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-white">Latest Memes</h3>
      {memes.length === 0 ? (
        <p className="text-white text-center">No memes found. Create some memes first!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {memes.map((meme) => (
            <div key={meme._id} className="bg-white rounded-lg shadow-lg p-4">
              <div className="relative">
                <img src={meme.imageUrl} alt={meme.title} className="w-full rounded" />
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold text-center stroke-black">
                  {meme.topText}
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold text-center stroke-black">
                  {meme.bottomText}
                </div>
              </div>
              <h4 className="font-bold mt-2">{meme.title}</h4>
              <p className="text-sm text-gray-600">{meme.category} • {meme.likes} likes</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home