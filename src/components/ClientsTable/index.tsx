import { SingleRow } from "./components/Row";
import { TableStyle, TBodyTable, TheadTable } from "./styles";

export interface Cliente {
    id: number,
    CPF: string,
    nome: string,
    DtNascimento: string,
    endereco: string
}

interface ClientsTableProps {
    clientes: Cliente[]
} 

export function ClientsTable({ clientes }: ClientsTableProps) {

    return (
        <TableStyle>
            <TheadTable>
                <tr>
                    <th>ID</th>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Data de nascimento</th>
                    <th>Endereço</th>
                </tr>
            </TheadTable>
            <TBodyTable>
                {clientes.map((cliente, index) => {
                    return <SingleRow key={index} cliente={cliente} />
                })}
            </TBodyTable>
        </TableStyle>
    )
}



{/* <tr>
    <td>101</td>
    <td>Mário Marcos Martins</td>
    <td>93862701927</td>
    <td>24/03/2006</td>
    <td>Rua da bondade, 12 - Jacareí</td>
</tr>
<tr>
    <td>102</td>
    <td>Henry Murilo Lampoglio</td>
    <td>85927836192</td>
    <td>13/07/2046</td>
    <td>Rua do código, 10 - Mogi das Cruzes</td>
</tr> */}