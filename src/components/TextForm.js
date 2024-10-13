import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {

        let upperText = text.toUpperCase();
        setText(upperText)
    }

    const handleLowClick = () => {

        let lowerText = text.toLowerCase();
        setText(lowerText)
    }

    const handleOnChange = (event) => {
        // console.log("Change the state");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='px-8 py-4 space-y-4 md:px-0'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>{props.heading}</h1>
                    <textarea className='p-4 border-2 border-gray-300 focus:outline-none rounded-xl' placeholder='Enter text here' onChange={handleOnChange} value={text} id="myBox" rows="5" cols="50"></textarea>
                </div>
                <div className='flex items-center justify-center gap-4'>

                    <button onClick={handleUpClick} className='p-4 md:text-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-300 to-blue-400 md:hover:text-xl hover:from-blue-400 hover:to-blue-500 hover:scale-105 hover:shadow-2xl hover:text-white rounded-xl'>Convert to Uppercase</button>

                    <button onClick={handleLowClick} className='p-4 md:text-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-300 to-blue-400 md:hover:text-xl hover:from-blue-400 hover:to-blue-500 hover:scale-105 hover:shadow-2xl hover:text-white rounded-xl'>Convert to Lowercase</button>

                </div>
            </div>
            <div className="py-4 px-8 md:px-0">
                <h1 className="text-2xl font-bold">Your text summary</h1>
                <p>{text.trim().split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length} Minutes to read.</p>
                <h2 className='text-xl font-bold'>Preview!</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
