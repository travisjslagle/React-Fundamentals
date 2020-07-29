import React, {useState, useEffect} from 'react';

const Effects = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h2>Below are some important points regarding effects:</h2>
                <ul>
                    <li>
                        They are triggered at different moments in the component. When state changes,
                        when props change, when the component mounts, when the component unmounts.
                    </li>
                    <li>Effects are used to trigger certain actions based upon what change occured.</li>
                    <li>
                        Effects can return cleanup functions, which can clean up timers using memory,
                        subscriptions listening for changes from external sources, and other functions
                        which may use system resources.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Effects;