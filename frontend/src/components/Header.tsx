interface HeaderProps {
    headerText: string,
}

const Header: React.FC<HeaderProps> = ({headerText}) => {
    return (
        <div className="bg-green-500 h-20 grid place-content-center font-medium text-4xl text-white">
            {headerText}
        </div>
    )   
}

export default Header