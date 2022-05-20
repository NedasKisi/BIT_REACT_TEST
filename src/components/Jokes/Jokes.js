import { useState, useEffect } from "react";
import Joke from "../Joke/Joke";

const Jokes = () => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.jokes);
          console.log(result);
        },

        (error) => {
          setErrorMsg(error.message);
        }
      );
  }, []);

  return (
        <>
        <div className="wrapper">
            <h2>Jokes</h2>
            {data.length && (
                <div>
                    {data.map((item) =>
                    <Joke key={item.id} type={item.type} delivery={item.delivery} setup={item.setup} joke={item.joke} category={item.category}/>
                    )}
                </div>
            )}
        </div>
        </>


  );
};

export default Jokes;