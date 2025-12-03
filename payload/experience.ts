import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)지오스토리',
      positions: [
        {
          title: '백엔드 개발자',
          startedAt: '2024-01',
          endedAt: '2024-10',
          descriptions: [
            'Steering Kernel patching and updates for various distributions',
            'Automating deployment and integration processes for Linux servers',
            'Spearheading initiatives to enhance Linux kernel security',
            'Collaborating with global developers to coordinate code contributions',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
        },
        {
          title: 'R&D / 백엔드 개발자',
          startedAt: '2022-01',
          endedAt: '2023-12',
          descriptions: [
            'Assisted senior engineers in maintaining and updating kernel patches for Linux distributions',
            'Supported deployment and integration tasks for Linux server environments',
            'Conducted research on Linux kernel security practices and presented findings to the team',
          ],
          skillKeywords: [
            'Node.js',
            'Python',
            'React',
            'HTML',
            'PostgreSQL',
            'ERD Designed',
            'Linux',
            'RESTful API',
          ],
        },
      ],
    },
  ],
};

export default experience;
