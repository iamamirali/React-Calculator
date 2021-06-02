import React, { useState } from "react";

const stuff = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "."];

const App = () => {
  // value of the input
  let [problem, setProblem] = useState("");
  // list of numbers and signs
  const [items, setItems] = useState(stuff);
  // evaluation function
  const evaluate = () => {
    setProblem(eval(problem).toFixed(14));
  };

  return (
    <section className='container'>
      <article>
        <div>
          <input
            className='input'
            value={problem}
            onChange={(e) => {
              setProblem(e.target.value);
            }}
            type='text'
          />
        </div>
        <div className='buttons'>
          {/* clear btn */}
          <div className='specials'>
            <button className='btn' onClick={() => setProblem("")}>
              C
            </button>
          </div>
          {/* shows the list of numbers and signs */}
          {items.map((item) => {
            return (
              <button
                className='btn'
                key={Math.random()}
                onClick={() => {
                  setProblem((problem += item));
                }}
              >
                {item}
              </button>
            );
          })}
          {/* shows buttons / 0 * and = */}
          <button
            className='btn'
            onClick={() => {
              setProblem((problem += "/"));
            }}
          >
            <img
              className='division'
              src='https://freepikpsd.com/wp-content/uploads/2019/10/divide-symbol-png-Transparent-Images.png'
            />
          </button>
          <button
            className='btn'
            onClick={() => {
              setProblem((problem += "0"));
            }}
          >
            0
          </button>
          <button
            className='btn'
            onClick={() => {
              setProblem((problem += "*"));
            }}
          >
            <img
              className='multi'
              src='https://www.pinclipart.com/picdir/big/42-423258_multiplication-sign-png-clipart-x-icon-transparent-background.png'
              alt=''
            />
          </button>
          <button className='btn' onClick={evaluate}>
            =
          </button>
        </div>
      </article>
    </section>
  );
};
export default App;
