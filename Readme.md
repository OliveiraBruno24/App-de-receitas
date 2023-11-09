# App de receitas

## Descrição

Este repositório está em construção. Aqui você encontrará um app insiperado no site Tudo gostoso, desenvolido em react com typescript e usando context. Porém, sem CSS :).

## Conteúdo
- O App conta com sistema de login com sistema de verificação de e-mail e senha;
- Após o login, o usuário é armazenado no local storage; (pode ser observado clicando no icone de perfil no _header_ da página);
- Barra de busca por nome, ingrediente ou primeira letra para comidas ou bebidas;
- Cards interativos referente a receita escolhida;
- Ao interagir com o card (clicar), é redirecionado a uma página com detalhes do prato e sujestoues de acompanhamento em formato de carousel;
- Se a receita escolhida for comida, o carousel apresentará bebidas, se for bebida, será apresentado comidas;
- É possível favoritar e desfavoritar uma receita, copiar o link da página para a área de transferência clicando em "share";
- desenvolver a receita, clicando em "continuar receita";
- Clicando em "continuar receita" será direcionado a uma página semelhante a anterior, porém os ingredientes recebem checkbox para facilitar a confecção da receita;
- Após todos os ingredintes receberem um "check", o botão de finalizar será liberado e a receita ficará salva em seu histórico de receitas. (caso não finalize, ficará salvo para continuar de onde parou);
- O App também conta com 2 icones de rodapé que levarão para a rota /meals ou /drinks. Nessas rotas teremos acesso a 12 receitas de comidas ou bebidas (dependendo da rota selecionada). 

## Instruções de Instalação

Ao clonar o repositório, execute os comandos a baixo:

$ npm i vite -- instalará o vite, bundler usado para rodar a aplicação react na web.
$ npm run dev -- inciará a aplicação no seu navegador.

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas para contribuir:

1. Crie um fork deste repositório.
2. Crie um novo branch com um nome descritivo: `git checkout -b minha-contribuicao`
3. Faça suas alterações e commit: `git commit -m "Adicionando minha contribuição"`
4. Envie seu branch para o repositório: `git push origin minha-contribuicao`
5. Abra um pull request neste repositório e aguarde o feedback.

Lembre-se de que todas as contribuições são valorizadas e ajudam a tornar este projeto melhor para todos!
