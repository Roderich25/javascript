console.log("It works!");

const shape = [4, 2];
const data = tf.tensor([4, 6, 5, 9, 13, 25, 1, 57], shape);
data.print();

const data2 = tf.variable(tf.zeros([8]));
data2.print();
data2.assign(tf.tensor1d([1, 2, 3, 4, 5, 6, 7, 8]));
data2.print();
