// funções
import { toast } from 'react-toastify'

const error = (msg: string) => {
    toast.error(msg, {
        toastId: 1,
    })
}

const success = (msg: string) => {
    toast.success(msg, {
        toastId: 2,
    })
}

const warning = (msg: string) => {
    toast.warning(msg, {
        toastId: 3,
    })
}

export { error, success, warning }
