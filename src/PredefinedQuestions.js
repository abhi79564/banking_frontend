// PredefinedQuestions.js
import React from 'react';

const predefinedBankingQuestions = {
  'how to open a bank account': 'To open a bank account, you need to visit your nearest branch with the required documents...',
  'how to transfer money': 'You can transfer money through online banking, mobile apps, or by visiting your bank...',
  // Add more predefined questions and answers
};

const PredefinedQuestions = ({ userMessage }) => {
  const normalizedUserMessage = userMessage.toLowerCase();
  const response = predefinedBankingQuestions[normalizedUserMessage];

  if (response) {
    return response;
  }

  return null;
};

export default PredefinedQuestions;
