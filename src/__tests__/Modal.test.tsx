// funções
import { screen, render, fireEvent } from '@testing-library/react'

// componentes
import Modal from '../components/Modal'
import ReduxProvider from '../components/ReduxProvider'

describe('o modal, por padrao, vem com', () => {
    test('um button para cancelar a acao, fechando o modal', () => {
        render(
            <ReduxProvider>
                <Modal
                    title={''}
                    children={''}
                    cancelTxt={''}
                    acceptTxt={''}
                    func={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            </ReduxProvider>,
        )

        const modal = screen.getByTestId('modal')
        const button = screen.getByTestId('cancel-btn')
        fireEvent.click(button)

        expect(modal).not.toBeVisible()
    })

    test('um button para fazer a acao, que sera passada por props', () => {
        render(
            <ReduxProvider>
                <Modal
                    title={''}
                    children={''}
                    cancelTxt={''}
                    acceptTxt={''}
                    func={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            </ReduxProvider>,
        )

        const button = screen.getByTestId('action-btn')

        expect(button).toBeInTheDocument()
    })
})
