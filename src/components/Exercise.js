import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"

const Exercise = ({ exercise, type, cantidad, setExercises, exercises }) => {
    const [respuesta, setRespuesta] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setRespuesta(e.target.value)
    }

    const anterior = () => {
        {exercise.id === 1 ? navigate(`/welcome`) :  navigate(`/exercises/${exercise.id - 1}`)}
    }

    const siguiente = () => {
        if(exercise.id === Number(cantidad)) {
            navigate(`/welcome`)
        } else {
            let newExercises = [...exercises]
            
            newExercises.map(obj => {
                // console.log(exercise.id,'id ejercicio')
                // console.log(obj.id,'id obj')
                if(exercise.id === obj.id) {
                    obj = {...obj, userResult: respuesta}
                }
                console.log(obj, 'objeto')
                newExercises = obj
        })
            console.log(newExercises, 'useresult')
            setExercises(newExercises)
            navigate(`/exercises/${exercise.id + 1}`)
        }
    }
    return (
        <div>
            <h1>Ejercicio N° {exercise.id}</h1>
            <h5>Resuelve {exercise.firstNumber} {type} {exercise.secondNumber} = ? </h5>
            <input type={"text"} value={respuesta} onChange={handleChange} placeholder={"Resultado..."}/>
            <Button color={'primary'} onClick={anterior}>Anterior</Button>
            <Button color={'primary'} onClick={siguiente}>Siguiente</Button>
        </div>
    )
}

export default Exercise