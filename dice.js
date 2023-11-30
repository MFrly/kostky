// Inicializace polí pro ukládání hodů
let rolls1 = [];
let rolls2 = [];

// Funkce pro náhodný obrázek kostky
function getRandomDiceImage() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return `dice${randomNumber}.png`;
}

// Funkce pro nastavení výchozího obrázku po otevření stránky
function setDefaultDiceImages() {
  const diceElement1 = document.getElementById('dice1');
  const diceElement2 = document.getElementById('dice2');
  
  // Nastavení výchozích obrázků
  diceElement1.src = 'dice1.png';
  diceElement2.src = 'dice1.png';
}

// Funkce pro sčítání a zobrazování součtu oček
function updateTotal() {
  const totalElement = document.getElementById('total');
  const totalRolls = rolls1.concat(rolls2);
  const sum = totalRolls.reduce((acc, roll) => acc + parseInt(roll.match(/\d+/)[0]), 0);
  totalElement.textContent = `Součet oček: ${sum}`;
}

// Funkce pro hod kostkou
function rollDice() {
  // Nulování polí před novým hodem
  rolls1 = [];
  rolls2 = [];

  // Vygenerování náhodných obrázků pro obě kostky
  const result1 = getRandomDiceImage();
  const result2 = getRandomDiceImage();

  // Zobrazení výsledků a animace kostek
  const diceElement1 = document.getElementById('dice1');
  diceElement1.src = result1;
  diceElement1.style.transform = 'rotate(' + (360 * 5) + 'deg)';

  const diceElement2 = document.getElementById('dice2');
  diceElement2.src = result2;
  diceElement2.style.transform = 'rotate(' + (360 * 5) + 'deg)';

  // Resetování animace po dokončení
  setTimeout(() => {
    diceElement1.style.transform = 'rotate(0deg)';
    diceElement2.style.transform = 'rotate(0deg)';
    
    // Počkejte na dočtení animace kostek a poté aktualizujte součet
    setTimeout(() => {
      // Přidání výsledků hodu do polí
      rolls1.push(result1);
      rolls2.push(result2);

      // Aktualizace a zobrazení součtu oček
      updateTotal();
    }, 500); // Zpoždění 500 ms (0.5 sekundy)
  }, 500);
}
// Nastavení výchozích obrázků při otevření stránky
setDefaultDiceImages();
