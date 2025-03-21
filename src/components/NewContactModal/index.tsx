import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useContext } from 'react'
// import { ClientContext } from '../../contexts/ClientsContext'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CloseButton, RadioButton } from './styles'

interface NewContactModalProps {
    setIsEditContactModal: (isOpen: boolean) => void;
}


const NewContactSchema = z.object({
    tipo: z.string(),
    valor: z.string(),
    observacao: z.string(),
})

type newContactFormInputs = z.infer<typeof NewContactSchema>

export function NewContactModal({setIsEditContactModal}: NewContactModalProps) {
    // const { createNewContact } = useContext(ClientContext)

    const { register, reset, handleSubmit, control } = useForm<newContactFormInputs>({
        resolver: zodResolver(NewContactSchema)
    })

    async function handleCreateNewContact(data: newContactFormInputs) {
        console.log(data)
        setIsEditContactModal(false)
        reset()
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
                <Dialog.Title>Novo Contato</Dialog.Title>

                <form onSubmit={handleSubmit(handleCreateNewContact)}>
                    <Controller
                        name="tipo"
                        control={control}
                        render={({ field }) => (
                            <RadioGroup.Root {...field} onValueChange={field.onChange} value={field.value}>
                                <RadioButton value='Email'>
                                    Email
                                </RadioButton>
                                <RadioButton value='Telefone'>
                                    Telefone
                                </RadioButton>
                                
                            </RadioGroup.Root>
                        )}
                    />
                    <input
                        placeholder='Numero/email'
                        required
                        {...register("valor")}
                    />
                    <input
                        placeholder='Observação'
                        required
                        {...register("observacao")}
                    />
                    <button type='submit'>Cadastrar</button>
                </form>
            </Dialog.Content>

            <CloseButton />
        </Dialog.Portal>
    )
}