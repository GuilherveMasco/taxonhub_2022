// tabela de resultado das triagens 

import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import { ITaxonomic } from "../../models/taxonomic";

interface ITaxonomicProps{ 
    taxonomic: ITaxonomic;
}

function ComponentsTable({taxonomic}: ITaxonomicProps) {  
    console.log(taxonomic);
    return ( 
        <Tr>
            <Td className="border-r !border-[#000]">
                {taxonomic.nameP}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.nameR}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.nameA}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.synonym}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.bd}
            </Td>
            <Td isNumeric className="border-l !border-[#000]">
                {taxonomic.family}
            </Td>
        </Tr>        
    );
}

export {ComponentsTable}