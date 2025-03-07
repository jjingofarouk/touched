// assets/js/financial-statements.js
document.addEventListener('DOMContentLoaded', () => {
  // Sample financial data
  const financialData = [
    { year: 2024, revenue: 50000000, expenses: 42000000, netIncome: 8000000 },
    { year: 2023, revenue: 45000000, expenses: 40000000, netIncome: 5000000 },
    { year: 2022, revenue: 40000000, expenses: 38000000, netIncome: 2000000 },
  ];

  // Populate year filter
  const yearFilter = document.getElementById('yearFilter');
  financialData.forEach(data => {
    const option = document.createElement('option');
    option.value = data.year;
    option.textContent = data.year;
    yearFilter.appendChild(option);
  });

  // Populate table
  const tableBody = document.getElementById('financialTableBody');
  const formatNumber = (num) => num.toLocaleString('en-UG', { style: 'currency', currency: 'UGX' });

  function updateTable(data) {
    tableBody.innerHTML = '';
    data.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.year}</td>
        <td>${formatNumber(row.revenue)}</td>
        <td>${formatNumber(row.expenses)}</td>
        <td>${formatNumber(row.netIncome)}</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  updateTable(financialData);

  // Filter table by year
  yearFilter.addEventListener('change', () => {
    const selectedYear = yearFilter.value;
    const filteredData = selectedYear === 'all' 
      ? financialData 
      : financialData.filter(data => data.year == selectedYear);
    updateTable(filteredData);
    updateChart(filteredData);
  });

  // Chart.js setup
  const ctx = document.getElementById('financialChart').getContext('2d');
  let chart;

  function updateChart(data) {
    if (chart) chart.destroy(); // Destroy previous chart instance
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.year),
        datasets: [
          {
            label: 'Revenue (UGX)',
            data: data.map(d => d.revenue),
            backgroundColor: 'var(--primary-color)',
          },
          {
            label: 'Expenses (UGX)',
            data: data.map(d => d.expenses),
            backgroundColor: 'var(--secondary-color)',
          },
          {
            label: 'Net Income (UGX)',
            data: data.map(d => d.netIncome),
            backgroundColor: 'var(--success)',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, ticks: { callback: (value) => value.toLocaleString('en-UG') } },
        },
      },
    });
  }

  updateChart(financialData);

  // Download button (placeholder functionality)
  document.getElementById('downloadBtn').addEventListener('click', () => {
    alert('Download functionality to be implemented (e.g., generate PDF)');
    // Future: Use a library like jsPDF to generate a PDF
  });
});