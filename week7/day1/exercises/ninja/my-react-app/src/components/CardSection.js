import React from 'react';

const features = [
  {
    icon: 'fas fa-rocket',
    title: 'About the company',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Our Values',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Our Mission',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
