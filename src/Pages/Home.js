import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {ContextData} from '../Context/ContextData'
import { FilmCol } from "./FilmCol";
import { Modal } from "./Modal";

export const Home = ()=>{
    const {dispatch, data} = ContextData()
    const componentRef = useRef(null)
    const [open, setOpen] = useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89707361b16946b90801886bc1f0622c');

            const json = await response.json();
            if(response.ok){
                console.log(json.results)
                dispatch({type:'getData', payload:json.results });
            }
        }
        fetchData();
        return ()=>{
            dispatch({type:'getData', payload:null})
        }
    },[dispatch])

    return(
        <>
        <section id="header-section">
            <nav className="navbar ">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">MovieBox</Link>
                    <button onClick={()=>{setOpen(true)}} className="btn btn-primary" type="submit">Search</button>
                    
                    
                    
                </div>
            </nav>
            <div className="container-fluid">
            <p>
                <q>
                With the price on his head ever increasing,
                 John Wick uncovers a path to defeating The High Table.
                  But before he can earn his freedom, Wick must face off 
                  against a new enemy with powerful alliances across the
                   globe and forces that turn old friends into foes.
                </q>


            </p>
            </div>
        

        </section>
        <div>
            <Modal open={open} componentRef={componentRef}  onClose={()=>{setOpen(false)}}/>
           
        </div>
        <main>
            <div className="container-fluid">
            <h2>Featured movies</h2>
            <div className="filmcolgrid">
            {data && data.slice(0, 10).map((data)=>(
                <FilmCol key={data.id} data={data}/>
            ))}
            </div>

            </div> 
        </main>
        <footer><small>© jozzydgr8 movie box</small></footer>
        </>
    )
}
