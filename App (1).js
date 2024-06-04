import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar" id="navbar">
        <div className="logo">INNOVATE EDGE</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="content">
      <section id="home">
        <h1>Welcome to INNOVATE EDGE</h1>
        <p>We are a leading technology solutions provider, offering a wide range of services to help businesses thrive in the digital age. Our team of experts is dedicated to delivering innovative and customized solutions tailored to meet your specific needs. Whether you are looking to develop new software, optimize your IT infrastructure, or enhance your cybersecurity measures, Innovate Edge has the expertise and experience to help you succeed.</p>
        <p>At Innovate Edge, we pride ourselves on our commitment to excellence and customer satisfaction. Our mission is to empower businesses by providing top-notch technology solutions that drive growth and efficiency. We work closely with our clients to understand their unique challenges and objectives, and we develop strategies that deliver real results.</p>
        <p>Scroll down for information.</p>
    </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Innovate Edge was founded with the vision of becoming a trusted partner for businesses looking to leverage technology for their success. Over the years, we have grown into a full-service IT company, offering a comprehensive suite of services that cover everything from software development and IT consulting to managed services and technical support.</p>
        <p>Our team comprises skilled professionals with diverse backgrounds and expertise in various fields of technology. We believe in continuous learning and staying ahead of industry trends to ensure that we can provide our clients with the most up-to-date and effective solutions.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>Details of services provided.</p>
          <p>We offer a wide range of services designed to meet the needs of businesses of all sizes and industries. Our core services include:</p>
        <ul>
            <li>Software Development: Custom software solutions to streamline your business processes and improve efficiency.</li>
            <li>IT Consulting: Expert advice to help you make informed decisions about your IT strategy and investments.</li>
            <li>Managed Services: Comprehensive IT management and support to keep your systems running smoothly.</li>
            <li>Cybersecurity: Advanced security measures to protect your data and systems from cyber threats.</li>
        </ul>
        <p>In addition to these core services, we also offer cloud computing solutions, data analytics, and digital transformation services. Our goal is to be your one-stop-shop for all your technology needs.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Contact information here.</p>
          <p>If you would like to learn more about our services or discuss how we can help your business, please don't hesitate to get in touch. You can reach us via email, phone, or through our online contact form. We look forward to hearing from you and exploring how we can work together to achieve your business goals.</p>
        <p>Email: contact@innovatedge.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        </section>
      </div>
    </div>
  );
}

export default App;
