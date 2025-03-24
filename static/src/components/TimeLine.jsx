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
          Program <span style={{ color: "red" }}>Schedule</span>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="09:45 AM - 10:05 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Inauguration (Intro to Tedx+Theme Reveal)</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              Deep Prajwalan + Ganesh Vandana (KKW Performing Arts)
            </h4>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="10:05 AM - 10:15 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Trustee Speech</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              Dr. Keshav Nandurkar 
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="10:15 AM - 10:20 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Mr.Zeeshan Ali Syed </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="10:20 AM - 10:40 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Mr.Zeeshan Ali Syed Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="10:40 AM - 10:45 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              By Shri. Ajinkya Wagh Sir
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="10:45 AM - 10:50 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Ms.Isha Chande</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="10:50 AM - 11:10 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Ms.Isha Chande Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="11:10 AM - 11:15 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              By Dr. Preeti Bhamare Mam
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="11:15 AM - 11:20 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Dance Performance Introduction</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="11:20 AM - 11:30 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Dance Performance by KKWIEER Students</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="11:30 AM - 11:35 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Mr.Ranjit Bajaj</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="11:35 AM - 11:55 AM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Mr.Ranjit Bajaj Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="11:55 AM - 12:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              By Shri. Ashok Merchant / Dr. Keshav Nandurkar Sir
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="12:00 PM - 1:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Break</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="1:00 PM - 1:05 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Music Performance Introduction</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="1:10 PM - 1:25 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Music Performance By KKWIEER Students</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="1:25 PM - 1:35 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">RJ Slot By RJ Rudra - Fun audience interaction</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="1:35 PM - 1:40 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Col. Shivender Kanwar Introduction</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="1:40 PM - 2:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Col. Shivender Kanwar Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2:00 PM - 2:05 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2:05 PM - 2:10 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Sponsorship Segment by Anchor Mr. Rohan Mehta</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2:10 PM - 2:15 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Mr.Iqlipse Nova</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2:15 PM - 2:35 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Mr.Iqlipse Nova Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2:35 PM - 2:55 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Mr.Iqlipse Nova Performance</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2:55 PM - 3:00 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
            <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              By Shri Ajinkya Wagh Sir
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="3:00 PM - 3:05 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Introduction to Hon. Shri. Sandeep Ji Karnik Sir</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="3:05 PM - 3:25 PM"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Hon. Shri. Sandeep Ji Karnik Sir Talk</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE2A06", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="3:25 PM - 3:30 PM"
          iconStyle={{ background: "#FE2A06", color: "#fff" }}
          icon={<BsFillAlarmFill />}
        >
          <h3 className="vertical-timeline-element-subtitle">Felicitation</h3>
          <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
            By Shri. Sameer Wagh Sir
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE2A06", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="3:30 PM - 3:35 PM"
          iconStyle={{ background: "#FE2A06", color: "#fff" }}
          icon={<BsFillAlarmFill />}
        >
          <h3 className="vertical-timeline-element-subtitle">Vote of Thanks</h3>
          <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
            By Dr. Ravindra Munje Sir
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE2A06", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="3:35 PM - 3:40 PM"
          iconStyle={{ background: "#FE2A06", color: "#fff" }}
          icon={<BsFillAlarmFill />}
        >
          <h3 className="vertical-timeline-element-subtitle">Vote of Thanks</h3>
          <h4 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
            By Organisers 
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE2A06", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="3:40 PM - 3:45 PM"
          iconStyle={{ background: "#FE2A06", color: "#fff" }}
          icon={<BsFillAlarmFill />}
        >
          <h3 className="vertical-timeline-element-subtitle">Video Upload</h3>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE2A06", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="3:45 PM - 3:50 PM"
          iconStyle={{ background: "#FE2A06", color: "#fff" }}
          icon={<BsFillAlarmFill />}
        >
          <h3 className="vertical-timeline-element-subtitle">Anchor Speech (Conclusion)</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE2A06", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="3:50 PM - 4:00 PM"
          iconStyle={{ background: "#FE2A06", color: "#fff" }}
          icon={<BsFillAlarmFill />}
        >
          <h3 className="vertical-timeline-element-subtitle">Team Photo</h3>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
};

export default TimeLine;
