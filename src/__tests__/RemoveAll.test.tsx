// funções
import { render, screen, fireEvent } from '@testing-library/react'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'

// componentes
import ReduxProvider from '@/components/ReduxProvider'
import RemoveAll from '../components/Modal/RemoveAll'
import { ToastContainer } from 'react-toastify'

vi.mock('@/app/reducers/participantReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectParticipants: vi.fn(),
    }
})

describe('faz parte do modal de remover todos', () => {
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue([
            { id: '1', name: 'Leandro' },
            { id: '2', name: 'Júlia' },
        ])
    })

    test('um button que fara a acao de exclusao', () => {
        render(
            <ReduxProvider>
                <ToastContainer />
                <RemoveAll />
            </ReduxProvider>,
        )

        const button = screen.getByTestId('action-btn')
        fireEvent.click(button)
        const feedback = screen.getByRole('alert')

        expect(feedback).toBeVisible()
    })
})
