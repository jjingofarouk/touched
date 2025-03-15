// assets/js/financial-statements.js
document.addEventListener('DOMContentLoaded', () => {
  // Revised financial data for a small organization (values in UGX)
  const financialData = [
    { year: 2024, revenue: 75000000, expenses: 62000000, netIncome: 13000000 },
    { year: 2023, revenue: 68000000, expenses: 59000000, netIncome: 9000000 },
    { year: 2022, revenue: 55000000, expenses: 51000000, netIncome: 4000000 },
    { year: 2021, revenue: 48000000, expenses: 46000000, netIncome: 2000000 },
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
            backgroundColor: '#3a8f85', // --primary-color
          },
          {
            label: 'Expenses (UGX)',
            data: data.map(d => d.expenses),
            backgroundColor: '#d68c45', // --secondary-color
          },
          {
            label: 'Net Income (UGX)',
            data: data.map(d => d.netIncome),
            backgroundColor: '#739e73', // --success
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { 
            beginAtZero: true, 
            ticks: { callback: (value) => value.toLocaleString('en-UG') } 
          },
        },
      },
    });
  }

  updateChart(financialData);

  // PDF Download Functionality
  document.getElementById('downloadBtn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.setTextColor('#3a8f85'); // --primary-color
    doc.text('Touched Hearts Financial Summary', 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor('#2d3a3a'); // --dark
    doc.text('123 Kampala Road, Kampala, Uganda', 20, 30);
    doc.text('touchedheartsug12@gmail.com', 20, 36);

    // Table Header
    doc.setFontSize(14);
    doc.setTextColor('#ffffff');
    doc.setFillColor('#2c7269'); // --primary-dark
    doc.rect(20, 50, 170, 10, 'F');
    doc.text('Year', 25, 57);
    doc.text('Revenue (UGX)', 60, 57);
    doc.text('Expenses (UGX)', 110, 57);
    doc.text('Net Income (UGX)', 160, 57);

    // Table Data
    doc.setFontSize(12);
    doc.setTextColor('#2d3a3a'); // --dark
    let yPos = 65;
    const selectedYear = yearFilter.value;
    const dataToExport = selectedYear === 'all' 
      ? financialData 
      : financialData.filter(data => data.year == selectedYear);

    dataToExport.forEach((row, index) => {
      const fillColor = index % 2 === 0 ? '#f8f7f5' : '#d2d8d8'; // Alternating rows
      doc.setFillColor(fillColor);
      doc.rect(20, yPos, 170, 10, 'F');
      doc.text(`${row.year}`, 25, yPos + 7);
      doc.text(formatNumber(row.revenue), 60, yPos + 7);
      doc.text(formatNumber(row.expenses), 110, yPos + 7);
      doc.text(formatNumber(row.netIncome), 160, yPos + 7);
      yPos += 10;
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor('#7e8c8c'); // --medium-gray
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, yPos + 10);
    doc.text('© 2025 Touched Hearts. All rights reserved.', 20, yPos + 16);

    // Save the PDF
    const fileName = selectedYear === 'all' 
      ? 'Touched_Hearts_Financial_Summary_2021-2024.pdf' 
      : `Touched_Hearts_Financial_Summary_${selectedYear}.pdf`;
    doc.save(fileName);
  });
});