var firstUniqChar = function(s) {
    resultado = []
    for ( var character of s){
        firstCharacter = s.indexOf(character)
        secondCharacter = s.indexOf(character, firstCharacter + 1)
        if (secondCharacter == -1)
            resultado.push(character)
    }
    if (resultado == [])
        return -1
    else
        return s.indexOf(resultado[0])
     
};