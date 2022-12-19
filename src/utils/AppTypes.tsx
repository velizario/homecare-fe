export type CleanFreq =  'onetime' | 'weekly' | 'biWeekly' | 'quadWeekly' 

export type CleaningServices = "standard" | "fridge" | "oven" | "ironing"

export interface PropsWithChildren<T = void> {
    children?: React.ReactNode;
    props?: T;
}

export type User = {
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
}

export type UserKeys = {
    [key in keyof User]: string
}

type CleaningServicesKeys = {
    [key in CleaningServices] : boolean;
}

export interface BookingFormArgs extends UserKeys {
    cleaningArea: string;
    date: Date | undefined;
    hour: string;
    frequency: CleanFreq | undefined;
    cleaningServices: CleaningServicesKeys;
    viberContactEnabled: boolean;
}
