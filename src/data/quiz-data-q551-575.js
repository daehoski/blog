export const quizData = [
  {
    "id": 551,
    "question": "회사에 보고서를 생성하는 재무 응용 프로그램이 있습니다. 보고서 크기는 평균 50KB 이며 \nAmazon S3 에 저장됩니다. 보고서는 생산 후 첫 주 동안 자주 액세스되며 몇 년 동안 \n저장해야 합니다. 보고서는 6 시간 이내에 검색할 수 있어야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 Standard 를 사용합니다. S3 수명 주기 규칙을 사용하여 7 일 후에 보고서를 S3 \n\n=== PAGE 529 ===\nGlacier 로 전환합니다.",
      "S3 Standard 를 사용합니다. S3 수명 주기 규칙을 사용하여 7 일 후에 보고서를 S3 \nStandard-Infrequent Access(S3 Standard-IA)로 전환합니다.",
      "S3 Intelligent-Tiering 을 사용합니다. 보고서를 S3 Standard-Infrequent Access(S3 \nStandard-IA) 및 S3 Glacier 로 전환하도록 S3 Intelligent-Tiering 을 구성합니다.",
      "S3 Standard 를 사용합니다. S3 수명 주기 규칙을 사용하여 7 일 후에 보고서를 S3 \nGlacier Deep Archive 로 전환합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/116896-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n첫 주 동안 자주 액세스하고 수년간 보관해야 하는 보고서를 저장하고 검색하려면 S3 \nStandard 와 S3 Glacier 가 적합한 솔루션입니다. S3 Standard 는 자주 액세스하는 데이터에 \n대해 높은 내구성, 가용성 및 성능을 제공합니다. S3 Glacier 는 저렴한 비용으로 장기 \n데이터 보관을 위한 안전하고 내구성 있는 스토리지를 제공합니다. S3 수명 주기 규칙을 \n사용하면 7 일 후에 보고서를 S3 Standard 에서 S3 Glacier 로 전환할 수 있으므로 스토리지 \n비용을 줄일 수 있습니다. S3 Glacier 는 6 시간 이내 검색도 지원합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 552,
    "question": "회사는 Amazon EC2 인스턴스의 비용을 최적화해야 합니다. 회사는 또한 2~3 개월마다 \nEC2 인스턴스의 유형과 제품군을 변경해야 합니다. \n이러한 요구 사항을 충족하기 위해 회사는 무엇을 해야 합니까?",
    "options": [
      "3 년 기간 동안 부분 선결제 예약 인스턴스를 구매합니다.",
      "1 년 기간 동안 선결제 없는 컴퓨팅 절감 플랜을 구매합니다.",
      "1 년 기간 동안 모든 선결제 예약 인스턴스를 구매합니다.",
      "1 년 기간 동안 All Upfront EC2 Instance Savings Plan 을 구매합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116897-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 553,
    "question": "솔루션 설계자는 회사의 Amazon S3 버킷을 검토하여 개인 식별 정보(PII)를 검색해야 \n합니다. 회사는 us-east-1 지역 및 us-west-2 지역에 PII 데이터를 저장합니다. \n\n=== PAGE 530 ===\n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "각 리전에서 Amazon Macie 를 구성합니다. Amazon S3 에 있는 데이터를 분석하는 \n작업을 생성합니다.",
      "모든 지역에 대해 AWS Security Hub 를 구성합니다. Amazon S3 에 있는 데이터를 \n분석하는 AWS Config 규칙을 생성합니다.",
      "Amazon S3 에 있는 데이터를 분석하도록 Amazon Inspector 를 구성합니다.",
      "Amazon S3 에 있는 데이터를 분석하도록 Amazon GuardDuty 를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117206-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 554,
    "question": "회사의 SAP 애플리케이션에는 온프레미스 환경에 백엔드 SQL Server 데이터베이스가 \n있습니다. \n이 \n회사는 \n온프레미스 \n애플리케이션과 \n데이터베이스 \n서버를 \nAWS\n로 \n마이그레이션하려고 합니다. 회사는 SAP 데이터베이스의 높은 요구 사항을 충족하는 \n인스턴스 유형이 필요합니다. 온프레미스 성능 데이터에 따르면 SAP 애플리케이션과 \n데이터베이스 모두 메모리 사용률이 높습니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "애플리케이션에 최적화된 컴퓨팅 인스턴스 제품군을 사용하십시오. 데이터베이스에 \n메모리 최적화 인스턴스 제품군을 사용하십시오.",
      "애플리케이션과 데이터베이스 모두에 스토리지 최적화 인스턴스 제품군을 사용하십시오.",
      "애플리케이션과 \n데이터베이스 \n모두에 \n대해 \n메모리 \n최적화 \n인스턴스 \n제품군을 \n사용하십시오.",
      "애플리케이션에 \n고성능 \n컴퓨팅(HPC) \n최적화 \n인스턴스 \n제품군을 \n사용합니다. \n데이터베이스에 메모리 최적화 인스턴스 제품군을 사용하십시오."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/117442-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 555,
    "question": "회사는 퍼블릭 및 프라이빗 서브넷이 있는 VPC 에서 애플리케이션을 실행합니다. VPC 는 \n여러 가용 영역에 걸쳐 확장됩니다. 애플리케이션은 프라이빗 서브넷의 Amazon EC2 \n인스턴스에서 실행됩니다. 애플리케이션은 Amazon Simple Queue Service(Amazon SQS) \n대기열을 사용합니다. \n\n=== PAGE 531 ===\n솔루션 설계자는 EC2 인스턴스와 SQS 대기열 간의 연결을 설정하기 위한 보안 솔루션을 \n설계해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon SQS\n용 인터페이스 VPC 엔드포인트를 구현합니다. 프라이빗 서브넷을 \n사용하도록 엔드포인트를 구성합니다. 프라이빗 서브넷에 있는 EC2 인스턴스의 트래픽을 \n허용하는 인바운드 액세스 규칙이 있는 보안 그룹을 엔드포인트에 추가합니다.",
      "Amazon SQS 용 인터페이스 VPC 엔드포인트를 구현합니다. 퍼블릭 서브넷을 사용하도록 \n엔드포인트를 구성합니다. 프라이빗 서브넷에 있는 EC2 인스턴스의 액세스를 허용하는 \nVPC 엔드포인트 정책을 인터페이스 엔드포인트에 연결합니다.",
      "Amazon SQS 용 인터페이스 VPC 엔드포인트를 구현합니다. 퍼블릭 서브넷을 사용하도록 \n엔드포인트를 구성합니다. 지정된 VPC 엔드포인트의 요청만 허용하는 인터페이스 VPC \n엔드포인트에 Amazon SQS 액세스 정책을 연결합니다.",
      "Amazon SQS\n용 게이트웨이 엔드포인트를 구현합니다. 프라이빗 서브넷에 NAT \n게이트웨이를 추가합니다. SQS 대기열에 대한 액세스를 허용하는 EC2 인스턴스에 IAM \n역할을 연결합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/116983-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 556,
    "question": "솔루션 설계자는 AWS CloudFormation 템플릿을 사용하여 3\n계층 웹 애플리케이션을 \n배포합니다. 웹 애플리케이션은 웹 계층과 Amazon DynamoDB 테이블에서 사용자 \n데이터를 저장하고 검색하는 애플리케이션 계층으로 구성됩니다. 웹 및 애플리케이션 \n계층은 Amazon EC2 인스턴스에서 호스팅되며 데이터베이스 계층은 공개적으로 액세스할 \n수 없습니다. 애플리케이션 EC2 인스턴스는 템플릿에서 API 자격 증명을 노출하지 않고 \nDynamoDB 테이블에 액세스해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "DynamoDB 테이블을 읽을 IAM 역할을 생성합니다. 인스턴스 프로필을 참조하여 역할을 \n애플리케이션 인스턴스와 연결합니다.",
      "DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 IAM 역할을 생성합니다. EC2 \n인스턴스 \n프로필에 \n역할을 \n추가하고 \n인스턴스 \n프로필을 \n애플리케이션 \n인스턴스와 \n연결합니다.",
      "AWS CloudFormation 템플릿의 파라미터 섹션을 사용하여 사용자가 DynamoDB \n테이블에서 읽고 쓰는 데 필요한 권한이 있는 이미 생성된 IAM 사용자의 액세스 및 비밀 \n키를 입력하도록 합니다. \n\n=== PAGE 532 ===",
      "DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 AWS CloudFormation \n템플릿에서 IAM 사용자를 생성합니다. GetAtt 기능을 사용하여 액세스 및 비밀 키를 \n검색하고 사용자 데이터를 통해 애플리케이션 인스턴스에 전달합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/117434-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 애플리케이션 EC2 인스턴스는 템플릿에 API 자격 증명을 노출하지 않고도 \nDynamoDB 테이블에 액세스할 수 있습니다. DynamoDB 테이블에서 읽고 쓰는 데 필요한 \n권한이 있는 IAM 역할을 생성하고 이를 EC2 인스턴스 프로필에 추가하면 애플리케이션 \n인스턴스는 AWS 에서 자동으로 교체하는 임시 보안 자격 증명을 사용할 수 있습니다. 이는 \nEC2 인스턴스에서 AWS 리소스에 대한 액세스 권한을 부여하는 안전한 모범 사례 \n방법입니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 557,
    "question": "솔루션 설계자는 분석 애플리케이션을 관리합니다. 애플리케이션은 Amazon S3 버킷에 \n대량의 반구조화된 데이터를 저장합니다. 솔루션 설계자는 병렬 데이터 처리를 사용하여 \n데이터를 더 빠르게 처리하려고 합니다. 또한 솔루션 설계자는 Amazon Redshift \n데이터베이스에 저장된 정보를 사용하여 데이터를 보강하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Athena 를 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 \nAWS Glue 를 사용하여 S3 데이터를 보강합니다.",
      "Amazon EMR 을 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 \nAmazon EMR 을 사용하여 S3 데이터를 보강합니다.",
      "Amazon EMR 을 사용하여 S3 데이터를 처리합니다. 데이터를 보강할 수 있도록 Amazon \nKinesis Data Streams 를 사용하여 S3 데이터를 Amazon Redshift 로 이동합니다.",
      "AWS Glue 를 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 AWS \nLake Formation 을 사용하여 S3 데이터를 보강합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/117344-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 558,
    "question": "=== PAGE 533 ===\n회사에는 동일한 AWS 계정 내의 us-west-2 리전에 위치한 두 개의 VPC 가 있습니다. \n회사는 이러한 VPC 간의 네트워크 트래픽을 허용해야 합니다. 매월 VPC 간에 약 \n500GB 의 데이터 전송이 발생합니다. \n이러한 VPC 를 연결하는 가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": [
      "AWS Transit Gateway 를 구현하여 VPC 를 연결합니다. VPC 간 통신에 전송 게이트웨이를 \n사용하도록 각 VPC 의 라우팅 테이블을 업데이트합니다.",
      "VPC 간에 AWS Site-to-Site VPN 터널을 구현합니다. VPC 간 통신에 VPN 터널을 \n사용하도록 각 VPC 의 라우팅 테이블을 업데이트합니다.",
      "VPC 간에 VPC 피어링 연결을 설정합니다. VPC 간 통신에 VPC 피어링 연결을 \n사용하도록 각 VPC 의 라우팅 테이블을 업데이트합니다.",
      "VPC 간에 1GB AWS Direct Connect 연결을 설정합니다. VPC 간 통신에 Direct Connect \n연결을 사용하도록 각 VPC 의 라우팅 테이블을 업데이트합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/117053-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n동일한 AWS 계정 내 동일한 리전에 있는 두 개의 VPC 를 연결하려면 VPC 피어링이 가장 \n비용 효과적인 솔루션입니다. VPC 피어링을 사용하면 게이트웨이, VPN 연결 또는 AWS \nTransit Gateway 없이도 VPC 간의 직접 네트워크 트래픽을 허용할 수 있습니다. 또한 VPC \n피어링은 VPC 간 데이터 전송에 대한 추가 요금을 발생시키지 않습니다.",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "Transit Gateway": "수많은 VPC와 온프레미스 네트워크를 중앙에서 연결하는 네트워크 허브"
    }
  },
  {
    "id": 559,
    "question": "회사는 서로 다른 제품군에 대해 AWS\n에서 여러 애플리케이션을 호스팅합니다. \n애플리케이션은 Amazon EC2 인스턴스 및 Application Load Balancer 를 비롯한 다양한 \n컴퓨팅 리소스를 사용합니다. 애플리케이션은 여러 AWS 리전의 AWS Organizations 에서 \n동일한 조직의 다른 AWS 계정에서 실행됩니다. 각 제품군의 팀은 개별 계정의 각 컴퓨팅 \n리소스에 태그를 지정했습니다. \n회사는 조직의 통합 청구 기능에서 각 제품군의 비용에 대한 자세한 정보를 원합니다. \n이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "AWS 결제 콘솔에서 특정 AWS 생성 태그를 선택합니다.",
      "AWS 결제 콘솔에서 특정 사용자 정의 태그를 선택합니다.",
      "AWS 리소스 그룹 콘솔에서 특정 사용자 정의 태그를 선택합니다.",
      "각 AWS 계정에서 선택한 태그를 활성화합니다.",
      "조직 마스터 계정에서 선택한 태그를 활성화합니다. \n\n=== PAGE 534 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/117403-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n사용자 정의 태그는 AWS 리소스에 적용하여 분류하고 추적할 수 있는 키-값 쌍입니다. \n사용자 정의 태그를 사용하여 비용을 할당하고 AWS 결제 콘솔에서 세부 결제 보고서를 \n생성할 수도 있습니다. 비용 할당을 위해 사용자 정의 태그를 사용하려면 조직의 모든 회원 \n계정에 대한 모든 권한을 갖는 루트 계정인 조직 마스터 계정에서 태그를 활성화해야 \n합니다. 활성화되면 사용자 정의 태그가 비용 할당 보고서의 열로 표시되며 제품 라인별로 \n비용을 필터링하고 그룹화하는 데 사용할 수 있습니다. 이 솔루션은 기존 태깅 전략을 \n활용하고 코드 개발이나 수동 개입이 필요하지 않으므로 최소한의 운영 오버헤드로 요구 \n사항을 충족합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 560,
    "question": "회사의 솔루션 아키텍트가 AWS Organizations 를 사용하는 AWS 다중 계정 솔루션을 \n설계하고 있습니다. 솔루션 설계자는 회사의 계정을 OU(조직 단위)로 구성했습니다. \n솔루션 설계자는 OU 계층 구조에 대한 모든 변경 사항을 식별할 솔루션이 필요합니다. \n솔루션은 또한 회사의 운영 팀에 변경 사항을 알려야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Control Tower 를 사용하여 AWS 계정을 프로비저닝합니다. 계정 드리프트 알림을 \n사용하여 OU 계층 구조의 변경 사항을 식별합니다.",
      "AWS Control Tower 를 사용하여 AWS 계정을 프로비저닝합니다. AWS Config 집계 \n규칙을 사용하여 OU 계층 구조의 변경 사항을 식별합니다.",
      "AWS Service Catalog 를 사용하여 조직에서 계정을 생성합니다. AWS CloudTrail 조직 \n추적을 사용하여 OU 계층 구조의 변경 사항을 식별합니다.",
      "AWS CloudFormation 템플릿을 사용하여 조직에서 계정을 생성합니다. 스택에서 \n드리프트 감지 작업을 사용하여 OU 계층 구조에 대한 변경 사항을 식별합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117021-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 561,
    "question": "회사의 웹 사이트는 매일 수백만 건의 요청을 처리하며 요청 수는 계속 증가하고 있습니다. \n\n=== PAGE 535 ===\n솔루션 설계자는 웹 애플리케이션의 응답 시간을 개선해야 합니다. 솔루션 설계자는 \n애플리케이션이 Amazon DynamoDB 테이블에서 제품 세부 정보를 검색할 때 지연 시간을 \n줄여야 한다고 결정합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "DynamoDB Accelerator(DAX) 클러스터를 설정합니다. DAX 를 통해 모든 읽기 요청을 \n라우팅합니다.",
      "DynamoDB 테이블과 웹 애플리케이션 사이에 Redis\n용 Amazon ElastiCache\n를 \n설정합니다. Redis 를 통해 모든 읽기 요청을 라우팅합니다.",
      "DynamoDB 테이블과 웹 애플리케이션 사이에 Amazon ElastiCache for Memcached 를 \n설정합니다. Memcached 를 통해 모든 읽기 요청을 라우팅합니다.",
      "테이블에 Amazon DynamoDB 스트림을 설정하고 AWS Lambda 가 테이블에서 읽고 \nAmazon ElastiCache\n를 채우도록 합니다. ElastiCache\n를 통해 모든 읽기 요청을 \n라우팅합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117022-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 Amazon DynamoDB 테이블에서 제품 세부 정보를 검색할 때 웹 \n애플리케이션의 응답 시간을 개선하고 지연 시간을 줄일 수 있습니다. DynamoDB \nAccelerator(DAX) 클러스터를 설정함으로써 회사는 최대 10 배의 성능 향상을 제공하는 \nDynamoDB 용 완전 관리형 고가용성 인 메모리 캐시를 사용할 수 있습니다. 모든 읽기 \n요청을 DAX 를 통해 라우팅함으로써 회사는 DynamoDB 테이블에 대한 읽기 작업 수를 \n줄이고 사용자 경험을 향상시킬 수 있습니다.",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 562,
    "question": "솔루션 설계자는 VPC 의 Amazon EC2 인스턴스에서 Amazon DynamoDB 에 대한 API \n호출이 인터넷을 통해 이동하지 않도록 해야 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2 개 \n선택)",
    "options": [
      "엔드포인트에 대한 라우팅 테이블 항목을 생성합니다.",
      "DynamoDB 용 게이트웨이 엔드포인트를 생성합니다.",
      "Amazon EC2 용 인터페이스 엔드포인트를 생성합니다.",
      "VPC 의 각 서브넷에서 끝점에 대한 탄력적 네트워크 인터페이스를 만듭니다.",
      "엔드포인트의 보안 그룹에 보안 그룹 항목을 생성하여 액세스를 제공합니다. \n\n=== PAGE 536 ==="
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117251-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 563,
    "question": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터와 온프레미스 \nKubernetes 클러스터 모두에서 애플리케이션을 실행합니다. 회사는 중앙 위치에서 모든 \n클러스터와 워크로드를 보기를 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon CloudWatch Container Insights\n를 사용하여 클러스터 정보를 수집하고 \n그룹화합니다.",
      "Amazon EKS 커넥터를 사용하여 모든 Kubernetes 클러스터를 등록하고 연결합니다.",
      "AWS Systems Manager 를 사용하여 클러스터 정보를 수집하고 봅니다.",
      "Amazon EKS Anywhere 를 기본 클러스터로 사용하여 기본 Kubernetes 명령으로 다른 \n클러스터를 봅니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/117023-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 564,
    "question": "회사에서 전자상거래 애플리케이션을 구축 중이며 중요한 고객 정보를 저장해야 합니다. \n회사는 고객이 웹사이트에서 구매 거래를 완료할 수 있는 기능을 제공해야 합니다. 회사는 \n또한 민감한 고객 데이터를 데이터베이스 관리자로부터 보호해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon Elastic Block Store(Amazon EBS) 볼륨에 민감한 데이터를 저장합니다. EBS \n암호화를 사용하여 데이터를 암호화합니다. IAM 인스턴스 역할을 사용하여 액세스를 \n제한합니다.",
      "MySQL 용 Amazon RDS 에 민감한 데이터를 저장합니다. AWS Key Management \nService(AWS KMS) 클라이언트 측 암호화를 사용하여 데이터를 암호화합니다.",
      "민감한 데이터를 Amazon S3 에 저장합니다. AWS Key Management Service(AWS KMS) \n서버 측 암호화를 사용하여 데이터를 암호화합니다. S3 버킷 정책을 사용하여 액세스를 \n제한하십시오.",
      "민감한 데이터를 Windows Server 용 Amazon FSx 에 저장합니다. 응용 프로그램 서버에 \n파일 공유를 탑재합니다. Windows 파일 권한을 사용하여 액세스를 제한하십시오. \n\n=== PAGE 537 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/117024-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 중요한 고객 정보를 관리형 AWS 서비스에 저장하고 고객이 웹 \n사이트에서 구매 거래를 완료할 수 있는 기능을 제공할 수 있습니다. AWS Key Management \nService(AWS KMS) 클라이언트 측 암호화를 사용하여 회사는 데이터를 MySQL 용 Amazon \nRDS 로 보내기 전에 암호화할 수 있습니다. 애플리케이션만이 암호화 키에 액세스할 수 \n있으므로 이를 통해 데이터베이스 관리자로부터도 민감한 고객 데이터가 보호됩니다.",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 565,
    "question": "회사에는 트랜잭션 데이터를 처리하는 온프레미스 MySQL 데이터베이스가 있습니다. \n회사는 데이터베이스를 AWS 클라우드로 마이그레이션하고 있습니다. 마이그레이션된 \n데이터베이스는 데이터베이스를 사용하는 회사의 애플리케이션과 호환성을 유지해야 합니다. \n마이그레이션된 데이터베이스는 또한 수요가 증가하는 기간 동안 자동으로 확장되어야 \n합니다. \n이러한 요구 사항을 충족하는 마이그레이션 솔루션은 무엇입니까?",
    "options": [
      "기본 MySQL 도구를 사용하여 데이터베이스를 MySQL\n용 Amazon RDS\n로 \n마이그레이션합니다. 탄력적 스토리지 확장을 구성합니다.",
      "mysqldump \n유틸리티를 \n사용하여 \n데이터베이스를 \nAmazon \nRedshift\n로 \n마이그레이션합니다. Amazon Redshift 클러스터에 대해 Auto Scaling 을 켭니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 데이터베이스를 Amazon \nAurora 로 마이그레이션합니다. Aurora Auto Scaling 을 켭니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 데이터베이스를 Amazon \nDynamoDB 로 마이그레이션합니다. Auto Scaling 정책을 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/117025-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n호환성과 확장성을 갖춘 MySQL 데이터베이스를 AWS\n로 마이그레이션하려면 Amazon \nAurora 가 적합한 옵션입니다. Aurora 는 MySQL 과 호환되며 Aurora Auto Scaling 을 통해 \n자동으로 확장할 수 있습니다. AWS Database Migration Service(AWS DMS)를 사용하면 가동 \n중지 시간을 최소화하면서 온프레미스에서 Aurora 로 데이터베이스를 마이그레이션할 수",
    "glossary": {
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 566,
    "question": "회사는 2 개의 가용 영역에 걸쳐 VPC 에서 여러 Amazon EC2 Linux 인스턴스를 실행합니다. \n인스턴스는 \n계층적 \n디렉터리 \n구조를 \n사용하는 \n애플리케이션을 \n호스팅합니다. \n애플리케이션은 공유 스토리지에서 동시에 빠르게 읽고 쓸 수 있어야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon S3 버킷을 생성합니다. VPC 의 모든 EC2 인스턴스에서 액세스를 허용합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. 각 EC2 \n인스턴스에서 EFS 파일 시스템을 탑재합니다.",
      "프로비저닝된 IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS) 볼륨에 파일 \n시스템을 생성합니다. EBS 볼륨을 모든 EC2 인스턴스에 연결합니다.",
      "각 EC2 인스턴스에 연결된 Amazon Elastic Block Store(Amazon EBS) 볼륨에 파일 \n시스템을 만듭니다. 여러 EC2 인스턴스 간에 EBS 볼륨을 동기화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116902-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 EC2 인스턴스는 두 가용 영역에 걸쳐 공유 스토리지에 동시에 빠르게 읽고 쓸 \n수 있습니다. Amazon EFS 는 여러 EC2 인스턴스에서 탑재할 수 있는 확장 가능하고 \n탄력적이며 가용성이 높은 파일 시스템을 제공합니다. Amazon EFS\n는 높은 수준의 \n처리량과 IOPS, 일관되게 낮은 지연 시간을 지원합니다. Amazon EFS 는 또한 높은 수준의 \n동시성을 지원하는 NFSv4 잠금 업그레이드 및 다운그레이드를 지원합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지"
    }
  },
  {
    "id": 567,
    "question": "솔루션 설계자는 건물 내 비즈니스 테넌트의 시간당 에너지 소비량을 저장할 워크로드를 \n설계하고 \n있습니다. \n센서는 \n각 \n테넌트의 \n사용량을 \n합산하는 \nHTTP \n요청을 \n통해 \n데이터베이스에 공급합니다. 솔루션 설계자는 가능한 경우 관리 서비스를 사용해야 합니다. \n워크로드는 솔루션 설계자가 독립적인 구성 요소를 추가함에 따라 향후 더 많은 기능을 \n받게 됩니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Lambda 함수와 함께 Amazon API Gateway 를 사용하여 센서에서 데이터를 \n수신하고, 데이터를 처리하고, Amazon DynamoDB 테이블에 데이터를 저장합니다. \n\n=== PAGE 539 ===",
      "Amazon EC2 인스턴스의 Auto Scaling 그룹에서 지원하는 Elastic Load Balancer 를 \n사용하여 센서에서 데이터를 수신하고 처리합니다. Amazon S3 버킷을 사용하여 처리된 \n데이터를 저장합니다.",
      "AWS Lambda 함수와 함께 Amazon API Gateway 를 사용하여 센서에서 데이터를 \n수신하고, 데이터를 처리하고, Amazon EC2 인스턴스의 Microsoft SQL Server Express \n데이터베이스에 데이터를 저장합니다.",
      "Amazon EC2 인스턴스의 Auto Scaling 그룹에서 지원하는 Elastic Load Balancer 를 \n사용하여 센서에서 데이터를 수신하고 처리합니다. Amazon Elastic File System(Amazon EFS) \n공유 파일 시스템을 사용하여 처리된 데이터를 저장합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117026-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Lambda 에서 이벤트 기반 프로그래밍 모델을 사용하고 운영 오버헤드를 줄이려면 \nAmazon API Gateway 와 Amazon DynamoDB 가 적합한 솔루션입니다. Amazon API \nGateway 는 센서로부터 데이터를 수신하고 AWS Lambda 함수를 호출하여 데이터를 처리할 \n수 있습니다. AWS Lambda 는 서버를 프로비저닝하거나 관리하지 않고도 코드를 실행하고 \n수신 요청에 따라 자동으로 확장할 수 있습니다. Amazon DynamoDB 는 일관된 성능으로 \n모든 양의 데이터를 처리할 수 있는 빠르고 유연한 NoSQL 데이터베이스에 데이터를 \n저장할 수 있습니다.",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 568,
    "question": "솔루션 설계자는 엔지니어링 도면을 저장하고 보는 데 사용되는 새 웹 애플리케이션의 \n스토리지 아키텍처를 설계하고 있습니다. 모든 애플리케이션 구성 요소는 AWS 인프라에 \n배포됩니다. \n응용 프로그램 디자인은 사용자가 엔지니어링 도면이 로드될 때까지 기다리는 시간을 \n최소화하기 위해 캐싱을 지원해야 합니다. 애플리케이션은 페타바이트의 데이터를 저장할 \n수 있어야 합니다. \n솔루션 설계자는 어떤 스토리지 및 캐싱 조합을 사용해야 합니까?",
    "options": [
      "Amazon CloudFront 를 사용하는 Amazon S3",
      "Amazon ElastiCache 를 사용하는 Amazon S3 Glacier",
      "Amazon CloudFront 를 사용하는 Amazon Elastic Block Store(Amazon EBS) 볼륨",
      "Amazon ElastiCache 를 사용하는 AWS Storage Gateway"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117027-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n캐싱 지원을 통해 엔지니어링 도면을 저장하고 보려면 Amazon S3 및 Amazon \nCloudFront 가 적합한 솔루션입니다. Amazon S3 는 높은 내구성, 가용성 및 성능으로 모든 \n양의 데이터를 저장할 수 있습니다. Amazon CloudFront 는 엔지니어링 도면을 사용자에게 \n더 가까운 엣지 로케이션에 배포하여 지연 시간을 줄이고 사용자 경험을 향상시킬 수 \n있습니다. Amazon CloudFront 는 엔지니어링 도면을 엣지 로케이션에 캐시할 수도 있으므로 \n사용자가 도면이 로드될 때까지 기다리는 시간을 최소화할 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 569,
    "question": "Amazon EventBridge 규칙은 타사 API 를 대상으로 합니다. 타사 API 가 수신 트래픽을 \n수신하지 않았습니다. 솔루션 설계자는 규칙 조건이 충족되고 있는지 여부와 규칙의 대상이 \n호출되고 있는지 확인해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS/Events 의 네임스페이스에서 Amazon CloudWatch 의 지표를 확인하십시오.",
      "Amazon Simple Queue Service(Amazon SQS) 데드 레터 대기열의 이벤트를 검토합니다.",
      "Amazon CloudWatch Logs 에서 이벤트를 확인합니다.",
      "EventBridge 이벤트에 대한 AWS CloudTrail 의 추적을 확인합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117377-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 570,
    "question": "회사에는 \n매주 \n금요일 \n저녁에 \n실행되는 \n대규모 \n워크로드가 \n있습니다. \n워크로드는 \nus-east-1 리전의 두 가용 영역에 있는 Amazon EC2 인스턴스에서 실행됩니다. \n일반적으로 회사는 항상 두 개 이상의 인스턴스를 실행하지 않아야 합니다. 그러나 회사는 \n정기적으로 반복되는 증가된 워크로드를 처리하기 위해 금요일마다 최대 6 개의 인스턴스로 \n확장하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon EventBridge 에서 미리 알림을 생성하여 인스턴스를 확장하십시오.",
      "예약된 작업이 있는 Auto Scaling 그룹을 생성합니다.",
      "수동 조정을 사용하는 Auto Scaling 그룹을 생성합니다. \n\n=== PAGE 541 ===",
      "자동 조정을 사용하는 Auto Scaling 그룹을 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116903-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAuto Scaling 그룹은 유사한 특성을 공유하고 수요에 따라 자동으로 확장 또는 축소될 수 \n있는 EC2 인스턴스 모음입니다. Auto Scaling 그룹에는 특정 시간에 특정 크기로 \n확장하도록 그룹에 지시하는 구성인 예약된 작업이 있을 수 있습니다. 이러한 방식으로 \n회사는 매주 금요일 저녁 최대 6 개의 인스턴스로 확장하여 증가된 워크로드를 처리하고, \n다른 시간에는 2 개의 인스턴스로 축소하여 비용을 절감할 수 있습니다. 이 솔루션은 수동 \n개입이나 사용자 지정 스크립트가 필요하지 않으므로 최소한의 운영 오버헤드로 요구 \n사항을 충족합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 571,
    "question": "회사에서 REST API 를 만들고 있습니다. 회사에는 TLS 사용에 대한 엄격한 요구 사항이 \n있습니다. 회사는 API 엔드포인트에 TLSv1.3 을 요구합니다. 또한 회사는 TLS 인증서에 \n서명하기 위해 특정 공개 타사 인증 기관(CA)을 요구합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "로컬 시스템을 사용하여 타사 CI 가 서명한 인증서를 생성하고 인증서를 AWS Certificate \nManager(ACM)로 가져옵니다. 사용자 지정 도메인을 사용하여 Amazon API Gateway 에서 \nHTTP API 를 생성합니다. 인증서를 사용하도록 사용자 지정 도메인을 구성합니다.",
      "타사 CA 가 서명한 AWS Certificate Manager(ACM)에서 인증서를 생성합니다. 사용자 \n지정 도메인을 사용하여 Amazon API Gateway 에서 HTTP API 를 생성합니다. 인증서를 \n사용하도록 사용자 지정 도메인을 구성합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 타사 CA 에서 서명한 인증서를 생성합니다. \n인증서를 AWS Certificate Manager(ACM)로 가져옵니다. Lambda 함수 URL 을 사용하여 \nAWS Lambda 함수를 생성합니다. 인증서를 사용하도록 Lambda 함수 URL 을 구성합니다.",
      "타사 CA 에서 서명한 AWS Certificate Manager(ACM)에서 인증서를 생성합니다. Lambda \n함수 URL 을 사용하여 AWS Lambda 함수를 생성합니다. 인증서를 사용하도록 Lambda \n함수 URL 을 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116904-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \nA??",
    "glossary": {}
  },
  {
    "id": 572,
    "question": "회사는 AWS 에서 애플리케이션을 실행합니다. 애플리케이션이 일관되지 않은 사용량을 \n수신합니다. 애플리케이션은 AWS Direct Connect 를 사용하여 온프레미스 MySQL 호환 \n데이터베이스에 연결합니다. 온프레미스 데이터베이스는 지속적으로 최소 2GiB 의 메모리를 \n사용합니다. \n회사는 온프레미스 데이터베이스를 관리형 AWS 서비스로 마이그레이션하려고 합니다. \n회사는 자동 확장 기능을 사용하여 예기치 않은 작업 부하 증가를 관리하려고 합니다. \n최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "기본 \n읽기 \n및 \n쓰기 \n용량 \n설정으로 \nAmazon \nDynamoDB \n데이터베이스를 \n프로비저닝합니다.",
      "최소 \n용량이 \n1 \nAurora \n용량 \n단위(ACU)인 \nAmazon \nAurora \n데이터베이스를 \n프로비저닝합니다.",
      "최소 용량이 1 Aurora 용량 단위(ACU)인 Amazon Aurora Serverless v2 데이터베이스를 \n프로비저닝합니다.",
      "2GiB 의 메모리로 Amazon RDS for MySQL 데이터베이스를 프로비저닝합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/117029-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 온프레미스 데이터베이스를 Auto Scaling 기능을 지원하고 관리 \n오버헤드가 가장 적은 관리형 AWS 서비스로 마이그레이션할 수 있습니다. Amazon Aurora \nServerless v2 는 워크로드 수요에 따라 컴퓨팅 용량을 자동으로 확장하는 Amazon Aurora 의 \n구성입니다. 단 몇 초 만에 수백 건에서 수십만 건의 트랜잭션을 확장할 수 있습니다. \nAmazon Aurora Serverless v2 는 MySQL 호환 데이터베이스와 AWS Direct Connect 연결도 \n지원합니다.",
    "glossary": {
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술"
    }
  },
  {
    "id": 573,
    "question": "회사에서 AWS Lambda 와 함께 이벤트 기반 프로그래밍 모델을 사용하려고 합니다. 회사는 \nJava 11\n에서 실행되는 Lambda 함수의 시작 지연 시간을 줄이려고 합니다. 회사는 \n애플리케이션에 대한 엄격한 지연 시간 요구 사항이 없습니다. 이 회사는 함수가 확장될 때 \n콜드 스타트와 이상치 대기 시간을 줄이려고 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 543 ===",
    "options": [
      "Lambda 프로비저닝된 동시성을 구성합니다.",
      "Lambda 함수의 제한 시간을 늘립니다.",
      "Lambda 함수의 메모리를 늘립니다.",
      "Lambda SnapStart 를 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/116925-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nJava 11\n에서 실행되는 Lambda 함수의 시작 지연 시간을 줄이기 위해 Lambda \nSnapStart 가 적합한 솔루션입니다. Lambda SnapStart 는 Java 11 기능에 대한 더 빠른 콜드 \n스타트와 더 낮은 이상치 지연 시간을 지원하는 기능입니다. Lambda SnapStart 는 사전 \n초기화된 JVM(Java Virtual Machine)을 사용하여 기능을 실행하므로 초기화 시간과 메모리 \n공간이 줄어듭니다. Lambda SnapStart 에는 추가 비용이 발생하지 않습니다.",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 574,
    "question": "금융 \n서비스 \n회사는 \nAmazon \nRDS \nfor \nMySQL \n데이터베이스를 \n사용하는 \n새로운 \n애플리케이션을 출시했습니다. 회사는 응용 프로그램을 사용하여 주식 시장 추세를 \n추적합니다. 회사는 매주 말 2\n시간 동안만 애플리케이션을 작동하면 됩니다. 회사는 \n데이터베이스 실행 비용을 최적화해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "기존 RDS for MySQL 데이터베이스를 Aurora Serverless v2 MySQL 데이터베이스 \n클러스터로 마이그레이션합니다.",
      "기존 RDS for MySQL 데이터베이스를 Aurora MySQL 데이터베이스 클러스터로 \n마이그레이션합니다.",
      "기존 RDS for MySQL 데이터베이스를 MySQL 을 실행하는 Amazon EC2 인스턴스로 \n마이그레이션합니다. EC2 인스턴스에 대한 인스턴스 예약을 구매합니다.",
      "기존 RDS for MySQL 데이터베이스를 MySQL 컨테이너 이미지를 사용하여 작업을 \n실행하는 Amazon Elastic Container Service(Amazon ECS) 클러스터로 마이그레이션합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/117272-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 575,
    "question": "=== PAGE 544 ===\n회사는 AWS 리전의 Application Load Balancer 뒤에 있는 Amazon Elastic Kubernetes \nService(Amazon \nEKS)에 \n애플리케이션을 \n배포합니다. \n애플리케이션은 \nPostgreSQL \n데이터베이스 엔진에 데이터를 저장해야 합니다. 회사는 데이터베이스의 데이터가 가용성이 \n높기를 원합니다. 회사는 또한 읽기 워크로드를 위한 증가된 용량이 필요합니다. \n이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "전역 테이블로 구성된 Amazon DynamoDB 데이터베이스 테이블을 생성합니다.",
      "다중 AZ 배포로 Amazon RDS 데이터베이스를 생성합니다.",
      "다중 AZ DB 클러스터 배포로 Amazon RDS 데이터베이스를 생성합니다.",
      "리전 간 읽기 전용 복제본으로 구성된 Amazon RDS 데이터베이스를 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/116969-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  }
];