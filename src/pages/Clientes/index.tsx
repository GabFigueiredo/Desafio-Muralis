import { UserCirclePlus } from "@phosphor-icons/react";
import { ClientsTable } from "../../components/ClientsTable";
import { SearchBar } from "./components/SearchBar";
import { Button, MainContainer, TableContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useState } from "react";
import { ClientContext } from "../../contexts/ClientsContext";
import { NewClientModal } from "../../components/NewClientModal";

// const contactMock = [
//     {
//         id: 100,
//         cpf: "18293092867",
//         nome: "Mário Marcos Martins",
//         DtNascimento: "24/03/2006",
//         endereco: "Rua da bondade, 12 - Jacareí"
//     },
//     {
//         id: 101,
//         cpf: "93872901982",
//         nome: "Henry Murilo Lampoglio",
//         DtNascimento: "16/07/2004",
//         endereco: "Rua do código, 09 - Mogi das Cruzes"
//     },
// ]

export function Clientes() {
    const [isOpen, setIsOpen] = useState(false);
    const { clientes } = useContext(ClientContext);

    return (
        <MainContainer>
            <div>
                <strong>Clientes</strong>

                <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                    <Dialog.Trigger asChild>
                    <Button>
                        <p>Criar</p>
                        <UserCirclePlus size={20}/>
                    </Button>
                    </Dialog.Trigger>
                    <NewClientModal setIsOpen={setIsOpen}/>
                </Dialog.Root>

            </div>
            <SearchBar />
            <TableContainer>
                <ClientsTable clientes={clientes}/> 
            </TableContainer>
        </MainContainer>
    )
}