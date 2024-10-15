export const validationExercises = studentExercises => {
  let count = 0;
  studentExercises.map(studentExercise => {
    if (studentExercise.score > 0) {
      count = count + 1;
    }
    return count;
  });
  return count === studentExercises.length;
};
