import {Link} from "react-router-dom"
import {MdNavigateNext} from "react-icons/all"


const NextBtn = (props) => {
    return (
        <Link exact to={props.to}className="primaryBtn d-flex align-items-center">
            {props.text} <MdNavigateNext className="svg"/>
        </Link>
    )
}

export default NextBtn;