import React from "react";
import { animated, to } from "@react-spring/web";
import Carousel from "nuka-carousel";

class SwipeCard extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics } = objs[i];

    return (
      <animated.div
        key={i}
        className="absolute justify-center h-screen w-full"
        style={{
          transform: to(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: to([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>
              {pics.map(pic => (
                <img src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default SwipeCard;