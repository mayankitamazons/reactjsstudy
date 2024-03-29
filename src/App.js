import './App.css';
import { useEffect ,useState} from 'react';
import axios from 'axios';


function App() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
        try{
          const response=await axios.get('https://api.github.com/users/mralexgray/repos');
          setData(response.data);

        }
        catch(err){
          console.error('Error fetching data:', err);
        }
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <ul className='App-header'>
      {data.map((item)=>(
        <li className='App-link' key={item.node_id}>{item.name+" "+item.full_name}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
