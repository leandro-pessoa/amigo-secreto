// funções
import { fireEvent, render, screen } from '@testing-library/react'
import { SetStateAction } from 'react'

// componentes
import Dropdown from '../pages/Participants/ParticipantsList/ParticipantItem/Dropdown'
import ReduxProvider from '@/components/ReduxProvider'
import Edit from '@/components/Modal/Edit'
import Remove from '@/components/Modal/Remove'

describe('o dropdown deve conter', () => {
    test('um button que abrira o modal de edicao', () => {
        render(
            <ReduxProvider>
                <Dropdown
                    display={false}
                    setIsDropdownVisible={function (
                        value: SetStateAction<boolean>,
                    ): void {
                        throw new Error(
                            `Function not implemented with value ${value}.`,
                        )
                    }}
                    id={''}
                    name={''}
                />
                <Edit />
            </ReduxProvider>,
        )

        const button = screen.getByTestId('edit-btn')
        const editModal = screen.getByTestId('edit-modal')
        fireEvent.click(button)

        expect(editModal).toBeVisible()
    })

    test('um button que abrira o modal de exclusao', () => {
        render(
            <ReduxProvider>
                <Dropdown
                    display={false}
                    setIsDropdownVisible={function (
                        value: SetStateAction<boolean>,
                    ): void {
                        throw new Error(
                            `Function not implemented with value ${value}.`,
                        )
                    }}
                    id={''}
                    name={''}
                />
                <Remove />
            </ReduxProvider>,
        )

        const button = screen.getByTestId('edit-btn')
        const deleteModal = screen.getByTestId('delete-modal')
        fireEvent.click(button)

        expect(deleteModal).toBeVisible()
    })
})
