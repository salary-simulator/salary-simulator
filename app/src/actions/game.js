export const START_GAME = 'START_GAME'
export function startGame(character) {
  return {
    type: START_GAME,
    character: character,
  }
}

export const SELECT_CHOICE = 'SELECT_CHOICE'
export function selectChoice(id) {
  return {
    type: SELECT_CHOICE,
    id: id,
  }
}
