export const quizData = [
  {
    "id": 526,
    "question": "솔루션 설계자가 애플리케이션의 복원력을 검토하고 있습니다. 솔루션 설계자는 최근에 \n데이터베이스 관리자가 확장 연습의 일부로 애플리케이션의 Amazon Aurora PostgreSQL \n데이터베이스 작성자 인스턴스를 장애 조치했음을 확인했습니다. 장애 조치로 인해 \n애플리케이션에 3 분의 다운타임이 발생했습니다. \n최소한의 운영 오버헤드로 확장 연습의 중단 시간을 줄이는 솔루션은 무엇입니까?",
    "options": [
      "장애 조치 중 로드를 처리하기 위해 클러스터에서 더 많은 Aurora PostgreSQL 읽기 \n전용 복제본을 생성합니다.",
      "동일한 AWS 리전에서 보조 Aurora PostgreSQL 클러스터를 설정합니다. 장애 조치 중에 \n보조 클러스터의 작성자 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다.",
      "장애 조치 중 로드를 처리할 Amazon ElastiCache for Memcached 클러스터를 \n생성합니다.",
      "데이터베이스에 대한 Amazon RDS 프록시를 설정합니다. 프록시 엔드포인트를 \n사용하도록 애플리케이션을 업데이트합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/111245-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 527,
    "question": "한 회사에 단일 AWS 리전에서 실행되는 리전 구독 기반 스트리밍 서비스가 있습니다. \n아키텍처는 Amazon EC2 인스턴스의 웹 서버와 애플리케이션 서버로 구성됩니다. EC2 \n인스턴스는 Elastic Load Balancer 뒤의 Auto Scaling 그룹에 있습니다. 아키텍처에는 여러 \n가용 영역에 걸쳐 확장되는 Amazon Aurora 글로벌 데이터베이스 클러스터가 포함됩니다. \n이 회사는 전 세계적으로 확장하고 응용 프로그램의 가동 중지 시간을 최소화하기를 \n원합니다. \n어떤 솔루션이 가장 내결함성을 제공합니까?",
    "options": [
      "웹 계층 및 애플리케이션 계층에 대한 Auto Scaling 그룹을 확장하여 두 번째 리전의 \n가용 영역에 인스턴스를 배포합니다. Aurora 글로벌 데이터베이스를 사용하여 기본 리전과 \n두 번째 리전에 데이터베이스를 배포합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 \n함께 Amazon Route 53 상태 확인을 사용합니다.",
      "웹 계층과 애플리케이션 계층을 두 번째 리전에 배포합니다. 두 번째 리전에 Aurora \n\n=== PAGE 508 ===\nPostgreSQL 교차 리전 Aurora 복제본을 추가합니다. 두 번째 리전에 대한 장애 조치 \n라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다. 필요에 따라 보조를 \n기본으로 승격합니다.",
      "웹 계층과 애플리케이션 계층을 두 번째 리전에 배포합니다. 두 번째 리전에서 Aurora \nPostgreSQL 데이터베이스를 생성합니다. AWS Database Migration Service(AWS DMS)를 \n사용하여 기본 데이터베이스를 두 번째 리전에 복제합니다. 두 번째 리전에 대한 장애 조치 \n라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다.",
      "웹 계층과 애플리케이션 계층을 두 번째 지역에 배포합니다. Amazon Aurora 글로벌 \n데이터베이스를 사용하여 기본 리전과 두 번째 리전에 데이터베이스를 배포합니다. 두 번째 \n리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다. \n필요에 따라 보조를 기본으로 승격합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/111428-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 옵션은 애플리케이션에 고가용성과 중복성을 제공하는 두 번째 리전에 웹 계층과 \n애플리케이션 \n계층을 \n배포하기 \n때문에 \n가장 \n효율적입니다. \n또한 \n단일 \nAurora \n데이터베이스가 여러 AWS 지역에 걸쳐 있을 수 있도록 하는 기능인 Amazon Aurora \n글로벌 데이터베이스를 사용합니다. 또한 기본 지역과 두 번째 지역에 데이터베이스를 \n배포하여 지연 시간이 짧은 글로벌 읽기 및 지역 중단 시 빠른 복구를 제공합니다. 또한 두 \n번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용하여 \n다른 리전의 정상적인 엔드포인트로 트래픽을 라우팅하여 데이터 보호를 제공합니다. 또한 \n필요에 따라 보조를 기본으로 승격하여 한 번에 리전 중 하나에서 쓰기 작업을 허용하여 \n데이터 일관성을 제공합니다. 이 솔루션은 전 세계적으로 확장하고 해당 애플리케이션의 \n다운타임을 최소화해야 한다는 요구 사항을 충족합니다. \n \n옵션 A 는 웹 계층 및 애플리케이션 계층에 대한 Auto Scaling 그룹을 확장하여 두 번째 \n리전의 가용 영역에 인스턴스를 배포하기 때문에 효율성이 떨어집니다. 이렇게 하면 별도로 \n배포하는 것보다 더 높은 비용과 복잡성이 발생할 수 있습니다. 또한 Aurora 글로벌 \n데이터베이스를 사용하여 기본 리전과 두 번째 리전에 데이터베이스를 배포합니다. 이는 \n맞습니다. 그러나 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 \n상태 확인을 사용하지 않으므로 트래픽이 비정상 엔드포인트로 라우팅될 수 있습니다. \n \n옵션 B\n는 웹 계층과 애플리케이션 계층을 올바른 두 번째 리전에 배포하기 때문에 \n효율성이 떨어집니다. 또한 두 번째 리전에 Aurora PostgreSQL 교차 리전 Aurora 복제본을",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 528,
    "question": "데이터 분석 회사에서 일괄 처리 시스템을 AWS 로 마이그레이션하려고 합니다. 회사는 \nFTP 를 통해 하루 동안 주기적으로 수천 개의 작은 데이터 파일을 받습니다. 온프레미스 \n배치 작업은 밤새 데이터 파일을 처리합니다. 그러나 배치 작업 실행을 완료하는 데 몇 \n시간이 걸립니다. \n회사는 AWS 솔루션이 파일을 전송하는 FTP 클라이언트에 대한 변경을 최소화하면서 \n가능한 한 빨리 수신 데이터 파일을 처리하기를 원합니다. 파일이 성공적으로 처리된 후 \n솔루션은 수신 데이터 파일을 삭제해야 합니다. 각 파일을 처리하는 데 3~8\n분이 \n소요됩니다. \n운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "FTP 서버를 실행하는 Amazon EC2 인스턴스를 사용하여 수신 파일을 Amazon S3 \nGlacier Flexible Retrieval 의 객체로 저장합니다. AWS Batch 에서 작업 대기열을 구성합니다. \nAmazon EventBridge 규칙을 사용하여 S3 Glacier Flexible Retrieval 에서 야간에 객체를 \n처리하는 작업을 호출합니다. 작업이 개체를 처리한 후 개체를 삭제합니다.",
      "FTP 서버를 실행하는 Amazon EC2 인스턴스를 사용하여 수신 파일을 Amazon Elastic \nBlock Store(Amazon EBS) 볼륨에 저장합니다. AWS Batch 에서 작업 대기열을 구성합니다. \nAmazon EventBridge 규칙을 사용하여 EBS 볼륨에서 야간에 파일을 처리하는 작업을 \n호출합니다. 작업이 파일을 처리한 후 파일을 삭제합니다. \n\n=== PAGE 510 ===",
      "AWS Transfer Family 를 사용하여 들어오는 파일을 Amazon Elastic Block Store(Amazon \nEBS) 볼륨에 저장할 FTP 서버를 생성합니다. AWS Batch 에서 작업 대기열을 구성합니다. \n각 파일이 도착하면 Amazon S3 이벤트 알림을 사용하여 AWS Batch\n에서 작업을 \n호출합니다. 작업이 파일을 처리한 후 파일을 삭제합니다.",
      "AWS Transfer Family 를 사용하여 Amazon S3 Standard 에 수신 파일을 저장할 FTP \n서버를 생성합니다. 파일을 처리하고 처리 후 파일을 삭제하는 AWS Lambda 함수를 \n생성합니다. 파일이 도착하면 S3 이벤트 알림을 사용하여 Lambda 함수를 호출합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/111317-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 옵션은 AWS Transfer Family 를 사용하여 저비용 고가용성 스토리지 서비스인 Amazon \nS3 Standard 에 수신 파일을 저장할 수 있는 FTP 서버를 생성하기 때문에 운영상 가장 \n효율적입니다. 또한 AWS Lambda 를 사용하여 파일을 처리하고 처리 후 삭제합니다. 이는 \n배치 스케줄링이나 인프라 관리가 필요하지 않은 확장 가능한 서버리스 솔루션입니다. 또한 \nS3 이벤트 알림을 사용하여 파일이 도착하면 Lambda 함수를 호출하여 수신 데이터 파일을 \n거의 실시간으로 처리할 수 있습니다. \n \n옵션 A 는 Amazon S3 Standard 보다 검색 비용이 높고 검색 시간이 긴 콜드 스토리지 \n클래스인 Amazon S3 Glacier Flexible Retrieval 을 사용하기 때문에 효율성이 떨어집니다. \n또한 EventBridge 규칙을 사용하여 야간에 작업을 호출하므로 들어오는 데이터 파일을 \n가능한 한 빨리 처리해야 한다는 요구 사항을 충족하지 않습니다. \n \n옵션 B 는 EBS 볼륨을 사용하여 수신 파일을 저장하기 때문에 효율성이 떨어집니다. 이는 \nAmazon S3\n보다 비용이 높고 내구성이 낮은 블록 스토리지 서비스입니다. 또한 \nEventBridge 규칙을 사용하여 야간에 작업을 호출하므로 들어오는 데이터 파일을 가능한 \n한 빨리 처리해야 한다는 요구 사항을 충족하지 않습니다. \n \n옵션 C 는 EBS 볼륨을 사용하여 수신 파일을 저장하기 때문에 효율성이 떨어집니다. 이는 \nAmazon S3 보다 비용이 높고 내구성이 낮은 블록 스토리지 서비스입니다. 또한 AWS \nBatch 를 사용하여 파일을 처리하므로 컴퓨팅 리소스와 작업 대기열을 관리해야 합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 529,
    "question": "회사에서 워크로드를 AWS 로 마이그레이션하고 있습니다. 회사는 데이터베이스에 거래 및 \n\n=== PAGE 511 ===\n민감한 데이터를 가지고 있습니다. 이 회사는 AWS 클라우드 솔루션을 사용하여 보안을 \n강화하고 데이터베이스의 운영 오버헤드를 줄이려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "데이터베이스를 Amazon EC2 로 마이그레이션합니다. 암호화에 AWS Key Management \nService(AWS KMS) AWS 관리형 키를 사용합니다.",
      "데이터베이스를 Amazon RDS 로 마이그레이션 유휴 암호화 구성.",
      "데이터를 Amazon S3 로 마이그레이션합니다. 데이터 보안 및 보호를 위해 Amazon \nMacie 를 사용합니다.",
      "데이터베이스를 Amazon RDS 로 마이그레이션합니다. 데이터 보안 및 보호를 위해 \nAmazon CloudWatch Logs 를 사용하십시오."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/111246-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 530,
    "question": "회사에 TCP 및 UDP 멀티플레이어 게임 기능이 있는 온라인 게임 응용 프로그램이 \n있습니다. 이 회사는 Amazon Route 53 을 사용하여 애플리케이션 트래픽이 서로 다른 AWS \n리전에 있는 여러 NLB(Network Load Balancer)를 가리키도록 합니다. 회사는 사용자 \n증가에 대비하여 애플리케이션 성능을 개선하고 온라인 게임의 지연 시간을 줄여야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "NLB 앞에 Amazon CloudFront 배포를 추가합니다. Cache-Control max-age 매개변수를 \n늘리십시오.",
      "NLB\n를 ALB(Application Load Balancer)로 교체합니다. 지연 시간 기반 라우팅을 \n사용하도록 Route 53 을 구성합니다.",
      "NLB 앞에 AWS Global Accelerator 를 추가합니다. 올바른 수신기 포트를 사용하도록 \nGlobal Accelerator 끝점을 구성합니다.",
      "NLB 뒤에 Amazon API Gateway 엔드포인트를 추가합니다. API 캐싱을 활성화합니다. \n다른 단계에 대한 메서드 캐싱을 재정의합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/111271-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 531,
    "question": "회사는 타사 데이터 피드와 통합해야 합니다. 데이터 피드는 웹후크를 보내 새 데이터를 \n\n=== PAGE 512 ===\n사용할 준비가 되면 외부 서비스에 알립니다. 개발자는 회사에서 웹후크 콜백을 수신할 때 \n데이터를 검색하는 AWS Lambda 함수를 작성했습니다. 개발자는 제3 자가 호출할 수 \n있도록 Lambda 함수를 제공해야 합니다. \n이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Lambda 함수에 대한 함수 URL 을 생성합니다. Webhook 에 대한 Lambda 함수 URL 을 \n타사에 제공합니다.",
      "Lambda 함수 앞에 ALB(Application Load Balancer)를 배포합니다. Webhook 에 대한 \nALB URL 을 타사에 제공합니다.",
      "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. Lambda 함수에 \n주제를 연결합니다. Webhook 에 대한 제3 자에게 SNS 주제의 공개 호스트 이름을 \n제공합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 대기열을 Lambda \n함수에 연결합니다. Webhook\n에 대해 타사에 SQS 대기열의 공개 호스트 이름을 \n제공합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111430-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n함수 URL 은 HTTPS 를 통해 함수를 호출하는 데 사용할 수 있는 Lambda 함수의 고유 \n식별자입니다. 함수가 배포된 AWS 리전의 API 엔드포인트와 function1\n의 이름 또는 \nARN 으로 구성됩니다. Lambda 함수에 대한 함수 URL 을 생성함으로써 솔루션은 제3 자가 \nLambda 함수를 가장 효율적으로 호출할 수 있도록 할 수 있습니다. \n1. Lambda 함수 앞에 Application Load Balancer(ALB)를 배포합니다. Webhook 에 대한 \nALB URL 을 타사에 제공합니다. 이 솔루션은 HTTPS 를 통해 Lambda 함수를 호출하는 데 \n필요하지 않은 추가 리소스(ALB)를 생성하고 관리하기 때문에 최고의 운영 효율성 요구 \n사항을 충족하지 않습니다. \n2. Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. Lambda 함수에 \n주제를 연결합니다. Webhook 에 대한 제3 자에게 SNS 주제의 공개 호스트 이름을 \n제공합니다. Amazon SNS 주제에는 웹훅으로 사용할 수 있는 공개 호스트 이름이 없기 \n때문에 이 솔루션은 작동하지 않습니다. SNS 주제는 외부 소스로부터 메시지를 받는 것이 \n아니라 구독자에게 메시지를 게시하는 데 사용됩니다. \n3. Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 대기열을 Lambda \n함수에 연결합니다. Webhook\n에 대해 타사에 SQS 대기열의 공개 호스트 이름을 \n제공합니다. Amazon SQS 대기열에는 웹훅으로 사용할 수 있는 공개 호스트 이름이 없기 \n때문에 이 솔루션은 작동하지 않습니다. SQS 대기열은 외부 소스에서 메시지를 수신하는",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 532,
    "question": "회사는 AWS 리전에 워크로드가 있습니다. 고객은 Amazon API Gateway REST API 를 \n사용하여 워크로드에 연결하고 액세스합니다. 이 회사는 Amazon Route 53\n을 DNS \n공급자로 사용합니다. 회사는 모든 고객에게 개별적이고 안전한 URL 을 제공하고자 합니다. \n가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3 개 \n선택)",
    "options": [
      "등록기관에 필요한 도메인을 등록합니다. Route 53 호스팅 영역에서 와일드카드 사용자 \n지정 도메인 이름을 생성하고 API 게이트웨이 엔드포인트를 가리키는 영역에 기록합니다.",
      "다른 리전에 있는 AWS Certificate Manager(ACM)의 도메인과 일치하는 와일드카드 \n인증서를 요청합니다.",
      "Route 53 에서 필요에 따라 각 고객에 대한 호스팅 영역을 생성합니다. API 게이트웨이 \n엔드포인트를 가리키는 영역 레코드를 생성합니다.",
      "동일한 리전의 AWS Certificate Manager(ACM)에서 사용자 지정 도메인 이름과 일치하는 \n와일드카드 인증서를 요청합니다.",
      "API Gateway 에서 각 고객에 대해 여러 API 끝점을 만듭니다.",
      "API Gateway 에서 REST API 용 사용자 정의 도메인 이름을 생성합니다. AWS Certificate \nManager(ACM)에서 인증서를 가져옵니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111382-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAPI Gateway REST API 를 사용하는 모든 고객에게 개별 보안 URL 을 제공하려면 다음 \n단계를 수행해야 합니다. \n \na) 등록 기관에 필요한 도메인을 등록합니다. Route 53 호스팅 영역에서 와일드카드 사용자 \n지정 도메인 이름을 생성하고 API 게이트웨이 엔드포인트를 가리키는 영역에 기록합니다. \n이 단계를 통해 API Gateway 에서 생성한 기본 도메인 이름 대신 API 에 대한 사용자 지정 \n도메인 이름을 사용할 수 있습니다. 와일드카드 사용자 지정 도메인 이름은 도메인 이름 \n아래의 모든 하위 도메인(예: customer1.example.com 또는 customer2.example.com)을 \n사용하여 API 에 액세스할 수 있음을 의미합니다. 도메인 이름을 등록 대행자(예: Route 53",
    "glossary": {
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 533,
    "question": "회사는 Amazon S3\n에 데이터를 저장합니다. 규정에 따르면 데이터에는 개인 식별 \n정보(PII)가 포함되어서는 안 됩니다. 이 회사는 최근 S3 버킷에 PII 가 포함된 일부 개체가 \n있음을 발견했습니다. 회사는 S3 버킷에서 PII 를 자동으로 감지하고 회사의 보안 팀에 \n알려야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Macie 를 사용하십시오. Amazon EventBridge 규칙을 생성하여 Macie 결과에서 \nSensitiveData \n이벤트 \n유형을 필터링하고 보안 팀에 Amazon Simple Notification \nService(Amazon SNS) 알림을 보냅니다.",
      "Amazon GuardDuty\n를 사용합니다. GuardDuty 결과에서 중요한 이벤트 유형을 \n필터링하고 보안 팀에 Amazon Simple Notification Service(Amazon SNS) 알림을 보내는 \nAmazon EventBridge 규칙을 생성합니다.",
      "Amazon Macie 를 사용합니다. Amazon EventBridge 규칙을 생성하여 Macie 결과에서 \nSensitiveData:S3Object/Personal 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple \nQueue Service(Amazon SQS) 알림을 보냅니다.",
      "Amazon GuardDuty\n를 사용합니다. GuardDuty 결과에서 중요한 이벤트 유형을 \n필터링하고 보안 팀에 Amazon Simple Queue Service(Amazon SQS) 알림을 보내는 \n\n=== PAGE 515 ===\nAmazon EventBridge 규칙을 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111432-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon Macie 는 또한 다양한 소스의 데이터를 사용하여 애플리케이션을 쉽게 연결할 수 \n있게 해주는 서버리스 이벤트 버스인 Amazon EventBridge 로 결과를 보낼 수 있습니다. \nMacie 결과에서 SensitiveData 이벤트 유형을 필터링하고 보안 팀에 Amazon SNS 알림을 \n보내는 EventBridge 규칙을 생성할 수 있습니다. Amazon SNS\n는 구독자 또는 다른 \n애플리케이션에 메시지를 보낼 수 있는 완전 관리형 메시징 서비스입니다. \n참조: \n\ndocs.aws.amazon.com/macie/latest/userguide/macie-findings.html#macie-findin\ngseventbridge",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스"
    }
  },
  {
    "id": 534,
    "question": "회사에서 여러 AWS 계정에 대한 로깅 솔루션을 구축하려고 합니다. 회사는 현재 모든 \n계정의 로그를 중앙 집중식 계정에 저장합니다. 회사는 VPC 흐름 로그와 AWS CloudTrail \n로그를 저장하기 위해 중앙 집중식 계정에 Amazon S3 버킷을 생성했습니다. 모든 로그는 \n빈번한 분석을 위해 30 일 동안 가용성이 높아야 하며, 백업 목적으로 추가 60 일 동안 \n유지되고 생성 후 90 일 후에 삭제되어야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "생성 후 30 일이 지나면 객체를 S3 Standard 스토리지 클래스로 전환합니다. 90 일 후에 \n객체를 삭제하도록 Amazon S3 에 지시하는 만료 작업을 작성합니다.",
      "생성 후 30 일이 지나면 객체를 S3 Standard-Infrequent Access(S3 Standard-IA) \n스토리지 클래스로 전환합니다. 90 일 후에 모든 객체를 S3 Glacier Flexible Retrieval \n스토리지 클래스로 이동합니다. 90 일 후에 객체를 삭제하도록 Amazon S3 에 지시하는 만료 \n작업을 작성합니다.",
      "생성 후 30 일이 지나면 객체를 S3 Glacier Flexible Retrieval 스토리지 클래스로 \n전환합니다. 90\n일 후에 객체를 삭제하도록 Amazon S3\n에 지시하는 만료 작업을 \n작성합니다.",
      "생성 후 30 일이 지나면 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA) \n스토리지 클래스로 전환합니다. 90 일 후에 모든 객체를 S3 Glacier Flexible Retrieval \n스토리지 클래스로 이동합니다. 90 일 후에 객체를 삭제하도록 Amazon S3 에 지시하는 만료 \n작업을 작성합니다. \n\n=== PAGE 516 ==="
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/111434-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 535,
    "question": "회사에서 워크로드를 위해 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 \n구축하고 있습니다. Amazon EKS\n에 저장되는 모든 암호는 Kubernetes etcd 키-값 \n저장소에서 암호화되어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "새 AWS Key Management Service(AWS KMS) 키를 생성합니다. AWS Secrets Manager 를 \n사용하여 Amazon EKS 에서 모든 비밀을 관리, 교체 및 저장하십시오.",
      "새 AWS Key Management Service(AWS KMS) 키를 생성합니다. Amazon EKS \n클러스터에서 Amazon EKS KMS 비밀 암호화를 활성화합니다.",
      "기본 옵션으로 \nAmazon EKS \n클러스터를 생성합니다. Amazon Elastic Block \nStore(Amazon \nEBS) \nCSI(Container \nStorage \nInterface) \n드라이버를 \n추가 \n기능으로 \n사용합니다.",
      "alias/aws/ebs 별칭으로 새 AWS Key Management Service(AWS KMS) 키를 생성합니다. \n계정에 대해 기본 Amazon Elastic Block Store(Amazon EBS) 볼륨 암호화를 활성화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/111385-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 536,
    "question": "회사에서 PostgreSQL 데이터베이스용 Amazon RDS 프로덕션에 대한 거의 실시간에 \n가까운 읽기 전용 액세스 권한을 데이터 과학자에게 제공하려고 합니다. 데이터베이스는 \n현재 \n단일 \nAZ \n데이터베이스로 \n구성되어 \n있습니다. \n데이터 \n과학자는 \n프로덕션 \n데이터베이스에 영향을 미치지 않는 복잡한 쿼리를 사용합니다. 회사는 가용성이 높은 \n솔루션이 필요합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "유지 관리 기간에 기존 프로덕션 데이터베이스를 확장하여 데이터 과학자에게 충분한 \n성능을 제공합니다.",
      "단일 AZ 에서 더 큰 보조 대기 인스턴스가 있는 다중 AZ 인스턴스 배포로 설정을 \n변경합니다. 데이터 과학자에게 보조 인스턴스에 대한 액세스 권한을 제공합니다.",
      "단일 AZ 에서 다중 AZ 인스턴스 배포로 설정을 변경합니다. 데이터 과학자를 위한 두 \n\n=== PAGE 517 ===\n개의 추가 읽기 복제본을 제공합니다.",
      "단일 AZ 에서 2 개의 읽기 가능한 대기 인스턴스가 있는 다중 AZ 클러스터 배포로 \n설정을 변경합니다. 데이터 과학자에게 읽기 엔드포인트를 제공합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/111435-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 537,
    "question": "한 회사가 3 개의 가용 영역에서 작동하는 AWS 클라우드에서 3 계층 웹 애플리케이션을 \n실행합니다. 애플리케이션 아키텍처에는 Application Load Balancer, 사용자 세션 상태를 \n호스팅하는 Amazon EC2 웹 서버, EC2 인스턴스에서 실행되는 MySQL 데이터베이스가 \n있습니다. 회사는 애플리케이션 트래픽이 갑자기 증가할 것으로 예상합니다. 이 회사는 \n미래의 애플리케이션 용량 수요를 충족하고 3\n개의 가용 영역 모두에서 고가용성을 \n보장하기 위해 확장할 수 있기를 원합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "다중 AZ DB 클러스터 배포를 통해 MySQL 데이터베이스를 MySQL 용 Amazon RDS 로 \n마이그레이션합니다. 고가용성 Redis 용 Amazon ElastiCache 를 사용하여 세션 데이터를 \n저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 \n서버를 마이그레이션합니다.",
      "다중 AZ DB 클러스터 배포를 통해 MySQL 데이터베이스를 MySQL 용 Amazon RDS 로 \n마이그레이션합니다. 고가용성 Memcached 용 Amazon ElastiCache 를 사용하여 세션 \n데이터를 저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 \n웹 서버를 마이그레이션합니다.",
      "MySQL \n데이터베이스를 \nAmazon \nDynamoDB\n로 \n마이그레이션 \nDynamoDB \nAccelerator(DAX)를 사용하여 읽기를 캐시합니다. DynamoDB 에 세션 데이터를 저장합니다. \n세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다.",
      "단일 \n가용 \n영역에서 \nMySQL \n데이터베이스를 \nMySQL\n용 \nAmazon \nRDS\n로 \n마이그레이션합니다. 고가용성 Redis 용 Amazon ElastiCache 를 사용하여 세션 데이터를 \n저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 \n서버를 마이그레이션합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111386-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 538,
    "question": "글로벌 비디오 스트리밍 회사는 Amazon CloudFront 를 콘텐츠 배포 네트워크(CDN)로 \n사용합니다. 회사는 여러 국가에 단계적으로 콘텐츠를 배포하려고 합니다. 회사는 회사가 \n콘텐츠를 배포하는 국가 밖에 있는 시청자가 콘텐츠를 볼 수 없도록 해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "허용 목록을 사용하여 CloudFront 의 콘텐츠에 지리적 제한을 추가합니다. 사용자 지정 \n오류 메시지를 설정합니다.",
      "제한된 콘텐츠에 대한 새로운 URL 을 설정합니다. 서명된 URL 및 쿠키를 사용하여 \n액세스 권한을 부여합니다. 사용자 지정 오류 메시지를 설정합니다.",
      "회사가 배포하는 콘텐츠에 대한 데이터를 암호화합니다. 사용자 지정 오류 메시지를 \n설정합니다.",
      "제한된 콘텐츠에 대한 새 URL 을 만듭니다. 서명된 URL 에 대한 시간 제한 액세스 \n정책을 설정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111387-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 539,
    "question": "=== PAGE 519 ===\n회사에서 AWS 클라우드를 사용하여 온프레미스 DR(재해 복구) 구성을 개선하려고 합니다. \n회사의 핵심 프로덕션 비즈니스 애플리케이션은 가상 머신(VM)에서 실행되는 Microsoft \nSQL Server Standard\n를 사용합니다. 애플리케이션의 RPO(복구 시점 목표)는 30\n초 \n이하이고 RTO(복구 시간 목표)는 60 분입니다. DR 솔루션은 가능한 한 비용을 최소화해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Always On 가용성 그룹과 함께 Microsoft SQL Server Enterprise 를 사용하여 온프레미스 \n서버와 AWS 간에 다중 사이트 활성/활성 설정을 구성합니다.",
      "AWS 에서 SQL Server 데이터베이스용 웜 대기 Amazon RDS 를 구성합니다. 변경 데이터 \n캡처(CDC)를 사용하도록 AWS DMS(AWS Database Migration Service)를 구성합니다.",
      "디스크 변경 사항을 AWS 에 파일럿 라이트로 복제하도록 구성된 AWS Elastic Disaster \nRecovery 를 사용합니다.",
      "타사 백업 소프트웨어를 사용하여 매일 밤 백업을 캡처합니다. Amazon S3 에 보조 백업 \n세트를 저장합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/111301-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 540,
    "question": "회사에는 Oracle 데이터베이스를 사용하여 고객 정보를 처리하고 저장하는 온프레미스 \n서버가 있습니다. 이 회사는 AWS 데이터베이스 서비스를 사용하여 더 높은 가용성을 \n달성하고 애플리케이션 성능을 개선하고자 합니다. 회사는 또한 기본 데이터베이스 \n시스템에서 보고를 오프로드하려고 합니다. \n운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Database Migration Service(AWS DMS)를 사용하여 여러 AWS 리전에서 Amazon \nRDS DB 인스턴스를 생성합니다. 보고 기능은 기본 DB 인스턴스와 별도의 DB 인스턴스를 \n가리킵니다.",
      "단일 AZ 배포에서 Amazon RDS 를 사용하여 Oracle 데이터베이스를 생성합니다. 기본 \nDB 인스턴스와 동일한 영역에 읽기 전용 복제본을 생성합니다. 보고 기능을 읽기 전용 \n복제본으로 지정합니다.",
      "다중 AZ 클러스터 배포에 배포된 Amazon RDS 를 사용하여 Oracle 데이터베이스를 \n생성합니다. 클러스터 배포에서 리더 인스턴스를 사용하도록 보고 기능에 지시합니다.",
      "다중 AZ 인스턴스 배포에 배포된 Amazon RDS\n를 사용하여 Amazon Aurora \n데이터베이스를 생성합니다. 보고 기능을 판독기 인스턴스에 지시합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/111439-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon \nAurora\n는 \nMySQL \n및 \nPostgreSQL\n과 \n호환되는 \n완전관리형 \n관계형 \n데이터베이스입니다. MySQL 보다 최대 5 배, PostgreSQL 보다 최대 3 배 뛰어난 성능을 \n제공합니다. 또한 여러 가용 영역에 걸쳐 데이터를 복제하고 데이터를 Amazon S31 에 \n지속적으로 백업하여 고가용성과 내구성을 제공합니다. 다중 AZ 인스턴스 배포에 배포된 \nAmazon RDS 를 사용하여 Amazon Aurora 데이터베이스를 생성함으로써 솔루션은 더 높은 \n가용성을 달성하고 애플리케이션 성능을 개선할 수 있습니다. \nAmazon Aurora 는 기본 인스턴스와 동일한 기본 스토리지를 공유하는 별도의 인스턴스인 \n읽기 전용 복제본을 지원합니다. 읽기 전용 복제본을 사용하여 기본 인스턴스에서 읽기 \n전용 쿼리를 오프로드하고 성능을 향상할 수 있습니다. 읽기 전용 복제본은 보고 기능에도 \n사용할 수 있습니다. \n보고 기능을 판독기 인스턴스로 지정함으로써 솔루션은 기본 데이터베이스 시스템에서 \n보고를 오프로드할 수 있습니다. \n1. AWS Database Migration Service(AWS DMS)를 사용하여 여러 AWS 리전에서 Amazon \nRDS DB 인스턴스 생성 보고 기능이 기본 DB 인스턴스와 별도의 DB 인스턴스를 \n가리키도록 합니다. 이 솔루션은 AWS 데이터베이스 서비스 사용 요구 사항을 충족하지 \n않습니다. AWS DMS 는 데이터베이스 서비스 자체가 아니라 사용자가 데이터베이스를 \nAWS\n로 마이그레이션하는 데 도움을 주는 서비스이기 때문입니다. 또한 서로 다른 \n리전에서 여러 DB 인스턴스를 생성해야 하므로 복잡성과 비용이 증가할 수 있습니다. \n2. 단일 AZ 배포에서 Amazon RDS 를 사용하여 Oracle 데이터베이스 생성 기본 DB \n인스턴스와 동일한 영역에 읽기 전용 복제본을 생성합니다. 보고 기능을 읽기 전용 \n복제본으로 지정합니다. 단일 AZ 배포는 가용 영역 중단 시 장애 조치 보호를 제공하지 \n않으므로 이 솔루션은 고가용성 달성 요구 사항을 충족하지 않습니다. 또한 Oracle 을 \n데이터베이스 엔진으로 사용하므로 Aurora보다 더 나은 성능을 제공하지 못할 수 있습니다. \n3. 다중 AZ 클러스터 배포에 배포된 Amazon RDS 를 사용하여 Oracle 데이터베이스 생성 \n클러스터 배포에서 리더 인스턴스를 사용하도록 보고 기능에 지시합니다. Oracle\n이 \nAurora 보다 더 나은 성능을 제공하지 않을 수 있으므로 이 솔루션은 애플리케이션 성능 \n향상 요구 사항을 충족하지 않습니다. 또한 Oracle\n이 아닌 Aurora\n에서만 지원되는 \n클러스터 배포를 사용합니다. \n \n참조:  \n\naws.amazon.com/rds/aurora/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 541,
    "question": "회사에서 AWS 에서 웹 애플리케이션을 구축하려고 합니다. 웹 사이트에 대한 클라이언트 \n액세스 요청은 예측할 수 없으며 오랫동안 유휴 상태일 수 있습니다. 가입비를 지불한 \n고객만이 웹 애플리케이션에 로그인하고 사용할 수 있습니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (3 개 선택)",
    "options": [
      "Amazon DynamoDB 에서 사용자 정보를 검색하는 AWS Lambda 함수를 생성합니다. \nRESTful API 를 수락할 Amazon API Gateway 엔드포인트를 생성합니다. API 호출을 Lambda \n함수로 보냅니다.",
      "Application Load Balancer 뒤에 Amazon Elastic Container Service(Amazon ECS) \n서비스를 생성하여 Amazon RDS 에서 사용자 정보를 검색합니다. RESTful API 를 수락할 \nAmazon API Gateway 엔드포인트를 생성합니다. API 호출을 Lambda 함수로 보냅니다.",
      "사용자를 인증하기 위해 Amazon Cognito 사용자 풀을 생성합니다.",
      "사용자를 인증하기 위해 Amazon Cognito 자격 증명 풀을 생성합니다.",
      "AWS Amplify를 사용하여 HTML, CSS 및 JS로 프런트엔드 웹 콘텐츠를 제공합니다. 통합 \nAmazon CloudFront 구성을 사용합니다.",
      "PHP, CSS 및 JS\n와 함께 Amazon S3 정적 웹 호스팅을 사용합니다. Amazon \nCloudFront 를 사용하여 프런트엔드 웹 콘텐츠를 제공합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111440-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n참고 \n\ndocs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 542,
    "question": "미디어 회사는 Amazon CloudFront 배포를 사용하여 인터넷을 통해 콘텐츠를 제공합니다. \n회사는 프리미엄 고객만 미디어 스트림과 파일 콘텐츠에 액세스할 수 있기를 원합니다. \n회사는 모든 콘텐츠를 Amazon S3 버킷에 저장합니다. 회사는 또한 영화 대여나 음악 \n다운로드와 같은 특정 목적을 위해 주문형 콘텐츠를 고객에게 제공합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 서명 쿠키를 생성하여 프리미엄 고객에게 제공합니다.",
      "프리미엄 고객에게 CloudFront 서명 URL 을 생성하고 제공합니다.",
      "원본 액세스 제어(OAC)를 사용하여 비프리미엄 고객의 액세스를 제한합니다.",
      "비프리미엄 고객을 차단하기 위해 필드 수준 암호화를 생성하고 활성화합니다. \n\n=== PAGE 522 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/111441-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 543,
    "question": "회사는 개별적으로 블리딩된 여러 AWS 계정에서 Amazon EC2 인스턴스를 실행합니다. 이 \n회사는 최근 저축 피안을 구입했습니다. 회사의 비즈니스 요구 사항 변경으로 인해 회사는 \n많은 수의 EC2 인스턴스를 폐기했습니다. 회사는 다른 AWS 계정에서 Savings Plan 할인을 \n사용하려고 합니다. \n이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "마스터 계정의 AWS 계정 관리 콘솔에서 결제 기본 설정 섹션의 할인 공유를 켭니다.",
      "기존 Savings Plan 을 구매한 계정의 AWS 계정 관리 콘솔에서 결제 기본 설정 섹션의 \n할인 공유를 켭니다. 모든 계정을 포함합니다.",
      "AWS Organizations 마스터 계정에서 AWS Resource Access Manager(AWS RAM)를 \n사용하여 다른 계정과 Savings Plan 을 공유합니다.",
      "새 지급인 계정의 AWS Organizations 에서 조직을 생성합니다. 다른 AWS 계정을 \n초대하여 마스터 계정에서 조직에 가입합니다.",
      "기존 EC2 인스턴스 및 Savings Plan\n을 사용하여 기존 AWS 계정의 AWS \nOrganizations 에 조직을 생성합니다. 다른 AWS 계정을 초대하여 마스터 계정에서 조직에 \n가입합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111442-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 544,
    "question": "소매 회사는 퍼블릭 REST API 에 지역 Amazon API Gateway API 를 사용합니다. API \nGateway 엔드포인트는 Amazon Route 53 별칭 레코드를 가리키는 사용자 지정 도메인 \n이름입니다. \n솔루션 \n아키텍트는 \n고객에게 \n최소한의 \n영향을 \n미치고 \n데이터 \n손실을 \n최소화하는 솔루션을 생성하여 새 버전의 API 를 릴리스해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "API 게이트웨이에 대한 카나리아 릴리스 배포 단계를 생성합니다. 최신 API 버전을 \n배포합니다. 트래픽의 적절한 비율을 카나리아 단계로 지정합니다. API 검증 후 카나리아 \n단계를 프로덕션 단계로 승격합니다.",
      "OpenAPI YAML 파일 형식의 새 API 버전으로 새 API 게이트웨이 엔드포인트를 \n\n=== PAGE 523 ===\n생성합니다. API Gateway 의 API 에 병합 모드에서 가져오기-업데이트 작업을 사용합니다. \nAPI 의 새 버전을 프로덕션 단계에 배포합니다.",
      "OpenAPI JSON 파일 형식의 새 API 버전으로 새 API 게이트웨이 엔드포인트를 \n생성합니다. 덮어쓰기 모드에서 업데이트로 가져오기 작업을 API Gateway\n의 API\n에 \n사용합니다. API 의 새 버전을 프로덕션 단계에 배포합니다.",
      "API 정의의 새 버전으로 새 API 게이트웨이 엔드포인트를 생성합니다. 새 API Gateway \nAPI 에 대한 사용자 지정 도메인 이름을 생성합니다. Route 53 별칭 레코드가 새 API \nGateway API 사용자 지정 도메인 이름을 가리키도록 합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111450-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n이 답변은 고객에게 미치는 영향을 최소화하고 데이터 손실을 최소화하면서 API 의 새 \n버전을 릴리스하기 위한 요구 사항을 충족하므로 정확합니다. 카나리아 릴리스 배포는 \n테스트 목적으로 API 의 새 버전을 배포하고 기본 버전은 동일한 단계에서 일반 작업을 \n위해 프로덕션 릴리스로 배포된 상태로 유지하는 소프트웨어 개발 전략입니다. 카나리아 \n릴리스 배포에서 총 API 트래픽은 미리 구성된 비율로 프로덕션 릴리스와 카나리아 \n릴리스로 무작위로 분리됩니다. 일반적으로 카나리아 릴리스는 API 트래픽의 작은 비율을 \n수신하고 프로덕션 릴리스가 나머지를 차지합니다. 업데이트된 API 기능은 카나리아를 통한 \nAPI 트래픽에만 표시됩니다. 카나리아 트래픽 비율을 조정하여 테스트 범위 또는 성능을 \n최적화할 수 있습니다. 카나리아 트래픽을 작게 유지하고 선택을 무작위로 유지함으로써 \n대부분의 사용자는 새 버전의 잠재적인 버그로 인해 언제든지 악영향을 받지 않으며 단일 \n사용자도 항상 악영향을 받지 않습니다. 테스트 메트릭이 요구 사항을 통과한 후 canary \n릴리스를 프로덕션 릴리스로 승격하고 배포에서 canary 를 비활성화할 수 있습니다. 이렇게 \n하면 생산 단계에서 새로운 기능을 사용할 수 있습니다. \n \n참조: \n\ndocs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html",
    "glossary": {
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 545,
    "question": "회사는 회사의 기본 웹 사이트를 사용할 수 없는 경우 사용자를 백업 정적 오류 페이지로 \n안내하려고 합니다. 기본 웹 사이트의 DNS 레코드는 Amazon Route 53 에서 호스팅됩니다. \n도메인은 Application Load Balancer(ALB)를 가리킵니다. 회사는 변경 및 인프라 \n오버헤드를 최소화하는 솔루션이 필요합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 524 ===",
    "options": [
      "지연 시간 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 트래픽이 가장 \n반응이 빠른 엔드포인트로 전송되도록 Amazon S3 버킷에서 호스팅되는 정적 오류 \n페이지를 레코드에 추가합니다.",
      "Route 53 활성-수동 장애 조치 구성을 설정합니다. Route 53 상태 확인에서 ALB \n엔드포인트가 비정상이라고 판단하면 Amazon S3 버킷에서 호스팅되는 정적 오류 페이지로 \n트래픽을 보냅니다.",
      "정적 오류 페이지를 엔드포인트로 호스팅하는 Amazon EC2 인스턴스와 ALB 를 사용하여 \nRoute 53 활성-활성 구성을 설정합니다. ALB\n에 대한 상태 확인이 실패한 경우에만 \n인스턴스에 요청을 보내도록 Route 53 을 구성합니다.",
      "다중값 응답 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 상태 확인을 \n만듭니다. 상태 확인이 통과되면 트래픽을 웹사이트로 안내합니다. 상태 확인을 통과하지 \n못한 경우 Amazon S3 에서 호스팅되는 정적 오류 페이지로 트래픽을 보냅니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116974-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n1: \nRoute 53 상태 확인을 사용하여 활성-활성 및 활성-수동 장애 조치 구성을 구성할 수 \n있습니다. 능동-수동 장애 조치 : 기본 리소스 또는 리소스 그룹을 대부분의 시간 동안 \n사용할 수 있도록 하고 모든 기본 리소스를 사용할 수 없는 경우에 대비하여 보조 리소스 \n또는 리소스 그룹을 대기 상태로 유지하려는 경우 활성-수동 장애 조치 구성을 사용합니다. \n쿼리에 응답할 때 Route 53 에는 정상적인 기본 리소스만 포함됩니다. 모든 기본 리소스가 \n비정상인 경우 Route 53 은 DNS 쿼리에 대한 응답으로 정상적인 보조 리소스만 포함하기 \n시작합니다. \n\ndocs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html \n \n2: \n이 솔루션은 기본 웹 사이트를 사용할 수 없는 경우 사용자를 백업 정적 오류 페이지로 \n안내하여 변경 및 인프라 오버헤드를 최소화하는 요구 사항을 충족합니다. Route 53 \n활성-수동 장애 조치 구성은 정상인 경우 기본 리소스로, 기본 리소스가 비정상인 경우 \n보조 리소스로 트래픽을 라우팅할 수 있습니다. Route 53 상태 확인은 ALB 엔드포인트의 \n상태를 모니터링하고 필요할 때 장애 조치를 트리거할 수 있습니다. 정적 오류 페이지는 \n웹사이트로 구성된 S3 버킷에서 호스팅할 수 있으며 이는 정적 콘텐츠를 제공하는 \n간단하고 비용 효율적인 방법입니다. \n대기 시간 라우팅 정책을 사용하면 사용자에 대한 가장 낮은 네트워크 대기 시간을 \n기반으로 트래픽을 라우팅할 수 있지만 장애 조치 기능을 제공하지 않기 때문에 옵션 A 는",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 546,
    "question": "회사의 IT 비용에 대한 최근 분석에서는 백업 비용을 줄여야 할 필요성이 강조되었습니다. \n회사의 CIO 는 온프레미스 백업 인프라를 단순화하고 물리적 백업 테이프 사용을 제거하여 \n비용을 절감하고자 합니다. 회사는 온프레미스 백업 애플리케이션 및 워크플로우에 대한 \n기존 투자를 보존해야 합니다. \n솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": [
      "NFS 인터페이스를 사용하여 백업 애플리케이션과 연결하도록 AWS Storage Gateway 를 \n설정합니다.",
      "NFS 인터페이스를 사용하여 백업 애플리케이션과 연결하는 Amazon EFS 파일 시스템을 \n설정합니다.",
      "iSCSI 인터페이스를 사용하여 백업 애플리케이션과 연결하는 Amazon EFS 파일 \n시스템을 설정합니다.",
      "iSCSI-가상 테이프 라이브러리(VTL) 인터페이스를 사용하여 백업 애플리케이션과 \n연결하도록 AWS Storage Gateway 를 설정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/116975-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 온프레미스 백업 인프라를 단순화하고 물리적 백업 테이프의 사용을 \n제거하여 비용을 절감할 수 있습니다. iSCSI-가상 테이프 라이브러리(VTL) 인터페이스를 \n사용하여 백업 애플리케이션과 연결하도록 AWS Storage Gateway 를 설정함으로써 회사는",
    "glossary": {
      "Storage Gateway": "사내 장비와 AWS 스토리지를 연결해 하이브리드 환경을 만드는 서비스"
    }
  },
  {
    "id": 547,
    "question": "회사는 서로 다른 위치에 데이터 수집 센서를 가지고 있습니다. 데이터 수집 센서는 대량의 \n데이터를 회사로 스트리밍합니다. 이 회사는 대용량 스트리밍 데이터를 수집하고 처리하기 \n위해 AWS\n에서 플랫폼을 설계하려고 합니다. 솔루션은 확장 가능해야 하며 거의 \n실시간으로 데이터 수집을 지원해야 합니다. 회사는 향후 보고를 위해 데이터를 Amazon \nS3 에 저장해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Kinesis Data Firehose를 사용하여 스트리밍 데이터를 Amazon S3에 전달합니다.",
      "AWS Glue 를 사용하여 스트리밍 데이터를 Amazon S3 에 전달합니다.",
      "AWS Lambda 를 사용하여 스트리밍 데이터를 전달하고 데이터를 Amazon S3 에 \n저장합니다.",
      "AWS DMS(AWS Database Migration Service)를 사용하여 스트리밍 데이터를 Amazon \nS3 에 전달합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/116976-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n최소한의 운영 오버헤드로 대용량 스트리밍 데이터를 수집하고 처리하려면 Amazon Kinesis \nData Firehose 가 적합한 솔루션입니다. Amazon Kinesis Data Firehose 는 스트리밍 데이터를 \n캡처, 변환하여 Amazon S3 또는 기타 대상으로 전달할 수 있습니다. Amazon Kinesis Data \nFirehose 는 데이터 처리량에 맞춰 자동으로 확장하고 모든 양의 데이터를 처리할 수 \n있습니다. Amazon Kinesis Data Firehose 는 프로비저닝이나 관리를 위해 서버가 필요하지 \n않은 완전관리형 서비스이기도 합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 548,
    "question": "회사에는 재무, 데이터 분석 및 개발 부서를 위한 별도의 AWS 계정이 있습니다. 비용 및 \n보안 문제 때문에 회사는 각 AWS 계정이 사용할 수 있는 서비스를 제어하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Systems Manager 템플릿을 사용하여 각 부서에서 사용할 수 있는 AWS 서비스를 \n\n=== PAGE 527 ===\n제어합니다.",
      "AWS Organizations 의 각 부서에 대한 조직 단위(OU)를 생성합니다. 서비스 제어 \n정책(SCP)을 OU 에 연결합니다.",
      "AWS CloudFormation 을 사용하여 각 부서에서 사용할 수 있는 AWS 서비스만 자동으로 \n프로비저닝합니다.",
      "특정 AWS 서비스의 사용을 관리 및 제어하기 위해 AWS 계정의 AWS Service \nCatalog 에 제품 목록을 설정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116977-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 549,
    "question": "회사에서 \n전자상거래 \n웹 \n사이트를 \n위한 \n다중 \n계층 \n애플리케이션을 \n만들었습니다. \n웹사이트는 퍼블릭 서브넷에 상주하는 Application Load Balancer, 퍼블릭 서브넷의 웹 계층, \n프라이빗 서브넷의 Amazon EC2 인스턴스에서 호스팅되는 MySQL 클러스터를 사용합니다. \nMySQL 데이터베이스는 타사 공급자가 인터넷에서 호스팅하는 제품 카탈로그 및 가격 \n정보를 검색해야 합니다. 솔루션 설계자는 운영 오버헤드를 늘리지 않고 보안을 극대화하는 \n전략을 고안해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "VPC 에 NAT 인스턴스를 배포합니다. NAT 인스턴스를 통해 모든 인터넷 기반 트래픽을 \n라우팅합니다.",
      "퍼블릭 서브넷에 NAT 게이트웨이를 배포합니다. 인터넷 바인딩된 모든 트래픽을 NAT \n게이트웨이로 보내도록 프라이빗 서브넷 라우팅 테이블을 수정합니다.",
      "인터넷 게이트웨이를 구성하고 VPModify 프라이빗 서브넷 라우팅 테이블에 연결하여 \n인터넷 바인딩 트래픽을 인터넷 게이트웨이로 보냅니다.",
      "가상 프라이빗 게이트웨이를 구성하고 VPC 에 연결합니다. 인터넷 바인딩 트래픽을 가상 \n프라이빗 게이트웨이로 보내도록 프라이빗 서브넷 라우팅 테이블을 수정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116978-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n프라이빗 서브넷의 MySQL 데이터베이스가 공개적으로 노출되지 않고 인터넷에 액세스할 \n수 있도록 하려면 NAT 게이트웨이가 적합한 솔루션입니다. NAT 게이트웨이를 사용하면 \n프라이빗 서브넷의 인스턴스가 인터넷이나 다른 AWS 서비스에 연결할 수 있지만 인터넷이",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 550,
    "question": "회사에서 AWS Key Management Service(AWS KMS) 키를 사용하여 AWS Lambda 환경 \n변수를 암호화하고 있습니다. 솔루션 설계자는 환경 변수를 해독하고 사용하는 데 필요한 \n권한이 있는지 확인해야 합니다. \n올바른 권한을 구현하기 위해 솔루션 설계자가 수행해야 하는 단계는 무엇입니까? (2 개 \n선택)",
    "options": [
      "Lambda 리소스 정책에 AWS KMS 권한을 추가합니다.",
      "Lambda 실행 역할에 AWS KMS 권한을 추가합니다.",
      "Lambda 함수 정책에 AWS KMS 권한을 추가합니다.",
      "AWS KMS 키 정책에서 Lambda 실행 역할을 허용합니다.",
      "AWS KMS 키 정책에서 Lambda 리소스 정책을 허용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/116979-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nB 와 D 는 정답입니다. Lambda 실행 역할에 환경 변수를 해독하고 사용할 수 있는 권한이 \n있고 AWS KMS 키 정책에 따라 Lambda 실행 역할이 키를 사용할 수 있도록 허용하기 \n때문입니다. Lambda 실행 역할은 AWS KMS 와 같은 AWS 리소스에 액세스할 수 있는 \n권한을 Lambda 함수에 부여하는 IAM 역할입니다. AWS KMS 키 정책은 키에 대한 \n액세스를 제어하는 리소스 기반 정책입니다. Lambda 실행 역할에 AWS KMS 권한을 \n추가하고 AWS KMS 키 정책에서 Lambda 실행 역할을 허용함으로써 솔루션 아키텍트는 \n환경 변수를 암호화하고 해독하기 위한 올바른 권한을 구현할 수 있습니다.",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  }
];