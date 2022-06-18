// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack, FormControl, Box, Image } from "@chakra-ui/react";
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
        <Stack className="bg-HeaderColor w-full h-40">
            <HStack className='m-10 px-8' spacing='56rem' >
                    <Image src="https://i.ibb.co/6y78TjR/logo.png" alt="Logo" width={277} height={86} />
                <HStack spacing='5rem'>
                    <Buttons
                        w='w-72' 
                        h='h-16'                    
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
                        value={type}  
                        id='select'
                        required
                        onChange={(e: React.ChangeEvent) => onChangeType(e)}
                    >
                        <option value='taxonomic'>Taxonômica</option>
                        <option value='occurrence'>Ocorrência</option>
                    </Select>
                    
                    <Buttons                     
                        w='w-20' 
                        h='h-16'
                        id='submit'
                        type="submit"
                    >
                        <MdSearch size='3.5rem' />
                    </Buttons>
                </HStack>
            </HStack>
        </Stack>
    );
}