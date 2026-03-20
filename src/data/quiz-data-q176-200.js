export const quizData = [
  {
    "id": 176,
    "question": "프라이빗 서브넷의 EC2 인스턴스에서 실행 중인 애플리케이션이 DynamoDB 테이블에 접근해야 합니다. 트래픽이 보안을 위해 절대 인터넷망(공용 네트워크)으로 나가지 않게 하면서, 가장 안전하게 테이블에 연결하는 비결은?",
    "options": [
      "DynamoDB용 VPC 게이트웨이 엔드포인트를 생성하여 사용합니다.",
      "퍼블릭 서브넷에 NAT 게이트웨이를 설치하여 통신합니다.",
      "프라이빗 서브넷에 NAT 인스턴스를 두고 외부 연결을 시도합니다.",
      "VPC에 인터넷 게이트웨이를 달고 인스턴스에 퍼블릭 IP를 부여합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 프라이빗한 서버가 인터넷망을 단 한 발짝도 밟지 않고 DynamoDB에 닿게 하려면 '게이트웨이 VPC 엔드포인트'라는 전용 비밀 통로를 내주세요. 보안은 강해지고 데이터 전송비는 아낄 수 있습니다.\n\nhttps://aws.amazon.com/vpc/endpoints/",
    "glossary": {
      "VPC Endpoint (Gateway)": "인터넷망을 거치지 않고 VPC 내부에서 S3나 DynamoDB에 직접 연결되는 전용 통로",
      "Private Subnet": "외부 인터넷에서 직접 들어올 수 없는 안전한 내부 네트워크 구역",
      "DynamoDB": "서버 없이 사용하는 초고속 NoSQL 데이터베이스"
    }
  },
  {
    "id": 177,
    "question": "DynamoDB에 미디어 정보를 담아 쓰고 있는데, 읽기 요청이 너무 많아 지연 시간이 발생하고 있습니다. 운영 인력은 부족하고 앱 코드를 뜯어고칠 여유도 없을 때, 성능을 단숨에 끌어올릴 최고의 추천 서비스는?",
    "options": [
      "Redis용 Amazon ElastiCache를 도입합니다.",
      "Amazon DynamoDB Accelerator(DAX)를 사용합니다.",
      "전역 테이블(Global Tables)을 만들어 데이터를 여러 곳에 복제합니다.",
      "Memcached용 Amazon ElastiCache 클러스터를 구성합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. DynamoDB가 너무 바빠서 조회가 느려진다면 전용 캐시 서버인 DAX를 앞에 세우세요. 앱 코드를 뜯어고칠 필요 없이 설정만으로 읽기 지연을 마이크로초 단위로 단축해주는 효자 아이템입니다.\n\nhttps://aws.amazon.com/dynamodb/dax/",
    "glossary": {
      "DAX (DynamoDB Accelerator)": "DynamoDB 앞에 붙어서 읽기 속도를 획기적으로 높여주는 전용 인메모리 캐시",
      "Latency": "데이터 요청 후 응답이 올 때까지 걸리는 지연 시간"
    }
  },
  {
    "id": 178,
    "question": "단일 리전에서 EC2와 RDS를 운영 중인 회사가 모든 데이터를 다른 리전으로 백업하려 합니다. 관리자가 일일이 손대지 않아도 되는 '최소한의 운영 오버헤드'를 보장하는 똑똑한 솔루션은?",
    "options": [
      "AWS Backup을 사용하여 EC2와 RDS 백업을 타 리전으로 자동 복제합니다.",
      "Data Lifecycle Manager(DLM)를 써서 백업본을 타 리전으로 복사합니다.",
      "EC2는 AMI로 구워 옮기고, RDS는 타 리전에 읽기 복제본을 만듭니다.",
      "EBS 스냅샷을 찍어 옮기고, RDS 스냅샷은 S3로 내보낸 뒤 CRR 기능을 켭니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 여러 서버와 DB 백업을 일일이 챙기기 힘들다면 'AWS Backup' 전용 비서를 고용하세요. 관리자가 정책만 세워두면 약속된 시간에 백업하고 안전한 타 리전으로 복사까지 알아서 다 해줍니다.\n\nhttps://aws.amazon.com/backup/",
    "glossary": {
      "AWS Backup": "AWS의 다양한 자산(EC2, RDS, S3 등)을 한곳에서 중앙 관리하는 백업 비서",
      "Cross-Region Copy": "재해 복구를 위해 백업 데이터를 물리적으로 멀리 떨어진 다른 리전으로 옮겨두는 것"
    }
  },
  {
    "id": 179,
    "question": "EC2 인스턴스에서 돌아가는 앱이 RDS에 접속할 때 쓰는 아이디와 비번을 안전하게 보관하려 합니다. Systems Manager의 파라미터 스토어(Parameter Store)를 쓰기로 했을 때, 인스턴스가 이 정보를 가져오게 하는 가장 정석적인 방법은?",
    "options": [
      "파라미터 읽기 권한과 KMS 복호화 권한이 있는 IAM 역할을 만들어 인스턴스에 부여합니다.",
      "파라미터 읽기 및 KMS 복호화 권한을 담은 IAM 정책을 인스턴스 사용자에게 직접 할당합니다.",
      "파라미터 스토어와 EC2 사이의 신뢰 관계를 맺고 보안 주체를 RDS로 정합니다.",
      "RDS와 EC2 사이에 신뢰 관계를 맺고 보안 주체를 Systems Manager로 정합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 비밀번호 같은 소중한 정보를 안전하게 가져오려면 인스턴스에게 '신분증(IAM 역할)'을 쥐어주세요. 파라미터 스토어에서 정보를 꺼내고 암호를 풀 권한만 콕 집어 역할로 부여하는 게 정석입니다.\n\nhttps://aws.amazon.com/systems-manager/parameter-store/",
    "glossary": {
      "Parameter Store": "비밀번호나 설정값 같은 민감한 데이터를 안전하게 보관해주는 저장소",
      "KMS (Key Management Service)": "데이터를 암호화하거나 풀 때 사용하는 열쇠(암호화 키)를 관리하는 서비스",
      "IAM Role": "서버나 서비스에게 일시적으로 특정 행동을 할 수 있는 자격을 주는 가상의 신분증"
    }
  },
  {
    "id": 180,
    "question": "NLB 뒤에 EC2 서버가 있고 API Gateway를 통해 외부 유저를 받고 있습니다. SQL 인젝션 공격을 막고, 대규모 지능형 DDoS 공격까지 완벽하게 차단하고 싶을 때 설계자가 추천하는 최강 보안 조합 두 가지는? (2개 선택)",
    "options": [
      "AWS WAF를 사용하여 NLB를 철저히 보호합니다.",
      "NLB 앞에 AWS Shield Advanced를 활성화하여 방어력을 높입니다.",
      "AWS WAF를 Amazon API Gateway에 연결하여 웹 공격을 필터링합니다.",
      "GuardDuty와 Shield Standard를 결합하여 탐지 시스템을 구축합니다.",
      "API Gateway와 Shield Standard를 연동하여 기본 방어 체계를 갖춥니다."
    ],
    "answer": [1, 2],
    "explanation": "정답은 B와 C입니다. 지능형 디도스 공격은 Shield Advanced로 온몸으로 막아내고, 지저분한 웹 공격은 API Gateway에 붙인 WAF로 걸러내세요. L3부터 L7까지 빈틈없는 이중 방패막이 완성됩니다.\n\nhttps://aws.amazon.com/shield/",
    "glossary": {
      "SQL Injection": "입력창에 악성 코드를 심어 데이터베이스의 정보를 탈취하거나 망가뜨리는 공격 기법",
      "DDoS": "엄청난 트래픽을 한꺼번에 쏘아 서버를 마비시키는 거친 공격",
      "AWS Shield Advanced": "공격이 들어오면 전문가들이 직접 투입되어 대응까지 해주는 프리미엄 보안 서비스"
    }
  },
  {
    "id": 181,
    "question": "덩치가 큰 레거시 앱을 ECS 마이크로서비스로 쪼개서 다시 만들려 합니다. 데이터 처리 순서는 상관없지만, 서비스끼리 서로 영향을 주지 않고 안정적으로 데이터를 주고받게 만들고 싶을 때 가장 좋은 통신 방식은?",
    "options": [
      "SQS 대기열을 만들어 생산자가 데이터를 넣고 소비자가 꺼내 쓰게 합니다.",
      "SNS 주제를 만들어 생산자가 알림을 쏘고 소비자가 구독하게 합니다.",
      "Lambda 함수를 거쳐서 데이터를 전달하는 로직을 앱에 추가합니다.",
      "DynamoDB에 데이터를 쓰고 스트림 기능을 켜서 변화를 감지하게 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 마이크로서비스끼리 서로의 장애에 휘둘리지 않고 메시지를 주고받게 하려면 SQS 바구니를 중간에 두세요. 받는 쪽이 잠시 쉬더라도 데이터가 안전하게 보관되니 시스템의 맷집이 비약적으로 상승합니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "Microservices": "하나의 거대한 앱을 작고 독립적인 기능들로 나누어 만드는 방식",
      "SQS (Simple Queue Service)": "메시지를 잃어버리지 않게 비동기로 보관했다가 전달해주는 완충 바구니",
      "Decoupling": "시스템 구성 요소들이 서로 의존하지 않게 떼어놓아 하나가 고장 나도 전체가 멈추지 않게 하는 설계"
    }
  },
  {
    "id": 182,
    "question": "온프레미스 MySQL을 AWS로 옮기려 합니다. 최근 DB 중단 사고로 큰 피해를 보았던 터라, 이번에는 어떤 사고가 터져도 절대 데이터 손실이 없도록 최소 두 개의 노드에 실시간으로 복제되는 구조를 만들고 싶습니다. 정답은?",
    "options": [
      "3개의 가용 영역에 3개의 노드를 동기식으로 복제하는 RDS를 만듭니다.",
      "다중 AZ(Multi-AZ) 기능을 켠 RDS MySQL 인스턴스를 생성합니다.",
      "RDS를 만들고 다른 리전에 비동기식으로 복제되는 읽기 전용 복제본을 둡니다.",
      "EC2에 MySQL을 깔고 Lambda 함수를 짜서 실시간으로 데이터를 복사합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 데이터 손실이 절대 용납 안 되는 MySQL 환경에선 Multi-AZ 기능을 켜세요. 다른 가용 영역에 실시간 복제본을 상시 대기시켜서 사고가 터지는 즉시 주인공 자리를 넘겨받아 서비스를 잇게 합니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Multi-AZ (Multi-Availability Zone)": "물리적으로 떨어진 두 곳의 데이터 센터에 실시간으로 데이터를 복사해두는 고가용성 기술",
      "Synchronous Replication (동기 복제)": "메인에 기록할 때 복제본에도 똑같이 기록될 때까지 기다렸다가 완료하는 철저한 방식"
    }
  },
  {
    "id": 183,
    "question": "새로운 주문 사이트를 만드는데, 서버 관리나 패치 같은 노가다는 아예 안 하고 싶습니다. 앱은 사용량에 따라 읽기/쓰기 용량이 즉시 확장되어야 하고 가용성도 높아야 합니다. 어떤 조합이 가장 이상적일까요?",
    "options": [
      "S3(정적) + API Gateway/Lambda(동적) + DynamoDB 온디맨드 조합을 씁니다.",
      "S3(정적) + API Gateway/Lambda(동적) + Aurora 오토 스케일링 조합을 씁니다.",
      "EC2 오토 스케일링 그룹과 ALB를 쓰고 DB는 DynamoDB 프로비저닝 모드를 씁니다.",
      "EC2 오토 스케일링 그룹과 ALB를 쓰고 DB는 Aurora 오토 스케일링을 씁니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 아무 관리도 안 하고 싶다면 '완전 서버리스' 라인을 타세요. 화면은 S3, 로직은 람다, 디비는 DynamoDB 온디맨드로 구성하면 서버 패치나 용량 걱정 없이 무한히 확장되는 행복 회로가 가동됩니다.\n\nhttps://aws.amazon.com/serverless/",
    "glossary": {
      "Serverless": "서버를 빌려 쓰는 게 아니라 서비스 단위로 사용하여 인프라 고민을 없앤 기술",
      "DynamoDB On-demand": "사용량에 상관없이 쓴 만큼만 돈 내고 용량 조절도 필요 없는 똑똑한 DB 모드"
    }
  },
  {
    "id": 184,
    "question": "프라이빗 서브넷에 있는 온프레미스 데이터베이스에 우리 쪽 Lambda 함수가 접속해야 합니다. 이미 Direct Connect라는 전용선은 깔려 있는 상태네요. 람다 일꾼이 사내망 DB로 안전하게 찾아가게 하려면 무엇을 해줘야 할까요?",
    "options": [
      "VPC에 연결되도록 람다 함수 설정을 변경하고 적절한 보안 그룹을 부여합니다.",
      "AWS와 사내망 사이에 VPN을 따로 뚫어서 람다 트래픽을 거기로 보냅니다.",
      "VPC 라우팅 테이블을 고쳐서 람다가 전용선을 바로 타게 길을 내줍니다.",
      "람다에게 탄력적 IP를 주고 전용선 없이 인터넷을 통해 돌아가게 만듭니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 람다 일꾼이 사내망 전용선(Direct Connect) 너머의 DB로 찾아가게 하려면, 람다를 우리 집(VPC) 안으로 소속시키세요. 보안 그룹까지 잘 챙겨주면 사내망 자원도 내 집처럼 편하게 쓸 수 있습니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "VPC (Virtual Private Cloud)": "AWS 안에 만든 우리 회사 전용 가상 네트워크 운동장",
      "Hyperplane ENI": "람다가 VPC 내부와 통신하기 위해 사용하는 보이지 않는 특수 네트워크 카드",
      "Direct Connect": "인터넷망이 아닌 회사와 AWS를 직접 잇는 전용 물리 회선"
    }
  },
  {
    "id": 185,
    "question": "ECS에서 돌아가는 이미지 앱이 S3에 결과물을 저장하려 합니다. 앱이 S3 창고에 들어갈 '열쇠(권한)'를 확실히 쥐어주는 가장 올바른 IAM 설정 방법은 무엇인가요?",
    "options": [
      "ECS의 전체 관리 권한을 업데이트하고 모든 컨테이너를 한 번 껐다 켭니다.",
      "S3 권한을 담은 IAM 역할을 만들고, ECS 작업 정의(Task Definition)에 taskRoleArn으로 등록합니다.",
      "ECS 클러스터의 실행 설정(Launch Configuration)에서 보안 그룹을 열어줍니다.",
      "S3 전용 IAM 계정을 하나 파서 ID/PW로 로그인한 뒤 클러스터를 재부학합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. ECS 컨테이너들에게 S3 창고 열쇠를 줄 땐 서버 전체가 아닌 '작업(Task) 역할' 단위로 권한을 부여하세요. 필요한 만큼만 세밀하게 권한을 주는 것이 보안 사고를 막는 현명한 관리법입니다.\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html",
    "glossary": {
      "ECS Task Role": "컨테이너 하나하나가 AWS 서비스를 이용할 때 쓰는 전용 권한 카드",
      "Task Definition": "컨테이너가 어떤 CPU, 메모리를 쓰고 어떤 역할 카드를 가질지 적어둔 명세서"
    }
  },
  {
    "id": 186,
    "question": "윈도우 기반 앱들을 AWS로 옮기려는데, 여러 대의 서버(EC2 Windows)가 동시에 접속해서 읽고 쓸 수 있는 '공유 파일 시스템'이 꼭 필요합니다. 어떤 솔루션을 구축하는 것이 가장 현명할까요?",
    "options": [
      "Storage Gateway를 볼륨 게이트웨이 모드로 구성해서 인스턴스에 붙입니다.",
      "Windows 파일 서버용 Amazon FSx를 만들어 각 인스턴스에 마운트합니다.",
      "Amazon EFS를 만들고 각 윈도우 인스턴스에 네트워크 드라이브로 연결합니다.",
      "거대한 EBS 볼륨을 하나 만들어서 여러 서버에 동시에 연결(Multi-Attach)합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 윈도우 서버들이 옹기종기 모여 파일을 공유하며 놀 수 있게 'FSx for Windows' 공유 드라이브를 만들어주세요. 윈도우 표준 기술인 SMB와 100% 호환되니 기존 앱을 고칠 필요도 없습니다.\n\nhttps://aws.amazon.com/fsx/windows/",
    "glossary": {
      "FSx for Windows File Server": "윈도우 서버의 정석적인 파일 공유 방식을 클라우드에서 그대로 제공하는 서비스",
      "SMB (Server Message Block)": "윈도우 컴퓨터끼리 파일을 주고받을 때 사용하는 표준 대화 언어",
      "Mount (마운트)": "외부 저장 장치를 내 컴퓨터의 폴더나 드라이브처럼 연결해서 쓰는 과정"
    }
  },
  {
    "id": 187,
    "question": "전자상거래 사이트를 개발 중인데, 관계형 데이터베이스와 컨테이너 앱을 고가용성으로 구성하고 싶습니다. 사람이 일일이 손대지 않아도 '알아서 잘' 굴러가는 자동화된 고가용성 솔루션 두 가지를 고른다면? (2개 선택)",
    "options": [
      "다중 AZ(Multi-AZ) 모드로 RDS 데이터베이스를 생성합니다.",
      "다른 가용 영역에도 RDS를 만들고 읽기 복제본을 수동으로 여러 개 둡니다.",
      "EC2 기반의 Docker 클러스터를 직접 구축하여 부하에 대응합니다.",
      "Fargate 기반의 ECS 클러스터를 만들어 애플리케이션 부하를 처리합니다.",
      "EC2 타입을 명시한 ECS 클러스터를 만들어 애플리케이션을 배포합니다."
    ],
    "answer": [0, 3],
    "explanation": "정답은 A와 D입니다. 고가용성과 자동 관리의 정점은 Multi-AZ RDS와 서버리스 엔진인 Fargate입니다. 데이터 센터 하나쯤 무너져도 사람이 뛰어갈 필요 없이 시스템이 알아서 살아남는 끈질긴 인프라가 구축됩니다.\n\nhttps://aws.amazon.com/fargate/",
    "glossary": {
      "High Availability (고가용성)": "장비 고장이 나도 서비스가 중단 없이 끈질기게 계속되는 성능",
      "Fargate": "서버를 빌리는 게 아니라 컨테이너만 던져주면 알아서 굴려주는 서버리스 컴퓨팅"
    }
  },
  {
    "id": 188,
    "question": "S3를 데이터 레이크로 쓰는데, 새로운 파트너사가 옛날 방식인 SFTP로 파일을 올리겠다고 고집합니다. 운영 부담은 싹 줄이면서도 탄탄하게 돌아가는 SFTP 통로를 만들어주는 정답 서비스는?",
    "options": [
      "AWS Transfer Family를 써서 S3를 종착지로 하는 SFTP 서버를 만듭니다.",
      "S3 파일 게이트웨이를 만들고 그 주소를 파트너사에게 공유합니다.",
      "EC2 서버를 하나 띄우고 VPN을 뚫은 뒤 크론탭으로 파일을 S3로 옮깁니다.",
      "EC2 서버 앞에 NLB를 세우고 수동으로 SFTP 서비스를 구축한 뒤 S3로 쏘아줍니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 낡은 SFTP 방식을 고수하는 파트너사를 위해 S3로 연결되는 전용 입구(Transfer Family)를 만드세요. 서버 구축이나 보안 패치 고민 없이 설정만으로 고품격 SFTP 서버가 완성됩니다.\n\nhttps://aws.amazon.com/aws-transfer-family/",
    "glossary": {
      "SFTP (Secure File Transfer Protocol)": "암호화된 통로를 통해 파일을 주고받는 고전적이고 안전한 방식",
      "AWS Transfer Family": "SFTP, FTPS, FTP 같은 옛날 프로토콜을 AWS 스토리지와 바로 연결해주는 관리형 서비스",
      "Data Lake": "나중에 분석하기 위해 온갖 종류의 데이터를 원본 그대로 쌓아두는 거대한 저장 공간"
    }
  },
  {
    "id": 189,
    "question": "중요한 계약 문서를 5년 동안 보관해야 하는데, 이 기간 동안 절대 누구도 지우거나 덮어쓸 수 없게 철저히 보호해야 합니다. 또한 매년 암호화 키를 자동으로 갈아주는 기능까지 원할 때 가장 좋은 조합은? (2개 선택)",
    "options": [
      "거버넌스 모드에서 S3 Object Lock을 사용합니다.",
      "규정 준수(Compliance) 모드에서 S3 Object Lock을 설정합니다.",
      "S3 관리 키(SSE-S3)를 사용하고 자동 키 순환을 켭니다.",
      "AWS KMS 고객 관리형 키(CMK)를 사용하고 키 순환 옵션을 활성화합니다.",
      "고객이 직접 가져온 키(SSE-C)를 써서 수동으로 키를 교체합니다."
    ],
    "answer": [1, 3],
    "explanation": "정답은 B와 D입니다. 문서를 5년 동안 법적 보호 하에 잠그려면 'Compliance S3 Object Lock'을 걸고, 암호화 키는 매년 새 주인을 찾는 'KMS 자동 순환' 기능을 켜세요. 철통 보안과 규정 준수를 동시에 달성합니다.\n\nhttps://aws.amazon.com/kms/",
    "glossary": {
      "S3 Object Lock": "파일을 금고에 넣고 일정 기간 동안 절대 못 꺼내게 잠그는 하드웨어적 보안 기능",
      "Key Rotation": "보안을 위해 주기적으로 암호화 열쇠를 새것으로 교체하는 과정",
      "Compliance Mode": "법규 준수를 위해 관리자도 함부로 못 건드리게 막는 가장 높은 단계의 보호 모드"
    }
  },
  {
    "id": 190,
    "question": "Java와 PHP로 만든 웹 앱을 AWS로 옮기려는데, 새로운 기능을 자주 테스트해야 하고 운영 수고는 최소로 줄이고 싶습니다. 가용성까지 챙겨주는 가장 '관리하기 쉬운' 솔루션은 무엇일까요?",
    "options": [
      "S3 정적 호스팅을 켜고, 동적 로직은 전부 람다(Lambda)로 새로 짭니다.",
      "Elastic Beanstalk에 앱을 올리고, 기능 테스트 시 URL 스와핑을 활용합니다.",
      "EC2 서너 대에 수동으로 앱을 깔고 ALB와 오토 스케일링으로 관리합니다.",
      "앱을 컨테이너로 만든 뒤 EC2에 올리고 로드 밸런서로 트래픽을 제어합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. .NET이나 PHP 코드를 고치긴 싫고 클라우드의 편리함은 다 누리고 싶을 땐 Elastic Beanstalk가 정답입니다. 서버 구성부터 배포까지 다 차려주고 'URL 스와핑'으로 안전한 테스트까지 지원합니다.\n\nhttps://aws.amazon.com/elasticbeanstalk/",
    "glossary": {
      "AWS Elastic Beanstalk": "코드만 올리면 서버, 네트워크, DB 설정을 AWS가 다 차려주는 뷔페식 배포 서비스",
      "URL Swapping": "서비스 중단 없이 새 버전과 구 버전을 교체하는 세련된 배포 기술(Blue/Green 배포)"
    }
  },
  {
    "id": 191,
    "question": "주문 시스템 DB(MySQL)에서 직원들이 무거운 보고서 쿼리를 자꾸 돌리는 바람에 고객 주문이 타임아웃 나고 난리가 났습니다. 직원들이 쿼리를 마음껏 돌리게 해주면서도 주문 서비스는 생생하게 유지하는 비결은?",
    "options": [
      "읽기 전용 복제본(Read Replica)을 만들고 보고서 팀은 그쪽으로만 접속하게 합니다.",
      "읽기 복제본을 만들고 주문 앱 자체를 메인과 복제본에 반반씩 나눠서 돌립니다.",
      "아예 모든 시스템을 확장성이 좋은 DynamoDB로 통째로 옮겨버립니다.",
      "직원들이 일하는 낮 시간엔 쿼리를 못 날리게 막고 밤에만 예약제로 운영합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 무거운 보고서 쿼리 때문에 주문이 밀린다면 원본 DB를 괴롭히지 말고 '조회 전용 비서(읽기 전용 복제본)'를 고용하세요. 메인은 일하고 비서는 보고서 뽑는 현명한 분업으로 평화가 찾아옵니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Read Replica": "메인 DB에 무리를 주지 않고 조화 작업만 전담하는 실시간 복사본 서버",
      "Time-out": "요청을 보냈는데 정해진 시간 안에 답이 안 와서 실패 처리되는 것"
    }
  },
  {
    "id": 192,
    "question": "병원에서 매일 쏟아지는 수백 장의 종이 서류를 스캔해서 디지털화하려 합니다. 단순히 저장만 하는 게 아니라 의료 정보를 쏙쏙 뽑아내고, 나중에 SQL로 편리하게 검색까지 하고 싶습니다. 운영 효율을 극대화한 비법은? (2개 선택)",
    "options": [
      "EC2 서버를 띄워 MySQL을 직접 깔고 문서 정보를 하나하나 기록합니다.",
      "뽑아낸 정보를 S3에 담아두고 Amazon Athena를 써서 SQL로 즉시 쿼리합니다.",
      "EC2 오토 스케일링 그룹을 만들고 직접 만든 문서 분석 앱을 계속 돌립니다.",
      "람다와 Amazon Rekognition을 써서 이미지를 텍스트로 바꾸고 분석합니다.",
      "람다와 Textract를 써서 글자를 추출하고, Comprehend Medical로 전문 의료 정보를 뽑아냅니다."
    ],
    "answer": [1, 4],
    "explanation": "정답은 B와 E입니다. 병원 서류 분석은 AI 어벤져스가 나설 때입니다. Textract로 글자를 긁고 Comprehend Medical로 전문 지식을 분석해 S3에 쌓으세요. 데이터 분석은 Athena가 SQL로 쾌적하게 해결해줄 겁니다.\n\nhttps://aws.amazon.com/textract/",
    "glossary": {
      "Amazon Textract": "종이 문서나 이미지 속의 글자와 표를 AI가 정확히 읽어내는 서비스(OCR)",
      "Amazon Comprehend Medical": "복잡한 의료 텍스트를 분석해 병명, 투약 정보 등을 알아내는 의료 전문 AI",
      "Amazon Athena": "S3에 있는 결과물들을 마치 DB 테이블처럼 SQL로 검색하게 해주는 서비스"
    }
  },
  {
    "id": 193,
    "question": "EC2 배치 애플리케이션이 여러 RDS 데이터베이스에서 수많은 데이터를 읽어오느라 DB가 비명을 지르고 있습니다. DB 읽기 횟수를 확 줄여서 부하를 낮추는 동시에 고가용성까지 챙기는 가장 빠른 길은?",
    "options": [
      "RDS 읽기 전용 복제본(Read Replica)을 추가하여 조회 요청을 분산시킵니다.",
      "Redis용 ElastiCache를 도입해서 자주 보는 정보를 메모리에 캐싱합니다.",
      "Route 53 DNS 캐싱을 활용해 네트워크 지연을 줄입니다.",
      "Memcached용 ElastiCache를 구성해서 데이터베이스 연결을 최적화합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 수많은 데이터를 읽어오느라 DB가 숨이 넘어가고 있다면, 읽기 작업만 전담하는 복제본을 여러 대 두세요. 성능도 좋아지지만, 혹시 하나가 아파도 다른 친구가 바로 일을 대신하니 가용성도 높아집니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Read Replica": "메인 DB의 부하를 덜어주기 위해 읽기 전용으로 운영되는 실시간 복사본 서버",
      "Offloading": "원본 서버가 할 일을 다른 곳으로 넘겨서 부담을 줄여주는 기술"
    }
  },
  {
    "id": 194,
    "question": "회사가 아주 중요한 앱의 데이터베이스를 굳이 EC2에 직접 깔아서 쓰겠다고 합니다. 그런데 죽어도 가용성은 포기 못 한답니다. 서버 한 대가 꺼져도 자동으로 다음 서버가 일을 이어받게 만들려면 어떻게 설계해야 할까요?",
    "options": [
      "서로 다른 가용 영역(AZ)에 EC2 두 대를 띄우고 데이터베이스 복제와 클러스터 구성을 합니다.",
      "한 가용 영역에 EC2를 띄우고 AMI로 계속 백업하다가 사고 나면 CloudFormation으로 새로 굽습니다.",
      "각각 다른 리전(나라)에 서버를 두고 동기식 복제를 하다가 수동으로 장애 조치를 합니다.",
      "단일 가용 영역에서 EC2를 보다가 하드웨어 에러 나면 자동 복구(Auto Recovery)가 되게 설정합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 죽어도 EC2에 DB를 직접 깔아 쓰겠다면, 적어도 계란은 두 바구니(AZ)에 나눠 담으세요. 두 AZ에 서버를 두고 실시간 복제 설정을 한 뒤 하나로 묶어두면, 한쪽이 쓰러져도 즉시 다음 서버가 바통을 터치합니다.\n\nhttps://aws.amazon.com/ec2/",
    "glossary": {
      "Failover (장애 조치)": "주인공 서버가 쓰러졌을 때 대기하던 보조 서버가 즉시 주인공 자리를 이어받는 과정",
      "Cluster": "여러 대의 서버를 하나처럼 묶어서 성능을 높이거나 안정성을 지키는 기술"
    }
  },
  {
    "id": 195,
    "question": "주문 시스템이 가끔 뻗어버리면 그동안 들어온 주문들이 다 증발해서 난리입니다. 시스템이 잠시 멈추더라도 주문 데이터는 안전하게 보관되었다가 나중에 자동으로 처리되는 '끈기 있는' 시스템을 만들고 싶을 때 무엇을 추가해야 할까요?",
    "options": [
      "EC2를 오토 스케일링 그룹에 넣고 EventBridge로 에러를 감시합니다.",
      "Application Load Balancer(ALB)를 앞에 두고 서버가 죽으면 다른 서버로 토스하게 합니다.",
      "SQS 대기열(바구니)을 만들어서 주문을 일단 담아두고 서버가 하나씩 꺼내 쓰게 합니다.",
      "SNS 주제를 만들고 람다 함수를 구독시켜서 비상시 경보를 울리게 합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 시스템이 뻗었을 때 주문 데이터가 증발하는 참사를 막으려면 중간에 SQS 바구니를 두세요. 서버가 고쳐질 때까지 주문이 그 안에서 얌전히 기다려주니 데이터 유실 걱정 없는 끈기 있는 서비스가 됩니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "SQS (Simple Queue Service)": "할 일을 잊지 않게 차곡차곡 쌓아두는 클라우드의 안전한 작업 바구니",
      "Resilience (탄력성)": "장애가 발생해도 시스템이 무너지지 않고 빠르게 회복하여 서비스를 이어가는 능력"
    }
  },
  {
    "id": 196,
    "question": "EC2 서버들이 DynamoDB에 데이터를 계속 쌓고 있는데, 가만 보니 최근 30일치 데이터만 쓰면 된답니다. 옛날 데이터 지우는 코드를 짜기엔 귀찮고 비용은 아끼고 싶을 때, 클릭 몇 번으로 해결하는 가장 우아한 비법은?",
    "options": [
      "30일마다 전체 시스템을 밀어버리고(CloudFormation 삭제) 새로 구축합니다.",
      "별도의 감시용 EC2를 띄워서 스캔 돌리며 30일 지난 건 수동으로 지우는 스크립트를 돌립니다.",
      "DynamoDB 스트림을 켜고 람다 함수를 연결해서 30일 지난 데이터를 지우게 코딩합니다.",
      "테이블에 '만료 시간' 항목을 추가하고, DynamoDB의 TTL 기능을 켜서 자동 삭제되게 합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 30일 지난 데이터를 지우는 수고를 덜고 싶다면 TTL 기능에게 맡기세요. 데이터에 유통기한을 적어두기만 하면 DynamoDB가 알아서 시계를 보다가 만료된 데이터를 공짜로 슥 지워주는 마법이 일어납니다.\n\nhttps://aws.amazon.com/dynamodb/",
    "glossary": {
      "TTL (Time To Live)": "데이터에 유효 기간을 정해주고 시간이 지나면 알아서 소멸하게 만드는 기능",
      "Attribute (속성)": "데이터베이스의 한 칸에 들어가는 구체적 정보(이름, 날짜 등)"
    }
  },
  {
    "id": 197,
    "question": "윈도우 서버에서 .NET 앱과 Oracle DB를 운영 중인데, 이걸 AWS로 옮기면서도 코드 수정은 거의 안 하고 고가용성은 챙기고 싶습니다. 어떤 서비스들로 이사를 보내는 게 가장 속 편할까요? (2개 선택)",
    "options": [
      ".NET Core로 리팩터링해서 람다(Lambda) 서버리스로 옮깁니다.",
      "다중 AZ 설정을 한 AWS Elastic Beanstalk에 .NET 앱을 통째로 올립니다.",
      "Amazon Linux 서버로 OS를 바꾸고 EC2 인스턴스로 이식합니다.",
      "DMS를 써서 관계형인 Oracle DB를 비관계형인 DynamoDB로 바꿉니다.",
      "다중 AZ 환경의 RDS for Oracle 서비스를 이용해서 DB를 마이그레이션합니다."
    ],
    "answer": [1, 4],
    "explanation": "정답은 B와 E입니다. .NET 앱과 Oracle DB를 코드 수정 없이 옮기는 지름길은 Beanstalk와 Multi-AZ RDS입니다. 기존 환경을 100% 존중하면서도 클라우드의 고가용성 혜택만 쏙 뽑아먹는 합리적인 이사 전략입니다.\n\nhttps://aws.amazon.com/elasticbeanstalk/",
    "glossary": {
      "AWS Elastic Beanstalk": "소스 코드만 던져주면 서버 세팅부터 배포까지 알아서 다 해주는 기사님 같은 서비스",
      "RDS for Oracle": "오라클 데이터베이스를 AWS 가이드에 맞춰 관리형으로 편하게 쓰는 서비스"
    }
  },
  {
    "id": 198,
    "question": "온프레미스 쿠버네티스에서 MongoDB를 써서 앱을 굴리고 있습니다. 이걸 AWS로 그대로 옮기고 싶은데 코드를 고치거나 배포 방식을 바꿀 여유가 전혀 없네요. 운영 수고를 최소로 줄이면서 그대로 옮길 수 있는 서비스 세트는?",
    "options": [
      "EC2 서버를 직접 관리하며 ECS 클러스터를 만들고 MongoDB도 직접 깝니다.",
      "Fargate와 DynamoDB 조합으로 ECS 시스템을 새로 구축합니다.",
      "EC2 노드를 쓰는 EKS를 구축하고 데이터베이스는 DynamoDB를 씁니다.",
      "서버리스인 Fargate 기반 EKS를 구축하고, MongoDB와 호환되는 DocumentDB를 씁니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. K8s와 몽고DB 환경을 소중히 유지하고 싶다면 EKS와 DocumentDB를 고르세요. 서버리스 Fargate까지 곁들이면 인프라 관리는 AWS에게 떠넘기고 개발에만 온전히 집중하는 평화로운 일상이 열립니다.\n\nhttps://aws.amazon.com/eks/",
    "glossary": {
      "Amazon EKS": "쿠버네티스를 AWS가 직접 관리하고 업데이트해주는 전문 서비스",
      "Amazon DocumentDB": "MongoDB를 쓰던 사람들이 코드 한 줄 안 고치고 그대로 갈아탈 수 있는 초고성능 관리형 DB"
    }
  },
  {
    "id": 199,
    "question": "고객 전화 내용을 받아적어서 대본(Transcript)을 만들고, 여러 사람의 목소리를 구별해서 분석해야 합니다. 이 대본 파일들은 나중에 SQL로 꼼꼼히 뒤져볼 수 있어야 하고 7년이나 보관해야 하네요. 어떤 서비스들이 필요할까요?",
    "options": [
      "Rekognition으로 사람 얼굴을 인식하고, 람다로 대본을 대조 분석합니다.",
      "Amazon Transcribe로 목소리를 글자로 바꾸고, S3에 담긴 파일을 Athena로 바로 검색합니다.",
      "Translate로 다른 나라 말을 번역하고, Redshift 대형 분석실에 담아 분석합니다.",
      "Rekognition으로 영상을 분석하고, S3에 저장한 뒤 Textract로 글자를 긁어모읍니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 음성을 텍스트로 옮기는 건 Transcribe에게 시키고, 결과물 분석은 S3와 Athena의 SQL에게 맡기세요. 수천 통의 전화 내용을 DB 구축 없이도 눈 깜짝할 새 분석해내는 강력한 파이프라인이 됩니다.\n\nhttps://aws.amazon.com/transcribe/",
    "glossary": {
      "Amazon Transcribe": "오디오 파일을 텍스트로 받아 적어주고 목소리의 주인공까지 구별하는 신묘한 서비스",
      "Amazon Athena": "S3 바구니에 담긴 수많은 텍스트 파일들을 마치 DB처럼 SQL로 분석하는 도구"
    }
  },
  {
    "id": 200,
    "question": "Cognito로 로그인한 회원들이 앱에서 API Gateway를 거쳐 DynamoDB 데이터를 가져가려 합니다. 개발자의 수고는 줄이면서 오직 '승인된 우리 회원'만 API를 쓸 수 있게 입구를 막아주는 가장 손쉬운 AWS 관리형 솔루션은?",
    "options": [
      "API Gateway 입구에 직접 람다 함수 권한 부여자를 소스코드로 짜넣습니다.",
      "회원마다 전용 API 키를 발행해주고 람다로 번번이 유효성을 검사합니다.",
      "헤더에 이메일 주소를 실어보내게 하고 람다가 그 이메일이 우리 회원인지 조회합니다.",
      "API Gateway 설정에서 'Amazon Cognito 사용자 풀 권한 부여기'를 구성합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. Cognito로 로그인한 회원들의 입구 출입문을 막는 가장 편한 방법은 API Gateway의 'Cognito 권한 부여기'를 구성하는 것입니다. 코딩 한 줄 없이 설정만으로 우리 회원만 API를 쓰게 필터링해줍니다.\n\nhttps://aws.amazon.com/api-gateway/",
    "glossary": {
      "Amazon Cognito User Pool": "웹이나 앱의 회원 가입, 로그인을 담당하는 통합 회원 관리 시스템",
      "Authorizer (권한 부여기)": "API 입구에서 손님이 올바른 신분증을 갖고 있는지 검사하는 디지털 수문장"
    }
  }
];