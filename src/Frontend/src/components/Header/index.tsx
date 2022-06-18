// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack, Image, Box } from "@chakra-ui/react";
import { Buttons } from "../Buttons/buttons";
import { TbFileUpload } from "react-icons/tb";
import React, { useState } from "react";
import { Select } from "../Select/select";
import { MdSearch } from "react-icons/md";


export function Header() {
    const [type, setType] = useState();

    function onChangeType(e: React.ChangeEvent){        
        const target = e.target as HTMLSelectElement
        console.log(target?.value);
    }
    return (
        <Stack className="bg-HeaderColor w-full h-182">
            <form>
            <HStack className='m-14' spacing='5rem'>
                    <Image src="https://i.ibb.co/6y78TjR/logo.png" alt="Logo" width={277} height={86} />
            <Buttons
                    text='text-xl' 
                    rounded='rounded-xl' 
                    w='w-72' 
                    h='h-16'
                    wMin='min-w-72' 
                    hMin='min-h-16'
                    wMax='max-w-72'
                    hMax='max-h-16'
                    disabled
                    >
                    Enviar arquivo
                    <TbFileUpload size='3rem' color='transparent'/>
                    <Box display="inherit" color='transparent' overflow='hidden' opacity={1}>
                    <input type="file" accept=".csv" id='fileInput' required/>
                    </Box>
            </Buttons>

            <Select
            w='w-72' 
            h='h-16' 
            fontSize='text-xl'                
            value={type}  
            id='select'
            required
            onChange={(e: React.ChangeEvent) => onChangeType(e)}
            >
                <option value='taxonomic'>Taxonômica</option>
                <option value='occurrence'>Ocorrência</option>
            </Select>
                
                <Buttons 
                    rounded='rounded-xl' 
                    w='w-20' 
                    h='h-16'
                    id='submit'
                    type="submit"
                    >
                     <MdSearch size='3.5rem' />
                </Buttons>
            </HStack>
                </form>
        </Stack>
    );
}