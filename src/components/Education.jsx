import React from 'react';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const education = [
  {
    title: 'School',
    data: [
      {
        id: 1,
        title: 'Bachelor',
        university: 'Taltech University',
        degree: 'BSc in Applied Science - BASc, Logistics, Materials, and Supply Chain Management',
        year: '2014-2017',
      },
      {
        id: 2,
        title: "Master's",
        university: 'Taltech University',
        degree: 'Master\'s degree, Analysis and Design of Information Systems',
        year: '2019-2022',
      },
    ],
  },
  {
    title: 'Courses',
    data: [
      {
        id: 1,
        title: 'Become a Wordpress Developer: Unlocking Power With Code',
        provider: 'Udemy',
        credential: 'Credential ID UC-4b21724-edde-4aaf-ba06-b7348668a8e4',
        year: '2021'
        
      },
      {
        id: 2,
        title: 'Web Developer Bootcamp 2021',
        provider: 'Udemy',
        credential: 'Credential ID UC-296d1c7e-2812-47eb-a146-97e141c112ef',
        year: '2020'
      },
    ],
  },
];

export default function Example() {
  let [categories] = useState({
    School: education[0].data,
    Courses: education[1].data,
  });

  return (
    <>
    <section className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-left`}>My Education</p>
            <h2 className={`${styles.sectionHeadText} text-left`}>Courses & Education.</h2>
        </motion.div>

        <div className='w-full flex justify-start'>
            <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-left right-0'
            >
            Following tabs showcase the schools I have finished and the courses I have taken.
            </motion.p>
        </div>
        <div className="px-2 py-16 sm:px-0">
            <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {education.map((category) => (
                <Tab
                key={category.title}
                className={({ selected }) =>
                    classNames(
                  'w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-secondary'
                    )
                }
                >
                    {category.title}
                </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {education.map((category, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-light_b p-3',
                'ring-blue ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {category.data.map((item) => (
                  <li
                    key={item.id}
                    className="relative rounded-md p-3 hover:bg-gray-300"
                  >
                    <h3 className="text-md font-poppins text-white leading-5 hover:text-primary">{item.title}</h3>

                    <ul className="mt-1 flex space-x-1 text-sm font-normal leading-4 text-gray-500">
                      <li>{item.university || item.provider}</li>
                      <li>&middot;</li>
                      <li>{item.degree || item.credential}</li>
                      <li>&middot;</li>
                      <li>{item.year}</li>
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
    </section>
    </>
  );
}
