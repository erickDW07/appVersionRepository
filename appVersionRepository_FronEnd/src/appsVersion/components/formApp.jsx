
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks";
import { registerApp } from "../../store/appVersionRepository";
import { useNavigate } from "react-router-dom";

export const FormApp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { name, version, url, fechaPublicacion, onInputChange, onResetForm } = useForm({
        name: '',
        version: '',
        url: '',
        fechaPublicacion: ''
    });

    const onSubmit = (event) => {
        event.preventDefault();
        const item = {
            name,
            version,
            url,
            fechaPublicacion,
            id: new Date().getTime(),
            descargas: 0,
            registrada: new Date().toDateString(),
        }

        dispatch(registerApp(item));

        onResetForm();

        navigate('/appRepository');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-3">
                        <label className="form-label">Nombre</label>
                        <input minLength='3' type="text" className="form-control" id="name" placeholder="Ingresa nombre de la app" name="name" value={name} onChange={onInputChange} required/>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <label className="form-label">Version:</label>
                        <input minLength='1' type="text" className="form-control" id="version" placeholder="Ingresa la version de la app" name="version" value={version} onChange={onInputChange} required/>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <label className="form-label">URL:</label>
                        <input minLength='3' type="text" className="form-control" id="url" placeholder="Ingresa la URL de descarga" name="url" value={url} onChange={onInputChange} required/>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <label className="form-label">fechaPublicacion:</label>
                        <input type="date" className="form-control" id="fechaPublicacion" placeholder="Ingresa fecha de publicacion" name="fechaPublicacion" value={fechaPublicacion} onChange={onInputChange} required/>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Agregar</button>

                <button type="button" onClick={() => { navigate('/appRepository') }} className="btn btn-danger ms-2">Cancelar</button>
            </form>
           

        </>
    )
}