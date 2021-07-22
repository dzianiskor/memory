export default function getFormatTime(timer: number): string {
  let timerSeconds: number = timer % 60;
  let timerMinutes: number = Math.floor(timer / 60);

  let minutes =
    timerMinutes < 1
      ? "00"
      : timerMinutes < 10
      ? `0${timerMinutes}`
      : timerMinutes;
  let seconds =
    timerSeconds < 1
      ? "00"
      : timerSeconds < 10
      ? `0${timerSeconds}`
      : timerSeconds;

  return `${minutes}:${seconds}`;
}
