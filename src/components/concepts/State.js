import React, {useState} from 'react';

const State = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is unique to Functional Components</dt>
                    <dd>Class-based components have a separate means of utilizing and modifying state.</dd>
                    <dt>useState uses Array Destructuring</dt>
                    <dd>useState provides a state variable to reference the value of the state, and a 
                        state modification function that allows you to set the new value of the state.
                    </dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a tool that originates from the list of Hooks you can access within React.</dd>
                    <dt>Triggers Re-Render</dt>
                    <dd>Like when a prop changes, changing the state of a component re-renders the whole component.</dd>
                </ul>
                <StateExample />
            </div>
        </div>
    );
};

function StateExample() {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return (
        <div>
            <input value={text} onChange={ e => setText(e.target.value) } />
            <br />
            <img
                style={{ width: '40px', height: '40px' }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxBwaja29tAXjUGdXJeCtGWvwMyZny8POcQA&usqp=CAU"
                alt="thumbs up"
                onClick={ e => setLikeNum(likeNum + 1) }
            />
            <span>{ likeNum }</span>
            <br/>
            <br/>
            <p
                style={{ color: textColor }}
                onMouseEnter={ () => setTextColor('red')}
                onMouseLeave={ () => setTextColor('blue')}
            >
                This text should be able to change colors
            </p>
        </div>
    )
}

export default State;