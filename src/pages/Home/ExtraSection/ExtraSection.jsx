import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const services = [
  {
    name: "Fitness",
    description:
      "We offer a variety of fitness classes and equipment to help you stay in shape and healthy.",
    icon: "🏋️‍♂️",
  },
  {
    name: "Swimming",
    description:
      "We have a large indoor pool where you can swim, relax, or join our aqua aerobics sessions.",
    icon: "🏊‍♀️",
  },
  {
    name: "Tennis",
    description:
      "We have four outdoor tennis courts where you can play with your friends or join our coaching programs.",
    icon: "🎾",
  },
];

const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="card w-6/12 mx-auto mb-5 text-center" onClick={() => setIsFlipped(!isFlipped)}>
      <animated.div
        className="card-front"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          backgroundImage: `linear-gradient(to bottom right, #${service.name
            .charCodeAt(0)
            .toString(16)}${service.name
            .charCodeAt(1)
            .toString(16)}, #${service.name
            .charCodeAt(2)
            .toString(16)}${service.name.charCodeAt(3).toString(16)})`,
        }}
      >
        <h3 className="text-3xl font-semibold">{service.name}</h3>
        <span>{service.icon}</span>
      </animated.div>
      <animated.div
        className="card-back"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateX(180deg)`),
          backgroundImage: `linear-gradient(to bottom right, #${service.name
            .charCodeAt(0)
            .toString(16)}${service.name
            .charCodeAt(1)
            .toString(16)}, #${service.name
            .charCodeAt(2)
            .toString(16)}${service.name.charCodeAt(3).toString(16)})`,
        }}
      >
        <p className="text-white text-3xl">{service.description}</p>
      </animated.div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="container">
      <h1 className="text-4xl text-center pb-2 my-text font-semibold my-12">
        Current best Services
      </h1>
      <div className="cards">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
