export const quizData = [
  {
    "id": 1,
    "question": "회사는 여러 대륙에 걸쳐 도시의 온도, 습도 및 대기압에 대한 데이터를 수집합니다. \n회사가 매일 각 사이트에서 수집하는 데이터의 평균 볼륨은 500GB 입니다. 각 사이트에는 \n고속 인터넷 연결이 있습니다. \n이 회사는 이러한 모든 글로벌 사이트의 데이터를 단일 Amazon S3 버킷에 최대한 빨리 \n집계하려고 합니다. 솔루션은 운영 복잡성을 최소화해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "대상 S3 버킷에서 S3 Transfer Acceleration 을 켭니다. 멀티파트 업로드를 사용하여 \n사이트 데이터를 대상 S3 버킷에 직접 업로드합니다.",
      "각 사이트의 데이터를 가장 가까운 리전의 S3 버킷에 업로드합니다. S3 교차 리전 \n복제를 사용하여 대상 S3 버킷에 객체를 복사합니다. 그런 다음 원본 S3 버킷에서 \n데이터를 제거합니다.",
      "AWS Snowball Edge Storage Optimized 디바이스 작업을 매일 예약하여 각 사이트에서 \n가장 가까운 리전으로 데이터를 전송합니다. S3 교차 리전 복제를 사용하여 대상 S3 버킷에 \n객체를 복사합니다.",
      "각 사이트의 데이터를 가장 가까운 리전의 Amazon EC2 인스턴스로 업로드합니다. \nAmazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장합니다. 정기적으로 EBS \n스냅샷을 만들어 대상 S3 버킷이 포함된 리전에 복사합니다. 해당 리전에서 EBS 볼륨을 \n복원합니다."
    ],
    "answer": 0,
    "domain": "Storage",
    "explanations": {
      "0": "전 세계에 분산된 각 사이트에서 대량의 데이터를 하나의 S3 버킷으로 가장 빠르게 전송하는 가장 효율적인 방법은 S3 Transfer Acceleration을 활용하는 것입니다. 이 기능은 전 세계 곳곳에 위치한 엣지 로케이션을 거쳐 AWS 전용 네트워크망을 사용하므로 일반 인터넷 연결보다 훨씬 빠르고 안정적인 업로드가 가능합니다.",
      "1": "가장 가까운 리전에 업로드 후 복제하는 방식은 추가적인 홉(hop)이 발생하여 Transfer Acceleration보다 느릴 수 있습니다.",
      "2": "Snowball은 오프라인 이송 방식이라 매일 발생하는 500GB 데이터를 처리하기에는 운영 복잡성이 매우 높습니다.",
      "3": "EBS 스냅샷을 만들어 리전 간 복사하는 방식은 데이터베이스나 서버 백업에 적합하며, 단순 데이터 집계용으로는 너무 복잡하고 느립니다."
    },
    "explanation": "정답은 A입니다. 전 세계적으로 분산된 지점에서 대용량 데이터를 신속하게 수집하기 위해서는 AWS 엣지 로케이션을 활용하는 S3 Transfer Acceleration이 최적입니다. 멀티파트 업로드를 병행하면 대용량 파일 전송의 효율성을 더욱 높일 수 있습니다.\n\nhttps://aws.amazon.com/s3/transfer-acceleration/",
    "glossary": {
      "S3 Transfer Acceleration": "AWS의 전용 네트워크 망을 사용하여 S3로의 데이터 업로드 속도를 높여주는 기능",
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 2,
    "id": 2,
    "question": "회사는 독점 애플리케이션의 로그 파일을 분석할 수 있는 능력이 필요합니다. 로그는 \nAmazon S3 버킷에 JSON 형식으로 저장됩니다. 쿼리는 간단하고 주문형으로 실행됩니다. \n솔루션 설계자는 기존 아키텍처에 대한 최소한의 변경으로 분석을 수행해야 합니다. \n솔루션 설계자는 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하기 위해 무엇을 해야 \n합니까?",
    "options": [
      "Amazon Redshift 를 사용하여 모든 콘텐츠를 한 곳에 로드하고 필요에 따라 SQL 쿼리를 \n실행합니다.",
      "Amazon CloudWatch Logs\n를 사용하여 로그를 저장합니다. Amazon CloudWatch \n콘솔에서 필요에 따라 SQL 쿼리를 실행합니다.",
      "Amazon S3 와 함께 Amazon Athena 를 직접 사용하여 필요에 따라 쿼리를 실행합니다.",
      "AWS Glue 를 사용하여 로그를 분류합니다. Amazon EMR 에서 임시 Apache Spark \n클러스터를 사용하여 필요에 따라 SQL 쿼리를 실행합니다."
    ],
    "answer": 2,
    "domain": "Analytics",
    "explanations": {
      "0": "Amazon Redshift는 데이터 웨어하우스 서비스로, S3에서 데이터를 로드하는 ETL 과정이 필요하며 실시간 쿼리보다는 복잡한 분석에 적합합니다.",
      "1": "CloudWatch Logs는 실시간 로그 수집 및 모니터링에 집중되어 있으며, S3에 이미 저장된 정적 파일을 쿼리하기에는 Athena의 유연성이 더 높습니다.",
      "2": "Amazon Athena는 S3에 저장된 JSON, CSV 등 다양한 형식의 데이터를 서버 관리 없이 SQL로 직접 조회할 수 있게 해줍니다. 기존 아키텍처를 거의 변경하지 않고도 즉시 분석이 가능하므로 운영 오버헤드가 가장 낮습니다.",
      "3": "Amazon EMR은 Spark나 Hadoop 같은 대규모 분산 처리 프레임워크가 필요할 때 사용하지만, 단순한 주문형 쿼리를 위해 클러스터를 구성하는 것은 비효율적입니다."
    },
    "explanation": "정답은 C입니다. S3에 저장된 JSON 로그 파일을 최소한의 노력으로 분석하려면 서버리스 서비스인 Amazon Athena가 가장 적합합니다. 별도의 데이터 이동 없이 SQL만으로 즉석 쿼리가 가능합니다.\n\nhttps://aws.amazon.com/athena/",
    "glossary": {
      "Athena": "S3에 있는 데이터를 표준 SQL로 직접 분석할 수 있는 서버리스 대화형 쿼리 서비스",
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 3,
    "question": "회사는 AWS Organizations 를 사용하여 여러 부서의 여러 AWS 계정을 관리합니다. 관리 \n계정에는 프로젝트 보고서가 포함된 Amazon S3 버킷이 있습니다. 회사는 이 S3 버킷에 \n대한 액세스를 AWS Organizations 의 조직 내 계정 사용자로만 제한하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "조직 ID 에 대한 참조와 함께 aws:PrincipalOrgID 전역 조건 키를 S3 버킷 정책에 \n추가합니다.",
      "각 부서에 대한 조직 단위(OU)를 만듭니다. aws:PrincipalOrgPaths 전역 조건 키를 S3 \n버킷 정책에 추가합니다.",
      "AWS \nCloudTrail\n을 \n사용하여 \nCreateAccount, \nInviteAccountToOrganization, \nLeaveOrganization 및 RemoveAccountFromOrganization 이벤트를 모니터링합니다. 그에 \n따라 S3 버킷 정책을 업데이트합니다.",
      "S3 버킷에 액세스해야 하는 각 사용자에 태그를 지정합니다. aws:PrincipalTag 전역 \n조건 키를 S3 버킷 정책에 추가합니다."
    ],
    "answer": 0,
    "domain": "Security",
    "explanations": {
      "0": "aws:PrincipalOrgID 조건 키를 사용하면 특정 조직(Organizations)에 속한 모든 계정의 접근을 한꺼번에 허용하거나 제한할 수 있습니다. 이는 개별 계정 ID를 일일이 나열하는 것보다 관리 효율성이 훨씬 높습니다.",
      "1": "aws:PrincipalOrgPaths는 특정 OU(조직 단위) 경로를 지정할 때 쓰이지만, 조직 전체를 대상으로 할 때는 OrgID가 더 간결합니다.",
      "2": "CloudTrail을 통한 수동 업데이트는 자동화가 어렵고 관리가 매우 번거로우며 확장성이 떨어집니다.",
      "3": "태그 기반(ABAC) 접근 제어도 훌륭한 방식이지만, '조직 내 모든 계정'이라는 조건에는 Organizational ID 기반 제어가 가장 직접적이고 효율적입니다."
    },
    "explanation": "정답은 A입니다. AWS Organizations 환경에서 여러 계정의 접근 권한을 조직 단위로 통제할 때는 버킷 정책의 조건 절에 aws:PrincipalOrgID 전역 조건 키를 활용하는 것이 모범 사례입니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalorgid",
    "glossary": {
      "AWS Organizations": "여러 AWS 계정을 중앙에서 통합 관리하고 제어하는 서비스",
      "aws:PrincipalOrgID": "AWS 리소스 정책에서 특정 조직 내의 보안 주체만 허용할 때 사용하는 조건 키"
    }
  },
  {
    "id": 4,
    "question": "애플리케이션은 VPC 의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 Amazon \nS3 버킷에 저장된 로그를 처리합니다. EC2 인스턴스는 인터넷 연결 없이 S3 버킷에 \n액세스해야 합니다. \nAmazon S3 에 대한 프라이빗 네트워크 연결을 제공하는 솔루션은 무엇입니까?",
    "options": [
      "S3 버킷에 대한 게이트웨이 VPC 엔드포인트를 생성합니다.",
      "Amazon CloudWatch Logs 로 로그를 스트리밍합니다. 로그를 S3 버킷으로 내보냅니다.",
      "Amazon EC2 에 인스턴스 프로파일을 생성하여 S3 액세스를 허용합니다.",
      "S3 엔드포인트에 액세스하기 위한 프라이빗 링크가 있는 Amazon API Gateway API 를 \n생성합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. VPC 내부의 EC2 인스턴스가 퍼블릭 인터넷을 통하지 않고 S3와 직접 통신하려면 게이트웨이 VPC 엔드포인트를 생성해야 합니다. 이를 통해 보안을 강화하고 프라이빗한 연결 경로를 확보할 수 있습니다.\n\nhttps://aws.amazon.com/vpc/endpoints/",
    "glossary": {
      "VPC Endpoint (Gateway)": "인터넷 게이트웨이 없이 VPC와 S3/DynamoDB를 프라이빗하게 연결하는 서비스",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 5,
    "question": "회사는 사용자 업로드 문서를 Amazon EBS 볼륨에 저장하는 단일 Amazon EC2 인스턴스를 \n사용하여 AWS 에서 웹 애플리케이션을 호스팅하고 있습니다. 더 나은 확장성과 가용성을 \n위해 이 회사는 아키텍처를 복제하고 다른 가용 영역에 두 번째 EC2 인스턴스와 EBS \n볼륨을 생성하여 Application Load Balancer 뒤에 배치했습니다. 이 변경을 완료한 후 \n사용자는 웹 사이트를 새로 고칠 때마다 문서의 일부 또는 다른 하위 집합을 볼 수 있지만 \n모든 문서를 동시에 볼 수는 없다고 보고했습니다. \n솔루션 설계자는 사용자가 모든 문서를 한 번에 볼 수 있도록 무엇을 제안해야 합니까?",
    "options": [
      "두 EBS 볼륨에 모든 문서가 포함되도록 데이터를 복사합니다.",
      "문서가 있는 서버로 사용자를 안내하도록 Application Load Balancer 를 구성합니다.",
      "두 EBS 볼륨의 데이터를 Amazon EFS 로 복사합니다. 새 문서를 Amazon EFS 에 \n저장하도록 애플리케이션을 수정합니다.",
      "두 서버 모두에 요청을 보내도록 Application Load Balancer 를 구성합니다. 올바른 \n서버에서 각 문서를 반환합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 여러 가용 영역의 EC2 인스턴스가 동일한 파일 세트를 공유하려면 일관된 파일 시스템 구조를 제공하는 Amazon EFS가 적합합니다. EBS는 특정 영역에 종속적이라 공유에 한계가 있습니다.\n\nhttps://aws.amazon.com/efs/",
    "glossary": {
      "EFS (Elastic File System)": "여러 개의 EC2 인스턴스가 동시에 공유해서 사용할 수 있는 네트워크 기반 확장형 파일 스토리지",
      "EBS": "EC2 인스턴스 한 대에 붙여서 사용하는 하드디스크 역할의 전용 저장소"
    }
  },
  {
    "id": 6,
    "question": "회사는 NFS 를 사용하여 온프레미스 네트워크 연결 스토리지에 대용량 비디오 파일을 \n저장합니다. 각 비디오 파일의 크기 범위는 1MB 에서 500GB 입니다. 총 스토리지는 \n70TB\n이며 더 이상 증가하지 않습니다. 회사는 비디오 파일을 Amazon S3\n로 \n마이그레이션하기로 결정합니다. 회사는 가능한 한 최소한의 네트워크 대역폭을 사용하면서 \n가능한 한 빨리 비디오 파일을 마이그레이션해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "S3 버킷을 생성합니다. S3 버킷에 대한 쓰기 권한이 있는 IAM 역할을 생성합니다. AWS \nCLI 를 사용하여 모든 파일을 S3 버킷에 로컬로 복사합니다.",
      "AWS Snowball Edge 작업을 생성합니다. 온프레미스에서 Snowball Edge 장치를 \n받습니다. Snowball Edge 클라이언트를 사용하여 장치로 데이터를 전송합니다. AWS 가 \n데이터를 Amazon S3 로 가져올 수 있도록 디바이스를 반환합니다.",
      "온프레미스에 S3 파일 게이트웨이를 배포합니다. S3 파일 게이트웨이에 연결할 퍼블릭 \n서비스 엔드포인트를 생성합니다. S3 버킷을 생성합니다. S3 파일 게이트웨이에서 새 NFS \n파일 공유를 생성합니다. 새 파일 공유가 S3 버킷을 가리키도록 합니다. 기존 NFS 파일 \n공유에서 S3 파일 게이트웨이로 데이터를 전송합니다.",
      "온프레미스 네트워크와 AWS \n간에 AWS Direct Connect \n연결을 설정합니다. \n온프레미스에 S3 파일 게이트웨이를 배포합니다. S3 파일 게이트웨이에 연결할 공용 \nVIF(가상 인터페이스)를 생성합니다. S3 버킷을 생성합니다. S3 파일 게이트웨이에서 새 \nNFS 파일 공유를 생성합니다. 새 파일 공유가 S3 버킷을 가리키도록 합니다. 기존 NFS \n파일 공유에서 S3 파일 게이트웨이로 데이터를 전송합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 70TB의 대규모 데이터를 이동시키면서 네트워크 대역폭 부담을 최소화하려면 물리적 장치인 AWS Snowball Edge를 사용하는 오프라인 이송 방식이 가장 빠르고 효율적입니다.\n\nhttps://aws.amazon.com/snowball/",
    "glossary": {
      "Snowball Edge": "대량의 데이터를 오프라인으로 이송하기 위해 AWS에서 제공하는 물리적 데이터 이송 장비",
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 7,
    "question": "회사에 들어오는 메시지를 수집하는 응용 프로그램이 있습니다. 그러면 수십 개의 다른 \n애플리케이션과 마이크로서비스가 이러한 메시지를 빠르게 소비합니다. 메시지 수는 \n급격하게 변하며 때로는 초당 100,000 개로 갑자기 증가하기도 합니다. 이 회사는 솔루션을 \n분리하고 확장성을 높이고자 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon Kinesis Data Analytics 에 대한 메시지를 유지합니다. 메시지를 읽고 처리하도록 \n소비자 애플리케이션을 구성합니다.",
      "Auto Scaling 그룹의 Amazon EC2 인스턴스에 수집 애플리케이션을 배포하여 CPU \n지표를 기반으로 EC2 인스턴스 수를 확장합니다.",
      "단일 샤드를 사용하여 Amazon Kinesis Data Streams 에 메시지를 씁니다. AWS Lambda \n함수를 사용하여 메시지를 사전 처리하고 Amazon DynamoDB 에 저장합니다. 메시지를 \n처리하기 위해 DynamoDB 에서 읽도록 소비자 애플리케이션을 구성합니다.",
      "여러 Amazon Simple Queue Service(Amazon SQS) 구독이 있는 Amazon Simple \nNotification Service(Amazon SNS) 주제에 메시지를 게시합니다. 대기열의 메시지를 \n처리하도록 소비자 애플리케이션을 구성합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 하나의 메시지를 수십 개의 서비스로 동시 전파(Fan-out)하며 확장성을 확보하려면 SNS와 SQS 대기열을 조합하는 아키텍처가 마이크로서비스 간의 결합도를 낮추는 최상의 선택입니다.\n\nhttps://aws.amazon.com/sns/",
    "glossary": {
      "SNS": "구독자들에게 메시지를 푸시하는 알림 서비스 (Fan-out 구조용)",
      "SQS": "메시지를 대기열에 보관하여 비동기식으로 처리하게 해주는 큐 서비스"
    }
  },
  {
    "id": 8,
    "question": "회사에서 분산 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 애플리케이션은 다양한 \n워크로드를 처리합니다. 레거시 플랫폼은 여러 컴퓨팅 노드에서 작업을 조정하는 기본 \n서버로 구성됩니다. 이 회사는 탄력성과 확장성을 극대화하는 솔루션으로 애플리케이션을 \n현대화하려고 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 아키텍처를 어떻게 설계해야 합니까?",
    "options": [
      "작업의 대상으로 Amazon Simple Queue Service(Amazon SQS) 대기열을 구성합니다. \nAuto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 컴퓨팅 노드를 구현합니다. \n예약된 조정을 사용하도록 EC2 Auto Scaling 을 구성합니다.",
      "작업의 대상으로 Amazon Simple Queue Service(Amazon SQS) 대기열을 구성합니다. \nAuto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 컴퓨팅 노드를 구현합니다. \n대기열 크기에 따라 EC2 Auto Scaling 을 구성합니다.",
      "Auto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 기본 서버와 컴퓨팅 노드를 \n구현합니다. 작업의 대상으로 AWS CloudTrail 을 구성합니다. 기본 서버의 부하를 기반으로 \nEC2 Auto Scaling 을 구성합니다.",
      "Auto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 기본 서버와 컴퓨팅 노드를 \n구현합니다. 작업의 대상으로 Amazon EventBridge(Amazon CloudWatch Events)를 \n구성합니다. 컴퓨팅 노드의 부하를 기반으로 EC2 Auto Scaling 을 구성합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 시스템의 탄력성을 극대화하려면 작업을 SQS 대기열에 담고, 대기열에 쌓인 작업량(백로그)에 맞춰 컴퓨팅 노드를 자동으로 조절하는 대상 추적 조정 정책을 사용해야 합니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 9,
    "question": "회사는 데이터 센터에서 SMB 파일 서버를 실행하고 있습니다. 파일 서버는 파일이 생성된 \n후 처음 며칠 동안 자주 액세스하는 대용량 파일을 저장합니다. 7 일이 지나면 파일에 거의 \n액세스하지 않습니다. \n총 데이터 크기가 증가하고 있으며 회사의 총 저장 용량에 가깝습니다. 솔루션 설계자는 \n가장 최근에 액세스한 파일에 대한 저지연 액세스를 잃지 않으면서 회사의 사용 가능한 \n저장 공간을 늘려야 합니다. 솔루션 설계자는 향후 스토리지 문제를 방지하기 위해 파일 \n수명 주기 관리도 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS DataSync 를 사용하여 SMB 파일 서버에서 AWS 로 7 일이 지난 데이터를 \n복사합니다.",
      "Amazon S3 파일 게이트웨이를 생성하여 회사의 스토리지 공간을 확장합니다. S3 수명 \n주기 정책을 생성하여 7 일 후에 데이터를 S3 Glacier Deep Archive 로 전환합니다.",
      "Windows 파일 서버용 Amazon FSx 파일 시스템을 생성하여 회사의 저장 공간을 \n확장합니다.",
      "각 사용자의 컴퓨터에 유틸리티를 설치하여 Amazon S3 에 액세스합니다. S3 수명 주기 \n정책을 생성하여 7 일 후 데이터를 S3 Glacier Flexible Retrieval 로 전환합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 온프레미스에서 자주 쓰는 파일은 로컬 캐시로 빠르게 접근하고, 오래된 파일은 S3로 자동 이동시키는 S3 파일 게이트웨이와 수명 주기 정책의 조합이 하이브리드 스토리지의 정석입니다.\n\nhttps://aws.amazon.com/storagegateway/",
    "glossary": {
      "Storage Gateway (S3)": "온프레미스 환경에서 표준 파일 시스템 인터페이스를 통해 S3 스토리지를 사용할 수 있게 해주는 하이브리드 스토리지",
      "S3 Glacier": "자주 액세스하지 않는 데이터의 장기 아카이빙을 위한 매우 저렴한 스토리지 클래스"
    }
  },
  {
    "id": 10,
    "question": "회사는 AWS 에서 전자 상거래 웹 애플리케이션을 구축하고 있습니다. 애플리케이션은 \n처리할 Amazon API Gateway REST API 에 새 주문에 대한 정보를 보냅니다. 회사는 주문이 \n접수된 순서대로 처리되기를 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "API Gateway 통합을 사용하여 애플리케이션이 주문을 수신할 때 Amazon Simple \nNotification Service(Amazon SNS) 주제에 메시지를 게시합니다. AWS Lambda 함수를 \n주제에 구독하여 처리를 수행합니다.",
      "API Gateway 통합을 사용하여 애플리케이션이 주문을 수신할 때 Amazon Simple Queue \nService(Amazon SQS) FIFO 대기열에 메시지를 보냅니다. 처리를 위해 AWS Lambda \n함수를 호출하도록 SQS FIFO 대기열을 구성합니다.",
      "API Gateway 권한 부여자를 사용하여 애플리케이션이 주문을 처리하는 동안 모든 \n요청을 차단합니다.",
      "API Gateway 통합을 사용하여 애플리케이션이 주문을 수신할 때 Amazon Simple Queue \nService(Amazon SQS) 표준 대기열에 메시지를 보냅니다. 처리를 위해 AWS Lambda \n함수를 호출하도록 SQS 표준 대기열을 구성합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 주문 처리와 같이 순서가 뒤바뀌면 안 되는 시스템에서는 SQS FIFO 대기열을 사용하여 메시지의 선입선출(First-In-First-Out)과 정확히 한 번 처리되는 정밀함을 보장해야 합니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "SQS FIFO Queue": "메시지가 들어온 순서대로 한 번만 처리되도록 보장하는 특수한 대기열 시스템",
      "API Gateway": "모든 규모의 API를 손쉽게 생성, 유지 관리 및 보안 조치를 할 수 있는 관리 서비스"
    }
  },
  {
    "id": 11,
    "question": "회사에 Amazon EC2 인스턴스에서 실행되고 Amazon Aurora 데이터베이스를 사용하는 \n애플리케이션이 있습니다. EC2 인스턴스는 파일에 로컬로 저장된 사용자 이름과 암호를 \n사용하여 \n데이터베이스에 \n연결합니다. \n회사는 \n자격 \n증명 \n관리의 \n운영 \n오버헤드를 \n최소화하려고 합니다. \n솔루션 설계자는 이 목표를 달성하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Secrets Manager 를 사용합니다. 자동 회전을 켭니다.",
      "AWS Systems Manager Parameter Store 를 사용합니다. 자동 회전을 켭니다.",
      "AWS Key Management Service(AWS KMS) 암호화 키로 암호화된 객체를 저장할 Amazon \nS3 \n버킷을 \n생성합니다. \n자격 \n증명 \n파일을 \nS3 \n버킷으로 \n마이그레이션합니다. \n애플리케이션이 S3 버킷을 가리키도록 합니다.",
      "각 EC2 인스턴스에 대해 암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 \n생성합니다. 새 EBS 볼륨을 각 EC2 인스턴스에 연결합니다. 자격 증명 파일을 새 EBS \n볼륨으로 마이그레이션합니다. 애플리케이션이 새 EBS 볼륨을 가리키도록 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 데이터베이스 암호와 같은 민감한 자격을 안전하게 보관하고 주기적으로 자동 교체하려면 AWS Secrets Manager가 필수입니다. 코드에 암호를 적지 않아도 되어 보안성이 비약적으로 향상됩니다.\n\nhttps://aws.amazon.com/secrets-manager/",
    "glossary": {
      "Secrets Manager": "데이터베이스 암호 등 민감한 정보를 안전하게 암호화하여 저장하고 자동 교체 기능을 제공하는 서비스",
      "Aurora": "AWS가 구축한 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 12,
    "question": "글로벌 회사는 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 웹 \n애플리케이션을 호스팅합니다. 웹 애플리케이션에는 정적 데이터와 동적 데이터가 있습니다. \n회사는 정적 데이터를 Amazon S3 버킷에 저장합니다. 회사는 정적 데이터 및 동적 \n데이터의 성능을 개선하고 대기 시간을 줄이기를 원합니다. 회사는 Amazon Route 53 에 \n등록된 자체 도메인 이름을 사용하고 있습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "S3 버킷과 ALB\n를 오리진으로 포함하는 Amazon CloudFront 배포를 생성합니다. \nCloudFront 배포로 트래픽을 라우팅하도록 Route 53 을 구성합니다.",
      "ALB 가 오리진인 Amazon CloudFront 배포를 생성합니다. S3 버킷을 엔드포인트로 \n포함하는 AWS Global Accelerator 표준 액셀러레이터를 생성합니다. CloudFront 배포로 \n트래픽을 라우팅하도록 Route 53 을 구성합니다.",
      "S3 버킷을 오리진으로 포함하는 Amazon CloudFront 배포를 생성합니다. ALB 및 \nCloudFront 배포를 엔드포인트로 포함하는 AWS Global Accelerator 표준 액셀러레이터를 \n생성합니다. 가속기 DNS 이름을 가리키는 사용자 지정 도메인 이름을 만듭니다. 사용자 \n지정 도메인 이름을 웹 애플리케이션의 끝점으로 사용합니다.",
      "ALB 가 오리진인 Amazon CloudFront 배포를 생성합니다. S3 버킷을 엔드포인트로 \n포함하는 AWS Global Accelerator 표준 액셀러레이터를 생성합니다. 두 개의 도메인 이름을 \n만듭니다. 하나의 도메인 이름이 동적 콘텐츠의 CloudFront DNS 이름을 가리키도록 합니다. \n다른 도메인 이름이 정적 콘텐츠에 대한 가속기 DNS 이름을 가리키도록 합니다. 도메인 \n이름을 웹 애플리케이션의 끝점으로 사용합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. S3의 정적 데이터와 ALB의 동적 데이터를 동시에 가속화하려면 CloudFront가 최선입니다. 전 세계 엣지 로케이션을 통해 사용자 근처에서 데이터를 제공하므로 전반적인 지연 시간이 줄어듭니다.\n\nhttps://aws.amazon.com/cloudfront/",
    "glossary": {
      "CloudFront": "전 세계 엣지 로케이션을 통해 콘텐츠 전송 속도를 높여주는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 13,
    "question": "회사는 AWS 인프라에 대한 월별 유지 관리를 수행합니다. 이러한 유지 관리 활동 중에 \n회사는 여러 AWS 리전에서 MySQL 용 Amazon RDS 데이터베이스에 대한 자격 증명을 \n교체해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "자격 증명을 AWS Secrets Manager 에 암호로 저장합니다. 필요한 리전에 대해 다중 \n리전 비밀 복제를 사용합니다. 일정에 따라 보안 암호를 교체하도록 Secrets Manager 를 \n구성합니다.",
      "보안 문자열 파라미터를 생성하여 AWS Systems Manager 에 자격 증명을 보안 암호로 \n저장합니다. 필요한 리전에 대해 다중 리전 비밀 복제를 사용합니다. 일정에 따라 암호를 \n교체하도록 Systems Manager 를 구성합니다.",
      "서버 측 암호화(SSE)가 활성화된 Amazon S3 버킷에 자격 증명을 저장합니다. Amazon \nEventBridge(Amazon CloudWatch Events)를 사용하여 AWS Lambda 함수를 호출하여 자격 \n증명을 교체합니다.",
      "AWS Key Management Service(AWS KMS) 다중 리전 고객 관리형 키를 사용하여 자격 \n증명을 비밀로 암호화합니다. Amazon DynamoDB 전역 테이블에 암호를 저장합니다. AWS \nLambda 함수를 사용하여 DynamoDB 에서 암호를 검색합니다. RDS API 를 사용하여 비밀을 \n교체합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 여러 리전에 걸친 통합 관리와 비밀번호 교체 자동화를 가장 손쉽게 처리하는 도구는 Secrets Manager입니다. 다중 리전 복제 기능을 통해 재난 복구 환경에서도 동일한 자격을 사용할 수 있습니다.\n\nhttps://aws.amazon.com/secrets-manager/",
    "glossary": {
      "Secrets Manager": "보안 자격 증명을 안전하게 관리하고 일정에 따라 자동 교체하며 다른 리전으로 복제까지 가능한 관리형 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 14,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 전자 상거래 \n애플리케이션을 실행합니다. 인스턴스는 여러 가용 영역에 걸쳐 Amazon EC2 Auto Scaling \n그룹에서 실행됩니다. Auto Scaling 그룹은 CPU 사용률 메트릭을 기반으로 확장됩니다. \n전자 \n상거래 \n애플리케이션은 \n대규모 \nEC2 \n인스턴스에서 \n호스팅되는 \nMySQL \n8.0 \n데이터베이스에 트랜잭션 데이터를 저장합니다. \n애플리케이션 로드가 증가하면 데이터베이스의 성능이 빠르게 저하됩니다. 애플리케이션은 \n쓰기 트랜잭션보다 더 많은 읽기 요청을 처리합니다. 이 회사는 고가용성을 유지하면서 \n예측할 수 없는 읽기 워크로드의 수요를 충족하도록 데이터베이스를 자동으로 확장하는 \n솔루션을 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "리더 및 컴퓨팅 기능을 위해 단일 노드와 함께 Amazon Redshift 를 사용하십시오.",
      "단일 AZ 배포와 함께 Amazon RDS 사용 다른 가용 영역에 리더 인스턴스를 추가하도록 \nAmazon RDS 를 구성합니다.",
      "다중 AZ 배포와 함께 Amazon Aurora 를 사용합니다. Aurora 복제본을 사용하여 Aurora \nAuto Scaling 을 구성합니다.",
      "EC2 스팟 인스턴스와 함께 Memcached 용 Amazon ElastiCache 를 사용합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 읽기 부하가 많은 관계형 데이터베이스 환경에서는 Amazon Aurora의 Auto Scaling 기능을 활용하여 트래픽에 따라 읽기 전용 복제본을 자동으로 늘리고 줄여 성능을 유지해야 합니다.\n\nhttps://aws.amazon.com/rds/aurora/",
    "glossary": {
      "Aurora": "AWS 클라우드 전용으로 제작된 고성능, 자동 확장 지원 관계형 데이터베이스",
      "Read Replica": "읽기 전용 복제본을 생성하여 데이터베이스의 읽기 부하를 분산시키는 기술"
    }
  },
  {
    "id": 15,
    "question": "최근에 AWS\n로 마이그레이션한 회사가 프로덕션 VPC\n로 들어오고 나가는 트래픽을 \n보호하는 솔루션을 구현하려고 합니다. 이 회사는 사내 데이터 센터에 검사 서버를 가지고 \n있었습니다. 검사 서버는 트래픽 흐름 검사 및 트래픽 필터링과 같은 특정 작업을 \n수행했습니다. 회사는 AWS 클라우드에서 동일한 기능을 갖기를 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "프로덕션 VPC 에서 트래픽 검사 및 트래픽 필터링에 Amazon GuardDuty 를 사용합니다.",
      "트래픽 미러링을 사용하여 트래픽 검사 및 필터링을 위해 프로덕션 VPC 의 트래픽을 \n미러링합니다.",
      "AWS 네트워크 방화벽을 사용하여 프로덕션 VPC 에 대한 트래픽 검사 및 트래픽 \n필터링에 필요한 규칙을 생성합니다.",
      "AWS Firewall Manager 를 사용하여 프로덕션 VPC 에 대한 트래픽 검사 및 트래픽 \n필터링에 필요한 규칙을 생성합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 기업급 방화벽 장비처럼 트래픽을 정밀하게 검사하고 필터링하려면 AWS Network Firewall이 적합합니다. L3부터 L7까지 포괄하는 보안 규칙을 통해 VPC 경계 보안을 강화할 수 있습니다.\n\nhttps://aws.amazon.com/network-firewall/",
    "glossary": {
      "Network Firewall": "VPC 전체에 대한 세밀한 트래픽 제어 및 보안 필터링을 제공하는 고성능 방화벽 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 16,
    "question": "회사는 AWS\n에서 데이터 레이크를 호스팅합니다. 데이터 레이크는 Amazon S3 및 \nPostgreSQL 용 Amazon RDS 의 데이터로 구성됩니다. 이 회사는 데이터 시각화를 제공하고 \n데이터 레이크 내의 모든 데이터 소스를 포함하는 보고 솔루션이 필요합니다. 회사의 관리 \n팀만 모든 시각화에 대한 전체 액세스 권한을 가져야 합니다. 나머지 회사는 제한된 액세스 \n권한만 가져야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon QuickSight 에서 분석을 생성합니다. 모든 데이터 소스를 연결하고 새 데이터 \n세트를 만듭니다. 대시보드를 게시하여 데이터를 시각화합니다. 적절한 IAM 역할과 \n대시보드를 공유합니다.",
      "Amazon QuickSight 에서 분석을 생성합니다. 모든 데이터 소스를 연결하고 새 데이터 \n세트를 만듭니다. 대시보드를 게시하여 데이터를 시각화합니다. 적절한 사용자 및 그룹과 \n대시보드를 공유합니다.",
      "Amazon S3 의 데이터에 대한 AWS Glue 테이블 및 크롤러를 생성합니다. AWS Glue 추출, \n변환 및 로드(ETL) 작업을 생성하여 보고서를 생성합니다. 보고서를 Amazon S3\n에 \n게시합니다. S3 버킷 정책을 사용하여 보고서에 대한 액세스를 제한합니다.",
      "Amazon S3 의 데이터에 대한 AWS Glue 테이블과 크롤러를 생성합니다. Amazon Athena \n연합 쿼리를 사용하여 PostgreSQL 용 Amazon RDS 내의 데이터에 액세스합니다. Amazon \nAthena 를 사용하여 보고서를 생성합니다. 보고서를 Amazon S3 에 게시합니다. S3 버킷 \n정책을 사용하여 보고서에 대한 액세스를 제한합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 여러 소스의 데이터를 시각화하고 사용자 그룹별로 세밀한 접근 권한을 제어하려면 Amazon QuickSight가 가장 강력합니다. 대시보드를 통해 비즈니스 통찰력을 안전하게 공유할 수 있습니다.\n\nhttps://aws.amazon.com/quicksight/",
    "glossary": {
      "QuickSight": "대규모 데이터를 시각화하고 대시보드를 통해 비즈니스 분석을 수행하는 BI 서비스",
      "Data Lake": "정형/비정형 데이터를 한꺼번에 저장하고 분석할 수 있는 대규모 중앙 저장소"
    }
  },
  {
    "id": 17,
    "question": "회사에서 새로운 비즈니스 애플리케이션을 구현하고 있습니다. 이 애플리케이션은 두 개의 \nAmazon EC2 인스턴스에서 실행되며 문서 저장을 위해 Amazon S3 버킷을 사용합니다. \n솔루션 설계자는 EC2 인스턴스가 S3 버킷에 액세스할 수 있는지 확인해야 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "S3 버킷에 대한 액세스 권한을 부여하는 IAM 역할을 생성합니다. 역할을 EC2 \n인스턴스에 연결합니다.",
      "S3 버킷에 대한 액세스 권한을 부여하는 IAM 정책을 생성합니다. 정책을 EC2 \n인스턴스에 연결합니다.",
      "S3 버킷에 대한 액세스 권한을 부여하는 IAM 그룹을 생성합니다. 그룹을 EC2 \n인스턴스에 연결합니다.",
      "S3 버킷에 대한 액세스 권한을 부여하는 IAM 사용자를 생성합니다. 사용자 계정을 EC2 \n인스턴스에 연결합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 서버가 다른 AWS 서비스에 접근할 때는 고정된 자격 증명을 쓰는 대신 IAM 역할을 부여하는 것이 보안 모범 사례입니다. 임시 자격 증명을 사용하여 유출 위험을 원천 봉쇄합니다.\n\nhttps://aws.amazon.com/iam/",
    "glossary": {
      "IAM Role": "특정 서비스나 사용자가 AWS 리소스에 접근할 수 있도록 임시 권한을 부여하는 장치",
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 18,
    "question": "애플리케이션 개발 팀은 큰 이미지를 더 작은 압축 이미지로 변환하는 마이크로서비스를 \n설계하고 있습니다. 사용자가 웹 인터페이스를 통해 이미지를 업로드하면 마이크로 \n서비스는 이미지를 Amazon S3 버킷에 저장하고, AWS Lambda 함수로 이미지를 처리 및 \n압축하고, 다른 S3 버킷에 압축된 형태로 이미지를 저장해야 합니다. \n솔루션 설계자는 내구성이 있는 상태 비저장 구성 요소를 사용하여 이미지를 자동으로 \n처리하는 솔루션을 설계해야 합니다. \n이러한 요구 사항을 충족하는 작업 조합은 무엇입니까? (2 개를 선택하세요.)",
    "options": [
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 이미지가 S3 버킷에 \n업로드될 때 SQS 대기열에 알림을 보내도록 S3 버킷을 구성합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 호출 소스로 사용하도록 Lambda \n함수를 구성합니다. SQS 메시지가 성공적으로 처리되면 대기열에서 메시지를 삭제합니다.",
      "새 업로드에 대해 S3 버킷을 모니터링하도록 Lambda 함수를 구성합니다. 업로드된 \n이미지가 감지되면 메모리의 텍스트 파일에 파일 이름을 쓰고 텍스트 파일을 사용하여 \n처리된 이미지를 추적합니다.",
      "Amazon EC2 인스턴스를 시작하여 Amazon Simple Queue Service(Amazon SQS) \n대기열을 모니터링합니다. 항목이 대기열에 추가되면 EC2 인스턴스의 텍스트 파일에 파일 \n이름을 기록하고 Lambda 함수를 호출합니다.",
      "Amazon EventBridge(Amazon CloudWatch Events) 이벤트를 구성하여 S3 버킷을 \n모니터링합니다. 이미지가 업로드되면 추가 처리를 위해 애플리케이션 소유자의 이메일 \n주소와 함께 Amazon ample Notification Service(Amazon SNS) 주제에 알림을 보냅니다."
    ],
    "answer": 0,
    "explanation": "정답은 A와 B입니다. 대량의 파일 업로드 시 시스템 부하를 조절하고 내구성을 확보하려면 S3 이벤트를 SQS에 담고 Lambda가 이를 순차적으로 처리하게 하는 이벤트 기반 비동기 설계가 가장 견고합니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 19,
    "question": "회사에 AWS 에 배포된 3 계층 웹 애플리케이션이 있습니다. 웹 서버는 VPC 의 퍼블릭 \n서브넷에 배포됩니다. 애플리케이션 서버와 데이터베이스 서버는 동일한 VPC 의 프라이빗 \n서브넷에 배포됩니다. 이 회사는 AWS Marketplace 의 타사 가상 방화벽 어플라이언스를 \n검사 VPC 에 배포했습니다. 어플라이언스는 IP 패킷을 수락할 수 있는 IP 인터페이스로 \n구성됩니다. \n솔루션 설계자는 트래픽이 웹 서버에 도달하기 전에 애플리케이션에 대한 모든 트래픽을 \n검사하기 위해 웹 애플리케이션을 어플라이언스와 통합해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "애플리케이션 VPC 의 퍼블릭 서브넷에 Network Load Balancer 를 생성하여 패킷 검사를 \n위해 어플라이언스로 트래픽을 라우팅합니다.",
      "애플리케이션 VPC 의 퍼블릭 서브넷에 Application Load Balancer 를 생성하여 패킷 \n검사를 위해 어플라이언스로 트래픽을 라우팅합니다.",
      "전송 게이트웨이를 통해 들어오는 패킷을 라우팅하도록 라우팅 테이블을 구성하는 검사 \nVPC 에 전송 게이트웨이를 배포합니다.",
      "검사 VPC\n에 게이트웨이 로드 밸런서를 배포합니다. 게이트웨이 로드 밸런서 \n엔드포인트를 생성하여 수신 패킷을 수신하고 패킷을 어플라이언스로 전달합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 타사 보안 장비를 우리 네트워크에 유기적으로 통합하여 실시간 트래픽을 검사하고 싶을 때는 Gateway Load Balancer가 핵심입니다. 복잡한 라우팅 설정 없이도 보안 관문을 구축할 수 있습니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/gateway-load-balancer/",
    "glossary": {
      "Gateway Load Balancer (GWLB)": "타사 가상 어플라이언스에서 발생하는 트래픽을 효율적으로 관리하고 규모를 조정하는 로드 밸런서",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 20,
    "question": "회사에서 동일한 AWS 리전의 테스트 환경에 대량의 프로덕션 데이터를 복제하는 기능을 \n개선하려고 합니다. 데이터는 Amazon Elastic Block Store(Amazon EBS) 볼륨의 Amazon \nEC2 인스턴스에 저장됩니다. 복제된 데이터를 수정해도 프로덕션 환경에 영향을 주지 \n않아야 합니다. 이 데이터에 액세스하는 소프트웨어는 일관되게 높은 I/O 성능을 \n요구합니다. \n솔루션 설계자는 프로덕션 데이터를 테스트 환경에 복제하는 데 필요한 시간을 최소화해야 \n합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. 테스트 환경의 EC2 인스턴스 스토어 \n볼륨에 스냅샷을 복원합니다.",
      "EBS 다중 연결 기능을 사용하도록 프로덕션 EBS 볼륨을 구성합니다. 프로덕션 EBS \n볼륨의 EBS 스냅샷을 만듭니다. 테스트 환경의 EC2 인스턴스에 프로덕션 EBS 볼륨을 \n연결합니다.",
      "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. 새 EBS 볼륨을 생성하고 초기화합니다. \n프로덕션 EBS 스냅샷에서 볼륨을 복원하기 전에 테스트 환경의 EC2 인스턴스에 새 EBS \n볼륨을 연결합니다.",
      "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. EBS 스냅샷에서 EBS 빠른 스냅샷 복원 \n기능을 켭니다. 스냅샷을 새 EBS 볼륨으로 복원합니다. 테스트 환경의 EC2 인스턴스에 새 \nEBS 볼륨을 연결합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 대용량 데이터를 즉시 테스트 장비로 옮기면서도 초기부터 최고 성능을 내고 싶을 때는 EBS Fast Snapshot Restore 기능이 필수입니다. 예열 시간 없이 즉각적인 I/O를 보장합니다.\n\nhttps://aws.amazon.com/ebs/",
    "glossary": {
      "Fast Snapshot Restore (FSR)": "스냅샷을 볼륨으로 복원할 때 사전 로딩 과정 없이 처음부터 최고 성능을 낼 수 있게 해주는 기능",
      "EBS Snapshot": "EBS 볼륨의 데이터를 특정 시점의 복사본으로 저장해두는 백업 아이템"
    }
  },
  {
    "id": 21,
    "question": "전자 상거래 회사는 AWS 에서 하루 1 회 웹 사이트를 시작하려고 합니다. 매일 24 시간 \n동안 정확히 하나의 제품을 판매합니다. 회사는 피크 시간 동안 밀리초 지연 시간으로 \n시간당 수백만 개의 요청을 처리할 수 있기를 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 를 사용하여 다른 S3 버킷에 전체 웹 사이트를 호스팅합니다. Amazon \nCloudFront 배포를 추가합니다. S3 버킷을 배포의 오리진으로 설정합니다. Amazon S3 에 \n주문 데이터를 저장합니다.",
      "여러 가용 영역의 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스에 전체 웹 \n사이트를 배포합니다. ALB(Application Load Balancer)를 추가하여 웹 사이트 트래픽을 \n분산합니다. 백엔드 API 에 대해 다른 ALB 를 추가하십시오. MySQL 용 Amazon RDS 에 \n데이터를 저장합니다.",
      "컨테이너에서 실행되도록 전체 애플리케이션을 마이그레이션합니다. Amazon Elastic \nKubernetes Service(Amazon EKS)에서 컨테이너를 호스팅합니다. Kubernetes 클러스터 자동 \n확장 처리를 사용하여 트래픽 버스트를 처리할 포드 수를 늘리거나 줄입니다. MySQL 용 \nAmazon RDS 에 데이터를 저장합니다.",
      "Amazon S3 버킷을 사용하여 웹 사이트의 정적 콘텐츠를 호스팅합니다. Amazon \nCloudFront 배포를 배포합니다. S3 버킷을 오리진으로 설정합니다. 백엔드 API 에 Amazon \nAPI Gateway 및 AWS Lambda 함수를 사용합니다. Amazon DynamoDB 에 데이터를 \n저장합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 수백만 건의 폭발적인 요청에도 초저지연 응답을 보장하려면 서버리스 풀 세트(S3 + CloudFront + API Gateway + Lambda + DynamoDB) 방식이 확장성과 가용성 면에서 압도적입니다.\n\nhttps://aws.amazon.com/serverless/",
    "glossary": {
      "DynamoDB": "초당 수백만 건의 요청도 밀리초 단위로 처리할 수 있는 완전 관리형 NoSQL 데이터베이스",
      "Serverless": "사용자가 서버를 직접 관리하지 않고 실행된 코드만큼만 비용을 지불하는 컴퓨팅 모델"
    }
  },
  {
    "id": 22,
    "question": "솔루션 설계자는 Amazon S3 를 사용하여 새로운 디지털 미디어 애플리케이션의 스토리지 \n아키텍처를 설계하고 있습니다. 미디어 파일은 가용 영역 손실에 대한 복원력이 있어야 \n합니다. 일부 파일은 자주 액세스되는 반면 다른 파일은 예측할 수 없는 패턴으로 거의 \n액세스되지 \n않습니다. \n솔루션 \n설계자는 \n미디어 \n파일을 \n저장하고 \n검색하는 \n비용을 \n최소화해야 합니다. \n이러한 요구 사항을 충족하는 스토리지 옵션은 무엇입니까?",
    "options": [
      "S3 Standard (S3 표준)",
      "S3 Intelligent-Tiering (S3 지능형 계층화)",
      "S3 Standard-Infrequent Access(S3 Standard-IA)",
      "S3 One Zone-Infrequent Access(S3 One Zone-IA)"
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 파일 접근 패턴이 불규칙하거나 예측하기 어렵다면 AWS가 알아서 요금제를 최적화해주는 S3 Intelligent-Tiering이 정답입니다. 성능 저하 없이 자동으로 저장 비용을 절감해줍니다.\n\nhttps://aws.amazon.com/s3/storage-classes/intelligent-tiering/",
    "glossary": {
      "Intelligent-Tiering": "데이터의 접근 빈도를 감시하여 자동으로 가장 저렴한 스토리지 계층으로 옮겨주는 기능",
      "S3 Standard": "가장 높은 가용성과 빠른 성능을 제공하는 S3의 범용 스토리지 클래스"
    }
  },
  {
    "id": 23,
    "question": "회사에서 Amazon S3 Standard 스토리지를 사용하여 백업 파일을 저장하고 있습니다. 1 개월 \n동안 파일에 자주 액세스합니다. 단, 1 개월 이후에는 파일에 접근하지 않습니다. 회사는 \n파일을 무기한 보관해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": [
      "객체를 자동으로 마이그레이션하도록 S3 Intelligent-Tiering 을 구성합니다.",
      "S3 수명 주기 구성을 생성하여 1 개월 후에 S3 Standard 에서 S3 Glacier Deep Archive 로 \n객체를 전환합니다.",
      "S3 수명 주기 구성을 생성하여 1\n개월 후에 객체를 S3 Standard\n에서 S3 \nStandard-Infrequent Access(S3 Standard-IA)로 전환합니다.",
      "S3 수명 주기 구성을 생성하여 1 개월 후에 객체를 S3 Standard\n에서 S3 One \nZone-Infrequent Access(S3 One Zone-IA)로 전환합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 1개월 뒤에는 거의 보지 않는 장기 보관용 백업 데이터는 수명 주기 정책을 통해 S3 Glacier Deep Archive로 전환하는 것이 비용을 가장 아끼는 지혜로운 방법입니다.\n\nhttps://aws.amazon.com/s3/storage-classes/glacier/",
    "glossary": {
      "Glacier Deep Archive": "연간 1~2회 정도만 접근하는 초저가 장기 아카이브 스토리지 (S3 최저가)",
      "Lifecycle Policy": "S3에 저장된 객체가 일정 시간이 지나면 자동으로 하위 계층으로 옮겨지거나 삭제되도록 관리하는 기능"
    }
  },
  {
    "id": 24,
    "question": "회사는 가장 최근 청구서에서 Amazon EC2 비용 증가를 관찰했습니다. 청구 팀은 몇 개의 \nEC2 인스턴스에 대한 인스턴스 유형의 원치 않는 수직적 확분을 발견했습니다. 솔루션 \n설계자는 지난 2 개월간의 EC2 비용을 비교하는 그래프를 생성하고 심층 분석을 수행하여 \n수직적 확장의 근본 원인을 식별해야 합니다. \n솔루션 설계자는 운영 오버헤드가 가장 적은 정보를 어떻게 생성해야 합니까?",
    "options": [
      "AWS 예산을 사용하여 예산 보고서를 생성하고 인스턴스 유형에 따라 EC2 비용을 \n비교합니다.",
      "Cost Explorer 의 세분화된 필터링 기능을 사용하여 인스턴스 유형을 기반으로 EC2 \n비용에 대한 심층 분석을 수행합니다.",
      "AWS Billing and Cost Management 대시보드의 그래프를 사용하여 지난 2 개월 동안의 \n인스턴스 유형을 기준으로 EC2 비용을 비교합니다.",
      "AWS 비용 및 사용 보고서를 사용하여 보고서를 생성하고 Amazon S3 버킷으로 \n보냅니다. Amazon S3 와 함께 Amazon QuickSight 를 소스로 사용하여 인스턴스 유형을 \n기반으로 대화형 그래프를 생성합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 비용 증가 원인을 파악하기 위해 세부 필터링과 시각적 분석이 필요하다면 Cost Explorer가 최고의 성능을 냅니다. 원치 않는 수직적 확장이 발생한 위치를 즉시 찾아낼 수 있습니다.\n\nhttps://aws.amazon.com/aws-cost-management/aws-cost-explorer/",
    "glossary": {
      "Cost Explorer": "컴퓨팅 비용 등 AWS 지출 내역을 시각화하고 세부적으로 분석하여 비용 절감 포인트를 찾는 도구",
      "Vertical Scaling": "서버의 사양(CPU, Mem 등)을 더 높은 등급으로 올려 성능을 높이는 방식"
    }
  },
  {
    "id": 25,
    "question": "회사에서 응용 프로그램을 설계하고 있습니다. 애플리케이션은 AWS Lambda 함수를 \n사용하여 Amazon API Gateway 를 통해 정보를 수신하고 Amazon Aurora PostgreSQL \n데이터베이스에 정보를 저장합니다. \n개념 증명 단계에서 회사는 데이터베이스에 로드해야 하는 대용량 데이터를 처리하기 위해 \nLambda 할당량을 크게 늘려야 합니다. 솔루션 설계자는 확장성을 개선하고 구성 노력을 \n최소화하기 위해 새로운 설계를 권장해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Lambda 함수 코드를 Amazon EC2 인스턴스에서 실행되는 Apache Tomcat 코드로 \n리팩터링합니다. 네이티브 JDBC(Java Database Connectivity) 드라이버를 사용하여 \n데이터베이스를 연결합니다.",
      "플랫폼을 Aurora 에서 Amazon DynamoDProvision a DynamoDB Accelerator(DAX) \n클러스터로 변경합니다. DAX 클라이언트 SDK\n를 사용하여 DAX 클러스터에서 기존 \nDynamoDB API 호출을 가리킵니다.",
      "두 개의 Lambda 함수를 설정합니다. 정보를 수신할 하나의 기능을 구성하십시오. \n정보를 데이터베이스에 로드하도록 다른 기능을 구성하십시오. Amazon Simple Notification \nService(Amazon SNS)를 사용하여 Lambda 함수를 통합합니다.",
      "두 개의 Lambda 함수를 설정합니다. 정보를 수신할 하나의 기능을 구성하십시오. \n정보를 데이터베이스에 로드하도록 다른 기능을 구성하십시오. Amazon Simple Queue \nService(Amazon SQS) 대기열을 사용하여 Lambda 함수를 통합합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 대용량 데이터 로드 시 람다의 한계를 극복하려면 중간에 SQS 대기열을 두어 트래픽을 완충하고, 후속 람다가 차근차근 데이터를 처리하게 하는 디커플링 설계가 반드시 필요합니다.\n\nhttps://aws.amazon.com/sqs/",
    "glossary": {
      "SQS (Simple Queue Service)": "메시지를 임시로 보관하여 서버 간의 처리 속도 차이를 완충해주는 분산 대기열 서비스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  }
];