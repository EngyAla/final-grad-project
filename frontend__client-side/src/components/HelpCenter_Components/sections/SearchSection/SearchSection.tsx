import type { SearchSectionProps } from "../../../../common/Types/Interfaces";
import SearchBar from "../../SearchBar/SearchBar";
import SearchResults from "../../SearchResults/SearchResults";

const SearchSection = ({
    searchQuery,
    onSearchChange,
    onClear,
    resultCount,
    suggestions,
    onSuggestionClick,
    className = "",
}: SearchSectionProps) => {
    return (
        <section className={`mb-5 ${className}`}>
            {/* =============== Search Bar =============== */}
            <SearchBar
                searchQuery={searchQuery}
                onSearchChange={onSearchChange}
                onClear={onClear}
            />

            {/* =============== Search Results =============== */}
            <SearchResults
                searchQuery={searchQuery}
                resultCount={resultCount}
                suggestions={suggestions}
                onSuggestionClick={onSuggestionClick}
            />
        </section>
    );
};

export default SearchSection;
