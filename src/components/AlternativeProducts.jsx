import React from 'react';
const AlternativeProducts = () => {
  const products = [
    {
      title: "Nicotine Patches",
      description: "Nicotine patches are transdermal patches that release a steady dose of nicotine to help reduce withdrawal symptoms.",
      benefits: [
        "Provides a consistent dose of nicotine.",
        "Easy to use and discreet.",
        "Reduces cravings over time."
      ],
      cautions: [
        "May cause skin irritation in some users.",
        "Not recommended for people with certain medical conditions."
      ],
      buyLink: "https://www.tokopedia.com/search?q=nicotine+patch"
    },
    {
      title: "Non-Nicotine Vapes",
      description: "Non-nicotine vapes use flavored e-liquids without nicotine, offering a safer alternative for those looking to quit.",
      benefits: [
        "Contains no addictive substances.",
        "Mimics the hand-to-mouth habit of smoking.",
        "Variety of flavors available."
      ],
      cautions: [
        "May still contain chemicals that irritate the lungs.",
        "Not a long-term solution to quitting."
      ],
      buyLink: "https://www.tokopedia.com/search?st=&q=Non-Nicotine%20Vapes"
    },
    {
      title: "Nicotine Gum",
      description: "Nicotine gum provides a quick dose of nicotine to help control cravings by chewing the gum, allowing nicotine to be absorbed through the mouth.",
      benefits: [
        "Portable and convenient for on-the-go use.",
        "Helps manage sudden cravings.",
        "Available in a variety of flavors."
      ],
      cautions: [
        "May cause jaw discomfort if overused.",
        "Not suitable for people with dental issues or braces."
      ],
      buyLink: "https://www.tokopedia.com/search?st=&q=nicotine%20gum"
    }
  ];

  return (
    <section className="alternative-products">
      <div className="container">
        <h1 className="page-title">Explore Alternative Products</h1>
        <p className="page-description">
          QuitNic offers insights into safer alternatives to help you quit smoking or vaping. Explore these options, learn about their benefits and precautions, and find where to purchase them.
        </p>

        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-details">
                <h3>Benefits:</h3>
                <ul>
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <h3>Cautions:</h3>
                <ul>
                  {product.cautions.map((caution, i) => (
                    <li key={i}>{caution}</li>
                  ))}
                </ul>
              </div>
              <a
                href={product.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-link"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativeProducts;