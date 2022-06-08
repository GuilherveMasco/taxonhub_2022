import { Flex, Table, TableContainer, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/Header';


export default function ResultadoTaxonomica() {  
    
    return (
        <> 
            <div className="bg-BgColor w-screen h-screen">
                <Header/>
                
                <Flex justifyContent='center'>
                    <div>
                        <VStack spacing='2rem'>
                            <div  className="w-[123rem]">
                                <h1 className="text-4xl	font-bold text-left pt-9">
                                    Resultado taxonômica
                                </h1>
                            </div>

                            <div className=" bg-white w-1990 h-712 rounded-3xl flex flex-row">
                                                 
                            </div>                        
                        </VStack>
                    </div>
                </Flex>               
            </div>

        </>
    );
}
