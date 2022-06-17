// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack, FormControl, Box } from "@chakra-ui/react";
import { Buttons } from "../Buttons/buttons";
import { TbFileUpload } from "react-icons/tb";
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

            <HStack className='m-14' spacing='5rem'>
                <Buttons
                    text='text-xl' 
                    rounded='rounded-xl' 
                    w='w-72' 
                    h='h-16'
                    wMin='min-w-72' 
                    hMin='min-h-16'
                    wMax='max-w-72'
                    hMax='max-h-16'
                    >
                    Enviar arquivo
                    <TbFileUpload size='3rem' color='transparent'/> {/* É gambiarra mesmo, não sei um jeito melhor */}
                    <Box display="inherit" color='transparent' overflow='hidden' opacity={1}>
                        <input type="file" accept=".csv" id='fileInput'/>
                    </Box>
                </Buttons>

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