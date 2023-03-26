interface Subscription {
    id: string;
    name: string;
    price: number;
    membership: string;
    description: string;
    firstPayment: Date;
    cycle: 'mensual' | 'anual';
}
interface IconService{
    nameIcon: string;
    color: string;
    type: string;
}

interface SubServiceAvailable extends IconService{
    title: string;
}
interface SubscriptionSatate extends Omit<Subscription, 'id'> {}
interface FullSubscription extends Subscription, SubServiceAvailable{}

export {
    Subscription,
    SubscriptionSatate,
    SubServiceAvailable,
    FullSubscription,
    IconService
}