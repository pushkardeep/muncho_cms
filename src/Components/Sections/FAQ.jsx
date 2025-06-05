"use client";
import React from "react";
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
  const faq = defaultFaq;
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
    </div>
    </>
  
  );
}

export default FAQ;
