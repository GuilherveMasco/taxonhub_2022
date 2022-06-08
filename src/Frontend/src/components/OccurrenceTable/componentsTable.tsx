// tabela de resultado das ocorrencias

import { Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { IOccurrence } from '../../models/occurrence';

interface IOccurrenceProps{ 
    occurrence: IOccurrence;
}

function ComponentsTable({occurrence}: IOccurrenceProps) {  
    console.log(occurrence);
    return ( 
        <Tbody>
            <Tr>
                <Td className="border-r !border-[#000]">
                    {occurrence.nameP}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.nameR}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.nameA}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.synonym}
                </Td>
                <Td className="border-r !border-[#000]">
                    {occurrence.bd}
                </Td>
                <Td isNumeric className="border-l !border-[#000]">
                    {occurrence.family}
                </Td>
            </Tr>
        </Tbody>  
    );
}

export {ComponentsTable}