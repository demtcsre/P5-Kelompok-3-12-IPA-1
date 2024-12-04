import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About QuitNic - Your Support to Quit Smoking and Vaping</title>
      </Helmet>
      
      <section className="about-section">
        <div className="container">
          <h2 className="about-title">About QuitNic</h2>
          <p className="about-description">
            QuitNic didedikasikan untuk mendukung individu yang berjuang melawan kecanduan nikotin, khususnya melalui rokok dan vape. Misi kami adalah memberdayakan orang-orang dengan alat, sumber daya, dan pengetahuan untuk membantu mereka melepaskan diri dari ketergantungan nikotin dan menjalani kehidupan yang lebih sehat dan bebas nikotin.
          </p>

          <h2 className="subheading">Background Issue</h2>
          <p className="background-description">
            Merokok dan vaping telah menjadi masalah yang meluas di Indonesia, dengan semakin banyaknya individu, terutama kaum muda, yang mulai menggunakan produk nikotin pada usia dini. Terlepas dari peraturan pemerintah dan kampanye kesehatan, kecanduan nikotin terus menyebar karena aksesibilitas dan daya tarik rokok dan rokok elektrik. Vaping, yang sering dipasarkan sebagai alternatif yang lebih aman, juga mengalami lonjakan popularitas, terutama di kalangan remaja dan dewasa muda.
          </p>

          <br />

          <p className="background-description">
            Dampak dari kecanduan nikotin sangat signifikan dan luas. Merokok dan vaping berkontribusi pada berbagai masalah kesehatan yang serius, termasuk masalah pernapasan, penyakit kardiovaskular, dan risiko kanker yang lebih tinggi. Beban pada sistem perawatan kesehatan terus bertambah, dengan meningkatnya biaya pengobatan dan meningkatnya jumlah orang yang menderita penyakit terkait nikotin. Kecanduan ini juga memengaruhi kualitas hidup, kesehatan mental, dan produktivitas individu, terutama pada generasi muda yang masih dalam masa pertumbuhan dan perkembangan.
          </p>

          <br />

          <p className="background-description">
            Ikatan Dokter Indonesia (IDI) telah merekomendasikan agar pemerintah mengambil tindakan yang lebih tegas terhadap vaping, serupa dengan pelarangan rokok konvensional, karena komposisi rokok elektrik yang berbahaya. Studi yang dilakukan oleh Badan Pengawas Obat dan Makanan (BPOM) pada tahun 2015 dan 2017 semakin mendukung kekhawatiran ini, dengan mengungkapkan bahwa dampak negatif dari vaping lebih besar daripada manfaatnya. Hal ini menyoroti kebutuhan mendesak akan solusi alternatif bagi mereka yang ingin berhenti menggunakan produk nikotin. <a href="https://yankes.kemkes.go.id/view_artikel/2716/rokok-elektrik-gaya-atau-bahaya">(dilansir dari https://yankes.kemkes.go.id/view_artikel/2716/rokok-elektrik-gaya-atau-bahaya)</a>
          </p>

          <br />

          <p className="background-description">
            Untuk mengatasi masalah yang berkembang ini, QuitNic memberikan solusi komprehensif. Platform kami menawarkan berbagai sumber daya yang dirancang untuk membantu individu berhenti merokok dan vaping. Dari produk nikotin alternatif seperti patch nikotin dan permen karet hingga konten edukasi tentang bahaya penggunaan nikotin, QuitNic berkomitmen untuk mendukung individu dalam perjalanan mereka untuk berhenti. Dengan akses ke jaringan dukungan lokal dan kisah sukses, QuitNic bertujuan untuk memberdayakan pengguna dengan alat yang mereka butuhkan untuk melepaskan diri dari kecanduan dan menjalani hidup yang lebih sehat.
          </p>

          <h3 className="section-heading">Tujuan Kami</h3>
          <p className="about-text">
            Di QuitNic, kami memahami bahwa berhenti merokok atau vaping adalah perjalanan yang menantang. Tujuan kami adalah membuat perjalanan itu lebih mudah dan lebih mudah diakses dengan menyediakan:
          </p>
          <ul className="about-list">
            <li>Informasi tentang produk alternatif seperti koyo nikotin dan vape non-nikotin.</li>
            <li>Konten edukasi tentang bahaya nikotin, vaping, dan strategi berhenti merokok yang efektif.</li>
            <li>Kuis interaktif untuk menguji pengetahuan dan mematahkan mitos umum tentang kecanduan nikotin.</li>
            <li>Sumber daya lokal dan jaringan pendukung untuk membantu individu tetap termotivasi dan menerima bantuan yang mereka butuhkan.</li>
          </ul>

          <h3 className="section-heading">Kenapa QuitNic?</h3>
          <p className="about-text">
            Kecanduan nikotin tidak hanya berbahaya bagi kesehatan Anda, tetapi juga memengaruhi kualitas hidup Anda. Dengan QuitNic, kami bertujuan untuk memberi Anda panduan yang tepat, sumber daya pendidikan, dan dukungan untuk berhenti merokok atau vaping dan meningkatkan kesejahteraan Anda.
          </p>
          <p className="about-text">
            Platform kami dirancang untuk memberikan pendekatan komprehensif untuk berhenti merokok. Baik Anda sedang mencari alternatif produk nikotin, mempelajari strategi berhenti merokok, atau mencari dukungan lokal, QuitNic ada di sini untuk memandu Anda di setiap langkah.
          </p>

          <h3 className="section-heading">Bergabunglah Dengan Kami</h3>
          <p className="about-text">
            Ambil langkah pertama menuju hidup bebas nikotin hari ini. Jelajahi website kami, ikuti kuis interaktif kami, dan terhubung dengan dukungan lokal untuk memulai perjalanan Anda menuju masa depan yang lebih sehat dan bahagia.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;