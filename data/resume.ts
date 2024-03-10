import { Resume } from '@/interfaces/resume'

export const resume: Resume = {
  education: [
    {
      organization: 'Universidad Euro Hispanoamericana',
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/ueh-logo.png',
      title: 'Mercadotecnia',
      date: '2022 - actualidad',
    },
    {
      title: 'Publicidad y Relaciones Públicas',
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/uv-logo.png',
      date: '2015 - 2019',
      organization: 'Universidad Veracruzana',
    },
  ],
  experience: [
    {
      organization: 'Universidad Técnica Superior de Xalapa',
      date: 'ago 2023 - actualidad',
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1695438294/portfolio/profile/unitex-logo.png',
      title: 'Auxiliar de TI',
    },
    {
      organization: 'Hightek Desarrollo y Consultoría',
      title: 'Desarrollador front-end',
      date: 'may 2023 - jun 2023',
      summary:
        'Participé en diversos proyectos que abarcaron el diseño y desarrollo de plantillas de email, la elaboración de prototipos de vistas para aplicaciones web y la creación de un video promocional enfocado en destacar las funcionalidades de una aplicación web específica.',
    },
    {
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/vreal-logo.png',
      date: 'jul 2020 - dic 2022',
      summary:
        'Experiencia especializada en marketing digital dentro del sector inmobiliario: diseño y gestión de campañas en Facebook Ads y Google Ads, desarrollo de landing pages, creación de identidad visual (logotipos, folletos, presentaciones) y plataforma de métricas analíticas. Destacada administración de clientes a través de herramientas CRM.',
      title: 'Especialista en marketing digital',
      organization: 'Vreal',
    },
    {
      title: 'Editor de video / Servicio social',
      date: 'ago 2019 - feb 2020',
      organization: 'Radiotelevisión de Veracruz',
      summary:
        'Experiencia en prácticas profesionales enfocadas en edición de videos musicales con técnicas multicámara, creación de gráficos animados para redes sociales y capacitación en Final Cut Pro. Habilidad en vectorización de gráficos y apoyo logístico en eventos culturales.',
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/rtv-logo.png',
    },
  ],
  certifications: [
    {
      date: 'dic 2023',
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/coderhouse-logo.png',
      title: 'Curso de Next.js',
      organization: 'Coderhouse',
    },
    {
      date: 'jun 2022',
      title: 'Curso de React',
      organization: 'Coderhouse',
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/coderhouse-logo.png',
    },
    {
      organization: 'Google',
      image:
        'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/google-logo.png',
      title: 'Conceptos Básicos del Marketing Digital',
      date: 'ene 2020',
    },
  ],
}
