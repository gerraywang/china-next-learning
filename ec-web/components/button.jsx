export default ButtonLi

function ButtonLi({ text, click, classProp }) {
    return (
        <button onClick={click} className={classProp}>
            {text}
        </button>
    );
}