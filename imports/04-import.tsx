// 4: Uso de import estático con join

import { join } from "lodash";

export default function Dashboard() {
    const data = join(["Hello", "World"], " ");

    return <p>{data}</p>;
}
/* 

Descripción: 
    - Esta opción importa directamente solo la función join de lodash y la utiliza para concatenar las palabras.
Ventaja: 
    - Menor tamaño del paquete en comparación con la opción 1, ya que solo se importa lo necesario.
Desventaja: 
    - Sigue siendo una carga estática, por lo que puede afectar el tamaño del paquete inicial si lodash no se usa en toda su extensión. 

*/