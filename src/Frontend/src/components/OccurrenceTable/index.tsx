// tabela de resultado das ocorrencias

import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

function OccurrenceTable() {
    return (
    
        <>
        <TableContainer className="w-full h-full">
            <Table variant='striped' colorScheme='teal'>
                <TableCaption></TableCaption>
                <Thead>
                <Tr>
                    <Th className="border-r !border-[#000]">Nome pesquisado</Th>
                    <Th className="border-r !border-[#000]">Nomes retornados</Th>
                    <Th className="border-r !border-[#000]">Nome aceito/sinônimo</Th>
                    <Th className="border-r !border-[#000]">Sinônimo de</Th>
                    <Th className="border-r !border-[#000]">Base de dados</Th>
                    <Th isNumeric className="border-l !border-[#000]">Familia respectiva da base</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td isNumeric className="border-l !border-[#000]"></Td>
                </Tr>
                <Tr>
                <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td isNumeric className="border-l !border-[#000]"></Td>
                </Tr>
                <Tr>
                <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td className="border-r !border-[#000]"></Td>
                    <Td isNumeric className="border-l !border-[#000]"></Td>
                </Tr>
                </Tbody>
                {/* <Tfoot>
                <Tr>
                    <Th className="border-r !border-[#000]">To convert</Th>
                    <Th className="border-r !border-[#000]">into</Th>
                    <Th isNumeric className="border-l !border-[#000]">multiply by</Th>
                </Tr>
                </Tfoot> */}
            </Table>
        </TableContainer>
        </>
      
    );
}

export {OccurrenceTable}