import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faBlogger, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image:
    'https://raw.githubusercontent.com/BoHyun-Choi-0320/bohyun-choi-0320.github.io/main/profile.jpeg',
  name: {
    title: '최보현',
    small: '(Choi BoHyun)',
  },
  contact: [
    {
      title: '320fleur@gmail.com',
      link: 'mailto:320fleur@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/BoHyun-Choi-0320/reseume',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/bohyun0320',
      icon: faLinkedin,
    },
    {
      link: 'https://etoile-recording.tistory.com',
      icon: faBlogger,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
