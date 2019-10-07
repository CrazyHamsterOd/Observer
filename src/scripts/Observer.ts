import { SubjectInterface } from './Subject';

export interface ObserverInterface {
    update(subject: SubjectInterface): void;
}

export class Observer implements ObserverInterface {
    public update(){

    }
}
