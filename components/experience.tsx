'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/theme-context';
import useSectionInView from '@/hook/use-section-in-view';
import { experiencesData } from '@/lib/data';
import SectionHeading from './section-heading';

const Experience = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id='experience'
      className='scroll-mt-28 mb-28 sm:mb-40'
    >
      <SectionHeading title='My Experience' />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((data, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              date={data.date}
              dateClassName='mx-4'
              icon={data.icon}
              iconStyle={{
                background:
                  theme === 'light'
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
              contentStyle={{
                background:
                  theme === 'light'
                    ? '#f3f4f6'
                    : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rbga(255, 255, 255, 0.5)',
              }}
            >
              <h3 className='font-semibold capitalize'>
                {data.title}
              </h3>
              <p className='font-normal !mt-0'>
                {data.location}
              </p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {data.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
