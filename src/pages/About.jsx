import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-eco-600 mb-6">About Plantcare</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-eco-700 mb-6 text-lg">
            Plantcare is an innovative platform that combines artificial intelligence with 
            plant expertise to help you become the best plant parent possible. Our platform 
            empowers plant lovers to care for their plants smarter, healthier, and more efficiently.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-eco-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-eco-600 mb-3">🌿 Our Mission</h3>
              <p className="text-eco-700">
                To make plant care accessible to everyone, from seasoned gardeners to 
                first-time plant owners, through the power of AI technology. We aim to 
                create a sustainable and joyful plant-keeping experience for all.
              </p>
            </div>

            <div className="bg-eco-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-eco-600 mb-3">🤖 Technology</h3>
              <p className="text-eco-700">
                Using advanced machine learning models, we can identify plants, 
                detect issues, and provide personalized care recommendations. Our AI continuously 
                learns and improves to give the most accurate and helpful insights.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-eco-600 mt-8 mb-4">What We Offer</h2>
          <ul className="text-eco-700 space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-eco-500">✓</span>
              Instant plant identification from photos
            </li>
            <li className="flex items-center gap-3">
              <span className="text-eco-500">✓</span>
              Detailed plant information and care guides
            </li>
            <li className="flex items-center gap-3">
              <span className="text-eco-500">✓</span>
              AI-powered chat support for plant questions
            </li>
            <li className="flex items-center gap-3">
              <span className="text-eco-500">✓</span>
              Health assessment and problem detection
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-eco-600 mt-8 mb-4">About the Creator</h2>
          <p className="text-eco-700 text-lg mb-4">
            Plantcare was created in 2025 by <span className="font-semibold text-eco-600">Ozodbek</span>, 
            and <span className="font-semibold text-eco-600">Teacher Jakhongir</span>, a passionate coder and plant enthusiast. With a vision to combine technology and nature, 
            Ozodbek designed Plantcare to make plant care smarter, easier, and more enjoyable for everyone.
          </p>

          <h2 className="text-2xl font-semibold text-eco-600 mt-8 mb-4">Launch Date</h2>
          <p className="text-eco-700 text-lg">
            Officially launched in <span className="font-semibold text-eco-600">November 2025</span>, 
            Plantcare continues to grow and evolve, helping plant lovers around the world nurture their greenery.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
