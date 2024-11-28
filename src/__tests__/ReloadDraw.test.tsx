// funções
import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '@/utils/test-utils'
import { setupStore } from '@/app/store'

// componentes
import ReloadDraw from '../components/Modal/ReloadDraw'

// states globais
import { selectDrawnList } from '@/app/reducers/drawReducer'

vi.mock('@/app/reducers/drawReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectDrawnList: vi.fn(),
    }
})

describe('o button de reiniciar o sorteio', () => {
    beforeEach(() => {
        vi.mocked(selectDrawnList).mockReturnValue([
            { id: '1', name: 'Leandro' },
            { id: '2', name: 'Lucas' },
        ])
    })

    test('ira apagar a lista de sorteados', () => {
        const store = setupStore()
        renderWithProviders(<ReloadDraw />, { store })

        const button = screen.getByTestId('action-btn')
        fireEvent.click(button)

        expect(selectDrawnList()).toEqual([])
    })
})
