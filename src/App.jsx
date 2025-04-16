import RoutesPage from './routes/RoutePage.jsx'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HeaderImg from '/images/header-img.png'
import { SocketClient } from './sockets/index.js'



function App() {
    const location = useLocation()
    const [key, setKey] = useState(0)
    const navigate = useNavigate()

    const { socketClient, setUpSocketConnection } = SocketClient()

    useEffect(() => {
        if (!socketClient) {
            setUpSocketConnection()
        } else {
            socketClient?.connect()
        }
    }, [])

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
