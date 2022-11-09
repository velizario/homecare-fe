import { Icon, Box } from "@chakra-ui/react"
import { RiStarSLine, RiStarSFill, RiStarHalfSLine } from 'react-icons/ri'

type RatingsProps = {
    size?: string;
}

const Ratings:React.FC<RatingsProps> = ( { size=7 }) => {
    return (
        <Box display='flex' justifyContent='center' width='min-content'>
            <Icon color='orange.400' as={RiStarSFill} h={size} w={size}></Icon>
            <Icon color='orange.400' as={RiStarSFill} h={size} w={size}></Icon>
            <Icon color='orange.400' as={RiStarSFill} h={size} w={size}></Icon>
            <Icon color='orange.400' as={RiStarHalfSLine} h={size} w={size}></Icon>
            <Icon color='orange.400' as={RiStarSLine} h={size} w={size}></Icon>
        </Box>
    )
}

export default Ratings;