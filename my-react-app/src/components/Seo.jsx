import { useLocation } from 'react-router-dom'

// TODO: replace with the real production domain (no trailing slash)
export const SITE_URL = 'https://majormusicschool.com'
const SITE_NAME = 'Major Music School'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/s4o4wqaq/image/upload/f_auto,q_auto,w_1200/v1788892537/%D0%A3%D0%A0%D0%9E%D0%A6%D0%98.jpg'

// React 19 hoists <title>, <meta> and <link> rendered anywhere into <head>.
function Seo({ title, description, image = DEFAULT_IMAGE, noindex = false }) {
  const { pathname } = useLocation()
  const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Музикално училище в Пловдив`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

export default Seo
