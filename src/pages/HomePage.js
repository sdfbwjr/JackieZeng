import React from "react";

const HomePage = () => (
  <>
    <div className="homepage">
      <div className="profileimg-container">
        {" "}
        <img src={process.env.PUBLIC_URL + "/img/Thomas.png"} />
      </div>

      <div className="homepage-text">
        <div className="title">
          <h1>Thomas Liu</h1>
          <div>
            <a href="https://github.com/ThomasJnLiu" target="_blank">
              <img src={process.env.PUBLIC_URL + "/img/GitHub-icon.png"} />
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-jn-liu/"
              target="_blank"
            >
              <img src={process.env.PUBLIC_URL + "/img/Linkedin-icon.png"} />
            </a>
          </div>
        </div>
        <p>
          As a recent graduate with a Bachelor's degree in Computer Science, I have acquired a solid foundation in software development methodologies, programming languages, and web development frameworks, which perfectly aligns with the technical requirements of the role. My participation in the Front-End Software Engineering Virtual Experience Programme through Skyscanner further honed my skills in front-end development, providing me with practical insights into building scalable and user-friendly applications.
        </p>
        <p>
          With exceptional communication skills honed through customer-facing roles, I effectively convey ideas, collaborate with team members, and engage with clients. I demonstrate resilience and flexibility in dynamic work environments, managing multiple tasks simultaneously and adapting to evolving project requirements. Committed to fostering a collaborative work culture, I thrive in cross-functional teams and value diverse perspectives. My meticulous approach ensures accuracy in deliverables, and I possess a natural aptitude for creative problem-solving, leveraging logical thinking to overcome obstacles. With a proven track record in time management, I deliver results efficiently without compromising quality.
        </p>
      </div>
    </div>
  </>
);

export default HomePage;
