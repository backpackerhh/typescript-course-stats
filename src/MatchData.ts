export type RawMatchData = {
  date: string;
  homeTeam: string;
  awayTeam: string;
  goalsHomeTeam: string;
  goalsAwayTeam: string;
  result: string;
  referee: string;
};

export type MatchData =
  | RawMatchData
  | {
      date: Date;
      goalsHomeTeam: number;
      goalsAwayTeam: number;
    };
