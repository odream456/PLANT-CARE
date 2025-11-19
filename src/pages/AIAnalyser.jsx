import React, { useState } from 'react'

const AiAnalyser = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        // Simulate AI analysis
        simulateAnalysis()
      }
      reader.readAsDataURL(file)
    }
  }

  const simulateAnalysis = () => {
    setIsLoading(true)
    // Simulate API call delay
    setTimeout(() => {
      setAnalysisResult({
        name: 'Monstera Deliciosa',
        age: '2-3 years',
        health: 'Excellent',
        careTips: [
          'Water when top 2 inches of soil are dry',
          'Prefers bright, indirect light',
          'Fertilize monthly during growing season'
        ]
      })
      setIsLoading(false)
    }, 2000)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        simulateAnalysis()
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-eco-600 mb-2">AI Plant Analyser</h1>
        <p className="text-eco-700 mb-8">
          Upload a photo of your plant and get instant identification and care tips
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`
                border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer
                transition-all duration-300 hover:shadow-lg
                ${selectedImage 
                  ? 'border-eco-400 bg-eco-50' 
                  : 'border-eco-300 hover:border-eco-400'
                }
              `}
              onClick={() => document.getElementById('fileInput').click()}
            >
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              {!selectedImage ? (
                <div>
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="text-xl font-semibold text-eco-600 mb-2">
                    Upload Plant Photo
                  </h3>
                  <p className="text-eco-600">
                    Drag & drop or click to upload
                  </p>
                  <p className="text-sm text-eco-500 mt-2">
                    Supports JPG, PNG, WEBP
                  </p>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <img 
                    src={selectedImage} 
                    alt="Uploaded plant" 
                    className="max-h-64 mx-auto rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            {!selectedImage && (
              <button
                onClick={() => document.getElementById('fileInput').click()}
                className="w-full bg-eco-500 text-white py-3 rounded-xl font-semibold hover:bg-eco-600 transform hover:scale-105 transition-all duration-200"
              >
                Choose File
              </button>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-eco-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-eco-600 mb-4">Analysis Results</h3>
            
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-500 mx-auto mb-4"></div>
                <p className="text-eco-600">Analysing your plant...</p>
              </div>
            ) : analysisResult ? (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-eco-600">Plant Name</h4>
                  <p className="text-eco-700">{analysisResult.name}</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-eco-600">Estimated Age</h4>
                  <p className="text-eco-700">{analysisResult.age}</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-eco-600">Health Status</h4>
                  <p className="text-eco-700">{analysisResult.health}</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-eco-600 mb-2">Care Tips</h4>
                  <ul className="text-eco-700 space-y-1">
                    {analysisResult.careTips.map((tip, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-eco-500">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-eco-500">
                <div className="text-4xl mb-4">🔍</div>
                <p>Upload a plant photo to see analysis results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiAnalyser