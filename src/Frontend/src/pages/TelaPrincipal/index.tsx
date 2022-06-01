import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

export default function TelaPrincipal() {  
    
    return (
        <> 
            <h1 className="italic text-9xl	">oi, tudo bom? Isso aqui é só um teste para saber se tudo esta ok!</h1>  
            
            <Grid
                h='9rem'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                >
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid>      

        </>
    );
}
