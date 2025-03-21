import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ClientContext } from '../../contexts/ClientsContext'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { XCircle } from '@phosphor-icons/react'


interface NewClientModalProps {
    setIsOpen: (isOpen: boolean) => void;
}

const NewClientSchema = z.object({
    nome: z.string(),
    cpf: z.string(),
    DtNascimento: z.string(),
    endereco: z.string(),
})

type newClientFormInputs = z.infer<typeof NewClientSchema>

export function NewClientModal({ setIsOpen }: NewClientModalProps) {
    const { createNewClient, clientes } = useContext(ClientContext)

    const { register, handleSubmit, watch } = useForm<newClientFormInputs>({
        resolver: zodResolver(NewClientSchema),
        mode: "onChange"
    })

    async function handleCreateNewTransaction(data: newClientFormInputs) {
        const ultimoDaLista = clientes.length > 0 ? clientes[clientes.length - 1] : null;
        const newID = ultimoDaLista ? ultimoDaLista.id + 1 : 1; // Se a lista estiver vazia, começa com ID 1
        createNewClient({
            id: newID,
            CPF: data.cpf,
            nome: data.nome,
            DtNascimento: data.DtNascimento,
            endereco: data.endereco
        })
        setIsOpen(false)
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
                        <Dialog.Title>Novo Cliente</Dialog.Title>
                        <CloseButton>
                            <XCircle size={30}/>    
                        </CloseButton> 
                    </div>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input
                            placeholder='Nome'
                            required
                            {...register("nome")}
                        />
                        <input
                            placeholder='CPF'
                            required
                            {...register("cpf")}
                        />
                        <input
                            placeholder='Endereço'
                            {...register("endereco")}
                        />
                        <input
                            type='date' 
                            placeholder='Data de nascimento'
                            {...register("DtNascimento")}
                        />
                        <button type='submit' disabled={isSubmitValid} >Cadastrar</button>
                    </form>
                </Content>
            </Dialog.Portal>
    )
}