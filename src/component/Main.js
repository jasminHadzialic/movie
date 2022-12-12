import react, {useState, useEffect } from 'react';
import Card from './Card';

/*const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=6a680670da9fa87f36e5ef8c78fbb74b';*/
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["MOVIES","TVSHOWS"];

const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    const [suggest, setSuggest] = useState([]);

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    const getData=(movieType)=>{
        if(movieType=="MOVIES")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="TVSHOWS")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
       
        setUrl(url);

    }

    const searchMovie=(event)=>{
 
      let searchval = event.target.value;
      if(searchval.length > 0)
      {
        url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
        setUrl(url);
        
         
      }
    }

    const onSearch = (e) => {
       
        setSearch(e);
        
        
         }

  
            /*
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");*/

    return(
        <>
            <div className='header'>
                <nav>
                    <ul>
                        {
                            arr.map((value, pos)=>{
                                return(
                                    <li>
                                       <a href="#" key={pos} name={value} onChange={(e)=>{getData(e.target.name >2)}}>{value}</a>
                                    </li>
                                   )
                            })
                        }
                        
                    </ul>
                </nav>
                <form>
                    <div className='search-btn'>  
                    <input type="text" placeholder="Enter Movie Name" 
                        className="inputText" onChange={(e)=>{onSearch(e.target.value)}} value={search} onKeyPress={searchMovie}/>
                      
                        <button>search</button>
                    </div>
                </form>
            </div>
            <div className='container'>
              {
              movieData.slice(0, 10).map((res,pos)=>{
                
                return(
                    <Card info={res} key={pos}/>
                )
              })
              }
            </div>
        </>
    )
}
export default Main