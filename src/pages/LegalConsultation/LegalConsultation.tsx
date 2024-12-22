import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

interface Chat {
  side: "USER" | "AI";
  message: string;
}

const LegalConsultation: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChat, setIsChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Chat[]>([
    {
      side: "AI",
      message: "Hello! How can I help you today?",
    },
  ]);

  const sendHandler = () => {
    const message = inputRef.current!.value;
    if (message.trim() === "") {
      return;
    }
    if (!isChat) {
      setIsChat(true);
    }
    setChatMessages((prev) => [...prev, { side: "USER", message }]);
  };

  const suggestedPromptHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const buttonText = button.innerText;
    inputRef.current!.value = buttonText;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 h-screen">
      {!isChat && (
        <div className="flex flex-col items-center mt-8">
          {/* Main Heading Section */}
          <div className="text-center mt-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Get Instant Legal Help with E-Wakeel's AI-Powered Chatbot
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have a legal question? Our AI chatbot is here to provide quick and
              easy-to-understand legal advice. Ask your questions in English,
              Urdu, or Roman Urdu, and receive personalized guidance instantly.
            </p>
          </div>

          {/* How It Works Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-8 max-w-lg w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How it Works
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Ask Your Question:</span> Type
                your legal question or concern in the chatbox below.
              </li>
              <li>
                <span className="font-semibold">Receive Quick Answers:</span>{" "}
                Get simplified legal information, including laws, penalties, and
                required documents.
              </li>
              <li>
                <span className="font-semibold">Get Connected:</span> Need more
                help? Our chatbot can guide you to an advocate for expert
                advice.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Chat Section */}
      {chatMessages.length > 0 && isChat && (
        <div className="flex flex-col items-center mt-10 w-full max-w-[700px] h-[75%] overflow-y-auto">
          {chatMessages.map((chat, index) => (
            <div
              key={index}
              className={`${
                chat.side === "USER"
                  ? "self-start bg-blue-500"
                  : "self-end bg-green-500"
              } max-w-[80%] p-3 text-white rounded-lg my-2`}
            >
              {chat.message}
            </div>
          ))}
        </div>
      )}

      <div className="absolute md:bottom-4 bottom-0">
        {/* Example Questions Buttons */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-1">
          <button
            onClick={(e) => suggestedPromptHandler(e)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
          >
            How do I file a case?
          </button>
          <button
            onClick={(e) => suggestedPromptHandler(e)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
          >
            What are the penalties for theft?
          </button>
          <button
            onClick={(e) => suggestedPromptHandler(e)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
          >
            How can I hire a lawyer?
          </button>
        </div>

        {/* Chat Input Section */}
        <div className="w-full max-w-[700px] mt-4 relative">
          <input
            type="text"
            placeholder="Enter Message"
            ref={inputRef}
            className="w-80 md:w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          />
          <button
            onClick={sendHandler}
            className="absolute right-3 top-3 text-green-500 hover:text-green-600 transition"
          >
            <BsArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalConsultation;
