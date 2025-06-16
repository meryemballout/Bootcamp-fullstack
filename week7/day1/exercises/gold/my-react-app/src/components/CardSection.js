import React from 'react';

const features = [
  {
    icon: 'fas fa-rocket',
    title: 'Fast Performance',
    text: 'Optimized for speed and efficiency.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Secure',
    text: 'Built with security in mind.'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive',
    text: 'Looks great on all devices.'
  },
];

const CardSection = () => (
  <section className="container text-center my-5" id="features">
    <h2 className="mb-4">Features</h2>
    <div className="row">
      {features.map((f, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <i className={`${f.icon} fa-3x mb-3 text-primary`}></i>
              <h5 className="card-title">{f.title}</h5>
              <p className="card-text">{f.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CardSection;
