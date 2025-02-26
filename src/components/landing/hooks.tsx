export default function useLandingHooks() {
    const words = ["WEB ENGINEER."];
    const characterConfig = [[6, 11], [4, 7], [9], [1, 7]];
  
    const getCharacterStyle = (word: string, w_idx: number) => {
      return word.split("").map((char, c_idx) => {
        const config = characterConfig[w_idx];
        if (config.some((value) => value === c_idx)) {
          return <span>{char}</span>;
        }
        return char;
      });
    };

    const getWordStyle = (word: string, w_idx: number) => {
      if (w_idx === 2) {
        const subWords = word.split(" ");
        return subWords.map((w, sw_idx) => (
          <div style={{ width: "100%", textAlign: sw_idx ? "right" : "left" }}>
            {getCharacterStyle(w, w_idx + sw_idx)}
          </div>
        ));
      }
      return getCharacterStyle(word, w_idx);
    };

    return {
      words,
      springs: words.map(() => ({})),
      getWordStyle
    }
}