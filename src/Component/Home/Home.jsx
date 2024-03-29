import React from "react";
import {
  Main,
  Wrapper,
  HireBtn,
  Box,
  Container,
  ImgContainer,
  ImgCircle,
} from "./HomeElement";
import shegz from "../../assets/shegz.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import { Fade } from "react-reveal";
const Home = () => {
  return (
    <Box>
      <Main>
        <Wrapper>
          <Fade duration={2500} left>
            <Container>
              <h1>Hello!</h1>
              <p>
                I'm <b style={{ color: "green" }}>Abiodun Segun</b> a Frontend
                Developer, proficient in designing and implementing amazing User
                Interface...
              </p>
              <HireBtn
                href="https://drive.google.com/file/d/1Y_asizo7Q3b6K22mkluTlMqn8kuzBsDU/view?usp=share_link"
                target="_blank"
              >
                Hire Me
              </HireBtn>
            </Container>
          </Fade>
          <Fade duration={2500} right>
            <ImgContainer>
              <ImgCircle />
              <img src={html} className="html" alt="HTML" />
              <img src={css} className="css" alt="CSS" />
              <img src={javascript} className="javascript" alt="javascript" />
              <img src={react} className="react" alt="react" />
              <img src={shegz} className="abiodun" alt="Abioduns-Img" />
            </ImgContainer>
          </Fade>
        </Wrapper>
      </Main>
    </Box>
  );
};

export default Home;
