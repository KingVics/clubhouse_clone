import React, {useState} from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


//Component
import BackBtn from "../components/backBtn"
import NextBtn from "../components/nextBtn"


//CSS
import style from "../style/phoneConfirmation.module.css"

//CSS END


const PhoneConfim = () => {
    const [value, setValue] = useState();
    return (
        <div className={style.phoneConfirmationContainer}>
            <BackBtn exact="true" to="/" />
            <h1>Enter your phone</h1>
            <div>
                <PhoneInput
                    country={'us'}
                    value={value}
                    onChange={setValue}

                />
            </div>
            
            <p>By entering your number, you're agreeing to our <span>Terms of Service and Privacy Policy.</span>
            </p>
            <NextBtn exact="true" to="/code_confirm" text="Next" />

        </div>

    )
}

export default PhoneConfim;