import React from 'react';
import Link from './Link';

const Sidebar = () => {
  const links = [
    {label: 'Dropdown', path: '/'},
    {label: 'Accordion', path: '/accordion'},
    {label: 'Buttons', path: '/buttons'},
    {label: 'Modal', path: '/modal'},
    {label: 'Table', path: '/table'},
    {label: 'Counter', path: '/counter'}
  ];

  const renderedLinks = links.map((link) => {
    return <Link key={link.label} to={link.path} className="m-4" activeClassName="font-bold border-l-4 border-blue-500 pl-2 items-start">{link.label}</Link>
  })
  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col'>
      {renderedLinks}
    </div>
  )
}

export default Sidebar