import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9778/api/user", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUser(data.user);
      });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Bienvenido {user}</h1>
        </div>
      ) : (
        <a href="http://localhost:5000/auth/google">
          Iniciar sesion
        </a>
      )}
    </div>
  );
}

export default App;
