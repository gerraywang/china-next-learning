import { userService } from 'services';
import { Link } from 'components';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import DateInput from 'components/DateInput';
import { useState } from 'react';

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
};

const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

Button.defaultProps = {
    theme: "blue"
};
  
export default Home;

function Home() {
    const router = useRouter();
    function menu() {
        router.push("menu");   
    }
    function modoru() {
        router.push("login");   
    }
   
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');
    
    //api/my-api?center_no=

  const handleBlur = async () => {
    const url = `/api_haha/api/v1/center?center_no=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    /*const response = await fetch('https://ec-warehouse-et76x6ix4q-an.a.run.app/api/v1/center?center_no=${name}', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    
    });
    const data = await response.json();*/
    setResponse(data);
    //alert(data);
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

    


    return (
        <div className="p-4">
            <div className="container">
               
               <label>
               センター
               <br/> 
               <input style={{ width: '200px' }} value={name} onChange={handleNameChange}  onBlur={handleBlur}/>
               <br/> 
               </label>
                {response && (
                  <p>センター名: {JSON.stringify(response.CenterInfo.center_name)}</p>
                )}
               <div>
            
                <Button onClick={modoru}>戻る</Button>


                <Button onClick={menu}>次へ</Button>
                </div>
            </div>
        </div>
    );
}
