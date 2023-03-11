import './Button.css';

interface IButton {
    children: JSX.Element | string;
    onClick(): void;
    cls?: string;
}
const Button: React.FC<IButton> = ({children, cls, onClick}) => {
    return (
        <button onClick={onClick} className={`button ${cls}`}>
            {children}
        </button>
    );
};

export default Button;
