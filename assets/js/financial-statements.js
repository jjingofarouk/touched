// assets/js/financial-statements.js
document.addEventListener('DOMContentLoaded', async () => {
    // Fetch dummy data (replace with real API in production)
    const response = await fetch('./assets/data/financial-data.json');
    const data = await response.json();
    const financials = data.financials;

    const tableBody = document.getElementById('financialTableBody');
    const yearFilter = document.getElementById('yearFilter');
    const downloadBtn = document.getElementById('downloadBtn');
    const ctx = document.getElementById('financialChart').getContext('2d');

    // Format UGX currency
    const formatUGX = (amount) => {
        return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX' }).format(amount);
    };

    // Populate year filter
    financials.forEach(f => {
        const option = document.createElement('option');
        option.value = f.year;
        option.textContent = f.year;
        yearFilter.appendChild(option);
    });

    // Render table
    function renderTable(year = 'all') {
        tableBody.innerHTML = '';
        const filteredFinancials = year === 'all' ? financials : financials.filter(f => f.year === parseInt(year));
        
        filteredFinancials.forEach((f, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${f.year}</td>
                <td>${formatUGX(f.revenue)}</td>
                <td>${formatUGX(f.expenses)}</td>
                <td>${formatUGX(f.netIncome)}</td>
            `;
            row.style.opacity = '0';
            tableBody.appendChild(row);
            setTimeout(() => row.style.opacity = '1', index * 100); // Fade-in animation
        });
    }

    // Chart.js visualization
    const financialChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: financials.map(f => f.year),
            datasets: [
                {
                    label: 'Revenue (UGX)',
                    data: financials.map(f => f.revenue / 1000000), // In millions for scaling
                    borderColor: '#36A2EB',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Expenses (UGX)',
                    data: financials.map(f => f.expenses / 1000000), // In millions
                    borderColor: '#FF6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Net Income (UGX)',
                    data: financials.map(f => f.netIncome / 1000000), // In millions
                    borderColor: '#4BC0C0',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Amount (Millions UGX)' }
                },
                x: { title: { display: true, text: 'Year' } }
            },
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Financial Overview', font: { size: 20 } }
            }
        }
    });

    // Filter event listener
    yearFilter.addEventListener('change', (e) => {
        renderTable(e.target.value);
    });

    // Download button (simulated PDF download)
    downloadBtn.addEventListener('click', () => {
        const selectedYear = yearFilter.value;
        const file = selectedYear === 'all' ? './assets/financials/all-years-summary.pdf' : financials.find(f => f.year === parseInt(selectedYear)).pdf;
        const a = document.createElement('a');
        a.href = file;
        a.download = `TouchedHearts_Financial_${selectedYear === 'all' ? 'AllYears' : selectedYear}.pdf`;
        a.click();
    });

    // Initial render
    renderTable();

    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.financial-table, .financial-chart').forEach(el => observer.observe(el));
});
