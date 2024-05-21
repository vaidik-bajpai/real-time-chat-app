import Message from "./Message"
import { v4 as uuidv4 } from 'uuid';

interface ChatHistoryProps {
    chatMessages: any
}

const ChatHistory: React.FC<ChatHistoryProps> = ({chatMessages}) => {
    return (
        <div className="flex flex-col gap-2 px-4 mb-5 bg-gray-100">
            <div className="font-medium text-2xl">Chat History</div>
            {chatMessages.map((item: any) => {
                return <Message messageText={item.body} key={uuidv4()}/>
            })}
        </div>
    )   
}

export default ChatHistory