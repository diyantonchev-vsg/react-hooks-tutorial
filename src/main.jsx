// import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';

import ClassComponent from './examples/ClassComponent';
import ComponentWithHooks from './examples/ComponentWithHooks'
import UseStateExample from './examples/UseStateExample';
import UseEffectExample from './examples/UseEffectExample';
import UseRefExample from './examples/UseRefExample.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'old',
        element: <ClassComponent />,
      },
      {
        path: 'new',
        element: <ComponentWithHooks />,
      },
      {
        path: 'useState',
        element: <UseStateExample />,
      },
      {
        path: 'useEffect',
        element: <UseEffectExample />,
      },
      {
        path: 'useRef',
        element: <UseRefExample />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}  />
  // </React.StrictMode>
);
