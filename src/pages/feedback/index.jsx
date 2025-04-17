import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import FeedbackComponent from '@/components/feedback/index.jsx'
import { EVENT_SEND } from '@/constant/common.const.js'
import { useContext } from 'react'
import { MyContext } from '@/main.jsx'
import { notification } from 'antd'
import { getSocketClient } from '@/sockets/index.js'
import ButtonDetailComponent from '@/components/button-detail/index.jsx'
import { PicRightOutlined } from '@ant-design/icons'


/*
* format data
* {
    "id": 315,
    "message": null,
    "status": 0,
    "create_date": null,
    "user_name": null,
    "feedback": null,
    "note": "{\"user_name\":\"string\",\"feedback\":1}"
}
* */
const FeedbackPage = () => {
    const navigate = useNavigate()
    const stripes = Array.from({ length: 100 })
    const { data: billInfo } = useContext(MyContext);
    const handleSubmitFeedback = (e) => {
        e.preventDefault()
        if(billInfo) {
            const formData = new FormData(e.target)
            const feedback = formData.get('feedback')
            const message = formData.get('message')
            getSocketClient().emit(
                EVENT_SEND.EVENT_SEND_SUBMIT_FEEDBACK,
                {
                    id: billInfo?.id,
                    socket_id:  getSocketClient()?.id,
                    feedback,
                    message
                },
                (data) => {
                    console.log('data', data)
                }
            )
        } else {
            notification.error({
                message: 'Có lỗi kết nối',
                placement: 'topRight'
            })
        }
    }

    return (
        billInfo ? <div className="flex flex-col items-center  px-6 bg-feedback_color my-10">
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
                                      name="message"
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
                <ButtonDetailComponent icon={<PicRightOutlined/>}/>
            </div>
            :
            <div className="flex flex-col items-center justify-center min-h-screen bg-feedback_color text-center px-4">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    className="text-4xl md:text-5xl font-extrabold text-black uppercase mb-6"
                >
                    Chưa có hóa đơn nào...
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                    className="text-lg text-black mb-10"
                >
                    Vui lòng chờ trong giây lát.
                </motion.p>

                {/* Stripe loading animation reused */}
                <div className="relative w-full lg:w-[80%] md:w-[95%] h-12 overflow-hidden">
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

