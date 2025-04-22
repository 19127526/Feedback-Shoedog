import RoutesPage from './routes/RoutePage.jsx'
import { motion } from 'framer-motion'
import {  useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react'
import HeaderImg from '/images/header-img.png'
import { disconnectSocket, getSocketClient, setUpSocketConnection } from './sockets/index.js'
import { EVENT_RECEIVE } from '@/constant/common.const.js'
import { notification } from 'antd'
import { MyContext } from '@/main.jsx'


function App() {
    const location = useLocation()
    const [key, setKey] = useState(0)
    const { data:billInfo, setData: setBillInfo } = useContext(MyContext);
    const billInfoTmp = useRef(billInfo)
    const socketClient = getSocketClient()
    const navigate = useNavigate()


    useEffect(() => {
        billInfoTmp.current = billInfo
    }, [billInfo])
    useEffect(() => {
        if (!socketClient) {
            setUpSocketConnection()
        } else {
            socketClient?.connect()
        }
    }, [])

    useEffect(() => {
        if (!socketClient) {
            return;
        }

        const onReceivedResultConnect = (body) => {
            if(!(body && body?.result === 0)) {
                notification.error({
                    message: body?.message,
                    placement: 'topRight'
                })
            }
            // if (interactive) {
            //     try {
            //         const manufacturerId = cookies.get(SESSION_KEY?.MANUFACTURER_ID);
            //         // lang nghe event tu Server
            //         socketClient.emit(
            //             'userStartInteractive',
            //             {
            //                 interactive: interactive?.interactive,
            //                 member_id: user?.member_id,
            //             },
            //             (data) => {},
            //         );
            //     } catch (err) {}
            // }
        }

        const onReceivedResultSendFeedback = (body) => {
            if (body && body?.result != null) {
                if(body?.result === 0) {
                    const bodyTmp = {
                        ...body.data,
                        note: JSON.parse(body.data?.note)
                    }
                    if(location.pathname !== '/') {
                        navigate('/')
                    }
                    if(!billInfoTmp.current) {
                        billInfoTmp.current = bodyTmp
                        setBillInfo(bodyTmp)
                    } else if(billInfoTmp.current?.id === bodyTmp?.id) {
                        return;
                    } else {
                        setBillInfo(bodyTmp)
                        navigate('/')
                    }
                }
                notification[body?.result === 0 ? 'info' : 'error']({
                    message: body?.message,
                    placement: 'topRight'
                })
            }
        }

        const onReceivedResultSendSubmitFeedback = (body) => {
            if (body && body?.result != null) {
                if(body?.result === 0) {
                    let bodyTmp = null
                    if(body?.data) {
                         bodyTmp = {
                            ...body.data,
                            note: JSON.parse(body.data?.note)
                        }
                    }
                    navigate('/success', {
                        state: {
                            data: bodyTmp
                        }
                    })
                    return;
                }
            }
            notification.error({
                message: body?.message,
                placement: 'topRight'
            })
        }



        socketClient.on(EVENT_RECEIVE.RESULT_CONNECT, onReceivedResultConnect)
        socketClient.on(EVENT_RECEIVE.RESULT_EVENT_SEND_FEEDBACK, onReceivedResultSendFeedback)
        socketClient.on(EVENT_RECEIVE.RESULT_EVENT_SEND_SUBMIT_FEEDBACK, onReceivedResultSendSubmitFeedback)
        return (() => {
            disconnectSocket()
            billInfoTmp.current= null;
            socketClient.off(EVENT_RECEIVE.RESULT_CONNECT, onReceivedResultConnect)
            socketClient.off(EVENT_RECEIVE.RESULT_EVENT_SEND_FEEDBACK, onReceivedResultSendFeedback)
            socketClient.off(EVENT_RECEIVE.RESULT_EVENT_SEND_SUBMIT_FEEDBACK, onReceivedResultSendSubmitFeedback)
        })
    }, [socketClient])


    useEffect(() => {
        setKey(prev => prev + 1) // Trigger remount on route change
    }, [location.pathname])

    return (
        <div
            className={`max-h-screen h-screen flex flex-col  bg-center ${location.pathname === '/success' ? 'bg-feedback_img bg-cover' : 'bg-feedback_color'} `}>
            {/*header*/}
            <div
                className={`flex justify-center   items-center  text-white h-16 md:h-28 lg:h-28 gap-[10px] lg:py-[3%] mt-[0%] lg:mt-[0%] md:py-[3%] py-[5%] px-[10%] ${location.pathname === '/success' ? '' : 'bg-feedback_color'}`}>
                <motion.div
                    key={key}
                    className="flex justify-center items-center h-16 "
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 25,
                        duration: 1,
                        delay: 0.4 // Adds a delay for smoother appearance
                    }}
                >
                    <img
                        className=" max-h-[80px] lg:max-h-[160px] md:max-h-[120px] cursor-pointer  my-2 md:mt-8 lg:mt-8"
                        src={HeaderImg} alt="logo shoedog" />
                    {/*<h1 className={`text-[42px] font-bold tracking[-0.06rem] leaing-[1rem] cursor-pointer ${location.pathname === '/success' ? 'text-white' : 'text-black'}`} onClick={() => navigate('/')}>SHOEDOG</h1>*/}
                </motion.div>
            </div>
            <RoutesPage />

        </div>
)
}

export default App
