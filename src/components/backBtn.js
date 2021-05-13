import {Link} from "react-router-dom"
import {IoChevronBack} from "react-icons/all"
//CSS
import style from "../style/phoneConfirmation.module.css"

const BackBtn = (props) => {
    return (
        <Link exact to={props.to} className={style.backBtn}>
            <IoChevronBack />
        </Link>
    )
}

export default BackBtn;