// aqui sera feito o header colocando os componentes necessario já criados

import { Stack } from "@chakra-ui/react";
import React from "react";
import { BtnBuscarLista } from "../Buttons/buttons";

function Header() {
    return (
    
        <>
        <Stack className="bg-HeaderColor w-full h-182">
            <br/>
            <table>
            <thead>
            <tr>
                <td width={50}></td>
                <td></td>
                <td><BtnBuscarLista/></td>
                <td width={300}></td>
                <td></td>
                <td></td>
            </tr>
            </thead>
            </table>
        </Stack>
        </>
      
    );
}

export {Header}