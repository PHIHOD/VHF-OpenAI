import logo from "./logo.svg";
import "./App.css";
import Icon from "./icon.png";
import Logo from "./Flagship.svg";

const AutoshipImg = Icon;
const userImg =
  "https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";

<div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
  <div className="flex sm:items-center justify-between p-3 border-b-2 border-gray-200">
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
          className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
        />
      </div>
      <div className="ml-8 flex flex-col leading-tight">
        <div className="text-2xl mt-1 flex items-start">
          <p className="text-gray-700 mr-3">Autoship (MASS)</p>
        </div>
        <div className="text-2xl mt-1 flex items-start">
          <p className="text-lg text-gray-600">IMO 2108290198</p>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-none border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
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
        className="inline-flex items-center justify-center rounded-none border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
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
  <div
    id="messages"
    className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-neutral scrollbar-thumb-rounded scrollbar-track-neutral-lighter scrollbar-w-2 scrolling-touch"
  >
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-none inline-block rounded-bl-none bg-gray-300 text-gray-600">
              Hello, this is <span className="font-medium">Autoship</span>. I am
              an autonomous vessel. What can I help you with?
            </span>
          </div>
        </div>
        <img
          src={AutoshipImg}
          alt="My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      </div>
    </div>
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
              Hello, Autoship. What is your destination?
            </span>
          </div>
        </div>
        <img
          src={userImg}
          alt="My profile"
          className="w-6 h-6 rounded-full order-2"
        />
      </div>
    </div>
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-none inline-block bg-gray-300 text-gray-600">
              I am headed for{" "}
              <span className="font-medium">Rotterdam, The Netherlands</span>.
              I'll be arriving on Tuesday,{" "}
              <span className="font-medium">27th of April</span> at 12.15 .
            </span>
          </div>
        </div>
        <img
          src={AutoshipImg}
          alt="My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      </div>
    </div>
  </div>
  <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
    <div className="relative flex">
      <span className="absolute inset-y-0 flex items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            ></path>
          </svg>
        </button>
      </span>
      <input
        type="text"
        placeholder="Write your message ..."
        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
      />
      <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            ></path>
          </svg>
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-none px-4 py-3 transition duration-500 ease-in-out text-white bg-neutral-600 hover:bg-neutral-400 focus:outline-none"
        >
          <span className="font-semibold">Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 ml-2 transform rotate-90"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>;

<div
  id="messages"
  className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-neutral scrollbar-thumb-rounded scrollbar-track-neutral-lighter scrollbar-w-2 scrolling-touch"
>
  <div className="chat-message">
    <div className="flex items-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-2 items-start">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-bl-none bg-gray-300 text-gray-600">
            Hello, this is <span className="font-medium">Autoship</span>. I am
            an autonomous vessel. What can I help you with?
          </span>
        </div>
      </div>
      <img
        src={AutoshipImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-1"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
            Hello, Autoship. What is your destination?
          </span>
        </div>
      </div>
      <img
        src={userImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-2"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-2 items-start">
        <div>
          <span className="px-4 py-2 rounded-none inline-block bg-gray-300 text-gray-600">
            I am headed for{" "}
            <span className="font-medium">Rotterdam, The Netherlands</span>.
            I'll be arriving on Tuesday,{" "}
            <span className="font-medium">27th of April</span> at 12.15 .
          </span>
        </div>
      </div>
      <img
        src={AutoshipImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-1"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
            Hello, Autoship. What is your destination?
          </span>
        </div>
      </div>
      <img
        src={userImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-2"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
            Hello, Autoship. What is your destination?
          </span>
        </div>
      </div>
      <img
        src={userImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-2"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
            Hello, Autoship. What is your destination?
          </span>
        </div>
      </div>
      <img
        src={userImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-2"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
            Hello, Autoship. What is your destination?
          </span>
        </div>
      </div>
      <img
        src={userImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-2"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
            Hello, Autoship. What is your destination?
          </span>
        </div>
      </div>
      <img
        src={userImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-2"
      />
    </div>
  </div>
  <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-none inline-block rounded-br-none bg-neutral-600 text-white ">
            Hello, Autoship. What is your destination?
          </span>
        </div>
      </div>
      <img
        src={userImg}
        alt="My profile"
        className="w-6 h-6 rounded-full order-2"
      />
    </div>
  </div>
</div>;

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
</button>;




<button className="addButton" onClick={addMessages}>
Add message
</button>
<button className="addButton" onClick={logMessages}>
|| console.log Messages
</button>