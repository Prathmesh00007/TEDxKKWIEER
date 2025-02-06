import React, { useEffect } from 'react';
import novotel from '../assets/bg.png';
import vb from '../assets/bg.png';
import spice from '../assets/bg.png';
import creme from '../assets/bg.png';
import fm from '../assets/bg.png';
import otc from '../assets/bg.png';

const sponsors = [
  {
    name: 'Novotel',
    image: novotel,
    sponsorshipType: 'Hospitality Partner'
  },
  {
    name: 'Vending Brothers',
    image: vb,
    sponsorshipType: 'Merchandise Partner'
  },
  {
    name: 'The Spice Route',
    image: spice,
    sponsorshipType: 'Food Partner'
  },
  {
    name: 'Creme',
    image: creme,
    sponsorshipType: 'Styling Partner'
  },
  {
    name: '94.3 FM',
    image: fm,
    sponsorshipType: 'Radio Partner'
  },
  {
    name: 'OTC Resorts and Water Park',
    image: otc,
    sponsorshipType: 'Exclusive Partner'
  }
];

const Sponsor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Split sponsors into rows
  const row1 = sponsors.slice(0, 1);
  const row2 = sponsors.slice(1, 4);
  const row3 = sponsors.slice(4, 6);

  return (
    <div style={styles.container}>
      {/* First row with 1 sponsor */}
      <div style={styles.row}>
        {row1.map((sponsor, index) => (
          <div key={index} style={styles.sponsorCardSingle}>
            <img src={sponsor.image} alt={sponsor.name} style={styles.sponsorImage} />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.sponsorshipType}</p>
          </div>
        ))}
      </div>

      {/* Second row with 3 sponsors */}
      <div style={styles.row}>
        {row2.map((sponsor, index) => (
          <div key={index} style={styles.sponsorCardTriple}>
            <img src={sponsor.image} alt={sponsor.name} style={styles.sponsorImage} />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.sponsorshipType}</p>
          </div>
        ))}
      </div>

      {/* Third row with 2 sponsors */}
      <div style={styles.row}>
        {row3.map((sponsor, index) => (
          <div key={index} style={styles.sponsorCardDouble}>
            <img src={sponsor.image} alt={sponsor.name} style={styles.sponsorImage} />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.sponsorshipType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  sponsorCardSingle: {
    textAlign: 'center',
    width: '100%',
    marginBottom: '20px'
  },
  sponsorCardTriple: {
    textAlign: 'center',
    width: '30%',
    margin: '0 10px'
  },
  sponsorCardDouble: {
    textAlign: 'center',
    width: '45%',
    margin: '0 10px'
  },
  sponsorImage: {
    width: 'auto',  // Allow width to be dynamic and maintain original ratio
    height: '200px', // Fixed height to ensure uniformity
    objectFit: 'contain', // Prevent cutting while maintaining the image aspect ratio
    borderRadius: '10px', // Optional rounded corners
  }
};

export default Sponsor;
