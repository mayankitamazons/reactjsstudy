import axios from 'axios';
import { useEffect ,useState} from 'react';

import '../../App.css';
import { Link } from 'react-router-dom';

const App=()=>{
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
        <li className='App-link' key={item.node_id}>
           <Link to={`/category/${item.node_id}`}>{item.name+" "+item.full_name}</Link></li>
      ))}
      </ul>
    </div>
  );
}

export default App;
