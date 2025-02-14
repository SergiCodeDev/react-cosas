// 2. Con Throttle (Segundo Componente)

import { useState } from "react";
import throttle from "lodash/throttle"; // npm install lodash

export default function SearchComponent() {
	const [query, setQuery] = useState("");

	const throttledSearch = throttle(async (searchQuery: string) => {
		await fetch(`/api/search?q=${searchQuery}`);
	}, 600);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = e.target.value;
		setQuery(newQuery);
		throttledSearch(newQuery);
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
    - Utiliza un throttle para limitar el número de veces que se puede hacer la búsqueda a una vez cada 600 ms, sin importar cuántas veces cambie el input.
Cuándo usarlo:
    - Cuando quieres asegurarte de que las búsquedas no se disparen más de una vez por un período de tiempo específico, 
    ideal para casos donde se desea responder a eventos de manera controlada. 

*/