const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Oyların kaydedileceği JSON dosyası
const VOTES_FILE = 'votes.json';

app.use(bodyParser.json());
app.use(express.static('public'));

// Oyları kaydetme route'u
app.post('/vote', (req, res) => {
    const { name, votes } = req.body; // Kullanıcı adı ve oylar

    // JSON dosyasını oku ve güncelle
    fs.readFile(VOTES_FILE, (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Bir hata oluştu!');
        }

        let currentVotes = [];
        if (!err) {
            currentVotes = JSON.parse(data);
        }

        // Yeni oyu ekle
        currentVotes.push({ name, votes });

        // JSON dosyasına yaz
        fs.writeFile(VOTES_FILE, JSON.stringify(currentVotes, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).send('Veri kaydedilirken hata oluştu!');
            }
            res.status(200).send('Oylar başarıyla kaydedildi!');
        });
    });
});

// Sonuçları getirme route'u
app.get('/results', (req, res) => {
    fs.readFile(VOTES_FILE, (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Sonuçlar alınırken hata oluştu!');
        }

        const votes = !err ? JSON.parse(data) : [];
        res.json(votes);
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
