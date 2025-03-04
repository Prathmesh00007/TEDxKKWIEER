import React, { useEffect } from 'react';
import deepakBuilders from '../assets/deepak.jpeg'; // Replace with actual image paths
import redFM from '../assets/red.jpeg';
import gatewayNashik from '../assets/red.jpeg';

const sponsors = [
  {
    name: 'Deepak Builders and Developers',
    image: deepakBuilders,
    sponsorshipType: 'Title Sponsor'
  },
  {
    name: 'RED FM 93.5',
    image: redFM,
    sponsorshipType: 'Radio Partner'
  },
  {
    name: 'Gateway Nashik',
    image: gatewayNashik,
    sponsorshipType: 'Hospitality Sponsor'
  }
];

const Sponsor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      {/* Row for sponsors */}
      <div style={styles.sponsorRow}>
        {sponsors.map((sponsor, index) => (
          <div key={index} style={styles.sponsorCard}>
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
    alignItems: 'center',  // Center align everything in the container
    margin: '20px',
    fontFamily: "'Poppins', sans-serif",  // Apply Poppins font globally
  },
  sponsorRow: {
    display: 'flex',  // Use flex to arrange items in a row
    justifyContent: 'space-around',  // Distribute space evenly
    width: '100%',  // Ensure the row takes up full width
    marginTop: '20px',  // Space between heading and sponsors
  },
  sponsorCard: {
    display: 'flex',  // Use flexbox to arrange the image and text vertically
    flexDirection: 'column',  // Stack image and text vertically
    alignItems: 'center',  // Center align text under the image
    textAlign: 'center',
    width: '30%',  // Each sponsor card takes up 30% of the row width
    marginBottom: '20px',  // Space below each card
  },
  sponsorImage: {
    width: 'auto',  // Allow width to be dynamic and maintain the original ratio
    height: '200px',  // Fixed height for consistency
    objectFit: 'contain',  // Maintain aspect ratio and avoid stretching
    borderRadius: '10px',  // Optional: rounded corners
  }
};

const Sponsors = () => {
  return (
    <>
      <section className="about-fixed-image fixed-image-heading mt-5">
        <div>
          <h1 className="my-4 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span style={{ color: "red" }}>TEDx</span> KKWIEER
          </h1>
          <h2 className="my-3 text-center blur-fixed-image" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Special thanks to our valued sponsors for their generous support and contributions
          </h2>
          <Sponsor />
        </div>
      </section>
    </>
  );
};

export default Sponsors;
