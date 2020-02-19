import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: ""
  });
  const { categorias } = useContext(CategoriasContext);

  // función para leer los contenidos
  const obtenerDatosReceta = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="col-12">
      <fieldset>
        <legend>Busca bebidas por categoria o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            onChange={obtenerDatosReceta}
            className="form-control"
            name="categoria"
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map(categoria => (
              <option value={categoria.strCategory} key={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
