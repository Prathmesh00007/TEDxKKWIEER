import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillAlarmFill } from "react-icons/bs";


const TimeLine = () => {
  return (
    <>
      <section id="event">
        <div className="m-4"></div>
        <h1 className="mb-5 text-3xl text-center" style={{fontWeight:'bold'}}>
          Program <span style={{ color: "red" }}> Schedule</span>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="09:15 AM - 10:00 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Opening Session </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Address by Prof. Avinash and Host
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:00 AM - 10:30 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 1 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Nalin Singhal
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:30 AM - 11:00 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 2 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Co. Shivdendra Pratap SIngh Kanwar
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:00 AM - 11:30 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 3 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mrs. Kaushalya Choudhary
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="12:30 PM - 01:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 4 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Arpit Mangal
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="01:00 PM - 01:30 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 5 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Sujeet Singh
            </h4>
            <p>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="03:20 PM - 03:50 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 6 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Gaurav Sen
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="03:50 PM - 04:20 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 7 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Ms. Devyani Shorey
            </h4>
            <p></p>
          </VerticalTimelineElement>
          

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="04:20 PM - 05:05 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 8 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mrs. Nithya Rajendran
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="05:30 PM - 06:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 9 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Suhas Yathiraj
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="06:00 PM - 06:30 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 10 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Dr. Gunjan Malhotra
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="06:30 PM - 07:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 11 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Aasheish Sharma
            </h4>
            <p></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
};

export default TimeLine;
