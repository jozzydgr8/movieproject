import {  useState } from "react";
import  ReactDOM  from "react-dom";
import { ContextData } from "../Context/ContextData";
import { SearchPage } from "./SearchPage";
export const Modal = ({open, onClose })=>{
    const [search, setSearch] = useState('');
    const [isloading, setIsloading] = useState(false)
    const {queryData, dispatch} = ContextData();



    const handleSearch = async (e)=>{
        dispatch({type:'queryData', payload:null})
        setIsloading(true);
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=89707361b16946b90801886bc1f0622c&query=${search}`);
        const json = await response.json();
        if(response.ok){
            dispatch({type:'queryData', payload:json.results});
            
        }
        setIsloading(false)
    }


    if(!open){
        return null
    }
        return ReactDOM.createPortal(
            <>
                <div  className="overlaystyle">
                    <div className="modalstyle ">
                          <span className="material-icons" onClick={onClose}>close_outline</span>

                            <form  className="d-flexses" role="search">
                            <input className=" form-control search-input me-2 " type="search" placeholder="Search movie" aria-label="Search" onChange={(e=>setSearch(e.target.value))}/>
                            <button className="btn btn-primary" type="submit" onClick={handleSearch} disabled={isloading}>search</button>
                            </form>
                            <SearchPage isLoading={isloading} queryData={queryData}/>
                    </div>

                </div>
            </>, document.getElementById('portal')
        )
    

}