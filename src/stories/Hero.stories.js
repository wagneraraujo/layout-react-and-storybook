import React from "react";
import Hero from "../components/Hero";
import bgtopo from "../stories/assets/fundotopo.jpg";
import GlobalStyle from "../components/globalStyle";
export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <>
    <GlobalStyle />
    <Hero title="Select Nutri Hair" image={bgtopo}>
      <p>
        É um composto vitamínico e mineral que auxilia na reconstrução capilar,
        pele e de unhas.
      </p>

      <ul>
        <li>
          Auxilia no crescimento do cabelo, deixando mais brilhoso e saudável.
        </li>
        <li>Auxilia na saúde das unhas, mais fortes e bonitas</li>
      </ul>
    </Hero>
  </>
);
