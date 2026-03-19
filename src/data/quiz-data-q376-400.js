export const quizData = [
  {
    "id": 376,
    "question": "한 회사에서 MySQL DB 인스턴스용 Amazon RDS 를 출시했습니다. 데이터베이스에 대한 \n대부분의 \n연결은 \n서버리스 \n애플리케이션에서 \n발생합니다. \n데이터베이스에 \n대한 \n애플리케이션 트래픽은 임의의 간격으로 크게 변경됩니다. 수요가 많을 때 사용자는 \n애플리케이션에 데이터베이스 연결 거부 오류가 발생한다고 보고합니다. \n최소한의 운영 오버헤드로 이 문제를 해결하는 솔루션은 무엇입니까?",
    "options": [
      "RDS Proxy 에서 프록시를 생성합니다. RDS Proxy 를 통해 DB 인스턴스를 사용하도록 \n사용자 애플리케이션을 구성합니다.",
      "사용자 애플리케이션과 DB 인스턴스 간에 Amazon ElastiCache for Memcached 를 \n배포합니다.",
      "I/O 용량이 더 큰 다른 인스턴스 클래스로 DB 인스턴스를 마이그레이션합니다. 새 DB \n인스턴스를 사용하도록 사용자 애플리케이션을 구성합니다.",
      "DB 인스턴스에 대한 다중 AZ 를 구성합니다. DB 인스턴스 간에 전환하도록 사용자 \n애플리케이션을 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102140-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n최신 \n서버리스 \n아키텍처에 \n구축된 \n애플리케이션을 \n포함하여 \n많은 \n애플리케이션은 \n데이터베이스 서버에 대해 많은 수의 열린 연결을 가질 수 있으며 빠른 속도로 \n데이터베이스 연결을 열고 닫을 수 있으므로 데이터베이스 메모리와 컴퓨팅 리소스가 \n고갈될 수 있습니다. Amazon RDS Proxy 를 사용하면 애플리케이션이 데이터베이스와 \n설정된 연결을 풀링하고 공유하여 데이터베이스 효율성과 애플리케이션 확장성을 개선할 수 \n있습니다.  \n(\naws.amazon.com/pt/rds/proxy/)",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 377,
    "question": "한 회사는 최근 Amazon EC2 인스턴스에 대해 운영 체제 버전, 패치 및 설치된 \n소프트웨어에 대한 정보를 중앙 집중화하기 위해 새로운 감사 시스템을 배포했습니다. \n\n=== PAGE 388 ===\n솔루션 설계자는 EC2 Auto Scaling 그룹을 통해 프로비저닝된 모든 인스턴스가 시작 및 \n종료되는 즉시 성공적으로 감사 시스템에 보고서를 보내도록 해야 합니다. \n이러한 목표를 가장 효율적으로 달성하는 솔루션은 무엇입니까?",
    "options": [
      "예약된 AWS Lambda 함수를 사용하고 모든 EC2 인스턴스에서 원격으로 스크립트를 \n실행하여 데이터를 감사 시스템으로 보냅니다.",
      "EC2 Auto Scaling 수명 주기 후크를 사용하여 인스턴스가 시작되고 종료될 때 감사 \n시스템에 데이터를 보내는 사용자 지정 스크립트를 실행합니다.",
      "EC2 Auto Scaling 시작 구성을 사용하여 사용자 데이터를 통해 사용자 지정 스크립트를 \n실행하여 인스턴스가 시작되고 종료될 때 감사 시스템에 데이터를 보냅니다.",
      "인스턴스 운영 체제에서 사용자 지정 스크립트를 실행하여 데이터를 감사 시스템으로 \n보냅니다. 인스턴스가 시작되고 종료될 때 EC2 Auto Scaling 그룹에서 호출할 스크립트를 \n구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102142-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon EC2 Auto Scaling 은 Auto Scaling 그룹에 수명 주기 후크를 추가하는 기능을 \n제공합니다. 이러한 후크를 사용하면 Auto Scaling 인스턴스 수명 주기의 이벤트를 \n인식하는 솔루션을 생성한 다음 해당 수명 주기 이벤트가 발생할 때 인스턴스에서 사용자 \n지정 작업을 수행할 수 있습니다. \n(\ndocs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html)",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 378,
    "question": "한 회사에서 Auto Scaling 그룹의 클라이언트와 서버 간의 통신에 UDP 를 사용하는 실시간 \n멀티플레이어 게임을 개발하고 있습니다. 하루 동안 수요가 급증할 것으로 예상되므로 게임 \n서버 플랫폼은 그에 따라 적응해야 합니다. 개발자는 개입 없이 확장되는 데이터베이스 \n솔루션에 게이머 점수 및 기타 비관계형 데이터를 저장하기를 원합니다. \n솔루션 설계자는 어떤 솔루션을 추천해야 합니까?",
    "options": [
      "트래픽 분산에는 Amazon Route 53 을 사용하고 데이터 저장에는 Amazon Aurora \nServerless 를 사용하십시오.",
      "트래픽 분산을 위해 Network Load Balancer 를 사용하고 데이터 저장을 위해 주문형 \nAmazon DynamoDB 를 사용합니다.",
      "트래픽 분산을 위해 Network Load Balancer 를 사용하고 데이터 저장을 위해 Amazon \nAurora Global Database 를 사용합니다. \n\n=== PAGE 389 ===",
      "트래픽 분산을 위해 Application Load Balancer\n를 사용하고 데이터 저장을 위해 \nAmazon DynamoDB 전역 테이블을 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102143-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nNetwork Load Balancer 는 연결 수준(계층 4)에서 작동하고 TCP 및 UDP 트래픽 모두의 \n부하를 분산할 수 있는 일종의 부하 분산 장치입니다. Network Load Balancer 는 실시간 \n멀티플레이어 게임과 같이 고성능과 짧은 대기 시간이 필요한 시나리오에 적합합니다. \nNetwork Load Balancer 는 가용 영역당 단일 고정 IP 주소를 사용하면서 갑작스럽고 \n변동성이 큰 트래픽 패턴을 처리할 수도 있습니다. \n시나리오의 요구 사항을 충족하려면 솔루션 설계자는 Auto Scaling 그룹의 EC2 인스턴스 \n간 트래픽 분산을 위해 Network Load Balancer\n를 사용해야 합니다. Network Load \nBalancer 는 클라이언트에서 적절한 포트의 서버로 UDP 트래픽을 라우팅할 수 있습니다. \nNetwork Load Balancer 는 클라이언트와 서버 간의 보안 통신을 위해 TLS 오프로딩도 \n지원할 수 있습니다. \nAmazon DynamoDB 는 일관된 성능과 짧은 지연 시간으로 모든 양의 데이터를 저장하고 \n검색할 수 있는 완전 관리형 NoSQL 데이터베이스 서비스입니다. Amazon DynamoDB \n온디맨드는 용량 계획이 필요 없고 테이블에서 수행되는 읽기 및 쓰기 요청에 대해서만 \n요금을 부과하는 유연한 결제 옵션입니다\n3. Amazon DynamoDB 온디맨드는 게임 \n애플리케이션과 같이 애플리케이션 트래픽을 예측할 수 없거나 산발적인 시나리오에 \n이상적입니다. \n시나리오의 요구 사항을 충족하려면 솔루션 설계자는 데이터 스토리지에 Amazon \nDynamoDB 온디맨드를 사용해야 합니다. Amazon DynamoDB 온디맨드는 개발자의 개입 \n없이 게이머 점수 및 기타 비관계형 데이터를 저장할 수 있습니다. Amazon DynamoDB \n온디맨드는 자동으로 확장하여 성능이나 가용성에 영향을 주지 않고 모든 수준의 요청 \n트래픽을 처리할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 379,
    "question": "회사는 AWS Lambda 와 통합된 Amazon API Gateway API 백엔드를 사용하는 프런트엔드 \n애플리케이션을 호스팅합니다. API 가 요청을 받으면 Lambda 함수는 많은 라이브러리를 \n로드합니다. 그런 다음 Lambda 함수는 Amazon RDS 데이터베이스에 연결하여 데이터를 \n처리하고 프런트엔드 애플리케이션에 데이터를 반환합니다. 회사는 회사 운영에 대한 변경 \n횟수를 최소화하면서 모든 사용자의 응답 대기 시간을 가능한 한 낮추고자 합니다. \n\n=== PAGE 390 ===\n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "API 를 우회하여 쿼리 속도를 높이려면 프런트엔드 애플리케이션과 데이터베이스 사이에 \n연결을 설정합니다.",
      "요청을 처리하는 Lambda 함수에 대해 프로비저닝된 동시성을 구성합니다.",
      "유사한 데이터 세트를 더 빠르게 검색하기 위해 쿼리 결과를 Amazon S3 에 캐시합니다.",
      "Lambda 가 한 번에 설정할 수 있는 연결 수를 늘리려면 데이터베이스 크기를 늘립니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102144-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n요청을 처리하는 Lambda 함수에 대해 프로비저닝된 동시성을 구성합니다. 프로비저닝된 \n동시성을 사용하면 Lambda 함수에서 사용할 수 있는 컴퓨팅 리소스의 양을 설정할 수 \n있으므로 한 번에 더 많은 요청을 처리하고 지연 시간을 줄일 수 있습니다. 쿼리 결과를 \nAmazon S3 에 캐싱하면 대기 시간을 줄이는 데 도움이 되지만 프로비저닝된 동시성을 \n설정하는 것만큼 효과적이지는 않습니다. 데이터베이스 크기를 늘려도 지연 시간을 줄이는 \n데 도움이 되지 않습니다. 이는 Lambda 함수가 설정할 수 있는 연결 수를 늘리지 않고 \n프런트엔드 애플리케이션과 데이터베이스 사이에 직접 연결을 설정하면 API 를 우회하기 \n때문입니다. 최고의 솔루션 중 하나입니다. \n\ndocs.aws.amazon.com/lambda/latest/dg/services-apigateway.html \nUsing AWS Lambda with Amazon API Gateway - AWS Lambda \n\ndocs.aws.amazon.com/lambda/latest/dg/services-apigateway.html \n\naws.amazon.com/lambda/faqs/ \nAWS Lambda FAQs \n\naws.amazon.com/lambda/faqs/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 380,
    "question": "회사에서 온프레미스 워크로드를 AWS 클라우드로 마이그레이션하고 있습니다. 이 회사는 \n이미 여러 Amazon EC2 인스턴스와 Amazon RDS DB 인스턴스를 사용하고 있습니다. \n회사는 업무 시간 외에 EC2 인스턴스와 DB 인스턴스를 자동으로 시작하고 중지하는 \n솔루션을 원합니다. 솔루션은 비용 및 인프라 유지 관리를 최소화해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "탄력적 크기 조정을 사용하여 EC2 인스턴스를 확장합니다. 업무 시간 외에는 DB \n인스턴스를 0 으로 조정합니다.",
      "일정에 따라 EC2 인스턴스와 DB 인스턴스를 자동으로 시작 및 중지하는 파트너 \n\n=== PAGE 391 ===\n솔루션에 대한 AWS Marketplace 를 살펴보십시오.",
      "다른 EC2 인스턴스를 시작합니다. 일정에 따라 기존 EC2 인스턴스와 DB 인스턴스를 \n시작 및 중지하는 셸 스크립트를 실행하도록 crontab 일정을 구성합니다.",
      "EC2 인스턴스와 DB 인스턴스를 시작하고 중지할 AWS Lambda 함수를 생성합니다. \n일정에 따라 Lambda 함수를 호출하도록 Amazon EventBridge 를 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102145-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n비용 및 인프라 유지 관리를 최소화하면서 일정에 따라 EC2 인스턴스 및 DB 인스턴스를 \n자동으로 시작 및 중지하는 가장 효율적인 솔루션은 AWS Lambda 함수를 생성하고 일정에 \n따라 함수를 호출하도록 Amazon EventBridge 를 구성하는 것입니다. \n옵션 A, 탄력적 크기 조정을 사용하여 EC2 인스턴스를 확장하고 업무 시간 외에 DB \n인스턴스를 0 으로 확장하는 것은 DB 인스턴스를 0 으로 확장할 수 없기 때문에 실행 \n불가능합니다. \n파트너 솔루션에 대한 AWS Marketplace 를 탐색하는 옵션 B 가 옵션일 수 있지만 가장 \n효율적인 솔루션이 아닐 수 있으며 잠재적으로 추가 비용이 추가될 수 있습니다. \n다른 EC2 인스턴스를 시작하고 일정에 따라 기존 EC2 인스턴스 및 DB 인스턴스를 시작 \n및 중지하는 셸 스크립트를 실행하도록 crontab 일정을 구성하는 옵션 C 는 불필요한 \n인프라 및 유지 관리를 추가합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 381,
    "question": "회사에서 PostgreSQL 데이터베이스를 포함하는 3 계층 웹 애플리케이션을 호스팅합니다. \n데이터베이스는 문서의 메타데이터를 저장합니다. 회사는 매달 보고서에서 회사가 검토하는 \n문서를 검색하기 위해 핵심 용어에 대한 메타데이터를 검색합니다. 문서는 Amazon S3 에 \n저장됩니다. 문서는 일반적으로 한 번만 작성되지만 자주 업데이트됩니다. \n보고 프로세스는 관계형 쿼리를 사용하여 몇 시간이 걸립니다. 보고 프로세스는 문서 수정 \n또는 새 문서 추가를 방해해서는 안 됩니다. 솔루션 설계자는 보고 프로세스의 속도를 \n높이는 솔루션을 구현해야 합니다. \n애플리케이션 코드를 최소한으로 변경하여 이러한 요구 사항을 충족하는 솔루션은 \n무엇입니까?",
    "options": [
      "읽기 전용 복제본이 포함된 새로운 Amazon DocumentDB(MongoDB 호환) 클러스터를 \n설정합니다. 읽기 복제본을 확장하여 보고서를 생성합니다.",
      "Aurora 복제본이 포함된 새로운 Amazon Aurora PostgreSQL DB 클러스터를 설정합니다. \n\n=== PAGE 392 ===\nAurora 복제본에 쿼리를 실행하여 보고서를 생성합니다.",
      "PostgreSQL 다중 AZ DB 인스턴스용 새 Amazon RDS 를 설정합니다. 보고 모듈이 기본 \n노드에 영향을 주지 않도록 보조 RDS 노드를 쿼리하도록 보고 모듈을 구성합니다.",
      "문서를 저장할 새 Amazon DynamoDB 테이블을 설정합니다. 새 문서 항목을 \n지원하려면 고정된 쓰기 용량을 사용하십시오. 보고서를 지원하기 위해 읽기 용량을 \n자동으로 확장합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102147-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 382,
    "question": "회사는 AWS 에 사용자 장치에서 센서 데이터를 수집하는 3 계층 애플리케이션을 보유하고 \n있습니다. 트래픽은 NLB(Network Load Balancer)를 거쳐 웹 계층용 Amazon EC2 \n인스턴스로 이동한 다음 마지막으로 애플리케이션 계층용 EC2 인스턴스로 이동합니다. \n애플리케이션 계층은 데이터베이스를 호출합니다. \n솔루션 설계자는 전송 중인 데이터의 보안을 개선하기 위해 무엇을 해야 합니까?",
    "options": [
      "TLS 수신기를 구성합니다. NLB 에 서버 인증서를 배포합니다.",
      "AWS Shield Advanced 를 구성합니다. NLB 에서 AWS WAF 를 활성화합니다.",
      "로드 밸런서를 Application Load Balancer(ALB)로 변경합니다. ALB 에서 AWS WAF 를 \n활성화합니다.",
      "AWS Key Management Service(AWS KMS)를 사용하여 EC2 인스턴스에서 Amazon \nElastic Block Store(Amazon EBS) 볼륨을 암호화합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102149-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n1: \n전송 중인 데이터의 보안을 개선하는 가장 좋은 옵션은 TLS 수신기를 구성하고 NLB 에 \n서버 인증서를 배포하는 것입니다. 이렇게 하면 데이터가 네트워크를 통해 이동할 때 \n암호화되고 안전해집니다. 또한 AWS Shield Advanced 를 구성하고 NLB 에서 AWS WAF 를 \n활성화하여 악의적인 공격으로부터 네트워크를 추가로 보호할 수도 있습니다. 또는 로드 \n밸런서를 Application Load Balancer(ALB)로 변경하고 ALB 에서 AWS WAF 를 활성화할 수도 \n있습니다. \n마지막으로 AWS Key Management Service(AWS KMS)를 사용하여 EC2 인스턴스에서 \nAmazon Elastic Block Store(Amazon EBS) 볼륨을 암호화할 수도 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 383,
    "question": "한 회사가 온프레미스 데이터 센터에서 AWS 로 상용 기성 애플리케이션을 마이그레이션할 \n계획입니다. 이 소프트웨어에는 용량 및 가동 시간 요구 사항을 예측할 수 있는 소켓과 \n코어를 사용하는 소프트웨어 라이센스 모델이 있습니다. 회사는 올해 초에 구입한 기존 \n라이센스를 사용하려고 합니다. \n가장 비용 효율적인 Amazon EC2 요금 옵션은 무엇입니까?",
    "options": [
      "전용 예약 호스트(Dedicated Reserved Hosts)",
      "전용 온디맨드 호스트(Dedicated On-Demand Hosts)",
      "전용 예약 인스턴스(Dedicated Reserved Instances)",
      "전용 온디맨드 인스턴스(Dedicated On-Demand Instances)"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102150-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 384,
    "question": "회사는 여러 가용 영역에 걸쳐 Amazon EC2 Linux 인스턴스에서 애플리케이션을 \n실행합니다. 애플리케이션에는 고가용성 및 POSIX(Portable Operating System Interface) \n호환 스토리지 계층이 필요합니다. 스토리지 계층은 최대 데이터 내구성을 제공해야 하며 \nEC2 인스턴스 간에 공유 가능해야 합니다. 저장소 계층의 데이터는 처음 30 일 동안 자주 \n액세스되고 그 이후에는 드물게 액세스됩니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 Standard 스토리지 클래스를 사용하십시오. S3 수명 주기 정책을 생성하여 \n자주 액세스하지 않는 데이터를 S3 Glacier 로 이동합니다.",
      "Amazon S3 Standard 스토리지 클래스를 사용합니다. S3 수명 주기 정책을 생성하여 \n자주 액세스하지 않는 데이터를 S3 Standard-Infrequent Access(S3 Standard-IA)로 \n이동합니다.",
      "Amazon Elastic File System(Amazon EFS) Standard 스토리지 클래스를 사용합니다. 자주 \n액세스하지 않는 데이터를 EFS Standard-Infrequent Access(EFS Standard-IA)로 이동하는 \n수명 주기 관리 정책을 만듭니다.",
      "Amazon Elastic File System(Amazon EFS) One Zone 스토리지 클래스를 사용합니다. \n자주 액세스하지 않는 데이터를 EFS One Zone-Infrequent Access(EFS One Zone-IA)로 \n이동하는 수명 주기 관리 정책을 만듭니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102152-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n참고: \n\naws.amazon.com/efs/features/infrequent-access/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 385,
    "question": "솔루션 아키텍트가 새로운 VPC 디자인을 만들고 있습니다. 로드 밸런서용 퍼블릭 서브넷 \n2 개, 웹 서버용 프라이빗 서브넷 2 개, MySQL 용 프라이빗 서브넷 2 개가 있습니다. 웹 \n서버는 HTTPS 만 사용합니다. 솔루션 설계자는 이미 0.0.0.0/0 에서 포트 443 을 허용하는 \n\n=== PAGE 395 ===\n로드 밸런서용 보안 그룹을 생성했습니다. 회사 정책에서는 각 리소스가 작업을 수행하는 \n데 필요한 최소한의 액세스 권한을 갖도록 요구합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 사용해야 하는 추가 구성 전략은 \n무엇입니까?",
    "options": [
      "웹 서버용 보안 그룹을 생성하고 0.0.0.0/0 에서 포트 443 을 허용합니다. MySQL 서버용 \n보안 그룹을 만들고 웹 서버 보안 그룹에서 포트 3306 을 허용합니다.",
      "웹 서버용 네트워크 ACL 을 생성하고 0.0.0.0/0 에서 포트 443 을 허용합니다. MySQL \n서버용 네트워크 ACL 을 생성하고 웹 서버 보안 그룹에서 포트 3306 을 허용합니다.",
      "웹 서버용 보안 그룹을 만들고 로드 밸런서에서 포트 443 을 허용합니다. MySQL 서버용 \n보안 그룹을 만들고 웹 서버 보안 그룹에서 포트 3306 을 허용합니다.",
      "웹 서버에 대한 네트워크 ACL 을 생성하고 로드 밸런서에서 포트 443 을 허용합니다. \nMySQL 서버용 네트워크 ACL\n을 생성하고 웹 서버 보안 그룹에서 포트 3306\n을 \n허용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102153-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 답변은 Windows IIS 웹 서버와 호환되는 온-프레미스 파일 공유에 대한 탄력적이고 \n내구성 있는 대체를 제공하기 때문에 정확합니다. Amazon FSx for Windows File Server 는 \nWindows Server 에 구축된 공유 파일 스토리지를 제공하는 완전관리형 서비스입니다. SMB \n프로토콜을 지원하고 Windows 기반 애플리케이션에 대한 원활한 액세스 및 인증을 \n가능하게 하는 Microsoft Active Directory 와 통합됩니다. Amazon FSx for Windows File \nServer 는 또한 다음과 같은 이점을 제공합니다. \n복원력: Amazon FSx for Windows File Server 는 고가용성 및 장애 조치 보호를 제공하는 \n여러 가용 영역에 배포할 수 있습니다. 또한 자동 백업 및 복원은 물론 문제를 감지하고 \n수정하는 자가 치유 기능을 지원합니다. \n내구성: Windows File Server 용 Amazon FSx 는 가용 영역 내외에서 데이터를 복제하고 \n내구성이 뛰어난 스토리지 장치에 데이터를 저장합니다. 또한 유휴 및 전송 중 암호화는 \n물론 파일 액세스 감사 및 데이터 중복 제거를 지원합니다. \n성능: Windows File Server 용 Amazon FSx 는 파일 작업을 위한 일관된 1 밀리초 미만의 \n지연 시간과 높은 처리량을 제공합니다. 또한 SSD 스토리지, 분산 파일 시스템(DFS) \n네임스페이스 및 복제와 같은 기본 Windows 기능, 사용자 중심 성능 확장을 지원합니다. \nAWS KMS CMK 를 사용하여 파일 공유의 이미지를 암호화하도록 Amazon FSx 파일 공유를 \n구성함으로써 회사는 무단 액세스로부터 이미지를 보호하고 회사 정책을 준수할 수 \n있습니다. 이미지에 대한 NTFS 권한 집합을 사용하여 회사는 이미지를 수정하거나 삭제할",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 386,
    "question": "전자상거래 회사는 AWS 에서 다중 계층 애플리케이션을 실행하고 있습니다. 프런트 엔드 \n및 백엔드 계층은 모두 Amazon EC2 에서 실행되고 데이터베이스는 Amazon RDS for \nMySQL\n에서 실행됩니다. 백엔드 계층은 RDS 인스턴스와 통신합니다. 성능 저하를 \n일으키는 데이터베이스에서 동일한 데이터 세트를 반환하라는 호출이 자주 있습니다. \n백엔드의 성능을 개선하려면 어떤 조치를 취해야 합니까?",
    "options": [
      "Amazon SNS 를 구현하여 데이터베이스 호출을 저장합니다.",
      "Amazon ElastiCache 를 구현하여 대규모 데이터 세트를 캐싱합니다.",
      "데이터베이스 호출을 캐시하기 위해 RDS for MySQL 읽기 전용 복제본을 구현합니다.",
      "Amazon Kinesis Data Firehose 를 구현하여 호출을 데이터베이스로 스트리밍합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102154-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n가장 좋은 솔루션은 Amazon ElastiCache 를 구현하여 대용량 데이터 세트를 캐시하는 \n것입니다. 이렇게 하면 자주 액세스하는 데이터를 메모리에 저장하여 검색 시간을 단축할 \n수 있습니다. 이는 데이터베이스에 대한 빈번한 호출을 완화하고 대기 시간을 줄이며 \n백엔드 계층의 전반적인 성능을 향상시키는 데 도움이 될 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 387,
    "question": "신입 사원이 배포 엔지니어로 회사에 합류했습니다. 배포 엔지니어는 AWS CloudFormation \n템플릿을 사용하여 여러 AWS 리소스를 생성합니다. 솔루션 설계자는 배포 엔지니어가 최소 \n권한 원칙에 따라 작업 활동을 수행하기를 원합니다. \n이 목표를 달성하기 위해 솔루션 설계자가 취해야 하는 작업 조합은 무엇입니까? (2 개 \n선택)",
    "options": [
      "배포 엔지니어가 AWS CloudFormation 스택 작업을 수행하기 위해 AWS 계정 루트 \n사용자 자격 증명을 사용하도록 합니다.",
      "배포 엔지니어를 위한 새 IAM 사용자를 생성하고 PowerUsers IAM 정책이 연결된 \n그룹에 IAM 사용자를 추가합니다.",
      "배포 엔지니어를 위한 새 IAM 사용자를 생성하고 AdministratorAccess IAM 정책이 \n연결된 그룹에 IAM 사용자를 추가합니다. \n\n=== PAGE 397 ===",
      "배포 엔지니어를 위한 새 IAM 사용자를 생성하고 AWS CloudFormation 작업만 \n허용하는 IAM 정책이 있는 그룹에 IAM 사용자를 추가합니다.",
      "배포 엔지니어를 위한 IAM 역할을 생성하여 해당 IAM 역할을 사용하여 AWS \nCloudFormation 스택 및 시작 스택에 특정한 권한을 명시적으로 정의합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102155-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n배포 엔지니어가 CloudFormation 을 사용하여 필요한 작업을 전부 해결할 수 있으므로 \n관련 작업만 허용해주면 최소 권한의 원칙이 충족됨. \nA(X) : 루트 사용자 자격 증명으로 최소 권한의 원칙에 어긋나서 제외. \nB(X) : PowerUsers 는 PowerUser 사용자 그룹의 멤버는 사용자 관리 작업(예: IAM 및 \nOrganizations)을 제공하는 일부 서비스를 제외한 모든 서비스에 대해 전체 권한을 갖 \n으므로 최소 권한의 원칙에 어긋나서 제외 \n\ndocs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/getting-started_create-delega\nted-user.html \nC(X) : 관리/액세스 권한을 굳이 줄 필요없음. CloudFormation 관련 권한만 부여하면 됨. \nD(O) : CloudFormation 작업만 허용하도록 하여 최소 권한 부여 조건 충족. \nE(O) : D 와 마찬가지 이유로 정답. \n \n참고: \n\ndocs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html \n\ndocs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 388,
    "question": "회사에서 VPC 에 2 계층 웹 애플리케이션을 배포하고 있습니다. 웹 계층은 여러 가용 \n영역에 걸쳐 있는 퍼블릭 서브넷이 있는 Amazon EC2 Auto Scaling 그룹을 사용하고 \n있습니다. 데이터베이스 계층은 별도의 프라이빗 서브넷에 있는 MySQL DB 인스턴스용 \nAmazon RDS\n로 구성됩니다. 웹 계층은 제품 정보를 검색하기 위해 데이터베이스에 \n액세스해야 합니다. \n웹 응용 프로그램이 의도한 대로 작동하지 않습니다. 웹 애플리케이션에서 데이터베이스에 \n연결할 수 없다고 보고합니다. 데이터베이스가 가동 및 실행 중인 것으로 확인되었습니다. \n네트워크 ACL, 보안 그룹 및 라우팅 테이블에 대한 모든 구성은 여전히 기본 상태입니다. \n애플리케이션 수정을 위해 솔루션 아키텍트는 무엇을 추천해야 합니까? \n\n=== PAGE 398 ===",
    "options": [
      "프라이빗 서브넷의 네트워크 ACL\n에 명시적 규칙을 추가하여 웹 티어의 EC2 \n인스턴스에서 오는 트래픽을 허용합니다.",
      "웹 계층의 EC2 인스턴스와 데이터베이스 계층 간의 트래픽을 허용하도록 VPC 경로 \n테이블에 경로를 추가합니다.",
      "웹 계층의 EC2 인스턴스와 데이터베이스 계층의 RDS 인스턴스를 두 개의 개별 VPC 에 \n배포하고 VPC 피어링을 구성합니다.",
      "데이터베이스 계층 RDS 인스턴스의 보안 그룹에 인바운드 규칙을 추가하여 웹 계층 \n보안 그룹의 트래픽을 허용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102156-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 대답은 웹 계층이 보안 그룹을 소스로 사용하여 데이터베이스 계층에 액세스할 수 \n있도록 허용하기 때문에 정확합니다. 이는 VPC 연결에 권장되는 모범 사례입니다. 보안 \n그룹은 상태 저장이며 동일한 VPC 에 있는 다른 보안 그룹을 참조할 수 있으므로 방화벽 \n규칙의 구성 및 유지 관리가 간소화됩니다. 데이터베이스 계층의 보안 그룹에 인바운드 \n규칙을 추가하면 웹 계층의 EC2 인스턴스가 IP 주소나 서브넷에 관계없이 포트 3306 에서 \nRDS 인스턴스에 연결할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 389,
    "question": "회사는 단일 가용 영역의 Amazon RDS for MySQL DB 인스턴스에 저장된 온라인 광고 \n비즈니스용 대규모 데이터 세트를 보유하고 있습니다. 회사는 프로덕션 DB 인스턴스에 \n대한 쓰기 작업에 영향을 주지 않고 비즈니스 보고 쿼리를 실행하기를 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "RDS 읽기 복제본을 배포하여 비즈니스 보고 쿼리를 처리합니다.",
      "DB 인스턴스를 Elastic Load Balancer 뒤에 배치하여 수평으로 확장합니다.",
      "DB 인스턴스를 더 큰 인스턴스 유형으로 확장하여 쓰기 작업 및 쿼리를 처리합니다.",
      "비즈니스 보고 쿼리를 처리하기 위해 여러 가용 영역에 DB 인스턴스를 배포합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102157-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n읽기 전용 복제본 사용 사례 - 일반 로드를 수행하는 프로덕션 데이터베이스가 있고 일부",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 390,
    "question": "회사는 Amazon EC2 인스턴스 플릿에서 3 계층 전자상거래 애플리케이션을 호스팅합니다. \n인스턴스는 Application Load Balancer(ALB) 뒤의 Auto Scaling 그룹에서 실행됩니다. 모든 \n전자상거래 데이터는 MariaDB 다중 AZ DB 인스턴스용 Amazon RDS 에 저장됩니다. \n회사는 트랜잭션 중에 고객 세션 관리를 최적화하려고 합니다. 애플리케이션은 세션 \n데이터를 지속적으로 저장해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2 개 선택)",
    "options": [
      "ALB 에서 고정 세션 기능(세션 선호도)을 켭니다.",
      "Amazon DynamoDB 테이블을 사용하여 고객 세션 정보를 저장합니다.",
      "Amazon Cognito 사용자 풀을 배포하여 사용자 세션 정보를 관리합니다.",
      "Amazon ElastiCache for Redis 클러스터를 배포하여 고객 세션 정보를 저장합니다.",
      "애플리케이션에서 AWS Systems Manager Application Manager 를 사용하여 사용자 세션 \n정보를 관리합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102213-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n참고: \n\naws.amazon.com/caching/session-management/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 391,
    "question": "회사는 3\n계층 상태 비저장 웹 애플리케이션을 위한 백업 전략이 필요합니다. 웹 \n애플리케이션은 조정 이벤트에 응답하도록 구성된 동적 조정 정책이 있는 Auto Scaling \n그룹의 Amazon EC2 인스턴스에서 실행됩니다. 데이터베이스 계층은 PostgreSQL\n용 \nAmazon RDS 에서 실행됩니다. 웹 애플리케이션은 EC2 인스턴스에 임시 로컬 스토리지가 \n필요하지 않습니다. 회사의 복구 지점 목표(RPO)는 2 시간입니다. \n백업 전략은 확장성을 최대화하고 이 환경에 대한 리소스 활용을 최적화해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "RPO 를 충족하기 위해 2 시간마다 EC2 인스턴스 및 데이터베이스의 Amazon Elastic \nBlock Store(Amazon EBS) 볼륨의 스냅샷을 생성합니다. \n\n=== PAGE 400 ===",
      "Amazon Elastic Block Store(Amazon EBS) 스냅샷을 생성하도록 스냅샷 수명 주기 \n정책을 구성합니다. RPO 를 충족하기 위해 Amazon RDS 에서 자동 백업을 활성화합니다.",
      "웹 및 애플리케이션 계층의 최신 Amazon 머신 이미지(AMI)를 유지합니다. Amazon \nRDS 에서 자동 백업을 활성화하고 지정 시간 복구를 사용하여 RPO 를 충족합니다.",
      "2 시간마다 EC2 인스턴스의 Amazon Elastic Block Store(Amazon EBS) 볼륨의 스냅샷을 \n생성합니다. Amazon RDS 에서 자동 백업을 활성화하고 지정 시간 복구를 사용하여 RPO 를 \n충족합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102212-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n애플리케이션에는 인스턴스에 대한 로컬 데이터가 없으므로 AMI\n만으로는 최신 AMI \n백업에서 인스턴스를 복원하여 RPO 를 충족할 수 있습니다. 데이터베이스에 대한 자동화된 \nRDS 백업과 결합하면 이 환경에 대한 완벽한 백업 솔루션을 제공합니다. EBS 스냅샷과 \n관련된 다른 옵션은 인스턴스의 상태 비저장 특성을 고려할 때 불필요합니다. AMI 는 앱 \n계층에 필요한 모든 백업을 제공합니다. 이는 최소한의 지속적인 관리가 필요한 기본 자동 \nAWS 백업 기능을 사용합니다. - AMI 자동 백업은 상태 비저장 앱 계층에 대한 특정 시점 \n복구를 제공합니다. - RDS 자동 백업은 데이터베이스에 대한 특정 시점 복구를 제공합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 392,
    "question": "회사에서 AWS 에 새로운 퍼블릭 웹 애플리케이션을 배포하려고 합니다. 애플리케이션에는 \nAmazon \nEC2 \n인스턴스를 \n사용하는 \n웹 \n서버 \n계층이 \n포함되어 \n있습니다. \n이 \n애플리케이션에는 Amazon RDS for MySQL DB 인스턴스를 사용하는 데이터베이스 계층도 \n포함되어 있습니다. \n응용 프로그램은 동적 IP 주소가 있는 글로벌 고객이 안전하고 액세스할 수 있어야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 보안 그룹을 어떻게 구성해야 합니까?",
    "options": [
      "0.0.0.0/0 에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 그룹을 \n구성합니다. 웹 서버의 보안 그룹에서 포트 3306 의 인바운드 트래픽을 허용하도록 DB \n인스턴스에 대한 보안 그룹을 구성합니다.",
      "고객의 IP 주소에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 \n그룹을 구성합니다. 웹 서버의 보안 그룹에서 포트 3306 의 인바운드 트래픽을 허용하도록 \nDB 인스턴스에 대한 보안 그룹을 구성합니다.",
      "고객의 IP 주소에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 \n그룹을 구성합니다. 고객의 IP 주소에서 포트 3306 의 인바운드 트래픽을 허용하도록 DB \n\n=== PAGE 401 ===\n인스턴스에 대한 보안 그룹을 구성합니다.",
      "0.0.0.0/0 에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 그룹을 \n구성합니다. 0.0.0.0/0 에서 포트 3306 의 인바운드 트래픽을 허용하도록 DB 인스턴스에 \n대한 보안 그룹을 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102160-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n1: \nA(O) : S3 에 넣으면 Lambda 를 통해 자동으로 처리가 되도록 하는 거라 OK. S3 는 저렴함. \nB(X) : dynamodb 는 이미지 저장용으론… \nC(X) : 저렴한 S3 가 있는데 굳이... 인스턴스 비용도 나감. \nD(x) : C 와 마찬가지. \n \n2: \n웹 서버에 대한 인바운드 액세스를 HTTPS 트래픽에 사용되는 포트 443 으로만 제한하고 \n애플리케이션이 공개되어 글로벌 고객이 액세스할 수 있으므로 모든 IP 주소(0.0.0.0/0)에서 \n액세스를 허용합니다. \nDB 인스턴스에 대한 인바운드 액세스를 MySQL 트래픽에 사용되는 포트 3306 으로만 \n제한하고 웹 서버의 보안 그룹에서만 액세스를 허용하여 두 계층 간의 보안 연결을 \n생성하고 데이터베이스에 대한 무단 액세스를 방지합니다. \n아웃바운드 액세스를 두 계층에 필요한 최소 수준으로 제한합니다. 이는 질문에 지정되지 \n않았지만 인바운드 규칙과 유사하다고 가정할 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 393,
    "question": "결제 처리 회사는 고객과의 모든 음성 통신을 녹음하고 오디오 파일을 Amazon S3 버킷에 \n저장합니다. 회사는 오디오 파일에서 텍스트를 캡처해야 합니다. 회사는 텍스트에서 \n고객에게 속한 모든 개인 식별 정보(PII)를 제거해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon Kinesis Video Streams 를 사용하여 오디오 파일을 처리합니다. AWS Lambda \n함수를 사용하여 알려진 PII 패턴을 스캔합니다.",
      "오디오 파일이 S3 버킷에 업로드되면 AWS Lambda 함수를 호출하여 Amazon Textract \n작업을 시작하여 통화 녹음을 분석합니다.",
      "PII 수정을 켠 상태로 Amazon Transcribe 전사 작업을 구성합니다. 오디오 파일이 S3 \n버킷에 업로드되면 AWS Lambda 함수를 호출하여 전사 작업을 시작합니다. 출력을 별도의 \n\n=== PAGE 402 ===\nS3 버킷에 저장합니다.",
      "트랜스크립션이 켜진 오디오 파일을 수집하는 Amazon Connect 고객 응대 흐름을 \n생성합니다. 알려진 PII 패턴을 스캔하기 위해 AWS Lambda 함수를 포함합니다. 오디오 \n파일이 S3 버킷에 업로드되면 Amazon EventBridge\n를 사용하여 고객 응대 흐름을 \n시작하십시오."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102322-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n민감한 데이터 수정은 텍스트 스크립트와 오디오 파일의 개인 식별 가능 정보(PII)를 \n대체합니다. 수정된 내용은 원본 텍스트를 [PII]로 대체하고 수정된 오디오 파일은 음성 \n개인 정보를 침묵으로 대체합니다. 이 매개 변수는 고객 정보를 보호하는 데 유용합니다. \n\ndocs.aws.amazon.com/transcribe/latest/dg/call-analytics-insights.html#callanalyt\nics-insights-redaction",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 394,
    "question": "회사는 AWS 클라우드에서 다중 계층 전자 상거래 웹 애플리케이션을 실행하고 있습니다. \n애플리케이션은 Amazon RDS for MySQL 다중 AZ DB 인스턴스와 함께 Amazon EC2 \n인스턴스에서 실행됩니다. Amazon RDS\n는 범용 SSD(gp3) Amazon Elastic Block \nStore(Amazon EBS) 볼륨에 2,000GB\n의 스토리지가 있는 최신 세대 DB 인스턴스로 \n구성됩니다. 데이터베이스 성능은 수요가 많은 기간 동안 애플리케이션에 영향을 미칩니다. \n데이터베이스 관리자는 Amazon CloudWatch Logs 의 로그를 분석하고 읽기 및 쓰기 IOPS \n수가 20,000 보다 높을 때 애플리케이션 성능이 항상 저하됨을 발견합니다. \n애플리케이션 성능을 향상시키기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "볼륨을 마그네틱 볼륨으로 교체합니다.",
      "gp3 볼륨의 IOPS 수를 늘립니다.",
      "프로비저닝된 IOPS SSD(io2) 볼륨으로 볼륨을 교체합니다.",
      "2,000GB gp3 볼륨을 두 개의 1,000GB gp3 볼륨으로 교체합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102161-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \nB??",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 395,
    "question": "IAM 사용자는 지난 주 프로덕션 배포 중에 회사 계정의 AWS 리소스에 대해 몇 가지 \n구성을 변경했습니다. 솔루션 설계자는 몇 가지 보안 그룹 규칙이 원하는 대로 구성되지 \n않았음을 알게 되었습니다. 솔루션 설계자는 어떤 IAM 사용자가 변경을 담당했는지 \n확인하려고 합니다. \n솔루션 설계자는 원하는 정보를 찾기 위해 어떤 서비스를 사용해야 합니까?",
    "options": [
      "Amazon GuardDuty",
      "아마존 인스펙터",
      "AWS 클라우드트레일",
      "AWS 구성"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102162-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n가장 좋은 방법은 AWS CloudTrail\n을 사용하여 원하는 정보를 찾는 것입니다. AWS \nCloudTrail 은 AWS 계정 활동의 거버넌스, 규정 준수, 운영 감사 및 위험 감사를 지원하는 \n서비스입니다. CloudTrail 은 IAM 사용자, EC2 인스턴스, AWS 관리 콘솔 및 기타 AWS \n서비스에 의한 변경 사항을 포함하여 AWS 계정의 리소스에 대한 모든 변경 사항을 \n기록하는 데 사용할 수 있습니다. 솔루션 설계자는 CloudTrail 을 사용하여 보안 그룹 \n규칙의 구성을 변경한 IAM 사용자를 식별할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 396,
    "question": "한 회사가 AWS\n에서 자체 관리형 DNS 서비스를 구현했습니다. 솔루션은 다음으로 \n구성됩니다. \n• 다른 AWS 지역의 Amazon EC2 인스턴스 \n• AWS Global Accelerator 의 표준 가속기 엔드포인트 \n회사는 DDoS 공격으로부터 솔루션을 보호하려고 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Shield Advanced 에 가입하십시오. 보호할 리소스로 액셀러레이터를 추가합니다.",
      "AWS Shield Advanced 에 가입합니다. 보호할 리소스로 EC2 인스턴스를 추가합니다.",
      "속도 기반 규칙을 포함하는 AWS WAF 웹 ACL 을 생성합니다. 웹 ACL 을 가속기와 \n연결합니다.",
      "비율 기반 규칙을 포함하는 AWS WAF 웹 ACL 을 생성합니다. 웹 ACL 을 EC2 \n인스턴스와 연결합니다. \n\n=== PAGE 404 ==="
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102164-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Shield 는 AWS 에서 실행되는 애플리케이션에 대한 DDoS(Distributed Denial of Service) \n공격으로부터 보호하는 관리형 서비스입니다. AWS Shield Standard 는 추가 비용 없이 모든 \nAWS 고객에게 자동으로 활성화됩니다. AWS Shield Advanced 는 선택적 유료 서비스입니다. \nAWS Shield Advanced\n는 Amazon Elastic Compute Cloud(EC2), Elastic Load \nBalancing(ELB), Amazon CloudFront, AWS Global Accelerator 및 Route 53 에서 실행되는 \n애플리케이션에 대해 더 정교하고 더 큰 공격에 대한 추가 보호 기능을 제공합니다. \n\ndocs.aws.amazon.com/waf/latest/developerguide/ddos-event-mitigation-logic-g\nax.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 397,
    "question": "전자상거래 회사는 분석을 위해 판매 기록을 집계하고 필터링하기 위해 예약된 일일 작업을 \n실행해야 합니다. 회사는 판매 기록을 Amazon S3 버킷에 저장합니다. 각 개체의 크기는 \n최대 10GB 입니다. 판매 이벤트 수에 따라 작업을 완료하는 데 최대 1 시간이 걸릴 수 \n있습니다. 작업의 CPU 및 메모리 사용량은 일정하며 미리 알려져 있습니다. \n솔루션 설계자는 작업을 실행하는 데 필요한 운영 노력을 최소화해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon EventBridge 알림이 있는 AWS Lambda 함수를 생성합니다. EventBridge \n이벤트가 하루에 한 번 실행되도록 예약합니다.",
      "AWS Lambda 함수를 생성합니다. Amazon API Gateway HTTP API 를 생성하고 API 를 \n함수와 통합합니다. API 를 호출하고 함수를 호출하는 Amazon EventBridge 예약 이벤트를 \n생성합니다.",
      "AWS Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 클러스터를 \n생성합니다. \n작업을 \n실행하기 \n위해 \n클러스터에서 \nECS \n작업을 \n시작하는 \nAmazon \nEventBridge 예약 이벤트를 생성합니다.",
      "Amazon EC2 시작 유형이 있는 Amazon Elastic Container Service(Amazon ECS) \n클러스터와 하나 이상의 EC2 인스턴스가 있는 Auto Scaling 그룹을 생성합니다. 작업을 \n실행하기 위해 클러스터에서 ECS 작업을 시작하는 Amazon EventBridge 예약 이벤트를 \n생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102165-exam-aws-certified-sol",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 398,
    "question": "회사는 온프레미스 NAS(Network-Attached Storage) 시스템에서 AWS 클라우드로 600TB 의 \n데이터를 전송해야 합니다. 데이터 전송은 2\n주 이내에 완료되어야 합니다. 데이터는 \n민감하며 전송 중에 암호화되어야 합니다. 회사의 인터넷 연결은 100Mbps\n의 업로드 \n속도를 지원할 수 있습니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 멀티파트 업로드 기능을 사용하여 HTTPS 를 통해 파일을 전송합니다.",
      "온프레미스 NAS 시스템과 가장 가까운 AWS 리전 간에 VPN 연결을 생성합니다. VPN \n연결을 통해 데이터를 전송합니다.",
      "AWS Snow Family 콘솔을 사용하여 여러 AWS Snowball Edge Storage Optimized \n디바이스를 주문합니다. 디바이스를 사용하여 데이터를 Amazon S3 로 전송합니다.",
      "회사 위치와 가장 가까운 AWS 리전 간에 10Gbps AWS Direct Connect 연결을 \n설정합니다. VPN 연결을 통해 데이터를 리전으로 전송하여 Amazon S3\n에 데이터를 \n저장합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102166-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n가장 좋은 방법은 AWS Snow Family 콘솔을 사용하여 여러 AWS Snowball Edge Storage \nOptimized 디바이스를 주문하고 디바이스를 사용하여 데이터를 Amazon S3 로 전송하는",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 399,
    "question": "금융 회사는 AWS 에서 웹 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon API \nGateway 지역 API 엔드포인트를 사용하여 사용자에게 현재 주가를 검색할 수 있는 기능을 \n제공합니다. 회사의 보안 팀은 API 요청 수가 증가한 것을 확인했습니다. 보안 팀은 HTTP \n플러드 공격이 애플리케이션을 오프라인 상태로 만들 수 있다고 우려하고 있습니다. \n솔루션 설계자는 이러한 유형의 공격으로부터 애플리케이션을 보호하기 위한 솔루션을 \n설계해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "최대 TTL 이 24 시간인 API Gateway 지역 API 엔드포인트 앞에 Amazon CloudFront \n배포를 생성합니다.",
      "속도 기반 규칙을 사용하여 리전 AWS WAF 웹 ACL 을 생성합니다. 웹 ACL 을 API \nGateway 단계와 연결합니다.",
      "Amazon CloudWatch 지표를 사용하여 개수 지표를 모니터링하고 미리 정의된 속도에 \n도달하면 보안 팀에 알립니다.",
      "API Gateway 지역 API 엔드포인트 앞에 Lambda@Edge\n를 사용하여 Amazon \nCloudFront 배포를 생성합니다. 사전 정의된 속도를 초과하는 IP 주소의 요청을 차단하는 \nAWS Lambda 함수를 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102167-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS WAF 의 속도 기반 규칙을 사용하면 보안 팀이 속도 기반 규칙을 트리거하는 임계값을 \n구성할 수 있습니다. 이를 통해 AWS WAF 는 지정된 기간 동안 요청 속도를 추적한 다음 \n임계값이 초과되면 자동으로 차단할 수 있습니다. 이는 최소한의 운영 오버헤드로 HTTP \n플러드 공격을 방지하는 기능을 제공합니다. \n \n참조: \n\ndocs.aws.amazon.com/waf/latest/developerguide/web-acl.html",
    "glossary": {}
  },
  {
    "id": 400,
    "question": "기상 스타트업 회사는 사용자에게 날씨 데이터를 온라인으로 판매하는 맞춤형 웹 \n애플리케이션을 보유하고 있습니다. 이 회사는 Amazon DynamoDB 를 사용하여 데이터를 \n저장하고 새로운 날씨 이벤트가 기록될 때마다 4 개의 내부 팀 관리자에게 경고를 보내는 \n새로운 서비스를 구축하려고 합니다. 회사는 이 새로운 서비스가 현재 애플리케이션의 \n성능에 영향을 미치는 것을 원하지 않습니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 \n합니까?",
    "options": [
      "DynamoDB 트랜잭션을 사용하여 새 이벤트 데이터를 테이블에 씁니다. 내부 팀에 \n알리도록 트랜잭션을 구성합니다.",
      "현재 애플리케이션이 4 개의 Amazon Simple Notification Service(Amazon SNS) 주제에 \n메시지를 게시하도록 합니다. 각 팀이 하나의 주제를 구독하도록 합니다.",
      "테이블에서 Amazon DynamoDB 스트림을 활성화합니다. 트리거를 사용하여 팀이 \n구독할 수 있는 단일 Amazon Simple Notification Service(Amazon SNS) 주제에 씁니다.",
      "각 레코드에 사용자 정의 속성을 추가하여 새 항목에 플래그를 지정합니다. 새 항목이 \n있는지 \n매분 \n테이블을 \n스캔하고 \n팀이 \n구독할 \n수 \n있는 \nAmazon \nSimple \nQueue \nService(Amazon SQS) 대기열에 알리는 cron 작업을 작성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102169-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 최상의 솔루션은 테이블에서 \nAmazon DynamoDB 스트림을 활성화하고 트리거를 사용하여 팀이 구독할 수 있는 단일 \nAmazon Simple Notification Service(Amazon SNS) 주제에 쓰는 것입니다. 이 솔루션에는 \n최소한의 구성 및 인프라 설정이 필요하며 Amazon DynamoDB Streams 는 DynamoDB \n테이블에 대한 변경 사항을 캡처하는 지연 시간이 짧은 방법을 제공합니다. 트리거는 \n자동으로 변경 사항을 캡처하고 이를 내부 팀에 알리는 SNS 주제에 게시합니다.",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스"
    }
  }
];