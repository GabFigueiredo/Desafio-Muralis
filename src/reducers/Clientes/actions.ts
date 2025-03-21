import { Cliente } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CLIENT = "ADD_NEW_CLIENT",
    DELETE_CLIENT = "DELETE_CLIENT",
    EDIT_CLIENT = "EDIT_CLIENT"
}

export function addNewClientAction(newClient: Cliente) {
    return {
        type: ActionTypes.ADD_NEW_CLIENT,
            payload: {
                newClient: newClient
            }
        }
}

export function deleteClientAction(idToRemove: number) {
    return {
        type: ActionTypes.DELETE_CLIENT,
            payload: {
                ClientIDToRemove: idToRemove
            }
        }
}

export function editClientAction(IDToEdit: number, newValues: Cliente) {
    return {
        type: ActionTypes.EDIT_CLIENT,
            payload: {
                IDToEdit: IDToEdit,
                newValues: newValues
            }
        }
}

