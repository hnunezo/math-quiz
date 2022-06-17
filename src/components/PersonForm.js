import { Formik, Form } from "formik"
import InputText from "./InputText"
import { Collapse, Button } from "reactstrap"
import ButtonName from "./ButtonName"
import { useNavigate } from "react-router-dom"
import SelectType from "./Select"
import * as Yup from 'yup';

const PersonForm = ({ collapse, setCollapse, setName, setType, setCantidad, setExercises }) => {
    const navigate = useNavigate()

    const createExercises = (numero, type) => {
        let exercisesToAdd = []
        let exercise = {
            id: 0,
            firstNumber: 0,
            secondNumber: 0,
            result: 0,
            userResult: 0
        }
        for (let i = 0; i < numero; i++) {
            let firstNumber = Math.floor(Math.random() * 100)
            let secondNumber = Math.floor(Math.random() * 100)
            //RESTRICCION PARA QUE NO SEAN NEGATIVOS Y DEN NUMEROS PAR
            if (type === "/" || type === "*") {
                if (firstNumber % secondNumber !== 0) {
                    while (firstNumber % secondNumber !== 0) {
                        firstNumber = Math.floor(Math.random() * 100)
                        secondNumber = Math.floor(Math.random() * 100)
                    }
                }
            }
            exercise = {
                id: exercise.id + 1,
                firstNumber: firstNumber,
                secondNumber: secondNumber,
                result: eval(firstNumber + type + secondNumber),
                userResult: 0
            }
            exercisesToAdd.push(exercise)
        }
        return exercisesToAdd
    }

    const handleSubmit = (values) => {
        setName(values.name)
        setType(values.type)
        setCantidad(values.cantidad)
        navigate("/welcome")
        setExercises(createExercises(values.cantidad, values.type))
    }
    return (
        <Formik
            initialValues={{
                name: '',
                type: '',
                cantidad: ''
            }}
            validationSchema={Yup.object({
                name: Yup
                    .string()
                    .min(2, 'Nombre muy corto !!')
                    .max(20, "Nombre muy largo!! Utiliza un alias")
                    .required("Ese dato es muy importante!! Si no nos quieres dar tu nombre ingresa como anonimo"),
                type: Yup.string().required("Debes elegir una operacion!!"),
                cantidad: Yup.string().required("Debes elegir una cantidad de ejercicios!!")
            })}
            onSubmit={handleSubmit}>
            <Form>
                <h2>Hola desconocido!!</h2>
                <p>Creo que quieres ejercitar tu capacidad de razonamiento matematico, en busca de enriquecer tus capacidades para tener un futuro en el que planea...o bueno, simplemente quieres realizar ejercicios matematicos.</p>
                <h5>Primero que nada iniciemos con darme tu nombre</h5>
                <InputText placeholder={'Tu nombre...'} name={'name'} />
                <ButtonName color="secondary">Seguir como anonimo</ButtonName>
                <Button color="primary" onClick={() => setCollapse(!collapse)}>Seguir con el formulario</Button>

                <Collapse isOpen={collapse}>
                    <h5>La verdad esa es toda la presentacion que nesecitamos, lo que tu vienes a hacer es a ejercitar!!</h5>
                    <h5>Selecciona la operacion que deseas practicar</h5>
                    <SelectType name='type' label='Tipo de ejercicio'>
                        <option value=''>--Selecciona la operacion--</option>
                        <option value='+'>Suma</option>
                        <option value='-'>Resta</option>
                        <option value='/'>Division</option>
                        <option value='*'>Multiplicacion</option>
                        <option value='mixto'>Mixto</option>
                    </SelectType>
                    <h5>Selecciona la cantidad de ejercicios</h5>
                    <SelectType name='cantidad' label='Cantidad de ejercicios'>
                        <option value=''>--Selecciona la cantidad--</option>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                    </SelectType>
                    <Button color='success' type="submit">Ir a los ejercicios</Button>
                </Collapse>
            </Form>
        </Formik>
    )
}

export default PersonForm