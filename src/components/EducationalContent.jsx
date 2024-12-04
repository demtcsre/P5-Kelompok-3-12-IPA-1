import React from "react";
import { Helmet } from 'react-helmet';

const EducationalContent = () => {
  return (
    <>
      <Helmet>
        <title>Educational Content - QuitNic</title>
      </Helmet>
      <section className="educational-content">
        <div className="container">
          <header className="intro-section">
            <h1 className="page-title">Konten Edukasi</h1>
            <p className="intro-text">
              Ambil langkah pertama menuju hidup yang lebih sehat. Pelajari faktanya, mengungkap mitos, dan temukan metode efektif untuk berhenti merokok untuk selamanya. Pengetahuan adalah alat yang paling ampuh untuk perubahan.
            </p>
          </header>

          <section className="content-section quitting-methods">
            <h2 className="section-title">Quitting Methods</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>Nicotine Replacement Therapy (NRT)</h3>
                <p>
                  Produk seperti koyo dan permen karet mengurangi gejala putus zat sementara Anda berusaha menghentikan kebiasaan tersebut.
                </p>
              </div>
              <div className="content-card">
                <h3>Behavioral Therapy</h3>
                <p>
                  Bekerjasama dengan konselor untuk mengidentifikasi pemicu dan mengembangkan strategi untuk tetap bebas dari asap rokok.
                </p>
              </div>
              <div className="content-card">
                <h3>Mobile Apps</h3>
                <p>
                  Lacak kemajuan Anda, tetapkan tujuan, dan terhubung dengan komunitas yang mendukung komunitas dengan menggunakan aplikasi berhenti merokok seperti “QuitNow!” dan “Smoke Free.”
                </p>
              </div>
              <div className="content-card">
                <h3>Support Groups</h3>
                <p>
                  Berbagi pengalaman, mendapatkan dorongan, dan membangun akuntabilitas dengan bergabung dengan kelompok dukungan lokal atau online.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section dangers-vaping">
            <h2 className="section-title">Bahaya Vaping</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>Resiko Kesehatan</h3>
                <p>
                  Vaping membuat pengguna terpapar bahan kimia berbahaya, termasuk formaldehida dan logam berat, yang menyebabkan potensi kerusakan paru-paru dan kardiovaskular.
                </p>
              </div>
              <div className="content-card">
                <h3>Adiksi</h3>
                <p>
                  Banyak e-liquid yang mengandung nikotin, yang sangat adiktif, terutama bagi remaja dan dewasa muda.
                </p>
              </div>
              <div className="content-card">
                <h3>Bahan yang Tidak Diregulasi</h3>
                <p>
                  Beberapa vape mengandung zat yang tidak diatur, meningkatkan risiko yang tidak diketahui efek kesehatan jangka panjang.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section myth-busting">
            <h2 className="section-title">Myth-Busting: Apakah Vaping Lebih Aman?</h2>
            <ul className="myth-list">
              <li>
                <strong>Myth:</strong> Vaping hanyalah uap air dengan rasa atau aroma. <br />
                <strong>Fact:</strong> Ini adalah aerosol yang mengandung bahan kimia berbahaya seperti akrolein dan logam berat.
              </li>
              <li>
                <strong>Myth:</strong> Vaping membantu Anda berhenti merokok. <br />
                <strong>Fact:</strong> Banyak yang akhirnya menggunakan rokok dan vape, meningkatkan ketergantungan nikotin.
              </li>
              <li>
                <strong>Myth:</strong> Nikotin tidak terlalu berbahaya. <br />
                <strong>Fact:</strong> Nikotin mempengaruhi perkembangan otak dan meningkatkan risiko kecanduan.
              </li>
            </ul>
          </section>

          <section className="quiz-section">
            <h2 className="section-title">Kuis Interaktif</h2>
            <p>
              Halaman Ini Sedang Dalam Progress, Harap Bersabar ^_^
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default EducationalContent;