export async function getResume() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resume`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
