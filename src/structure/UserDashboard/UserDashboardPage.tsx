import {  Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import MenuPanel from "./MenuPanel";
import Messages from "./Messages";
import Orders from "./Orders";
import ProfileMain from "./ProfileMain";

const UserDashboardPage = () => {
    return (
    <>
        <Header/>
            <Flex flexDirection='row'>
                <MenuPanel/>
                <Routes>
                    <Route index element={<Orders />} />
                    <Route path='profile/*' element={<ProfileMain/>} />
                    <Route path='orders' element={<Orders/>} />
                    <Route path='messages' element={<Messages/>} />
                </Routes> 
            </Flex>
        <Footer/>
    </>
    )
}

export default UserDashboardPage;