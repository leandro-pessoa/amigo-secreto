// funções
import { fireEvent, render, screen } from '@testing-library/react'

// componentes
import ParticipantItem from '../pages/Participants/ParticipantsList/ParticipantItem'
import ReduxProvider from '@/components/ReduxProvider'

describe('cada item da lista deve', () => {
    test('conter um button', () => {
        render(
            <ReduxProvider>
                <ParticipantItem id='' name='' />
            </ReduxProvider>,
        )

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
})

describe('ao clicar no button', () => {
    test('o dropdown se abrira', () => {
        render(
            <ReduxProvider>
                <ParticipantItem id='' name='' />
            </ReduxProvider>,
        )

        const button = screen.getByRole('button')
        const dropdown = screen.getByTestId('dropdown')
        fireEvent.click(button)

        expect(dropdown).toBeVisible()
    })
})
