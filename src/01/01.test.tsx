import {sum} from "./01";
import {mult} from "./01";
import {splitIntoWorlds} from "./01";

test('sum should be correct', () => {
    //data
    let a = 1
    let b = 2
    let c = 3
//action
    const result1 = sum(a, b);
    const result2 = sum(c, b);
//expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})
test('split should be correct', () => {
    let a = 2;
    let b = 5;
    let c = 10;
    // action resalt
    const resalt1 = mult(a, b)
    const resalt2 = mult(b, c)

    // expect resalt
    expect(resalt1).toBe(10)
    expect(resalt2).toBe(50)
})
test('should be Array of string', () => {
// data
    let split1 = "Hello my best friend!"
    let split2 = "Were i can take car?"
//action resalt
    let resalt1 = splitIntoWorlds(split1)
    let resalt2 = splitIntoWorlds(split2)
//expected 1
    expect(resalt1.length).toBe(4)
    expect(resalt1[0]).toBe('hello')
    expect(resalt1[1]).toBe('my')
    expect(resalt1[2]).toBe('best')
    expect(resalt1[3]).toBe('friend')
//expected 2
    expect(resalt2.length).toBe(5)
    expect(resalt2[0]).toBe('were')
    expect(resalt2[1]).toBe('i')
    expect(resalt2[2]).toBe('can')
    expect(resalt2[3]).toBe('take')
    expect(resalt2[4]).toBe('car')




})