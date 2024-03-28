import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import {Root} from './Layout/Root'
import {Template} from './Layout/Template'
//pagges
import {  Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { useMemo } from "react";




function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/movieproject" element={<Root/>} errorElement={<NotFound/>} >
      <Route index element={<Home/>} />
      <Route path=":id" element={<Template/>}
          loader=  { useMemo(()=>(
            async ({params})=>{
              const {id} = params
              const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=89707361b16946b90801886bc1f0622c`);
              const json = await response.json();
              if(response.ok){
                  return json
              }
              if(!response.ok){
                  throw Error('cant load data')
              }
          
          }
    ),[]) 
        }
          
      />
      <Route path="*" element={<Navigate to={'/movieproject'} />} />
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
