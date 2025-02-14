// 1. Con Debounce (Primer Componente)
import { useState } from "react";

export default function SearchComponent() {
	const [query, setQuery] = useState("");
	let timeoutId: NodeJS.Timeout;

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		clearTimeout(timeoutId);

		timeoutId = setTimeout(async () => {
			await fetch(`/api/search?q=${e.target.value}`);
		}, 600);
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
    - Utiliza un debounce para retrasar la búsqueda hasta que el usuario deje de escribir durante 600 ms.
    - Limpia el timeout anterior cada vez que se cambia el input.
Cuándo usarlo:
    -Cuando quieres evitar hacer demasiadas solicitudes mientras el usuario está escribiendo, lo que puede ser útil para reducir la carga en el servidor. 

*/