import React from 'react';
import { Helmet } from 'react-helmet';

const AlternativeProducts = () => {
  const products = [
    {
      title: "Nicotine Patches",
      description: "Koyo nikotin adalah koyo transdermal yang melepaskan nikotin dalam dosis yang stabil untuk membantu mengurangi gejala putus zat.",
      benefits: [
        "Memberikan dosis nikotin yang konsisten.",
        "Mudah digunakan dan tidak menusuk.",
        "Mengurangi rasa ingin nikotin dari waktu ke waktu."
      ],
      cautions: [
        "Dapat menyebabkan iritasi kulit pada beberapa orang.",
        "Tidak direkomendasikan untuk orang dengan riwayat penyakit tertentu."
      ],
      image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/3/48c39da6-bfb5-44ce-9e6e-93ca3dd53062.jpg",
      buyLink: "https://www.tokopedia.com/search?q=nicotine+patch"
    },
    {
      title: "Non-Nicotine Vapes",
      description: "Vape non-nikotin menggunakan e-liquid beraroma tanpa nikotin, menawarkan alternatif yang lebih aman bagi mereka yang ingin berhenti.",
      benefits: [
        "Tidak mengandung zat adiktif.",
        "Meniru kebiasaan merokok.",
        "Berbagai rasa yang tersedia."
      ],
      cautions: [
        "Mungkin masih mengandung bahan kimia yang mengiritasi paru-paru.",
        "Bukan solusi jangka panjang untuk berhenti dari nikotin."
      ],
      image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/12/3/0184efaf-2026-4bbe-961f-b67d54b348d9.jpg",
      buyLink: "https://www.tokopedia.com/search?st=&q=Non-Nicotine%20Vapes"
    },
    {
      title: "Nicotine Gum",
      description: "Permen karet nikotin menyediakan nikotin dalam dosis cepat untuk membantu mengendalikan keinginan dengan mengunyah permen karet, sehingga nikotin dapat diserap melalui mulut.",
      benefits: [
        "Portabel dan nyaman untuk digunakan saat bepergian.",
        "Membantu mengatasi keinginan nikotin yang tiba-tiba.",
        "Tersedia dalam berbagai rasa."
      ],
      cautions: [
        "Dapat menyebabkan ketidaknyamanan rahang jika digunakan secara berlebihan.",
        "Tidak cocok untuk orang yang memiliki masalah gigi atau kawat gigi."
      ],
      image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/9/5/331f1d70-1b56-4b42-9eff-069928e6046f.jpg", 
      buyLink: "https://www.tokopedia.com/search?st=&q=nicotine%20gum"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Alternative Products - QuitNic</title>
      </Helmet>
      
      <section className="alternative-products">
        <div className="container">
          <h1 className="page-title">Jelajahi Produk Alternatif</h1>
          <p className="page-description">
           QuitNic menawarkan wawasan tentang alternatif yang lebih aman untuk membantu Anda berhenti merokok atau vaping. Jelajahi opsi-opsi ini, pelajari tentang manfaat dan tindakan pencegahannya, dan temukan tempat untuk membelinya.
          </p>

          <div className="product-list">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-details">
                  <h3>Manfaat:</h3>
                  <ul>
                    {product.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                  <h3>Peringatan:</h3>
                  <ul>
                    {product.cautions.map((caution, i) => (
                      <li key={i}>{caution}</li>
                    ))}
                  </ul>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <a
                  href={product.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-link"
                >
                  Beli Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlternativeProducts;