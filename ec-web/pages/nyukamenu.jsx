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
    width:250px;
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
        router.push("nyukabi");
    }

    return (
        <div className="p-4">
            <div className="container">
                <div style={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
                    <h4>入荷メニュー画面</h4>
                </div>
                <div style={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
                    <Button onClick={clickMe}>入荷検品</Button>
                </div>
                <div style={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
                    <Button onClick={clickMe}>入庫</Button>
                </div>
            </div>
        </div>
    );
}
