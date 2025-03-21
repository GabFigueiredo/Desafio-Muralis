import { useState } from "react";
import { UserCard } from "../UserCard";
import {  ValueRow } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

export interface Cliente {
    id: number,
    CPF: string,
    nome: string,
    DtNascimento: string,
    endereco: string
}

interface SingleRowProps {
    cliente: Cliente
 }

export function SingleRow({ cliente }: SingleRowProps) {
    const [isUserCardModalOpen, setIsUserCardModalOpen] = useState(false)

    return (
        <Dialog.Root open={isUserCardModalOpen} onOpenChange={setIsUserCardModalOpen}>
            <Dialog.Trigger asChild>
                <ValueRow>
                    <td>{cliente.id}</td>
                    <td>{cliente.CPF}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.DtNascimento}</td>
                    <td>{cliente.endereco}</td>
                </ValueRow>
            </Dialog.Trigger>

            <UserCard 
                cliente={cliente} 
                setIsUserCardModalOpen={setIsUserCardModalOpen}
            />
        </Dialog.Root>

    )
}