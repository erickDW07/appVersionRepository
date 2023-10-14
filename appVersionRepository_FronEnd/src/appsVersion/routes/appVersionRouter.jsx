import { Navigate, Route, Routes } from "react-router-dom"
import { AppsList, AppsRegistration } from "../Pages"



export const AppVersionRouter = () => {
    return (
        <Routes>
            <Route path="/registro" element={<AppsRegistration />} />
            <Route path="/" element={<AppsList />} />
            <Route path="/*" element={ <Navigate to="/" /> }/>
        </Routes>
    )
}