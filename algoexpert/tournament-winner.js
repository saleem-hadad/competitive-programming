function tournamentWinner(competitions, results) {
    let teamsScores = {};
    let maxScore = 0;
    let winnerTeam = null;
    for(let index = 0; index < competitions.length; index++) {
        let winnerIndex = 1 - results[index];
        let winnerName = competitions[index][winnerIndex];
        let teamScore = winnerName in teamsScores ? teamsScores[winnerName] + 3 : 3;
        teamsScores[winnerName] = teamScore;
        if(teamScore > maxScore) {
          maxScore = teamScore;
          winnerTeam = winnerName;
        }
    }
    
    return winnerTeam;
  }
  