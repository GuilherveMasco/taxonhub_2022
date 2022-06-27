// tabela de resultado das ocorrencias

import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import { IOccurrence } from '../../models/occurrence';

interface IOccurrenceProps{ 
    occurrence: IOccurrence;
}

function ComponentsTable({occurrence}: IOccurrenceProps) {  
    console.log(occurrence);
    return ( 
            <Tr>
                <Td className="border-r !border-[#000]">
                    {occurrence.nomePesquisado}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.nomeEncontrado}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.nomeAceito}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.baseDados}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.familia}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.pais}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.ano}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.mes}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.dia}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.lat}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.long}
                </Td>
                <Td isNumeric className="border-l !border-[#000]">
                    {occurrence.coordMun}
                </Td>
            </Tr>
    );
}

export {ComponentsTable}