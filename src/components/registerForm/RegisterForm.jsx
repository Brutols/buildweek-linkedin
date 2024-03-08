import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = ({ profiles }) => {
  const navigate = useNavigate();
  const [isForm, setIsForm] = useState({
    username: "",
    surname: "",
  });

  const profileCheck = () => {
     const found = profiles.find((profile) => {
        return (profile.name.trim().toLowerCase() ===
          isForm.username.trim().toLowerCase() &&
          profile.surname.trim().toLowerCase() ===
            isForm.surname.trim().toLowerCase())
      })
      if (found) {
        console.log(found);
          localStorage.setItem("auth", JSON.stringify(found._id));
          navigate(`/${found._id}`);
      } else {
        alert("non ti sei registrato con questi dati")
      }
  };

  const handleOnChange = (ev) => {
    const { name, value } = ev.target;
    setIsForm({
      ...isForm,
      [name]: value,
    });
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    // Andrebbe cambiato con qualcosa di più interattivo
    if (isForm.username.trim() === "" || isForm.surname.trim() === "") {
      window.alert("Inserisci qualcosa");
      return;
    } else {
      profileCheck();
    }
  };

  return (
    <div className="text-center">
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          name="username"
          type="text"
          placeholder="nome"
        />
        <input
          onChange={handleOnChange}
          name="surname"
          type="password"
          placeholder="cognome"
        />
        <button>Login</button>
      </form>
      <p>
        Bisogna inserire Il nome e il cognome con cui si è registrati su
        striverschool
      </p>
    </div>
  );
};
export default RegisterForm;
