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
  ingredientes?: number[]; // Hacer 'ingredientes' opcional
};



type Menu = {
  id: number;
  nombre: string;
  descripcion: string;
  platos: Plato[];
};

interface Datos {
  recetas: Receta[];
  menus: Menu[];
  ingredientes: Ingrediente[];
}

const MenuSemanal: React.FC = () => {
  const [datos, setDatos] = useState<Datos | null>(null);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await import('../../../assets/data/Datos.json');
        setDatos(response.default);
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
    return ingredientesIds.map((ingredienteId) => {
      const ingrediente = datos?.ingredientes.find((i) => i.id === ingredienteId);
      if (ingrediente) {
        return ingrediente;
      } else {
        return {
          id: ingredienteId,
          nombre: `Ingrediente ${ingredienteId}`,
          foto: '',
          cantidad_disponible: 0,
        };
      }
    });
  };

  const handleEliminarIngrediente = (menuIndex: number, platoIndex: number, ingredienteIndex: number) => {
    setDatos((prevDatos) => {
      if (!prevDatos) {
        return prevDatos;
      }
  
      const nuevosMenus = [...prevDatos.menus];
      const plato = nuevosMenus[menuIndex].platos[platoIndex];
  
      if (plato) {
        const receta = obtenerRecetaPorId(plato.receta_id);
  
        if (receta) {
          const nuevosIngredientes = receta.ingredientes.filter((_, index) => index !== ingredienteIndex);
  
          // Crear un nuevo array de recetas actualizado
          const nuevasRecetas = prevDatos.recetas.map((r) => {
            if (r.id === receta.id) {
              return { ...r, ingredientes: nuevosIngredientes };
            }
            return r;
          });
  
          return {
            ...prevDatos,
            recetas: nuevasRecetas,
            menus: nuevosMenus,
          };
        }
      }
  
      return prevDatos;
    });
  };
  
  
  
  

  if (!datos) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="containerMenuSemanal">
      {datos.menus.map((menu, menuIndex) => (
        <div key={menu.id} className="menu">
          <h1 className="nombre">{menu.nombre}</h1>
          <p className="descripcion">{menu.descripcion}</p>

          {menu.platos.map((plato, platoIndex) => {
            const receta = obtenerRecetaPorId(plato.receta_id);

            if (!receta) {
              return <p key={platoIndex}>Receta no encontrada</p>;
            }

            const ingredientesReceta = obtenerIngredientesPorIds(receta.ingredientes);

            return (
              <div key={receta.id}>
                <h2 className="nombreReceta">Receta: {receta.nombre}</h2>
                <p className="nombreIngrediente">Ingredientes:</p>
                <ul className="lista">
                  {ingredientesReceta.map((ingrediente, ingredienteIndex) => (
                    <li key={ingrediente.id}>
                      {`${ingrediente.nombre}`}
                      <button
                        onClick={() => handleEliminarIngrediente(menuIndex, platoIndex, ingredienteIndex)}
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="cantidad">Cantidad de porción: {plato.porciones}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export { MenuSemanal };
