// const countOccurrences = (arr, val) => //On crée une **fonction fléchée** appelée `countOccurrences`; deux arguments, `arr`= un tableau,`val`= la valeur
//     arr.reduce((a, v) => (v === val ? a + 1 : a), 0); //arr.reduce((a, v) => (v === val ? a + 1 : a), 0) : Cette ligne est la magie : on utilise .reduce(), une méthode qui permet de réduire un tableau à une seule valeur.
//     // (a, v)                        a = accumulateur (le compteur), v = valeur courante
//     // v === val ? a + 1 : a         si la valeur courante v est égale à val, on ajoute 1, sinon on garde le compteur tel quel
//     // 0                             c’est la valeur de départ du compteur → on commence à 0
//   const arr = [1, 2, 3, 4, 1, 2, 1, 12, 24, 42, 42, "quarantedouze", 1];
//   const val = 1;
//   const count = countOccurrences(arr, val);
//   console.log(count); // Nombre de fois que le 1 apparait dans ma const arr

//   Version alternative débutant (sans reduce, avec boucle for) :

function countOccurrences(arr, val) { //`arr` → un tableau (de fruits ici); `val` → la valeur à chercher (par ex `"banana"`)
    let count = 0; //On initialise un compteur à 0, qu’on va augmenter chaque fois qu’on trouve un "banana".
  
    for (let i = 0; i < arr.length; i++) { //Une boucle qui **parcourt tout le tableau** du début à la fin.
      if (arr[i] === val) { //À chaque tour, on vérifie si l’élément courant (arr[i]) est égal à la valeur qu’on cherche (val).
        count++; //Si oui, on **augmente le compteur de 1**.
      }
    }
  
    return count; //À la fin, on retourne le nombre de fois que la valeur a été trouvée.
  }
  
  const fruits = ["apple", "banana", "cherry", "banana", "kiwi", "banana", "apple"]; // Notre tableau d’exemple avec 3 `"banana"`.
  const val = "banana";
  const count = countOccurrences(fruits, val); // On appelle la fonction avec le tableau fruits et la valeur "banana".
  
  console.log(`Il y a ${count} fois "${val}" dans le tableau de fruits.`); // Pour que le compte la valeur banana s'affichent en éxécutant le script.
  