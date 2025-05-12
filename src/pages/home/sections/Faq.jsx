import React, { useState } from "react";

const FAQ = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);

  const toggleAnswer = (index) => {
    setActiveAnswer((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: "What is your return policy?",
      answer:
        "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
    },
    {
      question: "Can I use the materials for community teaching?",
      answer:
        "Yes, we ship internationally. Shipping fees vary based on the destination and size of the order.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order through the tracking link sent to your email once your order is shipped.",
    },
    {
      question: "Can I use the materials for community teaching?",
      answer:
        "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "Is there a free trial for the courses?",
      answer:
        "You can reach us through our contact form or by calling our customer service number listed on the contact page.",
    },
    {
      question: "Who can benefit from these courses?",
      answer:
        "Unfortunately, once an order is placed, it cannot be changed. However, you can cancel your order within 24 hours for a full refund.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-2">Frequently Asked Questions</h2>
      <p className="text-[#8f8f8f] font-bold text-center mb-12">If you have any further questions, please contact us </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {questions.map((item, index) => (
          <div className="border-2 relative border-gray-600 p-4 rounded-md" key={index}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-xl font-semibold text-gray-800">
                {item.question}
              </span>
              <span className="text-2xl text-gray-600">
                {activeAnswer === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`absolute left-0 top-[110%] z-10 p-5 bg-white border-2 border-[#009688] text-gray-600 rounded-md transition-all duration-500 w-full ${
                activeAnswer === index ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
