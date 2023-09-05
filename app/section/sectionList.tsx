import { groupBy } from "lodash";
import moment from "moment";
import React from "react";
import SectionRow from "./sectionRow";

const getMatches = async () => {
  const res = await fetch("https://worldcupjson.net/matches");
  return res.json();
};

export default async function SectionList() {
  const matches: Match[] = await getMatches();
  const getMatchDate = (item: Match) =>
    // Mengconvert Data Datetime seperti Carbon di laravel
    moment(item.datetime).format("YYYY-MM-DD");
  // Menggroup hasil data berdasarkan field / value dari hasil fetchibng data
  const matchesByDate = groupBy(matches, getMatchDate);

  return (
    <div>
      {Object.keys(matchesByDate).map((date, index) => (
        <div key={index}>
          <SectionRow matches={matchesByDate[date]} date={date} />
        </div>
      ))}
    </div>
  );
}
