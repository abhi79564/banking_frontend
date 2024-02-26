import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatbotExpanded, setIsChatbotExpanded] = useState(false);
  const msgContainerRef = useRef(null);
  const [isBankingMode, setIsBankingMode] = useState(true); // Added a mode for banking or general queries

  const scrollToBottom = () => {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const toggleChatbot = () => {
    setIsChatbotExpanded(!isChatbotExpanded);
  };

  const closeChatbot = () => {
    setIsChatbotExpanded(false);
  };

  const handleToggleMode = () => {
    setIsBankingMode(!isBankingMode);
  };

  const handleSendMessage = async () => {
    const userMessage = input.toLowerCase();

    if (isBankingMode) {
        const predefinedQuestions = {
            // Greeting and General Inquiry
            "hello": "Hello! How can I assist you with your banking needs today?",
            "hi": "Hi there! What can I help you with regarding banking?",
            "what can you tell me about banking": "Banking is a financial system that offers various services like savings accounts, loans, credit cards, and more. How can I provide specific information on banking services?",
          
            // Account Setup
            "how do I open my bank account": "To open a bank account, visit your nearest branch or apply online. You will need valid ID and proof of address.",
            "how can I open my bank account": "To open a bank account, visit your nearest branch or apply online. You will need valid ID and proof of address.",
            "how to open a bank account": "To open a bank account, visit your nearest branch or apply online. You will need valid ID and proof of address.",
            "what documents are required to open a bank account": "Common documents for opening a bank account include a government-issued ID, proof of address, and Social Security number.",
            "can I open a joint bank account": "Yes, you can open a joint bank account with another person. Both account holders share access and responsibility.",
            "what is a certificate of deposit (CD)": "A CD is a savings account with a fixed term and interest rate. You earn more interest than a regular savings account but must leave the money untouched for the term.",
            "how to close a bank account": "To close a bank account, visit your bank branch or contact customer service. You may need to settle any outstanding balances.",
            "how to switch banks": "To switch banks, open a new account at your chosen bank, transfer funds, update automatic payments, and close your old account.",
            "how to open a business bank account": "To open a business bank account, provide your business documents, such as the EIN, and visit a bank branch or apply online.",
            "how to choose the right bank": "Select the right bank by considering factors like fees, branch locations, services offered, and customer reviews.",
            // Credit and Debit Cards
            "how to apply for a credit card": "You can apply for a credit card by visiting your bank's website or a local branch. Check eligibility and fill out an application.",
            "how to report a lost credit card": "Report a lost credit card immediately by calling your bank's customer service or using their online reporting tools.",
            "how to increase my credit limit": "To increase your credit card limit, contact your bank and provide reasons for the request. They may review your credit history.",
            "how to dispute a credit card charge": "To dispute a credit card charge, contact your bank and provide details of the disputed transaction. They will investigate.",
            "how to change my debit card PIN": "Change your debit card PIN by visiting an ATM or contacting your bank's customer service for guidance.",
            "how to activate a new credit card": "To activate a new credit card, follow the instructions provided with the card or call the activation phone number.",
            
            // Loans
            "how to apply for a personal loan": "To apply for a personal loan, contact your bank or visit their website. You'll need to provide financial information and credit history.",
            "what is a loan pre-approval": "Loan pre-approval is a preliminary evaluation of your creditworthiness. It helps determine how much you can borrow.",
            "how to refinance a loan": "To refinance a loan, contact your bank or another lender, compare rates, and apply for a new loan to pay off the old one.",
            "what is the difference between a fixed-rate and variable-rate loan": "A fixed-rate loan has a constant interest rate, while a variable-rate loan's interest rate can change over time.",
            "how to calculate loan interest": "You can calculate loan interest by using the loan amount, interest rate, and loan term. Online calculators can help with this.",
            "SBI education loan": "Certainly! State Bank of India (SBI) offers education loans to help students pursue their higher education. The interest rates for SBI education loans range from 8.15% to 11.15% per annum. There are no processing charges for loan amounts below Rs. 20 lakh. However, for loan amounts above Rs. 20 lakh, there is a processing fee of Rs. 10,000 (plus taxes).",

            // Online Banking
            "how to access online banking": "You can access online banking by logging in to your bank's website or mobile app. Use your account credentials.",
            "is online banking secure": "Online banking is secure with encryption and authentication measures. Protect your login credentials and use strong passwords.",
            "how to set up automatic bill payments": "Set up automatic bill payments by logging into your online banking and adding your bills and payment dates.",
            "can I deposit checks using a mobile app": "Yes, you can deposit checks using a mobile banking app by following the provided instructions and taking photos of the check.",
            
            // Investments
            "how to invest in stocks": "To invest in stocks, open a brokerage account, fund it, and start buying stocks. Research and consult with a financial advisor if needed.",
            "what is a mutual fund": "A mutual fund pools money from multiple investors to invest in stocks, bonds, or other securities. It offers diversification.",
            "how to buy government bonds": "You can buy government bonds through your bank, the U.S. Treasury's website, or a brokerage account.",
            "what is a financial advisor, and when should I consult one": "A financial advisor provides investment and financial planning advice. Consult one when you need professional guidance on your financial goals and investments.",
            
            // Security
            "how to protect my online banking account": "Protect your online banking account by using strong passwords, enabling two-factor authentication, and regularly monitoring your account for suspicious activity.",
            "what should I do in case of identity theft": "In case of identity theft, contact your bank, report the theft to authorities, and consider freezing your credit to prevent further damage.",
            
            // Fees
            "what are common banking fees to be aware of": "Common banking fees include ATM withdrawal fees, overdraft fees, maintenance fees for certain accounts, and wire transfer fees.",
            "how to avoid overdraft fees": "To avoid overdraft fees, monitor your account balance, set up account alerts, and consider opting out of overdraft protection.",
            "how to waive monthly maintenance fees": "You can often waive monthly maintenance fees by meeting certain account balance or transaction requirements. Check with your bank for details.",
            
            // International Banking
            "how to send money internationally": "To send money internationally, use services like wire transfers, online money transfer platforms, or international drafts.",
            "what is a SWIFT code": "A SWIFT code is a unique identifier for a specific bank in an international financial network. It's used for international wire transfers.",
            "how to exchange foreign currency": "You can exchange foreign currency at your bank, currency exchange offices, or airports. Rates may vary, so compare options.",
            
            // Mobile Payments
            "how to use mobile payment apps": "To use mobile payment apps, download the app, link your bank account or cards, and follow the app's instructions to make payments.",
            "what is NFC and how does it work for mobile payments": "NFC (Near Field Communication) is a technology that enables contactless communication between devices, allowing secure mobile payments.",
            "is it safe to use mobile payment apps": "Mobile payment apps are generally safe, but it's essential to use security features like fingerprint recognition and PIN codes.",
            
            // Business Banking
            "how to open a business credit card": "To open a business credit card, provide your business information and financials to the bank. You can apply online or in person.",
            "how to apply for a business loan": "To apply for a business loan, submit your business plan, financial statements, and loan application to your bank or lender.",
            "what is merchant services for businesses": "Merchant services include payment processing solutions for businesses, such as accepting credit card payments in-store and online.",
            "how to set up a business savings account": "Set up a business savings account by visiting your bank, providing business documents, and depositing funds.",
            "how to manage business expenses efficiently": "Manage business expenses efficiently by using business credit cards, accounting software, and monitoring spending.",
            
            // Mortgages
            "how to apply for a mortgage": "To apply for a mortgage, gather your financial documents, complete an application, and undergo a credit check and home appraisal.",
            "what is a down payment and how much is required for a mortgage": "A down payment is a portion of the home's purchase price. The required amount varies but is typically around 20%.",
            "how to qualify for a mortgage loan": "To qualify for a mortgage, demonstrate good credit, stable income, and a low debt-to-income ratio.",
            "how to refinance a mortgage": "Refinance a mortgage by applying for a new loan with better terms to replace your existing mortgage.",
            
            // Savings and Investment Accounts
            "how to open a retirement savings account": "To open a retirement savings account, like an IRA or 401(k), contact your bank or employer to set up the account.",
            "what is a 401(k) plan": "A 401(k) is an employer-sponsored retirement plan that allows employees to contribute a portion of their salary for retirement savings.",
            "how to start investing with a small amount of money": "Start investing with a small amount of money by using robo-advisors, micro-investment apps, or low-cost index funds.",
            "how to set up an emergency fund": "Set up an emergency fund by opening a separate savings account and regularly depositing money into it.",
            
            // Taxes and Banking
            "how to receive a tax refund by direct deposit": "To receive a tax refund by direct deposit, provide your bank account and routing number on your tax return.",
            "how to pay taxes online": "Pay taxes online by using the IRS's electronic payment options, including Direct Pay and EFTPS.",
            
            // Banking for Students
            "how to open a student bank account": "To open a student bank account, provide your student ID and proof of enrollment. These accounts often have special benefits for students.",
            "how to build credit as a student": "Build credit as a student by using a student credit card responsibly and paying bills on time.",
            
            // Mobile and Internet Banking Security
            "how to protect my mobile banking app from hackers": "Protect your mobile banking app by using a secure PIN, enabling biometric authentication, and keeping your device's operating system up to date.",
            "what to do if I suspect my online banking has been hacked": "If you suspect your online banking has been hacked, contact your bank immediately and change your login credentials.",
            
            // Banking for Seniors
            "how to choose the right retirement account": "Choose the right retirement account based on your retirement goals and financial situation. Options include IRAs and 401(k)s.",
            "how to protect against financial scams for seniors": "Protect against financial scams by being cautious about unsolicited offers, monitoring accounts, and educating yourself about common scams.",
          };
          

      let response = "Sorry, I cannot answer that question.";

      if (predefinedQuestions[userMessage]) {
        response = predefinedQuestions[userMessage];
      }

      setMessages([
        ...messages,
        { text: input, user: true },
        { text: response, user: false },
      ]);
    } else {
      try {
        const apiKey = "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"; 
        const response = await fetch(`https://api.openai.com/v1/chat/completions?query=${userMessage}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMessages([
            ...messages,
            { text: input, user: true },
            { text: data.answer, user: false },
          ]);
        } else {
            
          // Handle API request error
          setMessages([
            ...messages,
            { text: input, user: true },
            { text: "Sorry, I couldn't find an answer to your question.", user: false },
          ]);
        }
      } catch (error) {
        console.error("API request error:", error);
      }
    }

    setInput("");
  };

  return (
    <div className={`chatbot-container ${isChatbotExpanded ? "expanded" : ""}  `}>
      {isChatbotExpanded ? (
        <button className="close-button" onClick={closeChatbot}>
          &#10006;
        </button>
      ) : (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          Bot
        </button>
      )}
      {isChatbotExpanded && (
        <>
          <div className="chatbot-title">Vox Bot</div>
          <div className="chatbot-messages" ref={msgContainerRef}>
            {messages.map((message, index) => (
              <div key={index} className={` ${message.user ? "user" : "bot"}`}>
                <div
                  className={`chatbot-message ${
                    message.user ? "senderMe" : "senderNotMe"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form className="chatbot-input" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={input}
              onChange={handleInput}
              placeholder="Type your question..."
            />
            <button onClick={handleSendMessage}>Go</button>
            <button onClick={handleToggleMode}>
              {isBankingMode ? "Switch to General" : "Switch to Banking"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Chatbot;
