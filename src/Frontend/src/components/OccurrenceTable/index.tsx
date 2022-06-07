// tabela de resultado das ocorrencias

import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

function OccurrenceTable() {
    return (
    
        <>
        <TableContainer className="w-full h-full">
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th className="border-r !border-[#000]">To convert</Th>
                    <Th className="border-r !border-[#000]">into</Th>
                    <Th isNumeric className="border-l !border-[#000]">multiply by</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td className="border-r !border-[#000]">inches</Td>
                    <Td className="border-r !border-[#000]">millimetres (mm)</Td>
                    <Td isNumeric className="border-l !border-[#000]">25.4</Td>
                </Tr>
                <Tr>
                    <Td className="border-r !border-[#000]">feet</Td>
                    <Td className="border-r !border-[#000]">centimetres (cm)</Td>
                    <Td isNumeric className="border-l !border-[#000]">30.48</Td>
                </Tr>
                <Tr>
                    <Td className="border-r !border-[#000]">yards</Td>
                    <Td className="border-r !border-[#000]">metres (m)</Td>
                    <Td isNumeric className="border-l !border-[#000]">0.91444</Td>
                </Tr>
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th className="border-r !border-[#000]">To convert</Th>
                    <Th className="border-r !border-[#000]">into</Th>
                    <Th isNumeric className="border-l !border-[#000]">multiply by</Th>
                </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
        </>
      
    );
}

export {OccurrenceTable}