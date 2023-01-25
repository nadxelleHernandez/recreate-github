import React from "react";
import "./StatsBar.css";

const StatsBar = () => {
  return (
    <section>
      <ul className="stats-bar">
        <li>
          65+ million
          <div>Developers</div>
        </li>
        <li>
          3+ million
          <div>Organizations</div>
        </li>
        <li>
          200+ million
          <div>Repositories</div>
        </li>
        <li>
          72%
          <div>Fortune 20</div>
        </li>
      </ul>
    </section>
  );
};

export default StatsBar;
