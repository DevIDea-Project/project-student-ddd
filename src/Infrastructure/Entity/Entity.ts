import crypto from 'crypto';

export abstract class Entity<T> {
    protected _id: string;
    public props: T;

    get id() { 
        return this._id; 
    }

    constructor(props: T, _id?: string) {
        this._id = _id?? crypto.randomUUID();
        this.props = props;
    }
}
