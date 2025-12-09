import type { MainInputProps } from "../../../common/Types/Interfaces";
import "./MainInput.scss";

const MainInput = ({ icon, placeholder, name, id, value, onChange }: MainInputProps) => {
    return (
        <div className="main-input-container">
            <i className={`fa-solid ${icon}`}></i>
            <input
                type="text"
                name={name}
                id={id}
                className="main-input w-100"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainInput;
