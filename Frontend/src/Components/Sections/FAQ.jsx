import React, { useState } from "react";

// Components
import TabHeading from "../Common/TabHeading";
import SmButton from "../Common/SmButton";

// Icons
import { ChevronsUpDown, Pencil, ChevronDown } from "lucide-react";

// Demo FAQs
const demoFaqs = [
  {
    question: "What are your opening hours?",
    answer:
      "We are open daily from 10:00 AM to 11:00 PM, including weekends and holidays.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes, we offer home delivery within a 5 km radius. You can place an order through our website or call us directly.",
  },
];

// FAQ Card Component
const FaqCard = ({
  title,
  description,
  isActive = false,
  inEditMode = false,
  onClick,
  onClickEdit,
  onQuestionInputChange,
  onAnswerInputChange,
  questionInputValue = "",
  answerInputValue = "",
  onSaveFaq,
}) => (
  <div
    className={`w-[380px] p-4 rounded-[8px] overflow-hidden ${
      isActive || inEditMode
        ? "bg-[#EEEBFA]"
        : "bg-transparent hover:bg-[#EEEBFA] transition-colors duration-300"
    }`}
  >
    {!inEditMode ? (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <ChevronsUpDown
            color="#5C5C7A"
            size={24}
            className="cursor-s-resize"
          />
          <span className="inter_med text-[14px] text-[#0D0D0D]">{title}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClickEdit}
            className="p-2 rounded-full bg-white cursor-pointer"
          >
            <Pencil color="#5C5C7A" size={20} />
          </button>
          <button
            onClick={onClick}
            className="p-2 rounded-full bg-white cursor-pointer"
          >
            <ChevronDown color="#5C5C7A" size={20} />
          </button>
        </div>
      </div>
    ) : (
      <div>
        <div className="flex gap-8">
          <input
            name="question"
            type="text"
            placeholder="Question"
            value={questionInputValue}
            onChange={onQuestionInputChange}
            className="inter_reg w-full bg-white text-[14px] text-[#0D0D0D] placeholder:text-[#222222] border-2 border-black rounded-[8px] px-2 py-2 focus:outline-none"
          />
          <SmButton onClick={onSaveFaq} title={"Save"} />
        </div>

        <textarea
          name="answer"
          rows={4}
          placeholder="Answer"
          value={answerInputValue}
          onChange={onAnswerInputChange}
          className="inter_reg w-full mt-4 bg-white text-[14px] text-[#5C5C7A] placeholder:text-[#5C5C7A] border-2 border-black rounded-[8px] px-2 py-2 resize-none focus:outline-none"
        />
      </div>
    )}

    {isActive && !inEditMode && (
      <p className="inter_med text-[14px] text-[#5C5C7A] mt-4">{description}</p>
    )}
  </div>
);

// Main FAQ Component
function Faq() {
  const [faqs, setFaqs] = useState(demoFaqs);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeEditFaq, setActiveEditFaq] = useState(null);
  const [faqData, setFaqData] = useState({ question: "", answer: "" });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFaqData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddFaq = () => {
    resetFaqData();
    const newIndex = faqs.length;
    setActiveFaq(newIndex);
    setActiveEditFaq(newIndex);
    setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  };

  const handleUpdateFaq = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index] = faqData;
    setFaqs(updatedFaqs);
    resetFaqData();
    setActiveEditFaq(null);
  };

  const resetFaqData = () => {
    setFaqData({ question: "", answer: "" });
  };

  return (
    <div className="w-full min-h-fit flex flex-col gap-10 pb-20">
      {/* Header */}
      <div className="w-[380px] flex items-center gap-5">
        <TabHeading title={"FAQs Section"} />
        <SmButton title={"Save"} />
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-4">
        {faqs.map(({ question, answer }, index) => (
          <FaqCard
            key={index}
            title={question}
            description={answer}
            isActive={activeFaq === index}
            inEditMode={activeEditFaq === index}
            questionInputValue={faqData.question}
            answerInputValue={faqData.answer}
            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            onClickEdit={() => {
              setActiveFaq(null);
              setActiveEditFaq(activeEditFaq === index ? null : index);
              setFaqData({ question, answer });
            }}
            onQuestionInputChange={handleChangeInput}
            onAnswerInputChange={handleChangeInput}
            onSaveFaq={() => handleUpdateFaq(index)}
          />
        ))}

        <SmButton title={"Add FAQs"} onClick={handleAddFaq} />
      </div>
    </div>
  );
}

export default Faq;
