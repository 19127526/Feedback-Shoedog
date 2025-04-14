import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SuccessPage = () => {
    const navigate = useNavigate()
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
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

    console.log('size', size)
    return (
        <>
            {/* Nội dung chính */}
            <div className={`flex justify-center items-center h-[${size.height}px] overflow-hidden`}>
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
        </>
    )
}


export default SuccessPage
