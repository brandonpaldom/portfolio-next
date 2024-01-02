import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import ContactItem from './contact-item'

interface ContactItem {
  href: string
  icon: JSX.Element
}

const contactItems: ContactItem[] = [
  {
    href: 'mailto:brandonpaldom@gmail.com',
    icon: <FaEnvelope size={16} />,
  },
  {
    href: 'https://linkedin.com/in/brandonpaldom',
    icon: <FaLinkedin size={16} />,
  },
  {
    href: 'https://github.com/brandonpaldom',
    icon: <FaGithub size={16} />,
  },
]

export default function Contact() {
  return (
    <div className="card flex items-center justify-center gap-2">
      {contactItems.map((item) => (
        <ContactItem key={item.href} {...item} />
      ))}
    </div>
  )
}
