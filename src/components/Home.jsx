import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to QuitNic - Your Path to Quit Smoking and Vaping</title>
      </Helmet>

      <section className="hero-section">
        <div className="container hero-container">
          <h1 className="hero-title">Take the First Step Towards a Nicotine-Free Life</h1>
          <p className="hero-subtitle">Discover resources, alternatives, and support to help you quit nicotine.</p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="features-title">Kenapa QuitNic?</h2>
          <p className="features-description">
            QuitNic dirancang untuk memandu Anda melalui setiap langkah perjalanan berhenti merokok Anda. Mulai dari memberikan informasi yang bermanfaat tentang produk alternatif hingga menawarkan konten edukasi dan menghubungkan Anda dengan dukungan lokal, kami di sini untuk membantu.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <h3>Alternative to Nicotine</h3>
              <p>Jelajahi produk seperti patch nikotin dan vape non-nikotin yang dapat membantu memudahkan transisi.</p>
            </div>
            <div className="feature-item">
              <h3>Educational Content</h3>
              <p>Pelajari tentang bahaya nikotin dan vaping, dan temukan strategi berhenti merokok yang efektif yang didukung oleh penelitian.</p>
            </div>
            <div className="feature-item">
              <h3>Local Support</h3>
              <p>Terhubung dengan organisasi lokal dan jaringan pendukung untuk tetap termotivasi dan mendapatkan bantuan saat dibutuhkan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">Cerita Sukses</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"QuitNic memberi saya informasi yang saya butuhkan untuk berhenti vaping. Dukungan dan alat edukasi benar-benar membuat perbedaan!"</p>
              <span>- Evan V.</span>
            </div>
            <div className="testimonial">
              <p>"Saya tidak pernah berpikir saya bisa berhenti merokok, tetapi dengan bantuan QuitNic, saya dapat melepaskan diri dari kecanduan dan menjadi orang yang lebih baik."</p>
              <span>- Michael D.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-container">
          <h2 className="cta-heading">Siap Untuk Berhenti?</h2>
          <p className="cta-text">Kendalikan kesehatan Anda hari ini dengan menggunakan QuitNic. Jelajahi sumber daya kami dan mulailah perjalanan Anda menuju kehidupan bebas nikotin.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;