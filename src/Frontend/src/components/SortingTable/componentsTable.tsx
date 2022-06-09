// tabela de resultado das triagens 

import { Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { ISorting } from "../../models/sorting";

interface ISortingProps{ 
    sorting: ISorting;
}

function ComponentsTable({sorting}: ISortingProps) {  
    console.log(sorting);
    return ( 
        <Tbody>
            <Tr>
                <Td className="border-r !border-[#000]">
                    {sorting.nameP}
                </Td>
                <Td className="border-r !border-[#000]">
                    {sorting.nameR}
                </Td>
                <Td className="border-r !border-[#000]">
                    {sorting.nameA}
                </Td>
                <Td className="border-r !border-[#000]">
                    {sorting.synonym}
                </Td>
                <Td className="border-r !border-[#000]">
                    {sorting.bd}
                </Td>
                <Td isNumeric className="border-l !border-[#000]">
                    {sorting.family}
                </Td>
            </Tr>
        </Tbody>  
    );
}

export {ComponentsTable}