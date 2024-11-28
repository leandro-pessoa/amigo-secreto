// componentes
import { Provider } from 'react-redux'

// store
import { setupStore } from '@/app/store'

// tipagens
import { ReactElement } from 'react'

// tipagem dos props
interface ReduxProviderProps {
    children: ReactElement | ReactElement[] | string
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
    return <Provider store={setupStore()}>{children}</Provider>
}

export default ReduxProvider
