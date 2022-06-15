import { Flex, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ComponentsTable } from '../../components/SortingTable/componentsTable';
import { ISorting } from '../../models/sorting';

export default function ResultadoTaxonomico() {  
    

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
                        <TableContainer>
                            <Table variant='striped' colorScheme='blue'>
                               
                                <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                                </Tbody>
                               
                            </Table>
                            </TableContainer>         
                        </div>                        
                    </VStack>
                </div>
            </Flex>               
        </div>
    );
}


