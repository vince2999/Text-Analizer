import React, {useState} from 'react'

import PropTypes from 'prop-types'

export default function TextForm(props) {
    

    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const [text,setText] = useState("")

  return (
    <>
    
         <div className="container ">
            <h2>{props.heading}</h2>

          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
          </div>
          <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>

         </div>
         
         <div className="container my-3">

         <h3>Your text Summary</h3> 
         <p>{text.split(" ").length-1} words and {text.length} characters</p>
         <h3>Time to read</h3>
         <p>{0.008* text.split(" ").length } Minutes read</p>
         <h3>Preview</h3>
         <p>{text}</p>
            
       </div>
    
    </>
)
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
