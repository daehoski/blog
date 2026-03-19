export const quizData = [
  {
    "id": 601,
    "question": "회사는 PostgreSQL DB 인스턴스용 Amazon RDS 에서 중요 데이터베이스를 실행합니다. 이 \n회사는 가동 중지 시간과 데이터 손실을 최소화하면서 Amazon Aurora PostgreSQL 로 \n마이그레이션하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "RDS for PostgreSQL DB 인스턴스의 DB 스냅샷을 생성하여 새로운 Aurora PostgreSQL \nDB 클러스터를 채웁니다.",
      "RDS for PostgreSQL DB 인스턴스의 Aurora 읽기 전용 복제본을 생성합니다. Aurora 읽기 \n\n=== PAGE 559 ===\n복제를 새로운 Aurora PostgreSQL DB 클러스터로 승격합니다.",
      "Amazon S3 에서 데이터 가져오기를 사용하여 데이터베이스를 Aurora PostgreSQL DB \n클러스터로 마이그레이션합니다.",
      "pg_dump 유틸리티를 사용하여 PostgreSQL 용 RDS 데이터베이스를 백업합니다. 새 \nAurora PostgreSQL DB 클러스터로 백업을 복원합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121210-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 602,
    "question": "회사의 인프라는 Amazon Elastic Block Store(Amazon EBS) 스토리지를 사용하는 수백 개의 \nAmazon EC2 인스턴스로 구성됩니다. 솔루션 아키텍트는 재해 발생 후 모든 EC2 \n인스턴스를 복구할 수 있는지 확인해야 합니다. \n최소한의 노력으로 이 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": [
      "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍습니다. EBS 스토리지에서 새 \nEC2 인스턴스를 시작하려면 AWS CloudFormation 템플릿을 생성하세요.",
      "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍습니다. AWS Elastic \nBeanstalk 를 사용하여 EC2 템플릿 기반으로 환경을 설정하고 EBS 스토리지를 연결하세요.",
      "AWS Backup을 사용하여 전체 EC2 인스턴스 그룹에 대한 백업 계획을 설정합니다. AWS \nBackup API 또는 AWS CLI 를 사용하면 여러 EC2 인스턴스의 복원 프로세스 속도를 높일 \n수 있습니다.",
      "각 \nEC2 \n인스턴스에 \n연결된 \nEBS \n스토리지의 \n스냅샷을 \n찍고 \nAmazon \n머신 \n이미지(AMI)를 복사하는 AWS Lambda 함수를 생성합니다. 복사된 AMI 로 복원을 수행하고 \nEBS 스토리지를 연결하는 또 다른 Lambda 함수를 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/121212-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 603,
    "question": "최근 한 회사가 AWS 클라우드로 마이그레이션했습니다. 회사는 반구조화된 데이터 세트의 \n대규모 병렬 주문형 처리를 위한 서버리스 솔루션을 원합니다. 데이터는 Amazon S3 에 \n저장되는 로그, 미디어 파일, 판매 거래 및 IoT 센서 데이터로 구성됩니다. 회사는 데이터 \n세트에 있는 수천 개의 항목을 병렬로 처리하는 솔루션을 원합니다. \n가장 효율적인 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 560 ===",
    "options": [
      "인라인 모드에서 AWS Step Functions 맵 상태를 사용하여 데이터를 병렬로 처리합니다.",
      "분산 모드에서 AWS Step Functions 맵 상태를 사용하여 데이터를 병렬로 처리합니다.",
      "AWS Glue 를 사용하여 데이터를 병렬로 처리합니다.",
      "여러 AWS Lambda 함수를 사용하여 데이터를 병렬로 처리합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121211-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 604,
    "question": "회사는 6주 안에 10PB 의 데이터를 Amazon S3 로 마이그레이션할 예정입니다. 현재 데이터 \n센터에는 인터넷에 대한 500Mbps 업링크가 있습니다. 다른 온프레미스 애플리케이션은 \n업링크를 공유합니다. 회사는 이 일회성 마이그레이션 작업에 인터넷 대역폭의 80%를 \n사용할 수 있습니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "데이터를 Amazon S3\n로 마이그레이션하고 자동으로 데이터를 확인하도록 AWS \nDataSync 를 구성합니다.",
      "rsync 를 사용하여 데이터를 Amazon S3 로 직접 전송합니다.",
      "AWS CLI 와 여러 복사 프로세스를 사용하여 데이터를 Amazon S3 에 직접 보냅니다.",
      "여러 AWS Snowball 디바이스를 주문합니다. 데이터를 장치에 복사합니다. 디바이스를 \nAWS 로 보내 데이터를 Amazon S3 에 복사합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/121186-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 605,
    "question": "회사에는 온프레미스 ISCSI(Internet Small Computer Systems Interface) 네트워크 스토리지 \n서버가 여러 대 있습니다. 회사는 AWS 클라우드로 이동하여 이러한 서버의 수를 줄이고 \n싶어합니다. 솔루션 설계자는 자주 사용되는 데이터에 대한 짧은 대기 시간 액세스를 \n제공하고 최소한의 인프라 변경으로 온프레미스 서버에 대한 종속성을 줄여야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon S3 파일 게이트웨이를 배포합니다.",
      "Amazon S3 에 대한 백업과 함께 Amazon Elastic Block Store(Amazon EBS) 스토리지를 \n배포합니다.",
      "저장된 볼륨으로 구성된 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다. \n\n=== PAGE 561 ===",
      "캐시된 볼륨으로 구성된 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/121170-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 606,
    "question": "솔루션 아키텍트는 비즈니스 사용자가 Amazon S3\n에 객체를 업로드할 수 있는 \n애플리케이션을 설계하고 있습니다. 솔루션은 객체 내구성을 극대화해야 합니다. 또한 \n객체는 언제든지 언제든지 쉽게 사용할 수 있어야 합니다. 사용자는 객체가 업로드된 후 \n처음 30\n일 이내에 객체에 자주 액세스하지만 30\n일보다 오래된 객체에는 사용자가 \n액세스할 가능성이 훨씬 적습니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Standard 에 저장하여 30 일 후에 객체를 \nS3 Glacier 로 전환합니다.",
      "30 일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환하려면 S3 \n수명 주기 규칙을 사용하여 모든 객체를 S3 Standard 에 저장합니다.",
      "30 일 후에 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환하는 S3 \n수명 주기 규칙을 사용하여 모든 객체를 S3 Standard 에 저장합니다.",
      "S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Intelligent-Tiering 에 저장하여 30 일 \n후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121214-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 607,
    "question": "한 회사가 온프레미스 데이터 센터에서 AWS 클라우드로 2\n계층 애플리케이션을 \n마이그레이션했습니다. 데이터 계층은 12TB\n의 범용 SSD Amazon Elastic Block \nStore(Amazon EBS) 스토리지를 갖춘 Oracle 용 Amazon RDS 의 다중 AZ 배포입니다. 이 \n애플리케이션은 평균 문서 크기가 6MB 인 이진 대형 개체(BLOB)로 데이터베이스의 문서를 \n처리하고 저장하도록 설계되었습니다. \n시간이 지남에 따라 데이터베이스 크기가 증가하여 성능이 저하되고 스토리지 비용이 \n증가했습니다. 회사는 데이터베이스 성능을 개선해야 하며 가용성과 탄력성이 뛰어난 \n솔루션이 필요합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 562 ===",
    "options": [
      "RDS DB 인스턴스 크기를 줄입니다. 스토리지 용량을 24TiB 로 늘립니다. 스토리지 \n유형을 마그네틱으로 변경합니다.",
      "RDS DB 인스턴스 크기를 늘리십시오. 스토리지 용량을 24Ti 로 늘립니다. 스토리지 \n유형을 프로비저닝된 IOPS 로 변경합니다.",
      "Amazon S3 버킷을 생성합니다. S3 버킷에 문서를 저장하도록 애플리케이션을 \n업데이트합니다. 기존 데이터베이스에 개체 메타데이터를 저장합니다.",
      "Amazon DynamoDB 테이블을 생성합니다. DynamoDB 를 사용하도록 애플리케이션을 \n업데이트합니다. AWS Database Migration Service(AWS DMS)를 사용하여 Oracle \n데이터베이스에서 DynamoDB 로 데이터를 마이그레이션합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/121215-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 608,
    "question": "회사에는 전 세계 20,000\n개 이상의 소매점 위치에 배포된 클라이언트에게 서비스를 \n제공하는 애플리케이션이 있습니다. 애플리케이션은 포트 443에서 HTTPS 를 통해 노출되는 \n백엔드 웹 서비스로 구성됩니다. 애플리케이션은 ALB(Application Load Balancer) 뒤의 \nAmazon EC2 인스턴스에서 호스팅됩니다. 소매점은 공용 인터넷을 통해 웹 애플리케이션과 \n통신합니다. 회사는 각 소매점에서 현지 ISP\n가 할당한 IP 주소를 등록할 수 있도록 \n허용합니다. \n회사 보안팀에서는 소매점에서 등록한 IP 주소로만 접속을 제한하여 애플리케이션 \n엔드포인트의 보안을 강화할 것을 권장합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS WAF 웹 ACL 을 ALB 와 연결합니다. ALB 의 IP 규칙 세트를 사용하여 트래픽을 \n필터링합니다. 등록된 IP 주소를 포함하도록 규칙의 IP 주소를 업데이트합니다.",
      "AWS Firewall Manager 를 배포하여 ALConfigure 방화벽 규칙을 관리하여 AL 로의 \n트래픽을 제한합니다. 등록된 IP 주소를 포함하도록 방화벽 규칙을 수정합니다.",
      "Amazon DynamoDB 테이블에 IP 주소를 저장합니다. ALB 에서 AWS Lambda 인증 \n기능을 구성하여 수신 요청이 등록된 IP 주소에서 오는지 확인합니다.",
      "ALB 의 공용 인터페이스가 포함된 서브넷에서 네트워크 ACL 을 구성합니다. 등록된 각 \nIP 주소에 대한 항목으로 네트워크 ACL 의 수신 규칙을 업데이트합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/121216-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 609,
    "question": "회사에서 AWS Lake Formation 을 사용하여 AWS 에 데이터 분석 플랫폼을 구축하고 \n있습니다. 플랫폼은 Amazon S3 및 Amazon RDS 와 같은 다양한 소스에서 데이터를 \n수집합니다. 회사는 중요한 정보가 포함된 데이터 부분에 대한 액세스를 방지하기 위한 \n보안 솔루션이 필요합니다.",
    "options": [
      "Lake Formation 테이블에 액세스할 수 있는 권한이 포함된 IAM 역할을 생성합니다.",
      "데이터 필터를 생성하여 행 수준 보안 및 셀 수준 보안을 구현합니다.",
      "Lake Formation 이 다시 데이터를 수집하기 전에 민감한 정보를 제거하는 AWS Lambda \n함수를 생성합니다.",
      "Lake Formation 테이블에서 민감한 정보를 주기적으로 쿼리하고 제거하는 AWS Lambda \n함수를 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121162-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 옵션은 Lake Formation 과 통합된 엔진 및 쿼리 결과의 특정 데이터에 대한 액세스를 \n제한하는 사양인 데이터 필터를 사용하기 때문에 가장 효율적입니다. 데이터 필터는 중요한 \n정보가 포함된 데이터 부분에 대한 액세스를 방지하는 기술인 행 수준 보안 및 셀 수준 \n보안을 구현하는 데 사용할 수 있습니다. Data Catalog 테이블에 대한 Lake Formation \n권한을 부여할 때 데이터 필터를 적용할 수 있으며 PartiQL 표현식을 사용하여 조건에 따라 \n데이터를 필터링할 수 있습니다. 이 솔루션은 중요한 정보가 포함된 데이터 부분에 대한 \n액세스를 방지하는 보안 솔루션을 제공해야 한다는 요구 사항을 충족합니다. \n \n옵션 A 는 IAM 정책을 사용하여 Lake Formation 의 데이터에 대한 액세스 권한을 부여하는 \n방법인 Lake Formation 테이블에 대한 액세스 권한이 포함된 IAM 역할을 사용하기 때문에 \n효율성이 떨어집니다. 그러나 이것은 중요한 정보가 포함된 데이터 부분에 대한 액세스를 \n방지하는 방법을 제공하지 않습니다. \n \n옵션 C 는 Lake Formation 이 데이터를 수집하기 전에 민감한 정보를 제거하는 AWS \nLambda 함수를 사용하기 때문에 효율성이 떨어집니다. 이는 서버리스 함수를 사용하여 \n데이터 정리 또는 변환을 수행하는 방법입니다. 그러나 여기에는 애플리케이션 코드 및 \n논리에 대한 상당한 변경이 포함될 수 있으며 데이터 손실 또는 불일치가 발생할 수도 \n있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 610,
    "question": "회사는 VPC 에서 실행되는 Amazon EC2 인스턴스를 배포합니다. EC2 인스턴스는 나중에 \n데이터를 처리할 수 있도록 소스 데이터를 Amazon S3 버킷에 로드합니다. 규정 준수법에 \n따라 데이터는 공용 인터넷을 통해 전송되어서는 안 됩니다. 회사의 온프레미스 데이터 \n센터에 있는 서버는 EC2 인스턴스에서 실행되는 애플리케이션의 출력을 사용합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon EC2 용 인터페이스 VPC 엔드포인트를 배포합니다. 회사와 VPC 간에 AWS \nSite-to-Site VPN 연결을 생성합니다.",
      "Amazon S3 용 게이트웨이 VPC 엔드포인트를 배포합니다. 온프레미스 네트워크와 VPC \n간에 AWS Direct Connect 연결을 설정합니다.",
      "VPC 에서 S3 버킷으로의 AWS Transit Gateway 연결을 설정합니다. 회사와 VPC 간에 \nAWS Site-to-Site VPN 연결을 생성합니다.",
      "NAT 게이트웨이에 대한 경로가 있는 프록시 EC2 인스턴스를 설정합니다. S3 데이터를 \n가져오고 애플리케이션 인스턴스에 공급하도록 프록시 EC2 인스턴스를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121217-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 611,
    "question": "회사에는 제3 자 공급업체로부터 거의 실시간으로 데이터를 수신할 수 있는 REST 기반 \n인터페이스가 있는 애플리케이션이 있습니다. 일단 수신되면 애플리케이션은 추가 분석을 \n위해 데이터를 처리하고 저장합니다. 애플리케이션이 Amazon EC2 인스턴스에서 실행 \n중입니다. \n타사 공급업체에서 애플리케이션에 데이터를 보낼 때 503 서비스를 사용할 수 없음 오류가 \n많이 발생했습니다. 데이터 볼륨이 급증하면 컴퓨팅 용량이 최대 한도에 도달하고 \n애플리케이션이 모든 요청을 처리할 수 없게 됩니다. \n보다 확장 가능한 솔루션을 제공하기 위해 솔루션 설계자는 어떤 디자인을 권장해야 \n합니까?",
    "options": [
      "Amazon Kinesis Data Streams 를 사용하여 데이터를 수집하십시오. AWS Lambda 함수를 \n\n=== PAGE 565 ===\n사용하여 데이터를 처리합니다.",
      "기존 애플리케이션 위에 Amazon API Gateway 를 사용하십시오. 타사 공급업체에 대한 \n할당량 제한이 있는 사용량 계획을 만듭니다.",
      "Amazon Simple 알림 서비스(Amazon SNS)를 사용하여 데이터를 수집합니다. Application \nLoad Balancer 뒤의 Auto Scaling 그룹에 EC2 인스턴스를 배치합니다.",
      "애플리케이션을 컨테이너로 다시 패키징합니다. Auto Scaling 그룹과 함께 EC2 시작 \n유형을 \n사용하는 \nAmazon \nElastic \nContainer \nService(Amazon \nECS)를 \n사용하여 \n애플리케이션을 배포합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/121218-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 612,
    "question": "회사에는 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. \n애플리케이션은 Amazon S3 버킷의 민감한 정보를 처리해야 합니다. 애플리케이션은 S3 \n버킷에 연결하기 위해 인터넷을 사용해서는 안 됩니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "인터넷 게이트웨이를 구성하십시오. 인터넷 게이트웨이에서의 액세스를 허용하도록 S3 \n버킷 \n정책을 \n업데이트합니다. \n새 \n인터넷 \n게이트웨이를 \n사용하도록 \n애플리케이션을 \n업데이트합니다.",
      "VPN 연결을 구성합니다. VPN 연결에서 액세스를 허용하도록 S3 버킷 정책을 \n업데이트합니다. 새 VPN 연결을 사용하도록 애플리케이션을 업데이트하세요.",
      "NAT 게이트웨이를 구성합니다. NAT 게이트웨이에서의 액세스를 허용하도록 S3 버킷 \n정책을 업데이트합니다. 새 NAT 게이트웨이를 사용하도록 애플리케이션을 업데이트합니다.",
      "VPC 엔드포인트를 구성합니다. VPC 엔드포인트에서의 액세스를 허용하도록 S3 버킷 \n정책을 업데이트합니다. 새 VPC 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/121159-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 613,
    "question": "회사는 \nAmazon \nElastic \nKubernetes \nService(Amazon \nEKS)를 \n사용하여 \n컨테이너 \n애플리케이션을 실행합니다. EKS 클러스터는 Kubernetes 비밀 객체에 민감한 정보를 \n저장합니다. 회사는 정보가 암호화되었는지 확인하기를 원합니다. 어떤 솔루션이 이러한 \n\n=== PAGE 566 ===\n요구 사항을 충족합니까? \n최소한의 운영 오버헤드로 요구 사항을 충족합니까?",
    "options": [
      "컨테이너 애플리케이션을 사용하여 AWS Key Management Service(AWS KMS)를 \n사용하여 정보를 암호화합니다.",
      "AWS Key Management Service(AWS KMS)를 사용하여 EKS 클러스터에서 비밀 암호화를 \n활성화합니다.",
      "AWS KMS(AWS Key Management Service)를 사용하여 정보를 암호화하는 AWS Lambda \ntuncuon 을 구현합니다.",
      "AWS Systems Manager Parameter Store 를 사용하여 AWS Key Management Service(AWS \nKMS)를 사용하여 정보를 암호화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121158-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 최소한의 운영 오버헤드로 EKS 클러스터의 Kubernetes 비밀 개체를 \n암호화할 수 있습니다. EKS 클러스터에서 비밀 암호화를 활성화함으로써 회사는 AWS Key \nManagement Service(AWS KMS)를 사용하여 저장된 비밀을 암호화하고 해독하기 위한 \n암호화 키를 생성하고 관리할 수 있습니다. 이는 EKS 클러스터의 중요한 정보를 보호하는 \n간단하고 안전한 방법입니다.",
    "glossary": {
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 614,
    "question": "한 회사는 다음 구성 요소로 구성된 새로운 다중 계층 웹 애플리케이션을 설계하고 \n있습니다. \n \n• Auto Scaling 그룹의 일부로 Amazon EC2 인스턴스에서 실행되는 웹 및 애플리케이션 \n서버 \n• 데이터 저장을 위한 Amazon RDS DB 인스턴스 \n \n솔루션 설계자는 웹 서버만 액세스할 수 있도록 애플리케이션 서버에 대한 액세스를 \n제한해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "애플리케이션 서버 앞에 AWS PrivateLink 를 배포합니다. 웹 서버만 애플리케이션 서버에 \n액세스할 수 있도록 네트워크 ACL 을 구성합니다.",
      "애플리케이션 서버 앞에 VPC 엔드포인트를 배포합니다. 웹 서버만 애플리케이션 서버에 \n\n=== PAGE 567 ===\n액세스할 수 있도록 보안 그룹을 구성합니다.",
      "애플리케이션 서버의 Auto Scaling 그룹이 포함된 대상 그룹으로 Network Load \nBalancer 를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 네트워크 \nACL 을 구성합니다.",
      "애플리케이션 서버의 Auto Scaling 그룹이 포함된 대상 그룹과 함께 Application Load \nBalancer 를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 보안 그룹을 \n구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/121157-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 615,
    "question": "한 회사가 Amazon Elastic Kubernetes Service(Amazon EKS)에서 고객을 대상으로 하는 \n중요한 애플리케이션을 실행하고 있습니다. 애플리케이션에는 마이크로서비스 아키텍처가 \n있습니다. 회사는 중앙 위치에서 애플리케이션의 측정항목과 로그를 수집, 집계, 요약하는 \n솔루션을 구현해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "기존 EKS 클러스터에서 Amazon CloudWatch 에이전트를 실행합니다. CloudWatch \n콘솔에서 지표와 로그를 봅니다.",
      "기존 EKS 클러스터에서 AWS App Mesh 를 실행합니다. App Mesh 콘솔에서 지표와 \n로그를 확인하세요.",
      "데이터 이벤트를 캡처하도록 AWS CloudTrail 을 구성합니다. Amazon OpenSearch \nService 를 사용하여 CloudTrail 을 쿼리합니다.",
      "기존 EKS 클러스터에 Amazon CloudWatch Container Insights\n를 구성합니다. \nCloudWatch 콘솔에서 지표와 로그를 봅니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/121154-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 616,
    "question": "한 회사가 AWS 에 최신 제품을 배포했습니다. 제품은 Network Load Balancer 뒤의 Auto \nScaling 그룹에서 실행됩니다. 회사는 제품의 객체를 Amazon S3 버킷에 저장합니다. \n이 회사는 최근 자사 시스템에 대한 악의적인 공격을 경험했습니다. 회사에는 AWS 계정의 \n악의적인 활동, 워크로드 및 S3 버킷에 대한 액세스 패턴을 지속적으로 모니터링하는 \n\n=== PAGE 568 ===\n솔루션이 필요합니다. 또한 솔루션은 의심스러운 활동을 보고하고 대시보드에 정보를 \n표시해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "결과를 모니터링하고 AWS Config 에 보고하도록 Amazon Macie 를 구성합니다.",
      "결과를 모니터링하고 AWS CloudTrail 에 보고하도록 Amazon Inspector 를 구성합니다.",
      "결과를 모니터링하고 AWS Security Hub\n에 보고하도록 Amazon GuardDuty\n를 \n구성합니다.",
      "결과를 모니터링하고 Amazon EventBridge 에 보고하도록 AWS Config 를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/121177-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon GuardDuty 는 AWS 계정과 워크로드 전체에서 악의적인 활동과 무단 행동을 \n지속적으로 모니터링하는 위협 탐지 서비스입니다. GuardDuty 는 AWS CloudTrail 이벤트 \n로그, Amazon VPC 흐름 로그 및 DNS 로그와 같은 데이터 소스를 분석하여 손상된 \n인스턴스, 정찰, 포트 스캐닝 및 데이터 유출과 같은 잠재적인 위협을 식별합니다. \nGuardDuty 는 AWS 계정 및 워크로드의 보안 상태에 대한 포괄적인 보기를 제공하는 \n서비스인 AWS Security Hub 에 조사 결과를 보고할 수 있습니다. Security Hub 는 여러 AWS \n서비스 및 파트너 솔루션의 보안 경고를 집계, 구성 및 우선순위를 지정하여 대시보드에 \n표시합니다. 이 솔루션은 AWS 계정의 악의적인 활동, 워크로드 및 S3 버킷에 대한 액세스 \n패턴을 지속적으로 모니터링, 보고 및 시각화할 수 있으므로 요구 사항을 충족합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 617,
    "question": "회사에서 온프레미스 데이터 센터를 AWS 로 마이그레이션하려고 합니다. 데이터 센터는 \nNFS 기반 파일 시스템에 데이터를 저장하는 스토리지 서버를 호스팅합니다. 스토리지 \n서버는 200GB 의 데이터를 보유합니다. 회사는 기존 서비스를 중단하지 않고 데이터를 \n마이그레이션해야 합니다. AWS\n의 여러 리소스는 NFS 프로토콜을 사용하여 데이터에 \n액세스할 수 있어야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "Lustre 파일 시스템용 Amazon FSx 를 생성합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다.",
      "데이터를 수신할 Amazon S3 버킷을 생성합니다.",
      "운영 체제 복사 명령을 수동으로 사용하여 데이터를 AWS 대상으로 푸시합니다.",
      "온프레미스 데이터 센터에 AWS DataSync 에이전트를 설치합니다. 온프레미스 위치와 \n\n=== PAGE 569 ===\nAWS 간에 DataSync 작업을 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121176-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n102 문제와 중복",
    "glossary": {}
  },
  {
    "id": 618,
    "question": "한 회사에서는 us-east-1 리전에 볼륨으로 마운트된 SMB 파일 공유가 있는 Amazon EC2 \n인스턴스에 Amazon FSx for Windows File Server 를 사용하려고 합니다. 회사는 계획된 \n시스템 유지 관리 또는 계획되지 않은 서비스 중단에 대해 5 분의 복구 지점 목표(RPO)를 \n가지고 있습니다. 회사는 파일 시스템을 us-west-2 리전에 복제해야 합니다. 복제된 \n데이터는 5 년 동안 어떤 사용자도 삭제해서는 안 됩니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "단일 AZ 2 배포 유형을 사용하는 us-east-1 에 FSx for Windows File Server 파일 \n시스템을 생성합니다. AWS Backup 을 사용하여 백업을 us-west-2 에 복사하는 백업 규칙이 \n포함된 일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 규정 준수 모드로 \nAWS Backup Vault Lock 을 구성합니다. 최소 기간을 5 년으로 구성합니다.",
      "다중 AZ 배포 유형이 있는 us-east-1 에 FSx for Windows File Server 파일 시스템을 \n생성합니다. AWS Backup 을 사용하여 백업을 us-west-2 에 복사하는 백업 규칙이 포함된 \n일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 거버넌스 모드에서 AWS \nBackup Vault Lock 을 구성합니다. 최소 기간을 5 년으로 구성합니다.",
      "다중 AZ 배포 유형이 있는 us-east-1 에 FSx for Windows File Server 파일 시스템을 \n생성합니다. AWS Backup 을 사용하여 백업을 us-west-2 에 복사하는 백업 규칙이 포함된 \n일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 규정 준수 모드로 AWS \nBackup Vault Lock 을 구성합니다. 최소 기간을 5 년으로 구성합니다.",
      "단일 AZ 2 배포 유형이 있는 us-east-1 에 FSx for Windows File Server 파일 시스템을 \n생성합니다. AWS Backup 을 사용하여 백업을 us-west-2 에 복사하는 백업 규칙이 포함된 \n일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 거버넌스 모드에서 AWS \nBackup Vault Lock 을 구성합니다. 최소 기간을 5 년으로 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/121219-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 619,
    "question": "=== PAGE 570 ===\n솔루션 아키텍트는 표준 보안 제어를 유지하면서 AWS Organizations 를 통해 개발자에게 \n개별 AWS 계정을 제공하려는 회사를 위한 보안 솔루션을 설계하고 있습니다. 개별 \n개발자는 자신의 계정에 대해 AWS 계정 루트 사용자 수준 액세스 권한을 가지게 되므로 \n솔루션 설계자는 새 개발자 계정에 적용되는 필수 AWS CloudTrail 구성이 수정되지 \n않았는지 확인하려고 합니다. \n이러한 요구사항을 충족하는 작업은 무엇인가요?",
    "options": [
      "CloudTrail 변경을 금지하는 IAM 정책을 생성합니다. 루트 사용자에게 연결합니다.",
      "조직 추적 옵션이 활성화된 개발자 계정 내에서 CloudTrail 에 새 추적을 생성합니다.",
      "CloudTrail 변경을 금지하는 서비스 제어 정책(SCP)을 생성하고 이를 개발자 계정에 \n연결합니다.",
      "마스터 계정의 Amazon 리소스 이름(ARN)에서만 변경을 허용하는 정책 조건을 \n사용하여 CloudTrail 에 대한 서비스 연결 역할을 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/121220-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 620,
    "question": "한 회사가 AWS 클라우드에 비즈니스에 중요한 애플리케이션을 배포할 계획입니다. \n애플리케이션에는 일관되고 지연 시간이 짧은 성능을 갖춘 내구성 있는 스토리지가 \n필요합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 유형의 스토리지를 권장해야 \n합니까?",
    "options": [
      "인스턴스 스토어 볼륨",
      "Memcached 클러스터용 Amazon ElastiCache",
      "프로비저닝된 IOPS SSD Amazon Elastic Block Store(Amazon EBS) 볼륨",
      "처리량 최적화 HDD Amazon Elastic Block Store(Amazon EBS) 볼륨"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/121221-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 621,
    "question": "온라인 사진 공유 회사는 us-west-1 지역에 있는 Amazon S3 버킷에 사진을 저장합니다. \n회사는 us-east-1 지역에 모든 새 사진의 사본을 저장해야 합니다. \n최소한의 운영 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까? \n\n=== PAGE 571 ===",
    "options": [
      "us-east-1 에 두 번째 S3 버킷을 생성합니다. S3 교차 리전 복제를 사용하여 기존 S3 \n버킷의 사진을 두 번째 S3 버킷으로 복사합니다.",
      "기존 S3 버킷의 CORS(교차 원본 리소스 공유) 구성을 생성합니다. CORS 규칙의 \nAllowedOrigin 요소에 us-east-1 을 지정합니다.",
      "여러 가용 영역에 걸쳐 us-east-1 에 두 번째 S3 버킷을 생성합니다. S3 수명 주기 \n규칙을 생성하여 두 번째 S3 버킷에 사진을 저장합니다.",
      "us-east-1 에 두 번째 S3 버킷을 생성합니다. 객체 생성 및 업데이트 이벤트에 대한 S3 \n이벤트 알림을 구성하여 AWS Lambda 함수를 호출하여 기존 S3 버킷의 사진을 두 번째 \nS3 버킷으로 복사합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/121222-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 622,
    "question": "한 회사에서 구독자를 위한 새로운 웹 애플리케이션을 만들고 있습니다. 애플리케이션은 \n정적 단일 페이지와 영구 데이터베이스 계층으로 구성됩니다. 아침에 4\n시간 동안 \n애플리케이션의 사용자는 수백만 명에 달하지만 나머지 시간에는 애플리케이션의 사용자가 \n수천 명에 불과합니다. 회사의 데이터 설계자는 스키마를 빠르게 발전시킬 수 있는 기능을 \n요청했습니다. \n이러한 요구 사항을 충족하고 가장 뛰어난 확장성을 제공하는 솔루션은 무엇입니까? (2 개 \n선택)",
    "options": [
      "Amazon DynamoDB\n를 데이터베이스 솔루션으로 배포합니다. 온디맨드 용량을 \n프로비저닝합니다.",
      "Amazon Aurora 를 데이터베이스 솔루션으로 배포합니다. 서버리스 DB 엔진 모드를 \n선택합니다.",
      "Amazon DynamoDB 를 데이터베이스 솔루션으로 배포합니다. DynamoDB Auto Scaling 이 \n활성화되어 있는지 확인합니다.",
      "정적 콘텐츠를 Amazon S3 버킷에 배포합니다. S3 버킷을 원본으로 사용하여 Amazon \nCloudFront 배포를 프로비저닝합니다.",
      "Auto Scaling 그룹의 Amazon EC2 인스턴스 전체에 정적 콘텐츠용 웹 서버를 배포합니다. \nAmazon Elastic File System(Amazon EFS) 볼륨의 콘텐츠를 주기적으로 새로 고치도록 \n인스턴스를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/121223-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 623,
    "question": "회사는 Amazon API Gateway 를 사용하여 타사 서비스 공급자가 액세스하는 REST API 를 \n관리합니다. 회사는 SQL 주입 및 크로스 사이트 스크립팅 공격으로부터 REST API 를 \n보호해야 합니다. \n이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
    "options": [
      "AWS Shield 를 구성합니다.",
      "AWS WAF 를 구성합니다.",
      "Amazon CloudFront 배포를 사용하여 API 게이트웨이를 설정합니다. CloudFront 에서 \nAWS Shield 를 구성합니다.",
      "Amazon CloudFront 배포로 API 게이트웨이를 설정합니다. CloudFront 에서 AWS WAF 를 \n구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/121172-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 624,
    "question": "회사에서는 사용자에게 AWS 리소스에 대한 액세스 권한을 제공하려고 합니다. 이 회사에는 \n1,500\n명의 사용자가 있으며 회사 네트워크의 Active Directory 사용자 그룹을 통해 \n온프레미스 리소스에 대한 액세스를 관리합니다. 그러나 회사는 사용자가 리소스에 \n액세스하기 위해 다른 ID 를 유지해야 하는 것을 원하지 않습니다. 솔루션 아키텍트는 \n온프레미스 리소스에 대한 액세스를 유지하면서 AWS 리소스에 대한 사용자 액세스를 \n관리해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "회사의 각 사용자에 대해 IAM 사용자를 생성합니다. 각 사용자에게 적절한 정책을 \n연결합니다.",
      "Active Directory 사용자 풀과 함께 Amazon Cognito 를 사용하십시오. 적절한 정책이 \n연결된 역할을 생성합니다.",
      "적절한 정책이 연결된 교차 계정 역할을 정의합니다. 역할을 Active Directory 그룹에 \n매핑합니다.",
      "SAML(Security Assertion Markup Language) 2 0 기반 페더레이션을 구성합니다. 적절한 \n정책이 연결된 역할을 생성합니다. 역할을 Active Directory 그룹에 매핑합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/125336-exam-aws-certified-sol",
    "glossary": {}
  },
  {
    "id": 625,
    "question": "한 회사가 여러 Application Load Balancer 뒤에 웹사이트를 호스팅하고 있습니다. 회사는 \n전 세계적으로 콘텐츠에 대해 다양한 배포 권한을 가지고 있습니다. 솔루션 설계자는 배포 \n권한을 위반하지 않고 사용자에게 올바른 콘텐츠가 제공되도록 해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 구성을 선택해야 합니까?",
    "options": [
      "AWS WAF 로 Amazon CloudFront 를 구성합니다.",
      "AWS WAF 로 Application Load Balancer 구성",
      "지리적 위치 정책으로 Amazon Route 53 구성",
      "지리 근접 라우팅 정책으로 Amazon Route 53 구성"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125337-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  }
];