import { IEducation } from '../component/education/IEducation';

const certificate: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'AWS Solution Architecture - Associate',
      subTitle: 'AWS(Amazon Web Service) / 774점',
      startedAt: '2025-11',
      // endedAt: '2023-02',
    },
    {
      title: '네트워크관리사 2급',
      subTitle: '한국정보통신자격협회',
      startedAt: '2024-06',
      // endedAt: '2022-02',
    },
    {
      title: '정보처리기사',
      subTitle: '한국산업인력공단',
      startedAt: '2024-03',
      // endedAt: '2019-02',
    },
    {
      title: 'SQL Deveopler',
      subTitle: '한국데이터산업진흥원',
      startedAt: '2023-10',
      // endedAt: '2019-02',
    },
    {
      title: '지도제작기능사',
      subTitle: '한국산업인력공단',
      startedAt: '2023-04',
      // endedAt: '2019-02',
    },
  ],
};

export default certificate;
