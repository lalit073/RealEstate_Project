import React from "react";
import "./AboutUs.css"; // Import the CSS file

// Dummy team member data
const teamMembers = [
  {
    name: "Lalit Thakre",
    role: "Admin",
    // photo: "", // Replace with actual photo path
  },
  {
    name: "Kunal Shirpure",
    role: "Admin",
    // photo: "", // Replace with actual photo path
  },
  {
    name: "Kunal Digdeotulwar",
    role: "Admin",
    // photo: "", // Replace with actual photo path
  },
  {
    name: "Renu Mote",
    role: "Admin",
    // photo: "", // Replace with actual photo path
  },
];

function AboutUs() {
  return (
    <div>
      <div className="about-section">
        <h1>About Real Estate Management</h1>
        <p>
          Welcome to our Real Estate Management page. We specialize in offering
          comprehensive solutions for all your real estate needs.
        </p>
        <p>
          Whether you're a property owner looking to maximize your investment or
          a tenant in search of the perfect place to call home, we've got you
          covered.
        </p>
        <p>
          Our services encompass property buying, selling, renting, and
          management, ensuring a seamless experience for our clients.
        </p>
        <p>
          With years of experience in the real estate industry, we understand
          the market trends and dynamics, enabling us to provide expert advice
          and personalized solutions.
        </p>
        <p>
          Explore our website to learn more about how we can assist you with
          your real estate goals.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            {/* <img src={member.photo} alt={`${member.name}`} /> */}
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
