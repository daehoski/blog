export const quizData = [
  {
    "id": 576,
    "question": "회사는 Amazon API Gateway 및 AWS Lambda 를 사용하여 AWS 에서 RESTful 서버리스 웹 \n애플리케이션을 구축하고 있습니다. 이 웹 애플리케이션의 사용자는 지리적으로 분산되며 \n회사는 이러한 사용자에 대한 API 요청 대기 시간을 줄이려고 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 유형의 엔드포인트를 사용해야 \n합니까?",
    "options": [
      "프라이빗 엔드포인트",
      "지역 엔드포인트",
      "인터페이스 VPC 엔드포인트",
      "엣지 최적화 엔드포인트"
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/116906-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n엣지 최적화 API 엔드포인트는 API 요청을 가장 가까운 CloudFront POP(Point of \nPresence)로 라우팅하므로 지리적으로 분산된 클라이언트에 가장 적합합니다. 이렇게 하면 \n대기 시간이 줄어들고 API 성능이 향상됩니다. 엣지 최적화 엔드포인트는 API Gateway \nREST API 의 기본 유형입니다. \n지역 API 엔드포인트는 API와 동일한 지역에 있는 클라이언트를 위한 것이며 CloudFront를 \n사용하여 요청을 라우팅하지 않습니다. 프라이빗 API 엔드포인트는 인터페이스 VPC \n엔드포인트를 사용하여 VPC 에서만 액세스할 수 있는 API 엔드포인트입니다. 지역 또는",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 577,
    "question": "회사는 Amazon CloudFront 배포를 사용하여 웹 사이트의 콘텐츠 페이지를 제공합니다. \n회사는 고객이 회사 웹 사이트에 액세스할 때 TLS 인증서를 사용하도록 해야 합니다. \n회사는 TLS 인증서의 생성 및 갱신을 자동화하려고 합니다. \n이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "CloudFront 보안 정책을 사용하여 인증서를 생성합니다.",
      "CloudFront 원본 액세스 제어(OAC)를 사용하여 인증서를 생성합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 인증서를 생성합니다. 도메인에 대해 DNS \n검증을 사용하십시오.",
      "AWS Certificate Manager(ACM)를 사용하여 인증서를 생성합니다. 도메인에 대한 이메일 \n유효성 검사를 사용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/117037-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 578,
    "question": "한 \n회사에서 \nAmazon \nDynamoDB\n를 \n데이터베이스 \n계층으로 \n사용하는 \n서버리스 \n애플리케이션을 배포했습니다. 응용 프로그램의 사용자가 크게 증가했습니다. 이 회사는 \n데이터베이스 응답 시간을 밀리초에서 마이크로초로 개선하고 데이터베이스에 대한 요청을 \n캐시하기를 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "DynamoDB 가속기(DAX)를 사용합니다.",
      "데이터베이스를 Amazon Redshift 로 마이그레이션합니다.",
      "데이터베이스를 Amazon RDS 로 마이그레이션합니다.",
      "Redis 용 Amazon ElastiCache 를 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117038-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 579,
    "question": "=== PAGE 546 ===\n회사에서 PostgreSQL\n용 Amazon RDS\n를 사용하는 애플리케이션을 실행합니다. \n애플리케이션은 평일 업무 시간에만 트래픽을 수신합니다. 회사는 이 사용량을 기반으로 \n비용을 최적화하고 운영 오버헤드를 줄이려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS 의 인스턴스 스케줄러를 사용하여 시작 및 중지 일정을 구성하십시오.",
      "자동 백업을 끕니다. 데이터베이스의 매주 수동 스냅샷을 생성합니다.",
      "최소 CPU 사용률을 기준으로 데이터베이스를 시작하고 중지하는 사용자 지정 AWS \nLambda 함수를 생성합니다.",
      "모든 Upfront 예약 DB 인스턴스를 구매합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/116924-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS 솔루션의 인스턴스 스케줄러는 Amazon Elastic Compute Cloud(Amazon EC2) 및 \nAmazon Relational Database Service(Amazon RDS) \n인스턴스의 시작 및 중지를 \n자동화합니다. 이 솔루션은 사용하지 않는 리소스를 중지하고 필요할 때 시작하여 운영 \n비용을 절감하는 데 도움이 됩니다1. 이 솔루션을 사용하면 명령줄 인터페이스(CLI) 또는 \nSSM 유지 관리 기간을 사용하여 맞춤형 일정과 기간을 정의할 수 있습니다. 선결제 없음, \n부분 선결제, 전체 선결제 등 예약 DB 인스턴스에 대한 다양한 결제 옵션 중에서 선택할 \n수도 있습니다. \n \n참고: \n\naws.amazon.com/ko/solutions/implementations/instance-scheduler-on-aws/?nc1\n=h_ls",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 580,
    "question": "회사는 \n로컬로 \n연결된 \n스토리지를 \n사용하여 \n온프레미스에서 \n대기 \n시간에 \n민감한 \n애플리케이션을 실행합니다. 이 회사는 애플리케이션을 AWS 클라우드로 옮기기 위해 \n리프트 앤 시프트 방식을 사용하고 있습니다. 회사는 애플리케이션 아키텍처를 변경하기를 \n원하지 않습니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon EC2 인스턴스로 Auto Scaling 그룹을 구성합니다. Amazon FSx for Lustre 파일 \n시스템을 사용하여 애플리케이션을 실행합니다.",
      "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Amazon Elastic Block \n\n=== PAGE 547 ===\nStore(Amazon EBS) GP2 볼륨을 사용하여 애플리케이션을 실행합니다.",
      "Amazon EC2 인스턴스로 Auto Scaling 그룹을 구성합니다. OpenZFS 파일 시스템용 \nAmazon FSx 를 사용하여 애플리케이션을 실행합니다.",
      "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Amazon Elastic Block \nStore(Amazon EBS) GP3 볼륨을 사용하여 애플리케이션을 실행합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/117663-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 581,
    "question": "회사는 Amazon EC2 인스턴스에서 상태 저장 프로덕션 애플리케이션을 실행합니다. \n애플리케이션을 항상 실행하려면 최소 2 개의 EC2 인스턴스가 필요합니다. \n솔루션 설계자는 응용 프로그램을 위한 고가용성 및 내결함성 아키텍처를 설계해야 합니다. \n솔루션 설계자는 EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 수행해야 하는 추가 단계는 \n무엇입니까?",
    "options": [
      "Auto Scaling 그룹의 최소 용량을 2 로 설정합니다. 하나의 가용 영역에 하나의 온디맨드 \n인스턴스를 배포하고 두 번째 가용 영역에 하나의 온디맨드 인스턴스를 배포합니다.",
      "Auto Scaling 그룹의 최소 용량을 4 개로 설정합니다. 하나의 가용 영역에 2 개의 \n온디맨드 인스턴스를 배포하고 두 번째 가용 영역에 2\n개의 온디맨드 인스턴스를 \n배포합니다.",
      "Auto Scaling 그룹의 최소 용량을 2 로 설정합니다. 하나의 가용 영역에 4 개의 스팟 \n인스턴스를 배포합니다.",
      "Auto Scaling 그룹의 최소 용량을 4 로 설정합니다. 하나의 가용 영역에 2 개의 온디맨드 \n인스턴스를 배포하고 두 번째 가용 영역에 2 개의 스팟 인스턴스를 배포합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116968-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 582,
    "question": "전자상거래 회사는 Amazon Route 53 을 DNS 공급자로 사용합니다. 이 회사는 온프레미스 \n및 AWS 클라우드에서 웹 사이트를 호스팅합니다. 회사의 온프레미스 데이터 센터는 \nus-west-1 지역 근처에 있습니다. 회사는 eu-central-1 지역을 사용하여 웹사이트를 \n호스팅합니다. 회사는 웹사이트 로딩 시간을 최대한 최소화하고자 합니다. \n\n=== PAGE 548 ===\n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "지리적 위치 라우팅 정책을 설정합니다. us-west-1 근처에 있는 트래픽을 온프레미스 \n데이터 센터로 보냅니다. eu-central-1 근처에 있는 트래픽을 eu-central-1 로 보냅니다.",
      "eu-central-1 근처에 있는 모든 트래픽을 eu-central-1\n로 라우팅하고 온프레미스 \n데이터 센터 근처에 있는 모든 트래픽을 온프레미스 데이터 센터로 라우팅하는 간단한 \n라우팅 정책을 설정합니다.",
      "레이턴시 라우팅 정책을 설정합니다. 정책을 us-west-1 과 연결합니다.",
      "가중치 기반 라우팅 정책을 설정합니다. eu-central-1 과 온프레미스 데이터 센터 간에 \n트래픽을 균등하게 분할합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/118597-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 583,
    "question": "회사는 물리적 테이프에 5PB 의 아카이빙된 데이터를 가지고 있습니다. 회사는 규정 준수를 \n위해 테이프의 데이터를 10 년 더 보존해야 합니다. 회사는 향후 6 개월 내에 AWS 로 \n마이그레이션하기를 원합니다. 테이프를 저장하는 데이터 센터에는 1Gbps 업링크 인터넷 \n연결이 있습니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "온프레미스에서 \n테이프의 \n데이터를 \n읽습니다. \n로컬 \nNFS \n스토리지에 \n데이터를 \n준비합니다. AWS DataSync 를 사용하여 데이터를 Amazon S3 Glacier Flexible Retrieval 로 \n마이그레이션합니다.",
      "온프레미스 백업 애플리케이션을 사용하여 테이프에서 데이터를 읽고 Amazon S3 \nGlacier Deep Archive 에 직접 씁니다.",
      "테이프 게이트웨이가 있는 여러 AWS Snowball 디바이스를 주문합니다. Snowball 의 \n가상 테이프에 물리적 테이프를 복사합니다. Snowball 디바이스를 AWS 로 배송합니다. 수명 \n주기 정책을 생성하여 테이프를 Amazon S3 Glacier Deep Archive 로 이동합니다.",
      "온프레미스 테이프 게이트웨이를 구성합니다. AWS 클라우드에서 가상 테이프를 \n생성합니다. 백업 소프트웨어를 사용하여 물리적 테이프를 가상 테이프에 복사합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/117215-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 584,
    "question": "=== PAGE 549 ===\n한 회사에서 대량의 데이터를 병렬로 처리하는 애플리케이션을 배포하고 있습니다. 회사는 \n워크로드에 Amazon EC2 인스턴스를 사용할 계획입니다. 노드 그룹이 동일한 기본 \n하드웨어를 공유하지 못하도록 네트워크 아키텍처를 구성할 수 있어야 합니다. \n이러한 요구 사항을 충족하는 네트워킹 솔루션은 무엇입니까?",
    "options": [
      "분산 배치 그룹에서 EC2 인스턴스를 실행합니다.",
      "EC2 인스턴스를 별도의 계정으로 그룹화합니다.",
      "전용 테넌시로 EC2 인스턴스를 구성합니다.",
      "공유 테넌시로 EC2 인스턴스를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/119485-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 대량의 데이터를 병렬로 처리하고 노드 그룹이 동일한 기본 하드웨어를 \n공유하는 것을 방지하는 애플리케이션을 배포할 수 있습니다. 분산 배치 그룹에서 EC2 \n인스턴스를 실행함으로써 회사는 서로 다른 기본 하드웨어에서 소수의 인스턴스를 시작하여 \n상관 오류를 줄일 수 있습니다. 분산 배치 그룹은 각 인스턴스가 랙 수준에서 서로 \n격리되도록 보장합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 585,
    "question": "솔루션 아키텍트는 장애 조치 AWS 지역에서 Amazon EC2 용량을 제공하기 위한 재해 \n복구(DR) 전략을 설계하고 있습니다. 비즈니스 요구 사항에 따르면 DR 전략은 장애 조치 \n지역의 용량을 충족해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "장애 조치 지역에서 온디맨드 인스턴스를 구매합니다.",
      "장애 조치 지역에서 EC2 Savings Plan 을 구매합니다.",
      "장애 조치 지역에서 지역 예약 인스턴스를 구매합니다.",
      "장애 조치 지역에서 용량 예약을 구매합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/119642-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 586,
    "question": "회사에는 AWS Organizations 조직의 일부로 5 개의 조직 단위(OU)가 있습니다. 각 OU 는 \n\n=== PAGE 550 ===\n회사가 소유한 5 개 비즈니스와 연관되어 있습니다. 회사의 연구개발(R&D) 사업이 회사에서 \n분리되어 자체 조직이 필요할 것입니다. 솔루션 설계자는 이 목적을 위해 별도의 새 관리 \n계정을 생성합니다. \n솔루션 설계자는 새 마스터 계정에서 다음에 무엇을 수행해야 합니까?",
    "options": [
      "전환하는 동안 R&D AWS 계정이 두 조직의 일부가 되도록 하십시오.",
      "R&D AWS 계정이 이전 조직을 떠난 후 R&D AWS 계정을 새 조직의 일부로 초대합니다.",
      "새 조직에 새 R&D AWS 계정을 생성합니다. 이전 R&D AWS 계정의 리소스를 새 R&D \nAWS 계정으로 마이그레이션합니다.",
      "R&D AWS 계정이 새 조직에 가입하도록 합니다. 새 마스터 계정을 이전 조직의 \n구성원으로 만드세요."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/119645-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 솔루션 아키텍트는 연구 개발(R&D) 비즈니스를 위한 별도의 조직을 만들고 AWS \n계정을 새 조직으로 이동할 수 있습니다. R&D AWS 계정이 이전 조직을 떠난 후 새 조직의 \n일부가 되도록 초대함으로써 솔루션 아키텍트는 두 조직 간에 중복이나 충돌이 없는지 \n확인할 수 있습니다. R&D AWS 계정은 새 조직에 가입하라는 초대를 수락하거나 거부할 수 \n있습니다. 일단 수락되면 새 조직에서 적용하는 모든 정책과 통제가 적용됩니다.",
    "glossary": {}
  },
  {
    "id": 587,
    "question": "한 회사는 분석을 처리하고 예측하기 위해 다양한 웹 애플리케이션에서 고객 활동을 \n캡처하는 솔루션을 설계하고 있습니다. 웹 애플리케이션에서의 고객 활동은 예측할 수 \n없으며 갑자기 증가할 수 있습니다. 회사에는 다른 웹 애플리케이션과 통합되는 솔루션이 \n필요합니다. 솔루션에는 보안 목적을 위한 인증 단계가 포함되어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "회사가 Amazon Elastic File System(Amazon EFS) 파일 시스템에서 수신하는 정보를 \n저장하는 Amazon Elastic Container Service(Amazon ECS) 컨테이너 인스턴스 앞에 \n게이트웨이 로드 밸런서(GWLB)를 구성합니다. 승인은 GWLB 에서 해결됩니다.",
      "회사가 Amazon S3 버킷에 수신하는 정보를 저장하는 Amazon Kinesis 데이터 스트림 \n앞에 Amazon API Gateway 엔드포인트를 구성합니다. AWS Lambda 함수를 사용하여 \n인증을 해결합니다.",
      "회사가 Amazon S3 버킷에 수신하는 정보를 저장하는 Amazon Kinesis Data Firehose \n앞에 Amazon API Gateway 엔드포인트를 구성합니다. API Gateway Lambda 권한 부여자를 \n\n=== PAGE 551 ===\n사용하여 권한 부여를 해결합니다.",
      "회사가 Amazon Elastic File System(Amazon EFS) 파일 시스템에서 수신하는 정보를 \n저장하는 Amazon Elastic Container Service(Amazon ECS) 컨테이너 인스턴스 앞에 \n게이트웨이 로드 밸런서(GWLB)를 구성합니다. AWS Lambda 함수를 사용하여 인증을 \n해결합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/119576-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 588,
    "question": "한 전자 상거래 회사는 Microsoft SQL Server Enterprise Edition 을 실행하는 Amazon RDS \nDB 인스턴스에 대한 재해 복구 솔루션을 원합니다. 회사의 현재 복구 지점 목표(RPO)와 \n복구 시간 목표(RTO)는 24 시간입니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "지역 간 읽기 전용 복제본을 생성하고 읽기 전용 복제본을 기본 인스턴스로 승격합니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 RDS 교차 지역 복제를 \n생성합니다.",
      "24 시간마다 교차 리전 복제를 사용하여 기본 백업을 Amazon S3 버킷에 복사합니다.",
      "24 시간마다 자동 스냅샷을 다른 리전으로 복사합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/119718-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 589,
    "question": "한 회사는 고정 세션이 활성화된 Application Load Balancer 뒤에 있는 Auto Scaling 그룹의 \nAmazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 웹 서버는 현재 사용자 세션 \n상태를 호스팅합니다. 회사는 웹 서버 중단 시 고가용성을 보장하고 사용자 세션 상태 \n손실을 방지하기를 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Memcached 인스턴스용 Amazon ElastiCache 를 사용하여 세션 데이터를 저장합니다. \nMemcached\n용 ElastiCache\n를 사용하여 세션 상태를 저장하도록 애플리케이션을 \n업데이트합니다.",
      "Redis\n용 Amazon ElastiCache\n를 사용하여 세션 상태를 저장합니다. Redis\n용 \nElastiCache 를 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다. \n\n=== PAGE 552 ===",
      "AWS Storage Gateway 캐싱 볼륨을 사용하여 세션 데이터를 저장합니다. AWS Storage \nGateway 캐싱 볼륨을 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다.",
      "Amazon RDS 를 사용하여 세션 상태를 저장합니다. Amazon RDS 를 사용하여 세션 \n상태를 저장하도록 애플리케이션을 업데이트합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/119487-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 590,
    "question": "한 회사는 회사의 온프레미스 데이터 센터에서 MySQL DB 인스턴스용 Amazon RDS 로 \nMySQL 데이터베이스를 마이그레이션했습니다. 회사는 회사의 일일 평균 워크로드를 \n충족하도록 RDS DB 인스턴스의 크기를 조정했습니다. 한 달에 한 번 회사에서 보고서에 \n대한 쿼리를 실행할 때 데이터베이스 성능이 느려집니다. 회사는 보고서를 실행하고 일일 \n작업 부하의 성능을 유지 관리할 수 있는 기능을 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "데이터베이스의 읽기 전용 복제본을 생성합니다. 쿼리를 읽기 전용 복제본으로 \n보냅니다.",
      "데이터베이스 백업을 생성합니다. 백업을 다른 DB 인스턴스로 복원합니다. 쿼리를 새 \n데이터베이스로 보냅니다.",
      "데이터를 Amazon S3 로 내보냅니다. Amazon Athena 를 사용하여 S3 버킷을 쿼리합니다.",
      "추가 워크로드를 수용할 수 있도록 DB 인스턴스의 크기를 조정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/119719-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 591,
    "question": "회사는 \nAmazon \nElastic \nKubernetes \nService(Amazon \nEKS)를 \n사용하여 \n컨테이너 \n애플리케이션을 실행합니다. 애플리케이션에는 고객을 관리하고 주문하는 마이크로서비스가 \n포함되어 있습니다. 회사는 들어오는 요청을 적절한 마이크로서비스로 라우팅해야 합니다. \n이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS 로드 밸런서 컨트롤러를 사용하여 Network Load Balancer 를 프로비저닝하십시오.",
      "AWS Load Balancer Controller\n를 사용하여 Application Load Balancer\n를 \n프로비저닝합니다.",
      "AWS Lambda 함수를 사용하여 요청을 Amazon EKS 에 연결합니다. \n\n=== PAGE 553 ===",
      "Amazon API Gateway 를 사용하여 요청을 Amazon EKS 에 연결합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/119574-exam-aws-certified-sol\nutions-architect-associate-saa-c03/]",
    "glossary": {}
  },
  {
    "id": 592,
    "question": "회사는 AWS 를 사용하여 저작권이 있는 이미지에 대한 액세스 권한을 판매합니다. 회사의 \n글로벌 고객 기반은 이러한 이미지에 빠르게 액세스할 수 있어야 합니다. 회사는 특정 \n국가의 사용자에 대한 접근을 거부해야 합니다. 회사는 가능한 한 비용을 최소화하려고 \n합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon S3 를 사용하여 이미지를 저장하십시오. MFA(다단계 인증) 및 퍼블릭 버킷 \n액세스를 활성화합니다. 고객에게 S3 버킷에 대한 링크를 제공합니다.",
      "Amazon S3 를 사용하여 이미지를 저장합니다. 각 고객에 대해 IAM 사용자를 생성합니다. \nS3 버킷에 액세스할 수 있는 권한이 있는 그룹에 사용자를 추가합니다.",
      "ALB(Application Load Balancer) 뒤에 있는 Amazon EC2 인스턴스를 사용하여 이미지를 \n저장합니다. 회사가 서비스를 제공하는 국가에만 인스턴스를 배포하세요. 고객에게 특정 \n국가의 인스턴스에 대한 ALB 에 대한 링크를 제공하십시오.",
      "Amazon S3 를 사용하여 이미지를 저장합니다. 지리적 제한이 있는 이미지를 배포하려면 \nAmazon CloudFront 를 사용하십시오. 각 고객이 CloudFront 의 데이터에 액세스할 수 \n있도록 서명된 URL 을 제공합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/119573-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 593,
    "question": "솔루션 아키텍트는 가용성이 뛰어난 Redis 용 Amazon ElastiCache 기반 솔루션을 설계하고 \n있습니다. 솔루션 아키텍트는 장애로 인해 로컬 및 AWS 리전 내에서 성능 저하 또는 \n데이터 손실이 발생하지 않도록 해야 합니다. 솔루션은 노드 수준과 지역 수준에서 \n고가용성을 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "여러 노드가 포함된 샤드가 있는 다중 AZ Redis 복제 그룹을 사용하십시오.",
      "Redis AOF(Append Only Files)가 활성화된 여러 노드가 포함된 Redis 샤드를 \n사용합니다. \n\n=== PAGE 554 ===",
      "복제 그룹에 두 개 이상의 읽기 전용 복제본이 있는 다중 AZ Redis 클러스터를 \n사용합니다.",
      "Auto Scaling 이 활성화된 여러 노드가 포함된 Redis 샤드를 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/119572-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 594,
    "question": "회사는 AWS\n로 마이그레이션하고 애플리케이션에 Amazon EC2 온디맨드 인스턴스를 \n사용할 계획입니다. 마이그레이션 테스트 단계에서 기술 팀은 애플리케이션이 완전히 \n생산되기 위해 메모리를 실행하고 로드하는 데 오랜 시간이 걸린다는 사실을 관찰했습니다. \n다음 테스트 단계에서 애플리케이션 실행 시간을 단축할 솔루션은 무엇입니까?",
    "options": [
      "두 개 이상의 EC2 온디맨드 인스턴스를 시작합니다. Auto Scaling 기능을 활성화하고 \n다음 테스트 단계에서 EC2 온디맨드 인스턴스를 사용할 수 있도록 하십시오.",
      "EC2 스팟 인스턴스를 시작하여 애플리케이션을 지원하고 다음 테스트 단계에서 사용할 \n수 있도록 애플리케이션을 확장합니다.",
      "최대 절전 모드를 활성화한 상태에서 EC2 온디맨드 인스턴스를 시작합니다. 다음 \n테스트 단계에서 EC2 Auto Scaling 웜 풀을 구성합니다.",
      "용량 예약을 통해 EC2 온디맨드 인스턴스를 시작합니다. 다음 테스트 단계에서 추가 \nEC2 인스턴스를 시작하십시오."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/119570-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 595,
    "question": "회사의 애플리케이션은 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. \n회사는 해당 애플리케이션이 일주일 중 임의의 요일에 갑작스러운 트래픽 증가를 \n경험한다는 사실을 발견했습니다. 회사는 갑작스러운 트래픽 증가 중에도 애플리케이션 \n성능을 유지하려고 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Auto Scaling 그룹의 크기를 변경하려면 수동 스케일링을 사용하십시오.",
      "예측 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다.",
      "동적 스케일링을 사용하여 Auto Scaling 그룹의 크기를 변경합니다.",
      "일정 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다. \n\n=== PAGE 555 ==="
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/119569-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 596,
    "question": "전자상거래 \n애플리케이션은 \nAmazon \nEC2 \n인스턴스에서 \n실행되는 \nPostgreSQL \n데이터베이스를 사용합니다. 월별 판매 이벤트 중에 데이터베이스 사용량이 증가하고 \n애플리케이션에 대한 데이터베이스 연결 문제가 발생합니다. 후속 월별 판매 이벤트에 대한 \n트래픽은 예측할 수 없으며 이는 판매 예측에 영향을 미칩니다. 회사는 예측할 수 없는 \n트래픽 증가가 있을 때 성능을 유지해야 합니다. \n가장 비용 효과적인 방법으로 이 문제를 해결하는 솔루션은 무엇입니까?",
    "options": [
      "PostgreSQL 데이터베이스를 Amazon Aurora Serverless v2 로 마이그레이션합니다.",
      "증가된 사용량을 수용하기 위해 EC2 인스턴스의 PostgreSQL 데이터베이스에 대한 자동 \n크기 조정을 활성화합니다.",
      "더 큰 인스턴스 유형을 사용하여 PostgreSQL 데이터베이스를 PostgreSQL 용 Amazon \nRDS 로 마이그레이션합니다.",
      "증가된 사용량을 수용하기 위해 PostgreSQL 데이터베이스를 Amazon Redshift\n로 \n마이그레이션합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/119590-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 597,
    "question": "회사는 Amazon API Gateway 및 AWS Lambda 를 사용하여 AWS 에서 내부 서버리스 \n애플리케이션을 호스팅합니다. 회사 직원들은 매일 애플리케이션을 사용하기 시작할 때 \n대기 시간이 길어지는 문제를 보고합니다. 회사는 대기 시간을 줄이고 싶어합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "API 게이트웨이 조절 한도를 늘리십시오.",
      "직원이 매일 애플리케이션을 사용하기 전에 Lambda 프로비저닝 동시성을 높이기 위해 \n예약된 조정을 설정합니다.",
      "Amazon CloudWatch 경보를 생성하여 매일 시작 시 경보 대상으로 Lambda 함수를 \n시작합니다.",
      "Lambda 함수 메모리를 늘립니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/119465-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 598,
    "question": "연구 회사에서는 온프레미스 장치를 사용하여 분석용 데이터를 생성합니다. 회사는 AWS \n클라우드를 사용하여 데이터를 분석하려고 합니다. 장치는 .csv 파일을 생성하고 SMB 파일 \n공유에 데이터 쓰기를 지원합니다. 회사 분석가는 SQL 명령을 사용하여 데이터를 쿼리할 \n수 있어야 합니다. 분석가는 하루 종일 주기적으로 쿼리를 실행합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (3 개 선택)",
    "options": [
      "Amazon S3 파일 게이트웨이 모드로 온프레미스에 AWS Storage Gateway 를 배포합니다.",
      "Amazon FSx File Gateway 를 통해 온프레미스에 AWS Storage Gateway 를 배포합니다.",
      "Amazon S3 에 있는 데이터를 기반으로 테이블을 생성하도록 AWS Glue 크롤러를 \n설정합니다.",
      "EMRFS(EMR 파일 시스템)를 사용하여 Amazon EMR 클러스터를 설정하여 Amazon S3 에 \n있는 데이터를 쿼리합니다. 분석가에 대한 액세스를 제공합니다.",
      "Amazon S3 에 있는 데이터를 쿼리하도록 Amazon Redshift 클러스터를 설정합니다. \n분석가에 대한 액세스를 제공합니다.",
      "Amazon S3 에 있는 데이터를 쿼리하도록 Amazon Athena 를 설정합니다. 분석가에 대한 \n액세스를 제공합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/119563-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n비용 효율적인 방식으로 사용 사례의 요구 사항을 충족하려면 다음 단계를 수행하는 것이 \n좋습니다. \nAmazon S3 파일 게이트웨이 모드로 온프레미스에 AWS Storage Gateway 를 배포합니다. \n이를 통해 회사는 장치에서 생성된 .csv 파일을 SMB 파일 공유에 쓸 수 있으며, 이 파일은 \nAmazon S3 버킷에 객체로 저장됩니다. AWS Storage Gateway 는 온프레미스 환경을 AWS \n스토리지와 통합하는 하이브리드 클라우드 스토리지 서비스입니다. Amazon S3 파일 \n게이트웨이 모드는 Amazon S3 에 연결하고 거의 무제한의 클라우드 스토리지에 액세스할 \n수 있는 원활한 방법을 제공합니다. \nAmazon S3\n에 있는 데이터를 기반으로 테이블을 생성하도록 AWS Glue 크롤러를 \n설정합니다. 이를 통해 회사는 표준 SQL 을 사용하여 Amazon S3 버킷에 저장된 데이터를 \n쿼리할 수 있습니다. AWS Glue 는 데이터 준비 및 분석을 단순화하는 서버리스 데이터 통합",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Storage Gateway": "사내 장비와 AWS 스토리지를 연결해 하이브리드 환경을 만드는 서비스"
    }
  },
  {
    "id": 599,
    "question": "한 회사에서 Amazon Elastic Container Service(Amazon ECS) 클러스터와 Amazon RDS DB \n인스턴스를 사용하여 결제 처리 애플리케이션을 구축하고 실행하려고 합니다. 회사는 규정 \n준수를 위해 온프레미스 데이터 센터에서 애플리케이션을 실행합니다. \n솔루션 아키텍트는 AWS Outposts 를 솔루션의 일부로 사용하려고 합니다. 솔루션 설계자는 \n회사의 운영 팀과 협력하여 애플리케이션을 구축하고 있습니다. \n회사 운영팀에서는 어떤 활동을 담당하나요? (3 개를 선택하세요.)",
    "options": [
      "Outposts 랙에 탄력적인 전원 및 네트워크 연결을 제공합니다.",
      "Outposts 에서 실행되는 가상화 하이퍼바이저, 스토리지 시스템 및 AWS 서비스를 \n관리합니다.",
      "데이터 센터 환경의 물리적 보안 및 액세스 제어.",
      "Outposts 랙 내의 전원 공급 장치, 서버 및 네트워킹 장비를 포함한 Outposts 인프라의 \n가용성.",
      "Outposts 구성 요소의 물리적 유지 관리. \n\n=== PAGE 558 ===",
      "서버 오류 및 유지 관리 이벤트를 완화하기 위해 Amazon ECS 클러스터에 추가 용량을 \n제공합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/119530-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \nA,C,D??",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 600,
    "question": "회사는 \nTCP \n기반 \n애플리케이션을 \n회사의 \nVPC\n로 \n마이그레이션할 \n계획입니다. \n애플리케이션은 회사 데이터 센터의 하드웨어 어플라이언스를 통해 비표준 TCP 포트에서 \n공개적으로 액세스할 수 있습니다. 이 퍼블릭 엔드포인트는 짧은 대기 시간으로 초당 최대 \n300 만 개의 요청을 처리할 수 있습니다. 회사는 AWS 의 새로운 퍼블릭 엔드포인트에 대해 \n동일한 수준의 성능을 요구합니다. \n이 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "NLB(Network Load Balancer)를 배포합니다. 애플리케이션에 필요한 TCP 포트를 통해 \n공개적으로 액세스할 수 있도록 NLB 를 구성합니다.",
      "ALB(Application Load Balancer)를 배포합니다. 애플리케이션에 필요한 TCP 포트를 통해 \n공개적으로 액세스할 수 있도록 ALB 를 구성하십시오.",
      "애플리케이션에 필요한 TCP 포트를 수신하는 Amazon CloudFront 배포를 배포합니다. \nApplication Load Balancer 를 원본으로 사용합니다.",
      "애플리케이션에 필요한 TCP 포트로 구성된 Amazon API Gateway API 를 배포합니다. \n요청을 처리하기 위해 프로비저닝된 동시성을 사용하여 AWS Lambda 함수를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/121205-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  }
];