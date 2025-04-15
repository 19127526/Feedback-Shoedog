import './index.css'

const FeedbackComponent = () => {
    return (
        <>
            <div className="feedback justify-between" style={{ width: '80%' }}>
                <div className="flex flex-col items-center">
                    <label className="angry">
                        <input name="feedback" defaultValue={1} type="radio" id="feedback" required />
                        <div>
                            <svg className="eye left">
                                <use href="#eye" />
                            </svg>
                            <svg className="eye right">
                                <use href="#eye" />
                            </svg>
                            <svg className="mouth">
                                <use href="#mouth" />
                            </svg>
                        </div>
                    </label>
                    <span className='block text-sm  font-semibold' >Rất không hài lòng</span >
                </div>
                <div className="flex flex-col items-center">
                    <label className="sad">
                        <input name="feedback" defaultValue={2} type="radio" id="feedback" required />
                        <div>
                            <svg className="eye left">
                                <use href="#eye" />
                            </svg>
                            <svg className="eye right">
                                <use href="#eye" />
                            </svg>
                            <svg className="mouth">
                                <use href="#mouth" />
                            </svg>
                        </div>
                    </label>
                    <span className='block text-sm font-semibold'>Không hài lòng</span>
                </div>
                <div className="flex flex-col items-center">
                    <label className="ok">
                        <input name="feedback" defaultValue={3} type="radio" id="feedback" required />
                        <div />
                    </label>
                    <span className='block text-sm font-semibold'>Bình thường</span>
                </div>
                <div className="flex flex-col items-center">
                    <label className="good">
                        <input defaultChecked="" name="feedback" defaultValue={4} type="radio" id="feedback" required />
                        <div>
                            <svg className="eye left">
                                <use href="#eye" />
                            </svg>
                            <svg className="eye right">
                                <use href="#eye" />
                            </svg>
                            <svg className="mouth">
                                <use href="#mouth" />
                            </svg>
                        </div>
                    </label>
                    <span className='block text-sm font-semibold'>Hài lòng</span>
                </div>
                <div className="flex flex-col items-center">
                    <label className="happy">
                        <input name="feedback" defaultValue={5} type="radio" id="feedback" required />
                        <div>
                            <svg className="eye left">
                                <use href="#eye" />
                            </svg>
                            <svg className="eye right">
                                <use href="#eye" />
                            </svg>
                        </div>
                    </label>
                    <span className='block text-sm font-semibold'>Rất hài lòng</span>
                </div>
            </div>
            <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
                <symbol id="eye" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1" />
                </symbol>
                <symbol id="mouth" viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5" />
                </symbol>
            </svg>
        </>

    )
}

export default FeedbackComponent
