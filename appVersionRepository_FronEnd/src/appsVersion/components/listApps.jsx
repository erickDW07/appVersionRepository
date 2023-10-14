import { useSelector } from "react-redux"
import { ItemApp } from "./itemApp";
import { useEffect } from "react";

export const ListApps = () => {

    const { apps = [], isLoading } = useSelector(state => state.appVersionRepsitory);
    
    return (
        isLoading ?
            (<h1> Cargando </h1>)
            : apps.length > 0 ? (<table className="table table-hover">
                <thead>
                    <tr>
                        <th>Registrada</th>                        
                        <th>Nombre</th>
                        <th>URL</th>
                        <th>Version</th>
                        <th>Descargas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apps.map((app) => <ItemApp key={app.id} app={app} />)
                    }
                </tbody>
            </table>)
                : (<div > No hay apps</div>)

    )
}