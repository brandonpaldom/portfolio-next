import NavbarItem from './navbar-item'

interface NavbarItem {
  path: string
  pathName: string
}

const navbarItems: NavbarItem[] = [
  {
    path: '/',
    pathName: 'Portafolio',
  },
  {
    path: '/resume',
    pathName: 'Curriculum',
  },
]

export default function Navbar() {
  return (
    <nav className="card flex items-center gap-2">
      {navbarItems.map((item) => (
        <NavbarItem key={item.path} {...item} />
      ))}
    </nav>
  )
}
