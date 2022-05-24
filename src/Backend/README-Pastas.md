## Explicação das pastas

Pasta api
    - database      // para migrations e config de BD
    - error         //  tratativas de erros
    - middleware    // autenticação ou qualquer outra funcionalidade que deva ser carregada antes de uma rota por inteiro
    - modules       // como se cada persona tem sua propria pasta
        - uses
            - entities // classes que mostram os atribudos de um objeto
            - repositories  // funções que podem ser utilizadas nos services, que geralmente são métodos dos bancos de dados - só vai usar ao menos que essas funções não possam ser feitas nos services 
            - services // onde fica os controllers e os services
                - getCSV
                - getData
                - getHome
            - views     // nao vai usar
    - routes        
    - shared         //se for utilizar providers ou querer automatizar instancias 
    - webhooks      //se precisar ouvir eventos (monitorando as coisas)