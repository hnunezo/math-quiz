import { Input } from "reactstrap"
import { useField } from "formik"
import styled from "styled-components"

const ErrorMessage = styled.div`
    color: #f00;
`

const SelectType = ({ children, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <Input type="select"{...field} {...props}>
                {children}
            </Input>
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </div>
    )
}
export default SelectType