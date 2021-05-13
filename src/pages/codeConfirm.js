import BackBtn from "../components/backBtn";
import NextBtn from "../components/nextBtn";
import style from "../style/phoneConfirmation.module.css"


const CodeConfirm = () => {
    return (
        <div className={style.phoneConfirmationContainer}>
            <BackBtn exact="true" to="/get_username"/>
            <div className="text-center">
                <h1 style={{width: "100%", maxWidth:"200px", marginBottom: "1em"}}>
                    Enter the code we just texted you
                </h1>
                <input type="text" 
                    style={{
                        width: "100%", 
                        border: "none", 
                        textAlign: "center", 
                        outline:"none"
                    }}
                />
                <p className="mt-2">Didn't receive it? <span>Tap to resend</span></p>
            </div>
            <NextBtn  eexact="true" to="/allow_notification" text="Next"/>

        </div>

    )
}

export default CodeConfirm;