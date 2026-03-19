export const quizData = [
  {
    "id": 251,
    "question": "Amazon EC2 인스턴스는 새 VPC\n의 프라이빗 서브넷에 있습니다. 이 서브넷에는 \n아웃바운드 인터넷 액세스 권한이 없지만 EC2 인스턴스에는 외부 공급업체로부터 월별 \n보안 업데이트를 다운로드할 수 있는 기능이 필요합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "인터넷 게이트웨이를 생성하고 VPC 에 연결합니다. 인터넷 게이트웨이를 기본 경로로 \n사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다.",
      "NAT 게이트웨이를 생성하고 퍼블릭 서브넷에 배치합니다. NAT 게이트웨이를 기본 \n경로로 사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다. \n\n=== PAGE 279 ===",
      "NAT 인스턴스를 생성하고 EC2 인스턴스가 있는 동일한 서브넷에 배치합니다. NAT \n인스턴스를 기본 경로로 사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다.",
      "인터넷 게이트웨이를 생성하고 VPC 에 연결합니다. NAT 인스턴스를 생성하고 EC2 \n인스턴스가 \n있는 \n동일한 \n서브넷에 \n배치합니다. \n인터넷 \n게이트웨이를 \n기본 \n경로로 \n사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다. \nAnswer: B \nhttps://www.examtopics.com/discussions/amazon/view/95023-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "사설 서브넷에 직접 인터넷 액세스를 제공합니다. 이는 아웃바운드 인터넷 액세스를 \n제한하는 것이 목표이므로 이 경우에는 바람직하지 않습니다.",
      "프라이빗 서브넷의 EC2\n가 프록시 역할을 하는 NAT 게이트웨이를 통해 인터넷에 \n액세스할 수 있습니다. 프라이빗 서브넷의 보안을 유지하면서 통제된 아웃바운드 인터넷 \n액세스를 제공합니다.",
      "NAT 게이트웨이를 사용하는 것과 유사하지만 NAT 인스턴스를 사용하는 것과 관련이 \n있습니다. NAT 인스턴스는 NAT 게이트웨이에 비해 더 많은 수동 구성 및 관리가 \n필요하므로 덜 선호되는 옵션입니다.",
      "필요하지 않은 인터넷 게이트웨이와 NAT 인스턴스의 사용을 결합합니다. 불필요한 \n복잡성이 발생하고 추가 관리가 필요한 NAT 인스턴스가 추가됩니다. \n \n전반적으로 옵션 B 는 퍼블릭 서브넷에 배치된 NAT 게이트웨이를 활용하여 프라이빗 \n서브넷의 EC2 인스턴스에 대해 제어된 아웃바운드 인터넷 액세스를 활성화하므로 가장 \n적합한 솔루션입니다. \n \nNAT 게이트웨이는 AWS 및 일반적으로 NAT 인스턴스보다 선호됩니다. \n \n설명2: \n이 접근 방식을 사용하면 EC2 인스턴스가 여전히 프라이빗 서브넷에 있는 동안 인터넷에 \n액세스하고 월별 보안 업데이트를 다운로드할 수 있습니다. NAT 게이트웨이를 만들어 \n퍼블릭 서브넷에 배치하면 프라이빗 서브넷의 인스턴스가 NAT 게이트웨이를 통해 인터넷에 \n액세스할 수 있습니다. 그런 다음 NAT 게이트웨이를 기본 경로로 사용하도록 프라이빗 \n서브넷 \n경로 \n테이블을 \n구성합니다. \n이렇게 \n하면 \n모든 \n아웃바운드 \n트래픽이 \nNAT \n\n=== PAGE 280 ===\n게이트웨이를 통해 전달되어 EC2 인스턴스가 프라이빗 서브넷의 보안을 유지하면서 \n인터넷에 액세스할 수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 252,
    "question": "솔루션 설계자는 고객 사례 파일을 저장할 시스템을 설계해야 합니다. 파일은 핵심 회사 \n자산이며 중요합니다. 파일 수는 시간이 지남에 따라 증가합니다. \n파일은 Amazon EC2 인스턴스에서 실행되는 여러 애플리케이션 서버에서 동시에 액세스할 \n수 있어야 합니다. 솔루션에는 중복성이 내장되어 있어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon Elastic File System(Amazon EFS)",
      "Amazon Elastic Block Store(Amazon EBS)",
      "Amazon S3 Glacier Deep 아카이브(Amazon S3 Glacier Deep Archive)",
      "AWS 백업(AWS Backup)"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95024-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n1: \nEFS 는 여러 EC2 에서 동시에 액세스할 수 있는 확장 가능하고 완벽하게 관리되는 파일 \n스토리지 서비스를 제공합니다. 리전 내의 여러 AZ\n에 데이터를 저장하여 기본 제공 \n중복성을 제공합니다. EFS\n를 사용하면 여러 애플리케이션 서버에서 클라이언트 사례 \n파일에 동시에 액세스할 수 있으므로 시간이 지남에 따라 파일 수가 증가함에 따라 \n고가용성과 확장성이 보장됩니다. \n \n옵션 B 인 EBS 는 일반적으로 개별 EC2 에 연결하는 데 사용되는 블록 수준 스토리지 \n서비스이며 여러 인스턴스에 대한 동시 액세스를 제공하지 않으므로 이 시나리오에 \n적합하지 않습니다. \n \n옵션 C, S3 Glacier Deep Archive 는 장기 아카이브 스토리지 서비스이며 활성 파일 액세스 \n및 여러 애플리케이션 서버의 동시 액세스에 적합하지 않을 수 있습니다. \n \n옵션 D, AWS Backup 은 중앙 집중식 백업 관리 서비스이며 필요한 동시 파일 액세스 및 \n중복 기능을 제공하지 않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 253,
    "question": "솔루션 아키텍트가 Policy1 과 Policy2 라는 두 가지 IAM 정책을 만들었습니다. 두 정책 \n모두 IAM 그룹에 연결됩니다. \n \n\n=== PAGE 282 ===\n \n클라우드 엔지니어가 IAM 그룹에 IAM 사용자로 추가됩니다. 클라우드 엔지니어는 어떤 \n작업을 수행할 수 있습니까?",
    "options": [
      "IAM 사용자 삭제",
      "디렉토리 삭제",
      "Amazon EC2 인스턴스 삭제",
      "Amazon CloudWatch Logs 에서 로그 삭제"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95008-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 254,
    "question": "한 회사에서 최근 3 계층 애플리케이션을 VPC 로 마이그레이션하는 것을 검토하고 있습니다. \n보안 팀은 최소 권한 원칙이 애플리케이션 계층 간의 Amazon EC2 보안 그룹 수신 및 송신 \n규칙에 적용되지 않는다는 사실을 발견했습니다. \n솔루션 설계자는 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": [
      "인스턴스 ID 를 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다.",
      "보안 그룹 ID 를 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다.",
      "VPC CIDR 블록을 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다.",
      "서브넷 CIDR 블록을 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다. \nAnswer: B \nhttps://www.examtopics.com/discussions/amazon/view/95009-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명: \n\n=== PAGE 283 ===",
      "특정 인스턴스를 기반으로 트래픽을 제한하므로 애플리케이션 계층 간에 최소 권한 \n원칙을 적용하는 데 가장 적합한 솔루션이 아닐 수 있습니다.",
      "규칙에서 보안 그룹 ID 를 사용하면 필요한 통신만 허용하고 최소 권한 원칙을 준수하여 \n애플리케이션 계층 간의 트래픽을 정밀하게 제어할 수 있습니다.",
      "전체 VPC CIDR 블록을 기반으로 광범위한 규칙을 적용하여 특정 애플리케이션 계층 \n간의 보안 통신에 필요한 수준의 세분성을 제공하지 못할 수 있습니다.",
      "서브넷 CIDR 블록을 기반으로 트래픽을 제한하므로 애플리케이션 계층 간의 적절한 \n보안을 보장하기에 충분하지 않을 수 있습니다. \n \n요약하면 보안 그룹 ID(옵션 B)를 사용하면 최소 권한 원칙에 따라 애플리케이션 계층 간의 \n트래픽을 정밀하게 제어할 수 있으므로 권장되는 접근 방식입니다. \n \n참고 \nhttps://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/security-group-rules.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 255,
    "question": "회사에는 데이터베이스에 주문을 작성하고 지불을 처리하기 위해 서비스를 호출하는 전자 \n상거래 체크아웃 워크플로우가 있습니다. 사용자는 체크아웃 프로세스 중에 시간 초과를 \n경험하고 있습니다. 사용자가 체크아웃 양식을 다시 제출하면 동일한 원하는 거래에 대해 \n여러 고유 주문이 생성됩니다. \n여러 주문 생성을 방지하기 위해 솔루션 설계자는 이 워크플로우를 어떻게 리팩터링해야 \n합니까?",
    "options": [
      "Amazon Kinesis Data Firehose 로 주문 메시지를 보내도록 웹 애플리케이션을 구성합니다. \nKinesis Data Firehose\n에서 메시지를 검색하고 주문을 처리하도록 결제 서비스를 \n설정합니다.",
      "로깅된 애플리케이션 경로 요청을 기반으로 AWS Lambda 함수를 호출하기 위해 AWS \nCloudTrail 에서 규칙을 생성합니다. Lambda 를 사용하여 데이터베이스를 쿼리하고 결제 \n서비스를 호출하고 주문 정보를 전달합니다.",
      "데이터베이스에 주문을 저장합니다. 주문 번호가 포함된 메시지를 Amazon Simple \nNotification Service(Amazon SNS)로 보냅니다. Amazon SNS 를 폴링하고 메시지를 검색하고 \n주문을 처리하도록 결제 서비스를 설정합니다.",
      "데이터베이스에 주문을 저장합니다. 주문 번호가 포함된 메시지를 Amazon Simple \nQueue Service(Amazon SQS) FIFO 대기열로 보냅니다. 메시지를 검색하고 주문을 \n처리하도록 결제 서비스를 설정합니다. 대기열에서 메시지를 삭제합니다. \nAnswer: D \n\n=== PAGE 284 ===\nhttps://www.examtopics.com/discussions/amazon/view/95026-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "다중 주문 생성 방지에 적합한 솔루션이 아닙니다. 이 접근 방식은 순차적이고 안정적인 \n주문 처리를 보장하지 않습니다.",
      "다중 주문 생성을 방지하기 위한 적절한 해결책이 아닙니다. CloudTrail 은 주로 API \n활동을 기록하고 감사하는 데 사용되며 기록된 요청을 기반으로 Lambda 를 호출하면 \n올바른 주문 처리가 보장되지 않습니다. \nC.는 적절한 솔루션이 아닙니다. SNS 는 게시-구독 메시징 서비스이며 이를 폴링하면 \n처리가 지연되고 잠재적인 주문 중복이 발생할 수 있습니다. \nD.가 정답입니다. SQS FIFO 를 사용하면 주문이 순차적이고 안정적인 방식으로 처리되어 \n동일한 거래에 대해 여러 주문이 생성되는 것을 방지할 수 있습니다. \n \n설명2: \nVPC 내에 있는 프라이빗 서브넷의 EC2 인스턴스와 DynamoDB 간 가장 안전한 AWS \n네트워크 통신 = VPC Gateway Endpoint. \n게이트웨이 엔드포인트는 VPC 용 인터넷 게이트웨이 또는 NAT 디바이스가 없어도 Amazon \nS3 및 DynamoDB 에 대한 안정적인 연결을 제공합니다. \nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/privatelink/vpce-gateway.html#vpc-endp\noints-limitations \n \n \n설명3: \nDynamoDB 용 VPC 엔드포인트를 사용하면 VPC 의 Amazon EC2 인스턴스가 프라이빗 IP \n주소를 사용하여 퍼블릭 인터넷에 노출되지 않고 DynamoDB 에 액세스할 수 있습니다. EC2 \n인스턴스에는 퍼블릭 IP 주소가 필요하지 않으며 VPC 에 인터넷 게이트웨이, NAT 디바이스 \n또는 가상 프라이빗 게이트웨이가 필요하지 않습니다. 엔드포인트 정책을 사용하여 \nDynamoDB 에 대한 액세스를 제어합니다. VPC 와 AWS 서비스 간의 트래픽은 Amazon \n네트워크를 벗어나지 않습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 256,
    "question": "솔루션 설계자는 Amazon S3 버킷을 저장용으로 사용하여 문서 검토 애플리케이션을 \n구현하고 있습니다. 솔루션은 우발적인 문서 삭제를 방지하고 문서의 모든 버전을 사용할 \n수 있도록 보장해야 합니다. 사용자는 문서를 다운로드, 수정 및 업로드할 수 있어야 \n\n=== PAGE 285 ===\n합니다. \n이러한 요구 사항을 충족하려면 어떤 조합의 조치를 취해야 합니까? (2 개 선택)",
    "options": [
      "읽기 전용 버킷 ACL 을 활성화합니다.",
      "버킷에서 버전 관리를 활성화합니다.",
      "IAM 정책을 버킷에 연결합니다.",
      "버킷에서 MFA 삭제를 활성화합니다.",
      "AWS KMS 를 사용하여 버킷을 암호화합니다. \nAnswer: B, D \nhttps://www.examtopics.com/discussions/amazon/view/95460-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "S3 버킷에 여러 버전의 객체를 저장할 수 있습니다. 이렇게 하면 문서를 실수로 \n덮어쓰거나 삭제하더라도 모든 버전의 문서를 사용할 수 있습니다.",
      "버킷의 객체를 우발적으로 삭제하지 않도록 추가 보호 계층을 추가합니다. MFA 삭제가 \n활성화된 상태에서 사용자는 버킷에서 객체를 성공적으로 삭제하려면 추가 인증 요소를 \n제공해야 합니다. 이를 통해 우발적 삭제 또는 무단 삭제를 방지하고 중요한 문서에 대한 \n추가 보안 수준을 제공합니다.",
      "사용자가 문서를 수정하거나 업로드하는 것을 제한합니다. 사용자가 문서를 다운로드, \n수정 및 업로드할 수 있도록 허용하는 요구 사항을 충족하지 않습니다.",
      "버킷에 대한 액세스 권한을 제어할 수 있지만 우발적인 삭제를 방지하거나 문서의 모든 \n버전의 가용성을 보장하는 요구 사항을 구체적으로 다루지는 않습니다.",
      "암호화는 버전 관리 및 삭제 방지보다는 데이터 보호에 중점을 둡니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 257,
    "question": "회사는 AWS 계정의 모든 애플리케이션에서 Amazon EC2 Auto Scaling 이벤트를 보고하는 \n솔루션을 구축하고 있습니다. 회사는 Amazon S3 에 EC2 Auto Scaling 상태 데이터를 \n저장하기 위해 서버리스 솔루션을 사용해야 합니다. 그런 다음 회사는 Amazon S3 의 \n데이터를 사용하여 대시보드에서 거의 실시간 업데이트를 제공합니다. 솔루션은 EC2 \n인스턴스 시작 속도에 영향을 미치지 않아야 합니다. \n회사는 이러한 요구 사항을 충족하기 위해 어떻게 데이터를 Amazon S3 로 이동해야 \n합니까?",
    "options": [
      "Amazon CloudWatch 지표 스트림을 사용하여 EC2 Auto Scaling 상태 데이터를 Amazon \nKinesis Data Firehose 로 보냅니다. 데이터를 Amazon S3 에 저장합니다. \n\n=== PAGE 286 ===",
      "Amazon EMR 클러스터를 시작하여 EC2 Auto Scaling 상태 데이터를 수집하고 데이터를 \nAmazon Kinesis Data Firehose 로 보냅니다. 데이터를 Amazon S3 에 저장합니다.",
      "Amazon EventBridge 규칙을 생성하여 일정에 따라 AWS Lambda 함수를 호출합니다. \nEC2 Auto Scaling 상태 데이터를 Amazon S3 로 직접 보내도록 Lambda 함수를 구성합니다.",
      "EC2 인스턴스를 시작하는 동안 부트스트랩 스크립트를 사용하여 Amazon Kinesis \n에이전트를 설치합니다. EC2 Auto Scaling 상태 데이터를 수집하고 데이터를 Amazon \nKinesis Data Firehose 로 보내도록 Kinesis 에이전트를 구성합니다. 데이터를 Amazon S3 에 \n저장합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/95027-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "EC2 Auto Scaling 상태 데이터를 수집하고 S3\n로 보내는 데 불필요한 복잡성과 \n오버헤드가 발생합니다. 이 특정 요구 사항에 가장 효율적인 서버리스 솔루션은 아닙니다.",
      "실시간으로 트리거되지 않기 때문에 데이터 업데이트가 지연될 수 있습니다. 또한 직접 \n데이터 스트림을 사용하는 것과 비교할 때 불필요한 오버헤드와 복잡성이 추가됩니다.",
      "추가 종속성 및 관리 오버헤드를 도입합니다. 또한 피해야 할 요구 사항인 EC2 \n인스턴스 시작 속도에 영향을 미칠 수 있습니다. \n \n전반적으로 옵션 A 는 CloudWatch 지표 스트림과 Kinesis Data Firehose 를 활용하여 EC2 \n인스턴스 시작 속도에 영향을 주지 않고 S3\n에서 EC2 Auto Scaling 상태 데이터를 \n효율적으로 캡처하고 저장함으로써 간소화된 서버리스 솔루션을 제공합니다. \n \n설명2: \n지표 스트림을 사용하여 CloudWatch 지표를 거의 실시간으로 제공하고 낮은 지연 \n시간으로 선택한 대상으로 지속적으로 스트리밍할 수 있습니다. 사용 사례 중 하나는 \n데이터 레이크입니다. 지표 스트림을 생성하고 CloudWatch 지표를 Amazon S3 와 같은 \n데이터 레이크에 전달하는 Amazon Kinesis Data Firehose 전달 스트림으로 보냅니다. \nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric\n-Streams.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 258,
    "question": "=== PAGE 287 ===\n회사에는 매시간 수백 개의 .csv 파일을 Amazon S3 버킷에 배치하는 애플리케이션이 \n있습니다. 파일 크기는 1GB\n입니다. 파일이 업로드될 때마다 회사는 파일을 Apache \nParquet 형식으로 변환하고 출력 파일을 S3 버킷에 배치해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      ".csv 파일을 다운로드하고 파일을 Parquet 형식으로 변환하고 출력 파일을 S3 버킷에 \n배치하는 AWS Lambda 함수를 생성합니다. 각 S3 PUT 이벤트에 대해 Lambda 함수를 \n호출합니다.",
      "Apache Spark 작업을 생성하여 .csv 파일을 읽고, 파일을 Parquet 형식으로 변환하고, \n출력 파일을 S3 버킷에 배치합니다. Spark 작업을 호출하기 위해 각 S3 PUT 이벤트에 대한 \nAWS Lambda 함수를 생성합니다.",
      "애플리케이션이 .csv 파일을 배치하는 S3 버킷에 대한 AWS Glue 테이블과 AWS Glue \n크롤러를 생성합니다. Amazon Athena를 주기적으로 사용하여 AWS Glue 테이블을 쿼리하고, \n쿼리 결과를 Parquet 형식으로 변환하고, 출력 파일을 S3 버킷에 배치하도록 AWS Lambda \n함수를 예약합니다.",
      "AWS Glue 추출, 변환 및 로드(ETL) 작업을 생성하여 .csv 파일을 Parquet 형식으로 \n변환하고 출력 파일을 S3 버킷에 배치합니다. 각 S3 PUT 이벤트에 대한 AWS Lambda \n함수를 생성하여 ETL 작업을 호출합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95028-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "상당한 운영 오버헤드가 발생합니다. 이 접근 방식에는 Lambda 관리, 동시성 처리, 큰 \n파일 크기에 대한 적절한 오류 처리 보장이 필요하며 이는 어려울 수 있습니다.",
      "불필요한 복잡성과 운영 오버헤드를 추가합니다. Spark 작업 관리, 확장성 처리 및 각 \n파일 업로드에 대한 Lambda 호출 조정은 번거로울 수 있습니다.",
      "추가 복잡성을 도입하고 가장 효율적인 솔루션이 아닐 수 있습니다. 여기에는 Glue \n리소스 관리, Lambda 예약, 새 파일이 업로드되지 않은 경우에도 데이터 쿼리가 \n포함됩니다. \n \n옵션 D 는 AWS Glue 의 ETL 기능을 활용하여 규모에 맞게 데이터 변환 작업을 정의하고 \n실행할 수 있습니다. 각 S3 PUT 이벤트에 대해 Lambda 함수를 사용하여 ETL 작업을 \n호출하면 수동 개입 없이 파일이 Parquet 형식으로 효율적으로 변환되도록 할 수 있습니다. \n이 접근 방식은 운영 오버헤드를 최소화하고 간소화되고 확장 가능한 솔루션을 제공합니다. \n \n참고: \n\n=== PAGE 288 ===\nhttps://docs.aws.amazon.com/ko_kr/prescriptive-guidance/latest/patterns/three-aws-glu\ne-etl-job-types-for-converting-data-to-apache-parquet.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 259,
    "question": "회사는 Amazon RDS DB 인스턴스에서 실행되는 모든 데이터베이스에 대해 새로운 데이터 \n보존 정책을 구현하고 있습니다. 회사는 최소 2 년 동안 일일 백업을 유지해야 합니다. \n백업은 일관되고 복원 가능해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 솔루션을 권장해야 합니까?",
    "options": [
      "RDS 백업을 유지하기 위해 AWS Backup 에서 백업 볼트를 생성합니다. 일일 일정과 \n생성 후 2\n년의 만료 기간으로 새 백업 계획을 생성합니다. 백업 계획에 RDS DB \n인스턴스를 할당합니다.",
      "일일 스냅샷을 위해 RDS DB 인스턴스의 백업 기간을 구성합니다. 각 RDS DB \n인스턴스에 2 년의 스냅샷 보존 정책을 할당합니다. Amazon DLM(Amazon Data Lifecycle \nManager)을 사용하여 스냅샷 삭제를 예약합니다.",
      "만료 기간이 2 년인 Amazon CloudWatch Logs 에 자동으로 백업되도록 데이터베이스 \n트랜잭션 로그를 구성합니다.",
      "AWS Database Migration Service(AWS DMS) 복제 작업을 구성합니다. 복제 인스턴스를 \n배포하고 변경 데이터 캡처(CDC) 작업을 구성하여 데이터베이스 변경 사항을 대상으로 \nAmazon S3\n에 스트리밍합니다. 2\n년 후 스냅샷을 삭제하도록 S3 수명 주기 정책을 \n구성합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/95030-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "중앙 집중식 백업 관리 서비스인 AWS Backup 을 사용하여 RDS 백업을 유지할 것을 \n제안합니다. 백업 볼트가 생성되고 일일 일정과 2 년의 백업 보존 기간으로 백업 계획이 \n정의됩니다. RDS DB 인스턴스가 이 백업 계획에 할당됩니다.",
      "일관되고 복원 가능한 백업에 대한 요구 사항을 다루지 않습니다. 스냅샷은 시점 \n백업이며 원하는 수준의 일관성을 제공하지 못할 수 있습니다.",
      "데이터베이스에 필요한 백업 및 복원 기능을 제공하도록 설계되지 않았습니다. 백업의 \n일관성을 보장하거나 쉬운 복원 메커니즘을 제공하지 않습니다.",
      "일일 백업 및 일관된 백업 보존에 대한 요구 사항을 다루지 않습니다. 백업 및 \n복원보다는 복제 및 변경 데이터 캡처에 더 중점을 둡니다. \n \n\n=== PAGE 289 ===\n설명2: \nAWS Backup 은 사용자가 AWS 서비스 전체에서 데이터 백업을 중앙 집중화하고 자동화할 \n수 있는 완전 관리형 서비스입니다. 백업 빈도 및 보존 기간을 지정하는 백업 계획을 \n생성하고 관리할 수 있습니다. 또한 백업 데이터를 저장하는 컨테이너인 백업 볼트에 백업 \n리소스를 할당할 수도 있습니다\n1. 솔루션은 AWS Backup\n을 사용하여 RDS 백업이 \n일관되고 복원 가능하며 최소 2 년 동안 유지되도록 할 수 있습니다. \n1. 일일 스냅샷을 위해 RDS DB 인스턴스의 백업 기간을 구성합니다. 각 RDS DB \n인스턴스에 2 년의 스냅샷 보존 정책을 할당합니다. Amazon DLM(Amazon Data Lifecycle \nManager)을 사용하여 스냅샷 삭제를 예약합니다. Amazon DLM 은 RDS 스냅샷과 호환되지 \n않고 스냅샷 삭제를 예약하는 데 사용할 수 없기 때문에 이 솔루션은 백업의 일관성과 복원 \n가능성을 보장해야 하는 요구 사항을 충족하지 않습니다. \n2. 만료 기간이 2 년인 Amazon CloudWatch Logs 에 자동으로 백업되도록 데이터베이스 \n트랜잭션 로그를 구성합니다. 이 솔루션은 데이터베이스를 특정 시점으로 복원하는 데 \n데이터베이스 트랜잭션 로그가 충분하지 않기 때문에 백업이 일관되고 복원 가능한지 \n확인해야 하는 요구 사항을 충족하지 않습니다. 데이터베이스의 전체 상태가 아니라 \n데이터베이스에 대한 변경 사항만 캡처합니다. \n3. AWS Database Migration Service(AWS DMS) 복제 작업을 구성합니다. 복제 인스턴스를 \n배포하고 변경 데이터 캡처(CDC) 작업을 구성하여 데이터베이스 변경 사항을 대상으로 \nAmazon S3\n에 스트리밍합니다. 2\n년 후 스냅샷을 삭제하도록 S3 수명 주기 정책을 \n구성합니다. AWS DMS\n는 사용자가 데이터베이스를 백업하는 것이 아니라 AWS\n로 \n데이터베이스를 마이그레이션하는 데 도움이 되는 서비스이므로 이 솔루션은 백업의 \n일관성과 복원 가능성을 보장해야 하는 요구 사항을 충족하지 않습니다. 또한 복제 \n인스턴스 및 CDC 작업과 같은 추가 리소스 및 구성이 필요합니다. \n참조 URL: \nhttps://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 260,
    "question": "회사의 규정 준수 팀은 파일 공유를 AWS 로 이동해야 합니다. 공유는 Windows Server SMB \n파일 공유에서 실행됩니다. 자체 관리형 온프레미스 Active Directory 는 파일 및 폴더에 \n대한 액세스를 제어합니다. \n이 회사는 Windows File Server 용 Amazon FSx 를 솔루션의 일부로 사용하려고 합니다. \n회사는 온프레미스 Active Directory 그룹이 AWS 로 이동한 후 FSx for Windows File Server \nSMB 규정 준수 공유, 폴더 및 파일에 대한 액세스를 제한하는지 확인해야 합니다. 이 \n회사는 Windows 파일 서버 파일 시스템용 FSx 를 만들었습니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 290 ===",
    "options": [
      "Active Directory 에 연결할 Active Directory 커넥터를 만듭니다. Active Directory 그룹을 \nIAM 그룹에 매핑하여 액세스를 제한합니다.",
      "제한 태그 키와 규정 준수 태그 값을 사용하여 태그를 할당합니다. Active Directory \n그룹을 IAM 그룹에 매핑하여 액세스를 제한합니다.",
      "액세스를 제한하기 위해 FSx for Windows File Server 에 직접 연결된 IAM 서비스 연결 \n역할을 생성합니다.",
      "파일 시스템을 Active Directory 에 연결하여 액세스를 제한합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95343-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "파일 시스템이 인증 및 액세스 제어를 위해 기존 AD 인프라를 활용할 수 있습니다. \n \n이 시나리오에서는 AD 그룹을 IAM 그룹에 매핑하는 것이 적용되지 않기 때문에 옵션 A 가 \n올바르지 않습니다. IAM 은 주로 AWS 리소스에 대한 액세스를 관리하는 데 사용되지만 \n요구 사항은 액세스 제어를 위해 온프레미스 AD 와 통합하는 것입니다. \n \nRestrict 태그 키와 규정 준수 태그 값이 있는 태그를 할당하면 액세스 제어를 위해 \n온프레미스 AD 와의 필수 통합이 제공되지 않기 때문에 옵션 B 는 올바르지 않습니다. \n태그는 리소스를 구성하고 분류하는 데 사용되며 인증 또는 액세스 제어 메커니즘을 \n제공하지 않습니다. \n \nFSx for Windows File Server 에 직접 연결된 IAM 서비스 연결 역할 생성이 온프레미스 \nAD 와 통합되지 않기 때문에 옵션 C 는 올바르지 않습니다. IAM 역할은 권한 관리를 위해 \nAWS 내에서 사용되며 외부 AD 시스템과의 필수 통합을 제공하지 않습니다. \n \n설명2: \nFSx for Windows File Server 파일 시스템을 온프레미스 Active Directory 에 결합하면 \n회사에서 기존 Active Directory 그룹을 사용하여 AWS 로 이동한 후 파일 공유, 폴더 및 \n파일에 대한 액세스를 제한할 수 있습니다. 이 옵션을 사용하면 회사는 기존 액세스 제어 \n및 관리 구조를 계속 사용하여 AWS 로 보다 원활하게 전환할 수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 261,
    "question": "한 회사가 최근 전 세계 고객을 대상으로 소매 웹 사이트를 배포한다고 발표했습니다. 웹 \n\n=== PAGE 291 ===\n사이트는 Elastic Load Balancer 뒤에 있는 여러 Amazon EC2 인스턴스에서 실행됩니다. \n인스턴스는 여러 가용 영역의 Auto Scaling 그룹에서 실행됩니다. \n회사는 고객이 웹 사이트에 액세스하는 데 사용하는 장치에 따라 다양한 버전의 콘텐츠를 \n고객에게 제공하려고 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 작업 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "여러 버전의 콘텐츠를 캐시하도록 Amazon CloudFront 를 구성합니다.",
      "트래픽을 다른 인스턴스로 전달하도록 Network Load Balancer 에서 호스트 헤더를 \n구성합니다.",
      "User-Agent 헤더를 기반으로 사용자에게 특정 객체를 보내도록 Lambda@Edge 함수를 \n구성합니다.",
      "AWS Global Accelerator\n를 구성합니다. NLB(Network Load Balancer)에 요청을 \n전달합니다. 다른 EC2 인스턴스에 대한 호스트 기반 라우팅을 설정하도록 NLB\n를 \n구성합니다.",
      "AWS Global Accelerator\n를 구성합니다. NLB(Network Load Balancer)에 요청을 \n전달합니다. 다른 EC2 인스턴스에 대한 경로 기반 라우팅을 설정하도록 NLB\n를 \n구성합니다. \nAnswer: A, C \nhttps://www.examtopics.com/discussions/amazon/view/95011-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "고객이 위치 및 장치 유형에 따라 적절한 버전의 콘텐츠를 받을 수 있습니다.",
      "Lambda@Edge 를 생성하면 들어오는 요청의 User-Agent 헤더를 검사하고 사용 중인 \n장치 유형을 확인할 수 있습니다. 이 정보를 기반으로 응답을 사용자 지정하고 적절한 \n버전의 콘텐츠를 사용자에게 보낼 수 있습니다.",
      "장치 유형에 따라 다른 콘텐츠 버전을 제공해야 하는 요구 사항을 다루지 않습니다.",
      "& E.는 장치별 콘텐츠 요구 사항을 다루지 않습니다. \n \n따라서 옵션 A 와 C 는 고객이 웹 사이트에 액세스하는 데 사용하는 장치에 따라 다양한 \n버전의 콘텐츠를 제공해야 하는 요구 사항을 충족하기 위한 올바른 작업 조합입니다. \n \n설명 \nC 의 경우: 향상된 사용자 경험 Lambda@Edge 는 성능 저하 없이 콘텐츠를 개인화할 수 \n있도록 하여 전 세계 웹 사이트 및 웹 애플리케이션에 대한 사용자 경험을 개선하는 데 \n도움을 줄 수 있습니다. 실시간 이미지 변환 사용자 특성에 따라 즉시 이미지를 변환하여 \n\n=== PAGE 292 ===\n사용자 경험을 사용자 정의할 수 있습니다. 예를 들어 뷰어의 장치 유형(모바일, 데스크톱 \n또는 태블릿)에 따라 이미지 크기를 조정할 수 있습니다. 또한 CloudFront Edge 위치에서 \n변환된 이미지를 캐싱하여 이미지를 제공할 때 성능을 더욱 향상시킬 수 있습니다.  \nhttps://aws.amazon.com/lambda/edge/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 262,
    "question": "회사에서 다중 계층 웹 애플리케이션에 Amazon ElastiCache 를 사용할 계획입니다. 솔루션 \n설계자는 ElastiCache 클러스터용 캐시 VPC 와 애플리케이션의 Amazon EC2 인스턴스용 앱 \nVPC 를 생성합니다. 두 VPC 모두 us-east-1 리전에 있습니다. \n솔루션 설계자는 애플리케이션의 EC2 인스턴스에 ElastiCache 클러스터에 대한 액세스 \n권한을 제공하는 솔루션을 구현해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "VPC 간에 피어링 연결을 생성합니다. 두 VPC 모두에서 피어링 연결을 위한 라우팅 \n테이블 항목을 추가합니다. 애플리케이션의 보안 그룹에서 인바운드 연결을 허용하도록 \nElastiCache 클러스터의 보안 그룹에 대한 인바운드 규칙을 구성합니다.",
      "전송 VPC 를 생성합니다. 전송 VPC 를 통해 트래픽을 라우팅하도록 캐시 VPC 및 앱 \nVPC 의 VPC 라우팅 테이블을 업데이트합니다. 애플리케이션의 보안 그룹에서 인바운드 \n연결을 허용하도록 ElastiCache 클러스터의 보안 그룹에 대한 인바운드 규칙을 구성합니다.",
      "VPC 간에 피어링 연결을 생성합니다. 두 VPC 모두에서 피어링 연결을 위한 라우팅 \n테이블 항목을 추가합니다. 애플리케이션의 보안 그룹에서 인바운드 연결을 허용하도록 \n피어링 연결의 보안 그룹에 대한 인바운드 규칙을 구성합니다.",
      "전송 VPC 를 생성합니다. 전송 VPC 를 통해 트래픽을 라우팅하도록 캐시 VPC 및 앱 \nVPC 의 VPC 라우팅 테이블을 업데이트합니다. 애플리케이션의 보안 그룹에서 인바운드 \n연결을 허용하도록 Transit VPC 의 보안 그룹에 대한 인바운드 규칙을 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95463-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nVPC 간에 피어링 연결을 생성하는 것은 연결을 설정하는 비용 효율적인 방법입니다. 두 \nVPC 에서 피어링 연결을 위한 라우팅 테이블 항목을 추가하면 두 VPC 간에 트래픽이 흐를 \n수 \n있습니다. \nElastiCache \n클러스터의 \n보안 \n그룹에서 \n인바운드 \n규칙을 \n구성하면 \n애플리케이션 보안 그룹의 인바운드 연결이 허용되어 앱 VPC\n의 EC2 인스턴스에서 \nElastiCache 클러스터에 액세스할 수 있습니다. \n옵션 B\n는 이 시나리오에 불필요한 복잡성과 비용을 추가하는 Transit VPC 생성을",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 263,
    "question": "회사에서 여러 마이크로서비스로 구성된 애플리케이션을 구축하고 있습니다. 이 회사는 \n컨테이너 기술을 사용하여 AWS 에 소프트웨어를 배포하기로 결정했습니다. 회사는 유지 \n관리 및 확장을 위한 지속적인 노력을 최소화하는 솔루션이 필요합니다. 회사는 추가 \n인프라를 관리할 수 없습니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 작업 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "Amazon Elastic Container Service(Amazon ECS) 클러스터를 배포합니다.",
      "여러 가용 영역에 걸쳐 있는 Amazon EC2 인스턴스에 Kubernetes 제어 평면을 \n배포합니다.",
      "Amazon EC2 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 서비스를 \n배포합니다. 2 보다 크거나 같은 원하는 태스크 번호 레벨을 지정하십시오.",
      "Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 서비스를 \n배포합니다. 2 보다 크거나 같은 원하는 태스크 번호 레벨을 지정하십시오.",
      "여러 가용 영역에 걸쳐 있는 Amazon EC2 인스턴스에 Kubernetes 작업자 노드를 \n배포합니다. 각 마이크로 서비스에 대해 두 개 이상의 복제본을 지정하는 배포를 만듭니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95012-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 264,
    "question": "회사에는 Amazon Route 53 에서 전달하는 트래픽이 있는 10 개 이상의 Amazon EC2 \n인스턴스를 호스팅하는 웹 애플리케이션이 있습니다. 회사에서 애플리케이션을 검색하려고 \n할 때 때때로 시간 초과 오류가 발생합니다. 네트워킹 팀은 일부 DNS 쿼리가 비정상 \n인스턴스의 IP 주소를 반환하여 시간 초과 오류가 발생했음을 발견했습니다. \n이러한 시간 초과 오류를 극복하기 위해 솔루션 설계자는 무엇을 구현해야 합니까?",
    "options": [
      "각 EC2 인스턴스에 대해 Route 53 단순 라우팅 정책 레코드를 생성합니다. 상태 확인을 \n각 레코드와 연결합니다.",
      "각 EC2 인스턴스에 대해 Route 53 장애 조치 라우팅 정책 레코드를 생성합니다. 상태 \n확인을 각 레코드와 연결합니다.",
      "EC2 인스턴스를 원본으로 사용하여 Amazon CloudFront 배포를 생성합니다. 상태 \n확인을 EC2 인스턴스와 연결합니다.",
      "EC2 인스턴스 앞에서 상태 확인을 통해 Application Load Balancer(ALB)를 생성합니다. \n\n=== PAGE 295 ===\n루트 53 에서 ALB 로 이동합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/95345-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n설계자는 ALB 를 생성하고 상태 확인을 구성하여 정상 인스턴스만 트래픽을 수신하도록 \n합니다. ALB 는 구성된 상태 확인 설정을 기반으로 EC2 인스턴스의 상태를 주기적으로 \n확인합니다. \nRoute 53 에서 ALB 로 트래픽을 라우팅하면 DNS 쿼리가 개별 인스턴스 대신 ALB 의 IP \n주소를 반환합니다. 이를 통해 ALB\n는 정상 인스턴스에만 트래픽을 분산하여 비정상 \n인스턴스로 인한 시간 초과를 방지할 수 있습니다. \nA & B: 상태 확인을 각 레코드와 연결하면 비정상 인스턴스를 식별하는 데 도움이 될 수 \n있지만 자동 로드 밸런싱 및 정상 인스턴스에 대한 트래픽 배포를 제공하지 않습니다. \nC: CloudFront 는 성능과 가용성을 향상시킬 수 있지만 기본적으로 CDN 이며 로드 밸런싱 \n및 정상 인스턴스에 대한 트래픽 분산 문제를 직접적으로 해결하지 못할 수 있습니다. \n따라서 옵션 D 는 상태 확인이 포함된 ALB 를 구현하고 Route 53 을 통해 트래픽을 \n라우팅하여 시간 초과 오류를 극복하는 데 가장 적합한 솔루션입니다. \n \n2: \nALB(Application Load Balancer)를 사용하면 들어오는 트래픽을 여러 백엔드 인스턴스에 \n분산하고 비정상 인스턴스에서 트래픽을 제거하면서 정상 인스턴스로 트래픽을 자동으로 \n라우팅할 수 있습니다. EC2 인스턴스 앞에 ALB 를 사용하고 Route 53 에서 ALB 로 트래픽을 \n라우팅함으로써 로드 밸런서는 인스턴스에 대한 상태 확인을 수행하고 정상 인스턴스로만 \n트래픽을 라우팅할 수 있으므로 비정상 인스턴스로 인한 시간 초과 오류를 줄이거나 \n제거하는 데 도움이 됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 265,
    "question": "솔루션 \n설계자는 \n웹, \n애플리케이션 \n및 \n데이터베이스 \n계층으로 \n구성된 \n고가용성 \n애플리케이션을 설계해야 합니다. HTTPS 콘텐츠 전송은 전송 시간을 최소화하면서 가능한 \n한 에지에 가까워야 합니다. \n이러한 요구 사항을 충족하고 가장 안전한 솔루션은 무엇입니까?",
    "options": [
      "퍼블릭 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 Application Load \nBalancer(ALB)를 구성합니다. 퍼블릭 ALB\n를 오리진으로 사용하여 HTTPS 콘텐츠를 \n제공하도록 Amazon CloudFront 를 구성합니다. \n\n=== PAGE 296 ===",
      "프라이빗 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 Application Load \nBalancer 를 구성합니다. EC2 인스턴스를 오리진으로 사용하여 HTTPS 콘텐츠를 제공하도록 \nAmazon CloudFront 를 구성합니다.",
      "프라이빗 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 ALB(Application Load \nBalancer)를 구성합니다. 퍼블릭 ALB 를 오리진으로 사용하여 HTTPS 콘텐츠를 제공하도록 \nAmazon CloudFront 를 구성합니다.",
      "퍼블릭 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 Application Load \nBalancer 를 구성합니다. EC2 인스턴스를 오리진으로 사용하여 HTTPS 콘텐츠를 제공하도록 \nAmazon CloudFront 를 구성합니다. \nAnswer: C \nhttps://www.examtopics.com/discussions/amazon/view/95013-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "EC2 인스턴스를 퍼블릭 인터넷에 직접 노출하므로 보안이 손상될 수 있습니다.",
      "효율적인 부하 분산과 고가용성을 위해 필요한 퍼블릭 서브넷의 부하 분산 장치가 \n부족합니다.",
      "로드 밸런싱 및 HTTPS 콘텐츠 전송을 제공하며 EC2 인스턴스를 공용 인터넷에 직접 \n노출하므로 보안 위험이 발생할 수 있습니다.",
      "퍼블릭 ALB 를 오리진으로 하는 CloudFront 를 사용하여 고가용성, 프라이빗 서브넷을 \n통한 보안 액세스 및 최적화된 HTTPS 콘텐츠 전송을 제공합니다. \n \n설명2: \n이 솔루션은 웹, 애플리케이션 및 데이터베이스 계층이 있는 고가용성 애플리케이션에 대한 \n요구 사항을 충족할 뿐만 아니라 에지 기반 콘텐츠 전달을 제공합니다. 또한 웹 서버에 \n대한 직접 액세스를 제한하는 프라이빗 서브넷에 ALB 를 두어 보안을 최대화하는 동시에 \n퍼블릭 ALB 를 통해 인터넷을 통해 트래픽을 제공할 수 있습니다. 이렇게 하면 웹 서버가 \n공용 인터넷에 노출되지 않으므로 공격 표면이 줄어들고 애플리케이션에 안전하게 액세스할 \n수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 266,
    "question": "회사에는 AWS 에서 실행되는 인기 있는 게임 플랫폼이 있습니다. 대기 시간은 사용자 \n경험에 영향을 미치고 일부 플레이어에게 부당한 이점을 제공할 수 있기 때문에 \n애플리케이션은 대기 시간에 민감합니다. 애플리케이션은 모든 AWS 리전에 배포됩니다. \nApplication Load Balancer(ALB) 뒤에 구성된 Auto Scaling 그룹의 일부인 Amazon EC2 \n\n=== PAGE 297 ===\n인스턴스에서 실행됩니다. 솔루션 설계자는 애플리케이션의 상태를 모니터링하고 트래픽을 \n정상 엔드포인트로 리디렉션하는 메커니즘을 구현해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS Global Accelerator 에서 액셀러레이터를 구성합니다. 애플리케이션이 청취하는 \n포트에 대한 리스너를 추가하고 각 리전의 리전 엔드포인트에 연결합니다. ALB\n를 \n엔드포인트로 추가하십시오.",
      "Amazon CloudFront 배포를 생성하고 ALB 를 원본 서버로 지정합니다. 원본 캐시 헤더를 \n사용하도록 \n캐시 \n동작을 \n구성합니다. \nAWS \nLambda \n함수를 \n사용하여 \n트래픽을 \n최적화하십시오.",
      "Amazon CloudFront 배포를 생성하고 Amazon S3 를 원본 서버로 지정합니다. 원본 캐시 \n헤더를 사용하도록 캐시 동작을 구성합니다. AWS Lambda 함수를 사용하여 트래픽을 \n최적화하십시오.",
      "애플리케이션의 데이터 저장소 역할을 하도록 Amazon DynamoDB 데이터베이스를 \n구성합니다. 애플리케이션 데이터를 호스팅하는 DynamoDB 의 인 메모리 캐시 역할을 할 \nDynamoDB Accelerator(DAX) 클러스터를 생성합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/95014-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "CloudFront 는 캐싱 및 콘텐츠 전송에 도움이 될 수 있지만 애플리케이션의 상태를 \n모니터링하거나 상태 확인을 기반으로 트래픽 리디렉션을 수행하는 메커니즘을 제공하지 \n않습니다.",
      "이 구성은 정적 콘텐츠 전달에 적합하지만 응용 프로그램의 상태 모니터링 및 트래픽 \n리디렉션 요구 사항을 다루지 않습니다.",
      "이렇게 하면 성능이 향상될 수 있지만 애플리케이션의 상태를 모니터링하거나 상태 \n확인을 기반으로 트래픽을 리디렉션하지 않습니다. \n따라서 옵션 A 는 AWS Global Accelerator 를 활용하여 애플리케이션 상태를 모니터링하고, \n트래픽을 정상 엔드포인트로 라우팅하고, 지연 시간 문제를 해결하면서 사용자 경험을 \n최적화하므로 가장 적합한 솔루션입니다. \n \n설명2: \nAWS Global Accelerator 는 상태 확인을 기반으로 최적의 정상 엔드포인트로 트래픽을 \n전달하고 클라이언트의 지리적 위치를 기반으로 가장 가까운 정상 엔드포인트로 트래픽을 \n라우팅할 수도 있습니다. 액셀러레이터를 구성하고 이를 각 리전의 지역 엔드포인트에 \n연결하고 ALB\n를 엔드포인트로 추가함으로써 솔루션은 트래픽을 정상 엔드포인트로 \n\n=== PAGE 298 ===\n리디렉션하여 대기 시간을 줄이고 애플리케이션이 최적으로 실행되도록 함으로써 사용자 \n경험을 개선합니다. 이 솔루션은 트래픽이 가장 가까운 정상 엔드포인트로 전달되도록 하고 \n전반적인 사용자 경험을 개선하는 데 도움이 됩니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 267,
    "question": "회사에 모바일 앱을 사용하는 백만 명의 사용자가 있습니다. 회사는 거의 실시간으로 \n데이터 사용량을 분석해야 합니다. 회사는 또한 거의 실시간으로 데이터를 암호화하고 추가 \n처리를 위해 데이터를 Apache Parquet 형식의 중앙 위치에 저장해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Kinesis 데이터 스트림을 생성하여 Amazon S3\n에 데이터를 저장합니다. \n데이터를 분석할 Amazon Kinesis Data Analytics 애플리케이션을 생성합니다. AWS Lambda \n함수를 호출하여 데이터를 Kinesis Data Analytics 애플리케이션으로 보냅니다.",
      "Amazon Kinesis 데이터 스트림을 생성하여 Amazon S3\n에 데이터를 저장합니다. \n데이터를 분석할 Amazon EMR 클러스터를 생성합니다. AWS Lambda 함수를 호출하여 \n데이터를 EMR 클러스터로 보냅니다.",
      "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 Amazon S3 에 데이터를 \n저장합니다. 데이터를 분석할 Amazon EMR 클러스터를 생성합니다.",
      "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 Amazon S3 에 데이터를 \n저장합니다. 데이터를 분석할 Amazon Kinesis Data Analytics 애플리케이션을 생성합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95347-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "데이터를 분석 애플리케이션으로 보내려면 Lambda 를 호출해야 합니다. 이로 인해 \n추가적인 운영 오버헤드와 복잡성이 발생합니다.",
      "EMR 은 빅 데이터 처리를 위한 강력한 도구이지만 Kinesis Data Analytics 에 비해 더 \n많은 운영 관리 및 구성이 필요합니다.",
      "Kinesis Data Analytics 가 보다 간소화되고 자동화된 방식으로 분석을 수행할 때 데이터 \n분석에 EMR 을 포함하여 불필요한 복잡성을 도입합니다. \n \n따라서 옵션 D 는 데이터 수집에 Kinesis Data Firehose 를 활용하고 S3 에 데이터를 \n저장하며 거의 실시간 분석을 위해 Kinesis Data Analytics 를 활용하여 데이터 사용 분석 및 \n\n=== PAGE 299 ===\n암호화를 위한 운영 오버헤드가 낮은 솔루션을 제공하므로 가장 적합한 솔루션입니다. . \n \n설명2: \n이 솔루션은 거의 실시간으로 데이터 수집, 데이터 변환, 암호화 및 데이터 저장을 \n자동으로 처리할 수 있는 완전관리형 서비스인 Amazon Kinesis Data Firehose\n를 \n사용하므로 최소한의 운영 오버헤드로 요구 사항을 충족합니다. Kinesis Data Firehose 는 \n추가 처리를 위해 Amazon S3 에 Apache Parquet 형식으로 데이터를 자동으로 저장할 수 \n있습니다. \n또한 Amazon Kinesis Data Analytics 애플리케이션을 생성하여 인프라를 관리하거나 \nLambda 함수를 호출할 필요 없이 거의 실시간으로 데이터를 분석할 수 있습니다. 이렇게 \n하면 최소한의 운영 오버헤드로 많은 양의 데이터를 처리할 수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 268,
    "question": "게임 회사에는 점수를 표시하는 웹 애플리케이션이 있습니다. 애플리케이션은 Application \nLoad Balancer 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 Amazon RDS \nfor MySQL 데이터베이스에 데이터를 저장합니다. 사용자는 데이터베이스 읽기 성능으로 \n인해 긴 지연과 중단을 경험하기 시작했습니다. 회사는 애플리케이션 아키텍처의 변경을 \n최소화하면서 사용자 경험을 개선하고자 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "데이터베이스 앞에서 Amazon ElastiCache 를 사용하십시오.",
      "애플리케이션과 데이터베이스 간에 RDS 프록시를 사용합니다.",
      "애플리케이션을 EC2 인스턴스에서 AWS Lambda 로 마이그레이션합니다.",
      "MySQL\n용 \nAmazon \nRDS\n에서 \nAmazon \nDynamoDB\n로 \n데이터베이스를 \n마이그레이션합니다. \nAnswer: B \nhttps://www.examtopics.com/discussions/amazon/view/95016-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "ElastiCache 는 자주 액세스하는 데이터를 캐싱하여 읽기 성능을 향상시킬 수 있지만 \n애플리케이션 아키텍처를 변경해야 합니다. 또한 특히 애플리케이션의 데이터베이스 사용에 \n복잡한 쿼리 또는 빈번한 데이터 업데이트가 포함되는 경우 RDS Proxy 와 동일한 수준의 \n읽기 성능 향상을 제공하지 못할 수 있습니다.",
      "Lambda\n는 확장성 및 운영 오버헤드 감소와 같은 이점을 제공할 수 있지만 \n데이터베이스 \n읽기 \n성능 \n문제를 \n직접 \n해결하지 \n못할 \n수 \n있습니다. \nLambda\n로 \n\n=== PAGE 300 ===\n마이그레이션하려면 애플리케이션의 아키텍처 및 코드베이스를 크게 변경해야 합니다.",
      "DynamoDB 는 확장 가능한 고성능 NoSQL 데이터베이스이지만 MySQL 과 같은 관계형 \n데이터베이스에서 DynamoDB 로 마이그레이션하려면 애플리케이션의 데이터 모델과 쿼리 \n패턴을 크게 변경해야 합니다. \n따라서 옵션 B 는 RDS Proxy 를 활용하여 데이터베이스 연결을 최적화하고 읽기 성능을 \n개선하고 애플리케이션 아키텍처의 변경을 최소화하며 데이터베이스 읽기 성능 문제를 \n해결하기 위한 확장 가능하고 효율적인 솔루션을 제공하므로 가장 적합한 솔루션입니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 269,
    "question": "전자 상거래 회사는 Amazon RDS 기반 웹 애플리케이션의 성능 저하를 발견했습니다. 성능 \n저하의 원인은 비즈니스 분석가가 트리거하는 읽기 전용 SQL 쿼리 수가 증가했기 \n때문입니다. 솔루션 설계자는 기존 웹 애플리케이션에 대한 최소한의 변경으로 문제를 \n해결해야 합니다. \n솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": [
      "데이터를 Amazon DynamoDB\n로 내보내고 비즈니스 분석가가 쿼리를 실행하도록 \n합니다.",
      "Amazon ElastiCache\n에 데이터를 로드하고 비즈니스 분석가가 쿼리를 실행하도록 \n합니다.",
      "기본 데이터베이스의 읽기 복제본을 생성하고 비즈니스 분석가가 쿼리를 실행하도록 \n합니다.",
      "데이터를 Amazon Redshift 클러스터로 복사하고 비즈니스 분석가가 쿼리를 실행하도록 \n합니다. \nAnswer: C \nhttps://www.examtopics.com/discussions/amazon/view/95032-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "DynamoDB 는 확장 가능한 NoSQL 데이터베이스이지만 애플리케이션의 데이터 모델 및 \n쿼리 패턴을 변경해야 합니다.",
      "ElastiCache 는 쿼리 성능을 향상시킬 수 있는 인메모리 데이터 저장소이지만 주로 \n복잡한 쿼리를 실행하기보다는 캐싱에 사용됩니다.",
      "Redshift 는 강력한 데이터 웨어하우징 솔루션이지만 데이터를 마이그레이션하고 쿼리를 \nRedshift 의 열 기반 아키텍처에 적용하려면 애플리케이션 및 쿼리 논리를 크게 변경해야 \n합니다. \n따라서 옵션 C 는 RDS 의 읽기 전용 복제본을 활용하여 기본 데이터베이스에서 읽기 전용 \n\n=== PAGE 301 ===\n쿼리 트래픽을 오프로드하므로 비즈니스 분석가가 웹 애플리케이션의 성능에 영향을 주지 \n않고 쿼리를 실행할 수 있으므로 가장 적합한 권장 사항입니다. 기존 웹 애플리케이션에 \n대한 최소한의 변경으로 확장 가능하고 효율적인 솔루션을 제공합니다. \n \n설명2: \n기본 RDS 데이터베이스의 읽기 복제본을 생성하면 기본 데이터베이스에서 읽기 전용 SQL \n쿼리를 오프로드하여 웹 애플리케이션의 성능을 향상시키는 데 도움이 됩니다. 읽기 \n복제본은 읽기 전용 트래픽을 처리하는 데 사용할 수 있는 기본 데이터베이스의 정확한 \n복사본으로, 기본 데이터베이스의 부하를 줄이고 웹 애플리케이션의 성능을 향상시킵니다. \n이 솔루션은 기존 웹 애플리케이션에 대한 최소한의 변경으로 구현할 수 있습니다. \n분석가는 코드를 수정하지 않고 읽기 복제본에서 쿼리를 계속 실행할 수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 270,
    "question": "회사는 중앙 집중식 AWS 계정을 사용하여 다양한 Amazon S3 버킷에 로그 데이터를 \n저장합니다. 솔루션 설계자는 데이터가 S3 버킷에 업로드되기 전에 미사용 데이터가 \n암호화되었는지 확인해야 합니다. 또한 데이터는 전송 중에 암호화되어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "클라이언트 측 암호화를 사용하여 S3 버킷에 업로드되는 데이터를 암호화합니다.",
      "서버 측 암호화를 사용하여 S3 버킷에 업로드되는 데이터를 암호화합니다.",
      "S3 업로드를 위해 S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용해야 하는 \n버킷 정책을 만듭니다.",
      "기본 AWS Key Management Service(AWS KMS) 키를 사용하여 S3 버킷을 암호화하는 \n보안 옵션을 활성화합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95031-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n클라이언트 측 암호화는 데이터를 Amazon S3 에 업로드하기 전에 데이터를 암호화하는 \n방법입니다. 이를 통해 사용자는 암호화 프로세스, 암호화 키 및 관련 도구를 관리할 수 \n있습니다. 클라이언트 측 암호화를 사용하면 Amazon S3 가 암호화 키나 암호화되지 않은 \n데이터에 액세스할 수 없기 때문에 솔루션은 유휴 및 전송 중에 데이터를 암호화할 수 \n있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 271,
    "question": "솔루션 설계자는 원하는 Amazon EC2 용량에 도달하기 전에 야간 배치 처리 작업이 1 시간 \n동안 자동으로 확장되는 것을 관찰합니다. 최대 용량은 '매일 밤 동일하고 배치 작업은 \n항상 오전 1 시에 시작됩니다. 솔루션 설계자는 원하는 EC2 용량에 빠르게 도달하고 배치 \n작업이 완료된 후 Auto Scaling 그룹이 축소될 수 있는 비용 효율적인 솔루션을 찾아야 \n합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Auto Scaling 그룹의 최소 용량을 늘립니다.",
      "Auto Scaling 그룹의 최대 용량을 늘립니다.",
      "원하는 컴퓨팅 수준으로 확장하도록 예약된 확장을 구성합니다.",
      "각 조정 작업 중에 더 많은 EC2 인스턴스를 추가하도록 조정 정책을 변경합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95018-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n예약된 조정을 구성하여 솔루션 설계자는 배치 작업이 시작될 때 특정 시간(IAM)에 원하는 \n컴퓨팅 수준으로 자동으로 확장한 다음 작업이 완료되면 자동으로 축소하도록 Auto Scaling \n그룹을 설정할 수 있습니다. 이렇게 하면 원하는 EC2 용량에 빠르게 도달할 수 있고 비용 \n절감에도 도움이 됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 272,
    "question": "회사는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스 플릿에서 동적 \n웹 사이트를 제공합니다. 웹 사이트는 전 세계 고객에게 서비스를 제공하기 위해 여러 \n언어를 지원해야 합니다. 웹 사이트의 아키텍처는 us-west-1 지역에서 실행 중이며 세계의 \n다른 지역에 있는 사용자에 대해 높은 요청 지연 시간을 보이고 있습니다. \n웹사이트는 사용자의 위치에 관계없이 빠르고 효율적으로 요청을 처리해야 합니다. 그러나 \n회사는 여러 지역에 걸쳐 기존 아키텍처를 다시 생성하기를 원하지 않습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "기존 아키텍처를 Amazon S3 버킷에서 제공되는 웹 사이트로 교체하십시오. S3 버킷을 \n오리진으로 사용하여 Amazon CloudFront 배포를 구성합니다. Accept-Language 요청 \n헤더를 기반으로 캐시 동작 설정을 캐시로 설정합니다.",
      "ALB 를 오리진으로 사용하여 Amazon CloudFront 배포를 구성합니다. Accept-Language \n요청 헤더를 기반으로 캐시 동작 설정을 캐시로 설정합니다.",
      "ALB 와 통합되는 Amazon API Gateway API 를 생성합니다. HTTP 통합 유형을 사용하도록 \n\n=== PAGE 303 ===\nAPI 를 구성합니다. Accept-Language 요청 헤더를 기반으로 API 캐시를 활성화하도록 API \nGateway 단계를 설정합니다.",
      "각 추가 지역에서 EC2 인스턴스를 시작하고 해당 지역의 캐시 서버 역할을 하도록 \nNGINX 를 구성합니다. 지리적 위치 라우팅 정책을 사용하여 Amazon Route 53 레코드 세트 \n뒤에 모든 EC2 인스턴스와 ALB 를 배치합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99865-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 273,
    "question": "빠르게 성장하는 전자상거래 회사는 단일 AWS 리전에서 워크로드를 실행하고 있습니다. \n솔루션 설계자는 다른 AWS 리전을 포함하는 재해 복구(DR) 전략을 생성해야 합니다. \n회사는 대기 시간을 최소화하면서 DR 지역에서 데이터베이스를 최신 상태로 유지하기를 \n원합니다. DR 지역의 나머지 인프라는 감소된 용량으로 실행되어야 하며 필요한 경우 \n확장할 수 있어야 합니다. \n가장 낮은 RTO(복구 시간 목표)로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "파일럿 라이트 배포와 함께 Amazon Aurora 글로벌 데이터베이스를 사용합니다.",
      "웜 대기 배포와 함께 Amazon Aurora 글로벌 데이터베이스를 사용합니다.",
      "파일럿 라이트 배포와 함께 Amazon RDS 다중 AZ DB 인스턴스를 사용합니다.",
      "웜 대기 배포와 함께 Amazon RDS 다중 AZ DB 인스턴스를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99505-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n웜 스탠바이는 감소된 수준의 트래픽을 즉시 처리할 수 있습니다. 그런 다음 이 기존 \n배포를 확장해야 하므로 파일럿 라이트보다 RTO 시간이 더 짧습니다. 파일럿 라이트를 \n사용하려면 먼저 인프라를 배포한 다음 워크로드가 요청을 처리할 수 있기 전에 리소스를 \n확장해야 하기 때문입니다. \n\naws.amazon.com/ko/blogs/architecture/disaster-recovery-dr-architecture-on-aw\ns-part-iii-pilot-light-and-warm-standby/ \nA(X) : 파일럿 라이트를 사용하기 때문에 오답. \nB(O) : Amazon Aurora 글로벌 데이터베이스는 여러 리전에 걸쳐 자동으로 복제를 진행 \nAmazon Aurora Global Database 는 단일 Amazon Aurora 데이터베이스를 여러 AWS \n리전으로 확장할 수 있는 기능입니다. 데이터베이스 성능에 전혀 영향을 주지 않고",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 274,
    "question": "회사는 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 회사는 애플리케이션에 \n재해 복구(DR) 솔루션을 구현해야 합니다. DR 솔루션은 RTO(복구 시간 목표)가 4 시간 \n미만이어야 합니다. 또한 DR 솔루션은 정상 작동 중에 가능한 한 적은 AWS 리소스를 \n사용해야 합니다. \n운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon 머신 이미지(AMI)를 생성하여 EC2 인스턴스를 백업합니다. AMI 를 보조 AWS \n리전에 복사합니다. AWS Lambda 및 사용자 지정 스크립트를 사용하여 보조 리전에서 \n인프라 배포를 자동화합니다.",
      "Amazon 머신 이미지(AMI)를 생성하여 EC2 인스턴스를 백업합니다. AMI 를 보조 AWS \n리전에 복사합니다. AWS CloudFormation\n을 사용하여 보조 리전에서 인프라 배포를 \n자동화합니다.",
      "보조 AWS 리전에서 EC2 인스턴스를 시작합니다. 보조 리전의 EC2 인스턴스를 항상 \n활성 상태로 유지하십시오.",
      "보조 가용 영역에서 EC2 인스턴스를 시작합니다. 보조 가용 영역의 EC2 인스턴스를 \n항상 활성 상태로 유지합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99459-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이를 통해 회사는 RTO(복구 시간 목표)가 4 시간 미만이고 정상 운영 중에 AWS 리소스를 \n최대한 적게 사용하는 애플리케이션에 대한 재해 복구(DR) 솔루션을 구현할 수 있습니다. \nAmazon 머신 이미지(AMI)를 생성하여 EC2 인스턴스를 백업하고 AMI 를 보조 AWS 리전에 \n복사함으로써 회사는 애플리케이션의 특정 시점 스냅샷을 생성하고 이를 다른 지리적",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 275,
    "question": "회사에서 내부 브라우저 기반 애플리케이션을 실행합니다. 애플리케이션은 Application \nLoad Balancer 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 여러 가용 영역에 \n걸쳐 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. Auto Scaling 그룹은 근무 시간 동안 \n최대 20\n개의 인스턴스로 확장되지만 밤에는 2\n개의 인스턴스로 축소됩니다. 오전 \n중반까지는 잘 돌아가는데도 하루가 시작되면 애플리케이션이 매우 느리다고 직원들이 \n불평하고 있다. \n직원 불만을 해결하고 비용을 최소화하기 위해 확장을 어떻게 변경해야 합니까?",
    "options": [
      "사무실이 열리기 직전에 원하는 수용 인원을 20\n명으로 설정하는 예약 작업을 \n구현합니다.",
      "더 낮은 CPU 임계값에서 트리거되는 단계 조정 작업을 구현하고 휴지 기간을 줄입니다.",
      "더 낮은 CPU 임계값에서 트리거되는 대상 추적 작업을 구현하고 휴지 기간을 줄입니다.",
      "사무실이 열리기 직전에 최소 및 최대 수용 인원을 20 명으로 설정하는 예약 조치를 \n구현합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99584-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 아침에 용량을 더 빠르게 확장하여 성능을 개선하지만 작업 외 시간에도 여전히 \n용량을 축소할 수 있습니다. 다음과 같이 이를 달성합니다. \n* 대상 추적 작업은 CPU 사용률 대상에 따라 확장됩니다. 아침에 더 낮은 CPU 임계값에서 \n트리거함으로써 Auto Scaling 그룹은 트래픽이 증가함에 따라 더 빨리 확장을 시작하여 \n사용률이 너무 높아져 성능에 영향을 미치기 전에 인스턴스를 시작합니다. \n* 휴지 기간을 줄이면 Auto Scaling 이 보다 적극적으로 확장하여 목표에 도달할 때까지 더 \n많은 인스턴스를 더 빠르게 시작할 수 있습니다. 이렇게 하면 용량 증가 속도가 \n빨라집니다. \n* 그러나 고정된 최소/최대 용량을 설정하는 예약된 작업과 달리 대상 추적을 사용하면 \n수요에 따라 근무 외 시간에도 그룹을 축소할 수 있습니다. 이는 비용을 최소화하는 데 \n도움이 됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  }
];