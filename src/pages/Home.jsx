
import './Home.css';

const Home = () => (
  <>
    <h1>React Hooks</h1>
    <p>
      <strong>React Hooks are functions that allow functional components to have state and lifecycle methods. They were introduced in React version 16.8 as a way to simplify the management of state and side effects in functional components.</strong>
    </p>
    <p>
      React Hooks can be used to perform a wide range of tasks, such as managing state, handling lifecycle methods, and making asynchronous requests.
    </p>
    <h3>Most used React Hooks</h3>
    <ul className='hooks-list'>
      <li><strong>useState</strong>: This Hook is used to manage state in a functional component. It takes an initial state value as an argument and returns an array with two values: the current state value and a function to update the state.</li>
      <li><strong>useEffect</strong>: This Hook is used to perform side effects in a functional component. It takes a function as an argument and runs it after every render. It can also take a cleanup function that runs before the component unmounts.</li>
      <li><strong>useRef</strong>: This Hook is used to create a reference to a DOM element or a value in a functional component. It returns a mutable object that can be updated without causing a re-render.</li>
      <li><strong>useMemo</strong>: This Hok is used to used to memoize a value that is expensive to compute. It allows you to optimize the performance of your application by avoiding unnecessary re-computations of a value</li>
      <li><strong>useCallback</strong>: This Hook is used to memoize a function in a functional component. It takes a function and an array of dependencies as arguments and returns a memoized version of the function.</li>
      <li><strong>useContext</strong>: This Hook is used to access the context in a functional component. It takes a context object as an argument and returns the current context value</li>
    </ul>
  </>
)

export default Home
