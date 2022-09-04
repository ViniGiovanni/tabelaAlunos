var qtdAlunos = 4;
var qtdNotas = 4;

function desenhaTabela() {
  let dadoAntigo;
  for (let i = 1; i <= qtdAlunos; i++) {
    dadoAntigo = document.getElementById("conteudo").innerHTML;
    document.getElementById("conteudo").innerHTML =
      dadoAntigo +
      `<tr>
                                                                        <th>${i}</th>
                                                                        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome"></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}1" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}2" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}3" placeholder=""></td>
                                                                        <td><input type="number" class="form-control" id="nota${i}4" placeholder=""></td>
                                                                        <td><output id="media${i}"></output></td>
                                                                        <td><output id="situaçao${i}"></output></td>
                                                                     </tr>`;
  }
}

function calcularMedia() {
  let somaMedia = 0;
  for (let aluno = 1; aluno <= qtdAlunos; aluno++) {
    let notaParcial;
    let notaSoma = 0;
    for (let nota = 1; nota <= qtdNotas; nota++) {
      notaParcial = Number(
        document.getElementById(`nota${aluno}${nota}`).value
      );
      notaSoma = notaSoma + notaParcial;
    }
    let media = notaSoma / qtdNotas;
    somaMedia = somaMedia + media;
    let mediaGeral = somaMedia / qtdAlunos;

    document.getElementById(`media${aluno}`).innerText = media;
    document.getElementById("mediaSala").innerText = mediaGeral;

    if (media >= 50) {
      document.getElementById(`situaçao${aluno}`).innerText = "Aprovado";
      document.getElementById(`situaçao${aluno}`).style.backgroundColor =
        "green";
    } else if (media >= 45 && media < 50) {
      document.getElementById(`situaçao${aluno}`).innerText = "Recuperação";
      document.getElementById(`situaçao${aluno}`).style.backgroundColor =
        "yellow";
    } else if (media < 45) {
      document.getElementById(`situaçao${aluno}`).innerText = "Reprovado";
      document.getElementById(`situaçao${aluno}`).style.backgroundColor = "red";
    }
  }
}

function InserirAl(){
    qtdAlunos += 1;
    i = qtdAlunos;

    //criando elemento tr
    let linha = document.createElement('tr')
    linha.innerHTML = ` 
                        <th>${i}</th>
                        <td><input type="text" class="form-control" id="nome${i}" placeholder="nome"></td>
                        <td><input type="number" class="form-control" id="nota${i}1" placeholder=""></td>
                        <td><input type="number" class="form-control" id="nota${i}2" placeholder=""></td>
                        <td><input type="number" class="form-control" id="nota${i}3" placeholder=""></td>
                        <td><input type="number" class="form-control" id="nota${i}4" placeholder=""></td>
                        <td><output id="media${i}"></output></td>
                        <td><output id="situaçao${i}"></output></td>
                    `
    //tornando a função filha de conteudo
    document.getElementById("conteudo").appendChild(linha)

}

function InserirN(){    
  let linha = document.createElement('td')
  
}

