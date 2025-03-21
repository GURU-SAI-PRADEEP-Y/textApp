import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }
    const handleTrimSpace = () => {
        setText(text.trim());
    }
    const handleOnChange = (event) => {
        console.log("handled on change");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <h1>Analyse the content</h1>
                <div className="form-floating my-4">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnChange}></textarea>
                    <label htmlFor="floatingTextarea">{props.placeholder}</label>
                </div>
                <div className="butt d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
                    <button className="btn btn-danger" onClick={handleLowerCase}>Convert to LowerCase</button>
                    <button className="btn btn-warning" onClick={handleTrimSpace}>Trim Extra spaces</button>
                </div>
            </div>
        </>
    )
}
