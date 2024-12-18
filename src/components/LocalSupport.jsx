import React from 'react';
import { Helmet } from 'react-helmet';

const LocalSupport = () => {
  const supportOrganizations = [
    {
      name: 'QuitLine - Kementerian Kesehatan Republik Indonesia',
      description:
        'Layanan konseling bebas pulsa yang ditawarkan oleh Kementerian Kesehatan Indonesia yang memberikan edukasi dan dukungan untuk berhenti merokok atau melakukan vaping.',
      phone: '0-800-177-6565 (bebas biaya)',
      whatsapp: "0821-2590-0597",
      whatsapp_link: 6282125900597,
      telegram_link: "https://t.me/quitina_bot",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Connect to Local Support - QuitNic</title>
      </Helmet>

      <section className="local-support-section">
        <div className="container">
          <h1 className="section-title">Terhubung dengan Dukungan Lokal</h1>
          <p className="section-description">
            Hubungi organisasi dan layanan tepercaya di Indonesia untuk mendapatkan dukungan berhenti merokok dan vaping.
          </p>
          <br />
          <div className="support-grid">
            {supportOrganizations.map((org, index) => (
              <div key={index} className="support-card">
                <h3>{org.name}</h3>
                <p>{org.description}</p>
                <p>
                  <strong>Telepon:</strong>{' '}
                  <span>{org.phone}</span>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <a href={`https://wa.me/${org.whatsapp_link}`} target="_blank" rel="noopener noreferrer">
                    {org.whatsapp}
                  </a>
                </p>
                <p>
                  <strong>Telegram:</strong>{' '}
                  <a href={org.telegram_link} target="_blank" rel="noopener noreferrer">
                    @quitina_bot
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalSupport;