import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useColors } from "../../contexts";
function Colors() {
    const goTo = useNavigate()
    const { globColors, setGlobColors} = useColors();    
    async function handleClick(e) {
        e.preventDefault()
        goTo(`/${e.target.name}`)
    }
    async function handleAddColor(e) {
        e.preventDefault()
        goTo('/add')
    }
    async function handleDeleteColor(e) {
        e.preventDefault()
        console.log(e.target.name)
        setGlobColors(globColors.filter(color => color.name !== e.target.name))
    }

    return (
        <div>
            <h1>Colors</h1>
            <div className='div-color-list'>
                {globColors.map((color) => (
                    <div key={color.name} className='div-color'>
                        <div className='div-color-pallet' style={{ backgroundColor: `#${color.hex}` }} />
                        <p>{color.name}</p>
                        <button className="btn-color-name" onClick={handleClick} name={`${color.name}`}></button>
                        <button className="btn-delete-color" onClick={handleDeleteColor} name={color.name}>X</button>

                    </div>
                ))}
            </div>
            <button onClick={handleAddColor} className='btn-add-color'>Add Color</button>
        </div>
    )
}
export default Colors