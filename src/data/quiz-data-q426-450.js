export const quizData = [
  {
    "id": 426,
    "question": "회사는 의료 애플리케이션의 데이터를 저장해야 합니다. 애플리케이션의 데이터는 자주 \n변경됩니다. 새로운 규정은 저장된 데이터의 모든 수준에서 감사 액세스를 요구합니다. \n회사는 스토리지 용량이 부족한 온프레미스 인프라에서 애플리케이션을 호스팅합니다. \n솔루션 \n설계자는 \n새로운 \n규정을 \n만족하면서 \n기존 \n데이터를 \nAWS\n로 \n안전하게 \n마이그레이션해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS DataSync 를 사용하여 기존 데이터를 Amazon S3 로 이동합니다. AWS CloudTrail 을 \n사용하여 데이터 이벤트를 기록합니다.",
      "AWS Snowcone 을 사용하여 기존 데이터를 Amazon S3 로 이동합니다. AWS CloudTrail 을 \n사용하여 관리 이벤트를 기록합니다.",
      "Amazon S3 Transfer Acceleration 을 사용하여 기존 데이터를 Amazon S3 로 이동합니다. \nAWS CloudTrail 을 사용하여 데이터 이벤트를 기록합니다.",
      "AWS Storage Gateway 를 사용하여 기존 데이터를 Amazon S3 로 이동합니다. AWS \nCloudTrail 을 사용하여 관리 이벤트를 기록합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109278-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 427,
    "question": "솔루션 아키텍트가 MySQL 데이터베이스로 복잡한 Java 애플리케이션을 구현하고 있습니다. \nJava 애플리케이션은 Apache Tomcat 에 배포되어야 하며 고가용성이어야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Lambda 에 애플리케이션을 배포합니다. Lambda 함수와 연결하도록 Amazon API \nGateway API 를 구성합니다.",
      "AWS Elastic Beanstalk 를 사용하여 애플리케이션을 배포합니다. 부하 분산 환경 및 롤링 \n배포 정책을 구성합니다.",
      "데이터베이스를 Amazon ElastiCache 로 마이그레이션합니다. 애플리케이션에서 액세스를 \n허용하도록 ElastiCache 보안 그룹을 구성합니다.",
      "Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스에 MySQL 서버를 설치합니다. \n서버에서 애플리케이션을 구성합니다. AMI 를 생성합니다. AMI 를 사용하여 Auto Scaling \n그룹으로 시작 템플릿을 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109279-exam-aws-certified-sol",
    "glossary": {}
  },
  {
    "id": 428,
    "question": "서버리스 애플리케이션은 Amazon API Gateway, AWS Lambda 및 Amazon DynamoDB 를 \n사용합니다. Lambda 함수에는 DynamoDB 테이블을 읽고 쓸 수 있는 권한이 필요합니다. \nDynamoDB 테이블에 대한 Lambda 함수 액세스를 가장 안전하게 제공하는 솔루션은 \n무엇입니까?",
    "options": [
      "Lambda 함수에 프로그래밍 방식으로 액세스할 수 있는 IAM 사용자를 생성합니다. \nDynamoDB 테이블에 대한 읽기 및 쓰기 액세스를 허용하는 정책을 사용자에게 연결합니다. \naccess_key_id 및 secret_access_key 파라미터를 Lambda 환경 변수의 일부로 저장합니다. \n다른 AWS 사용자에게 Lambda 함수 구성에 대한 읽기 및 쓰기 액세스 권한이 없는지 \n확인하십시오.",
      "Lambda 를 신뢰할 수 있는 서비스로 포함하는 IAM 역할을 생성합니다. DynamoDB \n테이블에 대한 읽기 및 쓰기 액세스를 허용하는 역할에 정책을 연결합니다. 새 역할을 실행 \n역할로 사용하도록 Lambda 함수의 구성을 업데이트합니다.",
      "Lambda 함수에 프로그래밍 방식으로 액세스할 수 있는 IAM 사용자를 생성합니다. \nDynamoDB 테이블에 대한 읽기 및 쓰기 액세스를 허용하는 정책을 사용자에게 연결합니다. \nAWS Systems Manager Parameter Store\n에 access_key_id 및 secret_access_key \n파라미터를 보안 문자열 파라미터로 저장합니다. DynamoDB 테이블에 연결하기 전에 보안 \n문자열 파라미터를 검색하도록 Lambda 함수 코드를 업데이트합니다.",
      "DynamoDB 를 신뢰할 수 있는 서비스로 포함하는 IAM 역할을 생성합니다. Lambda \n함수에서 읽기 및 쓰기 액세스를 허용하는 역할에 정책을 연결합니다. 새 역할에 실행 \n역할로 연결되도록 Lambda 함수의 코드를 업데이트합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109285-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n옵션 B\n는 Lambda\n를 신뢰할 수 있는 서비스로 포함하는 IAM 역할을 생성할 것을",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 429,
    "question": "다음 IAM 정책은 IAM 그룹에 연결됩니다. 이것은 그룹에 적용되는 유일한 정책입니다. \n \n그룹 구성원에 대한 이 정책의 유효 IAM 권한은 무엇입니까?",
    "options": [
      "그룹 구성원은 us-east-1 지역 내 모든 Amazon EC2 작업이 허용됩니다. 허용 권한 \n이후의 문은 적용되지 않습니다.",
      "그룹 구성원은 멀티 팩터 인증(MFA)으로 로그인하지 않는 한 us-east-1 리전에서 모든 \nAmazon EC2 권한이 거부됩니다.",
      "그룹 \n구성원은 \n멀티 \n팩터 \n인증(MFA)으로 \n로그인할 \n때 \n모든 \n리전에 \n대한 \nec2:StopInstances 및 ec2:TerminateInstances 권한이 허용됩니다. 그룹 구성원은 다른 \n\n=== PAGE 431 ===\n모든 Amazon EC2 작업이 허용됩니다.",
      "그룹 구성원은 멀티 팩터 인증(MFA)으로 로그인한 경우에만 us-east-1 리전에 대한 \nec2:StopInstances \n및 \nec2:TerminateInstances \n권한이 \n허용됩니다. \n그룹 \n구성원은 \nus-east-1 리전 내에서 다른 모든 Amazon EC2 작업이 허용됩니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109286-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 그룹 구성원에 대한 IAM 정책의 영향을 반영하기 때문에 정확합니다. 정책에는 \n두 개의 문이 있습니다. 하나는 허용 효과가 있고 다른 하나는 거부 효과가 있습니다. Allow \n문은 us-east-1 지역 내의 모든 리소스에 대해 EC2 작업을 수행할 수 있는 권한을 \n부여합니다. Deny 문은 Allow 문을 재정의하고 그룹 구성원이 MFA 로 로그인하지 않는 한 \nus-east-1 리전 내의 모든 리소스에 대해 ec2:StopInstances 및 ec2:TerminateInstances \n작업을 수행할 수 있는 권한을 거부합니다. 따라서 그룹 구성원은 모든 작업을 수행할 수 \n있습니다. MFA 를 사용하지 않는 한 us-east-1 리전에서 인스턴스 중지 또는 종료를 \n제외한 EC2 작업.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 430,
    "question": "제조 회사에는 Amazon S3 버킷에 .csv 파일을 업로드하는 기계 센서가 있습니다. \n이러한 .csv 파일은 이미지로 변환되어야 하며 그래픽 보고서의 자동 생성을 위해 가능한 \n한 빨리 사용할 수 있어야 합니다. \n이미지는 1 개월이 지나면 관련이 없게 되지만 1 년에 두 번 기계 학습(ML) 모델을 \n훈련시키기 위해 .csv 파일을 보관해야 합니다. ML 교육 및 감사는 몇 주 전에 미리 \n계획됩니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "매시간 .csv 파일을 다운로드하고 이미지 파일을 생성하며 이미지를 S3 버킷에 \n업로드하는 Amazon EC2 스팟 인스턴스를 시작합니다.",
      ".csv 파일을 이미지로 변환하고 이미지를 S3 버킷에 저장하는 AWS Lambda 함수를 \n설계합니다. .csv 파일이 업로드되면 Lambda 함수를 호출합니다.",
      "S3 버킷의 .csv 파일 및 이미지 파일에 대한 S3 수명 주기 규칙을 생성합니다. .csv \n파일을 업로드하고 1 일 후에 S3 Standard 에서 S3 Glacier 로 전환합니다. 30 일 후에 이미지 \n파일을 만료하십시오.",
      "S3 버킷의 .csv 파일 및 이미지 파일에 대한 S3 수명 주기 규칙을 생성합니다. 업로드 \n1 일 후 .csv 파일을 S3 Standard 에서 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 \n\n=== PAGE 432 ===\n전환합니다. 30 일 후에 이미지 파일을 만료하십시오.",
      "S3 버킷의 .csv 파일 및 이미지 파일에 대한 S3 수명 주기 규칙을 생성합니다. .csv \n파일을 업로드하고 1 일 후에 S3 Standard 에서 S3 Standard-Infrequent Access(S3 \nStandard-IA)로 전환합니다. RRS(Reduced Redundancy Storage)에 \n이미지 파일을 \n보관합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109288-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이러한 답변은 .csv 파일을 이미지로 변환하고 가능한 한 빨리 사용 가능하게 하며 \n스토리지 비용을 최소화하기 위한 요구 사항을 충족하므로 정확합니다. AWS Lambda 는 \n서버를 프로비저닝하거나 관리하지 않고 코드를 실행할 수 있는 서비스입니다. AWS \nLambda 를 사용하여 .csv 파일을 이미지로 변환하고 이미지를 S3 버킷에 저장하는 함수를 \n설계할 수 있습니다. \nS3 이벤트 알림을 사용하여 .csv 파일이 S3 버킷에 업로드될 때 Lambda 함수를 호출할 \n수 있습니다. 이렇게 하면 이미지가 생성되어 그래픽 보고서에 가능한 한 빨리 사용할 수 \n있습니다. S3 수명 주기는 개체가 수명 주기 동안 비용 효율적으로 저장되도록 개체를 \n관리할 수 있게 해주는 기능입니다. S3 버킷의 .csv 파일 및 이미지 파일에 대한 S3 수명 \n주기 규칙을 생성하여 비즈니스 요구 사항에 따라 다른 스토리지 클래스로 전환하거나 \n만료할 수 있습니다. .csv 파일은 몇 주 전에 계획된 ML 교육 및 감사에 1 년에 두 번만 \n필요하므로 업로드한 지 1 일 후에 S3 Standard 에서 S3 Glacier 로 전환할 수 있습니다. S3 \nGlacier 는 검색 시간이 몇 분에서 몇 시간에 이르는 안전하고 내구성이 있으며 매우 저렴한 \n스토리지를 제공하는 데이터 아카이빙용 스토리지 클래스입니다. \n이미지 파일은 1 개월이 지나면 관련성이 없어지므로 30 일 후에 만료될 수 있습니다. \n \n참조: \n\ndocs.aws.amazon.com/lambda/latest/dg/welcome.html \n\ndocs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html \n\ndocs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html \n\ndocs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-\nglacier",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 431,
    "question": "회사에서 웹 애플리케이션으로 새로운 비디오 게임을 개발했습니다. 애플리케이션은 \n\n=== PAGE 433 ===\n데이터베이스 계층에 MySQL 용 Amazon RDS 가 있는 VPC 의 3 계층 아키텍처에 있습니다. \n여러 플레이어가 온라인에서 동시에 경쟁합니다. 게임 개발자는 거의 실시간으로 상위 \n10 개 점수판을 표시하고 현재 점수를 유지하면서 게임을 중지하고 복원할 수 있는 기능을 \n제공하고자 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "웹 애플리케이션이 표시할 점수를 캐시하도록 Memcached 클러스터용 Amazon \nElastiCache 를 설정합니다.",
      "Redis 클러스터용 Amazon ElastiCache 를 설정하여 웹 애플리케이션이 표시할 점수를 \n계산하고 캐시합니다.",
      "웹 애플리케이션 앞에 Amazon CloudFront 배포를 배치하여 애플리케이션 섹션의 \n점수판을 캐시합니다.",
      "MySQL 용 Amazon RDS 에서 읽기 전용 복제본을 생성하여 스코어보드를 계산하고 웹 \n애플리케이션에 읽기 트래픽을 제공하는 쿼리를 실행합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109274-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 거의 실시간으로 상위 10 개 점수판을 표시하고 현재 점수를 유지하면서 게임을 \n중지하고 복원할 수 있는 기능을 제공하는 요구 사항을 충족하므로 정확합니다. Redis 용 \nAmazon ElastiCache 는 인터넷 규모의 실시간 애플리케이션을 지원하기 위해 1 밀리초 \n미만의 지연 시간을 제공하는 초고속 인 메모리 데이터 스토어입니다. Redis 용 Amazon \nElastiCache 를 사용하여 Redis 용 ElastiCache 클러스터를 설정하여 웹 애플리케이션이 \n표시할 점수를 계산하고 캐시할 수 있습니다. 정렬된 세트 및 해시와 같은 Redis 데이터 \n구조를 사용하여 플레이어의 점수를 저장하고 순위를 매길 수 있으며 ZRANGE 및 ZADD 와 \n같은 Redis 명령을 사용하여 점수를 효율적으로 검색 및 업데이트할 수 있습니다. 또한 \n스냅샷 및 추가 전용 파일(AOF)과 같은 Redis 지속성 기능을 사용하여 데이터의 특정 시점 \n복구를 활성화할 수 있으므로 현재 점수를 유지하면서 게임을 중지하고 복원할 수 \n있습니다. \n \n참조: \n\ndocs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html \n\nredis.io/topics/data-types \n\nredis.io/topics/persistence",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 432,
    "question": "한 전자상거래 회사에서 기계 학습(ML) 알고리즘을 사용하여 모델을 구축하고 훈련하려고 \n합니다. 회사는 모델을 사용하여 복잡한 시나리오를 시각화하고 고객 데이터의 추세를 \n감지합니다. 아키텍처 팀은 ML 모델을 보고 플랫폼과 통합하여 증강 데이터를 분석하고 \n비즈니스 인텔리전스 대시보드에서 직접 데이터를 사용하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Glue 를 사용하여 ML 변환을 생성하여 모델을 구축하고 교육합니다. Amazon \nOpenSearch Service 를 사용하여 데이터를 시각화합니다.",
      "Amazon SageMaker 를 사용하여 모델을 구축하고 교육합니다. Amazon QuickSight 를 \n사용하여 데이터를 시각화합니다.",
      "AWS Marketplace 에서 사전 구축된 ML Amazon 머신 이미지(AMI)를 사용하여 모델을 \n구축하고 교육합니다. Amazon OpenSearch Service 를 사용하여 데이터를 시각화합니다.",
      "Amazon QuickSight 를 사용하여 계산된 필드를 사용하여 모델을 구축하고 교육합니다. \nAmazon QuickSight 를 사용하여 데이터를 시각화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109291-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 433,
    "question": "한 회사가 여러 AWS 계정에서 프로덕션 및 비프로덕션 환경 워크로드를 실행하고 \n있습니다. 계정은 AWS Organizations 의 조직에 있습니다. 회사는 비용 사용 태그의 수정을 \n방지하는 솔루션을 설계해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "권한이 부여된 보안 주체 외에는 태그 수정을 방지하기 위해 사용자 지정 AWS Config \n규칙을 생성합니다.",
      "태그 수정을 방지하기 위해 AWS CloudTrail 에서 사용자 지정 추적을 생성합니다.",
      "인증된 주체 외에는 태그 수정을 방지하기 위해 서비스 제어 정책(SCP)을 생성합니다.",
      "태그 수정을 방지하기 위해 사용자 지정 Amazon CloudWatch 로그를 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109384-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 434,
    "question": "회사는 AWS 클라우드에서 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon \n\n=== PAGE 435 ===\nDynamoDB 테이블과 함께 Auto Scaling 그룹의 Elastic Load Balancer 뒤에 있는 Amazon \nEC2 인스턴스에서 실행됩니다. 회사는 다운타임을 최소화하면서 다른 AWS 리전에서 \n애플리케이션을 사용할 수 있기를 원합니다. \n가동 중지 시간을 최소화하면서 이러한 요구 사항을 충족하려면 솔루션 설계자가 무엇을 \n해야 합니까?",
    "options": [
      "재해 복구 지역에 Auto Scaling 그룹과 로드 밸런서를 생성합니다. DynamoDB 테이블을 \n전역 테이블로 구성합니다. 새 재해 복구 리전의 로드 밸런서를 가리키도록 DNS 장애 \n조치를 구성합니다.",
      "필요할 때 시작할 EC2 인스턴스, 로드 밸런서 및 DynamoDB 테이블을 생성하기 위해 \nAWS CloudFormation 템플릿을 생성합니다. 새 재해 복구 리전의 로드 밸런서를 \n가리키도록 DNS 장애 조치를 구성합니다.",
      "AWS CloudFormation 템플릿을 생성하여 EC2 인스턴스와 필요할 때 실행할 로드 \n밸런서를 생성합니다. DynamoDB 테이블을 전역 테이블로 구성합니다. 새 재해 복구 \n리전의 로드 밸런서를 가리키도록 DNS 장애 조치를 구성합니다.",
      "재해 복구 지역에서 Auto Scaling 그룹 및 로드 밸런서를 생성합니다. DynamoDB \n테이블을 전역 테이블로 구성합니다. 재해 복구 로드 밸런서를 가리키는 Amazon Route \n53\n을 업데이트하는 AWS Lambda 함수를 트리거하는 Amazon CloudWatch 경보를 \n생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109294-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 기존 데이터를 AWS 로 안전하게 마이그레이션하는 요구 사항을 충족하고 새로운 \n규정을 충족하기 때문에 정답입니다. AWS DataSync 는 온프레미스 스토리지와 Amazon S3 \n간에 대량의 데이터를 온라인으로 쉽게 이동할 수 있게 해주는 서비스입니다. DataSync 는 \n전송 중인 데이터를 자동으로 암호화하고 전송 중에 데이터 무결성을 확인합니다. AWS \nCloudTrail 은 계정에 대한 AWS API 호출을 기록하고 로그 파일을 Amazon S3 에 전달하는 \n서비스입니다. CloudTrail 은 S3 객체 수준 API 활동과 같이 AWS 계정의 리소스에서 또는 \n리소스 내에서 수행된 리소스 작업을 보여주는 데이터 이벤트를 기록할 수 있습니다. \nCloudTrail 을 사용하여 데이터 이벤트를 기록하면 저장된 데이터의 모든 수준에서 액세스를 \n감사할 수 있습니다. \n \n참조: \n\ndocs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html \n\ndocs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-withcl",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 435,
    "question": "회사는 2\n주 이내에 온프레미스 데이터 센터에서 AWS\n로 MySQL 데이터베이스를 \n마이그레이션해야 \n합니다. \n데이터베이스 \n크기는 \n20TB\n입니다. \n회사는 \n다운타임을 \n최소화하면서 마이그레이션을 완료하기를 원합니다. \n데이터베이스를 가장 비용 효율적으로 마이그레이션하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. AWS Schema \nConversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 \n사용하여 진행 중인 변경 사항을 복제하여 데이터베이스를 마이그레이션합니다. Snowball \nEdge 디바이스를 AWS 로 보내 마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "AWS Snowmobile 차량을 주문합니다. AWS Schema Conversion Tool(AWS SCT)과 함께 \nAWS Database Migration Service(AWS DMS)를 사용하여 지속적인 변경 사항이 있는 \n데이터베이스를 \n마이그레이션합니다. \nSnowmobile \n차량을 \n다시 \nAWS\n로 \n보내 \n마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "GPU 장치로 AWS Snowball Edge Compute Optimized 를 주문합니다. AWS Schema \nConversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 \n사용하여 지속적인 변경 사항이 있는 데이터베이스를 마이그레이션합니다. Snowball \n디바이스를 AWS 로 보내 마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "1GB 전용 AWS Direct Connect 연결을 주문하여 데이터 센터와의 연결을 설정합니다. \nAWS Schema Conversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS \nDMS)를 사용하여 진행 중인 변경 사항을 복제하여 데이터베이스를 마이그레이션합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109377-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 가동 중지 시간을 최소화하고 비용 효율적으로 2 주 이내에 20TB MySQL \n데이터베이스를 마이그레이션해야 하는 요구 사항을 충족하기 때문에 정답입니다. AWS \nSnowball Edge Storage Optimized 디바이스에는 최대 80TB 의 사용 가능한 스토리지 \n공간이 있으며 이는 데이터베이스에 적합합니다. AWS Database Migration Service(AWS \nDMS)는 소스에서 대상으로 변경 사항을 지속적으로 복제하여 다운타임을 최소화하면서 \nMySQL 에서 Amazon Aurora, Amazon RDS for MySQL 또는 Amazon EC2 의 MySQL 로 \n데이터를 마이그레이션할 수 있습니다. AWS Schema Conversion Tool(AWS SCT)은 소스 \n스키마와 코드를 대상 데이터베이스와 호환되는 형식으로 변환할 수 있습니다. 이러한",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 436,
    "question": "회사에서 온프레미스 PostgreSQL 데이터베이스를 Amazon RDS for PostgreSQL DB \n인스턴스로 \n옮겼습니다. \n회사는 \n신제품을 \n성공적으로 \n출시했습니다. \n데이터베이스의 \n워크로드가 증가했습니다. 회사는 인프라를 추가하지 않고 더 큰 워크로드를 수용하려고 \n합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "전체 워크로드에 대해 예약된 DB 인스턴스를 구매합니다. PostgreSQL DB 인스턴스용 \nAmazon RDS 를 더 크게 만듭니다.",
      "Amazon RDS for PostgreSQL DB 인스턴스를 다중 AZ DB 인스턴스로 만듭니다.",
      "GPU 장치로 AWS Snowball Edge Compute Optimized 를 주문합니다. AWS Schema \nConversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 \n사용하여 지속적인 변경 사항이 있는 데이터베이스를 마이그레이션합니다. Snowball \n디바이스를 AWS 로 보내 마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "Amazon RDS for PostgreSQL DB 인스턴스를 온디맨드 DB 인스턴스로 만듭니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109277-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 인프라를 추가하지 않고 비용을 최소화하지 않고 더 큰 워크로드를 수용하는 \n요구 사항을 충족하기 때문에 맞습니다. 예약 DB 인스턴스는 계정에서 특정 온디맨드 DB \n인스턴스 사용에 적용되는 청구 할인입니다. 예약 DB 인스턴스는 온디맨드 DB 인스턴스 \n요금에 비해 상당한 할인을 제공합니다. 총 워크로드에 대해 예약된 DB 인스턴스를 \n구입하고 선결제 없음, 부분 선결제 또는 전체 선결제의 세 가지 결제 옵션 중에서 선택할",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 437,
    "question": "회사는 Auto Scaling 그룹의 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 \n인스턴스에서 전자상거래 웹 사이트를 운영합니다. 사이트에서 IP 주소가 변경되는 불법 \n외부 시스템의 높은 요청 비율과 관련된 성능 문제가 발생하고 있습니다. 보안 팀은 웹 \n사이트에 대한 잠재적인 DDoS 공격에 대해 걱정하고 있습니다. 회사는 합법적인 \n사용자에게 최소한의 영향을 미치는 방식으로 불법적으로 들어오는 요청을 차단해야 \n합니다. \n솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": [
      "Amazon Inspector 를 배포하고 ALB 와 연결합니다.",
      "AWS WAF 를 배포하고 ALB 와 연결하고 속도 제한 규칙을 구성합니다.",
      "들어오는 트래픽을 차단하기 위해 ALB 와 연결된 네트워크 ACL 에 규칙을 배포합니다.",
      "Amazon GuardDuty\n를 배포하고 GuardDuty\n를 구성할 때 속도 제한 보호를 \n활성화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109378-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 합법적인 사용자에게 최소한의 영향을 미치는 방식으로 불법적으로 들어오는 \n요청을 차단하는 요구 사항을 충족하기 때문에 정확합니다. AWS WAF 는 가용성에 영향을 \n미치거나 \n보안을 \n손상시키거나 \n과도한 \n리소스를 \n소비할 \n수 \n있는 \n일반적인 \n웹 \n익스플로잇으로부터 웹 애플리케이션 또는 API\n를 보호하는 데 도움이 되는 웹 \n애플리케이션 방화벽입니다. AWS WAF 는 SQL 삽입 또는 사이트 간 스크립팅과 같은 \n일반적인 공격 패턴을 차단하는 보안 규칙과 정의한 특정 트래픽 패턴을 필터링하는 규칙을 \n생성할 수 있도록 하여 트래픽이 애플리케이션에 도달하는 방식을 제어할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 438,
    "question": "회사에서 외부 감사인과 회계 데이터를 공유하려고 합니다. 데이터는 프라이빗 서브넷에 \n상주하는 Amazon RDS DB 인스턴스에 저장됩니다. 감사자는 자체 AWS 계정이 있으며 \n자체 데이터베이스 사본이 필요합니다. \n회사가 감사자와 데이터베이스를 공유하는 가장 안전한 방법은 무엇입니까?",
    "options": [
      "데이터베이스의 읽기 전용 복제본을 생성합니다. 감사자 액세스 권한을 부여하도록 IAM \n표준 데이터베이스 인증을 구성합니다.",
      "데이터베이스 내용을 텍스트 파일로 내보냅니다. 파일을 Amazon S3 버킷에 저장합니다. \n감사자를 위한 새 IAM 사용자를 생성합니다. 사용자에게 S3 버킷에 대한 액세스 권한을 \n부여합니다.",
      "데이터베이스의 스냅샷을 Amazon S3 버킷에 복사합니다. IAM 사용자를 생성합니다. \n사용자의 키를 감사자와 공유하여 S3 버킷의 객체에 대한 액세스 권한을 부여합니다.",
      "데이터베이스의 암호화된 스냅샷을 생성합니다. 감사자와 스냅샷을 공유합니다. AWS \nKey Management Service(AWS KMS) 암호화 키에 대한 액세스를 허용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109398-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 안전한 방식으로 감사자와 데이터베이스를 공유하는 요구 사항을 충족하기 \n때문에 정확합니다. AWS Key Management Service(AWS KMS)를 사용하여 데이터베이스의 \n암호화된 스냅샷을 생성하여 고객 관리형 키로 스냅샷을 암호화할 수 있습니다. 스냅샷의 \n권한을 수정하고 감사자의 AWS 계정 ID\n를 지정하여 감사자와 스냅샷을 공유할 수 \n있습니다. 감사자의 계정에 권한을 부여하는 키 정책 설명을 추가하여 AWS KMS 암호화 \n키에 대한 액세스를 허용할 수도 있습니다. 이렇게 하면 감사자만 자신의 AWS 계정에서",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 439,
    "question": "솔루션 설계자는 IP 주소 범위가 작은 VPC 를 구성했습니다. VPC 에 있는 Amazon EC2 \n인스턴스의 수가 증가하고 있으며 향후 워크로드를 위한 IP 주소의 수가 부족합니다. \n최소한의 운영 오버헤드로 이 문제를 해결하는 솔루션은 무엇입니까?",
    "options": [
      "추가 IPv4 CIDR 블록을 추가하여 IP 주소 수를 늘리고 VPC 에 추가 서브넷을 만듭니다. \n새 CIDR 을 사용하여 새 서브넷에 새 리소스를 만듭니다.",
      "추가 서브넷이 있는 두 번째 VPC 를 생성합니다. 피어링 연결을 사용하여 두 번째 \nVPC 를 첫 번째 VPC 와 연결 경로를 업데이트하고 두 번째 VPC 의 서브넷에서 새 리소스를 \n생성합니다.",
      "AWS Transit Gateway 를 사용하여 transit gateway 를 추가하고 첫 번째 VPUpdate 에 두 \n번째 VPC 를 연결하여 transit gateway 및 VPC 의 경로를 업데이트합니다. 두 번째 VPC 의 \n서브넷에 새 리소스를 만듭니다.",
      "두 번째 VPC 를 생성합니다. Amazon EC2 및 가상 프라이빗 게이트웨이에서 VPN \n호스팅 솔루션을 사용하여 첫 번째 VPC 와 두 번째 VPC 간에 사이트 간 VPN 연결을 \n생성합니다. VPC 간 경로를 VPN 을 통한 트래픽으로 업데이트합니다. 두 번째 VPC 의 \n서브넷에 새 리소스를 만듭니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109400-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 440,
    "question": "한 회사에서 애플리케이션 테스트 중에 Amazon RDS for MySQL DB 인스턴스를 \n사용했습니다. 테스트 주기가 끝날 때 DB 인스턴스를 종료하기 전에 솔루션 설계자는 두 \n개의 \n백업을 \n생성했습니다. \n솔루션 \n설계자는 \n데이터베이스 \n덤프를 \n생성하기 \n위해 \nmysqldump 유틸리티를 사용하여 첫 번째 백업을 생성했습니다. 솔루션 설계자는 RDS \n종료 시 최종 DB 스냅샷 옵션을 활성화하여 두 번째 백업을 생성했습니다. \n회사는 이제 새로운 테스트 주기를 계획하고 있으며 가장 최근 백업에서 새 DB 인스턴스를 \n\n=== PAGE 441 ===\n생성하려고 합니다. 이 회사는 DB 인스턴스를 호스팅하기 위해 Amazon Aurora 의 MySQL \n호환 에디션을 선택했습니다. \n어떤 솔루션이 새 DB 인스턴스를 생성합니까? (2 개 선택)",
    "options": [
      "RDS 스냅샷을 Aurora 로 직접 가져옵니다.",
      "RDS 스냅샷을 Amazon S3 에 업로드합니다. 그런 다음 RDS 스냅샷을 Aurora 로 \n가져옵니다.",
      "데이터베이스 덤프를 Amazon S3 에 업로드합니다. 그런 다음 데이터베이스 덤프를 \nAurora 로 가져옵니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 RDS 스냅샷을 Aurora 로 \n가져옵니다.",
      "데이터베이스 덤프를 Amazon S3 에 업로드합니다. 그런 다음 AWS Database Migration \nService(AWS DMS)를 사용하여 데이터베이스 덤프를 Aurora 로 가져옵니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109297-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이러한 답변은 최신 백업에서 새 DB 인스턴스를 생성하고 Amazon Aurora 의 MySQL 호환 \n에디션을 사용하여 DB 인스턴스를 호스팅해야 하는 요구 사항을 충족하기 때문에 \n정확합니다. MySQL DB 인스턴스와 Aurora DB 클러스터가 동일한 버전의 MySQL 을 실행 \n중인 경우 RDS 스냅샷을 Aurora 로 직접 가져올 수 있습니다. 예를 들어 MySQL 버전 5.6 \n스냅샷을 Aurora MySQL 버전 5.6 으로 직접 복원할 수 있지만 MySQL 버전 5.6 스냅샷을 \nAurora MySQL 버전 5.7 로 직접 복원할 수는 없습니다. 이 방법은 간단하고 가장 적은 수의 \n단계가 필요합니다. MySQL DB 인스턴스와 Aurora DB 클러스터가 다른 버전의 MySQL 을 \n실행 중인 경우 데이터베이스 덤프를 Amazon S3 에 업로드한 다음 Aurora 로 데이터베이스 \n덤프를 가져올 수 있습니다. 예를 들어 MySQL 버전 5.6 데이터베이스 덤프를 Aurora \nMySQL 버전 5.7 로 가져올 수 있지만 MySQL 버전 5.6 스냅샷을 Aurora MySQL 버전 \n5.7 로 직접 복원할 수는 없습니다. \n이 방법은 더 유연하며 다른 버전의 MySQL 간에 마이그레이션할 수 있습니다. \n \n참조: \n\ndocs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrati\nng.RDSMySQL.Import.html \n\ndocs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrati\nng.RDSMySQL.Dump.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 441,
    "question": "회사는 Application Load Balancer 뒤의 Amazon Linux Amazon EC2 인스턴스에서 다중 \n계층 웹 애플리케이션을 호스팅합니다. 인스턴스는 여러 가용 영역의 Auto Scaling \n그룹에서 실행됩니다. 이 회사는 애플리케이션의 최종 사용자가 대량의 정적 웹 콘텐츠에 \n액세스할 때 Auto Scaling 그룹이 더 많은 온디맨드 인스턴스를 시작하는 것을 관찰합니다. \n회사는 비용을 최적화하려고 합니다. \n애플리케이션을 가장 비용 효율적으로 재설계하기 위해 솔루션 설계자는 무엇을 해야 \n합니까?",
    "options": [
      "온디맨드 \n인스턴스 \n대신 \n예약 \n인스턴스를 \n사용하도록 \nAuto \nScaling \n그룹을 \n업데이트합니다.",
      "온디맨드 인스턴스 대신 스팟 인스턴스를 시작하여 조정하도록 Auto Scaling 그룹을 \n업데이트합니다.",
      "Amazon S3 버킷에서 정적 웹 콘텐츠를 호스팅할 Amazon CloudFront 배포를 만듭니다.",
      "Amazon API Gateway API 뒤에 AWS Lambda 함수를 생성하여 정적 웹 사이트 콘텐츠를 \n호스팅합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109423-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 비용을 최적화하고 데이터베이스의 작업 부하를 줄이는 요구 사항을 충족하므로 \n정확합니다. Amazon CloudFront 는 .html, .css, .js 및 이미지 파일과 같은 정적 및 동적 웹 \n콘텐츠를 \n사용자에게 \n빠르게 \n배포하는 \n콘텐츠 \n전송 \n네트워크(CDN) \n서비스입니다. \nCloudFront 는 엣지 로케이션이라고 하는 전 세계 데이터 센터 네트워크를 통해 콘텐츠를 \n제공합니다. CloudFront 에서 제공하는 콘텐츠를 사용자가 요청하면 지연 시간(시간 지연)이 \n가장 짧은 엣지 로케이션으로 요청이 라우팅되므로 콘텐츠가 가능한 최상의 성능으로 \n제공됩니다. Amazon CloudFront 배포를 생성하여 CloudFront 에 대해 정의하는 오리진인 \nAmazon S3 버킷에서 정적 웹 콘텐츠를 호스팅할 수 있습니다. \n이렇게 하면 정적 웹 콘텐츠에 대한 요청을 EC2 인스턴스에서 CloudFront 로 오프로드할 \n수 있으므로 웹 사이트의 성능과 가용성을 개선하고 EC2 인스턴스 실행 비용을 줄일 수 \n있습니다. \n \n참조: \n\ndocs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.ht\nml",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 442,
    "question": "한 회사가 여러 AWS 계정에 몇 페타바이트의 데이터를 저장합니다. 이 회사는 AWS Lake \nFormation\n을 사용하여 데이터 레이크를 관리합니다. 회사의 데이터 과학 팀은 분석 \n목적으로 회사의 엔지니어링 팀과 계정에서 선택한 데이터를 안전하게 공유하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "필요한 데이터를 공통 계정에 복사하십시오. 해당 계정에서 IAM 액세스 역할을 \n생성합니다. 엔지니어링 팀 계정의 사용자를 신뢰할 수 있는 엔터티로 포함하는 권한 \n정책을 지정하여 액세스 권한을 부여합니다.",
      "필요한 엔지니어링 팀 사용자가 데이터에 액세스할 수 있도록 데이터가 저장된 각 \n계정에서 Lake Formation 권한 부여 명령을 사용합니다.",
      "AWS Data Exchange 를 사용하여 필요한 데이터를 필요한 엔지니어링 팀 계정에 \n비공개로 게시합니다.",
      "Lake Formation 태그 기반 액세스 제어를 사용하여 엔지니어링 팀 계정에 필요한 \n데이터에 대한 교차 계정 권한을 승인하고 부여합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109647-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 443,
    "question": "회사는 AWS 에서 확장 가능한 웹 애플리케이션을 호스팅하려고 합니다. 응용 프로그램은 \n전 세계 여러 지역의 사용자가 액세스할 수 있습니다. 애플리케이션 사용자는 최대 \n기가바이트 크기의 고유한 데이터를 다운로드하고 업로드할 수 있습니다. 개발 팀은 업로드 \n및 다운로드 대기 시간을 최소화하고 성능을 최대화할 수 있는 비용 효율적인 솔루션을 \n원합니다. \n이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "Transfer Acceleration 과 함께 Amazon S3 를 사용하여 애플리케이션을 호스팅합니다.",
      "CacheControl 헤더와 함께 Amazon S3 를 사용하여 애플리케이션을 호스팅합니다.",
      "Auto Scaling 및 Amazon CloudFront 와 함께 Amazon EC2 를 사용하여 애플리케이션을 \n호스팅합니다.",
      "Auto Scaling 및 Amazon ElastiCache 와 함께 Amazon EC2 를 사용하여 애플리케이션을 \n호스팅합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109424-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 444,
    "question": "회사에서 \n응용 \n프로그램의 \n안정적인 \n아키텍처를 \n설계하기 \n위해 \n솔루션 \n설계자를 \n고용했습니다. 이 애플리케이션은 웹 서버를 실행하는 Amazon RDS DB 인스턴스 1 개와 \n수동으로 프로비저닝된 Amazon EC2 인스턴스 2 개로 구성됩니다. EC2 인스턴스는 단일 \n가용 영역에 있습니다. \n직원이 최근 DB 인스턴스를 삭제했고 그 결과 애플리케이션을 24 시간 동안 사용할 수 \n없었습니다. 회사는 환경의 전반적인 안정성에 관심이 있습니다. \n애플리케이션 인프라의 안정성을 극대화하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "하나의 EC2 인스턴스를 삭제하고 다른 EC2 인스턴스에서 종료 방지 기능을 \n활성화합니다. 다중 AZ 가 되도록 DB 인스턴스를 업데이트하고 삭제 방지를 활성화합니다.",
      "DB 인스턴스를 다중 AZ 로 업데이트하고 삭제 방지를 활성화합니다. Application Load \nBalancer 뒤에 EC2 인스턴스를 배치하고 여러 가용 영역에 걸쳐 EC2 Auto Scaling \n그룹에서 실행합니다.",
      "Amazon API Gateway 및 AWS Lambda 함수와 함께 추가 DB 인스턴스를 생성합니다. \nAPI Gateway 를 통해 Lambda 함수를 호출하도록 애플리케이션을 구성합니다. Lambda \n함수가 두 DB 인스턴스에 데이터를 쓰도록 합니다.",
      "여러 가용 영역에 여러 서브넷이 있는 EC2 Auto Scaling 그룹에 EC2 인스턴스를 \n배치합니다. 온디맨드 인스턴스 대신 스팟 인스턴스를 사용하십시오. 인스턴스의 상태를 \n모니터링하도록 Amazon CloudWatch 경보를 설정합니다. DB 인스턴스를 다중 AZ 로 \n업데이트하고 삭제 방지를 활성화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109426-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 응용 프로그램 인프라의 안정성을 최대화하기 위한 요구 사항을 충족하기 때문에 \n정확합니다. DB 인스턴스를 다중 AZ 로 업데이트할 수 있습니다. 즉, Amazon RDS 가 다른 \n가용 영역에서 동기식 대기 복제본을 자동으로 프로비저닝하고 유지합니다. 기본 DB \n인스턴스는 가용 영역 전체에서 대기 복제본으로 동기식으로 복제되어 데이터 중복성을 \n제공하고 시스템 백업 중에 지연 시간 급증을 최소화합니다. \n고가용성으로 DB 인스턴스를 실행하면 계획된 시스템 유지 관리 중에 가용성을 높일 수 \n있습니다. 또한 DB 인스턴스 장애 및 가용 영역 중단으로부터 데이터베이스를 보호하는 데",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 445,
    "question": "회사는 \n회사 \n데이터 \n센터의 \n대규모 \nNAS(Network-Attached \nStorage) \n시스템에 \n700 테라바이트의 데이터를 저장하고 있습니다. 이 회사는 10Gbps AWS Direct Connect \n연결을 사용하는 하이브리드 환경을 보유하고 있습니다. \n규제 기관의 감사 후 회사는 90 일 이내에 데이터를 클라우드로 옮길 수 있습니다. 회사는 \n데이터를 중단 없이 효율적으로 이동해야 합니다. 회사는 여전히 이전 기간 동안 데이터에 \n액세스하고 데이터를 업데이트할 수 있어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "회사 데이터 센터에서 AWS DataSync 에이전트를 생성합니다. 데이터 전송 작업 생성 \nAmazon S3 버킷으로의 전송을 시작합니다.",
      "데이터를 AWS Snowball Edge Storage Optimized 디바이스에 백업합니다. 디바이스를 \nAWS 데이터 센터로 배송합니다. 온프레미스 파일 시스템에 대상 Amazon S3 버킷을 \n탑재합니다.",
      "DataSync 를 사용하여 Direct Connect 연결을 통해 로컬 스토리지에서 지정된 Amazon \nS3 버킷으로 데이터를 직접 복사합니다.",
      "테이프에 데이터를 백업합니다. 테이프를 AWS 데이터 센터로 배송합니다. 온프레미스 \n파일 시스템에 대상 Amazon S3 버킷을 탑재합니다. \n\n=== PAGE 446 ==="
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109403-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 중단 없이 데이터를 효율적으로 이동하고 전송 기간 동안 데이터에 계속 \n액세스하고 업데이트할 수 있어야 한다는 요구 사항을 충족하기 때문에 정답입니다. AWS \nDataSync 는 AWS 로의 데이터 마이그레이션을 간소화 및 가속화하고 온프레미스 스토리지, \n엣지 로케이션, 기타 클라우드 및 AWS 스토리지 간에 데이터를 빠르고 안전하게 이동할 수 \n있도록 지원하는 온라인 데이터 이동 및 검색 서비스입니다. 회사 데이터 센터에서 AWS \nDataSync 에이전트를 생성하여 Direct Connect 연결을 통해 NAS 시스템을 AWS 에 연결할 \n수 있습니다. 데이터 전송 작업을 생성하여 소스 위치, 대상 위치 및 데이터 전송 옵션을 \n지정할 수 있습니다. Amazon S3 버킷으로 전송을 시작하고 작업 진행 상황을 모니터링할 \n수 있습니다. \nDataSync\n는 전송 중인 데이터를 자동으로 암호화하고 전송 중에 데이터 무결성을 \n확인합니다. DataSync 는 증분 전송도 지원합니다. 즉, 마지막 전송 이후 변경된 파일만 \n복사됩니다. 이렇게 하면 NAS 시스템과 S3 버킷 간에 데이터가 동기화되었는지 확인할 수 \n있으며 전송 기간 동안 데이터에 액세스하고 데이터를 업데이트할 수 있습니다. \n \n참조: \n\ndocs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html \n\ndocs.aws.amazon.com/datasync/latest/userguide/how-datasync-works.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스"
    }
  },
  {
    "id": 446,
    "question": "회사는 데이터를 Amazon S3 버킷에 PDF 형식으로 저장합니다. 회사는 모든 신규 및 기존 \n데이터를 Amazon S3 에 7 년 동안 보관해야 한다는 법적 요구 사항을 따라야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 버킷에 대한 S3 버전 관리 기능을 켭니다. 7 년 후 데이터를 삭제하도록 S3 수명 \n주기를 구성합니다. 모든 S3 객체에 대한 MFA(Multi-Factor Authentication) 삭제를 \n구성합니다.",
      "S3 버킷에 대한 거버넌스 보존 모드로 S3 객체 잠금을 켭니다. 7 년 후에 만료되도록 \n보존 기간을 설정합니다. 모든 기존 개체를 다시 복사하여 기존 데이터를 준수하도록 \n합니다.",
      "S3 버킷에 대해 규정 준수 보존 모드로 S3 객체 잠금을 켭니다. 7 년 후에 만료되도록 \n보존 기간을 설정합니다. 모든 기존 개체를 다시 복사하여 기존 데이터를 준수하도록 \n\n=== PAGE 447 ===\n합니다.",
      "S3 버킷에 대해 규정 준수 보존 모드로 S3 객체 잠금을 켭니다. 7 년 후에 만료되도록 \n보존 기간을 설정합니다. S3 배치 작업을 사용하여 기존 데이터를 규정에 맞게 가져옵니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109404-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 447,
    "question": "회사에는 Amazon API Gateway 에서 호출하는 AWS Lambda 함수에서 실행되는 상태 \n비저장 웹 애플리케이션이 있습니다. 회사는 지역 장애 조치 기능을 제공하기 위해 여러 \nAWS 지역에 애플리케이션을 배포하려고 합니다. \n트래픽을 여러 지역으로 라우팅하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": [
      "각 지역에 대해 Amazon Route 53 상태 확인을 생성합니다. 활성-활성 장애 조치 \n구성을 사용합니다.",
      "각 리전의 오리진을 사용하여 Amazon CloudFront 배포를 생성합니다. CloudFront 상태 \n확인을 사용하여 트래픽을 라우팅합니다.",
      "전송 게이트웨이를 생성합니다. Transit Gateway 를 각 리전의 API Gateway 엔드포인트에 \n연결합니다. 요청을 라우팅하도록 전송 게이트웨이를 구성합니다.",
      "기본 지역에서 Application Load Balancer 를 생성합니다. 각 리전의 API 게이트웨이 \n엔드포인트 호스트 이름을 가리키도록 대상 그룹을 설정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109405-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 448,
    "question": "회사에는 Management 및 Production 이라는 두 개의 VPC 가 있습니다. 관리 VPC 는 고객 \n게이트웨이를 통해 VPN 을 사용하여 데이터 센터의 단일 디바이스에 연결합니다. 프로덕션 \nVPC 는 2 개의 연결된 AWS Direct Connect 연결이 있는 가상 프라이빗 게이트웨이를 \n사용합니다. 관리 및 프로덕션 VPC\n는 모두 단일 VPC 피어링 연결을 사용하여 \n애플리케이션 간의 통신을 허용합니다. \n솔루션 아키텍트는 이 아키텍처에서 단일 실패 지점을 완화하기 위해 무엇을 해야 합니까?",
    "options": [
      "관리 VPC 와 프로덕션 VPC 사이에 VPN 세트를 추가하십시오.",
      "두 번째 가상 프라이빗 게이트웨이를 추가하고 관리 VPC 에 연결합니다.",
      "두 번째 고객 게이트웨이 디바이스에서 관리 VPC 에 두 번째 VPN 세트를 추가합니다. \n\n=== PAGE 448 ===",
      "관리 VPC 와 프로덕션 VPC 간에 두 번째 VPC 피어링 연결을 추가합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109499-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 관리 VPC\n와 데이터 센터 간의 VPN 연결에 중복성을 제공하기 때문에 \n정답입니다. 하나의 고객 게이트웨이 디바이스 또는 하나의 VPN 터널을 사용할 수 없게 \n되더라도 트래픽은 여전히 두 번째 고객 게이트웨이 디바이스와 두 번째 VPN 터널을 통해 \n흐를 수 있습니다. 이렇게 하면 VPN 연결의 단일 실패 지점이 완화됩니다. \n \n참조: \n\ndocs.aws.amazon.com/vpn/latest/s2svpn/vpn-redundant-connection.html \n\nwww.trendmicro.com/cloudoneconformity/knowledge-base/aws/VPC/vpn-tunnelr\nedundancy.html",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술"
    }
  },
  {
    "id": 449,
    "question": "회사는 Oracle 데이터베이스에서 애플리케이션을 실행합니다. 이 회사는 데이터베이스, \n백업 관리 및 데이터 센터 유지 관리를 위한 제한된 리소스로 인해 AWS 로 신속하게 \n마이그레이션할 \n계획입니다. \n응용 \n프로그램은 \n권한 \n있는 \n액세스가 \n필요한 \n타사 \n데이터베이스 기능을 사용합니다. \n회사가 비용 효율적으로 데이터베이스를 AWS MOST 로 마이그레이션하는 데 도움이 되는 \n솔루션은 무엇입니까?",
    "options": [
      "데이터베이스를 Oracle 용 Amazon RDS 로 마이그레이션합니다. 타사 기능을 클라우드 \n서비스로 대체합니다.",
      "데이터베이스를 Amazon RDS Custom for Oracle 로 마이그레이션합니다. 타사 기능을 \n지원하도록 데이터베이스 설정을 사용자 지정합니다.",
      "데이터베이스를 \nOracle\n용 \nAmazon \nEC2 \nAmazon \n머신 \n이미지(AMI)로 \n마이그레이션합니다. 타사 기능을 지원하도록 데이터베이스 설정을 사용자 지정합니다.",
      "Oracle APEX\n에 대한 종속성을 제거하도록 애플리케이션 코드를 다시 작성하여 \nPostgreSQL 용 Amazon RDS 로 데이터베이스를 마이그레이션합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109432-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 450,
    "question": "회사에는 단일 서버에 있는 3 계층 웹 응용 프로그램이 있습니다. 회사는 애플리케이션을 \nAWS \n클라우드로 \n마이그레이션하려고 \n합니다. \n또한 \n회사는 \n애플리케이션이 \nAWS \nWell-Architected 프레임워크와 일치하고 보안, 확장성 및 복원력에 대한 AWS 권장 모범 \n사례와 일치하기를 원합니다. \n이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (3 개 선택)",
    "options": [
      "애플리케이션의 기존 아키텍처를 사용하여 두 가용 영역에 걸쳐 VPC 를 생성합니다. \nEC2 Auto Scaling 그룹이 있는 각 가용 영역의 프라이빗 서브넷에 있는 Amazon EC2 \n인스턴스의 기존 아키텍처로 애플리케이션을 호스팅합니다. 보안 그룹 및 네트워크 액세스 \n제어 목록(네트워크 ACL)을 사용하여 EC2 인스턴스를 보호합니다.",
      "보안 그룹 및 네트워크 액세스 제어 목록(네트워크 ACL)을 설정하여 데이터베이스 \n계층에 대한 액세스를 제어합니다. 프라이빗 서브넷에 단일 Amazon RDS 데이터베이스를 \n설정합니다.",
      "두 가용 영역에 걸쳐 VPC 를 생성합니다. 웹 계층, 애플리케이션 계층 및 데이터베이스 \n계층을 호스팅하도록 애플리케이션을 리팩터링합니다. 웹 계층 및 애플리케이션 계층에 \n대한 Auto Scaling 그룹을 사용하여 자체 프라이빗 서브넷에서 각 계층을 호스팅합니다.",
      "단일 Amazon RDS 데이터베이스를 사용합니다. 애플리케이션 계층 보안 그룹에서만 \n데이터베이스 액세스를 허용합니다.",
      "웹 티어 앞에서 Elastic Load Balancer 를 사용합니다. 각 계층의 보안 그룹에 대한 \n참조를 포함하는 보안 그룹을 사용하여 액세스를 제어합니다.",
      "프라이빗 서브넷에서 Amazon RDS 데이터베이스 다중 AZ 클러스터 배포를 사용합니다. \n애플리케이션 계층 보안 그룹에서만 데이터베이스 액세스를 허용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109406-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  }
];