const questions = [
  {
    question: "Who invented javascript?",
    options: {
      a: "Douglas crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctanswer: "Brendan Eich",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    options: {
      a: "Node.js",
      b: "npm",
      c: "typescript",
    },
    correctanswer: "npm",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    options: {
      a: "ESLint",
      b: "Angular",
      c: "jQuery",
    },
    correctanswer: "ESLint",
  },
  // {
  //   question: "JavaScript is a ___ -side programming language.?",
  //   options: {
  //     a: "client",
  //     b: "Server",
  //     c: "both",
  //   },
  //   correctanswer: "client",
  // },
  // {
  //   question:
  //     "Which built-in method calls a function for each element in the array??",
  //   options: {
  //     a: "while()",
  //     b: "loop()",
  //     c: "forEach()",
  //   },
  //   correctanswer: "forEach()",
  // },
  // {
  //   question:
  //     "Which of the following is the correct syntax to print a page using JavaScript?",
  //   options: {
  //     a: "window.print()",
  //     b: "browser.print()",
  //     c: "navigator.print()",
  //   },
  //   correctanswer: "window.print()",
  // },

  // {
  //   question: "what is the correct file extension for Javascript files?",
  //   options: {
  //     a: ".java",
  //     b: ".js",
  //     c: ".javascript",
  //   },
  //   correctanswer: ".js",
  // },
  // {
  //   question: "Which type of JavaScript language is ___?",
  //   options: {
  //     a: "Object-Oriented",
  //     b: "Object-Based",
  //     c: "Assembly-language",
  //   },
  //   correctanswer: "Object-Based",
  // },
  // {
  //   question: "Who invented javascript?",
  //   options: {
  //     a: "Douglas crockford",
  //     b: "Sheryl Sandberg",
  //     c: "Brendan Eich",
  //   },
  //   correctanswer: "Brendan Eich",
  // },
];

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
    // custom data attribute
    answer1.setAttribute("data-question", `${i}-${value}`);

    const inputValue = document.createElement("input");
    inputValue.setAttribute("type", "radio");
    inputValue.setAttribute("name", "x" + i);
    inputValue.setAttribute("value", value);

    var label = document.createElement("label");
    label.innerHTML = value;

    answer1.appendChild(inputValue);
    answer1.appendChild(label, inputValue);

    // ul.append(answer1, answer2, answer3);
    ul.append(answer1);
  }

  form.appendChild(ul);
  // }
}

function check() {
  //document.write("done");
  const form = document.querySelector("form");
  const data = Array.from(new FormData(form));
  //console.log(data);
  //console.log(questions, "questions");

  // Validating if all the questions are answered
  if (data.length !== questions.length) {
    // invalid

    alert("Answer all the questions!");
  } else {
    // valid
    // all the questions are answered. Hence, process the answers
    //alert("All questions are answered!");

    questions.forEach((q, i) => {
      const userAnswer = data[i][1];
      // query for the user selected option
      const selectedOption = document.querySelector(
        `li[data-question="${i}-${userAnswer}"]`
      );
      //let userOption = `${selectedOption}`;
      // userOption.bold();
      // check if the user answer is the correct answer for the question
      if (q.correctanswer === userAnswer) {
        // color the correct answer green
        selectedOption.style.color = "limegreen";

        console.log("correct");
      } else {
        // color the wrong answer red

        selectedOption.style.color = "red";
        //console.log("incorrect");
        // color the correct answer green
        const correctOption = (document.querySelector(
          `li[data-question="${i}-${q.correctanswer}"]`
        ).style.color = "limegreen");
      }
    });
    // otherwise,
    // grab all the instances of radio inputs from DOM
    // check which instance atches the correct answer
    // 1. turn the user chosen option to red with bold text
    // 2. turn the correct option to green
    //}
    // }
  }
}

function process() {
  const form = document.querySelector("form").reset();

  const y = document.querySelectorAll("li[data-question]");
  for (let k = 0; k < y.length; k++) {
    y[k].style.color = null;
  }
}
