import React, { useState } from 'react';

export default function Game () {
    const [ticket, setTicket] = useState(null);
    const [isWinner, setIsWinner] = useState(false);

    const generateTicket = () => {
        // Generate a random 3-digit ticket
        const newTicket = Math.floor(100 + Math.random() * 900);
        setTicket(newTicket);

        // Calculate the sum of the ticket's digits
        const digits = newTicket.toString().split('').map(Number);
        const sum = digits.reduce((acc, curr) => acc + curr, 0);

        // Check if the sum equals 15
        setIsWinner(sum === 15);
    };

    return (
        <div>
            <h1>Lottery</h1>
            {ticket && (
                <>
                    <p>Lottery Ticket = {ticket}</p>
                    {isWinner ? (
                        <p>Congratulations, you won!</p>
                    ) : (
                        <p>No Winning</p>
                    )}
                </>
            )}
            <button onClick={generateTicket}>Get New Ticket</button>
        </div>
    );
};

