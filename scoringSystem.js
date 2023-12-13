function countWordOccurrences(sentence, targetWords) {
  // Split the sentence into an array of words
  const words = sentence.split(/\s+/);

  // Initialize a counter for occurrences
  let count = 0;

  // Iterate through the words and count occurrences
  for (const word of words) {
    // Convert both the word and targetWord to lowercase for case-insensitive comparison
    if (word.toLowerCase() === targetWords.toLowerCase()) {
      count++;
    }
  }

  return count;
}
