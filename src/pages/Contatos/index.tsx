import { CreateButton } from "../../components/CreateButton";
import { MainContainer } from "./styles";


const contactMock = [
    {
        id: 1000,
        client_id: 101,
        tipo: "Alimentação",
        valor: "47.50",
        observacao: "Esse contato possui uma observação"
    }
]
    

export function Contatos() {
    return (
        <MainContainer>
                <div>
                    <strong>Contatos</strong>
                    <CreateButton />
                </div>
        </MainContainer>
)
}