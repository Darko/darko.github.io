import React from 'react';
import styled from 'styled-components';
import Name from '../home-screen/components/Name/Name';
import { Copy } from '../components/Text/Text';
import LocationSVG from '../components/Icons/location';
import EducationSVG from '../components/Icons/Education';

const Root = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 32px 8px;
`;

const Position = styled.h3`
  color: ${props => props.theme.colors.title};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const Role = styled.div`
  padding: 32px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
`;

const RoleTitle = styled.h3`
  border-bottom: 3px ${props => props.theme.colors.primary(1)} solid;
  font-family: ${props => props.theme.typography.copy.fontFamily};
  font-size: 1.5rem;
  font-weight: 300;
  grid-column: 1 / -1;
`;

const StyledCopy = styled(Copy)`
  grid-column: 1 / -1;
`;

const RoleTime = styled.p`
  font-size: 1rem;
  opacity: 0.7;
`;

const Location = styled(RoleTime)`
  text-align: right;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`;

const LocationIcon = styled(LocationSVG)`
  opacity: 0.5;
  display: inline-block
  width: 21px;
  margin-right: 8px;
  margin-top: -2px;
`;

const EducationIcon = styled(EducationSVG)`
  opacity: 0.5;
  display: inline-block
  width: 21px;
  margin-right: 8px;
  margin-top: -2px;
`;

const Resume = () => {
  const age = (new Date().getFullYear()) - 1996;
  return <Root>
    <Name>Darko Efremov</Name>
    <Position>Software engineer, {age}</Position>
    <Role>
      <RoleTitle>StreamElements</RoleTitle>
      <RoleTime>Front-end Engineer, Jan 2016 - Present</RoleTime>
      <Location><LocationIcon/> Tel Aviv, Israel</Location>
      <StyledCopy>
        StreamElements provides tools for live content creators on Twitch and YouTube, helping them achieve fame and fortune in the content creation world.
      </StyledCopy>
      <StyledCopy>
        As the first front-end developer in the company, a huge portion of my time at StreamElements involves developing various (and most) user-facing interfaces and systems. At StreamElements, I worked with technologies such as AngularJS, React, NodeJS, MongoDB, CSS Preprocessors, real-time data transmission with Web Sockets.
      </StyledCopy>
    </Role>
    <Role>
      <RoleTitle>Freelance</RoleTitle>
      <RoleTime>Front-end Developer, Sep 2015 - Jan 2016</RoleTime>
      <StyledCopy>
        During the time between my position at BSS and StreamElements, I spent a few months contracting with multiple companies such as MyHeritage, Donde (dondesearch.com), etc...
      </StyledCopy>
    </Role>
    <Role>
      <RoleTitle>Babylon Software Solutions</RoleTitle>
      <RoleTime>Front-end Developer, Jun 2015 - Sep 2015</RoleTime>
      <Location><LocationIcon/> Shtip, Macedonia</Location>
      <StyledCopy>
        BSS is a company working in the event management industry.
      </StyledCopy>
      <StyledCopy>
        I joined BSS as a Computer Science student in my 2nd year. I joined the team to help them build a sleek product that provides exceptional user experience and gets the job done! My day-to-day activities involved building the web and mobile front-end.
      </StyledCopy>
    </Role>

    {/* <Role>
      <RoleTitle>Education</RoleTitle>
      <RoleTime>Computer Science</RoleTime>
      <Location><EducationIcon/>Goce Delchev University</Location>
      <StyledCopy>
        I studied Computer Science for 3 years, after which I decided to drop out so that I can focus on my career ahead. At this point I had already been working as a Freelancer for several years.
      </StyledCopy>
      <StyledCopy>
        This is a little bit like a cover letter here. I stand behind my opinion that formal education is not the only way to thrive in the Software Engineering industry. I believe my experience is a pretty good indicator for that.
      </StyledCopy>
    </Role> */}
  </Root>
}

export default Resume;