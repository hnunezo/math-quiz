import { useField } from "formik"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Input } from "reactstrap"
import styled from "styled-components"

const ErrorMessage = styled.div`
    color: #f00;
`
const InputText = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <Input placeholder={placeholder} {...field} />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </div>


    )
}

export default InputText