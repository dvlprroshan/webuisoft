import React, { useState } from "react";
// import ChatBot from "react-simple-chatbot";
// import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fbee",
  fontFamily: "Roboto",
  headerBgColor: "linear-gradient(45deg, #4807fa, #ac4cfa)",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "linear-gradient(45deg, #ff303099, #ff7e3099)",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

function CustomChatbot(props) {
  const [isUpScrollVisible, setIsUpScrollVisible] = useState(false);

  typeof window === "undefined"
    ? ""
    : (() => {
        window.addEventListener("scroll", (e) => {
          let currentScollPos =
            document.documentElement.scrollTop || document.body.scrollTop;

          if (currentScollPos > 200) {
            setIsUpScrollVisible(true);
          } else {
            setIsUpScrollVisible(false);
          }
        });
      })();
  const steps = [
    {
      id: "1",
      message: "What's your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4",
    },
    {
      id: "4",
      message: "Hi how i can help you?",
      trigger: "5",
    },
    {
      id: "5",
      user: true,
      end: true,
    },
  ];
  return (
    <div className="chat-bot">
      {isUpScrollVisible ? (
        <div className="up-scroll" onClick={() => window.scroll(0, 0)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
            <defs />
            <path d="M476 229.3l-144-160a16 16 0 00-12-5.3h-96a16 16 0 00-11.9 26.7L346.5 240 212 389.3a16 16 0 0012 26.7h96c4.5 0 8.8-2 11.8-5.3l144-160a16 16 0 000-21.4z" />
            <path d="M268 229.3l-144-160a16 16 0 00-12-5.3H16A16 16 0 004.1 90.7L138.5 240 4 389.3a16 16 0 0012 26.7h96c4.5 0 8.8-2 11.8-5.3l144-160a16 16 0 000-21.4z" />
          </svg>
        </div>
      ) : (
        ""
      )}
      <div className="bot">
        {/* <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            headerTitle="WebUiSoft ChatBot"
            botAvatar="assets/images/robot-img-awatar.png"
            floating={true}
            placeholder="Type here..."
            // speechSynthesis={{ enable: true, lang: "en" }}
            enableSmoothScroll={true}
          />
        </ThemeProvider> */}
      </div>

      <style jsx>{`
        .chat-bot {
          position: fixed;
          width: 350px;
          right: 30px;
          z-index: 999999;
          bottom: 0;
        }
        .bot {
          height: 80vh;
          position: absolute;
          bottom: 0;
        }
        .up-scroll {
          position: absolute;
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #ff3030, #ff7e30);
          bottom: 100px;
          right: 5px;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          border-radius: 50%;
          cursor: pointer;
        }
        .up-scroll:hover {
          animation: upward 1s linear infinite;
        }
        @keyframes upward {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-20px);
          }
        }
        .up-scroll svg {
          fill: white;
          transform: scale(0.6) rotate(-90deg);
        }

        .toggle-bot:hover {
          transform: scale(1.2);
        }
        @keyframes natural-jumping {
          0% {
            transform: scale(1, 1) translateY(0);
          }
          10% {
            transform: scale(1.1, 0.9) translateY(0);
          }
          30% {
            transform: scale(0.9, 1.1) translateY(-40px);
          }
          50% {
            transform: scale(1.05, 0.95) translateY(0);
          }
          57% {
            transform: scale(1, 1) translateY(-4px);
            opacity: 0;
          }
          64% {
            transform: scale(1, 1) translateY(0);
            opacity: 1;
          }
          100% {
            transform: scale(1, 1) translateY(0);
            filter: hue-rotate(100deg);
          }
        }
      `}</style>
    </div>
  );
}
export default CustomChatbot;
