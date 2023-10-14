import fileDownload from "js-file-download"
import { useDispatch } from "react-redux";
import { onDescarga } from "../../store/appVersionRepository";



export const ItemApp = ({app}) => {
   const dispatch = useDispatch();
   const onDescargar = ( url )=>{
      console.log(url);
      dispatch(onDescarga(app.id));
      fileDownload(`La URL es: ${url}`, `${app.name}.app.txt`);
   }
   return (      
           <tr>
            <td>{app.registrada}</td>
            <td>{app.name}</td>
            <td>{app.version}</td>            
            <td>{app.descargas}</td>
            <td> <button className="btn btn-success" onClick={()=>{onDescargar(app.url)}}>Descargar</button> </td>
          </tr>      
   )
}