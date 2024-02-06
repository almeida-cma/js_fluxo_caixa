function calcularSaldoFinal() {
  var folhaPagamento = parseFloat(document.getElementById('folhaPagamento').value);
  var impostos = parseFloat(document.getElementById('impostos').value);
  var despesasFixas = parseFloat(document.getElementById('despesasFixas').value);
  var receitas = parseFloat(document.getElementById('receitas').value);
  
  if (isNaN(folhaPagamento) || isNaN(impostos) || isNaN(despesasFixas) || isNaN(receitas) ||
      folhaPagamento < 0 || impostos < 0 || despesasFixas < 0 || receitas < 0) {
    alert('Por favor, insira valores válidos para todos os campos.');
    return;
  }
  resultado = receitas - (folhaPagamento + impostos + despesasFixas);
  document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
