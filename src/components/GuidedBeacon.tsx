import React from "react";
import Shepherd, { type Tour } from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import "./GuidedBeacon.css";

export type GuidedBeaconHandle = {
  start: () => void;
  cancel: () => void;
};

type Props = {
  target: string;
  content: string;
  delayMs?: number;
  repeat?: boolean;
  autoStart?: boolean;
};

const GuidedBeacon = React.forwardRef<GuidedBeaconHandle, Props>(
  (
    { target, content, delayMs = 650, repeat = false, autoStart = false },
    ref,
  ) => {
    const restartTimerRef = React.useRef<number | null>(null);
    const tourRef = React.useRef<Tour | null>(null);

    React.useEffect(() => {
      const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
          cancelIcon: { enabled: true },
          scrollTo: false,
          classes: "guided-beacon",
        },
      });
      tour.addStep({
        id: "guided-beacon",
        text: content,
        attachTo: { element: target, on: "bottom" },
        buttons: [],
      });
      tourRef.current = tour;

      const handleDocClick = () => {
        tour.complete();
      };

      let startTimer: number | null = null;
      if (autoStart) {
        startTimer = window.setTimeout(() => {
          tour.start();
        }, delayMs);
      }

      const handleStop = () => {
        if (!repeat) return;
        if (restartTimerRef.current) {
          window.clearTimeout(restartTimerRef.current);
        }
        restartTimerRef.current = window.setTimeout(() => {
          tour.start();
        }, 150);
      };

      tour.on("complete", handleStop);
      tour.on("cancel", handleStop);
      tour.on("show", () => {
        document.addEventListener("click", handleDocClick, true);
      });
      tour.on("hide", () => {
        document.removeEventListener("click", handleDocClick, true);
      });

      return () => {
        if (startTimer) window.clearTimeout(startTimer);
        if (restartTimerRef.current) {
          window.clearTimeout(restartTimerRef.current);
        }
        document.removeEventListener("click", handleDocClick, true);
        tour.cancel();
        tour.complete();
        tourRef.current = null;
      };
    }, [autoStart, content, delayMs, repeat, target]);

    React.useImperativeHandle(
      ref,
      () => ({
        start: () => {
          tourRef.current?.start();
        },
        cancel: () => {
          tourRef.current?.cancel();
        },
      }),
      [],
    );

    return null;
  },
);

GuidedBeacon.displayName = "GuidedBeacon";

export default GuidedBeacon;
