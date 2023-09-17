import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Pricecity() {
  let [categories] = useState({
    Vadodara: [
      {
        
        id: 1,
        title: 'Dhairya R Patel',
        date: 'Dog Groomer',
        commentCount:'8758608612'
      },
      {
        id: 1,
        title: 'minashki yadav',
        date: 'cat Groomer',
        commentCount:'8345566287'
      },
    ],
    Ahmedabad: [
      {
        id: 1,
        title: 'vraj R patel',
        date: 'cat Groomer',
        commentCount:'8345566287'
      },
      {
        id: 1,
        title: 'Yash D Mehta',
        date: 'Dog Groomer',
        commentCount:'8345566287'
      },
    ],
    Surat: [
      {
        id: 1,
        title: 'Jigar Bhatt',
        date: 'cat Groomer',
        commentCount:'8345566287'
      },
      {
        id: 1,
        title: 'Jayshika parmar',
        date: 'dog Groomer',
        commentCount:'8345566287'
      },
    ],
  })

  return (
    <div className="w-full max-w-md mx-auto  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount}</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} </li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Pricecity