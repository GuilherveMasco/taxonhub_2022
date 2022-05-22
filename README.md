# Taxonhub 2022

## Requisitos Funcionais
1. O sistema deve permitir carregar um arquivo do tipo csv de entrada com a lista de espécies a serem buscadas nos sites Flora do Brasil e The Plant List para validação das espécies.
1.1. O sistema deve realizar validações no arquivo de entrada recebido (se o arquivo está vazio, se há linhas em branco, etc).
1.2. O sistema deve ser capaz de extrair as informações contidas no arquivo de entrada e realizar uma busca de informações das espécies fornecidas no site Flora do Brasil, e The Plant List.
1.3. O sistema deve ser capaz de armazenar as informações a cada busca por espécie, caso haja necessidade de retornar a página para não precisar refazer toda a busca.
1.4. O Sistema deve gerar um arquivo de saída do tipo csv com os resultados obtidos nas pesquisas com cruzamento das respostas obtidas dos dois sites para as espécies pesquisadas.
2. O sistema deve permitir carregar um arquivo de entrada do tipo csv com a lista de espécies, para ser utilizada para obtenção dos dados de ocorrência das espécies disponíveis no GBIF e SpeciesLink.
2.1. O sistema deve realizar validações no arquivo de entrada recebido (se o arquivo está vazio, se há linhas em branco, etc).
2.2. O sistema deve ser capaz de extrair informações recebidas no arquivo de entrada e realizar uma busca de ocorrências diretamente nos sites GBIF e SpeciesLink.
2.3. O sistema deve ser capaz de armazenar as informações a cada busca por espécie, caso haja necessidade de retornar a página para não precisar refazer toda a busca.
2.4. O Sistema deve gerar um arquivo de saída do tipo csv com os resultados obtidos nas pesquisas com cruzamento das respostas obtidas dos dois sites para as espécies pesquisadas.


## Stack 
- React - Tailwind e Chakra (front-end)
- Node JS (Back-end)
- API: Plant List, Flora do Brasil, GBIF e SpeciesLink.
