import style from "./Button.module.css"

function Button(props){
    return(
        <button onClick={props.onClick} className={style.button}>{props.title}</button>
    )
}

export default Button