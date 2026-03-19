export const quizData = [
  {
    "id": 626,
    "question": "회사는 데이터를 온프레미스에 저장합니다. 데이터의 양은 회사가 사용할 수 있는 용량을 \n초과하여 증가하고 있습니다. 회사는 온프레미스 위치에서 Amazon S3 버킷으로 데이터를 \n마이그레이션하려고 합니다. 회사에는 전송 후 데이터 무결성을 자동으로 검증하는 \n솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS Snowball Edge 디바이스 주문 S3 버킷으로의 온라인 데이터 전송을 수행하도록 \nSnowball Edge 디바이스를 구성합니다.",
      "AWS DataSync 에이전트를 온프레미스에 배포합니다. S3 버킷으로의 온라인 데이터 \n전송을 수행하도록 DataSync 에이전트를 구성합니다.",
      "온프레미스에서 Amazon S3 파일 게이트웨이를 생성합니다. S3 버킷으로의 온라인 \n데이터 전송을 수행하도록 S3 파일 게이트웨이를 구성합니다.",
      "온프레미스에서 Amazon S3 Transfer Acceleration 에 액셀러레이터를 구성합니다. S3 \n버킷으로의 온라인 데이터 전송을 수행하도록 액셀러레이터를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/125338-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 온프레미스 위치에서 Amazon S3 버킷으로 데이터를 마이그레이션하고",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 627,
    "question": "한 회사에서 두 대의 DNS 서버를 AWS 로 마이그레이션하려고 합니다. 이 서버는 총 약 \n200 개의 영역을 호스팅하며 매일 평균 1 백만 건의 요청을 수신합니다. 이 회사는 두 \n서버의 관리와 관련된 운영 오버헤드를 최소화하면서 가용성을 최대화하고자 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 추천해야 하나요?",
    "options": [
      "Amazon Route 53 콘솔 가져오기 영역 파일에서 200 개의 새 호스트 영역을 만듭니다.",
      "하나의 대규모 Amazon EC2 인스턴스를 실행하여 영역 타일을 가져옵니다. 다운타임이 \n발생하면 회사에 알릴 수 있도록 Amazon CloudWatch 알람 및 알림을 구성합니다.",
      "AWS \n서버 \n마이그레이션 \n서비스(AWS \nSMS)를 \n사용하여 \n서버를 \nAWS\n로 \n마이그레이션합니다. 다운타임에 대해 회사에 알리도록 Amazon CloudWatch 알람 및 \n알림을 구성합니다.",
      "두 개의 가용 영역에 걸쳐 자동 확장 그룹에서 Amazon EC2 인스턴스를 시작합니다. \n영역 파일을 가져옵니다. 자동 스케일링 그룹에 대해 원하는 용량을 1 로 설정하고 최대 \n용량을 3 으로 설정합니다. CPU 사용률에 따라 확장하도록 확장 알람을 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/125541-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 628,
    "question": "한 글로벌 기업이 AWS Organizations 의 여러 AWS 계정에서 애플리케이션을 실행합니다. \n회사의 애플리케이션은 멀티파트 업로드를 사용하여 AWS 리전의 여러 Amazon S3 버킷에 \n데이터를 업로드합니다. 회사는 비용 준수 목적으로 불완전한 멀티파트 업로드에 대해 \n보고하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "불완전한 멀티파트 업로드 객체 수를 보고하는 규칙으로 AWS Config 를 구성합니다.",
      "불완전한 멀티파트 업로드 개체 수를 보고하는 SCP(서비스 제어 정책)를 만듭니다.",
      "불완전한 멀티파트 업로드 객체 수를 보고하도록 S3 스토리지 렌즈를 구성합니다. \n\n=== PAGE 575 ===",
      "S3 다중 지역 액세스 포인트를 생성하여 불완전한 멀티파트 업로드 객체 수를 \n보고합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125459-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nS3 Storage Lens 는 AWS Organizations 의 여러 AWS 계정에 걸친 객체 스토리지 사용 및 \n활동에 대한 조직 전체의 가시성을 제공하는 클라우드 스토리지 분석 기능입니다. S3 \n스토리지 렌즈는 수집하여 S3 콘솔의 대화형 대시보드에 표시하는 지표 중 하나로 \n불완전한 멀티파트 업로드 객체 수를 보고할 수 있습니다. S3 Storage Lens 는 추가 분석을 \n위해 CSV 또는 Parquet 형식의 지표를 S3 버킷으로 내보낼 수도 있습니다. 이 솔루션은 \n코드 개발이나 정책 변경이 필요하지 않으므로 최소한의 운영 오버헤드로 요구 사항을 \n충족합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 629,
    "question": "한 회사가 MySQL 용 Amazon RDS 에서 프로덕션 데이터베이스를 실행하고 있습니다. \n회사에서는 보안 규정 준수를 위해 데이터베이스 버전을 업그레이드하려고 합니다. \n데이터베이스에는 중요한 데이터가 포함되어 있으므로 회사에서는 데이터 손실 없이 기능을 \n업그레이드하고 테스트할 수 있는 빠른 솔루션을 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "RDS 수동 스냅샷을 생성합니다. MySQL\n용 Amazon RDS\n의 새 버전으로 \n업그레이드하세요.",
      "기본 백업 및 복원을 사용합니다. 업그레이드된 새 버전의 MySQL 용 Amazon RDS 로 \n데이터를 복원합니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 업그레이드된 새 버전의 \nMySQL 용 Amazon RDS 에 데이터를 복제합니다.",
      "Amazon RDS 블루/그린 배포를 사용하여 프로덕션 변경 사항을 배포하고 테스트합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/125460-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 630,
    "question": "솔루션 설계자가 매일 한 번 실행되고 완료하는 데 최대 2 시간이 걸리는 데이터 처리 \n\n=== PAGE 576 ===\n작업을 만들고 있습니다. 작업이 중단되면 처음부터 다시 시작해야 합니다. \n솔루션 설계자가 가장 비용 효율적인 방식으로 이 문제를 해결하려면 어떻게 해야 하나요?",
    "options": [
      "크론 작업에 의해 트리거되는 Amazon EC2 예약 인스턴스에서 로컬로 실행되는 \n스크립트를 만듭니다.",
      "Amazon EventBridge 예약 이벤트에 의해 트리거되는 AWS Lambda 함수를 생성합니다.",
      "Amazon EventBridge 예약 이벤트에 의해 트리거되는 Amazon ECS(Amazon Elastic \nContainer Service) Fargate 작업을 사용합니다.",
      "Amazon EventBridge 예약 이벤트에 의해 트리거된 Amazon EC2 에서 실행되는 Amazon \nECS(Amazon Elastic Container Service) 작업을 사용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/125541-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 631,
    "question": "소셜 미디어 회사는 사용자 프로필, 관계 및 상호 작용에 대한 데이터베이스를 AWS \n클라우드에 저장하려고 합니다. 회사에는 데이터베이스의 변경 사항을 모니터링하는 \n애플리케이션이 \n필요합니다. \n애플리케이션은 \n데이터 \n엔터티 \n간의 \n관계를 \n분석하고 \n사용자에게 권장 사항을 제공해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Neptune 을 사용하여 정보를 저장하십시오. Amazon Kinesis Data Streams 를 \n사용하여 데이터베이스의 변경 사항을 처리합니다.",
      "Amazon Neptune 을 사용하여 정보를 저장합니다. Neptune Streams 를 사용하여 \n데이터베이스의 변경 사항을 처리합니다.",
      "Amazon Quantum Ledger Database(Amazon QLDB)를 사용하여 정보를 저장합니다. \nAmazon Kinesis Data Streams 를 사용하여 데이터베이스의 변경 사항을 처리합니다.",
      "Amazon Quantum Ledger Database(Amazon QLDB)를 사용하여 정보를 저장합니다. \nNeptune Streams 를 사용하여 데이터베이스의 변경 사항을 처리합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125113-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \nB??",
    "glossary": {}
  },
  {
    "id": 632,
    "question": "한 회사에서 대량의 데이터를 저장할 새로운 애플리케이션을 만들고 있습니다. 데이터는 \n\n=== PAGE 577 ===\n매시간 분석되며 여러 가용 영역에 배포된 여러 Amazon EC2 Linux 인스턴스에 의해 \n수정됩니다. 필요한 저장 공간의 양은 향후 6 개월 동안 계속 증가할 것입니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 스토리지 솔루션을 권장해야 \n합니까?",
    "options": [
      "Amazon S3 Glacier 에 데이터를 저장합니다. 애플리케이션 인스턴스에 대한 액세스를 \n허용하도록 S3 Glacier 볼트 정책을 업데이트합니다.",
      "Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장합니다. 애플리케이션 \n인스턴스에 EBS 볼륨을 탑재합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템에 데이터를 저장합니다. \n애플리케이션 인스턴스에 파일 시스템을 마운트합니다.",
      "애플리케이션 인스턴스 간에 공유되는 Amazon Elastic Block Store(Amazon EBS) \n프로비저닝된 IOPS 볼륨에 데이터를 저장합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125114-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 633,
    "question": "회사는 PostgreSQL 다중 AZ DB 인스턴스용 Amazon RDS\n에 데이터를 저장하는 \n애플리케이션을 관리합니다. 트래픽 증가로 인해 성능 문제가 발생합니다. 회사에서는 \n데이터베이스 쿼리가 성능 저하의 주요 원인이라고 판단합니다. \n솔루션 아키텍트는 애플리케이션 성능을 향상시키기 위해 무엇을 해야 합니까?",
    "options": [
      "다중 AZ 대기 복제본에서 읽기 트래픽을 제공합니다.",
      "Transfer Acceleration 을 사용하도록 DB 인스턴스를 구성합니다.",
      "원본 DB 인스턴스에서 읽기 전용 복제본을 생성합니다. 읽기 복제본에서 읽기 트래픽을 \n제공합니다.",
      "애플리케이션과 Amazon RDS 사이에 Amazon Kinesis Data Firehose 를 사용하여 \n데이터베이스 요청의 동시성을 높입니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125513-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 634,
    "question": "한 회사에서 다양한 기계에서 매일 10GB 의 원격 분석 데이터를 수집합니다. 이 회사는 \n소스 데이터 계정의 Amazon S3 버킷에 데이터를 저장합니다. \n\n=== PAGE 578 ===\n이 회사는 이 데이터를 분석에 사용하기 위해 여러 컨설팅 기관을 고용했습니다. 각 \n대행사는 분석가를 위해 데이터에 대한 읽기 액세스 권한이 필요합니다. 회사는 보안과 \n운영 효율성을 극대화하는 솔루션을 선택하여 소스 데이터 계정의 데이터를 공유해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": [
      "각 기관의 데이터를 복제하도록 S3 글로벌 테이블을 구성합니다.",
      "S3 버킷을 제한된 시간 동안 공개합니다. 에이전시에게만 알립니다.",
      "대행사가 소유한 계정에 대한 S3 버킷의 교차 계정 액세스를 구성합니다.",
      "소스 데이터 계정의 각 분석가에 대해 IAM 사용자를 설정합니다. 각 사용자에게 S3 \n버킷에 대한 액세스 권한을 부여합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125544-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 635,
    "question": "한 회사에서 기본 AWS 리전에서 CIFS 및 NFS 파일 공유를 위해 NetApp ONTAP 용 \nAmazon FSx 를 사용합니다. Amazon EC2 인스턴스에서 실행되는 애플리케이션은 파일 \n공유에 액세스합니다. 이 회사는 보조 리전에 스토리지 재해 복구(DR) 솔루션이 필요합니다. \n보조 리전에 복제된 데이터는 기본 리전과 동일한 프로토콜을 사용하여 액세스해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": [
      "데이터를 Amazon S3 버킷에 복사하는 AWS 람다 함수를 생성합니다. S3 버킷을 보조 \n리전으로 복제합니다.",
      "AWS 백업을 사용하여 ONTAP 용 FSx 볼륨의 백업을 생성합니다. 볼륨을 보조 리전으로 \n복사합니다. 백업에서 새 FSx for ONTAP 인스턴스를 생성합니다.",
      "보조 리전에 ONTAP 용 FSx 인스턴스를 생성합니다. NetApp SnapMirror 를 사용하여 \n기본 리전에서 보조 리전으로 데이터를 복제합니다.",
      "Amazon Elastic 파일 시스템(Amazon EFS) 볼륨을 생성합니다. 현재 데이터를 볼륨으로 \n마이그레이션합니다. 볼륨을 보조 리전으로 복제합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125545-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 636,
    "question": "개발팀에서 AWS 람다 함수를 사용하는 이벤트 기반 애플리케이션을 만들고 있습니다. \n\n=== PAGE 579 ===\nAmazon S3 버킷에 파일이 추가될 때 이벤트가 생성됩니다. 개발팀은 현재 Amazon S3 의 \n이벤트 대상으로 Amazon SNS(Amazon Simple Notification Service)를 구성하고 있습니다. \n확장 가능한 방식으로 Amazon S3 의 이벤트를 처리하기 위해 솔루션 설계자는 무엇을 해야 \n하나요?",
    "options": [
      "이벤트가 Lambda\n에서 실행되기 전에 Amazon ECS(Amazon Elastic Container \nService)에서 이벤트를 처리하는 SNS 구독을 생성합니다.",
      "이벤트가 Lambda 에서 실행되기 전에 Amazon Elastic Kubernetes Service(Amazon \nEKS)에서 이벤트를 처리하는 SNS 구독을 생성합니다.",
      "이벤트를 Amazon SQS(Amazon Simple Queue Service)로 전송하는 SNS 구독을 \n생성합니다. Lambda 함수를 트리거하도록 SOS 대기열을 구성합니다.",
      "AWS 서버 마이그레이션 서비스(AWS SMS)로 이벤트를 전송하는 SNS 구독을 만듭니다. \nSMS 이벤트에서 폴링하도록 람다 함수를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125546-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스"
    }
  },
  {
    "id": 637,
    "question": "솔루션 설계자가 Amazon API 게이트웨이를 기반으로 새로운 서비스를 설계하고 있습니다. \n이 서비스의 요청 패턴은 예측할 수 없으며 초당 0 건의 요청에서 500 건 이상으로 갑자기 \n변경될 수 있습니다. 백엔드 데이터베이스에 보존해야 하는 데이터의 총 크기는 현재 1GB \n미만이며 향후 증가를 예측할 수 없습니다. 데이터는 간단한 키-값 요청을 사용하여 쿼리할 \n수 있습니다. \n이러한 요구 사항을 충족하는 AWS 서비스 조합은 무엇인가요? (두 가지 선택)",
    "options": [
      "AWS Fargate",
      "AWS Lambda",
      "Amazon DynamoDB",
      "Amazon EC2 Auto Scaling",
      "MySQL-compatible Amazon Aurora"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/125547-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 638,
    "question": "한 회사에서 연구 데이터를 수집하여 전 세계 직원들과 공유하고 있습니다. 이 회사는 \n\n=== PAGE 580 ===\n데이터를 수집하여 Amazon S3 버킷에 저장하고 AWS 클라우드에서 데이터를 처리하려고 \n합니다. 회사는 데이터를 회사 직원들과 공유할 것입니다. 이 회사는 운영 오버헤드를 \n최소화하는 AWS 클라우드의 안전한 솔루션이 필요합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": [
      "AWS 람다 함수를 사용하여 S3 사전 지정 URL 을 생성합니다. 직원들에게 해당 URL 을 \n사용하도록 지시합니다.",
      "각 직원에 대해 IAM 사용자를 만듭니다. 각 직원에 대해 S3 액세스를 허용하는 IAM \n정책을 만듭니다. 직원들에게 AWS 관리 콘솔을 사용하도록 지시합니다.",
      "S3 파일 게이트웨이를 만듭니다. 업로드용 공유와 다운로드용 공유를 만듭니다. 직원이 \n로컬 컴퓨터에 공유를 마운트하여 S3 파일 게이트웨이를 사용하도록 허용합니다.",
      "AWS Transfer Family SFTP 엔드포인트를 구성합니다. 사용자 지정 ID 공급자 옵션을 \n선택합니다. AWS Secrets Manager 를 사용하여 사용자 자격 증명을 관리합니다. 직원들에게 \nTransfer Family 를 사용하도록 지시합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/125574-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 639,
    "question": "한 회사에서 새로운 가구 재고 애플리케이션을 구축하고 있습니다. 이 회사는 여러 가용 \n영역에 걸쳐 여러 개의 Amazon EC2 인스턴스에 애플리케이션을 배포했습니다. EC2 \n인스턴스는 VPC 의 애플리케이션 로드 밸런서(ALB) 뒤에서 실행됩니다. \n솔루션 설계자가 들어오는 트래픽이 하나의 EC2 인스턴스에 편중되어 일부 요청에 대한 \n지연 시간이 발생하는 것을 관찰했습니다. \n이 문제를 해결하려면 솔루션 설계자는 어떻게 해야 하나요?",
    "options": [
      "ALB 에서 세션 선호도(스티키 세션)를 비활성화합니다.",
      "ALB 를 네트워크 로드 밸런서로 교체합니다.",
      "각 가용 영역에서 EC2 인스턴스 수 늘리기",
      "ALB 의 대상 그룹에 대한 상태 확인 빈도 조정"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/125575-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 640,
    "question": "한 회사에서 AWS 람다 함수를 사용하여 Amazon S3 에서 파일을 다운로드하고 암호를 \n\n=== PAGE 581 ===\n해독하는 애플리케이션 워크플로우가 있습니다. 이러한 파일은 AWS 키 관리 서비스(AWS \nKMS) 키를 사용하여 암호화됩니다. 솔루션 설계자는 필요한 권한이 올바르게 설정되도록 \n보장하는 솔루션을 설계해야 합니다. \n어떤 작업 조합으로 이를 달성할 수 있나요? (두 가지 선택)",
    "options": [
      "람다 함수의 리소스 정책에 kms:암호 해독 권한을 첨부합니다.",
      "KMS 키의 정책에서 Lambda IAM 역할에 대한 암호 해독 권한을 부여합니다.",
      "KMS 키의 정책에서 Lambda 리소스 정책에 대한 암호 해독 권한을 부여합니다.",
      "kms:암호 해독 권한이 있는 새 IAM 정책을 만들고 이 정책을 Lambda 함수에 \n첨부합니다.",
      "kms:암호 해독 권한이 있는 새 IAM 역할을 만들고 실행 역할을 Lambda 함수에 \n연결합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125579-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n??",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 641,
    "question": "회사에서 재무 검토를 위해 AWS 비용을 모니터링하려고 합니다. 클라우드 운영팀은 AWS \n조직 관리 계정에서 모든 구성원 계정에 대한 AWS 비용 및 사용량 보고서를 쿼리하는 \n아키텍처를 설계하고 있습니다. 팀은 이 쿼리를 한 달에 한 번 실행하고 청구서에 대한 \n자세한 분석을 제공해야 합니다. \n이러한 요구 사항을 충족하는 가장 확장 가능하고 비용 효율적인 방법은 무엇인가요?",
    "options": [
      "관리 계정에서 비용 및 사용량 보고서를 사용 설정합니다. Amazon Kinesis 에 보고서를 \n전달합니다. 분석을 위해 Amazon EMR 을 사용합니다.",
      "관리 계정에서 비용 및 사용량 보고서를 활성화합니다. Amazon S3\n에 보고서를 \n전달합니다. 분석을 위해 Amazon Athena 를 사용합니다.",
      "회원 계정에 대한 비용 및 사용량 보고서를 활성화합니다. Amazon S3 에 보고서를 \n전달합니다. 분석을 위해 Amazon Redshift 를 사용합니다.",
      "회원 계정에 대한 비용 및 사용량 보고서를 사용하도록 설정합니다. Amazon Kinesis 에 \n보고서를 전달합니다. 분석을 위해 Amazon QuickSight 를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/125580-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 642,
    "question": "회사에서 AWS 클라우드의 Auto Scaling 그룹에 속한 Amazon EC2 인스턴스에서 게임 \n애플리케이션을 실행하려고 합니다. 응용 프로그램은 UDP 패킷을 사용하여 데이터를 \n전송합니다. 회사는 트래픽이 증가하거나 감소함에 따라 애플리케이션이 확장 및 축소될 수 \n있도록 하려고 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Auto Scaling 그룹에 Network Load Balancer 연결",
      "Auto Scaling 그룹에 Application Load Balancer 를 연결합니다.",
      "트래픽을 적절하게 라우팅하기 위해 가중치 정책이 있는 Amazon Route 53 레코드 \n세트를 배포합니다.",
      "Auto Scaling 그룹의 EC2 인스턴스에 포트 전달로 구성된 NAT 인스턴스를 배포합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/125215-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 솔루션은 UDP 패킷을 사용하고 트래픽이 증가 및 감소함에 따라 확장 및 축소하여 \n데이터를 전송하는 게임 애플리케이션 실행 요구 사항을 충족합니다. Network Load \nBalancer 는 매우 낮은 대기 시간으로 높은 처리량을 유지하면서 초당 수백만 건의 요청을 \n처리할 수 있으며 TCP 및 UDP 프로토콜을 모두 지원합니다. Auto Scaling 그룹은 수요 및 \n조정 정책에 따라 EC2 인스턴스 수를 자동으로 조정할 수 있습니다. \n \nApplication Load Balancer 가 UDP 프로토콜을 지원하지 않고 HTTP 및 HTTPS 만 지원하기 \n때문에 옵션 B 는 올바르지 않습니다. \n \nAmazon Route 53\n은 다양한 정책을 기반으로 트래픽을 라우팅할 수 있는 DNS \n서비스이지만 로드 밸런싱 또는 확장 기능을 제공하지 않기 때문에 옵션 C 는 올바르지 \n않습니다. \n \n옵션 D 는 \nNAT 인스턴스는 프라이빗 서브넷의 인스턴스를 인터넷 또는 다른 AWS 서비스에 연결하는 \n데 사용되지만 로드 밸런싱 또는 확장 기능을 제공하지 않기 때문에 올바르지 않습니다. \n참조: \n\naws.amazon.com/blogs/aws/new-udp-load-balancing-for-network-load-balanc\ner/ \n\ndocs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 643,
    "question": "한 회사에서 여러 브랜드를 위해 AWS\n에서 여러 웹사이트를 운영하고 있습니다. 각 \n웹사이트는 매일 수십 기가바이트의 웹 트래픽 로그를 생성합니다. 솔루션 설계자는 회사의 \n개발자가 회사의 모든 웹사이트에 걸쳐 트래픽 패턴을 분석할 수 있도록 확장 가능한 \n솔루션을 설계해야 합니다. 개발자의 이러한 분석은 몇 달에 걸쳐 일주일에 한 번씩 \n온디맨드 방식으로 수행됩니다. 솔루션은 표준 SQL 로 쿼리를 지원해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇인가요?",
    "options": [
      "Amazon S3 에 로그를 저장합니다. Amazon Athena 를 사용하여 분석합니다.",
      "로그를 Amazon RDS\n에 저장합니다. 분석을 위해 데이터베이스 클라이언트를 \n사용합니다.",
      "로그를 Amazon OpenSearch Service 에 저장합니다. 분석을 위해 OpenSearch Service를 \n사용합니다.",
      "로그를 Amazon EMR 클러스터에 저장합니다. SQL 기반 분석을 위해 지원되는 오픈 \n소스 프레임워크를 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/125581-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 644,
    "question": "국제적인 회사는 회사가 운영되는 각 국가별로 하위 도메인을 가지고 있습니다. 하위 \n도메인의 형식은 example.com, country1.example.com, country2.example.com\n입니다. \n회사의 워크로드는 애플리케이션 로드 밸런서 뒤에 있습니다. 회사는 전송 중인 웹사이트 \n데이터를 암호화하려고 합니다. \n이러한 요구 사항을 충족하는 단계의 조합은 무엇인가요? (두 가지 선택)",
    "options": [
      "AWS ACM(인증서 관리자) 콘솔을 사용하여 최상위 도메인 example.com 에 대한 일반 \n인증서와 *.example.com 에 대한 와일드카드 인증서를 요청합니다.",
      "AWS ACM(인증서 관리자) 콘솔을 사용하여 최상위 도메인 example.com 에 대한 비공개 \n인증서 및 *.example.com 에 대한 와일드카드 인증서를 요청합니다.",
      "AWS ACM(인증서 관리자) 콘솔을 사용하여 최상위 도메인 example.com 에 대한 공개 \n및 비공개 인증서를 요청합니다.",
      "이메일 주소로 도메인 소유권을 유효성 검사합니다. 필요한 DNS 레코드를 DNS \n\n=== PAGE 584 ===\n공급업체에 추가하여 DNS 유효성 검사로 전환합니다.",
      "DNS 공급업체에 필요한 DNS 레코드를 추가하여 도메인의 도메인 소유권을 유효성 \n검사합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/125582-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 645,
    "question": "회사는 온프레미스 키 관리자에서 암호화 키를 사용해야 합니다. 키 관리자는 규제 및 규정 \n준수 요구 사항으로 인해 AWS 클라우드 외부에 있습니다. 이 회사는 AWS 클라우드 \n외부에 보관되어 있고 여러 공급업체의 다양한 외부 키 관리자를 지원하는 암호화 키를 \n사용하여 암호화 및 암호 해독을 관리하고자 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": [
      "CloudHSM 클러스터로 지원되는 AWS CloudHSM 키 저장소를 사용합니다.",
      "외부 키 관리자가 지원하는 AWS 키 관리 서비스(AWS KMS) 외부 키 저장소를 \n사용합니다.",
      "기본 AWS 키 관리 서비스(AWS KMS) 관리형 키 저장소를 사용합니다.",
      "AWS CloudHSM 클러스터가 지원하는 사용자 지정 키 저장소를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/125583-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 646,
    "question": "솔루션 설계자는 AWS 클라우드에서 고성능 컴퓨팅(HPC) 워크로드를 호스팅해야 합니다. \n워크로드는 수백 개의 Amazon EC2 인스턴스에서 실행되며 대규모 데이터 세트의 분산 \n처리를 위해 공유 파일 시스템에 대한 병렬 액세스가 필요합니다. 데이터 세트는 여러 \n인스턴스에서 동시에 액세스됩니다. 워크로드에는 1ms 이내의 액세스 지연 시간이 \n필요합니다. 처리가 완료된 후 엔지니어는 수동 후처리를 위해 데이터 세트에 액세스해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": [
      "공유 파일 시스템으로 Amazon EFS(Amazon Elastic File System)를 사용하세요. Amazon \nEFS 에서 데이터 세트에 액세스합니다.",
      "공유 파일 시스템으로 사용할 Amazon S3 버킷을 마운트합니다. S3 버킷에서 직접 \n후처리를 수행합니다. \n\n=== PAGE 585 ===",
      "공유 파일 시스템으로 Lustre 용 Amazon FSx 를 사용합니다. 후처리를 위해 파일 \n시스템을 Amazon S3 버킷에 연결합니다.",
      "처리 및 후처리를 위해 모든 인스턴스에 마운트할 수 있도록 Amazon S3 버킷을 \n공유하도록 AWS 리소스 액세스 관리자를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125584-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 647,
    "question": "한 게임 회사에서 VoIP(Voice over IP)를 사용하여 애플리케이션을 구축하고 있습니다. \n능력. 이 애플리케이션은 전 세계 사용자에게 트래픽을 제공합니다. 애플리케이션은 AWS \n리전 전체에 걸쳐 자동화된 장애 조치를 통해 가용성이 높아야 합니다. 회사는 사용자 \n장치의 IP 주소 캐싱에 의존하지 않고 사용자의 대기 시간을 최소화하려고 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "상태 확인과 함께 AWS Global Accelerator 를 사용하십시오.",
      "지리적 위치 라우팅 정책과 함께 Amazon Route 53 을 사용하십시오.",
      "여러 오리진을 포함하는 Amazon CloudFront 배포를 생성합니다.",
      "경로 기반 라우팅을 사용하는 Application Load Balancer 를 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/125212-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \nC??",
    "glossary": {}
  },
  {
    "id": 648,
    "question": "일기 예보 회사는 수백 기가바이트의 데이터를 밀리초 미만의 지연 시간으로 처리해야 \n합니다. 이 회사는 데이터 센터에 고성능 컴퓨팅(HPC) 환경을 갖추고 있으며 예보 기능을 \n확장하고자 합니다. \n솔루션 설계자는 대량의 지속적인 처리량을 처리할 수 있는 고가용성 클라우드 스토리지 \n솔루션을 찾아야 합니다. 솔루션에 저장된 파일은 전체 데이터 세트에 동시에 액세스하고 \n처리할 수 있는 수천 개의 컴퓨팅 인스턴스에서 액세스할 수 있어야 합니다. \n이러한 요구사항을 충족하기 위해 솔루션 설계자는 무엇을 해야 하나요?",
    "options": [
      "Lustre 스크래치 파일 시스템용 Amazon FSx 를 사용합니다.",
      "Lustre 퍼시스턴트 파일 시스템용 Amazon FSx 를 사용합니다.",
      "버스팅 처리량 모드와 함께 Amazon Elastic 파일 시스템(Amazon EFS)을 사용합니다. \n\n=== PAGE 586 ===",
      "프로비저닝된 처리량 모드와 함께 Amazon EFS(Amazon Elastic File System)를 \n사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/125586-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 649,
    "question": "전자 \n상거래 \n회사는 \n온프레미스에서 \nPostgreSQL \n데이터베이스를 \n운영합니다. \n데이터베이스는 높은 IOPS 의 Amazon EBS(Amazon Elastic Block Store) 블록 스토리지를 \n사용하여 데이터를 저장합니다. 초당 일일 피크 I/O 트랜잭션은 15,000 IOPS 를 초과하지 \n않습니다. 이 회사는 데이터베이스를 PostgreSQL 용 Amazon RDS 로 마이그레이션하고 \n디스크 스토리지 용량과 무관하게 디스크 IOPS 성능을 프로비저닝하려고 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇인가요?",
    "options": [
      "범용 SSD(gp2) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS 를 프로비저닝합니다.",
      "프로비저닝된 IOPS SSD(io1) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS 를 \n프로비저닝합니다.",
      "범용 SSD(gp3) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS 를 프로비저닝합니다.",
      "EBS 마그네틱 볼륨 유형을 구성하여 최대 IOPS 를 달성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/125588-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 650,
    "question": "한 회사에서 온프레미스 Microsoft SQL Server 엔터프라이즈 에디션 데이터베이스를 \nAWS 로 마이그레이션하려고 합니다. 회사의 온라인 애플리케이션은 이 데이터베이스를 \n사용하여 트랜잭션을 처리합니다. 데이터 분석 팀은 동일한 프로덕션 데이터베이스를 \n사용하여 분석 처리를 위한 보고서를 실행합니다. 이 회사는 가능한 한 관리형 서비스로 \n전환하여 운영 오버헤드를 줄이려고 합니다. \n운영 오버헤드가 가장 적으면서 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": [
      "Microsoft SOL Server 용 Amazon RDS 로 마이그레이션합니다. 보고 목적으로 읽기 \n복제본 사용",
      "Amazon EC2 의 Microsoft SQL Server 로 마이그레이션합니다. 보고 목적으로 항상 켜짐 \n읽기 복제본 사용",
      "Amazon DynamoDB\n로 마이그레이션합니다. 보고 목적으로 DynamoDB 온디맨드 \n\n=== PAGE 587 ===\n복제본을 사용합니다.",
      "Amazon Aurora MySQL 로 마이그레이션합니다. 보고 목적으로 Aurora 읽기 복제본 사용"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/125589-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  }
];