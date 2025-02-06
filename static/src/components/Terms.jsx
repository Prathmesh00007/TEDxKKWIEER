import React from "react";
import "./Terms.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">TEDxKKWIEER Main Event: Terms and Conditions</h1>
      <p className="terms-welcome">
        Welcome to TEDxKKWIEER! Here are some guidelines to ensure a smooth and enjoyable experience for everyone.
      </p>

      <div className="terms-section">
        <h2 className="terms-subtitle">1. Registration & Tickets</h2>
        <p>Please make sure to register with accurate details.</p>
        <p>Your ticket is your key to the event—it’s non-transferable and essential for entry.</p>
      </div>

      <div className="terms-section">
        <h2 className="terms-subtitle">2. Code of Conduct</h2>
        <p>We encourage respectful and professional interactions throughout the event.</p>
        <p>
          Any disruptive behavior, harassment, or discrimination will not be tolerated and may lead to removal without a refund. Let’s keep this space inspiring and inclusive!
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-subtitle">3. Event Changes</h2>
        <p>While we aim to stick to the schedule, changes to speakers, timings, or the event format may occur if needed.</p>
        <p>In case of cancellation, we’ll provide refunds or make alternate arrangements to accommodate you.</p>
      </div>

      <div className="terms-section">
        <h2 className="terms-subtitle">4. Privacy & Media</h2>
        <p>Your personal information will only be used for event-related purposes.</p>
        <p>
          By attending, you agree to potentially being photographed or recorded. These visuals may be used to share the TEDxKKWIEER story with a wider audience.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="terms-subtitle">5. Liability</h2>
        <p>We’ll do our best to ensure a safe event, but the organizers cannot be held responsible for any loss, injury, or damage that may occur.</p>
      </div>

      <div className="terms-section">
        <h2 className="terms-subtitle">6. Refunds</h2>
        <p>Refunds, if applicable, will follow the event’s cancellation policy.</p>
      </div>

      <div className="terms-section">
        <h2 className="terms-subtitle">7. Governing Law</h2>
        <p>These terms are governed by the laws of the jurisdiction where the event takes place.</p>
      </div>

      <p className="terms-thankyou">
        Thank you for being part of TEDxKKWIEER! Let’s make this a memorable experience together.
      </p>
    </div>
  );
};

export default TermsAndConditions;
