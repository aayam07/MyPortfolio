import home from '../../public/data/home.json';
import projects from '../../public/data/projects.json';
import research from '../../public/data/research.json';
import experience from '../../public/data/experience.json';
import education from '../../public/data/education.json';
import leadership from '../../public/data/leadership.json';
import awards from '../../public/data/awards.json';
import writing from '../../public/data/writing.json';
import reading from '../../public/data/reading.json';
import roadmap from '../../public/data/roadmap.json';
import now from '../../public/data/now.json';
import status from '../../public/data/status.json';
import thoughts from '../../public/data/thoughts.json';
import socials from '../../public/data/socials.json';
import contact from '../../public/data/contact.json';
import uses from '../../public/data/uses.json';

const dataMap: Record<string, any> = {
  'home.json': home,
  'projects.json': projects,
  'research.json': research,
  'experience.json': experience,
  'education.json': education,
  'leadership.json': leadership,
  'awards.json': awards,
  'writing.json': writing,
  'reading.json': reading,
  'roadmap.json': roadmap,
  'now.json': now,
  'status.json': status,
  'thoughts.json': thoughts,
  'socials.json': socials,
  'contact.json': contact,
  'uses.json': uses,
};

export function getJsonData(filename: string) {
  return dataMap[filename] || null;
}
