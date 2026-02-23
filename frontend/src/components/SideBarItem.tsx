import { type ReactElement } from 'react'

export default function SideBarItem({text,icon}:{text:string,icon:ReactElement}) {
  return (
    <div className='gap-6 flex items-center text-lg font-brand rounded-md hover:bg-gray-100 py-2 pl-3 transition-all duration-100'>
        {icon}{text}
    </div>
  )
}
