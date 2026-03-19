export const quizData = [
  {
    "id": 476,
    "question": "회사는 가까운 장래에 급속한 성장을 기대하고 있습니다. 솔루션 설계자는 기존 사용자를 \n구성하고 AWS 에서 새 사용자에게 권한을 부여해야 합니다. 솔루션 설계자는 IAM 그룹을 \n만들기로 결정했습니다. 솔루션 설계자는 부서를 기반으로 IAM 그룹에 새 사용자를 \n추가합니다. \n새 사용자에게 권한을 부여하는 가장 안전한 추가 작업은 무엇입니까?",
    "options": [
      "서비스 제어 정책(SCP)을 적용하여 액세스 권한을 관리합니다.",
      "최소 권한이 있는 IAM 역할을 생성합니다. 역할을 IAM 그룹에 연결합니다. \n\n=== PAGE 469 ===",
      "최소 권한을 부여하는 IAM 정책을 생성합니다. 정책을 IAM 그룹에 연결합니다.",
      "IAM 역할을 생성합니다. 최대 권한을 정의하는 권한 경계와 역할을 연결합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109458-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nIAM 정책은 IAM 자격 증명(예: 사용자, 그룹 또는 역할)에 대한 권한을 정의하는 \n문서입니다. IAM 정책을 사용하여 부서에 따라 기존 사용자 및 그룹에 권한을 부여할 수 \n있습니다. 최소 권한 권한을 부여하는 IAM 정책을 생성할 수 있습니다. 즉, 사용자가 \n작업을 수행하는 데 필요한 최소한의 권한만 부여한다는 의미입니다. 그런 다음 정책을 \nIAM 그룹에 연결하면 해당 그룹의 모든 사용자에게 정책이 적용됩니다. 이 솔루션은 운영 \n비용을 줄이고 권한 구성 및 관리를 단순화합니다. \n참조: \n\ndocs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 477,
    "question": "그룹에는 Amazon S3 버킷을 나열하고 해당 버킷에서 객체를 삭제할 수 있는 권한이 \n필요합니다. 관리자는 버킷에 대한 액세스 권한을 제공하기 위해 다음 IAM 정책을 \n생성하고 해당 정책을 그룹에 적용했습니다. 그룹은 버킷의 객체를 삭제할 수 없습니다. \n회사는 최소 권한 액세스 규칙을 따릅니다. \n \n\n=== PAGE 470 ===\n버킷 액세스를 수정하기 위해 솔루션 설계자가 정책에 추가해야 하는 설명은 무엇입니까?",
    "options": [
      "B.",
      "D."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109459-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 478,
    "question": "=== PAGE 471 ===\n로펌은 대중과 정보를 공유해야 합니다. 이 정보에는 공개적으로 읽을 수 있어야 하는 수백 \n개의 파일이 포함됩니다. 지정된 미래 날짜 이전에 누구든지 파일을 수정하거나 삭제하는 \n것은 금지됩니다. \n가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "정적 웹 사이트 호스팅용으로 구성된 Amazon S3 버킷에 모든 파일을 업로드합니다. \n지정된 날짜까지 S3 버킷에 액세스하는 모든 AWS 보안 주체에게 읽기 전용 IAM 권한을 \n부여합니다.",
      "S3 버전 관리가 활성화된 새 Amazon S3 버킷을 생성합니다. 지정된 날짜에 따라 보존 \n기간이 있는 S3 Object Lock 을 사용하십시오. 정적 웹 사이트 호스팅을 위해 S3 버킷을 \n구성합니다. 객체에 대한 읽기 전용 액세스를 허용하도록 S3 버킷 정책을 설정합니다.",
      "S3 버전 관리가 활성화된 새 Amazon S3 버킷을 생성합니다. 객체 수정 또는 삭제 시 \nAWS Lambda 함수를 실행하도록 이벤트 트리거를 구성합니다. 개체를 프라이빗 S3 버킷의 \n원래 버전으로 바꾸도록 Lambda 함수를 구성합니다.",
      "정적 웹 사이트 호스팅용으로 구성된 Amazon S3 버킷에 모든 파일을 업로드합니다. \n파일이 포함된 폴더를 선택합니다. 지정된 날짜에 따라 보존 기간이 있는 S3 Object Lock 을 \n사용하십시오. S3 버킷에 액세스하는 모든 AWS 보안 주체에게 읽기 전용 IAM 권한을 \n부여합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109725-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 479,
    "question": "회사에서 필요한 인프라를 수동으로 프로비저닝하여 새 웹 사이트의 인프라 프로토타입을 \n만들고 있습니다. 이 인프라에는 Auto Scaling 그룹, Application Load Balancer 및 Amazon \nRDS 데이터베이스가 포함됩니다. 구성이 철저히 검증된 후 회사는 자동화된 방식으로 두 \n가용 영역에서 개발 및 프로덕션 사용을 위한 인프라를 즉시 배포할 수 있는 기능을 \n원합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "AWS Systems Manager 를 사용하여 2 개의 가용 영역에서 프로토타입 인프라를 복제하고 \n프로비저닝합니다.",
      "프로토타입 인프라를 가이드로 사용하여 인프라를 템플릿으로 정의합니다. AWS \nCloudFormation 으로 인프라를 배포하십시오.",
      "AWS Config 를 사용하여 프로토타입 인프라에서 사용되는 리소스 인벤토리를 기록합니다. \nAWS Config 를 사용하여 프로토타입 인프라를 두 개의 가용 영역에 배포합니다.",
      "AWS Elastic Beanstalk 를 사용하고 프로토타입 인프라에 대한 자동 참조를 사용하도록 \n\n=== PAGE 472 ===\n구성하여 2 개의 가용 영역에 새 환경을 자동으로 배포합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109461-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS CloudFormation 은 Auto Scaling 그룹, 로드 밸런서, 데이터베이스 등 원하는 모든 \n리소스를 설명하는 템플릿을 사용하여 AWS 리소스를 모델링하고 설정할 수 있도록 \n도와주는 서비스입니다. AWS CloudFormation\n을 사용하여 여러 환경과 리전에서 \n자동화되고 일관된 방식으로 인프라를 배포할 수 있습니다. 또한 AWS CloudFormation 을 \n사용하여 인프라를 단일 단위로 업데이트하거나 삭제할 수 있습니다. \n참조 URL: \n1 \naws.amazon.com/cloudformation/ \n2 \ndocs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html \n3 \n\ndocs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concep\nts.html",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 480,
    "question": "비즈니스 애플리케이션은 Amazon EC2 에서 호스팅되며 암호화된 객체 스토리지에 Amazon \nS3 를 사용합니다. 최고 정보 보안 책임자는 두 서비스 간의 애플리케이션 트래픽이 공용 \n인터넷을 통과해서는 안 된다고 지시했습니다. \n규정 준수 요구 사항을 충족하기 위해 솔루션 설계자가 사용해야 하는 기능은 무엇입니까?",
    "options": [
      "AWS 키 관리 서비스(AWS KMS)",
      "VPC 엔드포인트",
      "사설 서브넷",
      "가상 프라이빗 게이트웨이"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109663-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n참고: \n\ndocs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 481,
    "question": "회사는 AWS 클라우드에서 3\n계층 웹 애플리케이션을 호스팅합니다. MySQL\n용 다중 \nAZAmazon RDS 서버는 데이터베이스 계층을 형성합니다. Amazon ElastiCache 는 캐시 \n계층을 형성합니다. 회사는 고객이 데이터베이스에 항목을 추가할 때 캐시의 데이터를 \n추가하거나 업데이트하는 캐싱 전략을 원합니다. 캐시의 데이터는 항상 데이터베이스의 \n데이터와 일치해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "지연 로딩 캐싱 전략 구현",
      "write-through 캐싱 전략 구현",
      "추가 TTL 캐싱 전략 구현",
      "AWS AppConfig 캐싱 전략 구현"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109462-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 482,
    "question": "회사는 \n온프레미스 \n위치에서 \nAmazon \nS3 \n버킷으로 \n100GB\n의 \n기록 \n데이터를 \n마이그레이션하려고 합니다. 이 회사는 온프레미스에 100Mbps 인터넷 연결이 있습니다. \n회사는 S3 버킷으로 전송되는 데이터를 암호화해야 합니다. 회사는 새로운 데이터를 \nAmazon S3 에 직접 저장합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS CLI 에서 s3 sync 명령을 사용하여 데이터를 S3 버킷으로 직접 이동합니다.",
      "AWS \nDataSync\n를 \n사용하여 \n온프레미스 \n위치에서 \nS3 \n버킷으로 \n데이터를 \n마이그레이션합니다.",
      "AWS Snowball 을 사용하여 데이터를 S3 버킷으로 이동합니다.",
      "온프레미스 위치에서 AWS 로 IPsec VPN 을 설정합니다. AWS CLI 에서 s3 cp 명령을 \n사용하여 데이터를 S3 버킷으로 직접 이동합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109490-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS DataSync 는 인터넷 또는 AWS Direct Connect 를 통해 온프레미스 스토리지와 AWS \n스토리지 서비스 간에 대량의 데이터를 온라인으로 쉽게 이동할 수 있게 해주는 데이터 \n전송 서비스입니다. DataSync 는 TLS 암호화를 사용하여 전송 중인 데이터를 자동으로",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스"
    }
  },
  {
    "id": 483,
    "question": "회사에서 Windows 컨테이너 아래의 .NET 6 Framework 에서 실행되는 Windows 작업을 \n컨테이너화했습니다. 회사는 AWS 클라우드에서 이 작업을 실행하려고 합니다. 작업은 \n10 분마다 실행됩니다. 작업의 실행 시간은 1 분에서 3 분 사이입니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "작업의 컨테이너 이미지를 기반으로 AWS Lambda 함수를 생성합니다. 10 분마다 함수를 \n호출하도록 Amazon EventBridge 를 구성합니다.",
      "AWS Batch 를 사용하여 AWS Fargate 리소스를 사용하는 작업을 생성합니다. 10 분마다 \n실행되도록 작업 일정을 구성합니다.",
      "AWS Fargate 에서 Amazon Elastic Container Service(Amazon ECS)를 사용하여 작업을 \n실행합니다. 10 분마다 실행할 작업의 컨테이너 이미지를 기반으로 예약된 작업을 만듭니다.",
      "AWS Fargate 에서 Amazon Elastic Container Service(Amazon ECS)를 사용하여 작업을 \n실행합니다. 작업의 컨테이너 이미지를 기반으로 독립 실행형 작업을 생성합니다. Windows \n작업 스케줄러를 사용하여 10 분마다 작업을 실행합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109463-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 484,
    "question": "한 회사가 많은 독립 실행형 AWS 계정에서 통합된 다중 계정 아키텍처로 이동하려고 \n합니다. 이 회사는 다양한 사업부에 대해 많은 새 AWS 계정을 생성할 계획입니다. 회사는 \n중앙 집중식 회사 디렉터리 서비스를 사용하여 이러한 AWS 계정에 대한 액세스를 \n인증해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 권장해야 하는 작업 조합은 무엇입니까? \n(2 개 선택)",
    "options": [
      "모든 기능을 켠 상태에서 AWS Organizations 에 새 조직을 만듭니다. 조직에서 새 AWS \n계정을 생성합니다.",
      "Amazon Cognito 자격 증명 풀을 설정합니다. Amazon Cognito 인증을 수락하도록 AWS \n\n=== PAGE 475 ===\nIAM Identity Center(AWS Single Sign-On)를 구성합니다.",
      "AWS 계정을 관리하기 위해 서비스 제어 정책(SCP)을 구성합니다. AWS IAM Identity \nCenter(AWS Single Sign-On)를 AWS Directory Service 에 추가합니다.",
      "AWS Organizations\n에서 새 조직을 생성합니다. AWS Directory Service\n를 직접 \n사용하도록 조직의 인증 메커니즘을 구성합니다.",
      "조직에서 AWS IAM Identity Center(AWS Single Sign-On)를 설정합니다. IAM Identity \nCenter 를 구성하고 회사의 회사 디렉터리 서비스와 통합합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109467-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Organizations 는 사용자가 여러 AWS 계정을 중앙에서 관리하고 제어할 수 있도록 \n도와주는 서비스입니다. 이를 통해 사용자는 비즈니스 요구 사항 또는 기타 기준에 따라 \n계정을 그룹화하는 조직 단위(OU)를 만들 수 있습니다. 또한 사용자는 서비스 제어 \n정책(SCP)을 정의하고 OU 또는 계정에 연결하여 계정에서 수행할 수 있는 작업을 제한할 \n수 있습니다. 모든 기능을 켠 상태에서 AWS Organizations 에 새 조직을 생성하면 이 \n솔루션은 서로 다른 비즈니스 단위의 새 AWS 계정을 통합하고 관리할 수 있습니다. AWS \nIAM Identity Center(이전에는 AWS Single Sign-On 이라고 함)는 모든 AWS 계정 및 \n클라우드 애플리케이션에 대한 Single Sign-On 액세스를 제공하는 서비스입니다. AWS \nDirectory Service 를 통해 Microsoft Active Directory 와 연결하여 해당 디렉터리의 사용자가 \n기존 Active Directory 사용자 이름과 암호를 사용하여 맞춤형 AWS 액세스 포털에 로그인할 \n수 있도록 합니다. AWS 액세스 포털에서 사용자는 권한이 있는 모든 AWS 계정 및 \n클라우드 애플리케이션에 액세스할 수 있습니다2. 조직에 IAM Identity Center 를 설정하고 \n회사의 회사 디렉터리 서비스와 통합함으로써 솔루션은 중앙 집중식 회사 디렉터리 \n서비스를 사용하여 이러한 AWS 계정에 대한 액세스를 인증할 수 있습니다. \n1. Amazon Cognito 자격 증명 풀을 설정합니다. Amazon Cognito 인증을 수락하도록 AWS \nIAM Identity Center(AWS Single Sign-On)를 구성합니다. 이 솔루션은 중앙 집중식 기업 \n디렉터리 서비스를 사용하여 이러한 AWS 계정에 대한 액세스 인증 요구 사항을 충족하지 \n않습니다. Amazon Cognito 는 웹 및 모바일 애플리케이션에 대한 사용자 가입, 로그인 및 \n액세스 제어를 제공하는 서비스이기 때문입니다. 기업 디렉토리 서비스. \n2. 서비스 제어 정책(SCP)을 구성하여 AWS 계정을 관리합니다. AWS IAM Identity \nCenter(AWS Single Sign-On)를 AWS Directory Service 에 추가합니다. SCP 는 계정 자체를 \n관리하는 것이 아니라 조직의 계정이 수행할 수 있는 작업을 제한하는 데 사용되기 때문에 \n이 솔루션은 작동하지 않습니다1. 또한 IAM Identity Center 는 AWS Directory Service 를 \n통해 Microsoft Active Directory 와 연결하는 별도의 서비스이므로 AWS Directory Service 에",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 485,
    "question": "회사는 오래된 뉴스 영상에서 AWS 에 비디오 아카이브를 저장할 수 있는 솔루션을 찾고 \n있습니다. 회사는 비용을 최소화해야 하며 이러한 파일을 복원할 필요가 거의 없습니다. \n파일이 필요할 때 최대 5 분 내에 사용할 수 있어야 합니다. \n가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": [
      "비디오 아카이브를 Amazon S3 Glacier 에 저장하고 긴급 검색을 사용합니다.",
      "비디오 아카이브를 Amazon S3 Glacier 에 저장하고 표준 검색을 사용합니다.",
      "비디오 아카이브를 Amazon S3 Standard-Infrequent Access(S3 Standard-IA)에 \n저장합니다.",
      "비디오 아카이브를 Amazon S3 One Zone-Infrequent Access(S3 One Zone-IA)에 \n저장합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109470-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 486,
    "question": "한 회사가 AWS 에서 3 계층 애플리케이션을 구축하고 있습니다. 프레젠테이션 계층은 정적 \n웹 사이트를 제공합니다. 논리 계층은 컨테이너화된 애플리케이션입니다. 이 응용 \n프로그램은 관계형 데이터베이스에 데이터를 저장합니다. 이 회사는 배포를 단순화하고 \n운영 비용을 절감하기를 원합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3\n를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 AWS \nFargate\n와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용합니다. \n\n=== PAGE 477 ===\n데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다.",
      "Amazon CloudFront 를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 \nAmazon EC2 와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용합니다. \n데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다.",
      "Amazon S3\n를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 AWS \nFargate\n와 함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다. \n데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다.",
      "Amazon EC2 예약 인스턴스를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 \n위해 Amazon EC2 와 함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다. \n데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109664-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon S3 는 업계 최고의 확장성, 데이터 가용성, 보안 및 성능을 제공하는 객체 스토리지 \n서비스입니다. Amazon S3 를 사용하여 HTML 파일, 이미지, 비디오 등과 같은 웹 사이트용 \n정적 콘텐츠를 호스팅할 수 있습니다. Amazon Elastic Container Service(Amazon ECS)는 \nAWS 에서 컨테이너화된 애플리케이션을 실행하고 확장할 수 있는 완전 관리형 컨테이너 \n오케스트레이션 서비스입니다. . \nAWS Fargate 는 Amazon ECS 및 Amazon EKS 모두에서 작동하는 컨테이너용 서버리스 \n컴퓨팅 엔진입니다. Fargate 를 사용하면 서버를 프로비저닝하고 관리할 필요가 없으므로 \n애플리케이션 구축에 쉽게 집중할 수 있습니다. 컨테이너화된 애플리케이션 논리 계층의 \n컴퓨팅 성능을 위해 AWS Fargate 와 함께 Amazon ECS 를 사용할 수 있습니다. Amazon \nRDS 는 클라우드에서 관계형 데이터베이스를 쉽게 설정, 운영 및 확장할 수 있게 해주는 \n관리형 관계형 데이터베이스 서비스입니다. 애플리케이션의 데이터베이스 계층에 대해 \n관리형 Amazon RDS 클러스터를 사용할 수 있습니다. 이 솔루션은 배포를 단순화하고 \n3 계층 애플리케이션의 운영 비용을 줄여줍니다. \n참조: \n\ndocs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html \n\ndocs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 487,
    "question": "회사에서 해당 애플리케이션을 위한 스토리지 솔루션을 찾고 있습니다. 솔루션은 가용성과 \n\n=== PAGE 478 ===\n확장성이 높아야 합니다. 또한 솔루션은 기본 프로토콜을 통해 AWS 및 온프레미스의 여러 \nLinux 인스턴스에 의해 마운트될 수 있고 최소 크기 요구 사항이 없는 파일 시스템으로 \n작동해야 합니다. 회사는 온프레미스 네트워크에서 VPC 로 액세스하기 위해 사이트 간 \nVPN 을 설정했습니다. \n이러한 요구 사항을 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": [
      "Amazon FSx 다중 AZ 배포",
      "Amazon Elastic Block Store(Amazon EBS) 다중 연결 볼륨",
      "탑재 대상이 여러 개인 Amazon Elastic File System(Amazon EFS)",
      "단일 탑재 대상 및 여러 액세스 지점이 있는 Amazon Elastic File System(Amazon EFS)"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109665-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 488,
    "question": "4 년 차 미디어 회사는 AWS 계정을 구성하기 위해 AWS Organizations 모든 기능 기능 \n세트를 사용하고 있습니다. 회사의 재무 팀에 따르면 회원 계정의 청구 정보는 회원 계정의 \n루트 사용자를 포함하여 누구도 액세스할 수 없어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "모든 재무 팀 사용자를 IAM 그룹에 추가합니다. Billing 이라는 AWS 관리형 정책을 \n그룹에 연결합니다.",
      "루트 사용자를 포함한 모든 사용자의 청구 정보에 대한 액세스를 거부하는 자격 증명 \n기반 정책을 첨부합니다.",
      "청구 정보에 대한 액세스를 거부하는 서비스 제어 정책(SCP)을 만듭니다. 루트 조직 \n단위(OU)에 SCP 를 연결합니다.",
      "조직의 모든 기능 기능 집합에서 조직 통합 결제 기능 집합으로 변환합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109509-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n서비스 제어 정책(SCP): SCP 는 AWS Organizations 의 필수적인 부분이며 이를 통해 AWS \nOrganization 내 조직 단위(OU)에 대한 세분화된 권한을 설정할 수 있습니다. SCP 는 루트 \n사용자를 포함하여 멤버 계정에 부여할 수 있는 최대 권한에 대한 중앙 제어를 제공합니다. \n청구 정보에 대한 액세스 거부: SCP 를 만들어 루트 OU 에 연결하면 조직 내 모든 계정의 \n청구 정보에 대한 액세스를 명시적으로 거부할 수 있습니다. SCP 는 청구 관련 서비스를",
    "glossary": {}
  },
  {
    "id": 489,
    "question": "전자상거래 \n회사는 \n온프레미스 \n웨어하우스 \n솔루션과 \n통합된 \nAWS \n클라우드에서 \n애플리케이션을 실행합니다. 이 회사는 Amazon Simple Notification Service(Amazon SNS)를 \n사용하여 주문 메시지를 온프레미스 HTTPS 엔드포인트로 보내 창고 애플리케이션이 \n주문을 처리할 수 있도록 합니다. 로컬 데이터 센터 팀에서 일부 주문 메시지가 수신되지 \n않은 것을 감지했습니다. \n솔루션 설계자는 전달되지 않은 메시지를 보관하고 최대 14 일 동안 메시지를 분석해야 \n합니다. \n최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "보존 기간이 14 일인 Amazon Kinesis Data Stream 대상이 있는 Amazon SNS 배달 못한 \n편지 대기열을 구성합니다.",
      "애플리케이션과 Amazon SNS 사이에 보존 기간이 14 일인 Amazon Simple Queue \nService(Amazon SQS) 대기열을 추가합니다.",
      "보존 기간이 14 일인 Amazon Simple Queue Service(Amazon SQS) 대상이 있는 Amazon \nSNS 데드 레터 대기열을 구성합니다.",
      "보존 기간이 14\n일로 설정된 TTL 속성이 있는 Amazon DynamoDB 대상이 있는 \nAmazon SNS 데드 레터 대기열을 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109637-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스"
    }
  },
  {
    "id": 490,
    "question": "게임 회사는 Amazon DynamoDB 를 사용하여 지리적 위치, 플레이어 데이터 및 순위표와 \n같은 사용자 정보를 저장합니다. 회사는 최소한의 코딩으로 Amazon S3 버킷에 대한 \n지속적인 백업을 구성해야 합니다. 백업은 애플리케이션의 가용성에 영향을 미치지 않아야 \n하며 테이블에 대해 정의된 읽기 용량 단위(RCU)에 영향을 주지 않아야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon EMR 클러스터를 사용하십시오. Apache Hive 작업을 생성하여 Amazon S3 에 \n데이터를 백업합니다. \n\n=== PAGE 480 ===",
      "연속 백업을 통해 DynamoDB 에서 Amazon S3 로 직접 데이터를 내보냅니다. 테이블에 \n대해 지정 시간 복구를 설정합니다.",
      "Amazon DynamoDB 스트림을 구성합니다. 스트림을 사용하고 데이터를 Amazon S3 \n버킷으로 내보내는 AWS Lambda 함수를 생성합니다.",
      "정기적으로 데이터베이스 테이블에서 Amazon S3 로 데이터를 내보내는 AWS Lambda \n함수를 생성합니다. 테이블에 대해 지정 시간 복구를 설정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109577-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n참고: \n\naws.amazon.com/ko/blogs/database/dynamodb-streams-use-cases-and-design\n-patterns/ \n\nrepost.aws/ko/knowledge-center/back-up-dynamodb-s3",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 491,
    "question": "솔루션 설계자는 은행에 대한 신용 카드 데이터 유효성 검사 요청을 처리하기 위해 \n비동기식 애플리케이션을 설계하고 있습니다. 애플리케이션은 안전해야 하며 각 요청을 한 \n번 이상 처리할 수 있어야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Lambda 이벤트 소스 매핑을 사용하십시오. Amazon Simple Queue Service(Amazon \nSQS) 표준 대기열을 이벤트 소스로 설정합니다. 암호화에 AWS Key Management \nService(SSE-KMS)를 \n사용합니다. Lambda \n실행 역할에 대한 kms:Decrypt \n권한을 \n추가합니다.",
      "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon \nSQS) \nFIFO \n대기열을 \n이벤트 \n소스로 \n사용합니다. \n암호화에 \nSQS \n관리형 \n암호화 \n키(SSE-SQS)를 사용합니다. Lambda 함수에 대한 암호화 키 호출 권한을 추가합니다.",
      "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon \nSQS) FIFO 대기열을 이벤트 소스로 설정합니다. AWS KMS 키(SSE-KMS)를 사용합니다. \nLambda 실행 역할에 대한 kms:Decrypt 권한을 추가합니다.",
      "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon \nSQS) 표준 대기열을 이벤트 소스로 설정합니다. 암호화에 AWS KMS 키(SSE-KMS)를 \n사용합니다. Lambda 함수에 대한 암호화 키 호출 권한을 추가합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109513-exam-aws-certified-sol",
    "glossary": {}
  },
  {
    "id": 492,
    "question": "회사에 개발 작업을 위한 여러 AWS 계정이 있습니다. 일부 직원은 지속적으로 대형 \nAmazon EC2 인스턴스를 사용하므로 회사가 개발 계정에 대한 연간 예산을 초과하게 \n됩니다. 회사는 이러한 계정에서 AWS 리소스 생성을 중앙에서 제한하려고 합니다. \n최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "승인된 EC2 생성 프로세스를 사용하는 AWS Systems Manager 템플릿을 개발합니다. \n승인된 Systems Manager 템플릿을 사용하여 EC2 인스턴스를 프로비저닝합니다.",
      "AWS Organizations 를 사용하여 계정을 조직 단위(OU)로 구성합니다. 서비스 제어 \n정책(SCP)을 정의하고 연결하여 EC2 인스턴스 유형의 사용을 제어합니다.",
      "EC2 인스턴스가 생성될 때 AWS Lambda 함수를 호출하는 Amazon EventBridge 규칙을 \n구성합니다. 허용되지 않는 EC2 인스턴스 유형을 중지합니다.",
      "직원이 허용되는 EC2 인스턴스 유형을 생성할 수 있도록 AWS Service Catalog 제품을 \n설정합니다. 직원이 서비스 카탈로그 제품을 사용해야만 EC2 인스턴스를 배포할 수 있는지 \n확인하십시오."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109638-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n동적 조정은 수요 또는 부하에 따라 Auto Scaling 그룹의 EC2 인스턴스 수를 자동으로 \n조정하는 일종의 자동 조정입니다. 지정된 지표가 임계값을 초과하면 CloudWatch 경보를 \n사용하여 조정 작업을 트리거합니다. 필요에 따라 확장(인스턴스 추가) 또는 축소(인스턴스 \n제거)할 수 있습니다1. 솔루션은 동적 확장을 사용하여 갑작스러운 트래픽 증가 중에 가장 \n비용 효율적으로 애플리케이션 성능을 유지할 수 있습니다. \n1. 수동 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다. 수동 확장은 사용자가 \nCLI 또는 콘솔을 통해 인스턴스 수를 수동으로 늘리거나 줄여야 하므로 이 솔루션은 \n트래픽이 갑자기 증가하는 동안 애플리케이션 성능을 유지해야 하는 요구 사항을 충족하지 \n않습니다. 수요나 부하의 변화에 자동으로 반응하지 않습니다. \n2. 예측 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다. 이 솔루션은 예측 \n확장이 기계 학습 및 인공 지능 도구를 사용하여 트래픽 부하를 평가하고 더 많거나 적은 \n리소스가 필요할 때를 예상하므로 대부분의 비용 효율성 요구 사항을 충족하지 않습니다. \n주어진 시간에 실제 수요 또는 로드와 일치하지 않을 수 있는 예측을 기반으로 예약된 조정 \n작업을 수행합니다. 예측 조정은 예측 가능한 트래픽 패턴이 있거나 트래픽 부하의 알려진",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 493,
    "question": "한 회사에서 AI(인공 지능)를 사용하여 고객 서비스 통화 품질을 확인하려고 합니다. 회사는 \n현재 영어를 포함하여 4 개 언어로 통화를 관리합니다. 회사는 앞으로 새로운 언어를 \n제공할 것입니다. 회사는 기계 학습(ML) 모델을 정기적으로 유지 관리할 리소스가 \n없습니다. \n회사는 고객 서비스 통화 녹음에서 서면 감정 분석 보고서를 작성해야 합니다. 고객 서비스 \n통화 녹음 텍스트는 영어로 번역되어야 합니다. \n이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3 개 선택)",
    "options": [
      "Amazon Comprehend 를 사용하여 오디오 녹음을 영어로 번역하십시오.",
      "Amazon Lex 를 사용하여 작성된 감정 분석 보고서를 생성합니다.",
      "Amazon Polly 를 사용하여 오디오 녹음을 텍스트로 변환합니다.",
      "Amazon Transcribe 를 사용하여 모든 언어의 오디오 녹음을 텍스트로 변환합니다.",
      "Amazon Translate 를 사용하여 모든 언어의 텍스트를 영어로 번역합니다.",
      "Amazon Comprehend 를 사용하여 감정 분석 보고서를 생성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109639-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이러한 답변은 모든 언어로 된 고객 서비스 통화 녹음에서 서면 감정 분석 보고서를 \n작성하고 이를 영어로 번역하는 요구 사항을 충족하므로 정확합니다. Amazon Transcribe 는 \n고급 기계 학습 기술을 사용하여 오디오 파일의 음성을 인식하고 텍스트로 변환하는 \n서비스입니다. Amazon Transcribe\n를 사용하여 모든 언어의 오디오 녹음을 텍스트로 \n변환하고 소스 오디오의 언어 코드를 지정할 수 있습니다. Amazon Translate 는 빠르고",
    "glossary": {}
  },
  {
    "id": 494,
    "question": "회사는 Amazon EC2 인스턴스를 사용하여 내부 시스템을 호스팅합니다. 배포 작업의 \n일부로 관리자는 AWS CLI\n를 사용하여 EC2 인스턴스를 종료하려고 합니다. 그러나 \n관리자는 403(액세스 거부) 오류 메시지를 받습니다. \n관리자는 다음 IAM 정책이 연결된 IAM 역할을 사용하고 있습니다. \n\n=== PAGE 484 ===\n \n실패한 요청의 원인은 무엇입니까?",
    "options": [
      "EC2 인스턴스에는 Deny 문이 포함된 리소스 기반 정책이 있습니다.",
      "정책 설명에 주체가 지정되지 않았습니다.",
      "\"Action\" 필드는 EC2 인스턴스를 종료하는 데 필요한 조치를 부여하지 않습니다.",
      "EC2 인스턴스 종료 요청은 CIDR 블록 192.0.2.0/24 또는 203.0.113.0/24 에서 시작되지 \n않습니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109727-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 495,
    "question": "회사에서 내부 감사를 실시하고 있습니다. 회사는 회사의 AWS Lake Formation 데이터 \n레이크와 연결된 Amazon S3 버킷의 데이터에 민감한 고객 또는 직원 데이터가 포함되지 \n\n=== PAGE 485 ===\n않도록 하려고 합니다. 회사는 개인 식별 정보(PII) 또는 여권 번호 및 신용 카드 번호를 \n포함한 금융 정보를 검색하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "계정에서 AWS Audit Manager 를 구성합니다. 감사를 위해 PCI DSS(Payment Card \nIndustry Data Security Standards)를 선택합니다.",
      "S3 버킷에서 Amazon S3 인벤토리 구성 인벤토리를 쿼리하도록 Amazon Athena 를 \n구성합니다.",
      "필요한 데이터 유형에 대해 관리형 식별자를 사용하는 데이터 검색 작업을 실행하도록 \nAmazon Macie 를 구성합니다.",
      "Amazon S3 Select 를 사용하여 S3 버킷에서 보고서를 실행합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109666-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon Macie 는 기계 학습 및 패턴 일치를 사용하여 AWS 에서 중요한 데이터를 검색하고 \n보호하는 완전 관리형 데이터 보안 및 데이터 개인 정보 보호 서비스입니다. Macie 는 \n다양한 유형의 PII 또는 금융 정보(예: 여권 번호 및 신용 카드 번호)에 대해 관리형 \n식별자를 사용하는 데이터 검색 작업을 실행할 수 있습니다. Macie 는 또한 데이터의 \n잠재적인 문제나 위험을 경고하는 결과를 생성할 수 있습니다. \n참조: \n\ndocs.aws.amazon.com/macie/latest/userguide/macie-identifiers.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 496,
    "question": "회사는 온프레미스 서버를 사용하여 애플리케이션을 호스팅합니다. 회사의 저장 용량이 \n부족합니다. 애플리케이션은 블록 스토리지와 NFS 스토리지를 모두 사용합니다. 회사는 \n기존 애플리케이션을 재설계하지 않고 로컬 캐싱을 지원하는 고성능 솔루션이 필요합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 작업 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "Amazon S3 를 온프레미스 서버에 파일 시스템으로 탑재합니다.",
      "NFS 스토리지를 대체할 AWS Storage Gateway 파일 게이트웨이를 배포합니다.",
      "AWS Snowball Edge 를 배포하여 온프레미스 서버에 NFS 마운트를 프로비저닝합니다.",
      "블록 스토리지를 대체할 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다.",
      "Amazon Elastic File System(Amazon EFS) 볼륨을 배포하고 온프레미스 서버에 \n탑재합니다. \n\n=== PAGE 486 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109552-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/storagegateway/file/ \n파일 게이트웨이는 애플리케이션 데이터 파일과 백업 이미지를 Amazon S3 클라우드 \n스토리지에 내구성 있는 개체로 저장하기 위해 클라우드에 원활하게 연결할 수 있는 방법을 \n제공합니다. 파일 게이트웨이는 로컬 캐싱을 통해 Amazon S3 의 데이터에 대한 SMB 또는 \nNFS 기반 액세스를 제공합니다. 온프레미스 애플리케이션과 S3 객체 스토리지에 대한 파일 \n프로토콜 액세스가 필요한 Amazon EC2 기반 애플리케이션에 사용할 수 있습니다. \n\naws.amazon.com/storagegateway/volume/ \n볼륨 게이트웨이는 온프레미스 애플리케이션에 클라우드 지원 iSCSI 블록 스토리지 볼륨을 \n제공합니다. \n볼륨 게이트웨이는 사용자를 대신하여 Amazon S3\n에 온프레미스 데이터를 저장하고 \n관리하며 캐시 모드 또는 저장 모드에서 작동합니다. 캐싱된 볼륨 게이트웨이 모드에서 \n기본 데이터는 Amazon S3 에 저장되는 반면 자주 액세스하는 데이터는 짧은 지연 시간 \n액세스를 위해 캐시에 로컬로 유지됩니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 497,
    "question": "회사에는 동일한 AWS 리전의 Amazon S3 버킷에서 대량의 데이터를 읽고 쓰는 서비스가 \n있습니다. 이 서비스는 VPC 의 프라이빗 서브넷 내 Amazon EC2 인스턴스에 배포됩니다. \n이 서비스는 퍼블릭 서브넷의 NAT 게이트웨이를 통해 Amazon S3 와 통신합니다. 그러나 \n회사는 데이터 출력 비용을 줄일 수 있는 솔루션을 원합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "퍼블릭 서브넷에서 전용 EC2 NAT 인스턴스를 프로비저닝합니다. 이 인스턴스의 탄력적 \n네트워크 인터페이스를 모든 S3 트래픽의 대상으로 사용하도록 프라이빗 서브넷에 대한 \n라우팅 테이블을 구성합니다.",
      "프라이빗 서브넷에서 전용 EC2 NAT 인스턴스를 프로비저닝합니다. 이 인스턴스의 \n탄력적 네트워크 인터페이스를 모든 S3 트래픽의 대상으로 사용하도록 퍼블릭 서브넷에 \n대한 라우팅 테이블을 구성합니다.",
      "VPC 게이트웨이 엔드포인트를 프로비저닝합니다. 게이트웨이 엔드포인트를 모든 S3 \n트래픽의 경로로 사용하도록 프라이빗 서브넷에 대한 경로 테이블을 구성합니다.",
      "두 번째 NAT 게이트웨이를 프로비저닝합니다. 이 NAT 게이트웨이를 모든 S3 트래픽의 \n대상으로 사용하도록 프라이빗 서브넷에 대한 라우팅 테이블을 구성합니다. \n\n=== PAGE 487 ==="
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109667-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 VPC 의 Amazon EC2 인스턴스에서 Amazon S3 에 액세스하기 위한 \n데이터 \n출력 \n비용을 \n줄일 \n수 \n있습니다. \n회사는 \nVPC \n게이트웨이 \n엔드포인트를 \n프로비저닝함으로써 VPC 와 S3 간의 프라이빗 연결을 활성화할 수 있습니다. 게이트웨이 \n엔드포인트를 모든 S3 트래픽의 경로로 사용하도록 프라이빗 서브넷의 라우팅 테이블을 \n구성함으로써 회사는 데이터 처리 및 데이터 전송 비용을 청구하는 NAT 게이트웨이 사용을 \n피할 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 498,
    "question": "회사는 Amazon S3 를 사용하여 고해상도 사진을 S3 버킷에 저장합니다. 애플리케이션 \n변경을 최소화하기 위해 회사는 사진을 S3 개체의 최신 버전으로 저장합니다. 회사는 \n사진의 가장 최근 버전 두 개만 유지하면 됩니다. \n회사는 비용을 줄이고 싶어합니다. 회사는 S3 버킷을 큰 비용으로 식별했습니다. \n최소한의 운영 오버헤드로 S3 비용을 줄이는 솔루션은 무엇입니까?",
    "options": [
      "S3 수명 주기를 사용하여 만료된 객체 버전을 삭제하고 가장 최근 버전 2\n개를 \n유지합니다.",
      "AWS Lambda 함수를 사용하여 이전 버전을 확인하고 가장 최근 버전 2 개를 제외한 \n모든 버전을 삭제합니다.",
      "S3 배치 작업을 사용하여 최신이 아닌 객체 버전을 삭제하고 가장 최근 버전 2 개만 \n유지합니다.",
      "S3 버킷에서 버전 관리를 비활성화하고 가장 최근 버전 2 개를 유지합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109668-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 499,
    "question": "회사는 1Gbps AWS Direct Connect 연결 비용을 최소화해야 합니다. 회사의 평균 연결 \n사용률은 10% 미만입니다. 솔루션 설계자는 보안을 손상시키지 않으면서 비용을 절감할 \n솔루션을 추천해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 488 ===",
    "options": [
      "새로운 1Gbps Direct Connect 연결을 설정합니다. 다른 AWS 계정과 연결을 \n공유합니다.",
      "AWS Management Console 에서 새로운 200Mbps Direct Connect 연결을 설정합니다.",
      "1Gbps 연결을 주문하려면 AWS Direct Connect 파트너에게 문의하십시오. 다른 AWS \n계정과 연결을 공유합니다.",
      "기존 AWS 계정에 대한 200Mbps 호스팅 연결을 주문하려면 AWS Direct Connect \n파트너에게 문의하십시오."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109515-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n회사는 더 저렴한 연결(200M)을 설정해야 하지만 호스트 연결로 더 많은 유연성을 위해 1, \n10 또는 100Gbps 의 포트 속도만 주문할 수 있기 때문에 B 는 올바르지 않습니다. \n50Mbps 에서 10Gbps 사이의 포트 속도를 주문할 수 있습니다. \n\ndocs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-dir\nectconnect.html",
    "glossary": {
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술"
    }
  },
  {
    "id": 500,
    "question": "회사에는 온프레미스에 여러 Windows 파일 서버가 있습니다. 이 회사는 파일을 Windows \nFile Server 파일 시스템용 Amazon FSx 로 마이그레이션하고 통합하려고 합니다. 액세스 \n권한이 변경되지 않도록 하려면 파일 권한을 보존해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2 개 선택)",
    "options": [
      "온프레미스에 AWS DataSync 에이전트를 배포합니다. 데이터를 FSx for Windows 파일 \n서버 파일 시스템으로 전송하도록 DataSync 작업을 예약합니다.",
      "AWS CLI 를 사용하여 각 파일 서버의 공유를 Amazon S3 버킷에 복사합니다. 데이터를 \nFSx for Windows File Server 파일 시스템으로 전송하도록 AWS DataSync 작업을 \n예약합니다.",
      "각 파일 서버에서 드라이브를 제거합니다. Amazon S3 로 가져오기 위해 드라이브를 \nAWS 로 배송합니다. 데이터를 FSx for Windows File Server 파일 시스템으로 전송하도록 \nAWS DataSync 작업을 예약합니다.",
      "AWS Snowcone 디바이스를 주문합니다. 장치를 온프레미스 네트워크에 연결합니다. \n디바이스에서 AWS DataSync 에이전트를 시작합니다. 데이터를 FSx for Windows 파일 서버 \n파일 시스템으로 전송하도록 DataSync 작업을 예약합니다.",
      "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. 장치를 온프레미스 \n\n=== PAGE 489 ===\n네트워크에 연결합니다. AWS CLI 를 사용하여 디바이스에 데이터를 복사합니다. Amazon \nS3 로 가져오기 위해 디바이스를 AWS 로 반송합니다. 데이터를 FSx for Windows File Server \n파일 시스템으로 전송하도록 AWS DataSync 작업을 예약합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109689-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nA 이 옵션에는 온프레미스 파일 서버에 DataSync 에이전트를 배포하고 DataSync\n를 \n사용하여 데이터를 FSx for Windows File Server 로 직접 전송하는 작업이 포함됩니다. \nDataSync 는 마이그레이션 프로세스 중에 파일 권한이 보존되도록 합니다. \nD 이 옵션에는 휴대용 데이터 전송 장치인 AWS Snowcone 장치 사용이 포함됩니다. \nSnowcone \n디바이스를 \n온프레미스 \n네트워크에 \n연결하고 \n디바이스에서 \nDataSync \n에이전트를 시작하고 DataSync 작업을 예약하여 데이터를 FSx for Windows File Server 로 \n전송합니다. \nDataSync 는 파일 권한을 유지하면서 마이그레이션 프로세스를 처리합니다.",
    "glossary": {
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스"
    }
  }
];