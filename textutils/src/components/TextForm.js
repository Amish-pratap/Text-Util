import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("uppercase was clicked");
        setText("You have clicked on handleUpClick");
    }
    const handleOnChange= ()=>{
        console.log("On change");
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
