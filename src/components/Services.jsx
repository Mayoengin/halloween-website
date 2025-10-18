import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, check } from "../assets";
import { productNameServices } from "../constants";
import { Gradient } from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleGeneratingClick = () => {
    setIsChatActive(true);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const userMessage = inputMessage;
      setMessages([...messages, { text: userMessage, sender: "user" }]);
      setInputMessage("");

      try {
        // Send message to n8n webhook
        const response = await fetch('http://localhost:5678/webhook-test/f44cc138-e3e8-409d-9c18-006af3c38e9d', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessage,
            timestamp: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Add AI response to messages
        setMessages(prev => [...prev, {
          text: data.message || data.response || data.output || JSON.stringify(data),
          sender: "ai"
        }]);
      } catch (error) {
        console.error('Error sending message to n8n:', error);
        setMessages(prev => [...prev, {
          text: `Error: ${error.message}. Check browser console for details.`,
          sender: "ai"
        }]);
      }
    }
  };

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Product Name unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* Background Image - Blurs when chat is active */}
            <div
              className={`absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto transition-all duration-700
                ${isChatActive ? 'blur-md opacity-30' : 'blur-none opacity-100'}`}
            >
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            {/* Original Content - Blurs when chat is active */}
            <div
              className={`relative z-1 max-w-[17rem] ml-auto transition-all duration-700
                ${isChatActive ? 'blur-md opacity-30 pointer-events-none' : 'blur-none opacity-100'}`}
            >
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Product Name unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {productNameServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chat Interface - Overlays on top when active */}
            {isChatActive && (
              <div className="absolute inset-0 z-10 flex flex-col p-8 lg:p-20 animate-fade-in">
                <div className="flex-1 overflow-y-auto mb-6 space-y-4 flex flex-col">
                  {messages.length === 0 ? (
                    <div className="text-center text-n-1 flex flex-col items-center justify-center flex-1">
                      <h4 className="h4 mb-2">Start a conversation</h4>
                      <p className="body-2">Ask me anything!</p>
                    </div>
                  ) : (
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-4 rounded-lg max-w-[70%] ${
                            message.sender === "user"
                              ? "bg-color-1"
                              : "bg-n-7/90 backdrop-blur-sm"
                          }`}
                        >
                          <p className="body-2">{message.text}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={handleSendMessage} className="relative flex-shrink-0">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-6 py-4 pr-28 bg-n-7/90 backdrop-blur-sm border border-n-1/10 rounded-xl text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-color-1 rounded-lg hover:bg-color-1/80 transition-colors font-semibold"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}

            {/* Generating Component - Only show when chat is not active */}
            {!isChatActive && (
              <Generating
                className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"
                onClick={handleGeneratingClick}
              />
            )}
          </div>


          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
