import { useState } from 'react'
import { SnakeGame } from './components/SnakeGame'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: '🚀'
    },
    {
      title: 'Feature 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '⚡'
    },
    {
      title: 'Feature 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      icon: '🎯'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Submitted email:', searchQuery)
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="gradient-pattern top-[-300px] right-[-200px] opacity-30" />
      <div className="gradient-pattern bottom-[-200px] left-[-300px] opacity-20" />

      {/* Navigation */}
      <nav className="px-4 sm:px-8 py-6 relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold tracking-wider">TEMPLATE DSGN</div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link uppercase text-sm">About</a>
            <a href="#download" className="nav-link uppercase text-sm">Download</a>
            <a href="#pricing" className="nav-link uppercase text-sm">Pricing</a>
            <a href="#features" className="nav-link uppercase text-sm">Features</a>
            <a href="#contact" className="nav-link uppercase text-sm">Contact</a>
            <button className="btn-primary px-6 py-2 rounded-full text-sm uppercase">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-10 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#about" className="nav-link uppercase text-lg" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#download" className="nav-link uppercase text-lg" onClick={() => setMobileMenuOpen(false)}>Download</a>
            <a href="#pricing" className="nav-link uppercase text-lg" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#features" className="nav-link uppercase text-lg" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#contact" className="nav-link uppercase text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="btn-primary px-8 py-3 rounded-full text-lg uppercase">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-8 sm:space-y-12">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
                Welcome.
              </h1>
              <div className="relative max-w-xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input w-full bg-transparent rounded-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg focus:outline-none"
                  placeholder="Search..."
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="btn-primary px-8 py-3 rounded-full text-sm uppercase font-medium w-full sm:w-auto">
                  Free Trial
                </button>
                <button className="border border-gray-700 text-white px-8 py-3 rounded-full text-sm uppercase font-medium hover:bg-gray-900 transition-colors w-full sm:w-auto">
                  see more
                </button>
              </div>
            </div>
            <div className="relative mt-12 md:mt-0">
              <div className="md:absolute right-0 top-1/4">
                <div className="flex flex-col items-center md:items-end">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold">Landing page.</h2>
                  </div>
                  <p className="text-gray-400 max-w-md text-center md:text-right text-base sm:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                    magna aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snake Game Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Try Our Snake Game!
          </h2>
          <div className="flex justify-center">
            <SnakeGame />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Stay Updated
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
