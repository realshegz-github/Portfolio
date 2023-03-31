import React from "react";
import { emojify } from "react-emojione";
import {
  Box,
  Container,
  ContentBox,
  ContentWrapper,
  Wrapper,
} from "./ServicesElement";
import { FaGem, FaCode, FaTv } from "react-icons/fa";
import { Fade } from "react-reveal";

const Services = () => {
  return (
    <>
      <Wrapper id="services">
        <Container>
          <ContentWrapper>
            <Fade duration={2000} bottom delay={200}>
              <ContentBox>
                <div className="logo-icon">
                  <FaGem />
                </div>
                <div>
                  <h3>DESIGN</h3>
                  <p>
                    Successful online Projects start with good design. it
                    establishes a solid foundation for future development and
                    long term growth
                  </p>
                </div>
              </ContentBox>
            </Fade>
            <Fade duration={2500} bottom delay={400}>
              <ContentBox>
                <div className="logo-icon">
                  <FaCode />
                </div>
                <div>
                  <h3>DEVELOPMENT</h3>
                  <p>
                    I make my code as clean as possible, well strutured for
                    reliablity and reusability in the codebase
                  </p>
                </div>
              </ContentBox>
            </Fade>
            <Fade duration={2500} bottom delay={600}>
              <ContentBox>
                <div className="logo-icon">
                  <FaTv />
                </div>
                <div>
                  <h3> BASIC SEO</h3>
                  <p>
                    I also setup project to use basic SEO principles which
                    pushes your websites to the first page on search engines, so
                    save your ads money{emojify(":smile: ")}
                  </p>
                </div>
              </ContentBox>
            </Fade>
          </ContentWrapper>
          <Box>
            <h1>Offered Services</h1>
            <p>
              Having a website is the fastest way to achieve global outreach. I
              work to grow startups and companies with my following services
            </p>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
};

export default Services;
