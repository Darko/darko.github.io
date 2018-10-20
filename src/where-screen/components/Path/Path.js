import React from 'react';
import Draggable from 'react-draggable';
import { Jagodina, Ljubljana, Shtip } from 'where-screen/components/Locations/Jagodina';
import { Wrapper, Anchor, SvgWrapper } from './styles';

const speed = 0.3;

export default class Path extends React.Component {
  counter = 0;
  state = {
    x: 624,
    y: 462,
    position: { x: 0, y: 0 },
    direction: true,
    fadeIn: true,
    showBreak: true,
    showDestination: true,
  }

  go = () => {
    if (this.stop) {
      return;
    }

    if (!this.avatar || !this.svg) {
      window.requestAnimationFrame(this.go);
      return;
    }

    this.curveLength = this.curveLength || this.svg.children[0].getTotalLength();

    /*	Based on the direction variable either increase or decrease the counter */
    if (this.state.direction) {
      this.counter += speed;
    } else {
      this.counter -= speed;
    }

    const point = this.svg.children[0].getPointAtLength(this.counter);
    const X = (point.x - 30).toFixed(2);
    const Y = (point.y - 30).toFixed(2);
    
    this.setState({
      x: X,
      y: Y,
    }, () => {
      if (this.state.userDragged) {
        return;
      }

      if (window.innerWidth > this.svg.parentNode.offsetWidth) {
        this.calcInitialPosition(0, 0);
        return;
      }

      this.calcInitialPosition();
    });

    if (X < -15 && Y < -15 ) {
      return;
    }

    requestAnimationFrame(this.go);
  }

  onDrag = (e, dragData) => {
    this.setState({
      userDragged: true,
      position: {
        x: dragData.x,
        y: dragData.y,
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      const val = window.innerWidth > this.svg.parentNode.offsetWidth ? 0 : undefined;
      this.calcInitialPosition(val, val);
      this.curveLength = this.curveLength || this.svg.children[0].getTotalLength();
      
      const { completed = 0 } = this.props;
      const percent = completed === 100 ? this.curveLength : ((100 - completed) / 100) * this.curveLength;

      const length = this.curveLength - percent;
      const point = this.svg.children[0].getPointAtLength(length);
      const X = (point.x - 30).toFixed(2);
      const Y = (point.y - 30).toFixed(2);

      this.setState({
        x: X,
        y: Y,
      });
    }, 100);
  }

  calcInitialPosition(setX, setY) {
    if (setX !== undefined && setY !== undefined) {
      this.setState({
        fadeIn: true,
        position: {
          x: setX,
          y: setY
        }
      });
      return;
    }

    const { x, y } = this.anchor.getBoundingClientRect();
    const { position } = this.state;
    const posX = position.x + (window.innerWidth / 2) - x;
    const posY = position.y + (window.innerHeight / 2) - y;

    this.setState({
      position: { x: posX, y: posY },
      fadeIn: true,
    });
  }

  toggleShow = (prop, val) => e => {
    console.log('xd');
    this.setState({
      [prop]: val
    });
  }

  render() {
    const { x, y, position, fadeIn, showBreak, showDestination } = this.state;
    const translate = `translate(${x}, ${y})`;

    return (
      <Wrapper fadeIn={fadeIn}>
        <Draggable
          position={position}
          onDrag={this.onDrag}
        >
          <SvgWrapper>
            <Ljubljana show={showDestination}>
              Ljubljana
              <span>Destination</span>
            </Ljubljana>
            <Jagodina show={showBreak}>
              Jagodina
              <span>Break point</span>
            </Jagodina>
            <Shtip show={showBreak}>
              Shtip
              <span>Start</span>
            </Shtip>
            <svg ref={svg => this.svg = svg} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 665 505" style={{ enableBackground: 'new 0 0 665 505' }} xmlSpace="preserve">
              <polyline className="st0" points="652.6,493.3 638.9,487.4 629.4,479.3 627,463.9 616.5,459.1 609.6,448.7 607.7,420.9 634.3,393.8 
                633.9,381.9 639.8,370 631.5,361.7 628.9,349.6 611.5,325.3 608.9,318 610.6,311.1 607.7,301.3 596.3,287.1 588.2,282.6 583,269 
                576.4,266.9 575.4,256.4 572.8,254 570.9,247.6 563.3,244.5 547.9,224.1 547.9,214.6 540.5,189.7 533.8,175.9 507.9,178.3 
                505.3,169 498.7,161.4 496.1,155.7 484.7,150 474.9,150 427.6,132.4 406.2,127.9 359.7,127.9 347.3,121.5 332.6,121.5 293.4,113.6 
                271.5,117.7 247.8,109.1 228,109.1 218.8,102.7 205,97 195.7,84.9 179.1,73.5 168.6,57.5 159.6,55.6 155.1,48.8 141.5,43.5 
                135.1,49.2 123.2,48.5 96.4,30.7 86.4,29.5 77.2,31.4 65.5,39 54.8,29.5 45.3,26.7 34.6,25.7 27.3,20.5 21.8,21.4 11.6,11.9 "/>
              <circle className="st1" cx="652.6" cy="493.3" r="8.5"/>
              <circle
                onMouseEnter={this.toggleShow('showBreak', true)}
                onMouseLeave={this.toggleShow('showBreak', false)}
                className="st1" cx="563.3" cy="244.5" r="8.5"
              />
              <circle className="st1" cx="11.6" cy="11.9" r="8.5" />
              <image xlinkHref="./assets/darkool.png" transform={translate} ref={img => this.avatar = img} width="60"></image>
            </svg>
            <Anchor innerRef={anchor => this.anchor = anchor} style={{
              transform: `translate(${x}px, ${y}px)`
            }}/>
          </SvgWrapper>
        </Draggable>
      </Wrapper>
    );
  }
}