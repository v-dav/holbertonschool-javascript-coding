function askName() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    console.log(`Your name is: ${input}`);
    console.log('This important software is now closing');
    process.exit();
  });
}

module.exports = askName;
askName();
