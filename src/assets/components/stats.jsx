import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsEmojiSmile, BsJournalRichtext, BsHeadset, BsPeople } from 'react-icons/bs';
import './stats.css'; // Make sure you have your CSS file

const Stats = () => {
  const [counts, setCounts] = useState({
    happyClients: 0,
    projects: 0,
    hoursOfSupport: 0,
    hardWorkers: 0,
  });

  const targetCounts = {
    happyClients: 232,
    projects: 521,
    hoursOfSupport: 1453,
    hardWorkers: 32,
  };

  const sectionRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          startAnimations();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startAnimations = () => {
    const duration = 2000; 

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        setCounts(targetCounts);
        return;
      }

      const progress = elapsedTime / duration;

      setCounts({
        happyClients: Math.round(progress * targetCounts.happyClients),
        projects: Math.round(progress * targetCounts.projects),
        hoursOfSupport: Math.round(progress * targetCounts.hoursOfSupport),
        hardWorkers: Math.round(progress * targetCounts.hardWorkers),
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="stats" className="stats section" style={{ padding: '60px' }} ref={sectionRef}>
      <Container className="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4 align-items-center justify-content-between">
          <Col lg={5}>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/stats-img.jpg" alt="Stats" className="img-fluid" />
          </Col>

          <Col lg={6}>
            <h3 className="fw-bold fs-2 mb-3">Voluptatem dignissimos provident quasi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.
            </p>

            <Row className="gy-4">
              <Col lg={6}>
                <div className="stats-item d-flex">
                  <BsEmojiSmile className="stats-icon flex-shrink-0 me-3" style={{ fontSize: '44px', color: 'orange', marginRight: '10px' }} />
                  <div>
                    <span className="purecounter">{counts.happyClients}</span>
                    <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="stats-item d-flex">
                  <BsJournalRichtext className="stats-icon flex-shrink-0 me-3" style={{ fontSize: '44px', color: 'orange', marginRight: '10px' }} />
                  <div>
                    <span className="purecounter">{counts.projects}</span>
                    <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="stats-item d-flex">
                  <BsHeadset className="stats-icon flex-shrink-0 me-3" style={{ fontSize: '44px', color: 'orange', marginRight: '10px' }} />
                  <div>
                    <span className="purecounter">{counts.hoursOfSupport}</span>
                    <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="stats-item d-flex">
                  <BsPeople className="stats-icon flex-shrink-0 me-3" style={{ fontSize: '44px', color: 'orange', marginRight: '10px' }} />
                  <div>
                    <span className="purecounter">{counts.hardWorkers}</span>
                    <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stats;