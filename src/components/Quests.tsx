import "../styles/Quests.css";
import QuestItem from "./QuestItem";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import _quests from "../data/quests.json";
import { IQuest } from "../interfaces/IQuest.js";
import { useEffect, useState } from "react";
import QuestItemDetailed from "./QuestItemDetailed";
import { useSearchParams } from "react-router-dom";

const Quests = () => {
  const quests = _quests as IQuest[];
  const [expandedQuest, setExpandedQuest] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1120);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log();

  const updateDesktopState = () => {
    setIsDesktop(window.innerWidth >= 1120);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDesktopState);
    return () => window.removeEventListener("resize", updateDesktopState);
  });

  const breakpointValues = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1120,
    xl: 1536,
  };
  const theme = createTheme({ breakpoints: { values: breakpointValues } });

  const getQuests = () => {
    return quests.map((quest: IQuest, index: number) => {
      return (
        <QuestItem
          onClick={() => {
            setExpandedQuest(index);
            if (!isDesktop) {
              setSearchParams(`quest=${index}`);
            }
          }}
          key={index}
          questObject={quest}
          last={index == quests.length - 1}
          few={quests.length <= 6}
        />
      );
    });
  };

  const getDesktopVersion = () => {
    return (
      <Grid container spacing={0}>
        <Grid item md={12} lg={4}>
          <div className="quest-stack">{getQuests()}</div>
        </Grid>
        <Grid item md={8} className="quest-detailed">
          <QuestItemDetailed
            isDesktop={isDesktop}
            questObject={quests[expandedQuest]}
          />
        </Grid>
      </Grid>
    );
  };

  const getMobileVersion = () => {
    // {searchParams.get("quest")}
    return (
      <Grid container spacing={0}>
        {searchParams.get("quest") ? (
          <Grid item md={12} className="quest-detailed">
            <QuestItemDetailed
              isDesktop={isDesktop}
              questObject={quests[expandedQuest]}
            />
          </Grid>
        ) : (
          <Grid item md={12} lg={4}>
            <div className="quest-stack">{getQuests()}</div>
          </Grid>
        )}
      </Grid>
    );
  };

  return (
    <div className="quests">
      <p className="normal-page-header">Completed Quests</p>
      <div className="quest-grid-outer-container">
        <div className="quest-grid-inner-container">
          <ThemeProvider theme={theme}>
            {isDesktop ? getDesktopVersion() : getMobileVersion()}
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Quests;
