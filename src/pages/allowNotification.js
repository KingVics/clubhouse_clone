import { Link } from "react-router-dom"
import style from "../style/phoneConfirmation.module.css"


const AllowNotification = () => {
    return (
        <div className={style.phoneConfirmationContainer}>
            <div className="text-center">
                <h1 className="mb-4">Last Important Step!</h1>
                <h1 className="mb-3">Enable notifications to know when people are talking</h1>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h3>"Clubhouse" Would Like to Send You Notification </h3>
                        <p>Notification may include alerts, sounds, and icon badges</p>
                    </div>
                    <div className={style.allowBtn}>
                        <Link exact to="/">
                            Don't Allow
                        </Link>
                        <Link exact to="/home">
                            Allow
                        </Link>
                        <img src="/images/handIcon.svg" alt="" 
                        className={style.handIcon}/>
                    
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AllowNotification;