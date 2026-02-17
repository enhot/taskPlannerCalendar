export enum Elanguage {
	EN = 'en',
	UA = 'ua',
	RU = 'ru'
}

export type TLabels = 
| Elanguage
| never
| 'pages.common.email'
| 'pages.common.password'
| 'pages.common.sign-in'
| 'pages.common.to-log-in'
| 'pages.common.to-auth'
| 'pages.common.add-photo'
| 'pages.common.placeholder-email'
| 'pages.common.placeholder-name'
| 'pages.common.placeholder-password'
| 'pages.log-in-out.registretion.title'
| 'pages.log-in-out.registretion.subtitle'
| 'pages.log-in-out.registretion.name'
| 'pages.log-in-out.registretion.confirm-password'
| 'pages.log-in-out.registretion.terms'
| 'pages.log-in-out.registretion.submit'
| 'pages.log-in-out.auth.title'
| 'pages.log-in-out.auth.subtitle'
| 'pages.log-in-out.auth.forgot-password'
| 'pages.log-in-out.auth.submit'
| 'pages.modal.leading'
| 'pages.modal.close'
| 'pages.modal.upload'
;