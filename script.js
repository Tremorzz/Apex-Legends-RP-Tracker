let startingRP = 0;
let totalRP = 0;

function setStartingRP() {
    startingRP = parseInt(document.getElementById('starting-rp').value);

    if (isNaN(startingRP) || startingRP < 0) {
        showFeedback("Please enter a valid Starting RP.", false);
    } else {
        totalRP = startingRP;
        showFeedback(`Starting RP set to ${startingRP}`, true);
    }

    document.getElementById('starting-rp').value = '';
}

function processMatchData() {
    const kills = parseInt(document.getElementById('kills').value);
    const assists = parseInt(document.getElementById('assists').value);
    const participation = parseInt(document.getElementById('participation').value) || 0;
    const placement = parseInt(document.getElementById('placement').value);
    const challengerRP = parseInt(document.getElementById('challenger').value);
    const top5 = parseInt(document.getElementById('top5').value);
    const rankSelect = document.getElementById('rank');
    const rank = rankSelect.value;
    let rpEarned = 0;

    if (isNaN(kills) || isNaN(assists) || isNaN(placement) || !rank) {
        showFeedback("Please fill in all match data.", false);
        return;
    }

    // Adjust participation to 50%
    const effectiveParticipation = participation * 0.5;

    // Calculate RP earned based on placement
    if (placement >= 16) {
        rpEarned = (kills + assists + effectiveParticipation) * 4;
    } else if (placement >= 11) {
        rpEarned = 5 + (kills + assists + effectiveParticipation) * 6;
    } else if (placement >= 9) {
        rpEarned = 10 + (kills + assists + effectiveParticipation) * 8;
    } else if (placement >= 7) {
        rpEarned = 20 + (kills + assists + effectiveParticipation) * 10;
    } else if (placement === 6) {
        rpEarned = 40 + (kills + assists + effectiveParticipation) * 10;
    } else if (placement === 5) {
        rpEarned = 45 + (kills + assists + effectiveParticipation) * 12;
    } else if (placement === 4) {
        rpEarned = 55 + (kills + assists + effectiveParticipation) * 14;
    } else if (placement === 3) {
        rpEarned = 75 + (kills + assists + effectiveParticipation) * 16;
    } else if (placement === 2) {
        rpEarned = 100 + (kills + assists + effectiveParticipation) * 18;
    } else if (placement === 1) {
        rpEarned = 125 + (kills + assists + effectiveParticipation) * 20;
    }

    // Subtract RP based on selected rank
    if (rank === "Apex Predator" || rank === "Master") {
        rpEarned -= 90;
    } else if (rank.startsWith("Diamond")) {
        rpEarned -= 65;
    } else if (rank.startsWith("Platinum")) {
        rpEarned -= 48;
    } else if (rank.startsWith("Gold")) {
        rpEarned -= 38;
    } else if (rank.startsWith("Silver")) {
        rpEarned -= 20;
    }else if (rank.startsWith("Bronze")) {
        rpEarned -= 10;
    }

    rpEarned += challengerRP;
    rpEarned += top5;

    startingRP += rpEarned;
    totalRP = startingRP;

    // Auto-update rank based on total RP
    updateRank(rankSelect);

    // Add match data to the table
    const tableBody = document.getElementById('stats-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${kills}</td>
        <td>${assists}</td>
        <td>${participation}</td>
        <td>${placement}</td>
        <td>${challengerRP}</td>
        <td>${top5}</td>
        <td>${rpEarned}</td>
        <td>${startingRP}</td>
    `;

    // Reset inputs after adding match
    document.getElementById('kills').value = '';
    document.getElementById('assists').value = '';
    document.getElementById('participation').value = '';
    document.getElementById('placement').value = '';
    document.getElementById('challenger').value = '';
    document.getElementById('top5').value = '';
}

function updateRank(rankSelect) {
    const ranks = [
        { rank: "Rookie IV", maxRP: 250 },
        { rank: "Rookie III", maxRP: 250 },
        { rank: "Rookie II", maxRP: 250 },
        { rank: "Rookie I", maxRP: 250 },
        { rank: "Bronze IV", maxRP: 500 },
        { rank: "Bronze III", maxRP: 500 },
        { rank: "Bronze II", maxRP: 500 },
        { rank: "Bronze I", maxRP: 500 },
        { rank: "Silver IV", maxRP: 600 },
        { rank: "Silver III", maxRP: 600 },
        { rank: "Silver II", maxRP: 600 },
        { rank: "Silver I", maxRP: 600 },
        { rank: "Gold IV", maxRP: 700 },
        { rank: "Gold III", maxRP: 700 },
        { rank: "Gold II", maxRP: 700 },
        { rank: "Gold I", maxRP: 700 },
        { rank: "Platinum IV", maxRP: 800 },
        { rank: "Platinum III", maxRP: 800 },
        { rank: "Platinum II", maxRP: 800 },
        { rank: "Platinum I", maxRP: 800 },
        { rank: "Diamond IV", maxRP: 1000 },
        { rank: "Diamond III", maxRP: 1000 },
        { rank: "Diamond II", maxRP: 1000 },
        { rank: "Diamond I", maxRP: 1000 },
    ];

    let currentRankIndex = ranks.findIndex(r => r.rank === rankSelect.value);

    if (currentRankIndex !== -1) {
        while (
            currentRankIndex < ranks.length - 1 &&
            totalRP > ranks[currentRankIndex].maxRP
        ) {
            totalRP -= ranks[currentRankIndex].maxRP;
            currentRankIndex++;
        }

        rankSelect.value = ranks[currentRankIndex].rank;
        startingRP = totalRP;

        showFeedback(`Rank auto-updated to ${ranks[currentRankIndex].rank}`, true);
    }
}

function showFeedback(message, success = false) {
    const feedbackElement = document.getElementById(success ? 'starting-rp-feedback' : 'match-feedback');
    feedbackElement.textContent = message;
    feedbackElement.style.color = success ? 'green' : 'red';
}
