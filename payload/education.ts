import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '동양미래대학교',
      subTitle: '컴퓨터 소프트웨어공학과 / 편입 / 학사 졸업',
      startedAt: '2022-03',
      endedAt: '2023-02',
    },
    {
      title: '연성대학교',
      subTitle: '컴퓨터 소프트웨어과 / 전문학사 졸업',
      startedAt: '2019-03',
      endedAt: '2022-02',
    },
    {
      title: '세현고등학교',
      subTitle: '자연계 졸업 (서울 소재지)',
      startedAt: '2016-03',
      endedAt: '2019-02',
    },
  ],
};

export default education;
