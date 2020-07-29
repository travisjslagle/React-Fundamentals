import React from 'react';

const JSXRules = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JS, but most sane people use JSX</dd>
                    <dt>Differences to note bewteen JSX and HTML:</dt>
                    <dd>'className' instead of 'class' because 'class' is reserved in JS</dd>
                    <dd>event handlers are camelCased in JSX: 'onClick' instead of 'onclick', 'onChange' instead of 'onchange', etc.</dd>
                    <dd>JS interpolation: JSX allows us to use vanilla JS in curly braces </dd>
                </dl>
                <hr/>
            </div>
            <NormalComponent />
            <CreateElementComponent />
        </div>
    );
};

const NormalComponent = () => {
    return (
        <div style={{ border: '2px solid black' }}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu9mi4d4orgsvBQaBcgo5d5bZLJ4mXWiMldA&usqp=CAU" alt="jsx-icon" />
        </div>
    );
};
const imageLocation = 'data:image/png;base64,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';

const CreateElementComponent = () => {
    return React.createElement("div", 
    { style: {border: '2px solid black'} }, 
    React.createElement("h1", null, "JS Functional Component"),
    React.createElement("p", null, "This was made entirely with vanilla JS in the return"),
    React.createElement("img", {src: imageLocation}, null)
    );
};

export default JSXRules;