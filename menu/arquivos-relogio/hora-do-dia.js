function mensagem_hora() {
  var mensagem_hora = document.querySelector('.mensagem_hora')
  var mensagem_tratamento = document.querySelector('.tratamento')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  mensagem_hora.innerHTML = `agora são ${hora}:${minutos} horas do dia`
  if (hora >= 0 && hora < 12) {
    mensagem_tratamento.innerHTML = 'BOM DIA!'
  } else if (hora < 18) {
    mensagem_tratamento.innerHTML = 'BOA TARDE!'
  } else {
    mensagem_tratamento.innerHTML = 'BOA NOITE!'
  }
}

