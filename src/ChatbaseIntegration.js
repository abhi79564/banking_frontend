import React, { useEffect } from 'react';

function ChatbaseIntegration() {
  useEffect(() => {
    // Create the Chatbase configuration
    const chatbaseConfig = {
      chatbotId: "GRIjqjgic5yCMPFnfOT5Z",
      domain: "www.chatbase.co"
    };

    // Create the Chatbase script element
    const chatbaseScript = document.createElement('script');
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.defer = true;

    // Add the script to the document head
    document.head.appendChild(chatbaseScript);

    return () => {
      // Remove the script from the document head when the component unmounts
      document.head.removeChild(chatbaseScript);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/GRIjqjgic5yCMPFnfOT5Z"
      width="100%"
      style={{ height: '100%', minHeight: '700px' }}
      frameBorder="0"
    ></iframe>
  );
}

export default ChatbaseIntegration;
