import {NowRequest ,NowResponse} from '@vercel/node'
import { Db, Collection} from 'mongodb'
import url from 'url'
import connectToDataBase from '../../utils/connectToDataBase'

let cacheDb:Db = null

export default async (req:NowRequest, res:NowResponse) => {

  const db = await connectToDataBase(cacheDb)
  const members = await db.collection('members').find({}).toArray()

  return res.status(200).json(members)
}
