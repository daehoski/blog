export const quizData = [
  {
    "id": 101,
    "question": "솔루션 설계자는 퍼블릭 및 프라이빗 서브넷이 있는 VPC 를 설계하고 있습니다. VPC 와 \n서브넷은 IPv4 CIDR 블록을 사용합니다. 고가용성을 위해 세 개의 가용 영역(AZ) 각각에 \n하나의 퍼블릭 서브넷과 하나의 프라이빗 서브넷이 있습니다. 인터넷 게이트웨이는 퍼블릭 \n서브넷에 대한 인터넷 액세스를 제공하는 데 사용됩니다. 프라이빗 서브넷은 Amazon EC2 \n인스턴스가 소프트웨어 업데이트를 다운로드할 수 있도록 인터넷에 액세스할 수 있어야 \n합니다. \n솔루션 설계자는 프라이빗 서브넷에 대한 인터넷 액세스를 활성화하기 위해 무엇을 해야 \n합니까?",
    "options": [
      "각 AZ 의 각 퍼블릭 서브넷에 대해 하나씩 3 개의 NAT 게이트웨이를 생성합니다. 비 \nVPC 트래픽을 해당 AZ 의 NAT 게이트웨이로 전달하는 각 AZ 에 대한 프라이빗 라우팅 \n테이블을 생성합니다.",
      "각 AZ 의 프라이빗 서브넷마다 하나씩 3 개의 NAT 인스턴스를 생성합니다. 비 VPC \n트래픽을 해당 AZ 의 NAT 인스턴스로 전달하는 각 AZ 에 대한 프라이빗 라우팅 테이블을 \n생성합니다.",
      "프라이빗 서브넷 중 하나에 두 번째 인터넷 게이트웨이를 생성합니다. VPC 가 아닌 \n트래픽을 프라이빗 인터넷 게이트웨이로 전달하는 프라이빗 서브넷의 라우팅 테이블을 \n업데이트합니다.",
      "퍼블릭 서브넷 중 하나에 송신 전용 인터넷 게이트웨이를 생성합니다. VPC 가 아닌 \n트래픽을 외부 전용 인터넷 게이트웨이로 전달하는 프라이빗 서브넷에 대한 라우팅 \n테이블을 업데이트합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 각 가용 영역(AZ)에 있는 프라이빗 서브넷의 인스턴스들이 인터넷에 안전하게 접속하게 하려면, 각 AZ의 퍼블릭 서브넷에 'NAT 게이트웨이'를 하나씩 배치하는 것이 고가용성 측면에서 가장 권장됩니다.\n\nhttps://aws.amazon.com/vpc/",
    "glossary": {
      "NAT Gateway": "프라이빗 서브넷의 인스턴스가 인터넷과 통신할 수 있게 하되, 외부에서 내부로의 직접 접속은 차단하는 관리형 네트워크 장비",
      "고가용성 (High Availability)": "시스템의 한 부분이 고장 나도 전체 서비스가 중단되지 않고 계속 유지되도록 설계된 상태"
    }
  },
  {
    "id": 102,
    "question": "회사에서 온프레미스 데이터 센터를 AWS 로 마이그레이션하려고 합니다. 데이터 센터는 \nNFS 기반 파일 시스템에 데이터를 저장하는 SFTP 서버를 호스팅합니다. 서버에는 \n전송해야 하는 200GB 의 데이터가 있습니다. 서버는 Amazon Elastic File System(Amazon \nEFS) 파일 시스템을 사용하는 Amazon EC2 인스턴스에서 호스팅되어야 합니다. \n솔루션 설계자는 이 작업을 자동화하기 위해 어떤 단계 조합을 취해야 합니까? (2 개를 \n선택하세요.)",
    "options": [
      "EFS 파일 시스템과 동일한 가용 영역에서 EC2 인스턴스를 시작합니다.",
      "온프레미스 데이터 센터에 AWS DataSync 에이전트를 설치합니다.",
      "데이터에 대한 EC2 인스턴스에 보조 Amazon Elastic Block Store(Amazon EBS) 볼륨을 \n생성합니다.",
      "수동으로 운영 체제 복사 명령을 사용하여 데이터를 EC2 인스턴스로 푸시합니다.",
      "AWS DataSync 를 사용하여 온프레미스 SFTP 서버에 적합한 위치 구성을 생성합니다."
    ],
    "answer": [1, 4],
    "explanation": "정답은 B와 E입니다. 온프레미스 SFTP 서버의 데이터를 AWS EFS로 자동화하여 마이그레이션하려면 'AWS DataSync'가 최적의 도구입니다. 에이전트 설치와 위치 구성은 필수 단계입니다.\n\nhttps://aws.amazon.com/datasync/",
    "glossary": {
      "AWS DataSync": "온프레미스 스토리지와 AWS 서비스 간의 대량 데이터 전송을 빠르고 안전하게 자동화하는 서비스",
      "EFS": "여러 EC2 인스턴스가 동시에 공유해서 사용할 수 있는 서버리스 파일 시스템"
    }
  },
  {
    "id": 103,
    "question": "회사에 매일 같은 시간에 실행되는 AWS Glue 추출, 변환 및 로드(ETL) 작업이 있습니다. \n작업은 Amazon S3 버킷에 있는 XML 데이터를 처리합니다. 매일 새로운 데이터가 S3 \n버킷에 추가됩니다. 솔루션 설계자는 AWS Glue 가 각 실행 중에 모든 데이터를 처리하고 \n있음을 알아차렸습니다. \n솔루션 아키텍트는 AWS Glue 가 오래된 데이터를 재처리하지 못하도록 하려면 어떻게 해야 \n합니까?",
    "options": [
      "작업 북마크를 사용하도록 작업을 편집합니다.",
      "데이터가 처리된 후 데이터를 삭제하도록 작업을 편집합니다.",
      "NumberOfWorkers 필드를 1 로 설정하여 작업을 편집합니다.",
      "FindMatches 기계 학습(ML) 변환을 사용합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. AWS Glue ETL 작업이 이전에 처리한 데이터를 기억하고 새로 추가된 데이터만 처리하게 하려면 '작업 북마크(Job Bookmarks)' 기능을 활성화해야 합니다.\n\nhttps://aws.amazon.com/glue/",
    "glossary": {
      "Job Bookmarks": "AWS Glue가 이전 ETL 실행 중에 처리된 데이터를 추적하여 중복 처리를 방지하는 기능",
      "S3": "AWS에서 제공하는 확장성이 뛰어나고 내구성이 높은 객체 스토리지 서비스"
    }
  },
  {
    "id": 104,
    "question": "솔루션 설계자는 웹사이트를 위한 고가용성 인프라를 설계해야 합니다. 웹 사이트는 \nAmazon EC2 인스턴스에서 실행되는 Windows 웹 서버에 의해 구동됩니다. 솔루션 \n설계자는 수천 개의 IP 주소에서 시작되는 대규모 DDoS 공격을 완화할 수 있는 솔루션을 \n구현해야 합니다. 다운타임은 웹사이트에 허용되지 않습니다. \n솔루션 설계자는 이러한 공격으로부터 웹사이트를 보호하기 위해 어떤 조치를 취해야 \n합니까? (2 개를 선택하세요.)",
    "options": [
      "AWS Shield Advanced 를 사용하여 DDoS 공격을 차단하십시오.",
      "공격자를 자동으로 차단하도록 Amazon GuardDuty 를 구성합니다.",
      "정적 및 동적 콘텐츠 모두에 Amazon CloudFront\n를 사용하도록 웹 사이트를 \n구성합니다.",
      "AWS Lambda 함수를 사용하여 VPC 네트워크 ACL 에 공격자 IP 주소를 자동으로 \n추가합니다.",
      "80% CPU 사용률로 설정된 대상 추적 조정 정책과 함께 Auto Scaling 그룹의 EC2 스팟 \n인스턴스를 사용합니다."
    ],
    "answer": [0, 2],
    "explanation": "정답은 A와 C입니다. 대규모 DDoS 공격으로부터 웹사이트를 보호하려면 'AWS Shield Advanced'와 'Amazon CloudFront'의 글로벌 엣지 거점을 활용한 분산 방어 전략이 가장 효과적입니다.\n\nhttps://aws.amazon.com/shield/",
    "glossary": {
      "AWS Shield Advanced": "표준형보다 강력한 보호 기능을 제공하며, DDoS 공격 발생 시 대응 팀의 지원을 받을 수 있는 서비스",
      "DDoS": "수많은 컴퓨터를 동원해 웹 사이트에 과부하를 일으켜 마비시키는 공격 방식"
    }
  },
  {
    "id": 105,
    "question": "회사에서 새로운 서버리스 워크로드를 배포할 준비를 하고 있습니다. 솔루션 설계자는 최소 \n권한 원칙을 사용하여 AWS Lambda 함수를 실행하는 데 사용할 권한을 구성해야 합니다. \nAmazon EventBridge(Amazon CloudWatch Events) 규칙이 함수를 호출합니다. \n어떤 솔루션이 이러한 요구 사항을 충족 합니까?",
    "options": [
      "lambda:InvokeFunction 을 작업으로, *를 보안 주체로 사용하여 함수에 실행 역할을 \n추가합니다.",
      "작업으로 \nlambda:InvokeFunction\n을 \n사용하고 \n보안 \n주체로 \nService: \nlambda.amazonaws.com 을 사용하여 함수에 실행 역할을 추가합니다.",
      "작업으로 lambda:*를 사용하고 보안 주체로 Service: events.amazonaws.com\n을 \n사용하여 리소스 기반 정책을 함수에 추가합니다.",
      "lambda:InvokeFunction 을 작업으로, Service: events.amazonaws.com 을 보안 주체로 \n사용하여 리소스 기반 정책을 함수에 추가합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. EventBridge가 Lambda를 호출할 수 있게 허용할 때는 '리소스 기반 정책'을 함수에 추가하세요. 최소 권한 원칙에 따라 호출 권한(InvokeFunction)만 부여하는 것이 안전합니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "최소 권한 원칙 (Least Privilege)": "작업 수행에 꼭 필요한 만큼의 권한만 부여하여 보안 사고를 예방하는 원칙",
      "Resource-based Policy": "사용자가 아닌 리소스(Lambda 등)에 직접 연결하여 누가 이 리소스를 사용할 수 있는지 정의하는 정책"
    }
  },
  {
    "id": 106,
    "question": "회사에서 Amazon S3 에 기밀 데이터를 저장할 준비를 하고 있습니다. 규정 준수를 위해 \n미사용 데이터를 암호화해야 합니다. 암호화 키 사용은 감사 목적으로 기록되어야 합니다. \n키는 매년 순환해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": [
      "고객 제공 키를 사용한 서버 측 암호화(SSE-C)",
      "Amazon S3 관리형 키를 사용한 서버 측 암호화(SSE-S3)",
      "수동 교체가 있는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화",
      "자동 교체 기능이 있는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화"
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 감사 기록과 매년 자동 키 교체 요구 사항을 충족하려면 AWS KMS(SSE-KMS)를 사용하고 '자동 키 교체' 옵션을 켜두는 것이 운영 부담이 가장 적습니다.\n\nhttps://aws.amazon.com/kms/",
    "glossary": {
      "AWS KMS": "데이터를 암호화하는 데 사용되는 가상 키를 생성하고 관리해주는 보안 서비스",
      "Key Rotation (키 순환)": "보안을 위해 주기적으로 새로운 키를 생성하여 기존 키를 대체하는 작업"
    }
  },
  {
    "id": 107,
    "question": "자전거 공유 회사는 피크 운영 시간 동안 자전거의 위치를 추적하기 위해 다층 아키텍처를 \n개발하고 있습니다. 회사는 기존 분석 플랫폼에서 이러한 데이터 포인트를 사용하려고 \n합니다. 솔루션 설계자는 이 아키텍처를 지원하기 위해 가장 실행 가능한 다중 계층 옵션을 \n결정해야 합니다. 데이터 포인트는 REST API 에서 액세스할 수 있어야 합니다. \n위치 데이터 저장 및 검색에 대한 이러한 요구 사항을 충족하는 작업은 무엇입니까?",
    "options": [
      "Amazon S3 와 함께 Amazon Athena 를 사용하십시오.",
      "AWS Lambda 와 함께 Amazon API Gateway 를 사용합니다.",
      "Amazon Redshift 와 함께 Amazon QuickSight 를 사용합니다.",
      "Amazon Kinesis Data Analytics 와 함께 Amazon API Gateway 를 사용합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 위치 데이터를 수집하고 외부에서 REST API로 접근하게 만들려면 서버리스의 정석인 'Amazon API Gateway'와 'AWS Lambda' 조합이 확장성과 운영 효율 면에서 압도적입니다.\n\nhttps://aws.amazon.com/api-gateway/",
    "glossary": {
      "API Gateway": "개발자가 API를 쉽게 생성, 게시, 관리 및 보호할 수 있도록 도와주는 완전관리형 서비스",
      "REST API": "웹의 장점을 활용할 수 있는 아키텍처 스타일을 따르는 HTTP 기반의 API 인터페이스"
    }
  },
  {
    "id": 108,
    "question": "한 회사에 Amazon RDS 의 데이터베이스에 목록을 저장하는 자동차 판매 웹사이트가 \n있습니다. 자동차가 판매되면 웹사이트에서 목록을 제거해야 하고 데이터를 여러 대상 \n시스템으로 보내야 합니다. \n솔루션 아키텍트는 어떤 디자인을 추천해야 할까요?",
    "options": [
      "Amazon RDS 의 데이터베이스가 업데이트되어 대상이 소비할 Amazon Simple Queue \nService(Amazon SQS) 대기열로 정보를 보내도록 업데이트될 때 트리거되는 AWS Lambda \n함수를 생성합니다.",
      "Amazon RDS 의 데이터베이스가 대상이 사용할 Amazon Simple Queue Service(Amazon \nSQS) FIFO 대기열로 정보를 보내도록 업데이트될 때 트리거되는 AWS Lambda 함수를 \n생성합니다.",
      "RDS 이벤트 알림을 구독하고 여러 Amazon Simple Notification Service(Amazon SNS) \n주제로 팬아웃된 Amazon Simple Queue Service(Amazon SQS) 대기열을 보냅니다. AWS \nLambda 함수를 사용하여 대상을 업데이트합니다.",
      "RDS 이벤트 알림을 구독하고 Amazon Simple Notification Service(Amazon SNS) 주제를 \n여러 Amazon Simple Queue Service(Amazon SQS) 대기열로 보냅니다. AWS Lambda \n함수를 사용하여 대상을 업데이트합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 하나의 이벤트를 여러 시스템으로 동시에 퍼뜨리는 '팬아웃' 구조를 만들려면 SNS 주제를 중심으로 여러 SQS 대기열을 구독시키는 방식이 가장 유연하고 견고합니다.\n\nhttps://aws.amazon.com/sns/",
    "glossary": {
      "Fan-out (팬아웃)": "하나의 메시지를 여러 수신자에게 동시에 복제하여 전달하는 아키텍처 패턴",
      "Amazon SNS": "구독 중인 엔드포인트나 사용자에게 메시지를 푸시해주는 완전관리형 알림 서비스"
    }
  },
  {
    "id": 109,
    "question": "회사는 Amazon S3 에 데이터를 저장해야 하며 데이터가 변경되지 않도록 해야 합니다. \n회사는 Amazon S3 에 업로드된 새 객체가 회사가 객체를 수정하기로 결정할 때까지 \n일정하지 않은 시간 동안 변경할 수 없는 상태로 유지되기를 원합니다. 회사 AWS 계정의 \n특정 사용자만 객체를 삭제할 수 있습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "S3 Glacier 볼트를 생성합니다. WORM(Write-Once, Read-Many) 볼트 잠금 정책을 \n개체에 적용합니다.",
      "S3 객체 잠금이 활성화된 S3 버킷을 생성합니다. 버전 관리를 활성화합니다. 보존 \n기간을 100 년으로 설정합니다. 거버넌스 모드를 새 객체에 대한 S3 버킷의 기본 보존 \n모드로 사용합니다.",
      "S3 버킷을 생성합니다. AWS CloudTrail 을 사용하여 객체를 수정하는 모든 S3 API \n이벤트를 추적합니다. 통지 시 회사가 보유한 모든 백업 버전에서 수정된 개체를 \n복원합니다.",
      "S3 객체 잠금이 활성화된 S3 버킷을 생성합니다. 버전 관리를 활성화합니다. 개체에 \n법적 \n보존을 \n추가합니다. \n객체를 \n삭제해야 \n하는 \n사용자의 \nIAM \n정책에 \ns3:PutObjectLegalHold 권한을 추가합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 정해진 기간이 아닌 해제할 때까지 무기한으로 파일을 보호하고 싶다면 S3 객체 잠금의 '법적 보존(Legal Hold)' 모드를 사용하세요. 특정 권한자만 이를 관리할 수 있어 안전합니다.\n\nhttps://aws.amazon.com/s3/features/object-lock/",
    "glossary": {
      "S3 Object Lock": "지정된 기간 또는 무기한으로 객체가 삭제되거나 덮어쓰기되는 것을 방지하는 기능",
      "Legal Hold (법적 보존)": "만료 기간이 정해지지 않은 상태에서 잠금을 유지하는 기능으로, 수동으로 해제하기 전까지 객체를 보호함"
    }
  },
  {
    "id": 110,
    "question": "소셜 미디어 회사는 사용자가 웹사이트에 이미지를 업로드할 수 있도록 합니다. 웹 \n사이트는 Amazon EC2 인스턴스에서 실행됩니다. 업로드 요청 중에 웹 사이트는 이미지의 \n크기를 표준 크기로 조정하고 크기가 조정된 이미지를 Amazon S3 에 저장합니다. 사용자가 \n웹 사이트에 대한 느린 업로드 요청을 경험하고 있습니다. \n회사는 애플리케이션 내 커플링을 줄이고 웹사이트 성능을 개선해야 합니다. 솔루션 \n설계자는 이미지 업로드를 위한 운영상 가장 효율적인 프로세스를 설계해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 취해야 하는 조치의 조합은 무엇입니까? \n(2 개를 선택하세요.)",
    "options": [
      "S3 Glacier 에 이미지를 업로드하도록 애플리케이션을 구성합니다.",
      "원본 이미지를 Amazon S3 에 업로드하도록 웹 서버를 구성합니다.",
      "미리 서명된 URL 을 사용하여 각 사용자의 브라우저에서 Amazon S3 로 이미지를 직접 \n업로드하도록 애플리케이션 구성",
      "이미지가 업로드될 때 AWS Lambda 함수를 호출하도록 S3 이벤트 알림을 구성합니다. \n기능을 사용하여 이미지 크기를 조정합니다.",
      "업로드된 이미지의 크기를 조정하기 위해 일정에 따라 AWS Lambda 함수를 호출하는 \nAmazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다."
    ],
    "answer": [2, 3],
    "explanation": "정답은 C와 D입니다. 웹 서버의 짐을 덜어주려면 사용자 브라우저에서 S3로 직접 업로드(Pre-signed URL)하게 하고, 업로드 완료 이벤트를 받아 Lambda가 이미지 크기를 조정하게 설계하세요.\n\nhttps://aws.amazon.com/s3/",
    "glossary": {
      "Pre-signed URL": "보안 자격 증명을 공유하지 않고도 특정 시간 동안 S3에 파일을 직접 업로드할 수 있게 해주는 임시 URL",
      "S3 Event Notification": "S3 버킷에서 파일 업로드 같은 이벤트가 발생했을 때 Lambda 등을 자동 실행하는 기능"
    }
  },
  {
    "id": 111,
    "question": "한 회사는 최근에 메시지 처리 시스템을 AWS 로 마이그레이션했습니다. 시스템은 Amazon \nEC2 인스턴스에서 실행되는 ActiveMQ 대기열로 메시지를 수신합니다. 메시지는 Amazon \nEC2\n에서 실행되는 소비자 애플리케이션에 의해 처리됩니다. 소비자 애플리케이션은 \n메시지를 처리하고 결과를 Amazon EC2 에서 실행되는 MySQL 데이터베이스에 씁니다. \n회사는 이 애플리케이션이 낮은 운영 복잡성으로 고가용성을 갖기를 원합니다. \n가장 높은 가용성을 제공하는 아키텍처는 무엇입니까?",
    "options": [
      "다른 가용 영역에 두 번째 ActiveMQ 서버를 추가합니다. 다른 가용 영역에 소비자 EC2 \n인스턴스를 추가합니다. MySQL 데이터베이스를 다른 가용 영역에 복제합니다.",
      "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 다른 가용 \n영역에 소비자 EC2 인스턴스를 추가합니다. MySQL 데이터베이스를 다른 가용 영역에 \n복제합니다.",
      "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 다른 가용 \n영역에 소비자 EC2 인스턴스를 추가합니다. 다중 AZ 가 활성화된 MySQL 용 Amazon \nRDS 를 사용합니다.",
      "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 두 가용 \n영역에 걸쳐 소비자 EC2 인스턴스에 대한 Auto Scaling 그룹을 추가합니다. 다중 AZ 가 \n활성화된 MySQL 용 Amazon RDS 를 사용합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 기존의 ActiveMQ 환경을 고가용성으로 바꾸려면 관리형인 Amazon MQ(Active/Standby)와 RDS Multi-AZ, 그리고 소비자의 자동 확장을 위한 Auto Scaling 그룹을 결합하세요.\n\nhttps://aws.amazon.com/amazon-mq/",
    "glossary": {
      "Amazon MQ": "ActiveMQ, RabbitMQ 같은 오픈소스 메시지 브로커를 AWS에서 관리해주는 서비스",
      "RDS Multi-AZ": "두 개의 가용 영역에 데이터베이스를 배치하여 장애 시 자동으로 보조 DB로 전환되는 고가용성 옵션"
    }
  },
  {
    "id": 112,
    "question": "회사는 \n들어오는 \n요청을 \n처리하는 \n온프레미스 \n서버 \n집합에서 \n컨테이너화된 \n웹 \n애플리케이션을 호스팅합니다. 요청 수가 빠르게 증가하고 있습니다. 온프레미스 서버는 \n증가된 요청 수를 처리할 수 없습니다. 회사는 최소한의 코드 변경과 최소한의 개발 \n노력으로 애플리케이션을 AWS 로 옮기기를 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Elastic Container Service(Amazon ECS)에서 AWS Fargate 를 사용하여 Service \nAuto Scaling\n으로 컨테이너화된 웹 애플리케이션을 실행합니다. Application Load \nBalancer 를 사용하여 수신 요청을 배포합니다.",
      "두 개의 Amazon EC2 인스턴스를 사용하여 컨테이너화된 웹 애플리케이션을 \n호스팅합니다. Application Load Balancer 를 사용하여 수신 요청을 배포합니다.",
      "지원되는 언어 중 하나를 사용하는 새 코드와 함께 AWS Lambda 를 사용합니다. 로드를 \n지원하기 위해 여러 Lambda 함수를 생성합니다. Amazon API Gateway 를 Lambda 함수에 \n대한 진입점으로 사용합니다.",
      "AWS ParallelCluster 와 같은 고성능 컴퓨팅(HPC) 솔루션을 사용하여 적절한 규모로 \n들어오는 요청을 처리할 수 있는 HPC 클러스터를 설정합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 컨테이너화된 앱을 서버 관리 없이 자동으로 늘리고 줄이며 운영하고 싶다면 Fargate 기반의 ECS를 사용하세요. 로드 밸런서(ALB) 연동을 통해 안정적인 서비스가 가능합니다.\n\nhttps://aws.amazon.com/fargate/",
    "glossary": {
      "AWS Fargate": "서버나 클러스터를 직접 관리할 필요 없이 컨테이너를 실행할 수 있는 서버리스 엔진",
      "Application Load Balancer (ALB)": "애플리케이션 계층(Layer 7)에서 들어오는 트래픽을 여러 대상으로 골고루 분산해주는 장치"
    }
  },
  {
    "id": 113,
    "question": "회사는 보고를 위해 50TB 의 데이터를 사용합니다. 회사는 이 데이터를 온프레미스에서 \nAWS 로 이동하려고 합니다. 회사 데이터 센터의 사용자 지정 응용 프로그램은 매주 데이터 \n변환 작업을 실행합니다. 회사는 데이터 이전이 완료되고 가능한 한 빨리 이전 프로세스를 \n시작해야 할 때까지 응용 프로그램을 일시 중지할 계획입니다. \n데이터 센터에는 추가 워크로드에 사용할 수 있는 네트워크 대역폭이 없습니다. 솔루션 \n설계자는 데이터를 전송하고 AWS 클라우드에서 계속 실행되도록 변환 작업을 구성해야 \n합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS DataSync 를 사용하여 데이터를 이동합니다. AWS Glue 를 사용하여 사용자 지정 \n변환 작업을 생성합니다.",
      "AWS Snowcone 디바이스에 데이터를 이동하도록 주문합니다. 장치에 변환 응용 \n프로그램을 배포합니다.",
      "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. 데이터를 장치에 \n복사합니다. AWS Glue 를 사용하여 사용자 지정 변환 작업을 생성합니다.",
      "Amazon EC2 컴퓨팅이 포함된 AWS Snowball Edge Storage Optimized 디바이스를 \n주문합니다. 데이터를 장치에 복사합니다. AWS 에서 새 EC2 인스턴스를 생성하여 변환 \n애플리케이션을 실행합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 50TB의 대량 데이터를 대역폭 걱정 없이 옮기려면 Snowball Edge를 사용하고, 옮긴 후의 복잡한 변환 작업은 서버리스 데이터 통합 도구인 AWS Glue에게 맡기세요.\n\nhttps://aws.amazon.com/snowball/",
    "glossary": {
      "AWS Snowball Edge": "인터넷 대신 물리적인 장비를 사용하여 테라바이트급 데이터를 AWS로 전송하는 서비스",
      "AWS Glue": "데이터를 추출, 변환, 로드(ETL)할 수 있도록 도와주는 완전관리형 데이터 통합 서비스"
    }
  },
  {
    "id": 114,
    "question": "한 회사는 사용자가 사진을 업로드하고 이미지에 액자를 추가할 수 있는 이미지 분석 응용 \n프로그램을 만들었습니다. 사용자는 이미지와 메타데이터를 업로드하여 이미지에 추가할 \n사진 프레임을 나타냅니다. 애플리케이션은 단일 Amazon EC2 인스턴스와 Amazon \nDynamoDB 를 사용하여 메타데이터를 저장합니다. \n응용 프로그램이 대중화되고 사용자 수가 증가하고 있습니다. 회사는 동시 접속자 수가 \n시간과 요일에 따라 크게 달라질 것으로 예상하고 있습니다. 회사는 증가하는 사용자 \n기반의 요구 사항을 충족하도록 애플리케이션을 확장할 수 있는지 확인해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니다?",
    "options": [
      "AWS Lambda 를 사용하여 사진을 처리합니다. 사진과 메타데이터를 DynamoDB 에 \n저장합니다.",
      "Amazon Kinesis Data Firehose 를 사용하여 사진을 처리하고 사진과 메타데이터를 \n저장합니다.",
      "AWS Lambda 를 사용하여 사진을 처리합니다. Amazon S3 에 사진을 저장합니다. \nDynamoDB 를 유지하여 메타데이터를 저장합니다.",
      "EC2 인스턴스 수를 3 개로 늘립니다. 프로비저닝된 IOPS SSD(io2) Amazon Elastic Block \nStore(Amazon EBS) 볼륨을 사용하여 사진과 메타데이터를 저장합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 사진 파일은 무한 저장소인 S3에, 메타데이터는 번개처럼 빠른 DynamoDB에 나눠 담으세요. 처리는 Lambda에게 맡기면 사용자 수 변화에 유연하게 대응하는 정석 설계가 완성됩니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "DynamoDB": "어떤 규모에서도 10밀리초 미만의 성능을 제공하는 완전관리형 NoSQL 데이터베이스",
      "Serverless (서버리스)": "사용자가 서버를 직접 관리하지 않고 클라우드가 리소스를 자동으로 제어하는 컴퓨팅 방식"
    }
  },
  {
    "id": 115,
    "question": "의료 기록 회사는 Amazon EC2 인스턴스에서 애플리케이션을 호스팅하고 있습니다. \n애플리케이션은 Amazon S3 에 저장된 고객 데이터 파일을 처리합니다. EC2 인스턴스는 \n퍼블릭 서브넷에서 호스팅됩니다. EC2 인스턴스는 인터넷을 통해 Amazon S3\n에 \n액세스하지만 다른 네트워크 액세스는 필요하지 않습니다. \n새로운 요구 사항은 파일 전송을 위한 네트워크 트래픽이 인터넷을 통해 전송되지 않고 \n개인 경로를 사용하도록 규정하고 있습니다. \n솔루션 설계자가 이 요구 사항을 충족하기 위해 권장해야 하는 네트워크 아키텍처 변경 \n사항은 무엇입니까?",
    "options": [
      "NAT 게이트웨이를 생성합니다. NAT 게이트웨이를 통해 Amazon S3\n로 트래픽을 \n전송하도록 퍼블릭 서브넷에 대한 라우팅 테이블을 구성합니다.",
      "S3 접두사 목록에 대한 트래픽만 허용되도록 아웃바운드 트래픽을 제한하도록 EC2 \n인스턴스에 대한 보안 그룹을 구성합니다.",
      "EC2 인스턴스를 프라이빗 서브넷으로 이동합니다. Amazon S3 용 VPC 엔드포인트를 \n생성하고 엔드포인트를 프라이빗 서브넷의 라우팅 테이블에 연결합니다.",
      "VPC 에서 인터넷 게이트웨이를 제거합니다. AWS Direct Connect 연결을 설정하고 Direct \nConnect 연결을 통해 Amazon S3 로 트래픽을 라우팅합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. S3 트래픽이 인터넷으로 새나가지 않게 하려면 전용 통로인 '게이트웨이 VPC 엔드포인트'를 설치하세요. 보안 규정 준수와 데이터 전송 안정성을 한 번에 해결할 수 있습니다.\n\nhttps://aws.amazon.com/vpc/endpoints/",
    "glossary": {
      "VPC Endpoint": "인터넷 게이트웨이 없이 VPC와 지원되는 AWS 서비스 간에 비공격인 프라이빗 연결을 제공하는 기술",
      "Private Subnet": "인터넷에서 직접 접근할 수 없는 가상 네트워크 구역으로 내부 리소스 보호에 사용됨"
    }
  },
  {
    "id": 116,
    "question": "회사는 회사 웹 사이트에 널리 사용되는 CMS(콘텐츠 관리 시스템)를 사용합니다. 그러나 \n필요한 패치 및 유지 관리가 부담됩니다. 회사는 웹사이트를 재설계하고 있으며 새로운 \n솔루션을 원합니다. 웹사이트는 1 년에 4 번 업데이트되며 사용 가능한 동적 콘텐츠가 \n필요하지 않습니다. 솔루션은 높은 확장성과 향상된 보안을 제공해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 변경 조합은 무엇입니까? (2 개를 \n선택하세요.)",
    "options": [
      "HTTPS 기능을 사용하도록 웹 사이트 앞에 Amazon CloudFront 를 구성합니다.",
      "웹 사이트 앞에 AWS WAF 웹 ACL 을 배포하여 HTTPS 기능을 제공합니다.",
      "웹 사이트 콘텐츠를 관리하고 제공하기 위해 AWS Lambda 함수를 생성 및 배포합니다.",
      "새 웹 사이트와 Amazon S3 버킷을 생성합니다. 정적 웹 사이트 호스팅이 활성화된 S3 \n버킷에 웹 사이트를 배포합니다.",
      "새 웹사이트를 만듭니다. Application Load Balancer 뒤에서 Amazon EC2 인스턴스의 \nAuto Scaling 그룹을 사용하여 웹 사이트를 배포합니다."
    ],
    "answer": [0, 3],
    "explanation": "정답은 A와 D입니다. 1년에 고작 4번 바뀌는 정적 사이트라면 S3 정적 호스팅이 제일 쌉니다. 여기에 CloudFront를 씌우면 전 세계 어디서든 빠르고 보안이 강화된 HTTPS 환경을 제공할 수 있습니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "Static Web Hosting": "S3 버킷을 사용하여 HTML, CSS, 이미지 같은 정적 파일을 웹 사이트로 서비스하는 기능",
      "CloudFront": "전 세계 사용자에게 빠른 속도로 콘텐츠를 전달하고 SSL/TLS 암호화를 제공하는 CDN 서비스"
    }
  },
  {
    "id": 117,
    "question": "회사는 Amazon CloudWatch Logs 로그 그룹에 애플리케이션 로그를 저장합니다. 새로운 \n정책에 따라 회사는 거의 실시간으로 Amazon OpenSearch Service(Amazon Elasticsearch \nService)에 모든 애플리케이션 로그를 저장해야 합니다. \n최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "로그를 Amazon OpenSearch Service(Amazon Elasticsearch Service)로 스트리밍하도록 \nCloudWatch Logs 구독을 구성합니다.",
      "AWS Lambda 함수를 생성합니다. 로그 그룹을 사용하여 함수를 호출하여 Amazon \nOpenSearch Service(Amazon Elasticsearch Service)에 로그를 기록합니다.",
      "Amazon Kinesis Data Firehose 전송 스트림을 생성합니다. 전송 스트림 소스로 로그 \n그룹을 구성합니다. Amazon OpenSearch Service(Amazon Elasticsearch Service)를 전송 \n스트림의 대상으로 구성합니다.",
      "각 애플리케이션 서버에 Amazon Kinesis Agent 를 설치하고 구성하여 Amazon Kinesis \nData Streams 에 로그를 전달합니다. Amazon OpenSearch Service(Amazon Elasticsearch \nService)에 로그를 전달하도록 Kinesis Data Streams 를 구성합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 실시간 로그 분석을 위해 OpenSearch로 데이터를 보내고 싶다면 CloudWatch Logs의 '구독 필터' 기능을 활용하세요. 코딩 없이 설정만으로 로그를 스트리밍할 수 있습니다.\n\nhttps://aws.amazon.com/opensearch-service/",
    "glossary": {
      "CloudWatch Logs Subscription": "로그 이벤트를 실시간으로 다른 소스(Lambda, Kinesis, OpenSearch 등)로 전송해주는 필터 기능",
      "OpenSearch Service": "로그 분석, 실시간 애플리케이션 모니터링 및 웹 사이트 검색을 위해 사용되는 오픈소스 분석 엔진"
    }
  },
  {
    "id": 118,
    "question": "회사는 여러 가용 영역의 Amazon EC2 인스턴스에서 실행되는 웹 기반 애플리케이션을 \n구축하고 있습니다. 웹 애플리케이션은 약 900TB 크기의 텍스트 문서 저장소에 대한 \n액세스를 제공합니다. 회사는 웹 응용 프로그램이 수요가 많은 기간을 경험할 것으로 \n예상합니다. 솔루션 설계자는 텍스트 문서의 스토리지 구성 요소가 애플리케이션의 요구 \n사항을 항상 충족할 수 있도록 확장할 수 있는지 확인해야 합니다. 회사는 솔루션의 전체 \n비용에 대해 우려하고 있습니다. \n어떤 스토리지 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      "Amazon Elastic Block Store(Amazon EBS)",
      "Amazon Elastic File System(Amazon EFS)",
      "Amazon OpenSearch Service(Amazon Elasticsearch Service)",
      "Amazon S3"
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 900TB 규모의 막대한 텍스트 문서를 가장 저렴하게 보관하면서도 무한히 확장할 수 있는 안식처는 Amazon S3입니다. 내구성과 가성비 면에서 S3를 따라올 서비스가 없습니다.\n\nhttps://aws.amazon.com/s3/",
    "glossary": {
      "Amazon S3": "데이터 보존 용량에 제한이 없고 내구성이 매우 뛰어나 객체 기반 스토리지 서비스",
      "Cost-Effectiveness (비용 효율성)": "성능을 유지하면서도 비용을 최소화하는 클라우드 설계의 핵심 목표"
    }
  },
  {
    "id": 119,
    "question": "글로벌 회사는 Amazon API Gateway 를 사용하여 us-east-1 리전 및 ap-southeast-2 \n리전의 로열티 클럽 사용자를 위한 REST API 를 설계하고 있습니다. 솔루션 설계자는 SQL \n주입 및 교차 사이트 스크립팅 공격으로부터 여러 계정에서 이러한 API Gateway 관리 \nREST API 를 보호하는 솔루션을 설계해야 합니다. \n최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "두 리전에 AWS WAF 를 설정합니다. 리전 웹 ACL 을 API 단계와 연결합니다.",
      "두 리전에 AWS Firewall Manager 를 설정합니다. AWS WAF 규칙을 중앙에서 구성합니다.",
      "목욕 리전에서 AWS Shield 를 설정합니다. 리전 웹 ACL 을 API 단계와 연결합니다.",
      "한 리전에서 AWS Shield 를 설정합니다. 리전 웹 ACL 을 API 단계와 연결합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 여러 계정과 리전에 흩어진 API 게이트웨이의 보안 규칙을 한곳에서 일관되게 관리하고 싶다면 AWS Firewall Manager가 유일한 해결책입니다. WAF 규칙을 중앙에서 제어하세요.\n\nhttps://aws.amazon.com/firewall-manager/",
    "glossary": {
      "Firewall Manager": "여러 계정과 리소스에 걸쳐 WAF, Shield 규칙을 중앙에서 일관되게 관리할 수 있는 서비스",
      "WAF (Web Application Firewall)": "HTTP 트래픽을 필터링하여 웹 애플리케이션을 겨냥한 일반적인 웹 공격을 차단하는 보안 서비스"
    }
  },
  {
    "id": 120,
    "question": "한 회사는 us-west-2 리전의 NLB(Network Load Balancer) 뒤에 있는 3 개의 Amazon EC2 \n인스턴스에 자체 관리형 DNS 솔루션을 구현했습니다. 회사 사용자의 대부분은 미국과 \n유럽에 있습니다. 회사는 솔루션의 성능과 가용성을 개선하기를 원합니다. 회사는 \neu-west-1 리전에서 3 개의 EC2 인스턴스를 시작 및 구성하고 EC2 인스턴스를 새 NLB 의 \n대상으로 추가합니다. \n회사에서 트래픽을 모든 EC2 인스턴스로 라우팅하는 데 사용할 수 있는 솔루션은 \n무엇입니까?",
    "options": [
      "두 NLB 중 하나로 요청을 라우팅하는 Amazon Route 53 지리적 위치 라우팅 정책을 \n생성합니다. Amazon CloudFront 배포를 생성합니다. Route 53 레코드를 배포의 오리진으로 \n사용합니다.",
      "AWS Global Accelerator\n에서 표준 액셀러레이터를 생성합니다. us-west-2 및 \neu-west-1 에서 엔드포인트 그룹을 생성합니다. 엔드포인트 그룹에 대한 엔드포인트로 두 \n개의 NLB 를 추가하십시오.",
      "탄력적 IP 주소를 6 개의 EC2 인스턴스에 연결합니다. 6 개의 EC2 인스턴스 중 하나로 \n요청을 라우팅하는 Amazon Route 53 지리적 위치 라우팅 정책을 생성합니다. Amazon \nCloudFront 배포를 생성합니다. Route 53 레코드를 배포의 오리진으로 사용합니다.",
      "2 개의 NLB 를 2 개의 ALB(Application Load Balancer)로 교체합니다. 두 ALB 중 하나로 \n요청을 라우팅하는 Amazon Route 53 지연 시간 라우팅 정책을 생성합니다. Amazon \nCloudFront 배포를 생성합니다. Route 53 레코드를 배포의 오리진으로 사용합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 전 세계 사용자에게 가장 빠른 성능을 제공하면서 여러 나라에 흩어진 서버로 트래픽을 안내하고 싶다면 Global Accelerator를 사용하세요. AWS 전용망을 타는 전역 IP가 제공됩니다.\n\nhttps://aws.amazon.com/global-accelerator/",
    "glossary": {
      "Global Accelerator": "AWS 글로벌 네트워크를 통해 사용자 트래픽의 성능을 최대 60% 개선하고 지연 시간을 줄이는 서비스",
      "Anycast IP": "전 세계 여러 곳에서 동일한 IP를 사용하여 가장 가까운 엣지 로케이션으로 트래픽을 유도하는 방식"
    }
  },
  {
    "id": 121,
    "question": "회사는 AWS\n에서 OLTP(온라인 트랜잭션 처리) 워크로드를 실행하고 있습니다. 이 \n워크로드는 다중 AZ 배포에서 암호화되지 않은 Amazon RDS DB 인스턴스를 사용합니다. \n일일 데이터베이스 스냅샷은 이 인스턴스에서 가져옵니다. \n데이터베이스와 스냅샷이 앞으로 항상 암호화되도록 하려면 솔루션 설계자가 무엇을 해야 \n합니까?",
    "options": [
      "최신 DB 스냅샷 사본을 암호화합니다. 암호화된 스냅샷을 복원하여 기존 DB \n인스턴스를 교체합니다.",
      "새 암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성하고 여기에 \n스냅샷을 복사합니다. DB 인스턴스에서 암호화를 활성화합니다.",
      "AWS Key Management Service(AWS KMS)를 사용하여 스냅샷을 복사하고 암호화를 \n활성화합니다. 암호화된 스냅샷을 기존 DB 인스턴스로 복원합니다.",
      "AWS Key Management Service(AWS KMS) 관리형 키(SSE-KMS)로 서버 측 암호화를 \n사용하여 암호화된 Amazon S3 버킷에 스냅샷을 복사합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 이미 만들어진 RDS의 암호화를 뒤늦게 활성화할 순 없습니다. 최신 스냅샷을 '복사'하면서 암호화 옵션을 켜고, 그 스냅샷으로 새 DB를 복원하여 기존 것을 교체하는 게 정석입니다.\n\nhttps://aws.amazon.com/rds/",
    "glossary": {
      "DB Snapshot": "특정 시점의 데이터베이스 전체를 복사하여 백업해두는 이미지 파일",
      "Restoration (복원)": "백업 데이터나 스냅샷을 사용하여 데이터베이스를 정상 상태로 다시 구축하는 과정"
    }
  },
  {
    "id": 122,
    "question": "회사는 응용 프로그램의 데이터를 암호화해야 하는 개발자를 지원하기 위해 확장 가능한 키 \n관리 인프라를 구축하려고 합니다. \n솔루션 설계자는 운영 부담을 줄이기 위해 무엇을 해야 합니까?",
    "options": [
      "MFA(다단계 인증)를 사용하여 암호화 키를 보호합니다.",
      "AWS Key Management Service(AWS KMS)를 사용하여 암호화 키를 보호합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 암호화 키를 생성, 저장 및 할당합니다.",
      "IAM 정책을 사용하여 암호화 키를 보호할 수 있는 액세스 권한이 있는 사용자의 범위를 \n제한합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 수많은 개발자가 쓸 수 있는 키 관리 인프라를 운영 부담 없이 구축하려면 AWS KMS를 활용하세요. 키 생성부터 자동 교체, 권한 관리까지 AWS가 똑똑하게 다 책임져줍니다.\n\nhttps://aws.amazon.com/kms/",
    "glossary": {
      "AWS KMS": "보안 하드웨어(HSM)를 기반으로 고성능 키 관리 기능을 제공하는 완전관리형 서비스",
      "Operational Burden (운영 부담)": "시스템 유지 관리를 위해 인력이 들여야 하는 시간과 노력의 정도"
    }
  },
  {
    "id": 123,
    "question": "회사에 두 개의 Amazon EC2 인스턴스에서 호스팅되는 동적 웹 애플리케이션이 있습니다. \n회사에는 SSL 종료를 수행하기 위해 각 인스턴스에 있는 자체 SSL 인증서가 있습니다. \n최근 트래픽이 증가하고 있으며 운영팀은 SSL 암호화 및 복호화로 인해 웹 서버의 컴퓨팅 \n용량이 최대 한도에 도달했다고 판단했습니다. \n솔루션 설계자는 애플리케이션의 성능을 향상시키기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Certificate Manager(ACM)를 사용하여 새 SSL 인증서를 생성합니다. 각 인스턴스에 \nACM 인증서를 설치합니다.",
      "Amazon S3 버킷 생성 SSL 인증서를 S3 버킷으로 마이그레이션합니다. SSL 종료를 위해 \n버킷을 참조하도록 EC2 인스턴스를 구성합니다.",
      "다른 EC2 인스턴스를 프록시 서버로 생성합니다. SSL 인증서를 새 인스턴스로 \n마이그레이션하고 기존 EC2 인스턴스에 직접 연결하도록 구성합니다.",
      "SSL 인증서를 AWS Certificate Manager(ACM)로 가져옵니다. ACM 의 SSL 인증서를 \n사용하는 HTTPS 리스너로 Application Load Balancer 를 생성합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 서버가 매번 암호화를 푸느라 쩔쩔매고 있다면, 그 지루한 작업은 앞단의 로드 밸런서(ALB)에게 맡기세요. ACM 인증서와 결합하면 서버는 비즈니스 로직에만 온전히 집중하게 됩니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/",
    "glossary": {
      "SSL Termination (SSL 종료)": "서버 앞단(로드 밸런서 등)에서 암호화된 트래픽을 해독하여 서버에는 일반 트래픽으로 전달하는 기술",
      "ACM (AWS Certificate Manager)": "SSL/TLS 인증서를 무료로 또는 유료로 쉽게 발급받고 자동으로 갱신해주는 관리형 서비스"
    }
  },
  {
    "id": 124,
    "question": "회사에 많은 Amazon EC2 인스턴스를 사용하여 완료하는 매우 동적인 배치 처리 작업이 \n있습니다. 작업은 본질적으로 상태 비저장이며 부정적인 영향 없이 주어진 시간에 시작 및 \n중지할 수 있으며 일반적으로 완료하는 데 총 60 분 이상이 걸립니다. 회사는 솔루션 \n설계자에게 작업 요구 사항을 충족하는 확장 가능하고 비용 효율적인 솔루션을 설계하도록 \n요청했습니다. \n솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "EC2 스팟 인스턴스를 구현합니다.",
      "EC2 예약 인스턴스 구매.",
      "EC2 온디맨드 인스턴스를 구현합니다.",
      "AWS Lambda 에서 처리를 구현합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 언제 꺼져도 상관없는 배치 작업에는 '스팟 인스턴스'가 최고입니다. 정가 대비 최대 90% 저렴한 요금으로 대규모 병렬 처리를 수행하여 지갑을 두툼하게 지킬 수 있습니다.\n\nhttps://aws.amazon.com/ec2/spot/",
    "glossary": {
      "Spot Instance": "AWS의 남는 여유 자원을 경매 방식으로 저렴하게 사용하는 옵션으로, AWS가 필요할 경우 2분 전 예고 후 인스턴스를 회수할 수 있음",
      "Stateless (상태 비저장)": "작업 데이터가 서버 내부에 저장되지 않아 언제든 중단하거나 다른 서버에서 재시작 가능한 성질"
    }
  },
  {
    "id": 125,
    "question": "회사는 AWS 에서 2 계층 전자상거래 웹사이트를 운영합니다. 웹 계층은 트래픽을 Amazon \nEC2 인스턴스로 보내는 로드 밸런서로 구성됩니다. 데이터베이스 계층은 Amazon RDS DB \n인스턴스를 사용합니다. EC2 인스턴스 및 RDS DB 인스턴스는 공용 인터넷에 노출되어서는 \n안 됩니다. EC2 인스턴스는 타사 웹 서비스를 통한 주문 결제 처리를 완료하기 위해 인터넷 \n액세스가 필요합니다. 애플리케이션은 고가용성이어야 합니다. \n이러한 요구 사항을 충족하는 구성 옵션의 조합은 무엇입니까? (2 개를 선택하세요.)",
    "options": [
      "Auto Scaling 그룹을 사용하여 프라이빗 서브넷에서 EC2 인스턴스를 시작합니다. \n프라이빗 서브넷에 RDS 다중 AZ DB 인스턴스를 배포합니다.",
      "2 개의 가용 영역에 걸쳐 2 개의 프라이빗 서브넷과 2 개의 NAT 게이트웨이가 있는 \nVPC 를 구성합니다. 프라이빗 서브넷에 Application Load Balancer 를 배포합니다.",
      "Auto Scaling 그룹을 사용하여 2 개의 가용 영역에 걸쳐 퍼블릭 서브넷에서 EC2 \n인스턴스를 시작합니다. 프라이빗 서브넷에 RDS 다중 AZ DB 인스턴스를 배포합니다.",
      "2 개의 가용 영역에 걸쳐 1 개의 퍼블릭 서브넷, 1 개의 프라이빗 서브넷 및 2 개의 NAT \n게이트웨이로 VPC\n를 구성합니다. 퍼블릭 서브넷에 Application Load Balancer\n를 \n배포합니다.",
      "2 개의 가용 영역에 걸쳐 2 개의 퍼블릭 서브넷, 2 개의 프라이빗 서브넷 및 2 개의 NAT \n게이트웨이로 VPC\n를 구성합니다. 퍼블릭 서브넷에 Application Load Balancer\n를 \n배포합니다."
    ],
    "answer": [0, 4],
    "explanation": "정답은 A와 E입니다. 보안을 위해 서버와 DB는 프라이빗 구역(A)에 숨기고, 외부 손님을 위한 로드 밸런서는 퍼블릭 구역(E)에 두세요. 인터넷 접속은 NAT 게이트웨이를 통하는 정석 보안 설계입니다.\n\nhttps://aws.amazon.com/vpc/",
    "glossary": {
      "2-Tier Architecture": "웹/앱 계층과 데이터베이스 계층으로 분리된 전형적인 서버 인프라 설계",
      "NAT Gateway": "프라이빗 서브넷 인스턴스가 인터넷에 연결되도록 도와주는 게이트웨이"
    }
  }
];