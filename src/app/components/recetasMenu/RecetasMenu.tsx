import "../menuSemanal/MenuSemanal.scss"
import React, { useState, useEffect } from 'react';

type Ingrediente = {
  id: number;
  nombre: string;
  foto: string;
  cantidad_disponible: number;
};

type Receta = {
  id: number;
  nombre: string;
  ingredientes: number[];
  instrucciones: string;
  foto: string;
};

type Plato = {
  receta_id: number;
  porciones: number;
};

type Menu = {
  id: number;
  nombre: string;
  descripcion: string;
  platos: Plato[];
};

const RecetasMenu: React.FC = () => {
  const [datos, setDatos] = useState<{ recetas: Receta[]; menus: Menu[] } | null>(null);
  const [ingredientes, setIngredientes] = useState<Ingrediente[] | null>(null);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await import('../../../assets/data/Datos.json');
        setDatos(response.default);
        setIngredientes(response.default.ingredientes);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchDatos();
  }, []);

  const obtenerRecetaPorId = (recetaId: number): Receta | undefined => {
    return datos?.recetas.find((receta) => receta.id === recetaId);
  };

  const obtenerIngredientesPorIds = (ingredientesIds: number[]): Ingrediente[] => {
    return ingredientes?.filter((ingrediente) => ingredientesIds.includes(ingrediente.id)) || [];
  };

  if (!datos || !ingredientes) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className='containerMenuSemanal'>
      {datos.menus.map((menu) => (
        <div key={menu.id} className="menu">
          <h1 className="nombre">{menu.nombre}</h1>
          <p>{menu.descripcion}</p>

          {menu.platos.map((plato, index) => {
            const receta = obtenerRecetaPorId(plato.receta_id);

            if (!receta) {
              return <p key={index}>Receta no encontrada</p>;
            }

            const ingredientesReceta = obtenerIngredientesPorIds(receta.ingredientes);

            return (
              <div key={receta.id}>
                <h2>{receta.nombre}</h2>
                <p>Ingredientes:</p>
                <ul className="lista">
                  {ingredientesReceta.map((ingrediente) => (
                    <li key={ingrediente.id}>
                      {`${ingrediente.id} - ${ingrediente.nombre}`}
                    </li>
                  ))}
                </ul>
                <p>Instrucciones: {receta.instrucciones}</p>
                
                <img src={receta.foto} alt={receta.nombre} />
                
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RecetasMenu;
