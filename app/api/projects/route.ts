import { db } from '@/lib/firebase/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

export async function GET() {
  const q = query(collection(db, 'projects'), orderBy('order', 'asc'))
  const querySnapshot = await getDocs(q)

  const projects = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  })

  return Response.json(projects)
}
