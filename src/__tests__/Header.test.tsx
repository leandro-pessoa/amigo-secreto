import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

test('o header deve conter duas imagens, cada uma com um texto alternativo', () => {
    render(<Header />)

    const logo = screen.getByAltText('Logo do sorteador')
    const person = screen.getByAltText('Pessoa segurando um presente na mão')

    expect(logo).toBeVisible()
    expect(person).toBeVisible()
    expect(logo).toBeInTheDocument()
    expect(person).toBeInTheDocument()
})
