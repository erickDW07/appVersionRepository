import { addApp, setApps, startLoadingApps } from "./";


const getApps = ()=>{
    return async (dispatch) =>{
        dispatch(startLoadingApps());

        //peticion a api
        const apps= JSON.parse(localStorage.getItem('apps'))||[];

        dispatch(setApps(apps));

    }
}

const registerApp = (app)=>{
    return async (dispatch) =>{
        dispatch(startLoadingApps());
        
        //post a api
        const apps= JSON.parse(localStorage.getItem('apps'))||[];
        localStorage.setItem('apps', JSON.stringify([...apps, app]));

        dispatch(addApp(app));

    }
}

const onDescarga = (id)=>{
    return async (dispatch) =>{
        dispatch(startLoadingApps());

        //put a api
        let apps= JSON.parse(localStorage.getItem('apps'))||[];
        apps = apps.map((app)=>{
            if (app.id === id)
                app.descargas +=1;
            return app
        });
        localStorage.setItem('apps', JSON.stringify(apps));

        dispatch(setApps(apps));

    }
}

export{
    getApps,
    registerApp,
    onDescarga
}