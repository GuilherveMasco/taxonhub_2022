// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { Select } from "../Select/select";

function Header() {
    return (
    
        <>
        <Stack className="bg-HeaderColor w-full h-182">
            <HStack  className='m-14' spacing='5rem'>
                <Select haslabel label='Tipo de busca'  w='w-72' h='h-16' fontSize='text-xl'>
                    <option>Taxonômica</option>
                    <option>Ocorrência</option>
                </Select>
            </HStack>
        </Stack>
        </>
      
    );
}

export {Header}