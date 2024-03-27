import { Link } from "react-router-dom"

export const SearchPage = ({isLoading, queryData})=>{
    if(isLoading){
        return(
            <div>
                ...loading
            </div>
        )
    }
    if(queryData == null){
        return(
            <div>
               ¯\_(ツ)_/¯
            </div>
        )
    }
    if(queryData.length == 0){
        return(
            <div>
               oops cannot find data
            </div>
        )
    }

    return (
        <div>
            {
                queryData && queryData.map((data)=>(
                            <Link to={`${data.id}`} key={data.id} className="row modallink">
                                 <p className="col-6">{data.title}</p>
                               <img className="col-6" alt="img" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} />
                            </Link>
                            
                        ))
            }
        </div>
    )
    
}