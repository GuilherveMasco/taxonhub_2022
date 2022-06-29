import { Box, Flex, HStack, Spinner, Table, TableContainer, Tbody, Th, Thead, Tr, useToast, VStack, Center, Button, useDisclosure  } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../../components/Header';
import { ComponentsTable } from '../../components/OccurrenceTable/componentsTable';
import { IOccurrence } from '../../models/occurrence';
import { Buttons } from '../../components/Buttons/buttons';
import { RiSave3Fill } from "react-icons/ri";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { TbFileUpload } from "react-icons/tb";
import { MdSearch } from "react-icons/md";
import { usePapaParse  } from "react-papaparse";

export default function ResultadoOcorrencias() {  
    const [occurrence, setOccurrence] = useState<IOccurrence[]>([] as IOccurrence[]);
    const [isLoadingTable, setIsLoadingTable] = useState<boolean>(true);
    const addToast = useToast();
    
    async function uploadFile(event){
        const input = document.getElementById('fileInput') as HTMLInputElement;
        
        var file = new FormData()
        file.append('Upload', input.files[0])

        fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: file
        }).then(
            response => response.json()
        ).then(
            success => {
                console.log(success.resposta)
                var nomeArq = {file:input.files[0].name}
                    fetch('http://localhost:8080/verificaCSV', {
                        method: 'POST',
                        headers: {'content-type':'application/json'},
                        mode: 'cors',
                        body: JSON.stringify(nomeArq)
                    }).then(
                        response => response.json()
                    ).then(
                        success => {console.log(success.resposta)
                        if(success.resposta == 'Arquivo Com Formato Válido'){
                            fetch('http://localhost:8080/validateCSV', {
                                method: 'POST',
                                headers: {'content-type':'application/json'},
                                mode: 'cors',
                                body: JSON.stringify(nomeArq)
                            }).then(
                                response => response.json()
                            ).then(
                                success => {console.log(success.resposta)
                                    if(success.resposta == 'Arquivo Válido'){
                                        addToast({
                                            title: 'Arquivo Enviado',
                                            description: success.resposta,
                                            status: 'success',
                                            duration: 4000,
                                            isClosable: true,
                                            position: 'top-right',
                                            variant: 'left-accent'
                                        })   
                                }else{
                                    addToast({
                                        title: 'Aconteceu um erro',
                                        description: success.resposta,
                                        status: 'error',
                                        duration: 4000,
                                        isClosable: true,
                                        position: 'top-right',
                                        variant: 'left-accent' 
                                })
                                event.target.value = null
                            }}
                            ).catch(
                                error => {console.log(error.resposta)
                                    addToast({
                                        title: 'Aconteceu um erro',
                                        description: success.resposta,
                                        status: 'error',
                                        duration: 4000,
                                        isClosable: true,
                                        position: 'top-right',
                                        variant: 'left-accent' 
                                })
                                event.target.value = null }
                                )
                        }else{
                            addToast({
                                title: 'Aconteceu um erro',
                                description: success.resposta,
                                status: 'error',
                                duration: 4000,
                                isClosable: true,
                                position: 'top-right',
                                variant: 'left-accent'
                            })
                            event.target.value = null
                        }
                    }
                    ).catch(
                        error => {console.log(error.resposta)
                            addToast({
                                title: 'Aconteceu um erro',
                                description: error.resposta,
                                status: 'error',
                                duration: 4000,
                                isClosable: true,
                                position: 'top-right',
                                variant: 'left-accent'
                            })
                        event.target.value = null }
                        )
            }
        ).catch(
            error => {console.log(error)
                addToast({
                    title: 'Aconteceu um erro',
                    description: error,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position: 'top-right',
                    variant: 'left-accent'
                })
            event.target.value = null }
        );
    }

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
            /* setOccurrence([{
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
            },
            {
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
                id: '10',
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
                id: '11',
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
                id: '11',
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
                id: '11',
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
                id: '11',
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
                id: '11',
                entry_name: 'Abildgaardia ovata (Burm.f. Kral)',
                found_name: 'Abildgaardia ovata (Burm. Kral)',
                accepted_name: 'Fimbristylis ovata (Burm.f. J.Kern)',
                base_de_dados: 'SPL jhgiugjhgjhgjhgjhgjhghjghjgjh',
                familia: 'Cyperaceae',
                pais: 'anydfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
                year: 1988,
                month: 6,
                day: 7,
                lat: 0.72,
                long: -78.25,
                Coord_SPL_Mun: '',
            },


        ]) */
        setIsLoadingTable(false);
        }, 2000)
    }

    useEffect(() => {
        getOccurrence();
    }, [])

    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
        />
    )
        
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { readString } = usePapaParse();
    const abortController = useRef(null);

    const cancelarPesquisa = () => {
        abortController.current && abortController.current.abort();
        onClose();
    }

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
                                <form 
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        setOverlay(<OverlayOne />)
                                        onOpen()

                                        var arquivo = document.getElementById("fileInput") as HTMLInputElement;
                                        var reader = new FileReader();
                                        var nomesPesquisa = {names:[]};
                                        
                                        reader.onload = function(){
                                            
                                            readString(reader.result.toString(), {
                                                worker: true,
                                                complete: async (results) => {
                                                    results.data.shift();
                                                    results.data.forEach(element => {
                                                        if(element[0] != nomesPesquisa.names)
                                                        nomesPesquisa.names.push(element[0]);
                                                    }
                                                    )
                                                    
                                                    // const requestOptions = {
                                                    //     method: 'POST',
                                                    //     headers: { 'Content-Type': 'application/json' },
                                                    //     body: JSON.stringify(nomesPesquisa)
                                                    // };
                                                    // const response = await fetch('http://localhost:8080/specieslink', requestOptions);
                                                    // const nomesretornados = await response.json();
                                                    // setOccurrence(nomesretornados);
                                                    // console.log(nomesretornados);
                                                    // onClose();
                                                    
                                                    abortController.current = new AbortController();
                                                    
                                                    fetch('http://localhost:8080/specieslink', {
                                                        method: 'POST',
                                                        headers: {'content-type':'application/json'},
                                                        mode: 'cors',
                                                        body: JSON.stringify(nomesPesquisa),
                                                        signal: abortController.current.signal,
                                                    }).then(
                                                        response => response.json()
                                                        ).then(
                                                            success => {console.log(success)
                                                                setOccurrence(success);
                                                                onClose();
                                                                
                                                                addToast({
                                                                    title: 'Pesquisa realizada com sucesso',
                                                                    description: "Dados carregados na tabela",
                                                                    status: 'success',
                                                                    isClosable: true,
                                                                    duration: 4000,
                                                                    position: 'top-right',
                                                                    variant: 'left-accent'
                                                                }) 
                                                            }
                                                            ).catch(
                                                                e => {console.log(e)
                                                                    var mensagem
                                                                    if (e.name == 'AbortError')
                                                                    mensagem = 'Pesquisa cancelada pelo usuário'
                                                                    else
                                                                    mensagem = e.message
                                                                    
                                                                    addToast({
                                                                        title: 'Pesquisa cancelada',
                                                                        description: mensagem,
                                                                        duration: 4000,
                                                                        status: 'error',
                                                                        isClosable: true,
                                                                        position: 'top-right',
                                                                        variant: 'left-accent' 
                                                                    })}
                                                                    )
                                                                    },
                                                                });
                                                            };
                                                            
                                                            reader.readAsText(arquivo.files[0]);
                                                        }}
                                                        >
                                    <HStack spacing='5rem' >
                                        <Buttons w='w-98'h='h-16' type='button'>
                                            Enviar arquivo
                                            <TbFileUpload size='3rem' color='transparent'/>
                                            <Box display="inherit" opacity={1}>
                                                <input type="file" accept=".csv" id='fileInput' onChange={uploadFile} required/>
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
                                    <Modal isCentered isOpen={isOpen} onClose={cancelarPesquisa}>
                                    {overlay}
                                        <ModalContent>
                                            <ModalHeader>
                                                Carregando ...
                                            </ModalHeader>
                                            <ModalCloseButton/>
                                            <ModalBody>
                                                <Center>
                                                    <Spinner
                                                        thickness='8px'
                                                        speed='0.65s'
                                                        emptyColor='gray.200'
                                                        color='green.500'
                                                        size='xl'
                                                        />
                                                </Center>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button onClick={cancelarPesquisa}>Cancelar</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </form>
                            </HStack>
                        </div>

                        <div className=" bg-white w-1990 h-647 flex flex-row">
                            { isLoadingTable ? (
                                <div className="flex w-full h-full items-center justify-center">
                                    <Spinner size="xl" />
                                </div>
                            ) : (
                                    <TableContainer className="w-full h-full " overflowY="auto">
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
