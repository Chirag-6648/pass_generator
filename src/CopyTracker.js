import React, { useState, useEffect } from 'react';

const CopyTracker = () => {
    // State to hold the copied data
    const [copiedData, setCopiedData] = useState('');
    // State to control when to display copied data
    const [showCopiedData, setShowCopiedData] = useState(false);

    // Function to handle the 'copy' event
    const handleCopy = (event) => {
        // Get the copied text
        const copiedText = window.getSelection().toString();

        // Update state with copied data
        if (copiedText) {
            setCopiedData(copiedText);
        }
    };

    // Function to handle the button click to show the copied data
    const handleButtonClick = () => {
        setShowCopiedData(true);
    };

    // Adding event listener for 'copy' event
    useEffect(() => {
        document.addEventListener('copy', handleCopy);

        return () => {
            document.removeEventListener('copy', handleCopy);
        };
    }, []);

    return (
        <div>
            <h1>Copy Tracker</h1>
            <p>Try copying the text below:</p>
            <p>This is some sample text that can be copied.</p>

            {/* Button to display the copied data */}
            <button onClick={handleButtonClick}>Show Copied Data</button>

            {/* Conditionally render the copied data when the button is clicked */}
            {showCopiedData && copiedData && (
                <div>
                    <h2>Copied Text:</h2>
                    <p>{copiedData}</p>
                </div>
            )}
        </div>
    );
};

export default CopyTracker;
