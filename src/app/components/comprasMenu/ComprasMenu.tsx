import React, { useState, useEffect } from 'react';
import "../menuSemanal/MenuSemanal.scss"

type Ingrediente = {
  id: number;
  nombre: string;
  foto: string;
  cantidad_disponible: number;
};

type ListaCompra = {
  id: number;
  nombre: string;
  items: { ingrediente_id: number; cantidad: number }[];
};

interface Datos {
  ingredientes: Ingrediente[];
  listas_de_compra: ListaCompra[];
}

const ComprasMenu: React.FC = () => {
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

  const obtenerIngredientePorId = (ingredienteId: number): Ingrediente | undefined => {
    return datos?.ingredientes.find((ingrediente) => ingrediente.id === ingredienteId);
  };

  if (!datos) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className='containerMenuSemanal'>
      {datos.listas_de_compra.map((lista) => (
        <div key={lista.id} className="menu">
          <h1 className="nombre">{lista.nombre}</h1>
          <ul>
            {lista.items.map((item, i) => {
              const ingrediente = obtenerIngredientePorId(item.ingrediente_id);

              if (!ingrediente) {
                return <p key={i}>Ingrediente no encontrado</p>;
              }

              return (
                <li key={i} className="lista">
                  {`${ingrediente.nombre} - Cantidad: ${item.cantidad}`}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export  {ComprasMenu};
