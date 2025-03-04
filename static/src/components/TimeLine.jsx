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
        <h1 className="mb-5 text-3xl text-center" style={{ fontWeight: 'bold' }}>
          Program <span style={{ color: "red" }}> Schedule</span>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="09:45 AM - 10:00 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Inauguration</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              Deep Prajwalan + Ganesh Vandana (KKW Performing Arts)
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:00 AM - 10:15 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Theme Reveal</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              Trustee Speech
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:15 AM - 10:20 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Hon. Shri Sandeepji Karnik Sir</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:20 AM - 10:40 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Karnik Sir's Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:40 AM - 10:45 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:45 AM - 10:50 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Ranjit Bajaj</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:50 AM - 11:10 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Ranjit Bajaj's Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:10 AM - 11:15 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:15 AM - 11:20 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Music Performance Introduction</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:20 AM - 11:30 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Music Performance</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              KKWIEER Students
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:30 AM - 11:35 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Isha Chande Introduction</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:35 AM - 11:55 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Isha Chande Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:55 AM - 12:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="12:00 PM - 1:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Break</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="01:00 PM - 1:10 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">RJ SLOT</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              Media Partner
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="1:10 PM - 1:15 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Zeeshan Ali Syed</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="1:15 PM - 1:35 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Zeeshan Ali Syed Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="1:35 PM - 1:45 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="1:45 PM - 2:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Closing Remarks</h3>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </section>
    </>
  );
};

export default TimeLine;
