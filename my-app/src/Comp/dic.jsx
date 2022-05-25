import useKeypress from "react-use-keypress";
import React from "react";
import { Transition } from "@headlessui/react";
import "flowbite";
import { useState, useEffect, useRef, Fragment } from "react";
import Icon from "../icon.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon, PhoneOutgoingIcon } from "@heroicons/react/solid";
const AutoshipImg = Icon;
const userImg =
  "https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Time = () => {};

const axios = require("axios");

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="">
      {messages.map((message) => (
        <div>
          <span className="text-lg">{message}</span>
          <br></br>
          <br></br>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

const Dictaphone = () => {
  useKeypress("Enter", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      resetTranscript();
      setInputText("");
      addMessages();
      makeGetRequest();
    }
  });

  let content2 =
    "Your name is Automat Express. You are the mind of an autonomous ship sailing at sea. You are meeting my ship which I am steering. I am on your starboard side. To avoid collision, you have decided to let me go first by slowing down.\n\nYou: Automat Express, come in.\nAutomat Express: This is Automat Express. I'm receiving you.";
  let content =
    "The following is a conversation with ship captain over VHF radio. The captain is serious, and intelligent. The captain's ship's name is Automat Express.\nName: Automat Express\nDestination: Rotterdam, The Netherlands.\nArrival time: Tuesday, 27th of April at 12.15.\nIMO number: 2182901\n\nMy ship on the captain's starboard side. The captain's ship is on collision course. The captain's ship is turning 250 degrees west. The captain intends to slow down and navigate behind it to avoid collision.  \n\nHuman: Automat Express. This is Pearl Seaways.\nAI: Automat Express here. What can help you with?  \nHuman: Where are you headed?  \nAI: I'm headed to Rotterdam, The Netherlands.  \n Human: When will you arrive?  \nAI: I'll be arriving on Tuesday, 27th of April at 12.15\n Human: What is your IMO number?\nAI: My IMO number is 2182901.\n Human: What is your intention?\nAI: I intend to slow down and navigate behind your ship to avoid collision.Human: What are you doing?\nAI: I am turning west. 250 degrees. ";
  let testOpenAIdata = {
    id: "cmpl-5AbWPFQDkUyS6x9Hkj3P1ck8W6ydt",
    object: "text_completion",
    created: 1653209197,
    model: "text-davinci-002",
    choices: [
      {
        text: "Automat Express: Test.", //slett dette
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
  };
  const [messages2, setMessages2] = useState([]); ///here is the test message from Open AI

  //const [messages, setMessages] = useState([]);
  const logMessages = () => {
    console.log("MESSAGES2 OBJECT: ");
    console.log(messages2);
    console.log("MESSAGES WITH CONTENT: ");
    let messages2fixed = messages2.join().replace(",", "\n");
    console.log(content + messages2fixed);
    content = content + messages2fixed;
    console.log("TO OPEN API: ");
    console.log(content);
  };
  const addMessages = () => {
    if (inputText) {
      setMessages2((m) => [...m, "\nYou: " + inputText]);
    }

    console.log(messages2);
    console.log(content + messages2.toString());
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (transcript !== "" && !listening) {
    resetTranscript();
  }
  const [inputText, setInputText] = useState("");
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  async function makeGetRequest() {
    if (inputText) {
      let header = {
        headers: {
          Authorization: `Bearer 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`,
        },
      };

      let messages2fixed = messages2.join().replaceAll(",", "\n");
      console.log(content + messages2fixed);
      content = content + messages2fixed;

      let payload = {
        prompt: content + "\nYou: " + inputText + "\nAutomat Express: ",
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: ["You:", " Automat Express:"],
      };

      let res = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-002/completions",
        payload,
        header
      );

      let OpenAIdata = res.data;
      //remove /n
      let StringOpenAIdata = OpenAIdata.choices[0].text.replace("\n\n", "");
      console.log("NEW REQUEST TO OPEN AI API");
      console.log(content + "\nYou: " + inputText + "\nAutomat Express: ");
      console.log("ANSWER FROM OPEN AI API");
      console.log(StringOpenAIdata);
      setMessages2((m) => [...m, "Automat Express: " + StringOpenAIdata]);
    } else console.log("Not allowed to send request without content");
  }

  return (
    <div className="flex-1  justify-between flex flex-col h-full py-6">
      <div>
        <div className="flex items-center justify-between space-x-2">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute text-green-500 right-0 bottom-0">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>

              <img
                src={AutoshipImg}
                alt=""
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full"
              />
            </div>
            <div className="ml-8 flex flex-col leading-tight">
              <div className="text-l mt-1 flex items-start">
                <p className="text-gray-700 mr-3">Automat Express (MASS)</p>
              </div>
              <div className="text-l mt-1 flex items-start">
                <p className="text-sm text-gray-600">IMO 2108198</p>
              </div>
            </div>
          </div>
          <div className="space-x-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-none border h-10 w-10 transition duration-100 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-none border h-10 w-10 transition duration-100 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 h-full">
        <div className=" flex flex-col overflow-scroll overflow-x-hidden  ">
          <Messages messages={messages2} />
        </div>
      </div>
      <div>
        <div className="mb-2 italic text-gray-500 flex">
          <div>
            {listening ? (
              <div className="mb-4">
                <span className="text-red-500 absolute ">
                  <svg width="20" height="20">
                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                  </svg>
                </span>
                <span className="animate-ping text-red-500 absolute ">
                  <svg width="20" height="20">
                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                  </svg>
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="ml-6">{transcript}</div>
        </div>
        <div className="relative flex space-x-1  justify-between">
          <div className="w-full">
            <textarea
              id="inputMessage"
              type="text"
              placeholder="Write a message ... "
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="border-none py-3 resize-none h-full w-full overflow-visible focus:outline-none focus:placeholder-gray-400 text-gray-900 placeholder-gray-600 px-4 bg-gray-200 "
            ></textarea>
          </div>
          <div className="h-full items-end inset-y-0 flex">
            {inputText ? (
              <button
                type="button"
                className="inline-flex items-end justify-center rounded-md-none px-4 py-8 transition duration-100 ease-in-out text-white bg-neutral-600 hover:bg-neutral-400 focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  resetTranscript();
                  setInputText("");

                  addMessages();
                  makeGetRequest(); //REQUEST REQUEST
                }}
              >
                <span className="font-semibold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            ) : (
              <button
                disabled
                type="button"
                className=" inline-flex items-end justify-center rounded-md-none px-4 py-8 transition duration-100 ease-in-out text-white bg-neutral-300  focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  resetTranscript();
                  setInputText("");

                  addMessages();
                  makeGetRequest(); //REQUEST REQUEST
                  //update content string
                }}
              >
                <span className="font-semibold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
        <button
          type="button"
          className="inline-flex 
          w-full mt-4 items-center justify-center rounded-none px-4 py-3
           active:bg-red-500 focus:ring focus:ring-red-300 transition duration-100 ease-in-out text-white bg-neutral-600 hover:bg-neutral-400 focus:outline-none"
          onMouseDown={() => {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
          }}
          onMouseUp={() => {
            SpeechRecognition.stopListening();
            setInputText(transcript);
            resetTranscript();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            ></path>
          </svg>
          <span className="font-semibold">
            {listening ? "Listening . . . " : "Press to talk"}
          </span>
        </button>
      </div>
    </div>
  );
};
export default Dictaphone;

/*
<div>
          <p>Microphone: {listening ? "on" : "off"}</p>
          <p>Message: {transcript}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>*/
