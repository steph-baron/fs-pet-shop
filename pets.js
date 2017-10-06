console.log(process.argv[2]);

if (process.argv[2] == undefined) {
  console.log("Usage: enter a command after file");
  process.exit();
} else {
  console.log(process.argv[2]);
}
