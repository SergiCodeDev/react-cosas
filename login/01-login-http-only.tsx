// 3. Almacenamiento del token en HttpOnly Cookies

import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
	const [status, setStatus] = useState<string | null>(null);
	const router = useRouter();

	const handleLogin = async (): Promise<void> => {
		const response = await fetch("/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: "user", password: "pass" }),
		});

		if (response.ok) {
			setStatus("Authenticated and token stored in HttpOnly Cookie");
			router.push("/dashboard");
		} else {
			setStatus("Authentication failed");
		}
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<p>{status}</p>
		</div>
	);
}
/* 

Funcionamiento: 
    - Este componente maneja el inicio de sesión mediante una solicitud POST a una API. Si la autenticación es exitosa, almacena el token en una cookie HttpOnly.
Pros:
    - Las cookies HttpOnly no son accesibles desde el JavaScript del cliente, lo que mejora la seguridad contra ataques XSS.
Contras:
    - Necesita configuración en el lado del servidor para enviar cookies HttpOnly.
    - Puede ser un poco más complicado de implementar. 

*/