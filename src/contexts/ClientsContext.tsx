import { createContext, ReactNode, useEffect, useReducer} from "react"
import { addNewClientAction, deleteClientAction, editClientAction } from "../reducers/Clientes/actions";
import { clientsReducer } from '../reducers/Clientes/reducer'

interface Cliente {
    id: number,
    CPF: string,
    nome: string,
    DtNascimento: string,
    endereco: string
}

interface ClientContextType {
    clientes: Cliente[],
    createNewClient: (newClient: Cliente) => void,
    deleteClient: (id: number) => void,
    editClient: (IDToEdit: number, newValues: Cliente) => void
}

interface ClientsContextProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ClientContext = createContext({} as ClientContextType)

export function ClientsContextProvider({children}: ClientsContextProviderProps) {

    const [clientes, dispatch] = useReducer(clientsReducer, [{
        id: 1,
        CPF: '12345678910',
        DtNascimento: "12/12/12",
        endereco: "rua",
        nome: "Nome"
    }])

    function createNewClient(newClient: Cliente) {
        // Bate na APi

        // Bate na API
        dispatch(addNewClientAction(newClient))
    }
    
    function deleteClient(id: number) {
        // Bate na API

        // Bate na API
        dispatch(deleteClientAction(id))
    }

    function editClient(IDToEdit: number, newValues: Cliente) {
        // Bate na API

        // Bate na API
        dispatch(editClientAction(IDToEdit, newValues))
        console.log(clientes)
    }
    
    useEffect(() => {
        console.log("GET NA API")
    }, [])

    return (
        <ClientContext.Provider value={{
                clientes,
                createNewClient,
                deleteClient,
                editClient
            }}>
            {children}
        </ClientContext.Provider>
    )
}

