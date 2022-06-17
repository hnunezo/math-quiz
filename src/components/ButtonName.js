import { useFormikContext } from "formik"
import { Button } from "reactstrap"

const ButtonName = ({ color }) => {
    const formikprops = useFormikContext()
    
    const nameChange = () => {
        formikprops.setFieldValue("name", "Anonimo")
    }
    return(
        <Button color={color} onClick={nameChange}>Seguir como Anonimo</Button>
    )
}

export default ButtonName