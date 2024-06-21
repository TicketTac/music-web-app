document.addEventListener('DOMContentLoaded', () => {
    const trackList = document.getElementById('track-list');
    const queuePageButton = document.getElementById('queue-page-button');
    const addPlaylistButton = document.getElementById('add-playlist-button');

    // Tracks ophalen van de server
    fetch('/api/tracks')
        .then(response => response.json())
        .then(tracks => {
            tracks.forEach(track => {
                const trackElement = document.createElement('div');
                trackElement.classList.add('track');
                trackElement.dataset.track = track.path;

                const trackInfo = document.createElement('p');
                trackInfo.textContent = track.name;

                const addToQueueButton = document.createElement('button');
                addToQueueButton.classList.add('add-to-queue');
                addToQueueButton.textContent = 'Toevoegen aan wachtrij';
                addToQueueButton.addEventListener('click', () => {
                    addToQueue(track.path);
                });

                trackElement.appendChild(trackInfo);
                trackElement.appendChild(addToQueueButton);
                trackList.appendChild(trackElement);
            });
        })
        .catch(error => {
            console.error('Error fetching tracks:', error);
        });

    // Navigatie naar wachtrij pagina
    queuePageButton.addEventListener('click', () => {
        window.location.href = 'track.html';
    });

    // Nieuwe playlist aanmaken (placeholder functie)
    if (addPlaylistButton) {
        addPlaylistButton.addEventListener('click', () => {
            createPlaylist();
        });
    }
});

const addToQueue = (trackSrc) => {
    console.log(`Track toegevoegd aan wachtrij: ${trackSrc}`);
    // Implementatie voor wachtrij
};

const createPlaylist = () => {
    console.log('Nieuwe playlist aangemaakt');
    // Implementatie voor nieuwe playlist
};
