import { useDispatch } from "react-redux";
import { onDescarga } from "../../store/appVersionRepository";
import fileDownload from "js-file-download";




export const ItemApp = ({app}) => { 

   const dispatch = useDispatch();

   const onDescargar = ( )=>{
      console.log(app.url);
      dispatch(onDescarga(app));
      fileDownload(`La URL es: ${app.url}`, `${app.nombre}.app.txt`);
   }

   
   return (      
           <tr>
            <th>{app.publicada}</th>
            <td>{app.nombre}</td>
            <td>{app.version}</td>
            <td>{app.descargas}</td>
            <td> <button className="btn btn-success" onClick={()=>{onDescargar()}}>Descargar </button> </td>
          </tr>      
   )
}