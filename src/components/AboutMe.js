import React from "react";

const AboutMe = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center shadow-lg">
          <h2 style={{ fontFamily: "Raleway" }}>MEET YOUR COACH</h2>
          <hr className="my-4" />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <figure class="figure">
            <img
              className="rounded-circle mx-auto d-block figure-img img-fluid"
              alt="Instructor"
              src="DefaultInstructor.jpeg"
            />
            <figcaption class="figure-caption text-center">
              <a href="/" alt="Edit Profile">
                Jane Doe
                <br />
                Program Designer and Head Coach
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          Hi everyone. My name is Jane Doe! I am the Head Coach of the Mighty
          transformation Program. My Passion is to help people change their
          lives in the simplest and the most realistic way possible. I believe
          everyone deserves the right to good health and to be happy with
          themselves.
          <br />
          <br />
          Getting fit and healthy does not need to difficult, but often times it
          is.
          <br />
          <br />
          Why is that ?<br />
          <br />
          With so much conflicting and contradictory information out there it
          can be very frustrating and confusing to know what to do. <br />{" "}
          <br /> Guess what ? You're not alone.
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
