import React, {useState, useEffect } from "react";
import axios from 'axios';


const SalonStyle = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.178.232:8087/stylelist');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className='salonstyle' style={{ overflow: 'auto' }}>
      <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map((hair) => (
          <li style={{ flex: '0 0 25%',padding:'7px', margin: '5px', backgroundColor:'black' }}>
            <div>
              <img src={`http://192.168.178.232:8087/maskhairstyle/${hair.hair_id}.jpg`} alt="Image" width="180" height="216" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SalonStyle