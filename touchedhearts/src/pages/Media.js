// src/pages/Media.js
import React, { useState, useEffect } from 'react';
import '../styles/media.css'; // Assuming you have this CSS file
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Media = () => {
  // Mock data (replace with API fetch if needed)
  const mediaData = {
    pressReleases: [
      { title: '2024 Outreach Success', date: '2024-03-01', summary: 'Touched Hearts reaches 5,000 patients.', category: 'Healthcare', pdf: '/assets/press/2024-outreach.pdf' },
      { title: 'New Partnership Announced', date: '2024-02-15', summary: 'Collaboration with local NGOs.', category: 'Partnerships', pdf: '/assets/press/partnership.pdf' },
    ],
    videos: [
      { title: 'Healthcare in Karamoja', url: 'https://www.youtube.com/embed/sample1' },
      { title: 'Volunteer Stories', url: 'https://www.youtube.com/embed/sample2' },
    ],
    mediaKit: [
      { name: 'Logo Pack', preview: '/assets/kit/logo-preview.png' },
      { name: 'Press Guidelines', preview: '/assets/kit/guidelines-preview.png' },
    ],
    mediaKitZip: '/assets/kit/TouchedHearts_MediaKit.zip',
    news: [
      { title: 'Touched Hearts in Uganda Daily', date: '2024-01-10', source: 'Uganda Daily', logo: '/assets/news/uganda-daily.png', url: 'https://example.com/news1' },
      { title: 'NGO Impact Report', date: '2024-02-20', source: 'Global News', logo: '/assets/news/global-news.png', url: 'https://example.com/news2' },
    ],
    infographics: [
      { year: '2022', children: 1200, women: 800, funds: 5000000 },
      { year: '2023', children: 1500, women: 1000, funds: 7000000 },
      { year: '2024', children: 2000, women: 1300, funds: 9000000 },
    ],
  };

  // State for press release filters and lightbox
  const [pressFilter, setPressFilter] = useState('all');
  const [pressSearch, setPressSearch] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.media-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Press release filtering
  const filteredPress = mediaData.pressReleases.filter(
    (p) =>
      (pressFilter === 'all' || p.category === pressFilter) &&
      (p.title.toLowerCase().includes(pressSearch.toLowerCase()) || p.summary.toLowerCase().includes(pressSearch.toLowerCase()))
  );

  // Chart data
  const chartData = {
    labels: mediaData.infographics.map((i) => i.year),
    datasets: [
      { label: 'Children Supported', data: mediaData.infographics.map((i) => i.children), backgroundColor: '#36A2EB' },
      { label: 'Women Empowered', data: mediaData.infographics.map((i) => i.women), backgroundColor: '#FF6384' },
      {
        label: 'Funds Raised (M UGX)',
        data: mediaData.infographics.map((i) => i.funds / 1000000),
        backgroundColor: '#4BC0C0',
        yAxisID: 'y1',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'People' } },
      y1: { position: 'right', beginAtZero: true, title: { display: true, text: 'Funds (Millions UGX)' } },
    },
  };

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We’ll get back to you soon.');
    e.target.reset();
  };

  // Download media kit
  const handleDownloadKit = () => {
    const link = document.createElement('a');
    link.href = mediaData.mediaKitZip;
    link.download = 'TouchedHearts_MediaKit.zip';
    link.click();
  };

  return (
    <div className="media-page">
      {/* Page Header */}
      <section className="page-header">
        <h1>Media Center</h1>
        <p className="header-subtitle">Stories, visuals, and updates from Touched Hearts</p>
      </section>

      {/* Press Releases */}
      <section className="media-section press-releases">
        <h2>Press Releases</h2>
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search..."
            value={pressSearch}
            onChange={(e) => setPressSearch(e.target.value)}
          />
          <select value={pressFilter} onChange={(e) => setPressFilter(e.target.value)}>
            <option value="all">All Categories</option>
            {[...new Set(mediaData.pressReleases.map((p) => p.category))].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="press-container">
          {filteredPress.map((p, index) => (
            <div key={index} className="press-card">
              <div className="front">
                <h3>{p.title}</h3>
                <p>{new Date(p.date).toLocaleDateString()}</p>
                <p>{p.summary}</p>
              </div>
              <div className="back">
                <a href={p.pdf} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Library */}
      <section className="media-section video-library">
        <h2>Video Library</h2>
        <div className="video-container">
          {mediaData.videos.map((v, index) => (
            <div key={index} className="video-item">
              <iframe src={v.url} frameBorder="0" allowFullScreen title={v.title}></iframe>
              <div className="video-title">{v.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Kit */}
      <section className="media-section media-kit">
        <h2>Media Kit</h2>
        <div className="kit-preview">
          {mediaData.mediaKit.map((k, index) => (
            <div key={index} className="kit-item">
              <img src={k.preview} alt={k.name} />
              <p>{k.name}</p>
            </div>
          ))}
        </div>
        <button onClick={handleDownloadKit}>Download Media Kit</button>
      </section>

      {/* In the News */}
      <section className="media-section in-the-news">
        <h2>In the News</h2>
        <div className="news-container">
          {mediaData.news.map((n, index) => (
            <div key={index} className="news-item">
              <img src={n.logo} alt={`${n.source} Logo`} />
              <div>
                <h3>{n.title}</h3>
                <p>
                  {new Date(n.date).toLocaleDateString()} - {n.source}
                </p>
                <a href={n.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Feed (Placeholder) */}
      <section className="media-section social-feed">
        <h2>Social Media</h2>
        <div className="feed-container">
          <p>
            Follow us on{' '}
            <a href="https://twitter.com/touchedhearts" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            ,{' '}
            <a href="https://instagram.com/touchedhearts" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            , and{' '}
            <a href="https://facebook.com/touchedhearts" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{' '}
            for live updates!
          </p>
        </div>
      </section>

      {/* Interactive Infographics */}
      <section className="media-section infographics">
        <h2>Our Impact</h2>
        <div className="infographic-container">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="media-section media-inquiries">
        <h2>Media Inquiries</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="organization" placeholder="Organization" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
          <p>
            <i className="fas fa-envelope"></i> media@touchedhearts.org
          </p>
          <p>
            <i className="fas fa-phone"></i> +256 712 345 679
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox active" onClick={() => setLightboxImage(null)}>
          <span className="lightbox-close" onClick={() => setLightboxImage(null)}>
            ✕
          </span>
          <img id="lightboxImage" src={lightboxImage.src} alt={lightboxImage.alt} />
        </div>
      )}
    </div>
  );
};

export default Media;