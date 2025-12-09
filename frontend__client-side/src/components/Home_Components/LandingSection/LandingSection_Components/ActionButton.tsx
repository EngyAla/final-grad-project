import type { ActionButtonProps } from "../../../../common/Types/Interfaces";


const ActionButton = ({ icon, text, onClick }: ActionButtonProps) => {
    return (
        <button className="transparent-blue-btn" onClick={onClick}>
            <i className={icon}></i>
            {text}
        </button>
    );
};

export default ActionButton;
