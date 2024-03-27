import React from "react";

import { Link, useLoaderData} from "react-router-dom";
import {StarRating} from "../Pages/StarRating";

export const Template = React.memo(()=>{
    const queryData = useLoaderData();

    console.log(queryData)
    return(
        <>
         <section className="templatesection">
         <nav className="navbar ">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" >{`Back to moviebox>>`}</Link>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row templaterow">
                    <div className="col-md-6">
                        <img src={`https://image.tmdb.org/t/p/original/${queryData.poster_path}`} alt="poster" />
                    </div>
                    <q className="col-md-6">{queryData.tagline}</q>
                </div>

                <h1>{queryData.title}</h1>
                {
                    queryData.genres.map((genre)=>(
                        <span key={genre.id}>{`${genre.name} | `}</span>
                    ))
                }
                <p>release date: {queryData.release_date}</p>
                <p>
                    {queryData.overview}
                </p>


                ratings: <StarRating vote={queryData.vote_average} />
            </div>

            <footer><small>© jozzydgr8 movie box</small></footer>
        </section>
        </>

    )
})






