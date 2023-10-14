import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage, HomePage, Navbar } from "../UI";
import { AppsList } from "../appsVersion/Pages";
import { AppVersionRouter } from "../appsVersion/routes/appVersionRouter";




export const RouterApp = () => {

    return (
        <>
            {/* primero renderizo un header con el titulo y el navbar 
            ya que esto permanecera en toda la app yasi evito renderizacion 
            cuando cambie de pagina */}
            <h1 className="center-grid">My api app</h1>
            <Navbar />
            <Routes>                      
                <Route path="/" element={<HomePage />} />
                <Route path="/appRepository/*" element={<AppVersionRouter />} />
                <Route path="/*" element={ <Navigate to="/" /> }/>
            </Routes>
        </>
        
    )
}