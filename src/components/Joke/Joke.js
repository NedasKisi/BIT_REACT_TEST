const Joke = (props) => {
    return (
      <li>
        {props.id}{props.setup}{props.delivery}{props.joke}
      </li>
    );
  };
  
  export default Joke;