import { Flex, Table, TableContainer, Tbody, Th, Thead, Tr, VStack, Spinner, useToast, HStack, Box, Center, Button, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../../components/Header';
import { RiSave3Fill } from "react-icons/ri";
import { ComponentsTable } from '../../components/TaxonomicTable/componentsTable';
import { ITaxonomic } from '../../models/taxonomic';
import { Buttons } from '../../components/Buttons/buttons';
import { TbFileUpload } from "react-icons/tb";
import { MdSearch } from "react-icons/md";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { usePapaParse  } from "react-papaparse";

export default function ResultadoTaxonomico() {  
    const [taxonomic, setTaxonomic] = useState<ITaxonomic[]>([] as ITaxonomic[]);
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
                if(success.resposta === "Arquivo salvo com sucesso!"){
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

                }else{
                    addToast({
                        title: 'Erro',
                        description: success.resposta,
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                        position: 'top-right',
                        variant: 'left-accent'
                    });
                    event.target.value = null
                }
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
            /* setTaxonomic([{
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
            }]) */
            setIsLoadingTable(false);
        }, 2000)
    }

    useEffect(() => {
        getTaxonomic();
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
    const [btnSalvar, setSalvar] = useState("");

    const cancelarPesquisa = () => {
        abortController.current && abortController.current.abort();
        onClose();
    }

    function valorRepetido(elemento, nomes){
        for(var i = 0; i < nomes.length; i++)
            if(nomes[i] === elemento)
                return true;
        return false;
    }
      
      return (       
          <div className="bg-BgColor w-screen h-screen">
            <Header/>
            
            <Flex justifyContent='center'>
                <div>
                    <VStack spacing='2rem'>
                        <div  className="w-[123rem]">                            
                            <HStack  justifyContent='space-between' >
                                <h1 className="text-4xl	font-bold text-left pt-9">
                                    Resultado de busca taxonômica
                                </h1>
                                <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    setOverlay(<OverlayOne />);
                                    onOpen();
                                    setSalvar("");
                                    
                                    var arquivo = document.getElementById("fileInput") as HTMLInputElement;
                                    var reader = new FileReader();
                                    var nomesPesquisa = {names:[]};
                                    
                                    reader.onload = function(){
                                        
                                        readString(reader.result.toString(), {
                                            worker: true,
                                            complete: async (results) => {
                                                results.data.shift();
                                                results.data.forEach(element => {
                                                    if(!valorRepetido(element[0], nomesPesquisa.names) && element[0].trim() != 0)
                                                    nomesPesquisa.names.push(element[0]);
                                                }
                                                )
                                                
                                                abortController.current = new AbortController();
                                                
                                                fetch('http://localhost:8080/floradobrasil', {
                                                    method: 'POST',
                                                    headers: {'content-type':'application/json'},
                                                    mode: 'cors',
                                                    body: JSON.stringify(nomesPesquisa),
                                                    signal: abortController.current.signal,
                                                }).then(
                                                    response => response.json()
                                                    ).then(
                                                        success => {console.log(success)
                                                            setTaxonomic(success);
                                                            onClose();
                                                            setSalvar("true");
                                                            
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

                        <div className="bg-white w-1990 h-647 flex flex-row "
                        >
                            { isLoadingTable ? (
                                <div className="flex w-full h-full items-center justify-center">
                                    <Spinner size="xl" />
                                </div>
                            ) : (
                                <TableContainer className="w-full h-full " overflowY="auto">
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
                            <Buttons onClick={saveCSV} disabled={!btnSalvar}>
                                Salvar arquivo gerado <RiSave3Fill size='2.5rem'/>
                            </Buttons>                                                  
                        </div>                           
                    </VStack>
                </div>
            </Flex>               
        </div>
    );
}
