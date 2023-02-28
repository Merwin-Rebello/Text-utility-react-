import React,{useState} from 'react'

export default function Textarea1(props) {
  
  const handlecapitalize=()=>{
    // console.log("capialize bbutton was clicked");
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showalert("capitalized text","success")
  }

  const handledecapitalize=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showalert("decapitalized text","success")
  }

  const Deletetext=()=>{
   setText(" ");
   props.showalert("deleted text","success")
 }

 const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showalert("speakiiiing","success")
}

  const handleonChange=(event)=>{
    // console.log("handling on change")
    setText(event.target.value)
  }
 
  
  const [ text,setText]= useState('')  //this is the syntax of usestate
  return (

  <>
    <div className='container'style= {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">      
          {/* we have to handle on change because we have to store the changes made  in the textarea  */}
        <textarea className="form-control"value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="textarea1_mybox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-2'onClick={handlecapitalize}>Capitalize</button>
        <button className='btn btn-primary mx-2'onClick={handledecapitalize}>DE-Capitalize</button>
        <button className='btn btn-primary' onClick={Deletetext}>Delete</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2">Speak</button>
    </div>
    <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Number of text and words</h1>
      <p>{ text.split(" ").length} words and {text.length} alphabets</p>
      <p>{0.008 * text.split(" ").length} Words read in time </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
