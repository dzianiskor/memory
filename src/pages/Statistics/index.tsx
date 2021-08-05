import React from "react";
import StatisticTable from "../../components/StatisticTable/StatisticTable";
import s from "./Statistics.module.scss";

const StatisticsPage: React.FC = () => {
  return (
    <div
      className={s.wrapper}
      style={{ backgroundImage: `url("/img/backgrounds/2.jpg")` }}
    >
      <StatisticTable />
    </div>
  );
};

export default StatisticsPage;
