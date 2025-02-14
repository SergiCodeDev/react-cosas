// no probado
import { z } from "zod";

// Validación personalizada de la contraseña
const passwordSchema = z
  .string()
  .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
  .refine((val) => /[A-Z]/.test(val), { message: "Debe contener al menos una letra mayúscula" })
  .refine((val) => /[a-z]/.test(val), { message: "Debe contener al menos una letra minúscula" })
  .refine((val) => /\d/.test(val), { message: "Debe contener al menos un número" })
  .refine((val) => /[@$!%*?&#]/.test(val), { message: "Debe contener al menos un carácter especial" });

// Esquema completo
const schema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });