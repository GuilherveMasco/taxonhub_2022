import { Flex, Table, TableContainer, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ComponentsTable } from '../../components/SortingTable/componentsTable';
import { ISorting } from '../../models/sorting';
import { Buttons } from '../../components/Buttons/buttons';
import { RiSave3Fill } from "react-icons/ri";

export default function ResultadoTaxonomico() {  
    const [sorting, setSorting] = useState<ISorting[]>([] as ISorting[]);
    
    function getSorting(){
        setTimeout(() => {
            setSorting([{
                id: '1',
                nameP: 'any',
                nameR: 'any',
                nameA: 'any',
                synonym: 'any',
                bd: 'any',
                family: 'any',
            },
            {
                id: '2',
                nameP: 'anhy',
                nameR: 'anhy',
                nameA: 'anhy',
                synonym: 'anhy',
                bd: 'anhy',
                family: 'anhy',
            }

        ])
        }, 3000)
    }

    useEffect(() => {
        getSorting();
    }, [])

    return (
       
        <div className="bg-BgColor w-screen h-screen">
            <Header/>
            
            <Flex justifyContent='center'>
                <div>
                    <VStack spacing='2rem'>
                        <div  className="w-[123rem]">
                            <h1 className="text-4xl	font-bold text-left pt-9">
                                Resultado de busca taxonômica
                            </h1>
                        </div>

                        <div className=" bg-white w-1990 h-712 rounded-3xl flex flex-row">
                            <TableContainer className="w-full h-full">
                                <Table variant='striped' colorScheme='teal'>
                                    <Thead>
                                        <Tr>
                                            <Th className="border-r !border-[#000]">Nome pesquisado</Th>
                                            <Th className="border-r !border-[#000]">Nomes retornados</Th>
                                            <Th className="border-r !border-[#000]">Nome aceito/sinônimo</Th>
                                            <Th className="border-r !border-[#000]">Sinônimo de</Th>
                                            <Th className="border-r !border-[#000]">Base de dados (FDB/TPL) </Th>
                                            <Th isNumeric className="border-l !border-[#000]">Familia respectiva da base</Th>
                                        </Tr>
                                    </Thead>                
                                    {sorting.map(sorting => (
                                        <ComponentsTable sorting={sorting} key={sorting.id}/> 
                                        ))}                      
                                </Table>
                            </TableContainer>                     
                        </div>   
                        <Buttons rounded='rounded-xl' text='text-xl' >
                            Salvar arquivo gerado <RiSave3Fill size='2.5rem'/>
                        </Buttons>                      
                    </VStack>
                </div>
            </Flex>               
        </div>
    );
}


