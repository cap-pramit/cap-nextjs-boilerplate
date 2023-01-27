import { type_blog } from './types'

export const getBlogList = async (): Promise<type_blog[]> => {
  try {
		const res = await fetch(`/api/blogs`)
		const { data = [] } = await res.json()
		return data
	} catch (err) {
		console.log(err)
		throw err
	}
}