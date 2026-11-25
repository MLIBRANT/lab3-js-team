// wypisuje tekst jako nowy akapit w bloku #tablice
function wypisz(tekst) {
    const akapit = document.createElement('p');
    akapit.textContent = tekst;
    document.getElementById('tablice').append(akapit);
}

// Krok 1: tablica 5 elementów
const tablica = ['Pizza', 'Burger', 'Sushi', 'Makaron', 'Pierogi'];
console.log(tablica);
console.table(tablica);
wypisz(`Wybrany element: ${tablica[2]}`);

// Krok 2: modyfikacja ostatniego elementu
tablica[tablica.length - 1] = 'Nowa wartość';
console.log(tablica[tablica.length - 1]);

// Krok 3: powiększanie tablicy na 3 sposoby
tablica[5] = 'nowy6';
console.log(tablica.length);

tablica[tablica.length] = 'nowy7';
console.log(tablica.length);

tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11');
console.log(tablica.length);