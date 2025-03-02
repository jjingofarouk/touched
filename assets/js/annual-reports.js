// assets/js/annual-reports.js
document.addEventListener('DOMContentLoaded', () => {
    // Sample report data (replace with real data or API)
    const reports = [
        {
            year: 2024,
            summary: "Supported 10,000 children with education and healthcare initiatives.",
            pdf: "./assets/reports/annual-report-2024.pdf",
            stats: { children: 10000, women: 3000, funds: 500000 }
        },
        {
            year: 2023,
            summary: "Expanded healthcare outreach to 15 rural communities.",
            pdf: "./assets/reports/annual-report-2023.pdf",
            stats: { children: 8000, women: 2500, funds: 450000 }
        },
        {
            year: 2022,
            summary: "Launched women's vocational training programs.",
            pdf: "./assets/reports/annual-report-2022.pdf",
            stats: { children: 6000, women: 2000, funds: 400000 }
        }
    ];

    const timeline = document.querySelector('.reports-timeline');
    const modal = document.getElementById('reportModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalSummary = modal.querySelector('.modal-summary');
    const modalDownload = modal.querySelector('.modal-download');
    const modalClose = modal.querySelector('.modal-close');

    // Render reports
    function renderReports() {
        reports.forEach((report, index) => {
            const reportItem = document.createElement('div');
            reportItem.classList.add('report-item');
            reportItem.innerHTML = `
                <div class="report-card" data-year="${report.year}">
                    <h3 class="report-year">${report.year}</h3>
                    <p class="report-summary">${report.summary}</p>
                </div>
                <div class="report-connector"></div>
            `;
            timeline.appendChild(reportItem);

            // Animation on scroll
            setTimeout(() => reportItem.classList.add('show'), index * 200);

            // Click event for modal
            reportItem.querySelector('.report-card').addEventListener('click', () => {
                modalTitle.textContent = `${report.year} Annual Report`;
                modalSummary.textContent = report.summary;
                modalDownload.href = report.pdf;
                modal.classList.add('active');
            });
        });
    }

    // Close modal
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    // Chart.js for impact visualization
    const ctx = document.getElementById('impactChart').getContext('2d');
    const impactChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: reports.map(r => r.year),
            datasets: [
                {
                    label: 'Children Supported',
                    data: reports.map(r => r.stats.children),
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Women Empowered',
                    data: reports.map(r => r.stats.women),
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Funds Raised (USD)',
                    data: reports.map(r => r.stats.funds / 1000),
                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'People Impacted', color: '#fff' }
                },
                y1: {
                    position: 'right',
                    beginAtZero: true,
                    title: { display: true, text: 'Funds (in thousands USD)', color: '#fff' },
                    grid: { drawOnChartArea: false }
                },
                x: { title: { display: true, text: 'Year', color: '#fff' } }
            },
            plugins: {
                legend: { labels: { color: '#fff' } },
                title: { display: true, text: 'Our Impact Over the Years', color: '#fff', font: { size: 20 } }
            }
        }
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    renderReports();
    document.querySelectorAll('.report-item').forEach(item => observer.observe(item));
});
