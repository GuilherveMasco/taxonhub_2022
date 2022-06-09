import { Flex, Table, TableContainer, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ComponentsTable } from '../../components/OccurrenceTable/componentsTable';
import { IOccurrence } from '../../models/occurrence';

export default function ResultadoOcorrencias() {  
    const [occurrence, setOccurrence] = useState<IOccurrence[]>([] as IOccurrence[]);
    
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
        }, 3000)
    }

    useEffect(() => {
        getOccurrence();
    }, [])

    return (
        <> 
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

                            <div className=" bg-white w-1990 h-712 rounded-3xl flex flex-row">
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
                                        {occurrence.map(occurrence => (
                                            <ComponentsTable occurrence={occurrence} key={occurrence.id}/> 
                                            ))}                      
                                    </Table>
                                </TableContainer>                     
                            </div>                        
                        </VStack>
                    </div>
                </Flex>               
            </div>

        </>
    );
}
