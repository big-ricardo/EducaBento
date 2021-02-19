
import {MongoClient, Db} from 'mongodb'
import url from 'url'

export default async function connectToDataBase(cacheDb:any){
  const uri = process.env.MONGODBURI;

  if(cacheDb){
    return cacheDb
  }

  const client = await MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

  const dbName = url.parse(uri).pathname.substr(1)

  const db = client.db(dbName)

  if(!client.isConnected()){

      return null
  }

  cacheDb = db

  return db

}
