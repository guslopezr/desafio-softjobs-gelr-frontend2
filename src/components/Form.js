import { useState } from "react";
import axios from "axios"
export default function Form() {
    const [usuario, setUsuario] = useState({});

    const registrarUsuario = async () => {
        try {
            await axios.post("https://softjobs-gelr-backend-mvc-rev-production.up.railway.app", {usuario})
            alert("Usuario agregado con éxito")
        } catch (error) {
            alert("Algo salió mal")
            console.log(error)
        }

    };

    return (
        <div>
            <input
                value={usuario.email}
                onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            />
            <input
                value={usuario.password}
                onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
            />
            <button onClick={registrarUsuario}> Registrarse </button>
        </div>
    );
}
