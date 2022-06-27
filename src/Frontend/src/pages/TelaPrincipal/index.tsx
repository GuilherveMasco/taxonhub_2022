import type { NextPage } from 'next'
import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/Header';

const Home: NextPage = () => {  
    
    return (
        <div className="bg-BgColor w-screen h-screen">
            <Header/>
            
            <Flex  justifyContent='center' >
                <div>
                    <VStack spacing='2rem' className="" >
                        <div  className="w-[123rem]">
                            <h1 className="text-4xl	font-bold text-left pt-9">Sobre o TaxonHub</h1>
                        </div>

                        <div className=" bg-white w-1990 h-712 rounded-3xl flex flex-row">
                            <p className="text-2xl p-5 ">
                                TaxonHub é um *site* que foi desenvolvido para a realização de busca taxonômicas e de ocorrências. 
                            </p>                            
                        </div>                        
                    </VStack>
                </div>
            </Flex>     
        </div>
    );
}
export default Home