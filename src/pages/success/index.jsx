import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ButtonDetailComponent from '@/components/button-detail/index.jsx'
import { DoubleRightOutlined, PicRightOutlined } from '@ant-design/icons'
import { MyContext } from '@/main.jsx'

const SuccessPage = () => {
    const navigate = useNavigate()
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const location  = useLocation()
    const { data: billInfo, setData: setBillInfo } = useContext(MyContext);
    const billInfoNext = location.state?.data || null;
    const [countdown, setCountdown] = useState({
        isShow: !!billInfoNext,
        count: 5
    })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > window.innerHeight) {
                console.log('Landscape')
            } else {
                console.log('Portrait')
            }
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if(countdown.isShow)  {
            const interval = setInterval(() => {
                setCountdown((prev) => ({
                    isShow: prev.isShow,
                    count: prev.count -1
                }))
            }, 1000)

            const timeout = setTimeout(() => {
                setBillInfo(billInfoNext)
                navigate('/')
            }, 5000)

            return () => {
                clearInterval(interval)
                clearTimeout(timeout)
            }
        }
    }, [])

    return (
        <>
            {/* Nội dung chính */}
            <div className={`flex justify-center items-center h-[${size.height}px] overflow-hidden`}>
                <p className="text-gray-500 mt-4">Chuyển về trang chủ sau {countdown.count} giây...</p>
                <motion.div
                    animate={{ y: ['100%', '0%', '-100%'] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="font-[500] lg:text-[100px] text-[50px] md:text-[80px]  text-white font-sans uppercase text-center tracking-[0.2px] leading-[1.2em] px-[5%]"
                >
                    <p className="mb-[5%]">Cảm ơn bạn đã để lại đánh giá cho cửa hàng chúng tôi</p>
                    <p>Chúc bạn một ngày vui vẻ</p>
                </motion.div>
            </div>
            {
                countdown.isShow === true ?
                    (
                        <ButtonDetailComponent
                            onClick={() => {
                                setBillInfo(billInfoNext)
                                navigate('/')
                            }}
                            icon={
                            <div className='py-4'>
                            <span className="text-gray-500 mt-4">Về trang chủ sau {countdown.count} giây</span>
                        </div>
                        } />
                    )
                    :
                    <></>
            }
        </>
    )
}


export default SuccessPage
