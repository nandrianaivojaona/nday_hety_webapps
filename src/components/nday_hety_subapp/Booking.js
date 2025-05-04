import React from 'react';
import styles from './HomePage.module.css';
import logo from '../assets/images/NdaY_Hety.png'; // place your logo inside src/assets/
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div>
      <header className={styles.header} >
        <div className={styles.overlay}></div>
        <div className={styles.headerContent}>
          <h1>Welcome to <span className={styles.highlight}>NdaY'Hety</span></h1>
          <p>Your trusted partner for safe, secure, and professional hairstyling at home.</p>
        </div>
      </header>

      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceCards}>
          <div className="service-card">
            <img src= {logo} alt="Logo NdaY'Hety" class="service-card img" width='100px' height="100px"/>
            <div className="overlay">
              <h3>Home Hairstyles</h3>
              <p>Book your hairstylist at home.</p>
                <a href="https://nandrianaivojaona.github.io/NdaY" className="book-now" target="_blank" rel="noopener noreferrer">
                 Book Now
                </a>
            </div>
          </div>
        
          <div className={styles.card}>
            <h3>Hotel Hairstyling</h3>
            <p>Service for expats and travelers staying at top hotels.</p>
          </div>
          <div className={styles.card}>
            <h3>Salon Partnerships</h3>
            <p>Top salons delivering excellence to your doorstep.</p>
          </div>
        </div>
      </section>

      <motion.section
        className={styles.aboutSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.aboutContent}>
            <h2>About Us</h2>
            <p>
               NdaY'Hety is proudly operated by <a href="https:nandrianaivojaona.github.io/NdaY" class="preview-link">NdaY'</a> 
               <div class="preview-box">
                <iframe src="https://nandrianaivojaona.github.io" width="300px" height="100px"></iframe>
               </div>
               a company dedicated to connecting people and enhancing their quality of life 
               through secure and premium at-home services.
            </p>
        </div>
      </motion.section>



      <footer className={styles.footer}>
        <p>&copy; 2025 NdaY'. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
