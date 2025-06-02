"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const defaultFaq = {
  heading: { title: "Frequently Asked Questions" },
  questions: [
    { title: "What is Muncho?", description: "Muncho is a CMS for restaurant websites." },
    { title: "How do I edit a section?", description: "Select a section from the sidebar and use the provided editor." },
    { title: "Can I add more questions?", description: "Yes, you can add, edit, or remove questions below." }
  ]
};

function FAQ() {
  const [faq, setFaq] = useState(defaultFaq);
  const [activeIndex, setActiveIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editQuestion, setEditQuestion] = useState({ title: "", description: "" });
  const [editIdx, setEditIdx] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditQuestion(faq.questions[idx]);
    setEditMode(true);
  };

  const handleSave = () => {
    const updated = { ...faq };
    updated.questions[editIdx] = editQuestion;
    setFaq(updated);
    setEditMode(false);
    setEditIdx(null);
  };

  const handleAdd = () => {
    setFaq({
      ...faq,
      questions: [...faq.questions, { title: "New Question", description: "Answer here..." }]
    });
  };

  const handleRemove = (idx) => {
    setFaq({
      ...faq,
      questions: faq.questions.filter((_, i) => i !== idx)
    });
    setActiveIndex(null);
  };

  return (
    <> 
    
    <div className="w-full h-fit">
        <h1 className="poppins_med text-[#201F33] text-[18px]">
         FAQ Section
        </h1>
       
      </div>
     <div className="lg:px-[110px] pt-[124px] px-1 text-center lg:text-left">


      <h1 className="capitalize font-semibold font-inter text-[24px] lg:text-[56px] leading-[28.8px] lg:leading-[62px] lg:tracking-[-2.8px] lg:font-medium pb-[64px] lg:w-full ">
        {faq.heading.title}
      </h1>
      <div className="mb-4 flex gap-2">
        <button className="bg-[#4B21E2] text-white px-4 py-2 rounded" onClick={handleAdd}>+ Add Question</button>
      </div>
      <div className="h-fit p-2 bg-[#ffffff]">
        {faq.questions.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${index !== faq.questions.length - 1 ? "border-b" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="p-3 font-inter font-medium px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all text-[20px] leading-[26px] tracking-[-0.5px] text-black flex gap-2 text-left"
              >
                {tab.title}
              </button>
              <div className="flex gap-2">
                <button className="text-xs text-blue-600 underline" onClick={e => { e.stopPropagation(); handleEdit(index); }}>Edit</button>
                <button className="text-xs text-red-500 underline" onClick={e => { e.stopPropagation(); handleRemove(index); }}>Delete</button>
              </div>
            </div>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.14 }}
                >
                  <p className="text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]">
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      {editMode && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Question</h2>
            <input
              className="border px-2 py-1 w-full mb-2"
              value={editQuestion.title}
              onChange={e => setEditQuestion({ ...editQuestion, title: e.target.value })}
              placeholder="Question Title"
            />
            <textarea
              className="border px-2 py-1 w-full mb-2"
              value={editQuestion.description}
              onChange={e => setEditQuestion({ ...editQuestion, description: e.target.value })}
              placeholder="Answer"
              rows={4}
            />
            <div className="flex gap-2 justify-end mt-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={handleSave}>Save</button>
              <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  
  );
}

export default FAQ;
