import { Input, InputProps, forwardRef, Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Control, Controller, useFormState, FieldValues } from "react-hook-form"
import { BookingFormArgs } from "../../../utils/AppTypes";
import OrderLabel from "./OrderLabel";

interface InputElementProps extends InputProps  {
    control?: Control<BookingFormArgs, object>;
    label?: string;
    name: keyof BookingFormArgs;
}

const InputElement:React.FC<InputElementProps> = forwardRef<InputElementProps, "input">(({children, control, onChange, name, ...props}, ref) => {

    // const handleChange = (value: string | undefined) => {
    //     console.log("starting change")
    //     userStore.setState({client: {[props.name] : value}})
    //     console.log(userStore.getState().client)
    // }

    const { errors } = useFormState({control})
    const errorMessage = errors[name]?.message
 
    return (

        <FormControl isInvalid={errorMessage ? true : false} mb = '6'> 
            <OrderLabel>{props.label}</OrderLabel>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value}}) => 
                (
                <Box position="relative" display='flex' alignItems='center'>
                    <Input 
                        ref={ref}
                        {...props}
                        letterSpacing={0.2}
                        onChange={onChange}
                        value={value?.toString()}
                        h='14' 
                        zIndex='5' 
                        borderColor={`${!!value ? '#26a0f7' : 'lightgray'}`}
                        boxShadow='none'
                    >
                    </Input>
                    {children}
                </Box>
                )}
            />
            <Box h='3' mt='1'>
                <FormErrorMessage mt='0'>
                    {errorMessage}
                </FormErrorMessage>
            </Box>
        </FormControl>
    

    )
})

export default InputElement;

