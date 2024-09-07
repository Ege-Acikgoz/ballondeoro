document.getElementById('vote-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('user-name').value;
    const votes = getVotes(); // Kullanıcının oylarını al

    try {
        const response = await fetch('/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, votes })
        });

        if (response.ok) {
            alert('Oylarınız başarıyla kaydedildi!');
        } else {
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    } catch (error) {
        console.error('Sunucuya bağlanırken hata:', error);
        alert('Sunucuya bağlanırken hata oluştu.');
    }
});

function getVotes() {
    // Oyları topla (örneğin, kullanıcıdan seçilen oyuncular ve puanlar)
    return [
        { player: 'Oyuncu Adı 1', points: 10 },
        { player: 'Oyuncu Adı 2', points: 7 },
        // ...
    ];
}
