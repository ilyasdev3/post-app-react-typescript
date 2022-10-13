export interface IPost {
	id: number
	title: string
	description: string
	image: string | ArrayBuffer | null
	createdAt: Date
}
