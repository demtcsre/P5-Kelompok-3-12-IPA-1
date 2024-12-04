import React from 'react';
import { Helmet } from 'react-helmet';

const LocalSupport = () => {
  const supportOrganizations = [
    {
      name: 'Ministry of Health RI - Quit Line',
      description:
        'A toll-free counseling service offered by the Indonesian Ministry of Health that provides education and support for quitting smoking or vaping.',
      phone: '0-800-177-6565 (bebas biaya)',
      whatsapp: "0821-2590-0597 (WhatsApp)",
      whatsapp_link: 6282125900597,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Connect to Local Support - QuitNic</title>
      </Helmet>

      <section className="local-support-section">
        <div className="container">
          <h1 className="section-title">Connect to Local Support</h1>
          <p className="section-description">
            Contact trusted organizations and services in Indonesia to get support for quitting smoking and vaping.
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalSupport;