import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: "Will I receive lifetime access to the courses?",
      answer:
        "Yes, once you enroll in a course, you have lifetime access to its content and future updates.",
    },
    {
      question: "Can I use the materials for community teaching?",
      answer:
        "Absolutely! Our resources are designed to be shared and taught in community and group settings.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You'll receive a tracking link via email once your order has been shipped.",
    },
    {
      question: "Is there a free trial for the courses?",
      answer:
        "Yes, many of our courses offer a free preview or trial period to help you decide.",
    },
    {
      question: "Who can benefit from these courses?",
      answer:
        "Our courses are suitable for beginners, students, educators, and lifelong learners.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email or live chat on the website anytime.",
    },
  ];

  return (
    <section className="py-16 px-4 ">
      <h2 className="text-4xl font-bold text-center mb-2">Frequently Asked Questions</h2>
      <p className="text-gray-500 text-center mb-12">
        If you have any further questions, please contact us.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm transition hover:shadow-md"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{item.question}</span>
              <span
                className={`text-2xl text-[#009688] transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Answer block */}
            <div
              className={`transition-all duration-500 overflow-hidden px-5 ${
                activeIndex === index ? "max-h-[500px] py-4" : "max-h-0 py-0"
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
