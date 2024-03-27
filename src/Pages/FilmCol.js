import { Link } from "react-router-dom"
import {StarRating} from '../Pages/StarRating'

export const FilmCol = ({data})=>{
    return(
        <>
            <Link to={`${data.id}`}>
                    <article>
                    <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="poster" />
                    <h5>{data.title}</h5>
                    <p>release date {data.release_date}</p>
                    {<StarRating vote={data.vote_average}/>}
                    </article>
            
            </Link>
        </>
    )
}