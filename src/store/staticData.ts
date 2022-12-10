import { CleaningServices } from "../utils/AppTypes";
import { IconType } from "react-icons";
import { RiFridgeLine } from "react-icons/ri";
import { MdMicrowave, MdOutlineIron, MdOutlineCleanHands } from "react-icons/md";

export type VisitRecurrencesTypes ={
    id: number;
    name: string;
    label: string;
    price: string;
    selectable: boolean;
}[]

export type cleaningVariationsTypes = {
    id: number;
    name: CleaningServices;
    label: string;
    time: string;
    icon: IconType;
    selectable: boolean
}[]


export const visitRecurrences = [
    {   
        id: 1,
        name : "weekly",
        label: "Всяка седмица",
        price: "469 лв/ч",
        selectable: true
    },

    {
        id: 2,
        name : "biWeekly",
        label: "Всяка втора седмица",
        price: "369 лв/ч",
        selectable: true
    },

    {
        id: 3,
        name : "quadWeekly",
        label: "Всяка четвърта седмица",
        price: "269 лв/ч",
        selectable: true
    },

    {
        id: 4,
        name: "onetime",
        label: "Еднократно",
        price: "569 лв/ч",
        selectable: true
    }
]

export const cleaningVariations:cleaningVariationsTypes = [
    {
        id: 1,
        name: "standard",
        label: "Стандартно почистване",
        time: "2 часа",
        icon: MdOutlineCleanHands,
        selectable: false
    },
    {
        id: 2,
        name: "fridge",
        label: "Почистване на хладилник",
        time: "+30 мин",
        icon: RiFridgeLine,
        selectable: true
    },
    {
        id: 3,
        name: "oven",
        label: "Почистване на печка",
        time: "+30 мин",
        icon: MdMicrowave,
        selectable: true
    },
    {
        id: 4,
        name: "ironing",
        label: "Гладене",
        time: "+30 мин",
        icon: MdOutlineIron,
        selectable: true
    }
]