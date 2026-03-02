const valorInput = document.getElementById('valor');
const descricaoInput = document.getElementById('descricao');

document.getElementById('btn-ganho').addEventListener('click', () => {
  mostrarCategorias('ganho');
});

document.getElementById('btn-gasto').addEventListener('click', () => {
  mostrarCategorias('gasto');
});

document.getElementById('confirmar').addEventListener('click', () => {
  const valor = parseFloat(valorInput.value);
  if (!valor) return;

  if (tipoAtual === 'ganho') {
    saldo += valor;
    ganho += valor;
  } else {
    saldo -= valor;
    gasto += valor;
  }

  atualizarSaldo();

  valorInput.value = '';
  descricaoInput.value = '';
  areaExtra.classList.add('escondido');
});