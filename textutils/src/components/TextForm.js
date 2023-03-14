import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const [text, setText] = useState('');
    return (
        <>

            <div className='container'>
                <h1>{props.heading} </h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className='buttons my-2'>
                    <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
                    <button type="button" onClick={handleLoClick} className="btn btn-primary">Convert to Lowercase</button>
                    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                    <button type="submit" onClick={handleCapitalize} className="btn btn-warning mx-2 my-2">capitalize</button>
                </div>
            </div>
            <div className='container my-2'>
                <h1> Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
