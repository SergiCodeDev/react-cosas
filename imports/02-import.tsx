// 2: Carga dinámica de solo la función join

import { useEffect, useState } from "react";

export default function Dashboard() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        const loadLibrary = async () => {
            const { join } = await import("lodash/join");
            const result = join(["Hello", "World"], " ");
            setData(result);
        };

        loadLibrary();
    }, []);

    return <p>{data}</p>;
}
/* 

Descripción: 
    - Este enfoque utiliza useEffect para cargar dinámicamente solo la función join de lodash. Una vez que se carga la función, se utiliza para crear la cadena.
Ventaja: 
    - Carga solo lo necesario, lo que puede reducir el tamaño del paquete inicial y mejorar los tiempos de carga, especialmente en aplicaciones grandes.
Desventaja: 
    - La carga es asíncrona, lo que significa que hay un breve periodo durante el cual data será null, lo que podría resultar en un renderizado vacío hasta que se cargue la función. 
    
*/