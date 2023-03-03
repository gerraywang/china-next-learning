import { userService } from 'services';
import { Link } from 'components';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
    function clickMe() {
        router.push("/");
    }

    return (
        <div className="p-4">
            <div className="container">
               
               <label>
               <span> 999888</span>　
               <span> 01</span>　
               <br/>
               <br/>
               JAN: 
               <input name="myInput" />
               <br/> 
               <p>おいしい牛乳</p> 
               <br/> 
               <span> 9999</span>　
               期限：
               <input name="myInput" />
               <br/>
               指示数：
               <span> 112</span>　
               <span> 221</span>　
               <br/>
               実績数：
               <span> 112</span>　
               <span> 221</span>　
               <br/>
               入力数：
               <input name="myInput" style={{width:"100px"}}/>
               <input name="myInput" style={{width:"100px" }}/>
               <br/>
               </label>
               <div>
                <Button onClick={clickMe}>一覧</Button>
                <Button onClick={clickMe}>終了</Button>
                <Button onClick={clickMe}>確定</Button>
                </div>
            </div>
        </div>
    );
}
