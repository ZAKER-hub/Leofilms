import { useState, useEffect } from 'react'
import { validate } from '@/utils/validate'

export const useForm = (initialValues, onSubmit, Schema) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target

        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validate(values, Schema))
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            onSubmit(values)
        }
    }, [errors])

    return { values, handleChange, handleSubmit, errors }
}