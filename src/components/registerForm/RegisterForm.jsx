import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const RegisterForm = ({profiles}) => {

    const navigate = useNavigate()
    const [isFound, setIsFound] = useState(false)
    const [isForm,setIsForm] = useState({
        username: '',
        surname: ''
    })
    
    const profileCheck = () => {

        profiles.map((profile) => {
            if (profile.name.trim().toLowerCase() === isForm.username.trim().toLowerCase() && profile.surname.trim().toLowerCase() === isForm.surname.trim().toLowerCase()) {
                setIsFound(true);
                localStorage.setItem("auth",JSON.stringify(profile._id))
                //console.log(profile._id);
                navigate(`/${profile._id}`)
                
            }
        })
    }
    const handleOnChange = (ev) => {
        const {name, value} = ev.target
        setIsForm({
            ...isForm,
            [name]:value
        });
    }
    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        // Andrebbe cambiato con qualcosa di più interattivo 
        if (isForm.username.trim() === '' || isForm.surname.trim() === '') {
            window.alert('Inserisci qualcosa');
            return
        }
        profileCheck()
        if (!isFound) {console.log('Non ti sei registrato con questi dati')} // Scatta comunque sono stanco ci penso domani
    }

    return(
        <>
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
            <Link 
                to={'/123'}><button>TEST</button></Link>
            <p>Bisogna inserire Il nome e il cognome con cui si è registrati su striverschool</p>
        </>
    )
}
export default RegisterForm;