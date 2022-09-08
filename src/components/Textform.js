import React, { useState } from 'react'


export default function Textform(props) {

    const handleupclick = () => {
        setText(text.toUpperCase());
    }

    const handlelowclick = () => {
        setText(text.toLowerCase());
    }

    const [text, setText] = useState('');
   
    const HaandleOnchange=(event)=>{
        setText(event.target.value)
    }

    const handleClearClick=(event)=>{
        setText('');
    }
    const handleCopy=(event)=>{
        var text= document.getElementById('box')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to clipboard', 'sucess')
    }
    return (
        <>
            <h2 className="my-3">{props.heading}</h2>
            <div>

                <div className="form-group my-3">
                    <textarea className="form-control" id="box" placeholder='Enter Text' value={text} onChange={HaandleOnchange} rows="7">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>To upper case</button>
                <button className="btn btn-primary mx-2" onClick={handlelowclick}>To lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

            </div>
            <hr className='mb-3'/>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p> <b>{(text.split(" ")).length} </b> words and <b>{text.length}</b>  Characters</p>

                <p>{0.008*(text.split(" ")).length} Minutes to read</p>

                <h4 className='my-3'>Preview</h4>

                <p>{text.length>0?text:"Enter Text to Preview"}</p>
            </div>
        </>
    )
}
