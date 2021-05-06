

export const required =(value: string)=>{
if (value ) return undefined

    return "Field is required"
}

export const maxLengthCreator= (maxLength: number) =>(values: string)=>{
if (values && values.length >maxLength ) return `Максимально ${maxLength} символов`

    return undefined
}

// export const maxLengthCreator = (maxLength: number) = >(value)=> {
//     if (value.length > maxLength) return `Max length is ${maxLength} sumbols`
//     return undefined
// }