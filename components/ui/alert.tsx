import { FaCircleInfo } from 'react-icons/fa6'

interface Props {
  children: React.ReactNode
}

export default function Alert({ children }: Props) {
  return (
    <div className="flex items-center gap-2 border-l-4 border-red-500 bg-red-600/25 p-3 text-sm text-white">
      <FaCircleInfo />
      {children}
    </div>
  )
}
