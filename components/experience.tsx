'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSectionInView from '@/hook/use-section-in-view';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import React from 'react';

const Experience = () => {
  const { ref } = useSectionInView('Experience');
  return (
    <section ref={ref} id='experience'>
      <SectionHeading title='My Experience' />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((data, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              date={data.date}
              dateClassName='mx-4'
              icon={data.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
            >
              <h3 className='font-semibold capitalize'>
                {data.title}
              </h3>
              <p className='font-normal !mt-0'>
                {data.location}
              </p>
              <p className='!mt-1 !font-normal text-gray-700'>
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
