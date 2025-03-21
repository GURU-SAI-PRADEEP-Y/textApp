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
    const handleClearSpace = () => {
        setText('');
    }
    const handleDelSpace = () => {
        setText(text.slice(0, text.length - 1));
    }
    const handleOnChange = (event) => {
        // console.log("handled on change");
        setText(event.target.value);
    }
    return (
        <>
            {/* this is the text area container with some buttons */}
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
                    <button className="btn btn-warning" onClick={handleDelSpace}>Delete</button>
                    <button className="btn btn-danger" onClick={handleClearSpace}>Clear</button>
                </div>
            </div>
            <div className="container my-4 text-center">
                <h4>{text.length} characters {(text.split(" ").length == 1 && text.length == 0) ? text.split(" ").length = 0 : text.split(" ").length} words</h4>
                <h4>{(text.split(" ").length == 1 && text.length == 0) ? text.split(" ").length = 0 : text.split(" ").length * 0.008} min to read.</h4>
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
