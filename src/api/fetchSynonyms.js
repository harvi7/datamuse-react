const API_URL = process.env.API_URL ?? `https://api.datamuse.com`

export const fetchSynonyms = (word) => {
    return fetch(`${API_URL}/words?rel_syn=${word}`)
      .then((response) => response.json())
}