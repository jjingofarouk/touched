// assets/js/annual-reports.js
document.addEventListener('DOMContentLoaded', () => {
    // Sample report data (replace with real data or API)
    const reports = [
        {
            year: 2024,
            summary: "Supported 5,000+ children with education and healthcare initiatives.",
            pdf: "./assets/reports/annual-report-2024.pdf",
            stats: { children: 5000, women: 4928, funds: 500000 }
        },
        {
            year: 2023,
            summary: "Expanded healthcare outreach to 4 rural communities.",
            pdf: "./assets/reports/annual-report-2023.pdf",
            stats: { children: 3850, women: 3121, funds: 450000 }
        },
        {
            year: 2022,
            summary: "Launched women's vocational training programs.",
            pdf: "./assets/reports/annual-report-2022.pdf",
            stats: { children: 4782, women: 2118, funds: 400000 }
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
            `;
            timeline.appendChild(reportItem);

            // Click event for modal
            reportItem.querySelector('.report-card').addEventListener('click', () => {
                modalTitle.textContent = `${report.year} Annual Report`;
                modalSummary.textContent = report.summary;
                modalDownload.href = report.pdf;
                modal.setAttribute('aria-hidden', 'false'); // Update ARIA for accessibility
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });
    }

    // Modal close functionality
    modalClose.addEventListener('click', () => {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scrolling
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
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
                    backgroundColor: 'var(--primary-color)', // Teal from root
                    borderColor: 'var(--primary-dark)',
                    borderWidth: 1
                },
                {
                    label: 'Women Empowered',
                    data: reports.map(r => r.stats.women),
                    backgroundColor: 'var(--secondary-color)', // Terracotta from root
                    borderColor: 'var(--secondary-dark)',
                    borderWidth: 1
                },
                {
                    label: 'Funds Raised (USD in thousands)',
                    data: reports.map(r => r.stats.funds / 1000),
                    backgroundColor: 'var(--success)', // Sage green from root
                    borderColor: 'var(--success)',
                    borderWidth: 1,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'People Impacted',
                        color: 'var(--dark)',
                        font: { size: 14 }
                    },
                    grid: { color: 'var(--light-gray)' }
                },
                y1: {
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Funds (in thousands USD)',
                        color: 'var(--dark)',
                        font: { size: 14 }
                    },
                    grid: { drawOnChartArea: false }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        color: 'var(--dark)',
                        font: { size: 14 }
                    },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'var(--dark)',
                        font: { size: 12 }
                    }
                },
                title: {
                    display: true,
                    text: 'Our Impact Over the Years',
                    color: 'var(--primary-dark)',
                    font: { size: 20, family: 'Playfair Display, serif' }
                }
            }
        }
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    // Initialize
    renderReports();
    document.querySelectorAll('.report-item').forEach(item => observer.observe(item));
});
