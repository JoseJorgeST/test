import './Ingredientes.scss'
import { useEffect, useState } from 'react';

interface Ingrediente {
    id: number;
    nombre: string;
    foto: string;
    cantidad_disponible: number;
}

function Ingredientes() {
    const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import('../../../assets/data/Datos.json');
                setIngredientes(response.ingredientes);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className='container_ingredientes'>
                <h1 className='titleIngredientes'>Listado de Ingredientes</h1>
                <ul className='listIngredientes'>
                    {ingredientes.map((ingrediente) => (
                        <li key={ingrediente.id} className='list'>
                            
                            <strong>Nombre:</strong> {ingrediente.nombre} <br />
                            <strong>Foto:</strong> <img src={ingrediente.foto} alt={ingrediente.nombre} /> <br />
                            <strong>Cantidad Disponible:</strong> {ingrediente.cantidad_disponible}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { Ingredientes };
