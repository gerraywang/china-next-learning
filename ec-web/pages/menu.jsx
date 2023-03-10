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
        router.push("nyukamenu");
    }

    return (
        
        <div className="p-4">
            <div className="container">
                <ButtonLi click={clickMe} text={"入荷業務"} classProp={"btn btn-primary"}/>
                <Button onClick={clickMe}>出荷業務</Button>
                <Button onClick={clickMe}>棚卸業務</Button>
                <a href='/nyukamenu'>haha</a>
            </div>
        </div>
    );
}
