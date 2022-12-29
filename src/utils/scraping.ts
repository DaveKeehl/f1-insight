import * as cheerio from "cheerio";

import { removeRef } from "./helpers";
import { Constructor, ITeamCareerInfo } from "./types/constructor";
import { IDriverCareerInfo, IDriverWithTeam } from "./types/driver";

export const getDriverWikiData = async (url: string) => {
  const driverBioHtmlResponse = await fetch(url);
  const driverBioHtml = await driverBioHtmlResponse.text();
  const $ = cheerio.load(driverBioHtml);

  const $table = $(".infobox");
  const $trs = $table.find("tr");

  const entries: [string, string][] = [];
  let isF1 = true;

  $trs.each((_, tr) => {
    const $tr = $(tr);

    const isValid = $tr.find("th").length === 1 && $tr.find("td").length === 1;

    const $th = $tr.find("th");
    const $td = $tr.find("td");
    const headerText = $th.text().trim();
    const dataText = $td.text().trim();

    if ($th.hasClass("infobox-header")) {
      isF1 = headerText === "Formula One World Championship career";
    }

    if (isF1 && isValid) {
      entries.push([headerText, dataText]);
    }
  });

  return Object.fromEntries(entries);
};

export const getTeamWikiData = async (url: string) => {
  const teamBioHtmlResponse = await fetch(url);
  const teamBioHtml = await teamBioHtmlResponse.text();
  const $ = cheerio.load(teamBioHtml);

  const $table = $(".infobox:first-of-type");
  const $trs = $table.find("tr");

  const entries = $trs
    .filter((_, tr) => {
      const $tr = $(tr);
      return $tr.find("th").length === 1 && $tr.find("td").length === 1;
    })
    .map((_, tr) => {
      const $tr = $(tr);
      const $th = $tr.find("th");
      const $td = $tr.find("td");
      const headerText = $th.text().trim();
      const dataText = $td.text().trim();
      return [[headerText, dataText] as const];
    })
    .toArray();

  return Object.fromEntries(entries);
};

export const collectDriverCareerInfoData = (
  driverData: IDriverWithTeam,
  driverWikiData: Record<string, string>
): IDriverCareerInfo => {
  return {
    nationality: driverData.nationality,
    dateOfBirth: new Date(driverData.dateOfBirth).toLocaleDateString("en-GB"),
    placeOfBirth: removeRef(driverWikiData["Born"]?.split(")").at(-1)),
    grandsPrix: +(driverWikiData["Entries"]?.split(" ")[0] || 0),
    points: +(driverWikiData["Career points"] || 0),
    podiums: +(driverWikiData["Podiums"] || 0),
    polePositions: +(driverWikiData["Pole positions"] || 0),
    wins: +(driverWikiData["Wins"] || 0),
    fastestLaps: +(driverWikiData["Fastest laps"] || 0),
    worldChampionships: +(driverWikiData["Championships"]?.split(" ")[0] || 0)
  };
};

export const collectTeamCareerInfoData = (
  teamData: Constructor,
  teamWikiData: Record<string, string>
): ITeamCareerInfo => {
  return {
    fullName: removeRef(teamWikiData["Full name"]),
    nationality: teamData.nationality,
    base:
      removeRef(teamWikiData["Base"])
        ?.split("\n")[0]
        ?.replace(/\(/g, " (")
        ?.replace(/\)/g, "), ") || "",
    teamPrincipal:
      removeRef(
        teamWikiData["Team principal(s)"]
          ?.replace(/\(/g, " (")
          ?.replace(/\)/g, ")\n")
          ?.trim()
          ?.split("\n")
          ?.filter((entry) => {
            const role = entry.slice(0, -1).split(" (")[1];
            if (
              role === undefined ||
              role === "Team Principal" ||
              role === "Team Principal & CEO"
            )
              return true;
          })
          ?.join("")
          ?.replace(/\(Team Principal( & CEO)?\)/, "")
      ).trim() || "[WIP]",
    technicalDirector:
      removeRef(
        teamWikiData["Technical director"] ||
          teamWikiData["Technical Directors"]
      )
        .replace(/\)/g, "),")
        .split(",")
        .map((e) => e.trim())
        .join(", ") || "",
    chassis: removeRef(teamWikiData["Chassis"]),
    engine: removeRef(teamWikiData["Engine"]),
    tyres: teamWikiData["Tyres"] || "",
    firstEntry: teamWikiData["First entry"] || "",
    lastEntry: teamWikiData["Last entry"] || "",
    racesEntered: +(
      removeRef(teamWikiData["Races entered"]).split(" ")[0] || 0
    ),
    constructorsChampionships: +(
      teamWikiData["Constructors'Championships"]?.split(" ")[0] || 0
    ),
    driversChampionships: +(
      teamWikiData["Drivers'Championships"]?.split(" ")[0] || 0
    ),
    raceVictories: +(removeRef(teamWikiData["Race victories"]) || 0),
    podiums: +(removeRef(teamWikiData["Podiums"]) || 0),
    points: +(removeRef(teamWikiData["Points"]).split(" ")[0] || 0),
    polePositions: +(teamWikiData["Pole positions"] || 0),
    fastestLaps: +(removeRef(teamWikiData["Fastest laps"]) || 0)
  };
};
