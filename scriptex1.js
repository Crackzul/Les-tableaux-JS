// 1. On part d’un tableau de nombres
const numbers = [1, 2, 3, 4, 5];

// 2. On crée un nouveau tableau vide pour y mettre les résultats
const doubledNumbers = [];

// 3. On parcourt chaque élément du tableau d'origine avec une boucle
for (let i = 0; i < numbers.length; i++) {
  // 4. À chaque tour, on multiplie l’élément par 2 et on le pousse dans le nouveau tableau
  doubledNumbers.push(numbers[i] * 2);
}

// 5. On affiche le nouveau tableau
console.log(doubledNumbers); // Résultat : [2, 4, 6, 8, 10]
