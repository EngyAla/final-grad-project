import { useState, useRef, useEffect } from "react";
import "./CustomSelect.scss";
import type {
    CustomSelectProps,
    Option,
} from "../../../common/Types/Interfaces";

const CustomSelect = ({
    options,
    placeholder,
    icon = "",
    name = "",
    id = "",
    value = "",
    onChange = () => {},
    classes = "",
}: CustomSelectProps) => {
    void name;
    void classes;
    void id;
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState<Option | null>(
        options.find((option) => option.value === value) || null
    );
    const selectRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Filtered Options
    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle Click Outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setSearchTerm("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle Focus
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    // Handle Option Select
    const handleOptionSelect = (option: Option) => {
        setSelectedOption(option);
        setSearchTerm("");
        setIsOpen(false);
        onChange?.(option.value);
    };

    // Handle Toggle
    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSearchTerm("");
        }
    };

    return (
        <div className="custom-select" ref={selectRef}>
            {/* Select Field */}
            <div
                className={`select-field ${isOpen ? "open" : ""}`}
                onClick={handleToggle}
            >
                <i className={`fa-solid ${icon}`}></i>
                <span className="select-text">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <i
                    className={`fa-solid fa-chevron-down ${
                        isOpen ? "rotated" : ""
                    }`}
                ></i>
            </div>

            {/* Select Dropdown */}
            {isOpen && (
                <div className="select-dropdown">
                    {/* Search Container */}
                    <div className="search-container">
                        <i className="fa-solid fa-search"></i>
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder={`Search ${placeholder.toLowerCase()}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    {/* Options Container */}
                    <div className="options-container">
                        {/* Options Found */}
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`select-option ${
                                        selectedOption?.value === option.value
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option.label}
                                </div>
                            ))
                        ) : (
                            /* No Options Found */
                            <div className="no-options">
                                No {placeholder.toLowerCase()} found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
