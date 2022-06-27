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
                {taxonomic.nomePesquisado}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.nomeRetornado}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.aceitoSinonimo}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.sinonimoDe}
            </Td>
            <Td className="border-r !border-[#000]">
                {taxonomic.baseDados}
            </Td>
            <Td isNumeric className="border-l !border-[#000]">
                {taxonomic.familia}
            </Td>
        </Tr>    
    );
}

export {ComponentsTable}