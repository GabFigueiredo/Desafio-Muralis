import { produce } from "immer"
import { ActionTypes } from "./actions"

export interface Cliente {
    id: number,
    CPF: string,
    nome: string,
    DtNascimento: string,
    endereco: string
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function clientsReducer(state: Cliente[], action: any) {

    switch (action.type) {
        case ActionTypes.ADD_NEW_CLIENT:
            return produce(state, draft => {
                draft.push(action.payload.newClient)
            })
        case ActionTypes.DELETE_CLIENT:
            return produce(state, draft => {
                const index = draft.findIndex(client => client.id === action.payload.ClientIDToRemove);
                if (index !== -1) {
                    draft.splice(index, 1);
                } 
            })
            case ActionTypes.EDIT_CLIENT:
                return produce(state, draft => {
                    console.log("AQUI O ACTION PAYLOAD")
                    console.log(action.payload)
                    const index = draft.findIndex(client => client.id === action.payload.IDToEdit);
                    console.log(index)
                if (index !== -1) {
                    draft[index] = { ...draft[index], ...action.payload.newValues };
                }
            });

        default: return state;
    }
}
