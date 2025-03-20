import React from 'react';

function AboutComponent() {
  return (
    <div>

<section id="about" className="about py-5"> 
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/about.jpg" className="img-fluid" alt="About Us" />
          </div>
          <div className="col-lg-6 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul style={{color: 'orange'}}>
              <i className="bi bi-check2-all "></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat
              <br></br>
              <i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit
              <br></br>
              <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </section>

      </div>
  );
}

export default AboutComponent;


