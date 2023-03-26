interface Subscription {
    id: string;
    name: string;
    price: number;
    membership: string;
    description: string;
    firstPayment: Date;
    cycle: 'mensual' | 'anual';
}

interface SubscriptionSatate extends Omit<Subscription, 'id'> {}

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
    SubscriptionSatate,
    SubServiceAvailable,
    IconService
}