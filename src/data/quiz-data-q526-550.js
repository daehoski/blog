export const quizData = [
  {
    "id": 526,
    "question": "Aurora PostgreSQL 데이터베이스의 장애 조치(Failover)가 발생했을 때, 애플리케이션의 다운타임을 3분에서 최대한 줄이고 싶습니다. 가장 운영 효율적인 해결책은?",
    "options": [
      "읽기 전용 복제본(Read Replica)의 개수를 더 늘려 부하를 분산합니다.",
      "다른 리전에 보조 클러스터를 만들고 장애 발생 시 수동으로 엔드포인트를 변경합니다.",
      "데이터 캐싱을 위해 Memcached용 ElastiCache 클러스터를 도입합니다.",
      "데이터베이스 앞에 Amazon RDS Proxy를 설정하고, 앱이 프록시를 통해 연결하게 합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. DB 장애 시 새로운 서버로 다시 연결하는 데 시간이 걸립니다. RDS Proxy를 앞에 두면 프록시가 연결을 유지해주므로 장애 조치 시간(다운타임)을 획기적으로 줄여 서비스 연속성을 보장합니다.\n\nhttps://aws.amazon.com/rds/proxy/",
    "glossary": {
      "Amazon RDS Proxy": "데이터베이스 연결을 효율적으로 관리하고 장애 조치 시 빠른 전환을 돕는 가용성이 높은 완전관리형 프록시",
      "Failover (장애 조치)": "기본 서버에 문제가 생겼을 때 자동으로 대기 중인 다른 서버로 역할을 넘겨 서비스를 이어가는 과정",
      "Downtime (다운타임)": "시스템이 정상적으로 작동하지 않아 서비스를 이용할 수 없는 시간"
    }
  },
  {
    "id": 527,
    "question": "전 세계를 대상으로 하는 스트리밍 서비스의 가동 중지 시간을 제로에 가깝게 만들려 합니다. 현재 EC2, ALB, Aurora DB를 쓰고 있는데, 가장 강력한 내결함성을 가진 구조는?",
    "options": [
      "기본 리전의 Auto Scaling 그룹을 다른 리전까지 확장하여 서버를 배치합니다.",
      "두 번째 리전에 서버를 복제하고, Aurora 교차 리전 복제본을 수동으로 승격시키는 구조를 짭니다.",
      "AWS DMS를 사용하여 실시간으로 DB를 다른 리전에 복제하고 Route 53 장애 조치 정책을 씁니다.",
      "두 번째 리전에 서버군을 배치하고 'Amazon Aurora 글로벌 데이터베이스'를 사용합니다. Route 53 상태 확인과 장애 조치 정책을 연동합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. '리전 전체 장애'에도 끄떡없는 구조를 만들려면 Aurora 글로벌 데이터베이스가 핵심입니다. 리전 간 초고속 복제를 지원하며, 재난 시 보조 리전을 즉시 승격시킬 수 있어 최고의 내결함성을 제공합니다.\n\nhttps://aws.amazon.com/rds/aurora/global-database/",
    "glossary": {
      "Amazon Aurora Global Database": "하나의 데이터베이스를 전 세계 여러 리전에 걸쳐 운영할 수 있게 하며 빠른 복구를 지원하는 기능",
      "Fault Tolerance (내결함성)": "시스템의 일부 구성 요소에 장애가 발생해도 전체 서비스가 멈추지 않고 계속 작동하는 성질",
      "Failover Routing Policy": "기본 서비스가 죽었을 때 자동으로 예비(Standby) 서비스로 트래픽을 돌려주는 Route 53의 규칙"
    }
  },
  {
    "id": 528,
    "question": "매일 수천 개의 작은 파일들이 FTP를 통해 들어옵니다. 각 파일 처리에는 3~8분이 걸리며, 처리 후에는 파일을 삭제해야 합니다. 가장 운영 효율적인 서버리스 방식은?",
    "options": [
      "EC2에 FTP 서버를 올리고 백업용으로 S3 Glacier를 씁니다. 밤마다 EventBridge로 작업을 돌립니다.",
      "EC2와 EBS를 써서 파일을 일시 저장하고, AWS Batch를 통해 야간에 일괄 처리합니다.",
      "AWS Transfer Family로 FTP 서버를 만들고 EBS에 저장합니다. 파일 도착 시마다 실시간으로 Batch 작업을 호출합니다.",
      "AWS Transfer Family를 사용해 파일을 S3에 저장합니다. 파일이 들어오는 즉시 S3 이벤트를 트리거하여 람다(Lambda)로 처리하고 삭제합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 서버 관리가 필요 없는 AWS Transfer Family로 파일을 받고, S3에 저장되는 즉시 람다가 출동해 처리 후 삭제하게 만드세요. 코드 몇 줄로 모든 프로세스가 실시간으로 자동화됩니다.\n\nhttps://aws.amazon.com/aws-transfer-family/",
    "glossary": {
      "AWS Transfer Family": "S3나 EFS로의 파일 전송을 FTP, SFTP 등으로 간편하게 처리하게 해주는 완전 관리형 서비스",
      "S3 Event Notification": "S3에 파일이 업로드되는 등의 사건이 생기면 람다나 SNS 등에 즉시 신호를 보내는 기능",
      "Serverless (서버리스)": "서버를 직접 빌려서 관리하지 않고, 필요할 때만 자원을 꺼내 쓰는 클라우드 컴퓨팅 방식"
    }
  },
  {
    "id": 529,
    "question": "금융 거래 데이터와 민감한 정보를 클라우드로 옮기려 합니다. 보안은 강화하면서도 DB 관리 부담(운영 오버헤드)을 줄일 수 있는 최적의 선택은?",
    "options": [
      "EC2에 DB를 직접 깔고 관리하며, KMS 관리형 키를 이용해 암호화를 강화합니다.",
      "데이터베이스를 Amazon RDS로 마이그레이션하고, 유휴 데이터 암호화(Encryption at rest)를 활성화합니다.",
      "데이터를 S3에 저장하고, 민감 정보 검색 도구인 Amazon Macie만 돌려 관리합니다.",
      "RDS로 옮긴 뒤 모든 보안 모니터링을 위해 CloudWatch Logs에만 의존합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 금융 데이터처럼 민감한 정보는 관리형 서비스인 RDS에 맡기는 것이 안전합니다. 패치와 백업을 AWS가 대신 해주며, 클릭 한 번으로 유휴 데이터 암호화까지 적용할 수 있어 관리 부담이 사라집니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Amazon RDS": "관계형 데이터베이스를 설치나 관리 수고 없이 바로 사용할 수 있게 해주는 클라우드 서비스",
      "Encryption at Rest (유휴 데이터 암호화)": "데이터가 하드디스크 등에 저장되어 있는 상태에서 암호화하여 물리적 도난 시에도 유출을 막는 보안 조치",
      "Operational Overhead (운영 오버헤드)": "서비스를 유지하기 위해 들어가는 관리자의 시간, 노력 및 비용"
    }
  },
  {
    "id": 530,
    "question": "TCP와 UDP를 모두 사용하는 멀티플레이어 게임을 운영 중입니다. 여러 리전에 흩어진 서버들(NLB)의 지연 시간을 줄이고 전 세계 사용자의 체감 속도를 높이려면?",
    "options": [
      "NLB 앞에 CloudFront를 배치하고 캐시 유지 시간을 최대한 늘립니다.",
      "NLB를 ALB로 바꾸고, Route 53의 지연 시간 기반 라우팅을 적용합니다.",
      "NLB 앞에 'AWS Global Accelerator'를 추가하고 각 리전의 엔드포인트를 등록합니다.",
      "AWS API Gateway를 앞에 두고 API 캐싱 기능을 최대한 활용합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 게임처럼 지연 시간에 민감하고 UDP 트래픽이 많다면 Global Accelerator가 만능입니다. 사용자 트래픽을 빛의 속도인 AWS 전용망으로 안내하여 전 세계 어디서든 쾌적한 플레이를 보장합니다.\n\nhttps://aws.amazon.com/global-accelerator/",
    "glossary": {
      "AWS Global Accelerator": "AWS의 전용 네트워크망을 통해 사용자의 트래픽 경로를 최적화하여 지연 시간을 줄여주는 서비스",
      "NLB (Network Load Balancer)": "L4 수준에서 초당 수백만 건의 트래픽을 아주 낮은 지연 시간으로 처리하는 부하 분산 장치",
      "Latency (지연 시간)": "데이터가 사용자에서 서버까지 왕복하는 데 걸리는 물리적인 시간"
    }
  },
  {
    "id": 531,
    "question": "외부 업체가 보낸 데이터가 준비되면 우리 쪽 람다(Lambda) 함수를 직접 호출하게 만들고 싶습니다. 다른 복잡한 서비스 연결 없이 가장 간편하게 통로를 열어주는 방법은?",
    "options": [
      "해당 람다 함수에 대한 '함수 URL(Function URL)'을 생성해 업체에 전달합니다.",
      "람다 앞에 ALB(Application Load Balancer)를 세우고 그 주소를 공유합니다.",
      "SNS 주제를 만들고 람다를 구독시킨 뒤, 업체가 SNS로 메시지를 쏘게 합니다.",
      "SQS 대기열을 만들어 람다와 연결하고 업체가 대기열에 데이터를 쌓게 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 람다 함수 URL은 번거로운 설정 없이 람다에 직접 전용 주소를 부여하는 가장 단순한 방법입니다. 중간 단계가 없어 운영 오버헤드가 거의 제로에 가깝습니다.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/urls-configuration.html",
    "glossary": {
      "Lambda Function URL": "람다 함수에 직접 할당되는 전용 HTTPS 엔드포인트(주소)",
      "Webhook (웹훅)": "특정 사건이 발생했을 때 다른 시스템에 실시간으로 알림을 보내는 기술",
      "ARN (Amazon Resource Name)": "AWS 리소스를 구별하기 위한 고유한 이름 형식"
    }
  },
  {
    "id": 532,
    "question": "우리 서비스를 쓰는 모든 고객에게 `고객명.domain.com` 같은 개별적인 보안 주소를 선물하고 싶습니다. 관리 수고를 최소화하면서 이를 구현하는 3가지 조합은?",
    "options": [
      "도메인을 등록하고, Route 53에서 와일드카드 주소(`*.domain.com`)를 만들어 입구를 가리킵니다.",
      "다른 리전의 ACM에서 도메인과 일치하는 와일드카드 인증서를 미리 챙겨둡니다.",
      "각 고객별로 새로운 호스팅 영역을 Route 53에 일일이 하나씩 수동으로 만듭니다.",
      "우리 앱 리전의 ACM에서 와일드카드 인증서를 발급받아 보안 통로를 준비합니다.",
      "고객마다 수백 개의 API 엔드포인트를 API Gateway에서 따로따로 생성합니다.",
      "API Gateway에서 '사용자 지정 도메인 네임' 기능을 설정하고 ACM 인증서를 연동합니다."
    ],
    "answer": [0, 3, 5],
    "explanation": "정답은 B입니다. 법적인 '박제' 보호가 필요하다면 S3 Object Lock이 유일한 정답입니다. 규정 준수 모드를 쓰면 정해진 기간 동안은 관리자라도 파일을 절대 지울 수 없게 되어 신뢰도가 극대화됩니다.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    "glossary": {
      "Wildcard Domain (와일드카드)": "별표(*)를 사용해 특정 도메인의 모든 하위 도메인을 한꺼번에 지정하는 방식",
      "ACM (AWS Certificate Manager)": "SSL/TLS 인증서를 발급하고 관리하며 다른 AWS 서비스에 자동 갱신까지 해주는 도구",
      "Custom Domain Name (API Gateway)": "API Gateway 주소를 내가 가진 예쁜 도메인 이름으로 바꿔주는 기능"
    }
  },
  {
    "id": 533,
    "question": "S3 버킷에 실수로 개인정보(PII)가 포함된 파일이 올라오는 것을 실시간으로 감시하고, 보안 팀에 즉각 알리고 싶습니다. 어떤 서비스들을 엮어야 할까요?",
    "options": [
      "Amazon Macie를 켭니다. Macie 결과물 중 '중요 데이터'만 골라내는 EventBridge 규칙을 만들고 SNS로 알림을 쏩니다.",
      "GuardDuty를 켭니다. 보안 위협 결과물 중 S3 관련 이벤트를 필터링해서 SNS 알림을 보냅니다.",
      "Amazon Macie를 켭니다. EventBridge 규칙을 통해 결과를 SQS 대기열에 쌓아두고 보안 팀이 나중에 확인하게 합니다.",
      "GuardDuty를 켭니다. 발견된 위협 리스트를 SQS에 넣어두고 나중에 분석합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 멀리 떨어진 나라에서도 빠른 로딩을 원한다면 '교차 리전 읽기 전용 복제본'을 깔아두세요. 사용자는 자기 나라 근처 복제 서버에서 데이터를 가져가므로 지연 시간이 획기적으로 줄어듭니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Amazon Macie": "기계 학습을 통해 S3 내의 민감한 정보를 자동으로 발견하고 분류하는 보안 서비스",
      "PII (Personally Identifiable Information)": "이름, 주민번호 등 개인을 식별할 수 있는 민감한 정보",
      "Amazon EventBridge": "시스템 내부의 사건(Event)들을 감지하고 다른 서비스로 전달해주는 이벤트 버스"
    }
  },
  {
    "id": 534,
    "question": "수많은 계정의 로그를 한곳에 모아 관리하려 합니다. '처음 30일은 자주 분석, 이후 60일은 백업용, 90일 후엔 영구 삭제'하라는 지침을 비용 효율적으로 지키는 정책은?",
    "options": [
      "생성 30일 후 S3 Standard로 옮기고, 90일 후에 자동 삭제되도록 설정합니다.",
      "30일 후 S3 Standard-IA로 옮겼다가, 다시 60일 후에 Glacier로 보낸 뒤 90일에 삭제합니다.",
      "처음 30일 뒤 바로 S3 Glacier Flexible Retrieval로 체급을 낮추고, 생성 90일이 되면 삭제되도록 만료 규칙을 정합니다.",
      "30일 후 가용 영역을 하나만 쓰는 One Zone-IA로 옮겨 돈을 아끼고, 90일 후에 삭제합니다."
    ],
    "answer": 2,
    "explanation": "정답은 B입니다. 사내 실습 서버에서 클라우드 S3를 우리 집 하드디스크처럼 쓰고 싶을 때 사용하는 것이 스토리지 게이트웨이입니다. 파일을 저장하면 S3에 자동으로 올라가니 공유와 백업이 동시에 해결됩니다.\n\nhttps://aws.amazon.com/storagegateway/",
    "glossary": {
      "S3 Lifecycle Policy": "데이터의 나이에 따라 자동으로 저장 클래스를 바꾸거나(Tiering) 삭제해주는 자동화 비서",
      "S3 Glacier Flexible Retrieval": "거의 꺼내지 않는 데이터용으로 저장비가 아주 싼 대신, 꺼낼 때 약간의 시간(몇 분~몇 시간)이 걸리는 클래스",
      "Retention Period (보존 기간)": "데이터를 삭제하지 않고 보관해야 하는 의무적인 기간"
    }
  },
  {
    "id": 535,
    "question": "EKS(쿠버네티스) 안에 저장되는 모든 비밀번호와 토큰들이 시스템 깊숙한 곳(etcd)에 저장될 때도 암호화되었으면 좋겠습니다. 어떻게 설정해야 할까요?",
    "options": [
      "KMS 키를 새로 만들고, Secrets Manager를 통해 모든 비밀값을 관리하게 강제합니다.",
      "KMS 키를 새로 만들고, EKS 클러스터 설정에서 'Secrets encryption' 기능을 활성화합니다.",
      "EBS CSI 드라이버를 깔아서 서버 하드디스크가 물리적으로 암호화되게 만듭니다.",
      "계정의 모든 EBS 볼륨에 대해 기본 암호화를 적용하여 우회적으로 해결합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 서버(EC2)가 다른 서비스에 접근할 때는 비밀키를 주는 게 아니라 '역할'을 입혀야 합니다. 역할에 최소한의 권한(읽기 전용 등)만 넣어주면 보안 사고 걱정 없이 안전하게 일할 수 있습니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    "glossary": {
      "Kubernetes etcd": "쿠버네티스의 모든 상태와 설정 값이 저장되는 핵심 데이터베이스 키-값 저장소",
      "KMS (Key Management Service)": "데이터 암호화에 쓰이는 마스터 키를 안전하게 보관하고 관리하는 서비스",
      "Secrets Encryption (EKS)": "쿠버네티스의 'Secret' 리소스를 저장할 때 KMS를 연동해 암호화하는 기능"
    }
  },
  {
    "id": 536,
    "question": "프로덕션 DB(PostgreSQL)에 들어있는 최신 데이터를 데이터 과학자들이 복잡한 쿼리로 마음껏 조회하게 해주고 싶습니다. 서비스 중단 없이, 그리고 운영 비용을 아끼며 읽기 성능을 보장하는 방법은?",
    "options": [
      "기존 DB 서버 사양을 두 배로 키워서 과학자들의 쿼리를 견디게 합니다.",
      "다중 AZ(Multi-AZ)로 전환하고, 놀고 있는 대기(Standby) 서버의 주소를 과학자들에게 알려줍니다.",
      "일반 다중 AZ에 읽기 전용 복제본 2개를 추가로 더 만들어 배정합니다.",
      "2개의 읽기 가능한 대기 서버가 포함된 '다중 AZ 클러스터' 배포 방식으로 전환하고 읽기 엔드포인트를 제공합니다."
    ],
    "answer": 3,
    "explanation": "정답은 A입니다. 정적 이미지 비용과 속도를 다 잡는 비법은 CloudFront(CDN)입니다. 전 세계 복제 서버(Edge)에서 손님에게 가장 가까운 곳에서 이미지를 쏴주니 서버도 편하고 고객도 행복해집니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "Multi-AZ DB Cluster": "장애 조치용 대기 서버들을 읽기 작업에도 활용할 수 있게 최적화된 RDS의 배포 유형",
      "Reader Endpoint (읽기 엔드포인트)": "쓰기 서버가 아닌 읽기 전용 서버들로 트래픽을 이끌어주는 고정된 주소",
      "Data Scientist (데이터 과학자)": "방대한 데이터를 분석하고 가공하여 비즈니스 통찰을 얻는 전문가"
    }
  },
  {
    "id": 537,
    "question": "3개 가용 영역에 3계층(서버/웹/DB) 앱을 운영 중인데 곧 대박 트래픽이 몰려올 예정입니다. 전체 시스템의 확장성과 고가용성을 완벽하게 보장하려면 무엇을 해야 할까요?",
    "options": [
      "DB를 RDS 다중 AZ 클러스터로 옮기고, ElastiCache(Redis)를 도입해 세션과 캐시를 처리합니다. 웹 서버는 ASG로 묶어 3개 AZ에 뿌립니다.",
      "DB를 RDS 다중 AZ로 옮기되, 캐시는 더 단순한 Memcached를 쓰고 나머지 설정은 동일하게 가져갑니다.",
      "DB를 아예 DynamoDB로 확 바꾸고 DAX를 붙입니다. 세션도 DB에 넣고 서버는 ASG로 관리합니다.",
      "DB를 단일 가용 영역의 RDS로 옮기고 대신 캐시 서버만 빵빵하게 두어 부하를 막습니다."
    ],
    "answer": 0,
    "explanation": "정답은 C입니다. 사용자가 줄어드는 새벽엔 자동으로 DB 사양을 낮추고, 바쁜 낮엔 높여주는 '자율 주행' DB가 Aurora Serverless입니다. 가성비와 성능을 동시에 잡는 스마트한 선택입니다.\n\nhttps://aws.amazon.com/rds/aurora/serverless/",
    "glossary": {
      "Multi-AZ (다중 가용 영역)": "지리적으로 떨어진 여러 데이터 센터에 자원을 분산하여 재난 시에도 서비스 중단을 막는 구조",
      "Session State (세션 상태)": "사용자가 로그인해 있는 정보 등 일시적으로 기억해야 할 상태 데이터",
      "ElastiCache (Redis)": "데이터를 메모리에 담아두어 응답 속도가 빛처럼 빠르고 기능이 다양한 캐시 서비스"
    }
  },
  {
    "id": 538,
    "question": "글로벌 비디오 스트리밍 서비스를 하는데, 판권 문제 때문에 특정 국가 밖에서는 영상을 못 보게 막아야 합니다. CloudFront에서 가장 확실하게 국가별 차단을 거는 방법은?",
    "options": [
      "지리적 제한(Geo-Restriction) 기능을 사용하여 허용할 국가 목록만 '화이트리스트'에 등록합니다.",
      "업체나 리전별로 복잡한 서명된 URL(Signed URL)을 수만 개 생성해서 배포합니다.",
      "전송되는 비디오 데이터를 국가별 암호 키로 다르게 암호화해서 배달합니다.",
      "URL 뒤에 시간 제한이 걸린 토큰을 붙여 일시적인 링크만 제공합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 거의 안 보는 영상은 저렴한 Glacier 창고에 보관하세요. 가끔 필요할 땐 '긴급 검색'을 신청하면 1~5분 만에 꺼내볼 수 있어 보관비와 처리 속도 사이의 균형을 완벽히 맞춥니다.\n\nhttps://aws.amazon.com/s3/storage-classes/glacier/",
    "glossary": {
      "Geo-Restriction (지리적 제한)": "접속자의 국가 정보를 기반으로 콘텐츠 접근을 허용하거나 차단하는 보안 기법",
      "Whitelist (허용 목록)": "명시적으로 적어 놓은 대상에게만 입장을 허용하는 보안 방식",
      "CDN (Content Delivery Network)": "전 세계Edge 서버를 이용해 콘텐츠를 사용자에게 더 빨리 전달하는 기술"
    }
  },
  {
    "id": 539,
    "question": "온프레미스에서 돌아가는 SQL Server의 재해 복구(DR) 계획을 짜려 합니다. 데이터 유실(RPO)은 30초 이내, 복구 시간(RTO)은 1시간 이내여야 할 때 비용까지 아끼는 묘수는?",
    "options": [
      "SQL Server Enterprise 버전을 써서 온프레미스와 AWS 사이를 24시간 활성화(Active/Active)해둡니다.",
      "AWS에 예비용 RDS를 준비(Warm Standby)해두고, DMS 서비스의 CDC(실시간 복제) 기능으로 데이터를 밀어줍니다.",
      "AWS Elastic Disaster Recovery를 써서 파일럿 라이트(불씨만 남긴 상태) 방식으로 데이터를 복제합니다.",
      "매일 밤 스냅샷을 찍어 S3에 올리고, 리전 장애가 나면 그때부터 새 서버를 세팅하기 시작합니다."
    ],
    "answer": 1,
    "explanation": "정답은 C입니다. 거미줄처럼 얽힌 수백 개의 통신망을 깔끔하게 하나로 묶어주는 것이 Transit Gateway입니다. 중앙 허브 하나만 관리하면 되니 네트워크 관리자의 인생이 편안해집니다.\n\nhttps://aws.amazon.com/transit-gateway/",
    "glossary": {
      "RPO (Recovery Point Objective)": "재난 시 허용 가능한 최대 데이터 유실 시간 (짧을수록 좋음)",
      "RTO (Recovery Time Objective)": "장애 후 서비스를 다시 정상 가동하는 데 걸리는 목표 시간 (빠를수록 좋음)",
      "CDC (Change Data Capture)": "데이터베이스의 변경된 내용만 골라내어 실시간으로 다른 곳에 반영하는 기술"
    }
  },
  {
    "id": 540,
    "question": "사내 Oracle DB의 부하를 줄이기 위해 '보고서 뽑기' 작업만이라도 전용 서버로 돌리고 싶습니다. AWS로 옮기면서 이 기능을 가장 효율적으로 구현하려면?",
    "options": [
      "DMS로 여러 리전에 RDS를 만들고, 보고용 서버가 주 서버와는 다른 리전의 DB를 보게 합니다.",
      "단일 영역 RDS 오라클을 쓰고, 같은 위치에 읽기 복제본을 수동으로 만들어 연결합니다.",
      "다중 AZ 클러스터 오라클을 도입하고, 앱이 리더(Reader) 인스턴스를 찾아서 질문하게 합니다.",
      "다중 AZ 구조의 Amazon Aurora로 갈아타고, 보고용 요청은 'Aurora Reader' 주소로 보냅니다."
    ],
    "answer": 3,
    "explanation": "정답은 C입니다. 전사적 백업 자동화의 끝판왕은 AWS Backup입니다. 백업 계획 하나로 다른 지역(리전) 복제까지 말끔히 처리해주니 재해 복구(DR) 준비도 걱정 없습니다.\n\nhttps://aws.amazon.com/backup/",
    "glossary": {
      "Amazon Aurora": "AWS가 클라우드 환경에 맞춰 재설계한 고성능 완전관리형 데이터베이스 엔진",
      "Offload (오프로드)": "주 서버가 하는 무거운 일을 다른 예비 서버로 넘겨서 부담을 덜어주는 것",
      "Reader Instance (판독기 인스턴스)": "데이터를 고치지는 못하고 오직 읽기 작업만 전문으로 수행하는 예비 DB 서버"
    }
  },
  {
    "id": 541,
    "question": "유료 회원만 로그인해서 쓰는 웹 앱을 만들려 합니다. 접속량이 들쭉날쭉하고 아예 없을 때도 많은데, 가성비 끝판왕으로 구축하는 3가지 조치는?",
    "options": [
      "초강력 서버리스 조합인 'API Gateway + 람다 + DynamoDB'로 백엔드를 짭니다.",
      "언제나 켜져 있는 ECS 컨테이너 서버와 RDS 데이터베이스를 준비합니다.",
      "회원 가입과 인증 관리를 위해 'Amazon Cognito 사용자 풀'을 직접 연동합니다.",
      "외부 사이트 계정 연동을 위해 Cognito 자격 증명 풀만 단독으로 씁니다.",
      "AWS Amplify를 사용해 프런트엔드 정적 파일들을 CloudFront로 전송/배포합니다.",
      "PHP 서버를 돌려야 하므로 S3 정적 호스팅 대신 EC2 인스턴스를 띄웁니다."
    ],
    "answer": [0, 2, 4],
    "explanation": "정답은 C입니다. AS2 같은 전문 비즈니스 프로토콜을 써야 한다면 AWS Transfer Family가 정답입니다. 별도의 서버 설치 없이도 깐깐한 기업 간 데이터 전송 규약을 완벽히 지원합니다.\n\nhttps://aws.amazon.com/aws-transfer-family/",
    "glossary": {
      "Amazon DynamoDB": "서버 관리 없이 무제한으로 데이터를 저장하고 초고속으로 조회하는 NoSQL 데이터베이스",
      "Amazon Cognito User Pool": "로그인, 회원가입, 비밀번호 찾기 등의 기능을 코드 없이 구현해주는 본인 인증 서비스",
      "AWS Amplify": "프런트엔드와 백엔드를 쉽고 빠르게 연결하고 배포해주는 현대적인 개발 플랫폼"
    }
  },
  {
    "id": 542,
    "question": "프리미엄 회원에게만 고화질 영화 파일을 직접 다운로드하거나 스트리밍해주고 싶습니다. 파일은 모두 S3에 있는데, 어떻게 권한을 챙겨줄 수 있을까요?",
    "options": [
      "S3 서명 쿠키를 고객 브라우저에 구워줍니다.",
      "각 고객에게만 유효한 'CloudFront 서명 URL(Signed URL)'을 생성해 전달합니다.",
      "OAC(원본 액세스 제어) 기능을 써서 일반인들이 S3 주소를 아예 모르게 합니다.",
      "비회원 차단을 위해 응용 프로그램 수준에서 필드 암호화 기능을 켭니다."
    ],
    "answer": 1,
    "explanation": "정답은 B와 C입니다. 서버 관리 수고를 제로로 만드는 골든 조합은 Lambda와 RDS입니다. 코드는 람다가 실행하고 데이터는 RDS가 관리해주니 인프라 걱정 없이 서비스 개발에만 매진할 수 있습니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "CloudFront Signed URL": "콘텐츠에 대한 임시 접근 권한을 URL 매개변수에 포함시켜 특정 기간 동안만 유효하게 만든 주소",
      "OAC (Origin Access Control)": "CloudFront를 통해서만 S3 버킷에 접근할 수 있도록 꽁꽁 묶어두는 보안 설정",
      "Premium Content (프리미엄 콘텐츠)": "돈을 지불하거나 자격이 있는 특정 사용자에게만 제공되는 특별한 자료"
    }
  },
  {
    "id": 543,
    "question": "여러 계정(재무, 팀별 등)을 운영 중인데, 얼마 전 구입한 '세이빙스 플랜(Savings Plan)'의 할인 혜택이 남아서 다른 팀 계정에도 나눠주고 싶습니다. 필요한 2가지 단계는?",
    "options": [
      "마스터 계정 관리 콘솔에서 '할인 공유(Discount sharing)' 옵션을 켭니다.",
      "플랜을 처음 산 계정의 설정창에서 모든 계정을 일일이 화이트리스트에 올립니다.",
      "AWS RAM(리소스 공유 관리자)을 통해 플랜이라는 '물건'을 다른 계정으로 보냅니다.",
      "새로운 결제 전용 계정을 만들고 모든 팀 계정을 조직(Organization)으로 초대해 묶습니다.",
      "기존 계정들을 하나로 합쳐서 AWS Organizations 조직을 구성하고 마스터 계정으로 통합합니다."
    ],
    "answer": [0, 4],
    "explanation": "정답은 A입니다. 부서별로 돈을 얼마나 썼는지 정산하려면 '비용 할당 태그'를 켜야 합니다. 이름표(태그)가 붙은 자원들의 비용을 정밀하게 골라내어 보고서로 뽑아주는 필수 기능입니다.\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    "glossary": {
      "Savings Plans": "일정량의 사용량을 약속하는 대신 획기적인 요금 할인을 받는 요금제 (예약 인스턴스보다 유연함)",
      "AWS Organizations": "여러 개의 AWS 계정을 중앙에서 통합 관리하고 청구(빌링)를 합칠 수 있게 해주는 서비스",
      "Consolidated Billing (통합 빌링)": "조직 내 모든 계정의 비용을 하나의 결제 수단으로 합쳐서 내고 혜택도 공유하는 시스템"
    }
  },
  {
    "id": 544,
    "question": "새로운 버전의 API를 릴리스하려 합니다. 혹시 모를 버그에 대비해 일부 사용자에게만 먼저 보여주고, 괜찮다 싶으면 서서히 전체로 확대하고 싶습니다. 가장 똑똑한 배포 전략은?",
    "options": [
      "API Gateway의 '카나리아(Canary)' 배포 기능을 쓰고, 트래픽의 일부(예: 10%)만 새 버전으로 쏩니다.",
      "OpenAPI 파일을 수정해서 운영 중인 프로덕션 단계에 '병합(Merge)' 업데이트를 밀어 넣습니다.",
      "JSON 설정 파일을 이용해 기존 프로덕션 설정을 새 버전으로 통째로 '덮어쓰기' 합니다.",
      "완전 새로운 엔드포인트(URL)를 파고, Route 53 주소를 그쪽으로 한꺼번에 돌려버립니다."
    ],
    "answer": 0,
    "explanation": "정답은 C입니다. Salesforce 고객 데이터를 코딩 없이 가져오고 싶다면 AppFlow를 선택하세요. 몇 번의 클릭만으로 안전한 전용망을 통해 데이터를 S3로 무사히 실어 나를 수 있습니다.\n\nhttps://aws.amazon.com/appflow/",
    "glossary": {
      "Canary Release (카나리아 배포)": "신규 기능을 일부 사용자에게만 먼저 노출하여 안정성을 검증하는 배포 방식",
      "API Gateway Deployment Stage": "동일한 API를 '개발용', '테스트용', '상용' 등으로 구분해 관리하는 단위",
      "Rollback (롤백)": "새 버전 배포 후 문제가 생겼을 때 즉시 직전의 안정적인 상태로 되돌리는 것"
    }
  },
  {
    "id": 545,
    "question": "메인 웹 사이트 서버가 죽었을 때, 사용자들이 당황하지 않게 '공사 중'이라는 예쁜 정적 안내 페이지를 보여주고 싶습니다. 최소한의 관리 수고로 이를 세팅하는 법은?",
    "options": [
      "Route 53의 지연 시간 라우팅을 씁니다. 반응이 없는 서버 대신 S3 버킷의 에러 페이지로 유도합니다.",
      "Route 53 '능동-수동 장애 조치(Failover)'를 구성합니다. 상태 확인이 실패하면 자동으로 S3의 오류 페이지로 트래픽을 돌립니다.",
      "EC2 인스턴스를 하나 더 띄워 에러 페이지만 보여주게 하고, 수동으로 로드 밸런서 설정을 바꿉니다.",
      "다중값 응답 정책을 씁니다. 평소엔 서버 주소를 주다가, 서버가 아프면 S3 주소를 추가해서 알아서 골라가게 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 전 세계 사용자에게 고정된 '하이패스 IP'를 주고 싶다면 Global Accelerator를 연동하세요. 어떤 나라에서든 가장 빠른 경로로 우리 서버까지 트래픽을 안전하게 모셔다 줍니다.\n\nhttps://aws.amazon.com/global-accelerator/",
    "glossary": {
      "Active-Passive Failover": "평소엔 A만 쓰다가 A가 고장 나면 대기 중인 B로 자동 전환하는 방식",
      "Amazon Route 53 Health Check": "우리 서버가 살아있는지 정기적으로 신호를 보내 확인하는 감시 기능",
      "Static Website Hosting (S3)": "웹 서버 없이 S3에 HTML 파일만 올려서 웹 사이트를 즉시 서비스하는 기능"
    }
  },
  {
    "id": 546,
    "question": "구닥다리 백업 테이프 사용을 멈추고 싶지만, 이미 테이프 로더용 백업 프로그램을 비싸게 사서 쓰고 있습니다. 기존 프로그램을 그대로 쓰면서 저장소만 클라우드로 바꾸는 장비는?",
    "options": [
      "NFS 방식으로 연결되는 일반적인 AWS Storage Gateway를 설치합니다.",
      "EC2에서 마운트할 수 있도록 NFS 인터페이스를 가진 Amazon EFS를 세팅합니다.",
      "iSCSI 인터페이스를 가진 Amazon EFS를 억지로 연결해보려 노력합니다.",
      "iSCSI-VTL(가상 테이프 라이브러리) 인터페이스로 작동하는 'AWS Storage Gateway'를 도입합니다."
    ],
    "answer": 3,
    "explanation": "정답은 B입니다. 넘치는 주문을 감당하지 못해 시스템이 뻗는 걸 막으려면 중간에 SQS 대기열을 두세요. 주문을 차곡차곡 쌓아두면 서버가 자기 속도에 맞춰 하나씩 안전하게 처리하는 '완충' 구조가 됩니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "VTL (Virtual Tape Library)": "데이터를 파일이 아닌 가상 테이프 단위로 저장하는 기술로, 기존 백업 소프트웨어와의 호환성이 뛰어남",
      "AWS Storage Gateway (Tape Gateway)": "온프레미스의 백업 데이터를 AWS 클라우드로 백업하되, 가상 테이프 장비처럼 동작하게 해주는 도구",
      "iSCSI": "네트워크를 통해 하드디스크 같은 블록 저장소를 연결할 때 쓰는 통신 규격"
    }
  },
  {
    "id": 547,
    "question": "수많은 센서에서 쏟아지는 방대한 데이터를 실시간으로 받아 S3에 차곡차곡 쌓고 싶습니다. 서버 한 대도 안 띄우고(최소 오버헤드), 가장 확장성이 좋은 수집 도구는?",
    "options": [
      "Amazon Kinesis Data Firehose를 사용하여 스트리밍 데이터를 즉시 S3에 배달합니다.",
      "AWS Glue를 이용해 일정 시간마다 한꺼번에 긁어서 S3로 옮깁니다.",
      "람다(Lambda) 함수를 24시간 돌려서 들어오는 패킷을 하나하나 파일로 저장합니다.",
      "데이터베이스 전용 이동 서비스인 AWS DMS를 서버와 S3 사이에 연결합니다."
    ],
    "answer": 0,
    "explanation": "정답은 C입니다. 파일 하나당 2MB 정도의 가벼운 분석 작업에는 람다가 최고입니다. 무거운 엔진을 띄울 필요 없이 파일이 오면 쓱 나타나 일하고 사라지니 비용이 거의 들지 않습니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "Amazon Kinesis Data Firehose": "스트리밍 데이터를 실시간으로 캡처하고 S3, Redshift 등으로 자동 전달해주는 완전 관리형 서비스",
      "Ingestion (수집)": "데이터를 나중에 사용하기 위해 여러 소스로부터 한곳으로 모아들이는 과정",
      "Real-time (실시간)": "사건이 발생한 즉시 또는 아주 짧은 시간 내에 처리되어 결과가 나오는 것"
    }
  },
  {
    "id": 548,
    "question": "재무, 개발 등 부서마다 쓰는 계정이 다른데, 어느 날 개발팀이 너무 비싼 서비스를 이것저것 써서 예산이 털렸습니다. 각 계정이 '허가된 서비스'만 딱 쓰게 강제로 묶는 법은?",
    "options": [
      "Systems Manager의 복잡한 템플릿을 짜서 매일 아침 전수 조사를 시킵니다.",
      "AWS Organizations에서 각 부서 OU를 만들고, '서비스 제어 정책(SCP)'을 걸어 금지 목록을 정의합니다.",
      "CloudFormation을 통해서만 서비스를 만들 수 있게 하고 모든 수동 작업을 차단합니다.",
      "Service Catalog에 승인된 제품만 올려놓고, 그 외의 메뉴판은 아예 못 보게 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 A입니다. DB 가용성을 높이는 가장 빠른 방법은 '다중 AZ'로 바꾸는 것입니다. 물리적으로 떨어진 다른 센터에 실시간 복사본을 만들어두니 한쪽이 정전되어도 서비스는 계속됩니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "SCP (Service Control Policy)": "조직(Organizations)의 구성원 계정이 사용할 수 있는 최대 권한 범위를 제한하는 규정",
      "OU (Organizational Unit)": "유사한 성격의 계정들을 한 묶음으로 관리하기 위한 조직 단위",
      "Guardrail (가드레일)": "사용자가 정해진 범위 밖으로 나가지 못하게 막아주는 안전 장치"
    }
  },
  {
    "id": 549,
    "question": "프라이빗 서브넷에 꽁꽁 숨겨둔 MySQL 서버가, 최신 가격 정보를 받으러 인터넷에 접속해야 합니다. 보안은 지키면서 외부 통로만 안전하게 열어주는 방법은?",
    "options": [
      "VPC에 NAT 인스턴스를 직접 세우고 그 서버를 우회해서 나가게 합니다.",
      "공용(Public) 서브넷에 'NAT 게이트웨이'를 설치하고, 프라이빗 서브넷의 길(라우팅)을 그쪽으로 이어줍니다.",
      "인터넷 게이트웨이를 프라이빗 서브넷에 직접 연결하고 문을 활짝 열어줍니다.",
      "VPN 전용 게이트웨이를 만들고 모든 트래픽을 외부망으로 돌리는 설정을 짭니다."
    ],
    "answer": 1,
    "explanation": "정답은 C입니다. 고성능 SSD인 io2 볼륨의 Multi-attach 기능을 쓰면 하나의 하드디스크를 여러 대의 서버가 동시에 나눠 쓸 수 있어 복잡한 클러스터 앱 구축이 쉬워집니다.\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html",
    "glossary": {
      "NAT Gateway": "내부망 PC들이 외부 인터넷과 소통할 수 있게 해주되, 외부로부터의 직접 접근은 차단하는 보안 수문장",
      "Private Subnet (프라이빗 서브넷)": "인터넷 게이트웨이가 직접 연결되어 있지 않아 외부 세계로부터 숨겨진 보안 네트워크 구역",
      "Route Table (라우팅 테이블)": "데이터가 어디로 가야 할지 알려주는 네트워크의 이정표"
    }
  },
  {
    "id": 550,
    "question": "람다(Lambda) 함수가 아주 중요한 환경 변수를 암호화(KMS)해서 쓰고 있습니다. 이 람다가 문제없이 암호를 풀어서 일하게 하려면 어떤 '권한'들이 필요할까요? (2개 선택)",
    "options": [
      "람다의 리소스 정책에 KMS 키 사용권한을 마구 쏟아 붓습니다.",
      "람다의 '실행 역할(Execution Role)'에 해당 KMS 키를 쓸 수 있는(Decrypt 등) IAM 정책을 추가합니다.",
      "람다 전용 함수 보안 정책을 새로 파서 수동으로 연동합니다.",
      "KMS 키 자체의 정책(Key Policy)에서, 해당 람다의 실행 역할을 '허용된 사용자'로 등록합니다.",
      "KMS 키 정책에 람다 서비스 자체의 리소스 정책을 신뢰 대상으로 넣습니다."
    ],
    "answer": [1, 3],
    "explanation": "정답은 A입니다. 고가용성 설계의 교과서입니다. 서버를 여러 대 준비(ASG)하고 입구에서 로드 밸런서(ALB)가 상태 좋은 서버로 손님을 보내주면 장애 걱정 없는 튼튼한 서비스가 됩니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/",
    "glossary": {
      "Lambda Execution Role": "람다 함수가 돌아갈 때 행사하는 권한을 정의한 IAM 역할(ID 카드)",
      "KMS Key Policy": "누가 이 암호화 키를 이용해 데이터를 잠그거나 풀 수 있는지 결정하는 핵심 문서",
      "Environment Variable (환경 변수)": "프로그램 코드 밖에 따로 저장되는 설정값 (데이터베이스 주소, 비밀번호 등)"
    }
  }
];