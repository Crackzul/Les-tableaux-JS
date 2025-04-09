// Sources officielles JavaScript :
// 1. 🔗 MDN – % (Modulo operator) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
// Permet de vérifier si un nombre est divisible par un autre → ex : n % 2 === 0 signifie que n est pair.
// 2. 🔗 MDN – Array.prototype.push() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// Ajoute un élément à la fin d’un tableau (evenNumbers.push(arr[i]) dans notre cas)
// 3. 🔗 MDN – Array iteration with for : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// Boucles classiques en JavaScript pour parcourir les tableaux (for, for...of, etc.)

function filterEven(arr) { //On crée une fonction `filterEven()` qui prend un tableau `arr`
    const evenNumbers = []; //On crée un tableau vide pour y mettre les nombres pairs
  
    for (let i = 0; i < arr.length; i++) { //On parcourt tous les éléments du tableau un par un
      if (arr[i] % 2 === 0) { //On teste si le nombre est pair → % 2 === 0 (reste de la division par 2 = 0)
        evenNumbers.push(arr[i]); //Si oui, on l’ajoute dans le tableau `evenNumbers`
      }
    }
  
    return evenNumbers; //On retourne le tableau filtré
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = filterEven(numbers);
  
  console.log("Nombres pairs :", result); // [2, 4, 6]
  

//   console.log(filterEven([7, 10, 13, 28, 31, 40])); 
// // Résultat : [10, 28, 40] ?

