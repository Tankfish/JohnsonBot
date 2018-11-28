/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  An example Hubot script written in TypeScript
//
// Configuration:
//   None
//
// Commands:
//   hubot hello - responds 'Howdy!'
//
// Author:
//   Byron Sommardahl <byron@acklenavenue.com>
function HelloWorld(robot) {
    robot.respond(/johnson/i, function (msg) {
        msg.send('我是個不錯的福委人選!');
    });
    robot.hear(/johnson/i, function (msg) {
        msg.send('他是個不錯的福委人選!!');
    });
}
module.exports = HelloWorld;