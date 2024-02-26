import React, { useState, useEffect, useRef } from 'react';
import './YourComponent.css'; 
import web1 from '../src/images/Online - Copy - Copy.jpg'

let web12="https://img.freepik.com/premium-vector/ai-chatbot-seamless-pattern-design-artificial-intelligence-repeat-background-template-wrapping_607579-515.jpg?w=2000";
const YourComponent = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const chatboxRef = useRef(null);

  const API_KEY = "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";

  const createChatLi = (message, className) => {
    return (
      <li className={`chat ${className}`}>
        {className === "outgoing" ? (
          <p>{message}</p>
        ) : (
          <>
            <i className="material-symbols-outlined">smart_toy</i>
            <p>{message}</p>
          </>
        )}
      </li>
    );
  };

  const generateResponse = async (userMessage) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
  
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo-0613",
          messages: [
            {
              role: "system",
              content: "You are ChatGPT, a helpful assistant.",
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
        }),
      };
  
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
  
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching response: ", error);
      return "Oops! Something went wrong...";
    }
  };
  

  const handleChat = async () => {
    if (!userMessage) return;

    // Update user message first
    setChatMessages([...chatMessages, { text: userMessage, type: "outgoing" }]);
    setUserMessage('');

    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

    // Generate AI response
    const response = await generateResponse(userMessage);

    // Update AI response
    setChatMessages([...chatMessages, { text: response, type: "incoming" }]);
  };

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <div className="show-chatbot">
      <div className="logo" style={{backgroundImage: `url(${web12})` }}></div>
      <button className="chatbot-toggler">
        <i className="material-icons">mode_comment</i>
        <i className="material-icons">close</i>
      </button>
      <div className="chatbot text-center mx-auto d-block">
        <header className="text-center mx-auto d-block">
          <h2>Our Bot</h2>
          <i className="material-symbols-outlined">close</i>
        </header>
        <ul className="chatbox text-center mx-auto d-block" ref={chatboxRef}>
          {chatMessages.map((message, index) => (
            <li key={index} className={`chat ${message.type}`}>
              {message.type === "outgoing" ? (
                <p>{message.text}</p>
              ) : (
                <>
                  <i className="material-symbols-outlined">smart_toy</i>
                  <p>{message.text}</p>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="chat-input">
          <textarea
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Enter a message...."
            required
          ></textarea>
          <i id="send-btn" className="material-symbols-outlined" onClick={handleChat}>send</i>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
