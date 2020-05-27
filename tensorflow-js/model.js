// Define model
console.log("Hello World!");

function simpleAdd(input1, input2) {
  // free GPU memory once the function returns
  return tf.tidy(() => {
    const x1 = input1;
    const x2 = input2;
    const y = x1.add(x2);
    return y;
  });
}

const dataX1 = tf.tensor1d([1, 2, 3, 4]);
const dataX2 = tf.tensor1d([5, 6, 7, 8]);
const result = simpleAdd(dataX1, dataX2);
result.print();
