# school-management
Gerenciamento de calendário de aulas e provas.

# Descrição
Este projeto esta sendo desenvolvida para o curso de Pós-Gradução de Especialização Em Tecnologia Java da UTFPR.
Esta aplicação terá as funcionalidade básicas para gerenciar um calendário de escola.

## Protótipo
https://www.figma.com/proto/3XCZx4NuwHCL5IInt8emYy/school-management?type=design&node-id=6-39&t=SrklKsFmBzioxjhX-0&scaling=min-zoom&page-id=1%3A5&starting-point-node-id=6%3A39

## GitHub Pages
https://kleberfranklin.github.io/school-management/

## Vídeos de Apresentação
https://www.loom.com/share/4ad40b133f8f485faa3e1e47167434ce?sid=026c516d-117d-4b6d-90c6-9d0fcfa130e3

https://www.loom.com/share/f20fe133144848878d3836b95fc16590?sid=4fe2d434-f53a-441c-afe8-8378d29f3792

https://www.loom.com/share/0d2cc17b43674c0ba925aedf19c4043d?sid=db5f912d-ca20-4459-9192-876b725f9011

https://www.loom.com/share/c288dd14692448839fc3cbf97ed795a1?sid=b6c95db1-4a6b-458c-887d-dad6344fa830

# 📖 Tópicos/Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop. 
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output. 
- [x] Mapear componentes ? rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas. 
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf. 
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação. 

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`