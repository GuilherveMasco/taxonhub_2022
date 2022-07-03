// aqui sera feito o header colocando os componentes necessario já criados

import { HStack, Stack, Box, Image, useDisclosure, Button, Spinner, Center } from "@chakra-ui/react";
import { Buttons } from "../Buttons/buttons";
import { TbFileUpload } from "react-icons/tb";
import { MdSearch } from "react-icons/md";
import React from "react";
import router from "next/router";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { cursorTo } from "readline";

export function Header() {      
    function goHome(){
        router.push('/')
    }

    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
        />
    )
        
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const { isOpen, onOpen, onClose } = useDisclosure()

    function onChangeType(e: React.ChangeEvent){        
        const target = e.target as HTMLSelectElement
        console.log(target?.value);
    }
    
    return (
        <Stack className="bg-HeaderColor w-full h-40">
            <form 
                onSubmit={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
            </form>
                <HStack className='m-10 px-8' spacing='79rem' >
                    <button>
                        <Image src="https://i.ibb.co/6y78TjR/logo.png" alt="Logo" width={277} height={86} onClick={goHome}/>
                    </button>                    
                </HStack>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    );
}