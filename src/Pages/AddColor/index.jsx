import React, { useState } from "react";
import { useColors } from "../../contexts";
import { useNavigate } from "react-router-dom";

function AddColorForm() {
    const goTo = useNavigate()
    const [inputText, setInputText] = useState({
        name: '',
        hex: ''
    })
    const { globColors, setGlobColors} = useColors()
    const handleInput = (e) => {
        e.preventDefault()
        setInputText({
            ...inputText,[e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setGlobColors([
            ...globColors, inputText
        ]);
        goTo('/')
    }
    return (
        <form style={{backgroundColor: "red"}}>
            <div className="form-group">
                <label>Color Name</label>
                <input type="text" name="name"
                    value={inputText.name}
                    onChange={handleInput}
                ></input>
            </div>
            <div className="form-group">
                <label>Hex Code</label>
                <input type="text" name="hex"
                    value={inputText.hex}
                    onChange={handleInput}
                ></input>
            </div>
            <button type="submit"
            onClick={handleSubmit}>Add Color</button>
        </form>
    )
}
export default AddColorForm