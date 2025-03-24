import React, { useEffect } from 'react';
import deepakBuilders from '../assets/deepak.jpeg'; // Replace with actual image paths
import redFM from '../assets/red.jpeg';

const sponsors = [
  {
    name: 'RED FM 93.5',
    image: redFM,
    sponsorshipType: 'Radio Partner'
  },
  {
    name: 'Deepak Builders and Developers',
    image: deepakBuilders,
    sponsorshipType: 'Title Sponsor'
  },
  {
    name: 'Surbhi Hotel',
    image: "IMG-20250324-WA0002.jpg",
    sponsorshipType: 'Food Sponsor'
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
          <div
            key={index}
            style={index === 1 ? styles.middleSponsorCard : styles.sponsorCard}
          >
            <p className='text-xl font-semibold' style={index === 1 ? styles.middleText : styles.sponsorText}>
            {sponsor.sponsorshipType}</p>
           <img
            src={sponsor.image}
            alt={sponsor.name}
            style={index === 1 ? styles.middleSponsorImage : styles.sponsorImage}
          />
          <h3 className='mt-4 font-semibold' style={index === 1 ? styles.middleText : styles.sponsorText}>
            {sponsor.name}
          </h3>

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
    display: 'grid',  // Use CSS Grid to make the middle one bigger
    gridTemplateColumns: '1fr 2fr 1fr',  // 3 columns with the middle one twice as wide
    gap: '20px',  // Add spacing between the cards
    width: '100%',  // Ensure the row takes up full width
    marginTop: '20px',  // Space between heading and sponsors
  },
  sponsorCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '20px',
  },
  middleSponsorCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '20px',
    // This will be wider because of gridTemplateColumns
  },
  sponsorImage: {
    width: 'auto',
    height: '250px',  // Fixed height for consistency for side sponsors
    objectFit: 'contain',
    borderRadius: '10px',
  },
  // Middle sponsor adjustments
  middleSponsorImage: {
    width: 'auto',
    height: '300px',  // Bigger image height for middle sponsor
    objectFit: 'contain',
    borderRadius: '10px',
  },
  sponsorText: {
    fontSize: '1rem',  // Default font size for side sponsors
    fontWeight: 'bold',
  },
  middleText: {
    fontSize: '1.25rem',  // Bigger font size for middle sponsor
    fontWeight: 'bold',
  },
};

const Sponsors = () => {
  return (
    <>
      <section className="about-fixed-image h-auto fixed-image-heading mt-5">
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
