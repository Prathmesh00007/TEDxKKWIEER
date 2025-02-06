import React,{useEffect ,useRef} from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    
    emailjs
    .sendForm('service_ke6oodo', 'template_arnur2p', form.current, 'qzW4Q-nI22hS7wxPv')
    .then(
      () => {
        console.log('SUCCESS!');
        alert("Thanks for your response")
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('FAILED...', error.text);
      },
    );
};

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section id="contact" className="contact w-screen">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>CONTACT</h2>
            <p>
            Your Thoughts Are Important - Share Them with Us!
            </p>
          </div>

          <div className="row background-image-div" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="row p-4">
                <div className="col-md-12 ">
                  <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3 className="text-white z-50">Our Address</h3>
                    <a href="https://maps.app.goo.gl/Kt1J5Rget3AVCSNW8">K.K.Wagh Institute of Engineering Education and Research,Nashik 422003</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3  className="text-white">Email Us</h3>
                    <p>
                      Official Email : <a href="mailto:tedxkkwieer@kkwagh.edu.in ">tedxkkwieer@kkwagh.edu.in </a>
                    </p>
                    <p></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3  className="text-white">Call Us</h3>
                    <p>
                    Shivanjay Bajpai (Organizer) : <br /> <a href="callto:+917020637824">+91 7020637824</a>   
                      </p>
                    <p>
                    Shivam Koul (Co-Organizer): <br /> <a href="callto:+917889601718">+91 7889601718</a>  
                     </p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col-lg-6">
              <form ref={form}
              onSubmit={sendEmail}
                className="php-email-form m-4"
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;