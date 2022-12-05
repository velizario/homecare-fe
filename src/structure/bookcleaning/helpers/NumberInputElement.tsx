import { NumberInput, NumberInputField, NumberInputProps } from "@chakra-ui/react";
import { useState } from "react";

const NumberInputElement:React.FC<NumberInputProps> = ({children, placeholder, ...props}) => {

    const [value, setValue] = useState('');

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    return (
        <NumberInput {...props}>
            <NumberInputField
                placeholder={placeholder}
                letterSpacing={0.2}
                onChange={handleChange} 
                value={value} 
                borderColor={`${!!value ? '#26a0f7' : 'lightgray'}`}
            />
            {children}
         </NumberInput>
    )
}

export default NumberInputElement;