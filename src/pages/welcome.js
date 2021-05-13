import style from "../style/welcome.module.css"
import {Link} from "react-router-dom"

const Welcome = () => {
    return (
        <div className={style.welcomeContainer}>
            <h1>Welcome</h1>
            <div className={style.welcomeInfo}>
                <p>
                    We're working hard to get clu bhouse ready for everyone! 
                    While we adding the finishing touches, this feature comes with 
                    adding people and chat room like and follow.
                    We have to ensure nothing breaks!!!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie lacinia hendrerit. 
                    Fusce et justo nisl. Ut diam enim, elementum et maximus a, pharetra a urna. Nullam aliquam 
                    vitae nisi dignissim efficitur. Curabitur pulvinar augue nec lacus dapibus vehicula. Maecenas in arcu commodo, 
                    ornare odio in, posuere ligula.
                </p>
                <p>Victor Okoromi & the clubhouse team</p>
                <div className={style.actionButton}>
                    <Link exact to="/invite" className="primaryBtn d-flex align-items-center mb-3">
                        Get your username
                    </Link>
                    <Link>
                        Have an invite text? Sign in
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Welcome;
