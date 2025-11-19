import { useState } from 'react';
import styles from './MainContent.module.css';
import Card from './Card';

// 1. Accept the new prop 'onAddNickname'
function MainContent({ subtitle, nicknames, onAddNickname, onRemoveNickname }) {
    
    const [showNicknames, setShowNicknames] = useState(true);
    
    // 2. New State for the input box
    const [inputValue, setInputValue] = useState("");

  // 2. Update the map function to include the Delete button
    const nicknameList = nicknames.map((name) => {
        return (
            <li key={name} className={styles.nicknameItem}>
                <span>{name}</span>
                
                {/* The Delete Button */}
                {/* We use an arrow function () => so it only runs when CLICKED */}
                <button 
                    onClick={() => onRemoveNickname(name)} 
                    className={styles.deleteBtn}
                    aria-label={`Delete ${name}`}
                >
                    &times; {/* This is a fancy HTML code for an 'X' symbol */}
                </button>
            </li>
        );
    });

    function toggleList() {
        setShowNicknames(!showNicknames);
    }

    // 3. Handle the Form Submission
    function handleSubmit(e) {
        e.preventDefault(); // Stop the page from refreshing!
        
        if (inputValue.trim() !== "") { // Don't add empty blanks
            onAddNickname(inputValue); // Call the function from App.jsx
            setInputValue(""); // Clear the box
        }
    }

    // 4. Handle typing
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <main className={styles.mainContainer}>
            <h2>{subtitle}</h2>
            <p>This is where the Wild Chicken Booby Cat sleeps.</p>
            
            <button onClick={toggleList} className={styles.toggleBtn}>
                {showNicknames ? "Hide Nicknames" : "Show Nicknames"}
            </button>

            { showNicknames && (
                <Card>
                    <ul className={styles.nicknameList}>
                        {nicknameList}
                    </ul>
                    
                    {/* 5. The Form UI */}
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input 
                            type="text"
                            placeholder="Add a new nickname..."
                            value={inputValue}
                            onChange={handleInputChange}
                            className={styles.inputField}
                        />
                        <button type="submit" className={styles.addBtn}>Add</button>
                    </form>

                </Card>
            )}
            
        </main>
    );
}

export default MainContent;