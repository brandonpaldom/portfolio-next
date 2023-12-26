export async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
