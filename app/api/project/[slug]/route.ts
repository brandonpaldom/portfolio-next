import { db } from '@/lib/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params
  const docRef = doc(db, 'projects', slug)
  const docSnap = await getDoc(docRef)

  return Response.json({ ...docSnap.data(), id: docSnap.id })
}
