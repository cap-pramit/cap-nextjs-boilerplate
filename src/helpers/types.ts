export type type_blog_records = {
  data: Array<type_blog> 
}

export type type_blog = {
  id: number,
  title: string,
  author: string,
  content: string,
  createdOn: string,
  titleImage: string
}