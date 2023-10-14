import { NavLink, useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { TbLogout, TbLogin } from "react-icons/tb";



export const Navbar = () => {

   return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

         <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
               <ul className="navbar-nav mb-2">
                  <li className="nav-item">
                     <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="appRepository">App repository</NavLink>
                  </li>
                  {/* Aqui se puede agregar mas rutas */}
               </ul>

            </div>

            {/* icono de usuario*/}
            <ul className="navbar-nav mb-2 white">
               <li className="nav-item">
                  <a className="nav-link" href="#" role="button">
                     <BsPersonCircle />
                  </a>                  
               </li>
            </ul>



         </div>
      </nav>

   )
}