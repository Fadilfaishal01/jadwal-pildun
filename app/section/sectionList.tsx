import React from "react";

const getMatches = async () => {
  const res = await fetch("https://worldcupjson.net/matches");
  return res.json();
};

export default async function SectionList() {
  const getData = await getMatches();
  return <div>{JSON.stringify(getData)}</div>;
}
