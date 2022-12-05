import { Box, Flex, FormControl, FormErrorMessage } from "@chakra-ui/react";
import InputElement from "./helpers/InputElement";
import OrderHeading from "./helpers/OrderHeading";
import OrderLabel from "./helpers/OrderLabel";
import { Controller, useForm } from "react-hook-form";
import { Client } from "../../utils/AppTypes";
import ButtonRoute from "../../utils/ButtonRoute";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
    firstName: yup.string().required("Въведете име"),
    lastName: yup.string().required("Въведете фамилия"),
    phone: yup.number().positive().integer().required("Въведете номер").typeError("Въведете номер"),
    address: yup.string().required("Въведете адрес"),
    }).required()

const clientDefault = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
}

const AddressForm:React.FC = () => {

    const [address, setAddress] = useState<Client>(clientDefault);

    const updateClient = () => {
        setAddress ((oldClient) => ({...oldClient}))
    }

    const { register, handleSubmit, control, formState: { errors, isValid } } = useForm<Client>({
        mode: 'onChange',
        defaultValues: clientDefault,
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: Client) => console.log(data);
    //TODO: state management for the form. How do we submit - it is part of a bigger form meaning we need to consolidate state before submitting
    return (
    <Box mt='12' w='100%'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <OrderHeading>При кого ще почистваме?</OrderHeading>
            <Flex gap='2'>
                <InputElement control={control} {...register("firstName")} message={errors.firstName?.message} label="Име:" placeholder='Име...' ></InputElement>
                <InputElement control={control} {...register("lastName")} message={errors.lastName?.message} label="Фамилия:" placeholder='Фамилия...' ></InputElement>
            </Flex>
            <InputElement control={control} {...register("address")} message={errors.address?.message} label="Адрес: (улица/блок, номер, вход, етаж, апартамент)" placeholder='Въведете адрес...' ></InputElement>
            <InputElement control={control} {...register("phone")} message={errors.phone?.message} label="Телефонен номер:" placeholder='Въведете номер...' ></InputElement>
            <ButtonRoute type='submit' disabled={!isValid}>submit</ButtonRoute>
        </form>
    </Box>
    )
}

export default AddressForm;