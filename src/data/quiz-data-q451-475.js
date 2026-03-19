export const quizData = [
  {
    "id": 451,
    "question": "회사에서 애플리케이션과 데이터베이스를 AWS 클라우드로 마이그레이션하고 있습니다. 이 \n회사는 Amazon Elastic Container Service(Amazon ECS), AWS Direct Connect 및 Amazon \nRDS 를 사용합니다. \n회사의 운영 팀에서 어떤 활동을 관리합니까? (3 개 선택)",
    "options": [
      "Amazon RDS 인프라 계층, 운영 체제 및 플랫폼 관리",
      "Amazon RDS DB 인스턴스 생성 및 예약된 유지 관리 기간 구성",
      "모니터링, 패치 관리, 로그 관리 및 호스트 침입 탐지를 위한 Amazon ECS 의 추가 \n\n=== PAGE 450 ===\n소프트웨어 구성 요소 구성",
      "Amazon RDS 의 모든 마이너 및 메이저 데이터베이스 버전에 대한 패치 설치",
      "데이터 센터에서 Amazon RDS 인프라의 물리적 보안 보장",
      "Direct Connect 를 통해 이동하는 데이터의 암호화"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109408-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술"
    }
  },
  {
    "id": 452,
    "question": "회사는 Amazon EC2 인스턴스에서 Java 기반 작업을 실행합니다. 작업은 매시간 실행되며 \n실행하는 데 10\n초가 걸립니다. 작업은 예약된 간격으로 실행되며 1GB\n의 메모리를 \n사용합니다. 작업이 사용 가능한 최대 CPU 를 사용하는 짧은 순간을 제외하고 인스턴스의 \nCPU 사용률은 낮습니다. 회사는 작업 실행 비용을 최적화하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS App2Container(A2C)를 사용하여 작업을 컨테이너화합니다. 0.5 vCPU(가상 CPU) 및 \n1GB 메모리를 사용하여 AWS Fargate 에서 Amazon Elastic Container Service(Amazon ECS) \n작업으로 작업을 실행합니다.",
      "메모리가 1GB 인 AWS Lambda 함수에 코드를 복사합니다. Amazon EventBridge 예약 \n규칙을 생성하여 매시간 코드를 실행합니다.",
      "AWS App2Container(A2C)를 사용하여 작업을 컨테이너화합니다. 기존 Amazon Machine \nImage(AMI)에 컨테이너를 설치합니다. 태스크가 완료되면 스케줄이 컨테이너를 중지하는지 \n확인하십시오.",
      "작업 완료 시 EC2 인스턴스를 중지하고 다음 작업이 시작될 때 EC2 인스턴스를 다시 \n시작하도록 기존 일정을 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109521-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 453,
    "question": "회사에서 Amazon EC2 데이터 및 여러 Amazon S3 버킷에 대한 백업 전략을 구현하려고 \n합니다. 규정 요구 사항으로 인해 회사는 특정 기간 동안 백업 파일을 보존해야 합니다. \n회사는 보유기간 동안 파일을 변조해서는 안됩니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Backup 을 사용하여 거버넌스 모드에서 볼트 잠금이 있는 백업 볼트를 생성합니다. \n\n=== PAGE 451 ===\n필요한 백업 계획을 생성합니다.",
      "Amazon Data Lifecycle Manager 를 사용하여 필요한 자동 스냅샷 정책을 생성합니다.",
      "Amazon S3 파일 게이트웨이를 사용하여 백업을 생성합니다. 적절한 S3 수명 주기 \n관리를 구성합니다.",
      "AWS Backup 을 사용하여 규정 준수 모드에서 볼트 잠금이 있는 백업 볼트를 생성합니다. \n필요한 백업 계획을 생성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109410-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Backup 은 컴퓨팅, 스토리지 및 데이터베이스 전반에서 AWS 서비스의 데이터 보호를 \n중앙 집중화하고 자동화할 수 있는 완전 관리형 서비스입니다. AWS Backup Vault Lock 은 \n백업 볼트에 대한 보안 및 제어를 강화하는 데 도움이 되는 백업 볼트의 선택적 기능입니다. \n규정 준수 모드에서 잠금이 활성화되고 유예 시간이 끝나면 고객, 계정/데이터 소유자 또는 \nAWS 가 볼트 구성을 변경하거나 삭제할 수 없습니다. 이렇게 하면 보존 기간이 만료되고 \n규정 요구 사항을 충족할 때까지 백업을 사용할 수 있습니다. \n \n참조: \n\ndocs.aws.amazon.com/aws-backup/latest/devguide/vaultlock.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 454,
    "question": "회사는 여러 AWS 리전 및 계정에 걸쳐 리소스를 보유하고 있습니다. 새로 고용된 솔루션 \n설계자는 이전 직원이 리소스 인벤토리에 대한 세부 정보를 제공하지 않은 것을 \n발견했습니다. 솔루션 설계자는 모든 계정에서 다양한 워크로드의 관계 세부 정보를 \n구축하고 매핑해야 합니다. \n운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Systems Manager Inventory\n를 사용하여 상세 보기 보고서에서 맵 보기를 \n생성합니다.",
      "AWS Step Functions\n를 사용하여 워크로드 세부 정보를 수집합니다. 워크로드의 \n아키텍처 다이어그램을 수동으로 작성합니다.",
      "Workload Discovery on AWS 를 사용하여 워크로드의 아키텍처 다이어그램을 생성합니다.",
      "AWS X-Ray 를 사용하여 워크로드 세부 정보를 봅니다. 관계를 사용하여 아키텍처 \n다이어그램을 구축합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109433-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nWorkload Discovery on AWS(이전에는 AWS Perspective\n라고 함)는 AWS 클라우드 \n워크로드를 시각화하는 도구입니다. 계정과 리전 전체에서 AWS 리소스의 인벤토리를 \n유지하고 이들 간의 관계를 매핑하고 웹 UI 에 표시합니다. 또한 AWS 비용 및 사용 보고서 \n쿼리, 리소스 검색, 아키텍처 다이어그램 저장 및 내보내기 등을 수행할 수 있습니다. \n솔루션은 AWS\n에서 Workload Discovery\n를 사용하여 최소한의 운영 노력으로 모든 \n계정에서 다양한 워크로드의 관계 세부 정보를 구축하고 매핑할 수 있습니다. \n1. AWS Systems Manager Inventory 를 사용하여 상세 보기 보고서에서 지도 보기를 \n생성합니다. AWS Systems Manager Inventory\n는 관리형 인스턴스에서 메타데이터를 \n수집하여 중앙 Amazon S3 버킷에 저장하는 기능이므로 이 솔루션은 모든 계정에서 다양한 \n워크로드의 관계 세부 정보를 구축하고 매핑해야 하는 요구 사항을 충족하지 않습니다. \n워크로드의 맵 보기 또는 아키텍처 다이어그램을 제공하지 않습니다. \n2. AWS Step Functions 를 사용하여 워크로드 세부 정보를 수집합니다. 워크로드의 아키텍처 \n다이어그램을 \n수동으로 \n구축합니다. \n이 \n솔루션은 \n워크로드 \n세부 \n정보 \n수집을 \n오케스트레이션하고 아키텍처 다이어그램을 수동으로 구축하기 위해 상태 시스템을 생성 및 \n관리해야 하므로 최소한의 운영 노력 요구 사항을 충족하지 않습니다. \n3. AWS X-Ray 를 사용하여 워크로드 세부 정보 보기 관계가 있는 아키텍처 다이어그램을 \n구축합니다. 이 솔루션은 워크로드 세부 정보를 수집하고 아키텍처 다이어그램을 수동으로 \n구축하기 위해 X-Ray SDK 로 애플리케이션을 구성해야 하므로 최소한의 운영 노력 요구 \n사항을 충족하지 않습니다. \n \n참조: \n\naws.amazon.com/solutions/implementations/workload-discovery-on-aws/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 455,
    "question": "회사에서 AWS Organizations 를 사용합니다. 회사는 다른 예산으로 일부 AWS 계정을 \n운영하려고 합니다. 회사는 특정 기간 동안 할당된 예산 임계값에 도달하면 알림을 받고 \nAWS 계정에 추가 리소스 프로비저닝을 자동으로 방지하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (3 개 선택)",
    "options": [
      "AWS 예산을 사용하여 예산을 생성합니다. 필요한 AWS 계정의 비용 및 사용 보고서 \n섹션에서 예산 금액을 설정합니다.",
      "AWS 예산을 사용하여 예산을 생성합니다. 필요한 AWS 계정의 결제 대시보드에서 예산 \n\n=== PAGE 453 ===\n금액을 설정합니다.",
      "필요한 권한으로 예산 작업을 실행하기 위해 AWS 예산에 대한 IAM 사용자를 \n생성합니다.",
      "필요한 권한으로 예산 작업을 실행하기 위해 AWS 예산에 대한 IAM 역할을 생성합니다.",
      "각 계정이 예산 임계값을 충족할 때 회사에 알리는 경고를 추가합니다. 추가 리소스의 \n프로비저닝을 방지하기 위해 적절한 구성 규칙으로 생성된 IAM 자격 증명을 선택하는 예산 \n작업을 추가합니다.",
      "각 계정이 예산 임계값을 충족할 때 회사에 알리는 경고를 추가합니다. 추가 리소스의 \n프로비저닝을 방지하기 위해 적절한 SCP(서비스 제어 정책)로 생성된 IAM 자격 증명을 \n선택하는 예산 작업을 추가합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109522-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 456,
    "question": "한 회사가 한 AWS 리전의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 회사는 \nEC2 인스턴스를 두 번째 리전에 백업하려고 합니다. 또한 회사는 두 번째 리전에서 EC2 \n리소스를 프로비저닝하고 하나의 AWS 계정에서 중앙에서 EC2 인스턴스를 관리하기를 \n원합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "두 번째 지역에 비슷한 수의 EC2 인스턴스가 있는 재해 복구(DR) 계획을 만듭니다. \n데이터 복제를 구성합니다.",
      "EC2 인스턴스의 특정 시점 Amazon Elastic Block Store(Amazon EBS) 스냅샷을 \n생성합니다. 주기적으로 스냅샷을 두 번째 리전에 복사합니다.",
      "AWS Backup 을 사용하여 백업 계획을 생성합니다. EC2 인스턴스의 두 번째 리전에 대한 \n교차 리전 백업을 구성합니다.",
      "두 번째 리전에 비슷한 수의 EC2 인스턴스를 배포합니다. AWS DataSync 를 사용하여 \n원본 리전에서 두 번째 리전으로 데이터를 전송합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109523-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 457,
    "question": "AWS 를 사용하는 회사는 제품 제조업체에 데이터를 전송하는 애플리케이션을 구축하고 \n\n=== PAGE 454 ===\n있습니다. 회사에는 자체 ID 공급자(IdP)가 있습니다. 회사는 사용자가 애플리케이션을 \n사용하여 데이터를 전송하는 동안 IdP 가 애플리케이션 사용자를 인증하기를 원합니다. \n회사는 AS2(Applicability Statement 2) 프로토콜을 사용해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS DataSync 를 사용하여 데이터를 전송하십시오. IdP 인증을 위한 AWS Lambda \n함수를 생성합니다.",
      "Amazon AppFlow 흐름을 사용하여 데이터를 전송합니다. IdP 인증을 위한 Amazon \nElastic Container Service(Amazon ECS) 작업을 생성합니다.",
      "AWS Transfer Family 를 사용하여 데이터를 전송합니다. IdP 인증을 위한 AWS Lambda \n함수를 생성합니다.",
      "AWS Storage Gateway 를 사용하여 데이터를 전송합니다. IdP 인증을 위한 Amazon \nCognito 자격 증명 풀을 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109524-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 458,
    "question": "솔루션 설계자는 현금 회수 서비스를 위해 Amazon API Gateway 에서 RESTAPI 를 설계하고 \n있습니다. 응용 프로그램에는 컴퓨팅 리소스를 위해 1GB 의 메모리와 2GB 의 스토리지가 \n필요합니다. 애플리케이션은 데이터가 관계형 형식이어야 합니다. \n최소한의 관리 노력으로 이러한 요구 사항을 충족하는 추가 AWS 서비스 조합은 \n무엇입니까? (2 개 선택)",
    "options": [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Elastic Kubernetes Services (Amazon EKS)"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109435-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 459,
    "question": "회사는 AWS Organizations 를 사용하여 여러 AWS 계정 내에서 워크로드를 실행합니다. \n태깅 정책은 회사에서 태그를 생성할 때 부서 태그를 AWS 리소스에 추가합니다. \n\n=== PAGE 455 ===\n회계 팀은 Amazon EC2 소비에 대한 지출을 결정해야 합니다. 회계팀은 AWS 계정과 \n관계없이 비용을 담당하는 부서를 결정해야 합니다. 회계 팀은 조직 내 모든 AWS 계정에 \n대해 AWS Cost Explorer 에 액세스할 수 있으며 Cost Explorer 의 모든 보고서에 액세스해야 \n합니다. \n운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "조직 관리 계정 청구 콘솔에서 부서라는 사용자 정의 비용 할당 태그를 활성화합니다. \n비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2 별로 \n필터링합니다.",
      "Organizations 마스터 계정 결제 콘솔에서 부서라는 AWS 정의 비용 할당 태그를 \n활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 \nEC2 별로 필터링합니다.",
      "조직 회원 계정 청구 콘솔에서 부서라는 사용자 정의 비용 할당 태그를 활성화합니다. \n비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2 별로 \n필터링합니다.",
      "Organizations 회원 계정 결제 콘솔에서 부서라는 AWS 정의 비용 할당 태그를 \n활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 \nEC2 별로 필터링합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109440-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 460,
    "question": "회사는 SaaS(Software as a Service) 애플리케이션 Salesforce 계정과 Amazon S3 간에 \n데이터를 안전하게 교환하려고 합니다. 회사는 AWS Key Management Service(AWS KMS) \n고객 관리형 키(CMK)를 사용하여 저장된 데이터를 암호화해야 합니다. 또한 회사는 전송 \n중인 데이터를 암호화해야 합니다. 회사에서 Salesforce 계정에 대한 API 액세스를 \n활성화했습니다.",
    "options": [
      "Salesforce 에서 Amazon S3 로 안전하게 데이터를 전송하는 AWS Lambda 함수를 \n생성합니다.",
      "AWS Step Functions 워크플로를 생성합니다. Salesforce 에서 Amazon S3 로 안전하게 \n데이터를 전송하는 작업을 정의합니다.",
      "Amazon AppFlow 흐름을 생성하여 Salesforce 에서 Amazon S3 로 데이터를 안전하게 \n전송합니다.",
      "Salesforce 용 사용자 지정 커넥터를 만들어 Salesforce 에서 Amazon S3 로 데이터를 \n안전하게 전송합니다. \n\n=== PAGE 456 ==="
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109525-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon AppFlow 는 사용자가 SaaS 애플리케이션과 AWS 서비스 간에 안전하게 데이터를 \n전송할 수 있도록 하는 완전관리형 통합 서비스입니다. Salesforce 를 소스로, Amazon S3 를 \n대상으로 지원합니다. 또한 AWS KMS CMK\n를 사용하여 유휴 데이터 암호화 및 \nSSL/TLS1 을 사용하여 전송 중인 데이터 암호화를 지원합니다. Amazon AppFlow 를 \n사용하면 솔루션이 최소한의 개발 노력으로 요구 사항을 충족할 수 있습니다. \n1. 데이터를 Salesforce 에서 Amazon S3 로 안전하게 전송하는 AWS Lambda 함수를 \n생성합니다. 이 솔루션은 Salesforce 및 Amazon S3 API 와 상호 작용하고 인증, 암호화, \n오류 처리 및 모니터링을 처리하기 위한 사용자 지정 코드 작성을 포함하므로 최소한의 \n개발 노력 요구 사항을 충족하지 않습니다. \n2. AWS Step Functions 워크플로 생성 Salesforce 에서 Amazon S3 로 데이터를 안전하게 \n전송하는 작업을 정의합니다. 이 솔루션은 데이터 전송 작업을 오케스트레이션하기 위한 \n상태 시스템 정의를 생성하고 실제 데이터 전송을 수행하기 위해 Lambda 함수 또는 기타 \n서비스를 호출하기 때문에 최소한의 개발 노력 요구 사항을 충족하지 않습니다. \n3. Salesforce 용 사용자 지정 커넥터를 생성하여 Salesforce 에서 Amazon S3 로 데이터를 \n안전하게 전송합니다. 이 솔루션은 Amazon AppFlow 사용자 지정 커넥터 SDK 를 사용하여 \nSalesforce 용 사용자 지정 커넥터를 구축하고 배포하므로 추가 구성 및 관리가 필요하므로 \n최소한의 개발 노력 요구 사항을 충족하지 않습니다. \n \n참조: \naws.amazon.com/appflow/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 461,
    "question": "회사가 단일 AWS 리전에서 모바일 게임 앱을 개발하고 있습니다. 앱은 Auto Scaling \n그룹의 여러 Amazon EC2 인스턴스에서 실행됩니다. 회사는 앱 데이터를 Amazon \nDynamoDB\n에 저장합니다. 앱은 사용자와 서버 간에 TCP 트래픽과 UDP 트래픽을 \n사용하여 통신합니다. 응용 프로그램은 전 세계적으로 사용됩니다. 회사는 모든 사용자에게 \n가능한 가장 낮은 대기 시간을 보장하고자 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Global Accelerator 를 사용하여 가속기를 생성합니다. Global Accelerator 통합을 \n사용하고 TCP 및 UDP 포트에서 수신 대기하는 가속기 엔드포인트 뒤에 Application Load \nBalancer(ALB)를 생성합니다. Auto Scaling 그룹을 업데이트하여 ALB\n에 인스턴스를 \n\n=== PAGE 457 ===\n등록합니다.",
      "AWS Global Accelerator 를 사용하여 가속기를 생성합니다. Global Accelerator 통합을 \n사용하고 TCP 및 UDP 포트에서 수신 대기하는 가속기 엔드포인트 뒤에 NLB(Network \nLoad Balancer)를 생성합니다. Auto Scaling 그룹을 업데이트하여 NLB 에 인스턴스를 \n등록합니다.",
      "Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 \n뒤에 NLB(Network Load Balancer)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. \nAuto Scaling 그룹을 업데이트하여 NLB 에 인스턴스를 등록합니다. NLB 를 오리진으로 \n사용하도록 CloudFront 를 업데이트합니다.",
      "Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 \n뒤에 Application Load Balancer(ALB)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. \nAuto Scaling 그룹을 업데이트하여 ALB 에 인스턴스를 등록합니다. ALB 를 오리진으로 \n사용하도록 CloudFront 를 업데이트합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109446-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Global Accelerator\n는 글로벌 사용자를 위해 애플리케이션의 성능과 가용성을 \n향상시키는 네트워킹 서비스입니다. AWS 글로벌 네트워크를 사용하여 사용자 트래픽을 \n성능 및 상태에 따라 최적의 엔드포인트로 라우팅합니다. 또한 애플리케이션에 대한 고정 \n진입점 역할을 하고 TCP 및 UDP 프로토콜을 모두 지원하는 고정 IP 주소를 제공합니다. \n솔루션은 AWS Global Accelerator 를 사용하여 모든 사용자에게 가능한 최저 지연 시간을 \n보장할 수 있습니다. \n1. AWS Global Accelerator 를 사용하여 가속기를 생성합니다. Global Accelerator 통합을 \n사용하고 TCP 및 UDP 포트에서 수신 대기하는 가속기 엔드포인트 뒤에 Application Load \nBalancer(ALB)를 생성합니다. Auto Scaling 그룹을 업데이트하여 ALB\n에 인스턴스를 \n등록합니다. ALB 는 UDP 프로토콜을 지원하지 않으므로 이 솔루션은 작동하지 않습니다. \n2. Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 \n뒤에 NLB(Network Load Balancer)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. \nAuto Scaling 그룹을 업데이트하여 NLB 에 인스턴스를 등록합니다. NLB 를 오리진으로 \n사용하도록 CloudFront\n를 업데이트합니다. CloudFront\n는 UDP 프로토콜을 지원하지 \n않으므로 이 솔루션은 작동하지 않습니다. \n3. Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 \n뒤에 Application Load Balancer(ALB)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. \nAuto Scaling 그룹을 업데이트하여 ALB 에 인스턴스를 등록합니다. ALB 를 오리진으로",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 462,
    "question": "회사에 고객 주문을 처리하는 애플리케이션이 있습니다. 회사는 주문을 Amazon Aurora \n데이터베이스에 저장하는 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 때때로 \n트래픽이 높을 때 워크로드가 주문을 충분히 빠르게 처리하지 못합니다. \n가능한 한 빨리 데이터베이스에 주문을 안정적으로 기록하려면 솔루션 설계자가 무엇을 \n해야 합니까?",
    "options": [
      "트래픽이 많을 때 EC2 인스턴스의 인스턴스 크기를 늘립니다. Amazon Simple \nNotification Service(Amazon SNS)에 주문을 작성합니다. SNS 주제에 데이터베이스 \n엔드포인트를 구독합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열에 주문을 씁니다. Application Load \nBalancer 뒤의 Auto Scaling 그룹에서 EC2 인스턴스를 사용하여 SQS 대기열에서 읽고 \n주문을 데이터베이스로 처리합니다.",
      "Amazon Simple Notification Service(Amazon SNS)에 주문을 작성합니다. SNS 주제에 \n데이터베이스 엔드포인트를 구독합니다. Application Load Balancer 뒤의 Auto Scaling \n그룹에서 EC2 인스턴스를 사용하여 SNS 주제에서 읽습니다.",
      "EC2 인스턴스가 CPU 임계값 제한에 도달하면 Amazon Simple Queue Service(Amazon \nSQS) 대기열에 주문을 씁니다. Application Load Balancer 뒤의 Auto Scaling 그룹에서 EC2 \n인스턴스의 예약된 조정을 사용하여 SQS 대기열에서 읽고 데이터베이스로 주문을 \n처리합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109653-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon SQS 는 마이크로서비스, 분산 시스템 및 서버리스 애플리케이션을 분리하고 확장할 \n수 있는 완전관리형 메시지 대기열 서비스입니다. 애플리케이션은 SQS 대기열에 주문을 \n기록함으로써 주문 손실 없이 트래픽 급증을 처리할 수 있습니다. Auto Scaling 그룹의 EC2 \n인스턴스는 SQS 대기열에서 읽고 꾸준한 속도로 데이터베이스로 주문을 처리할 수 \n있습니다. Application Load Balancer 는 EC2 인스턴스에 부하를 분산하고 상태 확인을 \n제공할 수 있습니다. 이 솔루션은 질문의 모든 요구 사항을 충족하지만 다른 옵션은 그렇지",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 463,
    "question": "IoT 회사는 사용자의 수면에 대한 데이터를 수집하는 센서가 있는 매트리스를 출시하고 \n있습니다. 센서는 데이터를 Amazon S3 버킷으로 보냅니다. 센서는 각 매트리스에 대해 \n매일 밤 약 2MB 의 데이터를 수집합니다. 회사는 각 매트리스에 대한 데이터를 처리하고 \n요약해야 합니다. 결과는 가능한 한 빨리 제공되어야 합니다. 데이터 처리에는 1GB 의 \n메모리가 필요하며 30 초 이내에 완료됩니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Scala 작업에 AWS Glue 사용",
      "Apache Spark 스크립트와 함께 Amazon EMR 사용",
      "Python 스크립트와 함께 AWS Lambda 사용",
      "PySpark 작업과 함께 AWS Glue 사용"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109501-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 464,
    "question": "회사는 PostgreSQL 단일 AZ DB 인스턴스용 Amazon RDS 에 모든 주문을 저장하는 온라인 \n쇼핑 애플리케이션을 호스팅합니다. 경영진은 단일 실패 지점을 제거하기를 원하며 솔루션 \n설계자에게 애플리케이션 코드를 변경하지 않고도 데이터베이스 다운타임을 최소화할 수 \n있는 접근 방식을 권장하도록 요청했습니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "데이터베이스 인스턴스를 수정하고 다중 AZ 옵션을 지정하여 기존 데이터베이스 \n인스턴스를 다중 AZ 배포로 변환합니다.",
      "새로운 RDS 다중 AZ 배포를 생성합니다. 현재 RDS 인스턴스의 스냅샷을 만들고 \n스냅샷으로 새 다중 AZ 배포를 복원합니다.",
      "다른 가용 영역에서 PostgreSQL 데이터베이스의 읽기 전용 복제본을 생성합니다. \nAmazon Route 53 가중 레코드 세트를 사용하여 데이터베이스 전체에 요청을 분산합니다.",
      "최소 그룹 크기가 2 인 Amazon EC2 Auto Scaling 그룹에 RDS for PostgreSQL \n\n=== PAGE 460 ===\n데이터베이스를 배치합니다. Amazon Route 53 가중 레코드 세트를 사용하여 인스턴스 간에 \n요청을 분산합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109449-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n기존 단일 AZ DB 인스턴스를 다중 AZ 배포로 변환하려면 AWS Management Console 에서 \nDB 인스턴스에 해당하는 \"수정\" 옵션을 사용하십시오. \n \n참고: \n\naws.amazon.com/rds/features/multi-az/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 465,
    "question": "회사에서 고객 요구를 지원하기 위해 애플리케이션을 개발하고 있습니다. 회사는 동일한 \n가용 영역 내의 여러 Amazon EC2 Nitro 기반 인스턴스에 애플리케이션을 배포하려고 \n합니다. 또한 이 회사는 더 높은 애플리케이션 가용성을 달성하기 위해 여러 EC2 Nitro \n기반 인스턴스의 여러 블록 스토리지 볼륨에 동시에 쓸 수 있는 기능을 애플리케이션에 \n제공하고자 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Elastic Block Store(Amazon EBS) 다중 연결에 범용 SSD(gp3) EBS 볼륨 사용",
      "Amazon Elastic Block Store(Amazon EBS) 다중 연결과 함께 처리량 최적화 HDD(st1) \nEBS 볼륨 사용",
      "Amazon Elastic Block Store(Amazon EBS) 다중 연결과 함께 프로비저닝된 IOPS SSD(io2) \nEBS 볼륨 사용",
      "Amazon Elastic Block Store(Amazon EBS) 다중 연결에 범용 SSD(gp2) EBS 볼륨 사용"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109655-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 466,
    "question": "한 회사에서 단일 가용 영역과 Amazon RDS 다중 AZ DB 인스턴스에서 Amazon EC2 를 \n사용하는 상태 비저장 2\n계층 애플리케이션을 설계했습니다. 새로운 회사 경영진은 \n애플리케이션의 가용성을 높이려고 합니다. \n\n=== PAGE 461 ===\n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "다중 AZ EC2 Auto Scaling 을 사용하도록 애플리케이션을 구성하고 Application Load \nBalancer 를 생성합니다.",
      "EC2 인스턴스의 스냅샷을 찍어 다른 AWS 리전으로 보내도록 애플리케이션을 \n구성합니다.",
      "Amazon Route 53 대기 시간 기반 라우팅을 사용하여 애플리케이션에 요청을 제공하도록 \n애플리케이션을 구성합니다.",
      "들어오는 요청을 처리하고 다중 AZ 애플리케이션 로드 밸런서를 생성하도록 Amazon \nRoute 53 규칙을 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109450-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n참고: \n\ndocs.aws.amazon.com/autoscaling/ec2/userguide/as-add-availability-zone.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 467,
    "question": "회사에서 AWS Organizations 를 사용합니다. 멤버 계정이 Compute Savings Plan 을 \n구입했습니다. 멤버 계정 내부의 워크로드 변경으로 인해 해당 계정은 더 이상 Compute \nSavings Plan 약정의 전체 혜택을 받지 못합니다. 이 회사는 구매한 컴퓨팅 성능의 50% \n미만을 사용합니다.",
    "options": [
      "Compute Savings Plan 을 구매한 멤버 계정의 계정 콘솔에 있는 청구 기본 설정 \n섹션에서 할인 공유를 켭니다.",
      "회사의 조직 관리 계정에 있는 계정 콘솔의 청구 기본 설정 섹션에서 할인 공유를 \n켭니다.",
      "다른 AWS 계정에서 Compute Savings Plan 이 있는 계정으로 추가 컴퓨팅 워크로드를 \n마이그레이션합니다.",
      "예약 인스턴스 마켓플레이스에서 초과된 Savings Plan 약정을 판매합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109485-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 468,
    "question": "회사에서 고객을 위한 검색 카탈로그를 제공할 마이크로서비스 애플리케이션을 개발하고 \n\n=== PAGE 462 ===\n있습니다. 회사는 REST API 를 사용하여 애플리케이션의 프런트엔드를 사용자에게 제시해야 \n합니다. REST API 는 회사가 프라이빗 VPC 서브넷의 컨테이너에서 호스팅하는 백엔드 \n서비스에 액세스해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon API Gateway 를 사용하여 WebSocket API 를 설계합니다. 프라이빗 서브넷의 \nAmazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. \nAmazon ECS 에 액세스하기 위해 API Gateway 용 프라이빗 VPC 링크를 생성합니다.",
      "Amazon API Gateway 를 사용하여 REST API 를 설계합니다. 프라이빗 서브넷의 Amazon \nElastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS 에 \n액세스하기 위해 API Gateway 용 프라이빗 VPC 링크를 생성합니다.",
      "Amazon API Gateway 를 사용하여 WebSocket API 를 설계합니다. 프라이빗 서브넷의 \nAmazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. \nAmazon ECS 에 액세스하기 위해 API Gateway 에 대한 보안 그룹을 생성합니다.",
      "Amazon API Gateway 를 사용하여 REST API 를 설계합니다. 프라이빗 서브넷의 Amazon \nElastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS 에 \n액세스하기 위해 API Gateway 에 대한 보안 그룹을 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109451-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 469,
    "question": "회사는 수집된 원시 데이터를 Amazon S3 버킷에 저장합니다. 이 데이터는 회사 고객을 \n대신하여 여러 유형의 분석에 사용됩니다. 요청된 분석 유형에 따라 S3 객체에 대한 \n액세스 패턴이 결정됩니다. \n회사는 접속 패턴을 예측하거나 통제할 수 없습니다. 회사는 S3 비용을 줄이고자 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 복제를 사용하여 자주 액세스하지 않는 개체를 S3 Standard-Infrequent Access(S3 \nStandard-IA)로 전환합니다.",
      "S3 수명 주기 규칙을 사용하여 객체를 S3 Standard 에서 Standard-Infrequent Access 로 \n전환(S3 Standard-IA)",
      "S3 수명 주기 규칙을 사용하여 객체를 S3 Standard 에서 S3 Intelligent-Tiering 으로 전환",
      "S3 Inventory 를 사용하여 S3 Standard 에서 S3 Intelligent-Tiering 으로 액세스하지 않은 \n객체를 식별하고 전환"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109452-exam-aws-certified-sol",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 470,
    "question": "한 회사에 IPv6 주소를 사용하여 Amazon EC2 인스턴스에서 호스팅되는 애플리케이션이 \n있습니다. 애플리케이션은 인터넷을 사용하여 다른 외부 애플리케이션과의 통신을 시작해야 \n합니다. 그러나 회사의 보안 정책에 따르면 외부 서비스는 EC2 인스턴스에 대한 연결을 \n시작할 수 없습니다. \n솔루션 설계자는 이 문제를 해결하기 위해 무엇을 권장해야 합니까?",
    "options": [
      "NAT 게이트웨이를 생성하고 이를 서브넷 라우팅 테이블의 대상으로 만듭니다.",
      "인터넷 게이트웨이를 만들고 이를 서브넷의 라우팅 테이블 대상으로 만듭니다.",
      "가상 프라이빗 게이트웨이를 만들고 이를 서브넷의 라우팅 테이블 대상으로 만듭니다.",
      "외부 전용 인터넷 게이트웨이를 만들고 이를 서브넷 라우팅 테이블의 대상으로 \n만듭니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109334-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n외부 전용 인터넷 게이트웨이는 VPC 의 인스턴스에서 인터넷으로 IPv6 을 통한 아웃바운드 \n통신을 허용하고 인터넷이 인스턴스와의 IPv6 연결을 시작하지 못하도록 하는 VPC 구성 \n요소입니다. 이것은 회사의 보안 정책 및 요구 사항을 충족합니다. 외부 전용 인터넷 \n게이트웨이를 사용하려면 IPv6 인터넷 트래픽(::/0)을 외부 전용 인터넷 게이트웨이로 \n라우팅하는 경로를 서브넷의 라우팅 테이블에 추가해야 합니다. \n참조 URL: \n1 \ndocs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html \n2 \ndev.to/aws-builders/what-is-an-egress-only-internet-gateways-in-aws-7gp \n3 \ndocs.aws.amazon.com/vpc/latest/userguide/route-table-options.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 471,
    "question": "회사에서 VPC 의 컨테이너에서 실행되는 애플리케이션을 만들고 있습니다. 애플리케이션은 \n\n=== PAGE 465 ===\nAmazon S3 버킷에 데이터를 저장하고 액세스합니다. 개발 단계에서 애플리케이션은 매일 \nAmazon S3 에 1TB 의 데이터를 저장하고 액세스합니다. 회사는 비용을 최소화하고 가능한 \n한 트래픽이 인터넷을 통과하지 못하도록 막고자 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 버킷에 대해 S3 Intelligent-Tiering 을 활성화합니다.",
      "S3 버킷에 대해 S3 Transfer Acceleration 을 활성화합니다.",
      "Amazon S3 용 게이트웨이 VPC 엔드포인트를 생성합니다. 이 엔드포인트를 VPC 의 모든 \n라우팅 테이블과 연결합니다.",
      "VPC 에서 Amazon S3 에 대한 인터페이스 엔드포인트를 생성합니다. 이 엔드포인트를 \nVPC 의 모든 라우팅 테이블과 연결합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109453-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon S3\n용 게이트웨이 VPC 엔드포인트는 인터넷 게이트웨이나 NAT 디바이스가 \n필요하지 않은 VPC 와 Amazon S3 간의 프라이빗 연결을 가능하게 합니다. 이렇게 하면 \n비용이 최소화되고 트래픽이 인터넷을 통과하는 것을 방지할 수 있습니다. 게이트웨이 VPC \n엔드포인트는 트래픽을 비공개로 Amazon S31 로 라우팅하기 위해 접두사 목록을 VPC \n라우팅 테이블의 라우팅 대상으로 사용합니다. 엔드포인트를 VPC 의 모든 라우팅 테이블과 \n연결하면 모든 서브넷이 엔드포인트를 통해 Amazon S3 에 액세스할 수 있습니다. \n \n옵션 A 는 S3 Intelligent-Tiering 이 변화하는 액세스 패턴을 기반으로 두 액세스 계층 간에 \n객체를 자동으로 이동하여 스토리지 비용을 최적화하는 스토리지 클래스이기 때문에 \n올바르지 않습니다. VPC 와 Amazon S3 간의 네트워크 트래픽에는 영향을 미치지 않습니다. \n \n옵션 B 는 올바르지 않습니다. S3 Transfer Acceleration 은 클라이언트와 S3 버킷 간에 \n장거리에서 파일을 빠르고 쉽고 안전하게 전송할 수 있는 기능이기 때문입니다. 트래픽이 \n인터넷을 통과하는 것을 막지는 않습니다. \n \n옵션 D 는 Amazon S3 용 인터페이스 VPC 엔드포인트는 각 서브넷에 프라이빗 IP 주소가 \n있는 탄력적 네트워크 인터페이스(ENI)가 필요한 AWS PrivateLink 에 의해 구동되기 때문에 \n올바르지 않습니다. 이것은 솔루션에 복잡성과 비용을 추가합니다. 또한 인터페이스 VPC \n엔드포인트는 Amazon S3 에 대한 교차 리전 액세스를 지원하지 않습니다. \n참조 URL: \n\ndocs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 472,
    "question": "회사에 Amazon DynamoDB 기반 데이터 저장소가 있는 모바일 채팅 애플리케이션이 \n있습니다. 사용자는 가능한 한 짧은 대기 시간으로 새 메시지를 읽기를 원합니다. 솔루션 \n설계자는 최소한의 애플리케이션 변경이 필요한 최적의 솔루션을 설계해야 합니다. \n솔루션 설계자는 어떤 방법을 선택해야 합니까?",
    "options": [
      "새 메시지 테이블에 대해 Amazon DynamoDB Accelerator(DAX)를 구성합니다. DAX \n끝점을 사용하도록 코드를 업데이트합니다.",
      "증가된 읽기 로드를 처리하기 위해 DynamoDB 읽기 복제본을 추가합니다. 읽기 전용 \n복제본의 읽기 엔드포인트를 가리키도록 애플리케이션을 업데이트합니다.",
      "DynamoDB 의 새 메시지 테이블에 대한 읽기 용량 단위 수를 두 배로 늘립니다. 기존 \nDynamoDB 엔드포인트를 계속 사용합니다.",
      "Redis 캐시용 Amazon ElastiCache 를 애플리케이션 스택에 추가합니다. DynamoDB 대신 \nRedis 캐시 엔드포인트를 가리키도록 애플리케이션을 업데이트합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109454-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/premiumsupport/knowledge-center/dynamodb-high-latency/ \nAmazon DynamoDB Accelerator(DAX)는 DynamoDB 를 위한 완전 관리형 인 메모리 캐시로, \nDynamoDB 테이블의 성능을 최대 10 배까지 향상시키고 모든 규모에서 마이크로초 수준의 \n응답 시간을 제공합니다. DynamoDB API 작업과 호환되며 use1 에 대한 최소한의 코드 \n변경이 필요합니다. 새 메시지 테이블에 대해 DAX 를 구성함으로써 솔루션은 최소한의 \n애플리케이션 변경으로 새 메시지를 읽는 대기 시간을 줄일 수 있습니다. \n1. 증가된 읽기 로드를 처리하기 위해 DynamoDB 읽기 replicas 를 추가합니다. 읽기 전용 \n복제본의 읽기 엔드포인트를 가리키도록 애플리케이션을 업데이트합니다. DynamoDB 는 \n읽기 전용 복제본을 기능으로 지원하지 않으므로 이 솔루션은 작동하지 않습니다. 읽기 \n전용 복제본은 DynamoDB 가 아닌 Amazon RDS 에서 사용할 수 있습니다. \n2. DynamoDB 의 새 메시지 테이블에 대한 읽기 용량 단위 수를 두 배로 늘립니다. 기존",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 473,
    "question": "회사는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에서 웹 사이트를 \n호스팅합니다. 웹 사이트는 정적 콘텐츠를 제공합니다. 웹 사이트 트래픽이 증가하고 \n있으며 회사는 잠재적인 비용 증가에 대해 우려하고 있습니다.",
    "options": [
      "Amazon CloudFront 배포를 생성하여 엣지 로케이션에서 상태 파일을 캐싱합니다.",
      "Amazon ElastiCache 클러스터를 생성합니다. ALB 를 ElastiCache 클러스터에 연결하여 \n캐싱된 파일을 제공합니다.",
      "AWS WAF 웹 ACL 을 생성하고 ALB 와 연결합니다. 웹 ACL 에 규칙을 추가하여 정적 \n파일을 캐시합니다.",
      "대체 AWS 리전에서 두 번째 ALB\n를 생성합니다. 사용자 트래픽을 가장 가까운 \n리전으로 라우팅하여 데이터 전송 비용을 최소화합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109455-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 474,
    "question": "회사는 다른 리전의 워크로드와 격리된 워크로드를 지원하고 실행하기 위해 AWS 리전에 \n여러 VPC 를 보유하고 있습니다. 최근 애플리케이션 시작 요구 사항으로 인해 회사의 \nVPC 는 모든 지역의 다른 모든 VPC 와 통신해야 합니다. \n최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "VPC 피어링을 사용하여 단일 리전에서 VPC 통신을 관리합니다. 리전 간 VPC 피어링을 \n사용하여 VPC 통신을 관리합니다.",
      "모든 지역에서 AWS Direct Connect 게이트웨이를 사용하여 여러 지역에서 VPC 를 \n\n=== PAGE 468 ===\n연결하고 VPC 통신을 관리합니다.",
      "AWS Transit Gateway 를 사용하여 단일 지역에서 VPC 통신을 관리하고 지역 간 Transit \nGateway 피어링을 사용하여 VPC 통신을 관리합니다.",
      "모든 지역에서 AWS PrivateLink 를 사용하여 여러 지역에서 VPC 를 연결하고 VPC \n통신을 관리합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109659-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 475,
    "question": "회사에서 Amazon Elastic Container Service(Amazon ECS)를 사용할 컨테이너화된 \n애플리케이션을 설계하고 있습니다. 애플리케이션은 내구성이 뛰어나고 RPO(복구 지점 \n목표)가 8\n시간인 다른 AWS 리전에 데이터를 복구할 수 있는 공유 파일 시스템에 \n액세스해야 합니다. 파일 시스템은 리전 내의 각 가용 영역에 탑재 대상을 제공해야 \n합니다. \n솔루션 설계자는 AWS Backup 을 사용하여 다른 리전에 대한 복제를 관리하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "다중 AZ 배포가 있는 Windows 파일 서버용 Amazon FSx",
      "다중 AZ 배포가 있는 NetApp ONTAP 용 Amazon FSx",
      "표준 스토리지 클래스가 있는 Amazon Elastic File System(Amazon EFS)",
      "OpenZFS 용 Amazon FSx"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109456-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  }
];