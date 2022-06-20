import { Flex, Spinner, Table, TableContainer, Tbody, Th, Thead, Tr, useToast, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ComponentsTable } from '../../components/OccurrenceTable/componentsTable';
import { IOccurrence } from '../../models/occurrence';
import { Buttons } from '../../components/Buttons/buttons';
import { RiSave3Fill } from "react-icons/ri";

export default function ResultadoOcorrencias() {  
    const [occurrence, setOccurrence] = useState<IOccurrence[]>([] as IOccurrence[]);
    const [isLoadingTable, setIsLoadingTable] = useState<boolean>(true);
    const addToast = useToast();
    
    async function saveCSV() {
        try {
            window.open('https://storage.googleapis.com/teste-250412.appspot.com/modelo_novo_output_1a_lista.csv'); //cenário de teste
           // window.open('http://localhost:8080/downloadCSVOcorrencias'); //integração com o back
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
                entry_name: 'any',
                found_name: 'any',
                accepted_name: 'any',
                base_de_dados: 'any',
                familia: 'any',
                pais: 'any',
                year: 1998,
                month: 5,
                day: 13,
                lat: -65,
                long: 5,
                Coord_SPL_Mun: 'any',
            },
            {
                id: '2',
                entry_name: 'any',
                found_name: 'any',
                accepted_name: 'any',
                base_de_dados: 'any',
                familia: 'any',
                pais: 'any',
                year: 1998,
                month: 5,
                day: 13,
                lat: -65,
                long: -5452,
                Coord_SPL_Mun: 'any',
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
                            <h1 className="text-4xl	font-bold text-left pt-9">
                                Resultado de ocorrências
                            </h1>
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
