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
            <h1 className="page-title">Educational Content</h1>
            <p className="intro-text">
              Take the first step towards a healthier life. Learn the facts, 
              uncover the myths, and discover effective methods to quit nicotine 
              for good. Knowledge is the most powerful tool for change.
            </p>
          </header>

          <section className="content-section quitting-methods">
            <h2 className="section-title">Quitting Methods</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>Nicotine Replacement Therapy (NRT)</h3>
                <p>
                  Products like patches and gum reduce withdrawal symptoms while 
                  you work on breaking the habit.
                </p>
              </div>
              <div className="content-card">
                <h3>Behavioral Therapy</h3>
                <p>
                  Work with a counselor to identify triggers and develop strategies 
                  to stay smoke-free.
                </p>
              </div>
              <div className="content-card">
                <h3>Mobile Apps</h3>
                <p>
                  Track your progress, set goals, and connect with supportive 
                  communities using quit-smoking apps like "QuitNow!" and "Smoke Free."
                </p>
              </div>
              <div className="content-card">
                <h3>Support Groups</h3>
                <p>
                  Share experiences, gain encouragement, and build accountability 
                  by joining local or online support groups.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section dangers-vaping">
            <h2 className="section-title">Dangers of Vaping</h2>
            <div className="content-grid">
              <div className="content-card">
                <h3>Health Risks</h3>
                <p>
                  Vaping exposes users to harmful chemicals, including formaldehyde 
                  and heavy metals, leading to potential lung and cardiovascular damage.
                </p>
              </div>
              <div className="content-card">
                <h3>Addiction</h3>
                <p>
                  Many e-liquids contain nicotine, which is highly addictive, 
                  especially for teens and young adults.
                </p>
              </div>
              <div className="content-card">
                <h3>Unregulated Ingredients</h3>
                <p>
                  Some vapes contain unregulated substances, increasing risks of unknown 
                  long-term health effects.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section myth-busting">
            <h2 className="section-title">Myth-Busting: Is Vaping Safer?</h2>
            <ul className="myth-list">
              <li>
                <strong>Myth:</strong> Vaping is just flavored water vapor. <br />
                <strong>Fact:</strong> It's aerosol containing harmful chemicals 
                like acrolein and heavy metals.
              </li>
              <li>
                <strong>Myth:</strong> Vaping helps you quit smoking. <br />
                <strong>Fact:</strong> Many end up using both cigarettes and vapes, 
                increasing nicotine dependency.
              </li>
              <li>
                <strong>Myth:</strong> Nicotine isn't that harmful. <br />
                <strong>Fact:</strong> Nicotine affects brain development and 
                increases risks of addiction.
              </li>
            </ul>
          </section>

          <section className="quiz-section">
            <h2 className="section-title">Interactive Quizzes</h2>
            <p>
              This Page is on Progress, Please Wait ^_^
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default EducationalContent;