import React, { useState } from "react";
import "./CouponPopup.css"; // Custom CSS file for styling

const CouponPopup = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(true);

  // Prices for different tickets
  const ticketPrices = {
    gold: 399,
    vvip: 999,
    silver: 299,
  };

  // Coupon codes and their discounts
  const coupons = [
    { code: "PLT30", discount: 0.30, ticketType: "VVIP", originalPrice: ticketPrices.vvip },
    { code: "GOLD350", discount: 50, ticketType: "Gold", originalPrice: ticketPrices.gold },
    { code: "GOL30", discount: 0.30, ticketType: "Gold", originalPrice: ticketPrices.gold },
    { code: "SILV40", discount: 0.40, ticketType: "Silver", originalPrice: ticketPrices.silver },
  ];

  const getDiscountedPrice = (originalPrice, discount) => {
    return typeof discount === "number" ? originalPrice - discount : originalPrice * (1 - discount);
  };

  const handleClose = () => {
    setShowPopup(false);
    onClose();
  };

  if (!showPopup) return null;

  return (
    <div className="coupon-popup-overlay">
      <div className="coupon-popup-container">
        <h2 className="popup-header">Exclusive Ticket Discounts!</h2>
        <p className="popup-subheader">Grab your discounted tickets now!</p>
        
        <div className="coupon-list">
          {coupons.map((coupon) => {
            const discountedPrice = getDiscountedPrice(coupon.originalPrice, coupon.discount);
            return (
              <div key={coupon.code} className="coupon-item">
                <div className="coupon-code">{coupon.code}</div>
                <div className="discounted-price">
                  ₹{discountedPrice.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>

        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CouponPopup;
