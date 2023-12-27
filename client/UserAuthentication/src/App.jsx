import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes
} from 'react-router-dom';

import Register from './pages/Register.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<Register/>}>
    <Route path='register' element={<Register/>}/>
  </Route>
));

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
