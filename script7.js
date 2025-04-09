// Sources fiables :
// MDN Web Docs – String.prototype.split()

// MDN Web Docs – Array.prototype.reverse()

// MDN Web Docs – Array.prototype.join()

function reverseWords(sentence) {
    // 1. On coupe la phrase en mots (tableau)
    const words = sentence.split(" ");
  
    // 2. On inverse l’ordre des mots
    const reversed = words.reverse();
  
    // 3. On rassemble les mots en une seule phrase
    const result = reversed.join(" ");
  
    // 4. On retourne la phrase finale
    return result;
  }
  
  // Test :
  const phrase = "I love programming";
  const reversedPhrase = reverseWords(phrase);
  
  console.log("Phrase d'origine :", phrase);           // I love programming
  console.log("Phrase inversée :", reversedPhrase);    // programming love I
  