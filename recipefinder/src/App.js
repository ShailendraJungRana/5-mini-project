import React, {useEffect,useState, useRef } from 'react';
import './App.css';

function App() {
  const [ingredientList,updateIngredientList] = useState([]);

  const [loading,setLoading] = useState(false);

  const inputRef = useRef(null);

  const API_KEY = "23e5dc2c9d15c03af5f283a1ba444f21";

  const API_ID ="e6b969ca";

  const search = ()=>{

    searchForRecipe(inputRef.current.value);
    inputRef.current.value=""; 
  }

  //name + 'goes to office'
  //`${name} using templete strings`

  const searchForRecipe =(query)=>{
    setLoading(true);
    let url=`search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;     //fetch is promise can used for api or synchronous calls 

    fetch(url)     //.then is basically getting result of fetch    
    .then(response =>{  // In case, if response fail or result fail catch operator is used 
      return response.json();

    })

    //the result of respons.json inside of final
    .then(res =>{
      console.log(res.hits);
      updateIngredientList(res.hits);
      setLoading(false);
    })
    .catch(err=> {console.log("error", err);
    setLoading(false)}
    );
    //dependencies of useEffect

  }
 
  useEffect(() =>{ 
    searchForRecipe("Chicken");
  },[]); 

  
  return (
    <div className="App">
       <header className='App-header'>
        <div className='InputWrapper'>
          <input ref={inputRef} placeholder='Enter you recipe'/>
          <button onClick={search}> search</button>
        </div>
       { loading && <p>Loading...</p>}
        <div className='Wrapper'>
          {ingredientList.map((item)=>{
            return(
              <div key={item.recipe.label} className='Ingredient'>
                <span>{item.recipe.label}</span>
                <img src={item.recipe.image}/>
                <div className='Steps'>
                {item.recipe.ingredientLines.map((step)=>{
                  return <p>{step}</p>;
                })}
                </div> 
                </div>
            )
          })}


        </div>
       </header>
    </div>
  );
}

export default App;
