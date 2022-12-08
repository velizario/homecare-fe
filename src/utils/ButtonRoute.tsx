import { Button, ButtonProps } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface ButtonRouteProps extends ButtonProps {
    to?: string;
}

const ButtonRoute:React.FC<ButtonRouteProps> = ({ to, onClick, children, ...rest }) => {
    const navigate = useNavigate();

    return (
        <Button size='lg' borderRadius='3xl' px='5' {...rest} onClick = {to ? () => {navigate(to)} : onClick}>{children}</Button>
    )
}


export default ButtonRoute;