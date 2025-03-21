import { UserCirclePlus } from "@phosphor-icons/react"
import { Button } from "./styles"

export function CreateButton() {
    return (
        <Button>
            <p>Criar</p>
            <UserCirclePlus size={20}/>
        </Button>
    )
}