// 1: Uso de import estático

import _ from "lodash";

export default function Dashboard() {
    const data = _.join(["Hello", "World"], " ");

    return <p>{data}</p>;
}
/* 

Descripción: 
    - Este componente importa lodash de manera estática al principio del archivo y utiliza la función join 
    para concatenar las palabras "Hello" y "World" en una cadena separada por un espacio.
Ventaja: 
    - La carga es inmediata, lo que puede ser beneficioso si lodash se usa en varios componentes, ya que solo se carga una vez.
Desventaja: 
    - Aumenta el tamaño inicial del paquete, ya que se carga toda la biblioteca, incluso si no se usa en su totalidad. 
    
*/