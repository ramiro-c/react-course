import React, { useState, useEffect } from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = () => {
  const CATEGORIAS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];
  const [categoria, SelectNoticias] = useSelect("technology", CATEGORIAS);

  return (
    <div className={`$(styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;