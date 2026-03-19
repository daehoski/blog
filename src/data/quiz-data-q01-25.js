export const quizData = [
  {
    id: 1,
    question: "여러 대륙의 글로벌 사이트에서 하루 500GB씩 수집되는 데이터를 단일 S3 버킷에 최대한 빠르게, 운영 복잡성 최소화하여 집계하려면?",
    options: [
      "대상 S3 버킷에서 S3 Transfer Acceleration을 켜고 멀티파트 업로드로 직접 업로드",
      "가까운 리전 S3 버킷에 올린 후 교차 리전 복제(CRR) 사용",
      "Snowball Edge로 매일 가장 가까운 리전으로 전송 후 CRR",
      "가까운 리전 EC2에 업로드 -> EBS 스냅샷 -> 복사"
    ],
    answer: 0,
    explanation: "S3 Transfer Acceleration은 CloudFront의 글로벌 에지 로케이션을 활용하여 데이터를 전송하므로 글로벌 업로드 속도를 최적화합니다. 가장 관리가 쉽고 빠릅니다.",
    glossary: {
      "S3 Transfer Acceleration": "Amazon CloudFront의 전 세계적으로 분산된 에지 로케이션을 사용하여 S3로 파일을 빠르고 안전하게 전송하는 기능",
      "Multipart Upload": "단일 객체를 여러 부분의 집합으로 업로드하여 처리량과 안정성을 높이는 방식"
    }
  },
  {
    id: 2,
    question: "S3 버킷에 JSON 형식으로 저장된 로그 파일을 운영 오버헤드 최소화하면서 SQL로 분석하려면?",
    options: [
      "Amazon Redshift로 모든 콘텐츠를 로드 후 SQL 쿼리",
      "CloudWatch Logs에 저장 후 콘솔에서 SQL 쿼리",
      "Amazon Athena로 S3 직접 쿼리",
      "AWS Glue로 분류 후 Amazon EMR Spark 클러스터 사용"
    ],
    answer: 2,
    explanation: "Amazon Athena는 서버리스 대화형 쿼리 서비스로, S3에 있는 데이터를 표준 SQL을 사용하여 바로 분석할 수 있습니다. 운영 오버헤드가 가장 적습니다.",
    glossary: {
      "Amazon Athena": "표준 SQL을 사용하여 Amazon S3에 있는 데이터를 직접 분석할 수 있는 서버리스 대화형 쿼리 서비스",
      "Serverless (서버리스)": "사용자가 서버를 관리할 필요 없이 코드나 쿼리를 실행할 수 있는 컴퓨팅 모델"
    }
  },
  {
    id: 3,
    question: "AWS Organizations 환경에서 특정 S3 버킷 접근을 조직 내 계정 사용자로만 제한하는 가장 효율적인 방법은?",
    options: [
      "aws:PrincipalOrgID 조건 키를 S3 버킷 정책에 추가",
      "aws:PrincipalOrgPaths 조건 키를 버킷 정책에 추가",
      "CloudTrail로 계정 이벤트 모니터링 후 버킷 정책 업데이트",
      "각 사용자에 태그 -> aws:PrincipalTag 조건 키 추가"
    ],
    answer: 0,
    explanation: "aws:PrincipalOrgID 조건 키를 사용하면 특정 조직 ID 내의 모든 리소스/사용자에 대해서만 접근을 허용하도록 정책을 간단하게 구성할 수 있습니다.",
    glossary: {
      "AWS Organizations": "여러 AWS 계정을 중앙에서 통합 관리하고 거버넌스를 적용할 수 있는 서비스",
      "Condition Key (조건 키)": "IAM 정책에서 특정 조건이 충족될 때만 권한을 허용하거나 거부하도록 설정하는 도구"
    }
  },
  {
    id: 4,
    question: "VPC 내부의 EC2 인스턴스가 인터넷을 거치지 않고 S3 버킷에 프라이빗하게 접근하려면?",
    options: [
      "S3 버킷에 대한 게이트웨이 VPC 엔드포인트 생성",
      "CloudWatch Logs로 로그를 스트리밍 후 S3로 내보내기",
      "EC2에 인스턴스 프로파일(IAM 역할) 생성",
      "PrivateLink가 있는 API Gateway API 생성"
    ],
    answer: 0,
    explanation: "게이트웨이 VPC 엔드포인트는 추가 비용 없이 VPC 내부에서 S3 및 DynamoDB에 직접 프라이빗 연결을 제공합니다.",
    glossary: {
      "VPC Endpoint (VPC 엔드포인트)": "인터넷 게이트웨이나 NAT 장치 없이 VPC를 지원되는 AWS 서비스에 비공개로 연결할 수 있는 기능",
      "Gateway Endpoint": "S3와 DynamoDB 전용으로 무료로 제공되는 엔드포인트 방식"
    }
  },
  {
    id: 5,
    question: "멀티 AZ 환경에서 여러 EC2 인스턴스가 동일한 파일 데이터에 접근하고 공유해야 할 때 적합한 스토리지는?",
    options: [
      "두 EBS 볼륨에 모두 데이터 복사",
      "ALB가 문서가 있는 서버로 사용자를 안내하도록 구성",
      "데이터를 Amazon EFS로 복사 후 앱이 EFS를 사용하도록 수정",
      "ALB가 두 서버 모두에 요청 전송, 올바른 서버에서 응답"
    ],
    answer: 2,
    explanation: "Amazon EFS는 여러 가용 영역(AZ)에 걸쳐 수천 개의 EC2 인스턴스가 동시에 마운트하고 공유할 수 있는 확장 가능한 파일 시스템입니다.",
    glossary: {
      "Amazon EFS (Elastic File System)": "AWS 클라우드 서비스와 온프레미스 리소스에서 사용할 수 있는 확장 가능한 완전관리형 NFS 파일 시스템",
      "NFS (Network File System)": "네트워크를 통해 파일을 공유할 수 있도록 해주는 프로토콜"
    }
  },
  {
    id: 6,
    question: "온프레미스의 70TB 비디오 파일을 네트워크 대역폭 사용을 최소화하며 S3로 마이그레이션하려면?",
    options: [
      "IAM 역할 생성 후 AWS CLI로 모든 파일 S3에 복사",
      "AWS Snowball Edge 작업 생성 -> 로컬에서 데이터 전송 -> AWS 반송",
      "S3 파일 게이트웨이 배포 + 퍼블릭 엔드포인트",
      "Direct Connect 연결 + S3 파일 게이트웨이 + 퍼블릭 VIF"
    ],
    answer: 1,
    explanation: "Snowball Edge는 물리적 장치를 사용하여 대용량 데이터를 오프라인으로 전송하므로 네트워크 대역폭을 거의 사용하지 않습니다.",
    glossary: {
      "AWS Snowball Edge": "데이터 전송 및 엣지 컴퓨팅을 위해 AWS에서 제공하는 휴대용 물리적 스토리지 장치",
      "Migration (마이그레이션)": "데이터나 애플리케이션을 한 환경에서 다른 환경(예: 온프레미스에서 클라우드)으로 이동하는 과정"
    }
  },
  {
    id: 7,
    question: "초당 100,000건의 메시지가 들어오고, 이를 수십 개의 다른 앱이 동시에 독립적으로 처리해야 하는 분리(Decouple) 아키텍처는?",
    options: [
      "Amazon Kinesis Data Analytics로 메시지 유지",
      "Auto Scaling 그룹 EC2에 수집 앱 배포",
      "Kinesis Data Streams 단일 샤드 -> Lambda -> DynamoDB",
      "메시지를 SNS 토픽에 게시 후 여러 SQS 대기열로 팬아웃(Fan-out)"
    ],
    answer: 3,
    explanation: "SNS+SQS " + "팬아웃 패턴을 사용하면 하나의 메시지를 여러 목적지에 동시에 전달하면서 시스템 간 결합도를 낮출 수 있습니다.",
    glossary: {
      "Decoupling (분리)": "시스템의 구성 요소들이 서로 독립적으로 작동할 수 있게 하여 하나가 실패해도 전체에 영향을 주지 않도록 하는 것",
      "Fan-out (팬아웃)": "하나의 메시지를 여러 개의 대기열이나 서비스로 동시에 복사하여 전달하는 설계 패턴"
    }
  },
  {
    id: 8,
    question: "대기열의 작업량에 따라 컴퓨팅 노드를 자동으로 늘리거나 줄여 탄력성을 극대화하려면?",
    options: [
      "SQS 대기열 + Auto Scaling EC2 (예약된 조정 사용)",
      "SQS 대기열 + Auto Scaling EC2 (대기열 크기 지표 기반 확장)",
      "Auto Scaling EC2 + CloudTrail을 작업 대상으로",
      "Auto Scaling EC2 + EventBridge를 작업 대상으로"
    ],
    answer: 1,
    explanation: "SQS의 메시지 수(ApproximateNumberOfMessagesVisible) 지표를 사용하여 Auto Scaling 그룹을 조정하면 실제 작업 부하에 맞춰 탄력적으로 대응할 수 있습니다.",
    glossary: {
      "Auto Scaling": "애플리케이션의 부하에 따라 컴퓨팅 자원을 자동으로 늘리거나 줄이는 기능",
      "Elasticity (탄력성)": "수요 변화에 따라 리소스를 신속하게 조정할 수 있는 능력"
    }
  },
  {
    id: 9,
    question: "온프레미스 SMB 파일 서버의 용량이 부족하며, 7일이 지난 파일은 자동으로 저렴한 스토리지로 이동시키려면?",
    options: [
      "AWS DataSync로 7일 지난 데이터를 AWS로 복사",
      "Amazon S3 파일 게이트웨이 생성 + S3 수명 주기 정책 활용",
      "Windows 파일 서버용 Amazon FSx 생성",
      "각 사용자 PC에 유틸리티 설치하여 S3 접근"
    ],
    answer: 1,
    explanation: "S3 파일 게이트웨이는 로컬 캐시를 제공하면서 원본 데이터를 S3에 저장하며, S3의 수명 주기 정책을 통해 오래된 파일을 Glacier 등으로 자동 이동시킬 수 있습니다.",
    glossary: {
      "Storage Gateway (S3 File Gateway)": "온프레미스에서 S3 스토리지로 원활하게 연결해주는 하이브리드 클라우드 스토리지 서비스",
      "Lifecycle Policy (수명 주기 정책)": "객체의 보관 기간에 따라 스토리지 클래스를 자동으로 변경하거나 삭제하도록 설정하는 규칙"
    }
  },
  {
    id: 10,
    question: "API Gateway로 수신되는 주문 데이터가 접수된 순서 그대로 처리되도록 보장하려면?",
    options: [
      "SNS 토픽에 게시 -> Lambda 구독하여 처리",
      "SQS FIFO 대기열에 메시지 전송 -> Lambda로 처리",
      "API Gateway 권한 부여자로 모든 요청 차단",
      "SQS 표준 대기열에 메시지 전송 -> Lambda로 처리"
    ],
    answer: 1,
    explanation: "SQS FIFO(First-In-First-Out) 대기열은 메시지가 전송된 정확한 순서대로 한 번만 처리됨을 보장합니다.",
    glossary: {
      "FIFO (First-In-First-Out)": "먼저 들어온 데이터가 먼저 처리되는 방식",
      "Standard Queue vs FIFO Queue": "표준 큐는 대략적인 순서와 높은 처리량을 제공하지만, FIFO 큐는 정확한 순서 보장과 '정확히 한 번' 전달을 지원함"
    }
  },
  {
    id: 11,
    question: "Aurora DB 연결에 필요한 사용자 이름/암호를 코드나 파일에 노출하지 않고 안전하고 자동으로 교체 관리하려면?",
    options: [
      "AWS Secrets Manager 사용 및 자동 교체(Rotation) 활성화",
      "AWS Systems Manager Parameter Store 사용 및 자동 교체 활성화",
      "KMS 키로 암호화된 S3 버킷에 자격증명 파일 저장",
      "각 EC2에 암호화된 EBS 볼륨 활용"
    ],
    answer: 0,
    explanation: "AWS Secrets Manager는 데이터베이스 자격 증명을 안전하게 암호화하여 저장하며, Lambda를 사용하여 암호를 자동으로 교체하는 기능을 제공합니다.",
    glossary: {
      "AWS Secrets Manager": "애플리케이션, 서비스 및 IT 리소스에 액세스하는 데 필요한 비밀 정보를 보호하고 관리하는 서비스",
      "Rotation (교체)": "보안을 위해 주기적으로 암호를 변경하는 과정"
    }
  },
  {
    id: 12,
    question: "S3의 정적 콘텐츠와 ALB 뒤 EC2의 동적 콘텐츠를 모두 전 세계 사용자에게 빠르게 서비스하려면?",
    options: [
      "S3 버킷과 ALB를 오리진으로 하는 CloudFront 배포 생성",
      "ALB 오리진 CloudFront + S3 엔드포인트로 Global Accelerator 생성",
      "S3 오리진 CloudFront + ALB를 Global Accelerator 엔드포인트로 사용",
      "각각 별도의 도메인 이름을 부여하여 서비스"
    ],
    answer: 0,
    explanation: "CloudFront는 여러 오리진(S3, ALB 등)을 지원하며, 엣지 로케이션에서 정적 콘텐츠를 캐싱하고 동적 요청은 최적화된 경로로 전달합니다.",
    glossary: {
      "Origin (오리진)": "CloudFront가 콘텐츠를 가져오는 원본 서버(S3, ALB 등)",
      "Dynamic Content (동적 콘텐츠)": "사용자 요구나 상황에 따라 매번 실시간으로 생성되는 콘텐츠"
    }
  },
  {
    id: 13,
    question: "여러 리전에 걸쳐 있는 RDS DB의 자격 증명을 운영 오버헤드 최소화하며 자동으로 교체하려면?",
    options: [
      "Secrets Manager에 자격증명 저장 + 멀티 리전 비밀 복제 + 자동 교체",
      "SSM Parameter Store에 저장 + 멀티 리전 복제 + 자동 교체",
      "S3 버킷에 SSE 암호화하여 저장 + EventBridge 연동",
      "KMS 멀티 리전 키로 암호화하여 DynamoDB 글로벌 테이블에 저장"
    ],
    answer: 0,
    explanation: "Secrets Manager는 다른 리전으로의 중복 복제를 지원하며, 기본 리전에서 암호를 교체하면 복제본 리전에도 자동으로 반영됩니다.",
    glossary: {
      "Multi-Region Replication": "데이터나 설정을 여러 리전에 걸쳐 복제하여 가용성을 높이는 기능"
    }
  },
  {
    id: 14,
    question: "Aurora DB에서 읽기 요청이 급증할 때 자동으로 읽기 전용 복제본을 늘려 성능을 유지하려면?",
    options: [
      "Amazon Redshift 단일 노드 사용",
      "RDS 단일 AZ 배포 + 다른 AZ에 리더 추가",
      "Aurora 멀티 AZ 배포 + Aurora Auto Scaling 구성",
      "ElastiCache Memcached 활용"
    ],
    answer: 2,
    explanation: "Aurora Auto Scaling을 사용하면 정의된 성능 지표(CPU 사용률 등)에 따라 읽기 전용 복제본의 수를 자동으로 조절합니다.",
    glossary: {
      "Read Replica (읽기 전용 복제본)": "데이터베이스의 읽기 성능을 높이기 위해 원본 데이터베이스를 복제한 데이터베이스"
    }
  },
  {
    id: 15,
    question: "VPC 경계에서 허용되지 않은 트래픽을 검사하고 필터링하는 관리형 가상 방화벽 서비스는?",
    options: [
      "Amazon GuardDuty",
      "VPC 트래픽 미러링",
      "AWS Network Firewall",
      "AWS Firewall Manager"
    ],
    answer: 2,
    explanation: "AWS Network Firewall은 전체 VPC에 대해 네트워크 보호를 구현할 수 있게 해주는 관리형 네트워크 방화벽 서비스입니다.",
    glossary: {
      "Network Firewall": "네트워크 트래픽을 패킷 단위로 분석하여 허용하거나 차단하는 보안 장치"
    }
  },
  {
    id: 16,
    question: "S3와 PostgreSQL RDS의 데이터를 시각화하고, 사용자별로 대시보드 접근 권한을 다르게 관리하려면?",
    options: [
      "QuickSight에서 분석 생성 -> IAM 역할과 대시보드 공유",
      "QuickSight에서 분석 생성 -> 특정 사용자 및 그룹과 대시보드 공유",
      "Glue ETL을 거쳐 S3에 보고서 작성 -> S3 버킷 정책 활용",
      "Glue + Athena 연합 쿼리 결과 활용"
    ],
    answer: 1,
    explanation: "Amazon QuickSight는 AWS의 비즈니스 인텔리전스(BI) 서비스로, 사용자 및 그룹 단위로 상세한 접근 제어를 제공하며 소스 데이터를 통합 시각화합니다.",
    glossary: {
      "Amazon QuickSight": "데이터를 시각화하고 대시보드를 만들어 비즈니스 인사이트를 얻을 수 있게 해주는 인텔리전트 BI 서비스"
    }
  },
  {
    id: 17,
    question: "EC2 인스턴스가 S3 버킷에 안전하게 접근하도록 권한을 부여하는 권장 방법은?",
    options: [
      "S3 접근 권한을 부여하는 IAM 역할(Role)을 생성하여 EC2에 연결",
      "S3 접근 권한을 부여하는 IAM 정책(Policy)을 직접 EC2에 연결",
      "S3 접근 권한이 있는 IAM 그룹에 EC2 추가",
      "IAM 사용자 자격 증명을 EC2 환경 변수로 설정"
    ],
    answer: 0,
    explanation: "EC2 인스턴스에 IAM 역할을 부여하는 것이 가장 보안상 우수한 권장 방법입니다. 이 방식은 액세스 키를 직접 관리할 필요가 없습니다.",
    glossary: {
      "IAM Role (역할)": "AWS 리소스가 다른 AWS 서비스에 접근할 수 있도록 일시적인 권한을 부여하는 IAM 식별자"
    }
  },
  {
    id: 18,
    question: "S3에 업로드된 이미지를 Lambda로 자동 압축 처리할 때, 내구성이 있고 상태 비저장인 구성 방식은? (2개 선택)",
    options: [
      "S3 이벤트 알림이 SQS 큐에 메시지 전송 -> Lambda가 SQS 구독",
      "SQS 대기열을 호출 소스로 Lambda 구성하여 성공 시 메시지 삭제",
      "Lambda가 S3 버킷을 주기적으로 모니터링하여 로그 기록",
      "EC2 인스턴스가 SQS를 모니터링하며 Lambda 호출",
      "EventBridge로 S3 모니터링 후 SNS 이메일 발송"
    ],
    answer: [0, 1],
    explanation: "S3 -> SQS -> Lambda 구조는 메시지를 내구성 있게 보관하면서 함수 실패 시 재시도가 용이한 비동기 처리의 표준입니다.",
    glossary: {
      "Stateless (상태 비저장)": "각 요청이 이전 요청의 데이터에 의존하지 않고 독립적으로 처리되는 방식"
    }
  },
  {
    id: 19,
    question: "가상 방화벽 어플라이언스를 통해 VPC로 들어오는 트래픽을 정밀 검사하려 할 때, 가장 효율적인 로드 밸런서 배포 방식은?",
    options: [
      "응용 VPC 퍼블릭 서브넷에 NLB 배포",
      "응용 VPC 퍼블릭 서브넷에 ALB 배포",
      "Transit Gateway를 통한 라우팅 제어",
      "Gateway Load Balancer(GWLB) 배포 및 엔드포인트 활용"
    ],
    answer: 3,
    explanation: "Gateway Load Balancer는 타사 방화벽 등 가상 어플라이언스를 투명하게 관리하고 확장할 수 있도록 설계된 서비스입니다.",
    glossary: {
      "Gateway Load Balancer (GWLB)": "타사 가상 어플라이언스의 배포, 확장 및 관리를 단순화해 주는 로드 밸런싱 서비스"
    }
  },
  {
    id: 20,
    question: "EBS 스냅샷으로부터 새 볼륨을 생성할 때, 처음부터 일관되게 최고 성능을 발휘하도록 하려면?",
    options: [
      "EBS 스냅샷을 인스턴스 스토어 볼륨에 복원",
      "EBS Multi-Attach 구성 활용",
      "볼륨 생성 후 즉시 모든 데이터를 읽는 스크립트 실행",
      "EBS 빠른 스냅샷 복원(Fast Snapshot Restore) 활성화"
    ],
    answer: 3,
    explanation: "EBS Fast Snapshot Restore를 사용하면 스냅샷 데이터의 지연 로딩(Lazy Loading) 없이 즉시 볼륨의 최대 성능을 사용할 수 있습니다.",
    glossary: {
      "Snapshot (스냅샷)": "특정 시점의 데이터 상태를 저장해 둔 복사본",
      "Lazy Loading (지연 로딩)": "데이터가 처음 요청될 때까지 실제 읽기를 미루는 방식 (EBS에서는 성능 저하 원인임)"
    }
  },
  {
    id: 21,
    question: "매일 한 번 제품을 판매하며, 피크 타임에 초당 수백만 건 요청을 밀리초 지연으로 처리해야 하는 최적의 서버리스 아키텍처는?",
    options: [
      "S3 + CloudFront로 호스팅하며 S3에 주문 직접 저장",
      "Auto Scaling EC2 + ALB + MySQL RDS",
      "EKS 컨테이너 클러스터 + RDS",
      "CloudFront + API Gateway + Lambda + DynamoDB"
    ],
    answer: 3,
    explanation: "이 서버리스 구성은 인프라 관리 없이도 무제한에 가까운 확장성을 제공하며, DynamoDB는 밀리초 단위의 응답을 보장합니다.",
    glossary: {
      "Amazon DynamoDB": "모든 규모에서 10밀리초 미만의 성능을 제공하는 완전관리형 NoSQL 데이터베이스 서비스"
    }
  },
  {
    id: 22,
    question: "접근 패턴이 불규칙하고 예측할 수 없는 대량의 미디어 파일을 AZ 손실에 대비하면서 최적의 비용으로 저장하려면?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 One Zone-IA"
    ],
    answer: 1,
    explanation: "접근 패턴을 모르거나 변화하는 데이터의 경우, Intelligent-Tiering이 알아서 계층을 이동시켜 비용을 절감해 줍니다.",
    glossary: {
      "Availability Zone (AZ, 가용 영역)": "지속적인 가용성을 위해 격리된 하나 이상의 데이터 센터 집합"
    }
  },
  {
    id: 23,
    question: "1개월간 자주 쓰이고 그 뒤로는 무기한 접근하지 않을 백업 파일을 가장 저렴하게 보존하려면?",
    options: [
      "S3 Intelligent-Tiering 구성",
      "S3 수명 주기 정책으로 1개월 후 Glacier Deep Archive 전환",
      "S3 Standard-IA로 직접 저장",
      "S3 One Zone-IA로 직접 저장"
    ],
    answer: 1,
    explanation: "S3 Glacier Deep Archive는 AWS에서 가장 저렴한 보관용 스토리지 클래스입니다.",
    glossary: {
      "S3 Glacier Deep Archive": "연간 한두 번 액세스하는 데이터를 위한 가장 저렴한 보관용 클래스 (복원 12시간 소요)"
    }
  },
  {
    id: 24,
    question: "지난 2개월간의 EC2 비용을 인스턴스 유형별로 심층 분석하고 시각화하는 가장 쉬운 도구는?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "Billing Dashboard",
      "AWS CUR + QuickSight"
    ],
    answer: 1,
    explanation: "Cost Explorer는 필터링과 그룹화 기능을 통해 인스턴스 유형 등 구체적 항목별로 비용 패턴을 분석해 줍니다.",
    glossary: {
      "Cost Explorer": "AWS 비용 및 사용량을 시각화, 이해 및 관리할 수 있는 도구"
    }
  },
  {
    id: 25,
    question: "Lambda가 Aurora DB에 대량 데이터를 직접 넣을 때 발생하는 확장성 문제를 해결하기 위해 중간에 넣어야 할 서비스는?",
    options: [
      "EC2의 Apache Tomcat 서버",
      "DynamoDB + DAX 클러스터",
      "메시지 전달용 SNS 토픽",
      "버퍼 역할을 할 SQS 대기열"
    ],
    answer: 3,
    explanation: "SQS는 버퍼(Buffer) 역할을 하여 시스템 간의 처리 속도 차이를 조절하고 부하를 완화해 줍니다.",
    glossary: {
      "Buffer (버퍼)": "데이터 전송 속도나 처리 속도의 차이를 보정하기 위해 데이터를 일시적으로 저장하는 공간"
    }
  }
];
