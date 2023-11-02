import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'


export default function TextForm(props) {

    // console.log(useState('Enter text here'))
    const handleUpClick=()=>{
        console.log("button click"+text)
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert("All the letters are in uppercase","success")

    }
    const handleUpLower=()=>{
        console.log("button click"+text)
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert("All the letters are in lowercase","success")


    }

    const handleOnChange=(event)=>{
        console.log("value change")
        setText(event.target.value)

    }
    const handleClear=()=>{
        console.log("button click"+text)
        let newText=""
        setText(newText)
        props.showAlert("Text Form is cleared","success")


    }

    const handleColor=(color)=>{
       setTextColor(color);
   
    }; 
    const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("All the extra spaces are cleared","success")

    
     }; 
    const[text, setText]=useState('Enter text here')
    const [textColor, setTextColor] = useState('black');


  return (
    <div>
      <div className="mb-3">
  <label>{props.heading}</label>
  <textarea type="email" className="form-control" id="exampleFormControlInput1" onChange={handleOnChange} rows="8" value={text}/>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-4" onClick={handleUpLower}>Convert to lowercase</button>
<button className="btn btn-primary mx-4" onClick={handleClear}>Clear</button>
<button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>Remove extra spaces</button>
{/* <button className="btn btn-primary mx-4" onClick={() => handleColor('Red')}>Change Color</button> */}


<div className='container my-4'>
    <h1>Your Summary</h1>
    <p> {text.split(" ").length} and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:'Enter some text to preview here'}</p>
</div>

    </div>
   
  )
}
