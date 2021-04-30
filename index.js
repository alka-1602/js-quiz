const questions = [
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctanswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    options: {
      a: "Node.js",
      b: "npm",
      c: "typescript",
    },
    correctanswer: "b",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    options: {
      a: "ESLint",
      b: "Angular",
      c: "jQuery",
    },
    correctanswer: "a",
  },
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    correctanswer: "c",
  },
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    correctanswer: "c",
  },
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    correctanswer: "c",
  },
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    correctanswer: "c",
  },
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    correctanswer: "c",
  },
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    correctanswer: "c",
  },
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    correctanswer: "c",
  },
];

//const option = options;
//const setOfOptions = Object.keys(options);
//console.log("setOfQuestions");

const form = document.querySelector("form");
for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  console.log(`question[${i}]`, question);
  const h3 = document.createElement("h3");
  h3.innerText = question.question;
  form.append(h3);

  const ul = document.createElement("ul");

  //TODO
  //   STEP 1 : Convert options object to array and store it in setOfOptions variable
  const setOfOptions = Object.entries(question.options);
  // STEP 2: Loop on the convreted array (key, value)

  // 3 options
  for (let j = 0; j < setOfOptions.length; j++) {
    // Inside the loop
    // STEP 3: Create an li
    // STEP 4: Create a label
    // STEP 5: Create an input type radio
    // STEP 6: Append input to label
    // STEP 7: Append label to li
    // STEP 8: Append li to ul
    // const h2 = document.createElement("h2");
    // h2.innerText = setOfOptions[j].a;
    // form.append(h2);
    const [key, value] = setOfOptions[j];
    console.log({ key, value });

    const answer1 = document.createElement("li");
    // const answer2 = document.createElement("li");
    // const answer3 = document.createElement("li");

    const inputValue = document.createElement("input");
    inputValue.setAttribute("type", "radio");
    inputValue.setAttribute("name", "x" + i);

    var label = document.createElement("label");
    label.innerHTML = value;
    // label.innerHTML = option.b;
    // label.innerHTML = option.c;

    answer1.appendChild(inputValue);
    answer1.appendChild(label, inputValue);

    // answer2.appendChild(inputValue);
    // answer2.appendChild(label, inputValue);

    // answer3.appendChild(inputValue);
    // answer3.appendChild(label, inputValue);

    // ul.append(answer1, answer2, answer3);
    ul.append(answer1);
  }

  form.appendChild(ul);
  // }
}
