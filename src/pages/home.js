import React, {useState} from 'react';
import DailyInfoCard from "../components/dailyInfoCard";
import Header from "../components/header";
import RoomInfoCard from "../components/roomInfoCard";
import style from "../style/home.module.css"
import {AiOutlinePlus} from "react-icons/ai"
import {BsGrid3X3Gap} from "react-icons/bs"
import data from "../data/roomCard.json"
import BottomSheet from '../components/bottomSheet';
import newRoomData from "../data/newRoom.json"

const Home = () => {
    const [itemsVisible, setItemsVisible] = useState(false);
    const [sheetVisible, setsheetVisible] = useState(false);
    const [sheetCreateRoom, setsheetCreateRoom] = useState(false);
    const [loaderVisibility, setloaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1)



    return (
        <>
            {loaderVisibility ? (
                <div 
                    style={{
                        position:"fixed",
                        top: "0",
                        right:"0",
                        bottom: "0",
                        left:"0",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                >
                    <img  src="/images/loader.gif" alt="" />
                </div>)
                : (
                    ""
                )
            }
            <Header />
            <div className={style.homeContainer}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={style.actionBtn}>
                <button onClick={() => setsheetVisible(true)}>
                    <AiOutlinePlus className="mr-2" />
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
            <BottomSheet 
                sheetTitle="start room"
                setsheetVisible={(item) => setsheetVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail={data.find(item => item.id === cardId)}
                setItemsVisible={(item) => setItemsVisible(item)}
                setsheetCreateRoom = {
                    (item) => {
                        setloaderVisibility(true);
                        setTimeout(() => {
                            setsheetCreateRoom(item)
                            setloaderVisibility(false)
                        }, 10000)
                    }
                }
            />
            <BottomSheet 
                sheetTitle="new room"
                setsheetVisible={(item) => setsheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item) => setItemsVisible(item)}
            />
        </>
    )
}

export default Home;