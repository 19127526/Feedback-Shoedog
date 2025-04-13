import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const FeedbackPage = () => {
    const navigate = useNavigate();
    return (
    <div className='grid grid-cols-12 px-[5%] py-[2%] gap-14 overflow-hidden '>
        <div className='col-span-5 text-white'>
            <div className='max-w-4xl mx-auto text-center'>
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.3,
                    }}
                    className="text-[148.25px] align-center text-center  font-bold  tracking-[-0.07em] leading-[0.9em] uppercase mb-[40px] "
                >
                    LET'S
                    CHAT
                </motion.h2>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.3,
                    }}
                    className='text-[25.89px] font-medium  tracking-[-0.06em] leading-[1.2em] uppercase mb-[40px]'
                >
                    INSPIRED BY INDUSTRIAL DESIGN AND MATERIAL INNOVATION, STUDIO 222* PROPOUNDS A LENS ON
                    THE SOCIAL STRUCTURE OF MODERN BRITISH WORKING CLASS
                </motion.p>
            </div>
        </div>
        <div className='col-span-7 text-white'>
            <motion.h5
                initial={{ x: 100, opacity: 0 }}   // Bắt đầu từ phải
                animate={{ x: 0, opacity: 1 }}     // Trượt vào vị trí ban đầu
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.3,
                }}
                className="text-[42px] font-semibold tracking-[-0.06em] leading-[1em] uppercase mb-[40px]"
            >
                <strong
                    className='font-semibold'>[CONTACT]</strong>
            </motion.h5>
            <form className='mt-8 space-y-4'>
                <input type='text' placeholder='Your Name' className='w-full px-4 py-2 border  rounded-md' />
                <input type='email' placeholder='Your Email' className='w-full px-4 py-2 border rounded-md' />
                <textarea placeholder='Your Message' className='w-full px-4 py-2 border  rounded-md' rows='4' />
                <button className='w-full py-2 bg-blue-500 text-white rounded-md'>Submit</button>
            </form>
            <button onClick={() => navigate('/success')}>navigate</button>
        </div>
    </div>


)
}
export default FeedbackPage