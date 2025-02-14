// 3. Búsqueda Inmediata (Tercer Componente)

import { useState } from "react";

export default function SearchComponent() {
	const [query, setQuery] = useState("");

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		await fetch(`/api/search?q=${e.target.value}`);
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
    - Realiza la búsqueda inmediatamente después de cada cambio en el input.
Cuándo usarlo:
    - En situaciones donde la latencia no es un problema y se quiere realizar una búsqueda instantánea, como en aplicaciones pequeñas o con un servidor muy optimizado. 

*/