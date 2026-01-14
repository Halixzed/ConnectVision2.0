import React from "react";
import Joyride, { type Step } from "react-joyride";

type Props = {
  target: string;
  content: string;
  delayMs?: number;
  repeat?: boolean;
};

export default function GuidedBeacon({
  target,
  content,
  delayMs = 650,
  repeat = true,
}: Props) {
  const [run, setRun] = React.useState(false);
  const restartTimerRef = React.useRef<number | null>(null);
  const steps = React.useMemo<Step[]>(
    () => [
      {
        target,
        content,
        placement: "bottom",
      },
    ],
    [target, content],
  );

  React.useEffect(() => {
    const timer = window.setTimeout(() => setRun(true), delayMs);
    return () => window.clearTimeout(timer);
  }, [delayMs]);

  React.useEffect(
    () => () => {
      if (restartTimerRef.current) {
        window.clearTimeout(restartTimerRef.current);
      }
    },
    [],
  );

  return (
    <Joyride
      steps={steps}
      run={run}
      showSkipButton={false}
      showProgress={false}
      hideCloseButton
      hideBackButton
      disableOverlay
      disableOverlayClose
      disableCloseOnEsc
      continuous={false}
      callback={({ status }) => {
        if (!repeat) return;
        if (status === "finished" || status === "skipped") {
          setRun(false);
          if (restartTimerRef.current) {
            window.clearTimeout(restartTimerRef.current);
          }
          restartTimerRef.current = window.setTimeout(() => {
            setRun(true);
          }, 150);
        }
      }}
      styles={{
        options: {
          zIndex: 2000,
        },
      }}
    />
  );
}
