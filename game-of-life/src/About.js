import React from "react";

function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <p>
        A <strong>cellular automaton</strong> consists of a 2D grid of cells, each in a finite number 
        f states such as on and off.  </p>
      <p>
     <strong>Game of Life</strong> is a very famous cellular automaton devised by the British mathematician{" "}
        <a href="https://en.wikipedia.org/wiki/John_Horton_Conway">
          John Horton Conway
        </a>{" "}
        in 1970. It consists of a collection of cells which, based on a few
        mathematical rules, can live, die, or multiply.
      </p>
      <p>
        Each round of the game examines the current state of the cells, and then
        produces an entirely new <i>generation</i> of cells based on that state.
        Depending on the initial conditions, the cells form various patterns
        throughout the course of the game.
      </p>
    </section>
  );
}

export default About;
