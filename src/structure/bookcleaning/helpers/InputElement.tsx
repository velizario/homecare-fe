import { Input, InputProps } from "@chakra-ui/react";
import { useState } from "react";

const InputElement:React.FC<InputProps> = (props) => {

    const [value, setValue] = useState('');

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    return (
        <Input 
        sx={{...props}}
        letterSpacing={0.2}
        onChange={handleChange} 
        value={value} 
        h='14' 
        zIndex='5' 
        borderColor={`${!!value ? '#26a0f7' : 'lightgray'}`}
        boxShadow='none'
        // boxShadow={`0px 4px 10px ${!!value ? 'rgba(38, 160, 247, 0.2)' : 'rgba(200,200,200,0.3)'}`}
         />
    )
}

export default InputElement;