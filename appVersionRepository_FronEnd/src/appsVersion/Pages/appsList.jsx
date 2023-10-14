import { useDispatch } from "react-redux"
import { ListApps } from "../components/listApps"
import { useEffect } from "react";
import { getApps } from "../../store/appVersionRepository";

import { BsPlusCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const AppsList = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(getApps());
   }, []);

   return (
      <div className="p-4">

         <h1>Catalogo de Aplicaciones</h1>

         <hr />

         < ListApps />

         <button className="btn btn-primary btn-lg rounded-pill position-fixed bottom-0 end-0 p-2 m-4 fs-3"
         onClick={()=>{navigate('registro')}}
         >
            <BsPlusCircle className="d-flex flex-row justify-content-center alig-items-center" />
         </button>

      </div>
   )
}