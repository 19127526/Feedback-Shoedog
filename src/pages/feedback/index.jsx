import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import FeedbackComponent from '@/components/feedback/index.jsx'

const FeedbackPage = () => {
    const navigate = useNavigate()
    const stripes = Array.from({ length: 100 })
    const handleSubmitFeedback = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const feedback = formData.get("feedback");
        const message = formData.get("message");
        console.log(feedback, message)
    }
    return (
        <div className="flex flex-col items-center  px-6 bg-feedback_color my-10">
            <div className="max-w-2xl w-full">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: 0.3
                    }}
                    className="text-4xl md:text-5xl align-center font-extrabold text-center uppercase "
                >
                    đánh giá dịch vụ
                </motion.h1>
                <div className="flex flex-col items-center my-5">
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 0.5
                        }}
                        className="text-center text-gray-600 text-xl w-[80%]"
                    >
                        Ý kiến của bạn là điều vô cùng quý giá giúp chúng tôi hoàn thiện hơn mỗi ngày.
                    </motion.span>
                </div>
                <form className="space-y-6" onSubmit={handleSubmitFeedback}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 0.5
                        }}
                    >
                        <label className="block text-sm font-medium mb-1" htmlFor="feedback">Đánh giá<span
                            className="text-red-500">*</span></label>
                        <div className="flex justify-center items-center flex-col w-[100%]">
                            <FeedbackComponent />
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 0.6
                        }}
                    >
                        <label className="block text-sm font-medium mb-1" htmlFor="message">Lời đánh giá</label>
                        <textarea id="message" rows="5"
                                  name='message'
                                  className="w-full border border-black block text-sm font-semibold rounded-lg px-4 py-2  focus:outline-none focus:ring-1 focus:ring-black  border-solid bg-feedback_color placeholder-gray-700"
                                  placeholder="Vui lòng điền đánh giá của bạn"></textarea>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: 0.7
                        }}
                        className="flex justify-center"
                    >
                            <button type="submit"
                                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 from-orange-500 transition">Xác
                                nhận
                            </button>
                    </motion.div>
                </form>
            </div>
            <div className="relative w-[100%] lg:w-[80%] md:w-[95%] h-12 overflow-hidden lg:mt-12 mt-8">
                <motion.div
                    className="absolute top-0 left-0 flex"
                    initial={{ x: '-50%' }}
                    animate={{ x: '0%' }}
                    transition={{
                        duration: 15,
                        ease: 'linear',
                        repeat: Infinity
                    }}
                >
                    {[...stripes, ...stripes].map((_, i) => (
                        <div
                            key={i}
                            className="w-4 h-12 bg-black rotate-[45deg] opacity-80 mx-1 rounded-xl shrink-0"
                        />

                    ))}
                </motion.div>
                <div
                    className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-orange-500 via-orange-500/50 to-transparent z-10" />
                <div
                    className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-orange-500 via-orange-500/50 to-transparent z-10" />
            </div>
        </div>
    )
}
export default FeedbackPage


/*
*
* <div className="grid grid-cols-12 px-[5%] py-[2%] gap-14 overflow-hidden ">
        <div className="col-span-5 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: 0.3
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
                        ease: 'easeOut',
                        delay: 0.3
                    }}
                    className="text-[25.89px] font-medium  tracking-[-0.06em] leading-[1.2em] uppercase mb-[40px]"
                >
                    INSPIRED BY INDUSTRIAL DESIGN AND MATERIAL INNOVATION, STUDIO 222* PROPOUNDS A LENS ON
                    THE SOCIAL STRUCTURE OF MODERN BRITISH WORKING CLASS
                </motion.p>
            </div>
        </div>
        <div className="col-span-7 text-white">
            <motion.h5
                initial={{ x: 100, opacity: 0 }}   // Bắt đầu từ phải
                animate={{ x: 0, opacity: 1 }}     // Trượt vào vị trí ban đầu
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.3
                }}
                className="text-[42px] font-semibold tracking-[-0.06em] leading-[1em] uppercase mb-[40px]"
            >
                <strong
                    className="font-extrabold">[CONTACT]</strong>
            </motion.h5>
            <form className="mt-8 space-y-4 w-[60%]">
                <div className="flex flex-col">
                    <label htmlFor="yourInput"
                           className=" not-italic font-semibold text-lg leading-[100%] text-left text-white pt-3 pb-2 px-0">
                        Đánh giá
                    </label>
                    <textarea placeholder="Vui lòng nhập đánh giá"
                              className="border-2 border-white border-solid bg-feedback_color rounded-none
                              px-3 pt-3 pb-3 text-white text-sm not-italic
                              font-semibold leading-[140%] appearance-none
                              outline-0 border-solid bg-feedback_color placeholder-white"
                              rows="4" />
                </div>

                <button className="w-full py-2 bg-blue-500 text-white rounded-md">Submit</button>
            </form>
            <button onClick={() => navigate('/success')}>navigate</button>
        </div>
    </div>
* */
