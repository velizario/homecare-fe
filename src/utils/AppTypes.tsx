export type CleanFreq =  'onetime' | 'weekly' | 'biWeekly' | 'quadWeekly' 

export type CleaningServices = {
    fridge? : boolean;
    oven? : boolean;
    ironing?: boolean;
}

export interface PropsWithChildren<T = void> {
    children?: React.ReactNode;
    props?: T;
}

export type Client = {
    firstName?: string;
    lastName?: string;
    address?: string;
    phone?: string;
    id?: string;
}

export type Search = {
    appSize?: number;
    frequency?: CleanFreq;
    cleaningServices?: CleaningServices;
    clientInfo?: Client;
    viberSubscribe?: boolean;
    date?: Date;
    hour?: string;
}

