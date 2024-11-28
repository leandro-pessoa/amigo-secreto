// funções
import { screen, render, fireEvent } from '@testing-library/react'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'

// componentes
import ReduxProvider from '@/components/ReduxProvider'
import Remove from '../components/Modal/Remove'

vi.mock('@/app/reducers/participantReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectParticipants: vi.fn(),
    }
})

describe('a acao de remover e diparada', () => {
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue([
            { id: '1', name: 'Leandro' },
        ])
    })

    test('pelo button, que realizara a exclusao', () => {
        render(
            <ReduxProvider>
                <Remove />
            </ReduxProvider>,
        )

        const actionButton = screen.getByTestId('action-btn')
        fireEvent.click(actionButton)

        expect(selectParticipants).toHaveLength(1)
    })
})
