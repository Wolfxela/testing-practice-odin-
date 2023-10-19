import { capitalize,reverseString,calculator,cypher,analyseArray } from "./script";

test('capitalize first letter of word even if the letter is already capitalized',()=>{
    expect(capitalize("Fox")).toBe("Fox")
})

test('capitalize first letter of word',()=>{
    expect(capitalize("fox")).toBe("Fox")
})
test('capitalize first letter of word without changing other charracters',()=>{
    expect(capitalize("fOX")).toBe("FOX")
})
test('capitalize first letter of words when theres multiple ',()=>{
    expect(capitalize("fox in the box")).toBe("Fox In The Box")
})

test('reverse the string',()=>{
    expect(reverseString('hello!')).toBe("!olleh")
})
test('reverse the capitals in the string',()=>{
    expect(reverseString('hellOoOoO!')).toBe("!OoOoOlleh")
})

test('reverse even if it has numbers inside it',()=>{
    expect(reverseString('hellOoOoO11112!')).toBe("!21111OoOoOlleh")
})
test('add 2 numbers together',()=>{
    expect(calculator.add(2,3)).toBe(5)
})

test('multiply 2 numbers together',()=>{
    expect(calculator.multiply(2,2)).toBe(4)
})
test('divide 2 numbers together',()=>{
    expect(calculator.divide(2,2)).toBe(1)
})
test('subtract 2 numbers together',()=>{
    expect(calculator.subtract(2,1)).toBe(1)
})
test('encode said words given the key 1',()=>{
    expect(cypher.encode("hello i need lettuce",1)).toBe("ifmmp j offe mfuuvdf")
})
test('encode said words given the key 2',()=>{
    expect(cypher.encode("hello i need lettuce",2)).toBe("jgnnq k pggf ngvvweg")
})
test('decode said words given the key 1',()=>{
    expect(cypher.decode("ifmmp j offe mfuuvdf",1)).toBe("hello i need lettuce")
})
test('decode said words given the key 1',()=>{
    expect(cypher.decode("jgnnq k pggf ngvvweg",2)).toBe("hello i need lettuce")
})
test('decode said words given the key 1',()=>{
    expect(cypher.decode("jgnnq k pggf ngvvweg",2)).toBe("hello i need lettuce")
})

test('test if min is right',()=>{
    const object = analyseArray([2,3,5])
    expect(object.min).toBe(2)
})
test('test if max is right',()=>{
    const object = analyseArray([2,3,5])
    expect(object.max).toBe(5)
})
test('test if length is right',()=>{
    const object = analyseArray([2,3,5])
    expect(object.length).toBe(3)
})
test('test if average is right',()=>{
    const object = analyseArray([2,3,5])
    expect(object.average).toBeCloseTo(3.333333)
})



