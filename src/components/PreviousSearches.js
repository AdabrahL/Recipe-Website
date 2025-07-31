import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function PreviousSearches({ onSearch }) {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad'];

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input);
            setInput("");
        }
    };

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => (
                    <div
                        key={index}
                        style={{ animationDelay: index * 0.1 + "s" }}
                        className="search-item"
                        onClick={() => onSearch(search)}
                    >
                        {search}
                    </div>
                ))}
            </div>
            <form className="search-box" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    );
}
