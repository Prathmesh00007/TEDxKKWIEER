import React from "react";
import Sponsor from './sponsor';

const Sponsors = () => {
  return (
    <>
      <section className="about-fixed-image fixed-image-heading mt-5">
        <div>
          <h1 className="my-4 text-center">
            <span style={{ color: "red" }}>TEDx</span> KKWIEER
          </h1>
          <h2 className="my-3 text-center blur-fixed-image">
          Special thanks to our valued sponsors for their generous support and contributions
          </h2>
        </div>
      </section>
      <Sponsor />
    </>
  );
};

export default Sponsors;
