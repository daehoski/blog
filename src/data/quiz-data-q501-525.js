export const quizData = [
  {
    "id": 501,
    "question": "회사는 고객 결제 데이터를 Amazon S3 의 회사 데이터 레이크로 수집하려고 합니다. \n회사는 평균적으로 1 분마다 결제 데이터를 수신합니다. 회사는 결제 데이터를 실시간으로 \n분석하기를 원합니다. 그런 다음 회사는 데이터를 데이터 레이크로 수집하려고 합니다. \n이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Kinesis Data Streams 를 사용하여 데이터를 수집하십시오. AWS Lambda 를 \n사용하여 실시간으로 데이터를 분석합니다.",
      "AWS Glue 를 사용하여 데이터를 수집합니다. Amazon Kinesis Data Analytics 를 사용하여 \n데이터를 실시간으로 분석하십시오.",
      "Amazon Kinesis Data Firehose 를 사용하여 데이터를 수집합니다. Amazon Kinesis Data \nAnalytics 를 사용하여 데이터를 실시간으로 분석하십시오.",
      "Amazon API Gateway 를 사용하여 데이터를 수집합니다. AWS Lambda 를 사용하여 \n실시간으로 데이터를 분석합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109421-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 502,
    "question": "회사는 Amazon EC2 에서 콘텐츠 관리 시스템(CMS)을 사용하는 웹 사이트를 운영합니다. \nCMS 는 단일 EC2 인스턴스에서 실행되며 데이터 계층에 Amazon Aurora MySQL 다중 AZ \nDB 인스턴스를 사용합니다. 웹 사이트 이미지는 EC2 인스턴스 내부에 탑재된 Amazon \nElastic Block Store(Amazon EBS) 볼륨에 저장됩니다. \n웹 사이트의 성능과 복원력을 개선하기 위해 솔루션 설계자가 취해야 하는 작업 조합은 \n무엇입니까? (2 개 선택)",
    "options": [
      "웹 사이트 이미지를 모든 EC2 인스턴스에 탑재된 Amazon S3 버킷으로 이동합니다.",
      "기본 EC2 인스턴스의 NFS 공유를 사용하여 웹사이트 이미지를 공유합니다. 이 공유를 \n다른 EC2 인스턴스에 마운트합니다.",
      "모든 EC2 인스턴스에 탑재된 Amazon Elastic File System(Amazon EFS) 파일 \n시스템으로 웹 사이트 이미지를 이동합니다.",
      "기존 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하여 Auto \nScaling 그룹의 일부로 Application Load Balancer 뒤에 새 인스턴스를 프로비저닝합니다. \n최소 2 개의 인스턴스를 유지하도록 Auto Scaling 그룹을 구성합니다. 웹 사이트에 대한 \nAWS Global Accelerator 에서 액셀러레이터를 구성합니다.",
      "기존 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하여 Auto \nScaling 그룹의 일부로 Application Load Balancer 뒤에 새 인스턴스를 프로비저닝합니다. \n최소 2 개의 인스턴스를 유지하도록 Auto Scaling 그룹을 구성합니다. 웹 사이트에 대한 \nAmazon CloudFront 배포를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109420-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n옵션 C 는 웹 사이트 이미지를 모든 EC2 인스턴스에 탑재된 Amazon EFS 파일 시스템으로 \n이동하는 기능을 제공합니다. Amazon EFS 는 여러 EC2 인스턴스에서 동시에 액세스할 수 \n있는 확장 가능하고 완벽하게 관리되는 파일 스토리지 솔루션을 제공합니다. 이렇게 하면 \n모든 인스턴스에서 웹 사이트 이미지에 효율적이고 일관되게 액세스할 수 있으므로 옵션 \nE 에서 성능이 향상됩니다. Auto Scaling 그룹은 최소 2 개의 인스턴스를 유지 관리하여 \n비정상 인스턴스를 자동으로 교체하여 복원력을 보장합니다. \n또한 웹 사이트에 대해 Amazon CloudFront 배포를 구성하면 최종 사용자에게 더 가까운 \n엣지 위치에서 콘텐츠를 캐싱하여 지연 시간을 줄이고 콘텐츠 전송을 개선하여 성능을 더욱 \n향상시킵니다. \n따라서 이러한 작업을 결합하면 효율적인 이미지 저장 및 콘텐츠 전달을 통해 웹 사이트의 \n성능이 향상됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 503,
    "question": "회사에서 인프라 모니터링 서비스를 실행합니다. 이 회사는 서비스가 고객 AWS 계정의 \n데이터를 모니터링할 수 있는 새로운 기능을 구축하고 있습니다. 새로운 기능은 고객 \n계정에서 AWS API 를 호출하여 Amazon EC2 인스턴스를 설명하고 Amazon CloudWatch \n지표를 읽습니다. \n회사는 가장 안전한 방법으로 고객 계정에 대한 액세스 권한을 얻기 위해 무엇을 해야 \n합니까?",
    "options": [
      "고객이 회사 계정에 대한 읽기 전용 EC2 및 CloudWatch 권한과 신뢰 정책을 사용하여 \n계정에 IAM 역할을 생성하는지 확인합니다.",
      "토큰 판매기를 구현하는 서버리스 API 를 생성하여 읽기 전용 EC2 및 CloudWatch \n권한이 있는 역할에 대한 임시 AWS 자격 증명을 제공합니다.",
      "고객이 자신의 계정에서 읽기 전용 EC2 및 CloudWatch 권한을 가진 IAM 사용자를 \n생성하는지 확인합니다. 비밀 관리 시스템에서 고객 액세스 및 비밀 키를 암호화하고 \n저장합니다.",
      "고객이 자신의 계정에 Amazon Cognito 사용자를 생성하여 읽기 전용 EC2 및 \nCloudWatch 권한이 있는 IAM 역할을 사용하는지 확인합니다. 암호 관리 시스템에서 \nAmazon Cognito 사용자 및 암호를 암호화하고 저장합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109595-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n고객이 자신의 계정에서 필요한 권한이 있는 IAM 역할을 생성하도록 함으로써 회사는 AWS \nIdentity and Access Management(IAM)를 사용하여 교차 계정 액세스를 설정할 수 있습니다. \n신뢰 정책은 회사의 AWS 계정이 일시적으로 고객의 IAM 역할을 맡도록 허용하여 고객 \n계정 내의 지정된 리소스(EC2 인스턴스 및 CloudWatch 지표)에 대한 액세스 권한을 \n부여합니다. 이 접근 방식은 회사가 필요한 권한만 요청하고 고객의 장기 액세스 키나 \n사용자 자격 증명을 요구하지 않기 때문에 최소 권한 원칙을 따릅니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 504,
    "question": "회사는 수백 개의 AWS 계정에 걸쳐 있는 us-east-1 리전의 여러 VPC 를 연결해야 합니다. \n회사의 네트워킹 팀에는 클라우드 네트워크를 관리하기 위한 자체 AWS 계정이 있습니다. \nVPC 를 연결하기 위한 운영상 가장 효율적인 솔루션은 무엇입니까? \n\n=== PAGE 492 ===",
    "options": [
      "각 VPC 간에 VPC 피어링 연결을 설정합니다. 연결된 각 서브넷의 경로 테이블을 \n업데이트합니다.",
      "인터넷을 통해 각 VPC\n를 연결하도록 각 VPC\n에서 NAT 게이트웨이와 인터넷 \n게이트웨이를 구성합니다.",
      "네트워킹 팀의 AWS 계정에서 AWS Transit Gateway 를 생성합니다. 각 VPC 에서 정적 \n경로를 구성합니다.",
      "각 VPC 에 VPN 게이트웨이를 배포합니다. 네트워킹 팀의 AWS 계정에 전송 VPC 를 \n생성하여 각 VPC 에 연결합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109690-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAWS Transit Gateway 는 여러 VPC, 온프레미스 네트워크 및 원격 네트워크를 연결하기 \n위한 확장성이 뛰어난 중앙 집중식 허브입니다. 단일 진입점을 제공하고 필요한 연결 수를 \n줄임으로써 네트워크 연결을 단순화합니다. 이 시나리오에서 네트워킹 팀의 AWS 계정에 \nAWS Transit Gateway 를 배포하면 여러 VPC 에서 네트워크 연결을 효율적으로 관리하고 \n제어할 수 있습니다.",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "Transit Gateway": "수많은 VPC와 온프레미스 네트워크를 중앙에서 연결하는 네트워크 허브"
    }
  },
  {
    "id": 505,
    "question": "한 회사에 야간 배치 작업을 실행하여 데이터를 처리하는 Amazon EC2 인스턴스가 \n있습니다. EC2 인스턴스는 온디맨드 결제를 사용하는 Auto Scaling 그룹에서 실행됩니다. \n한 인스턴스에서 작업이 실패하면 다른 인스턴스가 작업을 다시 처리합니다. 배치 작업은 \n현지 시간으로 매일 오전 12 시에서 오전 6 시 사이에 실행됩니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 EC2 인스턴스를 제공하는 솔루션은 \n무엇입니까?",
    "options": [
      "배치 작업이 사용하는 Auto Scaling 그룹의 인스턴스 제품군을 포함하는 Amazon EC2 용 \n1 년 절약 플랜을 구매합니다.",
      "배치 작업이 사용하는 Auto Scaling 그룹에 있는 인스턴스의 특정 인스턴스 유형 및 \n운영 체제에 대해 1 년 예약 인스턴스를 구매합니다.",
      "Auto Scaling 그룹에 대한 새 시작 템플릿을 생성합니다. 인스턴스를 스팟 인스턴스로 \n설정합니다. CPU 사용량에 따라 확장하도록 정책을 설정합니다.",
      "Auto Scaling 그룹에 대한 새 시작 템플릿을 생성합니다. 인스턴스 크기를 늘립니다. \nCPU 사용량에 따라 확장하도록 정책을 설정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109691-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 506,
    "question": "소셜 미디어 회사는 웹사이트용 기능을 구축하고 있습니다. 이 기능을 통해 사용자는 \n사진을 업로드할 수 있습니다. 회사는 대규모 이벤트 기간 동안 수요가 크게 증가할 것으로 \n예상하고 웹사이트가 사용자의 업로드 트래픽을 처리할 수 있는지 확인해야 합니다. \nMOST 확장성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "사용자의 브라우저에서 응용 프로그램 서버로 파일을 업로드합니다. 파일을 Amazon S3 \n버킷으로 전송합니다.",
      "AWS Storage Gateway 파일 게이트웨이를 프로비저닝합니다. 사용자의 브라우저에서 \n파일 게이트웨이로 직접 파일을 업로드합니다.",
      "애플리케이션에서 Amazon S3 미리 서명된 URL 을 생성합니다. 사용자 브라우저에서 S3 \n버킷으로 직접 파일을 업로드합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템을 프로비저닝합니다. 사용자의 \n브라우저에서 파일 시스템으로 직접 파일을 업로드합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109692-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 507,
    "question": "회사에 여행 발권을 위한 웹 애플리케이션이 있습니다. 이 애플리케이션은 북미 지역의 \n단일 데이터 센터에서 실행되는 데이터베이스를 기반으로 합니다. 회사는 글로벌 사용자 \n기반에 \n서비스를 \n제공하기 \n위해 \n응용 \n프로그램을 \n확장하려고 \n합니다. \n회사는 \n애플리케이션을 여러 AWS 리전에 배포해야 합니다. 예약 데이터베이스 업데이트 시 평균 \n대기 시간은 1 초 미만이어야 합니다. \n이 회사는 여러 지역에 걸쳐 웹 플랫폼을 별도로 배포하려고 합니다. 그러나 회사는 전 \n세계적으로 일관된 단일 기본 예약 데이터베이스를 유지해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 솔루션을 권장해야 합니까?",
    "options": [
      "Amazon DynamoDB 를 사용하도록 애플리케이션을 변환합니다. 중앙 예약 테이블에 전역 \n테이블을 사용합니다. 각 지역 배포에서 올바른 지역 엔드포인트를 사용합니다.",
      "데이터베이스를 Amazon Aurora MySQL 데이터베이스로 마이그레이션합니다. 각 지역에 \nAurora 읽기 전용 복제본을 배포합니다. 데이터베이스에 액세스하려면 각 지역 배포에서 \n올바른 지역 엔드포인트를 사용하세요. \n\n=== PAGE 494 ===",
      "데이터베이스를 Amazon RDS for MySQL 데이터베이스로 마이그레이션합니다. 각 리전에 \nMySQL 읽기 전용 복제본을 배포합니다. 데이터베이스에 액세스하려면 각 지역 배포에서 \n올바른 지역 엔드포인트를 사용하세요.",
      "애플리케이션을 Amazon Aurora Serverless 데이터베이스로 마이그레이션합니다. 각 \n지역에 데이터베이스 인스턴스를 배포합니다. 각 지역 배포에서 올바른 지역 엔드포인트를 \n사용하여 데이터베이스에 액세스합니다. AWS Lambda 함수를 사용하여 각 리전에서 이벤트 \n스트림을 처리하여 데이터베이스를 동기화합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109608-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 508,
    "question": "한 회사에서 여러 Microsoft Windows Server 워크로드를 us-west-1 리전에서 실행되는 \nAmazon EC2 인스턴스로 마이그레이션했습니다. 회사는 필요에 따라 이미지를 생성하기 \n위해 워크로드를 수동으로 백업합니다. \nus-west-1 리전에서 자연 재해가 발생한 경우 회사는 us-west-2 리전에서 워크로드를 \n신속하게 복구하기를 원합니다. 회사는 EC2 인스턴스에서 24 시간 이상의 데이터 손실을 \n원하지 않습니다. 회사는 또한 EC2 인스턴스의 모든 백업을 자동화하려고 합니다. \n최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2 개 선택)",
    "options": [
      "Amazon EC2 지원 Amazon 머신 이미지(AMI) 수명 주기 정책을 생성하여 태그 기반 \n백업을 생성합니다. 하루에 두 번 실행되도록 백업을 예약합니다. 필요에 따라 이미지를 \n복사합니다.",
      "Amazon EC2 지원 Amazon 머신 이미지(AMI) 수명 주기 정책을 생성하여 태그 기반 \n백업을 생성합니다. 하루에 두 번 실행되도록 백업을 예약합니다. us-west-2 리전에 대한 \n복사본을 구성합니다.",
      "AWS Backup 을 사용하여 us-west-1 및 us-west-2 에 백업 볼트를 생성합니다. 태그 \n값을 기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 백업 데이터를 us-west-2 에 \n복사하기 위해 예약된 작업으로 실행할 AWS Lambda 함수를 생성합니다.",
      "AWS Backup 을 사용하여 백업 볼트를 생성합니다. AWS Backup 을 사용하여 태그 값을 \n기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 사본의 대상을 us-west-2 로 \n정의합니다. 하루에 두 번 실행할 백업 일정을 지정합니다.",
      "AWS Backup 을 사용하여 백업 볼트를 생성합니다. AWS Backup 을 사용하여 태그 값을 \n기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 하루에 두 번 실행할 백업 일정을 \n지정합니다. 요청 시 us-west-2 에 복사합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109530-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n옵션 B\n는 EC2 지원 Amazon 머신 이미지(AMI) 수명 주기 정책을 사용하여 백업 \n프로세스를 자동화할 것을 제안합니다. 하루에 두 번 실행되도록 정책을 구성하고 \nuswest-2 리전에 대한 복사본을 지정함으로써 회사는 정기적인 백업이 생성되고 대체 \n리전에 복사되도록 할 수 있습니다. \n옵션 D 는 중앙 집중식 백업 관리 솔루션을 제공하는 AWS Backup 사용을 제안합니다. \n태그 값을 기반으로 백업 볼트 및 백업 계획을 생성함으로써 회사는 EC2 인스턴스에 대한 \n백업 프로세스를 자동화할 수 있습니다. \n백업 일정은 하루에 두 번 실행되도록 설정할 수 있으며 복사 대상은 us-west-2 리전으로 \n정의할 수 있습니다. \n두 옵션 모두 백업 프로세스를 자동화하고 백업을 us-west-2 리전에 복사하는 것을 \n포함하여 재해 발생 시 데이터 복원력을 보장합니다. 이러한 솔루션은 AWS 서비스에서 \n제공하는 자동화된 백업 및 복사 메커니즘을 활용하여 관리 작업을 최소화합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 509,
    "question": "회사에서 이미지 처리를 위한 2 계층 애플리케이션을 운영하고 있습니다. 애플리케이션은 \n각각 1\n개의 퍼블릭 서브넷과 1\n개의 프라이빗 서브넷이 있는 2\n개의 가용 영역을 \n사용합니다. 웹 계층용 ALB(Application Load Balancer)는 퍼블릭 서브넷을 사용합니다. \n애플리케이션 계층의 Amazon EC2 인스턴스는 프라이빗 서브넷을 사용합니다. \n사용자는 응용 프로그램이 예상보다 느리게 실행되고 있다고 보고합니다. 웹 서버 로그 \n파일의 보안 감사 결과 애플리케이션이 소수의 IP 주소로부터 수백만 건의 불법 요청을 \n받고 있는 것으로 나타났습니다. 솔루션 설계자는 회사가 보다 영구적인 솔루션을 조사하는 \n동안 즉각적인 성능 문제를 해결해야 합니다. \n이 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "웹 계층에 대한 인바운드 보안 그룹을 수정합니다. 리소스를 소비하는 IP 주소에 대한 \n거부 규칙을 추가합니다.",
      "웹 계층 서브넷에 대한 네트워크 ACL 을 수정합니다. 리소스를 소비하는 IP 주소에 대한 \n인바운드 거부 규칙을 추가합니다.",
      "애플리케이션 계층에 대한 인바운드 보안 그룹을 수정합니다. 리소스를 소비하는 IP \n주소에 대한 거부 규칙을 추가합니다.",
      "애플리케이션 계층 서브넷에 대한 네트워크 ACL 을 수정합니다. 리소스를 소비하는 IP \n주소에 대한 인바운드 거부 규칙을 추가합니다. \n\n=== PAGE 496 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109531-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n퍼블릭 서브넷의 첫 번째 항목에서 요청을 거부하고 프라이빗 서브넷에 도달하는 것을 \n허용하지 마십시오. \n이 시나리오에서 보안 감사는 애플리케이션이 소수의 IP 주소로부터 수백만 건의 불법 \n요청을 수신하고 있음을 보여줍니다. 이 문제를 해결하려면 웹 계층 서브넷에 대한 \n네트워크 ACL(액세스 제어 목록)을 수정하는 것이 좋습니다. 리소스를 소비하는 IP 주소를 \n특별히 대상으로 하는 인바운드 거부 규칙을 추가함으로써 네트워크 ACL 은 불법 트래픽이 \n웹 서버에 도달하기 전에 서브넷 수준에서 차단할 수 있습니다. 이는 웹 계층의 과도한 \n로드를 완화하고 애플리케이션의 성능을 향상시키는 데 도움이 됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 510,
    "question": "글로벌 마케팅 회사에는 ap-southeast-2 지역 및 eu-west-1 지역에서 실행되는 \n애플리케이션이 \n있습니다. \neu-west-1\n의 \nVPC\n에서 \n실행되는 \n애플리케이션은 \nap-southeast-2 의 VPC 에서 실행되는 데이터베이스와 안전하게 통신해야 합니다. \n이러한 요구 사항을 충족하는 네트워크 설계는 무엇입니까?",
    "options": [
      "eu-west-1 VPC\n와 ap-southeast-2 VPC 간에 VPC 피어링 연결을 생성합니다. \nap-southeast-2 보안 그룹의 데이터베이스 서버 IP 주소에서 오는 트래픽을 허용하는 \n인바운드 규칙을 eu-west-1 애플리케이션 보안 그룹에 생성합니다.",
      "ap-southeast-2 VPC 와 eu-west-1 VPC 간에 VPC 피어링 연결을 구성합니다. 서브넷 \n경로 테이블을 업데이트합니다. eu-west-1 에 있는 애플리케이션 서버의 보안 그룹 ID 를 \n참조하는 ap-southeast-2 데이터베이스 보안 그룹에서 인바운드 규칙을 생성합니다.",
      "ap-southeast-2 VPC 와 eu-west-1 VPUpdate 서브넷 라우팅 테이블 간에 VPC 피어링 \n연결을 구성합니다. ap-southeast-2 데이터베이스 보안 그룹에서 eu-west-1 애플리케이션 \n서버 IP 주소의 트래픽을 허용하는 인바운드 규칙을 생성합니다.",
      "eu-west-1 VPC 와 ap-southeast-2 VPC 간에 피어링 연결이 있는 전송 게이트웨이를 \n생성합니다. 전송 게이트웨이가 올바르게 피어링되고 라우팅이 구성되면 eu-west-1 에 \n있는 애플리케이션 서버의 보안 그룹 ID 를 참조하는 데이터베이스 보안 그룹에 인바운드 \n규칙을 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109708-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 511,
    "question": "회사에서 PostgreSQL 데이터베이스 스키마를 사용하는 소프트웨어를 개발하고 있습니다. \n회사는 회사 개발자를 위해 여러 개발 환경과 데이터베이스를 구성해야 합니다. 평균적으로 \n각 개발 환경은 8 시간 근무 시간의 절반을 사용합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "자체 Amazon Aurora PostgreSQL 데이터베이스로 각 개발 환경 구성",
      "자체 Amazon RDS for PostgreSQL 단일 AZ DB 인스턴스로 각 개발 환경 구성",
      "자체 Amazon Aurora 온디맨드 PostgreSQL 호환 데이터베이스로 각 개발 환경 구성",
      "Amazon S3 Object Select 를 사용하여 자체 Amazon S3 버킷으로 각 개발 환경 구성"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109532-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 512,
    "question": "회사는 계정으로 태그가 지정된 리소스와 함께 AWS Organizations 를 사용합니다. 이 \n회사는 또한 AWS Backup 을 사용하여 AWS 인프라 리소스를 백업합니다. 회사는 모든 \nAWS 리소스를 백업해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "태그가 지정되지 않은 모든 리소스를 식별하려면 AWS Config\n를 사용하십시오. \n프로그래밍 \n방식으로 \n식별된 \n리소스에 \n태그를 \n지정합니다. \n백업 \n계획에서 \n태그를 \n사용합니다.",
      "AWS Config 를 사용하여 실행 중이 아닌 모든 리소스를 식별합니다. 해당 리소스를 백업 \n볼트에 추가합니다.",
      "모든 AWS 계정 소유자가 리소스를 검토하여 백업해야 하는 리소스를 식별하도록 \n요구합니다.",
      "Amazon Inspector 를 사용하여 규정을 준수하지 않는 모든 리소스를 식별합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109709-exam-aws-certified-sol",
    "glossary": {}
  },
  {
    "id": 513,
    "question": "소셜 미디어 회사는 사용자가 AWS 클라우드에서 호스팅되는 애플리케이션에 이미지를 \n업로드할 수 있도록 허용하려고 합니다. 회사는 이미지가 여러 장치 유형에 표시될 수 \n있도록 이미지 크기를 자동으로 조정하는 솔루션이 필요합니다. 애플리케이션은 하루 종일 \n예측할 수 없는 트래픽 패턴을 경험합니다. 회사는 확장성을 극대화하는 고가용성 솔루션을 \n찾고 있습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "이미지 크기를 조정하고 이미지를 Amazon S3 버킷에 저장하기 위해 AWS Lambda \n함수를 호출하는 Amazon S3 에서 호스팅되는 정적 웹 사이트를 생성합니다.",
      "AWS Step Functions 를 호출하여 이미지 크기를 조정하고 Amazon RDS 데이터베이스에 \n이미지를 저장하는 Amazon CloudFront 에서 호스팅되는 정적 웹 사이트를 생성합니다.",
      "Amazon EC2 인스턴스에서 실행되는 웹 서버에서 호스팅되는 동적 웹 사이트를 \n만듭니다. EC2 인스턴스에서 실행되는 프로세스를 구성하여 이미지 크기를 조정하고 \nAmazon S3 버킷에 이미지를 저장합니다.",
      "Amazon Simple Queue Service(Amazon SQS)에서 크기 조정 작업을 생성하는 자동 확장 \nAmazon Elastic Container Service(Amazon ECS) 클러스터에서 호스팅되는 동적 웹 \n사이트를 생성합니다. 크기 조정 작업을 처리하기 위해 Amazon EC2 인스턴스에서 \n실행되는 이미지 크기 조정 프로그램을 설정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109713-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon S3 와 AWS Lambda 를 함께 사용하면 확장성과 가용성이 뛰어난 이미지 크기 조정 \n기능을 제공하는 서버리스 아키텍처를 생성할 수 있습니다. \n솔루션이 작동하는 방식은 다음과 같습니다. \n사용자가 업로드한 원본 이미지를 저장하도록 Amazon S3 버킷을 설정합니다. \n새 이미지가 업로드될 때마다 AWS Lambda 함수를 호출하도록 S3 버킷에서 이벤트 \n트리거를 구성합니다. \nLambda 함수는 업로드된 이미지를 검색하고, 장치 요구 사항에 따라 필요한 크기 조정 \n작업을 수행하고, 크기 조정된 이미지를 S3 버킷 또는 크기 조정된 이미지용으로 지정된 \n다른 버킷에 다시 저장하도록 설계할 수 있습니다. \n사용자에게 제공하기 위해 크기 조정된 이미지에 공개적으로 액세스할 수 있도록 Amazon",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 514,
    "question": "회사는 Amazon EC2 인스턴스에서 마이크로서비스 애플리케이션을 실행하고 있습니다. 이 \n회사는 확장성을 위해 애플리케이션을 Amazon Elastic Kubernetes Service(Amazon EKS) \n클러스터로 \n마이그레이션하려고 \n합니다. \n회사는 \n보안 \n규정 \n준수를 \n유지하기 \n위해 \n엔드포인트 프라이빗 액세스를 true 로 설정하고 엔드포인트 퍼블릭 액세스를 false 로 \n설정하여 Amazon EKS 제어 플레인을 구성해야 합니다. 회사는 또한 사설 서브넷에 데이터 \n플레인을 배치해야 합니다. 그러나 회사는 노드가 클러스터에 가입할 수 없기 때문에 오류 \n알림을 받았습니다. \n노드가 클러스터에 가입하도록 허용하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Identity and Access Management(IAM)에서 필요한 권한을 AmazonEKSNodeRole \nIAM 역할에 부여합니다.",
      "노드가 컨트롤 플레인에 액세스할 수 있도록 인터페이스 VPC 엔드포인트를 생성합니다.",
      "퍼블릭 서브넷에서 노드를 재생성합니다. EC2 노드에 대한 보안 그룹을 제한합니다.",
      "노드의 보안 그룹에서 아웃바운드 트래픽을 허용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109534-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n클러스터의 VPC 내 Kubernetes API 요청(예: 노드와 컨트롤 플레인 통신)은 프라이빗 VPC \n엔드포인트를 사용합니다. \n\ndocs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 515,
    "question": "회사에서 온프레미스 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 회사는 Amazon \nRedshift 를 솔루션으로 사용하려고 합니다. \n이 시나리오에서 Amazon Redshift 에 적합한 사용 사례는 무엇입니까? (3 개 선택)",
    "options": [
      "기존의 컨테이너화된 이벤트 기반 애플리케이션으로 데이터에 액세스하기 위한 데이터 \nAPI 지원",
      "클라이언트 측 및 서버 측 암호화 지원",
      "지정된 시간 동안 애플리케이션이 활성 상태가 아닐 때 분석 워크로드 구축",
      "백엔드 데이터베이스에 대한 부담을 줄이기 위한 데이터 캐싱 \n\n=== PAGE 500 ===",
      "페타바이트 규모의 데이터와 분당 수천만 건의 요청을 지원하도록 전 세계적으로 확장",
      "AWS Management Console 을 사용하여 클러스터의 보조 복제본 생성"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109535-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 516,
    "question": "회사는 고객이 재무 정보를 검색할 수 있도록 고객에게 API 인터페이스를 제공합니다. \n회사는 연중 최대 사용 시간에 더 많은 수의 요청을 예상합니다. \n회사는 API\n가 고객 만족을 보장하기 위해 낮은 대기 시간으로 일관되게 응답하도록 \n요구합니다. 회사는 API 에 컴퓨팅 호스트를 제공해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Application Load Balancer 및 Amazon Elastic Container Service(Amazon ECS)를 \n사용합니다.",
      "프로비저닝된 동시성과 함께 Amazon API Gateway 및 AWS Lambda 함수를 사용합니다.",
      "Application Load Balancer 및 Amazon Elastic Kubernetes Service(Amazon EKS) \n클러스터를 사용합니다.",
      "예약된 동시성과 함께 Amazon API Gateway 및 AWS Lambda 함수를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109719-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon API Gateway 는 개발자가 모든 규모에서 API 를 쉽게 생성, 게시, 유지 관리, \n모니터링 및 보호할 수 있게 해주는 완전관리형 서비스입니다. AWS Lambda 는 서버를 \n프로비저닝하거나 관리하지 않고도 코드를 실행할 수 있는 서버리스 컴퓨팅 서비스입니다. \nLambda 는 들어오는 요청에 따라 자동으로 확장되지만 수요가 갑자기 증가하면 함수의 새 \n인스턴스를 초기화하는 데 시간이 걸릴 수 있습니다. 이로 인해 API 에 대한 긴 대기 시간 \n또는 콜드 스타트가 발생할 수 있습니다. 이를 방지하기 위해 함수가 초기화되고 언제든지 \n응답할 준비가 되도록 프로비저닝된 동시성을 사용할 수 있습니다. 프로비저닝된 동시성은 \n또한 확장이 성능에 미치는 영향을 줄임으로써 API 의 지연 시간을 일관되게 줄이는 데 \n도움이 됩니다. \n참조: \n\ndocs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integr\nationslambda.html",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 517,
    "question": "한 회사에서 보관 목적으로 모든 AWS Systems Manager Session Manager 로그를 Amazon \nS3 버킷으로 보내려고 합니다. \n어떤 솔루션이 가장 운영 효율성이 높은 이 요구 사항을 충족합니까?",
    "options": [
      "Systems Manager 콘솔에서 S3 로깅을 활성화합니다. 세션 데이터를 보낼 S3 버킷을 \n선택합니다.",
      "Amazon CloudWatch 에이전트를 설치합니다. 모든 로그를 CloudWatch 로그 그룹에 \n푸시합니다. 보관 목적으로 그룹에서 S3 버킷으로 로그를 내보냅니다.",
      "모든 서버 로그를 중앙 S3 버킷에 업로드할 Systems Manager 문서를 생성합니다. \nAmazon EventBridge 를 사용하여 매일 계정에 있는 모든 서버에 대해 Systems Manager \n문서를 실행하십시오.",
      "Amazon CloudWatch 에이전트를 설치합니다. 모든 로그를 CloudWatch 로그 그룹에 \n푸시합니다. 수신 로그 이벤트를 Amazon Kinesis Data Firehose 전송 스트림으로 푸시하는 \nCloudWatch 로그 구독을 생성합니다. Amazon S3 를 대상으로 설정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109536-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 518,
    "question": "애플리케이션은 Amazon RDS MySQL DB 인스턴스를 사용합니다. RDS 데이터베이스의 \n디스크 공간이 부족해지고 있습니다. 솔루션 설계자는 다운타임 없이 디스크 공간을 늘리고 \n싶어합니다. \n최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "RDS 에서 스토리지 자동 확장 활성화",
      "RDS 데이터베이스 인스턴스 크기 늘리기",
      "RDS 데이터베이스 인스턴스 스토리지 유형을 프로비저닝된 IOPS 로 변경",
      "RDS 데이터베이스 백업, 저장 용량 증가, 데이터베이스 복원 및 이전 인스턴스 중지"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/109721-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 519,
    "question": "컨설팅 회사는 전 세계 고객에게 전문 서비스를 제공합니다. 이 회사는 고객이 AWS 에서 \n데이터를 신속하게 수집하고 분석할 수 있는 솔루션과 도구를 제공합니다. 회사는 고객이 \n셀프 서비스 목적으로 사용할 공통 솔루션 및 도구 집합을 중앙에서 관리하고 배포해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "고객을 위한 AWS CloudFormation 템플릿을 생성합니다.",
      "고객을 위한 AWS Service Catalog 제품을 만듭니다.",
      "고객을 위한 AWS Systems Manager 템플릿을 생성합니다.",
      "고객을 위한 AWS Config 항목을 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109722-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 520,
    "question": "한 회사에서 Amazon EC2 인스턴스에서 실행할 새 웹 애플리케이션을 설계하고 있습니다. \n애플리케이션은 \n백엔드 \n데이터 \n스토리지에 \nAmazon \nDynamoDB\n를 \n사용합니다. \n애플리케이션 트래픽은 예측할 수 없습니다. 회사는 데이터베이스에 대한 응용 프로그램 \n읽기 및 쓰기 처리량이 보통에서 높을 것으로 예상합니다. 회사는 애플리케이션 트래픽에 \n대응하여 확장해야 합니다. \n이러한 \n요구 \n사항을 \n가장 \n비용 \n효율적으로 \n충족하는 \nDynamoDB \n테이블 \n구성은 \n무엇입니까?",
    "options": [
      "DynamoDB 표준 테이블 클래스를 사용하여 프로비저닝된 읽기 및 쓰기로 DynamoDB 를 \n구성합니다. DynamoDB Auto Scaling 을 정의된 최대 용량으로 설정합니다.",
      "DynamoDB Standard 테이블 클래스를 사용하여 온디맨드 모드에서 DynamoDB 를 \n구성합니다.",
      "DynamoDB Standard Infrequent Access(DynamoDB Standard-IA) 테이블 클래스를 \n사용하여 프로비저닝된 읽기 및 쓰기로 DynamoDB\n를 구성합니다. DynamoDB Auto \nScaling 을 정의된 최대 용량으로 설정합니다.",
      "DynamoDB Standard Infrequent Access(DynamoDB Standard-IA) 테이블 클래스를 \n사용하여 온디맨드 모드에서 DynamoDB 를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109539-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 521,
    "question": "소매 회사에는 여러 비즈니스가 있습니다. 각 비즈니스의 IT 팀은 자체 AWS 계정을 \n관리합니다. 각 팀 계정은 AWS Organizations 에서 조직의 일부입니다. 각 팀은 팀 자체 \nAWS 계정의 Amazon DynamoDB 테이블에서 제품 재고 수준을 모니터링합니다. \n회사는 \n공유 \nAWS \n계정에 \n중앙 \n재고 \n보고 \n애플리케이션을 \n배포하고 \n있습니다. \n애플리케이션은 모든 팀의 DynamoDB 테이블에서 항목을 읽을 수 있어야 합니다. \n이러한 요구 사항을 가장 안전하게 충족하는 인증 옵션은 무엇입니까?",
    "options": [
      "인벤토리 애플리케이션 계정에서 DynamoDB 를 AWS Secrets Manager 와 통합합니다. \nSecrets Manager\n의 올바른 암호를 사용하여 DynamoDB 테이블을 인증하고 읽도록 \n애플리케이션을 구성합니다. 30 일마다 비밀 순환을 예약합니다.",
      "모든 비즈니스 계정에서 프로그래밍 방식 액세스 권한이 있는 IAM 사용자를 생성합니다. \n올바른 IAM 사용자 액세스 키 ID 와 보안 액세스 키를 사용하여 DynamoDB 테이블을 \n인증하고 읽도록 애플리케이션을 구성합니다. 30\n일마다 IAM 액세스 키를 수동으로 \n교체합니다.",
      "모든 비즈니스 계정에서 DynamoDB 테이블에 대한 역할 액세스 권한을 부여하는 \n정책과 인벤토리 애플리케이션 계정의 특정 역할을 신뢰하는 신뢰 정책을 사용하여 \nBU_ROLE 이라는 IAM 역할을 생성합니다. 인벤토리 계정에서 STS AssumeRole API 작업에 \n대한 액세스를 허용하는 APP_ROLE 이라는 역할을 생성합니다. APP_ROLE 을 사용하도록 \n애플리케이션을 구성하고 DynamoDB 테이블을 읽기 위해 교차 계정 역할 BU_ROLE 을 \n수임합니다.",
      "DynamoDB 를 AWS Certificate Manager(ACM)와 통합합니다. DynamoDB 를 인증하기 \n위해 ID 인증서를 생성합니다. 올바른 인증서를 사용하여 DynamoDB 테이블을 인증하고 \n읽도록 애플리케이션을 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/109703-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 522,
    "question": "회사는 \nAmazon \nElastic \nKubernetes \nService(Amazon \nEKS)를 \n사용하여 \n컨테이너 \n애플리케이션을 실행합니다. 회사의 작업량은 하루 종일 일정하지 않습니다. 회사는 \nAmazon EKS 가 워크로드에 따라 확장 및 축소되기를 원합니다. \n\n=== PAGE 505 ===\n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 \n선택)",
    "options": [
      "AWS Lambda 함수를 사용하여 EKS 클러스터의 크기를 조정합니다.",
      "Kubernetes Metrics Server 를 사용하여 수평적 포드 자동 확장을 활성화합니다.",
      "Kubernetes Cluster Autoscaler 를 사용하여 클러스터의 노드 수를 관리합니다.",
      "Amazon API Gateway 를 사용하여 Amazon EKS 에 연결합니다.",
      "AWS App Mesh 를 사용하여 네트워크 활동을 관찰합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/109702-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\ndocs.aws.amazon.com/eks/latest/userguide/horizontal-pod-autoscaler.html \n\ndocs.aws.amazon.com/eks/latest/userguide/autoscaling.html \n수평적 포드 자동 확장은 해당 리소스의 CPU 사용률을 기반으로 배포, 복제 컨트롤러 또는 \n복제 세트의 포드 수를 자동으로 확장하는 Kubernetes\n의 기능입니다. CPU 사용량 \n데이터를 제공하려면 Kubernetes Metrics Server\n와 같은 메트릭 소스가 필요합니다. \n클러스터 자동 크기 조정은 Pod 가 실패하거나 다른 노드로 다시 예약될 때 클러스터의 \n노드 수를 자동으로 조정하는 Kubernetes 의 기능입니다. 클러스터2 에 가입하는 EC2 \n인스턴스를 관리하려면 AWS Auto Scaling 그룹과의 통합이 필요합니다. 이 솔루션은 \n수평적 포드 자동 확장과 클러스터 자동 확장을 모두 사용하여 Amazon EKS 가 워크로드에 \n따라 확장 및 축소되도록 할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 523,
    "question": "회사에서 마이크로서비스 기반 서버리스 웹 애플리케이션을 실행합니다. 애플리케이션은 \n여러 Amazon DynamoDB 테이블에서 데이터를 검색할 수 있어야 합니다. 솔루션 설계자는 \n애플리케이션의 기본 성능에 영향을 주지 않고 데이터를 검색할 수 있는 기능을 \n애플리케이션에 제공해야 합니다. \n운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS AppSync 파이프라인 해석기",
      "Lambda@Edge 기능이 있는 Amazon CloudFront",
      "AWS Lambda 함수를 사용하는 엣지 최적화 Amazon API Gateway",
      "DynamoDB 커넥터를 사용한 Amazon Athena Federated Query"
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/109701-exam-aws-certified-sol",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 524,
    "question": "회사에서 IAM 권한과 관련된 액세스 거부 오류 및 무단 오류를 분석하고 문제를 \n해결하려고 합니다. 회사에서 AWS CloudTrail 을 켰습니다. \n최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Glue 를 사용하고 사용자 지정 스크립트를 작성하여 오류에 대한 CloudTrail 로그를 \n쿼리합니다.",
      "AWS Batch 를 사용하고 사용자 지정 스크립트를 작성하여 오류에 대한 CloudTrail \n로그를 쿼리합니다.",
      "Amazon Athena 쿼리로 CloudTrail 로그를 검색하여 오류를 식별합니다.",
      "Amazon QuickSight 로 CloudTrail 로그를 검색합니다. 오류를 식별하는 대시보드를 \n만듭니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/111425-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \nD??",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 525,
    "question": "회사에서 기존 AWS 사용 비용을 운영 비용 대시보드에 추가하려고 합니다. 솔루션 \n설계자는 회사가 프로그래밍 방식으로 사용 비용에 액세스할 수 있는 솔루션을 추천해야 \n합니다. 회사는 현재 연도의 비용 데이터에 액세스하고 향후 12 개월의 비용을 예측할 수 \n있어야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "페이지 매김과 함께 AWS Cost Explorer API 를 사용하여 사용 비용 관련 데이터에 \n액세스합니다.",
      "다운로드 가능한 AWS Cost Explorer 보고서 .csv 파일을 사용하여 사용 비용 관련 \n데이터에 액세스합니다.",
      "FTP 를 통해 회사에 사용 비용 데이터를 전송하도록 AWS 예산 작업을 구성합니다.",
      "사용 비용 데이터에 대한 AWS 예산 보고서를 생성합니다. SMTP\n를 통해 회사에 \n데이터를 보냅니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/111278-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {}
  }
];