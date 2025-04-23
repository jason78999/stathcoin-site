import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white font-sans">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-orange-400">$STATH</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Telegram</a>
          <a href="#" className="hover:underline">Discord</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Jason_Statham_2018.jpg/440px-Jason_Statham_2018.jpg" alt="Statham" className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">“I called the spine, you know I called.”</h1>
        <p className="text-xl text-gray-400 mb-8">— Jason Statham</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg">
          Learn More
        </button>
        <div className="flex space-x-4 mt-10 text-gray-400 text-2xl">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-telegram"></i></a>
          <a href="#"><i className="fab fa-discord"></i></a>
        </div>
      </main>
    </div>
  </React.StrictMode>,
)
