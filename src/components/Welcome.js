import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const Welcome = ({ name, type, exercises }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h2>Bienvenido /a <b>{name}</b>!!</h2>
                <h5>Te preparamos estos ejercicios de <b>{type}</b> para que practiques.</h5>
            </div>
            <div>
                {console.log(exercises)}
                <Button color={'primary'} onClick={() => navigate("/exercises/1")}>START!!</Button>
            </div>
        </div>

    )
}

export default Welcome