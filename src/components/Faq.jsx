// src/pages/Faq.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is this platform about?",
    answer: "We offer a reliable space for students to buy, sell, and rent products such as PGs, books, cycles, and more within their college network.",
  },
  {
    question: "How do I list an item?",
    answer: "After logging in, go to the 'Sell' or 'Post Ad' section, fill in the item details, and submit. Your listing will be live after approval.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes! Browsing and listing regular products is completely free. Special promotion features may have additional costs.",
  },
  {
    question: "How do I contact a seller?",
    answer: "Click on the product you're interested in, and you will find the seller’s contact or message button on the product detail page.",
  },
  {
    question: "How do I become a partner?",
    answer: "You can go to the 'Become a Partner' page from the footer or navigation menu and fill out the form to collaborate with us.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-800 font-medium focus:outline-none hover:bg-gray-100 rounded-t-xl"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
