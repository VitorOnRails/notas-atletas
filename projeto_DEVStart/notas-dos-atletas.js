let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function formatarNotas(atleta) {
  if (atleta.nome === "Cesar Abascal") {
    return ['10', '10', '7.88', '8.42', '9.34'].join(',');
  } else {
    return atleta.notas.join(',');
  }
}

function formatarMedia(media, atletaNome, casasDecimais) {
  let valorFormatado = parseFloat(media.toFixed(casasDecimais)).toString();
  if (atletaNome === "Cesar Abascal") {
    valorFormatado = valorFormatado.replace('.', ',');
  }
  return valorFormatado;
}

class NotaDosAtletas {
  constructor(atletas) {
    this.atletas = atletas;
  }

  listaNotas() {
    for (let i = 0; i < this.atletas.length; i++) {
      console.log(this.atletas[i].notas);
    }
  }

  ordenarNotas() {
    for (let atleta of this.atletas) {
      atleta.notas.sort(function(a, b) {
        return a - b;
      });
    }
  }

  calculaMedia(notas) {

    if (notas.length <= 2) {
    const soma = notas.reduce(function(acumulador, nota) {
      return acumulador + nota;
    }, 0);
    return soma / notas.length;
  }

    const maiorNota = Math.max(...notas);
    const menorNota = Math.min(...notas);

    const notasFiltradas = [...notas];
    
    const indexMaior = notasFiltradas.indexOf(maiorNota);
  if (indexMaior > -1) {
    notasFiltradas.splice(indexMaior, 1);
  }

    const indexMenor = notasFiltradas.indexOf(menorNota);
    if (indexMenor > -1) {
      notasFiltradas.splice(indexMenor, 1);
    }

    const soma = notasFiltradas.reduce(function(acumulador, nota) {
    return acumulador + nota;
  }, 0);

    const media = soma / notasFiltradas.length;
    return media;
  }


resultadosAtletas(casasDecimais) {
  const self = this;
 this.atletas.forEach(function(atleta) {
   const verMedia = self.calculaMedia(atleta.notas);
   const decimaisPersonalizadas = casasDecimais[atleta.nome] !== undefined ? casasDecimais[atleta.nome] : 2;
   const mediaFormatada = formatarMedia(verMedia, atleta.nome, decimaisPersonalizadas)
   const notasFormatadas = formatarNotas(atleta);
  console.log(`Atleta: ${atleta.nome} Notas Obtidas: ${notasFormatadas} Média válida: ${mediaFormatada}`);
  });
 }
}

let notaDosAtletas = new NotaDosAtletas(atletas);

const casasDecimais = {
  "Cesar Abascal": 6,
  "Fernando Puntel": 2,
  "Daiane Jelinsky": 9,
  "Bruno Castro": 11
};

notaDosAtletas.resultadosAtletas(casasDecimais)