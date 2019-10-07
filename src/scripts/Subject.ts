import { ObserverInterface } from './Observer'

export interface SubjectInterface {
    subscribe(observer: ObserverInterface): void;
    unsubscribe(observer: ObserverInterface): void;
    next(): void;
}

export class Subject implements SubjectInterface{
    private observers = [];

    public subscribe(observer: ObserverInterface): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: ObserverInterface): void {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    public next(): void {
        this.observers.map(observer => observer.update(this))
    }
}
