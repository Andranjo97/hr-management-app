import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const client = await MongoClient.connect(
			'mongodb+srv://andranjo:Tz9t95tDTAiyfISt@hrapp.zh4xuh0.mongodb.net/?retryWrites=true&w=majority'
		);
	}
}
