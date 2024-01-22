export type RawMatchData = {
  date: string;
  homeTeam: string;
  awayTeam: string;
  goalsHomeTeam: string;
  goalsAwayTeam: string;
  result: string;
  referee: string;
};

export type MatchData = {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  goalsHomeTeam: number;
  goalsAwayTeam: number;
  result: string;
  referee: string;
};
