import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

// const homeWin = 'H';
// const awayWin = 'A';
// could be dropped const draw = 'D';

for (let match of reader.data) {
  if (match[1]==='Man United' && match[5]===MatchResult.HomeWin) {
    manUnitedWins++;
  }else if (match[2]==='Man United' && match[5]===MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`man united won ${manUnitedWins} games`);