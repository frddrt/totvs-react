/**
 * @author Frederico Ferracini Duarte
 * @since 2023-06-06 14:51:09
 */

import moment from "moment-timezone"

type FetchOption = RequestInit & {
	withCredentials: boolean,
}

type ErpToken = {
	token_type: string
	access_token: string
}

export const doFetch = async (
	uri: string,
	method: string = "GET",
	headers: any = null,
	body: any = null
): Promise<any> => {
	const erpToken: ErpToken = getErpToken()
	const option: FetchOption = getFetchOption()

	const url = uri.replace(
		(process.env.NODE_ENV === "development" ? ".." : ""), ""
	)

	try {
		const result = await fetch(url, option)
		return await result.json()
	} catch (err) {
		throw err
	}

	function getErpToken(): ErpToken {
		try {
			return JSON.parse(window.sessionStorage.ERPTOKEN ||
				'{"token_type":"","access_token":""}')
		} catch (error) {
			return {"token_type":"","access_token":""}
		}
	}

	function getFetchOption(): FetchOption {
		const proBranch = getProBranch()
		const baseHeaders = {
			tenantId: `${proBranch.CompanyCode},${proBranch.Code}`,
			Authorization: `${erpToken.token_type} ${erpToken.access_token}`
		}
		const option: FetchOption = {
			method: method,
			withCredentials: true,
			credentials: "include",
			cache: "no-store",
			redirect: "follow",
			body: body ? JSON.stringify(body) : null,
			headers: headers ? { ...baseHeaders, ...headers } : baseHeaders,
		}

		return option
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

export const getProBranch = (): {
	CompanyCode: string
	Code: string
} =>
	JSON.parse(window.sessionStorage.ProBranch || '{"CompanyCode":"04","Code":"01"}')

export const round: (v: number, d?: number) => string = (value, decimals = 2) =>
	value.toLocaleString('pt-BR', {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	})
