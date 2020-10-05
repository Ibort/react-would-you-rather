export const RECIVE_QUESTIONS = 'RECIVE_QUESTION'

export function reciveQuestions (questions) {
  return {
    type: RECIVE_QUESTIONS,
    questions,
  }
}