// Oy Verme Fonksiyonu (Değişiklikler yapılmıştır)
function vote(playerIndex, rank) {
    // Her oyuncuya oy verildiğinde puanları güncelle
    switch (rank) {
        case 1:
            players[playerIndex].points += 10;
            break;
        case 2:
            players[playerIndex].points += 7;
            break;
        case 3:
            players[playerIndex].points += 5;
            break;
        case 4:
            players[playerIndex].points += 3;
            break;
        case 5:
            players[playerIndex].points += 1;
            break;
    }

    // Oyları göndermek ve sayfayı güncellemek için server'a verileri gönder
    updateResults();
}

// Oy Sonuçlarını Güncelleme
function updateResults() {
    const resultsPage = 'results.html'; // Sonuç sayfasının yolunu belirtin
    window.location.href = resultsPage;
}
