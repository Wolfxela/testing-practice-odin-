import { capitalize } from "./script";

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

