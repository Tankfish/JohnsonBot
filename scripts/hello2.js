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
module.exports = function HelloWorld(robot) {
    robot.respond(/hello1/, function (msg) {
        msg.reply('I am Johnson!');
    });
    robot.hear(/howdy1/, function (msg) {
        msg.send('幹!');
    });
}