import cogoToast, { CTReturn } from 'cogo-toast'

type ValidMethod = 'success' | 'info' | 'loading' | 'warn' | 'error'

type Self<T> = T

export const callToast = (method: ValidMethod) => (
	message: string,
	extraOpts?: {}
): CTReturn => {
	const opts = { position: 'top-right' as 'top-right', ...extraOpts }
	return cogoToast[method](message, opts)
}

export const displaySuccess = callToast('success')

export const displayError = callToast('error')

export const displayLoading = callToast('loading')
