import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Home></Home>
      <div className='allQuestions-container'>
        <div>
          <h1>
            How Does React Works?
          </h1>
          <p><strong>
            What Is React & How Does It Actually Work?
            ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

            It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.

            This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</strong></p>
        </div>
        <div>
          <h1>
            What Is The Difference Between Props Vs State?
          </h1>
          <p><strong>
            React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM.

            How can we access data from the previous component if the data is just being flowed from components to components? The answer is props. React uses data transmission props that we need to transfer to various components.

            The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.

            A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.</strong></p>
        </div>
        <div>
          <h1>
            In What Other Sectors The "useEffect()" Is Used Except Data Load?
          </h1>
          <p><strong>
            1. Running on state change: validating input field <br />
            2. Running on state change: live filtering<br />
            3. Running on state change: trigger animation on new array value<br />
            4. Running on props change: update paragraph list on fetched API data update <br />
            5. Running on props change: updating fetched API data to get BTC updated price.</strong></p>
        </div>

      </div>
    </div>
  );
}

export default App;
