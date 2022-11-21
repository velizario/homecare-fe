import { Box, Icon, Text } from "@chakra-ui/react";
import { GiStarFormation, GiWisdom } from "react-icons/gi";
import { MdQuickreply } from "react-icons/md";

type ProfileBadgeProps = {
    active? : boolean;
    badge : 'star' | 'wisdom' | 'reply'
}

const badgeTypes = {
    star : {icon : GiStarFormation, label: 'Висока оценка'},
    wisdom : {icon : GiWisdom, label: 'Старо куче'},
    reply : {icon : MdQuickreply, label: 'Отговаря бързо'}
}

const ProfileBadge:React.FC<ProfileBadgeProps> = ({ active, badge }) => {
    return (
        <Box p='3' h='24' w='24' borderRadius='md' border={active ? '1px solid #f0efed' : ""} bg={active ? 'white' : "#f7f9f9"} boxShadow={active ? '0 7px 20px -7px rgb(0 0 0 / 10%)' : ""} display='inline-flex' flexDir='column' alignItems='center' justifyContent='center'>
            <Icon as={badgeTypes[badge].icon} h='6' w='6' mb='2' color={active ? 'gray.700' : 'gray.400'} borderRadius='50%'></Icon>
            <Text fontSize='xs' fontWeight='normal' color={active ? 'gray.700' : 'gray.400'} textAlign='center'> {badgeTypes[badge].label} </Text>
        </Box>
    )
}

export default ProfileBadge;