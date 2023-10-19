function capitalize(input)
{
    let output = ""
    const sentenceArray = input.split(" ")
    let wordArray = []

    sentenceArray.forEach(element => {
        wordArray = element.split("")
        wordArray[0] = wordArray[0].toUpperCase()
        wordArray.forEach(element => {
            output += element
        });
        output += " "
    });

    return output.slice(0,output.length -1)
}
function reverseString(input)
{
    let output = ""
    const wordArray = input.split("")
    for(let i = wordArray.length; i>0;i--)
    {
        output += wordArray[i - 1]
    }
    return output

}
const calculator = (function(){
    const add = function(num1,num2)
    {
        return num1 + num2
    }
    const subtract = function(num1,num2)
    {
        return num1 - num2
    }
    const multiply = function(num1,num2)
    {
        return num1 * num2 
    }
    const divide = function(num1,num2)
    {
            return num1/num2
    }
    return {add,subtract,multiply,divide}
})();
const cypher = (function(){
    //here the efficient route would be having a binary tree to search for the shifted letter, but for example i'll be using a array, which is less efficient
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const checkAlph = function(letter,key)
    {
        for(let i = 0; i<alphabet.length;i++)
        {
            if(letter == alphabet[i])
            {
                if(i+key > alphabet.length - 1)
                {
                    newkey = (i+key) - alphabet.length
                    return alphabet[newkey]
                }
                else if(i+key <= -1)
                {
                    newkey = alphabet.length - key
                    return alphabet[newkey]
                }
                return alphabet[i+key]
            }
        }
        return " "
    }
    const encode = function(input,key){
        let output = ""
        const wordArray = input.split("")
        for(let i = 0; i<wordArray.length;i++)
        {
         output += checkAlph(wordArray[i],key)
        }
        return output
    }
    const decode = function(input,key)
    {
        let output = ""
        const wordArray = input.split("")
        for(let i = 0; i<wordArray.length;i++)
        {
         output += checkAlph(wordArray[i],key -(key * 2))
        }
        return output
    }
    return {encode,decode}
})();

const analyseArray = function(input){
    const getNum = function(array,isMax)
    {
        let number = null;
        for(let i = 0; i<array.length;i++)
        {
         if(number == null)
         {
            number = array[i]
         }
         if(isMax == true && array[i] > number)
         {
            number = array[i]
         }
         else if(array[i] < number)
         {
            number = array[i]
         }
        }
        return number
    }
    const getAverage = function(input)
    {
        let result = 0;
        input.forEach(element => {
            result += element
        });
        return result/input.length
    }
    const min = getNum(input,false)
    const max = getNum(input,true)
    const length = input.length
    const average = getAverage(input)


    return{min,max,length,average}


}
export {capitalize,reverseString,calculator,cypher,analyseArray}