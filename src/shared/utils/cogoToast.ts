import cogoToast from 'cogo-toast'

type ValidMethod = 'success' | 'info' | 'loading' | 'warn' | 'error'

export const callToast = (method: ValidMethod) => (message: string) => {
	cogoToast[method](message, { position: 'top-right' })
}

export const displaySuccess = callToast('success')

export const displayError = callToast('error')
