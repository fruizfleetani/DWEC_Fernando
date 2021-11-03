function calculateSupply (age, amount_per_day) {
    const old_age = 90
    total_amount = amount_per_day * ((90 - age)*365)
    document.write('You will need ${total_amount} to last you until the ripe old age of ${old_age}')
};

calculateSupply(25, 5)