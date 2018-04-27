const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: '222',
      age: 111
    });
    // reject('Something wrong');
  }, 2500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 2500);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error', error);
});

console.log('after');
