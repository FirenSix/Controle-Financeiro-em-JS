const ctx = document.getElementById('graficoPizza');

const grafico = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Ganhos', 'Gastos'],
    datasets: [{
      data: [ganho, gasto],
      backgroundColor: ['#2ECC71', '#E74C3C']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true
  }
});