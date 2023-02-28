const generate = (hours, combination = []) => {
    if (hours === 0) {
        console.log(combination.join('-'));
    } else if (hours >= 1) {
        generate(hours - 1, [...combination, 1]);
    }
    if (hours >= 2) {
        generate(hours - 2, [...combination, 2]);
    }
};

generate(20);

