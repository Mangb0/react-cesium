import { Clock, Viewer, Globe } from "resium";
import { JulianDate, ClockRange, ClockStep } from "cesium";

const ClockPreview = () => {
  return (
    <Viewer className="viewer-container">
      <Globe enableLighting />
      <Clock
        startTime={JulianDate.fromIso8601("2021-08-01")}
        currentTime={JulianDate.fromIso8601("2021-08-01")}
        stopTime={JulianDate.fromIso8601("2021-08-02")}
        clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
        clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER}
        multiplier={4000} // how much time to advance each tick
        shouldAnimate // Animation on by default
      />
    </Viewer>
  );
};

export default ClockPreview;
