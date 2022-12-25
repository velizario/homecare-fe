import { Input, InputProps, forwardRef, Box, FormControl, FormErrorMessage} from "@chakra-ui/react";
import { Control, Controller, useFormState, FieldValues, FieldPath } from "react-hook-form"
import OrderLabel from "./OrderLabel";

interface InputElementProps<T extends FieldValues> extends InputProps  {
    control: Control<T, object>;
    label?: string;
    name: FieldPath<T>;
    borderColor?: string;
}

const InputElementInner= <K extends FieldValues,>(
        {children, control, name, label, borderColor, ...props}: InputElementProps<K>, 
        _ref:React.ForwardedRef<HTMLInputElement >
    ) => {

    const { errors } = useFormState({control})
    const errorMessage = errors[name]?.message?.toString()
 
    return (

        <FormControl isInvalid={errorMessage ? true : false} mb = '6'> 
            <OrderLabel>{label}</OrderLabel>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value, ref}}) => 
                (
                <Box position="relative" display='flex' alignItems='center'>
                    {children}
                    <Input 
                        ref={ref}
                        borderColor={`${borderColor ? borderColor : !!value ? '#26a0f7' : 'lightgray'}`}
                        {...props}
                        letterSpacing={0.2}
                        onChange={onChange}
                        h='14' 
                        zIndex='5' 
                        boxShadow='none'
                    >
                    </Input>
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
} 

const InputElement = forwardRef(InputElementInner) as <T extends FieldValues>(
    props: InputElementProps<T> & { ref?: React.ForwardedRef<HTMLInputElement> }
  ) => ReturnType<typeof InputElementInner>;

export default InputElement;

