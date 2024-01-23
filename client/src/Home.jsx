import react from 'react'

// function Home() {
//     return(
//         <h2>Welcome</h2>
//     )
// }
import React, { useEffect, useState } from 'react';

function Home() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Retrieve the user's name from local storage
        const name = localStorage.getItem('userName');
        setUserName(name);
    }, []);

    return(
        <h2>Welcome {userName}</h2>
    );
}


export default Home;