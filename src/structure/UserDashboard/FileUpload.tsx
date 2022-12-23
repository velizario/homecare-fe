import { Box, Input } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import userStore from "../../store/userStore"
import produce from "immer"

const FileUpload = () => {
    const store = userStore();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        
        const fileName = event.target.files[0]
        userStore.setState(produce((state: typeof store) => {
            if (state.data) state.data.imageName = fileName;
        }
        ));
        
    }
    
    return (
        <Box>
            <Input type="file" onChange={handleChange} border='none'/>
        </Box>
    )
}

export default FileUpload;