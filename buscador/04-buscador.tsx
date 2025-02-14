// 4. Limitación de Solicitudes (Cuarto Componente)

import { useState } from "react";

export default function SearchComponent() {
	const [query, setQuery] = useState("");
	const [requestCount, setRequestCount] = useState(0);

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = e.target.value;
		setQuery(newQuery);

		if (requestCount < 100) {
			await fetch(`/api/search?q=${newQuery}`);
			setRequestCount((prev) => prev + 1);
		} else {
			setTimeout(() => setRequestCount(0), 60000);
		}
	};

	return (
		<input
			type="text"
			value={query}
			onChange={handleSearch}
			placeholder="Search..."
		/>
	);
}
/* 

Descripción:
    - Limita el número de solicitudes a 100 en un período de tiempo determinado (60000 ms o 60 segundos).
Cuándo usarlo:
    - Cuando se necesita controlar la cantidad de solicitudes realizadas para evitar saturar el servidor, 
    especialmente en aplicaciones donde múltiples usuarios podrían generar muchas búsquedas simultáneamente. 

*/