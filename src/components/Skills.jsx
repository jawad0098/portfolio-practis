import React from 'react'
import skills from './data/skills.json'
const Skills = () => {
    return (
        <>
            <div className="container skills pt-5">
                <h1 data-aos="zoom-in-down"
                    data-aos-duration="1000"
                >SKILLS</h1>
                <div className="items">
                    {skills.map((data) => (
                        <>
                            <div  className="item" data-aos="zoom-in-down"
                    data-aos-duration="2000" key={data.id} >
                                <img src={`./assets/${data.imageSrc}`} alt="" />
                                <h3>{data.title}</h3>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills
