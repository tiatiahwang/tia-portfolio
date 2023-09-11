'use client';

import Project from './project';
import SectionHeading from './section-heading';
import useSectionInView from '@/hook/use-section-in-view';
import { projectsData } from '@/lib/data';

const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section
      ref={ref}
      id='projects'
      className='scroll-mt-28 mb-28'
    >
      <SectionHeading title='My Projects' />
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
