export const quizData = [
  {
    "id": 351,
    "question": "회사에서 데이터 관리 애플리케이션을 AWS 로 이전하고 있습니다. 회사는 이벤트 기반 \n아키텍처로 전환하려고 합니다. 아키텍처는 워크플로의 다양한 측면을 수행하면서 더 많이 \n분산되고 서버리스 개념을 사용해야 합니다. 회사는 또한 운영 오버헤드를 최소화하기를 \n\n=== PAGE 366 ===\n원합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Glue 에서 워크플로를 구축합니다. AWS Glue 를 사용하여 AWS Lambda 함수를 \n호출하여 워크플로 단계를 처리합니다.",
      "AWS Step Functions\n에서 워크플로를 구축합니다. Amazon EC2 인스턴스에 \n애플리케이션을 배포합니다. Step Functions\n를 사용하여 EC2 인스턴스에서 워크플로 \n단계를 호출합니다.",
      "Amazon EventBridge 에서 워크플로를 구축합니다. EventBridge 를 사용하여 일정에 따라 \nAWS Lambda 함수를 호출하여 워크플로 단계를 처리합니다.",
      "AWS Step Functions 에서 워크플로를 구축합니다. Step Functions 를 사용하여 상태 \n머신을 생성합니다. 상태 시스템을 사용하여 AWS Lambda 함수를 호출하여 워크플로 \n단계를 처리합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/100371-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 \n대답은 \n서버리스 \n개념을 \n사용하고 \n운영 \n오버헤드를 \n최소화하는 \n이벤트 \n기반 \n아키텍처로의 전환 요구 사항을 충족하기 때문에 정확합니다. AWS Step Functions 는 상태 \n시스템을 사용하여 여러 AWS 서비스를 워크플로로 조정할 수 있는 서버리스 서비스입니다. \n상태 머신은 워크플로 단계의 실행 논리와 순서를 정의하는 작업 및 전환으로 구성됩니다. \nAWS Lambda\n는 서버를 프로비저닝하거나 관리하지 않고도 코드를 실행할 수 있는 \n서버리스 FaaS(function-as-a-service) 플랫폼입니다. Lambda 함수는 Step Functions 에서 \n상태 시스템의 작업으로 호출할 수 있으며 데이터 수집, 변환, 검증 및 분석과 같은 데이터 \n관리 워크플로의 다양한 측면을 수행할 수 있습니다. Step Functions 및 Lambda\n를 \n사용함으로써 회사는 다음과 같은 이점을 얻을 수 있습니다. \n이벤트 기반: Step Functions 는 타이머, API 호출 또는 기타 AWS 서비스 이벤트와 같은 \n이벤트를 기반으로 Lambda 함수를 트리거할 수 있습니다. Lambda 함수는 이벤트 기반 \n아키텍처를 생성하여 다른 서비스나 상태 시스템에 이벤트를 내보낼 수도 있습니다. \n서버리스: Step Functions 및 Lambda 는 AWS 에서 완전히 관리하므로 회사에서 서버 또는 \n인프라를 프로비저닝하거나 관리할 필요가 없습니다. 회사는 워크플로 및 기능에서 \n사용하는 리소스에 대해서만 비용을 지불하고 수요에 따라 자동으로 확장 또는 축소할 수 \n있습니다. \n운영 오버헤드: Step Functions 및 Lambda 는 모니터링, 로깅, 추적, 오류 처리, 재시도 \n논리 및 보안과 같은 기본 제공 기능을 제공하므로 워크플로 및 기능의 개발 및 배포를 \n단순화합니다. 회사는 운영 세부 사항보다는 비즈니스 논리 및 데이터 처리에 집중할 수",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 352,
    "question": "한 회사에서 온라인 멀티플레이어 게임용 네트워크를 설계하고 있습니다. 이 게임은 UDP \n네트워킹 프로토콜을 사용하며 8 개의 AWS 리전에 배포됩니다. 네트워크 아키텍처는 최종 \n사용자에게 고품질 게임 경험을 제공하기 위해 대기 시간과 패킷 손실을 최소화해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "각 리전에서 전송 게이트웨이를 설정합니다. 각 전송 게이트웨이 간에 리전 간 피어링 \n연결을 생성합니다.",
      "각 리전에서 UDP 리스너 및 엔드포인트 그룹으로 AWS Global Accelerator\n를 \n설정합니다.",
      "UDP\n를 켠 상태에서 Amazon CloudFront\n를 설정합니다. 각 리전에서 오리진을 \n구성합니다.",
      "각 지역 간에 VPC 피어링 메시를 설정합니다. 각 VPC 에 대해 UDP 를 켭니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/100197-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 상황에 가장 적합한 솔루션은 각 리전에서 UDP 리스너 및 엔드포인트 그룹으로 AWS \nGlobal Accelerator 를 설정하는 옵션 B 입니다. AWS Global Accelerator 는 사용자 요청을 \n가장 가까운 AWS 지역[1]으로 라우팅하여 인터넷 애플리케이션의 가용성과 성능을 \n향상시키는 네트워킹 서비스입니다. 또한 대기 시간이 짧고 패킷 손실이 적은 더 빠르고 \n안정적인 데이터 전송을 제공하여 UDP 응용 프로그램의 성능을 향상시킵니다. 각 리전에서 \nUDP 리스너와 엔드포인트 그룹을 설정함으로써 Global Accelerator 는 더 빠른 응답 시간과 \n더 나은 사용자 경험을 위해 가장 가까운 리전으로 트래픽을 라우팅합니다.",
    "glossary": {}
  },
  {
    "id": 353,
    "question": "회사는 단일 가용 영역의 Amazon EC2 인스턴스에서 3\n계층 웹 애플리케이션을 \n호스팅합니다. 웹 애플리케이션은 EC2 인스턴스에서 호스팅되는 자체 관리형 MySQL \n데이터베이스를 사용하여 Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 \n저장합니다. MySQL 데이터베이스는 현재 1TB 프로비저닝된 IOPS SSD(io2) EBS 볼륨을 \n사용합니다. 이 회사는 피크 트래픽에서 읽기 및 쓰기 모두에 대해 1,000 IOPS 의 트래픽을 \n\n=== PAGE 368 ===\n예상합니다. \n회사는 두 배의 IOPS 용량을 유지하면서 중단을 최소화하고 성능을 안정화하며 비용을 \n절감하고자 합니다. 이 회사는 데이터베이스 계층을 가용성이 높고 내결함성이 있는 완전 \n관리형 솔루션으로 이동하려고 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "io2 Block Express EBS 볼륨이 있는 MySQL DB 인스턴스용 Amazon RDS 의 다중 AZ \n배포를 사용합니다.",
      "범용 SSD(gp2) EBS 볼륨이 있는 MySQL DB 인스턴스용 Amazon RDS 의 다중 AZ \n배포를 사용합니다.",
      "Amazon S3 Intelligent-Tiering 액세스 계층을 사용합니다.",
      "두 \n개의 \n큰 \nEC2 \n인스턴스를 \n사용하여 \n활성-수동 \n모드에서 \n데이터베이스를 \n호스팅합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/100225-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nRDS 지원 스토리지: \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html \nGP2 최대 IOPS: \n\ndocs.aws.amazon.com/AWSEC2/latest/UserGuide/general-purpose.html#gp2-per\nformance \nAmazon RDS 는 범용 SSD(gp2 및 gp3 라고도 함), 프로비저닝된 IOPS SSD(io1 이라고도 함) \n및 마그네틱(표준이라고도 함)의 세 가지 스토리지 유형을 제공합니다. 성능 특성과 가격이 \n다르기 때문에 스토리지 성능과 비용을 데이터베이스 워크로드의 요구 사항에 맞게 조정할 \n수 있습니다. 최대 64TiB 의 스토리지로 MySQL, MariaDB, Oracle 및 PostgreSQL RDS DB \n인스턴스를 생성할 수 있습니다. 최대 16TiB 의 스토리지로 SQL Server RDS DB 인스턴스를 \n생성할 수 있습니다. 이 스토리지 용량에는 프로비저닝된 IOPS SSD 및 범용 SSD 스토리지 \n유형을 사용하십시오. \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 354,
    "question": "회사는 AWS 에서 서버리스 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon API \nGateway, AWS Lambda 및 Amazon RDS for PostgreSQL 데이터베이스를 사용합니다. \n회사는 최대 트래픽 또는 예측할 수 없는 트래픽 시간 동안 데이터베이스 연결 시간 초과로 \n인해 발생하는 애플리케이션 오류의 증가를 확인했습니다. 회사는 최소한의 코드 변경으로 \n애플리케이션 오류를 줄이는 솔루션이 필요합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Lambda 동시성 비율을 줄입니다.",
      "RDS DB 인스턴스에서 RDS 프록시를 활성화합니다.",
      "더 많은 연결을 허용하도록 RDS DB 인스턴스 클래스의 크기를 조정합니다.",
      "온디맨드 확장을 통해 데이터베이스를 Amazon DynamoDB 로 마이그레이션합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/100227-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 356,
    "question": "회사는 데이터 객체를 Amazon S3 Standard 스토리지에 저장합니다. 한 솔루션 설계자는 \n데이터의 75%가 30\n일 후에 거의 액세스되지 않는다는 사실을 발견했습니다. 회사는 \n동일한 고가용성 및 복원력으로 모든 데이터에 즉시 액세스할 수 있어야 하지만 스토리지 \n비용을 최소화하기를 원합니다. \n이러한 요구 사항을 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": [
      "30 일 후에 데이터 객체를 S3 Glacier Deep Archive 로 이동합니다.",
      "30\n일 후에 데이터 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 \n이동합니다.",
      "30 일 후에 데이터 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 \n이동합니다.",
      "데이터 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 즉시 이동합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/100229-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n30 일 후에 데이터 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 이동하면 \n스토리지 비용을 최소화하면서 고가용성 및 복원력으로 데이터에 즉시 액세스할 수 있어야 \n한다는 요구 사항을 충족합니다. S3 Standard-IA 는 자주 액세스하지 않는 데이터를 위해 \n설계되었으며 S3 Standard 보다 낮은 스토리지 비용을 제공하는 동시에 S3 Standard 와 \n동일한 짧은 지연 시간, 높은 처리량 및 높은 내구성을 제공합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 357,
    "question": "=== PAGE 371 ===\n게임 회사는 공개 점수판을 데이터 센터에서 AWS 클라우드로 옮기고 있습니다. 이 회사는 \nApplication Load Balancer 뒤에 Amazon EC2 Windows Server 인스턴스를 사용하여 동적 \n애플리케이션을 호스팅합니다. 회사는 애플리케이션을 위한 고가용성 스토리지 솔루션이 \n필요합니다. 애플리케이션은 정적 파일과 동적 서버 측 코드로 구성됩니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "Amazon S3 에 정적 파일을 저장합니다. Amazon CloudFront 를 사용하여 엣지에서 객체를 \n캐싱합니다.",
      "정적 파일을 Amazon S3 에 저장합니다. Amazon ElastiCache 를 사용하여 엣지에서 \n객체를 캐싱합니다.",
      "Amazon Elastic File System(Amazon EFS)에 서버 측 코드를 저장합니다. 파일을 공유할 \n각 EC2 인스턴스에 EFS 볼륨을 탑재합니다.",
      "Windows File Server 용 Amazon FSx 에 서버 측 코드를 저장합니다. 파일을 공유할 각 \nEC2 인스턴스에 FSx for Windows File Server 볼륨을 탑재합니다.",
      "범용 SSD(gp2) Amazon Elastic Block Store(Amazon EBS) 볼륨에 서버 측 코드를 \n저장합니다. 각 EC2 인스턴스에 EBS 볼륨을 탑재하여 파일을 공유합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/100230-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nA: Elasticache 는 Amazon 당 순위표에 이상적임에도 불구하고 에지 위치에서 캐싱하지 \n않기 때문입니다. \nD: FSx 가 대기 시간이 짧은 요구 사항에 대해 더 높은 성능을 제공하기 때문입니다. \n\nwww.techtarget.com/searchaws/tip/Amazon-FSx-vs-EFS-Compare-the-AWS-fil\ne-services \nFSx 는 솔리드 스테이트 드라이브 스토리지 볼륨을 사용하여 고성능 및 1 밀리초 미만의 \n대기 시간을 위해 구축되었습니다. 이 설계를 통해 사용자는 스토리지 용량과 대기 시간을 \n독립적으로 선택할 수 있습니다. 따라서 테라바이트 이하의 파일 시스템도 256Mbps \n이상의 처리량을 가질 수 있으며 최대 64TB 의 볼륨을 지원할 수 있습니다. Amazon S3 는 \n이미지, 동영상, 문서 등과 같은 정적 파일을 저장할 수 있는 객체 스토리지 서비스입니다. \nAmazon EFS 는 파일을 계층 구조로 저장할 수 있는 파일 스토리지 서비스이며 NFS \n프로토콜을 지원합니다. \nAmazon FSx for Windows File Server 는 파일을 계층 구조로 저장할 수 있고 SMB \n프로토콜을 지원하는 파일 스토리지 서비스입니다. Amazon EBS 는 데이터를 고정 크기 \n블록에 저장하고 EC2 인스턴스에 연결할 수 있는 블록 스토리지 서비스입니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 358,
    "question": "소셜 미디어 회사는 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 \n애플리케이션을 실행합니다. ALB\n는 Amazon CloudFront 배포의 오리진입니다. 이 \n애플리케이션은 Amazon S3 버킷에 10 억 개 이상의 이미지가 저장되어 있으며 초당 수천 \n개의 이미지를 처리합니다. 회사는 이미지 크기를 동적으로 조정하고 고객에게 적절한 \n형식을 제공하기를 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 인스턴스에 외부 이미지 관리 라이브러리를 설치합니다. 이미지 관리 라이브러리를 \n사용하여 이미지를 처리합니다.",
      "CloudFront 오리진 요청 정책을 생성합니다. 정책을 사용하여 자동으로 이미지 크기를 \n조정하고 요청의 User-Agent HTTP 헤더를 기반으로 적절한 형식을 제공합니다.",
      "외부 \n이미지 \n관리 \n라이브러리와 \n함께 \nLambda@Edge \n함수를 \n사용합니다. \nLambda@Edge 함수를 이미지를 제공하는 CloudFront 동작과 연결합니다.",
      "CloudFront 응답 헤더 정책을 생성합니다. 정책을 사용하여 자동으로 이미지 크기를 \n조정하고 요청의 User-Agent HTTP 헤더를 기반으로 적절한 형식을 제공합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/100231-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nLambda@Edge 는 CloudFront 엣지 위치에서 Lambda 함수를 실행할 수 있게 해주는 \n서비스입니다. CloudFront 를 통과하는 요청 및 응답을 수정하는 데 사용할 수 있습니다. \nCloudFront 오리진 요청 정책은 CloudFront 가 오리진으로 보내는 요청에 포함된 값(URL \n쿼리 문자열, HTTP 헤더 및 쿠키)을 제어하는 정책입니다. 오리진에서 추가 정보를 \n수집하거나 오리진 응답을 사용자 정의하는 데 사용할 수 있습니다. CloudFront 응답 헤더 \n정책은 CloudFront 가 최종 사용자에게 보내는 응답에서 제거하거나 추가하는 HTTP 헤더를 \n지정하는 정책입니다. 응답에 보안 또는 사용자 지정 헤더를 추가하는 데 사용할 수 \n있습니다. \n이러한 정의에 따라 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 다음과",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 359,
    "question": "병원은 환자 기록을 Amazon S3 버킷에 저장해야 합니다. 병원의 컴플라이언스 팀은 모든 \n보호 건강 정보(PHI)가 전송 및 저장 중에 암호화되도록 해야 합니다. 규정 준수 팀은 \n미사용 데이터에 대한 암호화 키를 관리해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Certificate Manager(ACM)에서 퍼블릭 SSL/TLS 인증서를 생성합니다. 인증서를 \nAmazon S3 와 연결합니다. AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하도록 각 S3 \n버킷에 대한 기본 암호화를 구성합니다. KMS 키를 관리할 규정 준수 팀을 할당합니다.",
      "S3 버킷 정책에서 aws:SecureTransport 조건을 사용하여 HTTPS(TLS)를 통한 암호화된 \n연결만 허용합니다. S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용하도록 각 S3 \n버킷에 대한 기본 암호화를 구성합니다. SSE-S3 키를 관리할 규정 준수 팀을 할당합니다.",
      "S3 버킷 정책에서 aws:SecureTransport 조건을 사용하여 HTTPS(TLS)를 통한 암호화된 \n연결만 허용합니다. AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하도록 각 S3 버킷에 \n대한 기본 암호화를 구성합니다. KMS 키를 관리할 규정 준수 팀을 할당합니다.",
      "S3 버킷 정책에서 aws:SecureTransport 조건을 사용하여 HTTPS(TLS)를 통한 암호화된 \n연결만 허용합니다. Amazon Macie 를 사용하여 Amazon S3 에 저장된 민감한 데이터를 \n보호하십시오. Macie 를 관리할 규정 준수 팀을 지정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/100232-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이를 통해 규정 준수 팀은 서버 측 암호화에 사용되는 KMS 키를 관리할 수 있으므로 \n암호화 키에 필요한 제어 기능을 제공합니다. 또한 버킷 정책에서 \"aws:SecureTransport\" \n조건을 사용하면 S3 버킷에 대한 모든 연결이 전송 중에 암호화됩니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 360,
    "question": "회사는 Amazon API Gateway 를 사용하여 동일한 VPC 에서 두 개의 REST API 로 프라이빗 \n게이트웨이를 실행합니다. BuyStock RESTful 웹 서비스는 CheckFunds RESTful 웹 \n서비스를 호출하여 주식을 구매하기 전에 충분한 자금을 사용할 수 있는지 확인합니다. \n회사는 VPC 흐름 로그에서 BuyStock RESTful 웹 서비스가 VPC 대신 인터넷을 통해 \nCheckFunds RESTful 웹 서비스를 호출한다는 사실을 확인했습니다. 솔루션 설계자는 \nAPI 가 VPC 를 통해 통신하도록 솔루션을 구현해야 합니다. \n코드를 가장 적게 변경하여 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "인증을 위해 HTTP 헤더에 X-API-Key 헤더를 추가합니다.",
      "인터페이스 엔드포인트를 사용합니다.",
      "게이트웨이 엔드포인트를 사용합니다.",
      "두 REST API 사이에 Amazon Simple Queue Service(Amazon SQS) 대기열을 \n추가합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/100238-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n인터페이스 엔드포인트를 사용하면 BuyStock RESTful 웹 서비스와 CheckFunds RESTful 웹 \n서비스가 코드를 변경하지 않고도 VPC\n를 통해 통신할 수 있습니다. 인터페이스 \n엔드포인트는 고객의 VPC 에 탄력적 네트워크 인터페이스(ENI)를 생성한 다음 API 에서 \nENI 로 트래픽을 라우팅하도록 라우팅 테이블을 구성합니다. 이렇게 하면 코드를 변경하지 \n않고도 두 API 가 VPC 를 통해 통신할 수 있습니다.",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 361,
    "question": "A company hosts a multiplayer gaming application on AWS. The company wants the \napplication to read data with sub-millisecond latency and run one-time queries on historical \ndata. \nWhich solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Use Amazon RDS for data that is frequently accessed. Run a periodic custom script to \nexport the data to an Amazon S3 bucket.",
      "Store the data directly in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move \nolder data to S3 Glacier Deep Archive for long-term storage. Run one-time queries on the \ndata in Amazon S3 by using Amazon Athena. \n\n=== PAGE 375 ===",
      "Use Amazon DynamoDB with DynamoDB Accelerator (DAX) for data that is frequently \naccessed. Export the data to an Amazon S3 bucket by using DynamoDB table export. Run \none-time queries on the data in Amazon S3 by using Amazon Athena.",
      "Use Amazon DynamoDB for data that is frequently accessed. Turn on streaming to \nAmazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to read the data from \nKinesis Data Streams. Store the records in an Amazon S3 bucket."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102119-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 362,
    "question": "회사는 특정 지불 ID 에 대한 메시지가 전송된 순서대로 수신되어야 하는 지불 처리 \n시스템을 사용합니다. 그렇지 않으면 결제가 잘못 처리될 수 있습니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 어떤 조치를 취해야 합니까? (2 개 선택)",
    "options": [
      "결제 ID 를 파티션 키로 사용하여 Amazon DynamoDB 테이블에 메시지를 씁니다.",
      "결제 ID 를 파티션 키로 사용하여 Amazon Kinesis 데이터 스트림에 메시지를 씁니다.",
      "결제 ID 를 키로 사용하여 Amazon ElastiCache for Memcached 클러스터에 메시지를 \n씁니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지를 씁니다. 결제 ID 를 \n사용하도록 메시지 속성을 설정합니다.",
      "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열에 메시지를 씁니다. 결제 \nID 를 사용할 메시지 그룹을 설정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102121-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n1) SQS FIFO 대기열은 메시지가 전송된 정확한 순서대로 수신되도록 보장합니다. 지불 \nID 를 메시지 그룹으로 사용하면 지불 ID 에 대한 모든 메시지가 순차적으로 수신됩니다. \n2) Kinesis 데이터 스트림은 파티션 키별로 순서를 지정할 수도 있습니다. 지불 ID 를 파티션 \n키로 사용하면 각 지불 ID 에 대한 메시지의 엄격한 순서가 보장됩니다.",
    "glossary": {
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 363,
    "question": "회사는 고유한 이벤트를 별도의 리더보드, 매치메이킹 및 인증 서비스로 동시에 전송해야 \n\n=== PAGE 376 ===\n하는 게임 시스템을 구축하고 있습니다. 회사에는 이벤트 순서를 보장하는 AWS 이벤트 \n기반 시스템이 필요합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon EventBridge 이벤트 버스",
      "Amazon Simple Notification Service(Amazon SNS) FIFO 주제",
      "Amazon Simple Notification Service(Amazon SNS) 표준 주제",
      "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102124-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 364,
    "question": "한 병원에서 환자의 증상을 수집하는 새로운 애플리케이션을 설계하고 있습니다. 병원은 \n아키텍처에서 Amazon Simple Queue Service(Amazon SQS)와 Amazon Simple Notification \nService(Amazon SNS)를 사용하기로 결정했습니다. \n솔루션 설계자가 인프라 설계를 검토하고 있습니다. 저장 및 전송 중에 데이터를 \n암호화해야 합니다. 병원의 승인된 직원만 데이터에 액세스할 수 있어야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "SQS 구성 요소에서 서버 측 암호화를 켭니다. 기본 키 정책을 업데이트하여 인증된 \n보안 주체 집합으로 키 사용을 제한합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리 키를 사용하여 SNS 구성 요소에서 \n서버 측 암호화를 켭니다. 키 정책을 적용하여 인증된 보안 주체 집합으로 키 사용을 \n제한합니다.",
      "SNS 구성 요소에서 암호화를 켭니다. 기본 키 정책을 업데이트하여 인증된 보안 주체 \n집합으로 키 사용을 제한합니다. TLS 를 통한 암호화된 연결만 허용하도록 주제 정책에서 \n조건을 설정합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리 키를 사용하여 SQS 구성 요소에서 \n서버 측 암호화를 켭니다. 키 정책을 적용하여 인증된 보안 주체 집합으로 키 사용을 \n제한합니다. TLS 를 통한 암호화된 연결만 허용하도록 대기열 정책에서 조건을 설정합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리 키를 사용하여 SQS 구성 요소에서 \n서버 측 암호화를 켭니다. IAM 정책을 적용하여 인증된 보안 주체 집합으로 키 사용을 \n제한합니다. TLS 를 통한 암호화된 연결만 허용하도록 대기열 정책에서 조건을 설정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102125-exam-aws-certified-sol",
    "glossary": {
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스"
    }
  },
  {
    "id": 365,
    "question": "회사는 Amazon RDS 에서 지원하는 웹 애플리케이션을 실행합니다. 새로운 데이터베이스 \n관리자가 실수로 데이터베이스 테이블의 정보를 편집하여 데이터 손실을 일으켰습니다. \n이러한 유형의 사고에서 복구하는 데 도움이 되도록 회사는 지난 30 일 동안 변경이 \n발생하기 5 분 전의 상태로 데이터베이스를 복원할 수 있는 기능을 원합니다. \n이 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 기능을 디자인에 포함해야 합니까?",
    "options": [
      "읽기 복제본",
      "수동 스냅샷",
      "자동 백업",
      "다중 AZ 배포"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102127-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/rds/features/backup/ \n자동 백업은 요구 사항을 충족합니다. Amazon RDS 를 사용하면 DB 인스턴스의 백업을 \n자동으로 생성할 수 있습니다. 자동 백업을 사용하면 DB 인스턴스에 대한 PITR(특정 시점 \n복구)을 보존 기간(최대 35일) 내의 특정 초 단위로 낮출 수 있습니다. 보존 기간을 30일로 \n설정하면 최근 30 일 이내 변경 전 최대 5 분 전의 상태로 데이터베이스를 복원할 수 \n있습니다.",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 366,
    "question": "회사의 웹 애플리케이션은 AWS Lambda 함수 앞의 Amazon API Gateway API 와 Amazon \nDynamoDB 데이터베이스로 구성됩니다. Lambda 함수는 비즈니스 로직을 처리하고 \nDynamoDB 테이블은 데이터를 호스팅합니다. 애플리케이션은 Amazon Cognito 사용자 \n풀을 사용하여 애플리케이션의 개별 사용자를 식별합니다. 솔루션 설계자는 구독이 있는 \n\n=== PAGE 378 ===\n사용자만 프리미엄 콘텐츠에 액세스할 수 있도록 애플리케이션을 업데이트해야 합니다. \n최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "API Gateway API 에서 API 캐싱 및 제한을 활성화합니다.",
      "API Gateway API 에서 AWS WAF 를 설정합니다. 구독이 있는 사용자를 필터링하는 \n규칙을 만듭니다.",
      "DynamoDB 테이블의 프리미엄 콘텐츠에 세분화된 IAM 권한을 적용합니다.",
      "구독하지 않은 사용자의 액세스를 제한하기 위해 API 사용 계획 및 API 키를 \n구현하십시오."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102128-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 옵션은 API 사용 계획 및 API 키를 사용하기 때문에 가장 효율적입니다. API 에 액세스할 \n수 있는 사람과 API 에 액세스할 수 있는 양과 속도를 제어할 수 있는 Amazon API \nGateway\n의 기능입니다. 또한 API 사용 계획 및 API 키를 구현하여 구독하지 않은 \n사용자의 액세스를 제한하므로 API 에 대한 다양한 액세스 계층을 생성하고 그에 따라 \n사용자에게 요금을 청구할 수 있습니다. 이 솔루션은 구독이 있는 사용자만 프리미엄 \n콘텐츠에 액세스할 수 있도록 애플리케이션 업데이트 요구 사항을 충족합니다. \n옵션 A 는 Amazon API Gateway 의 기능인 API Gateway API 에서 API 캐싱 및 제한을 \n사용하기 때문에 효율성이 떨어집니다. \nAPI\n의 성능과 가용성을 개선하고 트래픽 급증으로부터 백엔드 시스템을 보호할 수 \n있습니다. 그러나 이는 가입하지 않은 사용자의 액세스를 제한하는 방법을 제공하지 \n않습니다. \n옵션 B 는 가용성에 영향을 미치거나 보안을 손상시키거나 과도한 리소스를 소비할 수 있는 \n일반적인 웹 악용으로부터 웹 애플리케이션 또는 API 를 보호하는 웹 애플리케이션 방화벽 \n서비스인 API Gateway API 에서 AWS WAF 를 사용하기 때문에 효율성이 떨어집니다. 그러나 \n이는 가입하지 않은 사용자의 액세스를 제한하는 방법을 제공하지 않습니다. \n옵션 C 는 테이블 내의 특정 항목 또는 속성에 대한 액세스를 제어할 수 있는 권한인 \nDynamoDB 테이블의 프리미엄 콘텐츠에 대한 세분화된 IAM 권한을 사용하기 때문에 \n효율성이 떨어집니다. 그러나 이는 API 수준에서 구독하지 않은 사용자의 액세스를 \n제한하는 방법을 제공하지 않습니다.",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 367,
    "question": "한 회사에서 Amazon Route 53 지연 시간 기반 라우팅을 사용하여 전 세계 사용자를 위해 \n\n=== PAGE 379 ===\nUDP 기반 애플리케이션으로 요청을 라우팅하고 있습니다. 이 애플리케이션은 미국, 아시아 \n및 유럽에 있는 회사의 온프레미스 데이터 센터에 있는 중복 서버에서 호스팅됩니다. \n회사의 규정 준수 요구 사항에 따르면 애플리케이션은 온프레미스에서 호스팅되어야 합니다. \n회사는 애플리케이션의 성능과 가용성을 개선하고자 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "3 개의 AWS 리전에서 3 개의 NLB(Network Load Balancer)를 구성하여 온프레미스 \n엔드포인트를 처리합니다. AWS Global Accelerator 를 사용하여 가속기를 생성하고 NLB 를 \n엔드포인트로 등록합니다. 가속기 DNS 를 가리키는 CNAME 을 사용하여 애플리케이션에 \n대한 액세스를 제공합니다.",
      "3 개의 AWS 리전에서 3 개의 Application Load Balancer(ALB)를 구성하여 온프레미스 \n엔드포인트를 처리합니다. AWS Global Accelerator 를 사용하여 가속기를 생성하고 ALB 를 \n엔드포인트로 등록합니다. 가속기 DNS 를 가리키는 CNAME 을 사용하여 애플리케이션에 \n대한 액세스를 제공합니다.",
      "3 개의 AWS 리전에서 3 개의 NLB(Network Load Balancer)를 구성하여 온프레미스 \n엔드포인트를 처리합니다. Route 53 에서 3 개의 NLB 를 가리키는 지연 시간 기반 레코드를 \n생성하고 이를 Amazon CloudFront 배포의 오리진으로 사용합니다. CloudFront DNS 를 \n가리키는 CNAME 을 사용하여 애플리케이션에 대한 액세스를 제공합니다.",
      "온프레미스 엔드포인트를 처리하기 위해 3 개의 AWS 리전에서 3 개의 ALB(Application \nLoad Balancer)를 구성합니다. Route 53 에서 3 개의 ALB 를 가리키는 지연 시간 기반 \n레코드를 생성하고 이를 Amazon CloudFront 배포의 오리진으로 사용합니다. CloudFront \nDNS 를 가리키는 CNAME 을 사용하여 애플리케이션에 대한 액세스를 제공합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102131-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/ko/step-functions/#:~:text=AWS%20Step%20Functions%20is%\n20a \nAWS Step Functions 의 일반적인 사용 사례는 사람의 개입이 필요한 작업입니다(예: 승인 \n프로세스). Step Functions 를 사용하면 분산 애플리케이션의 구성 요소를 상태 머신이라고 \n하는 시각적 워크플로의 일련의 단계로 쉽게 조정할 수 있습니다. 안정적이고 확장 가능한 \n방식으로 애플리케이션의 단계를 실행하기 위해 상태 시스템을 신속하게 구축하고 실행할 \n수 있습니다.",
    "glossary": {
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 368,
    "question": "=== PAGE 380 ===\n솔루션 설계자는 모든 신규 사용자가 특정 복잡성 요구 사항과 IAM 사용자 암호에 대한 \n필수 교체 기간을 갖기를 원합니다. \n이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "전체 AWS 계정에 대한 전반적인 암호 정책을 설정합니다.",
      "AWS 계정의 각 IAM 사용자에 대한 암호 정책을 설정합니다.",
      "타사 공급업체 소프트웨어를 사용하여 암호 요구 사항을 설정합니다.",
      "Amazon CloudWatch 규칙을 Create_newuser 이벤트에 연결하여 적절한 요구 사항으로 \n암호를 설정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102132-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 옵션은 IAM 사용자 암호에 대한 복잡성 요구 사항 및 필수 교체 기간을 지정하는 \n방법인 전체 AWS 계정에 대한 전체 암호 정책을 설정하기 때문에 가장 효율적입니다. 또한 \n암호 정책은 계정의 모든 IAM 사용자에게 적용되므로 모든 새 사용자에 대한 암호 정책 \n설정 요구 사항을 충족합니다. 이 솔루션은 IAM 사용자 암호에 대한 특정 복잡성 요구 \n사항 및 필수 교체 기간 설정 요구 사항을 충족합니다. \n옵션 B 는 AWS 계정의 각 IAM 사용자에 대해 암호 정책을 설정하기 때문에 효율성이 \n떨어집니다. 암호 정책은 계정 수준에서만 설정할 수 있으므로 불가능합니다. \n옵션 C\n는 타사 공급업체 소프트웨어를 사용하여 암호 요구 사항을 설정하기 때문에 \n효율성이 떨어집니다. IAM 은 암호 정책을 설정하는 기본 제공 방법을 제공하므로 필요하지 \n않습니다. \n옵션 D 는 Amazon CloudWatch 규칙을 Create_newuser 이벤트에 연결하여 적절한 요구 \n사항으로 암호를 설정하기 때문에 효율성이 떨어집니다. 이는 CloudWatch 규칙이 IAM \n사용자 암호를 수정할 수 없기 때문에 불가능합니다.",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 369,
    "question": "회사에서 애플리케이션을 Amazon EC2 Linux 인스턴스로 마이그레이션했습니다. 이러한 \nEC2 인스턴스 중 하나는 일정에 따라 여러 개의 1 시간 작업을 실행합니다. 이러한 작업은 \n서로 다른 팀에서 작성했으며 공통 프로그래밍 언어가 없습니다. 회사는 이러한 작업이 \n단일 인스턴스에서 실행되는 동안 성능과 확장성에 대해 우려하고 있습니다. 솔루션 \n설계자는 이러한 문제를 해결하기 위한 솔루션을 구현해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Batch 를 사용하여 작업을 작업으로 실행합니다. Amazon EventBridge(Amazon \n\n=== PAGE 381 ===\nCloudWatch Events)를 사용하여 작업을 예약합니다.",
      "EC2 인스턴스를 컨테이너로 변환합니다. AWS App Runner 를 사용하여 작업을 작업으로 \n실행할 온디맨드 컨테이너를 생성합니다.",
      "작업을 AWS Lambda 함수에 복사합니다. Amazon EventBridge(Amazon CloudWatch \nEvents)를 사용하여 Lambda 함수를 예약합니다.",
      "작업을 실행하는 EC2 인스턴스의 Amazon 머신 이미지(AMI)를 생성합니다. AMI 로 Auto \nScaling 그룹을 생성하여 인스턴스의 여러 복사본을 실행합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102133-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Batch 는 사용자가 AWS\n에서 배치 작업을 실행할 수 있게 해주는 완전관리형 \n서비스입니다. 다른 언어로 작성된 다양한 유형의 작업을 처리하고 EC2 인스턴스에서 \n실행할 수 있습니다. 또한 Amazon EventBridge(Amazon CloudWatch Events)와 통합되어 \n시간 또는 이벤트 트리거를 기반으로 작업을 예약합니다. 이 솔루션은 성능, 확장성 및 \n낮은 운영 오버헤드 요구 사항을 충족합니다. \n1. EC2 인스턴스를 컨테이너로 변환합니다. AWS App Runner 를 사용하여 작업을 작업으로 \n실행할 온디맨드 컨테이너를 생성합니다. 이 솔루션은 EC2 인스턴스를 컨테이너로 \n변환하고 웹 애플리케이션을 자동으로 빌드 및 배포하고 트래픽 부하를 분산하는 서비스인 \nAWS App Runner 를 사용하므로 낮은 운영 오버헤드 요구 사항을 충족하지 않습니다. 배치 \n작업을 실행하는 데는 필요하지 않습니다. \n2. 작업을 AWS Lambda 함수에 복사합니다. Amazon EventBridge(Amazon CloudWatch \nEvents)를 사용하여 Lambda 함수를 예약합니다. AWS Lambda 에는 실행 시간이 15 분, \n메모리 할당이 10GB\n로 제한되어 있으므로 이 솔루션은 성능 요구 사항을 충족하지 \n않습니다. 이러한 제한은 1 시간 작업을 실행하는 데 충분하지 않을 수 있습니다. \n3. 작업을 실행하는 EC2 인스턴스의 Amazon 머신 이미지(AMI)를 생성합니다. AMI 로 Auto \nScaling 그룹을 생성하여 인스턴스의 여러 복사본을 실행합니다. 이 솔루션은 구성 및 \n관리가 필요한 추가 리소스인 AMI 및 Auto Scaling 그룹을 생성하고 유지 관리하므로 낮은 \n운영 오버헤드 요구 사항을 충족하지 않습니다. \n참조 URL:  \n\ndocs.aws.amazon.com/ko_kr/whitepapers/latest/aws-overview/compute-services.\nhtml \n \n \nNAT 게이트웨이는 프라이빗 서브넷의 인스턴스가 인터넷이나 다른 AWS 서비스에 연결할",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 370,
    "question": "회사는 VPC 에서 공용 3 계층 웹 애플리케이션을 실행합니다. 애플리케이션은 여러 가용 \n영역의 Amazon EC2 인스턴스에서 실행됩니다. 프라이빗 서브넷에서 실행되는 EC2 \n인스턴스는 인터넷을 통해 라이선스 서버와 통신해야 합니다. 회사는 운영 유지 보수를 \n최소화하는 관리형 솔루션이 필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "퍼블릭 서브넷에서 NAT 인스턴스를 프로비저닝합니다. NAT 인스턴스를 가리키는 기본 \n경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다.",
      "프라이빗 서브넷에서 NAT 인스턴스를 프로비저닝합니다. NAT 인스턴스를 가리키는 기본 \n경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다.",
      "퍼블릭 서브넷에서 NAT 게이트웨이를 프로비저닝합니다. NAT 게이트웨이를 가리키는 \n기본 경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다.",
      "프라이빗 서브넷에서 NAT 게이트웨이를 프로비저닝합니다. NAT 게이트웨이를 가리키는 \n기본 경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/102134-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 371,
    "question": "회사는 디지털 미디어 스트리밍 애플리케이션을 호스팅하기 위해 Amazon Elastic \nKubernetes Service(Amazon EKS) 클러스터를 생성해야 합니다. EKS 클러스터는 저장을 \n위해 Amazon Elastic Block Store(Amazon EBS) 볼륨이 지원하는 관리형 노드 그룹을 \n사용합니다. 회사는 AWS Key Management Service(AWS KMS)에 저장된 고객 관리형 키를 \n\n=== PAGE 383 ===\n사용하여 유휴 상태의 모든 데이터를 암호화해야 합니다. \n최소한의 운영 오버헤드로 이 요구 사항을 충족하는 작업 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "고객 \n관리 \n키를 \n사용하는 \nKubernetes \n플러그인을 \n사용하여 \n데이터 \n암호화를 \n수행합니다.",
      "EKS 클러스터 생성 후 EBS 볼륨을 찾습니다. 고객 관리형 키를 사용하여 암호화를 \n활성화합니다.",
      "EKS 클러스터가 생성될 AWS 리전에서 기본적으로 EBS 암호화를 활성화합니다. 고객 \n관리형 키를 기본 키로 선택합니다.",
      "EKS 클러스터를 생성합니다. 고객 관리형 키에 대한 권한을 부여하는 정책이 있는 IAM \n역할을 생성합니다. 역할을 EKS 클러스터와 연결합니다.",
      "고객 관리형 키를 EKS 클러스터에 Kubernetes 비밀로 저장합니다. 고객 관리형 키를 \n사용하여 EBS 볼륨을 암호화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102135-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 372,
    "question": "회사에서 Oracle 데이터베이스를 AWS 로 마이그레이션하려고 합니다. 데이터베이스는 지리 \n코드로 식별되는 고해상도 지리 정보 시스템(GIS) 이미지 수백만 개가 포함된 단일 \n테이블로 구성됩니다. \n자연 재해가 발생하면 몇 분마다 수만 개의 이미지가 업데이트됩니다. 각 지리적 코드에는 \n연결된 단일 이미지 또는 행이 있습니다. 회사는 이러한 이벤트 중에 가용성과 확장성이 \n뛰어난 솔루션을 원합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "이미지와 지리적 코드를 데이터베이스 테이블에 저장합니다. Amazon RDS 다중 AZ DB \n인스턴스에서 실행되는 Oracle 을 사용합니다.",
      "Amazon S3 버킷에 이미지를 저장합니다. 지리적 코드를 키로, 이미지 S3 URL 을 값으로 \n사용하여 Amazon DynamoDB 를 사용합니다.",
      "Amazon DynamoDB 테이블에 이미지와 지리적 코드를 저장합니다. 부하가 높은 시간 \n동안 DynamoDB Accelerator(DAX)를 구성합니다.",
      "Amazon S3 버킷에 이미지를 저장합니다. 지리 코드와 이미지 S3 URL 을 데이터베이스 \n테이블에 저장합니다. Amazon RDS 다중 AZ DB 에서 실행되는 Oracle 사용"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/102136-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 373,
    "question": "회사에 자동차의 loT 센서에서 데이터를 수집하는 애플리케이션이 있습니다. 데이터는 \nAmazon Kinesis Data 를 통해 Amazon S3 에 스트리밍 및 저장됩니다. \n소방 호스. 데이터는 매년 수조 개의 S3 객체를 생성합니다. 매일 아침 회사는 지난 30 일 \n동안의 데이터를 사용하여 일련의 기계 학습(ML) 모델을 재교육합니다. \n매년 4 회 회사는 이전 12 개월의 데이터를 사용하여 분석을 수행하고 다른 ML 모델을 \n교육합니다. 데이터는 최대 1 년 동안 최소한의 지연으로 사용할 수 있어야 합니다. 1 년 \n후에는 데이터를 보관 목적으로 보관해야 합니다. \n\n=== PAGE 385 ===\n이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": [
      "S3 Intelligent-Tiering 스토리지 클래스를 사용합니다. 1 년 후 객체를 S3 Glacier Deep \nArchive 로 전환하는 S3 수명 주기 정책을 생성합니다.",
      "S3 Intelligent-Tiering 스토리지 클래스를 사용합니다. 1년 후 자동으로 객체를 S3 Glacier \nDeep Archive 로 이동하도록 S3 Intelligent-Tiering 을 구성합니다.",
      "S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지 클래스를 사용합니다. 1 년 후 \n객체를 S3 Glacier Deep Archive 로 전환하는 S3 수명 주기 정책을 생성합니다.",
      "S3 Standard 스토리지 클래스를 사용합니다. 30 일 후에 객체를 S3 Standard-Infrequent \nAccess(S3 Standard-IA)로 전환한 다음 1 년 후에 S3 Glacier Deep Archive 로 전환하는 S3 \n수명 주기 정책을 생성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102137-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 374,
    "question": "한 회사가 us-east-1 리전 내의 3 개의 별도 VPC 에서 여러 비즈니스 애플리케이션을 \n실행하고 \n있습니다. \n애플리케이션은 \nVPC \n간에 \n통신할 \n수 \n있어야 \n합니다. \n또한 \n애플리케이션은 \n단일 \n온프레미스 \n데이터 \n센터에서 \n실행되는 \n대기 \n시간에 \n민감한 \n애플리케이션에 매일 수백 기가바이트의 데이터를 지속적으로 보낼 수 있어야 합니다. \n솔루션 설계자는 비용 효율성을 극대화하는 네트워크 연결 솔루션을 설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "데이터 센터에서 AWS 로 3 개의 AWS Site-to-Site VPN 연결을 구성합니다. 각 VPC 에 \n대해 하나의 VPN 연결을 구성하여 연결을 설정합니다.",
      "각 VPC 에서 타사 가상 네트워크 어플라이언스를 시작합니다. 데이터 센터와 각 가상 \n어플라이언스 간에 IPsec VPN 터널을 설정합니다.",
      "데이터 센터에서 us-east-1 의 Direct Connect 게이트웨이로 3 개의 AWS Direct \nConnect 연결을 설정합니다. Direct Connect 연결 중 하나를 사용하도록 각 VPC 를 \n구성하여 연결을 설정합니다.",
      "데이터 센터에서 AWS\n로 하나의 AWS Direct Connect 연결을 설정합니다. 전송 \n게이트웨이를 생성하고 각 VPC 를 전송 게이트웨이에 연결합니다. Direct Connect 연결과 \ntransit gateway 간의 연결을 설정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/102138-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 375,
    "question": "전자상거래 회사는 주문 처리 작업을 완료하기 위해 여러 서버리스 기능과 AWS 서비스를 \n포함하는 분산 애플리케이션을 구축하고 있습니다. 이러한 작업에는 워크플로의 일부로 \n수동 승인이 필요합니다. 솔루션 설계자는 주문 처리 애플리케이션을 위한 아키텍처를 \n설계해야 합니다. 솔루션은 여러 AWS Lambda 기능을 반응형 서버리스 애플리케이션으로 \n결합할 수 있어야 합니다. 솔루션은 또한 Amazon EC2 인스턴스, 컨테이너 또는 \n온프레미스 서버에서 실행되는 데이터 및 서비스를 오케스트레이션해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Step Functions 를 사용하여 애플리케이션을 구축하십시오.",
      "AWS Glue 작업에서 모든 애플리케이션 구성 요소를 통합합니다.",
      "Amazon Simple Queue Service(Amazon SQS)를 사용하여 애플리케이션을 구축합니다.",
      "AWS Lambda 함수와 Amazon EventBridge 이벤트를 사용하여 애플리케이션을 \n구축합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/102139-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Step Functions 는 시각적 워크플로를 사용하여 분산 애플리케이션 및 마이크로 \n서비스의 구성 요소를 조정하여 애플리케이션을 쉽게 구축할 수 있게 해주는 완전 관리형 \n서비스입니다. \nStep Functions 를 사용하면 여러 AWS Lambda 함수를 반응형 서버리스 애플리케이션에 \n결합하고 Amazon EC2 인스턴스, 컨테이너 또는 온프레미스 서버에서 실행되는 데이터 및 \n서비스를 오케스트레이션할 수 있습니다. Step Functions 는 또한 워크플로의 일부로 수동",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  }
];