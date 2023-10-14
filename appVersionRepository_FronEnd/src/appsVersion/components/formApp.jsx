import { useDispatch } from "react-redux";
import { useForm } from "../../hooks";
import { registerApp } from "../../store/appVersionRepository";
import { useNavigate } from "react-router-dom";

export const FormApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nombre, version, url, publicada, onInputChange, onResetForm } =
    useForm({
      nombre: "",
      version: "",
      url: "",
      publicada: "",
    });

  const onSubmit = (event) => {
    event.preventDefault();
    const item = {      
        nombre,       
        version,
        url,
        publicada
      };
   

    dispatch(registerApp(item));

    onResetForm();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="form-label">Nombre</label>
            <input
              minLength="3"
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Ingresa nombre de la app"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="form-label">Version:</label>
            <input
              minLength="1"
              type="text"
              className="form-control"
              id="version"
              placeholder="Ingresa la version de la app"
              name="version"
              value={version}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="form-label">URL:</label>
            <input
              minLength="3"
              type="text"
              className="form-control"
              id="url"
              placeholder="Ingresa la URL de descarga"
              name="url"
              value={url}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="form-label">fecha Publicacion:</label>
            <input
              type="date"
              className="form-control"
              id="publicada"
              placeholder="Ingresa fecha de publicacion"
              name="publicada"
              value={publicada}
              onChange={onInputChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>

        <button
          type="button"
          onClick={() => {
            navigate("/appRepository");
          }}
          className="btn btn-danger ms-2"
        >
          Cancelar
        </button>
      </form>
    </>
  );
};
