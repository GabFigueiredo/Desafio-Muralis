import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, HeaderContent, Overlay, StyledDialogTitle, TableStyle, TBodyTable } from './styles'
import { PencilSimple, Trash, XCircle } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { ClientContext } from '../../../../contexts/ClientsContext'
import { EditClientModal } from '../EditClientModal'

interface Cliente {
    id: number,
    CPF: string,
    nome: string,
    DtNascimento: string,
    endereco: string
}

interface UserCardProps {
    cliente: Cliente
    setIsUserCardModalOpen: (isUserCardModalOpen: boolean) => void;
}

export function UserCard({ cliente, setIsUserCardModalOpen }: UserCardProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const { deleteClient } = useContext(ClientContext)

    function handleDeleteClient() {
        deleteClient(cliente.id)
        setIsUserCardModalOpen(false)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content aria-describedby={undefined}>
                <div>
                    <HeaderContent>
                        <div>
                            <StyledDialogTitle>{cliente.nome}</StyledDialogTitle>
                            <Dialog.Root open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                                <Dialog.Trigger asChild>
                                    <PencilSimple size={24} />
                                </Dialog.Trigger>

                                <EditClientModal 
                                    setIsEditModalOpen={setIsEditModalOpen}
                                    cliente={cliente}
                                />

                            </Dialog.Root>
                            <button onClick={handleDeleteClient}>
                                <Trash size={24}/>
                            </button>
                        </div>
                        <p>{cliente.CPF}</p>
                    </HeaderContent>
                    <CloseButton>
                        <XCircle size={30}/>    
                    </CloseButton> 
                </div>
                <TableStyle>
                    <TBodyTable>
                        <tr>
                            <td>ID</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                            <td>Observação</td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                            <td>Observação</td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                            <td>Observação</td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                            <td>Observação</td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                            <td>Observação</td>
                        </tr>
                    </TBodyTable>
                </TableStyle>
            </Content>
        </Dialog.Portal>
)


}