const obj = {
  name: "Shirsho",
  age: 27,
  printData: function (asker) {
    console.log(
      `Hi ${asker}. My name is ${this.name}, and I am ${this.age} years old`
    );
  },
};

const obj2 = {
  name: "Dipto",
  age: 17,
  printData: function (asker) {
    console.log(
      `Hi ${asker}. My name is ${this.name}, and I am ${this.age} years old`
    );
  },
};

function bind(context, func) {
  return function (...args) {
    func.apply(context, args);
  };
}

const newFunc = bind(obj2, obj.printData);
newFunc("John");
