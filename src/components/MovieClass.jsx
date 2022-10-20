import React, { Component } from 'react';



class MovieClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies: [],
        };
    }
    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=qUiJLDJ6GsiheUz4yOJhMpGI7h9FwMAz")
        .then((response) => response.json())
        .then((movies) => {
            // console.log("movies:", "movies.results");
            this.setState({movies: movies.results});
        })
        .catch((error) => console.log(error));
    }
    render() {
        return (
            <div style={{marginTop: "5rem"}}>
               {this.state.movies.map((movie, index) =>
               (<div style={{textAlign: "center"}} key={index}>
                <p><strong>Movie Review Summary: </strong><br/>{movie.headline}.</p>
                <img className="responsive" alt="mymovie" src={movie.multimedia?.src}/>
                <p style={{paddingTop: "1rem"}}><strong>Title: </strong>{movie.display_title}</p>
                <p><strong>Author: </strong>{movie.byline}</p>
                <p><strong>Critics: </strong>{movie.critics_pick}</p>
                <hr style={{border: "1px solid 	black",
                marginRight: "15%",marginLeft: "15%", 
                justifyItems: "center", marginBottom: "3rem", 
                marginTop: "2rem"}}/>
                
               </div>))}
            </div>
        );
    }
}

export default MovieClass;
