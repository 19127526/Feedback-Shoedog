import { Route, Routes } from 'react-router-dom'
import React from "react";
import FeedbackPage from '../pages/feedback/index.jsx'
import SuccessPage from '../pages/success/index.jsx'

const RoutesPage=()=> {
    return (
        <Routes>
            <Route path="/success" element={<React.Suspense fallback={<div></div>}> <SuccessPage /> </React.Suspense>} />
            <Route path="" element={<React.Suspense fallback={<div></div>}> <FeedbackPage /> </React.Suspense>} />
        </Routes>
    )
}

export default RoutesPage