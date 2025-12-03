import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Liftify: Migration 자동화 프로젝트',
      startedAt: '2025-05-09',
      endedAt: '2025-07-10',
      where: '최종 / 팀 프로젝트(5명)',
      descriptions: [
        {
          content: '개요 : ',
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            { content: '팀장 : 전체 일정/리소스 관리, 주요 아키텍처 의사결정, 팀원 역할 조율' },
            {
              content: 'Backend 개발, CI/CD Pipeline 구축',
              // weight: '',
              descriptions: [
                { content: 'Jenkins + ArgoCD 기반 CI/CD & GitOps' },
                { content: '배포 안정성 강화' },
              ],
            },
            { content: 'Infra 설계 및 IaC 구현' },
            {
              content: 'Backend 개발, CI/CD Pipeline 구축',
              // weight: '',
              descriptions: [
                { content: 'Jenkins + ArgoCD 기반 CI/CD & GitOps' },
                { content: '배포 안정성 강화' },
              ],
            },
            {
              content: 'DB Migration 자동화 기능 구현',
              // weight: '',
              descriptions: [
                { content: 'DMS + Step Functions 기반 DB Migration 자동화' },
                { content: '데이터 일관성 100% 확보' },
              ],
            },
          ],
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            { content: '총 Migration 소요시간 27분으로 단축(서비스 규모에 따라 상이)' },
            { content: '마이그레이션시, 무중단 전환 실현' },
            { content: '최종 Migration 분석 레포트, MSA 구조 추천 레포트 제공' },
          ],
        },
      ],
    },
    {
      title: 'Istio를 사용한 Kubernetes 인프라 설계 프로젝트',
      startedAt: '2025-04-25',
      endedAt: '2025-04-28',
      where: 'Kubernetes / 팀 프로젝트(4명)',
      descriptions: [
        {
          content:
            '개요 : Istio를 사용하여 Kubernetes 인프라 환경을 구축하고, 안정적인 서비스 운영을 위한 모니터링 환경을 구축하는 것을 통해 서비스 메쉬를 통해 서비스 관찰성 및 보안을 강화하고, 클러스터의 자동화된 관리를 구현하며, 전체적인 인프라와 서비스의 운영 효율성을 극대화하는 프로젝트',
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Kubernetes 환경 구성' },
            { content: 'Istio 기능 분석' },
            {
              content: '시나리오 구현 및 환경 구성',
              weight: 'MEDIUM',
              descriptions: [
                { content: '트래픽 시나리오(Weighted Routing / Circuit Breaker 시나리오)' },
                { content: 'mTLS 적용 비교 시나리오' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Docker 멀티아키텍처 빌드 & Private Registry TLS 적용 프로젝트',
      startedAt: '2025-03-25',
      endedAt: '2025-03-27',
      where: 'DOCKER / 개인 프로젝트',
      descriptions: [
        {
          content:
            '개요 : Docker기반 애플리케이션을 다양한 CPU 아키텍처(amd64/arm64)에서 동일하게 배포하기 위해 멀티아키텍처 이미지 빌드 체계를 구축하고, OpenSSL 기반 TLS 인증서를 적용한 Private Registry환경을 구성하여 보안이 강화된 이미지 Push/Pull 파이프라인 구축 프로젝트',
        },
        {
          content: '역할 : Registry 서버 구축(TLS), Buildx 멀티아키텍처 빌드, 인증서/보안 구성',
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'insecure-registry 없이 Self-signed 인증서를 활용한 안전한 TLS Private Registry 구축',
            },
            { content: 'Docker Buildx로 multi-arch 이미지 빌드(linux/amd64, linux/arm64)' },
            { content: 'Client/Docker Daemon/BuildKit 컨테이너 각각의 신뢰 도메인 구성' },
          ],
        },
      ],
    },
    {
      title: 'AWS 비용 최적화 아키텍처 비교 프로젝트',
      startedAt: '2025-03-07',
      endedAt: '2025-03-13',
      where: 'AWS / 팀 프로젝트(3명)',
      descriptions: [
        {
          content:
            '개요: 3-Tier(Web-WAS-DB) 아키텍처와 Serverless기반 아키텍처를 비교하여, AWS 환경의 비용 구조를 분석하고 비용 절감이 가능한 최적화 방안 도출 프로젝트',
        },
        {
          content: '역할 : 인프라 설계, 비용 분석, 비교 레포트 작성',
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 대비 55% ~ 83% 비용 절감 구조 도출' },
            { content: 'Docker Buildx로 multi-arch 이미지 빌드(linux/amd64, linux/arm64)' },
            { content: 'Client/Docker Daemon/BuildKit 컨테이너 각각의 신뢰 도메인 구성' },
          ],
        },
      ],
    },
  ],
};

export default project;
