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
            QuitNic is dedicated to supporting individuals who are struggling with nicotine addiction, specifically through cigarettes and vapes. Our mission is to empower people with the tools, resources, and knowledge to help them break free from nicotine dependency and lead a healthier, nicotine-free life.
          </p>

          <h2 className="subheading">Background Issue</h2>
          <p className="background-description">
            Smoking and vaping have become a widespread problem in Indonesia, with a growing number of individuals, especially the youth, starting to use nicotine products at an early age. Despite government regulations and health campaigns, nicotine addiction continues to spread due to the accessibility and appeal of cigarettes and e-cigarettes. Vaping, often marketed as a safer alternative, has also seen a surge in popularity, especially among teenagers and young adults.
          </p>

          <br />

          <p className="background-description">
            The impact of nicotine addiction is significant and far-reaching. Smoking and vaping contribute to a variety of serious health problems, including respiratory issues, cardiovascular diseases, and a higher risk of cancers. The burden on the healthcare system continues to grow, with rising medical costs and increasing numbers of people suffering from nicotine-related diseases. The addiction also affects the quality of life, mental health, and productivity of individuals, especially in the younger generation who are still in the formative years of their health and wellbeing.
          </p>

          <br />

          <p className="background-description">
            The Indonesian Doctors Association (IDI) has recommended that the government take more stringent action against vaping, similar to the ban on conventional cigarettes, due to the hazardous composition of e-cigarettes. Studies conducted by the Indonesian Food and Drug Authority (BPOM) in 2015 and 2017 have further supported these concerns, revealing that the negative impacts of vaping outweigh its potential benefits. This highlights the urgent need for alternative solutions for those seeking to quit nicotine products.
          </p>

          <br />

          <p className="background-description">
            To address this growing issue, QuitNic provides a comprehensive solution. Our platform offers a range of resources designed to help individuals quit smoking and vaping. From alternative nicotine products like nicotine patches and gums to educational content on the dangers of nicotine use, QuitNic is committed to supporting individuals on their journey to quit. With access to local support networks and success stories, QuitNic aims to empower users with the tools they need to break free from addiction and live healthier lives.
          </p>

          <h3 className="section-heading">Our Goal</h3>
          <p className="about-text">
            At QuitNic, we understand that quitting smoking or vaping is a challenging journey. Our goal is to make that journey easier and more accessible by providing:
          </p>
          <ul className="about-list">
            <li>Information on alternative products like nicotine patches and non-nicotine vapes.</li>
            <li>Educational content on the dangers of nicotine, vaping, and effective quitting strategies.</li>
            <li>Interactive quizzes to test knowledge and bust common myths about nicotine addiction.</li>
            <li>Local resources and support networks to help individuals stay motivated and receive the help they need.</li>
          </ul>

          <h3 className="section-heading">Why QuitNic?</h3>
          <p className="about-text">
            Nicotine addiction is not only harmful to your health, but it also affects your quality of life. With QuitNic, we aim to provide you with the right guidance, educational resources, and support to quit smoking or vaping and improve your well-being.
          </p>
          <p className="about-text">
            Our platform is designed to provide a comprehensive approach to quitting. Whether you're seeking alternatives to nicotine products, learning about quitting strategies, or looking for local support, QuitNic is here to guide you every step of the way.
          </p>

          <h3 className="section-heading">Join Us in the Journey</h3>
          <p className="about-text">
            Take the first step towards a nicotine-free life today. Explore our resources, take our interactive quizzes, and connect with local support to start your journey towards a healthier, happier future.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;