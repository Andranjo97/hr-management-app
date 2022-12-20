import { MongoClient, ObjectId } from 'mongodb';
import BaseClient from './baseClient';

const { MONGO_DB_URL } = process.env;

export default class MongoDBClient extends BaseClient {
	static async connect() {
		return await MongoClient.connect(MONGO_DB_URL);
	}

	static async getAll(collectionName) {
		const client = await MongoDBClient.connect();
		try {
			const db = client.db();
			const collection = db.collection(collectionName);
			const result = await collection.find().toArray();

			return result.map((instance) => ({
				...instance,
				_id: instance._id.toString(),
			}));
		} finally {
			await client.close();
		}
	}

	static async getWithLimit(collectionName, limit = 10) {
		const client = await MongoDBClient.connect();
		try {
			const db = client.db();
			const collection = db.collection(collectionName);
			const result = await collection.find().limit(limit).toArray();

			return result.map((instance) => ({
				...instance,
				_id: instance._id.toString(),
			}));
		} finally {
			await client.close();
		}
	}

	static async getOneByAttribute(attribute, value, collectionName) {
		const client = await MongoDBClient.connect();
		try {
			const db = client.db();
			const collection = db.collection(collectionName);
			if (attribute.includes('id')) {
				value = ObjectId(value);
			}

			const result = await collection.findOne({ [attribute]: value });

			return { ...result, _id: result._id.toString() };
		} finally {
			await client.close();
		}
	}
}
