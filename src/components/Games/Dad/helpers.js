export const calculateStatus = (scenarios, success, gameStates) => (scenarios.length === 0 && success)
? gameStates.completedItMate
: (scenarios.length > 0 && success)
  ? gameStates.success
  : gameStates.gameOver

/**
 * Dadding is difficult. Nothing you do has a greater than 10% chance of success.
 * Generator two random numbers, one between 0 and 10 and one between 0 and 100.
 * If the former is greater than the latter, you've got a rare win.
 */
export const calculateSuccess = () => {
  const randomOutOfTen = Math.random() * 10
  const randomOutOfHundred = Math.random() * 100
  console.log(`${randomOutOfTen}/${randomOutOfHundred}`)
  return randomOutOfTen > randomOutOfHundred
}

export const shuffleArray = array => {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}
