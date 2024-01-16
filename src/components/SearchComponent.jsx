import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

function SearchComponent({ list }) {
    const [showSearchResult, setShowSearchResult] = useState(false);
    const ulRef = useRef(null);
    const [userChips, setUserChips] = useState([]);
    const [searchList, setSearchList] = useState(list);
    const inputRef = useRef(null);
    const [highlightedChip, setHighlightedChip] = useState(null);

    const handleSearch = (value) => {
        const lowercasedValue = value.toLowerCase();

        const filteredItems = list.filter((data) => {
            return data.name.toLowerCase().includes(lowercasedValue);
        });

        setSearchList(filteredItems);
    };

    const handleRemove = (selectedPerson) => {
        setUserChips((prevUserChips) =>
            prevUserChips.filter((chip) => chip.id !== selectedPerson.id)
        );

        setSearchList((prevSearchList) => [...prevSearchList, selectedPerson]);
    };

    const handlePersonClick = (selectedPerson) => {
        setUserChips((prevUserChips) => [...prevUserChips, selectedPerson]);
        setSearchList((prevSearchList) =>
            prevSearchList.filter((person) => person.id !== selectedPerson.id)
        );
        inputRef.current.value = ""; 
    };

    const handleUlFocus = () => {
        setShowSearchResult(true);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === "Backspace" && !inputRef.current.value) {
            if (highlightedChip === null && userChips.length > 0) {
                setHighlightedChip(userChips.length - 1);
            } else if (highlightedChip !== null) {
                handleRemove(userChips[highlightedChip]);
                setHighlightedChip(null);
            }
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowSearchResult(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-row w-full flex-wrap">
                {userChips.map((chip, index) => (
                    <div
                        key={chip.id}
                        className={`flex items-center bg-slate-200 rounded-xl px-1 mr-3 mb-2 hover:bg-slate-400 hover:cursor-pointer ${index === highlightedChip ? " bg-gray-400" : ""
                            }`}
                    >
                        <img src={chip.avatar} alt="avatar" className=" w-4 h-4"/>
                        <p className="min-w-fit mx-2">{chip.name}</p>
                        <IoClose
                            onClick={() => handleRemove(chip)}
                            className="hover:bg-gray-500 rounded-full"
                        />
                    </div>
                ))}
                <div className="relative">
                    <input
                        type="text"
                        className="outline-none w-fit"
                        onFocus={() => setShowSearchResult(true)}
                        placeholder="Add new user..."
                        onChange={(e) => handleSearch(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef}
                    />

                    {showSearchResult && (
                        <ul
                            className="absolute max-h-64 overflow-y-auto border-2 rounded-md shadow-slate-300 shadow-xl bg-white w-fit sm:overflow-x-hidden"
                            ref={ulRef}
                            onFocus={handleUlFocus}
                        >
                            {searchList.map((person) => (
                                <li
                                    key={person.id}
                                    className="flex flex-row py-3 hover:bg-slate-200 px-2 items-center w-fit"
                                    onClick={() => handlePersonClick(person)}
                                >
                                    <img
                                        src={person.avatar}
                                        alt={person.name}
                                        className="w-7 h-7 rounded-full mx-2 mr-4"
                                    />
                                    <div className="flex flex-row w-fit">
                                        <p className="sm:w-32 mr-4 font-bold">{person.name}</p>
                                        <p className="font-extralight text-gray-500 sm:w-72">{person.email}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="border-b-2 border-b-violet-800 mt-3"></div>
        </div>
    );
}

export default SearchComponent;
