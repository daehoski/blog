export const quizData = [
  {
    "id": 476,
    "question": "회사가 급격히 성장하고 있어 매일 새로운 직원들이 들어옵니다. 부서별로 권한을 효율적으로 관리하기 위해 IAM 그룹을 만들었는데, 이 그룹원들에게 '가장 안전하게' 권한을 주는 방법은?",
    "options": [
      "SCP(서비스 제어 정책)를 써서 조직 전체 수준에서 접근을 통제합니다.",
      "최소 권한을 가진 IAM 역할을 만들고, 이 역할을 IAM 그룹에 직접 연결합니다.",
      "가장 적은 권한만 허용하는 IAM 정책을 만들어 IAM 그룹에 직접 연결합니다.",
      "IAM 역할을 만들고, 최대 권한 범위를 정하는 '권한 경계(Permissions Boundary)'를 설정합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. IAM 그룹에 권한을 주는 정석은 '정책(Policy)'을 만들어 그룹에 붙이는 것입니다. 이때 '최소 권한의 원칙'을 지켜 꼭 필요한 권한만 딱 맞춰주는 것이 가장 안전합니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    "glossary": {
      "IAM Group (그룹)": "여러 명의 IAM 사용자에게 한 번에 동일한 권한을 부여하기 위해 묶어둔 집합",
      "IAM Policy (정책)": "누가 어떤 리소스에 대해 어떤 행동을 할 수 있는지 정의해 둔 JSON 문서",
      "Least Privilege (최소 권한)": "실수나 사고를 막기 위해 딱 필요한 만큼만 권한을 허용하는 보안의 황금률"
    }
  },
  {
    "id": 477,
    "question": "어떤 그룹이 S3 버킷 리스트를 보고 객체를 삭제해야 하는데, 삭제 기능이 작동하지 않습니다. 관리자가 만든 정책에 'Action' 부분이 비어 있거나 잘못된 것 같은데, 최소 권한 원칙을 지키며 추가해야 할 문구는?",
    "options": [
      "B. (Action: s3:ListBucket, Resource: arn:aws:s3:::*)",
      "D. (Action: s3:DeleteObject, Resource: arn:aws:s3:::bucket/*)"
    ],
    "answer": 1,
    "explanation": "정답은 D입니다. 객체 삭제가 안 된다고 했으므로 's3:DeleteObject' 권한이 문장에 들어있어야 합니다. 또한 대상 리소스를 버킷 내부 전체(/*)로 지정해야 해당 버킷의 모든 객체를 지울 수 있게 됩니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html",
    "glossary": {
      "Action (작업)": "정책에서 허용하거나 거부할 특정 동작(예: 읽기, 쓰기, 삭제 등)",
      "Resource (리소스)": "정책이 적용될 대상(예: 특정 S3 버킷이나 파일 주소)",
      "s3:DeleteObject": "S3 버킷 안에 들어있는 파일을 삭제할 수 있게 해주는 권한"
    }
  },
  {
    "id": 478,
    "question": "로펌에서 법적 문서를 널리 공개해야 하는데, 한 가지 조건이 있습니다. 정해진 미래 날짜 전까지는 관리자를 포함해 누구도 이 파일을 고치거나 지울 수 없어야 합니다. 가장 안전한 설정은?",
    "options": [
      "S3 정적 웹 사이트 모드로 파일을 올리고, 미래 날짜 전까지 모든 관리자에게 '읽기 전용' 권한만 줍니다.",
      "버전 관리가 켜진 S3에 파일을 올리고, 'S3 Object Lock' 기능을 활성화해 보존 기간을 설정합니다.",
      "파일이 수정되려고 하면 람다가 출동해 즉시 원래 버전으로 되돌리는 자동화 로직을 짭니다.",
      "정적 웹 사이트용 버킷에 폴더를 만들고, 특정 폴더에만 Object Lock 보존 기간을 수동으로 겁니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. '박제' 수준의 보호가 필요하다면 S3 Object Lock이 유일한 정답입니다. 이 기능을 쓰면 보존 기간이 지나기 전에는 누구도 파일을 지우거나 덮어쓸 수 없습니다. 버전 관리와 함께 쓰면 보안이 더욱 완벽해집니다.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    "glossary": {
      "S3 Object Lock (객체 잠금)": "한 번 저장된 순수한 파일을 일정 기간 동안 절대 수정하거나 지우지 못하게 하는 WORM 기술",
      "S3 Versioning (버전 관리)": "파일이 바뀔 때마다 과거 기록을 모두 남겨두어 실수로 지워도 언제든 되살릴 수 있게 하는 기능",
      "Compliance (규정 준수)": "법규나 정해진 규칙에 어긋나지 않게 시스템을 운영하는 것"
    }
  },
  {
    "id": 479,
    "question": "수동으로 만든 웹 사이트 인프라(ASG, ALB, RDS 등)를 이제 개발과 운영 환경에 똑같이 '복제'해서 빠르게 배포하고 싶습니다. 인프라를 코드로 정의해 자동화하는 추천 도구는?",
    "options": [
      "Systems Manager를 사용하여 기존의 수동 구성을 그대로 복사해 옆 동네 가용 영역으로 옮깁니다.",
      "인프라 구성을 템플릿(코드)으로 정의하고, AWS CloudFormation을 통해 버튼 하나로 배포합니다.",
      "AWS Config를 켜서 현재 자원 목록을 기록한 뒤, 그 목록을 기반으로 수동 배포를 다시 진행합니다.",
      "Elastic Beanstalk를 사용해 프로토타입의 설정값을 일일이 참조해가며 새 환경을 만듭니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 인프라 인스턴스 자동화 배포하면 CloudFormation입니다. 설계도를 텍스트 파일로 적어두면 AWS가 버튼 하나로 똑같은 복제품을 전국 어디든 만들어줍니다. 이를 'IaC'라고 부릅니다.\n\nhttps://aws.amazon.com/cloudformation/",
    "glossary": {
      "AWS CloudFormation": "설계도(템플릿)를 보고 AWS의 모든 자원을 자동으로 생성, 수정, 삭제해주는 서비스",
      "IaC (Infrastructure as Code)": "인프라 설정을 코드로 작성하여 관리함으로써 인간의 실수를 줄이고 재사용성을 높이는 방식",
      "Prototype (프로토타입)": "본격적인 개발 전 성능이나 기능을 검증하기 위해 미리 만들어본 견본 모델"
    }
  },
  {
    "id": 480,
    "question": "보안팀장이 EC2와 S3 사이의 모든 통신이 절대로 '공용 인터넷'을 타지 말아야 한다고 엄명을 내렸습니다. 이 보안 규정을 지키기 위해 꼭 필요한 기능은?",
    "options": [
      "AWS KMS (키 관리 서비스)",
      "VPC 엔드포인트 (VPC Endpoint)",
      "프라이빗 서브넷 (Private Subnet)",
      "가상 프라이빗 게이트웨이 (VPG)"
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 통신이 공용 인터넷을 타지 않게 하려면 'VPC 엔드포인트'를 만들어야 합니다. 이를 통해 S3 등의 서비스와 내부망 안에서만 대화하도록 전용 터널을 뚫어줍니다. 보안과 비용 모두에 유리합니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html",
    "glossary": {
      "VPC Endpoint (VPC 엔드포인트)": "인터넷 게이트웨이 없이도 내부망(VPC)에서 S3 등의 서비스로 안전하게 직접 접속하게 돕는 통로",
      "Private Network (사내망)": "외부 인터넷과 분리되어 인증된 사용자나 장치만 접근할 수 있는 안전한 네트워크 구역",
      "Public Internet (공용 인터넷)": "누구나 접근 가능한 외부 망으로, 데이터를 주고받을 때 요금이 발생함"
    }
  },
  {
    "id": 481,
    "question": "DB에 새로운 데이터가 들어올 때마다 캐시(ElastiCache)에도 즉시 반영해서 '캐시와 DB의 데이터가 항상 100% 일치'하게 만들고 싶습니다. 어떤 캐싱 전략이 좋을까요?",
    "options": [
      "데이터가 필요할 때만 캐시를 채우는 '지연 로딩(Lazy Loading)'",
      "DB에 쓸 때 캐시에도 동시에 한 번에 쓰는 'Write-through' 전략",
      "캐시 수명(TTL)을 아주 짧게 가져가는 시간 기반 갱신 전략",
      "AWS AppConfig를 이용해 동적으로 캐시 정책을 바꾸는 방식"
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 데이터 일관성이 최우선이라면 'Write-through'가 정석입니다. DB에 쓸 때 캐시에도 동시에 기록하므로 사용자는 언제나 최신 정보를 만날 수 있습니다.\n\nhttps://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Strategies.html#Strategies.WriteThrough",
    "glossary": {
      "Write-through Cache": "데이터를 저장할 때 DB와 캐시에 동시에 써서 데이터 불일치를 원천 방지하는 방식",
      "Data Consistency (데이터 일관성)": "여러 곳에 저장된 정보가 서로 충돌 없이 똑같은 값을 유지하는 성질",
      "Lazy Loading (지연 로딩)": "처음부터 다 불러오지 않고 실제로 필요할 때(요청 올 때)만 데이터를 채우는 방식"
    }
  },
  {
    "id": 482,
    "question": "온프레미스에 든 100GB의 과거 데이터를 S3로 옮겨야 합니다. 인터넷 회선은 100Mbps로 넉넉하지 않은데, 암호화까지 신경 쓰면서 '운영 수고'를 최소화하려면?",
    "options": [
      "터미널에서 's3 sync' 명령어를 써서 무식하지만 확실하게 데이터를 쏩니다.",
      "AWS DataSync를 설치해 전송 규칙을 정하고 마이그레이션을 자동으로 진행합니다.",
      "100GB 정도는 아깝지만 보안을 위해 Snowball 장비를 임대해 택배로 보냅니다.",
      "사내망과 AWS 사이에 전용 VPN을 뚫고 's3 cp' 명령으로 야금야금 복사합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 대량의 데이터를 안정적으로 옮기려면 DataSync가 답입니다. 전송 중 암호화와 무결성 검사를 알아서 해주고 네트워크 속도도 효율적으로 관리해줍니다.\n\nhttps://aws.amazon.com/datasync/",
    "glossary": {
      "AWS DataSync": "온프레미스와 AWS 사이에서 대량의 데이터를 빠르고 안전하게 동기화해주는 서비스",
      "Migration (마이그레이션)": "운영 중인 시스템이나 데이터를 새로운 환경(예: 클라우드)으로 옮기는 과정",
      "Bandwidth (대역폭)": "네트워크 통신에서 한 번에 보낼 수 있는 데이터 전송 용량/속도"
    }
  },
  {
    "id": 483,
    "question": ".NET 6 기반의 Windows 작업을 컨테이너로 만들었습니다. 이 작업을 10분마다 실행하는데, 매번 1~3분 정도 걸립니다. 가장 가성비 좋게 실행하는 방법은?",
    "options": [
      "컨테이너 이미지를 그대로 사용하여 Lambda 함수를 만들고 EventBridge로 호출합니다.",
      "AWS Batch 서비스를 이용해 Fargate를 컴퓨팅 자원으로 쓰는 작업을 구성합니다.",
      "Fargate에서 실행되는 'ECS 예약된 작업(Scheduled Task)'을 만들어 10분마다 실행합니다.",
      "Fargate 서버를 하나 24시간 띄워놓고, 그 안에서 'Windows 작업 스케줄러'를 돌립니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. Windows 컨테이너 작업이고 주기가 일정하다면 ECS의 '예약된 작업'이 정답입니다. 필요할 때만 Fargate를 띄워 일을 시키고 꺼버리기 때문에 매우 경제적입니다.\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduled_tasks.html",
    "glossary": {
      "Fargate (파게이트)": "서버 관리 없이 컨테이너만 던져주면 알아서 실행해주는 서버리스 컨테이너 엔진",
      "Scheduled Task (예약된 작업)": "정해진 시간(예: 매주 월요일, 매시간 등)에 특정 프로그램을 자동으로 실행하는 설정",
      "Windows Container": "리눅스가 아닌 윈도우 운영체제 위에서 돌아가는 앱을 담은 보관함"
    }
  },
  {
    "id": 484,
    "question": "여러 개의 독립적인 계정들을 하나로 합치고, 사내 직원들이 쓰던 아이디(Directory Service)로 모든 계정에 로그인하게 만들고 싶습니다. 추진해야 할 2가지 작업은?",
    "options": [
      "AWS Organizations를 만들어 계정들을 한 가족으로 묶고 새 계정들도 거기서 생성합니다.",
      "Amazon Cognito를 도입해 복잡한 회원 가입 로직을 짜고 SSO(통합 로그인)를 연동합니다.",
      "계정마다 SCP를 걸어 통제하고, IAM Identity Center를 Directory Service에 수동으로 심습니다.",
      "Organizations 대시보드 바로 옆에 Directory Service 전용 로그인 버튼을 따로 코딩합니다.",
      "Organizations 전체에 'IAM Identity Center(구 SSO)'를 설정하고 사내 디렉터리와 통합합니다."
    ],
    "answer": [1, 3],
    "explanation": "정답은 A와 E입니다. 여러 계정을 통합 관리하려면 Organizations(A)가 필수이며, 아이디 하나로 접속하게 하려면 IAM Identity Center(E)를 사내 디렉터리와 통합하면 됩니다.\n\nhttps://aws.amazon.com/identitycenter/",
    "glossary": {
      "AWS Organizations": "여러 AWS 계정을 그룹화하여 통합 결제와 보안 정책을 편리하게 관리하는 서비스",
      "IAM Identity Center (AWS SSO)": "한 번의 로그인으로 여러 AWS 계정과 비즈니스 앱에 접근할 수 있게 돕는 관문 서비스",
      "Directory Service": "회사 직원들의 이름, 부서, 비밀번호 등을 보관하고 인증해주는 전화번호부 같은 시스템"
    }
  },
  {
    "id": 485,
    "question": "오래된 뉴스 영상들을 평소엔 거의 안 보지만 필요할 땐 '5분 안에' 바로 꺼내 볼 수 있게 보관하고 싶습니다. 비용을 가장 아끼는 저장소 등급은?",
    "options": [
      "S3 Glacier에 저장하고, 유사시 '긴급 검색(Expedited Retrieval)' 기능을 사용합니다.",
      "S3 Glacier에 저장하고, 몇 시간을 기다려야 하는 '표준 검색'을 인내심 있게 사용합니다.",
      "S3 Standard-IA 등급에 보관하여 언제든 즉시(밀리초 단위) 꺼낼 수 있게 합니다.",
      "S3 One Zone-IA 등급에 보관해 비용을 더 깎고 파일 유실 위험은 감수합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 가장 저렴한 보관소는 Glacier이지만 꺼내는 데 시간이 걸립니다. 하지만 '긴급 검색'을 쓰면 1~5분 만에 데이터를 가져올 수 있어, 가끔 발생하는 긴급 상황에 효율적으로 대응할 수 있습니다.\n\nhttps://aws.amazon.com/s3/storage-classes/glacier/",
    "glossary": {
      "Amazon S3 Glacier": "자주 안 쓰는 데이터를 아주 저렴한 가격으로 장기 보관해주는 아카이브 저장소",
      "Expedited Retrieval (긴급 검색)": "보통 시간이 걸리는 Glacier 데이터를 1~5분 내외로 빠르게 되찾아오는 유료 서비스",
      "Archive (아카이브)": "나중에 참고하기 위해 따로 떼어 안전하게 보관해둔 기록 데이터"
    }
  },
  {
    "id": 486,
    "question": "웹 화면은 정적이고, 로직은 컨테이너로 돌며, 데이터는 관계형 DB를 쓰는 3계층 앱을 만들려 합니다. 운영비를 아끼면서 관리 수고도 덜 수 있는 최상의 조합은?",
    "options": [
      "S3에서 정적 웹을 보여주고, 로직은 서버 없는 Fargate(ECS)로 돌리고, DB는 RDS를 씁니다.",
      "CloudFront로 화면을 띄우고, 로직은 직접 패치하고 관리해야 하는 EC2 서버 위에서 ECS로 돌립니다.",
      "S3로 화면을 전송하고, 로직은 관리가 더 까다로운 쿠버네티스(EKS) 환경에서 Fargate로 돌립니다.",
      "예약 인스턴스(RI)를 대량 구매해 EC2에 모든 계층을 직접 깔고 24시간 모니터링합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 운영 비용과 관리 수고를 줄이는 최강 조합입니다. 화면은 S3, 로직은 서버 없는 Fargate, DB는 관리형인 RDS를 쓰면 개발자는 코드에만 집중할 수 있습니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Three-tier Architecture (3계층 아키텍처)": "웹(사용자 접점), 앱(비즈니스 로직), DB(데이터 저장)를 물리적으로 분리해 안정성과 확장성을 높인 설계",
      "AWS Fargate": "서버를 빌려 쓰지 않고 컨테이너만 등록하면 알아서 리소스를 할당해 실행해주는 엔진",
      "Amazon RDS": "관계형 데이터베이스(Oracle, MySQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 487,
    "question": "사내 망(Linux 서버들)과 클라우드 서버들이 하나의 똑같은 파일 시스템을 '마운트'해서 나눠 쓰고 싶습니다. 사이트 간 VPN을 통해 사내에서도 접속 가능해야 할 때 추천하는 장치는?",
    "options": [
      "윈도우랑 친한 FSx 다중 AZ 배포판을 마련합니다.",
      "EBS 볼륨에 다중 연결 기능을 켜서 이 서버 저 서버에 다 꽃아 봅니다.",
      "Amazon EFS를 만들고, 가용 영역마다 접속 통로(Mount Target)를 여러 개 생성합니다.",
      "EFS를 만들되, 보안을 위해 접속 통로는 딱 하나만 만들고 여러 포인트로 공유합니다."
    ],
    "answer": 1,
    "explanation": "정답은 C입니다. 리눅스 서버들이 가장 편하게 나눠 쓰는 파일 저장소는 EFS입니다. 가용 영역마다 접속 통로를 만들어두면 사내 망에서도 VPN을 타고 들어와 로컬 하드처럼 쓸 수 있습니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "Amazon EFS (Elastic File System)": "수천 개의 서버가 동시에 접속해 파일을 공유할 수 있는 리눅스용 무제한 저장소",
      "Mount (마운트)": "외부 저장 장치를 컴퓨터 내부의 파일 시스템처럼 연결해서 쓰는 일",
      "Mount Target (탑재 대상)": "VPC 내의 각 가용 영역에서 파일 시스템에 접속하기 위해 마련된 전용 대문(IP)"
    }
  },
  {
    "id": 488,
    "question": "회사 재무팀에서 \"앞으로 우리 멤버 계정의 돈 관계(Billing)는 계정 주인(Root)이라 할지라도 절대로 못 보게 막아야 한다\"고 요청했습니다. 가장 확실한 통제권은?",
    "options": [
      "재무팀 직원들만 모아서 전용 IAM 그룹에 넣고 결제 관리 권한만 줍니다.",
      "루트 사용자를 포함한 전 직원의 결제 접근을 막는 복잡한 '자격 증명 정책'을 모든 계정마다 일일이 짭니다.",
      "SCP(서비스 제어 정책)를 만들어 모든 결제 관련 권한을 'Deny'하고, 조직(OU) 전체에 덮어버립니다.",
      "조직 통합 결제 기능을 끄고 각자 돈을 내게 해서 관심을 끊게 만듭니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 루트 사용자마저 통제할 수 있는 유일한 힘은 SCP입니다. SCP로 결제 정보 조회를 거부하면, 계정 주인이라도 돈 관계를 볼 수 없게 되어 재무팀의 요구를 완벽히 충족합니다.\n\nhttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    "glossary": {
      "SCP (Service Control Policy)": "조직 내 계정의 권한을 중앙에서 강력하게 제한하는 가드레일 정책",
      "Organization Unit (OU)": "여러 계정을 용도별(개발, 재무 등)로 묶어 관리하는 가상의 폴더",
      "Root User (루트 사용자)": "계정 생성 시 만들어지는 무제한 권한을 가진 절대 관리자"
    }
  },
  {
    "id": 489,
    "question": "SNS로 주문 알림을 사내 서버에 보내는데, 간혹 알림이 배달되지 않는 사고가 납니다. 이 '길 잃은 주문'들을 14일 동안 안전하게 보관했다가 분석하고 싶다면?",
    "options": [
      "Kinesis Data Stream을 맨 뒤에 붙여서 누락된 메시지를 2주간 실시간 감시합니다.",
      "주문 단계 중간에 SQS 대기열을 끼워 넣고, 보존 기간을 14일로 설정합니다.",
      "SNS의 '데드 레터 대기열(DLQ)' 대상을 SQS로 설정하고, SQS의 보존 기간을 14일로 둡니다.",
      "DynamoDB에 저장 옵션을 켜고, 14일 뒤에 데이터가 사라지는 유통기한(TTL) 설정을 겁니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 배달 실패 시 쓰레기통이 아닌 반송함으로 보내는 기능이 DLQ입니다. 실패한 메시지를 SQS(보관소)에 쌓아두고 보존 기간을 넉넉히 14일로 주면 엔인니어가 나중에 분석할 수 있습니다.\n\nhttps://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html",
    "glossary": {
      "Dead Letter Queue (DLQ, 데드 레터 대기열)": "메시지 처리에 실패했을 때 해당 메시지를 버리지 않고 분석을 위해 따로 모아두는 대기열",
      "Amazon SNS (Simple Notification Service)": "한 번의 메시지 발행으로 수많은 구독자(서버, 이메일 등)에게 알림을 쏘는 서비스",
      "Message Retention (메시지 보존)": "메시지가 누군가에게 처리될 때까지 대기열에서 지워지지 않고 버티는 시간"
    }
  },
  {
    "id": 490,
    "question": "DynamoDB에 든 보물 같은 데이터들을 S3로 실시간 백업하고 싶은데, DB 성능(읽기 용량)에는 1도 영향을 미치고 싶지 않습니다. 최소한의 코딩으로 가능한 방법은?",
    "options": [
      "EMR(Hadoop) 클러스터를 띄워 밤마다 DB를 통째로 읽어 S3에 덤프를 뜹니다.",
      "DynamoDB의 'S3로 직접 내보내기' 기능을 켜고, '지정 시간 복구(PITR)'를 활성화합니다.",
      "DynamoDB 스트림을 개설하고, 람다 함수가 바뀐 데이터만 한 땀 한 땀 S3에 복사하게 짭니다.",
      "매 정시마다 DB 전체를 조회해서 파일을 만드는 람다 스케줄을 돌립니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 가장 세련된 방식은 'Export to S3'입니다. DB 엔진 성능에 전혀 지장을 주지 않으면서 설정만으로 실시간 백업이 완성됩니다.\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.html",
    "glossary": {
      "Export to S3": "DynamoDB의 데이터를 엔진 성능 저하 없이 S3 객체로 직접 뽑아내주는 편리한 기능",
      "PITR (Point-in-Time Recovery)": "지난 35일 이내의 어느 시점으로든 DB를 되돌릴 수 있게 해주는 마법 같은 실시간 백업 옵션",
      "RCU (Read Capacity Unit)": "DynamoDB에서 한꺼번에 얼마나 많은 양을 읽을 수 있는지 보여주는 성능 단위"
    }
  },
  {
    "id": 491,
    "question": "은행의 신용카드 승인 요청을 '비동기'로 처리하려 합니다. 보안을 위해 모든 데이터는 암호화(KMS)되어야 하고, 요청이 누락되면 안 됩니다. 가장 가성비 좋은 설계는?",
    "options": [
      "SQS 표준 대기열에 요청을 넣고 람다가 처리하게 합니다. 암호화는 SSE-KMS 방식을 씁니다.",
      "속도가 중요한 FIFO 대기열을 쓰고, 관리가 편한 SSE-SQS 암호화 방식을 적용합니다.",
      "순서가 생명인 FIFO 대기열을 쓰고, 보안을 위해 SSE-KMS 암호화를 걸고 람다에게 복호화 권한을 줍니다.",
      "SQS 표준 대기열을 쓰고 람다에게 암호 키를 직접 휘두를 수 있는 대장 권한을 부여합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 비동기이고 가성비가 중요하다면 SQS 표준 대기열이 최고입니다. KMS로 암호를 거는 것은 기본이며 필요한 권한만 람다에게 부여하는 설계가 가장 알뜰하고 튼튼합니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "Standard Queue (표준 대기열)": "무제한 처리량과 가장 저렴한 가격을 가진 SQS의 기본 대기열 방식",
      "SSE-KMS (서버 측 암호화)": "데이터가 하드디스크에 저장될 때 AWS의 키 관리 시스템을 이용해 자동으로 자물쇠를 채우는 것",
      "Asynchronous (비동기)": "질문하고 바로 답을 기다리지 않고, 나중에 준비되면 받기로 하는 효율적인 작업 방식"
    }
  },
  {
    "id": 492,
    "question": "개발자들이 테스트용으로 너무 비싼 고성능 EC2를 자꾸 만들어서 예산이 펑크 났습니다. 중앙에서 아예 계정별로 생성 가능한 서버 타입을 제한하려면?",
    "options": [
      "표준 사양만 적힌 Systems Manager 템플릿을 개발하고, 그 템플릿으로만 서버를 만들게 시킵니다.",
      "Organizations로 계정을 묶은 뒤, SCP(서비스 제어 정책)를 써서 특정 서버 타입 이외엔 '생성 금지'를 겁니다.",
      "비싼 서버가 생성될 때마다 람다가 출동해서 즉시 서버를 강제로 꺼버리는 감시 로직을 구현합니다.",
      "승인된 서버만 들어있는 전용 백화점인 'Service Catalog' 시스템을 구축해 거기서만 쇼핑하게 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 가이드라인(가드레일)을 치는 데는 SCP가 최고입니다. 저렴한 타입 말고는 아예 생성이 안 되게 막아버리면 개발자의 실수를 원천 차단할 수 있습니다.\n\nhttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    "glossary": {
      "SCP (Service Control Policy)": "조직 내 계정의 권한을 중앙에서 강력하게 제한하는 가드레일 정책",
      "Instance Type (인스턴스 유형)": "CPU, 메모리 사양에 따라 나뉘는 서버의 등급(예: t3.medium, c5.large 등)",
      "Guardrail (가드레일)": "사용자가 정해진 범위 밖으로 나가지 못하게 자동으로 막아주는 안전 장치"
    }
  },
  {
    "id": 493,
    "question": "고객 서비스 전화 품질을 AI로 분석하려 합니다. 녹음된 오디오를 텍스트로 바꾸고, 영어가 아니면 번역한 뒤, 고객의 기분(감정)이 좋았는지 나빴는지 분석해주는 3단계 서비스 조합은?",
    "options": [
      "Comprehend로 오디오를 직접 번역하고, Lex로 대화 리포트를 만듭니다.",
      "Polly를 써서 오디오를 텍스트로 읽어내고, Translate로 한 줄씩 번역합니다.",
      "Transcribe로 목소리를 글자로 바꾸고, Translate로 영어로 번역하고, Comprehend로 감정을 읽어냅니다.",
      "Transcribe로 받아쓰기를 한 뒤, Comprehend가 알아서 번역과 감정 분석을 한꺼번에 처리하게 합니다."
    ],
    "answer": [2, 3, 4],
    "explanation": "정답은 C입니다. 음성을 텍스트로(Transcribe) -> 영어로 번역(Translate) -> 감정 분석(Comprehend)의 3단계 코스가 AI 분석의 정석입니다.\n\nhttps://aws.amazon.com/comprehend/",
    "glossary": {
      "Amazon Transcribe": "음성 파일을 분석해 텍스트로 변환해주는 '받아쓰기' AI 서비스",
      "Amazon Translate": "수십 개의 언어를 고품질의 다른 언어로 즉시 번역해주는 서비스",
      "Amazon Comprehend": "텍스트 속에 담긴 의미나 감정(기쁨, 화남 등)을 분석해주는 인공지능 도구"
    }
  },
  {
    "id": 494,
    "question": "관리자가 서버를 끄려고 하는데 '403 Access Denied' 오류가 뜹니다. 정책을 보니 'Allow: ec2:TerminateInstances'가 분명히 있는데 왜 안 될까요? (정책 하단에 Condition으로 특정 IP 대역이 적혀 있습니다.)",
    "options": [
      "이미 그 서버에는 비밀리에 '삭제 금지' 거부 정책이 따로 걸려 있습니다.",
      "정책 설명에 관리자 이름(Principal)이 빠져 있어서 주인을 못 알아본 겁니다.",
      "'Action' 필드에 적힌 글자에 오타가 나서 서버 종료 명령을 이해하지 못한 것입니다.",
      "관리자가 지금 접속 중인 곳이 정책에 적힌 '승인된 IP 대역(CIDR)' 밖이기 때문입니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 정책의 Condition 항목에 특정 사무실 IP만 적어두면, 그 외의 장소에서 접속했을 땐 403 오류가 뜨며 차단됩니다. 보안을 강화하는 전형적인 방법입니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IPAddress",
    "glossary": {
      "Condition (조건)": "정책이 언제 적용될지 정하는 세부 규칙(시간, IP 주소, MFA 여부 등)",
      "403 Forbidden": "시스템이 누군지는 알겠으나, 그 행동을 할 권한이 없어서 거절할 때 내뱉는 오류",
      "CIDR Block": "네트워크 주소의 범위(덩어리)를 표현하는 표준 방식"
    }
  },
  {
    "id": 495,
    "question": "S3 버킷 안에 혹시 손님들의 신용카드 번호나 여권 번호 같은 '민감한 개인정보(PII)'가 몰래 숨어있는지 전수 조사를 하고 싶습니다. 어떤 탐정 서비스를 고용할까요?",
    "options": [
      "Audit Manager를 켜서 카드 결제 표준(PCI DSS)을 잘 지키는지 보고서를 씁니다.",
      "Athena를 사용하여 S3 모든 인벤토리 목록을 SQL 쿼리로 샅샅이 검색합니다.",
      "Amazon Macie를 가동해 개인정보 유형을 지정하고 데이터 검색 작업을 돌립니다.",
      "S3 Select 기능을 사용하여 파일 하나하나를 열어보며 카드 번호 패턴을 찾습니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 데이터 속 개인정보를 찾아내는 전문 탐정은 Amazon Macie입니다. AI를 이용해 카드번호, 여권번호 같은 패턴을 기막히게 찾아내 경고를 줍니다.\n\nhttps://aws.amazon.com/macie/",
    "glossary": {
      "Amazon Macie": "S3에 저장된 민감한 데이터를 자동으로 발견, 분류 및 보호하는 완전 관리형 보안 서비스",
      "PII (Personally Identifiable Information)": "이름, 번호 등으로 특정 개인을 알아볼 수 있는 민감한 개인 정보",
      "Pattern Matching (패턴 일칭)": "특정한 규칙(카드번호 16자리 등)을 가진 데이터를 찾아내는 기술"
    }
  },
  {
    "id": 496,
    "question": "사내 서버실 하드디스크가 꽉 찼습니다. 앱은 수정하기 싫고, 블록(iSCSI) 저장소와 파일(NFS) 저장소가 둘 다 필요한데, 가까운 서버실에 캐시 데이터도 두고 싶은 욕심이 있습니다. 챙겨야 할 장치 2가지는?",
    "options": [
      "S3를 하드디스크인 것처럼 마술을 부려 억지로 탑재합니다.",
      "NFS 저장소를 대체하고 로드 로컬 캐싱을 제공하는 'S3 파일 게이트웨이'를 둡니다.",
      "Snowball Edge 장비를 가져다 놓고 서버실 옆에 물리적으로 꽃아 씁니다.",
      "블록 저장소(iSCSI) 수요를 원격으로 받아주는 '볼륨 게이트웨이(캐시 모드)'를 둡니다.",
      "전용선(DX) 너머의 EFS를 사내 서버에 직접 연결해서 원격 저장소로 활용합니다."
    ],
    "answer": [1, 3],
    "explanation": "정답은 B와 D입니다. 사내망과 캐시를 잇는 게이트웨이가 정답입니다. 파일이 필요하면 S3 파일 게이트웨이, 블록 장치가 필요하면 볼륨 게이트웨이를 설치하세요.\n\nhttps://aws.amazon.com/storagegateway/",
    "glossary": {
      "AWS Storage Gateway": "온프레미스에서 클라우드 스토리지(S3, EBS 등)를 로컬 하드처럼 쓸 수 있게 해주는 가상 장치",
      "Local Caching (로컬 캐싱)": "자주 쓰는 데이터를 사무실 가까운 곳에 미리 복사해두어 응답 속도를 높이는 것",
      "iSCSI (Block Storage)": "네트워크를 통해 마치 하드디스크를 직접 연결한 것처럼 데이터를 주고받는 표준 프로토콜"
    }
  },
  {
    "id": 470,
    "id": 497,
    "question": "프라이빗 서브넷의 EC2 서버들이 S3에 매일 엄청난 데이터를 쓰고 있는데, NAT 게이트웨이 요금이 너무 많이 나옵니다. 보안은 유지하면서 비용을 0원에 가깝게 줄이는 정석은?",
    "options": [
      "무료인 NAT 인스턴스를 하나 만들고 사내 망 트래픽의 전담 안내원으로 씁니다.",
      "공용 서브넷에 서버를 옮기고 인터넷 통로를 활짝 열어 비용을 직접 관리합니다.",
      "VPC 게이트웨이 엔드포인트를 만들고, S3 트래픽이 NAT 대신 이곳을 통하게 라우팅합니다.",
      "NAT 게이트웨이를 하나 더 사서 트래픽을 분산해 단위당 요금을 조금이나마 낮춰봅니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. S3 트래픽 때문에 비싼 NAT 요금을 낼 필요가 없습니다. 무료인 '게이트웨이 VPC 엔드포인트'를 구성하면 통신 비용이 거의 0원이 됩니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    "glossary": {
      "VPC Gateway Endpoint": "VPC와 S3/DynamoDB 사이를 인터넷 없이 무료로 잇는 전용 통로",
      "NAT Gateway (NAT 게이트웨이)": "내부망 서버가 인터넷에 안전하게 접속하게 돕지만, 데이터 양에 따라 사용료가 비쌀 수 있는 장치",
      "Data Transfer Cost (데이터 전송 비용)": "네트워크 장치를 거쳐 데이터가 이동할 때 부과되는 통신료"
    }
  },
  {
    "id": 498,
    "question": "고화질 사진들을 저장하는데, 앱 수정을 안 하려고 'S3 버전 관리' 기능을 켜서 최신본을 유지합니다. 돈이 너무 많이 나와서 딱 '최근 버전 2개'만 남기고 나머지는 싹 다 지우고 싶을 때, 가장 편한 방법은?",
    "options": [
      "S3 수명 주기(Lifecycle) 규칙을 만들어 '이전 버전 보존 개수'를 2개로 설정하고 나머지는 자동 삭제합니다.",
      "람다(Lambda) 함수 스케줄러를 만들어 매 정시마다 파일 버전을 체크하고 손수 삭제합니다.",
      "S3 배치 작업(Batch Operations)을 수시로 실행해 수억 개의 파일 버전 중 2개만 남기는 노가다를 시킵니다.",
      "버전 관리 기능을 꺼버리고 딱 서버 2대에만 사진을 따로 복사해서 보관합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. S3 수명 주기 규칙을 써서 '최신 버전 2개만 남기고 삭제'하도록 설정하세요. S3가 매일 밤 알아서 청소해주니 비용은 줄고 관리는 편해집니다.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html",
    "glossary": {
      "S3 Lifecycle Management": "데이터 보존 기간이나 버전 개수에 따라 파일을 자동으로 삭제하거나 옮겨주는 관리 기능",
      "Noncurrent Version (이전 버전)": "S3 버전 관리 기능에서 최신본(Current) 뒤에 숨겨진 과거 상태의 파일들",
      "Operational Overhead (운영 오버헤드)": "시스템을 직접 관리하고 유지 보수하느라 쏟게 되는 시간과 노력 비용"
    }
  },
  {
    "id": 499,
    "question": "1Gbps 전용선(Direct Connect)을 깔았는데, 평소 사용량이 10%도 안 됩니다. 보안은 유지하면서도 고정비를 좀 줄여보라는 경영진의 압박이 들어온다면?",
    "options": [
      "지금 쓰고 있는 1Gbps 선을 그냥 다른 회사에 빌려주고 돈(렌트비)을 받습니다.",
      "AWS 콘솔에서 200Mbps 전용선으로 직접 설정 전환을 눌러 즉시 하향 조정합니다.",
      "중국집 배달부(파트너사)에게 연락해 우리 선을 공유 계정으로 전환해 달라고 떼를 씁니다.",
      "AWS 파트너사에게 우리 상황에 맞는 '200Mbps 호스팅 연결' 상품으로 교체해 달라고 요청합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 전용선 대역폭이 너무 높다면 파트너사를 통해 더 저렴한 대역폭 상품(호스팅 연결)으로 갈아타는 것이 가장 효율적인 비용 절감법입니다.\n\nhttps://aws.amazon.com/directconnect/",
    "glossary": {
      "AWS Direct Connect (DX)": "공용 인터넷을 우회해 사내 망과 AWS를 직접 연결하는 고속 전용선 서비스",
      "Hosted Connection (호스팅 연결)": "AWS 파트너사를 통해 네트워크 대역폭을 쪼개서 분양받는 알뜰한 연결 방식",
      "Utilization (사용률)": "주어진 자원(1Gbps) 중 실제로 얼마나 많이 쓰고 있는지 보여주는 비율"
    }
  },
  {
    "id": 500,
    "question": "사내 망의 수많은 Windows 파일 서버들을 클라우드(FSx for Windows)로 이사 가려 합니다. 직원들 접속 권한(ACL)은 그대로 유지하면서 이사 짐을 가장 안전하게 옮기는 2가지 방법은?",
    "options": [
      "사내 서버마다 DataSync 에이전트를 심고, FSx 서버로 직접 '권한 보존' 전송을 시작합니다.",
      "일단 모든 파일을 S3로 억지로 다 복사한 뒤, 거기서 다시 FSx 전용 도구로 실어 나릅니다.",
      "서버실 하드디스크를 다 떼서 우체국 택배로 AWS 센터에 보내 검수를 받습니다.",
      "용량이 너무 크다면 'Snowcone' 장비를 임대해 사내 망에 꽃고 DataSync 엔진으로 이사시킵니다.",
      "거대 장비인 Snowball Edge를 빌려 CLI 명령어로 데이터를 꾸역꾸역 담아 트럭으로 보냅니다."
    ],
    "answer": [0, 3],
    "explanation": "정답은 A와 D입니다. Windows 파일 이사는 DataSync가 마스터입니다. 권한 정보(ACL)까지 똑같이 복사해주기 때문입니다. 데이터가 너무 많으면 Snowcone 장비에 담아 보내는 것도 좋은 방법입니다.\n\nhttps://aws.amazon.com/datasync/",
    "glossary": {
      "FSx for Windows File Server": "윈도우 표준 프로토콜(SMB)과 완벽히 호환되는 클라우드용 관리형 공유 저장소",
      "ACL (Access Control List)": "어떤 사용자가 어떤 파일을 읽거나 수정할 수 있는지 적혀 있는 권한 목록",
      "AWS Snowcone": "소규모 데이터를 안전하게 옮기거나 현장에서 처리할 수 있게 빌려주는 휴대용 저장 장치"
    }
  }
];