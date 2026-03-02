const areaExtra = document.getElementById('area-extra');
const categoriaSelect = document.getElementById('categoria');

function mostrarCategorias(tipo) {
  tipoAtual = tipo;
  categoriaSelect.innerHTML = '';

  let opcoes = [];

  if (tipo === 'ganho') {
    opcoes = ['Salário', 'Outro'];
  } else {
    opcoes = ['Compras Online', 'Alimentação', 'Transporte', 'Lazer', 'Outros'];
  }

  opcoes.forEach(op => {
    const option = document.createElement('option');
    option.value = op;
    option.textContent = op;
    categoriaSelect.appendChild(option);
  });

  areaExtra.classList.remove('escondido');
}