import React from "react";

export default function Home() {
  return (
    <section className="home" id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        This is the home section where you can find an overview of my work and
        skills.
      </p>
      <a class="common_btn" href="#">
        Download CV
        <i aria-hidden="true" class="fa-solid fa-arrow-down-to-line"></i>
      </a>
    </section>
  );
}
