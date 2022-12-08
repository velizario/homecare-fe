import { CleaningServices } from "../utils/AppTypes";

export const visitRecurrences = [
    {   
        id: 1,
        name : "weekly",
        label: "Всяка седмица",
        price: "469 лв/ч"
    },

    {
        id: 2,
        name : "biWeekly",
        label: "Всяка втора седмица",
        price: "369 лв/ч"
    },

    {
        id: 3,
        name : "quadWeekly",
        label: "Всяка четвърта седмица",
        price: "269 лв/ч"
    },

    {
        id: 4,
        name: "onetime",
        label: "Еднократно",
        price: "569 лв/ч"
    }
]

type cleaningVariationsTypes = {
    id: number;
    name: CleaningServices;
    label: string;
    time: string;
}[]

export const cleaningVariations:cleaningVariationsTypes = [
    {
        id: 1,
        name: "standard",
        label: "Стандартно почистване",
        time: "+30 мин"
    },
    {
        id: 2,
        name: "fridge",
        label: "Почистване на хладилник",
        time: "+30 мин"
    },
    {
        id: 3,
        name: "oven",
        label: "Почистване на печка",
        time: "+30 мин"
    },
    {
        id: 4,
        name: "ironing",
        label: "Гладене",
        time: "+30 мин"
    }
]