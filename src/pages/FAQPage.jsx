import React, { useState } from "react";

const faqLinks = {
  tracks:"/digipath-conference-tracks/",
  abstractSubmission: "/abstract-submission",
  schedule:"/digipath-event-schedule" ,
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is DIGIPATH-2026?",
    answer:
      "DIGIPATH-2026, officially titled the “Digital Pathology & AI Diagnostics Congress”, is a premier international conference organized by Helix Conferences. It brings together pathologists, AI researchers, clinicians, healthcare professionals, technology providers, and industry leaders to explore advancements in digital pathology, artificial intelligence, computational diagnostics, precision medicine, and clinical decision support systems.",
  },
  {
    question: "When and where will DIGIPATH-2026 take place?",
    answer:
      "DIGIPATH-2026 will take place in 2026. The exact dates and venue will be announced soon.",
  },
  {
    question: "What are the highlights of DIGIPATH-2026?",
    answer:
      "Keynote lectures, AI-driven diagnostic innovations, expert-led scientific sessions, clinical case studies, technology demonstrations, panel discussions, and global networking opportunities.",
  },
  {
    question: "What conference tracks are featured at DIGIPATH-2026?",
    answer: (
      <>
        You can explore the full list of tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          DIGIPATH-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products or explore sponsorship options?",
    answer: (
      <>
        To exhibit your products or discuss sponsorship opportunities, please
        contact our team at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract for DIGIPATH-2026?",
    answer: (
      <>
        You can submit your abstract{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive during the congress?",
    answer:
      "Registered participants will receive a digital congress kit including the agenda, speaker profiles, scientific sessions, and exhibitor information.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Oral presentations are typically 15–20 minutes long, including Q&A. Final presentation guidelines will be shared after abstract acceptance.",
  },
  {
    question: "Who will be attending DIGIPATH-2026?",
    answer:
      "Pathologists, oncologists, radiologists, AI and data science professionals, researchers, healthcare technology providers, regulatory experts, and academicians from around the world.",
  },
  {
    question: "How many people usually attend the congress?",
    answer:
      "DIGIPATH-2026 is expected to host 120+ international attendees, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I register for multiple speaking sessions?",
    answer:
      "Yes, speakers may submit multiple abstracts provided each submission covers a distinct topic.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available. Interested candidates should indicate their preference during abstract submission.",
  },
  {
    question: "What is expected of speakers?",
    answer:
      "Speakers are expected to deliver high-quality scientific presentations, share clinical or research insights, and actively engage with the audience.",
  },
  {
    question: "Is there a fee to participate as a speaker or attendee?",
    answer:
      "Yes, registration fees apply to all participants. Please visit the “Buy A Ticket” section on the website for detailed pricing information.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The detailed congress schedule will be released soon. You can view or
        download it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the session list before the event?",
    answer:
      "Yes, the complete scientific program, including session topics and speaker details, will be published prior to the congress dates.",
  },
  {
    question: "Can I purchase tickets in advance?",
    answer:
      "Yes, early registration is encouraged, as availability may be limited closer to the event.",
  },
  {
    question: "How can I get assistance with accommodation or travel?",
    answer: (
      <>
        For accommodation or travel-related assistance, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
