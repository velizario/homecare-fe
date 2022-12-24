import { Box, forwardRef, Input, InputProps } from "@chakra-ui/react"
import { Control, Controller, FieldPath } from "react-hook-form"
import { UserExtendedInfo } from "../../../utils/AppTypes"

interface FileUploadProps extends InputProps  {
    control : Control<UserExtendedInfo, object>;
    name: FieldPath<UserExtendedInfo>;
    ref?: React.ForwardedRef<HTMLInputElement>
    label?: string;

}

const FileUpload:React.FC<FileUploadProps> = forwardRef(({children, control, name, label, ...props}, ref) => {
    
    return (
        <Controller 
            control={control}
            name={name}
            render = {({ field: { onChange }}) => (
                    <Input display="none" visibility="hidden" id={label} ref={ref} {...props} type="file" onChange={(e) => onChange(e.target.files![0])} border='none'>{children}</Input>
            )}
        />
    )
})

export default FileUpload;