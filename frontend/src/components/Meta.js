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
  description: 'Code Like A Boss',
  keywords: 'dev ngecu,dev,ngecu,ngechu',
}

export default Meta
