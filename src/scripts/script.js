module.exports = function(robot) {
  robot.respond(/hello/, function(res) {
    res.send('hello 我');
  });
}