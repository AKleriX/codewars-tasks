function autocomplete(input, dictionary){
    let searchSymbols = input.replace(/[^a-z]/ig, '').toLowerCase(),
        fiendStr = dictionary.filter(word => word.toLowerCase().startsWith(searchSymbols));
    return fiendStr.length > 5 ? fiendStr.slice(0, 5) : fiendStr;
}