import { db } from '@/lib/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

export async function GET(request: Request) {
  const docRef = doc(db, 'resume', 'ptjIICec3mvulOz94z9T')
  const docSnap = await getDoc(docRef)

  return Response.json(docSnap.data())
}
