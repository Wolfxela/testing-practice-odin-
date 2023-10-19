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
export {capitalize}