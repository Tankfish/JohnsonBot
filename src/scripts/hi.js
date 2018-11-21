module.exports = function(robot) {
  robot.respond(/(hello)/i, function(res) {
    res.send('hello 我');
  });
}