interface Subscription {
    id: string;
    name: string;
    price: number;
    membership: string;
    description: string;
    firstPayment: Date;
    cycle: string;
}
interface IconService{
    nameIcon: string;
    color: string;
    type: string;
}

interface SubServiceAvailable extends IconService{
    title: string;
}


export {
    Subscription,
    SubServiceAvailable,
    IconService
}