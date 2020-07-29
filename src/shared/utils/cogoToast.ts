import cogoToast from 'cogo-toast'

type ValidMethod = 'success' | 'info' | 'loading' | 'warn' | 'error'

export const callToast = (method: ValidMethod) => (
	message: string,
	extraOpts?: {}
) => {
	cogoToast[method](message, { position: 'top-right', ...extraOpts })
}

export const displaySuccess = callToast('success')

export const displayError = callToast('error')

export const displayLoading = callToast('loading')
