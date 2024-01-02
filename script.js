console.log("Script loaded");
document.addEventListener('DOMContentLoaded', function () {

    // Fetch and display overview data
    fetchOverviewData();

    // Fetch and display detailed statistics data
    fetchDetailedStats();
});

function fetchOverviewData() {
    // Replace 'http://127.0.0.1:5000/data' with the correct URL to your Flask endpoint
    fetch('http://127.0.0.1:5000/data')
        .then(response => response.json())
        .then(data => {
            // Process and display overview data
            displayOverviewData(data);
        })
        .catch(error => console.error('Error fetching overview data:', error));
}

function displayOverviewData(data) {
    // Calculate Total Bets
    const totalBets = data.reduce((acc, curr) => acc + curr.BetAmount, 0);
    document.getElementById('total-bets').textContent = `Total Bets: $${totalBets}`;

    // Find Most Popular Game
    const gamePopularity = data.reduce((acc, curr) => {
        acc[curr.GameType] = (acc[curr.GameType] || 0) + 1;
        return acc;
    }, {});
    const mostPopularGame = Object.entries(gamePopularity).sort((a, b) => b[1] - a[1])[0][0];
    document.getElementById('popular-game').textContent = `Most Popular Game: ${mostPopularGame}`;

    // Calculate Highest Win
    let highestWinRecord = data.reduce((acc, curr) => {
        return (acc.WinLossAmount > curr.WinLossAmount) ? acc : curr;
    }, { WinLossAmount: 0 });

    const highestWinAmount = highestWinRecord.WinLossAmount;
    const highestWinPlayerID = highestWinRecord.PlayerID;

    document.getElementById('highest-win').textContent = `Highest Win: $${highestWinAmount}`;
    document.getElementById('highest-win-player-id').textContent = `Player ID: ${highestWinPlayerID}`;

    // Calculate Total Wins
    const totalWins = data.filter(item => item.WinLossAmount > 0)
                          .reduce((acc, curr) => acc + curr.WinLossAmount, 0);
    document.getElementById('total-wins').textContent = `Total Wins: $${totalWins}`;
    console.log(`Highest Win: ${highestWinAmount} by Player ID: ${highestWinPlayerID}`);
}

function fetchDetailedStats() {
    // Replace 'http://127.0.0.1:5000/data' with the correct URL to your Flask endpoint
    fetch('http://127.0.0.1:5000/data')
        .then(response => response.json())
        .then(data => {
            // Process and display detailed stats data
            displayDetailedStats(data);
        })
        .catch(error => console.error('Error fetching detailed stats:', error));
}

function displayDetailedStats(data) {
    const tableBody = document.getElementById('stats-table').getElementsByTagName('tbody')[0];
    data.forEach(item => {
        let row = tableBody.insertRow();
        Object.values(item).forEach(text => {
            let cell = row.insertCell();
            cell.textContent = text;
        });
    });
}
