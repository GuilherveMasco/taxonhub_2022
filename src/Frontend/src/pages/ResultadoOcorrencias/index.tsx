import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/Header';
import { OccurrenceTable } from '../../components/OccurrenceTable';

export default function ResultadoOcorrencias() {  
    
    return (
        <> 
            <div className="bg-BgColor w-screen h-screen">
                <Header/>
                
                <Flex  justifyContent='center' className=" ">
                    <div>
                        <VStack className="" >
                            <div  className="w-[123rem]">
                                <h1 className="text-4xl	font-bold text-left pt-9">
                                    Resultado de ocorrências
                                </h1>
                            </div>

                            <div className=" bg-white w-1990 h-712 rounded-3xl flex flex-row">
                                <OccurrenceTable/>                       
                            </div>                        
                        </VStack>
                    </div>
                </Flex>               
            </div>

        </>
    );
}
