export const quizData = [
  {
    "id": 451,
    "question": "애플리케이션과 DB를 AWS로 마이그레이션하면서 ECS, Direct Connect, RDS를 도입했습니다. 여기서 AWS가 대신 해주지 않고 '우리 운영팀'이 직접 챙겨야 하는 업무 3가지는?",
    "options": [
      "RDS 인프라 계층, 운영 체제 및 하드웨어 플랫폼 관리",
      "RDS DB 인스턴스를 생성하고 유지 관리 시간(Maintenance Window) 설정",
      "ECS 보안을 위해 호스트 침입 탐지나 로그 관리용 소프트웨어를 추가로 설치 및 구성",
      "RDS에서 돌아가는 모든 DB 엔진의 마이너/메이저 버전 패치 설치 작업",
      "AWS 데이터 센터의 물리적 보안 시설 관리 및 감시",
      "Direct Connect 전용선을 통해 전송되는 실제 데이터의 암호화 처리"
    ],
    "answer": [1, 2, 5],
    "explanation": "정답은 B, C, F입니다. AWS 공동 책임 모델에 따라 AWS는 '클라우드 자체의 보안(물리 시설, 하드웨어)'을 책임지고, 고객은 '클라우드 내에서의 보안(데이터, 설정)'을 책임집니다. 하드웨어나 OS 관리는 AWS가 해주지만, 어떤 DB를 띄울지(B), 내 서비스에 필요한 보안 소프트웨어를 깔지(C), 그리고 전용선을 타고 흐르는 데이터를 암호화할지(F)는 전적으로 운영팀의 몫입니다.\n\nhttps://aws.amazon.com/compliance/shared-responsibility-model/",
    "glossary": {
      "Shared Responsibility Model (공동 책임 모델)": "AWS와 고객이 보안 및 관리에 대해 책임을 나누는 기본 원칙",
      "Amazon ECS (Elastic Container Service)": "컨테이너화된 애플리케이션을 쉽게 실행하고 관리하게 해주는 도구",
      "Direct Connect": "인터넷이 아닌 전용선을 통해 사내망과 AWS를 직접 연결하는 고속 통로"
    }
  },
  {
    "id": 452,
    "question": "매시간 정각에 딱 10초만 실행되는 Java 작업이 있습니다. 대부분의 시간에는 놀고 있고, 작업할 때만 잠깐 CPU를 세게 쓰는데 메모리는 1GB가 꼭 필요합니다. 비용을 가장 아끼는 방법은?",
    "options": [
      "AWS App2Container로 작업물을 컨테이너로 만든 뒤, Fargate에서 최소 사양으로 24시간 띄워둡니다.",
      "메모리를 1GB로 설정한 Lambda 함수에 코드를 넣고, EventBridge(CloudWatch Events) 예약 규칙으로 매시간 호출합니다.",
      "EC2 인스턴스에 컨테이너를 설치하고, 작업이 없을 때는 수동으로 컨테이너 프로세스만 죽여둡니다.",
      "작업이 끝날 때마다 EC2 서버를 아예 끄고(Stop), 한 시간 뒤에 다시 켜는(Start) 자동화 스크립트를 짭니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 1시간에 딱 10초만 일하는 작업은 서버를 켜두는 것 자체가 낭비입니다. Lambda는 코드가 실행되는 '밀리초' 단위로만 요금을 내기 때문에 이런 간헐적 작업에 최고입니다. 넉넉하게 메모리 1GB를 할당하고 EventBridge로 매시간 쿡 찔러주기만 하면, 남은 시간 동안의 요금은 0원이 됩니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "AWS Lambda": "서버 관리 없이 코드만 실행하며, 실행 시간만큼만 비용을 내는 서버리스 컴퓨팅 서비스",
      "Amazon EventBridge": "시스템 간의 이벤트를 연결하거나 정해진 시간에 작업을 실행하게 돕는 서비스",
      "Compute Savings": "불필요한 자원 낭비를 줄여 클라우드 이용 요금을 최적화하는 과정"
    }
  },
  {
    "id": 453,
    "question": "EC2 데이터와 S3 버킷 백업을 보관해야 하는데, 규정상 일정 기간 동안은 누구도 백업을 수정하거나 지워서는 안 됩니다. '박제' 수준의 강력한 백업 보호를 구현하려면?",
    "options": [
      "AWS Backup을 사용해 '거버넌스 모드'로 볼트 잠금(Vault Lock)을 설정합니다.",
      "Data Lifecycle Manager를 써서 매일 자동으로 스냅샷만 찍어둡니다.",
      "S3 파일 게이트웨이에 백업하고 수명 주기 정책으로 삭제를 막습니다.",
      "AWS Backup을 사용해 '규정 준수(Compliance) 모드'로 볼트 잠금을 설정합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 데이터 변조 방지(WORM)를 위한 끝판왕은 AWS Backup의 '규정 준수 모드 볼트 잠금'입니다. 이 모드를 활성화하면 보존 기간이 끝나기 전에는 루트 사용자나 AWS 직원조차도 백업을 지울 수 없습니다. 법적 요구 사항을 충족하기 위한 불멸의 자물쇠를 채우는 것입니다.\n\nhttps://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    "glossary": {
      "AWS Backup Vault Lock": "백업 파일이 들어있는 금고(Vault)를 잠가서 삭제나 수정을 원천 차단하는 기능",
      "Compliance Mode (규정 준수 모드)": "관리자조차 잠금을 해제할 수 없는 가장 강력한 불변성(Immutability) 옵션",
      "WORM (Write Once Read Many)": "한 번 기록하면 읽기만 가능하고 수정/삭제는 불가능한 데이터 저장 방식"
    }
  },
  {
    "id": 454,
    "question": "전임자가 인벤토리 정리를 안 하고 퇴사해서, 현재 수많은 계정과 리전에 어떤 리소스들이 있고 서로 어떻게 연결되어 있는지 막막합니다. 자동으로 관계도를 그려주는 도구는?",
    "options": [
      "Systems Manager Inventory를 켜서 모든 리스트를 엑셀 형식으로 뽑아 봅니다.",
      "Step Functions를 써서 리소스를 수집하는 프로그램을 짜고 다이어그램은 직접 그립니다.",
      "Workload Discovery on AWS(구 AWS Perspective)를 사용하여 자동으로 아키텍처 다이어그램을 생성합니다.",
      "AWS X-Ray 서비스를 켜서 네트워크 흐름을 감시하고 그걸 토대로 그림을 그립니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 복잡하게 얽힌 클라우드 자원을 한눈에 보고 싶을 때 쓰는 전용 도구가 'Workload Discovery on AWS'입니다. 계정과 리전을 싹 훑어서 서버, DB, 네트워크가 어떻게 연결되어 있는지 실시간으로 멋진 그림(다이어그램)을 그려줍니다.\n\nhttps://aws.amazon.com/solutions/implementations/workload-discovery-on-aws/",
    "glossary": {
      "Workload Discovery on AWS": "AWS 리소스를 시각화하고 아키텍처 관계도를 자동으로 생성해주는 도구",
      "Inventory (인벤토리)": "보유하고 있는 자산이나 리소스의 상세 목록",
      "Architecture Diagram": "시스템의 구성 요소들이 어떻게 연결되어 동작하는지 보여주는 설계도"
    }
  },
  {
    "id": 455,
    "question": "계정별 예산을 관리하면서, 돈을 다 쓰면 알림만 주는 게 아니라 '더 이상의 리소스 생성'을 아예 막아버리고 싶습니다. 이 자동화 시스템을 구축하는 방법 3가지는?",
    "options": [
      "AWS 예산(Budgets)을 만들 때 비용 보고서 섹션에서 한도액을 설정합니다.",
      "결제 대시보드에서 각 계정별로 AWS 예산을 생성하고 한도 금액을 넣습니다.",
      "예약 구매 등 예산 대신 결제 업무를 처리할 전용 IAM 사용자를 만듭니다.",
      "예산 임계값이 넘었을 때 실제 차단 작업을 수행할 수 있는 권한을 가진 IAM 역할을 만듭니다.",
      "임계값 도달 시 구성(Config) 규칙을 발동시켜 새 자원 생성을 가로막는 예산 작업을 추가합니다.",
      "임계값 도달 시 해당 계정에 '생성 금지' SCP(서비스 제어 정책)를 걸어버리는 예산 작업을 추가합니다."
    ],
    "answer": [1, 3, 5],
    "explanation": "정답은 B, D, F입니다. 단순히 돈이 나가는 걸 보는 게 아니라 '강제 차단'까지 하려면 'AWS Budgets Actions' 기능을 써야 합니다. 예산을 설정(B)하고, 그 예산이 넘었을 때 출동할 IAM 역할(D)에게 권한을 줍니다. 그리고 그 역할이 Organizations의 SCP를 해당 계정에 탁 붙여서(F) 추가 자원 생성을 원천 봉쇄하게 만드는 구조입니다.\n\nhttps://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html",
    "glossary": {
      "AWS Budgets Actions": "예산 한도에 가까워지거나 넘었을 때 특정 조치(정책 변경, 서버 중지 등)를 자동으로 취하는 기능",
      "SCP (Service Control Policy)": "조직 내 계정의 권한을 중앙에서 강력하게 제한하는 가드레일 정책",
      "Threshold (임계값)": "작동을 시작하게 만드는 기준점(예: 예산의 80% 사용 등)"
    }
  },
  {
    "id": 456,
    "question": "메인 지역의 EC2 서버들을 다른 지역(리전)으로 백업해두고 싶습니다. 중앙에서 한꺼번에 관리하면서 가장 알뜰하게 백업을 유지하는 방법은?",
    "options": [
      "평소에 다른 리전에도 똑같은 서버들을 다 켜두고 실시간으로 데이터를 복제합니다.",
      "EBS 스냅샷을 매번 수동으로 찍어서 다른 리전으로 일일이 복사해서 보관합니다.",
      "AWS Backup 백업 계획을 만들고 '교차 리전 복제(Cross-region copy)' 설정을 활성화합니다.",
      "DataSync를 써서 서버 통째로 데이터를 다른 리전의 빈 서버로 실시간 전송합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 중앙 집중 관리와 자동화를 한 번에 해결해주는 도구는 AWS Backup입니다. 백업 계획 하나만 잘 짜두면 알아서 스냅샷을 찍고, 전 세계 어디든 원하는 리전으로 복사본을 보내줍니다. 서버를 미리 켜둘 필요가 없어 매우 효율적입니다.\n\nhttps://aws.amazon.com/backup/",
    "glossary": {
      "AWS Backup": "다양한 AWS 서비스의 백업을 한곳에서 통합 관리하고 자동화하는 서비스",
      "Cross-region Backup": "재해 복구(DR)를 위해 데이터를 원래 리전이 아닌 머나먼 다른 리전에 저장하는 것",
      "Cost-effective (비용 효율적)": "성능은 유지하면서 지출을 최소화하는 방식"
    }
  },
  {
    "id": 457,
    "question": "외부 제조사와 데이터를 주고받아야 하는데, 반드시 AS2 프로토콜을 써야 하고 로그인은 우리 사내 시스템(IdP)을 쓰고 싶습니다. 가장 적절한 통로 서비스는?",
    "options": [
      "DataSync를 선택하고, 사내 로그인을 위한 람다 함수를 직접 짭니다.",
      "Amazon AppFlow를 통해 데이터를 가져오고 ECS로 사내 인증을 처리합니다.",
      "AWS Transfer Family를 사용해 AS2 엔드포인트를 만들고, Lambda를 연동해 사내 인증을 수행합니다.",
      "Storage Gateway를 설치하고 Cognito 자격 증명 풀로 외부 제조사를 초대합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. AS2 같은 특수 전송 프로토콜은 AWS Transfer Family가 전문입니다. SFTP, FTPS는 물론 AS2 전송까지 완벽히 지원하며, 사내 로그인 시스템과 연동할 때는 커스텀 ID 공급자 옵션을 통해 Lambda 함수로 인증 로직을 연결해주면 완벽한 보안 게이트웨이가 완성됩니다.\n\nhttps://aws.amazon.com/aws-transfer-family/",
    "glossary": {
      "AWS Transfer Family": "SFTP, FTPS, FTP, AS2 프로토콜을 사용하여 S3/EFS와 안전하게 파일 주고받기를 지원하는 서비스",
      "AS2": "B2B 거래에서 데이터를 안전하게 주고받기 위해 상용되는 비즈니스 데이터 전송 규약",
      "IdP (Identity Provider)": "사용자의 신원을 확인하고 로그인 인증을 대신해주는 시스템"
    }
  },
  {
    "id": 458,
    "question": "현금 회수 앱을 만드는데, 계산을 위해 1GB 메모리와 2GB 저장 공간이 필요하고 데이터는 꼭 관계형 DB에 담아야 합니다. 운영이 가장 편한 조합 2가지는?",
    "options": [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon EKS (Elastic Kubernetes Service)"
    ],
    "answer": [1, 2],
    "explanation": "정답은 B와 C입니다. 가장 손이 안 가는 컴퓨팅은 서버 관리 없는 Lambda(B)입니다. Lambda는 최근 저장 공간 옵션도 늘어나서 충분히 활용 가능합니다. 그리고 관계형 데이터를 다루는 데 최고의 관리형 서비스는 단연 RDS(C)입니다. 이 두 조합이면 인프라 관리를 AWS에게 다 맡길 수 있습니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Relational Data (관계형 데이터)": "행과 열의 테이블 구조로 이루어져 데이터 간의 관계를 정의하는 방식(예: 주문-고객 연결)",
      "Serverless (서버리스)": "사용자가 서버 사양을 정하거나 관리할 필요 없이 서비스 단위로 기능을 사용하는 방식",
      "Managed Service (관리형 서비스)": "설치, 패치, 백업 등 귀찮은 관리 작업을 AWS가 대신 해주는 서비스"
    }
  },
  {
    "id": 459,
    "question": "전체 계정의 EC2 사용량이 부서(Department)별로 얼마나 나왔는지 보고서를 뽑고 싶습니다. 각 리소스에는 이미 부서 태그가 붙어 있을 때, 가장 효율적인 보고 방식은?",
    "options": [
      "조직 마스터 계정의 결제 콘솔에서 '부서'라는 '사용자 정의 비용 할당 태그'를 활성화하고, Cost Explorer에서 이 태그로 묶어서 봅니다.",
      "마스터 계정에서 '부서'를 'AWS 정의 태그'로 활성화한 뒤, Cost Explorer 보고서를 필터링합니다.",
      "각 계정별로 각자 '부서' 태그를 활성화하고 보고서를 따로 뽑아 엑셀로 합칩니다.",
      "마스터 계정 회원 계정 모두에서 태그를 활성화하되, 비용 보고서는 각자 보게 설정합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 태그가 달려 있다고 해서 비용 보고서에 바로 나오는 건 아닙니다. 마스터 계정에서 '비용 할당 태그'로 활성화해줘야 합니다. 직접 붙인 태그는 '사용자 정의 태그'이므로 이를 활성화하면, 전 계정의 비용을 해당 태그별로 그룹화해서 볼 수 있습니다.\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    "glossary": {
      "Cost Allocation Tags (비용 할당 태그)": "리소스 태그를 비용 보고서(Cost Explorer)의 필터나 그룹화 기준으로 사용할 수 있게 등록하는 것",
      "AWS Cost Explorer": "AWS 비용 사용량을 시각적으로 분석하고 미래 비용을 예측해주는 대시보드 도구",
      "Organization Management Account": "여러 계정을 묶어 통합 결제와 보안을 관리하는 대장 계정"
    }
  },
  {
    "id": 460,
    "question": "Salesforce(SaaS)에 든 고객 데이터를 S3로 안전하게 옮기고 싶습니다. 저장 시 우리만의 열쇠(KMS CMK)로 암호화해야 하고, 최소한의 코딩으로 끝내고 싶은데 추천 도구는?",
    "options": [
      "연결 코드를 직접 짠 복잡한 Lambda 함수를 만들어 전송을 시도합니다.",
      "Step Functions 워크플로를 설계하고 Salesforce API 연결 코드를 하나씩 작성합니다.",
      "Amazon AppFlow를 사용해 클릭 몇 번으로 흐름을 만들고 KMS 암호화 설정을 켭니다.",
      "Salesforce 전용 커넥터를 SDK로 개발해서 두 시스템을 무리하게 연결합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 외부 SaaS 앱(Salesforce 등)과 AWS를 잇는 고속도로는 Amazon AppFlow입니다. 코딩 한 줄 없이 클릭만으로 데이터를 가져올 수 있고, 전송 중 암호화와 S3 저장 시 KMS 암호화까지 완벽하게 지원합니다.\n\nhttps://aws.amazon.com/appflow/",
    "glossary": {
      "Amazon AppFlow": "SaaS 애플리케이션과 AWS 서비스 간에 코딩 없이 데이터를 안전하게 주고받는 통합 서비스",
      "SaaS (Software as a Service)": "인터넷을 통해 제공되는 소프트웨어 서비스(예: Salesforce, Gmail)",
      "SSL/TLS Encryption": "데이터가 네트워크를 타고 이동할 때 해커가 엿듣지 못하게 암호화하는 기술"
    }
  },
  {
    "id": 461,
    "question": "전 세계에서 접속하는 모바일 게임의 TCP/UDP 통신 지연을 줄이고 싶습니다. 하나의 지역(리전)에서 게임 서버가 돌아갈 때, 전 세계 사용자에게 가장 쾌적한 속도를 주는 방법은?",
    "options": [
      "Global Accelerator를 연결하고, TCP/UDP를 모두 지원하는 ALB(Application Load Balancer)를 입구에 둡니다.",
      "AWS Global Accelerator를 사용하고, 그 뒤에 TCP/UDP 포트를 여는 NLB(Network Load Balancer)를 배치합니다.",
      "CloudFront를 입구로 쓰고 그 뒤에 NLB를 둡니다. NLB 주소를 CloudFront의 오리진으로 설정합니다.",
      "CloudFront 뒤에 ALB를 두고, 전송 속도를 높이기 위해 모든 UDP 통신을 TCP로 강제 변환합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 게임에서 많이 쓰는 UDP 프로토콜과 글로벌 가속을 동시에 만족하는 건 'AWS Global Accelerator'와 'NLB'의 조합입니다. Global Accelerator는 전 세계 고정 IP를 제공해 지연 시간을 줄여주며, NLB는 L4 계층에서 UDP 트래픽을 빛의 속도로 분산해줍니다.\n\nhttps://aws.amazon.com/global-accelerator/",
    "glossary": {
      "AWS Global Accelerator": "AWS의 글로벌 네트워크 인프라를 사용해 사용자 트래픽의 지연 시간을 최대 60%까지 개선하는 서비스",
      "NLB (Network Load Balancer)": "L4 계층에서 작동하며, 초당 수백만 개의 요청을 아주 낮은 지연으로 처리하는 부하 분산 장치",
      "UDP (User Datagram Protocol)": "신뢰성보다는 속도가 중요한 멀티플레이어 게임이나 실시간 중계에 쓰이는 통신 방식"
    }
  },
  {
    "id": 462,
    "question": "주문이 몰릴 때마다 DB 처리가 지연되어 주문이 누락될까 걱정됩니다. 주문을 일단 '대기열'에 안전하게 받아두고, 서버가 자기 속도에 맞춰 차근차근 처리하게 만드는 구조는?",
    "options": [
      "서버 체급을 키우고(Scale-up), SNS 주제에 DB 주소를 바로 구독시켜 알림이 올 때마다 DB를 직접 찌르게 합니다.",
      "Amazon SQS 대기열에 주문을 담고, Auto Scaling 그룹 내 서버들이 대기열에서 주문을 꺼내 DB에 저장하게 합니다.",
      "SNS에 주문을 적고 서버들이 SNS를 직접 읽게 만듭니다. 서버는 로드 밸런서 뒤에서 대기합니다.",
      "CPU 점유율이 높을 때만 SQS에 주문을 적고, 평소에는 그냥 DB에 바로 쏘는 복잡한 하이브리드 로직을 구현합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 시스템 간의 충격을 완화하는 '완충지대'가 필요합니다. SQS는 주문이 폭주해도 일단 다 받아줍니다. 그 뒤에서 서버들이 자기 페이스대로 가져가면(Decoupling), 트래픽이 폭주해도 시스템이 뻗거나 주문이 유실되지 않습니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "Amazon SQS (Simple Queue Service)": "메시지를 임시로 보관하여 시스템 간의 연결을 느슨하게(Decoupling) 만들어주는 메시지 대기열",
      "Decoupling (결합 해제)": "구성 요소들이 서로의 상태에 상관없이 독립적으로 작동할 수 있게 분리하는 것",
      "Asynchronous Processing (비동기 처리)": "요청이 오자마자 즉시 결과를 주지 않고, 일단 접수 후에 나중에 처리하는 방식"
    }
  },
  {
    "id": 463,
    "question": "매일 밤 매트리스 센서가 수면 데이터(2MB)를 S3로 쏩니다. 이 짧은 데이터를 분석해서 아침까지 요약 리포트를 뽑아줘야 하는데, 가장 비용이 적게 드는 엔진은?",
    "options": [
      "대규모 데이터 변환 도구인 AWS Glue(Scala)를 사용하여 스케줄링합니다.",
      "Hadoop 기반의 대형 클러스터인 Amazon EMR을 띄워 Spark 스크립트를 돌립니다.",
      "가장 가벼운 Python 스크립트를 AWS Lambda에 올리고 파일이 오면 바로 실행합니다.",
      "AWS Glue의 PySpark 엔진을 써서 분산 처리 로직으로 데이터를 요약합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 작은 파일을 처리하는 데 Glue나 EMR 같은 거대 장비를 꺼내는 건 비효율적입니다. Lambda는 소규모 텍스트 파일 변환 작업에 가장 저렴하고 빠른 해결책입니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "Amazon S3": "데이터를 파일 형태로 무제한 저장할 수 있는 클라우드 옷장",
      "Python": "데이터 분석과 자동화에 가장 널리 쓰이는 쉽고 강력한 프로그래밍 언어",
      "Cost-effective Analysis": "작업의 크기에 맞는 적절한 엔진을 골라 비용을 극단적으로 아끼는 전략"
    }
  },
  {
    "id": 464,
    "question": "현재 DB가 하나의 데이터 서버(Single AZ)에서 돌아가고 있어 고장이 나면 서비스가 멈춥니다. 앱 코드는 하나도 손대지 않고, 가장 빨리 '고가용성(장애 대비)' 구조로 바꾸려면?",
    "options": [
      "RDS 설정 메뉴에서 '수정'을 누르고 '다중 AZ 배포' 옵션을 체크해서 바로 적용합니다.",
      "새로운 다중 AZ DB를 만들고, 현재 DB의 스냅샷을 찍어 복구한 뒤 주소를 바꿉니다.",
      "다른 지역에 읽기 전용 복제본을 만들고 Route 53으로 접속을 이리저리 분산합니다.",
      "Auto Scaling 그룹에 DB를 넣고 서버 주소를 DNS로 관리하는 수동 설계를 도입합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. RDS의 마법 같은 기능입니다. 이미 가동 중인 DB라도 설정에서 '다중 AZ'만 클릭하면, AWS가 알아서 다른 데이터 센터에 대기 서버를 만들고 데이터를 실시간 복제해줍니다. 접속 주소는 그대로 유지되므로 앱 코드를 고칠 필요도 없습니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Multi-AZ (RDS)": "두 개의 서로 다른 데이터 센터에 DB를 동시에 운영하여, 한쪽이 고장 나도 수 초 내에 자동으로 복구하는 고가용성 옵션",
      "Endpoint (엔드포인트)": "애플리케이션이 데이터베이스에 접속하기 위해 사용하는 주소(URL)",
      "Zero Code Change": "인프라 구조를 바꿔도 실제 소스 코드는 수정할 필요가 없는 상태"
    }
  },
  {
    "id": 465,
    "question": "여러 대의 EC2 서버가 하나의 똑같은 블록 저장소(EBS) 볼륨에 '동시에' 읽고 쓸 수 있게 설정하고 싶습니다. 이 'Multi-attach' 기능을 지원하는 고성능 볼륨 타입은?",
    "options": [
      "가장 무난하고 범용적인 SSD인 gp3 볼륨",
      "용량 대비 가격이 저렴한 HDD 타입의 st1 볼륨",
      "고성능 IOPS가 보장되고 다중 연결을 지원하는 io2(또는 io1) 볼륨",
      "예전 세대 표준 SSD인 gp2 볼륨"
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. EBS 볼륨은 원래 1:1 연결이 원칙이지만, io1/io2 타입은 하나의 볼륨을 최대 16대의 서버가 동시에 연결할 수 있는 'Multi-attach' 기능을 제공합니다. 이를 통해 클러스터형 애플리케이션을 구축할 수 있습니다.\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html",
    "glossary": {
      "EBS Multi-attach": "하나의 EBS 볼륨을 동일한 가용 영역 내의 여러 EC2 인스턴스에 동시에 할당하는 기능",
      "Provisioned IOPS (io2)": "사용자가 원하는 만큼의 입출력 속도(IOPS)를 미리 예약해서 보장받는 최고급 SSD 볼륨",
      "Nitro System": "AWS가 구축한 고성능 가상화 하드웨어 시스템으로, Multi-attach 같은 최신 기능을 가능케 함"
    }
  },
  {
    "id": 466,
    "question": "하나의 데이터 센터(가용 영역)에서만 서버가 돌아가고 있어 불안합니다. 서버가 죽어도 다른 곳에서 즉시 살아나게 하려면 어떤 아키텍처를 추가해야 할까요?",
    "options": [
      "서버를 'Auto Scaling 그룹'으로 묶고, 'Elastic Load Balancer(ALB)'를 앞에 세워 여러 가용 영역에 분산합니다.",
      "서버를 통째로 찍어둔 스냅샷을 매일 다른 해외 리전으로 백업해서 보관합니다.",
      "Route 53의 '지연 시간 라우팅' 기능을 켜서 사용자에게 가장 가까운 서버를 찾아주게 합니다.",
      "전 세계에 분산된 CloudFront를 앞에 세우고, 서버 주소를 여러 개 등록해 둡니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 고가용성의 기본 공식입니다. 서버를 Auto Scaling 그룹에 넣어두면 고장 났을 때 자동으로 다른 AZ에 새 서버를 띄워줍니다. 그리고 입구에 로드 밸런서(ALB)를 두면 사용자는 끊김 없이 서비스에 접속할 수 있습니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/",
    "glossary": {
      "Auto Scaling Group": "서버의 상태를 체크하다가 죽으면 즉시 살려내고, 바쁘면 숫자를 늘려주는 자동 관리 시스템",
      "Application Load Balancer (ALB)": "여러 대의 서버 중 여유 있는 곳으로 손님을 안내하고, 서버가 죽으면 정상인 곳으로 발길을 돌려주는 안내원",
      "Stateless (상태 비저장)": "서버에 중요한 정보를 직접 저장하지 않아, 서버가 언제든 교체되어도 서비스에 지장이 없는 구조"
    }
  },
  {
    "id": 467,
    "question": "회사가 1년짜리 '컴퓨팅 세이빙스 플랜(Compute Savings Plan)'을 샀는데, 해당 계정의 업무가 줄어 들어서 혜택을 다 못 누리고 있습니다. 남는 할인 혜택을 다른 계정의 서버들에게 나눠주려면?",
    "options": [
      "할인을 산 계정의 청구 설정에서 '할인 공유(Discount Sharing)' 옵션을 직접 켭니다.",
      "전체 조직 관리(마스터) 계정의 청구 설정에서 '할인 공유' 기능을 활성화합니다.",
      "남는 혜택이 아까우니 다른 계정의 서버들을 이 계정으로 꾸역꾸역 이사시킵니다.",
      "남은 약정 기간을 '예약 인스턴스 마켓플레이스'에 내다 팔아 현금화합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. Organizations로 묶인 계정들은 기본적으로 예약 할인을 서로 나눠 가질 수 있습니다. 마스터 계정의 결제 설정에서 할인 공유를 승인하면, 조직 전체의 비용을 최적화할 수 있습니다.\n\nhttps://docs.aws.amazon.com/savingsplans/latest/userguide/sharing.html",
    "glossary": {
      "Compute Savings Plan": "1년 또는 3년 약정을 통해 EC2, Fargate, Lambda 요금을 대폭 할인받는 요금제",
      "Discount Sharing": "조직 내 계정들 사이에서 남는 할인 혜택을 서로 양도하여 돈을 아끼는 시스템",
      "AWS Organizations": "여러 계정을 묶어 통합 결제와 보안 정책을 편리하게 관리하는 서비스"
    }
  },
  {
    "id": 468,
    "question": "검색 서비스(마이크로서비스)를 만들었는데, 외부 사용자는 REST API로 접속해야 하고 실제 서버는 프라이빗(VPC 내부)망의 컨테이너에 있습니다. 이 둘을 가장 안전하게 잇는 방법은?",
    "options": [
      "WebSocket API를 만들고, API Gateway에서 프라이빗 VPC 링크를 통해 ECS 컨테이너에 연결합니다.",
      "REST API를 설계하고, API Gateway에서 'VPC Link'를 생성하여 프라이빗 망의 ECS에 안전하게 요청을 전달합니다.",
      "WebSocket API 뒤에 보안 그룹을 아주 촘촘하게 설정해서 외부의 접속을 직접 받아냅니다.",
      "REST API를 만들고, 모든 컨테이너가 공인 IP를 갖게 해서 외부에서 직접 찌르게 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 프라이빗 서브넷에 숨겨진 서버에 외부 API 요청을 전달할 때는 'VPC Link'가 필수입니다. API Gateway가 전달자 역할을 수행하며, 엔드포인트를 통해 내부 리소스에 안전하게 요청을 전달합니다.\n\nhttps://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html",
    "glossary": {
      "Amazon API Gateway": "개발자가 API를 쉽게 생성, 게시, 관리 및 보호할 수 있게 해주는 완전 관리형 서비스",
      "VPC Link": "API Gateway가 소비자(인터넷)로부터 받은 요청을 VPC 내부의 프라이빗 리소스에 안전하게 전달하기 위해 사용하는 통로",
      "Microservices (마이크로서비스)": "거대한 앱을 여러 개의 작은 독립적인 기능 단위로 쪼개서 운영하는 방식"
    }
  },
  {
    "id": 469,
    "question": "S3에 원본 데이터를 쌓고 있는데, 어떤 고객이 언제 얼마나 파일을 찾을지 도무지 예측이 안 됩니다. 관리의 수고는 줄이면서도 비용은 알아서 아껴주는 똑똑한 저장 옵션은?",
    "options": [
      "자주 안 쓸 것 같은 파일을 눈치껏 골라 S3 Standard-IA로 일일이 복제합니다.",
      "수명 주기 규칙을 써서 생성 후 30일이 지나면 무조건 IA 등급으로 보냅니다.",
      "S3 Intelligent-Tiering으로 등급을 전환하여, 사용 패턴에 따라 자동으로 비용을 최적화하게 합니다.",
      "S3 Inventory라는 보고서 서비스를 켜서 접속이 없는 파일을 매달 출력해서 체크합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 인공지능급 센서를 가진 'Intelligent-Tiering'이 정답입니다. 파일 사용 패턴을 지켜보다가, 안 보는 파일은 저렴한 칸으로, 다시 찾는 파일은 빠른 칸으로 알아서 옮겨줍니다. 운영 오버헤드 없이 돈을 아끼는 최고의 방법입니다.\n\nhttps://aws.amazon.com/s3/storage-classes/intelligent-tiering/",
    "glossary": {
      "S3 Intelligent-Tiering": "데이터 사용 패턴 변화에 따라 비용이 다른 두 개의 액세스 계층 사이로 객체를 자동 이동시키는 스토리지 클래스",
      "Access Pattern (액세스 패턴)": "데이터가 얼마나 자주, 언제 읽히는지에 대한 규칙성",
      "Operational Overhead (운영 오버헤드)": "시스템을 직접 관리하고 유지 보수하느라 쏟게 되는 시간과 노력 비용"
    }
  },
  {
    "id": 470,
    "question": "IPv6 주소를 쓰는 EC2 서버가 인터넷의 외부 서비스에 접속은 해야 하지만, 거꾸로 외부에서 우리 서버로 먼저 말을 거는(접속하는) 건 철저히 막고 싶습니다. 어떤 장치가 필요할까요?",
    "options": [
      "NAT 게이트웨이를 하나 사서 라우팅 테이블에 등록합니다.",
      "인터넷 게이트웨이(IGW)를 만들어서 모든 대문을 활짝 열어줍니다.",
      "가상 프라이빗 게이트웨이(VPG)를 통해 사내 망으로 우회해서 인터넷을 씁니다.",
      "Egress-only 인터넷 게이트웨이(출구 전용 게이트웨이)를 만들어 라우팅 테이블에 연결합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. IPv4의 NAT Gateway 역할을 IPv6에서 수행하는 것이 바로 'Egress-only IGW'입니다. 우리 서버가 밖으로 나가는 건 허용하지만, 밖에서 우리 서버로 먼저 들어오는 건 철저히 차단하는 일방통행 보안 장치입니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html",
    "glossary": {
      "Egress-only Internet Gateway": "VPC 내의 리소스가 인터넷에 IPv6 연결을 시작할 수 있게 하되, 인터넷에서의 원치 않는 외부 연결은 차단하는 보안 구성 요소",
      "IPv6": "기존 주소가 부족해 만들어진 차세대 인터넷 주소 체계",
      "Outbound (아웃바운드)": "내부망에서 외부 인터넷 세상으로 나가는 트래픽"
    }
  },
  {
    "id": 471,
    "question": "매일 1TB의 데이터를 S3에 쌓는 컨테이너 앱이 있습니다. 비용도 아끼고 싶고, 보안상 데이터가 공용 인터넷 망을 타는 것도 꼴 보기 싫을 때 적용할 가장 깔끔한 네트워크 옵션은?",
    "options": [
      "S3 Intelligent-Tiering을 켜서 저장소 요금을 아끼는 데 집중합니다.",
      "S3 Transfer Acceleration의 고속도로 기능을 써서 전송 속도만 높입니다.",
      "S3용 게이트웨이 VPC 엔드포인트를 생성하고 라우팅 테이블에 등록합니다.",
      "S3용 인터페이스 엔드포인트(PrivateLink)를 생성하여 유료 전용선을 뚫습니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. VPC 내부 서버가 S3를 내부망처럼 쓰게 해주는 기술입니다. 특히 '게이트웨이' 방식은 무료이며, 인터넷 망을 거치지 않아 데이터 전송 요금이 발생하지 않습니다. 보안과 가성비를 모두 잡는 표준 설계입니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    "glossary": {
      "Gateway VPC Endpoint": "VPC와 S3/DynamoDB 사이를 AWS 내부망으로 직접 연결해주는 무료 전용 통로",
      "Public Internet (공용 인터넷)": "누구나 접근 가능한 외부 망으로, 데이터를 주고받을 때 요금이 발생함",
      "Routing Table (라우팅 테이블)": "네트워크 트래픽이 길을 잃지 않게 목적지에 맞는 출구를 알려주는 안내판"
    }
  },
  {
    "id": 472,
    "question": "채팅 앱을 만드는데, 메시지를 읽을 때 지연 시간(Latency)이 거의 없어야 사용자가 좋아할 것 같습니다. 기존 앱 코드는 거의 안 바꾸면서 DynamoDB의 속도를 10배 이상 높이는 비법은?",
    "options": [
      "DynamoDB 앞에 DAX(DynamoDB Accelerator) 캐시 클러스터를 두고, 엔드포인트 주소만 바꿉니다.",
      "DB를 여러 대 복제한 읽기 전용 복제본(Read Replica)을 추가하고 트래픽을 나눕니다.",
      "읽기 용량(RCU)을 지금보다 2배로 팍팍 늘려서 돈으로 해결합니다.",
      "Redis 엔진인 ElastiCache를 서버 옆에 설치하고 데이터를 매번 동기화하는 코드를 새로 짭니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. DynamoDB 전용 터보 엔진이 바로 DAX입니다. 똑똑한 인메모리 캐시라서, 개발자는 주소만 바꿔주면 별도의 캐시 로직 없이도 마이크로초 단위의 빛의 속도를 경험할 수 있습니다.\n\nhttps://aws.amazon.com/dynamodb/dax/",
    "glossary": {
      "Amazon DAX (DynamoDB Accelerator)": "DynamoDB를 위한 완전 관리형 인메모리 캐시로, 읽기 속도를 밀리초에서 마이크로초로 단축함",
      "Latency (지연 시간)": "사용자가 어떤 행동을 했을 때 결과가 화면에 나타날 때까지 걸리는 버벅임 시간",
      "In-memory Cache (인메모리 캐시)": "데이터를 메모리에 미리 복사해두어 디스크 DB에 매번 물어볼 필요 없이 빠르게 응답하는 기술"
    }
  },
  {
    "id": 473,
    "question": "쇼핑몰 웹 사이트의 정적 이미지 요청이 너무 많아져 네트워크 전송 비용이 크게 늘고 있습니다. 비용을 줄이면서 전 세계 사용자에게 이미지를 빠르게 배달할 서비스는?",
    "options": [
      "Amazon CloudFront를 도입하여 전 세계 엣지 로케이션에 파일을 캐싱합니다.",
      "ElastiCache 클러스터를 만들고 로드 밸런서(ALB)와 억지로 연결해 파일을 서빙합니다.",
      "AWS WAF 웹 방화벽을 켜고 이미지 파일만 골라 차단하는 규칙을 만듭니다.",
      "다른 국가(리전)에 똑같은 로드 밸런서를 하나 더 만들어서 트래픽을 리전별로 쪼갭니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 이미지를 전 세계 엣지 서버에 복제해두는 CloudFront(CDN)를 쓰면 사용자는 리전까지 올 필요 없이 가까운 곳에서 이미지를 받아갑니다. 서버 부하와 데이터 전송 요금을 극적으로 아낄 수 있습니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "Amazon CloudFront": "전 세계Edge 로케이션에 콘텐츠를 복제해두고 전송 속도를 높이는 캐시 서비스(CDN)",
      "Edge Location (엣지 로케이션)": "사용자 근처에 배치된 AWS의 소규모 데이터 센터 거점으로, 전송 통로 역할을 함",
      "Data Transfer Cost (데이터 전송 비용)": "AWS 리전에서 인터넷 세상으로 데이터가 나갈 때 발생하는 요금"
    }
  },
  {
    "id": 474,
    "question": "여러 지역(리전)에 흩어진 수많은 우리 회사 VPC들이 서로 자유롭게 통신해야 합니다. 거미줄처럼 복잡하게 얽힌 연결들을 최소한의 수고로 한곳에서 관리하고 싶다면?",
    "options": [
      "모든 VPC끼리 일대일로 'VPC 피어링'을 맺어 수천 개의 연결 고리를 만듭니다.",
      "Direct Connect 게이트웨이를 써서 전용선 타는 기분으로 모든 망을 우회 연결합니다.",
      "AWS Transit Gateway를 리전마다 두고, 리전 간에는 Transit Gateway 피어링으로 거대하게 한데 묶습니다.",
      "PrivateLink를 계좌 수만큼 뚫어서 각 서비스에 하나하나 프라이빗 통로를 만듭니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 네트워크 중앙 허브 역할을 하는 Transit Gateway가 주인공입니다. 수많은 VPC를 이 허브에 꽂기만 하면 그들끼리 자유롭게 통신이 가능해지며 관리도 훨씬 편해집니다.\n\nhttps://aws.amazon.com/transit-gateway/",
    "glossary": {
      "AWS Transit Gateway": "수천 개의 VPC와 온프레미스 네트워크를 중앙에서 하나의 허브로 연결해주는 클라우드 라우터",
      "Network Hub (허브)": "여러 장치가 한곳에 모여 서로 데이터를 주고받게 해주는 중앙 장치",
      "Scalability (확장성)": "연결할 VPC가 10개에서 1,000개로 늘어나도 관리 체계가 무너지지 않고 버티는 능력"
    }
  },
  {
    "id": 475,
    "question": "컨테이너 앱(ECS)에서 쓸 '공유 파일 시스템'이 필요합니다. 튼튼해야 하고 장애 시 8시간 내의 데이터로 다른 지역에서 복구할 수 있어야 합니다. 가용 영역마다 접속 통로도 있어야 할 때 추천하는 엔진은?",
    "options": [
      "다중 AZ 설정이 된 Windows 서버용 Amazon FSx",
      "NetApp ONTAP 기술을 사용하는 전문 스토리지 Amazon FSx",
      "표준 스토리지 클래스를 사용하는 Amazon EFS (Elastic File System)",
      "OpenZFS 기반의 고성능 파일 서버 Amazon FSx"
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 컨테이너와 찰떡궁합인 공유 저장소는 EFS입니다. 가용 영역마다 접속 통로(Mount Target)를 만들어주어 리전 전체에서 편리하게 파일을 공유할 수 있고, 백업 연동도 매우 쉽습니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "Amazon EFS (Elastic File System)": "수천 개의 서버나 컨테이너가 동시에 접속해 파일을 공유할 수 있는 무한 확장 파일 저장소",
      "RPO (Recovery Point Objective, 복구 지점 목표)": "사고 발생 시 최대 몇 시간 전의 데이터까지 되돌려야 하는가에 대한 시간 기준",
      "Mount Target (탑재 대상)": "VPC 내의 각 가용 영역에서 파일 시스템에 접속하기 위해 마련된 전용 대문(IP)"
    }
  }
];