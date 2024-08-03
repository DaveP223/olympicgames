document.addEventListener('DOMContentLoaded', () => {
    const medalData = [
        { country: 'United States', gold: 39, silver: 41, bronze: 33 },
        { country: 'China', gold: 38, silver: 32, bronze: 18 },
        { country: 'Japan', gold: 27, silver: 14, bronze: 17 },
        { country: 'Great Britain', gold: 22, silver: 21, bronze: 22 },
        { country: 'Russia', gold: 20, silver: 28, bronze: 23 },
        { country: 'Australia', gold: 17, silver: 7, bronze: 22 },
        { country: 'Netherlands', gold: 10, silver: 12, bronze: 14 },
        { country: 'France', gold: 10, silver: 12, bronze: 11 },
        { country: 'Germany', gold: 10, silver: 11, bronze: 16 },
        { country: 'Italy', gold: 10, silver: 10, bronze: 20 },
    ];

    const newsUpdates = [
        'News headline 1: Brazil secured their first victory of Paris 2024, defeating Japan with a final score of 102-84. The Brazilians showcased impressive shooting from beyond the arc, hitting 17 out of 28 three-pointers. Bruno Caboclo led the team with 33 points, shooting 13-19 from the field. For Japan, Kawamura Yuki and Josh Hawkinson combined for a total of 47 points.',
        'News headline 2: The Paris 2024 Olympic Games continue to bring success for Team USA. Highlights from Day 7 include ShaCarri Richardsons impressive performance in Round 1 of the womens 100m and Ian Barrows and Hans Henkens calm and skillful display on the water, earning a bronze medal in sailing. Team USA gave fans plenty to cheer about.',
        // Add more mock news as needed
    ];

    // Populate medal rankings
    const medalTableBody = document.querySelector('#medal-rankings tbody');
    medalData.forEach((data) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.country}</td>
            <td>${data.gold}</td>
            <td>${data.silver}</td>
            <td>${data.bronze}</td>
        `;
        medalTableBody.appendChild(row);
    });

    // Populate news updates
    const newsContainer = document.getElementById('news-updates');
    newsUpdates.forEach((news) => {
        const newsItem = document.createElement('p');
        newsItem.textContent = news;
        newsContainer.appendChild(newsItem);
    });
});
