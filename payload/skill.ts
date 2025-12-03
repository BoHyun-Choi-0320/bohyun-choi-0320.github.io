import { ISkill } from '../component/skill/ISkill';

const cloudInfrastructure: ISkill.Skill = {
  category: 'Cloud / Infra',
  items: [
    {
      title: 'AWS VPC',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Subnet',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'NAT Gateway',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Security Group',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'EC2',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'S3',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'EKS',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Lambda',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'API Gateway',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Step Functions',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'RDS',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Aurora Serverless v2',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'CloudFront',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Route 53',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'WAF',
      // level: 3, // Production 개발 가능 수준
    },
  ],
};

const containerOrchestration: ISkill.Skill = {
  category: 'Container / Orchestration',
  items: [
    {
      title: 'Docker',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Docker Buildx (Multi-Arch)',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Kubernetes (K8s)',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Istio (Service Mesh)',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Helm',
      // level: 3, // Production 개발 가능 수준
    },
  ],
};

const automationDevOps: ISkill.Skill = {
  category: 'Automation / DevOps',
  items: [
    {
      title: 'Terraform',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Terraform Cloud',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Ansible',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Git',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'GitHub Actions',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Jenkins',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'ArgoCD (GitOps)',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'CI/CD Pipeline 설계·구축',
      // level: 3, // Production 개발 가능 수준
    },
  ],
};

const monitoringObservability: ISkill.Skill = {
  category: 'Monitoring / Observability',
  items: [
    {
      title: 'Grafana',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Prometheus',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Kiali',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Jaeger',
      // level: 3, // Production 개발 가능 수준
    },
  ],
};

const osBackend: ISkill.Skill = {
  category: 'OS / Backend',
  items: [
    {
      title: 'Linux',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Shell Script',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Python (Django)',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'Node.js',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'MySQL',
      // level: 3, // Production 개발 가능 수준
    },
    {
      title: 'PostgreSQL',
      // level: 3, // Production 개발 가능 수준
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    cloudInfrastructure,
    containerOrchestration,
    automationDevOps,
    monitoringObservability,
    osBackend,
  ],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
