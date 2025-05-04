import React from 'react';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerOverlay}></div>
        <div className={styles.headerContent}>
          <h1>Welcome to <span className={styles.highlight}>NdaY'Hety</span></h1>
          <p>Your trusted partner for safe, secure, and professional hairstyling at home.</p>
        </div>
      </header>

       {/* Services Section with same background */}
       <section className={styles.services}>
        <div className={styles.servicesOverlay}></div>
        <div className={styles.servicesContent}>
          <h2>Our Services</h2>
          <div className={styles.serviceCards}>
            {servicesData.map((service, index) => (
              <div 
                key={index}
                className={styles.serviceCard}
                style={{ 
                  backgroundImage: `linear-gradient(rgba(60, 60, 59, 0.2), rgb(243, 239, 232)), url(${require('../assets/images/NdaY_Hety.png')})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className={styles.serviceOverlay}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.link && (
                    <a 
                      href={service.link} 
                      className={styles.bookNowButton}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {service.buttonText || "Book Now"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className={styles.aboutContainer}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2>About Us</h2>
            <p>
              NdaY'Hety is proudly operated by{' '}
              <a
                href="https://nandrianaivojaona.github.io/NdaY"
                className={styles.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                NdaY'
              </a>
              , a company dedicated to connecting people and enhancing their quality of life
              through secure and premium at-home services.
            </p>

            {/* Hover Preview Effect */}
            <motion.div
              whileHover={{ scale: 1.03, opacity: 1 }}
              initial={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
              className={styles.previewBox}
            >
              <iframe
                src="https://nandrianaivojaona.github.io/NdaY"
                title="Preview NdaY'"
                frameBorder="0"
              />
            </motion.div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 NdaY'. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Service data for cleaner JSX
const servicesData = [
  {
    title: "Home Hairstyles",
    description: "Book your hairstylist at home.",
    link: "https://nandrianaivojaona.github.io/NdaY",
    buttonText: "Book Now"
  },
  {
    title: "Hotel, B&B and Guest House Hairstyling",
    description: "Service for expats/travelers staying at top Hotels, B&B and Guest Houses.",
    link: "https://nandrianaivojaona.github.io/NdaY",

     buttonText: "Client Booking"
  },
  {
    title: "Salon Partnerships",
    description: "Top salons delivering excellence to your doorstep.",
    link: "https://nandrianaivojaona.github.io/NdaY",
     buttonText: "Interested"
  }
];

export default HomePage;