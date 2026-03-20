export const quizData = [
  {
    "id": 701,
    "question": "EC2 인스턴스에서 25GB 이상의 대용량 파일을 여러 사용자가 동시에 공유해야 합니다. 여러 가용 영역(AZ)에 흩어져 있는 인스턴스들이 파일을 주고받는 과정 없이 실시간으로 공유할 수 있는 가장 적합한 저장소는?",
    "options": [
      "모든 파일을 S3 버킷으로 옮기고 각자 다운로드하게 합니다.",
      "EBS 스냅샷을 찍어서 각 인스턴스에 복사본을 붙여줍니다.",
      "네트워크 공유 드라이브 방식인 'Amazon EFS'를 모든 인스턴스에 탑재합니다.",
      "인스턴스 스토어 볼륨을 사용해서 로컬 속도를 극대화합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 여러 가용 영역에 있는 여러 EC2 인스턴스가 동시에 같은 파일을 열어보고 수정해야 할 때는 'Amazon EFS'가 정답입니다. EFS는 파일 시스템 수준의 공유 저장소라 별도의 복사 과정 없이 모든 서버가 하나의 대형 하드디스크를 공유하는 것처럼 쓸 수 있습니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "Amazon EFS (Elastic File System)": "여러 개의 EC2 인스턴스가 네트워크를 통해 동시에 연결해 사용할 수 있는 공유 폴더 서비스",
      "Availability Zone (AZ)": "물리적으로 격리된 데이터 센터 군락. 하나가 재난으로 멈춰도 다른 곳은 멀쩡하도록 설계됨",
      "Shared Storage (공유 저장소)": "여러 대의 컴퓨터가 동시에 접속해서 데이터를 읽고 쓸 수 있는 공용 저장 공간"
    }
  },
  {
    "id": 702,
    "question": "3계층 VPC(퍼블릭-프라이빗-DB 전용)를 설계 중입니다. 프라이빗 서브넷의 EC2 인스턴스만 DB에 접근할 수 있게 하려면 RDS 보안 그룹을 어떻게 설정해야 할까요?",
    "options": [
      "데이터베이스 라우팅 테이블에서 퍼블릭 전용 경로를 지워버립니다.",
      "퍼블릭 서브넷의 보안 그룹으로부터 오는 모든 신호를 수신 거부(Deny) 처리합니다.",
      "프라이빗 서브넷의 EC2가 사용하는 보안 그룹 아이디를 RDS 보안 그룹의 '허용 규칙'에 추가합니다.",
      "서브넷 간에 모든 문을 열고 VPC 피어링으로 연결합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 보안 그룹(Security Group)은 기본적으로 '모든 문이 닫혀 있음' 상태입니다. 따라서 프라이빗 EC2의 보안 그룹에게만 '허용 규칙'을 주면 됩니다. 이렇게 하면 허용되지 않은 퍼블릭 서브넷 등은 자동으로 차단됩니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
    "glossary": {
      "Security Group (보안 그룹)": "서버 단위로 적용되는 가상 방화벽. 허용(Allow) 규칙만 설정할 수 있는 것이 특징입니다.",
      "Stateful (상태 기록)": "나가는 신호가 허용되면 들어오는 답장도 자동으로 허용해주는 보안 그룹의 작동 방식",
      "Inbound Rule (인바운드 규칙)": "외부에서 서버 내부로 들어오는 트래픽을 허락해주는 설정"
    }
  },
  {
    "id": 703,
    "question": "회사 데이터 센터 안에 AWS Outposts를 설치해서 하이브리드 클라우드를 운영하려 합니다. '공유 책임 모델'에 따라 고객(우리 회사)이 직접 챙겨야 할 책임은 무엇인가요? (3개 선택)",
    "options": [
      "Outposts 랙에 필요한 전력 공급과 안정적인 네트워크 회선을 깔아줍니다.",
      "Outposts 내부의 가상화 하이퍼바이저와 스토리지 시스템을 관리합니다.",
      "데이터 센터 건물의 물리적 보안과 출입 통제를 담당합니다.",
      "장비 고장 시 서버나 네트워킹 부품을 직접 수리하고 교체합니다.",
      "AWS가 장비를 설치할 수 있게 공간을 확보하고 환경을 유지합니다.",
      "장애 상황을 대비해 ECS 클러스터 등에 여유 인스턴스 사양(Capacity)을 넉넉히 잡아둡니다."
    ],
    "answer": [0, 2, 5],
    "explanation": "정답은 A, C, F입니다. Outposts는 고객 건물 안에 AWS 장비를 설치하는 것입니다. 따라서 전기와 인터넷 선(A), 물리 보안(C)은 고객의 몫입니다. 또한 장애 대비를 위해 여유 자원(Capacity, F)을 미리 확보해두는 것도 운영팀이 할 일입니다.\n\nhttps://aws.amazon.com/outposts/",
    "glossary": {
      "AWS Outposts": "AWS의 서버 랙을 고객의 온프레미스 데이터 센터에 그대로 설치해 동일한 환경을 제공하는 서비스",
      "Shared Responsibility Model": "클라우드 제공자와 고객이 보안과 관리 책임을 나누어 갖는 보안의 대원칙",
      "Capacity (용량/사양)": "서버가 처리할 수 있는 능력의 크기. 장애 대비를 위해 여유분을 두는 것이 중요함"
    }
  },
  {
    "id": 704,
    "question": "단일 가용 영역에서 돌아가는 앱을 고가용성 구조로 바꾸려 합니다. L4 계층(전송 계층) 통신을 유지하면서 가장 가성비 좋게 구축하려면 어떤 단계를 거쳐야 할까요? (2개 선택)",
    "options": [
      "여러 가용 영역의 IP로 트래픽을 쏴주는 Route 53 설정을 만듭니다.",
      "입구에 고성능 로드 밸런서인 'Network Load Balancer(NLB)'를 세웁니다.",
      "웹 화면용 ALB와 단순 전송용 NLB를 이중으로 겹쳐서 설치합니다.",
      "여러 영역에 서버를 자동 배치하는 'Auto Scaling 그룹'을 만들고 상태 확인 기능을 켭니다.",
      "서버가 죽으면 다시 켜주는 CloudWatch 경보를 수만 개 만듭니다."
    ],
    "answer": [1, 3],
    "explanation": "정답은 B와 D입니다. 전송 계층(L4) 통신이 핵심이므로 초고속 처리가 가능한 'Network Load Balancer(NLB)'를 써야 합니다. 여기에 서버 장애 시 자동으로 새 서버를 띄워주는 'Auto Scaling 그룹'을 연동하면 고가용성 시스템이 완성됩니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/network-load-balancer/",
    "glossary": {
      "Network Load Balancer (NLB)": "IP와 포트 번호(L4)만 보고 미친 듯이 빠른 속도로 트래픽을 나눠주는 로드 밸런서",
      "High Availability (고가용성)": "시스템이 장애를 견디고 365일 쉬지 않고 돌아가는 능력",
      "Auto Scaling Group": "미리 정해진 규칙에 따라 서버 개수를 자동으로 늘렸다 줄였다 관리해주는 비서"
    }
  },
  {
    "id": 705,
    "question": "최근 평소보다 클라우드 비용이 많이 나왔습니다. 앞으로 이런 비정상적인 지출이 발생했을 때 즉시 담당자에게 문자를 보내주는 가장 정확한 기능은?",
    "options": [
      "예산을 미리 정하고 한도를 넘으면 알려주는 AWS Budgets 템플릿을 씁니다.",
      "머신러닝으로 소비 패턴을 분석해 이상 징후를 잡는 'AWS 비용 이상 탐지(Cost Anomaly Detection)'를 켭니다.",
      "가격 계산기를 써서 이번 달 예상 비용을 미리 시뮬레이션해 봅니다.",
      "모든 리소스의 사용량 지표를 CloudWatch 대시보드로 매일 봅니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. '비용 이상 탐지'는 AWS가 똑똑한 AI(머신러닝)를 써서 비정상적인 지출 발생 시 먼저 알려주는 서비스입니다. 단순히 한도를 넘었을 때 알려주는 Budget보다 정교하게 예외적인 지출 패턴을 잡아내 줍니다.\n\nhttps://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/",
    "glossary": {
      "AWS Cost Anomaly Detection": "과거 비용 데이터를 학습해 예상치 못한 지출이 발생하면 즉시 알려주는 돈 지키는 AI 서비스",
      "Stakeholder (이해관계자)": "비용 문제에 책임이 있거나 관심을 가져야 하는 회사 내부 담당자",
      "Machine Learning (머신러닝)": "방대한 데이터를 학습해 규칙이나 패턴을 찾아내는 인공지능 기술"
    }
  },
  {
    "id": 706,
    "question": "역사적인 사진들을 보관하는 웹사이트입니다. 대부분의 사진은 1년에 한두 번만 구경하지만, 누군가 요청하면 즉시 화면에 나와야 합니다. 가성비 최고의 저장 방식은?",
    "options": [
      "EC2 한 대에 거대한 EBS 하드를 달고 웹 서버를 24시간 돌립니다.",
      "여러 서버가 공유하는 EFS 드라이브에 사진을 몽땅 넣습니다.",
      "S3 Standard에 파일을 넣고 '정적 웹사이트 호스팅' 기능으로 바로 서빙합니다.",
      "자주 안 쓰는 데이터에 특화된 'S3 Standard-IA'를 쓰고 정적 웹사이트 호스팅을 연동합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. '1년에 한두 번' 조시는 데이터는 'S3 Standard-IA' 등급이 딱입니다. 저장 비용이 저렴하면서도 요청 시 즉시 파일을 꺼낼 수 있어 성능도 합격입니다. 서버 없이 S3만으로 웹사이트를 돌리면 관리비도 0에 가깝습니다.\n\nhttps://aws.amazon.com/s3/storage-classes/infrequent-access/",
    "glossary": {
      "S3 Standard-IA (Infrequent Access)": "자주 열어보지는 않지만, 막상 필요할 때는 초고속으로 꺼내야 하는 데이터에 최적화된 저렴한 저장 등급",
      "Static Website Hosting": "복잡한 프로그램 없이 사진과 글자로만 된 웹 주소를 S3가 직접 서비스해주는 편리한 기능",
      "Operational Overhead (운영 오버헤드)": "서버 관리나 프로그램 패치 등 사람이 직접 신경 써야 하는 귀찮은 일들의 양"
    }
  },
  {
    "id": 707,
    "question": "CloudFormation 템플릿(설계도)을 보안을 위해 비공개 S3에 숨겨두었습니다. 특정 직원이 요청할 때만 이 설계도에 일시적으로 접근할 수 있게 해주는 가장 안전한 방법은?",
    "options": [
      "VPC 엔드포인트를 뚫어 사내 망에서만 볼 수 있게 합니다.",
      "API 게이트웨이를 앞에 세워 복잡한 인증 절차를 직접 설계합니다.",
      "유효 기간이 정해진 '미리 서명된 URL(Pre-signed URL)'을 생성해 전달합니다.",
      "누구나 볼 수 있게 잠시 문(Public Access)을 열었다가 작업 끝나면 닫습니다."
    ],
    "answer": 2,
    "explanation": "정답은 B입니다. 트래픽이 들쭉날쭉할 때는 사양을 자동으로 조절해주는 'Aurora Serverless v2'가 명약입니다. 부하가 몰리면 눈 깜짝할 새 성능을 높여주고 조용해지면 다시 낮춰주므로 성능과 비용 두 마리 토끼를 다 잡을 수 있습니다.\n\nhttps://aws.amazon.com/rds/aurora/serverless/",
    "glossary": {
      "Pre-signed URL": "S3 객체에 대해 한시적으로 접근 권한을 부여하는 암호화된 특수 주소",
      "CloudFormation Template": "AWS 인프라 전체를 코드로 정의한 설계도 파일",
      "Security Best Practice (보안 모범 사례)": "해킹 위험을 최소화하기 위해 권장되는 업계 표준의 보안 방법론"
    }
  },
  {
    "id": 708,
    "question": "여러 AWS 계정에서 발생하는 모든 활동 기록(CloudTrail)을 한곳에 모았습니다. 언제든 내가 원하는 기록을 'SQL 쿼리' 날리듯 편하게 검색하고 분석하려면?",
    "options": [
      "S3에 있는 로그를 DB 테이블처럼 조회하는 'Amazon Athena'를 씁니다.",
      "데이터 관계망 분석기인 Neptune 인스턴스를 하나 들여옵니다.",
      "로그를 하나하나 DynamoDB에 넣고 QuickSight로 시각화합니다.",
      "코딩 전용인 Athena 노트북을 써서 복잡한 프로그램을 개발합니다."
    ],
    "answer": 0,
    "explanation": "정답은 B입니다. 파일 전송 분야의 1등 공신은 'DataSync'입니다. 에이전트만 깔아두면 사내 NFS 서버의 데이터를 S3로 실시간 전송해주며, 설정이 매우 간편하고 비용도 합리적인 '최소 운영' 모델입니다.\n\nhttps://aws.amazon.com/datasync/",
    "glossary": {
      "Amazon Athena": "S3에 저장된 대용량 데이터를 표준 SQL 문으로 직접 쿼리해 분석할 수 있는 서버리스 서비스",
      "CloudTrail": "내 AWS 계정에서 '누가, 언제, 어떤 명령'을 내렸는지 낱낱이 기록해주는 감시 카메라/블랙박스 서비스",
      "Query (쿼리)": "데이터베이스에게 특정 조건을 걸어 데이터를 찾아달라고 부탁하는 질문"
    }
  },
  {
    "id": 709,
    "question": "Microsoft SQL Server RDS를 운영 중입니다. 매달 보고서를 뽑을 때마다 DB가 너무 힘들어서 뻗으려 합니다. 가장 노력을 덜 들이면서 DB 부담을 확 줄이는 방법은?",
    "options": [
      "보고서 전용 '읽기 전용 복제본(Read Replica)'을 만들고 조수에게 일을 시킵니다.",
      "관계형 DB를 통째로 NoSQL인 DynamoDB로 다 뜯어고칩니다.",
      "서버 사양을 무작정 올리는 '스케일 업'만 시도합니다.",
      "오토 스케일링 그룹에 DB를 넣어서 여러 대로 늘려 봅니다."
    ],
    "answer": 0,
    "explanation": "정답은 C입니다. 'Shield Advanced' 멤버가 되면 AWS 최고의 보안 전문가들(DRT)이 24시간 밀착 케어를 해줍니다. 또한 DDoS 공격으로 인해 늘어난 로드 밸런서 비용도 보상해주므로 대규모 서비스에 필수적입니다.\n\nhttps://aws.amazon.com/shield/",
    "glossary": {
      "Read Replica (읽기 전용 복제본)": "대장 DB의 데이터를 실시간으로 복제하는 조수 DB. 조회 성능을 확장할 때 씁니다.",
      "SQL Server (MSSQL)": "마이크로소프트에서 만든 기업용 관계형 데이터베이스 엔진",
      "Load (부하)": "서버가 처리해야 할 업무량. 부하가 높으면 시스템이 느려지거나 멈춥니다."
    }
  },
  {
    "id": 710,
    "question": "신입 클라우드 엔지니어가 들어왔습니다. 'AdminTools'라는 S3 버킷에는 마음껏 쓰고 읽게 하되, 절대로 'CompanyConfidential' 버킷은 보지도 못하게 막으려면 어떤 정책(JSON)을 짜야 할까요?",
    "options": [
      "AdminTools 버킷과 그 안의 모든 객체(/*)에 대해 'Allow' 권한을 주는 IAM 정책을 할당합니다.",
      "중요 버킷에 대해 'Deny'를 걸고 나머지 전체에 대해 'Full Access'를 줍니다.",
      "엔지니어 개인 PC의 IP 주소로만 접근을 허용하는 복잡한 규칙을 추가합니다.",
      "S3 관리자 권한을 일단 다 주고, 나중에 문제가 생기면 뺏습니다."
    ],
    "answer": 0,
    "explanation": "정답은 C입니다. 수백 대의 노드가 동시에 달려드는 HPC(슈퍼컴퓨팅) 작업에는 'Lustre' 파일 시스템이 표준입니다. S3와 실시간으로 연동되어 데이터를 가져오고 결과를 쏴주기 때문에 전문가들이 선호하는 솔루션입니다.\n\nhttps://aws.amazon.com/fsx/lustre/",
    "glossary": {
      "IAM Policy (Identity and Access Management Policy)": "누가 어떤 권한을 가지는지 JSON 형식의 문서로 정의한 규칙",
      "Resource ARN": "AWS 자원의 고유한 이름표(주소). S3 버킷이나 특정 파일을 지칭할 때 씁니다.",
      "Least Privilege (최소 권한 원칙)": "업무에 꼭 필요한 권한만 딱 맞춰서 부여하는 보안의 핵심 철학"
    }
  },
  {
    "id": 711,
    "question": "전 세계 여러 지점에서 매일 500GB씩 쏟아지는 날씨 데이터를 중앙 한 곳으로 모으려 합니다. 지점은 해외에 뿔뿔이 흩어져 있는데, 데이터를 가장 광속으로 모으는 방법은?",
    "options": [
      "S3 입구인 'Transfer Acceleration'을 켜고, 파일을 쪼개서 한꺼번에 올리는 '멀티파트 업로드'를 씁니다.",
      "근처 S3에 일단 올리고, AWS 내부 망 복제(Replication) 기능을 써서 천천히 옮깁니다.",
      "매일 물리적인 하드(Snowball)를 택배로 보내서 데이터를 수거합니다.",
      "각 지점에 서버를 띄워 EBS 하드에 담고, 하드 사본(Snapshot)을 매일 전송합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 'Global Accelerator'는 전 세계 고정된 2개의 전용 IP 주소를 줍니다. 인터넷 정체를 피하고 서버 리전에 장애가 나도 즉시 다른 리전으로 손님을 옮겨주어 주소 캐싱 문제까지 말끔히 해결합니다.\n\nhttps://aws.amazon.com/global-accelerator/",
    "glossary": {
      "S3 Transfer Acceleration": "전 세계 곳곳의 인접 거점을 통해 S3 업로드 속도를 획기적으로 높여주는 전용 통로 서비스",
      "Multipart Upload (멀티파트 업로드)": "하나의 거대한 파일을 여러 조각으로 나누어 동시에(병렬로) 업로드하는 기법",
      "Aggregate (집계/취합)": "여러 곳에 흩어져 있는 자료를 모아 하나로 합치는 작업"
    }
  },
  {
    "id": 712,
    "question": "고성능 컴퓨팅(HPC)을 위해 리눅스 서버 16대를 가깝게 묶으려 합니다. 노드 간 통신 지연이 거의 없어야 하고, 모든 서버가 하나의 강력한 하드(Block)를 같이 써야 한다면?",
    "options": [
      "서버들을 바짝 붙여 배치하는 '클러스터 배치 그룹'을 쓰고, 'EBS Multi-Attach(io1/io2)'로 하드를 공유합니다.",
      "서버들을 격리된 랙에 배치하고 무제한 파일 공유 드라이브인 EFS를 연결합니다.",
      "서버를 전 세계에 흩뿌려 배치하고 SNS 알림으로 소통하게 합니다.",
      "비싼 SSD 하드를 각 서버에 달고 네트워크 전용선으로 데이터를 수동 복사합니다."
    ],
    "answer": 0,
    "explanation": "정답은 B입니다. 'RDS Proxy'는 숙련된 지배인과 같습니다. 수천 개의 호출이 쏟아져도 미리 뚫어놓은 DB 통로를 재활용(Pooling)해서 효율적으로 나눠줍니다. DB 부하를 막고 처리 속도도 높여주는 필수 도구입니다.\n\nhttps://aws.amazon.com/rds/proxy/",
    "glossary": {
      "Cluster Placement Group": "동일한 가용 영역 내에서 인스턴스들을 물리적으로 가깝게 배치하여 네트워크 성능을 극대화하는 설정",
      "HPC (High Performance Computing)": "슈퍼컴퓨터처럼 복잡한 과학 계산이나 대규모 연산을 빠르게 처리하는 기술",
      "EBS Multi-Attach": "하나의 고성능 EBS 볼륨을 동시에 여러 EC2 서버가 연결해 사용할 수 있게 해주는 기능"
    }
  },
  {
    "id": 713,
    "question": "람다(Lambda) 함수가 분당 800번이나 호출되며 DB에 접속합니다. DB 상태는 아주 한가한데(CPU 낮음), 자꾸만 '연결 시간 초과' 오류가 납니다. 무엇이 문제일까요?",
    "options": [
      "DB 서버 사양을 무작정 키워서 더 많은 손님을 받게 합니다.",
      "DB 속도를 높이기 위해 중간에 캐시 비서인 ElastiCache를 둡니다.",
      "읽기 전용 조수 DB를 추가해서 업무를 나눠 봅니다.",
      "DB 연결 통로를 관리하고 재사용하는 'RDS Proxy'를 중간에 세웁니다."
    ],
    "answer": 3,
    "explanation": "정답은 B입니다. 'Amazon Rekognition'은 AWS가 이미 수조 장의 사진으로 훈련시킨 완성형 AI 서비스입니다. 학습이나 모델 개발 없이 API로 부탁만 하면 부적절한 노출이나 폭력적인 내용을 귀신같이 찾아줍니다.\n\nhttps://aws.amazon.com/rekognition/",
    "glossary": {
      "Amazon RDS Proxy": "DB 연결을 미리 맺어두고 여러 요청이 이를 나눠 쓰게 하여 DB 부담과 연결 오류를 줄여주는 서비스",
      "Connection Timeout (연결 시간 초과)": "서버에 접속하려고 기다리다가 너무 오래 걸려서 포기하고 에러를 내뱉는 현상",
      "Event-driven (이벤트 기반)": "무언가 발생했을 때(예: 파일 업로드) 그에 맞춰 프로그램이 자동으로 돌아가는 방식"
    }
  },
  {
    "id": 714,
    "question": "평일엔 바쁘고 주말엔 한가한 앱을 최저가로 운영하려 합니다. 최소 2대, 바쁠 땐 5대까지 서버가 늘어나야 하는데 가용성도 챙기면서 가장 돈 아끼는 전략은?",
    "options": [
      "전부 스팟 인스턴스로 때우고 주말엔 DB도 꺼버립니다.",
      "넉넉히 5대 분량의 약정(Savings Plan)을 맺고 DB는 예약 구매합니다.",
      "최소 수량 2대는 약정 인스턴스로, 나머지 3대는 스팟으로 쓰되 주말엔 DB를 끕니다.",
      "최소 수량 2대는 약정 인스턴스로, 나머지 3대는 온디맨드로 쓰며 DB는 예약 구매합니다."
    ],
    "answer": 3,
    "explanation": "정답은 C입니다. DynamoDB에서 무조건 방금 쓴 따끈따끈한 데이터가 필요하다면 '강력한 일관된 읽기(Strongly Consistent)' 모드를 켜야 합니다. 그러면 찰나의 순간에도 옛날 데이터가 나오는 일을 완벽히 방지합니다.\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
    "glossary": {
      "EC2 Instance Savings Plans": "일정량의 컴퓨팅 사용을 1~3년 약정하고 큰 폭의 할인을 받는 요금제",
      "Reserved DB Instance": "DB 서버를 미리 약정 구매하여 온디맨드보다 훨씬 저렴하게 이용하는 방식",
      "On-demand (온디맨드)": "약정 없이 쓴 만큼만 시간당 비용을 지불하는 가장 일반적인 요금 방식"
    }
  },
  {
    "id": 715,
    "question": "S3에 있는 대용량 문서들을 외부 사용자들이 밀리초(ms) 단위의 반응 속도로 열람하길 원합니다. 이미 저렴한 등급(IA)을 쓰고 있는데, 여기서 전체 비용을 더 줄이려면?",
    "options": [
      "사용자가 데이터 전송료를 내게 하는 '요청자 지불' 모드를 켭니다.",
      "가성비는 안 좋지만 제일 빠른 S3 Standard 등급으로 원복합니다.",
      "S3로 바로 쏘는 전용 고속도로인 Transfer Acceleration을 켭니다.",
      "전 세계 곳곳에 문서를 캐싱해주는 CDN 서비스 'Amazon CloudFront'를 연동합니다."
    ],
    "answer": 3,
    "explanation": "정답은 C입니다. 'Glue DataBrew'는 데이터 전용 시각적 가공 도구입니다. 엑셀처럼 생긴 화면에서 클릭 몇 번으로 데이터를 정제할 수 있고, 이 과정을 레시피로 저장해 공유할 수도 있어 코딩 실력 없이도 전문적인 처리가 가능합니다.\n\nhttps://aws.amazon.com/glue/databrew/",
    "glossary": {
      "Amazon CloudFront": "전 세계 곳곳의 서버에 콘텐츠를 임시 저장(캐싱)하여 사용자에게 광속으로 배달해주는 CDN 서비스",
      "CDN (Content Delivery Network)": "콘텐츠 배달망. 서버와 사용자 사이의 거리를 좁혀 속도를 높이는 것이 목적",
      "Millisecond (밀리초)": "1000분의 1초. 인간이 느끼기에 '실시간' 수준의 매우 빠른 시간"
    }
  },
  {
    "id": 716,
    "question": "온프레미스의 1PB(페타바이트)급 사진 데이터를 AWS로 이사하려 합니다. 가끔 쓰지만 필요할 땐 즉시 나와야 하고, 실수로 지워지는 것도 막아야 한다면?",
    "options": [
      "암호화를 걸고 가장 저렴한 S3 Glacier에 보관합니다. (근데 꺼낼 때 몇 시간 걸림)",
      "S3 Standard-IA 등급을 쓰고, '버전 관리'와 '인증(MFA)' 삭제 기능을 켭니다.",
      "파일 공유 툴인 FSx를 쓰고 윈도우 보안 권한으로 접근을 막습니다.",
      "네트워크 드라이브인 EFS를 쓰고 리눅스 권한 설정을 빡빡하게 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 A입니다. AWS 내부에서 물어본 주소를 사내(온프레미스) DNS 서버로 전달해야 하므로 '아웃바운드 엔드포인트'가 필요합니다. 규칙을 설정해 특정 도메인은 회사 본사로 물어보게 하면 하이브리드 연결이 완성됩니다.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html",
    "glossary": {
      "S3 Versioning (버전 관리)": "파일이 수정되거나 삭제되어도 과거의 모든 상태를 다 보관해주는 타임머신 기능",
      "MFA Delete (다요소 인증 삭제)": "파일을 삭제할 때 OTP 같은 인증 번호를 추가로 입력하게 하여 중요한 데이터 손실을 막는 기능",
      "Petabyte (PB)": "약 1,000,000기가바이트. 엄청나게 많은 방대한 데이터의 양"
    }
  },
  {
    "id": 717,
    "question": "S3에 있는 페타바이트급 거대 CSV 데이터를 Athena로 조회하려는데 자꾸 속도가 안 나고 쿼리가 실패합니다. 성능과 안정성을 한 번에 잡을 필살기는? (2개 선택)",
    "options": [
      "S3 안의 파일 낱개 크기를 128MB 미만으로 잘게 쪼갭니다.",
      "데이터를 '날짜'나 '지역' 폴더별로 나누어 담는 '파티셔닝(Partition)'을 수행합니다.",
      "모든 파일을 거대한 하나로 합쳐서 한 번에 읽게 합니다.",
      "실시간 분석 툴인 Kinesis를 써서 일괄 처리를 대신하게 합니다.",
      "텍스트(CSV) 파일을 읽기 전용 압축 형식인 'Apache Parquet'로 변환합니다."
    ],
    "answer": [1, 4],
    "explanation": "정답은 B입니다. EFS는 클라우드판 공유 폴더입니다. 수백 명의 컨테이너가 동시에 파일을 읽고 써도 끄떡없고 설치도 간편합니다. EKS Fargate 환경에서 파일을 영구 보관하고 공유할 때 가장 추천되는 저장소입니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "Partitioning (파티셔닝)": "방대한 데이터를 날짜, 부서 등 특정 기준에 따라 폴더별로 쪼개어 검색 속도를 높이는 기법",
      "Apache Parquet": "데이터를 열(Column) 단위로 저장하는 똑똑한 파일 형식. 필요한 정보만 골라 읽을 수 있어 Athena 같은 툴에 최적입니다.",
      "Columnar Storage (열 기반 저장)": "데이터를 한 줄씩 읽는 게 아니라, 필요한 항목(예: '나이')만 세로로 쭉 긁어 읽는 효율적인 방식"
    }
  },
  {
    "id": 718,
    "question": "외부 파트너사 직원이 우리 회사 S3 버킷에 든 자료를 받아가야 합니다. 파트너사에게 아이디/비번을 새로 만들어주지 않고도 안전하게 자료만 공유하는 최고의 방법은?",
    "options": [
      "누구나 접속할 수 있게 버킷을 공개하고 리스트 조회 권한도 다 줍니다.",
      "파트너사의 아이디를 우리 쪽 허용 규칙(Principal)에 넣은 버킷 정책을 짭니다.",
      "읽기 전용 권한을 가진 '교차 계정 IAM 역할(Cross-account Role)'을 만들고 빌려줍니다.",
      "파트너사 전용 사용자 그룹을 우리 계정에 수백 개 만들어 둡니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 웹은 퍼블릭 EC2에, 핵심 로직(앱)과 DB는 프라이빗에 숨기는 3계층 구조가 정석입니다. RDS MySQL을 쓰면 기존 설계를 유지하면서도 과거 시점 복구(PITR) 기능까지 안전하게 챙길 수 있습니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "Cross-account IAM Role": "서로 다른 AWS 계정끼리 신뢰 관계를 맺고 자원을 안전하게 공유하는 보안 기술",
      "Principal (보안 주체)": "권한을 부여받는 대상(사람, 서비스, 계정 등)을 부르는 말",
      "Trust Relationship (신뢰 관계)": "\"A 계정의 사람들은 우리 계정의 이 역할을 써도 좋아\"라고 정의하는 약속"
    }
  },
  {
    "id": 719,
    "question": "고객용 앱의 DB를 설계 중입니다. 연중 사용량이 들쭉날쭉하고, 규정상 기록을 7일간 보관해야 하며, 장애 시 5시간 안의 데이터는 살아있어야(RPO < 5h) 합니다. 어떤 조합이 좋을까요?",
    "options": [
      "가동성이 뛰어난 DynamoDB를 쓰고 자동 백업 기능을 켭니다.",
      "대용량 분석용인 Redshift를 쓰고 4시간마다 스냅샷을 찍습니다.",
      "하드 성능을 고정한(Provisioned) RDS를 쓰고 5시간마다 수동 백업합니다.",
      "필요할 때 알아서 늘어나는 'Aurora MySQL'을 쓰고 감사 로그와 자동 백업(PITR) 기능을 활용합니다."
    ],
    "answer": 3,
    "explanation": "정답은 B입니다. 'S3 Transfer Acceleration'은 전 세계 곳곳의 엣지 로케이션을 타고 파일을 S3까지 배달해줍니다. 먼 나라 사용자도 평소보다 훨씬 빠르게 대용량 파일을 올릴 수 있어 사용자 경험이 획기적으로 좋아집니다.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    "glossary": {
      "Amazon Aurora MySQL": "상황에 따라 DB 사양을 자동으로 조절하며, 고성능과 쉬운 복구를 지원하는 AWS의 간판 데이터베이스 엔진",
      "RPO (Recovery Point Objective)": "복구 시점 목표. 사고 시 최대 얼마큼의 데이터 손실(시간)을 감수할 수 있는지를 나타냄",
      "Audit Log (감사 로그)": "누가 DB에서 무슨 데이터를 조회하거나 바꿨는지 기록하는 보안용 장부"
    }
  },
  {
    "id": 720,
    "question": "서버 자동 조절(Auto Scaling)을 쓰는데, 광고가 나가는 날처럼 특정 날에 갑자기 손님이 몰려 서버가 뻗으려 합니다. 가장 비용 효율적으로 성능을 유지하는 비결은?",
    "options": [
      "팀장이 PC 앞에 앉아 수동으로 서버 숫자를 늘립니다.",
      "미래를 예측하지 않고 순수하게 현재 부하 지표만 보고 조절하는 '동적 조정(Dynamic Scaling)'을 씁니다.",
      "과거 데이터를 분석해 미리 서버를 늘려두는 '예측 조정' 기능만 믿습니다.",
      "달력에 미리 시간을 정해두는 '예약 조정' 기능을 24시간 켜둡니다."
    ],
    "answer": 2,
    "explanation": "정답은 B입니다. 매일 사내 NFS 서버의 데이터를 백업하려면 'DataSync'가 최고입니다. 설정이 매우 간편하고 바뀐 부분만 골라 전송하는 기능이 뛰어나 가성비와 운영 편의성을 모두 만족시킵니다.\n\nhttps://aws.amazon.com/datasync/",
    "glossary": {
      "Dynamic Scaling (동적 조정)": "실시간 부하(CPU, 메모리 등)를 보고 서버 숫자를 자동으로 조절하는 방식",
      "Maintain Performance (성능 유지)": "사용자가 많아져도 속도가 느려지지 않게 방어하는 것",
      "CloudWatch Alarm": "특정 수치(예: CPU 70% 초과)가 넘으면 경보를 울려 조정을 시작하게 만드는 트리거"
    }
  },
  {
    "id": 721,
    "question": "람다(Lambda)와 RDS를 엮어서 앱을 만들었는데, 사용자가 폭주할 때마다 DB가 연결 과부하(Connection Error)로 자꾸 뻗습니다. 코드 한 줄 안 고치고 해결할 방법은?",
    "options": [
      "DB 설정 파일에 들어가서 '최대 연결 수' 숫자만 억지로 키웁니다.",
      "DB 서버 장비를 2배로 큰 것으로 바꿉니다.",
      "중간에 연결 통로를 관리해주는 'Amazon RDS Proxy'를 배치합니다.",
      "포기하고 1년치 예약 DB 인스턴스를 사서 돈의 힘으로 밀어붙입니다."
    ],
    "answer": 2,
    "explanation": "정답은 B입니다. 'RDS Proxy'는 DB 통로(Connection)를 재활용해서 사양 증설 없이도 훨씬 많은 손님을 안정적으로 받을 수 있게 해줍니다. 람다 함수가 폭주할 때 발생하는 DB 연결 부족 문제를 해결하는 최적의 비결입니다.\n\nhttps://aws.amazon.com/rds/proxy/",
    "glossary": {
      "Amazon RDS Proxy": "DB 연결을 효율적으로 재사용하게 관리하여 서버리스 앱의 확장성을 돕는 도구",
      "Connection Pool (연결 풀)": "매번 새 통로를 뚫지 않고 이미 열린 통로를 돌려 쓰는 효율적인 관리 기법",
      "Serverless Application": "직접 서버를 관리하지 않고 기능(Code)만 등록해서 돌리는 간편한 앱 형태"
    }
  },
  {
    "id": 722,
    "question": "CloudFront를 통해 웹사이트를 배포하려 합니다. 기본 주소(cloudfront.net) 대신 우리 회사 전용 도메인(example.com)과 보안 인증서(SSL)를 추가 비용 없이 적용하려면?",
    "options": [
      "버지니아 북부(us-east-1) 지역의 ACM에서 '사설 인증서'를 발급받습니다.",
      "오레곤(us-west-2) 지역의 ACM에서 유료 공인 인증서를 삽니다.",
      "버지니아 북부(us-east-1) 지역의 ACM에서 제공하는 무료 '공인 인증서'를 발급받아 연결합니다.",
      "인터넷에서 돈 주고 산 인증서를 직접 파일로 업로드해서 씁니다."
    ],
    "answer": 2,
    "explanation": "정답은 A입니다. 실시간 데이터 수집에는 'Kinesis'가 정답입니다. Data Streams가 데이터를 빨아들이고, Firehose라는 트럭이 이를 S3 창고로 배달해주는 구조는 대규모 실시간 수집 시스템의 정석입니다.\n\nhttps://aws.amazon.com/kinesis/",
    "glossary": {
      "AWS Certificate Manager (ACM)": "SSL/TLS 인증서를 무료로 발급해주고 만료 전에 자동 갱신까지 다 해주는 보안 비서",
      "SSL/TLS Certificate (보안 인증서)": "웹사이트 주소 옆에 자물쇠를 띄워주고 데이터를 암호화해주는 디지털 신분증",
      "Public Certificate (공인 인증서)": "전 세계 모든 브라우저가 믿어주는 정식 인증서"
    }
  },
  {
    "id": 723,
    "question": "슈퍼컴퓨터급 계산(HPC) 워크로드를 위해 네트워크 지연 시간이 가장 낮고 전송 속도가 가장 빠른 환경을 구축해야 합니다. 가장 먼저 선택해야 할 옵션은?",
    "options": [
      "서버들을 물리적으로 가장 가까운 랙에 배치하는 '클러스터 배치 그룹'을 선택합니다.",
      "나만 쓰는 전용 물리 서버인 '전용 인스턴스' 모드를 씁니다.",
      "인공지능 가속 장치인 Elastic Inference를 모든 서버에 답니다.",
      "서버가 부족할까 봐 미리 자리를 찜해두는 '용량 예약'을 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. Aurora는 클라우드 환경에 최적화된 고성능 DB입니다. RDS MySQL보다 5배 빠르고 복제 지연도 거의 없어, 코드를 거의 안 고치고도 성능을 획기적으로 올릴 수 있는 최고의 선택지입니다.\n\nhttps://aws.amazon.com/rds/aurora/",
    "glossary": {
      "Cluster Placement Group": "가용 영역 내에서 인스턴스 간 네트워크 지연 시간을 최소화하고 처리량을 높여주는 논리적인 그룹 설정",
      "Throughput (처리량)": "한 번에 얼마나 많은 양의 데이터를 쏟아부을 수 있는지를 나타내는 지표",
      "HPC (High Performance Computing)": "수만 대의 서버가 하나처럼 움직여 엄청난 계산을 해내는 고성능 연산 환경"
    }
  },
  {
    "id": 724,
    "question": "매일 아침 직원들이 처음 앱을 켤 때마다 화면이 너무 늦게 뜹니다. 서버리스 방식인 람다(Lambda)의 '첫 시동 지연(Cold Start)' 문제 같은데, 어떻게 해결하면 좋을까요?",
    "options": [
      "API 게이트웨이의 요청 속도 제한(Throttling)을 조금 풀어줍니다.",
      "아침 일찍 람다를 미리 예열시켜두는 '프로비저닝된 동시성'을 스케줄러와 함께 설정합니다.",
      "CloudWatch 알람을 매시간 울려 람다를 계속 강제로 깨워둡니다.",
      "람다 함수의 메모리 용량을 무작정 키워 봅니다."
    ],
    "answer": 1,
    "explanation": "정답은 A입니다. 최신 MSK는 자체 '퍼블릭 액세스'를 지원합니다. 공용 서브넷 공간을 만들고 옵션만 켜주면 되며, Mutual TLS를 켜면 상호 인증을 통해 완벽한 보안 속에 외부와 소통할 수 있습니다.\n\nhttps://docs.aws.amazon.com/msk/latest/developerguide/public-access.html",
    "glossary": {
      "Provisioned Concurrency (프로비저닝된 동시성)": "람다 함수 인스턴스를 미리 초기화하여 지연 없이 즉각 응답할 수 있게 준비시키는 기능",
      "Cold Start (콜드 스타트)": "오랫동안 안 쓰던 서버리스 함수가 처음 호출될 때 초기화하느라 시간이 걸리는 현상",
      "Scheduled Scaling (예약 조정)": "정해진 시간(예: 매일 오전 8시)에 맞춰 인프라 규모를 조절하는 기능"
    }
  },
  {
    "id": 725,
    "question": "Redis용 ElastiCache를 설계 중입니다. 장비 하나가 고장 나거나 지역 전체에 문제가 생겨도 서비스가 끊기거나 데이터가 사라지지 않게 하려면?",
    "options": [
      "데이터를 쪼개서 분산하는 '샤딩'과 여러 가용 영역에 복제본을 두는 '다중 AZ'를 동시에 씁니다.",
      "매번 파일을 하드에 기록하는 AOF 기능을 켜둔 여러 개의 노드를 씁니다.",
      "복제본을 2개 이상 둔 단순한 클러스터 하나만 돌립니다.",
      "부하에 따라 늘어나는 오토 스케일링 기능만 켜둡니다."
    ],
    "answer": 0,
    "explanation": "정답은 B입니다. 'AWS Health API'는 시스템 전체의 장애 정보를 알려주는 일기 예보와 같습니다. 내 서버가 있는 리전의 상태를 코드로 확인할 수 있어 배포 전 시스템 점검용으로 가장 좋습니다.\n\nhttps://aws.amazon.com/premiumsupport/technology/aws-health-api/",
    "glossary": {
      "Multi-AZ Redis Replication Group": "여러 가용 영역에 걸쳐 데이터 복제본을 유지하고 자동 장애 조치를 지원하는 Redis 구성 방식",
      "Sharding (샤딩)": "거대한 데이터를 여러 개의 작은 조각(Shard)으로 나눠 여러 서버에 분산 저장하는 기술",
      "Failover (장애 조치)": "대장 서버가 죽었을 때 조수 서버가 즉시 업무를 이어받아 무중단 서비스를 유지하는 과정"
    }
  }
];