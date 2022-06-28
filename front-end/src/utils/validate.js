export const validate = (values, Schema) => {
    let errors = {}

    Object.keys(Schema).forEach(key => {
        if (Schema[key].hasOwnProperty('required')) {
            if (!required(values[key])) {
                errors[key] = 'Поле не может быть пустым'
            }
        }

        if (Schema[key].hasOwnProperty('min')) {
            if (!min(values[key], Schema[key]['min'])) {
                errors[key] = `Длина поля должна превышать ${Schema[key]['min']} символов`
            }

        }

        if (Schema[key].hasOwnProperty('max')) {
            if (!max(values[key], Schema[key]['max'])) {
                errors[key] = `Длина поля не должна превышать ${Schema[key]['max']} символов`
            }

        }

        if (Schema[key].hasOwnProperty('isEmail')) {
            if (!isEmail(values[key])) {
                errors[key] = `Некорректный E-mail`
            }
        }
    })

    return errors
}

const required = value => {
    return !!value.length
}

const min = (value, num) => {
    return value.length > num
}

const max = (value, num) => {
    return value.length < num
}

const isEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}