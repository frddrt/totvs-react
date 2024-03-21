# Template React para o Protheus
## [Projeto React](/react)
Um projeto padrão, utilizando React com Typescript, com frameworks úteis pré instalados e uma biblioteca de funções e componentes.

No arquivo package.json, selecione todas as ocorrências da palavra `template` e
substitua pelo nome do seu pacote.

Quando o desenvolvimento estiver concluído, execute o comando:
```shell
npm build
```

E será gerado um arquivo [nomedoprojeto].app. Mova este arquivo para o seu projeto ADVL/TLPP e compile no repositório.

Crie um programa ADVPL ou TLPP com o conteúdo

```clipper
User Function nomedasuafuncao()
	fwCallApp("nomedoseupacote") // o nome do pacote não deve conter .app
return
```

E adicione a chamada da User Funcion no menu.

## [Projeto TLPP](/tlpp)
Classes mãe para o desenvolvimento de APIs Rest/RestFull, necessárias para a comunicação com a tela React.
