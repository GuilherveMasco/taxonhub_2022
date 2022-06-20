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
                    {occurrence.entry_name}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.found_name}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.accepted_name}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.base_de_dados}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.familia}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.pais}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.year}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.month}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.day}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.lat}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.long}
                </Td>
                <Td isNumeric className="border-l !border-[#000]">
                    {occurrence.Coord_SPL_Mun}
                </Td>
            </Tr>
    );
}

export {ComponentsTable}