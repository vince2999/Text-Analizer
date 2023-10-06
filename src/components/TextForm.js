import React, {useState} from 'react'

import PropTypes from 'prop-types'

export default function TextForm(props) {
    

    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
        
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const [text,setText] = useState("")

  return (
    <>
    
         <div className="container ">
            <h3>{props.heading}</h3>

          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
          </div>
          <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>

         </div>
         
         <div className="container my-3" >

         <h3>Your text Summary</h3> 
         <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(" ").length-1} words and {text.length} characters</p>
         <h3>Time to read</h3>
         <p style={{color: props.mode==='light'?'black':'white'}}>{0.008* text.split(" ").length } Minutes read</p>
         <h3>Preview</h3>
         <p style={{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"Enter something to preview it here"}</p>
            
       </div>
    
    </>
)
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
