import React, { useState } from 'react';
import './FilterDropdown.css';

const FilterDropdown = ({ selectedOptions, setSelectedOptions }) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleToggle = () => {
        setShowOptions(!showOptions);
    };

    const handleSelect = (option) => {
        setSelectedOptions((prev) => {
            if (prev.includes(option)) {
                return prev.filter(item => item !== option);
            } else {
                return [...prev, option];
            }
        });
        setShowOptions(false);  // Close the dropdown after selection
    };

    const removeOption = (option) => {
        setSelectedOptions((prev) => prev.filter(item => item !== option));
    };

    const isSelected = (option) => selectedOptions.includes(option);

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="filterDropdown"
                aria-haspopup="true"
                aria-expanded={showOptions}
                onClick={handleToggle}
            >
                Filter Options
            </button>
            {showOptions && (
                <div className="dropdown-menu show" aria-labelledby="filterDropdown">
                    <a
                        className={`dropdown-item${isSelected('alphabets') ? ' active' : ''}`}
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleSelect('alphabets'); }}
                    >
                        Alphabets
                    </a>
                    <a
                        className={`dropdown-item${isSelected('numbers') ? ' active' : ''}`}
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleSelect('numbers'); }}
                    >
                        Numbers
                    </a>
                    <a
                        className={`dropdown-item${isSelected('highest_alphabet') ? ' active' : ''}`}
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleSelect('highest_alphabet'); }}
                    >
                        Highest Alphabet
                    </a>
                </div>
            )}
            {selectedOptions.length > 0 && (
                <div className="selected-options">
                    {selectedOptions.map(option => (
                        <span className="badge badge-primary mr-2" key={option}>
                            {option}
                            <button
                                type="button"
                                className="close ml-2"
                                aria-label="Close"
                                onClick={() => removeOption(option)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
