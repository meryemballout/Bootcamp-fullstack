import React from 'react';

const Contact = () => (
  <section className="bg-light py-5" id="contact">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
