import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ClientContext } from '../../contexts/ClientsContext'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { XCircle } from '@phosphor-icons/react'
import { dateFormatter } from '../../utils/formatter'
import Cleave from 'cleave.js/react';


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

    const {register,
        handleSubmit,
        watch,
        control,
        reset, }
        = useForm<newClientFormInputs>({
        resolver: zodResolver(NewClientSchema),
        mode: "onChange"
    })

    async function handleCreateNewClient(data: newClientFormInputs) {
        if (data.cpf.length < 14) {
            console.log("Cpf inválido")
            return
        }

        const ultimoDaLista = clientes.length > 0 ? clientes[clientes.length - 1] : null;
        const newID = ultimoDaLista ? ultimoDaLista.id + 1 : 1; 

        const date = new Date(data.DtNascimento)
        const formattedDate = dateFormatter.format(date)

        createNewClient({
            id: newID,
            CPF: data.cpf,
            nome: data.nome,
            DtNascimento: formattedDate,
            endereco: data.endereco
        })
        setIsOpen(false)
        reset()
    }
    
    // Visibilidade do Botão Submit
    const nome = watch("nome");
    const cpf = watch("cpf")
    
    const isSubmitValid = !(nome && cpf?.length < 14);

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
                    <form onSubmit={handleSubmit(handleCreateNewClient)}>
                        <input
                            placeholder='Nome'
                            required
                            {...register("nome")}
                        />
                            <Controller
                                name="cpf"
                                control={control}
                                rules={{
                                    required: "CPF é obrigatório",
                                    validate: (value) => value.length == 14 || "CPF inválido"
                                }}
                                render={({ field }) => (
                                    <Cleave
                                        {...field}
                                        placeholder="CPF"
                                        options={{
                                            blocks: [3, 3, 3, 2], 
                                            delimiters: ['.', '.', '-'], 
                                            numericOnly: true
                                        }}
                                        onChange={(e) => {
                                            console.log("Current CPF Value:", e.target.value, "Length:", e.target.value.length);
                                            field.onChange(e.target.value);
                                            field.onBlur();
                                        }}
                                        
                                    />
                                )}
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