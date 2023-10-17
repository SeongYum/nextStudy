import { connectDB } from '@/util/database.js';
import Link from 'next/link';
export default async function List() {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((idx, i) => (
        <div key={i} className="list-item">
          <Link href={'/detail/' + result[i]._id}>
            <h4>{result[i].title}</h4>
          </Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
