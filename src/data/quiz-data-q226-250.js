export const quizData = [
  {
    "id": 226,
    "question": "회사는 Amazon EC2 인스턴스에서 실행되는 RESTful 웹 서비스 애플리케이션을 사용하여 \n수천 개의 원격 장치에서 데이터를 수집합니다. EC2 인스턴스는 원시 데이터를 수신하고 \n원시 데이터를 변환하며 모든 데이터를 Amazon S3 버킷에 저장합니다. 원격 장치의 수는 \n곧 수백만 개로 증가할 것입니다. 이 회사는 운영 오버헤드를 최소화하는 확장성이 뛰어난 \n\n=== PAGE 249 ===\n솔루션이 필요합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "AWS Glue 를 사용하여 Amazon S3 에서 원시 데이터를 처리합니다.",
      "Amazon Route 53 을 사용하여 트래픽을 다른 EC2 인스턴스로 라우팅합니다.",
      "들어오는 데이터의 양을 수용하기 위해 더 많은 EC2 인스턴스를 추가합니다.",
      "원시 데이터를 Amazon Simple Queue Service(Amazon SQS)로 보냅니다. EC2 \n인스턴스를 사용하여 데이터를 처리합니다.",
      "Amazon API Gateway 를 사용하여 원시 데이터를 Amazon Kinesis 데이터 스트림으로 \n보냅니다. 데이터 스트림을 소스로 사용하여 데이터를 Amazon S3 에 전달하도록 Amazon \nKinesis Data Firehose 를 구성합니다. \nAnswer: A, E \nhttps://www.examtopics.com/discussions/amazon/view/95312-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \n\"RESTful 웹 서비스\" => API 게이트웨이. \n\"EC2 인스턴스는 원시 데이터를 수신하고, 원시 데이터를 변환하고, 모든 데이터를 \nAmazon S3 버킷에 저장합니다.\" \n=> (Extract - Transform - Load)가 있는 GLUE \n \n설명2:",
      "데이터의 스키마를 자동으로 발견하고 ETL 코드를 생성하여 변환합니다.",
      "API Gateway 는 RESTful 웹 서비스를 통해 원격 장치에서 원시 데이터를 수신하는 데 \n사용할 수 있습니다. 들어오는 요청을 처리하기 위해 확장 가능하고 관리되는 인프라를 \n제공합니다. 그런 다음 데이터를 확장성과 내구성이 뛰어난 실시간 데이터 스트리밍 \n서비스인 Amazon Kinesis 데이터 스트림으로 보낼 수 있습니다. 여기에서 데이터 스트림을 \n소스로 사용하고 변환된 데이터를 Amazon S3\n에 전달하도록 Amazon Kinesis Data \nFirehose 를 구성할 수 있습니다. 이러한 서비스 조합을 통해 운영 오버헤드를 최소화하면서 \n원활한 데이터 수집 및 처리가 가능합니다.",
      "확장 가능한 데이터 처리 및 저장의 필요성을 직접적으로 다루지는 않습니다. DNS 관리 \n및 트래픽을 다른 끝점으로 라우팅하는 데 중점을 둡니다.",
      "더 많은 EC2 를 추가하면 인스턴스 관리 및 확장 측면에서 운영 오버헤드가 증가할 수 \n있습니다.",
      "데이터 처리에 SQS 및 EC2 를 사용하면 더 복잡해지고 운영 오버헤드가 발생합니다. \n\n=== PAGE 250 ==="
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 227,
    "question": "회사는 AWS CloudTrail 로그를 3 년 동안 보관해야 합니다. 회사는 상위 계정의 AWS \nOrganizations 를 사용하여 AWS 계정 집합에 CloudTrail 을 적용하고 있습니다. CloudTrail \n대상 S3 버킷은 S3 버전 관리가 활성화된 상태로 구성됩니다. 3 년 후 현재 객체를 \n삭제하는 S3 수명 주기 정책이 있습니다. \nS3 버킷 사용 4 년차 이후 S3 버킷 지표는 개체 수가 계속 증가했음을 보여줍니다. 그러나 \nS3 버킷에 전달되는 새 CloudTrail 로그의 수는 일관되게 유지되었습니다. \n가장 비용 효율적인 방식으로 3 년 이상 된 개체를 삭제하는 솔루션은 무엇입니까?",
    "options": [
      "3 년 후에 개체가 만료되도록 조직의 중앙 집중식 CloudTrail 추적을 구성합니다.",
      "현재 버전뿐만 아니라 이전 버전도 삭제하도록 S3 수명 주기 정책을 구성합니다.",
      "Amazon S3 에서 3 년 이상 된 객체를 열거하고 삭제하는 AWS Lambda 함수를 \n생성합니다.",
      "상위 계정을 S3 버킷으로 전달되는 모든 객체의 소유자로 구성합니다. \nAnswer: B \nhttps://www.examtopics.com/discussions/amazon/view/95314-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명: \n이전 버전과 현재 버전을 삭제하도록 S3 수명 주기 정책을 구성하면 이전 버전의 \nCloudTrail 로그가 삭제됩니다. 이렇게 하면 3 년 이상 된 객체가 S3 버킷에서 제거되어 \n객체 수를 줄이고 스토리지 비용을 제어할 수 있습니다.",
      "이 옵션은 S3 의 개체 관리와 직접적인 관련이 없습니다. S3 버킷에서 객체를 삭제해야 \n하는 필요성을 해결하지 못할 수 있는 CloudTrail 추적 만료 구성에 중점을 둡니다.",
      "Lambda 를 생성하여 3 년 이상 된 객체를 삭제하는 것은 기술적으로 가능하지만 이 접근 \n방식은 복잡성과 운영 오버헤드를 추가로 도입합니다.",
      "S3 버킷에 있는 객체의 소유권을 변경해도 3 년 이상 된 객체를 삭제해야 하는 필요성이 \n직접적으로 해결되지는 않습니다. 소유권은 개체의 삭제 동작에 영향을 주지 않습니다. \n \n참고: \nhttps://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/best-practices-securi\nty.html \n\n=== PAGE 251 ==="
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 228,
    "question": "회사에는 여러 모니터링 장치에서 실시간 데이터를 수신하는 API 가 있습니다. API 는 나중에 \n분석할 수 있도록 이 데이터를 Amazon RDS DB 인스턴스에 저장합니다. 모니터링 장치가 \nAPI 로 보내는 데이터의 양은 변동합니다. 트래픽이 많은 기간 동안 API 는 종종 시간 초과 \n오류를 반환합니다. \n로그를 검사한 후 회사는 데이터베이스가 API 에서 오는 쓰기 트래픽 볼륨을 처리할 수 \n없음을 확인합니다. 솔루션 설계자는 데이터베이스에 대한 연결 수를 최소화하고 트래픽이 \n많은 기간 동안 데이터가 손실되지 않도록 해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "사용 가능한 메모리가 더 많은 인스턴스 유형으로 DB 인스턴스의 크기를 늘리십시오.",
      "DB 인스턴스를 다중 AZ DB 인스턴스로 수정합니다. 모든 활성 RDS DB 인스턴스에 \n쓰도록 애플리케이션을 구성합니다.",
      "수신 데이터를 Amazon Simple Queue Service(Amazon SQS) 대기열에 쓰도록 API 를 \n수정합니다. Amazon SQS\n가 호출하는 AWS Lambda 함수를 사용하여 대기열에서 \n데이터베이스로 데이터를 씁니다.",
      "수신 데이터를 Amazon Simple Notification Service(Amazon SNS) 주제에 쓰도록 API 를 \n수정합니다. Amazon SNS\n가 호출하는 AWS Lambda 함수를 사용하여 주제에서 \n데이터베이스로 데이터를 씁니다. \nAnswer: C  \nhttps://www.examtopics.com/discussions/amazon/view/95318-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nAmazon SQS 를 사용하면 API 가 데이터를 데이터베이스에 직접 쓰지 않고 대기열에 쓰기 \n때문에 데이터베이스에 대한 연결 수를 최소화하는 데 도움이 됩니다. 또한 대기열에서 \n데이터베이스로 데이터를 쓰기 위해 Amazon SQS 가 호출하는 AWS Lambda 함수를 \n사용하면 대기열이 API 와 데이터베이스 사이에서 버퍼 역할을 하므로 트래픽이 많은 기간 \n동안 데이터가 손실되지 않도록 하는 데 도움이 됩니다. \n \n설명2: \nSQS 를 버퍼로 활용하고 Lambda 를 사용하여 큐에서 데이터베이스로 데이터를 처리하고 \n기록함으로써 이 솔루션은 데이터베이스에 대한 연결 수를 최소화하면서 확장성, 분리 및 \n안정성을 제공합니다. 이 접근 방식은 트래픽 변동을 처리하고 트래픽이 많은 기간 동안 \n데이터 무결성을 보장합니다. \n\n=== PAGE 252 ===",
      "DB 인스턴스의 크기를 늘리면 더 많은 메모리를 제공할 수 있지만 높은 쓰기 트래픽을 \n효율적으로 처리하고 데이터베이스에 대한 연결을 최소화하는 문제는 해결되지 않습니다.",
      "DB 인스턴스를 다중 AZ 인스턴스로 수정하고 모든 활성 인스턴스에 쓰면 가용성이 \n향상될 수 있지만 높은 쓰기 트래픽을 효율적으로 처리하고 데이터베이스에 대한 연결을 \n최소화하는 문제는 해결되지 않습니다.",
      "SNS 와 Lambda 를 사용하면 디커플링과 확장성을 제공할 수 있지만 많은 쓰기 트래픽을 \n효율적으로 처리하고 데이터베이스에 대한 연결을 최소화하는 데 적합하지 않습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 229,
    "question": "회사는 MySQL 데이터베이스를 실행하는 자체 Amazon EC2 인스턴스를 관리합니다. 회사는 \n수요가 증가하거나 감소함에 따라 복제 및 확장을 수동으로 관리하고 있습니다. 회사는 \n필요에 따라 데이터베이스 계층에서 컴퓨팅 용량을 추가하거나 제거하는 프로세스를 \n간소화하는 새로운 솔루션이 필요합니다. 또한 솔루션은 최소한의 운영 노력으로 향상된 \n성능, 확장성 및 내구성을 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "데이터베이스를 Aurora MySQL 용 Amazon Aurora Serverless 로 마이그레이션합니다.",
      "데이터베이스를 Aurora PostgreSQL용 Amazon Aurora Serverless로 마이그레이션합니다.",
      "데이터베이스를 하나의 더 큰 MySQL 데이터베이스로 결합합니다. 더 큰 EC2 \n인스턴스에서 더 큰 데이터베이스를 실행합니다.",
      "데이터베이스 계층에 대한 EC2 Auto Scaling 그룹을 생성합니다. 기존 데이터베이스를 \n새 환경으로 마이그레이션합니다. \nAnswer: A  \nhttps://www.examtopics.com/discussions/amazon/view/95319-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명: \n데이터베이스를 Aurora Serverless\n로 마이그레이션하면 자동 조정 및 복제 기능이 \n제공됩니다. Aurora Serverless 는 워크로드에 따라 자동으로 용량을 조정하므로 필요에 따라 \n컴퓨팅 용량을 원활하게 추가하거나 제거할 수 있습니다. 또한 복제 및 확장을 수동으로 \n관리할 필요 없이 향상된 성능, 내구성 및 고가용성을 제공합니다.",
      "호환성 문제가 발생할 수 있고 중요한 코드 수정이 필요할 수 있는 다른 데이터베이스 \n엔진으로의 마이그레이션을 제안하기 때문에 올바르지 않습니다.",
      "더 큰 EC2 인스턴스에서 더 큰 MySQL 데이터베이스로 통합하면 원하는 확장성과 \n\n=== PAGE 253 ===\n자동화가 제공되지 않기 때문에 올바르지 않습니다.",
      "데이터베이스 계층에 대해 EC2 Auto Scaling 그룹을 사용하려면 여전히 복제 및 조정을 \n수동으로 관리해야 하기 때문에 올바르지 않습니다. \n \n참고: \nhttps://aws.amazon.com/rds/aurora/serverless/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 230,
    "question": "회사는 사용 중인 두 개의 NAT 인스턴스가 더 이상 회사 애플리케이션에 필요한 트래픽을 \n지원할 수 없을 것이라고 우려합니다. 솔루션 설계자는 가용성이 높고 내결함성이 있으며 \n자동으로 확장 가능한 솔루션을 구현하려고 합니다. \n솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": [
      "2 개의 NAT 인스턴스를 제거하고 동일한 가용 영역에 있는 2 개의 NAT 게이트웨이로 \n교체합니다.",
      "다른 가용 영역의 NAT 인스턴스에 대해 Network Load Balancer 와 함께 Auto Scaling \n그룹을 사용합니다.",
      "2 개의 NAT 인스턴스를 제거하고 서로 다른 가용 영역에 있는 2 개의 NAT 게이트웨이로 \n교체합니다.",
      "두 개의 NAT 인스턴스를 서로 다른 가용 영역의 스팟 인스턴스로 교체하고 Network \nLoad Balancer 를 배포합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95322-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n여러 가용 영역에 리소스가 있고 하나의 NAT 게이트웨이를 공유하는 경우 NAT \n게이트웨이의 가용 영역이 다운되면 다른 가용 영역의 리소스가 인터넷에 액세스할 수 없게 \n됩니다. 가용 영역 독립적 아키텍처를 생성하려면 각 가용 영역에 NAT 게이트웨이를 \n생성하고 리소스가 동일한 가용 영역에서 NAT 게이트웨이를 사용하도록 라우팅을 \n구성합니다. \n\ndocs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway\n-basics \n \n2: \n이 권장 사항은 NAT 게이트웨이를 여러 AZ 에 분산하여 고가용성과 내결함성을 보장합니다.",
    "glossary": {}
  },
  {
    "id": 231,
    "question": "애플리케이션은 VPC A 에 탄력적 IP 주소가 있는 Amazon EC2 인스턴스에서 실행됩니다. \n애플리케이션은 VPC B 의 데이터베이스에 액세스해야 합니다. 두 VPC 모두 동일한 AWS \n계정에 있습니다. \n필요한 액세스를 가장 안전하게 제공하는 솔루션은 무엇입니까?",
    "options": [
      "VPC A 에 있는 애플리케이션 서버의 퍼블릭 IP 주소에서 오는 모든 트래픽을 허용하는 \nDB 인스턴스 보안 그룹을 생성합니다.",
      "VPC A 와 VPC B 사이에 VPC 피어링 연결을 구성합니다.",
      "DB 인스턴스를 공개적으로 액세스할 수 있도록 합니다. 퍼블릭 IP 주소를 DB \n인스턴스에 할당합니다.",
      "탄력적 IP 주소가 있는 EC2 인스턴스를 VPC B 로 시작합니다. 새 EC2 인스턴스를 통해 \n모든 요청을 프록시합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/95323-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nVPC 피어링 연결은 사용자가 프라이빗 IP 주소를 사용하여 트래픽을 라우팅할 수 있도록 \n하는 두 VPC 간의 네트워킹 연결입니다. 각 VPC 의 인스턴스는 마치 동일한 네트워크 내에 \n있는 것처럼 서로 통신할 수 있습니다. VPC 피어링 연결은 같거나 다른 AWS 계정과 \nRegions1 의 VPC 간에 생성할 수 있습니다. 솔루션은 VPC A 와 VPC B 간에 VPC 피어링 \n연결을 구성하여 필요한 액세스를 가장 안전하게 제공할 수 있습니다. \n1. VPC A 에 있는 애플리케이션 서버의 퍼블릭 IP 주소에서 오는 모든 트래픽을 허용하는",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 232,
    "question": "회사는 Amazon EC2 인스턴스에서 고객을 위한 데모 환경을 실행합니다. 각 환경은 자체 \nVPC 에서 격리됩니다. 환경에 대한 RDP 또는 SSH 액세스가 설정되면 회사의 운영 팀에 \n알려야 합니다.",
    "options": [
      "RDP 또는 SSH 액세스가 감지되면 AWS Systems Manager OpsItems 를 생성하도록 \nAmazon CloudWatch Application Insights 를 구성합니다.",
      "AmazonSSMManagedInstanceCore 정책이 연결된 IAM 역할이 있는 IAM 인스턴스 \n프로필로 EC2 인스턴스를 구성합니다.",
      "Amazon CloudWatch Logs 에 VPC 흐름 로그를 게시합니다. 필요한 메트릭 필터를 \n만듭니다. 경보가 ALARM 상태일 때 알림 작업이 포함된 Amazon CloudWatch 지표 경보를 \n생성합니다. \n\n=== PAGE 256 ===",
      "EC2 인스턴스 상태 변경 알림 유형의 이벤트를 수신하도록 Amazon EventBridge 규칙을 \n구성합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 대상으로 구성합니다. \n주제에 대한 운영 팀을 구독하십시오."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95324-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nCloudWatch Logs 에 VPC 흐름 로그를 게시하고 RDP 또는 SSH 액세스를 감지하는 지표 \n필터를 생성함으로써 운영 팀은 경보가 트리거될 때 이를 알리도록 CloudWatch 지표 \n경보를 구성할 수 있습니다. 이렇게 하면 환경에 대한 RDP 또는 SSH 액세스가 설정될 때 \n원하는 알림이 제공됩니다. \n \nCloudWatch Application Insights 는 RDP 또는 SSH 액세스를 감지하도록 설계되지 않았기 \n때문에 옵션 A 는 올바르지 않습니다. \n \n옵션 B 도 올바르지 않습니다. AmazonSSMManagedInstanceCore 정책으로 IAM 인스턴스 \n프로필을 구성하면 RDP 또는 SSH 액세스가 발생할 때 운영 팀에 알려야 하는 요구 \n사항이 직접 해결되지 않기 때문입니다. \n \nEC2 인스턴스 상태 변경 알림 이벤트를 수신하도록 EventBridge 규칙을 구성하고 SNS \n주제를 대상으로 사용하면 운영 팀에 인스턴스 시작 또는 중지와 같은 인스턴스 상태 변경 \n사항을 알릴 수 있으므로 옵션 D 는 잘못된 것입니다. 그러나 질문에 명시된 요구 사항인 \nRDP 또는 SSH 액세스가 설정된 시기를 구체적으로 감지하거나 알리지는 않습니다. \n \n참고: \n\naws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-acce\nss-attemptsto-amazon-ec2-linux-instances/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 233,
    "question": "솔루션 설계자가 새 AWS 계정을 생성했으며 AWS 계정 루트 사용자 액세스를 보호해야 \n합니다. \n어떤 작업 조합이 이를 달성합니까? (2 개 선택)",
    "options": [
      "루트 사용자가 강력한 암호를 사용하는지 확인하십시오.",
      "루트 사용자에 대한 다단계 인증을 활성화합니다. \n\n=== PAGE 257 ===",
      "암호화된 Amazon S3 버킷에 루트 사용자 액세스 키를 저장합니다.",
      "관리 권한이 포함된 그룹에 루트 사용자를 추가합니다.",
      "인라인 정책 문서를 사용하여 루트 사용자에게 필요한 권한을 적용합니다. \nAnswer: A, B  \nhttps://www.examtopics.com/discussions/amazon/view/95084-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "루트 사용자에 대해 강력한 암호를 설정하는 것은 무단 액세스를 방지하기 위한 필수 \n보안 조치입니다.",
      "MFA 를 활성화하면 암호 외에 모바일 앱의 코드 또는 하드웨어 토큰과 같은 추가 인증 \n요소를 요구하여 추가 보안 계층을 추가합니다.",
      "루트 사용자 액세스 키는 가능하면 피해야 하며 대신 권한이 제한된 IAM 사용자를 \n사용하는 것이 가장 좋습니다.",
      "루트 사용자는 이미 계정의 모든 리소스 및 서비스에 대한 무제한 액세스 권한을 \n가지고 있으므로 추가 관리 권한을 부여하면 무단 작업의 위험이 높아질 수 있습니다.",
      "대신 적절한 권한을 가진 IAM 사용자를 생성하고 해당 사용자를 일상적인 작업에 \n사용하는 동시에 루트 사용자를 보호하고 필요한 관리 작업에만 사용하는 것이 좋습니다. \n \n설명2: \nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html \nhttps://docs.aws.amazon.com/accounts/latest/reference/best-practices-root-user.html \n* AWS 계정 루트 사용자에서 AWS Multi-Factor Authentication(MFA)을 활성화합니다. \n자세한 내용은 IAM 사용 설명서의 AWS 에서 멀티 팩터 인증(MFA) 사용을 참조하십시오. \n* AWS 계정 루트 사용자 암호 또는 액세스 키를 누구와도 공유하지 마십시오. \n* 강력한 암호를 사용하여 AWS Management Console 에 대한 액세스를 보호하십시오. AWS \n계정 루트 사용자 암호 관리에 대한 자세한 내용은 루트 사용자 암호 변경 단원을 \n참조하십시오."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 234,
    "question": "회사에서 \n새로운 \n웹 \n기반 \n고객 \n관계 \n관리 \n애플리케이션을 \n구축하고 \n있습니다. \n애플리케이션은 Application Load Balancer(ALB) 뒤에 있는 Amazon Elastic Block \nStore(Amazon EBS) 볼륨이 지원하는 여러 Amazon EC2 인스턴스를 사용합니다. 이 \n애플리케이션은 Amazon Aurora 데이터베이스도 사용합니다. 애플리케이션의 모든 데이터는 \n유휴 및 전송 중에 암호화되어야 합니다. \n\n=== PAGE 258 ===\n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "ALB 에서 AWS Key Management Service(AWS KMS) 인증서를 사용하여 전송 중인 \n데이터를 암호화합니다. AWS Certificate Manager(ACM)를 사용하여 유휴 상태의 EBS 볼륨 \n및 Aurora 데이터베이스 스토리지를 암호화합니다.",
      "AWS 루트 계정을 사용하여 AWS Management Console 에 로그인합니다. 회사의 암호화 \n인증서를 업로드합니다. 루트 계정에 있는 동안 계정의 저장 및 전송 중인 모든 데이터에 \n대해 암호화를 켜는 옵션을 선택합니다.",
      "AWS Key Management Service(AWS KMS)를 사용하여 유휴 상태의 EBS 볼륨 및 Aurora \n데이터베이스 스토리지를 암호화합니다. ALB 에 AWS Certificate Manager(ACM) 인증서를 \n연결하여 전송 중인 데이터를 암호화합니다.",
      "BitLocker 를 사용하여 유휴 상태의 모든 데이터를 암호화합니다. 회사의 TLS 인증서 \n키를 AWS Key Management Service(AWS KMS)로 가져옵니다. KMS 키를 ALB 에 연결하여 \n전송 중인 데이터를 암호화합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95325-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 AWS Key Management Service(AWS KMS)를 사용하기 때문에 가장 효율적입니다. \n이 서비스는 암호화 키를 쉽게 생성 및 관리하고 다양한 AWS 서비스와 실행 중인 \n애플리케이션에서 키 사용을 제어할 수 있게 해줍니다. AWS 에서. 또한 AWS KMS 를 \n사용하여 EBS 볼륨과 유휴 Aurora 데이터베이스 스토리지를 암호화하여 관리하는 암호화 \n키로 데이터를 암호화하여 데이터 보호를 제공합니다. 또한 AWS 서비스 및 내부 연결 \n리소스와 함께 사용할 공용 및 개인 SSL/TLS(Secure Sockets Layer/Transport Layer \nSecurity) 인증서를 쉽게 프로비저닝, 관리 및 배포할 수 있는 서비스인 AWS Certificate \nManager(ACM)를 사용합니다. . 또한 ACM 인증서를 ALB 에 연결하여 전송 중인 데이터를 \n암호화합니다. 이는 클라이언트와 로드 밸런서 간의 연결에 SSL/TLS 암호화를 활성화하여 \n데이터 보호를 제공합니다. 이 솔루션은 미사용 및 전송 중인 애플리케이션의 모든 \n데이터를 암호화해야 한다는 요구 사항을 충족합니다. \n \n옵션 A 는 ALB 에서 AWS KMS 인증서를 사용하여 전송 중인 데이터를 암호화하기 때문에 \n효율성이 떨어집니다. 이는 AWS KMS 가 인증서를 제공하지 않고 키만 제공하기 때문에 \n불가능합니다. 또한 AWS Certificate Manager(ACM)를 사용하여 유휴 EBS 볼륨 및 Aurora \n데이터베이스 스토리지를 암호화합니다. 이는 ACM 이 암호화를 제공하지 않고 인증서만 \n제공하기 때문에 불가능합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 235,
    "question": "회사에서 온프레미스 Oracle 데이터베이스를 Amazon Aurora PostgreSQL 로 이전하고 \n\n=== PAGE 260 ===\n있습니다. 데이터베이스에는 동일한 테이블에 쓰는 여러 응용 프로그램이 있습니다. 응용 \n프로그램은 각 마이그레이션 사이에 한 달씩 하나씩 마이그레이션해야 합니다. 경영진은 \n데이터베이스에 많은 수의 읽기 및 쓰기가 있다는 우려를 표명했습니다. 데이터는 \n마이그레이션하는 동안 두 데이터베이스에서 동기화 상태를 유지해야 합니다. \n솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": [
      "초기 마이그레이션에는 AWS DataSync 를 사용하십시오. AWS Database Migration \nService(AWS DMS)를 사용하여 변경 데이터 캡처(CDC) 복제 작업 및 테이블 매핑을 \n생성하여 모든 테이블을 선택합니다.",
      "초기 마이그레이션에 AWS DataSync\n를 사용합니다. AWS Database Migration \nService(AWS DMS)를 사용하여 전체 로드 및 변경 데이터 캡처(CDC) 복제 작업과 테이블 \n매핑을 생성하여 모든 테이블을 선택합니다.",
      "메모리 최적화 복제 인스턴스를 사용하여 AWS DMS(AWS Database Migration Service)와 \n함께 AWS Schema Conversion Tool 을 사용합니다. 전체 로드 및 CDC(변경 데이터 캡처) \n복제 작업과 테이블 매핑을 생성하여 모든 테이블을 선택합니다.",
      "컴퓨팅 최적화 복제 인스턴스를 사용하여 AWS DMS(AWS Database Migration Service)와 \n함께 AWS Schema Conversion Tool 을 사용합니다. 전체 로드 및 변경 데이터 캡처(CDC) \n복제 작업과 테이블 매핑을 생성하여 가장 큰 테이블을 선택합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95326-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAWS SCT 는 Oracle 데이터베이스의 스키마와 코드를 Aurora PostgreSQL 과 호환되도록 \n변환하는 데 사용됩니다. AWS DMS 는 Oracle 데이터베이스에서 Aurora PostgreSQL 로 \n데이터를 마이그레이션하는 데 활용됩니다. 마이그레이션 프로세스 중에 많은 수의 읽기 및 \n쓰기를 처리하려면 메모리 최적화 복제 인스턴스를 사용하는 것이 좋습니다. \n전체 로드 및 CDC 복제 작업을 생성하면 초기 데이터 마이그레이션이 수행되고 Oracle \n데이터베이스의 진행 중인 변경 사항이 지속적으로 캡처되어 Aurora PostgreSQL \n데이터베이스에 적용됩니다. 테이블 매핑을 위해 모든 테이블을 선택하면 동일한 테이블에 \n쓰는 모든 응용 프로그램이 마이그레이션됩니다. \n \nAWS DataSync 를 단독으로 사용하는 것은 데이터베이스 마이그레이션 및 데이터 동기화에 \n충분하지 않기 때문에 옵션 A 및 B 는 올바르지 않습니다. \n \n계산에 최적화된 복제 인스턴스를 사용하는 것이 많은 수의 읽기 및 쓰기를 처리하는 데 \n가장 적합한 선택이 아니기 때문에 옵션 D 는 올바르지 않습니다.",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스"
    }
  },
  {
    "id": 236,
    "question": "회사에 이미지 공유를 위한 3 계층 애플리케이션이 있습니다. 이 애플리케이션은 프런트 \n엔드 계층에 Amazon EC2 인스턴스를 사용하고, 애플리케이션 계층에 또 다른 EC2 \n인스턴스를 사용하고, MySQL 데이터베이스에 세 번째 EC2 인스턴스를 사용합니다. 솔루션 \n설계자는 응용 프로그램에 최소한의 변경만 필요한 확장 가능하고 가용성이 높은 솔루션을 \n설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon S3 를 사용하여 프런트 엔드 계층을 호스팅하십시오. 애플리케이션 계층에 AWS \nLambda 함수를 사용합니다. 데이터베이스를 Amazon DynamoDB 테이블로 이동합니다. \nAmazon S3 를 사용하여 사용자 이미지를 저장하고 제공합니다.",
      "프런트엔드 계층과 애플리케이션 계층에 로드 밸런싱된 다중 AZ AWS Elastic Beanstalk \n환경을 사용합니다. 데이터베이스를 여러 읽기 전용 복제본이 있는 Amazon RDS DB \n인스턴스로 이동하여 사용자 이미지를 제공합니다.",
      "Amazon S3 를 사용하여 프런트 엔드 계층을 호스팅합니다. 애플리케이션 계층에 대한 \nAuto Scaling 그룹의 EC2 인스턴스 플릿을 사용합니다. 데이터베이스를 메모리 최적화 \n인스턴스 유형으로 이동하여 사용자 이미지를 저장하고 제공합니다.",
      "프런트엔드 계층과 애플리케이션 계층에 로드 밸런싱된 다중 AZ AWS Elastic Beanstalk \n환경을 사용합니다. 데이터베이스를 Amazon RDS 다중 AZ DB 인스턴스로 이동합니다. \nAmazon S3 를 사용하여 사용자 이미지를 저장하고 제공합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/94990-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n로드 밸런싱된 다중 AZ AWS EBS 를 사용하면 애플리케이션을 크게 변경하지 않고도 두 \n계층 모두에 대한 확장성과 고가용성을 얻을 수 있습니다. DB 를 RDS 다중 AZ DB 로 \n이동하면 고가용성과 자동 장애 조치가 보장됩니다. S3 를 통해 사용자 이미지를 저장하고 \n제공하면 확장 가능하고 가용성이 높은 솔루션을 제공합니다. \n \n프런트 엔드 계층에 S3\n를 사용하고 애플리케이션 계층에 Lambda\n를 사용하려면 \n애플리케이션 아키텍처를 크게 변경해야 하므로 A 는 정답이 아닙니다. DB 를 DynamoDB 로",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 237,
    "question": "VPC-A 의 Amazon EC2 인스턴스에서 실행 중인 애플리케이션은 VPC-B 의 다른 EC2 \n인스턴스에 있는 파일에 액세스해야 합니다. 두 VPC 모두 별도의 AWS 계정에 있습니다. \n네트워크 관리자는 VPC-A 에서 VPC-B 의 EC2 인스턴스에 대한 보안 액세스를 구성하는 \n솔루션을 설계해야 합니다. 연결에는 단일 장애 지점이나 대역폭 문제가 없어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "VPC-A 와 VPC-B 간에 VPC 피어링 연결을 설정합니다.",
      "VPC-B 에서 실행되는 EC2 인스턴스에 대한 VPC 게이트웨이 엔드포인트를 설정합니다.",
      "가상 프라이빗 게이트웨이를 VPC-B 에 연결하고 VPC-A 에서 라우팅을 설정합니다.",
      "VPC-B 에서 실행 중인 EC2 인스턴스에 대한 프라이빗 가상 인터페이스(VIF)를 생성하고 \nVPC-A 에서 적절한 경로를 추가합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95144-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nVPC 피어링 연결을 사용하면 인터넷 게이트웨이, VPN 연결 또는 NAT 장치 없이 프라이빗 \nIP 주소를 사용하여 서로 다른 VPC 의 인스턴스 간에 안전한 통신이 가능합니다. 이를 \n설정하면 VPC-A 에서 실행 중인 애플리케이션이 공용 인터넷이나 단일 장애 지점을 거치지 \n않고 VPC-B 의 EC2 에 직접 액세스할 수 있습니다. \n \nB 는 VPC 게이트웨이 엔드포인트가 인터넷을 통하지 않고 VPC 에서 S3 또는 DynamoDB 에 \n액세스하는 데 사용되기 때문에 올바르지 않습니다. 서로 다른 VPC 에 있는 EC2 인스턴스 \n간에 연결을 설정하도록 설계되지 않았습니다. \n \nC 는 VPC 간에 VPN 연결을 구성해야 하므로 올바르지 않습니다. 이로 인해 추가적인 \n복잡성과 잠재적인 단일 실패 지점이 발생합니다. \n \nD 는 프라이빗 VIF 를 생성하고 경로를 추가하면 Direct Connect 를 사용하여 온프레미스 \n인프라와 VPC-B 간에 직접 연결을 설정하는 데 적용할 수 있기 때문에 올바르지 않지만 \n서로 다른 VPC 내의 별도 VPC 에 있는 EC2 인스턴스 간의 통신 시나리오에는 적합하지 \n않습니다. AWS 계정. \n \n2: \nAWS 는 VPC 의 기존 인프라를 사용하여 VPC 피어링 연결을 생성합니다. 게이트웨이나 \nVPN 연결이 아니며 별도의 물리적 하드웨어에 의존하지 않습니다. 통신 또는 대역폭 병목 \n현상에 대한 단일 장애 지점이 없습니다. \n\ndocs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술"
    }
  },
  {
    "id": 238,
    "question": "회사에서 엔지니어 팀을 위해 개별 AWS 계정을 실험하려고 합니다. 회사는 지정된 달의 \nAmazon EC2 인스턴스 사용량이 각 계정의 특정 임계값을 초과하는 즉시 알림을 받기를 \n원합니다. \n이 요구 사항을 가장 비용 효율적으로 충족하기 위해 솔루션 설계자는 무엇을 해야 \n합니까?",
    "options": [
      "Cost Explorer 를 사용하여 서비스별 비용에 대한 일일 보고서를 생성합니다. EC2 \n인스턴스별로 \n보고서를 \n필터링합니다. \n임계값을 \n초과하면 \nAmazon \nSimple \nEmail \n\n=== PAGE 264 ===\nService(Amazon SES) 알림을 보내도록 Cost Explorer 를 구성합니다.",
      "Cost Explorer 를 사용하여 서비스별 월별 비용 보고서를 생성합니다. EC2 인스턴스별로 \n보고서를 필터링합니다. 임계값을 초과하면 Amazon Simple Email Service(Amazon SES) \n알림을 보내도록 Cost Explorer 를 구성합니다.",
      "AWS 예산을 사용하여 각 계정에 대한 비용 예산을 생성합니다. 기간을 매월로 \n설정합니다. 범위를 EC2 인스턴스로 설정합니다. 예산에 대한 경고 임계값을 설정합니다. \n임계값 초과 시 알림을 받도록 Amazon Simple Notification Service(Amazon SNS) 주제를 \n구성합니다.",
      "AWS 비용 및 사용 보고서를 사용하여 시간 단위로 보고서를 생성합니다. 보고서 \n데이터를 Amazon Athena 와 통합합니다. Amazon EventBridge 를 사용하여 Athena 쿼리를 \n예약합니다. 임계값 초과 시 알림을 받도록 Amazon Simple Notification Service(Amazon \nSNS) 주제를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/94996-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n각 계정에 대한 비용 예산을 생성하고 기간을 월 단위로 지정하고 범위를 EC2 로 지정하면 \nEC2 와 관련된 비용을 구체적으로 추적하고 모니터링할 수 있습니다. 예산에 경고 임계값을 \n설정하면 지정된 임계값이 초과될 때 알림이 트리거됩니다. 알림을 받도록 SNS\n를 \n구성합니다. 회사에서 구독하면 즉시 알림을 받을 수 있습니다. \n \nA 와 B 는 Cost Explorer 를 사용하여 임계값을 초과할 때 실시간 알림을 제공하지 않을 수 \n있는 보고서를 생성하기 때문에 가장 비용 효율적인 솔루션이 아닙니다. 또한 A.는 일일 \n보고서 사용을 제안하고 B.는 월별 보고서 사용을 제안합니다. 이는 즉각적인 알림에 대해 \n원하는 수준의 세분성을 제공하지 않을 수 있습니다. \n \nD 는 Athena 및 EventBridge 와 함께 비용 및 사용 보고서를 사용하는 것과 관련됩니다. 이 \n솔루션은 더 많은 유연성과 데이터 분석 기능을 제공하며 더 복잡하고 Athena 를 사용하고 \n시간별 보고서를 생성하는 데 추가 비용이 발생할 수 있습니다. \n \n2: \nAWS 예산을 사용하면 AWS 계정에 대한 예산을 생성하고 사용량이 특정 임계값을 초과할 \n때 알림을 설정할 수 있습니다. 각 계정에 대한 예산을 생성하고 기간을 월 단위로 \n지정하고 범위를 EC2 인스턴스로 지정하면 각 계정의 EC2 사용량을 효과적으로 추적하고 \n임계값을 초과할 때 알림을 받을 수 있습니다. 이 솔루션은 Amazon Athena 또는 Amazon",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구"
    }
  },
  {
    "id": 239,
    "question": "솔루션 설계자는 회사의 애플리케이션을 위한 새로운 마이크로서비스를 설계해야 합니다. \n클라이언트는 마이크로 서비스에 도달하기 위해 HTTPS 끝점을 호출할 수 있어야 합니다. \n또한 마이크로서비스는 AWS Identity and Access Management(IAM)를 사용하여 호출을 \n인증해야 합니다. 솔루션 설계자는 Go 1.x 로 작성된 단일 AWS Lambda 함수를 사용하여 \n이 마이크로서비스에 대한 논리를 작성합니다. \n어떤 솔루션이 운영상 가장 효율적인 방식으로 기능을 배포합니까?",
    "options": [
      "Amazon API Gateway REST API 를 생성합니다. Lambda 함수를 사용하도록 메서드를 \n구성합니다. API 에서 IAM 인증을 활성화합니다.",
      "함수에 대한 Lambda 함수 URL 을 생성합니다. 인증 유형으로 AWS_IAM 을 지정합니다.",
      "Amazon CloudFront 배포를 생성합니다. 함수를 Lambda@Edge 에 배포합니다. IAM 인증 \n로직을 Lambda@Edge 함수에 통합합니다.",
      "Amazon CloudFront 배포를 생성합니다. CloudFront Functions 에 함수를 배포합니다. \n인증 유형으로 AWS_IAM 을 지정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95365-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n \nAPI Gateway REST API 를 생성하면 클라이언트가 마이크로서비스에 도달하기 위해 호출할 \n수 있는 HTTPS 엔드포인트를 정의할 수 있습니다. API 에서 IAM 인증을 활성화하여 API \n호출에 대한 인증을 적용합니다. 이렇게 하면 인증된 요청만 마이크로서비스에 도달할 수 \n있습니다. 이 솔루션은 API 게이트웨이의 기본 제공 기능을 활용하여 HTTP 엔드포인트, \n요청 라우팅 및 IAM 인증을 처리하므로 운영상 효율적입니다. 추가 인프라 구성 요소 없이 \n확장 가능하고 관리되는 솔루션을 제공합니다. \n \nB 는 Lambda URL 을 생성하고 인증 유형으로 AWS IAM 을 지정할 것을 제안합니다. 이것은 \nIAM 인증을 제공할 수 있지만 요청 유효성 검사, 속도 제한 및 API 구성의 손쉬운 관리와 \n같은 API Gateway 의 이점이 없습니다. \n \nC 와 D 에는 CloudFront, Lambda@Edge 및 CloudFront 함수 사용이 포함됩니다. 이러한 \n서비스는 유연성과 에지 위치에서 논리를 실행할 수 있는 기능을 제공하지만 추가적인",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 240,
    "question": "한 회사가 이전에 데이터 웨어하우스 솔루션을 AWS 로 마이그레이션했습니다. 회사에는 \nAWS Direct Connect 연결도 있습니다. 본사 사용자는 시각화 도구를 사용하여 데이터 \n웨어하우스를 쿼리합니다. 데이터 웨어하우스에서 반환한 쿼리의 평균 크기는 50MB 이고 \n시각화 도구에서 보낸 각 웹 페이지는 약 500KB 입니다. 데이터 웨어하우스에서 반환된 \n결과 집합은 캐시되지 않습니다. \n회사에 가장 낮은 데이터 전송 송신 비용을 제공하는 솔루션은 무엇입니까?",
    "options": [
      "온프레미스에서 시각화 도구를 호스팅하고 인터넷을 통해 직접 데이터 웨어하우스를 \n쿼리합니다.",
      "데이터 웨어하우스와 동일한 AWS 리전에서 시각화 도구를 호스팅합니다. 인터넷을 통해 \n액세스하십시오.",
      "온프레미스에서 시각화 도구를 호스팅하고 동일한 AWS 리전의 위치에서 Direct \nConnect 연결을 통해 직접 데이터 웨어하우스를 쿼리합니다.",
      "데이터 웨어하우스와 동일한 AWS 리전에서 시각화 도구를 호스팅하고 동일한 리전의 \n위치에서 Direct Connect 연결을 통해 액세스합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/94998-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명: \n데이터 웨어하우스와 동일한 AWS 리전에서 시각화 도구를 호스팅하고 동일한 리전 내에서 \nDirect Connect 연결을 통해 액세스하면 데이터 전송 비용이 없어지고 지연 시간이 짧은 \n고대역폭 연결이 보장됩니다.",
      "온프레미스에서 시각화 도구를 호스팅하고 인터넷을 통해 데이터 웨어하우스를 쿼리하면 \n모든 쿼리 결과에 대한 데이터 전송 비용과 잠재적 대기 시간 및 대역폭 제한이 \n발생합니다.",
      "데이터 웨어하우스와 동일한 AWS 리전에서 시각화 도구를 호스팅하지만 인터넷을 통해 \n액세스하면 여전히 각 쿼리 결과에 대한 데이터 전송 비용이 발생합니다.",
      "온프레미스에서 시각화 도구를 호스팅하고 동일한 AWS 리전 내에서 Direct Connect \n연결을 통해 데이터 웨어하우스를 쿼리하면 모든 쿼리 결과에 대한 데이터 전송 비용이 \n\n=== PAGE 267 ===\n발생하고 온프레미스 인프라가 필요하여 복잡성이 추가됩니다. \n \n참고: \nhttps://aws.amazon.com/directconnect/pricing/ \nhttps://aws.amazon.com/blogs/aws/aws-data-transfer-prices-reduced/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술"
    }
  },
  {
    "id": 241,
    "question": "온라인 학습 회사가 AWS 클라우드로 마이그레이션하고 있습니다. 회사는 PostgreSQL \n데이터베이스에 학생 기록을 유지합니다. 회사는 여러 AWS 리전에서 데이터를 항상 \n온라인으로 사용할 수 있는 솔루션이 필요합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "PostgreSQL 데이터베이스를 Amazon EC2 인스턴스의 PostgreSQL 클러스터로 \n마이그레이션합니다.",
      "PostgreSQL 데이터베이스를 다중 AZ 기능이 켜진 PostgreSQL DB 인스턴스용 Amazon \nRDS 로 마이그레이션합니다.",
      "PostgreSQL \n데이터베이스를 \nAmazon \nRDS \nfor \nPostgreSQL \nDB \n인스턴스로 \n마이그레이션합니다. 다른 리전에서 읽기 전용 복제본을 생성합니다.",
      "PostgreSQL \n데이터베이스를 \nAmazon \nRDS \nfor \nPostgreSQL \nDB \n인스턴스로 \n마이그레이션합니다. 다른 리전에 복사할 DB 스냅샷을 설정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95000-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nPostgreSQL 데이터베이스를 PostgreSQL DB 유지용 RDS 로 늘리고 다른 AWS 리전에 \n읽기 전용 복제본을 생성하면 여러 리전에서 데이터 가용성과 온라인 액세스를 충분히 할 \n수 있습니다. 이 솔루션은 EC2 폐쇄에서 PostgreSQL 클러스터를 관리하거나(옵션 A) \n스냅샷을 사용하여 수동 복제를 설정하는 것(옵션 D)에 비해 연산된 헤드가 적입니다. 또한 \nAmazon RDS 는 기본 복원 및 복제 설정을 처리하여 회사의 운영 문제를 줄입니다. \n \nB 는 단일 AWS 리전 내에서 고가용성을 누릴 수 있습니다. 그러나 질문에 여러 개의 AWS \n리전에서 항상 데이터를 온라인으로 사용할 수 있어야만 요구 사항을 충족할 수 없습니다. \nRDS 의 다중 AZ 기능은 동일한 리전 내에서 자동으로 조치를 취하지만 데이터를 여러 \n리전으로 복제하지 않습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 242,
    "question": "회사는 7\n개의 Amazon EC2 인스턴스를 사용하여 AWS\n에서 웹 애플리케이션을 \n호스팅합니다. 회사는 DNS 쿼리에 대한 응답으로 모든 정상적인 EC2 인스턴스의 IP \n주소가 반환되도록 요구합니다. \n이 요구 사항을 충족하려면 어떤 정책을 사용해야 합니까?",
    "options": [
      "단순 라우팅 정책(Simple routing policy)",
      "레이턴시 라우팅 정책(Latency routing policy)",
      "다중값 라우팅 정책(Multivalue routing policy)",
      "지리적 위치 라우팅 정책(Geolocation routing policy)"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95001-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n다중 응답 라우팅 정책을 사용하여 여러 리소스에 DNS 응답을 배포할 수 있습니다. \n예를 들어 라우팅 레코드를 Route 53 상태 확인과 연결하려는 경우 다중값 응답 라우팅을 \n사용합니다. 예를 들어 DNS 쿼리에 대해 여러 값을 반환하고 트래픽을 여러 IP 주소로 \n라우팅해야 하는 경우 다중 값 응답 라우팅을 사용합니다. \n\naws.amazon.com/premiumsupport/knowledge-center/multivalue-versus-simple-p\nolicies/ \n \n2: \n다중값 라우팅 정책은 Route 53 이 동일한 리소스에 대한 여러 정상 IP 주소로 DNS 쿼리에 \n응답하도록 허용합니다. 이는 여러 인스턴스가 동일한 용도로 사용되며 부하 분산 또는 \n장애 조치가 가능한 시나리오에서 특히 유용합니다. 다중 값 라우팅 정책을 사용하면 \nRoute 53 은 여러 IP 주소를 무작위 순서로 반환하여 모든 정상 인스턴스에 트래픽을 \n분산합니다. \n \n옵션 A(단순 라우팅 정책)는 DNS 쿼리에 대한 응답으로 단일 IP 주소만 반환하며 여러",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 243,
    "question": "의학 연구실에서 새로운 연구와 관련된 데이터를 생성합니다. 연구소는 온프레미스 파일 \n기반 애플리케이션을 위해 전국의 클리닉에 최소한의 대기 시간으로 데이터를 제공하고자 \n합니다. 데이터 파일은 각 클리닉에 대한 읽기 전용 권한이 있는 Amazon S3 버킷에 \n저장됩니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "각 클리닉에서 온프레미스로 AWS Storage Gateway 파일 게이트웨이를 가상 \n머신(VM)으로 배포합니다.",
      "처리를 위해 AWS DataSync 를 사용하여 각 클리닉의 온프레미스 애플리케이션으로 \n파일을 마이그레이션합니다.",
      "각 클리닉에서 온프레미스로 AWS Storage Gateway 볼륨 게이트웨이를 가상 \n머신(VM)으로 배포합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템을 각 클리닉의 온프레미스 \n서버에 연결합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/95002-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nAWS Storage Gateway 는 온프레미스 소프트웨어 어플라이언스와 클라우드 기반 스토리지를 \n연결하여 조직의 온프레미스 IT 환경과 AWS 스토리지 인프라 간의 원활하고 안전한 \n통합을 제공하는 서비스입니다. 각 진료소 구내에 파일 게이트웨이를 가상 머신으로 \n\n=== PAGE 270 ===\n배포함으로써 의료 연구실은 각 진료소에 대한 읽기 전용 권한을 유지하면서 S3 버킷에 \n저장된 데이터에 대한 짧은 대기 시간 액세스를 제공할 수 있습니다. 이 솔루션을 통해 \n클리닉은 데이터 전송이나 마이그레이션 없이 온프레미스 파일 기반 애플리케이션에서 직접 \n데이터 파일에 액세스할 수 있습니다. \n \n설명2:",
      "클리닉에서 파일 인터페이스를 통해 S3 버킷에 저장된 데이터 파일에 액세스할 수 \n있습니다. 파일 게이트웨이는 자주 액세스하는 데이터를 로컬로 캐시하여 대기 시간을 \n줄이고 데이터에 대한 빠른 액세스를 제공합니다.",
      "AWS DataSync\n를 사용하여 Amazon S3 버킷에서 각 클리닉의 온프레미스 \n애플리케이션으로 데이터 파일을 전송하는 작업이 포함됩니다. 이렇게 하면 데이터 \n마이그레이션이 가능하지만 실시간 액세스를 제공하지 않을 수 있으며 추가 대기 시간이 \n발생할 수 있습니다.",
      "파일 수준의 접근보다는 데이터에 대한 블록 수준의 접근에 적합하다. 파일 기반 \n애플리케이션을 위한 가장 효율적인 솔루션이 아닐 수도 있습니다.",
      "확장 가능한 파일 스토리지 서비스인 Amazon EFS 를 사용하여 데이터에 대한 파일 \n수준 액세스를 제공합니다. 그러나 파일 게이트웨이 솔루션을 사용할 때보다 복잡성과 대기 \n시간이 추가로 발생할 수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 244,
    "question": "회사에서 단일 Amazon EC2 인스턴스에서 실행되는 콘텐츠 관리 시스템을 사용하고 \n있습니다. EC2 인스턴스에는 웹 서버와 데이터베이스 소프트웨어가 모두 포함되어 있습니다. \n회사는 웹 사이트 플랫폼을 고가용성으로 만들고 사용자 요구에 맞게 웹 사이트를 확장할 \n수 있어야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "데이터베이스를 Amazon RDS 로 이동하고 자동 백업을 활성화합니다. 동일한 가용 \n영역에서 다른 EC2 인스턴스를 수동으로 시작합니다. 가용 영역에서 Application Load \nBalancer 를 구성하고 두 인스턴스를 대상으로 설정합니다.",
      "기존 EC2 인스턴스와 동일한 가용 영역에 있는 읽기 전용 복제본이 있는 Amazon \nAurora 인스턴스로 데이터베이스를 마이그레이션합니다. 동일한 가용 영역에서 다른 EC2 \n인스턴스를 수동으로 시작합니다. Application Load Balancer 를 구성하고 두 개의 EC2 \n인스턴스를 대상으로 설정합니다. \n\n=== PAGE 271 ===",
      "다른 가용 영역에 읽기 전용 복제본이 있는 Amazon Aurora\n로 데이터베이스를 \n이동합니다. EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. 두 가용 영역에서 \nApplication Load Balancer 를 구성합니다. 두 가용 영역에서 AMI 를 사용하는 Auto Scaling \n그룹을 연결합니다.",
      "데이터베이스를 별도의 EC2 인스턴스로 이동하고 Amazon S3 로 백업을 예약합니다. \n원래 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. 두 가용 영역에서 \nApplication Load Balancer 를 구성합니다. 두 가용 영역에서 AMI 를 사용하는 Auto Scaling \n그룹을 연결합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/95336-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n이 접근 방식은 웹 사이트 플랫폼에 고가용성과 확장성을 모두 제공합니다. 데이터베이스를 \n다른 가용 영역에 있는 읽기 전용 복제본이 있는 Amazon Aurora\n로 이동하면 \n데이터베이스에 대한 장애 조치 옵션이 제공됩니다. 두 가용 영역에서 Application Load \nBalancer 및 Auto Scaling 그룹을 사용하면 증가하는 사용자 수요를 충족하기 위해 웹 \n사이트를 자동으로 확장할 수 있습니다. 또한 원래 EC2 인스턴스에서 AMI 를 생성하면 \n장애 발생 시 인스턴스를 쉽게 복제할 수 있습니다. \n \n2: \n옵션 A 는 고가용성 또는 확장성을 위한 솔루션을 제공하지 않습니다. 동일한 AZ 에서 다른 \nEC2 인스턴스를 수동으로 시작하면 해당 AZ 에 장애가 발생하면 다운타임이 발생하므로 \n고가용성이 보장되지 않을 수 있습니다. \n \n옵션 B 는 데이터베이스 성능을 개선하고 내결함성 수준을 제공하지만 웹 사이트 플랫폼의 \n확장성 측면을 다루지는 않습니다. \n \n옵션 C\n는 고가용성과 내결함성을 모두 제공합니다. AMI\n를 생성하면 AZ 간에 EC2 \n인스턴스를 쉽게 복제할 수 있습니다. 두 AZ 에서 ALB 를 구성하고 ASG 를 연결하면 여러 \n인스턴스에 걸쳐 확장성과 부하 분산이 보장됩니다. \n \n옵션 D 는 회사에서 요구하는 고가용성 및 확장성을 제공하지 않습니다. S3 에 예약된 \n백업은 데이터 보호를 다루지만 웹사이트 가용성이나 확장성에 기여하지는 않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 245,
    "question": "회사가 AWS 에서 애플리케이션을 시작하고 있습니다. 애플리케이션은 Application Load \nBalancer(ALB)를 사용하여 단일 대상 그룹에 있는 최소 2 개의 Amazon EC2 인스턴스로 \n트래픽을 보냅니다. 인스턴스는 각 환경의 Auto Scaling 그룹에 있습니다. 회사는 개발 \n환경과 생산 환경이 필요합니다. 프로덕션 환경에는 트래픽이 많은 기간이 있습니다. \n개발 환경을 가장 비용 효율적으로 구성하는 솔루션은 무엇입니까?",
    "options": [
      "하나의 EC2 인스턴스만 대상으로 하도록 개발 환경에서 대상 그룹을 재구성합니다.",
      "ALB 밸런싱 알고리즘을 최소 미해결 요청으로 변경합니다.",
      "두 환경 모두에서 EC2 인스턴스의 크기를 줄입니다.",
      "개발 환경의 Auto Scaling 그룹에서 최대 EC2 인스턴스 수를 줄입니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95337-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n대상으로 하나의 EC2 인스턴스만 포함하도록 개발 환경에서 대상 그룹을 구성하면 해당 \n환경에 할당된 리소스를 효과적으로 줄일 수 있습니다. 이렇게 하면 더 적은 수의 EC2 \n인스턴스 및 관련 리소스를 활용하여 비용을 최소화할 수 있습니다. \n \n옵션 B 는 개발 환경의 비용 효율성을 직접 다루지 않습니다. 비용 최적화보다는 로드 \n밸런싱 전략에 중점을 둡니다. \n \n옵션 C 는 현재 인스턴스 크기가 과도하게 프로비저닝되거나 애플리케이션 요구 사항에 \n불필요하지 않는 한 가장 비용 효율적인 솔루션이 아닐 수 있습니다. \n \n옵션 D 는 비용 절감에 도움이 될 수 있지만 특히 부하가 증가하는 기간 동안 트래픽을 \n처리하고 효율적으로 확장하는 환경의 기능에 영향을 미칠 수 있습니다. \n \n전반적으로 \n옵션 \nA\n는 \n기능 \n설정을 \n유지하면서 \n개발 \n환경에 \n할당된 \n리소스를 \n최소화함으로써 비용 효율적인 접근 방식을 제공합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 246,
    "question": "한 회사가 여러 가용 영역의 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. \nEC2 \n인스턴스는 \n프라이빗 \n서브넷에 \n있습니다. \n솔루션 \n설계자는 \n인터넷 \n연결 \nALB(Application Load Balancer)를 구현하고 EC2 인스턴스를 대상 그룹으로 지정합니다. \n\n=== PAGE 273 ===\n그러나 인터넷 트래픽이 EC2 인스턴스에 도달하지 않습니다. \n솔루션 설계자는 이 문제를 해결하기 위해 아키텍처를 어떻게 재구성해야 합니까?",
    "options": [
      "ALB 를 Network Load Balancer 로 교체하십시오. 인터넷 트래픽을 허용하도록 퍼블릭 \n서브넷에서 NAT 게이트웨이를 구성합니다.",
      "EC2 인스턴스를 퍼블릭 서브넷으로 이동합니다. EC2 인스턴스의 보안 그룹에 규칙을 \n추가하여 0.0.0.0/0 으로의 아웃바운드 트래픽을 허용합니다.",
      "인터넷 게이트웨이 경로를 통해 0.0.0.0/0 트래픽을 보내도록 EC2 인스턴스의 서브넷에 \n대한 경로 테이블을 업데이트합니다. EC2 인스턴스의 보안 그룹에 규칙을 추가하여 \n0.0.0.0/0 으로의 아웃바운드 트래픽을 허용합니다.",
      "각 가용 영역에서 퍼블릭 서브넷을 생성합니다. 퍼블릭 서브넷을 ALB 와 연결합니다. \n프라이빗 서브넷에 대한 경로로 퍼블릭 서브넷에 대한 경로 테이블을 업데이트합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95003-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "다른 유형의 로드 밸런서를 사용하고 NAT 게이트웨이를 구성할 것을 제안하지만 EC2 \n인스턴스에 도달하는 인터넷 트래픽 문제는 다루지 않습니다. \n \nB.는 EC2 인스턴스를 퍼블릭 인터넷에 노출할 것을 제안합니다. 이는 보안 위험을 초래할 \n수 있으며 인스턴스에 도달하는 인바운드 인터넷 트래픽 문제를 해결하지 않습니다. \n \nC.는 아웃바운드 인터넷 액세스를 갖도록 EC2 인스턴스를 구성할 것을 제안하지만 \n인스턴스에 도달하는 인바운드 인터넷 트래픽 문제를 해결하지는 않습니다. \n \nD.가 정답입니다. 퍼블릭 서브넷을 생성하고 이를 ALB\n와 연결하면 인바운드 인터넷 \n트래픽이 ALB 에 도달할 수 있습니다. 프라이빗 서브넷에 대한 경로를 포함하도록 퍼블릭 \n서브넷의 라우팅 테이블이 업데이트되어 트래픽이 프라이빗 서브넷의 EC2 인스턴스에 \n도달할 수 있습니다. 이 설정을 사용하면 인터넷 트래픽이 ALB 를 통해 EC2 인스턴스에 \n도달하도록 허용하면서 애플리케이션에 대한 보안 액세스가 가능합니다. \n \n참고: \nhttps://repost.aws/ko/knowledge-center/public-load-balancer-private-ec2"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 247,
    "question": "=== PAGE 274 ===\n한 회사에서 MySQL 용 Amazon RDS 에 데이터베이스를 배포했습니다. 트랜잭션 증가로 \n인해 데이터베이스 지원 팀은 DB 인스턴스에 대한 느린 읽기를 보고하고 있으며 읽기 전용 \n복제본을 추가할 것을 권장합니다. \n이 변경 사항을 구현하기 전에 솔루션 설계자가 수행해야 하는 작업 조합은 무엇입니까? \n(2 개 선택)",
    "options": [
      "RDS 기본 노드에서 binlog 복제를 활성화합니다.",
      "원본 DB 인스턴스의 장애 조치 우선 순위를 선택합니다.",
      "원본 DB 인스턴스에서 장기 실행 트랜잭션이 완료되도록 허용합니다.",
      "글로벌 테이블을 생성하고 테이블을 사용할 수 있는 AWS 리전을 지정합니다.",
      "백업 보존 기간을 0 이외의 값으로 설정하여 원본 인스턴스에서 자동 백업을 \n활성화합니다. \nAnswer: C, E \nhttps://www.examtopics.com/discussions/amazon/view/95004-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "읽기 복제본 설정에 필요한 RDS 기본 노드에서 이진 로그 복제 기능을 활성화합니다.",
      "장애 조치 시나리오 중에 DB 인스턴스가 기본 역할로 승격되는 순서를 결정합니다. \n느린 읽기 문제를 해결하기 위해 읽기 전용 복제본을 추가하는 것과 직접적인 관련이 \n없습니다.",
      "원본 DB 인스턴스에서 진행 중인 모든 트랜잭션이 변경 사항을 구현하기 전에 \n완료되도록 합니다. 읽기 전용 복제본으로 전환하는 동안 데이터 무결성과 일관성을 \n유지하는 데 도움이 됩니다. \n \nD.는 DynamoDB 전용 기능입니다. DynamoDB\n에서 다중 리전 복제 및 고가용성을 \n허용하지만 이 시나리오에는 적용할 수 없습니다.",
      "원본 DB 인스턴스에 대해 정기적인 백업이 수행되는지 확인합니다. 이는 읽기 전용 \n복제본을 추가하는 동안 또는 이후에 문제가 발생할 경우 특정 시점 복원을 허용하므로 \n데이터 보호 및 복구 목적에 중요합니다. \n \n설명2: \n\"오래 실행되는 활성 트랜잭션은 읽기 전용 복제본 생성 프로세스를 느리게 할 수 있습니다. \n읽기 전용 복제본을 생성하기 전에 장기 실행 트랜잭션이 완료될 때까지 기다리는 것이 \n\n=== PAGE 275 ===\n좋습니다. 동일한 원본 DB 인스턴스에서 여러 읽기 전용 복제본을 병렬로 생성하는 경우 , \nAmazon RDS 는 첫 번째 생성 작업 시작 시 하나의 스냅샷만 찍습니다. 읽기 전용 복제본을 \n생성할 때 고려해야 할 몇 가지 사항이 있습니다. 먼저 백업 보존 기간을 0 이외의 값. \n이 요구 사항은 다른 읽기 전용 복제본의 원본 DB 인스턴스인 읽기 전용 복제본에도 \n적용됩니다.\" \nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 248,
    "question": "회사는 Amazon EC2 인스턴스에서 분석 소프트웨어를 실행합니다. 소프트웨어는 Amazon \nS3 에 업로드된 데이터를 처리하기 위해 사용자의 작업 요청을 수락합니다. 일부 제출된 \n데이터가 처리되지 않고 있다고 사용자가 보고합니다. Amazon CloudWatch\n는 EC2 \n인스턴스의 일관된 CPU 사용률이 100% 또는 거의 100%에 가깝다고 밝혔습니다. 회사는 \n시스템 성능을 개선하고 사용자 부하에 따라 시스템을 확장하려고 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "인스턴스의 복사본을 만듭니다. Application Load Balancer 뒤에 모든 인스턴스를 \n배치합니다.",
      "Amazon S3 용 S3 VPC 엔드포인트를 생성합니다. 엔드포인트를 참조하도록 소프트웨어를 \n업데이트합니다.",
      "EC2 인스턴스를 중지합니다. CPU 와 메모리가 더 강력한 인스턴스 유형으로 인스턴스 \n유형을 수정합니다. 인스턴스를 다시 시작하십시오.",
      "들어오는 요청을 Amazon Simple Queue Service(Amazon SQS)로 라우팅합니다. 대기열 \n크기에 따라 EC2 Auto Scaling 그룹을 구성합니다. 대기열에서 읽을 수 있도록 \n소프트웨어를 업데이트합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95329-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "인스턴스 사본을 생성하고 모든 인스턴스를 ALB 뒤에 배치하는 것은 높은 CPU 사용률 \n문제를 해결하거나 사용자 부하에 따라 확장성을 제공하지 않습니다.",
      "S3\n용 S3 VPC 엔드포인트를 생성하고 엔드포인트를 참조하도록 소프트웨어를 \n업데이트하면 네트워크 성능이 향상되지만 높은 CPU 사용률 문제를 해결하거나 사용자 \n부하에 따라 확장성을 제공하지 않습니다. \n \n\n=== PAGE 276 ===",
      "EC2 인스턴스를 중지하고 인스턴스 유형을 더 강력한 CPU 와 더 많은 메모리를 가진 \n인스턴스 유형으로 수정하면 성능이 향상될 수 있지만 사용자 부하에 따른 확장성은 \n해결되지 않습니다.",
      "들어오는 요청을 SQS 로 라우팅하고, 대기열 크기에 따라 EC2 ASG 를 구성하고, \n대기열에서 읽을 수 있도록 소프트웨어를 업데이트하면 시스템 성능이 향상되고 사용자 \n로드에 따라 확장성이 제공됩니다. \n \n따라서 옵션 D 는 높은 CPU 사용률을 해결하고 시스템 성능을 개선하며 사용자 부하에 \n따라 확장성을 활성화하므로 올바른 선택입니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 249,
    "question": "회사는 AWS 클라우드에서 호스팅되는 미디어 애플리케이션을 위한 공유 스토리지 \n솔루션을 구현하고 있습니다. 회사는 SMB 클라이언트를 사용하여 데이터에 액세스할 수 \n있는 기능이 필요합니다. 솔루션은 완전히 관리되어야 합니다. \n어떤 AWS 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS Storage Gateway 볼륨 게이트웨이를 생성합니다. 필요한 클라이언트 프로토콜을 \n사용하는 파일 공유를 만듭니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "AWS Storage Gateway 테이프 게이트웨이를 생성합니다. Amazon S3 를 사용하도록 \n테이프를 구성합니다. 애플리케이션 서버를 테이프 게이트웨이에 연결합니다.",
      "Amazon EC2 Windows 인스턴스를 생성합니다. 인스턴스에 Windows 파일 공유 역할을 \n설치하고 구성합니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "Windows 파일 서버 파일 시스템용 Amazon FSx 를 생성합니다. 원본 서버에 파일 \n시스템을 연결합니다. 애플리케이션 서버를 파일 시스템에 연결하십시오. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95006-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "Storage Gateway 사용과 관련이 있지만 SMB 클라이언트에 대한 지원을 구체적으로 \n언급하지는 않습니다. SMB 클라이언트를 사용하여 데이터에 액세스해야 하는 요구 사항을 \n충족하지 못할 수 있습니다.",
      "S3 에 데이터를 보관하는 데 주로 사용되는 테이프 게이트웨이 구성과 함께 Storage \nGateway 를 사용하는 것과 관련됩니다. SMB 클라이언트가 데이터에 액세스할 수 있도록 \n\n=== PAGE 277 ===\n기본 지원을 제공하지 않습니다.",
      "EC2 Windows 인스턴스에서 Windows 파일 공유를 수동으로 설정하고 구성하는 작업이 \n포함됩니다. SMB 클라이언트가 데이터에 액세스할 수 있지만 수동 설정 및 유지 관리가 \n필요하므로 완전히 관리되는 솔루션은 아닙니다.",
      "SMB 클라이언트를 지원하는 완전히 관리되는 Windows 파일 시스템인 FSx for Windows \n파일 서버 파일 시스템 생성이 포함됩니다. 기본 SMB 를 지원하는 사용하기 쉬운 공유 \n스토리지 솔루션을 제공합니다. \n \nSMB 클라이언트를 사용하고 완전히 관리되는 솔루션이 필요한 요구 사항을 기반으로 옵션 \nD 가 가장 적합한 선택입니다. \n \n설명2: \nhttps://aws.amazon.com/fsx/lustre/ \nAmazon FSx 는 Windows 파일 시스템 기능과 업계 표준 서버를 기본적으로 지원합니다. \n네트워크를 통해 파일 저장소에 액세스하기 위한 메시지 블록(SMB) 프로토콜. \nhttps://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html \n \n온프레미스-AWS 간 스토리지 서비스 중 SMB 지원하는 건 Storage Gateway File \nGateway 나 Amazon FSx for Windows 라고 보면 됨."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 250,
    "question": "회사의 보안 팀이 VPC 흐름 로그에서 네트워크 트래픽을 캡처하도록 요청합니다. 로그는 \n90 일 동안 자주 액세스한 후 간헐적으로 액세스합니다. \n솔루션 설계자는 로그를 구성할 때 이러한 요구 사항을 충족하기 위해 무엇을 해야 \n합니까?",
    "options": [
      "Amazon CloudWatch 를 대상으로 사용하십시오. 90 일 만료로 CloudWatch 로그 그룹 \n설정",
      "Amazon Kinesis 를 대상으로 사용합니다. 항상 90 일 동안 로그를 유지하도록 Kinesis \n스트림을 구성합니다.",
      "AWS CloudTrail 을 대상으로 사용합니다. Amazon S3 버킷에 저장하도록 CloudTrail 을 \n구성하고 S3 Intelligent-Tiering 을 활성화합니다.",
      "Amazon S3 를 대상으로 사용합니다. S3 수명 주기 정책을 활성화하여 90 일 후에 로그를 \nS3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다. \n\n=== PAGE 278 ===\nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95007-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1:",
      "CloudWatch 를 VPC 흐름 로그의 대상으로 사용할 것을 제안합니다. 그러나 90 일 동안 \n로그 보존을 관리한 다음 간헐적으로 액세스하는 메커니즘을 제공하지 않습니다.",
      "Kinesis를 VPC 흐름 로그의 대상으로 사용할 것을 제안합니다. 90일 동안 로그를 보관할 \n수 있지만 로그에 대한 간헐적 액세스 요구 사항은 다루지 않습니다.",
      "CloudTrail 을 VPC 흐름 로그의 대상으로 사용할 것을 제안합니다. 그러나 CloudTrail 은 \n네트워크 트래픽 로그 캡처가 아니라 API 활동을 감사 및 모니터링하도록 설계되었습니다. \nVPC 흐름 로그 캡처 요구 사항을 충족하지 않습니다.",
      "S3 를 VPC 흐름 로그의 대상으로 사용하고 S3 수명 주기 정책을 활용하여 90 일 후에 \n로그를 비용 효율적인 스토리지 클래스로 전환할 것을 제안합니다. 90 일 동안 로그를 \n유지해야 하는 요구 사항을 충족하고 스토리지 비용을 최적화하면서 간헐적인 액세스에 \n대한 유연성을 제공합니다. \n \n설명2: \n여기에는 VPC 흐름 로그가 S3\n로 직접 이동할 수 있음을 지정하는 표가 있습니다. \nCloudTrail 을 거쳐 S3 로 이동할 필요가 없습니다. CW 를 통해서도 아닙니다. \nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resourcep\nolicy.html#AWS-logs-i"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  }
];