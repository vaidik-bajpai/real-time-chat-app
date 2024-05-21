interface ChatInputProps {
    send: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const ChatInput: React.FC<ChatInputProps> = ({send}) => {
    return (
        <div >
            <input onKeyDown={send} type="text" placeholder="message" className="px-4 py-2 bg-gray-100 w-[100%] focus:text-lg focus:border-0"/>
        </div>
    )   
}

export default ChatInput