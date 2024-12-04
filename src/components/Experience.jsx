import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
    return (
        <div className="container ex" id="experience">
            <h1 data-aos="fade-up" data-aos-duration="1000">
                EXPERIENCE
            </h1>
            <div className="experience-row">
                {experience.map((data) => (
                    <div
                        key={data.id}
                        className="ex-item"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        <div className="left">
                            <img src={`/assets/${data.imageSrc}`} alt={data.role} />
                        </div>
                        <div className="right">
                            <h2>{data.role}</h2>
                            <h4>
                                <span style={{ color: "yellowgreen" }}>
                                    {data.startDate} - {data.endDate}
                                </span>{" "}
                                <span style={{ color: "yellow" }}>{data.location}</span>
                            </h4>
                            {data.experiences.map((exp, index) => (
                                <h5 key={index} style={{ color: "yellow" }}>
                                    {exp}
                                </h5>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
