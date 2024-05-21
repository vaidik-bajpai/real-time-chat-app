import { useEffect, useState } from 'react'
import './App.css'
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'
import Header from './components/Header'
import {connect, sendMsg} from "./api"

const App = () => {
  const [chatHistory, setChatHistory] = useState<any[]>([]);

  useEffect(() => {
    const handleMessage = (msg: MessageEvent) => {
      console.log("New Message", msg);
      try {
        const parsedMessage = JSON.parse(msg.data); // Parse the message data
        setChatHistory(prevChatHistory => [...prevChatHistory, parsedMessage]);
      } catch (error) {
        console.error("Error parsing message data", error);
      }
    };

    connect(handleMessage);
  }, []);
  
  const send = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      const input = event.target as HTMLInputElement;
      sendMsg(input.value);
      input.value = "";
    }
  };

  return (
    <div className="App">
      <Header headerText='WhatsApp'/>
      <ChatHistory chatMessages={chatHistory} />
      <div className='px-6'>
        <ChatInput send={send} />
      </div>
    </div>
  );
};

export default App;
