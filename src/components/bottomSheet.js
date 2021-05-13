import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import style from "../style/bottomSheet.module.css"
import StartRoom from "./bottomSheet/startRoom"
import NewRoom from "./bottomSheet/newRoom"

const BottomSheet = (props) => {
    return (
        <SwipeableBottomSheet 
            open={props.sheetVisible}
            onChange={() => {
                props.setsheetVisible(!props.sheetVisible)
                props.setItemsVisible(true)
            }}
            fullScreen={props.sheetTitle === 'room detail' ? true : false}
        >
            <div className={style.bottomSheetContainer}
                style={{backgroundColor: props.sheetTitle === 'profile' ? 'transparent' : ''}}
            >
            {props.sheetTitle === "new room" ? (
                <NewRoom 
                    cardDetail={props.cardDetail}
                    setsheetVisible={(item) => {
                        props.setsheetVisible(item)
                        props.setItemsVisible(true)
                    }}
                />
                )
                : props.sheetTitle === "start room" ? (
        
                        <StartRoom
                            setsheetCreateRoom={props.setsheetCreateRoom}
                            setsheetVisible={(item) => {
                                props.setsheetVisible(item)
                                props.setItemsVisible(true)
                            }}
                        />
                )
                : ("")
            }
            </div>
        </SwipeableBottomSheet>

    )
}

export default BottomSheet;