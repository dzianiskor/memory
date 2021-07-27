export enum DifficultTypes {
  EASY = "Easy",
  NORMAL = "Normal",
  HARD = "Hard",
}

export interface IDifficult {
  id: number | string;
  value: string;
  countCards: number;
}

export function getDifficultList(): IDifficult[] {
  return [
    { id: 1, value: DifficultTypes.EASY, countCards: 6 },
    { id: 2, value: DifficultTypes.NORMAL, countCards: 14 },
    { id: 3, value: DifficultTypes.HARD, countCards: 20 },
  ];
}

export function getStartDifficult(): IDifficult {
  return (
    getDifficultList().find(
      (difficult) => difficult.value === DifficultTypes.HARD
    ) ?? getDifficultList()[0]
  );
}
