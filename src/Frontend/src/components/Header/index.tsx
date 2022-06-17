// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Select } from "../Select/select";


export function Header() {
    const [type, setType] = useState();

    function onChangeType(e: React.ChangeEvent){        
        const target = e.target as HTMLSelectElement
        console.log(target?.value);
    }
    return (
        <Stack className="bg-HeaderColor w-full h-182">
            <HStack  className='m-14' spacing='5rem'>
                    <Image src="https://i.ibb.co/6y78TjR/logo.png" alt="Logo" width={277} height={86} />
                <Select 
                w='w-72' 
                h='h-16' 
                fontSize='text-xl'                
                value={type}  
                
                onChange={(e: React.ChangeEvent) => onChangeType(e)}
                >
                    <option value='undefined' >Tipo de busca</option>
                    <option value='taxonomic'>Taxonômica</option>
                    <option value='occurrence'>Ocorrência</option>
                </Select>
            </HStack>
        </Stack>
    );
}