function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    arr.forEach((element) => {
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }

        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    });

    return mostFrequentElement;
}

const array = [3, 5, 3, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(array);
console.log(mostFrequent);
