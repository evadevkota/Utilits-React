import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {

        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("All the letters are in uppercase", "success")

    }
    const handleUpLower = () => {

        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("All the letters are in lowercase", "success")


    }

    const handleOnChange = (event) => {

        setText(event.target.value)

    }
    const handleClear = () => {

        let newText = ""
        setText(newText)
        props.showAlert("Text Form is cleared", "success")


    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }



    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All the extra spaces are cleared", "success")


    };
    const [text, setText] = useState('Enter text here')


    return (
        <div>
            <div className="mb-3">
                <strong style={{ fontFamily: 'times', fontSize: '35px', }}>{props.heading}</strong>
                <textarea type="email" className="form-control" id="exampleFormControlInput1" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#336699' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" value={text} />
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpLower}>Convert to lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>

            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>



            <div className='container my-4'>
                <h1>Your Summary</h1>
                <p> {text.split(" ").filter((element) => { return element.length !== 0 }).length} and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
            </div>

        </div>

    )
}
