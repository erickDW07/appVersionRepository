import { Navigate, Route, Routes } from "react-router-dom";
import { AppVersionRouter } from "../appsVersion/routes/appVersionRouter";
import { HomePage, Navbar } from "../UI";




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