// import React from 'react'
// import { useClerk, useUser } from '@clerk/clerk-react'
// import { Hash, House, SquarePen, Image, Eraser, Scissors, FileText, Users } from 'lucide-react';
// import { NavLink } from 'react-router-dom';

// const navItems = [
//     {to: '/ai', label: 'Dashboard', Icon: House},
//     {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
//     {to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash},
//     {to: '/ai/generate-images', label: 'Generate Images', Icon: Image},
//     {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser},
//     {to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors},
//     {to: '/ai/review-resume', label: 'Review Resume', Icon: FileText},
//     {to: '/ai/community', label: 'Community', Icon: Users},
// ]

// const Sidebar = ({sidebar, setSidebar}) => {

//     const {user} = useUser();
//     const {singOut, openUserProfile} = useClerk()

//   return (
//     <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
//         <div className='my-7 w-full'>
//             <img src={user.imageUrl} alt="User avatar"  className='w-13 rounded-full mx-auto'/>
//             <h1 className='mt-1 text-center'>{user.fullName}</h1>
//             <div>
//                 {navItems.map((to, label, Icon)=>(
//                     <NavLink key={to} to={to} end={to === '/ai'} onClick={()=>setSidebar(false)} className={({isActive})=> `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ''}`}>
//                         {({ isActive })=>(
//                             <>
//                             <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}` } />
//                             {label}
//                             </>
//                         )}
//                     </NavLink>
//                 ))}
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Sidebar





import React from 'react';
import { Protect, useClerk, useUser } from '@clerk/clerk-react';
import { Eraser, FileText, Hash, House, Image, Scissors, SquarePen, Users, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-title', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-image', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`
        bg-white border-r border-gray-200
        flex flex-col h-screen
        fixed left-0 top-12 z-50
        transform transition-transform duration-300 ease-in-out
        ${sidebar ? "translate-x-0" : "-translate-x-full"}
        sm:relative sm:translate-x-0
        w-full sm:w-60
      `}
    >
      {/* Scrollable nav section */}
      <div className="flex-col overflow-y-auto">
        <div className="my-7 w-full">
          <img src={user.imageUrl} alt="User avatar" className="w-13 rounded-full mx-auto" />
          <h1 className="mt-1 text-center">{user.fullName}</h1>
          <div className="px-4 mt-5 text-gray-600 font-medium">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/ai'}
                onClick={() => setSidebar(false)}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                    isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ''
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 p-4 px-7 py-6 flex items-center justify-between bg-white">
        <div onClick={openUserProfile} className="flex gap-2 items-center cursor-pointer">
          <img src={user.imageUrl} className="w-8 rounded-full" alt="" />
          <div>
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="Free">Premium</Protect> Plan
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
