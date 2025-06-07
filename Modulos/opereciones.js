const magicNumber = 42;
let number = 0;
const hello = () => "hello";
const goodbye = () => "goodbye";
class CoderBlock {};

export {
    magicNumber,
    number,
    hello,
    goodbye as bye,
    hello as greet,
}