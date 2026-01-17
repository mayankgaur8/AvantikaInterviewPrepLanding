const reactQuestions = [];

// Create 50 JavaScript algorithmic questions usable in the in-browser runner
for (let i = 1; i <= 50; i++) {
  const id = `r-${String(i).padStart(2, '0')}`;
  const title = `Sum of array - variant ${i}`;
  const difficulty = i <= 15 ? 'Easy' : (i <= 35 ? 'Medium' : 'Hard');
  const statement = `Given an array of numbers return the sum of its elements (variant ${i}).`;
  const solution = `function solve(arr) { return (arr||[]).reduce((s,x)=>s+(Number(x)||0),0); }`;
  const tests = [
    { input: [[1,2,3]], expected: 6 },
    { input: [[-1,1,2]], expected: 2 },
    { input: [[]], expected: 0 }
  ];
  reactQuestions.push({ id, title, difficulty, language: 'javascript', statement, solution, tests });
}

export default reactQuestions;
