import { MagnifyingGlass } from "@phosphor-icons/react";
import { AutoLayout, SearchField } from "./styles";

export function SearchBar() {
    
    
    return (
        <AutoLayout>
            <SearchField>
                <input 
                    placeholder="Pesquisa por nome" 
                    required>
                </input>
                <button type="submit">
                    <MagnifyingGlass size={24}/>
                </button>
            </SearchField>
            <SearchField>
                <input 
                    placeholder="Pesquisa por CPF"
                    required>
                </input>
                <button type="submit">
                    <MagnifyingGlass size={24}/>
                </button>
            </SearchField>
        </AutoLayout>
    )
}