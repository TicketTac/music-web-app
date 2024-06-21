const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tracks', (req, res) => {
    const tracksDir = path.join(__dirname, 'public', 'assets');
    fs.readdir(tracksDir, (err, files) => {
        if (err) {
            return res.status(500).send('Kan de directory niet lezen');
        }

        const tracks = files
            .filter(file => path.extname(file).toLowerCase() === '.mp3')
            .map(file => ({
                name: path.basename(file, '.mp3'),
                path: `/assets/${file}`
            }));

        res.json(tracks);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
