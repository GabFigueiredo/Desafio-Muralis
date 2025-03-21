import { useState } from "react";
import { MainContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { NewContactModal } from "../../components/NewContactModal";
import { UserCirclePlus } from "@phosphor-icons/react";


export function Contatos() {
    const [isEditContactModal, setIsEditContactModal] = useState(false)


    return (
        <MainContainer>
                <div>
                    <strong>Contatos</strong>
                    <Dialog.Root open={isEditContactModal} onOpenChange={setIsEditContactModal}>
                        <Dialog.Trigger asChild>
                        <Button>
                            <p>Criar</p>
                            <UserCirclePlus size={20}/>
                        </Button>
                        </Dialog.Trigger>
                        <NewContactModal setIsOpen={setIsOpen}/>
                    </Dialog.Root>
                </div>
        </MainContainer>
)
}