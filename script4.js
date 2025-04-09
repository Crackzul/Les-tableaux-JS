let fruits = ['apple', 'banana', 'cherry'];
// console.table(fruits.reverse()); pas la consigne (sans fonction pré-faite, il faut la créer..)

// Si nous voulons faire une fonction pour inverser un tableau donné, nous pouvons utiliser une boucle for et la fonction length en JavaScript. La fonction length renvoie le nombre d’éléments d’un tableau donné. Pour faire fonctionner notre fonction, nous devons récupérer chaque élément du tableau donné depuis la fin, le stocker au début dans un autre tableau et le renvoyer une fois la boucle terminée. Faisons cette fonction et testons-la avec le tableau défini dans la méthode ci-dessus et montrons le résultat sur la console en utilisant la fonction console.log() src:https://www.delftstack.com/fr/howto/javascript/javascript-reverse-array/.

function reverseArray(arr) {           //On **déclare une fonction** qui s’appelle `reverseArray`
    const newArray = [];                // tableau vide pour les éléments inversés
    const len = arr.length;            // On calcule la **longueur du tableau**, qu’on stocke dans une variable appelée `len`  
  
    for (let i = len - 1; i >= 0; i--) { // On crée une boucle qui part de la fin du tableau; i = len - 1 → le dernier index (ici 2); i >= 0 → on va jusqu’au début du tableau; i-- → on décrémente à chaque tour (on descend)
      newArray.push(arr[i]);           // on ajoute chaque élément depuis la fin
    }
  
    return newArray;                   // on retourne le tableau inversé
  }
  
  const originalArray = ['apple', 'banana', 'cherry'];
  const reversedArray = reverseArray(originalArray);


  console.log('Original Array:', originalArray);   // ['apple', 'banana', 'cherry'];
  console.log('Reversed Array:', reversedArray);   // [ 'cherry', 'banana', 'apple' ]
  
  