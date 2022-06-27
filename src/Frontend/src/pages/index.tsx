import type { NextPage } from 'next'
import router from "next/router";
import { VStack, Image } from '@chakra-ui/react';
import React from 'react';
import { Buttons } from '../components/Buttons/buttons';

const Home: NextPage = () => {  

    function goTaxonomic(){
        router.push('/ResultadoTaxonomica')
    }
    function goOccurrence(){
        router.push('/ResultadoOcorrencias')
    }
    return (
        <div className="bg-[#008000] w-screen h-screen">            
            <VStack  justifyContent='center' spacing='4rem' >
                <Image src="https://i.ibb.co/6y78TjR/logo.png" alt="Logo" className="w-277 h-72 mt-28" />

                <VStack spacing='2rem'>
                    <Buttons  onClick={goTaxonomic} w='w-96' h='h-20' text='text-3xl' font='font-bold'>
                        Busca Taxonômica
                    </Buttons>
                    <Buttons onClick={goOccurrence} w='w-96' h='h-20' text='text-3xl' font='font-bold'>
                        Busca de Ocorrência
                    </Buttons>         
                </VStack>
            </VStack>     
        </div>
    );
}
export default Home