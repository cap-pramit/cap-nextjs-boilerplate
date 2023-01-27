// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { type_blog_records } from '../../src/helpers/types'
import storedData from './data.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<type_blog_records>
) {
  const blogList: type_blog_records = {
    data: storedData.blogs
  }
  res.status(200).json(blogList)
}
