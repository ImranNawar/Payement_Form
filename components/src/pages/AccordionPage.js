import React from 'react';
import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 'eer87',
      label: 'Can I use React on a Projects?',
      content: 'You can use React on any Project you want.You can use React on any Project you want.'
    },
    {
      id: '9d8fd',
      label: 'Can I use JavaScript on a Projects?',
      content: 'You can use JavaScript on any Project you want.You can use JavaScript on any Project you want.'
    },
    {
      id: 'df78f',
      label: 'Can I use CSS on a Projects?',
      content: 'You can use CSS on any Project you want.You can use CSS on any Project you want.'
    }
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage;
