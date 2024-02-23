/**
 * @author Frederico Ferracini Duarte
 * @since 2023-06-06 14:51:09
 */

import moment from "moment-timezone"

type FetchOption = RequestInit & {
	withCredentials: boolean,
}

export const doFetch = async (
	uri: string,
	method: string = "GET",
	headers: any = null,
	body: any = null
) => {
	const proBranch = JSON.parse(window.sessionStorage.ProBranch ||
		'{"CompanyCode":"04","Code":"01"}')
	const erpToken = JSON.parse(window.sessionStorage.ERPTOKEN ||
		'{"token_type":"","access_token":""}')
	const option: FetchOption = {
		method: method,
		withCredentials: true,
		credentials: "include",
		cache: "no-store",
		redirect: 'follow',
		body: null,
		headers: {
			tenantId: `${proBranch.CompanyCode},${proBranch.Code}`,
			Authorization: `${erpToken.token_type} ${erpToken.access_token}`
		}
	}

	if (headers) {
		option.headers = {...option.headers, ...headers}
	}

	if (body) {
		option.body = JSON.stringify(body)
	}

	const url = uri.replace(
		(process.env.NODE_ENV === "development" ? "app-root" : ""), ""
	)

	try {
		const result = await fetch(url, option)
		return await result.json()
	} catch (err) {
		throw err
	}
}

export const formatCEP = (cep: string) => cep.replace(/^(\d{5})(\d{3})/, '$1-$2')

export const formatCPF = (cpf: string) => {
	return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const formatCNPJ = (cnpj: string) =>
	cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

export const formatDate: (d: Date, f: string) => string = (date, format) =>
	moment(date).tz("America/Sao_Paulo").format(format)

export const round: (v: number, d?: number) => string = (value, decimals = 2) =>
	value.toLocaleString('pt-BR', {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	})
