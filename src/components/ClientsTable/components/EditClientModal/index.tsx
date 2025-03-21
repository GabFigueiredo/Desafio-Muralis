import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { XCircle } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ClientContext } from '../../../../contexts/ClientsContext'

interface Cliente {
    id: number,
    CPF: string,
    nome: string,
    DtNascimento: string,
    endereco: string
}

interface EditClientModalProps {
    cliente: Cliente
    setIsEditModalOpen: (isEditModalOpen: boolean) => void;
}

const NewClientSchema = z.object({
    nome: z.string(),
    cpf: z.string(),
    DtNascimento: z.string(),
    endereco: z.string(),
})

type newClientFormInputs = z.infer<typeof NewClientSchema>

export function EditClientModal({ cliente, setIsEditModalOpen }: EditClientModalProps) {
    const { editClient } = useContext(ClientContext)

    const { register, handleSubmit, watch } = useForm<newClientFormInputs>({
        resolver: zodResolver(NewClientSchema),
    })

    function handleEditClient(data: newClientFormInputs) {
        const updatedClient = {...cliente, ...data}
        editClient(cliente.id, updatedClient)
        setIsEditModalOpen(false)
    }

    // Visibilidade do Botão Submit
    const nome = watch("nome")
    const cpf = watch("cpf")
    const isSubmitValid = !(nome && cpf)

    return (
            <Dialog.Portal>
                <Overlay />
                <Content aria-describedby="transaction-description">
                    <div>
                        <Dialog.Title>Editar Cliente</Dialog.Title>
                        <CloseButton>
                            <XCircle size={30}/>    
                        </CloseButton> 
                    </div>
                    <form onSubmit={handleSubmit(handleEditClient)}>
                        <input
                            placeholder='Nome'
                            required
                            defaultValue={cliente.nome}
                            {...register("nome")}
                        />
                        <input
                            placeholder='CPF'
                            required
                            defaultValue={cliente.CPF}
                            {...register("cpf")}
                        />
                        <input
                            placeholder='Endereço'
                            defaultValue={cliente.endereco}
                            {...register("endereco")}
                        />
                        <input
                            type='date' 
                            placeholder='Data de nascimento'
                            defaultValue={cliente.DtNascimento}
                            {...register("DtNascimento")}
                        />
                        <button type='submit' disabled={isSubmitValid}>Editar</button>
                    </form>
                </Content>
            </Dialog.Portal>
    )
}