import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useColors } from "../../contexts";
function Color() {
    const {globColors} = useColors()
    const {name} = useParams()
    const [color, setColor] = useState({})

    useEffect(() => {
        const selectedColor = globColors.find((c) => c.name == name)
        setColor(selectedColor)
        console.log(selectedColor, name)
    },[name])
    return (
        
        <div className="color" style={{backgroundColor: `#${color.hex}`, padding: '5vw', borderWidth: '1px', borderColor: "black"}}>
            <h1>{color.name}</h1>
        </div>
        
    )
}

export default Color