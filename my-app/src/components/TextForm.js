import React,{ useState} from "react";//useEffect

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  // const [color,setColor] = useState('')
  // useEffect(()=>{
    // setColor(props.mode ==="dark"?"white": "#05182c")
  // },[])
  

//using to upper case

const handleupclick=()=>{
  console.log("uppercase was change" + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showalert(" converted to uppercase!" ,"success");
}

//using to lower case 

const handleloclick=()=>{
  console.log("lowercase was change" + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showalert(" converted to lowercase!" ,"success");
}
// changes value 

const handleonchange=(event)=>{
  console.log("on change");
  setText(event.target.value)
}
// clear the text
const handleclearclick=()=>{
  console.log("lowercase was change" + text);
  let newText =('');
  setText(newText)
  props.showalert(" converted to clear text!" ,"success");
}
const handlecapclick=()=>{
  console.log("lowercase was change" + text);
  const text1=text.trim()
   const newArray =text1.split(" ")
   let newText = ''
  for (let i = 0; i<newArray.length; i++) { //1
    newText+=(newArray[i][0].toUpperCase() + newArray[i].slice(1))
    newText+= " "
  }
  setText(newText)
  props.showalert(" converted to capitilized!" ,"success");
}
  return (
    <>
    <div className="container" style={{color : props.mode ==="dark"?"white": "#05182c"}}>
      <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea className="form-control"value={text}  onChange={handleonchange} style={{"backgroundColor": props.mode ==="light"?"white": "#05182c",color:props.mode ==="dark"?"white": "#05182c"}}  id="exampleFormControlTextarea1"rows="8"
        ></textarea>
      </div>
      <button className="btn btn-secondary mx-2 my-2"style={{color : props.mode ==="dark"?"white": "#05182c"}} onClick={handleupclick}>convert to uppercase</button>
      <button className="btn btn-secondary mx-2 my-2"style={{color : props.mode ==="dark"?"white": "#05182c"}} onClick={handleloclick}>convert to lowercase</button>
      <button className="btn btn-secondary mx-2 my-2"style={{color :props.mode ==="dark"?"white": "#05182c" }} onClick={handleclearclick}>clear text</button>
      <button className="btn btn-secondary mx-2 my-2"style={{color :props.mode ==="dark"?"white": "#05182c" }} onClick={handlecapclick}>capitilize</button>
    </div>
    <div className="container my-3" style={{color :props.mode ==="dark"?"white": "#05182c"}}>
        <h1>Your Text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008* text.split(" ").length}  minutes reader</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}