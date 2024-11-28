// funções
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { participants } from '@/utils/participants'
import { error } from '@/utils/feedbacks'
import { sort } from '@/utils/sort'

// componentes
import { StyledDiv } from './styles'
import Input from '@/components/Input'
import Select from './Select'
import Container from '@/components/Container'

// ícones
import { IoSearchOutline } from 'react-icons/io5'

// actions
import { setParticipants } from '@/app/reducers/participantReducer'

// states globais
import { selectSelectedOption } from '@/app/reducers/appReducer'

const Filters = () => {
    // states globais
    const dispatch = useAppDispatch()
    const selectedOption = useAppSelector(selectSelectedOption)

    // states
    const [searchValue, setSearchValue] = useState<string>('')

    // funções para a busca de participantes específicos
    const searchTest = (name: string) => {
        const regex = new RegExp(searchValue.trim(), 'i')
        return regex.test(name)
    }
    const searchHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newArray = participants().filter((participant) =>
            searchTest(participant.name),
        )
        if (newArray.length < 1) {
            error(`Não há participante com "${searchValue.trim()}" no nome.`)
            return
        }
        dispatch(setParticipants(sort(newArray, selectedOption)))
        setSearchValue('')
    }

    return (
        <Container>
            <StyledDiv>
                <form
                    className='filters__input-container'
                    onSubmit={(e) => searchHandle(e)}
                >
                    <Input
                        placeholder='Faça sua pesquisa aqui'
                        value={searchValue}
                        setValue={setSearchValue}
                    />
                    <IoSearchOutline size={20} />
                </form>
                <div className='filters__select-container'>
                    <label htmlFor='select'>Filtrar:</label>
                    <Select />
                </div>
            </StyledDiv>
        </Container>
    )
}

export default Filters
