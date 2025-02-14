// 3: Carga dinámica de toda la biblioteca lodash

import { useEffect, useState } from "react";

export default function Dashboard() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        const loadLibrary = async () => {
            const _ = await import("lodash");
            const result = _.join(["Hello", "World"], " ");
            setData(result);
        };

        loadLibrary();
    }, []);

    return <p>{data}</p>;
}
/* 

Descripción: 
    - Similar a la opción anterior, pero carga toda la biblioteca lodash de manera dinámica.
Ventaja: 
    - Carga de manera asíncrona, lo que puede ser útil si se necesita más de una función de lodash en el futuro.
Desventaja: 
    - Aumenta el tamaño del paquete cargado, ya que trae todas las funciones de lodash, aunque solo se utilice join. 
    
*/