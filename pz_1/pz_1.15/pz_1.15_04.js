function validateEmail(email) {
    const exp = /^[^\s`~'₴!@"#№$;%^:&?*_=+/<>(){}\[\]\\\-]+@[^\s.`~'₴!@"#№$;%^:&?*_=+/<>(){}\[\]\\\-]+\.[^\s.`~'₴!@"#№$;%^:&?*_=+/<>(){}\[\]\\\-]+$/;
    return exp.test(email);
}

console.log(validateEmail('test@test.test'));
console.log(validateEmail('test@test.test.test'));
console.log(validateEmail('test.test@test.test'));

