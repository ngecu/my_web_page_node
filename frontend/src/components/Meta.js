import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Dev Ngecu',
  description: 'Dev Ngecu here,A story waiting to be discovered.An awakened soul just moments away from living.The mind which happens to know little but is not afraid to learn.A simplified math equation, yet difficult to solve.From very early on in my life, I started to fall in love with technology heart_eyes This love has helped me develop a very good technological mindset, and given me the curiosity to learn more. I firmly believe that no amount of knowledge is enough knowledge. brain',
  keywords: 'dev ngecu,dev,ngecu,ngechu',
}

export default Meta
