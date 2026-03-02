let saldo = 0;
let ganho = 0;
let gasto = 0;
let tipoAtual = null;

const saldoElemento = document.getElementById('valor_saldo');

function atualizarSaldo() {
  saldoElemento.textContent = `R$ ${saldo.toFixed(2)}`;

  saldoElemento.classList.toggle('saldo-positivo', saldo >= 0);
  saldoElemento.classList.toggle('saldo-negativo', saldo < 0);

  grafico.data.datasets[0].data = [ganho, gasto];
  grafico.update();
}