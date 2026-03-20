export const quizData = [
  {
    "id": 51,
    "question": "회사는 REST API 로 검색하기 위해 주문 배송 통계를 제공하는 애플리케이션을 개발 \n중입니다. 이 회사는 배송 통계를 추출하고 데이터를 읽기 쉬운 HTML 형식으로 구성하고 \n매일 아침 여러 이메일 주소로 보고서를 보내려고 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 취해야 합니까? \n(2 개를 선택하세요.)",
    "options": [
      "데이터를 Amazon Kinesis Data Firehose 로 보내도록 애플리케이션을 구성합니다.",
      "Amazon Simple Email Service(Amazon SES)를 사용하여 데이터 형식을 지정하고 \n보고서를 이메일로 보냅니다.",
      "AWS Glue 작업을 호출하여 데이터에 대한 애플리케이션의 API 를 쿼리하는 Amazon \nEventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성합니다.",
      "AWS Lambda 함수를 호출하여 데이터에 대한 애플리케이션의 API 를 쿼리하는 Amazon \nEventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성합니다.",
      "Amazon S3 에 애플리케이션 데이터를 저장합니다. 보고서를 이메일로 보낼 S3 이벤트 \n대상으로 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다."
    ],
    "answer": 1,
    "answer2": 3,
    "explanation": "정답은 B와 D입니다. 정해진 시간에 데이터를 추출하여 보고서를 작성하고 메일을 보내고 싶을 때는 EventBridge 스케줄러를 통해 Lambda를 실행하고 SES로 메일을 발송하는 조합이 가장 깔끔합니다.\n\nhttps://aws.amazon.com/ses/",
    "glossary": {
      "EventBridge (CloudWatch Events)": "특정 시간이나 상태 변화에 따라 이벤트를 발생시켜 다른 서비스를 실행하는 스케줄러",
      "Amazon SES": "대량의 이메일 발송 및 수신을 위한 확장 가능한 클라우드 기반 서비스"
    }
  },
  {
    "id": 52,
    "question": "회사에서 온프레미스 애플리케이션을 AWS 로 마이그레이션하려고 합니다. 애플리케이션은 \n수십 기가바이트에서 수백 테라바이트까지 다양한 크기의 출력 파일을 생성합니다. \n애플리케이션 데이터는 표준 파일 시스템 구조로 저장되어야 합니다. 회사는 자동으로 \n확장되는 솔루션을 원합니다. 고가용성이며 최소한의 운영 오버헤드가 필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon \nElastic \nContainer \nService(Amazon \nECS)에서 \n컨테이너로 \n실행되도록 \n애플리케이션을 마이그레이션합니다. 스토리지에 Amazon S3 를 사용합니다.",
      "Amazon Elastic Kubernetes Service(Amazon EKS)에서 컨테이너로 실행되도록 \n애플리케이션을 마이그레이션합니다. 스토리지에 Amazon Elastic Block Store(Amazon \nEBS)를 사용합니다.",
      "다중 \nAZ \nAuto \nScaling \n그룹의 \nAmazon \nEC2 \n인스턴스로 \n애플리케이션을 \n마이그레이션합니다. 스토리지에 Amazon Elastic File System(Amazon EFS)을 사용합니다.",
      "다중 \nAZ \nAuto \nScaling \n그룹의 \nAmazon \nEC2 \n인스턴스로 \n애플리케이션을 \n마이그레이션합니다. 스토리지에 Amazon Elastic Block Store(Amazon EBS)를 사용합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 수 테라바이트의 방대한 데이터를 '표준 파일 구조'로 관리하면서 용량 걱정 없이 쓰고 싶다면 Amazon EFS가 정답입니다. 자동으로 확장되며 높은 가용성을 제공합니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있고 용량이 자동으로 확장되는 탄력적 파일 스토리지",
      "Multi-AZ": "중단 없는 서비스를 위해 여러 가용 영역에 자원을 배치해두는 고가용성 설계"
    }
  },
  {
    "id": 53,
    "question": "회사는 Amazon S3 에 회계 기록을 저장해야 합니다. 기록은 1 년 동안 즉시 액세스할 수 \n있어야 하며 그 후 추가로 9 년 동안 보관해야 합니다. 관리자 및 루트 사용자를 포함하여 \n회사의 그 누구도 전체 10\n년 동안 기록을 삭제할 수 없습니다. 기록은 최대한의 \n복원력으로 저장해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "전체 10 년 동안 S3 Glacier 에 기록을 저장합니다. 접근통제 정책을 사용하여 10 년 동안 \n기록 삭제를 거부합니다.",
      "S3 Intelligent-Tiering 을 사용하여 레코드를 저장합니다. IAM 정책을 사용하여 레코드 \n삭제를 거부합니다. 10 년 후 삭제를 허용하도록 IAM 정책을 변경합니다.",
      "S3 수명 주기 정책을 사용하여 1 년 후에 S3 Standard 에서 S3 Glacier Deep Archive 로 \n레코드를 전환합니다. 10 년 동안 규정 준수 모드에서 S3 Object Lock 을 사용합니다.",
      "S3 수명 주기 정책을 사용하여 1\n년 후 레코드를 S3 Standard\n에서 S3 One \nZone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 10 년 동안 거버넌스 모드에서 S3 \nObject Lock 을 사용합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 최고 권한자조차 데이터를 지울 수 없게 법규를 준수하여 보관하려면 S3 Object Lock의 규정 준수 모드가 필수입니다. 여기에 Deep Archive를 곁들이면 비용까지 완벽히 잡습니다.\n\nhttps://aws.amazon.com/s3/features/object-lock/",
    "glossary": {
      "Object Lock (Compliance Mode)": "한번 저장된 데이터를 정해진 기간 동안 루트 사용자를 포함한 그 누구도 수정/삭제할 수 없게 잠그는 기능",
      "S3 Glacier Deep Archive": "자주 읽지 않는 데이터를 최저 비용으로 수십 년간 보관할 수 있는 아카이브 스토리지"
    }
  },
  {
    "id": 54,
    "question": "회사는 AWS 에서 여러 Windows 워크로드를 실행합니다. 회사 직원은 두 개의 Amazon \nEC2 인스턴스에서 호스팅되는 Windows 파일 공유를 사용합니다. 파일 공유는 서로 간에 \n데이터를 동기화하고 중복 복사본을 유지합니다. 이 회사는 사용자가 현재 파일에 \n액세스하는 방식을 보존하는 고가용성 및 내구성 스토리지 솔루션을 원합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "모든 데이터를 Amazon S3 로 마이그레이션합니다. 사용자가 파일에 액세스할 수 있도록 \nIAM 인증을 설정합니다.",
      "Amazon S3 파일 게이트웨이를 설정합니다. 기존 EC2 인스턴스에 S3 파일 게이트웨이를 \n탑재합니다.",
      "다중 AZ 구성을 사용하여 파일 공유 환경을 Windows 파일 서버용 Amazon FSx 로 \n확장합니다. 모든 데이터를 Windows 파일 서버용 FSx 로 마이그레이션합니다.",
      "다중 AZ 구성을 사용하여 파일 공유 환경을 Amazon Elastic File System(Amazon \nEFS)으로 확장합니다. 모든 데이터를 Amazon EFS 로 마이그레이션합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 윈도우 파일 탐색기 환경을 그대로 유지하면서 고장 나지 않는 튼튼한 공유 저장소를 만들고 싶다면 FSx for Windows File Server가 현명한 파트너입니다.\n\nhttps://aws.amazon.com/fsx/windows/",
    "glossary": {
      "FSx for Windows File Server": "Windows 표준 환경을 완벽하게 지원하며 자동 백업과 복제 기능을 갖춘 완전 관리형 파일 시스템",
      "High Availability (고가용성)": "장애 발생 시에도 서비스 중단 없이 계속 운영될 수 있도록 보장하는 시스템 성질"
    }
  },
  {
    "id": 55,
    "question": "솔루션 설계자는 여러 서브넷을 포함하는 VPC 아키텍처를 개발 중입니다. 아키텍처는 \nAmazon EC2 인스턴스 및 Amazon RDS DB 인스턴스를 사용하는 애플리케이션을 \n호스팅합니다. 아키텍처는 2 개의 가용 영역에 있는 6 개의 서브넷으로 구성됩니다. 각 가용 \n영역에는 퍼블릭 서브넷, 프라이빗 서브넷 및 데이터베이스용 전용 서브넷이 포함됩니다. \n프라이빗 서브넷에서 실행되는 EC2 인스턴스만 RDS 데이터베이스에 액세스할 수 \n있습니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "퍼블릭 서브넷의 CIDR 블록에 대한 경로를 제외하는 새 라우팅 테이블을 생성합니다. \n라우팅 테이블을 데이터베이스 서브넷과 연결합니다.",
      "퍼블릭 서브넷의 인스턴스에 할당된 보안 그룹의 인바운드 트래픽을 거부하는 보안 \n그룹을 생성합니다. 보안 그룹을 DB 인스턴스에 연결합니다.",
      "프라이빗 서브넷의 인스턴스에 할당된 보안 그룹의 인바운드 트래픽을 허용하는 보안 \n그룹을 생성합니다. 보안 그룹을 DB 인스턴스에 연결합니다.",
      "퍼블릭 서브넷과 프라이빗 서브넷 사이에 새로운 피어링 연결을 생성합니다. 프라이빗 \n서브넷과 데이터베이스 서브넷 간에 다른 피어링 연결을 만듭니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 데이터베이스 보호의 기본은 보안 그룹입니다. 프라이빗 구역에 있는 서버들의 보안 그룹 ID를 DB 측 문지기로 등록하면, 인가되지 않은 다른 구역의 접속을 철저히 막을 수 있습니다.\n\nhttps://aws.amazon.com/vpc/",
    "glossary": {
      "Security Group (보안 그룹)": "인스턴스 단위로 인바운드 및 아웃바운드 트래픽을 제어하는 가상 방화벽",
      "RDS": "관계형 데이터베이스를 편리하게 운영하기 위해 AWS에서 제공하는 서비스"
    }
  },
  {
    "id": 56,
    "question": "회사는 Amazon Route 53 에 도메인 이름을 등록했습니다. 이 회사는 ca-central-1 리전의 \nAmazon API Gateway 를 백엔드 마이크로서비스 API 의 공용 인터페이스로 사용합니다. 타사 \n서비스는 API 를 안전하게 사용합니다. 회사는 타사 서비스에서 HTTPS 를 사용할 수 있도록 \n회사의 도메인 이름 및 해당 인증서로 API 게이트웨이 URL 을 설계하려고 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "API Gateway 에서 Name=\"Endpoint-URL\" 및 Value=\"Company Domain Name\"으로 단계 \n변수를 생성하여 기본 URL 을 덮어씁니다. 회사의 도메인 이름과 연결된 공인 인증서를 \nAWS Certificate Manager(ACM)로 가져옵니다.",
      "회사의 도메인 이름으로 Route 53 DNS 레코드를 생성합니다. 별칭 레코드가 리전 API \n게이트웨이 단계 엔드포인트를 가리키도록 합니다. 회사의 도메인 이름과 연결된 공인 \n인증서를 us-east-1 리전의 AWS Certificate Manager(ACM)로 가져옵니다.",
      "리전 API 게이트웨이 엔드포인트를 생성합니다. API Gateway 엔드포인트를 회사의 \n도메인 이름과 연결합니다. 회사의 도메인 이름과 연결된 공인 인증서를 동일한 리전의 \nAWS Certificate Manager(ACM)로 가져옵니다. API Gateway 엔드포인트에 인증서를 \n연결합니다. API Gateway 엔드포인트로 트래픽을 라우팅하도록 Route 53 을 구성합니다.",
      "리전 API 게이트웨이 엔드포인트를 생성합니다. API Gateway 엔드포인트를 회사의 \n도메인 이름과 연결합니다. 회사의 도메인 이름과 연결된 공인 인증서를 us-east-1 리전의 \nAWS Certificate Manager(ACM)로 가져옵니다. API Gateway API 에 인증서를 연결합니다. \n회사의 도메인 이름으로 Route 53 DNS 레코드를 생성합니다. A 레코드가 회사의 도메인 \n이름을 가리키도록 합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. API 게이트웨이에 우리 회사의 도메인 이름을 붙이려면 해당 리전의 ACM에서 인증서를 등록하고 사용자 지정 도메인 설정을 마친 뒤 Route 53에서 안내해줘야 합니다.\n\nhttps://aws.amazon.com/api-gateway/",
    "glossary": {
      "API Gateway": "모든 규모의 API를 생성, 게시, 관리 및 보호할 수 있게 해주는 완전 관리형 서비스",
      "ACM (AWS Certificate Manager)": "SSL/TLS 인증서를 발급하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 57,
    "question": "한 회사에서 인기 있는 소셜 미디어 웹사이트를 운영하고 있습니다. 웹사이트는 사용자에게 \n이미지를 업로드하여 다른 사용자와 공유할 수 있는 기능을 제공합니다. 회사는 이미지에 \n부적절한 콘텐츠가 포함되지 않았는지 확인하고 싶습니다. 회사는 개발 노력을 최소화하는 \n솔루션이 필요합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon Comprehend\n를 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 \n예측에는 인적 검토를 사용합니다.",
      "Amazon Rekognition\n을 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 \n예측에는 인적 검토를 사용합니다.",
      "Amazon SageMaker 를 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 예측에 \n레이블을 지정하려면 정답을 사용합니다.",
      "AWS Fargate 를 사용하여 사용자 지정 기계 학습 모델을 배포하여 부적절한 콘텐츠를 \n감지합니다. 신뢰도가 낮은 예측에 레이블을 지정하려면 정답을 사용합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 수많은 이미지에서 유해한 요소를 찾아내는 건 인공지능인 Amazon Rekognition이 제일 잘합니다. 애매한 부분은 사람에게 검토를 맡기는 워크플로(A2I)까지 갖출 수 있습니다.\n\nhttps://aws.amazon.com/rekognition/",
    "glossary": {
      "Amazon Rekognition": "기계 학습을 사용하여 이미지 및 비디오를 분석하는 AI 서비스 (객체 식별, 텍스트 추출, 이미지 중재 등 지원)",
      "Augmented AI (A2I)": "기계 학습 예측 결과에 대해 사람이 직접 검토할 수 있는 워크플로를 제공하는 기능"
    }
  },
  {
    "id": 58,
    "question": "회사는 확장성 및 가용성에 대한 요구 사항을 충족하기 위해 컨테이너에서 중요한 응용 \n프로그램을 실행하려고 합니다. 회사는 중요한 응용 프로그램의 유지 관리에 집중하는 것을 \n선호합니다. 회사는 컨테이너화된 워크로드를 실행하는 기본 인프라의 프로비저닝 및 \n관리에 대한 책임을 원하지 않습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon EC2 인스턴스를 사용하고 인스턴스에 Docker 를 설치합니다.",
      "Amazon EC2 작업자 노드에서 Amazon Elastic Container Service(Amazon ECS)를 \n사용합니다.",
      "AWS Fargate 에서 Amazon Elastic Container Service(Amazon ECS)를 사용합니다.",
      "Amazon \nElastic \nContainer \nService(Amazon \nECS)에 \n최적화된 \nAmazon \n머신 \n이미지(AMI)의 Amazon EC2 인스턴스를 사용합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 서버 관리의 스트레스에서 벗어나 오직 컨테이너화된 앱을 돌리는 데만 집중하고 싶다면 Fargate라는 서버리스 엔진이 정답입니다. 기반 하드웨어 운영은 AWS가 다 책임집니다.\n\nhttps://aws.amazon.com/fargate/",
    "glossary": {
      "AWS Fargate": "서버를 관리할 필요 없이 컨테이너를 실행할 수 있게 해주는 서버리스 컴퓨팅 엔진",
      "ECS (Elastic Container Service)": "AWS에서 컨테이너화된 애플리케이션을 쉽게 실행하고 확장할 수 있도록 돕는 관리 서비스"
    }
  },
  {
    "id": 59,
    "question": "회사는 300 개 이상의 글로벌 웹사이트 및 애플리케이션을 호스팅합니다. 이 회사는 매일 \n30TB 이상의 클릭스트림 데이터를 분석할 플랫폼이 필요합니다. \n솔루션 설계자는 클릭스트림 데이터를 전송하고 처리하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Data Pipeline 을 설계하여 데이터를 Amazon S3 버킷에 보관하고 데이터로 Amazon \nEMR 클러스터를 실행하여 분석을 생성합니다.",
      "Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성하여 데이터를 처리하고 Amazon \nRedshift 가 분석에 사용할 수 있도록 Amazon S3 데이터 레이크로 보냅니다.",
      "데이터를 Amazon CloudFront 에 캐시합니다. Amazon S3 버킷에 데이터를 저장합니다. \n객체가 S3 버킷에 추가될 때. AWS Lambda 함수를 실행하여 분석용 데이터를 처리합니다.",
      "Amazon Kinesis Data Streams\n에서 데이터를 수집합니다. Amazon Kinesis Data \nFirehose 를 사용하여 Amazon S3 데이터 레이크로 데이터를 전송합니다. 분석을 위해 \nAmazon Redshift 에 데이터를 로드합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 전 세계에서 쏟아지는 클릭 데이터를 실시간으로 수집하고 분석하려면 Kinesis Data Streams와 Firehose, 그리고 분석 창고인 Redshift를 잇는 고속도로를 닦아야 합니다.\n\nhttps://aws.amazon.com/kinesis/",
    "glossary": {
      "Kinesis Data Firehose": "실시간 스트리밍 데이터를 캡처하여 최대로 S3나 Redshift로 로딩해주는 완전 관리형 서비스",
      "Redshift": "대규모 데이터 세트를 고속으로 분석할 수 있는 클라우드 기반 데이터 웨어하우스"
    }
  },
  {
    "id": 60,
    "question": "회사에 AWS 에서 호스팅되는 웹 사이트가 있습니다. 웹 사이트는 HTTP 와 HTTPS 를 \n별도로 처리하도록 구성된 ALB(Application Load Balancer) 뒤에 있습니다. 회사는 요청이 \nHTTPS 를 사용하도록 모든 요청을 웹사이트로 전달하려고 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "HTTPS 트래픽만 허용하도록 ALB 의 네트워크 ACL 을 업데이트합니다.",
      "URL 의 HTTP 를 HTTPS 로 바꾸는 규칙을 만듭니다.",
      "ALB 에서 리스너 규칙을 생성하여 HTTP 트래픽을 HTTPS 로 리디렉션합니다.",
      "ALB 를 SNI(서버 이름 표시)를 사용하도록 구성된 Network Load Balancer 로 교체합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 보안이 취약한 HTTP 손님을 안전한 HTTPS로 안내하고 싶다면 로드 밸런서(ALB)에게 리디렉션 규칙을 주면 됩니다. 사용자는 자연스럽게 가장 안전한 통로로 들어오게 됩니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/application-load-balancer/",
    "glossary": {
      "ALB Listener (리스너)": "설정한 프로토콜 및 포트를 사용하여 연결 요청을 확인하는 ALB의 구성 요소",
      "HTTP Redirect": "클라이언트가 특정 페이지에 접근했을 때 다른 URL로 자동 이동시키는 기술"
    }
  },
  {
    "id": 61,
    "question": "한 회사가 AWS 에서 2 계층 웹 애플리케이션을 개발하고 있습니다. 회사 개발자는 백엔드 \nAmazon RDS 데이터베이스에 직접 연결되는 Amazon EC2 인스턴스에 애플리케이션을 \n배포했습니다. 회사는 애플리케이션에 데이터베이스 자격 증명을 하드코딩해서는 안 됩니다. \n또한 회사는 정기적으로 데이터베이스 자격 증명을 자동으로 교체하는 솔루션을 구현해야 \n합니다. \n최소한의 운영 오버헤드로 이러한 운영 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "인스턴스 \n메타데이터에 \n데이터베이스 \n자격 \n증명을 \n저장합니다. \nAmazon \nEventBridge(Amazon CloudWatch Events) 규칙을 사용하여 RDS 자격 증명과 인스턴스 \n메타데이터를 동시에 업데이트하는 예약된 AWS Lambda 함수를 실행합니다.",
      "암호화된 Amazon S3 버킷의 구성 파일에 데이터베이스 자격 증명을 저장합니다. \nAmazon EventBridge(Amazon CloudWatch Events) 규칙을 사용하여 RDS 자격 증명과 구성 \n파일의 자격 증명을 동시에 업데이트하는 예약된 AWS Lambda 함수를 실행합니다. S3 버전 \n관리를 사용하여 이전 값으로 폴백하는 기능을 보장합니다.",
      "데이터베이스 자격 증명을 AWS Secrets Manager 에 암호로 저장합니다. 보안 비밀에 \n대한 자동 순환을 켭니다. EC2 역할에 필요한 권한을 연결하여 보안 암호에 대한 액세스 \n권한을 부여합니다.",
      "데이터베이스 자격 증명을 AWS Systems Manager Parameter Store\n에 암호화된 \n파라미터로 저장합니다. 암호화된 매개변수에 대해 자동 회전을 켭니다. EC2 역할에 필요한 \n권한을 연결하여 암호화된 파라미터에 대한 액세스 권한을 부여합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 소스 코드에 비밀번호를 적어두면 언제든 사고가 날 수 있습니다. Secrets Manager라는 튼튼한 금고에 암호를 맡기고, 60일마다 알아서 자물쇠를 바꾸게 설정하는 것이 보안의 기본입니다.\n\nhttps://aws.amazon.com/secrets-manager/",
    "glossary": {
      "Secrets Manager": "데이터베이스 자격 증명, API 키 등의 암호를 안전하게 저장하고 자동 교체해주는 서비스",
      "Credential Rotation": "보안을 위해 주기적으로 암호 정보를 바꾸는 작업"
    }
  },
  {
    "id": 62,
    "question": "회사에서 AWS 에 새로운 공개 웹 애플리케이션을 배포하고 있습니다. 애플리케이션은 \nALB(Application Load Balancer) 뒤에서 실행됩니다. 애플리케이션은 외부 CA(인증 \n기관)에서 발급한 SSL/TLS 인증서를 사용하여 에지에서 암호화해야 합니다. 인증서가 \n만료되기 전에 매년 인증서를 교체해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 발급합니다. 인증서를 \nALB 에 적용합니다. 관리형 갱신 기능을 사용하여 인증서를 자동으로 교체합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 발급합니다. 인증서에서 \n키 자료를 가져옵니다. ALB 에 인증서 적용 관리되는 갱신 기능을 사용하여 인증서를 \n자동으로 교체합니다.",
      "AWS Certificate Manager(ACM) 사설 인증 기관을 사용하여 루트 CA 에서 SSL/TLS \n인증서를 발급합니다. 인증서를 ALB 에 적용합니다. 관리형 갱신 기능을 사용하여 인증서를 \n자동으로 교체합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 가져옵니다. 인증서를 \nALB 에 적용합니다. Amazon EventBridge(Amazon CloudWatch Events)를 사용하여 인증서가 \n만료될 때 알림을 보냅니다. 인증서를 수동으로 교체합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 밖에서 직접 사 온 인증서는 AWS가 멋대로 갱신할 수 없습니다. ACM 문서함에 잘 모셔두고 쓰되, 수명 종료 30일 전 알람을 받으면 새 인증서를 사 와서 수동으로 바꿔줘야 합니다.\n\nhttps://aws.amazon.com/certificate-manager/",
    "glossary": {
      "SSL/TLS Certificate": "웹사이트의 데이터를 암호화하고 서버의 신원을 증명하는 디지털 인증서",
      "ACM Certificate Import": "외부에서 구매하거나 발급받은 인증서를 AWS 서비스에서 사용하기 위해 등록하는 과정"
    }
  },
  {
    "id": 63,
    "question": "회사는 AWS 에서 인프라를 실행하고 문서 관리 애플리케이션에 대해 700,000 명의 등록 \n기반을 보유하고 있습니다. 회사는 큰 .pdf 파일을 .jpg 이미지 파일로 변환하는 제품을 \n만들려고 합니다. .pdf 파일의 크기는 평균 5MB 입니다. 회사는 원본 파일과 변환 파일을 \n보관해야 합니다. 솔루션 설계자는 시간이 지남에 따라 빠르게 증가할 수요를 수용할 수 \n있는 확장 가능한 솔루션을 설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      ".pdf 파일을 Amazon S3 에 저장합니다. AWS Lambda 함수를 호출하여 파일을 .jpg \n형식으로 변환하고 Amazon S3 에 다시 저장하도록 S3 PUT 이벤트를 구성합니다.",
      ".pdf 파일을 Amazon DynamoDB 에 저장 DynamoDB 스트림 기능을 사용하여 AWS \nLambda 함수를 호출하여 파일을 .jpg 형식으로 변환하고 DynamoDB 에 다시 저장합니다.",
      "Amazon EC2 인스턴스, Amazon Elastic Block Store(Amazon EBS) 스토리지 및 Auto \nScaling 그룹이 포함된 AWS Elastic Beanstalk 애플리케이션에 .pdf 파일을 업로드합니다. \nEC2 인스턴스의 프로그램을 사용하여 파일을 .jpg 형식으로 변환합니다. .pdf 파일과 .jpg \n파일을 EBS 스토어에 저장합니다.",
      "Amazon EC2 인스턴스, Amazon Elastic File System(Amazon EFS) 스토리지 \n및 Auto Scaling 그룹이 포함된 AWS Elastic Beanstalk 애플리케이션에 업로드합니다. EC2 \n인스턴스의 프로그램을 사용하여 파일을 .jpg 형식으로 변환합니다. .pdf 파일과 .jpg \n파일을 EBS 스토어에 저장합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 파일이 업로드되는 즉시 자동으로 일을 시키고 싶다면 S3 이벤트를 트리거로 삼아 Lambda 요정을 깨우세요. 사용한 시간만큼만 돈이 나가니 가성비가 최고입니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "S3 Event Notification": "버킷에 객체가 생성되는 등의 이벤트가 발생했을 때 Lambda 등을 실행시키는 기능",
      "Serverless (서버리스)": "사용자가 직접 서버를 관리하지 않고 코드 실행 시간만큼만 비용을 지불하는 모델"
    }
  },
  {
    "id": 64,
    "question": "회사는 온프레미스에서 실행되는 Windows 파일 서버에 5TB 이상의 파일 데이터를 가지고 \n있습니다. 사용자와 애플리케이션은 매일 데이터와 상호 작용합니다. \n이 회사는 Windows 워크로드를 AWS\n로 이전하고 있습니다. 회사가 이 프로세스를 \n계속함에 따라 회사는 최소 지연 시간으로 AWS 및 온프레미스 파일 스토리지에 액세스할 \n수 있어야 합니다. 회사는 운영 오버헤드를 최소화하고 기존 파일 액세스 패턴을 크게 \n변경할 필요가 없는 솔루션이 필요합니다. 회사는 AWS 연결을 위해 AWS Site-to-Site VPN \n연결을 사용합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS 에서 Windows 파일 서버용 Amazon FSx 를 배포 및 구성합니다. 온-프레미스 파일 \n데이터를 Windows 파일 서버용 FSx로 이동합니다. AWS에서 Windows 파일 서버용 FSx를 \n사용하도록 워크로드를 재구성합니다.",
      "온프레미스에 Amazon S3 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 \n데이터를 S3 파일 게이트웨이로 이동합니다. S3 파일 게이트웨이를 사용하도록 온프레미스 \n워크로드 및 클라우드 워크로드를 재구성합니다.",
      "온프레미스에 Amazon S3 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 \n데이터를 Amazon S3 로 이동합니다. Amazon S3 를 직접 사용하거나 S3 파일 게이트웨이를 \n사용하도록 워크로드를 재구성합니다. 각 워크로드의 위치에 따라 다릅니다.",
      "AWS 에서 Windows 파일 서버용 Amazon FSx 를 배포 및 구성합니다. 온프레미스에 \nAmazon FSx 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 데이터를 FSx 파일 \n게이트웨이로 이동합니다. AWS 의 Windows 파일 서버용 FSx 를 사용하도록 클라우드 \n워크로드를 구성합니다. FSx 파일 게이트웨이를 사용하도록 온프레미스 워크로드를 \n구성합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 윈도우 환경을 유지하면서 클라우드로 매끄럽게 넘어가려면 FSx 파일 게이트웨이가 제격입니다. 로컬 속도와 클라우드 용량을 동시에 누리는 하이브리드 생활의 시작입니다.\n\nhttps://aws.amazon.com/storagegateway/",
    "glossary": {
      "FSx File Gateway": "온프레미스에서 FSx 데이터에 저지연으로 접근할 수 있도록 도와주는 하이브리드 클라우드 도구",
      "Site-to-Site VPN": "온프레미스 네트워크와 AWS VPC를 인터넷 상의 암호화된 터널로 연결하는 기술"
    }
  },
  {
    "id": 65,
    "question": "병원은 최근 Amazon API Gateway 및 AWS Lambda 와 함께 RESTful API 를 배포했습니다. \n병원은 API Gateway 및 Lambda\n를 사용하여 PDF 형식 및 JPEG 형식의 보고서를 \n업로드합니다. 병원은 보고서에서 보호되는 건강 정보(PHI)를 식별하기 위해 Lambda \n코드를 수정해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "기존 Python 라이브러리를 사용하여 보고서에서 텍스트를 추출하고 추출된 텍스트에서 \nPHI 를 식별합니다.",
      "Amazon Textract 를 사용하여 보고서에서 텍스트를 추출합니다. Amazon SageMaker 를 \n사용하여 추출된 텍스트에서 PHI 를 식별합니다.",
      "Amazon Textract 를 사용하여 보고서에서 텍스트를 추출합니다. Amazon Comprehend \nMedical 을 사용하여 추출된 텍스트에서 PHI 를 식별합니다.",
      "Amazon \nRekognition\n을 \n사용하여 \n보고서에서 \n텍스트를 \n추출합니다. \nAmazon \nComprehend Medical 을 사용하여 추출된 텍스트에서 PHI 를 식별합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 복잡한 병원 서류를 읽어내는 Textract라는 눈과, 그 안에서 환자의 개인정보만 콕 집어내는 Comprehend Medical이라는 뇌를 연결하여 의료 데이터 보안을 자동화하세요.\n\nhttps://aws.amazon.com/comprehend/medical/",
    "glossary": {
      "Amazon Textract": "문서나 이미지에서 텍스트, 손글씨 및 표 데이터를 추출하는 OCR 기반 AI 서비스",
      "Amazon Comprehend Medical": "의료 텍스트에서 진단명, 투약 기록 등의 정보를 머신러닝으로 추출하는 서비스"
    }
  },
  {
    "id": 66,
    "question": "회사에 각각 크기가 약 5MB 인 많은 수의 파일을 생성하는 응용 프로그램이 있습니다. \n파일은 Amazon S3 에 저장됩니다. 회사 정책에 따라 파일을 삭제하려면 4 년 동안 보관해야 \n합니다. 파일에는 재생산하기 쉽지 않은 중요한 비즈니스 데이터가 포함되어 있으므로 \n즉각적인 액세스가 항상 필요합니다. 파일은 객체 생성 후 처음 30\n일 동안 자주 \n액세스되지만 처음 30 일 후에는 거의 액세스되지 않습니다. \n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?",
    "options": [
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Glacier 로 파일을 이동하는 S3 버킷 수명 \n주기 정책을 생성합니다. 객체 생성 후 4 년이 지나면 파일을 삭제합니다.",
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 One Zone-Infrequent Access(S3 One \nZone-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 후 4 년이 \n지나면 파일을 삭제합니다.",
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Standard-Infrequent Access(S3 \nStandard-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 후 \n4 년이 지나면 파일을 삭제합니다.",
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Standard-Infrequent Access(S3 \nStandard-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 4 년 후 \n파일을 S3 Glacier 로 이동합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 30일이 지나면 가끔 보긴 하겠지만 '보고 싶을 때 바로 나와야 하는' 중요 데이터라면 S3 Standard-IA 계층이 가장 균형 잡힌 가성비 안식처입니다.\n\nhttps://aws.amazon.com/s3/storage-classes/",
    "glossary": {
      "S3 Standard-IA": "자주 액세스하지 않지만 필요할 때 즉시 읽어야 하는 데이터에 적합한 가성비 스토리지",
      "Durability (내구성)": "데이터가 유실되지 않고 안전하게 보관되는 성질. S3는 99.999999999%를 보장함"
    }
  },
  {
    "id": 67,
    "question": "회사는 여러 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 애플리케이션은 \nAmazon SQS 대기열의 메시지를 처리하고 Amazon RDS 테이블에 쓰고 대기열에서 \n메시지를 삭제합니다. RDS 테이블에서 가끔 중복 레코드가 발견됩니다. SQS 대기열에는 \n중복 메시지가 없습니다. \n메시지가 한 번만 처리되도록 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "CreateQueue API 호출을 사용하여 새 대기열을 만듭니다.",
      "AddPermission API 호출을 사용하여 적절한 권한을 추가합니다.",
      "ReceiveMessage API 호출을 사용하여 적절한 대기 시간을 설정합니다.",
      "ChangeMessageVisibility API 호출을 사용하여 가시성 시간 초과를 늘립니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 한 일꾼이 일을 마칠 때까지 대기열에서 그 일을 잠시 가려두는 '가시성 시간 초과' 시간을 넉넉히 잡으세요. 그러면 같은 일이 중복으로 처리되는 불상사를 막을 수 있습니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "Visibility Timeout (가시성 시간 초과)": "메시지가 수신된 후 다른 소비자가 다시 볼 수 없도록 숨겨지는 기간",
      "SQS (Simple Queue Service)": "분산된 애플리케이션 계층 간에 메시지를 주고받아 시스템을 하나로 묶어주는 서비스"
    }
  },
  {
    "id": 68,
    "question": "솔루션 설계자는 회사의 온프레미스 인프라를 AWS 로 확장하기 위해 새로운 하이브리드 \n아키텍처를 설계하고 있습니다. 이 회사는 AWS 리전에 대해 일관되게 짧은 지연 시간과 \n고가용성 연결이 필요합니다. 회사는 비용을 최소화해야 하며 기본 연결이 실패할 경우 더 \n느린 트래픽을 기꺼이 받아들입니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. 기본 Direct Connect \n연결이 실패하는 경우 백업으로 VPN 연결을 프로비저닝합니다.",
      "개인 연결을 위해 지역에 VPN 터널 연결을 프로비저닝합니다. 기본 VPN 연결이 실패할 \n경우 개인 연결 및 백업으로 두 번째 VPN 터널을 프로비저닝합니다.",
      "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. 기본 Direct Connect \n연결이 \n실패하는 \n경우 \n백업과 \n동일한 \n지역에 \n두 \n번째 \nDirect \nConnect \n연결을 \n프로비저닝합니다.",
      "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. AWS CLI 에서 Direct \nConnect 장애 조치 속성을 사용하여 기본 Direct Connect 연결이 실패할 경우 백업 연결을 \n자동으로 생성합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 평소에는 전용선(Direct Connect)으로 시원하게 소통하고, 비상시에는 조금 느리더라도 저렴한 VPN을 백업 길로 챙겨두는 것이 가장 현명한 하이브리드 설계입니다.\n\nhttps://aws.amazon.com/directconnect/",
    "glossary": {
      "Direct Connect": "전용망을 사용하여 일관된 품질을 보장하는 네트워크 연결 서비스",
      "Failover (장애 조치)": "시스템 일부가 고장 났을 때 자동으로 예비 장치나 우회 경로로 전환하여 서비스 불능을 막는 기법"
    }
  },
  {
    "id": 69,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 비즈니스 크리티컬 웹 \n애플리케이션을 실행하고 있습니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. \n애플리케이션은 단일 가용 영역에 배포된 Amazon Aurora PostgreSQL 데이터베이스를 \n사용합니다. 회사는 다운타임과 데이터 손실을 최소화하면서 애플리케이션의 고가용성을 \n원합니다. \n최소한의 운영 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 인스턴스를 다른 AWS 리전에 배치합니다. Amazon Route 53 상태 확인을 사용하여 \n트래픽을 리디렉션합니다. Aurora PostgreSQL 교차 리전 복제를 사용합니다.",
      "여러 가용 영역을 사용하도록 Auto Scaling 그룹을 구성합니다. 데이터베이스를 다중 \nAZ 로 구성합니다. 데이터베이스에 대한 Amazon RDS 프록시 인스턴스를 구성합니다.",
      "하나의 가용 영역을 사용하도록 Auto Scaling 그룹을 구성합니다. 데이터베이스의 \n시간별 스냅샷을 생성합니다. 장애가 발생한 경우 스냅샷에서 데이터베이스를 복구합니다.",
      "여러 AWS 리전을 사용하도록 Auto Scaling 그룹을 구성합니다. 애플리케이션의 \n데이터를 Amazon S3 에 씁니다. S3 이벤트 알림을 사용하여 AWS Lambda 함수를 시작하여 \n데이터베이스에 데이터를 씁니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 고장 나도 멈추지 않는 DB를 위해 다중 AZ 설정을 하세요. 여기에 RDS 프록시를 곁들이면 장애가 터져서 주인이 바뀌는 찰나의 순간에도 앱은 끊김 없이 계속 작동합니다.\n\nhttps://aws.amazon.com/rds/aurora/",
    "glossary": {
      "Amazon Aurora": "클라우드 시대를 위해 재설계된 고성능, 고가용성 MySQL 및 PostgreSQL 호환 데이터베이스",
      "RDS Proxy": "데이터베이스 연결을 관리하고 고가용성 전환 시 애플리케이션이 끊김 없이 작동하도록 돕는 중계 도구"
    }
  },
  {
    "id": 70,
    "question": "회사의 HTTP 애플리케이션은 NLB(Network Load Balancer) 뒤에 있습니다. NLB 의 대상 \n그룹은 웹 서비스를 실행하는 여러 EC2 인스턴스와 함께 Amazon EC2 Auto Scaling 그룹을 \n사용하도록 구성됩니다. \n회사는 NLB\n가 애플리케이션에 대한 HTTP 오류를 감지하지 못한다는 것을 알게 \n되었습니다. 이러한 오류는 웹 서비스를 실행하는 EC2 인스턴스를 수동으로 다시 시작해야 \n합니다. 회사는 사용자 정의 스크립트나 코드를 작성하지 않고 애플리케이션의 가용성을 \n개선해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "NLB 에서 HTTP 상태 확인을 활성화하고 회사 응용 프로그램의 URL 을 제공합니다.",
      "EC2 인스턴스에 cron 작업을 추가하여 1 분에 한 번씩 로컬 애플리케이션의 로그를 \n확인합니다. HTTP 오류가 감지된 경우. 응용 프로그램이 다시 시작됩니다.",
      "NLB 를 Application Load Balancer 로 교체합니다. 회사 애플리케이션의 URL 을 제공하여 \nHTTP 상태 확인을 활성화합니다. 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 \n구성합니다.",
      "NLB 에 대한 UnhealthyHostCount 지표를 모니터링하는 Amazon Cloud Watch 경보를 \n생성합니다. 경보가 ALARM 상태일 때 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 \n구성합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. NLB(L4)는 서버가 켜져 있는지만 보지만, ALB(L7)는 실제 앱이 살아있는지 꼼꼼히 살핍니다. 똑똑한 ALB로 갈아타서 앱 상태를 정밀 체크하고 아픈 인스턴스를 즉시 치료하세요.\n\nhttps://aws.amazon.com/elasticloadbalancing/",
    "glossary": {
      "Health Check (상태 확인)": "로드 밸런서가 뒤쪽 서버가 정상적으로 응답하는지 주기적으로 핑을 보내고 확인하는 기능",
      "NLB vs ALB": "NLB는 속도가 빠르지만 단순하고, ALB는 똑똑하게 앱 내부 상황(HTTP)까지 살필 수 있음"
    }
  },
  {
    "id": 71,
    "question": "한 회사는 Amazon DynamoDB 를 사용하여 고객 정보를 저장하는 쇼핑 애플리케이션을 \n실행합니다. 데이터 손상의 경우 솔루션 설계자는 15 분의 RPO(복구 시점 목표)와 1 시간의 \nRTO(복구 시간 목표)를 충족하는 솔루션을 설계해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "DynamoDB 전역 테이블을 구성합니다. RPO 복구의 경우 애플리케이션이 다른 AWS \n리전을 가리키도록 합니다.",
      "DynamoDB 지정 시간 복구를 구성합니다. RPO 복구의 경우 원하는 시점으로 \n복원합니다.",
      "DynamoDB 데이터를 매일 Amazon S3 Glacier 로 내보냅니다. RPO 복구의 경우 S3 \nGlacier 에서 DynamoDB 로 데이터를 가져옵니다.",
      "DynamoDB 테이블에 대한 Amazon Elastic Block Store(Amazon EBS) 스냅샷을 \n15 분마다 예약합니다. RPO 복구의 경우 EBS 스냅샷을 사용하여 DynamoDB 테이블을 \n복원합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 실수로 데이터를 지워도 '10분 전으로 돌아가고 싶다'는 소원을 들어주는 기능이 PITR입니다. 초 단위 정밀도로 과거의 어느 시점으로든 소중한 데이터를 되돌려줍니다.\n\nhttps://aws.amazon.com/dynamodb/",
    "glossary": {
      "PITR (Point-In-Time Recovery)": "최근 35일 내의 어느 시점으로든 데이터를 즉시 복구할 수 있게 해주는 기능",
      "RPO / RTO": "RPO는 손실을 감수할 수 있는 데이터 시간 범위, RTO는 고장 후 정상복구까지 걸리는 시간"
    }
  },
  {
    "id": 72,
    "question": "회사는 동일한 AWS 리전에 있는 Amazon S3 버킷에서 사진을 자주 업로드 및 \n다운로드해야 하는 사진 처리 애플리케이션을 실행합니다. 솔루션 설계자는 데이터 전송 \n비용이 증가한다는 사실을 알게 되었고 이러한 비용을 줄이기 위한 솔루션을 구현해야 \n합니다. \n솔루션 설계자는 이 요구 사항을 어떻게 충족할 수 있습니까?",
    "options": [
      "Amazon API Gateway 를 퍼블릭 서브넷에 배포하고 이를 통해 S3 호출을 라우팅하도록 \n라우팅 테이블을 조정합니다.",
      "NAT 게이트웨이를 퍼블릭 서브넷에 배포하고 S3 버킷에 대한 액세스를 허용하는 \n엔드포인트 정책을 연결합니다.",
      "애플리케이션을 퍼블릭 서브넷에 배포하고 S3 버킷에 액세스하기 위해 인터넷 \n게이트웨이를 통해 라우팅하도록 허용합니다.",
      "S3 VPC 게이트웨이 엔드포인트를 VPC 에 배포하고 S3 버킷에 대한 액세스를 허용하는 \n엔드포인트 정책을 연결합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 같은 리전 안에서 S3로 갈 때는 굳이 비싼 인터넷 통행료를 낼 필요가 없습니다. VPC 안에 S3로 가는 무료 직통 엘리베이터(엔드포인트)를 설치해서 데이터 전송료를 아끼세요.\n\nhttps://aws.amazon.com/vpc/endpoints/",
    "glossary": {
      "VPC Gateway Endpoint": "VPC 외부의 S3나 DynamoDB에 인터넷 없이 직접 연결하는 전용 통로 (비용 무료)",
      "Data Transfer Fee": "AWS 리소스 간 혹은 외부로 데이터를 보낼 때 발생하는 통신 비용"
    }
  },
  {
    "id": 73,
    "question": "한 회사가 최근 프라이빗 서브넷의 Amazon EC2 에서 Linux 기반 애플리케이션 인스턴스를 \n시작하고 VPC 의 퍼블릭 서브넷에 있는 Amazon EC2 인스턴스에서 Linux 기반 배스천 \n호스트를 시작했습니다. 솔루션 설계자는 사내 네트워크에서 회사의 인터넷 연결을 통해 \n배스천 호스트 및 애플리케이션 서버에 연결해야 합니다. 솔루션 설계자는 모든 EC2 \n인스턴스의 보안 그룹이 해당 액세스를 허용하는지 확인해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 취해야 합니까? \n(2 개를 선택하세요.)",
    "options": [
      "배스천 호스트의 현재 보안 그룹을 애플리케이션 인스턴스의 인바운드 액세스만 \n허용하는 보안 그룹으로 교체합니다.",
      "배스천 호스트의 현재 보안 그룹을 회사의 내부 IP 범위에서만 인바운드 액세스를 \n허용하는 보안 그룹으로 교체합니다.",
      "배스천 호스트의 현재 보안 그룹을 회사의 외부 IP 범위에서만 인바운드 액세스를 \n허용하는 보안 그룹으로 교체합니다.",
      "애플리케이션 인스턴스의 현재 보안 그룹을 배스천 호스트의 개인 IP 주소에서만 \n인바운드 SSH 액세스를 허용하는 보안 그룹으로 교체합니다.",
      "애플리케이션 인스턴스의 현재 보안 그룹을 배스천 호스트의 공용 IP 주소에서만 \n인바운드 SSH 액세스를 허용하는 보안 그룹으로 교체합니다."
    ],
    "answer": 2,
    "answer2": 3,
    "explanation": "정답은 C와 D입니다. 길 입구(배스천)에는 오직 우리 공인 IP만 받게 하고(C), 내부 서버는 '그 입구를 통과해 온 사람들(내부 IP)'에게만 문을 열어주는(D) 이중 잠금 방식이 가장 안전합니다.\n\nhttps://aws.amazon.com/vpc/",
    "glossary": {
      "Bastion Host (배스천 호스트)": "외부 인터넷에서 직접 접근이 불가능한 프라이빗 서브넷 서버에 접속하기 위해 징검다리 역할을 하는 보안 서버",
      "Private IP": "VPC 내부망 안에서만 통용되는 내부 주소"
    }
  },
  {
    "id": 74,
    "question": "솔루션 설계자는 2 계층 웹 애플리케이션을 설계하고 있습니다. 애플리케이션은 퍼블릭 \n서브넷의 Amazon EC2 에서 호스팅되는 퍼블릭 웹 티어로 구성됩니다. 데이터베이스 계층은 \n프라이빗 서브넷의 Amazon EC2 에서 실행되는 Microsoft SQL Server 로 구성됩니다. 보안은 \n회사의 최우선 과제입니다. \n이 상황에서 보안 그룹을 어떻게 구성해야 합니까? (2 개를 선택하세요.)",
    "options": [
      "0.0.0.0/0 에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 계층에 대한 보안 그룹을 \n구성합니다.",
      "0.0.0.0/0 에서 포트 443 의 아웃바운드 트래픽을 허용하도록 웹 계층에 대한 보안 \n그룹을 구성합니다.",
      "웹 계층에 대한 보안 그룹에서 포트 1433\n의 인바운드 트래픽을 허용하도록 \n데이터베이스 계층에 대한 보안 그룹을 구성합니다.",
      "데이터베이스 계층의 보안 그룹을 구성하여 포트 443 및 1433 의 아웃바운드 트래픽을 \n웹 계층의 보안 그룹으로 보냅니다.",
      "웹 계층에 대한 보안 그룹의 포트 443 및 1433 에서 인바운드 트래픽을 허용하도록 \n데이터베이스 계층에 대한 보안 그룹을 구성합니다."
    ],
    "answer": 0,
    "answer2": 2,
    "explanation": "정답은 A와 C입니다. 대문은 누구나 들어올 수 있게 443 포트를 활짝 열되(A), 창고(DB)는 오직 집에서 일하는 사람(웹 서버 보안 그룹)만 만질 수 있게 특정해서 허용하는 것이 보안의 정석입니다.\n\nhttps://aws.amazon.com/vpc/",
    "glossary": {
      "Security Group Rule": "특정 IP 대역뿐만 아니라 다른 보안 그룹의 ID를 '소스'로 지정하여 권한을 제어할 수 있는 보안 규칙",
      "Port 443": "보안 웹 통신(HTTPS)의 표준 포트 번호"
    }
  },
  {
    "id": 75,
    "question": "한 회사가 애플리케이션의 성능을 개선하기 위해 다계층 애플리케이션을 온프레미스에서 \nAWS 클라우드로 이동하려고 합니다. 애플리케이션은 RESTful 서비스를 통해 서로 \n통신하는 \n애플리케이션 \n계층으로 \n구성됩니다. \n한 \n계층이 \n오버로드되면 \n트랜잭션이 \n삭제됩니다. 솔루션 설계자는 이러한 문제를 해결하고 애플리케이션을 현대화하는 솔루션을 \n설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": [
      "Amazon API Gateway\n를 사용하고 애플리케이션 계층으로 AWS Lambda 함수에 \n트랜잭션을 전달합니다. Amazon Simple Queue Service(Amazon SQS)를 애플리케이션 \n서비스 간의 통신 계층으로 사용합니다.",
      "Amazon CloudWatch 지표를 사용하여 애플리케이션 성능 기록을 분석하여 성능 장애 \n동안 서버의 최대 사용률을 결정합니다. 최대 요구 사항을 충족하도록 애플리케이션 서버의 \nAmazon EC2 인스턴스 크기를 늘립니다.",
      "Amazon Simple Notification Service(Amazon SNS)를 사용하여 Auto Scaling 그룹의 \nAmazon EC2\n에서 실행되는 애플리케이션 서버 간의 메시징을 처리합니다. Amazon \nCloudWatch\n를 사용하여 SNS 대기열 길이를 모니터링하고 필요에 따라 확장 및 \n축소합니다.",
      "Amazon Simple Queue Service(Amazon SQS)를 사용하여 Auto Scaling 그룹의 Amazon \nEC2 에 실행되는 애플리케이션 서버 간의 메시징을 처리합니다. Amazon CloudWatch 를 \n사용하여 SQS 대기열 길이를 모니터링하고 통신 오류가 감지되면 확장합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 일이 몰려서 자료를 놓친다면 시스템이 너무 빡빡하게 붙어있기 때문입니다. 중간에 SQS라는 대기표 발행기를 두고 Lambda 요정이 차례차례 처리하게 하면 유실 걱정이 사라집니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "Decoupling (결합 해제)": "구성 요소들이 서로의 상태를 몰라도 독립적으로 작동할 수 있게 중간에 대기열 등을 넣어 분리하는 설계",
      "Serverless Modernization": "기존 서버 기반 앱을 Lambda 같은 서버리스 기술로 바꿔 관리 부담을 획기적으로 줄이는 과정"
    }
  }
];