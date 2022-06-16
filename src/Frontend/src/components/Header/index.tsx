// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { Buttons } from "../Buttons/buttons";
import { TbFileUpload } from "react-icons/tb";
import { FcSearch } from "react-icons/fc";
import { Select } from "../Select/select";


function Header() {
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
                    arquivo.csv <TbFileUpload size='2.5rem' />
                </Buttons>

                <Select /* haslabel label='Tipo de busca' */ w='w-72' h='h-16' fontSize='text-xl'>
                    <option>Taxonômica</option>
                    <option>Ocorrência</option>
                </Select>

                <Buttons 
                    rounded='rounded-xl' 
                    w='w-20' 
                    h='h-16'
                    
                    >
                     <FcSearch size='3.5rem' />
                </Buttons>

           </HStack>
        </Stack>
       
      
    );
}

export {Header}