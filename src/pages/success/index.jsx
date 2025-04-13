import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const SuccessPage = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Nội dung chính */}
            <div className="flex justify-center items-center">
                <div className="h-[450px]  overflow-hidden">
                    <motion.div
                        animate={{ y: ["100%", "0%", "-100%"] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="font-[500] text-[100px] leading-[0.9em] tracking-[-0.1em] text-white font-sans uppercase text-center tracking-[0.2px] leading-[1.2em] px-[5%]"
                    >
                        <p className='mb-[5%]'>Cảm ơn bạn đã để lại đánh giá cho cửa hàng chúng tôi</p>
                        <p>Chúc bạn một ngày vui vẻ</p>
                    </motion.div>
            </div>
            </div>
        </>
    )
}



export default SuccessPage