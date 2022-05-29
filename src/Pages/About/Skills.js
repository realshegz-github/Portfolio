import React from 'react'
import { SkillBar, SkillBox, SkillLevel, SkillText, Wrapper } from './SkillsElement'

const Skills = () => {
  return (
  <>
    <Wrapper>
        <h1> Software Skills</h1>
            <SkillBox>
                <SkillText>
                    <p>HTML5</p>
                    <p>90%</p>
                </SkillText>
                
                <SkillBar>
                    <SkillLevel/>
                </SkillBar>
            </SkillBox>
            <SkillBox>
                <SkillText>
                    <p>CSS3</p>
                    <p>80%</p>
                </SkillText>
                
                <SkillBar>
                    <SkillLevel/>
                </SkillBar>
            </SkillBox>
            <SkillBox>
                <SkillText>
                    <p>JavaScript</p>
                    <p>70%</p>
                </SkillText>
                
                <SkillBar>
                    <SkillLevel/>
                </SkillBar>
            </SkillBox>
            <SkillBox>
                <SkillText>
                    <p>React.js</p>
                    <p>60%</p>
                </SkillText>
                
                <SkillBar>
                    <SkillLevel/>
                </SkillBar>
            </SkillBox>
        
    </Wrapper>
    </>
  )
}

export default Skills