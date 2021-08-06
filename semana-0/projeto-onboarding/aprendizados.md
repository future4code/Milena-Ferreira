# O que eu aprendi na minha semana de curso

Essa primeira semana foi bem intensa e eu confesso que assisti mais de metade das aulas de pijama. Mas tudo bem, tudo ao seu tempo! A fase de adaptação é normal.

## Segunda
Tivemos a aula inaugural e tivemos uma visão holística de como será o curso.


## Terça
Fomos apresentada(o)s à rotina do curso pela Maju: todas as atividades, prazos, formulários. Também aprendemos sobre as ferramentas que usaremos: (Slack, Zoom, Notion, Airtable, Gitub, Vimeo). Ah, e o Índio nos deu dicas de como manter uma rotina saudável e produtiva. De tarde tivemos uma aula sobre como tirar dúvidas: podemos fazer isso pelo canal de dúvidas do Slack ou comparecer ao plantão nas terças e quintas às 15h.

## Quarta
Começamos com a aula da Chijo sobre terminal. Ela explicou as vantagens de utiliza-lo (automatização de tarefas, mais rapides) e nos ensinou alguns comandos, acrescentando que alguns deles aceitam opções e argumentos. Na parte da tarde fizemos uma atividade prática para praticar os comandos.

### Comandos ensinados:
* **whoami:** exibe na tela o usuário logado
* **clear:** limpa o terminal (mas não limpa o histórico)
* **pwd:** exibe o diretório atual
* **ls:** exibe lista de arquivos no diretório atual
* **cd \<diretório\>:** navega pelos diretórios
* **mkdir \<nome-diretório\>:** cria um diretório novo
    * para criar um subdiretório dentro de um diretório, usar **mkdir -p \<nome-diretório/nome-subdiretório\>**.
* **touch:** cria um novo arquivo.
* **rm: \<arquivo\>:** deleta o arquivo de forma irreversível
    * para deletar pastas, usar **rm -r \<diretório\>**.
* **mv:** move ou renomeia arquivos
    * para mover usar **mv \<arquivo\> \<diretório\>**.
    * para renomear usar **mv \<nome-antigo\> \<nome-novo\>**.
    * para mover e renomear ao mesmo tempo usar **mv \<nome-antigo\> \<diretório-novo\/nome-novo\>**.
* **cp \<arquivo\> \<diretório\>:** cria uma cópia do arquivo em um novo diretorio.
* **head \<arquivo\>:** exibe as primeiras 10 linhas de um arquivo.
    * para alterar as quantidades de linhas exibidas, usar **head -n \<numero-linhas\> \<arquivo\>**.
* **tail \<arquivo\>:** exibe as últimas 10 linhas de um arquivo.
    * para alterar as quantidades de linhas exibidas, usar **tail -n \<numero-linhas\> \<arquivo\>**.
    * para pesquisar uma linha específica dentro de um arquivo, usar: **head -n \<numero-linha\> \<arquivo\> \| tail -n 1**.
* **cat \<arquivo\>:** imprime o conteúdo do arquivo no terminal.
* **grep \<termo\> \<arquivo\>:** pesquisa um termo em um arquivo e imprime a(s) linha(s) onde se encontra
    * para incluir as linhas que antecedem o termo usar **grep \<termo\> -B \<numero-de-linhas> \<arquivo>**.
    * para incluir as linhas que precedem o termo usar **grep \<termo\> -A \<numero-de-linhas> \<arquivo>**.
* **history:** imprime no terminal todos os comandos que foram usados anteriormente.

## Quinta

Aprendemos sobre Git e Github.

O **Git* é um software, uma ferramenta de versionamento de código. Isso quer dizer que funciona como um "super-back-up". O git salva somente as alterações no arquivo, e este fica disponível em um repositório. Isso facilita o trabalho em equipe, uma vez que todos os envolvidos em um projeto podem fazer download dos arquivos, trabalhar neles, e depois fazer o upload. Também dá pra saber quando as alterações foram feitas e por quem.

Já o *Github* é um serviço de repositório remoto, ele armazena o projeto em nuvem. Ele também funciona como uma rede social para devs.

Aprendemos a criar um repositório remoto no Github e clonar ele para nossa máquina, criando assim um repositório local. Pra fazer isso, o comando é o **git clone <link-repo>**.

Outros comandos que aprendemos:
* **git status:** para verificar o status dos arquivos no repositório.
* **git add <arquivo>**: para adicionar o arquivo à staging area.
    * **git add -all** adiciona todos os arquivos do repositório.
* **git commit -m \<mensagem\>** para enviar as mudanças para o repositório local.
* **git branch \<nome\>** para criar uma nova branch.
* **git branch** para listar as branches do repo.
* **git checkout <branch>** para acessar uma branch.
* **git checkout -b <branch>** para criar e acessar uma branch.
* **git push origin <branch>** para enviar os commits para o repositório remoto
* **git pull origin <branch>** para atualizar o repo local.

Também aprendemos a fazer um pull request (PR).

## Sexta

Tivemos palestras sobre a pedagogia adotada no curso e sobre empregabilidade. E de tarde, fizemos o projeto da semana (este aqui!).