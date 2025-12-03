import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(payload: IProject.Item): IRow.Payload {
  const DATE_FORMAT = 'yyyy-MM-dd'; // 날짜 포맷을 'YYYY-MM-DD'로 설정
  const startedAt = DateTime.fromFormat(payload.startedAt, 'yyyy-MM-dd').toFormat(DATE_FORMAT); // 시작일 변환
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, 'yyyy-MM-dd').toFormat(DATE_FORMAT); // 종료일 변환
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`; // 종료일이 없을 경우 " ~" 형태
  })();

  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
    },
  };
}
