export const quizData = [
  {
    "id": 126,
    "question": "솔루션 설계자가 회사의 스토리지 비용을 절약하기 위한 방안을 마련해야 합니다. 현재 모든 데이터는 Amazon S3 Standard 클래스에 보관 중이며, 모든 데이터를 최소 25년 동안 유지해야 한다는 규칙이 있습니다. 특히 최근 2년 동안의 데이터는 가용성이 높아야 하고 즉시 검색이 가능해야 합니다. 이 조건을 모두 만족하는 가장 효율적인 솔루션은 무엇입니까?",
    "options": [
      "S3 수명 주기 정책을 설정하여 객체를 즉시 S3 Glacier Deep Archive로 전환합니다.",
      "S3 수명 주기 정책을 설정하여 2년 후 객체를 S3 Glacier Deep Archive로 전환합니다.",
      "S3 Intelligent-Tiering을 사용하고, 데이터가 S3 Glacier Deep Archive에 아카이브되도록 설정합니다.",
      "S3 수명 주기 정책을 설정하여 객체를 즉시 S3 One Zone-IA로 전환하고, 2년 후 S3 Glacier Deep Archive로 전환합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 2년 동안은 고가용성 등급인 S3 Standard에서 언제든 꺼내 보고, 그 뒤로는 보관료가 제일 싼 Glacier Deep Archive로 자동으로 옮겨지게 수명 주기 정책을 걸어두는 것이 가장 영리합니다.\n\nhttps://aws.amazon.com/s3/storage-classes/",
    "glossary": {
      "S3 Standard": "상시 고가용성과 즉시 접속을 보장하는 표준 저장소",
      "S3 Lifecycle Policy": "데이터의 보존 기간에 따라 저장 비용을 자동으로 절감해주는 서비스",
      "S3 Glacier Deep Archive": "자주 쓰지 않는 데이터를 가장 저렴하게 장기 보관하는 저장소"
    }
  },
  {
    "id": 127,
    "question": "한 미디어 회사가 시스템을 AWS 클라우드로 이전하려 합니다. 비디오 처리를 위해 최대 I/O 성능을 갖춘 최소 10TB의 스토리지, 미디어 콘텐츠 저장을 위한 300TB의 고내구성 스토리지, 그리고 아카이브용 900TB의 스토리지가 필요합니다. 솔루션 설계자는 어떤 서비스 조합을 권장해야 합니까?",
    "options": [
      "최고 성능을 위한 Amazon EBS, 내구성 있는 스토리지를 위한 Amazon S3, 아카이브를 위한 Amazon S3 Glacier",
      "최고 성능을 위한 Amazon EBS, 내구성 있는 스토리지를 위한 Amazon EFS, 아카이브를 위한 Amazon S3 Glacier",
      "최고 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 스토리지를 위한 Amazon EFS, 아카이브를 위한 Amazon S3",
      "최고 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 스토리지를 위한 Amazon S3, 아카이브를 위한 Amazon S3 Glacier"
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 번개 같은 속도의 I/O가 필요한 작업엔 인스턴스 스토어를, 일상적인 미디어 저장은 S3를, 방대한 아카이브는 Glacier를 선택하세요. 성능과 비용, 가용성을 모두 잡는 환상의 삼중주입니다.\n\nhttps://aws.amazon.com/ec2/instance-types/instance-store/",
    "glossary": {
      "Instance Store": "서버 내부에 위치하여 극강의 읽기/쓰기 속도를 제공하는 임시 대용량 저장소",
      "S3 (Simple Storage Service)": "무제한 용량과 업계 최고 수준의 내구성을 제공하는 객체 저장소",
      "S3 Glacier": "장기 아카이브 데이터를 위해 설계된 매우 저렴한 저장 공간"
    }
  },
  {
    "id": 128,
    "question": "회사에서 AWS 클라우드의 컨테이너에서 애플리케이션을 실행하려고 합니다. 이러한 애플리케이션은 상태 비저장(Stateless)이며 기본 인프라 내에서 중단을 허용할 수 있습니다. 회사는 비용과 운영 오버헤드를 최소화하는 솔루션이 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon EC2 Auto Scaling 그룹의 스팟 인스턴스를 사용하여 애플리케이션 컨테이너를 실행합니다.",
      "Amazon Elastic Kubernetes Service(Amazon EKS) 관리형 노드 그룹에서 스팟 인스턴스를 사용합니다.",
      "Amazon EC2 Auto Scaling 그룹의 온디맨드 인스턴스를 사용하여 애플리케이션 컨테이너를 실행합니다.",
      "Amazon Elastic Kubernetes Service(Amazon EKS) 관리형 노드 그룹에서 온디맨드 인스턴스를 사용합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 운영 부담을 덜어주는 EKS 관리형 노드 그룹과, 비용을 무려 90%나 아껴주는 스팟 인스턴스를 결합하세요. 컨테이너 환경의 확장성과 경제성을 한꺼번에 누리는 필살기입니다.\n\nhttps://aws.amazon.com/eks/",
    "glossary": {
      "EKS Managed Node Groups": "서버 패치나 업데이트 같은 복잡한 관리를 AWS가 직접 처리해주는 서비스",
      "Spot Instances": "AWS의 유휴 자원을 저렴하게 이용하되 언제든 중단될 수 있는 요금제",
      "Stateless": "서버 내에 데이터를 저장하지 않아 언제든 인스턴스를 교체해도 문제가 없는 구조"
    }
  },
  {
    "id": 129,
    "question": "회사에서 온프레미스의 다중 계층 웹 애플리케이션을 AWS로 이전하려 합니다. 앱은 컨테이너화되어 리눅스 호스트에서 실행되며 PostgreSQL 데이터베이스를 사용합니다. 현재 인프라 관리 부담이 회사의 성장을 방해하고 있을 때, 운영 오버헤드를 줄이기 위한 조치로 적절한 조합은 무엇입니까? (2개 선택)",
    "options": [
      "PostgreSQL 데이터베이스를 Amazon Aurora로 마이그레이션합니다.",
      "Amazon EC2 인스턴스에서 호스팅할 웹 애플리케이션을 마이그레이션합니다.",
      "웹 애플리케이션 콘텐츠에 대한 Amazon CloudFront 배포를 설정합니다.",
      "웹 애플리케이션과 PostgreSQL 데이터베이스 간에 Amazon ElastiCache를 설정합니다.",
      "Amazon Elastic Container Service(Amazon ECS)를 사용하여 AWS Fargate에서 호스팅할 웹 애플리케이션을 마이그레이션합니다."
    ],
    "answer": [0, 4],
    "explanation": "정답은 A와 E입니다. 관리의 고통에서 벗어나려면 DB는 Aurora로, 웹 앱은 Fargate 기반의 ECS로 마이그레이션하세요. 하드웨어 걱정 없이 서비스의 본질에만 집중할 수 있는 쾌적한 환경이 열립니다.\n\nhttps://aws.amazon.com/fargate/",
    "glossary": {
      "Amazon Aurora": "AWS가 설계한 고성능 호환 데이터베이스로 관리 부담이 매우 적음",
      "AWS Fargate": "서버 사양이나 가상 머신 관리 없이 컨테이너만 실행할 수 있게 해주는 서버리스 컴퓨팅 서비스",
      "ECS (Elastic Container Service)": "컨테이너화된 애플리케이션을 실행하고 관리하는 조율기 역할"
    }
  },
  {
    "id": 130,
    "question": "애플리케이션이 여러 가용 영역의 EC2 인스턴스와 ALB 뒤에서 실행 중입니다. 설계자는 CPU 사용률이 40% 정도일 때 최적의 성능이 나온다고 판단하여 이 수치를 계속 유지하고 싶어 합니다. 모든 인스턴스에서 이 성능을 일정하게 유지하려면 어떻게 해야 할까요?",
    "options": [
      "Auto Scaling 그룹을 동적으로 확장하려면 간단한 확장 정책을 사용합니다.",
      "대상 추적 정책(Target Tracking)을 사용하여 Auto Scaling 그룹을 동적으로 확장합니다.",
      "AWS Lambda 함수를 사용하여 원하는 Auto Scaling 그룹 용량을 업데이트합니다.",
      "예약된 조정 작업을 사용하여 Auto Scaling 그룹을 확장 및 축소합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. CPU 40%와 같은 특정 성능 수치를 일정하게 유지하고 싶을 땐 '대상 추적 정책'이 해결사입니다. 부하에 따라 자원을 넣고 빼며 항상 쾌적한 시스템 상태를 지켜내세요.\n\nhttps://aws.amazon.com/ec2/autoscaling/",
    "glossary": {
      "Target Tracking Scaling": "목표로 하는 지표 값을 설정하면 시스템이 알아서 자원량을 조절하는 방식",
      "ALB (Application Load Balancer)": "들어오는 웹 트래픽을 여러 서버로 나눠주는 길목 장치",
      "Availability Zone": "가까운 거리에서 고속망으로 연결된 하나 이상의 물리적 데이터 센터 집합"
    }
  },
  {
    "id": 131,
    "question": "S3 버킷을 저장소로 쓰는 파일 공유 앱을 개발 중입니다. 모든 파일은 CloudFront를 통해서만 제공되어야 하며, 사용자가 S3 주소로 직접 접속하는 것은 차단하고 싶습니다. 어떻게 설계해야 합니까?",
    "options": [
      "각 S3 버킷에 개별 정책을 써서 CloudFront에게만 읽기 권한을 줍니다.",
      "IAM 사용자를 만들어 S3 읽기 권한을 주고 이 사용자를 CloudFront에 할당합니다.",
      "CloudFront 배포 ID를 보안 주체로 삼아 S3 버킷 정책을 작성합니다.",
      "원본 액세스 제어(OAC/OAI)를 생성하여 CloudFront에 할당하고 S3 권한을 구성합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. S3 버킷에 직접 들어오는 무례한 손님을 막고 정해진 CloudFront 배달부만 들여보내고 싶다면 원본 액세스 제어(OAC)를 설정하세요. 데이터 보안을 지키는 가장 깔끔한 방법입니다.\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    "glossary": {
      "OAC (Origin Access Control)": "CloudFront 배달부만 S3 창고에 들어올 수 있게 승인하는 보안 설정",
      "CloudFront": "전 세계 엣지 서버를 통해 콘텐츠를 빠르게 배달하는 CDN 서비스"
    }
  },
  {
    "id": 132,
    "question": "웹사이트에서 과거 실적 보고서를 전 세계 사용자에게 제공하려 합니다. 비용을 아끼면서 빠른 속도를 보장하고, 인프라 리소스 프로비저닝을 제한하며 가장 빠른 응답 시간을 보장하는 서비스 조합은 무엇입니까?",
    "options": [
      "Amazon CloudFront 및 Amazon S3",
      "AWS Lambda 및 Amazon DynamoDB",
      "Amazon EC2 Auto Scaling 이 있는 Application Load Balancer",
      "내부 Application Load Balancer 가 있는 Amazon Route 53"
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 전 세계 사용자에게 고화질 보고서를 빛의 속도로 쏴주고 싶다면 CloudFront와 S3를 결합하세요. 서버 구축 없이도 저렴한 비용으로 수많은 다운로드 요청을 안정적으로 처리해냅니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "CloudFront Edge": "전 세계 곳곳의 사용자와 가장 가까운 네트워크 거점(캐시 저장소)",
      "S3 (Simple Storage Service)": "인터넷 어디서든 접근 가능한 업계 표준 객체 데이터 저장소"
    }
  },
  {
    "id": 133,
    "question": "온프레미스 Oracle DB를 AWS로 옮기면서 최신 버전으로 업그레이드하고 재해 복구(DR) 체제도 구축하려 합니다. 운영 오버헤드는 줄이면서도 데이터베이스의 기본 운영 체제(OS)에 대한 액세스 권한은 유지해야 합니다. 어떤 솔루션이 가장 적합합니까?",
    "options": [
      "Oracle 데이터베이스를 Amazon EC2 인스턴스로 마이그레이션합니다. 다른 AWS 리전으로 데이터베이스 복제를 설정합니다.",
      "Oracle 데이터베이스를 Oracle 용 Amazon RDS 로 마이그레이션합니다. 교차 리전 자동 백업을 활성화하여 다른 AWS 리전에 스냅샷을 복제합니다.",
      "Oracle 데이터베이스를 Oracle 용 Amazon RDS Custom 으로 마이그레이션합니다. 다른 AWS 리전의 데이터베이스에 대한 읽기 전용 복제본을 생성합니다.",
      "Oracle 데이터베이스를 Oracle용 Amazon RDS로 마이그레이션합니다. 다른 가용 영역에 대기 데이터베이스를 생성합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 관리형 서비스의 편안함은 누리되 운영체제(OS)의 비밀스러운 속살까지 직접 만져야 한다면 RDS Custom이 정답입니다. 타 리전 복제본까지 갖추면 재해 복구 준비까지 완벽해집니다.\n\nhttps://aws.amazon.com/rds/custom/",
    "glossary": {
      "RDS Custom": "고급 설정이나 특별한 도구를 쓰기 위해 OS 관리 권한을 열어주는 특별한 RDS 등급",
      "DR (Disaster Recovery)": "자연재해나 서버 폭발 같은 비상 상황에서도 서비스를 계속하기 위한 복구 체계"
    }
  },
  {
    "id": 134,
    "question": "회사가 서버리스 솔루션을 통해 S3 버킷의 데이터를 분석하려 합니다. 데이터는 암호화가 필수이며 다른 AWS 리전으로 복제되어야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "새 S3 버킷을 생성합니다. 데이터를 새 S3 버킷에 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. AWS KMS 다중 리전 키(SSE-KMS)로 서버 측 암호화를 사용합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다.",
      "새 S3 버킷을 생성합니다. 데이터를 새 S3 버킷에 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. AWS KMS 다중 리전 키(SSE-KMS)로 서버 측 암호화를 사용합니다. Amazon RDS 를 사용하여 데이터를 쿼리합니다.",
      "기존 S3 버킷에 데이터를 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다.",
      "기존 S3 버킷에 데이터를 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용합니다. Amazon RDS 를 사용하여 데이터를 쿼리합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 암호화와 복제를 운영 부담 없이 처리하려면 SSE-S3와 S3 CRR 기능을 켜세요. 데이터 분석은 Athena에게 SQL로 시키면 서버 한 대 없이도 강력한 로그 분석실이 구축됩니다.\n\nhttps://aws.amazon.com/athena/",
    "glossary": {
      "SSE-S3": "데이터 암호화 시 필요한 키 관리를 AWS가 직접 책임지는 가장 편한 암호화 방식",
      "Amazon Athena": "S3에 담긴 파일들을 마치 데이터베이스처럼 SQL 문법으로 즉시 검색하게 해주는 서비스",
      "CRR (Cross-Region Replication)": "한 리전의 데이터를 다른 리전으로 자동 복제하여 데이터 보존을 보장하는 기술"
    }
  },
  {
    "id": 135,
    "question": "회사가 외부 공급자의 VPC에서 제공하는 서비스에 연결해야 합니다. 보안 규정에 따르면 이 연결은 반드시 인터넷을 통하지 않는 비공개(Private) 연결이어야 하며, 오직 해당 서비스로만 제한되어야 합니다. 또한 연결 시작은 반드시 우리 쪽 VPC에서만 시작되어야 합니다. 어떤 솔루션이 이를 가능하게 합니까?",
    "options": [
      "회사의 VPC 와 공급자의 VPC 간에 VPC 피어링 연결을 생성합니다. 대상 서비스에 연결하도록 라우팅 테이블을 업데이트합니다.",
      "공급자에게 VPC 에 가상 프라이빗 게이트웨이를 생성하도록 요청합니다. AWS PrivateLink 를 사용하여 대상 서비스에 연결합니다.",
      "회사의 VPC 의 퍼블릭 서브넷에 NAT 게이트웨이를 생성하여 대상 서비스에 연결합니다.",
      "공급자에게 대상 서비스에 대한 VPC 엔드포인트를 생성하도록 요청합니다. AWS PrivateLink 를 사용하여 대상 서비스에 연결합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 인터넷이라는 험한 길을 피하고 우리 거실(VPC)에서 바로 상대방 서비스로 통하는 전용 비밀 통로인 AWS PrivateLink를 요청하세요. 보안은 철통같이 지키고 통신은 프라이빗하게 흐릅니다.\n\nhttps://aws.amazon.com/privatelink/",
    "glossary": {
      "PrivateLink": "인터넷에 데이터를 노출하지 않고 다른 VPC나 AWS 서비스와 사설망 통로를 만드는 기술",
      "Endpoint Service": "특정 애플리케이션이나 기능을 다른 사용자가 안전하게 빌려 쓸 수 있게 노출한 입구",
      "NAT Gateway": "내부의 장비들이 인터넷에서 정보를 가져올 수 있게 도와주는 중계기"
    }
  },
  {
    "id": 136,
    "question": "온프레미스 PostgreSQL DB를 Amazon Aurora PostgreSQL로 마이그레이션하고 있습니다. 마이그레이션 도중에도 기존 DB는 온라인 상태를 유지해야 하며, 새 Aurora DB와 계속해서 동기화된 상태여야 합니다. 이러한 조건을 충족하기 위해 취해야 할 조치는 무엇입니까? (2개 선택)",
    "options": [
      "지속적인 복제(Ongoing Replication) 작업을 생성합니다.",
      "온프레미스 데이터베이스의 데이터베이스 백업을 생성합니다.",
      "AWS Database Migration Service(AWS DMS) 복제 서버를 생성합니다.",
      "AWS Schema Conversion Tool(AWS SCT)을 사용하여 데이터베이스 스키마를 변환합니다.",
      "데이터베이스 동기화를 모니터링하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다."
    ],
    "answer": [0, 2],
    "explanation": "정답은 A와 C입니다. 이사하는 중에도 가게 문은 열어두고 싶다면 DMS 복제 서버를 투입하세요. 초기 데이터 전송뿐만 아니라 실시간 변화까지 칼같이 동기화해주는 유능한 이사 도우미입니다.\n\nhttps://aws.amazon.com/dms/",
    "glossary": {
      "AWS DMS": "운영 중인 DB를 끄지 않고도 클라우드로 안전하게 데이터를 전송해주는 대장 서비스",
      "Ongoing Replication": "원본의 데이터가 바뀌면 복제본도 즉시 똑같이 바꾸는 실시간 복사 작업",
      "Schema": "데이터베이스가 어떤 모양과 규칙으로 저장될지 정해둔 설계 도면"
    }
  },
  {
    "id": 137,
    "question": "AWS Organizations를 사용하여 여러 부서의 계정을 통합 관리 중입니다. 한 계정의 루트 사용자가 이메일 알림을 놓치는 사고가 발생했을 때, 앞으로 이런 알림을 절대 놓치지 않으면서 정해진 계정 관리자들에게만 안전하게 전달하려면 어떤 방법이 좋습니까?",
    "options": [
      "AWS 계정 루트 사용자 이메일 주소로 전송되는 알림 이메일 메시지를 조직의 모든 사용자에게 전달하도록 회사 이메일 서버를 구성합니다.",
      "모든 AWS 계정 루트 사용자 이메일 주소를 알림에 응답할 수 있는 소수의 관리자에게 전달되는 배포 목록으로 구성합니다. AWS Organizations 콘솔에서 또는 프로그래밍 방식으로 AWS 계정 대체 연락처를 구성합니다.",
      "경보를 모니터링하고 해당 경보를 적절한 그룹에 전달할 책임이 있는 한 명의 관리자에게 모든 AWS 계정 루트 사용자 이메일 메시지를 보내도록 구성합니다.",
      "동일한 루트 사용자 이메일 주소를 사용하도록 기존의 모든 AWS 계정과 새로 생성된 모든 계정을 구성합니다. AWS Organizations 콘솔에서 또는 프로그래밍 방식으로 AWS 계정 대체 연락처를 구성합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 중요한 알람을 한 사람의 실수로 놓치지 않으려면 관리자 그룹의 공용 메일함(배포 목록)을 등록하세요. 대체 연락처 설정까지 마쳐두면 회사의 긴급 상황을 절대 놓칠 일이 없습니다.\n\nhttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_contacts.html",
    "glossary": {
      "AWS Organizations": "여러 개의 AWS 계정을 그룹으로 묶고 중앙에서 권한과 요금을 통합 관리하는 서비스",
      "Alternate Contact": "루트 사용자 외에 실제 결제나 보안 업무를 담당하는 사람들의 연락처"
    }
  },
  {
    "id": 138,
    "question": "쇼핑몰 앱에서 모든 새 주문을 한 가용 영역(AZ)에 있는 EC2의 RabbitMQ 대기열에 게시하고 별도의 서버에서 처리한 뒤 PostgreSQL DB에 저장하고 있습니다. 운영 부담은 줄이면서 가용성을 최대화하는 고가용성 구조로 재설계하려면 무엇을 해야 합니까?",
    "options": [
      "대기열을 Amazon MQ 에서 RabbitMQ 인스턴스의 중복 쌍(활성/대기)으로 마이그레이션합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대한 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 데이터베이스를 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling 그룹을 생성합니다.",
      "대기열을 Amazon MQ 에서 RabbitMQ 인스턴스의 중복 쌍(활성/대기)으로 마이그레이션합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대한 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 용 Amazon RDS 의 다중 AZ 배포에서 실행하도록 데이터베이스를 마이그레이션합니다.",
      "RabbitMQ 대기열을 호스팅하는 EC2 인스턴스용 다중 AZ Auto Scaling 그룹을 생성합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 용 Amazon RDS 의 다중 AZ 배포에서 실행하도록 데이터베이스를 마이그레이션합니다.",
      "RabbitMQ 대기열을 호스팅하는 EC2 인스턴스용 다중 AZ Auto Scaling 그룹을 생성합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 데이터베이스를 호스팅하는 EC2 인스턴스에 대한 세 번째 다중 AZ Auto Scaling 그룹을 생성합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 단일 실패 지점을 없애는 것이 고가용성의 핵심입니다. 대기열은 Amazon MQ의 활성/대기 조로, DB는 RDS 다중 AZ로 마이그레이션하여 어떤 장애 상황에도 끄떡없는 시스템을 만드세요.\n\nhttps://aws.amazon.com/amazon-mq/",
    "glossary": {
      "Amazon MQ": "산업 표준 메시지 대기열 서버를 AWS가 대신 구축하고 관리해주는 서비스",
      "Multi-AZ Deployment": "사고에 대비해 서로 다른 건물(데이터 센터)에 복제본 서버를 두어 가용성을 높이는 방법",
      "Single Point of Failure": "해당 구성 요소 하나만 고장 나도 전체 시스템이 멈추게 되는 취약한 지점"
    }
  },
  {
    "id": 139,
    "question": "보고팀이 매일 S3 버킷에 들어오는 파일을 분석용 버킷으로 수동 복사하여 분석하고 있습니다. 파일이 들어오자마자 자동으로 복사하고, Lambda로 패턴 분석을 수행한 뒤 머신러닝 파이프라인(SageMaker)까지 태우고 싶습니다. 최소한의 운영 오버헤드로 이 모든 과정을 자동화하는 방법은?",
    "options": [
      "분석 S3 버킷에 파일을 복사하는 Lambda 함수를 생성합니다. 분석 S3 버킷에 대한 S3 이벤트 알림을 생성합니다. 이벤트 알림의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다. s3:ObjectCreated:Put 을 이벤트 유형으로 구성합니다.",
      "분석 S3 버킷에 파일을 복사하는 Lambda 함수를 생성합니다. Amazon EventBridge(Amazon CloudWatch Events)에 이벤트 알림을 보내도록 분석 S3 버킷을 구성합니다. EventBridge(CloudWatch 이벤트)에서 ObjectCreated 규칙을 구성합니다. 규칙의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다.",
      "S3 버킷 간에 S3 복제를 구성합니다. 분석 S3 버킷에 대한 S3 이벤트 알림을 생성합니다. 이벤트 알림의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다. s3:ObjectCreated:Put 을 이벤트 유형으로 구성합니다.",
      "S3 버킷 간에 S3 복제를 구성합니다. Amazon EventBridge(Amazon CloudWatch Events)에 이벤트 알림을 보내도록 분석 S3 버킷을 구성합니다. EventBridge(CloudWatch 이벤트)에서 ObjectCreated 규칙을 구성합니다. 규칙의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 파일 복사는 S3 자체 기능으로 맡기고, 완료 신호를 EventBridge가 받아서 Lambda와 AI 엔진을 동시에 깨우게 설계하세요. 코딩 없이 자동화를 완성하는 가장 세련된 흐름입니다.\n\nhttps://aws.amazon.com/eventbridge/",
    "glossary": {
      "S3 Replication": "파일이 생기면 다른 바구니로 실시간으로 자동 복제하는 기본 탑재 기능",
      "EventBridge": "시스템의 이벤트를 감지해 약속된 다음 작업들을 착착 실행시켜주는 클라우드의 지휘자",
      "SageMaker Pipelines": "AI 모델을 학습시키고 배포하는 복잡한 과정을 하나로 묶은 자동화 기차"
    }
  },
  {
    "id": 140,
    "question": "컴퓨팅 비용을 최적화하려 합니다. 데이터 수집용 EC2는 가끔씩만 쓰고 도중에 꺼져도 상관없습니다. 반면 사용자 화면(Fargate)과 API(Lambda) 계층은 내년에도 일정한 수준으로 계속 쓸 것이 확실합니다. 가장 비용 효율적인 구매 옵션 조합은? (2개 선택)",
    "options": [
      "데이터 수집 계층에 스팟 인스턴스 사용",
      "데이터 수집 계층에 온디맨드 인스턴스 사용",
      "프런트 엔드 및 API 계층에 대한 1 년 Compute Savings Plan 을 구매합니다.",
      "데이터 수집 계층에 대한 1 년 전체 선결제 예약 인스턴스를 구매합니다.",
      "프런트 엔드 및 API 계층을 위한 1 년 EC2 인스턴스 Savings Plan 을 구매합니다."
    ],
    "answer": [0, 2],
    "explanation": "정답은 A와 C입니다. 중단돼도 되는 작업은 스팟 인스턴스로(A), 1년 내내 쓰는 핵심 자원은 Savings Plan 약정 할인으로(C) 지키세요. 지갑의 두께가 달라지는 영리한 컴퓨팅 구매 전략입니다.\n\nhttps://aws.amazon.com/savingsplans/",
    "glossary": {
      "Spot Instances": "AWS의 남는 자원을 경매 방식으로 빌려 시세보다 훨씬 싸게 쓰는 서버",
      "Compute Savings Plans": "사용한 시간만큼 미리 약속하면 Fargate, Lambda, EC2 가리지 않고 할인해주는 아주 유연한 요금제",
      "Fargate": "서버 신경 안 쓰고 컨테이너만 던져주면 알아서 굴려주는 서버리스 컴퓨팅"
    }
  },
  {
    "id": 141,
    "question": "글로벌 뉴스 포털을 운영 중이며, 전 세계 사용자에게 개인화된 정보를 빛의 속도로 전달하려 합니다. ALB 뒤에 EC2 API 서버가 있는 구조일 때, 모든 사용자의 반응 속도(대기 시간)를 최소화하기 위한 가장 세련된 설계는?",
    "options": [
      "단일 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon CloudFront 를 사용하여 ALB 를 오리진으로 지정하여 모든 정적 및 동적 콘텐츠를 제공합니다.",
      "두 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon Route 53 지연 시간 라우팅 정책을 사용하여 가장 가까운 리전의 ALB 에서 모든 콘텐츠를 제공합니다.",
      "단일 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon CloudFront 를 사용하여 정적 콘텐츠를 제공합니다. ALB 에서 직접 동적 콘텐츠를 제공합니다.",
      "두 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon Route 53 지리적 위치 라우팅 정책을 사용하여 가장 가까운 리전에서 ALB 의 모든 콘텐츠를 제공합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. CloudFront는 단순 캐싱을 넘어 전 세계 고속도로 입구 역할을 합니다. 동적 API 서버(ALB) 앞단에 세우면 지연 시간을 획기적으로 줄여 전 세계 사용자에게 쾌적한 속도를 선물합니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "Latency": "데이터가 오가는 데 걸리는 지연 시간으로 짧을수록 '빠르다'고 느낌",
      "Edge Location": "CloudFront 배달부가 콘텐츠를 들고 대기하고 있는 전 세계 각지의 보급 창고",
      "Dynamic Content": "사용자마다 내용이 달라지는 정보로 캐시하기 어렵지만 경로를 최적화하면 훨씬 빨라짐"
    }
  },
  {
    "id": 142,
    "question": "게임 회사가 고가용성 설계를 원합니다. 앱은 리눅스 커널을 수정해서 쓰고 UDP 통신만 가능합니다. 전 세계 사용자에게 가장 가까운 지점에서 접속하게 하면서, 앱의 입구로 고정된 IP 주소를 꼭 하나만 주고 싶을 때 무엇을 써야 할까요?",
    "options": [
      "요청을 Application Load Balancer 로 전달하도록 Amazon Route 53 을 구성합니다. AWS Application Auto Scaling 의 애플리케이션에 AWS Lambda 를 사용합니다.",
      "요청을 Network Load Balancer 로 전달하도록 Amazon CloudFront 를 구성합니다. AWS Application Auto Scaling 그룹의 애플리케이션에 AWS Lambda 를 사용합니다.",
      "요청을 Network Load Balancer 로 전달하도록 AWS Global Accelerator 를 구성합니다. EC2 Auto Scaling 그룹의 애플리케이션에 Amazon EC2 인스턴스를 사용합니다.",
      "요청을 Application Load Balancer 로 전달하도록 Amazon API Gateway 를 구성합니다. EC2 Auto Scaling 그룹의 애플리케이션에 Amazon EC2 인스턴스를 사용합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 게임 서버 같은 UDP 통신 환경에 전 세계를 잇는 고정 IP까지 필요하다면 Global Accelerator가 필수템입니다. AWS 전용망을 통해 패킷 손실 없는 안정적인 핑(Ping)을 보장합니다.\n\nhttps://aws.amazon.com/global-accelerator/",
    "glossary": {
      "AWS Global Accelerator": "전 세계 사용자에게 AWS의 고속 전용 차선을 열어주어 네트워크 성능을 높여주는 서비스",
      "UDP": "데이터를 빠르게 보내는 데 최적화된 통신 규약으로 게임에서 많이 쓰임",
      "Anycast IP": "전 세계 어디서든 똑같은 주소로 접속해도 가장 가까운 곳으로 연결되게 해주는 마법 같은 IP"
    }
  },
  {
    "id": 143,
    "question": "온프레미스의 거대한 앱(모놀리식)을 AWS로 옮기면서 코드는 최대한 유지하되, 기능을 쪼개서 각 팀이 따로 관리하게 만들고 싶습니다. 운영 수고를 덜면서도 확장성이 아주 뛰어난 현대적인 구조를 원할 때 가장 좋은 선택은?",
    "options": [
      "AWS Lambda 에서 애플리케이션을 호스팅합니다. 애플리케이션을 Amazon API Gateway 와 통합합니다.",
      "AWS Amplify 를 사용하여 애플리케이션을 호스팅합니다. AWS Lambda 와 통합된 Amazon API Gateway API 에 애플리케이션을 연결합니다.",
      "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Auto Scaling 그룹의 EC2 인스턴스를 대상으로 하여 Application Load Balancer 를 설정합니다.",
      "Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS 를 대상으로 하여 Application Load Balancer 를 설정합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 거대한 프로젝트를 팀별로 쪼개어 독립적으로 관리하고 싶다면 컨테이너와 ECS를 활용하세요. 팀별로 자신의 '도시락(컨테이너)'만 업데이트하면 되는 편리한 마이크로서비스 시대가 옵니다.\n\nhttps://aws.amazon.com/ecs/",
    "glossary": {
      "Microservices": "거대한 하나의 앱을 작은 조각들로 나누어 독립적으로 배포하고 관리하는 유연한 설계 방식",
      "ECS (Elastic Container Service)": "수많은 컨테이너 상자들을 하나하나 관리해주는 똑똑한 서버 관리 시스템",
      "Container": "코드와 환경을 하나로 묶어 어디서든 똑같이 실행되게 하는 가상 도시락"
    }
  },
  {
    "id": 144,
    "question": "Aurora DB를 사용 중인데 매달 무거운 보고서 작업을 돌릴 때마다 사이트 전체 성능이 뚝 떨어져서 고민입니다. CPU와 읽기 속도가 한계에 달한 것으로 보일 때, 돈을 가장 아끼고 문제를 해결하는 현명한 방법은 무엇입니까?",
    "options": [
      "월별 보고를 Amazon Redshift 로 마이그레이션합니다.",
      "월별 보고를 Aurora 복제본으로 마이그레이션합니다.",
      "Aurora 데이터베이스를 더 큰 인스턴스 클래스로 마이그레이션합니다.",
      "Aurora 인스턴스에서 프로비저닝된 IOPS 를 늘립니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 무거운 보고서 작업은 메인 DB가 아닌 '읽기 전용 복제본' 분신 서버에게 시키세요. 메인 서버는 본업에 집중하고 보고서는 복제본에서 쾌적하게 뽑아내는 현명한 역할 분담입니다.\n\nhttps://aws.amazon.com/rds/aurora/",
    "glossary": {
      "Aurora Replica": "메인 DB의 실시간 복사본 서버로, 주로 읽기 성능을 분산하고 높이는 데 사용함",
      "ReadIOPS": "초당 데이터를 읽어내는 횟수로 조회 작업이 많을수록 이 수치가 올라감",
      "Instance Class": "데이터베이스 서버의 엔진 성능(CPU, 메모리 등) 등급"
    }
  },
  {
    "id": 145,
    "question": "혼자서 웹 서버와 DB 역할을 다 하는 EC2 한 대로 버티다 보니 바쁜 시간만 되면 500 에러를 뿜으며 자꾸 죽습니다. 운영 비용은 아끼면서 손님 수에 맞춰 서버가 자동으로 늘어났다 줄어들게 구현하려면 어떻게 하는 게 가장 좋을까요?",
    "options": [
      "데이터베이스를 Amazon RDS for MySQL DB 인스턴스로 마이그레이션합니다. 웹 애플리케이션의 AMI 를 생성합니다. AMI 를 사용하여 두 번째 EC2 온디맨드 인스턴스를 시작합니다. Application Load Balancer 를 사용하여 각 EC2 인스턴스에 로드를 분산합니다.",
      "데이터베이스를 Amazon RDS for MySQL DB 인스턴스로 마이그레이션합니다. 웹 애플리케이션의 AMI 를 생성합니다. AMI 를 사용하여 두 번째 EC2 온디맨드 인스턴스를 시작합니다. Amazon Route 53 가중 라우팅을 사용하여 두 EC2 인스턴스에 로드를 분산합니다.",
      "데이터베이스를 Amazon Aurora MySQL DB 인스턴스로 마이그레이션합니다. AWS Lambda 함수를 생성하여 EC2 인스턴스를 중지하고 인스턴스 유형을 변경합니다. CPU 사용률이 75%를 초과할 때 Lambda 함수를 호출하는 Amazon CloudWatch 경람을 생성합니다.",
      "데이터베이스를 Amazon Aurora MySQL DB 인스턴스로 마이그레이션합니다. 웹 애플리케이션의 AMI 를 생성합니다. 시작 템플릿에 AMI 를 적용합니다. 시작 템플릿으로 Auto Scaling 그룹 생성 스팟 집합을 사용하도록 시작 템플릿을 구성합니다. Auto Scaling 그룹에 Application Load Balancer 를 연결합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 나홀로 EC2 시대를 끝내고 자동으로 늘어나는 Auto Scaling과 스팟 인스턴스, 그리고 튼튼한 Aurora DB로 갈아타세요. 비용은 아끼고 500 에러는 영구 퇴출하는 현대화의 정석입니다.\n\nhttps://aws.amazon.com/aurora/",
    "glossary": {
      "Auto Scaling": "부하 상황에 따라 서버 대수를 알아서 넣고 빼주는 스마트한 자동 관리 그룹",
      "Spot Fleet": "다양한 종류의 떨이 서버들을 섞어서 비용은 극도로 낮추고 성능은 유지하는 전략",
      "AMI": "서버의 모든 내용을 그대로 복사해둔 원본 이미지 파일"
    }
  },
  {
    "id": 146,
    "question": "매일 낮 8시간은 바쁘지만 밤이나 주말에는 놀고 있는 서버들이 있습니다. 서비스가 멈추면 안 되면서도 요금은 확 줄이고 싶을 때 설계자가 추천하는 가장 지능적인 인스턴스 구매 조합은?",
    "options": [
      "전체 워크로드에 대해 스팟 인스턴스를 사용합니다.",
      "기본 사용량 수준에 대해 예약 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 용량에 대해 스팟 인스턴스를 사용합니다.",
      "기준 사용 수준에 대해 온디맨드 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 용량에 대해 스팟 인스턴스를 사용합니다.",
      "기본 사용량 수준에 대해 전용 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 용량에 대해 온디맨드 인스턴스를 사용합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 365일 든든한 기초 체력은 예약 인스턴스(RI)로 싸게 챙기고, 낮 시간에만 반짝 필요한 추가 인력은 스팟 인스턴스로 동원하세요. 가장 가성비 좋은 근육질 시스템이 완성됩니다.\n\nhttps://aws.amazon.com/ec2/spot/",
    "glossary": {
      "Reserved Instance (RI)": "미리 계약하고 그 대가로 대폭 할인을 받아 쓰는 고정 장발장 요금제",
      "Spot Instances": "AWS의 빈자리를 빌려 쓰는 대신 싸게 쓰다 언제든 방을 비워줄 준비가 된 저가 요금제"
    }
  },
  {
    "id": 147,
    "question": "로그 파일을 10년이나 보관해야 하는 법규를 지켜야 합니다. 첫 달 로그는 자주 보지만 그 뒤로는 거의 먼지만 쌓이는데, 매달 10TB 넘게 쏟아지는 이 데이터를 가장 똑똑하고 저렴하게 쌓아두는 방법은 무엇일까요?",
    "options": [
      "Amazon S3 에 로그를 저장합니다. AWS Backup 을 사용하여 1 개월 이상 된 로그를 S3 Glacier Deep Archive 로 이동합니다.",
      "Amazon S3 에 로그를 저장합니다. S3 수명 주기 정책을 사용하여 1 개월 이상 된 로그를 S3 Glacier Deep Archive 로 이동합니다.",
      "Amazon CloudWatch Logs 에 로그를 저장합니다. AWS Backup 을 사용하여 1 개월 이상 된 로그를 S3 Glacier Deep Archive 로 이동합니다.",
      "Amazon CloudWatch Logs 에 로그를 저장합니다. Amazon S3 수명 주기 정책을 사용하여 1 개월 이상 된 로그를 S3 Glacier Deep Archive 로 이동합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 10년치 로그 압박에서 벗어나려면 S3 수명 주기 정책을 활용하세요. 한 달 된 정적 파일을 무덤이자 창고인 Glacier Deep Archive로 자동 이송해두면 보관 비용이 기적처럼 사라집니다.\n\nhttps://aws.amazon.com/s3/storage-classes/",
    "glossary": {
      "S3 Lifecycle": "데이터의 나이를 체크해 더 싼 저장소로 자동으로 등급을 낮춰주는 규칙 설정",
      "Glacier Deep Archive": "찾는 데는 시간이 좀 걸리지만 보관료만큼은 압도적으로 저렴한 최하단 저장소"
    }
  },
  {
    "id": 148,
    "question": "SNS로 알림을 받아 Lambda가 연산을 수행하는 구조인데, 네트워크 연결이 잠시 끊기면 데이터도 같이 날아가 버려 수동으로 다시 작업해야 합니다. 이런 사고 없이 모든 알림이 확실하게 끝까지 처리되게 하려면 무엇을 추가해야 할까요?",
    "options": [
      "여러 가용 영역에 걸쳐 배포할 Lambda 함수를 구성합니다.",
      "Lambda 함수의 구성을 수정하여 함수에 대한 CPU 및 메모리 할당을 늘립니다.",
      "재시도 횟수와 재시도 간 대기 시간을 모두 늘리도록 SNS 주제의 재시도 전략을 구성합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 장애 시 대상으로 구성합니다. 대기열의 메시지를 처리하도록 Lambda 함수를 수정합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. Lambda의 실패가 두렵다면 옆에 '재도전 바구니(SQS)'를 두세요. 네트워크가 끊겨도 데이터는 바구니에 안전하게 담기고 Lambda가 여유 생길 때마다 꺼내 일하니 분실 사고 제로입니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "SNS (Simple Notification Service)": "한 번에 수만 명에게 소식을 뿌리는 중앙 방송국 같은 서비스",
      "SQS (Simple Queue Service)": "할 일을 잊지 않게 차곡차곡 쌓아두는 클라우드의 할 일 목록 바구니",
      "DLQ (Dead Letter Queue)": "끝내 처리되지 못한 실패한 메시지들이 최후에 모이는 안전한 대기 구역"
    }
  },
  {
    "id": 149,
    "question": "사건이 발생하는 순서 그대로 정확히 데이터를 처리해야 하는데요. 이 순서가 꼬이면 전체 결과가 망가집니다. 운영의 수고는 최소로 줄이면서도 들어온 순서를 칼같이 지키며 일 처리를 완수하는 최고의 비결은?",
    "options": [
      "메시지를 보관할 Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 생성합니다. 대기열의 메시지를 처리하도록 AWS Lambda 함수를 설정합니다.",
      "처리할 페이로드가 포함된 알림을 전달하기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. AWS Lambda 함수를 구독자로 구성합니다.",
      "메시지를 보관할 Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 생성합니다. 대기열의 메시지를 독립적으로 처리하도록 AWS Lambda 함수를 설정합니다.",
      "처리할 페이로드가 포함된 알림을 전달하기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. Amazon Simple Queue Service(Amazon SQS) 대기열을 구독자로 구성합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 사건 사고의 순서가 운명을 결정한다면 'FIFO 번호표'를 발행하는 SQS FIFO 대기열을 쓰세요. 들어온 순서 그대로 Lambda에 전달되어 데이터가 꼬이는 일 없이 순리대로 처리됩니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "SQS FIFO": "선입선출 방식으로 데이터의 순서와 중복 방지를 AWS가 하드웨어적으로 보장해주는 서비스",
      "Standard Queue": "순서가 가끔 바뀔 수도 있지만 엄청나게 많은 일감을 한꺼번에 처리할 수 있는 일반 대기열",
      "Decoupling": "하나의 큰 시스템을 여러 조각으로 나누어 서로 영향을 주지 않게 자유롭게 만드는 기술"
    }
  },
  {
    "id": 150,
    "question": "서버 감시 알람을 만들려 하는데요. 단순히 CPU만 높다고 울리면 너무 시끄럽습니다. CPU 사용률도 높고(50% 이상) 동시에 하드디스크 읽기(IOPS)도 높을 때만 '진짜 비상이다!'라고 판단해서 알려주고 싶을 때, 어떤 지능형 경보를 구축해야 할까요?",
    "options": [
      "가능한 경우 Amazon CloudWatch 복합 경보를 생성합니다.",
      "Amazon CloudWatch 대시보드를 생성하여 지표를 시각화하고 문제에 신속하게 대응합니다.",
      "Amazon CloudWatch Synthetics 카나리아를 생성하여 애플리케이션을 모니터링하고 경보를 발생시킵니다.",
      "가능한 경우 여러 지표 임계값으로 단일 Amazon CloudWatch 지표 경보를 생성합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 여러 조건이 한꺼번에 맞을 때만 비명을 지르는 '복합 경보' 시스템을 구축하세요. 사소한 일로 자꾸 울리는 알람 소리를 줄이고, 진짜 비상 상황만 콕 집어 알려주는 스마트한 감시병입니다.\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
    "glossary": {
      "Composite Alarm": "여러 개의 독립적인 하위 경보들을 AND/OR 논리로 묶어 더 정확한 판단을 내리는 지능형 알람",
      "Metric": "CPU 사용량, 메모리, 네트워크 속도처럼 시스템의 건강 상태를 숫자로 나타낸 측정값",
      "IOPS": "초당 하드디스크가 읽고 쓰는 속도로 서버의 일꾼들이 얼마나 바쁜지를 보여주는 지표"
    }
  }
];