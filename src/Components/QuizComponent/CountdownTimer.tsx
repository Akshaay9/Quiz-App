import { CountdownCircleTimer } from "react-countdown-circle-timer";

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying={true}
    onComplete={() => {
      return [true, 1200]; // repeat animation in 1.5 seconds
    }}
    duration={10}
    size={100}
    strokeWidth={7}
    colors={[
      ["#212949", 0.5],
      ["#212949", 0.5],
      ["#ff0000", 0.3],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default UrgeWithPleasureComponent;
