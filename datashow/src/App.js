import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [selectAddress, setSelectAddress] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [imagePath, setImagePath]=useState('')
  const [isAddressDropdownOpen, setIsAddressDropdownOpen] = useState(false);

  const handleAddressSelect = (address) => {
    setSelectAddress(address);
    setIsAddressDropdownOpen(false);
  }

  const handleMonthButtonClick = (month) => {
    setSelectedMonth(month);
  };

  const handleAttributeButtonClick = (attribute) => {
    setSelectedAttribute(attribute);
  };

  const handleSearchButtonClick = () => {
    const newImagePath = `data/${selectAddress}/${selectedMonth}/${selectedAttribute}.png`;
    setImagePath(newImagePath);
    console.log({selectedMonth})
    console.log({selectedAttribute})
    console.log({imagePath})
  };

  const toggleAddressDropdown = () => {
    setIsAddressDropdownOpen(!isAddressDropdownOpen);
  }


  return (
    <div>
      <div>
        <h3>가구 주소</h3>
        <div className="dropdown">
        <button onClick={toggleAddressDropdown}>주소 선택 &nbsp; 🔽</button>
          {isAddressDropdownOpen && (
            <ul className="dropdown-list"> 
              <li onClick={() => handleAddressSelect('신효천 1길 2')} className={selectAddress === '신효천 1길 2' ? 'selected' : ''}>신효천 1길 2</li>
              <li onClick={() => handleAddressSelect('신효천 1길 5')} className={selectAddress === '신효천 1길 5' ? 'selected' : ''}>신효천 1길 5</li>
              <li onClick={() => handleAddressSelect('신효천 1길 10')} className={selectAddress === '신효천 1길 10' ? 'selected' : ''}>신효천 1길 10</li>
              <li onClick={() => handleAddressSelect('신효천 1길 11')} className={selectAddress === '신효천 1길 11' ? 'selected' : ''}>신효천 1길 11</li>
              <li onClick={() => handleAddressSelect('신효천 1길 14')} className={selectAddress === '신효천 1길 14' ? 'selected' : ''}>신효천 1길 14</li>
              <li onClick={() => handleAddressSelect('신효천 1길 15')} className={selectAddress === '신효천 1길 15' ? 'selected' : ''}>신효천 1길 15</li>
              <li onClick={() => handleAddressSelect('신효천 1길 17')} className={selectAddress === '신효천 1길 17' ? 'selected' : ''}>신효천 1길 17</li>
              <li onClick={() => handleAddressSelect('신효천 1길 18')} className={selectAddress === '신효천 1길 18' ? 'selected' : ''}>신효천 1길 18</li>
              <li onClick={() => handleAddressSelect('신효천 1길 20')} className={selectAddress === '신효천 1길 20' ? 'selected' : ''}>신효천 1길 20</li>
              <li onClick={() => handleAddressSelect('신효천 1길 21')} className={selectAddress === '신효천 1길 21' ? 'selected' : ''}>신효천 1길 21</li>
              <li onClick={() => handleAddressSelect('신효천 1길 26')} className={selectAddress === '신효천 1길 26' ? 'selected' : ''}>신효천 1길 26</li>
              <li onClick={() => handleAddressSelect('신효천 1길 27')} className={selectAddress === '신효천 1길 27' ? 'selected' : ''}>신효천 1길 27</li>
              <li onClick={() => handleAddressSelect('신효천 1길 30')} className={selectAddress === '신효천 1길 30' ? 'selected' : ''}>신효천 1길 30</li>
              <li onClick={() => handleAddressSelect('신효천 1길 32')} className={selectAddress === '신효천 1길 32' ? 'selected' : ''}>신효천 1길 32</li>
              <li onClick={() => handleAddressSelect('신효천 1길 33')} className={selectAddress === '신효천 1길 33' ? 'selected' : ''}>신효천 1길 33</li>
              <li onClick={() => handleAddressSelect('신효천 1길 34')} className={selectAddress === '신효천 1길 34' ? 'selected' : ''}>신효천 1길 34</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-1')} className={selectAddress === '신효천 1길 35-1' ? 'selected' : ''}>신효천 1길 35-1</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-2')} className={selectAddress === '신효천 1길 35-2' ? 'selected' : ''}>신효천 1길 35-2</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-3')} className={selectAddress === '신효천 1길 35-3' ? 'selected' : ''}>신효천 1길 35-3</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-5')} className={selectAddress === '신효천 1길 35-5' ? 'selected' : ''}>신효천 1길 35-5</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-6')} className={selectAddress === '신효천 1길 35-6' ? 'selected' : ''}>신효천 1길 35-6</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-8')} className={selectAddress === '신효천 1길 35-8' ? 'selected' : ''}>신효천 1길 35-8</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-10')} className={selectAddress === '신효천 1길 35-10' ? 'selected' : ''}>신효천 1길 35-10</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-11')} className={selectAddress === '신효천 1길 35-11' ? 'selected' : ''}>신효천 1길 35-11</li>
              <li onClick={() => handleAddressSelect('신효천 1길 35-12')} className={selectAddress === '신효천 1길 35-12' ? 'selected' : ''}>신효천 1길 35-12</li>
              <li onClick={() => handleAddressSelect('신효천 1길 36')} className={selectAddress === '신효천 1길 36' ? 'selected' : ''}>신효천 1길 36</li>
              <li onClick={() => handleAddressSelect('신효천 1길 38')} className={selectAddress === '신효천 1길 38' ? 'selected' : ''}>신효천 1길 38</li>
              <li onClick={() => handleAddressSelect('신효천 1길 40')} className={selectAddress === '신효천 1길 40' ? 'selected' : ''}>신효천 1길 40</li>
              <li onClick={() => handleAddressSelect('신효천 1길 41')} className={selectAddress === '신효천 1길 41' ? 'selected' : ''}>신효천 1길 41</li>

              <li onClick={() => handleAddressSelect('신효천 2길 9')} className={selectAddress === '신효천 2길 9' ? 'selected' : ''}>신효천 2길 9</li>
              <li onClick={() => handleAddressSelect('신효천 2길 11')} className={selectAddress === '신효천 2길 11' ? 'selected' : ''}>신효천 2길 11</li>
              <li onClick={() => handleAddressSelect('신효천 2길 17')} className={selectAddress === '신효천 2길 17' ? 'selected' : ''}>신효천 2길 17</li>
              <li onClick={() => handleAddressSelect('신효천 2길 18')} className={selectAddress === '신효천 2길 18' ? 'selected' : ''}>신효천 2길 18</li>
              <li onClick={() => handleAddressSelect('신효천 2길 18-1')} className={selectAddress === '신효천 2길 18-1' ? 'selected' : ''}>신효천 2길 18-1</li>
              <li onClick={() => handleAddressSelect('신효천 2길 19')} className={selectAddress === '신효천 2길 19' ? 'selected' : ''}>신효천 2길 19</li>
              <li onClick={() => handleAddressSelect('신효천 2길 23')} className={selectAddress === '신효천 2길 23' ? 'selected' : ''}>신효천 2길 23</li>
              <li onClick={() => handleAddressSelect('신효천 2길 25')} className={selectAddress === '신효천 2길 25' ? 'selected' : ''}>신효천 2길 25</li>
              <li onClick={() => handleAddressSelect('신효천 2길 26')} className={selectAddress === '신효천 2길 26' ? 'selected' : ''}>신효천 2길 26</li>
              <li onClick={() => handleAddressSelect('신효천 2길 38')} className={selectAddress === '신효천 2길 38' ? 'selected' : ''}>신효천 2길 38</li>
              <li onClick={() => handleAddressSelect('신효천 2길 40')} className={selectAddress === '신효천 2길 40' ? 'selected' : ''}>신효천 2길 40</li>
              <li onClick={() => handleAddressSelect('신효천 2길 40-1')} className={selectAddress === '신효천 2길 40-1' ? 'selected' : ''}>신효천 2길 40-1</li>
              <li onClick={() => handleAddressSelect('신효천 2길 48')} className={selectAddress === '신효천 2길 48' ? 'selected' : ''}>신효천 2길 48</li>

              <li onClick={() => handleAddressSelect('신효천 3길 5')} className={selectAddress === '신효천 3길 5' ? 'selected' : ''}>신효천 3길 5</li>
              <li onClick={() => handleAddressSelect('신효천 3길 11')} className={selectAddress === '신효천 3길 11' ? 'selected' : ''}>신효천 3길 11</li>
              <li onClick={() => handleAddressSelect('신효천 3길 12')} className={selectAddress === '신효천 3길 12' ? 'selected' : ''}>신효천 3길 12</li>
              <li onClick={() => handleAddressSelect('신효천 3길 15')} className={selectAddress === '신효천 3길 15' ? 'selected' : ''}>신효천 3길 15</li>
              <li onClick={() => handleAddressSelect('신효천 3길 19')} className={selectAddress === '신효천 3길 19' ? 'selected' : ''}>신효천 3길 19</li>
              <li onClick={() => handleAddressSelect('신효천 3길 20')} className={selectAddress === '신효천 3길 20' ? 'selected' : ''}>신효천 3길 20</li>
              <li onClick={() => handleAddressSelect('신효천 3길 23')} className={selectAddress === '신효천 3길 23' ? 'selected' : ''}>신효천 3길 23</li>
              <li onClick={() => handleAddressSelect('신효천 3길 24')} className={selectAddress === '신효천 3길 24' ? 'selected' : ''}>신효천 3길 24</li>
              <li onClick={() => handleAddressSelect('신효천 3길 29')} className={selectAddress === '신효천 3길 29' ? 'selected' : ''}>신효천 3길 29</li>
            </ul>
          )}
        </div>
        <h3>월</h3>
      </div>
      <div className='direc1'>
        <button onClick={() => handleMonthButtonClick('1월')}>1월</button>
        <button onClick={() => handleMonthButtonClick('2월')}>2월</button>
        <button onClick={() => handleMonthButtonClick('3월')}>3월</button>  
        <button onClick={() => handleMonthButtonClick('4월')}>4월</button>
        <button onClick={() => handleMonthButtonClick('5월')}>5월</button>
        <button onClick={() => handleMonthButtonClick('6월')}>6월</button>
        <button onClick={() => handleMonthButtonClick('7월')}>7월</button>
        <button onClick={() => handleMonthButtonClick('8월')}>8월</button>
        <button onClick={() => handleMonthButtonClick('9월')}>9월</button>
      </div>
      <div>
        <h3>종류</h3>
      </div>
      <div className='direc2'>
        <button onClick={() => handleAttributeButtonClick('전력사용량')}>전력사용량</button>
        <button onClick={() => handleAttributeButtonClick('전력소비+충전합계')}>전력소비+충전합계</button>
        <button onClick={() => handleAttributeButtonClick('태양광전력충전량')}>태양광전력충전량</button>
      </div>
      <div>
       <button onClick={handleSearchButtonClick}>검색</button>
      </div>
      <div>
        <h2>현재 주소 : {selectAddress}<br></br>현재 월 : {selectedMonth}<br></br>현재 그래프 : {selectedAttribute}</h2>
      </div>
      <img src={imagePath} alt="주소/월/종류를 선택하세요"></img>
    </div>
  );
}
export default App;