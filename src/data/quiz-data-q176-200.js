export const quizData = [
  {
    "id": 176,
    "question": "애플리케이션은 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 \nAmazon DynamoDB 테이블에 액세스해야 합니다. \n트래픽이 AWS 네트워크를 벗어나지 않도록 하면서 테이블에 액세스하는 가장 안전한 \n\n=== PAGE 190 ===\n방법은 무엇입니까?",
    "options": [
      "DynamoDB 용 VPC 엔드포인트를 사용합니다.",
      "퍼블릭 서브넷에서 NAT 게이트웨이를 사용합니다.",
      "프라이빗 서브넷에서 NAT 인스턴스를 사용합니다.",
      "VPC 에 연결된 인터넷 게이트웨이를 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87532-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nVPC 내에 있는 프라이빗 서브넷의 EC2 인스턴스와 DynamoDB 간 가장 안전한 AWS \n네트워크 통신 = VPC Gateway Endpoint. \n게이트웨이 엔드포인트는 VPC 용 인터넷 게이트웨이 또는 NAT 디바이스가 없어도 Amazon \nS3 및 DynamoDB 에 대한 안정적인 연결을 제공합니다. \n\ndocs.aws.amazon.com/ko_kr/vpc/latest/privatelink/vpce-gateway.html#vpc-endp\noints-limitations \n \n \n2: \nDynamoDB 용 VPC 엔드포인트를 사용하면 VPC 의 Amazon EC2 인스턴스가 프라이빗 IP \n주소를 사용하여 퍼블릭 인터넷에 노출되지 않고 DynamoDB 에 액세스할 수 있습니다. EC2 \n인스턴스에는 퍼블릭 IP 주소가 필요하지 않으며 VPC 에 인터넷 게이트웨이, NAT 디바이스 \n또는 가상 프라이빗 게이트웨이가 필요하지 않습니다. 엔드포인트 정책을 사용하여 \nDynamoDB 에 대한 액세스를 제어합니다. VPC 와 AWS 서비스 간의 트래픽은 Amazon \n네트워크를 벗어나지 않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 177,
    "question": "엔터테인먼트 회사는 Amazon DynamoDB\n를 사용하여 미디어 메타데이터를 저장하고 \n있습니다. 애플리케이션이 읽기 집약적이며 지연이 발생합니다. 회사에는 추가 운영 \n오버헤드를 처리할 직원이 없으며 애플리케이션을 재구성하지 않고 DynamoDB 의 성능 \n효율성을 개선해야 합니다. \n이 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "Redis 용 Amazon ElastiCache 를 사용합니다.",
      "Amazon DynamoDB Accelerator(DAX)를 사용합니다. \n\n=== PAGE 191 ===",
      "DynamoDB 전역 테이블을 사용하여 데이터를 복제합니다.",
      "자동 검색이 활성화된 Memcached 용 Amazon ElastiCache 를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87572-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nDynamoDB 와 DAX 가 결합되면 성능을 한 단계 업그레이드하여 읽기 중심의 워크로드에서 \n초당 수백만 개의 요청에도 마이크로초의 응답 시간을 지원합니다. DynamoDB\n와 \n마찬가지로 DAX 는 완전관리형입니다. 따라서 하드웨어나 소프트웨어 프로비저닝, 설정 및 \n구성, 소프트웨어 패치, 분산 캐시 클러스터 운영 또는 확장 시 여러 인스턴스에 데이터 \n복제 등과 같은 관리 작업에 대해 더 이상 걱정할 필요가 없습니다. DAX 는 장애 탐지, \n장애 복구, 소프트웨어 패치와 같은 일반적인 관리 작업 상당 부분을 자동화합니다. DAX 는 \nDynamoDB API 와 호환되므로 작동하는 애플리케이션 코드를 변경할 필요가 없습니다.  \n \n참고: \n\naws.amazon.com/dynamodb/dax/",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 178,
    "question": "회사의 인프라는 단일 AWS 리전에 있는 Amazon EC2 인스턴스와 Amazon RDS DB \n인스턴스로 구성됩니다. 회사는 별도의 리전에 데이터를 백업하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Backup 을 사용하여 EC2 백업과 RDS 백업을 별도의 리전에 복사합니다.",
      "Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 EC2 백업 및 RDS 백업을 \n별도의 리전에 복사합니다.",
      "EC2 인스턴스의 Amazon 머신 이미지(AMI)를 생성합니다. AMI\n를 별도의 리전에 \n복사합니다. 별도의 리전에서 RDS DB 인스턴스에 대한 읽기 전용 복제본을 생성합니다.",
      "Amazon Elastic Block Store(Amazon EBS) 스냅샷을 생성합니다. EBS 스냅샷을 별도의 \n리전에 복사합니다. RDS 스냅샷을 생성합니다. RDS 스냅샷을 Amazon S3 로 내보냅니다. S3 \nCRR(Cross-Region Replication)을 별도의 리전에 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87639-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 179,
    "question": "솔루션 설계자는 애플리케이션이 Amazon RDS DB 인스턴스에 액세스하는 데 사용하는 \n데이터베이스 사용자 이름과 암호를 안전하게 저장해야 합니다. 데이터베이스에 액세스하는 \n애플리케이션은 Amazon EC2 인스턴스에서 실행됩니다. 솔루션 설계자는 AWS Systems \nManager Parameter Store 에서 보안 매개변수를 생성하려고 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Parameter Store 파라미터에 대한 읽기 액세스 권한이 있는 IAM 역할을 생성합니다. \n파라미터를 암호화하는 데 사용되는 AWS Key Management Service(AWS KMS) 키에 대한 \nDecrypt 액세스를 허용합니다. 이 IAM 역할을 EC2 인스턴스에 할당합니다.",
      "Parameter Store 파라미터에 대한 읽기 액세스를 허용하는 IAM 정책을 생성합니다. \n파라미터를 암호화하는 데 사용되는 AWS Key Management Service(AWS KMS) 키에 대한 \nDecrypt 액세스를 허용합니다. 이 IAM 정책을 EC2 인스턴스에 할당합니다.",
      "Parameter Store 파라미터와 EC2 인스턴스 간에 IAM 신뢰 관계를 생성합니다. 신뢰 \n정책에서 Amazon RDS 를 보안 주체로 지정합니다.",
      "DB 인스턴스와 EC2 인스턴스 간에 IAM 신뢰 관계를 생성합니다. 신뢰 정책에서 \nSystems Manager 를 보안 주체로 지정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87582-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n데이터베이스 사용자 이름과 암호를 AWS 시스템 관리자 파라미터 스토어에 안전하게 \n저장하고 EC2 인스턴스에서 실행 중인 애플리케이션이 액세스할 수 있도록 하려면",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 180,
    "question": "회사에서 API 로 구동되는 클라우드 통신 플랫폼을 설계하고 있습니다. 애플리케이션은 \nNLB(Network Load Balancer) 뒤의 Amazon EC2 인스턴스에서 호스팅됩니다. 이 회사는 \nAmazon API Gateway 를 사용하여 외부 사용자에게 API 를 통해 애플리케이션에 대한 \n액세스 권한을 제공합니다. 이 회사는 SQL 인젝션과 같은 웹 익스플로잇으로부터 플랫폼을 \n보호하고 대규모의 정교한 DDoS 공격을 감지하고 완화하기를 원합니다. \n어떤 솔루션 조합이 MOST 보호를 제공합니까? (두 가지를 선택하세요.)",
    "options": [
      "AWS WAF 를 사용하여 NLB 를 보호하십시오.",
      "NLB 와 함께 AWS Shield Advanced 를 사용합니다.",
      "AWS WAF 를 사용하여 Amazon API Gateway 를 보호합니다.",
      "AWS Shield Standard 와 함께 Amazon GuardDuty 사용",
      "Amazon API Gateway 와 함께 AWS Shield Standard 를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87640-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAWS Shield Advanced 는 Amazon EC2 인스턴스, Elastic Load Balancing 로드 밸런서, \nCloudFront 배포, Route 53 호스팅 영역 및 AWS Global Accelerator 표준 가속기에 대해 \n확장된 DDoS 공격 보호 기능을 제공합니다. AWS WAF 는 보호된 웹 애플리케이션 리소스로 \n전달되는 HTTP 및 HTTPS 요청을 모니터링할 수 있는 웹 애플리케이션 방화벽입니다. \n다음 리소스 유형을 보호할 수 있습니다. \nAmazon CloudFront 배포 \n아마존 API 게이트웨이 REST API \n애플리케이션 로드 밸런서 \nAWS AppSync GraphQL API \nAmazon Cognito 사용자 풀",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 181,
    "question": "회사에는 Amazon EC2 인스턴스에서 실행되는 레거시 데이터 처리 애플리케이션이 \n있습니다. 데이터는 순차적으로 처리되지만 결과의 순서는 중요하지 않습니다. 응용 \n프로그램은 모놀리식 아키텍처를 사용합니다. 회사에서 수요 증가에 맞춰 애플리케이션을 \n확장할 수 있는 유일한 방법은 인스턴스 크기를 늘리는 것입니다. \n이 회사의 개발자는 Amazon Elastic Container Service(Amazon ECS)에서 마이크로서비스 \n아키텍처를 사용하도록 애플리케이션을 다시 작성하기로 결정했습니다. \n솔루션 설계자는 마이크로서비스 간의 통신을 위해 무엇을 권장해야 합니까?",
    "options": [
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 데이터 생산자에 \n코드를 추가하고 데이터를 대기열로 보냅니다. 데이터 소비자에 코드를 추가하여 대기열의 \n데이터를 처리합니다.",
      "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. 데이터 생산자에 \n코드를 추가하고 주제에 알림을 게시합니다. 데이터 소비자에 코드를 추가하여 주제를 \n구독합니다.",
      "메시지를 전달할 AWS Lambda 함수를 생성합니다. 데이터 생산자에 코드를 추가하여 \n데이터 객체로 Lambda 함수를 호출합니다. 데이터 소비자에 코드를 추가하여 Lambda \n함수에서 전달되는 데이터 객체를 수신합니다.",
      "Amazon DynamoDB 테이블을 생성합니다. DynamoDB 스트림을 활성화합니다. 데이터 \n생산자에 코드를 추가하여 테이블에 데이터를 삽입합니다. 데이터 소비자에 코드를 \n추가하여 DynamoDB Streams API\n를 사용하여 새 테이블 항목을 감지하고 데이터를 \n검색합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87647-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n분리와 함께 처리할 응용 프로그램에 대한 메시지를 보관할 큐를 수용하도록 아키텍처를 \n변경하기만 하면 됨 A(O) – SQS \n \n2: \n대기열의 처리량이 제한됨(일괄 처리 없이 300msg/s, 일괄 처리 시 3000msg/s, 일괄 \n작업당 최대 10msg, 대기열에서 메시지 복제가 허용되지 않음(정확히 한 번 전달), 메시지",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 182,
    "question": "회사에서 MySQL 데이터베이스를 온프레미스에서 AWS 로 마이그레이션하려고 합니다. 이 \n회사는 최근 비즈니스에 상당한 영향을 미치는 데이터베이스 중단을 경험했습니다. 이러한 \n일이 다시 발생하지 않도록 회사는 데이터 손실을 최소화하고 모든 트랜잭션을 최소 두 \n개의 노드에 저장하는 안정적인 AWS 데이터베이스 솔루션을 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "3 개의 가용 영역에 있는 3 개의 노드에 대한 동기식 복제로 Amazon RDS DB 인스턴스를 \n생성합니다.",
      "다중 AZ 기능이 활성화된 Amazon RDS MySQL DB 인스턴스를 생성하여 데이터를 \n동기식으로 복제합니다.",
      "Amazon RDS MySQL DB 인스턴스를 생성한 다음 데이터를 동기식으로 복제하는 별도의 \nAWS 리전에서 읽기 전용 복제본을 생성합니다.",
      "Amazon RDS MySQL DB 인스턴스에 데이터를 동기식으로 복제하기 위해 AWS Lambda \n함수를 트리거하는 MySQL 엔진이 설치된 Amazon EC2 인스턴스를 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87641-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n데이터베이스의 고가용성이 필요한 상황이므로 Multi AZ 가 필수인 상황. \nA(X) : AWS 로 MySQL 데이터베이스를 마이그레이션하려고 한다 했으므로 Amazon RDS for \nMySQL 이 맞음. \nB(O) : Amazon RDS 다중 AZ 동기 복제 기술을 사용하여 대기 데이터베이스 인스턴스의 \n데이터를 프라이머리와 함께 최신 상태로 유지합니다. 장애를 감지하면 Amazon RDS 는 \n수동 개입 없이 자동으로 대기 인스턴스로 장애 조치합니다. \n\naws.amazon.com/ko/rds/features/multi-az/ \nC(X) : RDS read replica 는 동기식이 아닌 비동기식 방식임. \n기본 DB 인스턴스에 적용된 업데이트는 읽기 전용 복제본에 비동기식으로 복사됩니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/USER_ReadRepl.html \nD(X) : 다른 AZ 나 리전에 복제하는지에 대한 여부가 안 나와 있음. 그리고 굳이 Lambda 를 \n사용해야 하는지도 의문. \n \n2:",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 183,
    "question": "회사에서 새로운 동적 주문 웹사이트를 구축하고 있습니다. 회사는 서버 유지 관리 및 \n패치를 최소화하려고 합니다. 웹 사이트는 가용성이 높아야 하며 사용자 요구의 변화를 \n충족하기 위해 가능한 한 빨리 읽기 및 쓰기 용량을 확장해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 에서 정적 콘텐츠를 호스팅합니다. Amazon API Gateway 및 AWS Lambda 를 \n사용하여 동적 콘텐츠를 호스팅합니다. 데이터베이스에 대한 온디맨드 용량과 함께 \nAmazon DynamoDB 를 사용합니다. 웹 사이트 콘텐츠를 제공하도록 Amazon CloudFront 를 \n구성합니다.",
      "Amazon S3 에서 정적 콘텐츠를 호스팅합니다. Amazon API Gateway 및 AWS Lambda 를 \n사용하여 동적 콘텐츠를 호스팅합니다. 데이터베이스에는 Aurora Auto Scaling 과 함께 \nAmazon Aurora 를 사용하십시오. 웹 사이트 콘텐츠를 제공하도록 Amazon CloudFront 를 \n구성합니다.",
      "Amazon EC2 인스턴스에서 모든 웹 사이트 콘텐츠를 호스팅합니다. Auto Scaling 그룹을 \n생성하여 EC2 인스턴스를 확장합니다. Application Load Balancer 를 사용하여 트래픽을 \n분산합니다. 데이터베이스에 대해 프로비저닝된 쓰기 용량과 함께 Amazon DynamoDB 를 \n사용합니다.",
      "Amazon EC2 인스턴스에서 모든 웹 사이트 콘텐츠를 호스팅합니다. Auto Scaling 그룹을 \n생성하여 EC2 인스턴스를 확장합니다. Application Load Balancer 를 사용하여 트래픽을 \n분산합니다. 데이터베이스에는 Aurora Auto Scaling\n과 함께 Amazon Aurora\n를 \n사용하십시오."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87570-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n질문의 핵심 문구는 읽기 및 쓰기 용량을 확장해야 한다는 것입니다. Aurora 는 읽기",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 184,
    "question": "회사에 소프트웨어 엔지니어링에 사용되는 AWS 계정이 있습니다. AWS 계정은 한 쌍의 \nAWS Direct Connect 연결을 통해 회사의 온프레미스 데이터 센터에 액세스할 수 있습니다. \n모든 비 VPC 트래픽은 가상 프라이빗 게이트웨이로 라우팅됩니다. \n개발팀은 최근 콘솔을 통해 AWS Lambda 함수를 생성했습니다. 개발 팀은 함수가 회사 \n데이터 센터의 프라이빗 서브넷에서 실행되는 데이터베이스에 액세스할 수 있도록 허용해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "적절한 보안 그룹을 사용하여 VPC 에서 실행되도록 Lambda 함수를 구성합니다.",
      "AWS 에서 데이터 센터로 VPN 연결을 설정합니다. VPN 을 통해 Lambda 함수의 트래픽을 \n라우팅합니다.",
      "Lambda 함수가 Direct Connect 를 통해 온프레미스 데이터 센터에 액세스할 수 있도록 \nVPC 의 라우팅 테이블을 업데이트합니다.",
      "탄력적 IP 주소를 생성합니다. 탄력적 네트워크 인터페이스 없이 탄력적 IP 주소를 통해 \n트래픽을 보내도록 Lambda 함수를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87534-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nA(O) : 보안 그룹을 정의하여 VPC 에 Lambda 연결 가능. \nAWS 계정의 가상 사설 클라우드(VPC)에 있는 사설 서브넷에 연결하도록 Lambda 함수를 \n구성할 수 있습니다. Amazon Virtual Private Cloud(Amazon VPC)를 사용하여 데이터베이스, \n캐시 인스턴스 또는 내부 서비스와 같은 리소스에 대한 사설 네트워크를 생성합니다. \n함수가 실행되는 동안 프라이빗 리소스에 액세스하려면 함수를 VPC 에 연결합니다. 함수를 \nVPC 에 연결하면 Lambda 는 함수의 VPC 구성에 있는 각 서브넷의 Hyperplane ENI(탄력적 \n네트워크 인터페이스)에 함수를 할당합니다. Lambda 는 계정의 VPC 지원 기능에 대해",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술"
    }
  },
  {
    "id": 185,
    "question": "회사에서 Amazon ECS\n를 사용하여 애플리케이션을 실행합니다. 애플리케이션은 원본 \n이미지의 크기가 조정된 버전을 생성한 다음 Amazon S3 API 를 호출하여 크기가 조정된 \n이미지를 Amazon S3 에 저장합니다. \n솔루션 설계자는 애플리케이션이 Amazon S3 에 액세스할 권한이 있는지 어떻게 확인할 수 \n있습니까?",
    "options": [
      "Amazon ECS 에서 읽기/쓰기 액세스를 허용하도록 AWS IAM 에서 S3 역할을 업데이트한 \n다음 컨테이너를 다시 시작합니다.",
      "S3 권한이 있는 IAM 역할을 생성한 다음 작업 정의에서 해당 역할을 taskRoleArn 으로 \n지정합니다.",
      "Amazon ECS 에서 Amazon S3 로의 액세스를 허용하는 보안 그룹을 생성하고 ECS \n클러스터에서 사용하는 시작 구성을 업데이트합니다.",
      "S3 권한이 있는 IAM 사용자를 만든 다음 이 계정으로 로그인한 상태에서 ECS \n클러스터에 대한 Amazon EC2 인스턴스를 다시 시작합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87648-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : S3 에 관한 권한을 물어본 거지 ECS 에 대한 권한을 물어본 게 아님. \nB(O) : 태스크 정의를 등록할 때 태스크 권한의 컨테이너가 사용자 대신 연결된 정책에 \n지정된 AWS API 를 호출하도록 허용하는 IAM 역할에 태스크 역할을 제공할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/task_definition_p\narameters.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 186,
    "question": "회사에 AWS\n로 마이그레이션해야 하는 Windows 기반 애플리케이션이 있습니다. 이 \n애플리케이션은 여러 가용 영역에 배포된 여러 Amazon EC2 Windows 인스턴스에 연결된 \n공유 Windows 파일 시스템을 사용해야 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "볼륨 게이트웨이 모드에서 AWS Storage Gateway\n를 구성합니다. 각 Windows \n인스턴스에 볼륨을 마운트합니다.",
      "Windows 파일 서버용 Amazon FSx 를 구성합니다. Amazon FSx 파일 시스템을 각 \nWindows 인스턴스에 탑재합니다.",
      "Amazon Elastic File System(Amazon EFS)을 사용하여 파일 시스템을 구성합니다. EFS \n파일 시스템을 각 Windows 인스턴스에 마운트합니다.",
      "필요한 크기로 Amazon Elastic Block Store(Amazon EBS) 볼륨을 구성합니다. 각 EC2 \n인스턴스를 볼륨에 연결합니다. 볼륨 내의 파일 시스템을 각 Windows 인스턴스에 \n마운트합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87650-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 솔루션은 여러 가용 영역에 배포된 여러 Amazon EC2 Windows 인스턴스에 연결된 공유 \nWindows 파일 시스템을 사용해야 하는 Windows 기반 애플리케이션 마이그레이션 요구 \n사항을 충족합니다. Amazon FSx for Windows File Server 는 Windows Server 에 구축된 완전 \n관리형 공유 스토리지를 제공하며 광범위한 데이터 액세스, 데이터 관리 및 관리 기능을 \n제공합니다. SMB(서버 메시지 블록) 프로토콜을 지원하며 여러 가용 영역에서 EC2 \nWindows 인스턴스에 탑재할 수 있습니다. \nWindows 기반 애플리케이션이 핵심 키워드. 답은 B. \n \n옵션 A 의 볼륨 게이트웨이 모드의 AWS Storage Gateway 는 온프레미스 애플리케이션 \n서버에서 iSCSI 디바이스로 마운트할 수 있는 클라우드 지원 스토리지 볼륨을 제공하지만 \nSMB 프로토콜 또는 EC2 Windows 인스턴스를 지원하지 않기 때문에 올바르지 않습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Storage Gateway": "사내 장비와 AWS 스토리지를 연결해 하이브리드 환경을 만드는 서비스"
    }
  },
  {
    "id": 187,
    "question": "한 회사에서 로드 밸런싱된 프런트 엔드, 컨테이너 기반 애플리케이션 및 관계형 \n데이터베이스로 구성될 전자상거래 애플리케이션을 개발하고 있습니다. 솔루션 설계자는 \n가능한 한 적은 수동 개입으로 작동하는 고가용성 솔루션을 만들어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2 개 선택)",
    "options": [
      "다중 AZ 모드에서 Amazon RDS DB 인스턴스를 생성합니다.",
      "다른 가용 영역에서 Amazon RDS DB 인스턴스와 하나 이상의 복제본을 생성합니다.",
      "동적 애플리케이션 로드를 처리하기 위해 Amazon EC2 인스턴스 기반 Docker \n클러스터를 생성합니다.",
      "동적 애플리케이션 로드를 처리하기 위해 Fargate 시작 유형으로 Amazon Elastic \nContainer Service(Amazon ECS) 클러스터를 생성합니다.",
      "동적 애플리케이션 로드를 처리하기 위해 Amazon EC2 시작 유형으로 Amazon Elastic \nContainer Service(Amazon ECS) 클러스터를 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87695-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(O) : 다중 AZ 모드로 고가용성 충족. 관계형 데이터베이스로 구성된 프로그램이어야 \n하므로 RDS 사용. \n다중 AZ 배포로 실행되도록 DB 인스턴스를 생성 또는 수정하면 Amazon RDS 가 다른 가용 \n영역에 동기식 ‘예비’ 복제본을 자동으로 프로비저닝하고 유지합니다. 특정 유형의 계획된 \n유지 관리를 수행하는 도중에, 또는 예기치 않은 DB 인스턴스 장애나 가용 영역 장애가 \n발생할 경우 Amazon RDS 가 자동으로 예비 복제본으로 장애 조치하므로 예비 복제본이",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 188,
    "question": "회사는 Amazon S3 를 데이터 레이크로 사용합니다. 회사에는 SFTP 를 사용하여 데이터 \n파일을 업로드해야 하는 새로운 파트너가 있습니다. 솔루션 설계자는 운영 오버헤드를 \n최소화하는 고가용성 SFTP 솔루션을 구현해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Transfer Family 를 사용하여 공개적으로 액세스할 수 있는 엔드포인트가 있는 SFTP \n\n=== PAGE 204 ===\n지원 서버를 구성합니다. S3 데이터 레이크를 대상으로 선택합니다.",
      "Amazon S3 파일 게이트웨이를 SFTP 서버로 사용합니다. S3 파일 게이트웨이 \n엔드포인트 URL\n을 새 파트너에게 노출합니다. S3 파일 게이트웨이 엔드포인트를 새 \n파트너와 공유합니다.",
      "VP 의 프라이빗 서브넷에서 Amazon EC2 인스턴스를 시작합니다. 새 파트너에게 VPN 을 \n사용하여 EC2 인스턴스에 파일을 업로드하도록 지시합니다. EC2 인스턴스에서 cron 작업 \n스크립트를 실행하여 S3 데이터 레이크에 파일을 업로드합니다.",
      "VPC 의 프라이빗 서브넷에서 Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스 앞에 \nNLB(Network Load Balancer)를 배치합니다. NLB 에 대한 SFTP 수신기 포트를 만듭니다. \nNLB 호스트 이름을 새 파트너와 공유합니다. EC2 인스턴스에서 cron 작업 스크립트를 \n실행하여 S3 데이터 레이크에 파일을 업로드합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87566-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 솔루션은 수동 관리 또는 운영 오버헤드 없이 고가용성 SFTP 솔루션을 제공합니다. \nAWS Transfer Family 를 사용하면 인증, 권한 부여 및 스토리지 백엔드로 S3 와의 통합을 \n통해 SFTP 서버를 쉽게 설정할 수 있습니다. \n \n옵션 B 는 SFTP 액세스가 아닌 NFS 또는 SMB 프로토콜을 통한 S3 스토리지에 대한 파일 \n기반 액세스에 주로 사용되는 Amazon S3 파일 게이트웨이 사용을 제안하므로 최선의 \n선택이 아닙니다. \n옵션 C 는 파일 업로드를 위한 EC2 인스턴스, VPN 설정 및 cron 작업 스크립트의 수동 \n관리가 필요하여 운영 오버헤드와 잠재적인 복잡성을 유발하므로 최선의 선택이 아닙니다. \n옵션 D 는 파일 업로드를 위한 EC2 인스턴스, Network Load Balancer 및 cron 작업 \n스크립트의 수동 관리도 필요하므로 최선의 선택이 아닙니다. 옵션 A 에서 AWS Transfer \nFamily 가 제공하는 더 단순하고 완벽하게 관리되는 솔루션에 비해 더 복잡하고 추가 구성 \n요소가 필요합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 189,
    "question": "회사는 계약 문서를 보관해야 합니다. 계약은 5 년 동안 지속됩니다. 회사는 5 년 동안 \n문서를 덮어쓰거나 삭제할 수 없도록 해야 합니다. 회사는 미사용 문서를 암호화하고 매년 \n암호화 키를 자동으로 교체해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 수행해야 \n\n=== PAGE 205 ===\n하는 단계 조합은 무엇입니까? (두 가지를 선택하세요.)",
    "options": [
      "Amazon S3 에 문서를 저장합니다. 거버넌스 모드에서 S3 객체 잠금을 사용합니다.",
      "Amazon S3 에 문서를 저장합니다. 규정 준수 모드에서 S3 객체 잠금을 사용합니다.",
      "Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용합니다. 키 순환을 \n구성합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리형 키로 서버 측 암호화를 \n사용합니다. 키 순환을 구성합니다.",
      "AWS Key Management Service(AWS KMS) 고객 제공(가져온) 키로 서버 측 암호화를 \n사용합니다. 키 순환을 구성합니다. \nAnswer: B, D \nhttps://www.examtopics.com/discussions/amazon/view/87535-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "규정 준수 모드에서 S3 객체 잠금을 사용하면 객체에 엄격한 보존 정책을 적용하여 \n수정이나 삭제를 방지합니다.",
      "AWS KMS 고객 관리형 키와 함께 서버 측 암호화를 사용하면 문서가 고객 제어형 키로 \n암호화됩니다. 키 순환을 활성화하면 정의된 순환 간격으로 새 암호화 키가 자동으로 \n생성되어 보안이 강화됩니다. \n \n옵션 A: 거버넌스 모드의 S3 객체 잠금은 문서에 필요한 불변성을 제공하지 않으므로 \n잠재적인 수정 또는 삭제가 허용됩니다. \n옵션 C: SSE-S3 만으로는 서버 측 암호화가 명시적으로 지정된 암호화 키 순환 요구 \n사항을 충족하지 않습니다. \n옵션 E: AWS KMS 고객 관리 키(옵션 D)를 사용할 수 있는 경우 고객 제공(가져온) \n키(SSE-C)를 사용한 서버 측 암호화는 필요하지 않으며, 이는 보다 통합되고 관리 가능한 \n솔루션을 제공합니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 190,
    "question": "회사에 Java 및 PHP 기반 웹 애플리케이션이 있습니다. 회사는 애플리케이션을 \n온프레미스에서 AWS 로 옮길 계획입니다. 회사는 새로운 사이트 기능을 자주 테스트할 수 \n있는 능력이 필요합니다. 회사는 또한 최소한의 운영 오버헤드를 필요로 하는 가용성이 \n높고 관리되는 솔루션이 필요합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 버킷을 생성합니다. S3 버킷에서 정적 웹 호스팅을 활성화합니다. 정적 \n\n=== PAGE 206 ===\n콘텐츠를 S3 버킷에 업로드합니다. AWS Lambda\n를 사용하여 모든 동적 콘텐츠를 \n처리합니다.",
      "웹 애플리케이션을 AWS Elastic Beanstalk 환경에 배포합니다. 기능 테스트를 위해 URL \n스와핑을 사용하여 여러 Elastic Beanstalk 환경 간에 전환합니다.",
      "Java 및 PHP 로 구성된 Amazon EC2 인스턴스에 웹 애플리케이션을 배포합니다. Auto \nScaling 그룹과 Application Load Balancer 를 사용하여 웹 사이트의 가용성을 관리하십시오.",
      "웹 애플리케이션을 컨테이너화합니다. 웹 애플리케이션을 Amazon EC2 인스턴스에 \n배포합니다. AWS 로드 밸런서 컨트롤러를 사용하여 테스트용 새 사이트 기능이 포함된 \n컨테이너 간에 트래픽을 동적으로 라우팅합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87536-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nElastic Beanstalk 를 사용하면 애플리케이션을 실행하는 인프라에 대해 자세히 알지 못해도 \nAWS 클라우드에서 애플리케이션을 신속하게 배포하고 관리할 수 있습니다. \nElastic Beanstalk 는 Go, Java, .NET, Node.js, PHP, Python 및 Ruby 에서 개발된 \n애플리케이션을 지원합니다....애플리케이션을 생성 및 배포한 후에는 지표, 이벤트, 환경 \n상태 등의 애플리케이션 정보를 Elastic Beanstalk 콘솔, API 또는 통합된 AWS CLI 를 \n비롯한 명령줄 인터페이스를 통해 확인할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/Welcome.html \n \n2: \n빈번한 기능 테스트 - \n- 개발, 테스트 및 프로덕션 사용 사례를 위해 여러 Elastic Beanstalk 환경을 쉽게 생성할 \n수 있습니다. \n- 간단한 URL 스와핑 기술을 사용하여 A/B 테스트 및 기능 반복을 위한 환경 간에 \n트래픽을 라우팅할 수 있습니다. 복잡한 라우팅 규칙이나 인프라 변경이 필요하지 \n않습니다.",
    "glossary": {}
  },
  {
    "id": 191,
    "question": "회사에는 MySQL 용 Amazon RDS 에 고객 정보를 저장하는 주문 애플리케이션이 있습니다. \n정규 업무 시간 동안 직원은 보고 목적으로 일회성 쿼리를 실행합니다. 보고 쿼리를 \n실행하는 데 시간이 오래 걸리기 때문에 주문 처리 중에 시간 초과가 발생합니다. 회사는 \n직원이 쿼리를 수행하는 것을 막지 않으면서 시간 초과를 제거해야 합니다. \n\n=== PAGE 207 ===\n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "읽기 전용 복제본을 생성합니다. 보고 쿼리를 읽기 전용 복제본으로 이동합니다.",
      "읽기 전용 복제본을 생성합니다. 주문 애플리케이션을 기본 DB 인스턴스와 읽기 전용 \n복제본에 배포합니다.",
      "주문형 용량이 있는 Amazon DynamoDB 로 주문 애플리케이션을 마이그레이션합니다.",
      "사용량이 적은 시간에 보고 쿼리를 예약합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/89077-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "보고 쿼리를 읽기 전용 복제본으로 이동하면 주문 처리에 사용되는 기본 DB 인스턴스가 \n장기 실행 보고 쿼리의 영향을 받지 않습니다. 이렇게 하면 주문 처리 중 시간 초과를 \n제거하는 동시에 직원이 애플리케이션 성능에 영향을 주지 않고 쿼리를 수행할 수 \n있습니다.",
      "이것은 일정 수준의 부하 분산을 제공할 수 있지만 주문 처리 중 쿼리 보고로 인해 \n발생하는 시간 초과 문제를 구체적으로 다루지는 않습니다.",
      "DynamoDB 는 확장성과 성능상의 이점을 제공하지만 애플리케이션의 데이터 모델 및 \n쿼리 접근 방식을 크게 변경해야 할 수 있습니다.",
      "이 접근 방식은 주문 처리에 미치는 영향을 완화하는 데 도움이 될 수 있지만 직원이 \n쿼리를 수행하는 것을 막지 않고 시간 초과를 제거해야 하는 요구 사항을 해결하지는 \n못합니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 192,
    "question": "한 병원에서 대규모 기록 기록 수집을 위한 디지털 사본을 만들고자 합니다. 병원은 매일 \n수백 개의 새로운 문서를 계속 추가할 것입니다. 병원의 데이터 팀이 문서를 스캔하고 \n문서를 AWS 클라우드에 업로드합니다. \n솔루션 설계자는 애플리케이션이 데이터에 대해 SQL 쿼리를 실행할 수 있도록 문서를 \n분석하고, 의료 정보를 추출하고, 문서를 저장하는 솔루션을 구현해야 합니다. 솔루션은 \n확장성과 운영 효율성을 극대화해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "MySQL 데이터베이스를 실행하는 Amazon EC2 인스턴스에 문서 정보를 씁니다.",
      "문서 정보를 Amazon S3 버킷에 씁니다. Amazon Athena\n를 사용하여 데이터를 \n쿼리합니다. \n\n=== PAGE 208 ===",
      "Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성하여 스캔한 파일을 처리하고 의료 \n정보를 추출하는 사용자 지정 애플리케이션을 실행합니다.",
      "새 문서가 업로드될 때 실행되는 AWS Lambda 함수를 생성합니다. Amazon \nRekognition 을 사용하여 문서를 원시 텍스트로 변환합니다. Amazon Transcribe Medical 을 \n사용하여 텍스트에서 관련 의료 정보를 감지하고 추출합니다.",
      "새 문서가 업로드될 때 실행되는 AWS Lambda 함수를 생성합니다. Amazon Textract 를 \n사용하여 문서를 원시 텍스트로 변환합니다. Amazon Comprehend Medical 을 사용하여 \n텍스트에서 관련 의료 정보를 감지하고 추출합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/89133-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : AWS 클라우드에 문서를 업로드할 거라고 했으니 적절치 않음. MySQL 이 아니라 \nAmazon RDS for MySQL 이 됐던지 했어야 함. \nB(O) : S3 는 자료를 저장하는데 많이 사용되고, Athena 는 S3 에 쿼리하는 대화형 서비스임. \nAmazon Athena 는 표준 SQL 을 사용하여 Amazon S3(Amazon Simple Storage Service)에 \n있는 데이터를 직접 간편하게 분석할 수 있는 대화형 쿼리 서비스입니다. \n\ndocs.aws.amazon.com/ko_kr/athena/latest/ug/what-is.html \nC(?) : 프로그램을 AWS 에서 돌려야한다는 말이 없어서 불명확. \nD(X) : Amazon Rekognition 은 이미지나 비디오 분석 서비스인데, 문서라면 텍스트 위주라서 \n탈락. 그리고 Transcribe Medical 은 음성->텍스트 변환이지 텍스트->의료 정보 추출이 \n아님. \nAmazon Transcribe Medical 은 사용자가 의료 관련 음성 데이터를 텍스트로 변환하는 \n기능을 사용자의 음성 지원 애플리케이션에 쉽게 추가할 수 있도록 하는 자동 음성 \n인식(ASR) 서비스입니다. \n\naws.amazon.com/ko/transcribe/medical/ \nE(O) : Lambda 로 Scalabilty 확보 가능. Amazon Textract 는 이미지 등에서 텍스트를 \n추출하는 OCR 서비스로 문서화에 적합. Amazon Comprehend Medical 은 미리 학습된 기계 \n학습을 사용하여 처방전, 처치, 진단과 같은 의료 텍스트에서 의료 데이터를 파악하고 \n추출하는 서비스로 병원에서 사용하기 적합. \n확장성 : Lambda 는 코드를 실행하는 인프라를 관리하고 수신 요청에 대한 응답으로 자동 \n확장됩니다. \n\ndocs.aws.amazon.com/ko_kr/lambda/latest/dg/gettingstarted-features.html#getti\nngstarted-features-scaling \nAmazon Textract 는 스캔한 문서에서 텍스트, 필기 및 데이터를 자동으로 추출하는 기계",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구"
    }
  },
  {
    "id": 193,
    "question": "회사는 \nAmazon \nEC2 \n인스턴스에서 \n배치 \n애플리케이션을 \n실행하고 \n있습니다. \n애플리케이션은 여러 Amazon RDS 데이터베이스가 있는 백엔드로 구성됩니다. 응용 \n프로그램으로 인해 데이터베이스에서 많은 수의 읽기가 발생하고 있습니다. 솔루션 \n설계자는 고가용성을 보장하면서 데이터베이스 읽기 수를 줄여야 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon RDS 읽기 전용 복제본을 추가합니다.",
      "Redis 용 Amazon ElastiCache 를 사용합니다.",
      "Amazon Route 53 DNS 캐싱 사용",
      "Memcached 용 Amazon ElastiCache 를 사용합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/89134-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \n이 \n솔루션은 \n여러 \nAmazon \nRDS \n데이터베이스가 \n있는 \n백엔드로 \n구성된 \n배치 \n애플리케이션의 고가용성을 보장하면서 데이터베이스 읽기 수를 줄이는 요구 사항을 \n충족합니다. \nAmazon RDS 읽기 전용 복제본은 읽기 전용 트래픽을 처리할 수 있는 기본 데이터베이스 \n인스턴스의 복사본입니다. 기본 데이터베이스 인스턴스에 대해 하나 이상의 읽기 전용 \n복제본을 만들고 특수 엔드포인트를 사용하여 연결할 수 있습니다. 읽기 전용 복제본은 \n기본 데이터베이스 인스턴스에서 읽기 쿼리를 오프로드하여 애플리케이션의 성능과 \n가용성을 향상시킬 수 있습니다. \n \nRedis 용 Amazon ElastiCache 를 사용하면 자주 액세스하는 데이터를 캐시할 수 있는 빠른 \n인 메모리 데이터 스토어를 제공할 수 있지만 Amazon RDS 데이터베이스에서 복제를 \n지원하지 않기 때문에 옵션 B 는 올바르지 않습니다. \n \n\n=== PAGE 211 ===\nAmazon Route 53 DNS 캐싱을 사용하면 DNS 쿼리의 성능과 가용성을 개선할 수 있지만 \n데이터베이스 읽기 수는 줄어들지 않기 때문에 옵션 C 는 올바르지 않습니다. \n \nMemcached 용 Amazon ElastiCache 를 사용하면 자주 액세스하는 데이터를 캐시할 수 있는 \n빠른 메모리 데이터 스토어를 제공할 수 있지만 Amazon RDS 데이터베이스에서 복제를 \n지원하지 않기 때문에 옵션 D 는 올바르지 않습니다. \n \n설명2: \nAmazon RDS 데이터베이스에 읽기 전용 복제본을 추가하면 읽기 워크로드를 복제본으로 \n오프로드하여 데이터베이스 읽기 수를 줄이고 성능을 향상할 수 있습니다. 읽기 전용 \n복제본은 고가용성을 제공하고 읽기 트래픽을 독립적으로 처리하여 로드를 분산하고 기본 \n데이터베이스의 부담을 줄일 수 있습니다.",
      "Redis 용 Amazon ElastiCache 는 주로 캐싱에 사용되는 인 메모리 데이터 스토어로, 읽기 \n성능을 향상시킬 수 있지만 데이터베이스 읽기 수를 직접적으로 줄이지는 않습니다.",
      "Amazon Route 53 DNS 캐싱은 DNS 응답을 캐시하는 서비스로, 전체 네트워크 성능을 \n향상시킬 수 있지만 데이터베이스 읽기 감소를 구체적으로 다루지는 않습니다.",
      "Memcached 용 Amazon ElastiCache 는 Redis 와 유사한 또 다른 캐싱 서비스이지만 \n데이터베이스 읽기 감소 문제를 직접적으로 해결하지는 않습니다. \n \n참조: \nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 194,
    "question": "회사는 AWS\n에서 중요한 애플리케이션을 실행해야 합니다. 회사는 애플리케이션의 \n데이터베이스에 Amazon EC2 를 사용해야 합니다. 데이터베이스는 가용성이 높아야 하며 \n중단 이벤트가 발생할 경우 자동으로 장애 조치되어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "동일한 AWS 지역의 다른 가용 영역에서 각각 두 개의 EC2 인스턴스를 시작합니다. 두 \nEC2 인스턴스 모두에 데이터베이스를 설치합니다. EC2 인스턴스를 클러스터로 구성합니다. \n데이터베이스 복제를 설정합니다.",
      "가용 영역에서 EC2 인스턴스를 시작합니다. EC2 인스턴스에 데이터베이스를 설치합니다. \nAmazon 머신 이미지(AMI)를 사용하여 데이터를 백업하십시오. 중단 이벤트가 발생할 경우 \nAWS CloudFormation 을 사용하여 EC2 인스턴스의 프로비저닝을 자동화하십시오.",
      "각각 다른 AWS 지역에서 두 개의 EC2 인스턴스를 시작합니다. 두 EC2 인스턴스 \n모두에 데이터베이스를 설치합니다. 데이터베이스 복제를 설정합니다. 데이터베이스를 두 \n\n=== PAGE 212 ===\n번째 리전으로 장애 조치합니다.",
      "가용 영역에서 EC2 인스턴스를 시작합니다. EC2 인스턴스에 데이터베이스를 설치합니다. \nAmazon 머신 이미지(AMI)를 사용하여 데이터를 백업하십시오. 중단 이벤트가 발생하면 \nEC2 자동 복구를 사용하여 인스턴스를 복구하십시오. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/89136-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명: \n서로 다른 가용 영역에서 두 개의 EC2 인스턴스를 시작하고 데이터베이스 복제가 있는 \n클러스터로 구성하면 데이터베이스에서 고가용성과 자동 장애 조치를 달성할 수 있습니다. \n한 인스턴스 또는 가용 영역을 사용할 수 없게 되더라도 다른 인스턴스는 중단 없이 \n애플리케이션을 계속 제공할 수 있습니다.",
      "단일 EC2 인스턴스를 시작하고 백업 및 프로비저닝 자동화를 위해 AMI 를 사용하면 \n자동 장애 조치 또는 고가용성이 제공되지 않습니다.",
      "다른 AWS 리전에서 EC2 인스턴스를 시작하고 데이터베이스 복제를 설정하는 것은 \n재해 복구 기능을 제공할 수 있지만 단일 리전 내에서 자동 장애 조치를 제공하지 않는 \n다중 리전 설정입니다.",
      "EC2 자동 복구를 사용하면 하드웨어 문제로 인해 인스턴스가 실패하는 경우 인스턴스를 \n복구할 수 있지만 여러 인스턴스 또는 가용 영역에서 자동 장애 조치 또는 고가용성을 \n제공하지는 않습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 195,
    "question": "회사의 주문 시스템은 클라이언트의 요청을 Amazon EC2 인스턴스로 보냅니다. EC2 \n인스턴스는 주문을 처리한 다음 Amazon RDS\n의 데이터베이스에 주문을 저장합니다. \n사용자는 시스템이 실패하면 주문을 다시 처리해야 한다고 보고합니다. 회사는 시스템 \n중단이 발생할 경우 주문을 자동으로 처리할 수 있는 탄력적인 솔루션을 원합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "EC2 인스턴스를 Auto Scaling 그룹으로 이동합니다. Amazon Elastic Container \nService(Amazon ECS) 작업을 대상으로 하는 Amazon EventBridge(Amazon CloudWatch \nEvents) 규칙을 생성합니다.",
      "Application Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹으로 EC2 인스턴스를 \n이동합니다. ALB 엔드포인트에 메시지를 보내도록 주문 시스템을 업데이트합니다.",
      "EC2 인스턴스를 Auto Scaling 그룹으로 이동합니다. Amazon Simple Queue \nService(Amazon SQS) 대기열로 메시지를 보내도록 주문 시스템을 구성합니다. 대기열의 \n\n=== PAGE 213 ===\n메시지를 사용하도록 EC2 인스턴스를 구성합니다.",
      "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. AWS Lambda \n함수를 생성하고 함수를 SNS 주제에 구독합니다. SNS 주제에 메시지를 보내도록 주문 \n시스템을 구성합니다. AWS Systems Manager Run Command\n를 사용하여 메시지를 \n처리하도록 EC2 인스턴스에 명령을 보냅니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/89138-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nSQS 는 Dead Letter Queue 등 다양한 옵션으로 메시지 처리가 실패했을 경우 해당 \n메시지를 보관했다가 다시 처리할 수 있게끔 하는 기능을 제공하고 있음. \n \n2: \n시스템 중단 시 자동으로 주문을 처리할 수 있는 탄력적인 솔루션을 보유해야 한다는 \n회사의 요구 사항을 충족하려면 솔루션 설계자가 내결함성 아키텍처를 구현해야 합니다. \n주어진 시나리오에 따라 가능한 솔루션은 EC2 인스턴스를 Auto Scaling 그룹으로 이동하고 \n메시지를 Amazon Simple Queue Service(Amazon SQS) 대기열로 보내도록 주문 시스템을 \n구성하는 것입니다. 그런 다음 EC2 인스턴스는 대기열의 메시지를 사용할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 196,
    "question": "회사는 \n대규모 \nAmazon \nEC2 \n인스턴스 \n플릿에서 \n애플리케이션을 \n실행합니다. \n애플리케이션은 항목을 읽고 Amazon DynamoDB 테이블에 씁니다. DynamoDB 테이블의 \n크기는 지속적으로 증가하지만 애플리케이션에는 지난 30 일 동안의 데이터만 필요합니다. \n회사는 비용과 개발 노력을 최소화하는 솔루션이 필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS CloudFormation 템플릿을 사용하여 전체 솔루션을 배포합니다. 30\n일마다 \nCloudFormation 스택을 재배포하고 원래 스택을 삭제합니다.",
      "AWS Marketplace 에서 모니터링 애플리케이션을 실행하는 EC2 인스턴스를 사용합니다. \nAmazon DynamoDB Streams 를 사용하여 테이블에 새 항목이 생성될 때 타임스탬프를 \n저장하도록 모니터링 애플리케이션을 구성합니다. EC2 인스턴스에서 실행되는 스크립트를 \n사용하여 30 일보다 오래된 타임스탬프가 있는 항목을 삭제합니다.",
      "테이블에 새 항목이 생성될 때 AWS Lambda 함수를 호출하도록 Amazon DynamoDB \nStreams 를 구성합니다. 테이블에서 30 일보다 오래된 항목을 삭제하도록 Lambda 함수를 \n구성합니다. \n\n=== PAGE 214 ===",
      "애플리케이션을 확장하여 현재 타임스탬프에 30 일을 더한 값을 테이블에 생성된 각 새 \n항목에 추가하는 속성을 추가합니다. 속성을 TTL 속성으로 사용하도록 DynamoDB\n를 \n구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/89140-exam-aws-certified-solut \nions-architect-associate-saa-c03/ \n \n해설1: \n30 일 동안의 데이터만 필요하다고 했으니 30 일이 지나면 자동 삭제되도록 하는 기능이 \n필요. \nA(X) : 30 일마다 재배포하는 것은 번거로움. \nB(X) : 스크립트를 사용하는 것은 스크립트를 짜야하므로 번거로움. \nC(X) : Lambda 함수를 매번 쓰는 것은 비용 효율성 면에서 좋지 않고 Lambda 코드 짜는 \n것도 번거로움. \nD(O) : TTL 속성을 사용하면 별다른 코딩이나 노력 없이 설정만 해두면 자동으로 \n삭제되므로 간편함. \nAmazon DynamoDB TTL(Time to Live)을 사용하면 항목별 타임스탬프를 정의하여 항목이 더 \n이상 필요하지 않은 시기를 결정할 수 있습니다. 지정된 타임스탬프의 날짜 및 시간 직후 \nDynamoDB 는 쓰기 처리량을 소모하지 않고 테이블에서 항목을 삭제합니다. \n\ndocs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html \n \n2: \nAmazon DynamoDB TTL(Time to Live)을 사용하면 항목별 타임스탬프를 정의하여 항목이 더 \n이상 필요하지 않은 시기를 결정할 수 있습니다. 지정된 타임스탬프의 날짜 및 시간 직후 \nDynamoDB\n는 쓰기 처리량을 소비하지 않고 테이블에서 항목을 삭제합니다. TTL\n은 \n워크로드 요구 사항에 따라 최신 상태로 유지되는 항목만 유지하여 저장된 데이터 볼륨을 \n줄이는 수단으로 추가 비용 없이 제공됩니다. TTL 은 특정 시간이 지나면 관련성을 잃는 \n항목을 저장할 때 유용합니다. \n다음은 TTL 사용 사례의 예입니다. \n애플리케이션에서 1 년 동안 활동이 없으면 사용자 또는 센서 데이터를 제거합니다. 만료된 \n항목을 Amazon DynamoDB Streams 및 AWS Lambda 를 통해 Amazon S3 데이터 레이크에 \n보관합니다. 계약 또는 규제 의무에 따라 일정 기간 동안 민감한 데이터를 보관합니다. \n\ndocs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 197,
    "question": "=== PAGE 215 ===\n회사에는 온프레미스 Windows Server\n에서 실행되는 Microsoft .NET 애플리케이션이 \n있습니다. 애플리케이션은 Oracle Database Standard 를 사용하여 데이터를 저장합니다. \n에디션 서버. 이 회사는 AWS\n로의 마이그레이션을 계획하고 있으며 애플리케이션을 \n이동하는 동안 개발 변경을 최소화하려고 합니다. AWS 애플리케이션 환경은 가용성이 \n높아야 합니다. \n이러한 요구 사항을 충족하기 위해 회사는 어떤 조합의 조치를 취해야 합니까? (두 가지를 \n선택하세요.)",
    "options": [
      ".NET Core 를 실행하는 AWS Lambda 함수를 사용하여 애플리케이션을 서버리스로 \n리팩터링합니다.",
      "다중 AZ 배포에서 .NET 플랫폼을 사용하여 AWS Elastic Beanstalk 에서 애플리케이션을 \n다시 호스팅합니다.",
      "Amazon Linux Amazon 머신 이미지(AMI)를 사용하여 Amazon EC2 에서 실행되도록 \n애플리케이션 플랫폼을 변경합니다.",
      "다중 AZ 배포에서 AWS DMS(AWS Database Migration Service)를 사용하여 Oracle \n데이터베이스에서 Amazon DynamoDB 로 마이그레이션합니다.",
      "다중 AZ 배포에서 AWS Database Migration Service(AWS DMS)를 사용하여 Oracle \n데이터베이스에서 Amazon RDS 의 Oracle 로 마이그레이션합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/89068-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 리팩터링은 코드 변경을 수반하므로 개발 변경 사항 최소화 조건 불충족. \nB(O) : AWS Elastic Beanstalk.NET 용 에서 Amazon Web Services 를 사용하는 ASP.NET 웹 \n애플리케이션을 보다 쉽게 배포, 관리 및 조정할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/create_deploy_NET.html \nC(X) : 재플랫폼화는 개발 변경 사항 최소화 조건 불충족. \nD(X) : Oracle 데이터베이스는 관계형 데이터베이스이고, DynamoDB\n는 비관계형 \n데이터베이스로 유형이 다름. 개발 변경 최소화 조건 불충족. \nE(O) : 다중 AZ 배포로 고가용성 조건 충족. DMS 서비스로 데이터베이스 마이그레이션 \n가능. RDS for Oracle 로 개발 변경 최소화 가능. \n \n2: \n애플리케이션을 AWS 로 이동하는 동안 개발 변경을 최소화하고 높은 수준의 가용성을 \n보장하기 위해 회사는 다중 AZ 배포에서 .NET 플랫폼을 사용하여 AWS Elastic \nBeanstalk 에서 애플리케이션을 다시 호스팅할 수 있습니다. 이렇게 하면 애플리케이션",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 198,
    "question": "회사는 온프레미스 데이터 센터의 Kubernetes 클러스터에서 컨테이너화된 애플리케이션을 \n실행합니다. 회사는 데이터 저장을 위해 MongoDB 데이터베이스를 사용하고 있습니다. \n회사는 이러한 환경 중 일부를 AWS\n로 마이그레이션하려고 하지만 현재로서는 코드 \n변경이나 배포 방법 변경이 불가능합니다. 회사는 운영 오버헤드를 최소화하는 솔루션이 \n필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "컴퓨팅을 위해 Amazon EC2 작업자 노드와 함께 Amazon Elastic Container \nService(Amazon ECS)를 사용하고 데이터 저장을 위해 EC2 의 MongoDB 를 사용합니다.",
      "컴퓨팅용 AWS Fargate 및 데이터 저장용 Amazon DynamoDB 와 함께 Amazon Elastic \nContainer Service(Amazon ECS)를 사용합니다.",
      "Amazon Elastic Kubernetes Service(Amazon EKS)를 Amazon EC2 작업자 노드와 함께 \n컴퓨팅용으로 사용하고 Amazon DynamoDB 를 데이터 저장용으로 사용합니다.",
      "컴퓨팅용 AWS Fargate 및 데이터 스토리지용 Amazon DocumentDB(MongoDB 호환)와 \n함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/89078-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nKubernetes 클러스터 = EKS \nMongoDB 호환 = DocumentDB \n \n2: \nAmazon DocumentDB(MongoDB\n와 호환)는 빠르고 안정적이며 완벽하게 관리되는 \n데이터베이스 서비스입니다. \nAmazon DocumentDB 를 사용하면 클라우드에서 MongoDB 호환 데이터베이스를 쉽게 설정, \n운영 및 확장할 수 있습니다. Amazon DocumentDB 를 사용하면 동일한 애플리케이션 \n코드를 실행하고 MongoDB 에서 사용하는 것과 동일한 드라이버 및 도구를 사용할 수",
    "glossary": {}
  },
  {
    "id": 199,
    "question": "텔레마케팅 회사는 AWS 에서 고객 콜 센터 기능을 설계하고 있습니다. 이 회사는 여러 \n화자 인식을 제공하고 대본 파일을 생성하는 솔루션이 필요합니다. 회사는 비즈니스 패턴을 \n분석하기 위해 트랜스크립트 파일을 쿼리하려고 합니다. 기록 파일은 감사 목적으로 7 년 \n동안 저장되어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "여러 화자 인식을 위해 Amazon Rekognition 을 사용하십시오. 성적표 파일을 Amazon \nS3 에 저장합니다. 성적표 파일 분석을 위해 기계 학습 모델을 사용합니다.",
      "여러 화자 인식을 위해 Amazon Transcribe 를 사용합니다. 성적표 파일 분석에 Amazon \nAthena 를 사용합니다.",
      "여러 화자 인식을 위해 Amazon Translate 를 사용합니다. Amazon Redshift 에 기록 \n파일을 저장합니다. 성적표 파일 분석에 SQL 쿼리를 사용합니다.",
      "여러 화자 인식을 위해 Amazon Rekognition 을 사용합니다. 성적표 파일을 Amazon \nS3 에 저장합니다. 성적표 파일 분석에 Amazon Textract 를 사용하십시오."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/89141-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : Amazon Rekognition 은 이미지/비디오 분석 서비스. 콜센터라고 했으므로 오디오를 \n다른 걸로 변환시켜주는 서비스가 필요하므로 오답. \nAmazon Rekognition 은 애플리케이션에 강력한 시각 분석 기능을 쉽게 추가할 수 있게 해 \n주는 서비스입니다. Rekognition Image 를 통해 수백만 개의 이미지를 검색, 확인 및 구성할 \n수 있는 강력한 애플리케이션을 쉽게 구축할 수 있습니다. Rekognition Video 를 통해 \n저장된 동영상 또는 실시간 스트림 동영상에서 동작 기반 컨텍스트를 추출하고 이를 분석할 \n수 있습니다. \naws.amazon.com/ko/rekognition/faqs/ \nB(O) : Amazon Transcribe 로 다중 Speaker 인식 가능. 7 년 동안 저장해야한다고 했으므로 \nS3 같은 스토리지 서비스가 필요한데, 해당 선택지에서는 S3 가 언급은 되지 않았으나 \nS3 에 쿼리하는 Athena 가 있으므로 S3 를 사용하고 있다고 추측할 수 있음. \nAmazon Transcribe\n는 고객이 손쉽게 음성을 텍스트로 변환할 수 있게 해주는 AWS \n서비스입니다. \naws.amazon.com/ko/transcribe/faqs/ \nC(X) : Amazon Translate 는 기계 번역 서비스.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구"
    }
  },
  {
    "id": 200,
    "question": "회사는 AWS 에서 애플리케이션을 호스팅합니다. 이 회사는 Amazon Cognito 를 사용하여 \n사용자를 관리합니다. 사용자가 애플리케이션에 로그인하면 애플리케이션은 Amazon API \nGateway 에서 호스팅되는 REST API 를 사용하여 Amazon DynamoDB 에서 필요한 데이터를 \n가져옵니다. 이 회사는 개발 노력을 줄이기 위해 REST API 에 대한 액세스를 제어하는 AWS \n관리형 솔루션을 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "어떤 사용자가 요청했는지 확인하기 위해 API Gateway 에서 권한 부여자가 되도록 AWS \nLambda 함수를 구성합니다.",
      "각 사용자에 대해 각 요청과 함께 전송되어야 하는 API 키를 생성하고 할당합니다. AWS \nLambda 함수를 사용하여 키를 검증합니다.",
      "모든 요청과 함께 헤더에 사용자의 이메일 주소를 보냅니다. 해당 이메일 주소를 가진 \n사용자에게 적절한 액세스 권한이 있는지 확인하려면 AWS Lambda 함수를 호출하십시오.",
      "Amazon Cognito 가 각 요청을 검증할 수 있도록 API Gateway 에서 Amazon Cognito \n사용자 풀 권한 부여자를 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/89142-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAmazon Cognito 콘솔, CLI/SDK 또는 API 를 사용하여 사용자 풀을 만들거나 다른 AWS",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  }
];