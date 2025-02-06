import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section id="testimonials" className="testimonials" style={{backgroundColor:'black'}}>
        <div className="container " data-aos="fade-up">
          <div className="section-title">
            <h2> TOP<span style={{color:'white'}}> TEDx TALKS</span></h2>
          </div>
          <div className="p-md-4 p-4">
            <Slider {...settings}>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/LKPD_a4xd7M?si=w4LxEvi4igfFEuXi`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">Putting Everyday Life on Trial | Anubhav Bassi</p>
                  <p>
                  Anubhav Bassi humorously examines the quirks and struggles of daily life, challenging societal norms, encouraging self-reflection, and promoting acceptance of imperfections in a light-hearted way.
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/0NV1KdWRHck?si=l8g4-d2kGzDToPFI`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">Thoughts on humanity, fame and love | Shah Rukh Khan</p>
                  <p>
                  Shah Rukh Khan reflects on humanity, fame, and love, sharing personal insights about his journey, the complexities of fame, and the importance of human connection and love in life.
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/sNbGU_I9HWw?si=mkMxj4jy4MjuXOsN`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">Redefining Storytelling | Rana Daggubati</p>
                  <p>
                  Rana Daggubati explores the evolving art of storytelling, emphasizing how technology, culture, and diverse mediums are reshaping the way stories are told and experienced globally.
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/dtiVl0zWqyc?si=NfSiERdVV8iukQMp`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">Writing a way to Recovery | Akshat Gupta </p>
                  <p>
                  Akshat found himself at a crossroads, facing the void left by life's unexpected turns. He grappled with the unfamiliar territory of living alone, learning how to be his own anchor. In this soul-searching process, he discovered a source of healing - writing.
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/ksIOv4l0oSI?si=DKaEND0K0nzkxRrS`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">Internet, the world's biggest stage | Ashish Chanchlani </p>
                  <p>
                  Ashish Chanchlani discusses the power of the internet as a global stage, highlighting how digital platforms have transformed entertainment, creativity, and the way people connect and express themselves.                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="container">
            <div className="row mt-5  justify-content-center ">
                <a href="https://www.ted.com/playlists/180/the_10_most_popular_tedx_talks"  target="_blank" rel="noreferrer" className="testimonial_border text-center text-white">View more talks</a>
            </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
