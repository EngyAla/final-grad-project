import type { SearchResultsProps } from "../../../common/Types/Interfaces";

const SearchResults = ({
    searchQuery,
    resultCount,
    suggestions,
    onSuggestionClick,
    className = "",
}: SearchResultsProps) => {
    if (!searchQuery) return null;

    return (
        <div className={`search-results-info text-center mb-3 ${className}`}>
            {/* Result Count */}
            <small>
                Found {resultCount} result{resultCount !== 1 ? "s" : ""} for "
                {searchQuery}"
            </small>

            {/* Search Suggestions */}
            {suggestions.length > 0 && (
                <div className="search-suggestions mt-3">
                    <p className="mb-2">Try searching for:</p>
                    <div className="suggestion-tags d-flex flex-wrap justify-content-center gap-2">
                        {suggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => onSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
