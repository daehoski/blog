export const quizData = [
  {
    "id": 501,
    "question": "매분 수집되는 고객 결제 데이터를 실시간으로 분석하고, 그 결과를 데이터 레이크(S3)에 차곡차곡 쌓고 싶습니다. 가장 효율적인 도구 조합은?",
    "options": [
      "Kinesis Data Streams로 수집하고, 람다(Lambda)로 실시간 분석을 수행합니다.",
      "AWS Glue로 데이터를 긁어모으고, Kinesis Data Analytics로 분석합니다.",
      "Kinesis Data Firehose로 데이터를 수집하면서, Kinesis Data Analytics를 통해 실시간으로 분석하고 S3에 저장합니다.",
      "API Gateway로 데이터를 받고, 람다를 통해 실시간으로 분석한 뒤 S3로 보냅니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 수집과 저장에는 Kinesis Data Firehose가 전공이고, 흐르는 데이터를 즉석에서 분석(SQL 등)하는 데는 Kinesis Data Analytics가 딱입니다. 이 둘을 연결하면 '수집 -> 분석 -> S3 저장' 과정이 매끄럽고 자동화된 흐름으로 이어집니다. 별도의 서버 관리도 필요 없어 매우 효율적입니다.\n\nhttps://aws.amazon.com/kinesis/data-analytics/",
    "glossary": {
      "Amazon Kinesis Data Firehose": "스트리밍 데이터를 S3, Redshift 등으로 실시간 전송해주는 완전 관리형 서비스",
      "Amazon Kinesis Data Analytics": "스트리밍 데이터에 SQL 쿼리를 날려 실시간으로 지표를 뽑아낼 수 있게 해주는 도구",
      "Data Lake (데이터 레이크)": "정형/비정형에 상관없이 방대한 양의 원본 데이터를 저장해두는 거대한 저장소"
    }
  },
  {
    "id": 502,
    "question": "단일 서버(EC2)에서 돌아가는 웹 사이트를 더 튼튼하고 빠르게 만들려 합니다. 현재 이미지는 EBS 볼륨에 들어있는데, 어떤 개선 작업을 하면 좋을까요? (2개 선택)",
    "options": [
      "이미지 파일을 S3로 옮기고 모든 서버가 이 버킷을 마운트해서 쓰게 합니다.",
      "메인 서버에서 NFS 공유를 설정하고 나머지 서버들이 여기에 접속하게 만듭니다.",
      "모든 서버가 동시에 접속 가능한 Amazon EFS 파일 시스템으로 이미지를 옮깁니다.",
      "AMI로 복제본을 만들고 ALB와 Auto Scaling 그룹을 구성합니다. 그리고 입구에 CloudFront를 배치합니다.",
      "서버 사양을 두 배로 키우고(Scale-up), Global Accelerator를 연동해 네트워크 속도를 높입니다."
    ],
    "answer": [2, 3],
    "explanation": "정답은 C와 D입니다. 성능과 복원력을 동시에 잡으려면 '공유 저장소'와 '분산 처리'가 핵심입니다. 여러 서버가 똑같은 파일을 읽을 수 있게 EFS(C)를 사용하고, 서버 장애 시 즉시 복구되도록 ASG와 ALB(D)를 구성해야 합니다. 여기에 CloudFront(D)까지 더하면 글로벌 배송 속도까지 잡을 수 있습니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "Amazon EFS": "수천 개의 EC2 서버가 동시에 접근해 파일을 공유할 수 있는 클라우드용 공유 하드디스크",
      "Amazon CloudFront": "전 세계Edge 서버에 콘텐츠를 복사해두고 가장 가까운 곳에서 빠르게 전달하는 CDN 서비스",
      "Resilience (복원력)": "장애가 발생해도 시스템이 죽지 않고 빠르게 정상 상태로 되돌아오는 능력"
    }
  },
  {
    "id": 503,
    "question": "모니터링 서비스 업체로서 고객 계정의 EC2 정보와 CloudWatch 지표를 읽어와야 합니다. 고객의 비밀키를 직접 받지 않고, '가장 안전하게' 접속 권한을 얻는 방법은?",
    "options": [
      "고객 계정에서 우리 회사를 '신뢰'하는 IAM 역할을 만들고, 읽기 전용 권한을 부여하게 합니다.",
      "임시 자격 증명을 발급해주는 서버리스 API(토큰 판매기)를 구축해 고객에게 전달합니다.",
      "고객이 전용 IAM 계정을 만들게 한 뒤, 그 아이디와 비밀번호를 우리 암호 관리 시스템에 저장합니다.",
      "고객 계정에 Cognito 사용자를 만들게 하고 그 계정 정보를 공유받아 접속합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 계정 간의 경계를 넘나드는 정석은 '교차 계정 IAM 역할(Cross-Account Role)'입니다. 고객이 역할을 만들고 우리 계정 ID를 '신뢰할 수 있는 주체'로 등록하면, 우리는 필요할 때만 그 역할을 빌려 입고(AssumeRole) 일을 볼 수 있어 보안상 가장 깔끔합니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
    "glossary": {
      "Trust Policy (신뢰 정책)": "어떤 외부 사용자나 서비스가 이 IAM 역할을 빌려 쓸 수 있는지 정의한 보안 문서",
      "Cross-account Access (교차 계정 액세스)": "하나의 AWS 계정에서 다른 AWS 계정의 자원을 안전하게 관리하거나 사용하는 것",
      "AssumeRole": "정해진 시간 동안만 다른 계정이나 서비스의 권한을 일시적으로 빌리는 작업"
    }
  },
  {
    "id": 504,
    "question": "수백 개의 계정에 흩어진 수많은 VPC들을 한곳에서 묶어 관리하고 싶습니다. 네트워크 팀이 중앙에서 모든 통로를 효율적으로 통제할 수 있는 최적의 솔루션은?",
    "options": [
      "모든 VPC끼리 일대일로 연결하는 'VPC 피어링' 거미줄을 만듭니다.",
      "각 VPC마다 인터넷 게이트웨이를 달고 공용 인터넷을 통해 서로 통신하게 합니다.",
      "중앙 네트워킹 계정에 'AWS Transit Gateway'를 만들고 모든 VPC를 여기에 연결합니다.",
      "각 VPC에 VPN 게이트웨이를 설치하고 복잡한 전송(Transit) VPC 구조를 직접 설계합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 연결해야 할 VPC가 많아질수록 Transit Gateway의 진가가 드러납니다. 모든 VPC를 중앙 허브에 꽂기만 하면 되므로 네트워크 팀은 이 허브 하나만 관리하면 됩니다. 확장성과 운영 효율 면에서 최고의 솔루션입니다.\n\nhttps://aws.amazon.com/transit-gateway/",
    "glossary": {
      "AWS Transit Gateway": "수천 개의 VPC와 온프레미스 네트워크를 중앙에서 하나의 허브로 연결해주는 클라우드 라우터",
      "Network Hub (허브)": "여러 장치가 한곳에 모여 서로 데이터를 주고받게 해주는 중앙 장치",
      "VPC Peering (피어링)": "두 VPC를 1:1로 직접 연결하는 방식 (소규모 연결에 적합)"
    }
  },
  {
    "id": 505,
    "question": "매일 밤 12시부터 새벽 6시 사이에만 돌아가는 배치 작업이 있습니다. 작업이 중간에 끊겨도 다른 서버가 이어받아 처리할 수 있는 구조일 때, 비용을 가장 많이 아끼는 방법은?",
    "options": [
      "1년짜리 '컴퓨팅 세이빙스 플랜'을 사서 전체적인 할인 혜택을 받습니다.",
      "특정 사양의 '예약 인스턴스(RI)'를 1년 약정으로 구매해 고정해둡니다.",
      "Auto Scaling 그룹의 서버 타입을 '스팟 인스턴스'로 설정하여 남는 자원을 헐값에 씁니다.",
      "서버 체급을 확 키워서(Scale-up) 작업 시간을 1시간 이내로 단축시킵니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. '중단되어도 상관없는 밤샘 작업'은 스팟 인스턴스를 위한 최고의 무대입니다. AWS에서 남는 자원을 최대 90%까지 할인해주기 때문입니다. 실패해도 다시 하면 되는 구조라면 저렴한 요금의 달콤함만 누리면 됩니다.\n\nhttps://aws.amazon.com/ec2/spot/",
    "glossary": {
      "Spot Instance (스팟 인스턴스)": "AWS의 남는 자원을 경찰 경매처럼 저렴하게 이용하되, 자원이 부족해지면 반납해야 하는 요금제",
      "Batch Job (배치 작업)": "실시간이 아니라 일정량을 모아서 한꺼번에 처리하는 일괄 작업",
      "Fault-tolerant (결함 허용)": "일부 구성 요소에 문제가 생겨도 시스템 전체가 멈추지 않고 계속 작동하는 성질"
    }
  },
  {
    "id": 506,
    "question": "소셜 미디어 앱에서 대규모 이벤트 기간에 사용자들이 사진을 엄청나게 업로드할 것 같습니다. 서버의 부하를 줄이면서 전 세계 사용자의 업로드를 가장 잘 받아내려면?",
    "options": [
      "사용자가 먼저 우리 앱 서버로 파일을 보내면, 서버가 다시 S3로 전달하게 합니다.",
      "사내 망에 설치된 Storage Gateway를 통해 모든 사진을 우회해서 저장합니다.",
      "S3 '미리 서명된 URL(Pre-signed URL)'을 생성해 사용자가 S3로 바로 파일을 쏘게 합니다.",
      "여러 개의 리눅스용 EFS 파일 시스템을 만들고 사용자가 직접 접근하게 합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 서버를 경로로 쓰는 업로드는 리소스 낭비입니다. '미리 서명된 URL'을 쓰면 앱 서버는 입장권만 발행해주고, 실제 사진 업로드는 사용자와 S3가 일대일로 처리합니다. 서버 오버헤드가 사라지고 무제한 확장이 가능해집니다.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
    "glossary": {
      "S3 Pre-signed URL": "특정 시간 동안만 유효한 임시 권한이 담긴 S3 주소로, 외부 사용자가 ID 없이도 업로드/다운로드를 할 수 있게 함",
      "Scalability (확장성)": "사용자나 데이터가 늘어나도 시스템 성능을 유연하게 키워 대응할 수 있는 능력",
      "Bottleneck (병목 현상)": "전체 시스템 중 한 부분이 느려져서 전체 속도가 저하되는 지점"
    }
  },
  {
    "id": 507,
    "question": "전 세계인이 쓰는 비행기 예약 앱을 만드는데, 각 나라에서 내린 예약 정보가 1초 안에 전 세계 DB에 똑같이 반영되어야 합니다. 리전별로 데이터가 자동 복제되는 DB는?",
    "options": [
      "Amazon DynamoDB를 쓰고, '글로벌 테이블(Global Tables)' 기능을 활성화합니다.",
      "Aurora MySQL을 쓰고, 리전마다 '읽기 전용 복제본'을 깔아둡니다.",
      "RDS MySQL을 쓰고, 다른 리전으로 데이터를 복사하는 람다 함수를 직접 개발합니다.",
      "Aurora Serverless를 쓰고, 이벤트 스트림을 통해 모든 리전의 DB를 수동 동기화합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 전 세계 어디서든 똑같은 데이터를 1초 미만의 속도로 만나게 해주는 비법은 DynamoDB 글로벌 테이블입니다. AWS가 전 세계 리전으로 데이터를 자동 복제해주므로 사용자는 가장 가까운 리전에서 빛의 속도로 데이터를 읽고 쓸 수 있습니다.\n\nhttps://aws.amazon.com/dynamodb/global-tables/",
    "glossary": {
      "DynamoDB Global Tables": "여러 AWS 리전에 데이터를 자동으로 실시간 복제하여 전 세계 어디서든 빠른 속도로 접근하게 돕는 기능",
      "Latency (지연 시간)": "데이터를 주고받을 때 발생하는 물리적인 시간 차이(버벅임)",
      "Replication (복제)": "데이터 유실 방지나 성능 향상을 위해 원본 데이터를 다른 곳에 똑같이 복사해두는 것"
    }
  },
  {
    "id": 508,
    "question": "미디어 서버의 백업을 자동화하고, 혹시 리전 하나가 통째로 사라지는 재해(DR)에도 대비하고 싶습니다. 관리 수고를 최소화하는 2가지 조합은?",
    "options": [
      "AMI 수명 주기 정책(DLM)을 만들어 태그별로 자동 백업하고, 다른 리전으로의 복사본 생성을 설정합니다.",
      "매일 수동으로 스냅샷을 찍고, 퇴근 전에 옆 리전으로 복사 버튼을 누릅니다.",
      "AWS Backup을 사용하여 통합 백업 계획을 짜고, 복사 대상을 옆 리전(us-west-2 등)으로 정의합니다.",
      "람다(Lambda) 함수를 짜서 스냅샷 생성과 리전 간 전송 로직을 직접 자동화합니다.",
      "S3 리전 간 복제(CRR) 기능을 켜서 서버의 모든 파일 데이터를 실시간으로 옮깁니다."
    ],
    "answer": [0, 2],
    "explanation": "정답은 B와 D입니다. 중앙 집중 관리와 자동화에는 AWS Backup(B)이 제격입니다. 백업 계획 하나로 리전 간 복제까지 한 번에 끝낼 수 있습니다. 또한 AMI 수명 주기 정책(D)을 활용해 서버 이미지 관리까지 자동화하면 재해 복구 준비가 완벽해집니다.\n\nhttps://aws.amazon.com/backup/",
    "glossary": {
      "AWS Backup": "다양한 AWS 서비스의 백업을 한곳에서 통합 관리하고 리전 간 복제까지 자동화하는 서비스",
      "AMI Lifecycle Policy (DLM)": "서버 이미지(AMI)와 스냅샷의 생성, 보존, 삭제 주기를 자동으로 관리해주는 정책",
      "Disaster Recovery (DR, 재해 복구)": "홍수, 지진 등 큰 사고로 데이터 센터가 멈춰도 다른 곳에서 서비스를 즉시 살려내는 전략"
    }
  },
  {
    "id": 509,
    "question": "우리 사이트가 특정 몇몇 IP 주소에서 들어오는 수백만 건의 가짜 요청 때문에 몸살을 앓고 있습니다. 영구적인 해결책을 찾기 전까지, 당장 급하게 그 나쁜 IP들만 입구에서 컷하려면?",
    "options": [
      "서버(EC2)의 보안 그룹을 열어 그 IP 주소들에 대해 '거부(Deny)' 규칙을 추가합니다.",
      "네트워크 ACL(NACL)을 수정하여 해당 IP 주소들에 대해 '인바운드 거부' 규칙을 최우선으로 넣습니다.",
      "애플리케이션 계층(L7) 로드 밸런서의 보안 그룹에서 해당 IP들을 차단 목록에 올립니다.",
      "서버 안에서 방화벽(iptables)을 돌려 그 IP 주소들을 하나하나 막는 스크립트를 올립니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 나쁜 IP들을 서브넷 입구에서 쫓아버리는 수문장은 네트워크 ACL(NACL)입니다. 보안 그룹은 '허용'만 가능하지만, NACL은 특정 IP를 콕 집어 '거부(Deny)'할 수 있어 공격 트래픽 차단에 가장 효과적입니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
    "glossary": {
      "Network ACL (NACL)": "서브넷 앞단에서 트래픽을 필터링하며, '허용'과 '거부' 규칙을 모두 설정할 수 있는 보안 도구",
      "Security Group (보안 그룹)": "서버(인스턴스) 직전에서 트래픽을 막아주는 도구로, 기본적으로 '허용' 규칙만 가짐",
      "Stateless (비상태 저장)": "들어오는 길을 막았으면 나가는 길도 따로 적어줘야 하는 NACL의 특징"
    }
  },
  {
    "id": 510,
    "question": "유럽(eu-west-1)에 있는 우리 서버가 호주(ap-southeast-2)에 있는 DB와 안전하게 대화해야 합니다. 두 대륙 사이의 VPC를 잇는 가장 표준적인 설계는?",
    "options": [
      "두 리전 사이의 모든 보안 그룹을 'ID 참조' 방식으로 하나로 묶어 관리합니다.",
      "유럽 서버군 주소(IP)에서 오는 트래픽만 호주 DB 보안 그룹에서 허용하게 설정하고 피어링을 맺습니다.",
      "공용 인터넷을 통해 통신하되, DB 주소를 화이트리스트에 등록해 관리합니다.",
      "Transit Gateway를 리전마다 만들고 피어링을 맺은 뒤, 상대방 보안 그룹 ID를 직접 참조하게 짭니다."
    ],
    "answer": 2,
    "explanation": "정답은 B입니다. 서로 다른 리전의 VPC를 직접 잇는 '리전 간 VPC 피어링'을 맺으세요. 리전이 다르면 상대방 보안 그룹 ID를 참조할 수 없기 때문에, 상대방 서버의 'IP 주소 대역'을 우리 보안 그룹 허용 목록에 넣어주는 것이 정석입니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
    "glossary": {
      "Inter-Region VPC Peering": "서로 다른 리전에 있는 두 VPC를 AWS 내부망으로 안전하게 직접 연결하는 기술",
      "Security Group ID Referencing": "보안 그룹 설정 시 구체적인 IP 대신 다른 보안 그룹의 이름(ID)을 적어 그 그룹원들만 통과시키는 편리한 방식",
      "Internal Network (내부망)": "공용 인터넷을 통하지 않고 AWS만의 광섬유 망을 타고 데이터를 주고받는 안전한 경로"
    }
  },
  {
    "id": 511,
    "question": "개발자들을 위해 수많은 PostgreSQL DB들을 만들어줘야 합니다. 하루 8시간 중 실제 일하는 시간은 절반 정도인데, 돈을 가장 아끼려면 어떤 엔진을 골라야 할까요?",
    "options": [
      "안정성이 최고인 일반 Aurora PostgreSQL을 24시간 풀로 돌립니다.",
      "가장 기본인 RDS PostgreSQL 단일 서버를 8시간 동안 수동으로 켰다 껐다 합니다.",
      "일할 때만 알아서 살아나고 안 쓸 땐 잠드는 'Aurora 온디맨드(Serverless)'를 선택합니다.",
      "S3에서 파일을 직접 쿼리하는 'S3 Object Select' 기능을 써서 DB 자체를 없앱니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 개발 환경처럼 사용 패턴이 예측 불가한 곳엔 Aurora Serverless가 제격입니다. 사람이 없을 땐 서버가 잠들고(비용 0원!), 쿼리가 들어오면 즉시 깨어나 일을 하므로 비용을 극적으로 줄일 수 있습니다.\n\nhttps://aws.amazon.com/rds/aurora/serverless/",
    "glossary": {
      "Aurora Serverless": "사용량에 따라 DB 용량이 자동으로 늘었다 줄었다 하며, 안 쓸 땐 아예 멈춰 비용을 아껴주는 서비스",
      "On-demand (온디맨드)": "미리 예약하지 않고 내가 필요할 때 필요한 만큼만 바로 꺼내 쓰는 방식",
      "PostgreSQL": "안정성과 복잡한 쿼리 처리에 강점을 가진 오픈 소스 관계형 데이터베이스"
    }
  },
  {
    "id": 512,
    "question": "회사의 모든 AWS 리소스를 빠짐없이 백업해야 합니다. 특히 태그가 안 달려 있어 백업에서 누락되는 녀석들을 잡아내서 자동으로 백업에 포함시키고 싶다면?",
    "options": [
      "AWS Config로 태그 없는 자원들을 찾아내고, 자동으로 태그를 붙인 뒤 그 태그로 백업 계획을 세웁니다.",
      "돌아가지 않는 모든 자원들을 일단 백업 금고(Vault)에 억지로 다 밀어 넣습니다.",
      "계정 주인들에게 리소스를 전수 조사해서 보고하라고 이메일을 보냅니다.",
      "보안 진단 도구인 Amazon Inspector를 켜서 백업 안 된 자원들을 하나하나 수동으로 고칩니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. AWS Config가 경찰처럼 자원을 감시하다가 태그 없는 녀석을 발견하면 즉시 태그를 달게 합니다(Remediation). 그러면 미리 짜둔 백업 계획이 그 태그를 보고 알아서 백업을 시작하므로 누락 없는 시스템이 완성됩니다.\n\nhttps://docs.aws.amazon.com/config/latest/developerguide/remediation.html",
    "glossary": {
      "AWS Config": "AWS 자원들의 설정 상태를 감시하고, 정해진 규칙을 어기면 알림을 주거나 자동으로 고쳐주는 서비스",
      "Remediation (수정 조치)": "문제가 발견되었을 때 자동으로 올바른 상태로 되돌려놓는 작업",
      "Tag-based Backup": "자원에 붙은 이름표(태그)를 기준으로 백업 대상을 자동으로 분류하고 실행하는 방식"
    }
  },
  {
    "id": 513,
    "question": "사용자가 올린 사진을 여러 기기에 맞게 자동으로 크기 조절(Resize)하려 합니다. 트래픽은 예측 불가능하고, 서버 관리 수고는 제로여야 할 때 최고의 서버리스 설계는?",
    "options": [
      "S3에 사진이 올라올 때마다 람다(Lambda) 함수가 자동 실행되어 크기를 줄이고 다시 저장하게 합니다.",
      "Step Functions를 설계하고, CloudFront에 저장된 정적 파일을 RDS DB로 옮기는 복잡한 로직을 짭니다.",
      "24시간 돌아가는 EC2 웹 서버를 띄워두고, 파이썬 스크립트가 폴더를 계속 감시하게 합니다.",
      "메시지 대기열(SQS)에 작업량을 쌓고, ECS 컨테이너 서버들이 수시로 꺼내가서 처리하게 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. S3에 파일이 들어오는 '이벤트'가 발생하면 람다가 즉시 나타나 크기를 조절하고 사라집니다. 서버를 미리 켜둘 필요가 없고 수만 장의 사진도 동시에 처리할 수 있는 가장 서버리스다운 방식입니다.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/with-s3.html",
    "glossary": {
      "Event-driven (이벤트 기반)": "무언가 일어났을 때(예: 파일 업로드) 그 작업에 반응하여 프로그램이 실행되는 방식",
      "AWS Lambda": "서버 관리 없이 코드만 실행하며, 실행 시간(밀리초)만큼만 비용을 내는 컴퓨팅 서비스",
      "S3 Event Notification": "S3 버킷에 파일이 생기거나 사라질 때 다른 서비스(람다 등)에 신호를 보내는 기능"
    }
  },
  {
    "id": 514,
    "question": "EKS(쿠버네티스) 보안을 위해 외부 인터넷 통로를 다 막았더니, 정작 일꾼 노드들이 대장(제어 플레인)에게 보고를 못 해서 클러스터가 먹통이 됐습니다. 내부적으로 길을 열어주는 방법은?",
    "options": [
      "노드들에게 관리자(IAM) 권한을 더 듬뿍 줘서 보안 벽을 뚫게 만듭니다.",
      "VPC 내부에서만 소통할 수 있는 '인터페이스 VPC 엔드포인트'를 생성해서 노드들의 길을 터줍니다.",
      "노드들을 어쩔 수 없이 공용 인터넷 서브넷으로 다시 옮기고 보안 그룹만 촘촘하게 막습니다.",
      "보안 그룹 설정에서 아웃바운드(나가는 길)를 모든 주소(0.0.0.0/0)에 대해 다 열어버립니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 인터넷을 막았으면 내부 통로를 뚫어야 합니다. 인터페이스 VPC 엔드포인트를 만들면, 노드들이 인터넷 없이도 내부망(PrivateLink)을 통해 쿠버네티스 대장(제어 플레인)과 안전하게 대화할 수 있습니다.\n\nhttps://docs.aws.amazon.com/eks/latest/userguide/private-clusters.html",
    "glossary": {
      "EKS Control Plane (제어 플레인)": "쿠버네티스의 두뇌 역할로, 노드들을 관리하고 명령을 내리는 중앙 시스템",
      "Data Plane (데이터 플레인)": "실제 서비스(컨테이너)가 돌아가는 일꾼 노드들의 집합",
      "PrivateLink (Interface Endpoint)": "서비스를 인터넷 노출 없이 VPC 내부 IP로 안전하게 이용하게 해주는 기술"
    }
  },
  {
    "id": 515,
    "question": "페타바이트급 데이터를 분석하기 위해 Redshift를 도입하려 합니다. Redshift를 쓸 때 얻을 수 있는 장단점이나 특징 3가지는 무엇일까요?",
    "options": [
      "컨테이너 앱에서도 API를 통해 데이터에 쉽게 접근할 수 있는 '데이터 API' 기능을 지원합니다.",
      "데이터 저장 시와 전송 시 모두 강력한 암호화(KMS 등)를 지원해 보안이 튼튼합니다.",
      "일을 안 할 때는 잠시 멈춰서 비용을 아끼는 'Redshift Serverless' 기능을 쓸 수 있습니다.",
      "DB 부담을 줄이기 위해 데이터를 메모리에 미리 담아두는 '캐싱' 서비스 역할을 합니다.",
      "전 세계 수억 명의 동시 접속자를 1초 안에 처리하는 메인 OLTP 데이터베이스로 딱입니다.",
      "콘솔에서 클릭 몇 번으로 주 DB를 따라다니는 '보조 복제본(Standby)'을 즉시 생성합니다."
    ],
    "answer": [0, 1, 2],
    "explanation": "정답은 A, B, C입니다. Redshift는 단순한 창고가 아닙니다. 앱을 위한 데이터 API(A), 철저한 암호화 보안(B), 그리고 분석할 때만 비용을 내는 서버리스 옵션(C)까지 갖춘 현대적 데이터 분석의 핵심입니다.\n\nhttps://aws.amazon.com/redshift/",
    "glossary": {
      "Amazon Redshift": "방대한 양의 데이터를 빠르게 분석할 수 있도록 최적화된 클라우드 데이터 웨어하우스(DW)",
      "Data Warehouse (데이터 웨어하우스)": "의사 결정을 돕기 위해 여러 곳의 데이터를 한데 모아 분석하기 좋게 정리해둔 창고",
      "Data API": "복잡한 DB 접속 설정 없이 웹 호출(HTTP)만으로 데이터를 가져올 수 있게 돕는 인터페이스"
    }
  },
  {
    "id": 516,
    "question": "금융 정보 API를 제공하는데, 평소엔 조용하다가 특정 시간에만 요청이 미친 듯이 몰립니다. 첫 요청도 버벅임 없이 '낮은 대기 시간'으로 응답해야 할 때 최고의 구성은?",
    "options": [
      "부하 분산 장치(ALB) 뒤에 컨테이너 서버(ECS)를 빵빵하게 준비해둡니다.",
      "API 게이트웨이와 람다를 쓰되, 미리 워밍업을 시켜두는 '프로비저닝된 동시성'을 활성화합니다.",
      "언제든 확장 가능한 쿠버네티스(EKS) 클러스터를 구축하고 ALB로 트래픽을 나눠 받습니다.",
      "람다의 '예약된 동시성'을 설정해서 최대 실행 횟수만 꽉 묶어 관리합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 람다의 준비 시간(Cold Start)을 없애려면 '프로비저닝된 동시성'이 답입니다. 일꾼들을 유료 대기실에서 미리 대기시키기 때문에, 트래픽이 몰리는 첫 요청부터 지연 시간 없이 즉각적으로 응답할 수 있습니다.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    "glossary": {
      "Provisioned Concurrency": "람다 함수를 미리 실행 준비 상태로 활성화해두어 지연 시간(Cold Start)을 없애는 옵션",
      "Cold Start": "잠들어 있던 서버리스 함수가 처음 실행될 때 자원을 할당받느라 발생하는 아주 짧은 지연 시간",
      "Low Latency (낮은 대기 시간)": "사용자가 요청했을 때 결과가 나오기까지의 시간이 매우 짧은 상태"
    }
  },
  {
    "id": 517,
    "question": "서버 접속 기록(SSM 세션 매니저 로그)을 평생 보관하기 위해 S3 버킷으로 자동 전송하려 합니다. 가장 운영이 편한 설정법은?",
    "options": [
      "Systems Manager 콘솔 설정 메뉴에서 'S3 로깅 활성화'를 체크하고 버킷 이름을 적습니다.",
      "CloudWatch 에이전트를 모든 서버에 깔고, 로그 그룹에서 S3로 내보내기 버튼을 누릅니다.",
      "매일 밤 서버 로그를 S3로 수작업 업로드하는 SSM 자동화 문서를 만들어 실행합니다.",
      "Kinesis Data Firehose로 로그를 쏘고, 그걸 다시 S3로 배달하는 복잡한 스트리밍 경로를 짭니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 가장 좋은 해결책은 기본 설정에 있습니다. SSM 세션 매니저는 자체적으로 S3 로깅 기능을 지원합니다. 복잡한 수집 프로그램을 깔 필요 없이 설정 창에서 체크 한 번만 하면 모든 접속 기록이 안전하게 보관됩니다.\n\nhttps://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html",
    "glossary": {
      "AWS Systems Manager Session Manager": "비밀번호나 SSH 키 없이도 브라우저에서 안전하게 서버 터미널에 접속하게 돕는 서비스",
      "Logging (로깅)": "시스템에서 일어나는 모든 활동이나 오류를 기록으로 남겨두는 것",
      "Centralized Logging (중앙 집중 로깅)": "여러 서버의 로그를 한곳(S3 등)에 모아 관리하고 분석하는 것"
    }
  },
  {
    "id": 518,
    "question": "RDS(데이터베이스) 용량이 꽉 차서 빨간불이 들어왔습니다. 서비스 중단 없이, 그리고 관리자가 밤새 모니터링할 필요 없이 자동으로 용량을 늘리려면?",
    "options": [
      "RDS 설정에서 '스토리지 자동 확장(Auto Scaling)' 기능을 활성화합니다.",
      "DB 인스턴스의 '서버 체급(Instance Class)'을 수동으로 한 단계 위로 올립니다.",
      "저장소 타입을 일반 SSD에서 가장 비싼 '프로비저닝된 IOPS'로 변경합니다.",
      "DB를 백업하고 더 큰 용량의 새 DB를 만든 뒤 데이터를 일일이 복원합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 데이터 증가를 일일이 감시하기 힘들다면 '스토리지 자동 확장'을 켜세요. 공간이 부족해지면 RDS가 알아서 하드디스크를 늘려줍니다. 서비스 중단도 없고 운영자의 밤샘 모니터링도 필요 없는 편리한 기능입니다.\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling",
    "glossary": {
      "RDS Storage Auto Scaling": "데이터 증가에 맞춰 데이터베이스의 저장 공간을 자동으로 추가해주는 기능",
      "Downtime (다운타임)": "시스템이 장애나 점검 때문에 정상적으로 작동하지 않는 시간",
      "Provisioned IOPS": "용량보다는 입출력 '속도'를 빠르게 보장받고 싶을 때 쓰는 유료 하드디스크 옵션"
    }
  },
  {
    "id": 519,
    "question": "우리 회사가 만든 따끈따끈한 분석 도구 모음(템플릿)을 전 세계 고객들에게 '셀프 서비스' 형태로 배포하고 싶습니다. 고객이 클릭 한 번으로 똑같은 환경을 구축하게 돕는 백화점은?",
    "options": [
      "CloudFormation 템플릿 파일들을 이메일로 고객들에게 일일이 챙겨 보냅니다.",
      "승인된 제품들을 모아놓은 쇼핑몰인 'AWS Service Catalog'에 제품으로 등록합니다.",
      "Systems Manager의 자동화 문서를 만들어 고객 계정마다 직접 실행해주러 다닙니다.",
      "AWS Config 항목을 생성해서 고객들이 규정에 잘 맞게 설치했는지 감시만 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 검증된 솔루션을 쇼핑몰처럼 제공하는 Service Catalog가 주인공입니다. 관리자가 설계도(CloudFormation)를 상품으로 등록해두면, 사용자는 권한 내에서 '배포' 버튼만 눌러 표준화된 환경을 스스로 구축할 수 있습니다.\n\nhttps://aws.amazon.com/servicecatalog/",
    "glossary": {
      "AWS Service Catalog": "조직 내에서 승인된 IT 서비스를 생성하고 관리하며 사용자가 직접 배포할 수 있게 돕는 포털 서비스",
      "Self-service (셀프 서비스)": "상위 관리자의 도움 없이 사용자가 스스로 필요한 자원을 골라 사용하는 방식",
      "Governance (거버넌스)": "기업의 IT 자산이 정해진 규칙과 원칙 내에서 투명하고 안전하게 관리되는 체계"
    }
  },
  {
    "id": 520,
    "question": "새로운 웹 앱의 트래픽이 얼마나 나올지 도무지 감이 안 잡힙니다. DynamoDB를 쓰긴 할 건데, 비용을 가장 알뜰하게 가져가면서도 갑작스러운 트래픽에 대응하려면?",
    "options": [
      "평범한 프로비저닝 모드를 선택하고, Auto Scaling 기능을 최대치로 설정해둡니다.",
      "Standard 테이블 클래스를 선택하고, 쓰는 만큼만 돈을 내는 '온디맨드(On-demand)' 모드로 설정합니다.",
      "자주 안 쓰는 데이터용인 Standard-IA 클래스를 쓰고, 성능을 위해 용량을 미리 꽉 채워둡니다.",
      "Standard-IA 클래스에 온디맨드 모드를 결합해 극단적인 가성비 설계를 시도합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 트래픽 예측이 불가능할 땐 '온디맨드 모드'가 정답입니다. 용량 계산 필요 없이 트래픽이 몰리면 받아주고 안 쓰면 돈을 안 받습니다. 여기에 일반 앱에 최적화된 Standard 클래스를 쓰는 것이 가장 경제적입니다.\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand",
    "glossary": {
      "DynamoDB On-demand Mode": "초당 요청 횟수를 미리 예약하지 않고, 실제로 발생한 요청 수만큼만 요금을 지불하는 모드",
      "Standard-IA (DynamoDB)": "자주 접근하지 않는 데이터를 저장하기 위해 저장 비용은 낮추고 읽기 비용은 높인 테이블 등급",
      "Provisioning (프로비저닝)": "필요한 자원을 미리 준비해두고 예약하는 행위"
    }
  },
  {
    "id": 521,
    "question": "중앙 관리 계정에서 돌아가는 보고용 앱이, 수십 개의 비즈니스 계정에 흩어진 DynamoDB 테이블을 읽어야 합니다. 가장 안전하고 정석적인 인증 방법은?",
    "options": [
      "각 계정의 DB 암호를 Secrets Manager에 넣어두고, 중앙 앱이 30일마다 번호를 조회해 접속합니다.",
      "계정마다 전용 IAM 계정을 만들고, 그 비밀키(Access Key)를 앱 소스 코드에 하드코딩해서 씁니다.",
      "비즈니스 계정들이 중앙 앱을 '신뢰'하는 역할을 만들게 하고, 중앙 앱이 'AssumeRole'로 역할을 갈아입고 들어갑니다.",
      "모든 DB를 ACM(인증서 관리자)과 연동하고 보안 인증서를 발급받아 복잡한 인증 절차를 밟습니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 다른 계정의 DB를 읽을 때는 권한을 임시로 빌리는 'AssumeRole'이 정석입니다. 비즈니스 계정들이 만든 역할을 중앙 앱이 갈아입고 들어가면 비밀번호를 주고받을 필요가 없어 보안과 관리 편의성이 비약적으로 상승합니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
    "glossary": {
      "Cross-account IAM Role": "다른 AWS 계정에 속한 사용자나 서비스에 특정 자원을 사용할 수 있게 허용하는 보안 역할",
      "STS AssumeRole": "일시적으로 다른 계정의 역할을 맡아 보안 토큰을 발급받는 AWS의 표준 인증 방식",
      "Least Privilege (최소 권한)": "업무 수행에 필요한 권한만 딱 맞춰서 부여하는 보안의 대원칙"
    }
  },
  {
    "id": 522,
    "question": "EKS(쿠버네티스) 클러스터가 낮에는 바쁘고 밤에는 한가합니다. 인프라 운영자가 밤잠을 설칠 필요 없이, 워크로드에 맞춰 자동으로 서버 개수를 늘리고 줄이려면? (2개 선택)",
    "options": [
      "람다(Lambda) 함수를 짜서 주기적으로 EKS의 노드 개수를 수동으로 조정합니다.",
      "Kubernetes Metrics Server를 설치하고 '수평적 포드 자동 확장(HPA)'을 켭니다.",
      "Kubernetes '클러스터 자동 크기 조정기(Cluster Autoscaler)'를 써서 실제 노드(서버) 숫자를 관리합니다.",
      "모든 트래픽을 API Gateway로 먼저 보낸 뒤 속도를 강제로 조절합니다.",
      "App Mesh를 사용해 네트워크 지표를 관찰하며 사람이 직접 판단해 늘립니다."
    ],
    "answer": [1, 2],
    "explanation": "정답은 B와 C입니다. 쿠버네티스 자동확장은 2단계입니다. 앱(포드)을 늘려주는 HPA(B)가 필요하고, 공간이 부족해지면 진짜 서버(노드)를 늘려주는 Cluster Autoscaler(C)가 출동해야 24시간 자율 주행 아키텍처가 완성됩니다.\n\nhttps://docs.aws.amazon.com/eks/latest/userguide/autoscaling.html",
    "glossary": {
      "HPA (Horizontal Pod Autoscaler)": "CPU나 메모리 사용량에 따라 쿠버네티스 포드(앱 실행 단위)의 개수를 자동으로 조절하는 기능",
      "Cluster Autoscaler": "실행 중인 포드들을 수용할 서버(노드) 공간이 부족할 때 실제 EC2 인스턴스를 늘려주는 도구",
      "Node (노드)": "쿠버네티스 클러스터에서 실제 컨테이너들이 돌아가는 물리적 혹은 가상의 서버(EC2)"
    }
  },
  {
    "id": 523,
    "question": "마이크로서비스들이 여러 DynamoDB 테이블에서 복잡하게 데이터를 찾아와야 하는데, DB 성능에는 1도 영향을 미치고 싶지 않습니다. 운영이 가장 편한 데이터 분석/검색 통로는?",
    "options": [
      "AppSync 파이프라인 해석기를 설계해 모든 요청을 중앙에서 갈무리합니다.",
      "CloudFront 엣지에서 람다를 돌려 가장 가까운 리전의 DB를 찌르게 합니다.",
      "API Gateway 뒤에 거대한 람다를 두고, 모든 데이터를 한데 모아 직접 가공하는 코드를 짭니다.",
      "Amazon Athena의 'Federated Query' 기능을 써서 여러 DB 테이블을 한 번에 쿼리합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 여러 곳에 흩어진 데이터를 한눈에 모아보는 '연합 쿼리(Federated Query)'를 써보세요. Athena는 서버 없이 작동하며 DB에 성능 영향을 주지 않고 SQL로 원하는 정보를 쏙쏙 골라낼 수 있게 해줍니다.\n\nhttps://aws.amazon.com/athena/features/federated-query/",
    "glossary": {
      "Amazon Athena Federated Query": "데이터를 한곳으로 옮기지 않고도 여러 데이터 원천(DB, 파일 등)을 한 번에 SQL로 조회하는 기술",
      "Microservices (마이크로서비스)": "거대한 앱을 여러 개의 작은 독립적인 기능 단위로 쪼개서 운영하는 방식",
      "Operational Efficiency (운영 효율)": "최소한의 자원과 노력으로 목표를 달성하는 시스템의 효율성"
    }
  },
  {
    "id": 524,
    "question": "계정에서 '권한 없음(Unauth)' 오류가 자꾸 발생해서 원인을 찾아야 합니다. CloudTrail 로그가 너무 방대해서 눈이 빠질 것 같은데, 가장 쉽고 빠르게 특정 오류만 골라내는 방법은?",
    "options": [
      "AWS Glue로 로그를 분석하기 위해 복잡한 사용자 정의 스크립트를 짭니다.",
      "AWS Batch 시스템을 가동해 수억 건의 로그를 전수 조사하는 대작업을 시작합니다.",
      "Amazon Athena를 써서 CloudTrail 로그에 대고 SQL 문으로 '오류만 찾아줘!'라고 쿼리를 날립니다.",
      "QuickSight로 예쁜 대시보드를 만들어서 오류 그래프가 튀는 부분을 시각적으로 찾습니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 방대한 텍스트 로그 파일 속에서 보물찾기할 때 최고의 도구는 Athena입니다. S3에 담긴 로그를 연결만 하면 익숙한 SQL로 수 초 만에 특정 오류만 골라낼 수 있어 원인 파악이 매우 빨라집니다.\n\nhttps://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html",
    "glossary": {
      "Amazon Athena": "S3에 담긴 대량의 파일을 서버 없이 표준 SQL(Select문 등)로 즉시 쿼리할 수 있게 해주는 서비스",
      "AWS CloudTrail": "누가 언제 어디서 우리 계정의 리소스를 건드렸는지 모든 발자취를 남기는 감사 도구",
      "Access Denied (액세스 거부)": "권한이 없거나 부족해서 요청이 거절당했을 때 발생하는 보안 오류"
    }
  },
  {
    "id": 525,
    "question": "우리 회사의 현재 클라우드 사용 비용을 앱 화면에 띄우고 싶습니다. 올해 얼마 썼는지, 그리고 내년엔 얼마 나올지 '예측 데이터'까지 코딩으로 가져올 수 있는 서비스는?",
    "options": [
      "AWS Cost Explorer API를 사용하여 사용 비용과 예측 관련 데이터를 호출합니다.",
      "Cost Explorer에서 매달 엑셀(.csv) 파일을 손수 다운로드해서 데이터베이스에 수동 입력합니다.",
      "AWS 예산(Budgets) 작업을 설정해서 FTP 서버로 비용 보고서를 자동 전송하게 만듭니다.",
      "AWS 예산 보고서를 만들고, 이메일(SMTP)로 날아오는 내용을 봇이 읽어서 가공하게 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 비용 데이터를 우리 시스템에 녹여내고 싶다면 'Cost Explorer API'가 정답입니다. 지출 내역뿐만 아니라 AI가 계산한 향후 12개월 예측치까지 코드로 가져올 수 있어 스마트한 대시보드 구축에 최적입니다.\n\nhttps://aws.amazon.com/aws-cost-management/aws-cost-explorer/",
    "glossary": {
      "AWS Cost Explorer API": "AWS 비용 및 사용량 정보를 프로그래밍 방식으로 분석하고 가져올 수 있게 해주는 창구",
      "Cost Forecasting (비용 예측)": "과거 사용 패턴을 분석하여 미래의 예상 지출 금액을 미리 알려주는 기능",
      "Programmatic Access (프로그래밍 방식 접근)": "웹 사이트 버튼 클릭 대신 코드로 명령을 내려 데이터를 주고받는 방식"
    }
  }
];