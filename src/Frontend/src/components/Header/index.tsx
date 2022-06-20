// aqui sera feito o header colocando os componentes necessario já criados

<<<<<<< HEAD
import { HStack, Stack, Box, Image, useDisclosure, Button, Text, Spinner, Center } from "@chakra-ui/react";
=======
import { HStack, Stack, FormControl, Box, Image } from "@chakra-ui/react";
>>>>>>> 627a6b176a89434f322c203689bdc7fbdf737660
import { Buttons } from "../Buttons/buttons";
import { TbFileUpload } from "react-icons/tb";
import React, { useState } from "react";
import { Select } from "../Select/select";
import { MdSearch } from "react-icons/md";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

export function Header() {
    const [type, setType] = useState();

    
    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
        />
        )
        
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)

    function onChangeType(e: React.ChangeEvent){        
        const target = e.target as HTMLSelectElement
        console.log(target?.value);
    }
    return (
        <Stack className="bg-HeaderColor w-full h-40">
<<<<<<< HEAD
            <form 
            onSubmit={() => {
                setOverlay(<OverlayOne />)
                onOpen()
                }}
                >
=======
>>>>>>> 627a6b176a89434f322c203689bdc7fbdf737660
            <HStack className='m-10 px-8' spacing='56rem' >
                    <Image src="https://i.ibb.co/6y78TjR/logo.png" alt="Logo" width={277} height={86} />
                <HStack spacing='5rem'>
                    <Buttons
                        w='w-72' 
                        h='h-16'                    
                    >
                        Enviar arquivo
                        <TbFileUpload size='3rem' color='transparent'/> {/* É gambiarra mesmo, não sei um jeito melhor */}
                        <Box display="inherit" color='transparent' overflow='hidden' opacity={1}>
<<<<<<< HEAD
                            <input type="file" accept=".csv" id='fileInput' required/>
=======
                            <input type="file" accept=".csv" id='fileInput'/>
>>>>>>> 627a6b176a89434f322c203689bdc7fbdf737660
                        </Box>

                    </Buttons>
                
                    <Select
                        w='w-72' 
                        h='h-16'                                    
                        value={type}  
                        id='select'
                        required
                        onChange={(e: React.ChangeEvent) => onChangeType(e)}
                    >
                        <option value='taxonomic'>Taxonômica</option>
                        <option value='occurrence'>Ocorrência</option>
                    </Select>
                    
                    <Buttons                     
                        w='w-20' 
                        h='h-16'
                        id='submit'
                        type="submit"
                    >
                        <MdSearch size='3.5rem' />
                    </Buttons>
                </HStack>
            </HStack>
<<<<<<< HEAD
            </form>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
            <ModalHeader>Carregando ...</ModalHeader>
            <ModalCloseButton />
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
                <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
            </ModalContent>
            </Modal>
=======
>>>>>>> 627a6b176a89434f322c203689bdc7fbdf737660
        </Stack>

    );
}