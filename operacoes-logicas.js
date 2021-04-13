/*
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 1 do aluno: ")
   leia(nota1)
   escreval("Digite a nota 2 do aluno: ")
   leia(nota2)
   media <- (nota1 + nota2) / 2

   se media >= 7 entao
      passou := verdadeiro
   fimse
   
   se ( passo ) && ( media >= 7 || media <= 9 ) entao
      escreval("Aprovado! ", nome)
   senao
      escreval("Reprovado! ", nome)
   fimse
*/

var nome, nota1, nota2, passou;

passou = false
nome = prompt("Digite o nome do alune: ")
nota1 = prompt("Digite a nota 1 do aluno: ")
nota2 = prompt("Digite a nota 2 do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if(media >= 7)
    passou = true;

if(passou && (media >= 7 && media <= 9))
    alert("Aprovado! " + nome)

else
    alert("Reprovado! " + nome)