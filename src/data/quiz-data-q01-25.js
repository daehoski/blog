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
    "explanation": "www.examtopics.com/discussions/amazon/view/84973-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 2,
    "question": "회사는 독점 애플리케이션의 로그 파일을 분석할 수 있는 능력이 필요합니다. 로그는 \nAmazon S3 버킷에 JSON 형식으로 저장됩니다. 쿼리는 간단하고 주문형으로 실행됩니다. \n솔루션 설계자는 기존 아키텍처에 대한 최소한의 변경으로 분석을 수행해야 합니다. \n솔루션 설계자는 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하기 위해 무엇을 해야 \n합니까?",
    "options": [
      "Amazon Redshift 를 사용하여 모든 콘텐츠를 한 곳에 로드하고 필요에 따라 SQL 쿼리를 \n실행합니다.",
      "Amazon CloudWatch Logs\n를 사용하여 로그를 저장합니다. Amazon CloudWatch \n콘솔에서 필요에 따라 SQL 쿼리를 실행합니다.",
      "Amazon S3 와 함께 Amazon Athena 를 직접 사용하여 필요에 따라 쿼리를 실행합니다.",
      "AWS Glue 를 사용하여 로그를 분류합니다. Amazon EMR 에서 임시 Apache Spark \n클러스터를 사용하여 필요에 따라 SQL 쿼리를 실행합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/84848-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nS3 에 쿼리하는 건 Athena. \nAthena 가 사용 가능한 모든 리전에서 Amazon Athena 를 사용하여 표준 SQL 로 Amazon \nS3 인벤토리를 쿼리할 수 있습니다.  \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/storage-inventory-athen\na-query.html \nAthena 로 JSON 쿼리 가능. \nAmazon Athena 를 사용하면 JSON 인코딩 값을 구문 분석하고, JSON 에서 데이터를",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구"
    }
  },
  {
    "id": 3,
    "question": "회사는 AWS Organizations 를 사용하여 여러 부서의 여러 AWS 계정을 관리합니다. 관리 \n계정에는 프로젝트 보고서가 포함된 Amazon S3 버킷이 있습니다. 회사는 이 S3 버킷에 \n대한 액세스를 AWS Organizations 의 조직 내 계정 사용자로만 제한하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "조직 ID 에 대한 참조와 함께 aws PrincipalOrgID 전역 조건 키를 S3 버킷 정책에 \n추가합니다.",
      "각 부서에 대한 조직 단위(OU)를 만듭니다. aws:PrincipalOrgPaths 전역 조건 키를 S3 \n버킷 정책에 추가합니다.",
      "AWS \nCloudTrail\n을 \n사용하여 \nCreateAccount, \nInviteAccountToOrganization, \nLeaveOrganization 및 RemoveAccountFromOrganization 이벤트를 모니터링합니다. 그에 \n따라 S3 버킷 정책을 업데이트합니다.",
      "S3 버킷에 액세스해야 하는 각 사용자에 태그를 지정합니다. aws:PrincipalTag 전역 \n조건 키를 S3 버킷 정책에 추가합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/84838-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(O) : aws:PrincipalOrgID 라는 새로운 조건 키를 권한 정책에 사용하여 조직 내의 계정에 \n해당하는 IAM 보안 주체(사용자 및 역할)만 리소스에 액세스할 수 있도록 합니다. \n\naws.amazon.com/ko/about-aws/whats-new/2018/05/principal-org-id/ \nB(X) : aws:PrincipalOrgPaths 는 다중 값 조건 키입니다. 다중 값 키에는 하나 이상의 값이 \n목록 형식으로 포함됩니다. 결과는 논리적 OR 입니다. \n\ndocs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/reference_policies_condition-k\neys.html \nC(X) : CloudTrail 은 리소스 내역을 기록/전송하는 서비스로 지문에서 요구하는 사항에 \n불필요. \nD(X) : 각 사용자마다 태그를 달아야 하므로 최소 운영 오버헤드라는 조건 불충족. \naws:PrincipalTag/tag-key : 문자열 연산자를 사용합니다. 이 키를 사용하여 요청한 보안 \n주체에 연결된 태그를 정책에서 지정한 태그와 비교합니다. \n\ndocs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/reference_policies_condition-k",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84980-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nVPC-S3 간 인터넷을 통하지 않는 연결 = S3 VPC Gateway Endpoint. 정답은 A.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84981-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nEBS와 EFS의 가장 큰 차이점 중 하나는 EBS는 단일 AZ안에서만 접근이 가능한 저장소인 \n반면, EFS 는 다중 AZ 안에서도 접근이 가능한 저장소라는 점입니다. 위 문제에서는 초기 \n단일 AZ 에서 운영하던 EC2 및 EBS 를 복제한뒤 AZ 를 2 중화하여 멀티 EC2 및 EBS \n시스템으로 \n구성하였지만, \n각 \nAZ \n내에서 \n공유되지 \n않는 \nEBS \n저장소를 \n별도로 \n운영하였기때문에 고객들에게 일관성있는 데이터를 제공할 수 없었던 것으로 보입니다. \n이는 각 AZ 의 EC2 인스턴스가 동일한 저장소를 공유하도록 함으로써 해결할 수 있을 것 \n같습니다. 초기 EBS 에 저장되어있던 데이터들을 일관성있게 보정하여 EFS 로 일회성 \n마이그레이션을 수행한뒤 EC2 어플리케이션 서버 인스턴스가 EBS 가 아닌 EFS 에 데이터를 \n저장하도록 변경하는 것이 바람직해보입니다. \n \n2: \nAmazon EFS 는 AWS 클라우드에서 파일 스토리지를 제공합니다. Amazon EFS 를 사용하면",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 6,
    "question": "회사는 NFS 를 사용하여 온프레미스 네트워크 연결 스토리지에 대용량 비디오 파일을 \n저장합니다. 각 비디오 파일의 크기 범위는 1MB 에서 500GB 입니다. 총 스토리지는 \n70TB\n이며 더 이상 증가하지 않습니다. 회사는 비디오 파일을 Amazon S3\n로 \n마이그레이션하기로 결정합니다. 회사는 가능한 한 최소한의 네트워크 대역폭을 사용하면서 \n가능한 한 빨리 비디오 파일을 마이그레이션해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "S3 버킷을 생성합니다. S3 버킷에 대한 쓰기 권한이 있는 IAM 역할을 생성합니다. AWS \nCLI 를 사용하여 모든 파일을 S3 버킷에 로컬로 복사합니다.",
      "AWS Snowball Edge 작업을 생성합니다. 온프레미스에서 Snowball Edge 장치를 \n받습니다. Snowball Edge 클라이언트를 사용하여 장치로 데이터를 전송합니다. AWS 가 \n데이터를 Amazon S3 로 가져올 수 있도록 디바이스를 반환합니다.",
      "온프레미스에 S3 파일 게이트웨이를 배포합니다. S3 파일 게이트웨이에 연결할 퍼블릭 \n서비스 엔드포인트를 생성합니다. S3 버킷을 생성합니다. S3 파일 게이트웨이에서 새 NFS \n파일 공유를 생성합니다. 새 파일 공유가 S3 버킷을 가리키도록 합니다. 기존 NFS 파일 \n공유에서 S3 파일 게이트웨이로 데이터를 전송합니다.",
      "온프레미스 네트워크와 AWS \n간에 AWS Direct Connect \n연결을 설정합니다. \n온프레미스에 S3 파일 게이트웨이를 배포합니다. S3 파일 게이트웨이에 연결할 공용 \nVIF(가상 인터페이스)를 생성합니다. S3 버킷을 생성합니다. S3 파일 게이트웨이에서 새 \nNFS 파일 공유를 생성합니다. 새 파일 공유가 S3 버킷을 가리키도록 합니다. 기존 NFS \n\n=== PAGE 7 ===\n파일 공유에서 S3 파일 게이트웨이로 데이터를 전송합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/84875-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n가능한 한 최소한의 네트워크 대역폭을 사용하라 했으니 아예 오프라인에서 Snowball \nEdge 로 올리는 게 맞음. \nAWS Snowball 및 AWS Snowball Edge 는 기존 저장소에서 네트워크 대역폭이 충분하지 \n않을 때, 대용량 데이터 세트를 클라우드로 이전하는데 도움이 됩니다. \nSnowball 장치는 80TB, Snowball Edge 는 100TB 까지 한번에 이동 가능합니다. \n\naws.amazon.com/ko/blogs/korea/aws-snowball-and-aws-snowball-edge-availa\nble-in-asia-pacific-seoul-region/ \n \n2: \nSnowball 과 Snowball Edge 의 기본적인 차이점은 제공하는 용량입니다. Snowball 은 총 \n50TB 또는 80TB 를 제공하며 그 중 42TB 또는 72TB 를 사용할 수 있고 Amazon Snowball \nEdge 는 100TB 를 제공하며 그 중 83TB 를 사용할 수 있습니다.",
    "glossary": {
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
      "여러 Amazon Simple Queue Service(Amazon SOS) 구독이 있는 Amazon Simple \nNotification Service(Amazon SNS) 주제에 메시지를 게시합니다. 대기열의 메시지를 \n처리하도록 소비자 애플리케이션을 구성합니다.  \n\n=== PAGE 8 ==="
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/84721-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/sqs/features/ \n들어오는 요청을 Amazon SQS 로 라우팅함으로써 회사는 처리 인스턴스에서 작업 요청을 \n분리할 수 있습니다. 이를 통해 대기열 크기에 따라 인스턴스 수를 확장하여 필요할 때 더 \n많은 리소스를 제공할 수 있습니다. 또한 대기열 크기를 기반으로 하는 Auto Scaling \n그룹을 사용하면 워크로드에 따라 자동으로 인스턴스 수를 늘리거나 줄일 수 있습니다. \n대기열에서 읽을 수 있도록 소프트웨어를 업데이트하면 보다 효율적인 방식으로 작업 \n요청을 처리할 수 있어 시스템 성능이 향상됩니다. \n \n솔루션을 분리 = SQS.",
    "glossary": {
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84679-exam-aws-certified-solut",
    "glossary": {}
  },
  {
    "id": 9,
    "question": "회사는 데이터 센터에서 SMB 파일 서버를 실행하고 있습니다. 파일 서버는 파일이 생성된 \n후 처음 며칠 동안 자주 액세스하는 대용량 파일을 저장합니다. 7 일이 지나면 파일에 거의 \n액세스하지 않습니다. \n총 데이터 크기가 증가하고 있으며 회사의 총 저장 용량에 가깝습니다. 솔루션 설계자는 \n가장 최근에 액세스한 파일에 대한 저지연 액세스를 잃지 않으면서 회사의 사용 가능한 \n저장 공간을 늘려야 합니다. 솔루션 설계자는 향후 스토리지 문제를 방지하기 위해 파일 \n수명 주기 관리도 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까? \n\n=== PAGE 10 ===",
    "options": [
      "AWS DataSync 를 사용하여 SMB 파일 서버에서 AWS 로 7 일이 지난 데이터를 \n복사합니다.",
      "Amazon S3 파일 게이트웨이를 생성하여 회사의 스토리지 공간을 확장합니다. S3 수명 \n주기 정책을 생성하여 7 일 후에 데이터를 S3 Glacier Deep Archive 로 전환합니다.",
      "Windows 파일 서버용 Amazon FSx 파일 시스템을 생성하여 회사의 저장 공간을 \n확장합니다.",
      "각 사용자의 컴퓨터에 유틸리티를 설치하여 Amazon S3 에 액세스합니다. S3 수명 주기 \n정책을 생성하여 7 일 후 데이터를 S3 Glacier Flexible Retrieval 로 전환합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/84680-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n사용 가능한 스토리지 공간을 늘림 = Storage Gateway. 답은 B. \nA(X) : AWS 에서 무슨 스토리지를 사용할 건지에 대한 언급이 없음. 또한 하이브리드 \n스토리지인 Storage Gateway 가 더 적절한 방식임. \nB(O) : 정답. 스토리지 게이트웨이는 온프레미스 스토리지와 AWS 스토리지를 합쳐 사실상 \n무제한의 스토리지를 향유하는 것을 목적으로 하는 서비스. \nAmazon S3 File Gateway 의 사용 사례로는 (a) 최근에 액세스한 데이터에 대해 빠른 로컬 \n액세스를 유지하면서 온프레미스 파일 데이터를 Amazon S3 로 마이그레이션. SMB(서버 \n메시지 블록) 버전 2 및 3 을 사용하여 게이트웨이에 연결하는 Windows 클라이언트를 \n지원합니다. \n\naws.amazon.com/ko/storagegateway/faqs/?nc=sn&loc=6 \nC(X) : A 와 같은 이유로 오답. \nD(X) : SMB 사용 여부 불투명. \n \n2: \nAmazon S3 File Gateway 는 온프레미스 애플리케이션이 Amazon S3 클라우드 스토리지를 \n원활하게 사용할 수 있도록 하는 하이브리드 클라우드 스토리지 서비스입니다. Amazon \nS3 에 대한 파일 인터페이스를 제공하고 SMB 및 NFS 프로토콜을 지원합니다. 또한 지정된 \n기간이 지나면 데이터를 S3 Standard 에서 S3 Glacier Deep Archive 로 자동 전환할 수 있는 \nS3 수명 주기 정책을 지원합니다. 이 솔루션은 짧은 대기 시간 액세스를 유지하면서 \n회사의 사용 가능한 저장 공간을 늘리는 요구 사항을 충족합니다. \n가장 최근에 액세스한 파일에 저장하고 파일 수명 주기 관리를 제공하여 향후 스토리지 \n문제를 방지합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Storage Gateway": "사내 장비와 AWS 스토리지를 연결해 하이브리드 환경을 만드는 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84681-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n주문이 \n접수된 \n순서대로 \n처리되도록 \n하기 \n위한 \n최상의 \n솔루션은 \nAmazon \nSQS \nFIFO(선입선출) 대기열을 사용하는 것입니다. 이 유형의 대기열은 메시지를 보내고 받는 \n정확한 순서를 유지합니다. 이 경우 애플리케이션은 새 주문에 대한 정보를 Amazon API \nGateway REST API 로 보낼 수 있습니다. 그런 다음 API Gateway 통합을 사용하여 처리를 \n위해 메시지를 Amazon SQS FIFO 대기열로 보낼 수 있습니다. 그런 다음 AWS Lambda \n함수를 호출하여 각 주문에 필요한 처리를 수행하도록 대기열을 구성할 수 있습니다. \n이렇게 하면 주문이 접수된 정확한 순서대로 처리됩니다. \n즉. 주문한 순서대로 = FIFO",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 11,
    "question": "회사에 Amazon EC2 인스턴스에서 실행되고 Amazon Aurora 데이터베이스를 사용하는 \n애플리케이션이 있습니다. EC2 인스턴스는 파일에 로컬로 저장된 사용자 이름과 암호를 \n사용하여 \n데이터베이스에 \n연결합니다. \n회사는 \n자격 \n증명 \n관리의 \n운영 \n오버헤드를 \n\n=== PAGE 12 ===\n최소화하려고 합니다. \n솔루션 설계자는 이 목표를 달성하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Secrets Manager 를 사용합니다. 자동 회전을 켭니다.",
      "AWS Systems Manager Parameter Store 를 사용합니다. 자동 회전을 켭니다.",
      "AWS Key Management Service(AWS KMS) 암호화 키로 암호화된 객체를 저장할 Amazon \nS3 \n버킷을 \n생성합니다. \n자격 \n증명 \n파일을 \nS3 \n버킷으로 \n마이그레이션합니다. \n애플리케이션이 S3 버킷을 가리키도록 합니다.",
      "각 EC2 인스턴스에 대해 암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 \n생성합니다. 새 EBS 볼륨을 각 EC2 인스턴스에 연결합니다. 자격 증명 파일을 새 EBS \n볼륨으로 마이그레이션합니다. 애플리케이션이 새 EBS 볼륨을 가리키도록 합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/84682-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(O) : Secrets Manager 는 자격증명을 저장해두고 관리할 수 있는 서비스. \nAWS Secrets Manager 는 애플리케이션, 서비스 및 IT 리소스에 대한 액세스를 보호하는 데 \n도움이 되는 보안 정보 관리 서비스입니다. 이 서비스를 사용하면 수명 주기 동안 \n데이터베이스 자격 증명, API 키 및 기타 보안 정보를 손쉽게 교체, 관리 및 검색할 수 \n있습니다. \naws.amazon.com/ko/secrets-manager/faqs/ \nSecrets Manager 에서 보안 암호에 대한 자동 교체를 설정할 수 있습니다. \n\ndocs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html \nB(X) : Systems Manager Parameter Store 는 구성 데이터 같은 걸 코드와 분리하여 원치 \n않는 노출을 막는 것. \nQ:AWS Systems Manager parameter store 란 무엇입니까? AWS Systems Manager 는 \n데이터베이스 문자열과 같은 평문 데이터든 암호와 같은 비밀이든 관계없이 구성 데이터를 \n관리할 수 있는 중앙 스토어를 제공합니다. 따라서 비밀과 구성 데이터를 코드와 분리할 수 \n있습니다. \naws.amazon.com/ko/systems-manager/faq/ \nC(X) : KMS 키는 S3 버킷에 저장하는 것이 아니라 Secrets Manager 등을 이용해 관리. \nD(X) : C 와 비슷한 이유로 오답.\"",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 12,
    "question": "글로벌 회사는 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 웹 \n애플리케이션을 호스팅합니다. 웹 애플리케이션에는 정적 데이터와 동적 데이터가 있습니다. \n회사는 정적 데이터를 Amazon S3 버킷에 저장합니다. 회사는 정적 데이터 및 동적 \n\n=== PAGE 13 ===\n데이터의 성능을 개선하고 대기 시간을 줄이기를 원합니다. 회사는 Amazon Route 53 에 \n등록된 자체 도메인 이름을 사용하고 있습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "S3 버킷과 ALB\n를 오리진으로 포함하는 Amazon CloudFront 배포를 생성합니다. \nCloudFront 배포로 트래픽을 라우팅하도록 Route 53 을 구성합니다.",
      "ALB 가 오리진인 Amazon CloudFront 배포를 생성합니다. S3 버킷을 엔드포인트로 \n포함하는 AWS Global Accelerator 표준 액셀러레이터를 생성합니다. CloudFront 배포로 \n트래픽을 라우팅하도록 Route 53 을 구성합니다.",
      "S3 버킷을 오리진으로 포함하는 Amazon CloudFront 배포를 생성합니다. ALB 및 \nCloudFront 배포를 엔드포인트로 포함하는 AWS Global Accelerator 표준 액셀러레이터를 \n생성합니다. 가속기 DNS 이름을 가리키는 사용자 지정 도메인 이름을 만듭니다. 사용자 \n지정 도메인 이름을 웹 애플리케이션의 끝점으로 사용합니다.",
      "ALB 가 오리진인 Amazon CloudFront 배포를 생성합니다. S3 버킷을 엔드포인트로 \n포함하는 AWS Global Accelerator 표준 액셀러레이터를 생성합니다. 두 개의 도메인 이름을 \n만듭니다. 하나의 도메인 이름이 동적 콘텐츠의 CloudFront DNS 이름을 가리키도록 합니다. \n다른 도메인 이름이 정적 콘텐츠에 대한 가속기 DNS 이름을 가리키도록 합니다. 도메인 \n이름을 웹 애플리케이션의 끝점으로 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85010-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(O) : 배포를 만들 때 CloudFront 가 파일에 대한 요청을 보내는 원본을 지정합니다. \nCloudFront 에서 여러 원본을 사용할 수 있습니다. 예를 들어 Amazon S3 버킷, MediaStore \n컨테이너, MediaPackage 채널, Application Load Balancer 또는 AWS Lambda 함수 URL 을 \n사용할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Download\nDistS3AndCustomOrigins.html \nAmazon Route 53 을 구성하여 CloudFront 배포로 트래픽을 라우팅합니다. 이하 항목 참고 \n\ndocs.aws.amazon.com/ko_kr/Route53/latest/DeveloperGuide/routing-to-cloudfro\nnt-distribution.html \nB(X) : 지문의 상황은 애플리케이션 계층에서 벌어지는 일이므로 TCP/UDP 를 사용하는 \nAWS Global Accelerator 는 부적절. \nC(X) : B 와 같은 이유로 오답. \nD(X) : B 와 같은 이유로 오답.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84728-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n다중 리전 애플리케이션에 필수 리전의 복제된 암호에 대한 액세스 권한을 부여하고 \nSecrets Manager 를 사용하여 복제본이 기본 암호와 동기화된 상태를 유지할 수 있습니다. \nSecrets Manager 를 사용하면 데이터베이스 자격 증명, API 키 및 기타 비밀을 포함한",
    "glossary": {
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85019-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 단일 노드에서 고가용성 불만족. RedShift 는 MySQL 과 같은 관계형 데이터베이스 \n서비스가 아니라 데이터 웨어하우스 서비스. \nB(X) : 단일 AZ 이기 때문에 고가용성 불만족. \nC(O) : Aurora 는 자동으로 3 개의 AZ 에 6 개의 복제본을 생성. 이러한 복제본은 읽기 부하 \n분산 효과가 있음. \nD(X) : 스팟 인스턴스를 사용할 때는 언제든 중지될 위험에 대비해야 함이 기본임. 즉, \n중지될 수 있는 위험이 높은 인스턴스라는 이야기. 그리고 다중 AZ 를 사용하지 않으므로 \n고가용성을 만족하지 못했음.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84731-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAWS Network Firewall 은 필요에 따라 검사와 필터링을 모두 지원합니다. \n \n2: \nA(X) : GuardDuty 는 계정 보호 서비스. \nAmazon GuardDuty 는 AWS 계정 및 워크로드에서 악의적 활동을 모니터링하고 상세한 \n보안 결과를 제공하여 가시성 및 해결을 촉진하는 위협 탐지 서비스입니다. \n\naws.amazon.com/ko/guardduty/ \nB(X) : 트래픽 미러링은 네트워크 트래픽 복사 서비스. \n트래픽 미러링은 유형의 탄력적 네트워크 인터페이스에서 네트워크 트래픽을 복사하는 데 \n사용할 수 있는 Amazon VPC 기능입니다. \n\ndocs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html \nC(O) : AWS Network Firewall 을 사용하면 VPC 경계에서 네트워크 트래픽을 필터링할 수 \n있습니다.",
    "glossary": {
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84732-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n시각화 = QuickSight. A,B 둘 중 하나가 정답. 대시보드를 그룹과 사용자와 공유해야하므로",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85032-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n\naws.amazon.com/premiumsupport/knowledge-center/ec2-instance-access-s3-b\nucket/ \n \n2:",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85033-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 19,
    "question": "회사에 AWS 에 배포된 3 계층 웹 애플리케이션이 있습니다. 웹 서버는 VPC 의 퍼블릭 \n서브넷에 배포됩니다. 애플리케이션 서버와 데이터베이스 서버는 동일한 VPC 의 프라이빗 \n서브넷에 배포됩니다. 이 회사는 AWS Marketplace 의 타사 가상 방화벽 어플라이언스를 \n검사 VPC 에 배포했습니다. 어플라이언스는 IP 패킷을 수락할 수 있는 IP 인터페이스로 \n구성됩니다. \n솔루션 설계자는 트래픽이 웹 서버에 도달하기 전에 애플리케이션에 대한 모든 트래픽을 \n검사하기 위해 웹 애플리케이션을 어플라이언스와 통합해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 21 ===",
    "options": [
      "애플리케이션 VPC 의 퍼블릭 서브넷에 Network Load Balancer 를 생성하여 패킷 검사를 \n위해 어플라이언스로 트래픽을 라우팅합니다.",
      "애플리케이션 VPC 의 퍼블릭 서브넷에 Application Load Balancer 를 생성하여 패킷 \n검사를 위해 어플라이언스로 트래픽을 라우팅합니다.",
      "전송 게이트웨이를 통해 들어오는 패킷을 라우팅하도록 라우팅 테이블을 구성하는 검사 \nVPC 에 전송 게이트웨이를 배포합니다.",
      "검사 VPC\n에 게이트웨이 로드 밸런서를 배포합니다. 게이트웨이 로드 밸런서 \n엔드포인트를 생성하여 수신 패킷을 수신하고 패킷을 어플라이언스로 전달합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/84727-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nGateway Load Balancer 를 사용하면 방화벽, 침입 탐지 및 방지 시스템, 심층 패킷 검사 \n시스템과 같은 가상 어플라이언스를 배포, 확장 및 관리할 수 있습니다. Gateway Load \nBalancer 는 Gateway Load Balancer 엔드포인트를 사용하여 VPC 경계 전체에서 트래픽을 \n안전하게 교환합니다. \n\ndocs.aws.amazon.com/ko_kr/elasticloadbalancing/latest/gateway/introduction.htm\nl \n오늘 AWS Gateway Load Balancer(GWLB)가 정식 출시되었다는 소식을 알려드리고자 \n합니다. 이를 통해 타사 가상 어플라이언스의 가용성을 쉽고 비용 효율적으로 배포, 확장 \n및 관리 할 수있는 서비스 방화벽 , 침입 감지 및 방지 시스템과 클라우드의 심층 패킷 \n검사 시스템. AWS 파트너 네트워크 및 AWS Marketplace 파트너는 규모, 가용성 및 서비스 \n제공이라는 복잡한 문제를 해결하지 않고도 AWS 고객에게 가상 어플라이언스를 서비스로 \n제공 할 수도 있습니다. \n\naws.amazon.com/ko/blogs/korea/introducing-aws-gateway-load-balancer-easy-\ndeployment-scalability-and-high-availability-for-partner-appliances/",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 20,
    "question": "회사에서 동일한 AWS 리전의 테스트 환경에 대량의 프로덕션 데이터를 복제하는 기능을 \n개선하려고 합니다. 데이터는 Amazon Elastic Block Store(Amazon EBS) 볼륨의 Amazon \nEC2 인스턴스에 저장됩니다. 복제된 데이터를 수정해도 프로덕션 환경에 영향을 주지 \n않아야 합니다. 이 데이터에 액세스하는 소프트웨어는 일관되게 높은 I/O 성능을 \n요구합니다. \n솔루션 설계자는 프로덕션 데이터를 테스트 환경에 복제하는 데 필요한 시간을 최소화해야 \n\n=== PAGE 22 ===\n합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. 테스트 환경의 EC2 인스턴스 스토어 \n볼륨에 스냅샷을 복원합니다.",
      "EBS 다중 연결 기능을 사용하도록 프로덕션 EBS 볼륨을 구성합니다. 프로덕션 EBS \n볼륨의 EBS 스냅샷을 만듭니다. 테스트 환경의 EC2 인스턴스에 프로덕션 EBS 볼륨을 \n연결합니다.",
      "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. 새 EBS 볼륨을 생성하고 초기화합니다. \n프로덕션 EBS 스냅샷에서 볼륨을 복원하기 전에 테스트 환경의 EC2 인스턴스에 새 EBS \n볼륨을 연결합니다.",
      "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. EBS 스냅샷에서 EBS 빠른 스냅샷 복원 \n기능을 켭니다. 스냅샷을 새 EBS 볼륨으로 복원합니다. 테스트 환경의 EC2 인스턴스에 새 \nEBS 볼륨을 연결합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85226-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nA(X) : 인스턴스 스토어 볼륨은 휘발성이라 꺼지면 데이터 날라감. \nB(X) : EBS 다중 연결을 사용하게 되면 복제된 데이터를 수정할 때 프로덕션 환경에 영향을 \n주게 됨. 이는 지문에서 요구한 사항과 위배됨. \nC(X) : 스냅샷으로 새로운 볼륨을 만드는 것이지 만들어진 볼륨에 스냅샷을 복원하는 게 \n아님. \nD(O) : 정답.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 21,
    "question": "전자 상거래 회사는 AWS 에서 하루 1 회 웹 사이트를 시작하려고 합니다. 매일 24 시간 \n동안 정확히 하나의 제품을 판매합니다. 회사는 피크 시간 동안 밀리초 지연 시간으로 \n시간당 수백만 개의 요청을 처리할 수 있기를 원합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 를 사용하여 다른 S3 버킷에 전체 웹 사이트를 호스팅합니다. Amazon \nCloudFront 배포를 추가합니다. S3 버킷을 배포의 오리진으로 설정합니다. Amazon S3 에 \n주문 데이터를 저장합니다.",
      "여러 가용 영역의 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스에 전체 웹 \n사이트를 배포합니다. ALB(Application Load Balancer)를 추가하여 웹 사이트 트래픽을 \n\n=== PAGE 23 ===\n분산합니다. 백엔드 API 에 대해 다른 ALB 를 추가하십시오. MySQL 용 Amazon RDS 에 \n데이터를 저장합니다.",
      "컨테이너에서 실행되도록 전체 애플리케이션을 마이그레이션합니다. Amazon Elastic \nKubernetes Service(Amazon EKS)에서 컨테이너를 호스팅합니다. Kubernetes 클러스터 자동 \n확장 처리를 사용하여 트래픽 버스트를 처리할 포드 수를 늘리거나 줄입니다. MySQL 용 \nAmazon RDS 에 데이터를 저장합니다.",
      "Amazon S3 버킷을 사용하여 웹 사이트의 정적 콘텐츠를 호스팅합니다. Amazon \nCloudFront 배포를 배포합니다. S3 버킷을 오리진으로 설정합니다. 백엔드 API 에 Amazon \nAPI Gateway 및 AWS Lambda 함수를 사용합니다. Amazon DynamoDB 에 데이터를 \n저장합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85195-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 전체 웹사이트를 호스팅하기에는 동적인 요소들이 들어가 있을 수 있는데 \nS3+CloudFront 조합은 정적 웹사이트 호스팅을 위한 것임. \nB(X) : RDS 는 기본적으로 Auto Scaling 을 사용하지 않음. 따로 켜야하는데 해당 선택지엔 \nAuto Scaling 을 사용한단 언급이 없음. \n워크로드를 \n예측할 \n수 \n없는 \n경우 \nAmazon \nRDS \nDB \n인스턴스에 \n대해 \n스토리지 \nAutoscaling 을 활성화할 수 있습니다. \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.\nhtml#USER_PIOPS.Autoscaling \nC(X) : B 와 동일한 이유로 오답. \nD(O) : 정적인 웹사이트 요소들은 S3 + CloudFront 로 빠르게 제공하고, API Gateway 에서 \nLambda 함수를 호출해 DynamoDB 에 데이터 저장 가능. DynamoDB 는 확장성이 뛰어나고 \n밀리초 단위 액세스를 지원하는 데이터베이스 유형. \nS3 + CloudFront 조합의 정적 웹사이트 호스팅 :  \n\naws.amazon.com/ko/premiumsupport/knowledge-center/cloudfront-serve-static-\nwebsite/ \n즉, HTTPS 엔드포인트를 통해 API\n를 호출하면 API Gateway\n가 Lambda 함수를 \n호출합니다. \n\ndocs.aws.amazon.com/ko_kr/lambda/latest/dg/services-apigateway-tutorial.html \n개발자는 DynamoDB\n를 사용해 최신 서버리스 애플리케이션을 구축하여 우선 작은 \n규모에서 시작했다가 전역적으로 확장하여 초당 페타바이트 단위의 데이터와 수천만 건의 \n읽기 및 쓰기 요청을 지원하도록 할 수 있습니다.....DynamoDB 는 용량에 맞게 테이블을",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/84943-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nS3 Intelligent-Tiering - 액세스 빈도 또는 불규칙한 사용 패턴을 모를 때 완벽한 사용 \n사례입니다. \nAmazon S3 는 다양한 사용 사례를 위해 설계된 다양한 스토리지 클래스를 제공합니다. \n여기에는 자주 액세스하는 데이터의 범용 스토리지를 위한 S3 Standard 가 포함됩니다. \n액세스 패턴을 알 수 없거나 변경하는 데이터를 위한 S3 Intelligent-Tiering; S3 \nStandard-Infrequent Access(S3 Standard-IA) 및 S3 One Zone-Infrequent Access(S3 One \nZone-IA)는 수명이 길지만 액세스 빈도가 낮은 데이터를 위한 것입니다. 장기 아카이브 및",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85092-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 솔루션은 B 입니다. \n1 개월 후에 객체를 S3 Standard 에서 S3 Glacier Deep Archive 로 전환하는 S3 수명 주기 \n구성을 생성합니다. Amazon S3 Glacier Deep Archive 는 거의 액세스하지 않고 몇 시간의 \n검색 시간이 허용되는 데이터의 장기 보존을 위한 안전하고 내구성이 있으며 매우 저렴한 \nAmazon S3 스토리지 클래스입니다. Amazon S3 에서 가장 저렴한 스토리지 옵션이므로 \n1 개월 후에 액세스하지 않는 백업 파일을 저장하는 데 비용 효율적인 선택입니다. S3 수명",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 24,
    "question": "회사는 가장 최근 청구서에서 Amazon EC2 비용 증가를 관찰했습니다. 청구 팀은 몇 개의 \nEC2 인스턴스에 대한 인스턴스 유형의 원치 않는 수직적 확장을 발견했습니다. 솔루션 \n설계자는 지난 2 개월간의 EC2 비용을 비교하는 그래프를 생성하고 심층 분석을 수행하여 \n수직적 확장의 근본 원인을 식별해야 합니다. \n솔루션 설계자는 운영 오버헤드가 가장 적은 정보를 어떻게 생성해야 합니까?",
    "options": [
      "AWS 예산을 사용하여 예산 보고서를 생성하고 인스턴스 유형에 따라 EC2 비용을 \n비교합니다.",
      "Cost Explorer 의 세분화된 필터링 기능을 사용하여 인스턴스 유형을 기반으로 EC2 \n비용에 대한 심층 분석을 수행합니다.",
      "AWS Billing and Cost Management 대시보드의 그래프를 사용하여 지난 2 개월 동안의 \n인스턴스 유형을 기준으로 EC2 비용을 비교합니다.",
      "AWS 비용 및 사용 보고서를 사용하여 보고서를 생성하고 Amazon S3 버킷으로 \n보냅니다. Amazon S3 와 함께 Amazon QuickSight 를 소스로 사용하여 인스턴스 유형을 \n기반으로 대화형 그래프를 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85038-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAWS Cost Explorer 는 비용과 사용량을 보고 분석할 수 있는 도구입니다. 기본 그래프, Cost \nExplorer 비용 및 사용량 보고서 또는 Cost Explorer RI 보고서를 사용하여 사용량 및 \n비용을 탐색할 수 있습니다. 최대 지난 12 개월 동안의 데이터를 보고 향후 12 개월 동안 \n지출할 가능성이 있는 금액을 예측하고 구매할 예약 인스턴스에 대한 추천을 받을 수 \n있습니다. 비용 탐색기를 사용하여 추가 조사가 필요한 영역을 식별하고 비용을 이해하는 \n데 사용할 수 있는 추세를 볼 수 있습니다. \n\ndocs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
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
    "explanation": "www.examtopics.com/discussions/amazon/view/85197-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n대기열(SQS)로 병목 현상을 방지할 수 있습니다. \n대량의 데이터 처리 + 확장성 개선 = SQS queue + Lambda 조합.",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  }
];