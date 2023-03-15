# Události - Lekce 8

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. Objednávka

Vytvoříme jednoduchou stránku s objednávacím tlačítkem.

- Založte HTML stránku s jedním tlačítkem
```html
<button id="btn-order">Objednat</button>
```
- Doplňte do stránky JavaScriptový program, který zařídí, že po stisknutí tlačítka se do stránky za tlačítko vypíše odstavec:
```html
<p>Objednáno</p>
```
- Upravte program tak, že text se nevypíše do stránky, ale zobrazí se na samotném tlačítku.
![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/hof-udalosti/cv-udalosti/cvlekce%3Eobjednavka/ukazka.gif)



## 2. Kontrola dostupnosti

Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

- Zařiďte úpravou přímo **v HTML souboru**, aby při načtení stránky obsahovalo tlačítko zprávu *Kontroluji dostupnost…*
- Přidejte do stránky zpoždění pomocí funkce `setTimeout`, která zařídí, že **8 vteřin** po načtení stránky se zpráva na tlačítku změní na Objednat.
- Tlačítka mají speciální HTML atribut s názvem `disabled`. Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. Přidejte tento **atribut do HTML** kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné/neklikatelné. Až **po uplynutí časovače jej zpřístupněte** nastavením vlastnosti `disabled` na `false`.
![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/hof-udalosti/cv-udalosti/cvlekce%3Ekontrola-dostupnosti/ukazka.gif)