import { userService } from 'services';
import { Link } from 'components';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ButtonLi from '../components/button';

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
    width:250px;
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
    function nyuka() {
        router.push("nyukamenu");
    }
    function syuka() {
        alert("出荷業務へ、今回は実装しません！");
    }
    function tanaoroshi() {
        alert("棚卸業務へ、今回は実装しません！");
    }
    function modoru() {
        router.push("center");   
    }

    return (
        
        <div className="p-4" style={{alignItems:'center'}}>
            <div className="container">
                <div style={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
                    <Button onClick={nyuka}>入荷業務</Button>
                </div>
                <div style={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
                    <Button onClick={syuka}>出荷業務</Button>
                </div>
                <div style={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
                    <Button onClick={tanaoroshi}>棚卸業務</Button>
                </div>
                <Button style={{width: '100px'}} onClick={modoru}>戻る</Button>
            </div>
        </div>
    );
}
