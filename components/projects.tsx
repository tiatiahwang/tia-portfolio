import { projectsData } from '@/lib/data';
import SectionHeading from './section-heading';
import Project from './project';

const Projects = () => {
  return (
    <section>
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
