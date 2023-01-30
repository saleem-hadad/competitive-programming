function semordnilap(words) {
  const wordsSet = new Set(words);
  const pairs = [];

  for(const word of words) {
    const reverse = word.split('').reverse().join('');
    if(wordsSet.has(reverse) && reverse !== word) {
      pairs.push([word, reverse]);
      wordsSet.delete(word);
      wordsSet.delete(reverse);
    }
  }

  return pairs;
}