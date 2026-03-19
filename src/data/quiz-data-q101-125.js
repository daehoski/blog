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
    "explanation": "www.examtopics.com/discussions/amazon/view/86019-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n프라이빗 서브넷에 있는 인스턴스가 외부 인터넷과 통신하기 위해선 NAT 게이트웨이가 \n필요. \nA(O) : 각 가용 영역의 퍼블릭 서브넷마다 NAT 게이트웨이를 두어야 함. 프라이빗 서브넷의 \n인스턴스는 퍼블릭 NAT 게이트웨이를 통해 인터넷에 연결. 퍼블릭 서브넷에서 퍼블릭 NAT \n게이트웨이를 생성하고 생성 시 탄력적 IP 주소를 NAT 게이트웨이와 연결해야 합니다. \n여러 가용 영역에 리소스가 있고 NAT 게이트웨이 하나를 공유하는 경우, NAT 게이트웨이의 \n가용 영역이 다운되면 다른 가용 영역의 리소스도 인터넷에 액세스할 수 없게 됩니다. 가용 \n영역과 독립적인 아키텍처를 만들려면 각 가용 영역에 NAT 게이트웨이를 만들고 리소스가",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
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
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85814-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(O) \nEFS 파일 시스템과 동일한 가용 영역으로 EC2 인스턴스 시작하는건 문제 없어보입니다.  \nB(O) : DataSync Agent 는 AWS 로 전송할 떄 필요 \n에이전트 는 AWS DataSync\n가 스토리지 시스템에서 읽거나 쓰는 데 사용하는 가상 \n머신(VM) 또는 Amazon EC2 인스턴스입니다 . 에이전트는 온프레미스 스토리지에서 \nAWS 로 데이터를 복사할 때 일반적으로 사용됩니다. \n\ndocs.aws.amazon.com/datasync/latest/userguide/working-with-agents.html \nDataSync 는 DataSync 위치와 같이 사용됨",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85781-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n이것이 북마크의 목적입니다. \"AWS Glue 는 작업 실행의 상태 정보를 유지하여 ETL 작업의 \n이전 실행 중에 이미 처리된 데이터를 추적합니다. 이 지속된 상태 정보를 작업 북마크라고 \n합니다. 작업 북마크는 AWS Glue 가 유지 관리하는 데 도움이 됩니다. 상태 정보를 \n제공하고 오래된 데이터의 재처리를 방지합니다.\" \n\ndocs.aws.amazon.com/glue/latest/dg/monitorcontinuations.html \n \n2: \nA(O) : AWS Glue 는 작업 실행의 상태 정보를 유지하여 이전에 ETL 작업을 실행할 때 이미 \n처리된 데이터를 추적합니다. 이와 같은 지속 상태 정보를 작업 북마크라고 합니다.  \n\ndocs.aws.amazon.com/ko_kr/glue/latest/dg/monitor-continuations.html \nB(X) : 처리한 데이터를 어디에 쓸 줄 알고 삭제하는지...?",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
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
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85342-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(O) : AWS Shield Advanced 보호는 네트워크 트래픽에 대한 상시 작동, 흐름 기반 \n모니터링과 적극적인 애플리케이션 모니터링을 통해 의심되는 DDoS 공격에 대한 거의 \n실시간 알림을 제공합니다. 또한 AWS Shield Advanced 는 공격을 자동으로 완화하기 위해 \n첨단 공격 완화 및 라우팅 기법을 적용합니다. \naws.amazon.com/ko/shield/faqs/ \nB(X) : GuardDuty 는 AWS 계정 보호 서비스. \nAmazon GuardDuty 는 AWS 계정 및 워크로드에서 악의적 활동을 모니터링하고 상세한 \n보안 결과를 제공하여 가시성 및 해결을 촉진하는 위협 탐지 서비스입니다. \n\naws.amazon.com/ko/guardduty/ \nC(O) : CloudFront 로도 DDoS 에 대처 가능. CloudFront 는 정적 및 동적 콘텐츠 모두에 \n작동. 또한 Amazon CloudFront, AWS Global Accelerator 및 Amazon Route 53 과 같은 엣지",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 105,
    "question": "회사에서 새로운 서버리스 워크로드를 배포할 준비를 하고 있습니다. 솔루션 설계자는 최소 \n권한 원칙을 사용하여 AWS Lambda 함수를 실행하는 데 사용할 권한을 구성해야 합니다. \nAmazon EventBridge(Amazon CloudWatch Events) 규칙이 함수를 호출합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "lambda:InvokeFunction 을 작업으로, *를 보안 주체로 사용하여 함수에 실행 역할을 \n추가합니다.",
      "작업으로 \nlambda:InvokeFunction\n을 \n사용하고 \n보안 \n주체로 \nService: \nlambda.amazonaws.com 을 사용하여 함수에 실행 역할을 추가합니다.",
      "작업으로 lambda:*를 사용하고 보안 주체로 Service: events.amazonaws.com\n을 \n사용하여 리소스 기반 정책을 함수에 추가합니다.",
      "lambda:InvokeFunction 을 작업으로, Service: events.amazonaws.com 을 보안 주체로 \n사용하여 리소스 기반 정책을 함수에 추가합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85816-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nLambda\n의 전체 기능이 아닌 lambda 함수 호출 기능(lambda:InvokeFunction)만 \n사용하도록 하고, 전체 보안 주체(*)가 아닌 아마존 이벤트 서비스만 보안 주체로",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 106,
    "question": "회사에서 Amazon S3 에 기밀 데이터를 저장할 준비를 하고 있습니다. 규정 준수를 위해 \n미사용 데이터를 암호화해야 합니다. 암호화 키 사용은 감사 목적으로 기록되어야 합니다. \n키는 매년 순환해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": [
      "고객 제공 키를 사용한 서버 측 암호화(SSE-C)",
      "Amazon S3 관리형 키를 사용한 서버 측 암호화(SSE-S3)",
      "수동 교체가 있는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화",
      "자동 교체 기능이 있는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화 \nAnswer: D  \nhttps://www.examtopics.com/discussions/amazon/view/85817-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \n감사 목적으로 기록되어야 함 = AWS KMS. 따라서 C,D 둘 중 하나가 정답. \n매년 키를 교체(rotate)해야하므로 운영 상 효율적인 방식은 수동이 아닌 자동 방식. 정답은",
      "설명2: \nhttps://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html \n\n=== PAGE 117 ===\n고객 관리형 키에 대해 자동 키 교체를 활성화하면 AWS KMS 는 매년 KMS 키에 대한 \n새로운 암호화 자료를 생성합니다. 또한 AWS KMS\n는 KMS 키가 암호화한 데이터를 \n해독하는 데 사용할 수 있도록 KMS 키의 이전 암호화 자료를 영구적으로 저장합니다. AWS \nKMS 의 키 순환은 투명하고 사용하기 쉽게 설계된 암호화 모범 사례입니다. AWS KMS 는 \n고객 관리형 CMK 에 대해서만 선택적 자동 키 교체를 지원합니다. 키 순환을 활성화 및 \n비활성화합니다. 자동 키 교체는 고객 관리형 CMK 에서 기본적으로 비활성화됩니다. 키 \n교체를 활성화(또는 재활성화)하면 AWS KMS 는 활성화 날짜로부터 365 일 후 그리고 이후 \n365 일마다 CMK 를 자동으로 교체합니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85212-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 기존 분석 플랫폼을 사용하려고 한다고 했으므로 분석 기능이 있는 Athena 제외. \nAmazon Athena 는 표준 SQL 을 사용해 Amazon S3 에 저장된 데이터를 간편하게 분석할 수 \n있는 대화식 쿼리 서비스입니다.  \n\naws.amazon.com/ko/athena/faqs/ \nB(O) : Lambda 는 512MB 의 임시 스토리지를 가지고 있기도 하고, S3 에 데이터를 저장할 \n수도 있으며, 지문에서는 [이러한 데이터 포인트를 사용하려고 합니다.] 라고 언급함과 \n동시에 [다중 계층 옵션]이라고 했으므로 Lambda + API Gateway 조합인 B 가 정답에 \n가깝다고 봄. \n 512MB 에서 10,240MB 사이에서 1MB 단위로 자체 임시 스토리지로 각 Lambda 함수를 \n구성할 수 있습니다. 임시 스토리지는 각 함수의 /tmp 디렉터리에서 사용할 수 있습니다. \n각 함수는 추가 비용 없이 512MB 의 스토리지에 액세스할 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구"
    }
  },
  {
    "id": 108,
    "question": "한 회사에 Amazon RDS 의 데이터베이스에 목록을 저장하는 자동차 판매 웹사이트가 \n있습니다. 자동차가 판매되면 웹사이트에서 목록을 제거해야 하고 데이터를 여러 대상 \n시스템으로 보내야 합니다. \n솔루션 아키텍트는 어떤 디자인을 추천해야 할까요?",
    "options": [
      "Amazon RDS 의 데이터베이스가 업데이트되어 대상이 소비할 Amazon Simple Queue \nService(Amazon SQS) 대기열로 정보를 보내도록 업데이트될 때 트리거되는 AWS Lambda \n함수를 생성합니다.",
      "Amazon RDS 의 데이터베이스가 대상이 사용할 Amazon Simple Queue Service(Amazon \nSQS) FIFO 대기열로 정보를 보내도록 업데이트될 때 트리거되는 AWS Lambda 함수를 \n생성합니다.",
      "RDS 이벤트 알림을 구독하고 여러 Amazon Simple Notification Service(Amazon SNS) \n\n=== PAGE 119 ===\n주제로 팬아웃된 Amazon Simple Queue Service(Amazon SQS) 대기열을 보냅니다. AWS \nLambda 함수를 사용하여 대상을 업데이트합니다.",
      "RDS 이벤트 알림을 구독하고 Amazon Simple Notification Service(Amazon SNS) 주제를 \n여러 Amazon Simple Queue Service(Amazon SQS) 대기열로 보냅니다. AWS Lambda \n함수를 사용하여 대상을 업데이트합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85427-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85634-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : S3 에 저장한다고 했지 S3 Glacier 같은 콜드 스토리지에 저장한다고 한 적 없음. \nB(X) : 일정하지 않은 시간 동안이라고 지문에서 언급했는데, 보존 기간을 설정해뒀으므로 \n오답. \nC(X) : 일단 일이 벌어지고 나서 수습하는 방식인데다가, 변경된 객체마다 일일히",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 110,
    "question": "소셜 미디어 회사는 사용자가 웹사이트에 이미지를 업로드할 수 있도록 합니다. 웹 \n사이트는 Amazon EC2 인스턴스에서 실행됩니다. 업로드 요청 중에 웹 사이트는 이미지의 \n크기를 표준 크기로 조정하고 크기가 조정된 이미지를 Amazon S3 에 저장합니다. 사용자가 \n웹 사이트에 대한 느린 업로드 요청을 경험하고 있습니다. \n회사는 애플리케이션 내 커플링을 줄이고 웹사이트 성능을 개선해야 합니다. 솔루션 \n설계자는 이미지 업로드를 위한 운영상 가장 효율적인 프로세스를 설계해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 취해야 하는 조치의 조합은 무엇입니까? \n(2 개를 선택하세요.)",
    "options": [
      "S3 Glacier 에 이미지를 업로드하도록 애플리케이션을 구성합니다.",
      "원본 이미지를 Amazon S3 에 업로드하도록 웹 서버를 구성합니다.",
      "미리 서명된 URL 을 사용하여 각 사용자의 브라우저에서 Amazon S3 로 이미지를 직접 \n업로드하도록 애플리케이션 구성",
      "이미지가 업로드될 때 AWS Lambda 함수를 호출하도록 S3 이벤트 알림을 구성합니다. \n기능을 사용하여 이미지 크기를 조정합니다. \n\n=== PAGE 121 ===",
      "업로드된 이미지의 크기를 조정하기 위해 일정에 따라 AWS Lambda 함수를 호출하는 \nAmazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/86471-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAmazon S3 는 웹 어디에서나 원하는 양의 데이터를 저장하고 검색할 수 있는 확장성과 \n내구성이 뛰어난 객체 스토리지 서비스입니다. 사용자는 미리 서명된 URL 을 사용하여 각 \n사용자의 브라우저에서 Amazon S3\n으로 이미지를 직접 업로드하도록 애플리케이션을 \n구성할 수 있습니다. 미리 서명된 URL 은 제한된 시간 동안 객체 업로드와 같은 특정 \n작업을 통해 S3 버킷의 객체에 대한 액세스를 제공하는 URL 입니다. 사용자는 AWS SDK \n또는 AWS CLI 를 사용하여 프로그래밍 방식으로 미리 서명된 URL 을 생성할 수 있습니다. \n미리 서명된 URL 을 사용하면 사용자는 이미지를 웹 서버에 먼저 보낼 필요가 없으므로 \n애플리케이션 내 결합을 줄이고 웹 사이트 성능을 향상시킬 수 있습니다. \nAWS Lambda 는 이벤트에 대한 응답으로 코드를 실행하고 기본 컴퓨팅 리소스를 자동으로 \n관리하는 서버리스 컴퓨팅 서비스입니다. 사용자는 이미지가 업로드될 때 AWS Lambda \n함수를 호출하도록 S3 이벤트 알림을 구성할 수 있습니다. S3 이벤트 알림은 객체 생성이나 \n삭제 등 S3 버킷에서 특정 이벤트가 발생할 때 사용자가 알림을 받을 수 있도록 하는 \n기능입니다. 사용자는 이미지 크기를 조정하고 이를 동일하거나 다른 S3 버킷에 다시 \n저장하는 Lambda 함수를 호출하도록 S3 이벤트 알림을 구성할 수 있습니다. 이러한 \n방식으로 사용자는 이미지 크기 조정 작업을 웹 서버에서 Lambda\n로 오프로드할 수 \n있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 111,
    "question": "한 회사는 최근에 메시지 처리 시스템을 AWS 로 마이그레이션했습니다. 시스템은 Amazon \nEC2 인스턴스에서 실행되는 ActiveMQ 대기열로 메시지를 수신합니다. 메시지는 Amazon \nEC2\n에서 실행되는 소비자 애플리케이션에 의해 처리됩니다. 소비자 애플리케이션은 \n메시지를 처리하고 결과를 Amazon EC2 에서 실행되는 MySQL 데이터베이스에 씁니다. \n회사는 이 애플리케이션이 낮은 운영 복잡성으로 고가용성을 갖기를 원합니다. \n가장 높은 가용성을 제공하는 아키텍처는 무엇입니까?",
    "options": [
      "다른 가용 영역에 두 번째 ActiveMQ 서버를 추가합니다. 다른 가용 영역에 소비자 EC2 \n인스턴스를 추가합니다. MySQL 데이터베이스를 다른 가용 영역에 복제합니다.",
      "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 다른 가용 \n영역에 소비자 EC2 인스턴스를 추가합니다. MySQL 데이터베이스를 다른 가용 영역에 \n\n=== PAGE 122 ===\n복제합니다.",
      "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 다른 가용 \n영역에 소비자 EC2 인스턴스를 추가합니다. 다중 AZ 가 활성화된 MySQL 용 Amazon \nRDS 를 사용합니다.",
      "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 두 가용 \n영역에 걸쳐 소비자 EC2 인스턴스에 대한 Auto Scaling 그룹을 추가합니다. 다중 AZ 가 \n활성화된 MySQL 용 Amazon RDS 를 사용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85910-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 데이터베이스를 복제하는 것은 시간이 매우 걸리는 일임. 고가용성을 위해서라면 \n다중 AZ 를 사용하는 것이 좋음. \nB(X) : A 와 마찬가지 이유로 오답. \nC(X) : D 가 더 좋음. \nD(O) : 평소에는 Standby 브로커 인스턴스에 낮은 트래픽 기준으로 AWS 리소스를 \n사용하여 비용을 절감하다가 Active 브로커 인스턴스가 다운되어 Standby 브로커 인스턴스 \n쪽으로 트래픽이 몰려오면 Auto Scaling 을 통해 대처. \n일반적으로 한 번에 하나의 브로커 인스턴스만 활성 상태이고, 다른 브로커 인스턴스는 \n대기 상태입니다. 브로커 인스턴스 중 하나가 제대로 작동하지 않거나 유지 관리 중이면 \nAmazon MQ 가 비활성 인스턴스를 서비스 중지하는 데 잠깐 시간이 걸립니다. 그런 다음 \n정상 대기 인스턴스가 활성화되고 들어오는 통신을 수신하기 시작할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/amazon-mq/latest/developer-guide/active-standby\n-broker-deployment.html \n \n2: \nAmazon S3 는 확장성이 뛰어나고 내구성이 뛰어난 객체 스토리지 서비스로, 웹 어디에서나 \n원하는 양의 데이터를 저장하고 검색할 수 있습니다. 사용자는 미리 서명된 URL\n을 \n사용하여 각 사용자의 브라우저에서 Amazon S3\n로 직접 이미지를 업로드하도록 \n애플리케이션을 구성할 수 있습니다. 미리 서명된 URL 은 제한된 시간 동안 특정 작업(예: \n객체 업로드)으로 S3 버킷의 객체에 대한 액세스 권한을 부여하는 URL 입니다. 사용자는 \nAWS SDK 또는 AWS CLI 를 사용하여 프로그래밍 방식으로 미리 서명된 URL 을 생성할 수 \n있습니다. 미리 서명된 URL 을 사용하면 이미지를 웹 서버에 먼저 보낼 필요가 없으므로 \n사용자는 애플리케이션 내에서 결합을 줄이고 웹 사이트 성능을 향상시킬 수 있습니다. \nAWS Lambda 는 이벤트에 대한 응답으로 코드를 실행하고 기본 컴퓨팅 리소스를 자동으로",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85913-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAWS Fargate는 사용자가 Amazon EC2 인스턴스의 서버 또는 클러스터를 관리할 필요 없이 \n컨테이너를 실행할 수 있게 해주는 서버리스 컴퓨팅 엔진입니다. 사용자는 Amazon Elastic \nContainer Service(Amazon ECS)에서 AWS Fargate 를 사용하여 Service Auto Scaling 으로 \n컨테이너화된 웹 애플리케이션을 실행할 수 있습니다. \nAmazon ECS\n는 Docker\n와 Kubernetes\n를 모두 지원하는 완전관리형 컨테이너 \n오케스트레이션 서비스입니다. Service Auto Scaling 은 사용자가 CPU 사용률 또는 요청",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85912-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 114,
    "question": "한 회사는 사용자가 사진을 업로드하고 이미지에 액자를 추가할 수 있는 이미지 분석 응용 \n프로그램을 만들었습니다. 사용자는 이미지와 메타데이터를 업로드하여 이미지에 추가할 \n사진 프레임을 나타냅니다. 애플리케이션은 단일 Amazon EC2 인스턴스와 Amazon \nDynamoDB 를 사용하여 메타데이터를 저장합니다. \n응용 프로그램이 대중화되고 사용자 수가 증가하고 있습니다. 회사는 동시 접속자 수가 \n시간과 요일에 따라 크게 달라질 것으로 예상하고 있습니다. 회사는 증가하는 사용자 \n기반의 요구 사항을 충족하도록 애플리케이션을 확장할 수 있는지 확인해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까? \n\n=== PAGE 126 ===",
    "options": [
      "AWS Lambda 를 사용하여 사진을 처리합니다. 사진과 메타데이터를 DynamoDB 에 \n저장합니다.",
      "Amazon Kinesis Data Firehose 를 사용하여 사진을 처리하고 사진과 메타데이터를 \n저장합니다.",
      "AWS Lambda 를 사용하여 사진을 처리합니다. Amazon S3 에 사진을 저장합니다. \nDynamoDB 를 유지하여 메타데이터를 저장합니다.",
      "EC2 인스턴스 수를 3 개로 늘립니다. 프로비저닝된 IOPS SSD(io2) Amazon Elastic Block \nStore(Amazon EBS) 볼륨을 사용하여 사진과 메타데이터를 저장합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85189-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : DynamoDB 는 데이터베이스 서비스이기 떄문에 이미지를 저장하기에는 적절치 않음. \nB(X) : Amazon Kinesis Data Firehose 는 저장 기능이 없고 전송 기능만 있음. \nKinesis Data Firehose 는 스트리밍 ETL 솔루션입니다. 스트리밍 데이터를 캡처하고 변환한 \n후 Amazon S3, Amazon Redshift, Amazon OpenSearch Service 및 Splunk 로 로드하여 이미 \n사용하고 있는 기존 비즈니스 인텔리전스 도구 및 대시보드를 통해 거의 실시간으로 분석할 \n수 있습니다. \n\naws.amazon.com/ko/kinesis/data-firehose/faqs/ \nC(O) : 정답. \nD(X) : 사용자 수가 증가하고 있으므로 프로비저닝은 적절치 않음. \n \n2: \n이 솔루션은 확장성, 성능 및 가용성 요구 사항을 충족합니다. AWS Lambda 는 사진을 \n병렬로 처리하고 수요에 따라 자동으로 확장 또는 축소할 수 있습니다. \nAmazon S3 는 사진과 메타데이터를 안정적이고 내구성 있게 저장할 수 있으며 고가용성과 \n짧은 지연 시간을 제공합니다. DynamoDB 는 메타데이터를 효율적으로 저장하고 일관된 \n성능을 제공할 수 있습니다. 또한 이 솔루션은 EC2 인스턴스 및 EBS 볼륨 관리의 비용과 \n복잡성을 줄입니다. \nDynamoDB 에 사진을 저장하는 것은 스토리지 비용을 증가시키고 처리량을 제한할 수 \n있으므로 A 옵션은 올바르지 않습니다. \n옵션 B 는 Kinesis Data Firehose 가 사진 처리용이 아니라 S3 또는 Redshift 와 같은 \n대상으로 데이터 스트리밍용으로 설계되었기 때문에 올바르지 않습니다. \n옵션 D 는 EC2 인스턴스 수를 늘리고 프로비저닝된 IOPS SSD 볼륨을 사용하는 것이 로드 \n밸런서 및 애플리케이션 코드에 따라 확장성을 보장하지 않기 때문에 올바르지 않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/86031-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nS3 에 액세스하지만 다른 네트워크 액세스는 필요하지 않음 = S3 Gateway Endpoint. \n게이트웨이 엔드포인트는 인터넷 게이트웨이나 VPC 용 NAT 디바이스 없이 Amazon S3 및 \nDynamoDB 에 안정적인 연결을 제공합니다. 게이트웨이 엔드포인트는 AWS PrivateLink 를 \n활성화하지 않습니다. \n\ndocs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html \n \n2: \n프라이빗 경로를 통한 파일 전송의 새로운 요구 사항을 충족하려면 EC2 인스턴스를 \n인터넷에 직접 액세스할 수 없는 프라이빗 서브넷으로 이동해야 합니다. 이렇게 하면 파일",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
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
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85996-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n지문은 정적 웹 사이트 호스팅에 대해서 설명하고 있음. 정적 웹사이트 호스팅에 관한 건 \n아래의 링크를 참조할 것. \n\naws.amazon.com/ko/getting-started/projects/build-serverless-web-app-lambda-\napigateway-s3-dynamodb-cognito/module-1/ \n참고로 지문에서 높은 확장성을 요구하고 있는데, 높은 확장성이란 별 거 없고 정적 웹 \n사이트 호스팅 환경을 구축하면 그게 높은 확장성을 갖춘 것. \n정적 웹 사이트 호스팅은 비용과 유지 관리 필요성이 가장 적은 옵션이고(예: 유지 \n관리해야 할 서버가 없음), 높은 수준의 신뢰성과 [[[확장성]]]을 제공하기 때문입니다.  \n\naws.amazon.com/ko/getting-started/hands-on/host-static-website/faq/",
    "glossary": {}
  },
  {
    "id": 117,
    "question": "회사는 Amazon CloudWatch Logs 로그 그룹에 애플리케이션 로그를 저장합니다. 새로운 \n정책에 따라 회사는 거의 실시간으로 Amazon OpenSearch Service(Amazon Elasticsearch \nService)에 모든 애플리케이션 로그를 저장해야 합니다. \n최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "로그를 Amazon OpenSearch Service(Amazon Elasticsearch Service)로 스트리밍하도록 \nCloudWatch Logs 구독을 구성합니다.",
      "AWS Lambda 함수를 생성합니다. 로그 그룹을 사용하여 함수를 호출하여 Amazon \nOpenSearch Service(Amazon Elasticsearch Service)에 로그를 기록합니다. \n\n=== PAGE 130 ===",
      "Amazon Kinesis Data Firehose 전송 스트림을 생성합니다. 전송 스트림 소스로 로그 \n그룹을 구성합니다. Amazon OpenSearch Service(Amazon Elasticsearch Service)를 전송 \n스트림의 대상으로 구성합니다.",
      "각 애플리케이션 서버에 Amazon Kinesis Agent 를 설치하고 구성하여 Amazon Kinesis \nData Streams 에 로그를 전달합니다. Amazon OpenSearch Service(Amazon Elasticsearch \nService)에 로그를 전달하도록 Kinesis Data Streams 를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85802-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nCloudWatch Logs 구독을 통해 실시간에 가깝게 Amazon OpenSearch Service 클러스터로 \n수신한 데이터를 스트리밍하도록 CloudWatch Logs 로그 그룹을 구성할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/logs/CWL_OpenSearch_S\ntream.html \n정답은 A. \n최소한의 운영헤드, 기본으로 cloudwatch log - opensearch 간 연동을 제공함 \n \n참고: \n\ncomputingforgeeks.com/stream-logs-in-aws-from-cloudwatch-to-elasticsearch/",
    "glossary": {
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/86512-exam-aws-certified-solut",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/86450-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n[여러 계정]에서 SQL 주입, XSS 공격, DDoS 등을 방어하려면 AWS Firewall Manager 가",
    "glossary": {}
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85807-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 자체 관리형 DNS 솔루션을 사용하고 있다고 이미 지문에서 언급했음. 자체적으로 \n해결할 수 있는 걸 Route 53 을 사용해서 추가적인 지출을 할 이유가 없음. 게다가 CDN \n서비스를 사용해야한다는 단서가 없는데 굳이 CDN 서비스를 끼워넣을 이유가 없음.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85941-exam-aws-certified-solut",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85942-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : MFA 는 다중 인증으로, 운영 부담 감소와는 아무런 상관 없음. \nB(O) : \"\"AWS KMS 는 암호화 작업에 사용되는 키를 쉽게 생성하고 제어할 수 있도록 \n지원하는 관리형 서비스입니다. \naws.amazon.com/ko/kms/faqs/",
    "glossary": {
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85943-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAWS Certificate Manager 를 사용하면 인증서를 신속하게 요청하고 Elastic Load Balancer, \nAmazon CloudFront 배포, API Gateway 의 API 와 같은 ACM 통합 AWS 리소스에 배포하고 \nAWS Certificate Manager 가 인증서 갱신을 처리하도록 할 수 있습니다. 또한 내부 리소스에 \n대한 개인 인증서를 만들고 중앙에서 인증서 수명 주기를 관리할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/86038-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nEC2 스팟 인스턴스를 통해 사용자는 여분의 Amazon EC2 컴퓨팅 용량에 입찰할 수 있으며 \n언제든지 시작 및 중지할 수 있는 상태 비저장 및 중단 가능한 워크로드를 위한 비용",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
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
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85221-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n시작하기 전에: EC2 인스턴스에 사용할 두 개의 가용 영역을 결정합니다. 이러한 각 가용 \n영역에서 하나 이상의 퍼블릭 서브넷으로 Virtual Private Cloud(VPC)를 구성합니다. \n이러한 퍼블릭 서브넷은 로드 밸런서를 구성하는 데 사용됩니다. 대신 이러한 가용 영역의 \n다른 서브넷에서 EC2 인스턴스를 시작할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  }
];