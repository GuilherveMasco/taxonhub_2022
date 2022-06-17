// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack, Box } from "@chakra-ui/react";
import { Buttons } from "../Buttons/buttons";
import { TbFileUpload } from "react-icons/tb";
import React, { useState } from "react";
import { Select } from "../Select/select";
import { MdSearch } from "react-icons/md";

export function Header() {
    const [type, setType] = useState();

      function validateName(value) {
    let error
    if (!value) {
      error = "Name is required"
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }

    function onChangeType(e: React.ChangeEvent){        
        const target = e.target as HTMLSelectElement
        console.log(target?.value);
    }
    return (
        <Stack className="bg-HeaderColor w-full h-182">
            <form>
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
                    <TbFileUpload size='3rem' color='transparent'/>
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
                
                <Buttons 
                    rounded='rounded-xl' 
                    w='w-20' 
                    h='h-16'
                    type="submit"
                    >
                     <MdSearch size='3.5rem' />
                </Buttons>
            </HStack>
                </form>
        </Stack>
    );
}