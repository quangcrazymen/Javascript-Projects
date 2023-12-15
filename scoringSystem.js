function countWordOccurrences(sentence, targetWords) {
  // Split the sentence into an array of words
  const words = sentence.split(/\s+/);

  // Initialize a counter for occurrences
  let count = 0;

  // Iterate through the words and count occurrences
  for (const word of words) {
    for (const targetWord of targetWords) {
      // Convert both the word and targetWord to lowercase for case-insensitive comparison
      if (word.toLowerCase().includes(targetWord.toLowerCase())) {
        count++;
      }
    }
  }

  return count;
}
