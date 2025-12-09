import type { SearchBarProps } from "../../../common/Types/Interfaces";

const SearchBar = ({
    searchQuery,
    onSearchChange,
    onClear,
    className = "",
}: SearchBarProps) => {
    return (
        <div
            className={`search-container white-bg p-3 px-4 rounded-pill ${className}`}
        >
            {/* =============== Search Container =============== */}
            <div className="d-flex flex-column flex-lg-row">
                <div className="d-flex w-100 h-100 position-relative">
                    {/* Search Icon */}
                    <span className="black-light-bg white-color p-3 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-search"></i>
                    </span>

                    {/* Search Input */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for help..."
                        value={searchQuery}
                        onChange={onSearchChange}
                    />

                    {/* Clear Search Button */}
                    {searchQuery && (
                        <button
                            className="clear-search-btn"
                            type="button"
                            onClick={onClear}
                            title="Clear search"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    )}
                </div>

                {/* Search Button */}
                <button className="blue-btn">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
