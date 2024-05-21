interface MessageProps {
    messageText: string,
}

const Message: React.FC<MessageProps> = ({messageText}) => {
    console.log(messageText)
    return (
        <div className="px-4 py-2 font-semibold bg-green-200 rounded">
            {messageText}
        </div>
    )   
}

export default Message