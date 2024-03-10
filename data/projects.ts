import { Project } from '@/interfaces/project'

export const projects: Project[] = [
  {
    id: 'cystore-ecommerce',
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292853/portfolio/projects/cystore-ecommerce-1.jpg',
    github: 'https://github.com/brandonpaldom/cystore',
    order: 1,
    url: 'https://cystore.vercel.app/',
    name: 'Cystore Ecommerce',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'Clerk'],
    client: 'Cystore',
    description:
      'Cystore es una tienda en línea de productos tecnológicos, desarrollada con Next.js, Tailwind CSS, Firebase y Clerk. Ofrece una experiencia de compra en línea moderna y completa para una amplia gama de productos tecnológicos, con un diseño limpio y elegante.',
    slug: 'cystore-ecommerce',
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292853/portfolio/projects/cystore-ecommerce-1.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292852/portfolio/projects/cystore-ecommerce-2.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292851/portfolio/projects/cystore-ecommerce-3.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292850/portfolio/projects/cystore-ecommerce-4.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292849/portfolio/projects/cystore-ecommerce-5.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292849/portfolio/projects/cystore-ecommerce-6.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1703292848/portfolio/projects/cystore-ecommerce-7.jpg',
    ],
  },
  {
    tags: ['Next.js', 'TypeScript', 'MUI', 'MongoDB', 'Cloudinary'],
    description:
      'Teslo Shop es una tienda en línea de ropa inspirada en la marca Tesla, desarrollada con Next.js, TypeScript, Tailwind CSS, MongoDB y Cloudinary. Ofrece una experiencia de compra en línea moderna y completa para una variedad de prendas de ropa inspiradas en Tesla, con un diseño limpio y elegante. Con Teslo Shop, los usuarios pueden explorar y comprar ropa de calidad inspirada en Tesla, desde camisetas y sudaderas hasta sombreros y otros accesorios. ¡Bienvenidos a Teslo Shop, la tienda en línea de ropa inspirada en Tesla!',
    order: 2,
    id: 'teslo-shop',
    slug: 'teslo-shop',
    name: 'Teslo Shop',
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/teslo-shop-1.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916576/portfolio/projects/teslo-shop-2.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916577/portfolio/projects/teslo-shop-3.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916573/portfolio/projects/teslo-shop-4.jpg',
    ],
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/teslo-shop-1.jpg',
    url: 'https://teslo-shop-azure.vercel.app/',
    github: 'https://github.com/brandonpaldom/teslo-shop',
    client: 'Teslo Shop',
  },
  {
    tags: ['Next.js', 'Cloudinary'],
    url: 'https://homely-marketplace.vercel.app/',
    description:
      'Homely es una plataforma para encontrar propiedades inmobiliarias. En este sitio podrás encontrar propiedad de tus sueños de forma fácil. Fue desarrollada con Next.js y Cloudinary.',
    order: 3,
    client: 'Homely',
    name: 'Homely Marketplace',
    id: 'homely-marketplace',
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/homely-marketplace-1.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/homely-marketplace-2.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/homely-marketplace-3.jpg',
    ],
    github: 'https://github.com/brandonpaldom/homely',
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/homely-marketplace-1.jpg',
    slug: 'homely-marketplace',
  },
  {
    client: 'Magnolia',
    description:
      'Magnolia es un sitio de comercio electrónico para la industria de la moda. Fue desarrollado con React, Tailwind CSS y Firebase.',
    url: 'https://magnolia-shop.netlify.app/',
    github: 'https://github.com/brandonpaldom/ch-ecommerce-react',
    order: 4,
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/magnolia-ecommerce-1.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/magnolia-ecommerce-2.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/magnolia-ecommerce-3.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/magnolia-ecommerce-4.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/magnolia-ecommerce-5.jpg',
    ],
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    slug: 'magnolia-ecommerce',
    name: 'Magnolia Ecommerce',
    id: 'magnolia-ecommerce',
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/magnolia-ecommerce-2.jpg',
  },
  {
    url: 'https://dazzling-travesseiro-ab7e24.netlify.app/',
    github: 'https://github.com/brandonpaldom/barber-vue-frontend',
    client: 'Barber Vue',
    order: 5,
    slug: 'barber-vue-appointments',
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021184/portfolio/projects/barber-vue-2.jpg',
    name: 'BarberVue Appointments',
    id: 'barber-vue-appointments',
    description:
      'Barber Vue es una aplicación web para agendar citas en una barbería. Fue desarrollada con Vue.js, Tailwind CSS, MongoDB, Express y Node.js. Accede a la plataforma con las siguientes credenciales: email <client@mail.com>, password <password>. Y comienza a agendar tus citas.',
    tags: ['Vue.js', 'Tailwind CSS', 'MongoDB', 'Express', 'Node.js'],
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021184/portfolio/projects/barber-vue-1.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021184/portfolio/projects/barber-vue-2.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021184/portfolio/projects/barber-vue-3.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021185/portfolio/projects/barber-vue-4.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021184/portfolio/projects/barber-vue-5.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021184/portfolio/projects/barber-vue-6.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1689021184/portfolio/projects/barber-vue-7.jpg',
    ],
  },
  {
    url: 'https://www.figma.com/file/6UxLKHsgrRXjWoQ5Ie6AZm/Express-Travel?node-id=14%3A2&t=muipN5pvOfPKVj2G-3',
    id: 'express-travel',
    tags: ['Figma'],
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916578/portfolio/projects/express-travel-1.jpg',
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916578/portfolio/projects/express-travel-1.jpg',
    ],
    client: 'Express Travel',
    description:
      '"Express Travel" es un proyecto de rediseño UI/UX para un sitio web de viajes, optimizado tanto para escritorio como para dispositivos móviles. El nuevo diseño pretende mejorar la experiencia del usuario y facilitarle la búsqueda y reserva de sus vacaciones soñadas.',
    order: 6,
    name: 'Express Travel',
    slug: 'express-travel',
  },
  {
    description:
      'Una colección de anuncios para redes sociales que he diseñado para diferentes clientes de la industria inmobiliaria',
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/social-media-ads-cover.jpg',
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916576/portfolio/projects/social-media-ads-1.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916577/portfolio/projects/social-media-ads-2.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916576/portfolio/projects/social-media-ads-3.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916573/portfolio/projects/social-media-ads-4.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/social-media-ads-5.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916574/portfolio/projects/social-media-ads-6.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916573/portfolio/projects/social-media-ads-7.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916578/portfolio/projects/social-media-ads-8.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916577/portfolio/projects/social-media-ads-9.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/social-media-ads-10.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/social-media-ads-11.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916576/portfolio/projects/social-media-ads-12.jpg',
    ],
    squareImage: true,
    name: 'Social Media Ads',
    order: 7,
    id: 'social-media-ads',
    slug: 'social-media-ads',
    tags: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    name: 'Real Estate Landing Pages',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Elementor'],
    slug: 'real-estate-landing-pages',
    description:
      'Landing pages para diversas promociones inmobiliarias. Los sitios muestran los inmuebles y ofrecen información sobre sus características y servicios, para que los compradores potenciales puedan obtener más información e imaginarse viviendo allí.',
    order: 8,
    id: 'real-estate-landing-pages',
    projects: [
      {
        url: 'https://veramonteresidencial.vreal.mx/',
        client: 'Veramonte Residencial',
        image:
          'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/real-estate-landing-pages-1.jpg',
      },
      {
        url: 'https://cityblue.vreal.mx/',

        client: 'City Blue Santa Fe',
        image:
          'https://res.cloudinary.com/dlomynswh/image/upload/v1678916577/portfolio/projects/real-estate-landing-pages-2.jpg',
      },
      {
        client: 'Mareazul Real Estate',
        image:
          'https://res.cloudinary.com/dlomynswh/image/upload/v1678916577/portfolio/projects/real-estate-landing-pages-3.jpg',
        url: 'https://mareazul.vreal.mx/bf/es/',
      },
      {
        image:
          'https://res.cloudinary.com/dlomynswh/image/upload/v1678916573/portfolio/projects/real-estate-landing-pages-4.jpg',
        client: 'Aura Towers',
        url: 'https://hercesa.vreal.mx/aura',
      },
    ],
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/real-estate-landing-pages-1.jpg',
    offline: true,
  },
  {
    id: 'sayab-juriquilla',
    coverImage:
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916576/portfolio/projects/sayab-juriquilla-cover.jpg',
    images: [
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916572/portfolio/projects/sayab-juriquilla-1.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916574/portfolio/projects/sayab-juriquilla-2.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916575/portfolio/projects/sayab-juriquilla-3.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916576/portfolio/projects/sayab-juriquilla-4.jpg',
      'https://res.cloudinary.com/dlomynswh/image/upload/v1678916578/portfolio/projects/sayab-juriquilla-5.jpg',
    ],
    slug: 'sayab-juriquilla',
    order: 9,
    client: 'Sayab Juriquilla',
    description:
      '"Sayab Juriquilla" es un proyecto de desarrollo inmobiliario que incluye branding, diseño y sitio web para un nuevo conjunto de terrenos en Querétaro, México. El proyecto destaca las características y beneficios de la ubicación, facilitando a los posibles compradores conocer más y tomar una decisión de compra informada.',
    name: 'Sayab Juriquilla',
    tags: ['Photoshop', 'Illustrator', 'InDesign', 'WordPress'],
  },
]
