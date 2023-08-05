// export default App;
import React from "react";
import Joke from "./Joke";
import JokesData from "./JokesData";

export default function App(){

    const jokeElements = JokesData.map(joke => {
      return <Joke setup={joke.setup} punchline ={joke.punchline}></Joke>
    })
    return(
      <div>
    {jokeElements}
    </div>
  )
}
