import React from "react";
import { emojify } from "react-emojione";
import {
  Container,
  Box,
  MobileContent,
  TextBox,
  Wrapper,
  BoxWrapper,
  ContainerTextOne,
  ContainerTextTwo,
} from "./AboutElement";
import { FaTv } from "react-icons/fa";
import { Fade } from "react-reveal";
const Details = () => {
  return (
    <BoxWrapper>
      <Wrapper id="about">
        <Box>
          <h1>About Me</h1>
        </Box>

        <Container>
          <ContainerTextOne>
            <h2> Hi there {emojify(":wink: ")} </h2>
            <p>
              {/* I'm <b>Abiodun Segun</b> a <span>Front-end Developer</span>.<br /> */}
              As a <span>Front-end Developer</span> <FaTv className="tv-icon" />
              <br /> I craft Ideas, design and develop experiences that make
              people's lives easy.
            </p>
            <MobileContent>
              My development skills are majorly around{" "}
              <b style={{ color: "green" }}>HTML</b>,{" "}
              <b style={{ color: "green" }}>CSS</b> ,{" "}
              <b style={{ color: "green" }}>Javascript</b>,
              <b style={{ color: "green" }}> React.js</b> and other modern
              frameworks.
            </MobileContent>
          </ContainerTextOne>
          <ContainerTextTwo>
            <Fade duration={2500} bottom delay={400}>
              <TextBox>
                <b>
                  May 2021 – Dec 2021 <br />
                  <span>The Bulb Africa, Jibowu Lagos</span>
                </b>
                <br />
                <p>
                  <b>Software Developer Fellow:</b> Writing and maintaining
                  code, Analyse the structure and design of web pages.
                </p>
              </TextBox>
            </Fade>
            <Fade duration={2500} bottom delay={600}>
              <TextBox>
                <b>
                  March 2022 - May 2022 <br />
                  <span>Identity Pass</span>
                </b>
                <br />
                <p>
                  <b>Front-End Developer (Internship)</b>
                  <br />
                  Intergrating codebase and networking with senior developer,
                  learning about new technologies.
                </p>
              </TextBox>
            </Fade>
            <Fade duration={2000} bottom delay={200}>
              <TextBox>
                <b>
                  June 2022 - Present <br />
                  <span>PhaseCurve Technology</span>
                </b>
                <br />
                <p>
                  <b>Front-End Developer:</b> Building and maintaining of
                  website {""}
                  <a
                    href="https://test-phasecurve-web.azurewebsites.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.phasecurve.com
                  </a>{" "}
                  with React/Chakra UI, collaborating using Git and Trello to
                  achieve specific task given
                </p>
              </TextBox>
            </Fade>
          </ContainerTextTwo>
        </Container>
      </Wrapper>
    </BoxWrapper>
  );
};

export default Details;
