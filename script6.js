// src : https://www.geeksforgeeks.org/javascript-program-to-find-the-most-frequent-element-in-an-array/

function mostFrequent(arr) {
    const counts = {}; // On crée un **objet vide**. Il va stocker combien de fois chaque fruit apparaît.
    let maxCount = 0;  // nombre max trouvé
    let mostFrequentItem = null; // élément le plus fréquent
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
  
      if (counts[item]) {
        counts[item]++; // si déjà présent, on ajoute 1
      } else {
        counts[item] = 1; // sinon on démarre le compteur à 1
      }
  
      // mise à jour si cet élément est plus fréquent que le précédent
      if (counts[item] > maxCount) {
        maxCount = counts[item];
        mostFrequentItem = item;
      }
    }
  
    return mostFrequentItem;
  }
  
  const fruits = ["apple", "banana", "banana", "cherry", "banana", "apple", "kiwi", "kiwi", "kiwi", "kiwi"];
  const result = mostFrequent(fruits);
  
  console.log(`L'élément le plus fréquent est : "${result}"`);
  