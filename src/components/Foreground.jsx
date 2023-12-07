import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      fileSize: '0.9MB',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Upload',
        tagColor: 'blue',
      },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      fileSize: '0.9MB',
      close: true,
      tag: {
        isOpen: false,
        tagTitle: 'Download Now...',
        tagColor: 'green',
      },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      fileSize: '0.9MB',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now...',
        tagColor: 'green',
      },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5 ">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
