import RoutesPage from './routes/RoutePage.jsx'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
    const location = useLocation()
    const [key, setKey] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        setKey(prev => prev + 1) // Trigger remount on route change
    }, [location.pathname])
    return (
        <div
            className={`flex flex-col h-screen  bg-center ${location.pathname == '/success' ? 'bg-feedback_img bg-cover' : 'bg-feedback_color'}`}>
            {/*header*/}
            <div
                className={`flex justify-start items-center  text-white h-16 gap-[10px] py-[3%] px-[10%] ${location.pathname == '/success' ? '' : 'bg-feedback_color'}`}>
                <motion.div
                    key={key}
                    className='flex justify-center items-center h-16  text-white'
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 25,
                        duration: 1,
                        delay: 0.2 // Adds a delay for smoother appearance
                    }}
                >
                    <h1 className='text-white text-[42px] font-bold tracking[-0.06rem] leading-[1rem] cursor-pointer' onClick={() => navigate('/')}>SHOEDOG</h1>
                </motion.div>
            </div>
            <RoutesPage />
        </div>
    )
}

export default App
