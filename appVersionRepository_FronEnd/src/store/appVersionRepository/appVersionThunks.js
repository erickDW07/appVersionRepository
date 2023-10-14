
import { addApp, setApps, startLoadingApps, updateApp } from "./";
import { aplicaconesApi } from "../../api/aplicacionesApi";



const getApps = () => {
    return async (dispatch) => {
        dispatch(startLoadingApps());


        /* const apps= JSON.parse(localStorage.getItem('apps'))||[]; */
        const { data } = await aplicaconesApi.get('/');

        console.log(data.apps);
        dispatch(setApps(data.apps));

    }
}



const registerApp = (app) => {
    return async (dispatch) => {
        dispatch(startLoadingApps());


        /* const apps= JSON.parse(localStorage.getItem('apps'))||[];
        localStorage.setItem('apps', JSON.stringify([...apps, app])); */

        console.log(app);
        const { data } = await aplicaconesApi.post('/', app);


        dispatch(addApp(data.app));




    }
}

const onDescarga = (app) => {
    return async (dispatch) => {
        dispatch(startLoadingApps());

        //put a api
        // let apps = JSON.parse(localStorage.getItem('apps')) || [];
        // apps = apps.map((app) => {
        //     if (app.id === id)
        //         app.descargas += 1;
        //     return app
        // });
        // localStorage.setItem('apps', JSON.stringify(apps));

        const camposActualizar = {
            descargas: parseInt(app.descargas) + 1
        }

        const { data } = await aplicaconesApi.put(`/${app.id}`, camposActualizar);


        dispatch(updateApp(data.app));

    }
}

export {
    getApps,
    registerApp,
    onDescarga,
}