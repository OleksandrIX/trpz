class Random {
    static nextInt(low, high) {
        return Math.floor(Math.random() * (high - low)) + low;
    }

    static nextDouble(low, high) {
        return Math.random() * (high - low) + low;
    }

    static nextElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

console.log(Random.nextInt(12, 112));
console.log(Random.nextDouble(1, 1.2));
console.log(Random.nextElement(["яблуко", "банан", "апельсин", "ананас", "помідор", "картопля", "цибуля", "мандарин", "кокос"]));