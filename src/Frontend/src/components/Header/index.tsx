// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Select } from "../Select/select";

export function Header() {
    const [type, setType] = useState();

    function onChangeType(){
        console.log(type);
    }
    return (
    
        <>
        <Stack className="bg-HeaderColor w-full h-182">
            <HStack  className='m-14' spacing='5rem'>
                <Select 
                /* haslabel label='Tipo de busca'  */ 
                w='w-72' 
                h='h-16' 
                fontSize='text-xl'                
                value={type}  
                onClick={onChangeType}
                >
                    <option>Tipo de busca</option>
                    <option>Taxonômica</option>
                    <option>Ocorrência</option>
                </Select>
            </HStack>
        </Stack>
        </>      
    );
}