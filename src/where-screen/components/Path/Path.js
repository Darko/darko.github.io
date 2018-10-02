import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-image: url('./assets/darkool.png');
  background-size: contain;
  position: absolute;
`;

const SvgWrapper = styled.div`
  svg {
    min-width: 665px;
    min-height: 505px
  }
  .st0 {
    fill: none;
    stroke: ${props => props.theme.colors.primary(1)};
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
`;

export default class Path extends React.Component {
  counter = 0;
  direction = true;

  moveStar = () => {
    if (!this.avatar || !this.svg) {
      window.requestAnimationFrame(this.moveStar);
      return;
    }

    this.curveLength = this.curveLength || this.svg.getTotalLength();

    if (parseInt(this.counter, 10) === 1) {
      this.direction = false;
    } else if (parseInt(this.counter ,10) < 0) {
      this.direction = true;
    }

    /*	Based on the direction variable either increase or decrease the counter */
    if (this.direction) {
      this.counter += 0.003;
    } else {
      this.counter -= 0.003;
    }

    /*	Now the magic part. We are able to call .getPointAtLength on the tow paths to return 
      the coordinates at any point along their lengths. We then simply set the stars to be positioned 
      at these coordinates, incrementing along the lengths of the paths */
    this.avatar.setAttribute("transform","translate("+ (this.svg.getPointAtLength(this.counter * this.curveLength).x -15)  + "," + (this.svg.getPointAtLength(this.counter * this.curveLength).y -15) + ")");

    /*	Use requestAnimationFrame to recursively call moveStar() 60 times a second
      to create the illusion of movement */
    requestAnimationFrame(this.moveStar);
  }

  componentDidMount() {
    this.moveStar();
  }

  render() {
    console.log(this.svg, this.avatar);
    return (
      <Wrapper>
        <Avatar innerRef={img => this.avatar = img}/>
        <Draggable
          defaultPosition={{ x: -200, y: -200 }}
          bounds={{ top: -200, left: 0, bottom: 200, right: 200 }}>
          <SvgWrapper>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 665 505" style={{ enableBackground: 'new 0 0 665 505' }} xmlSpace="preserve">
            <polyline className="st0" points="654.1,492.8 640.3,486.9 630.8,478.8 628.4,463.4 617.9,458.6 611,448.2 609.1,420.4 635.8,393.3 
                635.3,381.4 641.2,369.5 632.9,361.2 630.3,349.1 612.9,324.8 610.3,317.5 612,310.6 609.1,300.8 597.7,286.6 589.7,282.1 
                584.4,268.5 577.8,266.4 576.8,255.9 574.2,253.6 572.3,247.1 564.7,244.1 549.3,223.6 549.3,214.1 541.9,189.2 535.2,175.4 
                509.3,177.8 506.7,168.5 500.1,160.9 497.5,155.2 486.1,149.5 476.3,149.5 429,131.9 407.7,127.4 361.1,127.4 348.7,121 334,121 
                294.8,113.1 272.9,117.2 249.2,108.6 229.4,108.6 220.2,102.2 206.4,96.5 197.1,84.4 180.5,73 170,57.1 161,55.2 156.5,48.3 143,43 
                136.5,48.7 124.7,48 97.8,30.2 87.8,29 78.6,30.9 66.9,38.5 56.2,29 46.7,26.2 36,25.2 28.7,20 23.2,20.9 13,11.4 "/>
            </svg>
          </SvgWrapper>
        </Draggable>
      </Wrapper>
    );
  }
}