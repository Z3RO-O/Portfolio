import { useEffect } from 'react';

interface PageHeadProps {
  title: string;
  description?: string;
}

const PageHead = ({ title, description }: PageHeadProps) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);

  return null;
};

export default PageHead;
