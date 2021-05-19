
for (let i: number = 1; i <= 100; i++) {
  let first: boolean = true;

  for (let j: number = i - 1; j > 1; j--) {
    if (i % j === 0) {
      first = false;
    }
  }
  if (first === true) {
    document.write(`${i} `);
  }
}
