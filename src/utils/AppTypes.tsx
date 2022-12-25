export type CleanFreq =  'onetime' | 'weekly' | 'biWeekly' | 'quadWeekly' 

export type CleaningServices = "standard" | "fridge" | "oven" | "ironing"

export interface PropsWithChildren<T = void> {
    children?: React.ReactNode;
    props?: T;
}

export interface UserBasicInfo {
    firstName?: string;
    lastName?: string;
    address?: string;
    phone?: string;
}

export interface UserExtendedInfo extends UserBasicInfo {
    imageName?: File;
    about?: string;
}

export type UserKeys = {
    [key in keyof UserBasicInfo]: string
}

export type CleaningServicesKeys = {
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

