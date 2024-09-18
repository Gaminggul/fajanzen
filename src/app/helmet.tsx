import React from 'react';
import { Helmet } from 'react-helmet';

interface TwitterCardProps {
  title: string;
  description: string;
  image: string;
  cardType?: string;
  site?: string;
}

const TwitterCard: React.FC<TwitterCardProps> = ({ title, description, image, cardType = 'summary', site = '@dein_account' }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content={cardType} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default TwitterCard;
