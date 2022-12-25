import { useToast } from "@chakra-ui/react"

type ToasterMessageStatuses = "success" | "info" | "warning" | "error";

type ToasterMessageGroupType  = {
    [key in MessageVariants] : {
        status: ToasterMessageStatuses;
        title: string;
        description: string
    }
}

type MessageVariants = "profileUpdated" 

// list here the messages which the app is using
const toasterMessages:ToasterMessageGroupType = {
    profileUpdated : {
        status: "success",
        title: "Профилът е обновен.",
        description: "Промените са записани успешно."
    }
}

// TODO to understand how exactly this is working - is this custom hook?
export const Toaster = () => {
    const toast = useToast();

    const addToast = (messageVariant: MessageVariants )=> {
        const {status, title, description}  = toasterMessages[messageVariant];
        toast ({
            description, 
            title,
            status, 
            position:"bottom-left", 
            isClosable: true, 
            duration: 3000,
        })
    }
    return {addToast}
}