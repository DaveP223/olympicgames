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

    const sportsSchedules = {
        sport1: 'Schedule for Sport 1...',
        sport2: 'Schedule for Sport 2...',
        sport3: 'Schedule for Sport 3...',
        sport4: 'Schedule for Sport 4...',
        sport5: 'Schedule for Sport 5...',
    };

    const newsUpdates = [
        'News headline 1: Details of the news...',
        'News headline 2: Details of the news...',
   
    ];

    //  medal rankings
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

    //  sports schedules
    const sportsList = document.querySelectorAll('#sports ul li a');
    sportsList.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sportId = link.getAttribute('href').substring(1);
            alert(sportsSchedules[sportId]);
        });
    });

    //  news updates
    const newsContainer = document.getElementById('news-updates');
    newsUpdates.forEach((news) => {
        const newsItem = document.createElement('p');
        newsItem.textContent = news;
        newsContainer.appendChild(newsItem);
    });
});
