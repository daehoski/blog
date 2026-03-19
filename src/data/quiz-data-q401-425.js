export const quizData = [
  {
    "id": 401,
    "question": "회사는 AWS 클라우드를 사용하여 기존 애플리케이션의 가용성과 탄력성을 높이려고 \n합니다. 애플리케이션의 현재 버전은 회사의 데이터 센터에 상주합니다. 예기치 않은 \n정전으로 인해 데이터베이스 서버가 충돌한 후 애플리케이션에서 최근 데이터 손실이 \n\n=== PAGE 408 ===\n발생했습니다. \n회사는 단일 실패 지점을 방지하는 솔루션이 필요합니다. 솔루션은 애플리케이션에 사용자 \n요구에 맞게 확장할 수 있는 기능을 제공해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "여러 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 \n애플리케이션 서버를 배포합니다. 다중 AZ 구성에서 Amazon RDS DB 인스턴스를 \n사용합니다.",
      "단일 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 \n애플리케이션 서버를 배포합니다. EC2 인스턴스에 데이터베이스를 배포합니다. EC2 자동 \n복구를 활성화합니다.",
      "여러 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 \n애플리케이션 서버를 배포합니다. 단일 가용 영역에서 읽기 전용 복제본이 있는 Amazon \nRDS DB 인스턴스를 사용합니다. 기본 DB 인스턴스가 실패할 경우 읽기 전용 복제본을 \n승격하여 기본 DB 인스턴스를 교체하십시오.",
      "여러 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 \n애플리케이션 서버를 배포합니다. 여러 가용 영역에 걸쳐 EC2 인스턴스에 기본 및 보조 \n데이터베이스 서버를 배포합니다. Amazon Elastic Block Store(Amazon EBS) 다중 연결을 \n사용하여 인스턴스 간에 공유 스토리지를 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102170-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n1: \nA(O) : Amazon RDS 다중 AZ 배포에서 Amazon RDS 는 자동으로 프라이머리 데이터베이스 \nDB 인스턴스를 생성하고 동시에 다른 AZ 의 인스턴스에 데이터를 복제합니다. 장애를 \n감지하면 Amazon RDS 는 수동 개입 없이 자동으로 대기 인스턴스로 장애 조치합니다. \n\naws.amazon.com/ko/rds/features/multi-az/ \nB(X) : Auto Scaling 을 단일 가용 영역에서 사용하므로 고가용성 조건 불충족. \nC(X) : 단일 가용 영역에서 읽기 전용 복제본이 있는 DB 인스턴스를 사용한다고 했으므로 \n고가용성 조건 불충족. \nD(X) : 공유 스토리지가 아니라 read replica 나 다중 AZ 가 더 합리적. \n \n2: \n여러 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 애플리케이션 \n서버를 배포합니다. 다중 AZ 구성에서 Amazon RDS DB 인스턴스를 사용합니다. 단일 장애 \n지점을 피하고 사용자 요구에 맞게 애플리케이션을 확장할 수 있는 기능을 제공하면서 기존",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 402,
    "question": "회사는 애플리케이션에서 생성하는 대량의 스트리밍 데이터를 수집하고 처리해야 합니다. \n이 애플리케이션은 Amazon EC2 인스턴스에서 실행되며 기본 설정으로 구성된 Amazon \nKinesis Data Streams 로 데이터를 전송합니다. 격일로 애플리케이션은 데이터를 소비하고 \n비즈니스 인텔리전스(BI) 처리를 위해 데이터를 Amazon S3 버킷에 기록합니다. 회사는 \nAmazon S3 가 애플리케이션이 Kinesis Data Streams 로 보내는 모든 데이터를 수신하지 \n못하는 것을 관찰합니다. \n솔루션 설계자는 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": [
      "데이터 보존 기간을 수정하여 Kinesis Data Streams 기본 설정을 업데이트합니다.",
      "Kinesis Producer Library(KPL)를 사용하여 Kinesis Data Streams 로 데이터를 전송하도록 \n애플리케이션을 업데이트합니다.",
      "Kinesis Data Streams 로 전송되는 데이터의 처리량을 처리하도록 Kinesis 샤드 수를 \n업데이트합니다.",
      "S3 버킷 내에서 S3 버전 관리를 켜서 S3 버킷에 수집된 모든 객체의 모든 버전을 \n보존합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102175-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nKinesis 데이터 스트림의 데이터 보존 기간은 레코드가 추가된 시점부터 더 이상 액세스할 \n수 없는 시점까지의 기간입니다. Kinesis 데이터 스트림의 기본 보존 기간은 24 시간이며 \n최대 8760 시간(365 일)까지 연장할 수 있습니다. 데이터 보존 기간은 AWS Management \nConsole, AWS CLI 또는 Kinesis Data Streams API 를 사용하여 업데이트할 수 있습니다. \n시나리오의 요구 사항을 충족하려면 솔루션 설계자가 데이터 보존 기간을 수정하여 Kinesis \nData Streams 기본 설정을 업데이트해야 합니다. 솔루션 설계자는 보존 기간을 데이터를 \n소비하고 S3 에 쓰는 빈도보다 크거나 같은 값으로 늘려야 합니다. 이렇게 하면 회사는 \n애플리케이션이 Kinesis Data Streams 로 보내는 모든 데이터를 S3 가 수신하도록 할 수",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 403,
    "question": "개발자에게는 AWS Lambda 함수를 사용하여 파일을 Amazon S3\n에 업로드하는 \n애플리케이션이 있으며 작업을 수행하는 데 필요한 권한이 필요합니다. 개발자에게는 이미 \nAmazon S3 에 필요한 유효한 IAM 자격 증명이 있는 IAM 사용자가 있습니다. \n권한을 부여하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": [
      "Lambda 함수의 리소스 정책에 필요한 IAM 권한을 추가합니다.",
      "Lambda 함수에서 기존 IAM 자격 증명을 사용하여 서명된 요청을 생성합니다.",
      "새 IAM 사용자를 생성하고 Lambda 함수에서 기존 IAM 자격 증명을 사용합니다.",
      "필요한 권한이 있는 IAM 실행 역할을 생성하고 IAM 역할을 Lambda 함수에 \n연결합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102178-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon S3 에 파일을 업로드하기 위해 AWS Lambda 함수에 필요한 권한을 부여하려면 \n솔루션 설계자는 필요한 권한이 있는 IAM 실행 역할을 생성하고 IAM 역할을 Lambda \n함수에 연결해야 합니다. 이 접근 방식은 최소 권한 원칙을 따르며 Lambda 함수가 특정 \n작업을 수행하는 데 필요한 리소스에만 액세스할 수 있도록 합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 404,
    "question": "회사는 새 문서가 Amazon S3 버킷에 업로드될 때 AWS Lambda 함수를 호출하는 서버리스 \n애플리케이션을 \n배포했습니다. \n애플리케이션은 \nLambda \n함수를 \n사용하여 \n문서를 \n처리합니다. 최근 마케팅 캠페인 후 회사는 애플리케이션이 많은 문서를 처리하지 않는다는 \n사실을 알게 되었습니다. \n솔루션 설계자는 이 애플리케이션의 아키텍처를 개선하기 위해 무엇을 해야 합니까?",
    "options": [
      "Lambda 함수의 런타임 제한 시간 값을 15 분으로 설정합니다.",
      "S3 버킷 복제 정책을 구성합니다. 나중에 처리할 수 있도록 S3 버킷에 문서를 \n준비합니다.",
      "추가 Lambda 함수를 배포합니다. 두 Lambda 함수에서 문서 처리 부하를 분산합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 대기열에 요청을 \n보냅니다. 대기열을 Lambda 에 대한 이벤트 소스로 구성합니다. \n\n=== PAGE 411 ==="
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102180-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 애플리케이션의 아키텍처를 개선하기 위한 최상의 솔루션은 Amazon Simple Queue \nService(Amazon SQS)를 사용하여 요청을 버퍼링하고 Lambda 함수에서 S3 버킷을 \n분리하는 것입니다. 이렇게 하면 문서가 손실되지 않고 Lambda 함수를 사용할 수 없는 \n경우 나중에 처리할 수 있습니다. 이렇게 하면 문서가 손실되지 않고 Lambda 함수를 \n사용할 수 없는 경우 나중에 처리할 수 있습니다. Amazon SQS 를 사용하면 아키텍처가 \n분리되고 Lambda 함수가 확장 가능하고 내결함성 있는 방식으로 문서를 처리할 수 \n있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 405,
    "question": "솔루션 설계자는 소프트웨어 데모 환경을 위한 아키텍처를 설계하고 있습니다. 환경은 \nApplication Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 \n실행됩니다. 시스템은 근무 시간 동안 트래픽이 크게 증가하지만 주말에는 작동하지 않아도 \n됩니다. \n수요에 맞게 시스템을 확장할 수 있도록 하기 위해 솔루션 설계자는 어떤 조치 조합을 \n취해야 합니까? (2 개 선택)",
    "options": [
      "AWS Auto Scaling 을 사용하여 요청 속도에 따라 ALB 용량을 조정하십시오.",
      "AWS Auto Scaling 을 사용하여 VPC 인터넷 게이트웨이의 용량을 확장합니다.",
      "여러 AWS 지역에서 EC2 인스턴스를 시작하여 여러 지역에 로드를 분산합니다.",
      "대상 추적 조정 정책을 사용하여 인스턴스 CPU 사용률을 기반으로 Auto Scaling 그룹을 \n조정합니다.",
      "예약된 조정을 사용하여 Auto Scaling 그룹의 최소, 최대 및 원하는 용량을 주말 동안 \n0 으로 변경합니다. 주의 시작 시 기본값으로 되돌립니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102181-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\ndocs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/as-scaling-target-tracki\nng.html#target-tracking-choose-metrics \n대상 추적 조정 정책은 지정된 메트릭과 대상 값을 기반으로 Auto Scaling 그룹의 용량을",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 406,
    "question": "솔루션 설계자는 공용 서브넷과 데이터베이스 서브넷을 포함하는 2\n계층 아키텍처를 \n설계하고 있습니다. 퍼블릭 서브넷의 웹 서버는 포트 443 에서 인터넷에 열려 있어야 \n합니다. 데이터베이스 서브넷의 Amazon RDS for MySQL DB 인스턴스는 포트 3306 의 웹 \n서버에서만 액세스할 수 있어야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "퍼블릭 서브넷에 대한 네트워크 ACL 을 만듭니다. 포트 3306 에서 0.0.0.0/0 에 대한 \n아웃바운드 트래픽을 거부하는 규칙을 추가합니다.",
      "DB 인스턴스에 대한 보안 그룹을 생성합니다. 포트 3306 에서 퍼블릭 서브넷 CIDR \n블록의 트래픽을 허용하는 규칙을 추가합니다.",
      "퍼블릭 서브넷의 웹 서버에 대한 보안 그룹을 생성합니다. 포트 443 에서 0.0.0.0/0 의 \n트래픽을 허용하는 규칙을 추가합니다.",
      "DB 인스턴스에 대한 보안 그룹을 생성합니다. 포트 3306 에서 웹 서버 보안 그룹의 \n트래픽을 허용하는 규칙을 추가합니다.",
      "DB 인스턴스에 대한 보안 그룹을 생성합니다. 포트 3306 에서 웹 서버 보안 그룹의 \n\n=== PAGE 413 ===\n트래픽을 제외한 모든 트래픽을 거부하는 규칙을 추가합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102183-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 407,
    "question": "회사는 AWS 클라우드에서 호스팅되는 게임 애플리케이션용 공유 스토리지 솔루션을 \n구현하고 있습니다. 회사는 Lustre 클라이언트를 사용하여 데이터에 액세스할 수 있는 \n기능이 필요합니다. 솔루션은 완전히 관리되어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "탑재 가능한 파일 시스템으로 데이터를 공유하는 AWS DataSync 작업을 생성합니다. \n파일 시스템을 애플리케이션 서버에 마운트하십시오.",
      "AWS Storage Gateway 파일 게이트웨이를 생성합니다. 필요한 클라이언트 프로토콜을 \n사용하는 파일 공유를 만듭니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템을 만들고 Lustre 를 지원하도록 \n구성합니다. 원본 서버에 파일 시스템을 연결합니다. 애플리케이션 서버를 파일 시스템에 \n연결하십시오.",
      "Amazon FSx for Lustre 파일 시스템을 생성합니다. 원본 서버에 파일 시스템을 \n연결합니다. 애플리케이션 서버를 파일 시스템에 연결하십시오."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102184-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 408,
    "question": "한 회사에서 UDP 를 사용하는 수천 개의 지리적으로 분산된 원격 장치로부터 데이터를 \n수신하는 애플리케이션을 실행합니다. 애플리케이션은 데이터를 즉시 처리하고 필요한 경우 \n장치로 다시 메시지를 보냅니다. 데이터가 저장되지 않습니다. \n회사는 장치에서 데이터 전송에 대한 대기 시간을 최소화하는 솔루션이 필요합니다. \n솔루션은 또한 다른 AWS 리전에 대한 빠른 장애 조치를 제공해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Route 53 장애 조치 라우팅 정책을 구성합니다. 두 리전 각각에 NLB(Network \nLoad Balancer)를 생성합니다. 데이터를 처리하기 위해 AWS Lambda 함수를 호출하도록 \nNLB 를 구성합니다.",
      "AWS Global Accelerator 를 사용합니다. 두 리전 각각에 NLB(Network Load Balancer)를 \n\n=== PAGE 414 ===\n엔드포인트로 \n생성합니다. \nFargate \n시작 \n유형으로 \nAmazon \nElastic \nContainer \nService(Amazon ECS) 클러스터를 생성합니다. 클러스터에서 ECS 서비스를 생성합니다. \nAmazon ECS 에서 데이터를 NLProcess 하기 위한 대상으로 ECS 서비스를 설정합니다.",
      "AWS Global Accelerator\n를 사용합니다. 두 리전 각각에 Application Load \nBalancer(ALB)를 엔드포인트로 생성합니다. Fargate 시작 유형으로 Amazon Elastic \nContainer Service(Amazon ECS) 클러스터를 생성합니다. 클러스터에서 ECS 서비스를 \n생성합니다. ECS 서비스를 ALB 의 대상으로 설정합니다. Amazon ECS 에서 데이터를 \n처리합니다.",
      "Amazon Route 53 장애 조치 라우팅 정책을 구성합니다. 두 리전 각각에 Application \nLoad Balancer(ALB)를 생성합니다. Fargate 시작 유형으로 Amazon Elastic Container \nService(Amazon ECS) 클러스터를 생성합니다. 클러스터에서 ECS 서비스를 생성합니다. \nECS 서비스를 ALB 의 대상으로 설정합니다. Amazon ECS 에서 데이터를 처리합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102185-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n장치에서 데이터를 전송하는 지연 시간을 최소화하고 다른 AWS 영역으로 신속하게 \n페일오버해야 하는 요구 사항을 충족하기 위해 가장 좋은 솔루션은 네트워크 로드 \n밸런서(NLB) 및 Amazon Elastic Container Service(Amazon ECS)와 함께 AWS Global \nAccelerator 를 사용하는 것입니다. \nAWS Global Accelerator 는 정적 IP 주소(Anycast)를 사용하여 트래픽을 최적의 AWS \n끝점으로 라우팅하여 애플리케이션의 가용성과 성능을 향상시키는 서비스입니다. Global \nAccelerator 를 사용하면 트래픽을 여러 지역 및 끝점으로 유도하고 다른 AWS 지역으로 \n자동 페일오버를 제공할 수 있습니다.",
    "glossary": {}
  },
  {
    "id": 409,
    "question": "솔루션 \n설계자는 \nWindows \n인터넷 \n정보 \n서비스(IIS) \n웹 \n애플리케이션을 \nAWS\n로 \n마이그레이션해야 \n합니다. \n애플리케이션은 \n현재 \n사용자의 \n온프레미스 \nNAS(Network-Attached Storage)에서 호스팅되는 파일 공유에 의존합니다. 솔루션 설계자는 \nIIS 웹 서버를 스토리지 솔루션에 연결된 여러 가용 영역의 Amazon EC2 인스턴스로 \n마이그레이션하고 인스턴스에 연결된 Elastic Load Balancer 를 구성할 것을 제안했습니다. \n온프레미스 파일 공유에 대한 어떤 대체가 가장 탄력적이고 내구성이 있습니까?",
    "options": [
      "파일 공유를 Amazon RDS 로 마이그레이션합니다.",
      "파일 공유를 AWS Storage Gateway 로 마이그레이션합니다. \n\n=== PAGE 415 ===",
      "파일 공유를 Amazon FSx for Windows File Server 로 마이그레이션합니다.",
      "파일 공유를 Amazon Elastic File System(Amazon EFS)으로 마이그레이션합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102186-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 Windows IIS 웹 서버와 호환되는 온-프레미스 파일 공유에 대한 탄력적이고 \n내구성 있는 대체를 제공하기 때문에 정확합니다. Amazon FSx for Windows File Server 는 \nWindows Server 에 구축된 공유 파일 스토리지를 제공하는 완전 관리형 서비스입니다. SMB \n프로토콜을 지원하고 Windows 기반 애플리케이션에 대한 원활한 액세스 및 인증을 \n가능하게 하는 Microsoft Active Directory 와 통합됩니다. Amazon FSx for Windows File \nServer 는 또한 다음과 같은 이점을 제공합니다. \n복원력: Amazon FSx for Windows File Server 는 고가용성 및 장애 조치 보호를 제공하는 \n여러 가용 영역에 배포할 수 있습니다. 또한 자동 백업 및 복원은 물론 문제를 감지하고 \n수정하는 자가 치유 기능도 지원합니다. \n내구성: Windows File Server 용 Amazon FSx 는 가용 영역 내외에서 데이터를 복제하고 \n내구성이 뛰어난 스토리지 장치에 데이터를 저장합니다. 또한 유휴 및 전송 중 암호화는 \n물론 파일 액세스 감사 및 데이터 중복 제거를 지원합니다. \n성능: Windows File Server 용 Amazon FSx 는 파일 작업을 위한 일관된 1 밀리초 미만의 \n지연 시간과 높은 처리량을 제공합니다. 또한 SSD 스토리지, 분산 파일 시스템(DFS) \n네임스페이스 및 복제와 같은 기본 Windows 기능, 사용자 중심 성능 확장을 지원합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 410,
    "question": "회사에서 Amazon EC2 인스턴스에 새 애플리케이션을 배포하고 있습니다. 애플리케이션은 \nAmazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 씁니다. 회사는 EBS 볼륨에 \n기록된 모든 데이터가 유휴 상태에서 암호화되도록 해야 합니다. \n이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EBS 암호화를 지정하는 IAM 역할을 생성합니다. 역할을 EC2 인스턴스에 연결합니다.",
      "EBS 볼륨을 암호화된 볼륨으로 생성합니다. EBS 볼륨을 EC2 인스턴스에 연결합니다.",
      "키가 Encrypt 이고 값이 True 인 EC2 인스턴스 태그를 생성합니다. EBS 수준에서 \n암호화가 필요한 모든 인스턴스에 태그를 지정합니다.",
      "계정에서 EBS 암호화를 시행하는 AWS Key Management Service(AWS KMS) 키 정책을 \n생성합니다. 키 정책이 활성 상태인지 확인하십시오."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102187-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nEBS 볼륨에 기록되는 모든 데이터가 유휴 상태에서 암호화되도록 보장하는 요구 사항을 \n충족하는 솔루션은 B 입니다. EBS 볼륨을 암호화된 볼륨으로 생성하고 암호화된 EBS \n볼륨을 EC2 인스턴스에 연결합니다. EBS 볼륨을 생성할 때 볼륨 암호화 여부를 지정할 수 \n있습니다. 볼륨을 암호화하도록 선택한 경우 볼륨에 기록된 모든 데이터는 AWS 관리형 \n키를 사용하여 유휴 상태에서 자동으로 암호화됩니다. 또한 AWS KMS 에 저장된 고객 \n관리형 키(CMK)를 사용하여 EBS 볼륨을 암호화하고 보호할 수 있습니다. 암호화된 EBS \n볼륨을 생성하고 EC2 인스턴스에 연결하여 볼륨에 기록된 모든 데이터가 유휴 상태에서 \n암호화되도록 할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 411,
    "question": "회사에 산발적인 사용 패턴을 가진 웹 애플리케이션이 있습니다. 매달 초에는 사용량이 \n많고, 매주 초에는 보통 사용량이 있으며, 주중에는 예측할 수 없는 사용량이 있습니다. 이 \n애플리케이션은 웹 서버와 데이터 센터 내에서 실행되는 MySQL 데이터베이스 서버로 \n구성됩니다. 이 회사는 애플리케이션을 AWS 클라우드로 이동하려고 하며 데이터베이스 \n수정이 필요하지 않은 비용 효율적인 데이터베이스 플랫폼을 선택해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon DynamoDB",
      "MySQL 용 Amazon RDS",
      "MySQL 호환 Amazon Aurora Serverless",
      "Auto Scaling 그룹의 Amazon EC2 에 배포된 MySQL"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102188-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon RDS for MySQL 은 클라우드에서 MySQL 배포를 쉽게 설정, 운영 및 확장할 수 \n있는 완전관리형 관계형 데이터베이스 서비스입니다. Amazon Aurora Serverless 는 Amazon \nAurora(MySQL \n호환 \n버전)에 \n대한 \n온디맨드 \n자동 \n확장 \n구성으로, \n데이터베이스가 \n애플리케이션의 요구 사항에 따라 자동으로 시작, 종료 및 용량 확장 또는 축소됩니다. \n간헐적이거나 예측할 수 없는 워크로드를 위한 간단하고 비용 효율적인 옵션입니다.",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 412,
    "question": "이미지 호스팅 회사는 객체를 Amazon S3 버킷에 저장합니다. 회사는 S3 버킷의 개체가 \n대중에게 우발적으로 노출되는 것을 방지하려고 합니다. 전체 AWS 계정의 모든 S3 객체는 \n비공개로 유지되어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon GuardDuty 를 사용하여 S3 버킷 정책을 모니터링합니다. AWS Lambda 함수를 \n사용하여 객체를 공개하는 변경 사항을 수정하는 자동 수정 작업 규칙을 생성합니다.",
      "AWS Trusted Advisor 를 사용하여 공개적으로 액세스 가능한 S3 버킷을 찾습니다. 변경 \n사항이 감지되면 Trusted Advisor\n에서 이메일 알림을 구성합니다. 퍼블릭 액세스를 \n허용하는 경우 S3 버킷 정책을 수동으로 변경합니다.",
      "AWS Resource Access Manager 를 사용하여 공개적으로 액세스 가능한 S3 버킷을 \n찾습니다. 변경이 감지되면 Amazon Simple Notification Service(Amazon SNS)를 사용하여 \nAWS Lambda 함수를 호출합니다. 프로그래밍 방식으로 변경 사항을 수정하는 Lambda \n함수를 배포합니다.",
      "계정 수준에서 S3 퍼블릭 액세스 차단 기능을 사용합니다. AWS Organizations 를 \n사용하여 IAM 사용자가 설정을 변경하지 못하도록 하는 서비스 제어 정책(SCP)을 \n생성합니다. 계정에 SCP 를 적용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102189-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nS3 퍼블릭 액세스 차단 기능을 사용하면 계정 내의 S3 버킷 및 객체에 대한 퍼블릭 \n액세스를 제한할 수 있습니다. 버킷 정책 설정에 관계없이 계정 수준에서 이 기능을 \n활성화하여 S3 버킷이 공개되지 않도록 할 수 있습니다. AWS Organizations 를 사용하여 \nIAM 사용자가 이 설정을 변경하지 못하도록 SCP(서비스 제어 정책)를 계정에 적용하여 \n모든 S3 객체가 비공개로 유지되도록 할 수 있습니다. 이는 최소한의 운영 오버헤드가 \n필요한 간단하고 효과적인 솔루션입니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 413,
    "question": "한 전자상거래 회사에서 사용자 트래픽이 증가하고 있습니다. 회사의 스토어는 웹 계층과 \n별도의 데이터베이스 계층으로 구성된 2\n계층 웹 애플리케이션으로 Amazon EC2 \n인스턴스에 배포됩니다. 트래픽이 증가함에 따라 회사는 아키텍처로 인해 사용자에게 \n적시에 마케팅 및 주문 확인 이메일을 보내는 데 상당한 지연이 발생하고 있음을 알게 \n\n=== PAGE 418 ===\n되었습니다. 이 회사는 복잡한 이메일 전송 문제를 해결하는 데 소요되는 시간을 줄이고 \n운영 오버헤드를 최소화하기를 원합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "이메일 처리 전용 EC2 인스턴스를 사용하여 별도의 애플리케이션 계층을 만듭니다.",
      "Amazon Simple Email Service(Amazon SES)를 통해 이메일을 보내도록 웹 인스턴스를 \n구성합니다.",
      "Amazon Simple Notification Service(Amazon SNS)를 통해 이메일을 보내도록 웹 \n인스턴스를 구성합니다.",
      "이메일 처리 전용 EC2 인스턴스를 사용하여 별도의 애플리케이션 계층을 생성합니다. \nAuto Scaling 그룹에 인스턴스를 배치합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102190-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon SES 는 기업이 자체 이메일 주소와 도메인을 사용하여 이메일을 보내고 받을 수 \n있도록 하는 비용 효율적이고 확장 가능한 이메일 서비스입니다. Amazon SES 를 통해 \n이메일을 보내도록 웹 인스턴스를 구성하는 것은 복잡한 이메일 전송 문제를 해결하는 데 \n소요되는 \n시간을 \n줄이고 \n운영 \n오버헤드를 \n최소화할 \n수 \n있는 \n간단하고 \n효과적인 \n솔루션입니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 414,
    "question": "회사에는 매일 수백 개의 보고서를 생성하는 비즈니스 시스템이 있습니다. 비즈니스 \n시스템은 보고서를 CSV 형식으로 네트워크 공유에 저장합니다. 회사는 분석을 위해 이 \n데이터를 거의 실시간으로 AWS 클라우드에 저장해야 합니다. \n최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS DataSync 를 사용하여 파일을 Amazon S3 로 전송합니다. 매일 끝날 때 실행되는 \n예약된 작업을 만듭니다.",
      "Amazon S3 파일 게이트웨이를 생성합니다. S3 파일 게이트웨이에서 새 네트워크 공유를 \n사용하도록 비즈니스 시스템을 업데이트합니다.",
      "AWS DataSync 를 사용하여 파일을 Amazon S3 로 전송합니다. 자동화 워크플로에서 \nDataSync API 를 사용하는 애플리케이션을 생성합니다.",
      "SFTP 용 AWS 전송 엔드포인트를 배포합니다. 네트워크 공유에서 새 파일을 확인하고 \nSFTP 를 사용하여 새 파일을 업로드하는 스크립트를 만듭니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/103452-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 415,
    "question": "회사에서 Amazon S3 Standard\n에 페타바이트 규모의 데이터를 저장하고 있습니다. \n데이터는 여러 S3 버킷에 저장되며 다양한 빈도로 액세스됩니다. 회사는 모든 데이터에 \n대한 액세스 패턴을 알지 못합니다. 회사는 S3 사용 비용을 최적화하기 위해 각 S3 버킷에 \n대한 솔루션을 구현해야 합니다. \n이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 버킷의 객체를 S3 Intelligent-Tiering 으로 전환하는 규칙으로 S3 수명 주기 구성을 \n생성합니다.",
      "S3 스토리지 클래스 분석 도구를 사용하여 S3 버킷의 각 객체에 대한 올바른 계층을 \n결정합니다. 각 개체를 식별된 스토리지 계층으로 이동합니다.",
      "S3 버킷의 객체를 S3 Glacier Instant Retrieval 로 전환하는 규칙으로 S3 수명 주기 \n구성을 생성합니다.",
      "S3 버킷의 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환하는 \n규칙으로 S3 수명 주기 구성을 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/103404-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 416,
    "question": "빠르게 성장하는 글로벌 전자상거래 회사는 AWS\n에서 웹 애플리케이션을 호스팅하고 \n있습니다. 웹 애플리케이션에는 정적 콘텐츠와 동적 콘텐츠가 포함됩니다. 웹사이트는 \nAmazon RDS 데이터베이스에 OLTP(온라인 거래 처리) 데이터를 저장합니다. 웹사이트 \n사용자의 페이지 로드 속도가 느립니다. \n이 문제를 해결하기 위해 솔루션 아키텍트가 취해야 할 조치 조합은 무엇입니까? (2 개 \n선택)",
    "options": [
      "Amazon Redshift 클러스터를 구성합니다.",
      "Amazon CloudFront 배포를 설정합니다.",
      "Amazon S3 에서 동적 웹 콘텐츠를 호스팅합니다.",
      "RDS DB 인스턴스에 대한 읽기 전용 복제본을 생성합니다.",
      "RDS DB 인스턴스에 대한 다중 AZ 배포를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/103423-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS 에서 호스팅되는 빠르게 성장하는 전자 상거래 웹 사이트의 느린 페이지 로드 문제를 \n해결하기 위해 솔루션 설계자는 다음 두 가지 조치를 취할 수 있습니다. \n1. Amazon CloudFront 배포 설정 \n2. RDS DB 인스턴스에 대한 읽기 전용 복제본 생성 \nAmazon Redshift 클러스터 구성은 Redshift 가 데이터 웨어하우징 서비스이고 일반적으로 \n대량 데이터의 분석 처리에 사용되기 때문에 이 문제와 관련이 없습니다. \nS3 는 웹 애플리케이션 서버가 아니라 객체 스토리지 서비스이기 때문에 Amazon S3 에서 \n동적 웹 콘텐츠를 호스팅해도 성능이 반드시 향상되는 것은 아닙니다. S3 는 정적 웹 \n콘텐츠를 호스팅하는 데 사용할 수 있지만 S3 는 서버 측 스크립팅 또는 처리를 지원하지 \n않기 때문에 동적 웹 콘텐츠를 호스팅하는 데 적합하지 않을 수 있습니다. \nRDS DB 인스턴스에 대해 다중 AZ 배포를 구성하면 고가용성이 향상되지만 반드시 성능이 \n향상되는 것은 아닙니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 417,
    "question": "회사는 Amazon EC2 \n인스턴스와 AWS Lambda 함수를 사용하여 \n애플리케이션을 \n실행합니다. 이 회사는 AWS 계정에 퍼블릭 서브넷과 프라이빗 서브넷이 있는 VPC 가 \n있습니다. \nEC2 \n인스턴스는 \nVPC \n중 \n하나의 \n프라이빗 \n서브넷에서 \n실행됩니다. \n애플리케이션이 작동하려면 Lambda 함수가 EC2 인스턴스에 대한 직접적인 네트워크 \n액세스가 필요합니다. \n응용 프로그램은 최소 1 년 동안 실행됩니다. 회사는 해당 시간 동안 애플리케이션이 \n사용하는 Lambda 함수의 수가 증가할 것으로 예상합니다. 회사는 모든 애플리케이션 \n리소스에 대한 절감 효과를 극대화하고 서비스 간의 네트워크 대기 시간을 낮게 유지하려고 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 Instance Savings Plan 구매 Lambda 함수의 지속 시간, 메모리 사용량 및 호출 \n수를 \n최적화합니다. \nEC2 \n인스턴스가 \n포함된 \n프라이빗 \n서브넷에 \nLambda \n함수를 \n연결합니다.",
      "EC2 Instance Savings Plan 구매 Lambda 함수의 기간 및 메모리 사용량, 호출 수 및 \n전송되는 데이터 양을 최적화합니다. EC2 인스턴스가 실행되는 동일한 VPC 의 퍼블릭 \n서브넷에 Lambda 함수를 연결합니다.",
      "Compute Savings Plan 을 구매합니다. Lambda 함수의 기간 및 메모리 사용량, 호출 수 \n\n=== PAGE 421 ===\n및 전송되는 데이터 양을 최적화합니다. EC2 인스턴스가 포함된 프라이빗 서브넷에 \nLambda 함수를 연결합니다.",
      "Compute Savings Plan 을 구매합니다. Lambda 함수의 기간 및 메모리 사용량, 호출 수 \n및 전송되는 데이터 양을 최적화합니다. Lambda 서비스 VPC\n에 Lambda 함수를 \n유지합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/103598-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nCompute Savings Plan 을 구매함으로써 회사는 EC2 인스턴스와 Lambda 기능을 모두 \n실행하는 비용을 절약할 수 있습니다. Lambda 함수는 AWS 서비스용 VPC 엔드포인트 또는 \nVPC 피어링 연결을 통해 EC2 인스턴스가 포함된 프라이빗 서브넷에 연결할 수 있습니다. \n이렇게 하면 사설 네트워크 내에서 트래픽을 유지하면서 EC2 인스턴스에 대한 직접 \n네트워크 액세스를 제공하여 네트워크 대기 시간을 최소화하는 데 도움이 됩니다. Lambda \n함수의 지속 시간, 메모리 사용량, 호출 수 및 전송된 데이터 양을 최적화하면 비용을 \n추가로 최소화하고 성능을 개선하는 데 도움이 될 수 있습니다. 또한 프라이빗 서브넷을 \n사용하면 보안 모범 사례인 퍼블릭 인터넷에서 EC2 인스턴스에 직접 액세스할 수 없도록 \n하는 데 도움이 됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 418,
    "question": "솔루션 아키텍트는 팀 구성원이 두 개의 다른 AWS 계정(개발 계정 및 프로덕션 계정)에서 \nAmazon S3 버킷에 액세스할 수 있도록 허용해야 합니다. 팀은 현재 계정에서 적절한 \n권한이 있는 IAM 그룹에 할당된 고유한 IAM 사용자를 사용하여 개발 계정의 S3 버킷에 \n액세스할 수 있습니다. \n솔루션 설계자는 프로덕션 계정에서 IAM 역할을 생성했습니다. 이 역할에는 프로덕션 \n계정의 S3 버킷에 대한 액세스 권한을 부여하는 정책이 있습니다. \n최소 권한 원칙을 준수하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "관리자 액세스 정책을 개발 계정 사용자에게 연결합니다.",
      "생산 계정에 있는 역할의 신뢰 정책에서 개발 계정을 주체로 추가합니다.",
      "프로덕션 계정의 S3 버킷에서 S3 퍼블릭 액세스 차단 기능을 끕니다.",
      "각 팀 구성원에 대해 고유한 자격 증명을 사용하여 프로덕션 계정에 사용자를 \n생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/103585-exam-aws-certified-sol",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 419,
    "question": "회사는 모든 기능이 활성화된 AWS Organizations 를 사용하고 ap-southeast-2 리전에서 \n여러 Amazon EC2 워크로드를 실행합니다. 회사에는 다른 리전에서 리소스가 생성되지 \n않도록 하는 SCP(서비스 제어 정책)가 있습니다. 보안 정책에 따라 회사는 유휴 상태의 \n모든 데이터를 암호화해야 합니다. \n감사 결과 직원이 볼륨을 암호화하지 않고 EC2 인스턴스용 Amazon Elastic Block \nStore(Amazon EBS) 볼륨을 생성한 것으로 확인되었습니다. 회사는 암호화된 EBS 볼륨을 \n사용하기 위해 모든 IAM 사용자 또는 루트 사용자가 ap-southeast-2 에서 시작하는 모든 \n새 EC2 인스턴스를 원합니다. 회사는 EBS 볼륨을 생성하는 직원에게 최소한의 영향을 \n미치는 솔루션을 원합니다. \n이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "Amazon EC2 콘솔에서 EBS 암호화 계정 속성을 선택하고 기본 암호화 키를 정의합니다.",
      "IAM 권한 경계를 생성합니다. 권한 경계를 루트 조직 단위(OU)에 연결합니다. \nec2:Encrypted 조건이 false\n인 경우 ec2:CreateVolume 작업을 거부하도록 경계를 \n정의합니다.",
      "SCP 를 생성합니다. 루트 조직 단위(OU)에 SCP 를 연결합니다. ec2:Encrypted 조건이 \nfalse 인 경우 ec2:CreateVolume 작업을 거부하도록 SCP 를 정의합니다.",
      "ec2:Encrypted 조건이 false 인 경우 ec2:CreateVolume 작업을 거부하도록 각 계정에 \n대한 IAM 정책을 업데이트합니다.",
      "조직 관리 계정에서 기본 EBS 볼륨 암호화 설정을 지정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109268-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n서비스 제어 정책(SCP)은 조직에서 권한을 관리하는 데 사용할 수 있는 정책 유형입니다. \nSCP 는 조직의 모든 계정에 대해 사용 가능한 최대 권한에 대한 중앙 제어를 제공하므로 \n계정이 조직의 액세스 제어 지침을 준수하도록 할 수 있습니다. \nec2:Encrypted 조건이 false 일 때 SCP 를 사용하여 ec2:CreateVolume 작업을 거부할 수 \n있습니다. 즉, 루트 OU 아래 계정의 모든 사용자 또는 역할은 암호화되지 않은 EBS \n볼륨을 생성할 수 없습니다. 이 솔루션은 필요에 따라 암호화된 볼륨을 계속 생성할 수 \n있으므로 EBS 볼륨을 생성하는 직원에게 최소한의 영향을 미칩니다. \n참조:",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 420,
    "question": "회사에서 Amazon RDS for PostgreSQL DB 클러스터를 사용하여 프로덕션 데이터베이스 \n워크로드에 대한 시간 소모적인 데이터베이스 관리 작업을 단순화하려고 합니다. 회사는 \n데이터베이스의 고가용성을 보장하고 대부분의 시나리오에서 40 초 이내에 자동 장애 조치 \n지원을 제공할 것입니다. 회사는 기본 인스턴스에서 읽기를 오프로드하고 비용을 가능한 한 \n낮게 유지하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon RDS 다중 AZ DB 인스턴스 배포를 사용합니다. 하나의 읽기 복제본을 만들고 \n읽기 워크로드를 읽기 복제본으로 지정합니다.",
      "Amazon RDS 다중 AZ DB 더스터 배포 사용 2 개의 읽기 전용 복제본을 생성하고 읽기 \n워크로드를 읽기 전용 복제본으로 지정합니다.",
      "Amazon RDS 다중 AZ DB 인스턴스 배포를 사용합니다. 읽기 워크로드가 다중 AZ 쌍의 \n보조 인스턴스를 가리키도록 합니다.",
      "Amazon RDS 다중 AZ DB 클러스터 배포 사용 읽기 워크로드를 리더 엔드포인트로 \n지정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109269-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 421,
    "question": "회사에서 고가용성 SFTP 서비스를 실행합니다. SFTP 서비스는 탄력적 IP 주소로 실행되는 \n두 개의 Amazon EC2 Linux 인스턴스를 사용하여 인터넷에서 신뢰할 수 있는 IP 소스의 \n트래픽을 허용합니다. SFTP 서비스는 인스턴스에 연결된 공유 스토리지에서 지원합니다. \n사용자 계정은 SFTP 서버에서 Linux 사용자로 생성되고 관리됩니다. \n회사는 높은 IOPS 성능과 고도로 구성 가능한 보안을 제공하는 서버리스 옵션을 원합니다. \n회사는 또한 사용자 권한에 대한 제어를 유지하기를 원합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. 신뢰할 수 있는 \nIP 주소만 허용하는 퍼블릭 엔드포인트로 AWS Transfer Family SFTP 서비스를 생성합니다. \nEBS 볼륨을 SFTP 서비스 엔드포인트에 연결합니다. 사용자에게 SFTP 서비스에 대한 \n액세스 권한을 부여합니다. \n\n=== PAGE 424 ===",
      "암호화된 Amazon Elastic File System(Amazon EFS) 볼륨을 생성합니다. 탄력적 IP \n주소와 인터넷 연결 액세스가 있는 VPC 엔드포인트를 사용하여 AWS Transfer Family SFTP \n서비스를 생성합니다. 신뢰할 수 있는 IP 주소만 허용하는 엔드포인트에 보안 그룹을 \n연결합니다. EFS 볼륨을 SFTP 서비스 엔드포인트에 연결합니다. 사용자에게 SFTP \n서비스에 대한 액세스 권한을 부여합니다.",
      "기본 암호화가 활성화된 Amazon S3 버킷을 생성합니다. 신뢰할 수 있는 IP 주소만 \n허용하는 퍼블릭 엔드포인트로 AWS Transfer Family SFTP 서비스를 생성합니다. S3 버킷을 \nSFTP 서비스 엔드포인트에 연결합니다. 사용자에게 SFTP 서비스에 대한 액세스 권한을 \n부여합니다.",
      "기본 암호화가 활성화된 Amazon S3 버킷을 생성합니다. 프라이빗 서브넷에서 내부 \n액세스 권한이 있는 VPC 엔드포인트로 AWS Transfer Family SFTP 서비스를 생성합니다. \n신뢰할 수 있는 IP 주소만 허용하는 보안 그룹을 연결합니다. S3 버킷을 SFTP 서비스 \n엔드포인트에 연결합니다. 사용자에게 SFTP 서비스에 대한 액세스 권한을 부여합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109270-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 422,
    "question": "한 회사가 AWS 에서 새로운 기계 학습(ML) 모델 솔루션을 개발하고 있습니다. 모델은 시작 \n시 Amazon S3\n에서 약 1GB 의 모델 데이터를 가져와 메모리에 로드하는 독립적인 \n마이크로서비스로 개발됩니다. 사용자는 비동기 API 를 통해 모델에 액세스합니다. 사용자는 \n요청 또는 요청 배치를 보내고 결과를 보낼 위치를 지정할 수 있습니다. \n회사는 수백 명의 사용자에게 모델을 제공합니다. 모델의 사용 패턴이 불규칙합니다. 일부 \n모델은 며칠 또는 몇 주 동안 사용하지 않을 수 있습니다. 다른 모델은 한 번에 수천 개의 \n요청 배치를 수신할 수 있습니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 디자인을 권장해야 합니까?",
    "options": [
      "API 의 요청을 Network Load Balancer(NLB)로 보냅니다. NLB 에서 호출하는 AWS \nLambda 함수로 모델을 배포합니다.",
      "API 의 요청을 Application Load Balancer(ALB)로 보냅니다. Amazon Simple Queue \nService(Amazon SQS) 대기열에서 읽는 Amazon Elastic Container Service(Amazon ECS) \n서비스로 모델을 배포합니다. AWS App Mesh 를 사용하여 SQS 대기열 크기에 따라 ECS \n클러스터의 인스턴스를 확장합니다.",
      "API 의 요청을 Amazon Simple Queue Service(Amazon SQS) 대기열로 보냅니다. SQS \n이벤트에 의해 호출되는 AWS Lambda 함수로 모델을 배포합니다. AWS Auto Scaling 을 \n사용하여 SQS 대기열 크기에 따라 Lambda 함수의 vCPU 수를 늘립니다. \n\n=== PAGE 425 ===",
      "API 의 요청을 Amazon Simple Queue Service(Amazon SQS) 대기열로 보냅니다. \n대기열에서 읽는 Amazon Elastic Container Service(Amazon ECS) 서비스로 모델을 \n배포합니다. 대기열 크기에 따라 서비스의 클러스터와 복사본 모두에 대해 Amazon \nECS 에서 AWS Auto Scaling 을 활성화합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109280-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 불규칙하고 예측할 수 없는 사용 패턴을 처리할 수 있는 독립적인 마이크로 \n서비스로 ML 모델을 실행하기 위한 요구 사항을 충족하기 때문에 정확합니다. API 의 \n요청을 Amazon SQS 대기열로 보내면 회사는 모델 실행에서 요청 처리를 분리하고 수요 \n급증으로 인해 요청이 손실되지 않도록 할 수 있습니다. 대기열에서 읽는 Amazon ECS \n서비스로 모델을 배포함으로써 회사는 컨테이너를 활용하여 각 모델을 마이크로 서비스로 \n격리 및 패키징하고 시작 시 S3 에서 모델 데이터를 가져올 수 있습니다. 대기열 크기에 \n따라 서비스의 클러스터와 복사본 모두에 대해 Amazon ECS 에서 AWS Auto Scaling 을 \n활성화함으로써 회사는 클러스터의 EC2 인스턴스 수와 각 서비스의 작업 수를 성능을 \n요구하고 최적화합니다. \n \n참조: \n\ndocs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welc\nome.html \n\ndocs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html \n\ndocs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-ecs.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 423,
    "question": "솔루션 설계자는 다음 JSON 텍스트를 자격 증명 기반 정책으로 사용하여 특정 권한을 \n부여하려고 합니다. \n\n=== PAGE 426 ===\n \n솔루션 설계자가 이 정책을 연결할 수 있는 IAM 보안 주체는 무엇입니까? (2 개 선택)",
    "options": [
      "역할(Role)",
      "그룹(Group)",
      "조직(Organization)",
      "Amazon Elastic Container Service(Amazon ECS) 리소스(resource)",
      "Amazon EC2 리소스(resource)"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109281-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 424,
    "question": "회사는 Amazon EC2 온디맨드 인스턴스에서 사용자 지정 애플리케이션을 실행하고 \n있습니다. 애플리케이션에는 하루 24 시간, 주 7 일 실행해야 하는 프런트엔드 노드와 \n워크로드에 따라 짧은 시간 동안만 실행해야 하는 백엔드 노드가 있습니다. 백엔드 노드의 \n수는 하루 동안 다양합니다. \n회사는 워크로드에 따라 더 많은 인스턴스를 확장 및 확장해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "프런트엔드 노드에는 예약 인스턴스를 사용합니다. 백엔드 노드에 AWS Fargate 를 \n사용합니다.",
      "프런트엔드 노드에 예약 인스턴스를 사용합니다. 백엔드 노드에 스팟 인스턴스를 \n사용합니다.",
      "프런트엔드 노드에 스팟 인스턴스를 사용합니다. 백엔드 노드에 예약 인스턴스를 \n사용합니다.",
      "프런트엔드 노드에 스팟 인스턴스를 사용합니다. 백엔드 노드에 AWS Fargate\n를 \n사용합니다. \n\n=== PAGE 427 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109283-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 425,
    "question": "회사는 높은 블록 스토리지 용량을 사용하여 온프레미스에서 워크로드를 실행합니다. \n회사의 일일 최대 입력 및 초당 출력 트랜잭션은 15,000 IOPS 를 넘지 않습니다. 이 회사는 \n워크로드를 Amazon EC2 로 마이그레이션하고 스토리지 용량과 독립적으로 디스크 성능을 \n프로비저닝하려고 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 Amazon Elastic Block Store(Amazon \nEBS) 볼륨 유형은 무엇입니까?",
    "options": [
      "GP2 볼륨 유형",
      "io2 볼륨 유형",
      "GP3 볼륨 유형",
      "io1 볼륨 유형"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109282-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 기존 데이터를 AWS 로 안전하게 마이그레이션하는 요구 사항을 충족하고 새로운 \n규정을 충족하기 때문에 정답입니다. AWS DataSync 는 온프레미스 스토리지와 Amazon S3 \n간에 대량의 데이터를 온라인으로 쉽게 이동할 수 있게 해주는 서비스입니다. DataSync 는 \n전송 중인 데이터를 자동으로 암호화하고 전송 중에 데이터 무결성을 확인합니다. AWS \nCloudTrail 은 계정에 대한 AWS API 호출을 기록하고 로그 파일을 Amazon S3 에 전달하는 \n서비스입니다. CloudTrail 은 S3 객체 수준 API 활동과 같이 AWS 계정의 리소스에서 또는 \n리소스 내에서 수행된 리소스 작업을 보여주는 데이터 이벤트를 기록할 수 있습니다. \nCloudTrail 을 사용하여 데이터 이벤트를 기록하면 저장된 데이터의 모든 수준에서 액세스를 \n감사할 수 있습니다. \n \n참조: \n\ndocs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html \n\ndocs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-withcl\noudtrail.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  }
];