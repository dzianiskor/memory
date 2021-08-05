import React, { useEffect, useState } from "react";
import { Container, Pagination, Table } from "react-bootstrap";
import s from "./StatisticTable.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSoundValue } from "../../store/reducers/settings";
import useSound from "use-sound";
import soundMenu from "../../sounds/menu.mp3";

interface IHeadCell {
  id: number;
  name: string;
  label: string;
  sortable: boolean;
}

interface ICellValue {
  id: number | string;
  avatar: string;
  name: string;
  link: string;
  score: number;
}

enum PaginationTypes {
  FIRST = "FIRST",
  PREV = "PREV",
  NEXT = "NEXT",
  LAST = "LAST",
  PAGE = "PAGE",
}

const HeadCells: IHeadCell[] = [
  { id: 1, name: "number", label: "#", sortable: false },
  { id: 2, name: "name", label: "Name", sortable: true },
  { id: 3, name: "score", label: "Score", sortable: true },
];

const datas: ICellValue[] = [
  {
    id: 1,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "MCark",
    link: "https://github.com/dzianiskor",
    score: 50,
  },
  {
    id: 2,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "CMark",
    link: "https://github.com/dzianiskor",
    score: 100,
  },
  {
    id: 3,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "BMark",
    link: "https://github.com/dzianiskor",
    score: 120,
  },
  {
    id: 4,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "AMark",
    link: "https://github.com/dzianiskor",
    score: 250,
  },
  {
    id: 5,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "GMark",
    link: "https://github.com/dzianiskor",
    score: 20,
  },
  {
    id: 6,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "YMark",
    link: "https://github.com/dzianiskor",
    score: 500,
  },
  {
    id: 7,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "ZMark",
    link: "https://github.com/dzianiskor",
    score: 575,
  },
  {
    id: 8,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "KMark",
    link: "https://github.com/dzianiskor",
    score: 1000,
  },
  {
    id: 9,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "Mark",
    link: "https://github.com/dzianiskor",
    score: 550,
  },
  {
    id: 10,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "Mark",
    link: "https://github.com/dzianiskor",
    score: 350,
  },
  {
    id: 11,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "Mark",
    link: "https://github.com/dzianiskor",
    score: 550,
  },
  {
    id: 12,
    avatar: "https://avatars.githubusercontent.com/u/45198847?v=4",
    name: "Mark",
    link: "https://github.com/dzianiskor",
    score: 570,
  },
];

const StatisticTable = () => {
  const usersOnPage = 10;
  const [sortType, setSortType] = useState<number>(1);
  const [activePage, setActivePage] = useState<number>(1);
  const countPages = Math.ceil(datas.length / usersOnPage);

  const soundValue = useSelector(getSoundValue);
  const [playSoundMenu, playSoundMenuDriver] = useSound(soundMenu, {
    volume: soundValue,
  });

  useEffect(() => {
    return () => {
      playSoundMenuDriver.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function sortByProperty(arr: object[], name: string) {
    arr.sort((a: object, b: object) =>
      a[name as keyof typeof a] < b[name as keyof typeof b]
        ? sortType
        : -sortType
    );
    setSortType((prev) => -prev);
  }

  const sortHandler = (property: string) => {
    sortByProperty(datas, property);
  };

  const paginationHandler = (type: PaginationTypes, number?: number) => {
    switch (type) {
      case PaginationTypes.FIRST:
        setActivePage(1);
        break;
      case PaginationTypes.PREV:
        setActivePage((prev) => prev - 1);
        break;
      case PaginationTypes.NEXT:
        setActivePage((prev) => prev + 1);
        break;
      case PaginationTypes.LAST:
        setActivePage(countPages);
        break;
      case PaginationTypes.PAGE:
        if (number) {
          setActivePage(number);
        }
        break;
    }
  };

  return (
    <Container className={s.container}>
      <Table striped bordered hover className={s.table}>
        <thead>
          <tr>
            {HeadCells.map((headCell) =>
              headCell.sortable ? (
                <th
                  className={s.sortable}
                  key={headCell.id}
                  onClick={() => sortHandler(headCell.name)}
                >
                  {headCell.label}
                  <img src="/img/down_up.png" alt="down-up" />
                </th>
              ) : (
                <th key={headCell.id}>{headCell.label}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            // Pagination on Front
            if (
              (activePage - 1) * usersOnPage < index + 1 &&
              index + 1 <= activePage * usersOnPage
            ) {
              return (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer"
                      className={s.userName}
                    >
                      <img src={data.avatar} alt="avatar" />
                      {data.name}
                    </a>
                  </td>
                  <td>{data.score}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </Table>
      {countPages && (
        <Pagination className={s.pagination}>
          {activePage > 1 && (
            <>
              <Pagination.First
                onClick={() => paginationHandler(PaginationTypes.FIRST)}
              />
              <Pagination.Prev
                onClick={() => paginationHandler(PaginationTypes.PREV)}
              />
            </>
          )}
          {[...Array(countPages)].map((x, i) =>
            activePage === i + 1 ? (
              <Pagination.Item className={s.active} key={i}>
                {i + 1}
              </Pagination.Item>
            ) : (
              <Pagination.Item
                key={i}
                onClick={() => paginationHandler(PaginationTypes.PAGE, i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            )
          )}
          {activePage < countPages && (
            <>
              <Pagination.Next
                onClick={() => paginationHandler(PaginationTypes.NEXT)}
              />
              <Pagination.Last
                onClick={() => paginationHandler(PaginationTypes.LAST)}
              />
            </>
          )}
        </Pagination>
      )}
      <div className={s.link}>
        <NavLink to="/" onClick={() => playSoundMenu()}>
          Back
        </NavLink>
      </div>
    </Container>
  );
};

export default StatisticTable;
