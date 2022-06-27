import { Box, Flex, HStack, Spinner, Table, TableContainer, Tbody, Th, Thead, Tr, useToast, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ComponentsTable } from '../../components/OccurrenceTable/componentsTable';
import { IOccurrence } from '../../models/occurrence';
import { Buttons } from '../../components/Buttons/buttons';
import { RiSave3Fill } from "react-icons/ri";


import { TbFileUpload } from "react-icons/tb";
import { MdSearch } from "react-icons/md";

export default function ResultadoOcorrencias() {  
    const [occurrence, setOccurrence] = useState<IOccurrence[]>([] as IOccurrence[]);
    const [isLoadingTable, setIsLoadingTable] = useState<boolean>(true);
    const addToast = useToast();
    
    async function saveCSV() {
        try {
            //window.open('https://storage.googleapis.com/teste-250412.appspot.com/modelo_novo_output_1a_lista.csv'); //cenário de teste
            window.open('http://localhost:8080/downloadCSVOcorrencias'); //integração com o back
        } catch (error) {
            addToast({
                title: 'Aconteceu um erro',
                description: 'Não foi possível salvar o arquivo',
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top-right',
                variant: 'left-accent'
            })
        }
    }

    function getOccurrence(){
        setTimeout(() => {
            setOccurrence([{
                id: '1',
                entry_name: 'Abildgaardia ovata (Burm.f. Kral)',
                found_name: 'Abildgaardia ovata (Burm. Kral)',
                accepted_name: 'Fimbristylis ovata (Burm.f. J.Kern)',
                base_de_dados: 'SPL',
                familia: 'Cyperaceae',
                pais: 'any',
                year: 1988,
                month: 6,
                day: 7,
                lat: 0.72,
                long: -78.25,
                Coord_SPL_Mun: '',
            },
            {
                id: '2',
                entry_name: 'Abildgaardia ovata (Burm.f. Kral)',
                found_name: 'Abildgaardia ovata (Burm. Kral)',
                accepted_name: 'Fimbristylis ovata (Burm.f. J.Kern)',
                base_de_dados: 'SPL',
                familia: 'Cyperaceae',
                pais: 'any',
                year: 1988,
                month: 9,
                day: 19,
                lat: 9.07,
                long: -69.73,
                Coord_SPL_Mun: '',
            }

        ])
        setIsLoadingTable(false);
        }, 2000)
    }

    useEffect(() => {
        getOccurrence();
    }, [])

    return (         
        <div className="bg-BgColor w-screen h-screen">
            <Header/>
            
            <Flex justifyContent='center'>
                <div>
                    <VStack spacing='2rem'>
                        <div  className="w-[123rem]">
                            <HStack justifyContent='space-between'>
                                <h1 className="text-4xl	font-bold text-left pt-9">
                                    Resultado de ocorrências
                                </h1>
                                <HStack spacing='5rem' >
                                    <Buttons w='w-72'h='h-16'>
                                        Enviar arquivo
                                        <TbFileUpload size='3rem' color='transparent'/> {/* É gambiarra mesmo, não sei um jeito melhor */}
                                        <Box display="inherit" color='transparent' overflow='hidden' opacity={1}>
                                            <input type="file" accept=".csv" id='fileInput' required/>
                                        </Box>
                                    </Buttons>      
                                    
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
                        </div>

                        <div className=" bg-white w-1990 h-647 rounded-3xl flex flex-row">
                            { isLoadingTable ? (
                                <div className="flex w-full h-full items-center justify-center">
                                    <Spinner size="xl" />
                                </div>
                            ) : (
                                    <TableContainer className="w-full h-full">
                                        <Table variant='striped' colorScheme='teal'>
                                            <Thead>
                                                <Tr>
                                                    <Th className="border-r !border-[#000]">entry_name</Th>
                                                    <Th className="border-r !border-[#000]">found_name</Th>
                                                    <Th className="border-r !border-[#000]">accepted_name</Th>
                                                    <Th className="border-r !border-[#000]">base_de_dados</Th>
                                                    <Th className="border-r !border-[#000]">familia</Th>
                                                    <Th className="border-r !border-[#000]">pais</Th>
                                                    <Th className="border-r !border-[#000]">year</Th>
                                                    <Th className="border-r !border-[#000]">month</Th>
                                                    <Th className="border-r !border-[#000]">day</Th>
                                                    <Th className="border-r !border-[#000]">lat</Th>
                                                    <Th className="border-r !border-[#000]">long</Th>
                                                    <Th isNumeric className="border-l !border-[#000]">Coord_SPL_Mun</Th>
                                                </Tr>
                                            </Thead>                
                                            <Tbody>
                                                {occurrence.map(occurrence => (
                                                    <ComponentsTable occurrence={occurrence} key={occurrence.id}/> 
                                                ))}  
                                            </Tbody>
                                        </Table>
                                    </TableContainer>        
                                ) }              
                        </div>     
                        <div  className=' absolute bottom-0 right-14 p-7 px-4' >                                
                            <Buttons onClick={saveCSV}>
                                Salvar arquivo gerado <RiSave3Fill size='2.5rem'/>
                            </Buttons>                                                  
                        </div>                                                    
                    </VStack>
                </div>
            </Flex>               
        </div>
    );
}
