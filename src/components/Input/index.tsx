// componentes
import { StyledInput } from './styles'

// tipagem dos props
interface InputProps {
    placeholder: string
    value: string
    setValue: (e: string) => void
    id?: string
}

const Input = ({ placeholder, value, setValue, id }: InputProps) => {
    return (
        <StyledInput
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete='off'
            id={id}
            maxLength={15}
        />
    )
}

export default Input
