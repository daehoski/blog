export const quizData = [
  {
    "id": 551,
    "question": "S3에 저장되는 평균 50KB 크기의 보고서가 있습니다. 생성 후 첫 7일은 자주 사용되지만, 이후에는 몇 년간 보관만 하면 됩니다. 단, 필요할 때는 6시간 내에 꺼내볼 수 있어야 합니다. 가장 저렴한 관리 방법은?",
    "options": [
      "S3 Standard를 사용하고, 수명 주기 정책을 통해 7일 후 S3 Glacier로 자동 전환합니다.",
      "S3 Standard를 사용하고, 7일 후 S3 Standard-IA로 전환하도록 설정합니다.",
      "S3 Intelligent-Tiering을 사용하여 자동으로 계층이 이동되도록 맡깁니다.",
      "S3 Standard를 유지하다가 7일 후 S3 Glacier Deep Archive로 바로 넘깁니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 첫 주(7일)는 자주 쓰이므로 고성능인 S3 Standard가 적합합니다. 이후 수년간 보관할 때는 저장 비용이 매우 저렴한 Glacier 클래스가 효율적입니다. Glacier의 표준 인출 방식(3~5시간)은 '6시간 내 검색' 조건을 완벽히 충족하면서 비용을 최소화할 수 있는 최적의 선택입니다.\n\nhttps://aws.amazon.com/s3/storage-classes/glacier/",
    "glossary": {
      "S3 Glacier": "자주 열어보지 않는 데이터의 장기 보관을 위해 설계된 아주 저렴한 저장 공간",
      "S3 Lifecycle Policy": "데이터의 보관 기간에 따라 자동으로 저장 비용이 싼 곳으로 옮겨주거나 삭제해주는 자동 비서",
      "Retrieval Time (인출 시간)": "아카이브된 데이터를 다시 읽을 수 있는 상태로 만드는 데 걸리는 대기 시간"
    }
  },
  {
    "id": 552,
    "question": "EC2 비용을 아끼고 싶은데, 우리 회사는 2~3개월마다 서버의 사양(가족/유형)을 자주 바꿉니다. 이런 유연한 환경에서 가장 높은 할인율을 챙길 수 있는 구매 옵션은?",
    "options": [
      "3년 약정으로 부분 선결제 예약 인스턴스(RI)를 구매합니다.",
      "1년 약정으로 선결제 없는 'Compute Savings Plans'를 구독합니다.",
      "1년 약정으로 전체 선결제 예약 인스턴스(RI)를 구매합니다.",
      "1년 약정으로 전체 선결제 'EC2 Instance Savings Plans'를 구독합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 서버 사양(인스턴스 제품군)을 자주 바꾸는 환경에서는 유연성이 생명입니다. Compute Savings Plans는 인스턴스 크기, 제품군, 리전, 운영 체제에 상관없이 약정한 금액만큼 전체적인 할인을 적용해주기 때문에 가장 높은 활용도를 보장합니다.\n\nhttps://aws.amazon.com/savingsplans/compute-savings-plans/",
    "glossary": {
      "Compute Savings Plans": "사양이나 지역을 바꿔도 상관없이 컴퓨팅 사용량에 대해 최대 66%까지 할인을 제공하는 요금제",
      "EC2 Instance Savings Plans": "특정 인스턴스 제품군(예: m5, c5 등) 내에서만 유연성을 보장하는 요금제",
      "Reserved Instance (RI)": "특정 사양의 인스턴스를 미리 찜해두고 할인을 받는 전통적인 방식"
    }
  },
  {
    "id": 553,
    "question": "여러 리전(us-east-1, us-west-2)에 흩어진 S3 버킷들 속에서 혹시 모를 개인정보(PII)를 찾아내려 합니다. 관리 수고를 가장 덜 들이는 방법은?",
    "options": [
      "각 리전에서 Amazon Macie를 활성화하고, S3 버킷을 검사하는 분석 작업을 생성합니다.",
      "AWS Security Hub를 켜고 AWS Config 규칙을 통해 S3 데이터를 하나하나 대조합니다.",
      "Amazon Inspector를 설정하여 S3 버킷의 파일 구조를 분석하도록 합니다.",
      "Amazon GuardDuty를 켜서 S3에 비정상적인 접근이 있는지 감시하게 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 'S3 속의 개인정보(PII) 찾기'라는 요구사항의 끝판왕은 Amazon Macie입니다. 머신러닝을 이용해 버킷 안의 수많은 파일을 뒤져 이름, 주민번호, 카드번호 같은 민감 정보를 자동으로 분류하고 보고해주므로 운영 수고가 거의 들지 않습니다.\n\nhttps://aws.amazon.com/macie/",
    "glossary": {
      "Amazon Macie": "기계 학습과 패턴 매칭을 통해 S3 내의 민감한 데이터를 자동으로 검색하고 보호하는 보안 서비스",
      "PII (Personally Identifiable Information)": "이름, 전화번호처럼 개인을 식별할 수 있는 민감한 정보",
      "Operational Overhead (운영 오버헤드)": "시스템 관리를 위해 운영자가 추가로 들여야 하는 시간과 노력"
    }
  },
  {
    "id": 554,
    "question": "SAP 애플리케이션과 SQL Server DB를 온프레미스에서 클라우드로 옮기려 합니다. 두 구성 요소 모두 메모리 사용량이 매우 높은 편인데, 어떤 EC2 제품군이 가장 어울릴까요?",
    "options": [
      "앱 서버는 컴퓨팅 최적화, DB 서버는 메모리 최적화 제품군을 씁니다.",
      "둘 다 하드디스크 성능이 좋은 스토리지 최적화 제품군으로 통일합니다.",
      "애플리케이션과 데이터베이스 모두 '메모리 최적화' 제품군을 사용합니다.",
      "앱 서버는 고성능 컴퓨팅(HPC) 제품군, DB는 메모리 최적화 제품군을 선택합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 문제에서 앱과 DB '모두' 메모리 사용률이 높다고 명시했습니다. 따라서 고민할 것 없이 두 서버 모두 메모리 용량 대비 성능이 가장 뛰어난 '메모리 최적화(r 제품군 등)' 인스턴스를 선택하는 것이 정석입니다.\n\nhttps://aws.amazon.com/ec2/instance-types/r6g/",
    "glossary": {
      "Memory Optimized Instance": "대규모 데이터를 메모리에서 빠르게 처리해야 하는 작업(DB, 캐시 등)에 최적화된 서버 유형",
      "Compute Optimized Instance": "CPU 연산 능력이 중요한 작업(영상 인코딩, 게임 서버 등)에 적합한 유형",
      "SAP": "기업의 전반적인 자원(인사, 재무 등)을 통합 관리하는 대규모 소프트웨어"
    }
  },
  {
    "id": 555,
    "question": "프라이빗 서브넷에 있는 서버(EC2)들이 SQS 대기열과 안전하게 통신하게 만들고 싶습니다. 인터넷망을 거치지 않는 가장 보안이 강력한 솔루션은?",
    "options": [
      "SQS 전용 '인터페이스 VPC 엔드포인트'를 프라이빗 서브넷에 만듭니다. 서버의 접근을 허용하는 인바운드 보안 그룹 규칙을 설정합니다.",
      "퍼블릭 서브넷에 SQS 전용 인터페이스 엔드포인트를 만들고, 프라이빗 서버들의 접근을 허용하는 정책을 겁니다.",
      "퍼블릭 서브넷에 엔드포인트를 만들고 SQS 쪽에서 해당 통로만 허용하도록 액세스 정책을 수정합니다.",
      "SQS용 '게이트웨이 엔드포인트'를 설치하고, 프라이빗 서브넷에 NAT 게이트웨이를 추가로 둡니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. SQS 같은 서비스는 '인터페이스 VPC 엔드포인트(PrivateLink)'를 통해 전용 통로를 만듭니다. 이때 엔드포인트는 서버가 있는 '프라이빗 서브넷' 내부에 위치해야 하며(A), 보안 그룹을 통해 서버로부터의 트래픽을 허가해주는 것이 가장 안전한 설계입니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
    "glossary": {
      "Interface VPC Endpoint": "AWS PrivateLink 기술을 이용해 인터넷을 거치지 않고 VPC 내부 망으로만 특정 서비스에 접속하게 해주는 주소",
      "SQS (Simple Queue Service)": "메시지를 임시로 보관하여 시스템 간의 부하를 조절하고 연결을 유연하게 돕는 서비스",
      "PrivateLink": "VPC 간 또는 VPC와 AWS 서비스 간에 비공개 연결을 제공하는 강력한 네트워크 보안 기술"
    }
  },
  {
    "id": 556,
    "question": "EC2 서버가 DynamoDB 데이터를 읽고 써야 합니다. 보안상 CloudFormation 템플릿에 비밀번호(자격 증명)를 노출하지 않으면서 권한을 주는 법은?",
    "options": [
      "IAM 역할을 생성하고, '인스턴스 프로필'을 통해 해당 역할을 EC2 서버에 직접 입혀줍니다.",
      "DynamoDB 권한이 있는 IAM 역할을 만들고, 인스턴스 프로필에 이 역할을 담아 EC2 서버와 연결합니다.",
      "템플릿 파라미터를 통해 관리자의 액세스 키를 수동으로 입력받아 서버에 전달합니다.",
      "템플릿 안에서 IAM 사용자를 새로 만들고, 그 비매너 키를 사용자 데이터(User Data)를 통해 서버 파일로 저장합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. EC2 서버가 AWS 서비스와 소통할 때 비밀번호를 사용하는 건 금물입니다. 'IAM 역할(Role)'을 만들고 이를 '인스턴스 프로필'에 담아 EC2에 연결하면, 서버는 내부적으로 안전한 임시 열쇠를 발급받아 DynamoDB를 마음껏 이용할 수 있게 됩니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    "glossary": {
      "IAM Role (IAM 역할)": "사용자 대신 특정 서비스나 자원이 일시적으로 행사할 수 있는 권한의 묶음",
      "Instance Profile (인스턴스 프로필)": "IAM 역할을 EC2 인스턴스에 전달하기 위해 사용하는 일종의 전송용 컨테이너",
      "Credential (자격 증명)": "시스템에 접속할 때 본인임을 증명하는 ID, 암호 또는 액세스 키"
    }
  },
  {
    "id": 557,
    "question": "S3에 쌓인 엄청난 양의 데이터를 병렬로 빠르게 분석하고 싶습니다. 특히 Redshift DB에 있는 정보와 합쳐서(보강해서) 처리해야 하는데, 가장 적합한 서비스는?",
    "options": [
      "Amazon Athena를 메인으로 쓰고, 부족한 데이터 보강은 AWS Glue에게 맡깁니다.",
      "대규모 병렬 처리에 최적화된 Amazon EMR을 사용합니다. EMR 안에서 Redshift 데이터까지 한꺼번에 처리합니다.",
      "EMR로 데이터를 처리한 뒤, 실시간 전송을 위해 Kinesis를 거쳐 Redshift로 다시 옮깁니다.",
      "AWS Glue로 사전 처리를 하고 Lake Formation을 이용해 데이터를 합쳐 분석합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. '병렬 데이터 처리'와 '대용량 보강 분석'이라는 키워드가 나오면 빅데이터의 제왕 Amazon EMR이 정답입니다. 수많은 서버를 동시에 돌려 S3의 데이터를 스캔하고 Redshift의 정보와 결합하여 고도의 통찰을 뽑아낼 수 있습니다.\n\nhttps://aws.amazon.com/emr/",
    "glossary": {
      "Amazon EMR": "Hadoop, Spark 같은 빅데이터 프레임워크를 이용해 방대한 데이터를 분산 처리하는 서비스",
      "Amazon Redshift": "초대용량 데이터를 분석하는 데 최적화된 데이터 창고(Data Warehouse) 서비스",
      "Parallel Processing (병렬 처리)": "하나의 큰 일을 여러 대로 나누어 동시에 처리하여 시간을 획기적으로 줄이는 방식"
    }
  },
  {
    "id": 558,
    "question": "같은 계정, 같은 리전에 있는 두 VPC 사이에 통로를 뚫어 데이터를 주고받으려 합니다 (월 500GB 규모). 가장 돈이 안 드는 깔끔한 방법은?",
    "options": [
      "Transit Gateway를 설치하고 두 VPC를 중앙에서 묶어줍니다.",
      "VPC 사이에 Site-to-Site VPN 터널을 뚫고 암호화 통로를 만듭니다.",
      "VPC 피어링(Peering) 연결을 설정하고 라우팅 테이블을 업데이트합니다.",
      "Direct Connect를 신청해서 AWS 전용선을 리전 내부에 깔아버립니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. VPC 피어링은 같은 리전 내에서 두 네트워크를 직접 잇는 가장 저렴하고 빠른 방법입니다. 별도의 게이트웨이 비용이 들지 않고 지연 시간도 거의 없어 비용 효율성 면에서 따라올 자가 없습니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
    "glossary": {
      "VPC Peering": "두 VPC를 마치 하나의 네트워크인 것처럼 직접 연결해주는 서비스",
      "Transit Gateway": "수백 개의 VPC나 사내망을 거미줄처럼 복잡하지 않게 중앙에서 한 번에 연결하는 허브",
      "Direct Connect": "사내 전산실과 AWS 사이에 전용 광케이블 통로를 깔아 빠르고 안정적인 통신을 보장하는 서비스"
    }
  },
  {
    "id": 559,
    "question": "여러 팀이 각자의 계정에서 리소스를 쓰고 있습니다. 통합 빌링(청구) 화면에서 각 제품군(팀)별로 비용이 얼마나 나가는지 정확히 구분하고 싶은데, 필요한 2단계는?",
    "options": [
      "AWS 결제 콘솔에서 'AWS 생성 태그'를 선택하여 활성화합니다.",
      "AWS 결제 콘솔에서 팀별로 달아둔 '사용자 지정 태그'를 비용 할당 태그로 선택합니다.",
      "리소스 그룹 콘솔에서 팀별 태그 정보를 확인하고 수동으로 체크합니다.",
      "각 계정(자식 계정)에 로그인해서 팀별 태그를 하나하나 다시 활성화합니다.",
      "조직의 마스터 계정(부모 계정)에서 팀별로 지정한 특정 태그를 비용 추적용으로 활성화합니다."
    ],
    "answer": [1, 4],
    "explanation": "정답은 B와 E입니다. 비용 구분을 위해 리소스에 달아둔 태그를 사용하려면, 조직의 마스터 계정(E)에서 해당 태그를 '비용 할당 태그'로 활성화(B)해줘야 합니다. 그래야 통합 청구서에서 팀별로 항목이 나뉘어 나옵니다.\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    "glossary": {
      "Tag (태그)": "리소스에 붙이는 라벨(메타데이터). 예: 부서, 프로젝트명, 관리자",
      "Cost Allocation Tags (비용 할당 태그)": "특정 태그를 기준으로 비용 보고서를 쪼개서 분석하게 해주는 기능",
      "Consolidated Billing (통합 빌링)": "여러 계정의 요금을 하나로 합쳐서 내고, 전체 사용량에 따른 할인을 챙기는 시스템"
    }
  },
  {
    "id": 560,
    "question": "AWS Organizations로 계정을 관리 중인데, 누군가 조직의 계층 구조(OU)를 마음대로 바꿀까 봐 걱정됩니다. 구조가 바뀌면 바로 알 수 있는 가장 간편한 방법은?",
    "options": [
      "AWS Control Tower를 사용하고, '계정 드리프트(Drift) 알림' 설정을 통해 변화를 감지합니다.",
      "AWS Control Tower와 Config 집계 규칙을 이용해 실시간으로 구조를 감시합니다.",
      "CloudTrail의 조직 추적 기능을 켜서 모든 API 기록을 사람이 매일 확인합니다.",
      "CloudFormation 템플릿의 드리프트 감지 기능을 이용해 OU의 현재 상태를 체크합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. Control Tower는 여러 계정을 관리하는 지휘관 서비스입니다. 여기서 관리하는 조직 구조가 처음 설정값에서 벗어나면(Drift), 관제 대시보드에서 즉시 알림을 주어 구조 변경을 실시간으로 감지할 수 있습니다.\n\nhttps://aws.amazon.com/controltower/",
    "glossary": {
      "AWS Control Tower": "여러 계정의 보안 가이드라인(가드레일)을 자동으로 설정하고 관리해주는 서비스",
      "Drift (드리프트)": "처음 의도했던 설정(Template)이나 구조에서 실제 인프라 상태가 어긋나 있는 상태",
      "OU (Organizational Unit)": "계정들을 부서나 용도에 맞게 그룹화하여 관리하는 조직 단위"
    }
  },
  {
    "id": 561,
    "question": "DynamoDB에서 제품 상세 정보를 읽어올 때 반응 속도가 너무 느려서 개선하려 합니다. 운영 수고를 최소화하면서 0.001초(밀리초) 수준의 응답 속도를 뽑아내는 해결책은?",
    "options": [
      "DynamoDB 앞에 DAX(Accelerator) 클러스터를 배치하고 읽기 요청을 이쪽으로 보냅니다.",
      "ElastiCache Redis를 따로 설치해서 읽기 데이터를 직접 코딩으로 캐싱합니다.",
      "ElastiCache Memcached를 서버와 DB 사이에 두고 캐시 로직을 구현합니다.",
      "DynamoDB 스트림과 람다를 엮어, 데이터가 바뀔 때마다 ElastiCache를 업데이트하는 시스템을 개발합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 'DynamoDB 전용 가속기'인 DAX가 정답입니다. DAX는 완전 관리형 인메모리 캐시로, 별도의 복잡한 캐싱 코드를 짤 필요 없이 읽기 성능을 0.001초(마이크로초) 수준으로 끌어올려 줍니다.\n\nhttps://aws.amazon.com/dynamodb/dax/",
    "glossary": {
      "Amazon DAX (DynamoDB Accelerator)": "DynamoDB의 응답 속도를 기존 밀리초 단위에서 마이크로초 단위로 높여주는 전용 캐시 서비스",
      "Latency (지연 시간)": "요청을 보냈을 때 결과가 돌아올 때까지 걸리는 대기 시간",
      "Managed Service (완전 관리형 서비스)": "서버 설치, 패치, 백업 등을 AWS가 알아서 다 해주는 서비스"
    }
  },
  {
    "id": 562,
    "question": "EC2 서버에서 DynamoDB를 호출할 때, 트래픽이 공용 인터넷망을 타지 않게 꽁꽁 숨기고 싶습니다. 필요한 2가지 네트워크 조치는?",
    "options": [
      "라우팅 테이블에 엔드포인트를 가리키는 경로(Entry)를 추가합니다.",
      "DynamoDB 전용 '게이트웨이 VPC 엔드포인트'를 생성합니다.",
      "EC2 전용 인터페이스 엔드포인트를 만들어 외부 통신을 차단합니다.",
      "모든 서브넷에 탄력적 네트워크 인터페이스(ENI)를 하나씩 수동으로 심습니다.",
      "엔드포인트용 보안 그룹을 만들고 서버 IP를 등록합니다."
    ],
    "answer": [0, 1],
    "explanation": "정답은 A와 B입니다. S3와 DynamoDB는 '게이트웨이 엔드포인트'를 사용합니다(B). 엔드포인트를 만든 후, 우리 서버들이 이 통로를 쓰도록 '라우팅 테이블'이라는 이정표에 엔드포인트 정보를 추가(A)해야 비로소 폐쇄망 통신이 가능해집니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-ddb.html",
    "glossary": {
      "Gateway VPC Endpoint": "S3와 DynamoDB를 위해 제공되는 인터넷 게이트웨이 없이 내부망으로만 연결하는 특수 경로",
      "Route Table (라우팅 테이블)": "네트워크 패킷이 목적지를 찾아가기 위해 참조하는 지도",
      "Public Internet (공용 인터넷)": "누구나 접근 가능하고 보안 위험이 있는 외부 망"
    }
  },
  {
    "id": 563,
    "question": "AWS의 EKS와 우리 회사 전산실(On-premise)에 있는 쿠버네티스 클러스터를 한 화면에서 통합 관리하고 싶습니다. 가장 운영 효율적인 도구는?",
    "options": [
      "CloudWatch Container Insights를 통해 정보를 긁어모아 대시보드를 만듭니다.",
      "Amazon EKS 커넥터(Connector)를 사용하여 외부 클러스터를 EKS 콘솔에 등록합니다.",
      "AWS Systems Manager 에이전트를 모든 서버에 깔고 정보를 통합 수집합니다.",
      "EKS Anywhere를 메인 지휘소로 삼고 다른 클러스터들을 수동으로 연결합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. Amazon EKS 커넥터는 외부 쿠버네티스 클러스터를 AWS 웹 콘솔 한곳에 등록해서 볼 수 있게 해주는 도구입니다. 전산실(온프레미스) 클러스터도 EKS 콘솔에서 통합 관리할 수 있어 운영 효율이 대폭 상승합니다.\n\nhttps://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html",
    "glossary": {
      "Amazon EKS Connector": "외부 쿠버네티스 클러스터를 AWS EKS 콘솔과 연결하여 가시성을 확보해주는 기능",
      "Kubernetes (쿠버네티스)": "컨테이너화된 애플리케이션을 자동으로 배포하고 관리해주는 오픈소스 플랫폼",
      "EKS (Elastic Kubernetes Service)": "AWS에서 제공하는 관리형 쿠버네티스 서비스"
    }
  },
  {
    "id": 564,
    "question": "주식 거래 앱의 중요 정보(민감 데이터)를 RDS MySQL에 저장하려 합니다. 데이터베이스 관리자(DBA)조차 실제 데이터를 못 보게 하려면 어떤 암호화가 필요할까요?",
    "options": [
      "EBS 볼륨 전체를 암호화하여 물리적 유출을 막습니다.",
      "데이터를 DB로 보내기 전, 앱 서버에서 KMS를 이용해 암호화하는 '클라이언트 측 암호화'를 적용합니다.",
      "S3 버킷 정책과 KMS 서버 측 암호화를 조합해 데이터를 분산 저장합니다.",
      "FSx for Windows를 서버에 연결하고 윈도우 파일 권한 기능을 통해 접근을 막습니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. DB 관리자조차 데이터를 못 보게 하려면 'DB에 들어가기 전'에 암호화해야 합니다. 앱 서버에서 KMS를 이용해 암호화(클라이언트 측 암호화)해서 보내면, DB에는 암호문만 쌓이므로 열쇠가 없는 관리자는 진짜 내용을 볼 수 없습니다.\n\nhttps://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#client-side-encryption",
    "glossary": {
      "Client-side Encryption": "데이터가 전송되거나 서버에 저장되기 전, 사용자 시스템에서 미리 암호화하는 보안 방식",
      "DBA (Database Administrator)": "데이터베이스를 설치, 관리 및 최적화하는 총괄 관리자",
      "KMS (Key Management Service)": "암호화용 마스터 키를 안전하게 보관하고 관리해주는 보안 서비스"
    }
  },
  {
    "id": 565,
    "question": "온프레미스 MySQL을 클라우드로 옮기려 합니다. 기존 앱과 찰떡같이 호환되어야 하고, 대박 터졌을 때 자동으로 사양이 늘어나는(Auto Scaling) 확장성도 갖춰야 합니다. 최적의 마이그레이션 대상은?",
    "options": [
      "RDS MySQL로 옮기고 '탄력적 스토리지 확장' 옵션만 켭니다.",
      "Redshift로 옮겨서 데이터 분석 효율을 높이고 오토 스케일링을 활성화합니다.",
      "DMS를 이용해 'Amazon Aurora'로 마이그레이션하고 Aurora Auto Scaling을 구성합니다.",
      "DynamoDB로 구조를 확 바꿔서 옮기고 오토 스케일링 정책을 겁니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 기존 MySQL 앱과의 호환성을 100% 지키면서 클라우드만의 자동 확장 혜택을 누리기에 Amazon Aurora가 최적입니다. DMS를 함께 사용하면 가동 중지 시간을 최소화하며 안전하게 이사할 수 있습니다.\n\nhttps://aws.amazon.com/rds/aurora/",
    "glossary": {
      "Amazon Aurora": "MySQL/PostgreSQL과 완벽히 호환되면서 성능은 3~5배 더 뛰어난 AWS 클라우드 전용 DB",
      "AWS DMS (Database Migration Service)": "데이터베이스를 중단 없이 클라우드로 안전하게 옮겨주는 배송 서비스",
      "Auto Scaling": "부하에 맞춰 서버 자원을 자동으로 늘리거나 줄여주는 기능"
    }
  },
  {
    "id": 566,
    "question": "여러 리눅스 서버(EC2)들이 공유 파일 저장소 하나를 동시에 쓰고(읽기/쓰기) 싶어 합니다. 계층적 폴더 구조를 유지하면서 성능까지 챙기는 가장 좋은 스토리지 서비스는?",
    "options": [
      "S3 버킷을 만들고 모든 서버에서 직접 통신하게 합니다.",
      "Amazon EFS(Elastic File System)를 만들고 각 EC2 서버에 마운트(연결)합니다.",
      "EBS 볼륨 최신형(io2)을 만들고 여러 서버에 강제로 동시에 붙입니다.",
      "개별 서버마다 EBS를 달아두고, 서버끼리 파일들을 수동으로 동기화시킵니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 리눅스 서버 여러 대가 동시에 한 드라이브를 쓰고 싶을 땐 Amazon EFS가 정석입니다. 표준 NFS 프로토콜을 사용하며 사용한 만큼만 비용을 내는 합리적인 공유 저장소입니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "Amazon EFS": "여러 EC2 인스턴스가 동시에 공유해서 사용할 수 있는 네트워크 기반 파일 저장소 (리눅스용 NFv4 표준)",
      "Mount (마운트)": "외부 저장 장치나 네트워크 저장소를 운영 체제 내부의 폴더처럼 연결하는 과정",
      "Shared Storage (공유 스토리지)": "여러 컴퓨터가 네트워크를 통해 공동으로 사용하는 데이터 창고"
    }
  },
  {
    "id": 567,
    "question": "빌딩 에너지 사용량 센서들이 HTTP 요청으로 데이터를 보내옵니다. 이걸 받아서 가공하고 DB에 저장해야 하는데, 앞으로 기능을 계속 붙여나갈 '독립적인 구성 요소' 기반의 서버리스 설계는?",
    "options": [
      "API Gateway + 람다(Lambda) 조합으로 데이터를 받아 DynamoDB에 저장합니다.",
      "로드 밸런서(ALB) + EC2 서버군을 띄워 S3에 파일을 저장합니다.",
      "API Gateway + 람다로 받고, 그 데이터들을 SQL Server DB에 차곡차곡 쌓습니다.",
      "ALB + EC2 조합으로 처리한 뒤 EFS 공유 드라이브에 저장합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. '서버리스 + 독립적 확장' 요구에는 API Gateway와 Lambda 조합이 최고의 정답입니다. 여기에 무한 확장 가능한 DynamoDB가 뒤를 받쳐주면 유지보수가 가장 쉬운 현대적인 시스템이 완성됩니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "AWS Lambda": "서버 관리 없이 이벤트에 반응하여 코드를 1회성으로 실행해주는 경제적인 기술",
      "Amazon API Gateway": "외부에서 들어오는 HTTP 요청(창구)을 안전하게 관리하고 다른 서비스로 넘겨주는 관문",
      "Microservices (마이크로서비스)": "시스템을 독립적인 작은 단위들로 쪼개어 개발하고 관리하는 효율적인 설계 방식"
    }
  },
  {
    "id": 568,
    "question": "엔지니어링 도면(설계도)을 저장하고 보여주는 웹 서비스를 만듭니다. 데이터 양은 페타바이트급으로 엄청나지만, 도면이 로드될 때까지 사용자가 기다리는 시간을 최소화하려 합니다. 최적의 조합은?",
    "options": [
      "S3에 도면을 저장하고, 전 세계 배달망인 CloudFront를 통해 캐싱하여 보여줍니다.",
      "S3 Glacier에 데이터를 보관하고 ElastiCache로 응답 속도를 높입니다.",
      "EBS 볼륨에 데이터를 넣고 CloudFront를 붙여서 전송합니다.",
      "Storage Gateway를 쓰고 ElastiCache를 덧붙여 속도를 보장합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 방대한 데이터를 저렴하고 안전하게 보관할 곳은 S3뿐입니다. 여기에 더해 전 세계 사용자에게 빛의 속도로 배달해주는 CloudFront(CDN)를 결합하면 속도와 용량을 모두 잡을 수 있습니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "Amazon CloudFront": "전 세계Edge 로케이션을 이용해 이미지, 동영상 등을 사용자에게 빛의 속도로 배달하는 서비스",
      "Caching (캐싱)": "자주 찾는 데이터를 가까운 곳에 임시로 복제해두어 빠르게 꺼내 쓰는 기술",
      "Petabyte (페타바이트)": "약 1,000테라바이트(TB). 엄청나게 방대한 데이터 단위를 의미"
    }
  },
  {
    "id": 569,
    "question": "EventBridge 규칙을 통해 외부(타사) API를 호출하고 있는데, 상대 쪽에서 우리 신호를 전혀 못 받았다고 합니다. 규칙이 제대로 작동하는지 확인할 수 있는 곳은?",
    "options": [
      "CloudWatch의 'AWS/Events' 지표(Metrics)를 살펴봅니다.",
      "SQS 데드 레터 대기열(DLQ)에 실패한 기록이 쌓였는지 체크합니다.",
      "CloudWatch Logs에서 이벤트 전달 내역을 검색해봅니다.",
      "CloudTrail을 통해 EventBridge와 관련된 API 호출 기록을 전부 뒤져봅니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. EventBridge 규칙이 제대로 작동하는지 확인할 수 있는 첫 번째 지표는 CloudWatch Metrics입니다. 트리거 횟수나 호출 시도 횟수 지표를 통해 우리 시스템이 일을 제대로 시작했는지 즉시 파악할 수 있습니다.\n\nhttps://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring.html",
    "glossary": {
      "Amazon EventBridge": "시스템 내부의 사건들을 감지해 다른 곳으로 알려주는 이벤트 우체국",
      "CloudWatch Metrics": "시스템의 현재 상태(CPU 사용률, 호출 횟수 등)를 숫자로 보여주는 성능 지표",
      "Endpoint (엔드포인트)": "소프트웨어나 프로그램이 통신하는 최종 목적지(주소)"
    }
  },
  {
    "id": 570,
    "question": "주말도 아닌 '매주 금요일 밤'에만 업무가 폭증하는 서버 로드가 있습니다. 금요일만 최대 6대까지 서버(EC2)를 늘리고 싶은데, 가장 운영이 편한 설정은?",
    "options": [
      "EventBridge로 알람을 맞춰놓고 금요일마다 사람이 직접 들어가서 서버를 늘립니다.",
      "Auto Scaling 그룹에 '예약된 작업(Scheduled Actions)'을 추가해 금요일 특정 시간에 늘어나게 설정합니다.",
      "수동 조정 기능을 활용해 필요할 때마다 버튼을 눌러 확장합니다.",
      "부하(CPU 사용량 등)를 감시하는 자동 조정(Dynamic Scaling)만 믿고 기다립니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. '매주 금요일 밤'처럼 예정된 이벤트에는 예약된 작업(Scheduled Scaling)이 정석입니다. 특정 요일과 시간에 맞춰 자동으로 서버를 늘려놓으므로 사람이 직접 신경 쓸 필요가 전혀 없습니다.\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-scheduled.html",
    "glossary": {
      "Scheduled Scaling (예약된 조정)": "정해진 시간과 날짜에 맞춰 미리 서버를 늘리거나 줄여놓는 계획적인 확장 방식",
      "Dynamic Scaling (동적 조정)": "CPU 사용량 등이 80%를 넘으면 그때 서버를 한 대 더 추가하는 반응형 확장 방식",
      "Amazon EC2 Auto Scaling": "서버 부하를 감시해 자동으로 대수를 조절해주는 관리형 도우미"
    }
  },
  {
    "id": 571,
    "question": "보안이 매우 엄격한 기업용 REST API를 만들려 합니다. 'TLSv1.3' 버전만 허용해야 하고, 인증서도 꼭 '외부 CA'에서 직접 도장 찍어온 걸 써야 합니다. 어떻게 구성할까요?",
    "options": [
      "타사 CA에서 받은 인증서를 ACM으로 가져오기(Import) 합니다. API Gateway에서 'HTTP API'를 만들고 사용자 지정 도메인에 이 인증서를 연결합니다.",
      "ACM에서 타사 CA 승인을 받는 옵션을 선택해 인증서를 새로 발급받습니다. 이후 API Gateway와 연동합니다.",
      "ACM으로 외부 인증서를 가져온 뒤, Lambda 함수 URL 기능에 직접 인증서를 입혀서 배포합니다.",
      "ACM에서 인증서를 관리하되, 외부 CA 승인 절차를 AWS가 대신 처리하게 위임하는 설정을 보강합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 외부 CA 인증서와 최신 TLS 1.3을 모두 써야 하는 상황입니다. 먼저 인증서를 ACM으로 가져오기(Import) 하고, TLS 1.3을 지원하는 API Gateway의 'HTTP API' 유형을 선택해 연동하는 것이 정석 설계입니다.\n\nhttps://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-custom-domain-names.html",
    "glossary": {
      "TLS 1.3": "데이터를 더 빠르게 전송하면서도 보안성은 더 높인 최신 암호화 통신 규칙",
      "CA (Certificate Authority)": "이 사이트가 진짜임을 증명해주는 공신력 있는 인증 기관",
      "Import Certificate": "외부에서 이미 만든 인증서 파일을 가져와서 AWS에서 쓸 수 있게 등록하는 절차"
    }
  },
  {
    "id": 572,
    "question": "온프레미스 MySQL(2GiB 메모리 요구)을 클라우드로 옮기려 합니다. 사용량이 들쭉날쭉하고 가끔 돌발적으로 폭증하는 환경에서, 관리자가 손 하나 까딱 안 하고 사양을 자동 조절하려면?",
    "options": [
      "기본적인 읽기/쓰기 용량을 지정해서 DynamoDB로 옮깁니다.",
      "최소 사양이 1 ACU인 일반 Amazon Aurora를 설치합니다.",
      "최소 사양이 1 ACU인 'Amazon Aurora Serverless v2'를 구축합니다.",
      "정확히 2GiB 메모리를 가진 RDS MySQL 서버를 예약 인스턴스로 구매합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. '예측 불가능한 트래픽 + 관리 오버헤드 최소' 조건에는 Aurora Serverless v2가 끝판왕입니다. 부하에 따라 사양을 단 몇 초 만에 세밀하게 조절해주므로 관리자가 서버 크기를 고민할 필요가 없습니다.\n\nhttps://aws.amazon.com/rds/aurora/serverless/",
    "glossary": {
      "Amazon Aurora Serverless v2": "DB 부하에 따라 사양을 실시간으로 자동 조절해주는 지능형 데이터베이스 엔진",
      "ACU (Aurora Capacity Unit)": "Aurora Serverless에서 사용하는 연산 능력(CPU와 메모리 조합)의 단위",
      "Direct Connect": "회사 내부망과 AWS를 전용선으로 연결해 지연 시간을 줄이는 네트워크 서비스"
    }
  },
  {
    "id": 573,
    "question": "Java 11로 만든 람다(Lambda) 함수를 돌리는데, 처음 시작할 때 너무 게으르게(Cold Start) 반응해서 고민입니다. 추가 비용 없이 시작 속도를 확 높여주는 마법은?",
    "options": [
      "람다의 '프로비저닝된 동시성'을 넉넉하게 구매해 둡니다.",
      "람다 함수의 제한 시간(Timeout)을 최대한 길게 늘려 잡습니다.",
      "람다 서버의 메모리 용량을 키워서 엔진을 더 빨리 가동시킵니다.",
      "람다 'SnapStart' 기능을 활성화하여 초기 상태를 스냅샷으로 저장해둡니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. Java 기반 람다의 초기 지연(Cold Start)을 해결해주는 구원 투수가 SnapStart입니다. 함수 초기 상태를 스냅샷으로 저장했다 꺼내 쓰기 때문에 속도가 획기적으로 빨라지며 추가 비용도 들지 않습니다.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
    "glossary": {
      "Cold Start (콜드 스타트)": "오랫동안 안 쓰던 람다 함수가 호출되었을 때, 서버를 새로 준비하고 코드를 올리느라 처음에만 느려지는 현상",
      "SnapStart": "Lambda 함수를 초기화된 상태로 미리 저장해두어 호출 즉시 실행되게 돕는 성능 최적화 기술",
      "Outlier Latency (이상치 지연 시간)": "대부분의 요청은 빠르지만, 가끔씩 매우 느리게 튀는 예외적인 대기 시간"
    }
  },
  {
    "id": 574,
    "question": "매주 주말 딱 2시간만 보고서를 뽑을 때 쓰는 RDS MySQL이 있습니다. 나머지 시간엔 거의 놀고 있는데, 비용을 가장 효율적으로 줄일 수 있는 이사 방법은?",
    "options": [
      "기존 RDS를 'Aurora Serverless v2'로 마이그레이션합니다.",
      "일반 Aurora MySQL 클러스터로 옮겨서 고성능을 유지합니다.",
      "EC2에 MySQL을 직접 깔고, 안 쓸 때는 인스턴스 예약을 통해 돈을 아낍니다.",
      "컨테이너(ECS) 기반의 MySQL로 옮겨서 필요할 때만 컨테이너를 띄워 씁니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 거의 안 쓰다가 가끔 빡세게 쓰는 환경에는 서버리스 DB가 최고입니다. Aurora Serverless v2는 사용량에 맞춰 비용이 청구되므로 주말 2시간 작업 외의 시간 동안 돈을 극적으로 아낄 수 있습니다.\n\nhttps://aws.amazon.com/rds/aurora/serverless/",
    "glossary": {
      "Amazon RDS": "복잡한 DB 설치와 백업을 AWS가 대신 해주는 관리형 데이터베이스 서비스",
      "Aurora Serverless": "사용자가 서버 사양을 정할 필요 없이 부하에 맞춰 돈만 내고 쓰는 DB 형태",
      "Operational Efficiency (운영 효율성)": "적은 인력과 비용으로 시스템을 얼마나 안정적이고 효과적으로 운영할 수 있는지를 나타내는 척도"
    }
  },
  {
    "id": 575,
    "question": "EKS(쿠버네티스) 서비스의 데이터를 PostgreSQL DB에 저장하려 합니다. '서버 한 대가 죽어도 멀쩡해야(고가용성)' 하고, 특히 '읽기 작업'이 많아질 것에 대비해 용량 확장이 쉬워야 합니다. 어떤 DB가 딱일까요?",
    "options": [
      "DynamoDB 글로벌 테이블을 만들어 전 세계에 데이터를 뿌립니다.",
      "가장 표준적인 '다중 AZ(Multi-AZ)' RDS를 생성합니다.",
      "1개의 쓰기 서버와 2개의 읽기 가능한 대기로 구성된 '다중 AZ DB 클러스터'를 생성합니다.",
      "리전 간 읽기 전용 복제본(Cross-Region)을 만들어 멀리서도 읽게 합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 최신 '다중 AZ DB 클러스터'는 고가용성뿐만 아니라 읽기 성능 확장까지 잡았습니다. 대기 서버 두 대를 읽기 작업에 적극 투입할 수 있어 기존 방식보다 훨씬 효율이 좋습니다.\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
    "glossary": {
      "Multi-AZ DB Cluster": "가용성과 읽기 성능이라는 두 마리 토끼를 잡기 위해 설계된 RDS의 최신 배포 방식",
      "High Availability (고가용성)": "시스템이 장애 없이 거의 100%에 가깝게 계속 작동하는 능력",
      "Read Workload (읽기 워크로드)": "데이터를 수정하는 일보다는 이미 저장된 정보를 조회하는 작업의 비중"
    }
  }
];