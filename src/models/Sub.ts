interface IconService {
    nameIcon: string;
    color: string;
}


interface Subscription {
    id: string;
    name: string;
    price: number;
    membership: string;
    description: string;
    firstPayment: Date;
    cycle: string;
}


export {
    IconService,
    Subscription
}