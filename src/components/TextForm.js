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

    const handleClear = () => {
        let clearText = '';
        setText(clearText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);

        const voices = window.speechSynthesis.getVoices();

        const selectedVoice = voices.find(voice => voice.name === "Microsoft Zira - English (United States)");

        if (selectedVoice) {
            msg.voice = selectedVoice;
        }


        window.speechSynthesis.speak(msg);

        const toggle = document.getElementById('toggle')
        if (toggle.textContent === "Speak") {
            toggle.innerHTML = "Stop";
        }
        else {
            toggle.innerHTML = "Speak";
            if (toggle.innerHTML === "Speak") {
                window.speechSynthesis.cancel();
            }
        }
    }

    window.speechSynthesis.onvoiceschanged = () => {
        console.log(window.speechSynthesis.getVoices());
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className='px-8 py-4 space-y-4 md:px-0'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>{props.heading}</h1>
                    <textarea className='p-4 border-2 border-gray-300 focus:outline-none rounded-xl' placeholder='Enter text here' onChange={handleOnChange} value={text} id="myBox" rows="5" cols="50"></textarea>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <button onClick={handleUpClick} className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-primary">Uppercase</button>
                    <button onClick={handleLowClick} className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-primary">Lowercase</button>
                    <button onClick={speak} id='toggle' className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-accent">Speak</button>
                    <button onClick={handleClear} className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-error">Clear</button>
                </div>
            </div>
            <div className="py-4 px-8 md:px-0">
                <h1 className="text-2xl font-bold">Your text summary</h1>
                <p>{text.trim().split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length} Minutes to read.</p>
                <h2 className='text-xl py-4 font-bold'>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
