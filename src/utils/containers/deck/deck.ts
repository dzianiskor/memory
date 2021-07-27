import { getStartDifficult, IDifficult } from "../difficult/difficult";

export function getAllDeck() {
  return [
    { id: 1, cardId: 1, status: "", path: "/img/heroes/1.png" },
    { id: 2, cardId: 1, status: "", path: "/img/heroes/1.png" },
    { id: 3, cardId: 2, status: "", path: "/img/heroes/2.png" },
    { id: 4, cardId: 2, status: "", path: "/img/heroes/2.png" },
    { id: 5, cardId: 3, status: "", path: "/img/heroes/3.png" },
    { id: 6, cardId: 3, status: "", path: "/img/heroes/3.png" },
    { id: 7, cardId: 4, status: "", path: "/img/heroes/4.png" },
    { id: 8, cardId: 4, status: "", path: "/img/heroes/4.png" },
    { id: 9, cardId: 5, status: "", path: "/img/heroes/5.png" },
    { id: 10, cardId: 5, status: "", path: "/img/heroes/5.png" },
    { id: 11, cardId: 6, status: "", path: "/img/heroes/6.png" },
    { id: 12, cardId: 6, status: "", path: "/img/heroes/6.png" },
    { id: 13, cardId: 7, status: "", path: "/img/heroes/7.png" },
    { id: 14, cardId: 7, status: "", path: "/img/heroes/7.png" },
    { id: 15, cardId: 8, status: "", path: "/img/heroes/8.png" },
    { id: 16, cardId: 8, status: "", path: "/img/heroes/8.png" },
    { id: 17, cardId: 9, status: "", path: "/img/heroes/9.png" },
    { id: 18, cardId: 9, status: "", path: "/img/heroes/9.png" },
    { id: 19, cardId: 10, status: "", path: "/img/heroes/10.png" },
    { id: 20, cardId: 10, status: "", path: "/img/heroes/10.png" },
  ];
}

export function getStartDeck(difficult: IDifficult = getStartDifficult()) {
  // Check if we have Local storage Deck or difficult
  const result = getAllDeck().splice(0, difficult.countCards);
  shuffle(result);

  return result;
}

function shuffle(array: any) {
  array.sort(() => Math.random() - 0.5);
}
