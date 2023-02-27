function getExt(path){
    const parts = path.split('.');
    return parts[parts.length-1].toLowerCase();
}

console.log(getExt('/home/user/index.txt'));
console.log(getExt('/home/user/index.test.js'));
console.log(getExt('/home/user/index.png'));
console.log(getExt('/home/user/index.jpg'));