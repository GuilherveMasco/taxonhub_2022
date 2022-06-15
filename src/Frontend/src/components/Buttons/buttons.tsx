// aqui será criado um butão padrao que irá servir para: enviar arquivo, lupa e salva arquivo gerado
// tem como fazer e fica bem mais pratico do que criar um pra cada

//exemplo (altere como necessario, nao vou dar feito)

import React from "react";
import { Button } from '@chakra-ui/react'
import { MdFileUpload } from "react-icons/md"

function BtnBuscarLista() {
    return (
    
        <>
            <b>Buscar Lista</b><br/>
            <Button className=""
                height='64px'
                width='300px'
                border='2px'
                fontSize={20}
                style={{alignSelf: 'flex-end'}}
                rightIcon={<MdFileUpload/>}
                >
                Enviar arquivo csv
            </Button>
        </>
      
    );
}

export {BtnBuscarLista}