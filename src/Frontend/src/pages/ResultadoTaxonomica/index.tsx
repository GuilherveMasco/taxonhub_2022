import { Flex, Table, TableContainer, Tbody, Th, Thead, Tr, VStack, Spinner, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { RiSave3Fill } from "react-icons/ri";
import { ComponentsTable } from '../../components/TaxonomicTable/componentsTable';
import { ITaxonomic } from '../../models/taxonomic';
import { Buttons } from '../../components/Buttons/buttons';

export default function ResultadoTaxonomico() {  
    const [taxonomic, setTaxonomic] = useState<ITaxonomic[]>([] as ITaxonomic[]);
    const [isLoadingTable, setIsLoadingTable] = useState<boolean>(true);
    const addToast = useToast();

    async function saveCSV() {
        try {
            //window.open('https://storage.googleapis.com/teste-250412.appspot.com/modelo_novo_output_1a_lista.csv'); //cenário de teste
            window.open('http://localhost:8080/downloadCSVTaxonomica'); //integração com o back
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
    
    function getTaxonomic(){
        setTimeout(() => {
            setTaxonomic([{
                id: '1',
                nameP: 'Eichhornia azurea',
                nameR: 'Eichhornia azurea (Sw.) Kunth',
                nameA: 'NOME_ACEITO',
                synonym: '',
                bd: 'FDB',
                family: 'Pontederiaceae',
            },
            {
                id: '2',
                nameP: 'Eichhornia azurea',
                nameR: 'Eichhornia azurea var. rhizantha Seub.',
                nameA: 'SINONIMO',
                synonym: 'Eichhornia azurea (Sw.) Kunth',
                bd: 'FDB',
                family: 'Pontederiaceae',
            },
            {
                id: '3',
                nameP: 'Eichhornia azurea',
                nameR: 'Eichhornia azurea var. genuina Seub.',
                nameA: 'SINONIMO',
                synonym: 'Eichhornia azurea (Sw.) Kunth',
                bd: 'FDB',
                family: 'Pontederiaceae',
            },
            {
                id: '4',
                nameP: 'Eichhornia azurea',
                nameR: 'Eichhornia azurea var. rigida Seub.',
                nameA: 'SINONIMO',
                synonym: 'Eichhornia azurea (Sw.) Kunth',
                bd: 'FDB',
                family: 'Pontederiaceae',
            }])
            setIsLoadingTable(false);
        }, 2000)
    }

    useEffect(() => {
        getTaxonomic();
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

                        <div className="bg-white w-1990 h-647 rounded-3xl flex flex-row">
                            { isLoadingTable ? (
                                <div className="flex w-full h-full items-center justify-center">
                                    <Spinner size="xl" />
                                </div>
                            ) : (
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
                                        <Tbody>
                                            { taxonomic.map(taxonomic => (
                                                <ComponentsTable taxonomic={taxonomic} key={taxonomic.id} />
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
