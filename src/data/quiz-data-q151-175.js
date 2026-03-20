export const quizData = [
  {
    "id": 151,
    "question": "회사가 온프레미스 데이터 센터를 AWS로 마이그레이션하려 합니다. 규정 준수의 이유로 'ap-northeast-3(오사카)' 리전만 사용해야 하며, 결코 VPC를 인터넷에 연결해서는 안 됩니다. 이 까다로운 조건을 만족하는 가장 안전한 방법 두 가지를 고른다면?",
    "options": [
      "AWS Control Tower의 가드레일을 사용하여 인터넷 액세스를 차단하고, 지정된 리전 외의 접근을 거부합니다.",
      "AWS WAF 규칙을 통해 인터넷 접속을 막고, 계정 설정에서 리전 접근 권한을 제한합니다.",
      "AWS Organizations의 서비스 제어 정책(SCP)을 설정하여 인터넷 접속을 차단하고, 타 리전 사용을 금지합니다.",
      "VPC 네트워크 ACL에서 모든 아웃바운드 트래픽을 거부하고, 사용자별로 리전 제한 IAM 정책을 부여합니다.",
      "AWS Config 규칙을 활성화하여 인터넷 게이트웨이 생성을 감시하고 타 리전 리소스를 탐지합니다."
    ],
    "answer": [0, 2],
    "explanation": "정답은 A와 C입니다. 조직 전체에서 특정 리전만 사용을 강제하고 인터넷 접속을 원천 차단하려면 AWS Control Tower의 가드레일과 Organizations의 SCP(서비스 제어 정책)가 가장 강력하고 효과적인 수단입니다.\n\nhttps://aws.amazon.com/organizations/",
    "glossary": {
      "AWS Control Tower": "여러 계정을 안전하게 관리하고 보안 가이드라인(가드레일)을 자동으로 적용해주는 서비스",
      "SCP (Service Control Policy)": "조직 내 계정들이 할 수 있는 행동의 최대 한도를 정하는 가장 강력한 보안 정책",
      "ap-northeast-3": "일본 오사카 리전의 고유 코드이름"
    }
  },
  {
    "id": 152,
    "question": "신입 사원 교육용 웹 앱이 매일 12시간만 사용됩니다. 회사는 비용을 획기적으로 아끼기 위해 MySQL용 RDS 인스턴스를 사용하지 않는 시간에는 꺼두고 싶어 합니다. 이를 자동화하기 위한 가장 세련된 방법은?",
    "options": [
      "Systems Manager를 통해 DB 자동 시작/중지 설정을 구성합니다.",
      "DB가 꺼진 동안 캐시 데이터를 보여줄 수 있게 ElastiCache를 도입합니다.",
      "EC2 인스턴스를 띄우고 크론탭(Cron) 작업을 설정하여 RDS 상태를 제어합니다.",
      "Lambda 함수로 시작/중지 로직을 짜고, EventBridge 예약 규칙으로 특정 시간에 실행되게 합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 사용하지 않는 시간에 DB 비용을 0으로 만들려면 Lambda와 EventBridge를 사용하세요. 정해진 시간에만 람다가 깨어나 RDS를 끄거나 켜게 하면 운영 부담 없이 극강의 효율을 낼 수 있습니다.\n\nhttps://aws.amazon.com/eventbridge/",
    "glossary": {
      "Lambda": "서버를 띄우지 않고 코드만 실행시켜 돈을 아끼는 서버리스 컴퓨팅 서비스",
      "EventBridge": "특정 시간이나 이벤트에 맞춰 다음 동작을 실행시켜주는 클라우드의 스케줄러",
      "RDS (Relational Database Service)": "AWS가 설치부터 패치까지 다 해주는 관리형 데이터베이스"
    }
  },
  {
    "id": 153,
    "question": "벨소리 판매 사이트에서 128KB 이상의 파일 수백만 개를 S3 Standard에 보관 중입니다. 그런데 90일이 지난 파일은 거의 인기가 없네요. 파일 접근성은 유지하면서 돈을 가장 많이 아끼는 방법은?",
    "options": [
      "처음부터 모든 파일을 S3 Standard-IA 등급에 저장합니다.",
      "S3 Intelligent-Tiering으로 옮겨서 90일 뒤에 더 싼 계층으로 가게 합니다.",
      "S3 인벤토리를 보고 90일 지난 파일을 수동으로 Standard-IA로 옮깁니다.",
      "S3 수명 주기 정책을 만들어 90일 뒤에 자동으로 Standard-IA로 등급을 내립니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 파일의 나이에 따라 자동으로 등급을 낮추고 싶을 땐 S3 수명 주기 정책(Lifecycle)이 해결사입니다. 90일 지난 파일은 조금 더 저렴한 Standard-IA로 자동으로 이사 보내 비용을 아끼세요.\n\nhttps://aws.amazon.com/s3/storage-classes/",
    "glossary": {
      "S3 Standard-IA (Infrequent Access)": "자주 보지는 않지만 볼 때는 즉시 나와야 하는 데이터를 위한 저렴한 저장소",
      "Lifecycle Policy": "파일의 보관 기간에 따라 자동으로 등급을 조절해주는 자동 이사 규칙"
    }
  },
  {
    "id": 154,
    "question": "의료 시험 결과 파일을 S3에 저장해야 합니다. 과학자만 새 파일을 추가할 수 있고 나머지는 읽기만 가능해야 하며, 어떤 누구도 1년 동안은 파일을 수정하거나 지울 수 없게 못 박아두려 합니다. 어떤 기능을 써야 할까요?",
    "options": [
      "거버넌스 모드에서 1년 동안 법적 보존 수준으로 S3 Object Lock을 사용합니다.",
      "규정 준수(Compliance) 모드에서 보존 기간을 365일로 설정한 S3 Object Lock을 사용합니다.",
      "IAM 역할과 버킷 정책을 써서 모든 사용자의 삭제 및 수정 권한을 원천 차단합니다.",
      "람다 함수를 써서 객체가 수정될 때마다 이전 해시값을 체크하여 원복시킵니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 1년간 절대 삭제나 수정을 못 하게 못 박아두려면 S3 Object Lock의 '규정 준수(Compliance)' 모드가 최선입니다. 관리자나 루트 계정도 잠금을 해제할 수 없는 가장 강력한 데이터 보호 장치입니다.\n\nhttps://aws.amazon.com/s3/features/object-lock/",
    "glossary": {
      "S3 Object Lock": "한 번 저장한 파일을 일정 기간 동안 절대 수정하거나 지우지 못하게 잠그는 보안 기능",
      "Compliance Mode": "관리자나 루트 계정도 잠금을 해제할 수 없는 가장 강력한 데이터 보호 모드"
    }
  },
  {
    "id": 155,
    "question": "대형 미디어사가 전 세계 사용자에게 비밀스러운 파일을 안전하고 빠르게 배달하려 합니다. 파일은 S3 버킷에 있고 사용자의 위치에 상관없이 빛의 속도로 응답해야 한다면, 어떤 서비스를 붙여야 할까요?",
    "options": [
      "DataSync를 써서 S3와 앱을 동기화합니다.",
      "Global Accelerator를 연결하여 네트워크 속도를 높입니다.",
      "CloudFront를 배포하여 S3와 엣지 서버를 연결합니다.",
      "SQS 대기열을 써서 S3 파일 요청을 순차적으로 처리합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 전 세계 사용자에게 빛의 속도로 파일을 전달하려면 CloudFront(CDN)를 사용하세요. S3 원본 대신 전 세계 곳곳의 엣지 서버에서 콘텐츠를 바로 던져주어 대기 시간을 획기적으로 줄여줍니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "CloudFront": "전 세계 곳곳에 서버를 두고 콘텐츠를 빠르게 배달하는 서비스(CDN)",
      "Edge Location": "CloudFront라는 배달부가 손님에게 물건을 빨리 주려고 미기 대기 중인 동네 거점",
      "Caching": "자주 찾는 데이터를 가까운 곳에 임시로 저장해두고 바로 꺼내 쓰는 기술"
    }
  },
  {
    "id": 156,
    "question": "회사에서 온갖 실시간 스트림 데이터와 배치 데이터를 한데 모아 분석하려 합니다. S3에 데이터를 준비한 뒤, 나중에 필요할 때마다 일회성 쿼리를 날리고 시각화 도구로 KPI를 보고 싶습니다. 운영 오버헤드가 가장 적은 조합은? (2개 선택)",
    "options": [
      "일회성 쿼리에는 Amazon Athena를 쓰고, 시각화에는 QuickSight를 사용합니다.",
      "Kinesis Data Analytics로 쿼리를 날리고, QuickSight로 대시보드를 만듭니다.",
      "Lambda 함수를 짜서 데이터를 Redshift 클러스터로 실시간으로 옮깁니다.",
      "Glue ETL 작업을 써서 JSON으로 바꾼 뒤 OpenSearch 클러스터에 로드합니다.",
      "Lake Formation의 청사진을 써서 데이터 소스를 식별하고, Glue로 S3에 Parquet 형식으로 저장합니다."
    ],
    "answer": [0, 4],
    "explanation": "정답은 A와 E입니다. 가장 세련된 데이터 레이크 구축은 Lake Formation으로 뼈대를 잡고, S3에 효율적인 Parquet 포맷으로 저장한 뒤, Athena로 필요할 때만 SQL을 날려 분석하는 서버리스 방식입니다.\n\nhttps://aws.amazon.com/athena/",
    "glossary": {
      "Amazon Athena": "S3에 있는 파일을 마치 데이터베이스처럼 SQL로 쿼리할 수 있는 서버리스 서비스",
      "AWS Lake Formation": "데이터 레이크를 복잡한 설정 없이 쉽고 안전하게 구축해주는 관리 도구",
      "Apache Parquet": "데이터를 세로(컬럼)로 쌓아 저장 효율과 분석 속도를 극대화한 파일 형식"
    }
  },
  {
    "id": 157,
    "question": "Aurora PostgreSQL을 쓰는 회사가 모든 데이터를 5년 동안 보관하고 그 뒤엔 지워야 하며, 기록용 감사 로그는 평생 보관해야 합니다. 이 요구 사항을 가장 깔끔하게 만족하는 조합은? (2개 선택)",
    "options": [
      "DB 클러스터의 수동 스냅샷을 매번 직접 생성합니다.",
      "자동 백업에 대한 수명 주기 정책을 별도로 만듭니다.",
      "자동 백업 보존 기간을 5년으로 설정합니다.",
      "DB 클러스터의 감사 로그를 CloudWatch Logs로 내보내도록 설정합니다.",
      "AWS Backup을 사용하여 5년 보존 정책으로 백업 계획을 수립합니다."
    ],
    "answer": [3, 4],
    "explanation": "정답은 D와 E입니다. 백업은 AWS Backup에게 5년 보관 정책을 맡기고, 감사 로그는 CloudWatch Logs로 쏴준 뒤 보관 기간을 '무기한'으로 설정하세요. 법규 준수와 운영 편의를 동시에 잡는 설계입니다.\n\nhttps://aws.amazon.com/backup/",
    "glossary": {
      "AWS Backup": "여러 AWS 서비스의 백업을 한곳에서 중앙 관리하고 보관 기간을 정하는 완전 관리형 서비스",
      "CloudWatch Logs": "애플리케이션이나 시스템의 로그 데이터를 수집하고 저장하는 모니터링 서비스"
    }
  },
  {
    "id": 158,
    "question": "콘서트 영상을 전 세계로 실시간 스트림하고, 나중에 다시 보기도 가능하게 만들려고 합니다. 전 세계 관객이 끊김 없이 영상을 즐길 수 있게 성능을 높여주는 일등 공신은?",
    "options": [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Amazon Route 53",
      "Amazon S3 Transfer Acceleration"
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 실시간 콘서트 중계나 다시 보기 모두 전 세계 관객에게 끊김 없이 영상을 전달하려면 CloudFront가 필수입니다. 대규모 동시 접속자의 부하를 분산하고 전송 성능을 극대화해줍니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "CloudFront": "영상이나 사진 같은 무거운 데이터를 전 세계로 빠르게 쏘아주는 배달 네트워크(CDN)",
      "Live Streaming": "일어나는 상황을 지연 없이 실시간으로 전 세계에 중계하는 방식"
    }
  },
  {
    "id": 159,
    "question": "서버리스 앱이 봇넷(Botnet)의 가짜 요청 공격을 받아 트래픽이 폭발했습니다. 나쁜 놈들의 요청만 쏙 골라내서 차단하고 싶을 때 필요한 조치는? (2개 선택)",
    "options": [
      "진짜 사용자에게만 줄 API 키로 사용량 계획(Usage Plan)을 만듭니다.",
      "람다 함수 코드 안에 특정 IP를 차단하는 로직을 직접 짜 넣습니다.",
      "악성 요청을 걸러내는 AWS WAF 규칙을 만들어서 적용합니다.",
      "공개 API를 비공개 전용(Private)으로 바꿉니다.",
      "사용자마다 IAM 역할을 부여해서 호출할 때 역할을 맡게 만듭니다."
    ],
    "answer": [0, 2],
    "explanation": "정답은 A와 C입니다. 봇들의 가짜 요청으로부터 서버리스 앱을 지키려면 입구인 API Gateway에 WAF(웹 방화벽)를 달고, 진짜 사용자 증명인 'API 키'를 사용량 계획과 함께 도입하는 것이 정석입니다.\n\nhttps://aws.amazon.com/waf/",
    "glossary": {
      "AWS WAF (Web Application Firewall)": "웹사이트로 들어오는 악의적인 요청이나 공격을 골라내서 차단하는 똑똑한 백신 같은 서비스",
      "API Key": "정식 승인된 앱이나 사용자만 API를 호출할 수 있게 해주는 고유 암호값"
    }
  },
  {
    "id": 160,
    "question": "매달 300MB 정도의 JSON 로그를 생성하는 분석 앱이 있는데, 사고를 대비해 30일간 백업해두려 합니다. 필요할 땐 0.1초 만에(밀리초 단위) 즉시 꺼내 볼 수 있어야 할 때, 가장 가성비 좋은 저장소는?",
    "options": [
      "OpenSearch Service (Elasticsearch)",
      "Amazon S3 Glacier",
      "Amazon S3 Standard",
      "Amazon RDS for PostgreSQL"
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 300MB 정도의 소량 데이터를 0.1초 만에 즉시 꺼내 봐야 한다면 S3 Standard가 가장 가성비 좋습니다. 저렴한 비용으로 상시 대기 중인 데이터를 딜레이 없이 바로 불러올 수 있습니다.\n\nhttps://aws.amazon.com/s3/",
    "glossary": {
      "S3 Standard": "언제든 즉시 데이터를 꺼낼 수 있고 안정성도 뛰어난 기본형 저장소",
      "JSON": "데이터를 주고받을 때 쓰는 텍스트 기반의 가벼운 문서 형식"
    }
  },
  {
    "id": 161,
    "question": "회사에서 수천 번 실행되는 파이썬 앱을 AWS로 옮기려 합니다. 이 앱은 JSON 문서를 처리해서 DB에 넣는 아주 간단한 일만 합니다. 관리할 것도 없고 확장성은 최강이면서 중단 없이 돌아가게 만들려면 어떤 조합이 좋을까요?",
    "options": [
      "S3에 파일을 넣고, 여러 대의 EC2 서버에서 파이썬을 돌려 처리한 뒤 Aurora에 저장합니다.",
      "S3에 파일이 들어오면 람다 함수가 자동으로 깨어나서 처리한 뒤 Aurora에 저장합니다.",
      "EBS 볼륨에 파일을 담고, 여러 서버에 동시 연결해서 처리한 뒤 RDS에 저장합니다.",
      "SQS 대기열에 메시지를 넣고, ECS 클러스터에서 컨테이너로 처리한 뒤 RDS에 저장합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. JSON 문서를 처리하는 간단한 작업은 '서버리스'인 람다와 오로라 DB에게 맡기세요. S3에 파일이 들어올 때만 람다가 알아서 일하고 사라지니 운영 수고와 비용을 동시에 아낄 수 있습니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "Lambda": "서버를 띄우지 않고 코드만 실행시켜 돈을 아끼는 서버리스 컴퓨팅 서비스",
      "Aurora DB": "클라우드 환경에 최적화된 고성능, 자동 관리형 데이터베이스",
      "Serverless": "서버 인프라 관리를 AWS에 전부 맡기고 서비스 개발에만 집중하는 방식"
    }
  },
  {
    "id": 162,
    "question": "재무 위험 모델링을 위해 수백 대의 스팟 인스턴스를 굴리는 HPC 인프라를 구축하려 합니다. 수천 개의 고성능 결과 파일을 읽고 써야 하며, 이 파일들을 장기간 보관할 S3와도 찰떡궁합이어야 합니다. 어떤 파일 시스템을 써야 할까요?",
    "options": [
      "Amazon S3와 통합된 Amazon FSx for Lustre",
      "Amazon S3와 통합된 Windows 파일 서버용 Amazon FSx",
      "EBS 볼륨과 통합된 Amazon S3 Glacier",
      "EBS gp2 볼륨과 통합된 VPC 엔드포인트 S3"
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 슈퍼컴퓨팅(HPC)의 엄청난 데이터 쓰기 속도를 감당하면서 S3와 찰떡궁합인 파일 시스템은 FSx for Lustre입니다. 고도의 병렬 처리와 S3 데이터 연동을 시원시원하게 처리해줍니다.\n\nhttps://aws.amazon.com/fsx/lustre/",
    "glossary": {
      "HPC (High Performance Computing)": "복잡한 계산을 고속으로 처리하는 슈퍼컴퓨팅 기술",
      "FSx for Lustre": "수백 개의 서버가 동시에 고속으로 데이터를 읽고 써야 하는 연구/분석용 파일 시스템",
      "I/O (Input/Output)": "데이터를 읽고 쓰는 입출력 작업"
    }
  },
  {
    "id": 163,
    "question": "온프레미스에서 만든 컨테이너 앱을 AWS로 이사시키려 합니다. 서비스 시작하자마자 수천 명이 몰릴 텐데, 서버 한 대 한 대 관리할 자신은 없고 확장은 번개처럼 됐으면 좋겠습니다. 설계자가 알려줄 최상의 비책은?",
    "options": [
      "ECR에 이미지를 담고, Fargate 기반의 ECS 클러스터로 실행하며 대상 추적 오토 스케일링을 겁니다.",
      "ECR에 이미지를 담고, EC2 기반의 ECS 클러스터로 실행하며 대상 추적 오토 스케일링을 겁니다.",
      "EC2에 직접 이미지를 저장하고, 여러 가용 영역에 분산 배치한 뒤 CPU 봐가며 수동으로 늘립니다.",
      "컨테이너가 담긴 AMI 이미지를 구워두고, 오토 스케일링 그룹으로 EC2를 띄웁니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 덩치 큰 앱을 컨테이너로 쪼개서 옮길 땐 Fargate(ECS)를 선택하세요. 서버 관리 고민 없이 컨테이너만 던져주면 알아서 늘어나고 줄어드는 현대적인 마이크로서비스 환경이 완성됩니다.\n\nhttps://aws.amazon.com/fargate/",
    "glossary": {
      "AWS Fargate": "서버 관리 없이 컨테이너를 실행할 수 있는 서버리스 엔진",
      "ECS (Elastic Container Service)": "수많은 컨테이너를 효율적으로 배포하고 관리하는 플랫폼",
      "Auto Scaling": "손님 수에 맞춰 서버 대수를 알아서 넣고 빼주는 자동 조절 기능"
    }
  },
  {
    "id": 164,
    "question": "보내는 쪽과 받는 쪽 애플리케이션 사이에 메시지를 중계하려 합니다. 한 시간에 1,000개 정도 메시지가 오가는데, 처리하는 데 최대 2일이나 걸릴 수도 있습니다. 혹시나 처리에 실패해도 다른 메시지는 정상적으로 흘러가게 보관해두려면 무엇을 써야 할까요?",
    "options": [
      "Redis를 설치한 EC2 서버를 띄워서 중간 저장소로 씁니다.",
      "Kinesis Data Streams로 메시지를 받고 클라이언트 라이브러리(KCL)로 연결합니다.",
      "SQS 대기열로 연결하고, 처리에 실패한 건 '배달 못한 편지 대기열(DLQ)'로 모이게 합니다.",
      "SNS 주제를 만들고 받는 쪽 애플리케이션을 구독자로 등록하여 푸시 알림을 보냅니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 며칠씩 걸리는 작업을 중계할 땐 SQS 바구니를 쓰세요. 특히 실패한 일감만 골라 담는 '배달 못한 편지 대기열(DLQ)'을 설정해두면 나머지 작업에 영향 없이 문제를 추적할 수 있어 든든합니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "SQS (Simple Queue Service)": "시스템 사이에서 메시지를 임시로 보관하고 전달해주는 할 일 목록 바구니",
      "DLQ (Dead Letter Queue)": "끝내 처리되지 못한 메시지들을 모아놓는 안전 구역(원인 분석용)",
      "Decoupling": "시스템끼리 직접 연결하지 않고 중간에 완충 지대를 두어 서로의 장애가 전파되지 않게 하는 설계"
    }
  },
  {
    "id": 165,
    "question": "CloudFront와 S3를 써서 정적 사이트를 운영 중인데, 모든 트래픽은 반드시 WAF를 거치게 해서 보안 검사를 하고 싶습니다. 사용자가 S3 주소로 우회해서 직접 들어오는 것도 막으려면 어떤 설정이 필요할까요?",
    "options": [
      "S3 버킷 정책에서 WAF의 ARN 주소만 허용하도록 설정합니다.",
      "CloudFront 설정에서 모든 요청을 WAF로 강제 리디렉션하도록 로직을 짭니다.",
      "CloudFront 전용 보안 그룹을 만들고 S3에 연결한 뒤 WAF를 물리적으로 붙입니다.",
      "OAC(또는 OAI)를 써서 S3 접근을 CloudFront로만 제한하고, 배포 설정에서 WAF를 켭니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. S3로 직접 들어가는 우회로를 막고 꼭 보안 요원(WAF)을 거치게 하려면, S3 접근을 CloudFront로만 제한(OAC)하고 그 CloudFront에 WAF를 딱 붙여두는 것이 가장 깔끔한 보안 설계입니다.\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    "glossary": {
      "OAC (Origin Access Control)": "CloudFront만 S3에 접근할 수 있게 신원을 확인하는 최신 보안 기능",
      "WAF (Web Application Firewall)": "해커의 공격이나 부적절한 요청을 입구에서 원천 차단하는 웹 방화벽"
    }
  },
  {
    "id": 166,
    "question": "글로벌 축제 소식을 전하는 정적 HTML 페이지가 S3에 저장되어 있습니다. 전 세계 수백만 명이 동시에 조회할 텐데, 가장 빠르고 효율적으로 웹서비스를 제공하려면 어떤 설계가 정답일까요?",
    "options": [
      "모든 유저에게 S3 미리 서명된 URL(Presigned URL)을 생성해서 나눠줍니다.",
      "전 세계 모든 리전에 S3 버킷을 만들고 교차 리전 복제를 겁니다.",
      "Route 53의 지리적 근접성 기능을 써서 가장 가까운 리전의 S3로 보냅니다.",
      "S3 버킷 앞에 CloudFront를 세워서 콘텐츠를 배달합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 전 세계 수백만 명에게 행사 소식을 전파할 땐 S3 앞에 CloudFront라는 도매상을 세우세요. 원본 서버의 부담은 싹 덜어주면서 전 세계 어디서든 번개처럼 빠른 조회를 가능케 합니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "CDN (Content Delivery Network)": "콘텐츠를 전 세계 서버에 복사해두고 가장 가까운 곳에서 손님에게 전달하는 망",
      "S3 (Simple Storage Service)": "사진, 영상, HTML 같은 파일을 안전하게 보존하는 클라우드 바구니"
    }
  },
  {
    "id": 167,
    "question": "SQS 대기열에서 메시지를 가져와 처리하는 앱이 있습니다. 트래픽은 가끔씩 몰려 오는데 절대 서비스가 끊겨서는 안 되네요. 돈을 가장 아끼면서도 안정적으로 서버(EC2)를 운영하는 똑똑한 구매 전략은?",
    "options": [
      "가장 싼 스팟 인스턴스만 사용하여 최대 트래픽을 처리합니다.",
      "전부 예약 인스턴스(RI)로 사서 최대 트래픽에 대비합니다.",
      "평소 기본 대수는 예약 인스턴스로 싸게 잡고, 추가로 필요한 분량은 스팟 인스턴스로 해결합니다.",
      "평소 기본 대수는 예약 인스턴스로 잡고, 혹시 모를 추가 트래픽은 온디맨드 인스턴스로 안전하게 처리합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 24시간 철밥통 같은 기본 인력은 '예약 인스턴스(RI)'로 싸게 챙기고, 보너스 일감이 몰릴 때만 투입하는 알바생은 '온디맨드 인스턴스'로 하세요. 중단 없는 서비스와 가성비를 동시에 챙기는 비결입니다.\n\nhttps://aws.amazon.com/ec2/pricing/reserved-instances/",
    "glossary": {
      "On-Demand Instance": "약정 없이 쓴 만큼만 정해진 시간당 요금을 내고 쓰는 가장 일반적인 서버 요금제",
      "Reserved Instance (RI)": "1년이나 3년 계약을 맺고 큰 폭의 할인을 받는 요금제"
    }
  },
  {
    "id": 168,
    "question": "보안팀이 회사의 모든 계정에서 특정 위험한 서비스 사용을 원천 차단하려 합니다. 모든 계정은 AWS Organizations로 묶여 있는데, 어디서든 권한을 한눈에 관리하고 손쉽게 확장할 수 있는 단일 창구는 무엇인가요?",
    "options": [
      "관리용 ACL을 만들어서 특정 서비스 접근을 조절합니다.",
      "통합 보안 그룹을 생성해서 사용자 그룹에 강제로 연결합니다.",
      "계정마다 교차 계정 역할을 만들어서 수동으로 접근을 거부합니다.",
      "루트 조직 단위(OU)에 서비스 제어 정책(SCP)을 걸어서 원천 봉쇄합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 전 계정에서 위험한 장난감을 못 쓰게 압수하고 싶다면 조직의 뿌리(루트)에 SCP를 거세요. 어떤 계정의 어떤 사용자라도 SCP가 금지한 서비스는 절대 열어볼 수 없는 최고 권위의 보안 정책입니다.\n\nhttps://aws.amazon.com/organizations/",
    "glossary": {
      "SCP (Service Control Policy)": "조직 내 모든 계정의 권한을 최상단에서 한꺼번에 제어하는 가장 강력한 가이드라인",
      "Organizations": "여러 계정을 가족처럼 하나로 묶어 요금과 권한을 통합 관리하게 해주는 서비스"
    }
  },
  {
    "id": 169,
    "question": "최근 웹 공격 소식을 듣고 회사 서비스의 DDoS 방어력이 걱정됩니다. ALB를 쓰고 있는 이 시점에서, 디도스(DDoS) 공격으로부터 시스템을 지켜줄 수 있는 가장 든든한 유료 방어막 서비스는?",
    "options": [
      "Amazon Inspector 에이전트를 모든 서버에 심습니다.",
      "Amazon Macie를 설정하여 공격 패턴을 감시합니다.",
      "AWS Shield Advanced 기능을 활성화하여 방어력을 높입니다.",
      "Amazon GuardDuty를 켜서 ALB를 실시간 감시하게 합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 대규모 디도스 공격으로부터 우리 집 입구(ALB)를 지키고 싶다면 프리미엄 보디가드인 Shield Advanced를 고용하세요. 24시간 밀착 감시와 자동 방어로 비상시에도 서비스를 굳건히 지켜냅니다.\n\nhttps://aws.amazon.com/shield/",
    "glossary": {
      "DDoS (Distributed Denial of Service)": "수많은 좀비 PC를 동원해 사이트에 접속 폭탄을 던져 서버를 마비시키는 공격",
      "AWS Shield": "디도스 공격의 패턴을 분석해 서버가 터지지 않게 보호해주는 실시간 방어 서비스"
    }
  },
  {
    "id": 170,
    "question": "보안 정책이 바뀌어서 이제 우리 웹 앱은 '특정 국가'에서만 접속할 수 있어야 합니다. ALB를 사용 중일 때, 지리적 위치를 따져서 출입을 통제하는 가장 쉬운 방법은?",
    "options": [
      "EC2 인스턴스의 보안 그룹에서 국가별 IP 대역을 일일이 막습니다.",
      "ALB(로드 밸런서)의 보안 그룹 설정을 통해 접근을 제한합니다.",
      "ALB에 AWS WAF를 연결하고 지리적 일치(Geo Match) 규칙을 설정합니다.",
      "EC2가 속한 서브넷의 네트워크 ACL에서 특정 국가를 차단합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 특정 국가 손님만 받고 나머지는 입구 컷 하고 싶다면 ALB에 WAF를 붙이고 '지리적 일치' 규칙을 설정하세요. 클릭 몇 번으로 국가별 출입 통제를 구현할 수 있는 가장 우아한 기술입니다.\n\nhttps://aws.amazon.com/waf/",
    "glossary": {
      "AWS WAF": "국가, IP, 특정 문자열 등을 따져서 똑똑하게 손님을 가려 받는 웹용 문지기",
      "Geo Match": "접속자의 주소를 분석해 특정 국가에서 온 요청인지 확인하는 기술"
    }
  },
  {
    "id": 171,
    "question": "세금 계산 API를 제공 중인데 연휴 기간만 되면 손님이 몰려 응답이 기어갑니다. 확장성이 끝내주면서도 평소엔 돈을 안 내고, 바쁠 때만 탄력적으로 확 늘어나는 구조로 바꾸고 싶을 때 추천하는 설계는?",
    "options": [
      "EC2 인스턴스에서 API를 돌리며 계산 로직을 수행합니다.",
      "API Gateway로 입구를 만들고, 실제 계산은 람다(Lambda) 함수에게 맡깁니다.",
      "무조건 두 대의 인스턴스를 띄운 로드 밸런서(ALB) 시스템을 구축합니다.",
      "API Gateway와 EC2 인스턴스를 연결하여 계산 요청을 전달합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 평소엔 놀다가 바쁠 때만 미친 듯이 일하는 계산기 API라면 'API Gateway + Lambda'가 답입니다. 서버 관리 없이 사용량에 정비례해서 알아서 늘어나는 최고 수준의 탄력성을 보여줍니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "API Gateway": "앱이나 웹의 요청을 받아서 적절한 곳으로 배달해주는 입구 서비스",
      "Lambda": "서버 관리 걱정 없이 쓴 만큼만 돈 내는 최고의 가성비 계산 일꾼"
    }
  },
  {
    "id": 172,
    "question": "CloudFront로 정보를 수집할 때 사용자가 입력한 민감한 데이터(신용카드 등)를 아주 강력하게 지키고 싶습니다. HTTPS는 기본이고, 데이터가 서버 끝까지 도달하는 전 과정에서 특정 앱만 열어볼 수 있게 암호화하는 필살기 기능은?",
    "options": [
      "CloudFront 서명 URL 기능을 켭니다.",
      "CloudFront 서명 쿠키를 설정합니다.",
      "CloudFront 필드 수준 암호화(Field-Level Encryption)를 설정합니다.",
      "뷰어와 오리진의 프로토콜 정책을 HTTPS 전용으로만 못 박아둡니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 신용카드 번호 같은 민감 정보가 우리 집 안방 깊숙한 곳까지 안전하게 전달되게 하려면 '필드 수준 암호화'가 필살기입니다. 전송 경로 중간에 데이터가 노출될 위험을 원천 차단합니다.\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
    "glossary": {
      "Field-Level Encryption": "데이터의 특정 항목(이름, 번호 등)만 콕 집어 암호화하여 보안을 극대화하는 기술",
      "HTTPS": "데이터를 주고받는 통로를 안전하게 보호하는 전송 규약"
    }
  },
  {
    "id": 173,
    "question": "게임 회사가 S3에 저장된 전 세계 공통 이미지와 비디오를 수백만 명에게 뿌려야 합니다. 원본 S3 서버에 가는 부담은 싹 줄이면서, 가장 저렴하고 빠르게 콘텐츠를 전 세계로 배달하는 비법은?",
    "options": [
      "웹 서버 앞단에 Global Accelerator를 설치합니다.",
      "S3 버킷 바로 앞에 CloudFront 웹 배포를 연결합니다.",
      "웹 서버 앞에 Redis용 ElastiCache 캐시 서버를 둡니다.",
      "웹 서버 앞에 Memcached용 ElastiCache 캐시 서버를 둡니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 수백만 명에게 사진과 영상을 가장 저렴하고 빠르게 배달하는 공식은 S3 + CloudFront입니다. 원본 S3로 가는 트래픽을 가로채서 엣지 거점에서 직접 나눠주니 가성비와 속도 모두 압승입니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "CloudFront": "전 세계 엣지 네트워크를 통해 콘텐츠 배달 속도를 극대화하는 서비스(CDN)",
      "Caching": "콘텐츠를 중간 서버에 복사해두고 원본 대신 손님에게 바로 던져주는 방식"
    }
  },
  {
    "id": 174,
    "question": "현재 한 개의 가용 영역(AZ)에서만 웹 서버 6대를 돌리고 있는데, 하나가 무너지면 서비스가 끝장납니다. 코드 수정 없이 인프라만 고쳐서 한 리전 안에서 가장 확실하게 '고가용성'을 확보하는 방법은?",
    "options": [
      "두 리전에 각각 인스턴스를 3대씩 나눠서 배치합니다.",
      "오토 스케일링 그룹 설정을 바꿔서 2개의 가용 영역에 3대씩 나눠서 서버를 띄웁니다.",
      "다른 리전에 서버를 빨리 복구할 수 있게 복제 템플릿만 만들어둡니다.",
      "로드 밸런서(ALB)의 알고리즘을 라운드 로빈 방식으로 바꿉니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 한 건물에 몰아넣은 서버들은 사고에 취약합니다. 오토 스케일링 그룹 설정을 바꿔서 서버들을 여러 가용 영역(AZ)에 툭툭 떼어 놓으세요. 건물 하나에 불이 나도 서비스는 꺼지지 않습니다.\n\nhttps://aws.amazon.com/ec2/autoscaling/",
    "glossary": {
      "High Availability (HA)": "일부 장비가 고장 나더라도 서비스가 중단 없이 끈기 있게 계속되는 성질",
      "Availability Zone (AZ)": "전력이나 네트워크가 독립된 하나 이상의 물리적 데이터 센터 뭉치(리전 안의 구분)",
      "Multi-AZ": "여러 AZ에 자원을 분산하여 재해 복구 능력을 키우는 대중적인 설계 방식"
    }
  },
  {
    "id": 175,
    "question": "판매 행사 때 주문이 몰리자 Aurora DB가 수많은 연결(Connection)을 감당 못 하고 CPU/메모리가 비명을 지르며 뻗어버렸습니다. 최소한의 코드 수정으로 이 수많은 동시 접속을 효율적으로 관리하고 타임아웃을 막는 비결은?",
    "options": [
      "람다의 프로비저닝된 동시성을 대폭 늘리고 글로벌 데이터베이스로 바꿉니다.",
      "RDS Proxy를 도입하고, 람다가 기존 주소 대신 프록시 주소를 보게 만듭니다.",
      "다른 리전에 읽기 전용 복제본을 만들고 트래픽을 분산시킵니다.",
      "DMS를 써서 모든 데이터를 DynamoDB로 통째로 이사 보냅니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 주문이 몰려 DB가 숨이 넘어갈 것 같다면 람다와 DB 사이에 'RDS Proxy'라는 유능한 매니저를 두세요. 이미 열린 통로를 효율적으로 나눠 쓰게 해서 DB 과부하와 타임아웃을 싹 해결해줍니다.\n\nhttps://aws.amazon.com/rds/proxy/",
    "glossary": {
      "RDS Proxy": "수많은 앱의 접속 요청을 효율적으로 모아서 DB에 연결해주는 중간 관리 서비스(커넥션 풀링)",
      "Connection Pool": "DB 연결을 매번 새로 만들지 않고 미리 만들어둔 연결을 돌려 써서 속도를 높이는 기술"
    }
  }
];