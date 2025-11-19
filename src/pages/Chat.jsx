import { useState, useRef, useEffect } from 'react';

// ChatBox Component
const ChatBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-emerald-100 bg-white">
      <div className="flex space-x-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about your plants..."
          className="flex-1 px-4 py-3 border border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-emerald-50"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </form>
  );
};

// Message Component
const Message = ({ message, isUser }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3 max-w-3/4`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser ? 'bg-emerald-500' : 'bg-emerald-200'
        }`}>
          <span className="text-sm">
            {isUser ? '👤' : '🌱'}
          </span>
        </div>
        
        {/* Message Bubble */}
        <div className={`transform transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className={`rounded-2xl px-4 py-3 shadow-sm ${
            isUser 
              ? 'bg-emerald-500 text-white rounded-br-md' 
              : 'bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-bl-md'
          }`}>
            <p className="text-sm leading-relaxed">{message}</p>
          </div>
          <div className={`text-xs mt-1 text-emerald-500 ${isUser ? 'text-right' : 'text-left'}`}>
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Chat Component
const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Plant Care assistant. How can I help you with your plants today? 🌿",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text) => {
    const newUserMessage = {
      id: messages.length + 1,
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const newAIMessage = {
        id: messages.length + 2,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newAIMessage]);
    }, 1000 + Math.random() * 1000);
  };

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('water') || lowerMessage.includes('watering')) {
      return "Most houseplants prefer their soil to dry out slightly between waterings. Stick your finger about an inch into the soil - if it's dry, it's time to water! 💧";
    } else if (lowerMessage.includes('sunlight') || lowerMessage.includes('light')) {
      return "Light requirements vary by plant. Most indoor plants thrive in bright, indirect light. Avoid direct sunlight that can scorch leaves! ☀️";
    } else if (lowerMessage.includes('yellow') || lowerMessage.includes('leaves')) {
      return "Yellow leaves can indicate overwatering, underwatering, or nutrient deficiency. Check the soil moisture and consider if the plant needs fertilizer. 🍂";
    } else if (lowerMessage.includes('fertilizer') || lowerMessage.includes('food')) {
      return "During growing season (spring/summer), fertilize every 2-4 weeks. In winter, most plants are dormant and need less frequent feeding. 🌱";
    } else if (lowerMessage.includes('repot') || lowerMessage.includes('pot')) {
      return "Plants typically need repotting when roots circle the pot or grow through drainage holes. Choose a pot only 1-2 inches larger than the current one. 🏺";
    } else {
      const responses = [
        "I'd be happy to help with that! Could you tell me more about your plant's specific symptoms or concerns?",
        "That's a great question about plant care! Let me provide some general guidance, and feel free to share more details.",
        "Plants are amazing, aren't they? For more specific advice, you could upload a photo using our AI Diagnosis feature!",
        "I understand your concern. Proper plant care depends on factors like light, water, and the specific plant type. What plant are you asking about?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
            <span className="text-xl">💬</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-emerald-800">Plant Chat</h1>
            <p className="text-emerald-600 text-sm">Ask me anything about plant care</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* ChatBox */}
      <ChatBox onSendMessage={handleSendMessage} />

      {/* Quick Actions */}
      <div className="bg-white/50 backdrop-blur-sm border-t border-emerald-100 px-6 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "How often to water?",
              "Best light conditions?",
              "Yellow leaves help",
              "When to repot?"
            ].map((quickText, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(quickText)}
                className="px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-xl text-sm transition-all duration-300 transform hover:scale-105"
              >
                {quickText}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;