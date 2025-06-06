import React, { useState } from "react";

// Components
import TabHeading from "../Common/TabHeading";
import SmButton from "../Common/SmButton";

// Icons
import { ChevronsUpDown, Pencil, ChevronDown } from "lucide-react";

// Demo Faqs to show user how tey looks
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

// Faq Cards for ui
const FaqCrad = ({
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
    className={`w-[380px] h-fit rounded-[8px] overflow-hidden relative p-4 ${
      isActive || inEditMode
        ? "bg-[#EEEBFA]"
        : "bg-transparent hover:bg-[#EEEBFA] transition-colors duration-300"
    }`}
  >
    {/* Title  */}
    {!inEditMode && (
      <div className="w-full h-fit flex justify-between items-center">
        {/* Slider and Title of question  */}
        <div className="w-fit h-fit flex justify-center items-center gap-4">
          <ChevronsUpDown
            color="#5C5C7A"
            size={24}
            className="cursor-s-resize"
          />
          <span className="inter_med text-[14px] text-[#0D0D0D]">{title}</span>
        </div>

        {/* Pencil and Dropdown */}
        <div className="w-fit h-fit flex justify-center items-center gap-2">
          <button
            onClick={onClickEdit}
            className="w-fit h-fit p-2 rounded-full bg-white cursor-pointer"
          >
            <Pencil color="#5C5C7A" size={20} />
          </button>

          <button
            onClick={onClick}
            className="w-fit h-fit p-2 rounded-full bg-white cursor-pointer"
          >
            <ChevronDown color="#5C5C7A" size={20} />
          </button>
        </div>
      </div>
    )}

    {/* Answear  */}
    {isActive && !inEditMode && (
      <p className="inter_med text-[14px] text-[#5C5C7A] mt-4">{description}</p>
    )}

    {/* Editing Part  */}
    {inEditMode && (
      <div className="w-full h-fit relative">
        <div className="w-full h-fit flex justify-between items-center gap-8">
          <input
            onChange={onQuestionInputChange}
            className="inter_reg w-full h-fit bg-white text-[14px] text-[#0D0D0D] placeholder:text-[#222222] border-2 border-black focus:outline-none rounded-[8px] px-2 py-2"
            type="text"
            name="question"
            value={questionInputValue ? questionInputValue : title}
            placeholder="Question"
          />
          {/* Add Faqs Button  */}
          <SmButton onClick={onSaveFaq} title={"Save"} />
        </div>

        <textarea
          onChange={onAnswerInputChange}
          className="inter_reg w-full h-fit bg-white text-[14px] text-[#5C5C7A] placeholder:text-[#5C5C7A] border-2 border-black focus:outline-none rounded-[8px] resize-none mt-4 px-2 py-2"
          rows={4}
          name="answer"
          value={answerInputValue ? answerInputValue : description}
          placeholder="Answer"
        ></textarea>
      </div>
    )}
  </div>
);

function Faq() {
  const [faqs, setFaqs] = useState(demoFaqs); // Initial FAQs data
  const [activeFaq, setActiveFaq] = useState(null); // Active FAQ index
  const [activeEditFaq, setActiveEditFaq] = useState(null); // Active FAQ index in edit mode

  // State to hold the FAQ data for editing
  const [faqData, setFaqData] = useState({ question: "", answer: "" });

  // Hndle the chnages of input and store values to faqData
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFaqData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Function to add a new FAQ
  const AddFaq = () => {
    ResetFaqData(); // Resets the faqData if there is any for making new faq
    setActiveFaq(faqs.length); // Set the newly added FAQ as active
    setActiveEditFaq(faqs.length); // Set the newly added FAQ as in edit mode
    setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  };

  // Function to update the FAQ data
  const updateFaq = (index) => {
    setFaqs((prev) => {
      const faqsCopy = [...prev]; // Create a copy of the current FAQs
      faqsCopy[index] = faqData; // Update the specific FAQ with the new data
      setFaqs(faqsCopy); // Set the updated FAQs
      ResetFaqData(); // Reset the faqData state
      setActiveEditFaq(null);
    });
  };

  // Function to reset the faqData state
  const ResetFaqData = () => {
    setFaqData({ question: "", answer: "" });
  };
  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start gap-10 overflow-hidden relative pb-20">
      {/* Heading and Save Button  */}
      <div className="w-[380px] h-fit flex justify-start items-center gap-5">
        {/* Headings */}
        <TabHeading title={"FAQs Section"} />

        {/* Save Button  */}
        <SmButton title={"Save"} />
      </div>

      {/* Faqs  */}
      <div className="w-fit h-fit flex flex-col justify-center items-start gap-4">
        {faqs &&
          faqs.length > 0 &&
          faqs.map(({ question, answer }, index) => (
            <FaqCrad
              key={index}
              onClick={() => {
                setActiveFaq(activeFaq === index ? null : index);
              }}
              onClickEdit={() => {
                setActiveFaq(null);

                // Setting up the faqdata when edit mode is open for further updation
                setFaqData({
                  question: faqs[index].question,
                  answer: faqs[index].answer,
                });

                setActiveEditFaq(activeEditFaq === index ? null : index);
              }}
              title={question}
              description={answer}
              isActive={activeFaq === index}
              inEditMode={activeEditFaq === index}
              onQuestionInputChange={handleChangeInput}
              onAnswerInputChange={handleChangeInput}
              questionInputValue={faqData.question}
              answerInputValue={faqData.answer}
              onSaveFaq={() => updateFaq(index)}
            />
          ))}

        {/* Add Faqs Button  */}
        <SmButton title={"Add FAQs"} onClick={AddFaq} />
      </div>
    </div>
  );
}

export default Faq;
