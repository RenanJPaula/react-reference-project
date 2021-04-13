import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { Action as ReduxAction } from "redux";

interface Action extends ReduxAction {
    payload: any;
}

export class ReducerBuilder<T> {

    private resolvers = new Map<string, (state: T, payload: any) => T>();

    constructor(
        public initialState: T
    ) { }

    addReducer<P>(actionType: string, cb: (state: T, payload: P) => T): void {
        this.resolvers.set(actionType, cb);
    }

    addMutableReducer<P>(actionType: string, cb: (state: WritableDraft<T>, payload: P) => void): void {
        this.resolvers.set(actionType, (state, payload) => {
            return produce<T, WritableDraft<T>>(state, (immerDraft) => {
                if (cb) {
                    cb(immerDraft, payload);
                }
            });
        });
    }

    build() {
        return (state: T = this.initialState, action: Action) => {
            const resolver = this.resolvers.get(action.type);
            return resolver ? resolver(state, action.payload) : state;
        }
    }
}
