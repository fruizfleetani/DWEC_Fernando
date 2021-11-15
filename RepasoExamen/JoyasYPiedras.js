var numJewelsInStones = function(jewels, stones) {
    resultado = 0;
    for (stone of stones){
        for (jewel of jewels){
            if (stone == jewel)
                resultado++
        }
    }
    return resultado
    
};