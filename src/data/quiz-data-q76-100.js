export const quizData = [
  {
    "id": 76,
    "question": "회사는 단일 공장에 있는 여러 기계에서 매일 10TB 의 계측 데이터를 수신합니다. 데이터는 \n공장 내에 위치한 온프레미스 데이터 센터의 SAN(Storage Area Network)에 저장된 JSON \n파일로 구성됩니다. 회사는 이 데이터를 Amazon S3 로 전송하여 중요한 실시간에 가까운 \n분석을 제공하는 여러 추가 시스템에서 액세스할 수 있기를 원합니다. 데이터가 민감한 \n것으로 간주되기 때문에 안전한 전송이 중요합니다. \n가장 안정적인 데이터 전송을 제공하는 솔루션은 무엇입니까?",
    "options": [
      "공용 인터넷을 통한 AWS DataSync",
      "AWS Direct Connect 를 통한 AWS DataSync",
      "공용 인터넷을 통한 AWS Database Migration Service(AWS DMS)",
      "AWS Direct Connect 를 통한 AWS Database Migration Service(AWS DMS)"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85801-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 퍼블릭 인터넷으로 전송하면 노출 위험이 큼. 심지어는 VPN 도 안 했음. \nB(O) : Direct Connect 는 전용선 연결로 온프레미스-AWS 간 통신하는 것이고, DataSync 는 \n데이터 전송/마이그레이션에 사용되는 서비스. \nAWS DataSync 는 온프레미스와 AWS 스토리지 서비스 사이에서 데이터 이동을 자동화 및 \n가속화하는 안전한 온라인 서비스입니다. Amazon Simple Storage Service(S3) 버킷 간에 \n데이터를 복사할 수 있습니다. \naws.amazon.com/ko/datasync/ \nC(X) : A 와 마찬가지 이유로 오답. \nD(X) : DMS 는 데이터베이스 마이그레이션 서비스로 S3 로 데이터를 전송해야하는 지문 \n상황과는 맞지 않음.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Direct Connect": "전용선을 이용해 사내망과 AWS를 직접 연결하는 기술",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스"
    }
  },
  {
    "id": 77,
    "question": "회사는 애플리케이션에 대한 실시간 데이터 수집 아키텍처를 구성해야 합니다. 회사에는 \n데이터가 스트리밍될 때 데이터를 변환하는 프로세스인 API 와 데이터를 위한 스토리지 \n솔루션이 필요합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon EC2 인스턴스를 배포하여 Amazon Kinesis 데이터 스트림으로 데이터를 \n전송하는 API 를 호스팅합니다. Kinesis 데이터 스트림을 데이터 원본으로 사용하는 Amazon \nKinesis Data Firehose 전송 스트림을 생성합니다. AWS Lambda 함수를 사용하여 데이터를 \n변환합니다. Kinesis Data Firehose 전송 스트림을 사용하여 데이터를 Amazon S3 로 \n보냅니다.",
      "Amazon EC2 인스턴스를 배포하여 AWS Glue 에 데이터를 전송하는 API 를 호스팅합니다. \nEC2 인스턴스에서 소스/대상 확인을 중지합니다. AWS Glue 를 사용하여 데이터를 변환하고 \n데이터를 Amazon S3 로 보냅니다.",
      "Amazon Kinesis 데이터 스트림으로 데이터를 보내도록 Amazon API Gateway API 를 \n구성합니다. Kinesis 데이터 스트림을 데이터 원본으로 사용하는 Amazon Kinesis Data \nFirehose 전송 스트림을 생성합니다. AWS Lambda 함수를 사용하여 데이터를 변환합니다. \nKinesis Data Firehose 전송 스트림을 사용하여 데이터를 Amazon S3 로 보냅니다.",
      "데이터를 AWS Glue 로 보내도록 Amazon API Gateway API 를 구성합니다. AWS Lambda \n함수를 사용하여 데이터를 변환합니다. AWS Glue 를 사용하여 데이터를 Amazon S3 로 \n보냅니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85740-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 78,
    "question": "=== PAGE 87 ===\n회사는 사용자 트랜잭션 데이터를 Amazon DynamoDB 테이블에 보관해야 합니다. 회사는 \n데이터를 7 년간 보관해야 합니다. \n이러한 요구 사항을 충족하는 가장 운영 효율성이 높은 솔루션은 무엇입니까?",
    "options": [
      "DynamoDB 지정 시간 복구를 사용하여 테이블을 지속적으로 백업합니다.",
      "AWS Backup 을 사용하여 테이블에 대한 백업 일정 및 보존 정책을 생성합니다.",
      "DynamoDB 콘솔을 사용하여 테이블의 주문형 백업을 생성합니다. 백업을 Amazon S3 \n버킷에 저장합니다. S3 버킷에 대한 S3 수명 주기 구성을 설정합니다.",
      "AWS Lambda 함수를 호출하는 Amazon EventBridge(Amazon CloudWatch Events) \n규칙을 생성합니다. 테이블을 백업하고 Amazon S3 버킷에 백업을 저장하도록 Lambda \n함수를 구성합니다. S3 버킷에 대한 S3 수명 주기 구성을 설정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85742-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 35 일 제한이 있습니다. \"\"특정 시점으로 복구가 설정되어 있으면 최근 35 일 중 \n원하는 시점으로 테이블을 복원할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/PointInTim\neRecovery.html \nB(O) : 한 곳에서 백업 현황 모니터링 및 콜드 스토리지에 저장, 예약 저장 가능합니다. \nAWS Backup 을 사용하면 백업 정책을 구성하고 AWS 리소스 및 온프레미스 워크로드에 \n대한 활동을 한 곳에서 모니터링할 수 있습니다. AWS Backup 과 함께 DynamoDB 를 \n사용하면 AWS 계정 및 리전에서 온디맨드 백업을 복사하고, 온디맨드 백업에 비용 할당 \n태그를 추가하고, 온디맨드 백업을 콜드 스토리지로 전환하여 비용을 절감할 수 있습니다. \n\ndocs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.h\ntml \nAWS Backup 을 사용하여 DynamoDB 온디맨드 백업을 자동으로 예약, 복사, 태그 지정 및 \n수명 주기를 수행할 수 있습니다. DynamoDB 콘솔에서 이러한 백업을 계속 보고 복원할 수 \n있습니다. \n\ndocs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_H\nowItWorksAWS.html \nC(X) : 불가능한 건 아닌데, B 가 더 유리합니다. 운영 측면에서는 한 곳에서 모니터링하는 \n게 편하고, S3 버킷에 저장한다고 했는데 7 년 동안 보관할 거면 S3 콜드 스토리지에 \n보관하는 게 비용이 더 저렴합니다. \nD(X) : 너무 단계가 많습니다. 아마존에서는 DynamoDB 테이블 백업에 AWS Backup 또는 \nDynamoDB 콘솔을 사용할 것을 언급하고 있습니다. \"\"DynamoDB 온디맨드 백업을",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 79,
    "question": "회사에서 데이터 저장을 위해 Amazon DynamoDB 테이블을 사용할 계획입니다. 회사는 \n비용 최적화에 대해 우려하고 있습니다. 대부분의 아침에는 테이블을 사용하지 않습니다. \n저녁에는 읽기 및 쓰기 트래픽이 예측할 수 없는 경우가 많습니다. 트래픽 급증이 발생하면 \n매우 빠르게 발생합니다. \n솔루션 아키텍트는 무엇을 추천해야 합니까?",
    "options": [
      "온디맨드 용량 모드에서 DynamoDB 테이블을 생성합니다.",
      "글로벌 보조 인덱스가 있는 DynamoDB 테이블을 생성합니다.",
      "프로비저닝된 용량 및 Auto Scaling 을 사용하여 DynamoDB 테이블을 생성합니다.",
      "프로비저닝된 용량 모드에서 DynamoDB 테이블을 생성하고 전역 테이블로 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85743-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n사용량 예측이 안 되므로 프로비저닝은 무의미. 따라서 C,D 는 제외되고 A,B 둘 중 하나가 \n정답. \nA(O) : 온디맨드 모드를 사용하는 테이블의 경우 DynamoDB 는 이전에 관찰된 트래픽 \n수준까지 상승하거나 하락할 때 고객의 워크로드를 즉시 수용할 수 있습니다. 트래픽 \n수준이 새로운 고점에 도달하면 DynamoDB 는 신속하게 대응하여 워크로드를 수용합니다. \n\naws.amazon.com/ko/blogs/korea/amazon-dynamodb-on-demand-no-capacity-\nplanning-and-pay-per-request-pricing/ \nB(X) : 고가용성 언급이 없고 비용 최적화를 언급하고 있으므로 B 보다는 A 가 적합.",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 80,
    "question": "한 회사는 최근 애플리케이션 마이그레이션 이니셔티브에 대한 지원을 위해 AWS 관리형 \n서비스 공급자(MSP) 파트너와 계약을 체결했습니다. 솔루션 설계자는 기존 AWS 계정의 \nAmazon 머신 이미지(AMI)를 MSP 파트너의 AWS 계정과 공유해야 합니다. AMI 는 Amazon \nElastic Block Store(Amazon EBS)의 지원을 받으며 AWS Key Management Service(AWS \n\n=== PAGE 89 ===\nKMS) 고객 관리형 키를 사용하여 EBS 볼륨 스냅샷을 암호화합니다. \n솔루션 설계자가 MSP 파트너의 AWS 계정과 AMI\n를 공유하는 가장 안전한 방법은 \n무엇입니까?",
    "options": [
      "암호화된 AMI 및 스냅샷을 공개적으로 사용할 수 있도록 합니다. MSP 파트너의 AWS \n계정이 키를 사용할 수 있도록 키 정책을 수정합니다.",
      "AMI 의 launchPermission 속성을 수정합니다. MSP 파트너의 AWS 계정과만 AMI 를 \n공유하십시오. MSP 파트너의 AWS 계정이 키를 사용할 수 있도록 키 정책을 수정합니다.",
      "AMI 의 launchPermission 속성을 수정합니다. MSP 파트너의 AWS 계정과만 AMI 를 \n공유하십시오. 암호화를 위해 MSP 파트너가 소유한 새 KMS 키를 신뢰하도록 키 정책을 \n수정합니다.",
      "원본 계정에서 MSP 파트너의 AWS 계정에 있는 Amazon S3 버킷으로 AMI 를 내보내고 \nMSP 파트너가 소유한 새 KMS 키로 S3 버킷을 암호화합니다. MSP 파트너의 AWS \n계정에서 AMI 를 복사하고 시작합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85606-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : '공개적'이라는 키워드가 애초에 보안과는 거리가 멈. \nB(O) : 기존 KMS 키는 스냅샷을 암호화하는 데 사용되었기 때문에 MSP 파트너와 공유해도 \n괜찮음. \nC(X) : 파트너의 KMS 키를 신뢰하면 파트너가 해당 키를 가지고 악의적인 용도로 사용할 \n때 문제가 됨. \nD(X) : 파트너와 공유해야 하는데 파트너가 S3 버킷을 암호화하도록 냅둬버리면 파트너가 \n공유받는 입장이 아니라 내가 공유받는 입장이 되어버리는 역전현상이 벌어짐. \n \n2: \nAMI 스냅샷을 암호화하는 데 이미 사용되었기 때문에 기존 KMS 키를 MSP 외부 계정과 \n공유합니다. \n\ndocs.aws.amazon.com/ko_kr/kms/latest/developerguide/key-policy-modifying-ex\nternal-accounts.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 81,
    "question": "솔루션 설계자는 AWS 에 배포되는 새 애플리케이션을 위한 클라우드 아키텍처를 설계하고 \n있습니다. 처리할 작업 수에 따라 필요에 따라 애플리케이션 노드를 추가 및 제거하면서 \n\n=== PAGE 90 ===\n프로세스가 병렬로 실행되어야 합니다. 프로세서 응용 프로그램은 상태 비저장입니다. \n솔루션 설계자는 응용 프로그램이 느슨하게 연결되어 있고 작업 항목이 영구적으로 \n저장되어 있는지 확인해야 합니다. \n솔루션 설계자는 어떤 디자인을 사용해야 합니까?",
    "options": [
      "처리해야 \n하는 \n작업을 \n보낼 \nAmazon \nSNS \n주제를 \n생성합니다. \n프로세서 \n애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 \n구성을 생성합니다. 시작 구성을 사용하여 Auto Scaling 그룹을 생성합니다. CPU 사용량에 \n따라 노드를 추가 및 제거하도록 Auto Scaling 그룹에 대한 조정 정책을 설정합니다.",
      "처리해야 \n하는 \n작업을 \n보관할 \nAmazon \nSQS \n대기열을 \n생성합니다. \n프로세서 \n애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 \n구성을 생성합니다. 시작 구성을 사용하여 Auto Scaling 그룹을 생성합니다. Auto Scaling \n그룹의 조정 정책을 설정하여 네트워크 사용량에 따라 노드를 추가 및 제거합니다.",
      "처리해야 \n하는 \n작업을 \n보관할 \nAmazon \nSQS \n대기열을 \n생성합니다. \n프로세서 \n애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 \n템플릿을 생성합니다. 시작 템플릿을 사용하여 Auto Scaling 그룹을 생성합니다. SQS \n대기열의 항목 수에 따라 노드를 추가 및 제거하도록 Auto Scaling 그룹에 대한 조정 \n정책을 설정합니다.",
      "처리해야 \n하는 \n작업을 \n보낼 \nAmazon \nSNS \n주제를 \n생성합니다. \n프로세서 \n애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 \n템플릿을 생성합니다. 시작 템플릿을 사용하여 Auto Scaling 그룹을 생성합니다. SNS \n주제에 게시된 메시지 수에 따라 노드를 추가 및 제거하도록 Auto Scaling 그룹에 대한 \n조정 정책을 설정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/86621-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\"처리해야 하는 작업을 보관할 Amazon SQS 대기열을 생성합니다. \n컴퓨팅 애플리케이션에 대한 Amazon EC2 Auto Scaling 그룹을 생성합니다. SQS 대기열의 \n항목 수에 따라 노드를 추가 및 제거하도록 Auto Scaling 그룹에 대한 조정 정책을 \n설정합니다. \nAmazon SQS 는 이 사용 사례에 이상적이며 대기열에서 대기 중인 작업 수에 따라 동적 \n조정을 사용하도록 구성할 수 있습니다. 이 조정을 구성하려면 유지 관리할 인스턴스당 \n허용되는 백로그인 대상 값과 함께 인스턴스당 백로그 메트릭을 사용할 수 있습니다. \n이러한 수치는 다음과 같이 계산할 수 있습니다.  \n인스턴스당 백로그:",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 82,
    "question": "회사는 AWS 클라우드에서 웹 애플리케이션을 호스팅합니다. 회사는 AWS Certificate \nManager(ACM)로 가져온 인증서를 사용하도록 Elastic Load Balancer 를 구성합니다. 각 \n인증서가 만료되기 30 일 전에 회사 보안팀에 알려야 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 권장해야 합니까?",
    "options": [
      "ACM 에 규칙을 추가하여 인증서가 만료되기 30 일 전부터 매일 Amazon Simple \nNotification Service(Amazon SNS) 주제에 사용자 지정 메시지를 게시합니다.",
      "30 일 이내에 만료되는 인증서를 확인하는 AWS Config 규칙을 생성합니다. AWS \nConfig 가 비준수 리소스를 보고할 때 Amazon Simple Notification Service(Amazon SNS)를 \n통해 사용자 지정 알림을 호출하도록 Amazon EventBridge(Amazon CloudWatch Events)를 \n구성합니다.",
      "AWS Trusted Advisor 를 사용하여 30 일 이내에 만료되는 인증서를 확인합니다. 상태 \n변경 확인에 대한 Trusted Advisor 지표를 기반으로 하는 Amazon CloudWatch 경보를 \n생성합니다. Amazon Simple Notification Service(Amazon SNS)를 통해 사용자 지정 알림을 \n보내도록 경보를 구성합니다.",
      "30\n일 이내에 만료되는 모든 인증서를 감지하는 Amazon EventBridge(Amazon \nCloudWatch Events) 규칙을 생성합니다. AWS Lambda 함수를 호출하도록 규칙을 \n구성합니다. Amazon Simple Notification Service(Amazon SNS)를 통해 사용자 지정 알림을 \n보내도록 Lambda 함수를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85615-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 30 일 전에 통보하랬지 맨날 통보하란 이야기는 없었음. \nB(O) : AWS Config 를 사용하여 만료 날짜가 가까워지는 인증서를 확인할 수 있습니다. \n인증서 만료 날짜가 가까워지면 Amazon EventBridge 를 사용하여 이메일 알림을 받을 수도 \n있습니다. \n\naws.amazon.com/ko/premiumsupport/knowledge-center/acm-certificate-expiratio\nn/ \nC(X) : Trusted Advisor 는 \"\"AWS 환경을 검사한 후 비용 절감, 시스템 가용성 및 성능 향상 \n또는 보안 격차를 해결할 기회가 있을 때 권장 사항을 제시",
    "glossary": {
      "Config": "AWS 리소스의 설정 변경 사항을 기록하고 규정을 준수하는지 확인하는 서비스"
    }
  },
  {
    "id": 83,
    "question": "회사의 동적 웹 사이트는 미국의 온프레미스 서버를 사용하여 호스팅됩니다. 이 회사는 \n유럽에서 제품을 출시하고 있으며 새로운 유럽 사용자를 위해 사이트 로딩 시간을 \n최적화하려고 합니다. 사이트의 백엔드는 미국에 있어야 합니다. 제품이 며칠 안에 \n출시되며 즉각적인 솔루션이 필요합니다. \n솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "us-east-1 에서 Amazon EC2 인스턴스를 시작하고 사이트를 마이그레이션합니다.",
      "웹사이트를 Amazon S3 로 이동합니다. 지역 간 교차 지역 복제를 사용합니다.",
      "온프레미스 서버를 가리키는 사용자 지정 오리진과 함께 Amazon CloudFront\n를 \n사용합니다.",
      "온프레미스 서버를 가리키는 Amazon Route 53 지리 근접 라우팅 정책을 사용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85902-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n\naws.amazon.com/pt/blogs/aws/amazon-cloudfront-support-for-custom-origins/ \n이제 사용자 지정 오리진을 사용하여 CloudFront 배포를 생성할 수 있습니다. 각 배포는 \nS3 또는 사용자 지정 오리진을 가리킬 수 있습니다. 이것은 다른 스토리지 서비스일 수도 \n있고 EC2 인스턴스 또는 Elastic Load Balancer 와 같이 더 흥미롭고 동적인 것일 수도 \n있습니다. \n \n2: \nA(X) : 유럽과 가까워야 하므로 us-east-1 은 오답. \nB(X) : 동적 웹 사이트라고 했으므로 S3 가 들어가지 않음.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 84,
    "question": "회사는 기존 3\n계층 웹 아키텍처의 비용을 절감하려고 합니다. 웹, 애플리케이션 및 \n데이터베이스 서버는 개발, 테스트 및 프로덕션 환경을 위한 Amazon EC2 인스턴스에서 \n실행됩니다. EC2 인스턴스의 평균 CPU 사용률은 사용량이 많은 시간에는 30%이고 \n사용량이 많지 않은 시간에는 10%입니다. \n프로덕션 EC2 인스턴스는 하루 24 시간 실행됩니다. 개발 및 테스트 EC2 인스턴스는 매일 \n최소 8 시간 동안 실행됩니다. 회사는 개발을 중지하고 사용하지 않을 때 EC2 인스턴스를 \n테스트하는 자동화를 구현할 계획입니다. \n어떤 EC2 인스턴스 구매 솔루션이 가장 비용 효율적으로 회사의 요구 사항을 충족합니까?",
    "options": [
      "프로덕션 EC2 인스턴스에 스팟 인스턴스를 사용합니다. EC2 인스턴스 개발 및 테스트에 \n예약 인스턴스를 사용합니다.",
      "프로덕션 EC2 인스턴스에 예약 인스턴스를 사용합니다. 개발 및 테스트 EC2 \n인스턴스에 온디맨드 인스턴스를 사용합니다.",
      "프로덕션 EC2 인스턴스에 스팟 블록을 사용합니다. EC2 인스턴스 개발 및 테스트에 \n예약 인스턴스를 사용합니다.",
      "프로덕션 EC2 인스턴스에 온디맨드 인스턴스를 사용합니다. 개발 및 테스트 EC2 \n인스턴스에 스팟 블록을 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85665-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nA(X) : 하루 24 시간 실행하는 프로덕션 EC2 인스턴스에 스팟 인스턴스는 적절치 않음. \n스팟 인스턴스는 도중에 중지될 가능성이 높은 인스턴스에 더 적합.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 85,
    "question": "회사에 사용자가 웹 인터페이스 또는 모바일 앱을 통해 문서를 업로드하는 프로덕션 웹 \n애플리케이션이 있습니다. 새로운 규제 요구 사항에 따라. 새 문서는 저장 후에 수정하거나 \n삭제할 수 없습니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "업로드된 문서를 S3 버전 관리 및 S3 객체 잠금이 활성화된 Amazon S3 버킷에 \n저장합니다.",
      "업로드된 문서를 Amazon S3 버킷에 저장합니다. 문서를 주기적으로 보관하도록 S3 \n수명 주기 정책을 구성합니다.",
      "업로드된 문서를 S3 버전 관리가 활성화된 Amazon S3 버킷에 저장합니다. 모든 \n액세스를 읽기 전용으로 제한하도록 ACL 을 구성합니다.",
      "업로드된 문서를 Amazon Elastic File System(Amazon EFS) 볼륨에 저장합니다. 읽기 \n전용 모드에서 볼륨을 마운트하여 데이터에 액세스합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85751-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n수정하거나 삭제할 수 없음 = S3 Object Lock. \nS3 객체 잠금을 사용하면 write-once-read-many(WORM) 모델을 사용하여 객체를 저장할 \n수 있습니다. 객체 잠금은 고정된 시간 동안 또는 무기한으로 객체의 삭제 또는 덮어쓰기를 \n방지하는 데 도움이 될 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/object-lock.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 86,
    "question": "회사에는 공통 Amazon RDS MySQL 다중 AZ DB 인스턴스에 자주 액세스해야 하는 여러 웹 \n서버가 있습니다. 회사는 사용자 자격 증명을 자주 교체해야 하는 보안 요구 사항을 \n충족하면서 웹 서버가 데이터베이스에 연결할 수 있는 안전한 방법을 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS Secrets Manager 에 데이터베이스 사용자 자격 증명을 저장합니다. 웹 서버가 AWS \nSecrets Manager 에 액세스할 수 있도록 필요한 IAM 권한을 부여합니다.",
      "AWS Systems Manager OpsCenter 에 데이터베이스 사용자 자격 증명을 저장합니다. 웹 \n서버가 OpsCenter 에 액세스할 수 있도록 필요한 IAM 권한을 부여합니다.",
      "안전한 Amazon S3 버킷에 데이터베이스 사용자 자격 증명을 저장합니다. 웹 서버가 \n자격 증명을 검색하고 데이터베이스에 액세스할 수 있도록 필요한 IAM 권한을 부여합니다.",
      "웹 서버 파일 시스템의 AWS Key Management Service(AWS KMS)로 암호화된 파일에 \n데이터베이스 사용자 자격 증명을 저장합니다. 웹 서버는 파일을 해독하고 데이터베이스에 \n액세스할 수 있어야 합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85753-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAWS Secrets Manager 는 애플리케이션, 서비스 및 IT 리소스에 액세스하는 데 필요한 \n암호를 보호하는 데 도움이 됩니다. 이 서비스를 사용하면 수명 주기 동안 데이터베이스 \n자격 증명, API 키 및 기타 암호를 쉽게 교체, 관리 및 검색할 수 있습니다. \n\ndocs.aws.amazon.com/secretsmanager/latest/userguide/intro.html \nSecrets Manager 를 사용하면 암호를 포함하여 코드의 하드코딩된 자격 증명을 Secrets \nManager 에 대한 API 호출로 대체하여 프로그래밍 방식으로 암호를 검색할 수 있습니다. \n이렇게 하면 비밀이 코드에 더 이상 존재하지 않기 때문에 코드를 검사하는 누군가가 \n비밀을 손상시킬 수 없습니다. 또한 지정된 일정에 따라 암호를 자동으로 교체하도록 \nSecrets Manager 를 구성할 수 있습니다. 이를 통해 장기 비밀을 단기 비밀로 대체하여 \n손상 위험을 크게 줄일 수 있습니다. \n \n2: \n사용자 자격 증명을 자주 바꿈 + 안전한 방법 = Secrets Manager. \nSecrets Manager\n를 사용하면 애플리케이션 소스 코드에서 하드 코딩된 자격 증명을 \n제거하고 애플리케이션 자체에 자격 증명을 저장하지 않음으로써 보안 태세를 개선할 수 \n있습니다. 사용자의 개입 없이 지정한 일정에 따라 자동으로 보안 암호를 교체하도록",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 87,
    "question": "회사는 Amazon API Gateway API 에 의해 호출되는 AWS Lambda 함수에서 애플리케이션을 \n호스팅합니다. Lambda 함수는 고객 데이터를 Amazon Aurora MySQL 데이터베이스에 \n저장합니다. 회사에서 데이터베이스를 업그레이드할 때마다 Lambda 함수는 업그레이드가 \n완료될 때까지 데이터베이스 연결을 설정하지 못합니다. 그 결과 일부 이벤트에 대한 고객 \n데이터가 기록되지 않습니다. \n솔루션 설계자는 데이터베이스 업그레이드 중에 생성되는 고객 데이터를 저장하는 솔루션을 \n설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Lambda \n함수와 \n데이터베이스 \n사이에 \n위치하도록 \nAmazon \nRDS \n프록시를 \n프로비저닝합니다. RDS 프록시에 연결하도록 Lambda 함수를 구성합니다.",
      "Lambda 함수의 실행 시간을 최대로 늘립니다. 데이터베이스에 고객 데이터를 저장하는 \n코드에서 재시도 메커니즘을 만듭니다.",
      "고객 데이터를 Lambda 로컬 스토리지에 유지합니다. 고객 데이터를 데이터베이스에 \n저장하기 위해 로컬 스토리지를 스캔하도록 새로운 Lambda 함수를 구성합니다.",
      "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열에 고객 데이터를 저장합니다. \n대기열을 \n폴링하고 \n고객 \n데이터를 \n데이터베이스에 \n저장하는 \n새 \nLambda \n함수를 \n생성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85319-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n잠시 고객 데이터를 저장하는 솔루션 = SQS. 손실될 위험이 있는 처리 대상 데이터를 잠시 \n보관하는 용도로는 SQS 가 주로 쓰인다고 보면 됨. 답은 D. \n \n2: \n\nwww.learnaws.org/2020/12/13/aws-rds-proxy-deep-dive/",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 88,
    "question": "설문 조사 회사는 미국 지역에서 수년 동안 데이터를 수집했습니다. 이 회사는 크기가 \n3TB 이고 계속 증가하는 Amazon S3 버킷에 데이터를 호스팅합니다. 이 회사는 S3 버킷이 \n있는 유럽 마케팅 회사와 데이터를 공유하기 시작했습니다. 회사는 데이터 전송 비용이 \n가능한 한 낮게 유지되기를 원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "회사의 S3 버킷에서 요청자 지불 기능을 구성합니다.",
      "회사의 S3 버킷에서 마케팅 회사의 S3 버킷 중 하나로 S3 교차 리전 복제를 \n구성합니다.",
      "마케팅 회사가 회사의 S3 버킷에 액세스할 수 있도록 마케팅 회사에 대한 교차 계정 \n액세스를 구성합니다.",
      "S3 Intelligent-Tiering 을 사용하도록 회사의 S3 버킷을 구성합니다. S3 버킷을 마케팅 \n회사의 S3 버킷 중 하나와 동기화합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85738-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n요청자 지불 버킷을 사용하면 버킷 소유자 대신 요청자가 버킷에서 데이터 다운로드 및 \n요청 비용을 지불합니다. 버킷 소유자는 항상 데이터 저장 비용을 지불합니다. \n\ndocs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html \n \n2: \n\"일반적으로 데이터를 공유하고 싶지만 데이터에 액세스하는 다른 사람과 관련된 요금을 \n부과하지 않으려면 버킷을 요청자 지불 버킷으로 구성합니다. \n예를 들어 우편 번호 디렉터리, 참조 데이터 지리 공간 정보 또는 웹 크롤링 데이터와 같은 \n대용량 데이터 세트를 만들 때 요청자 지불 버킷을 사용할 수 있습니다.\"",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 89,
    "question": "회사는 Amazon S3 를 사용하여 기밀 감사 문서를 저장합니다. S3 버킷은 버킷 정책을 \n사용하여 최소 권한 원칙에 따라 감사 팀 IAM 사용자 자격 증명에 대한 액세스를 \n제한합니다. 회사 관리자는 S3 버킷에서 실수로 문서가 삭제되는 것을 걱정하고 더 안전한 \n솔루션을 원합니다. \n솔루션 설계자는 감사 문서를 보호하기 위해 무엇을 해야 합니까?",
    "options": [
      "S3 버킷에서 버전 관리 및 MFA 삭제 기능을 활성화합니다.",
      "각 감사 팀 IAM 사용자 계정의 IAM 사용자 자격 증명에 대해 다단계 인증(MFA)을 \n활성화합니다.",
      "감사 날짜 동안 s3:DeleteObject 작업을 거부하도록 감사 팀의 IAM 사용자 계정에 S3 \n수명 주기 정책을 추가합니다.",
      "AWS Key Management Service(AWS KMS)를 사용하여 S3 버킷을 암호화하고 감사 팀 \nIAM 사용자 계정이 KMS 키에 액세스하지 못하도록 제한합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85808-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n버전 관리는 실수로 삭제했을 때 이전 버전의 파일을 불러올 수 있도록 해줌. \nAmazon S3 의 버전 관리는 동일 버킷 내에 여러 개의 객체 변형을 보유하는 수단입니다. \nS3 버전 관리를 사용하면 버킷에 저장된 모든 버전의 객체를 모두 보존, 검색 및 복원할 \n수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/Versioning.html \nMFA Delete 는 함부로 삭제하지 못하도록 막음. \nMFA Delete 는 다음 작업에 대해 추가 인증을 요구합니다. ◎버킷의 버전 관리 상태 변경 \n◎객체 버전 영구 삭제 \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/MultiFactorAuthenticatio\nnDelete.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 90,
    "question": "회사에서 SQL 데이터베이스를 사용하여 공개적으로 액세스할 수 있는 영화 데이터를 \n저장하고 있습니다. 데이터베이스는 Amazon RDS 단일 AZ DB 인스턴스에서 실행됩니다. \n\n=== PAGE 99 ===\n스크립트는 데이터베이스에 추가된 새로운 영화의 수를 기록하기 위해 매일 임의의 \n간격으로 쿼리를 실행합니다. 스크립트는 업무 시간 동안의 최종 합계를 보고해야 합니다. \n회사의 개발 팀은 스크립트가 실행 중일 때 데이터베이스 성능이 개발 작업에 부적절하다는 \n것을 알아차렸습니다. 솔루션 설계자는 이 문제를 해결하기 위한 솔루션을 권장해야 \n합니다. \n최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "DB 인스턴스를 다중 AZ 배포로 수정합니다.",
      "데이터베이스의 읽기 전용 복제본을 생성합니다. 읽기 전용 복제본만 쿼리하도록 \n스크립트를 구성합니다.",
      "개발 팀에게 매일 일과가 끝날 때 데이터베이스의 항목을 수동으로 내보내도록 \n지시합니다.",
      "Amazon ElastiCache 를 사용하여 스크립트가 데이터베이스에 대해 실행하는 일반적인 \n쿼리를 캐시합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85339-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n스크립트는 데이터베이스에 추가된 새로운 영화의 수를 기록하기 위해 매일 임의의 \n간격으로 쿼리를 실행합니다. = 스크립트는 쿼리를 수행하고 있음 \n'회사의 개발 팀은 스크립트가 실행 중일 때 데이터베이스 성능이 개발 작업에 \n부적절하다는 것을 알아차렸습니다.' = 스크립트 때문에 데이터베이스 성능이 떨어지고 \n있음. \n따라서 쿼리가 너무 많이 수행되어서 데이터베이스 성능에 영향이 가는 상황입니다. 이런 \n경우 read replica 를 통해 쿼리 부하를 분산할 수 있습니다. \nB(O) : 애플리케이션에서 읽기 전용 복제본으로 읽기 쿼리를 라우팅하여 기본 DB \n인스턴스의 로드를 줄일 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/USER_ReadRepl.html \nD(X) : ElastiCache 는 웹 애플리케이션 성능 향상 용도로 주로 사용됨. \nAmazon ElastiCache 는 더 느린 디스크 기반 데이터베이스에 전적으로 의존하기보다는 \n신속한 관리형 인 메모리 시스템에서 정보를 검색할 수 있는 기능을 지원함으로써 웹 \n애플리케이션의 성능을 향상합니다. \naws.amazon.com/ko/elasticache/faqs/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 91,
    "question": "회사에 \nVPC\n의 \nAmazon \nEC2 \n인스턴스에서 \n실행되는 \n애플리케이션이 \n있습니다. \n\n=== PAGE 100 ===\n애플리케이션 중 하나는 Amazon S3 API 를 호출하여 객체를 저장하고 읽어야 합니다. \n회사의 보안 규정에 따라 응용 프로그램의 트래픽은 인터넷을 통해 이동할 수 없습니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "S3 게이트웨이 엔드포인트를 구성합니다.",
      "프라이빗 서브넷에 S3 버킷을 생성합니다.",
      "EC2 인스턴스와 동일한 AWS 리전에 S3 버킷을 생성합니다.",
      "EC2 인스턴스와 동일한 서브넷에 NAT 게이트웨이를 구성합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/85667-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설:・",
      "프라이빗 서브넷에서 S3 를 생성하면 버킷에 대한 직접적인 인터넷 액세스가 제한되지만 \nEC2 와 S3 간의 직접적이고 안전한 연결은 제공되지 않습니다. 애플리케이션은 여전히 S3 \nAPI 에 액세스하기 위해 인터넷을 통과해야 합니다.",
      "EC2 와 동일한 지역에 S3 를 생성한다고 해서 본질적으로 트래픽이 인터넷을 통과하는 \n것을 막지는 않습니다.",
      "NAT 게이트웨이를 구성하면 프라이빗 서브넷의 리소스에 대한 아웃바운드 인터넷 \n연결이 허용되지만 S3 서비스에 대한 직접적이고 안전한 연결은 제공되지 않습니다. \nEC2 에서 S3 API 로의 트래픽은 여전히 인터넷을 통과합니다. \n \n가장 적합한 솔루션은 S3 게이트웨이 엔드포인트를 구성하는 것입니다(옵션 A). 트래픽이 \n인터넷을 통과할 필요 없이 VPC 와 S3 서비스 간에 안전한 비공개 연결을 제공합니다. S3 \n게이트웨이 엔드포인트를 통해 EC2 는 VPC 내에서 직접 S3 API 에 액세스할 수 있으므로 \n트래픽이 인터넷을 통해 이동하지 못하도록 하는 보안 요구 사항을 충족합니다. \n \n참고: \nhttps://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/privatelink-interface-en\ndpoints.html#types-of-vpc-endpoints-for-s3 \nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/privatelink/vpc-endpoints-s3.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 92,
    "question": "회사에서 Amazon S3 버킷에 민감한 사용자 정보를 저장하고 있습니다. 회사는 VPC 내부의 \n\n=== PAGE 101 ===\nAmazon EC2 인스턴스에서 실행되는 애플리케이션 계층에서 이 버킷에 대한 보안 액세스를 \n제공하려고 합니다. \n솔루션 설계자는 이를 달성하기 위해 어떤 단계 조합을 취해야 합니까? (2\n개를 \n선택하세요.)",
    "options": [
      "VPC 내에서 Amazon S3 용 VPC 게이트웨이 엔드포인트를 구성합니다.",
      "S3 버킷의 객체를 퍼블릭으로 만들기 위한 버킷 정책을 생성합니다.",
      "VPC\n에서 실행되는 애플리케이션 계층으로만 액세스를 제한하는 버킷 정책을 \n생성합니다.",
      "S3 액세스 정책으로 IAM 사용자를 생성하고 IAM 자격 증명을 EC2 인스턴스에 \n복사합니다.",
      "NAT 인스턴스를 생성하고 EC2 인스턴스가 NAT 인스턴스를 사용하여 S3 버킷에 \n액세스하도록 합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85903-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(O) : Gateway Endpoint 는 퍼블릭 인터넷망을 통과하지 않는 전용 연결. \n게이트웨이 엔드포인트는 VPC 용 인터넷 게이트웨이 또는 NAT 디바이스가 없어도 Amazon \nS3 및 DynamoDB 에 대한 안정적인 연결을 제공합니다. 게이트웨이 엔드포인트는 AWS \nPrivateLink 를 활성화하지 않습니다. \n\ndocs.aws.amazon.com/ko_kr/vpc/latest/privatelink/vpce-gateway.html \nB(X) : 객체를 퍼블릭으로 만드는 것은 보안과는 거리가 멈. \nC(O) : 버킷 정책으로 버킷에 대한 액세스 제어. \n버킷 정책은 버킷과 해당 버킷의 객체에 대한 액세스 권한을 부여할 수 있는 리소스 기반 \n정책입니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/example-bucket-policie\ns.html \nD(X) : 차라리 IAM 사용자 정책을 사용하는 것이 더 나음. \nAmazon S3 에 대한 사용자 액세스를 제어하는 IAM 사용자 정책을 생성하고 구성할 수 \n있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/user-policies.html \nE(X) : Gateway Endpoint 가 더 좋은 선택임.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 93,
    "question": "=== PAGE 102 ===\n회사는 MySQL 데이터베이스로 구동되는 온프레미스 애플리케이션을 실행합니다. 이 \n회사는 \n애플리케이션의 \n탄력성과 \n가용성을 \n높이기 \n위해 \n애플리케이션을 \nAWS\n로 \n마이그레이션하고 있습니다. \n현재 아키텍처는 정상 작동 시간 동안 데이터베이스에서 많은 읽기 활동을 보여줍니다. \n회사의 개발 팀은 4\n시간마다 프로덕션 데이터베이스의 전체 내보내기를 가져와 준비 \n환경의 데이터베이스를 채웁니다. 이 기간 동안 사용자는 허용할 수 없는 애플리케이션 \n대기 시간을 경험합니다. 개발 팀은 절차가 완료될 때까지 스테이징 환경을 사용할 수 \n없습니다. \n솔루션 설계자는 애플리케이션 지연 문제를 완화하는 대체 아키텍처를 권장해야 합니다. \n또한 대체 아키텍처는 개발 팀이 지연 없이 스테이징 환경을 계속 사용할 수 있는 능력을 \n제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "프로덕션용 다중 AZ Aurora 복제본과 함께 Amazon Aurora MySQL 을 사용합니다. \nmysqldump \n유틸리티를 \n사용하는 \n백업 \n및 \n복원 \n프로세스를 \n구현하여 \n스테이징 \n데이터베이스를 채웁니다.",
      "프로덕션용 다중 AZ Aurora 복제본과 함께 Amazon Aurora MySQL 을 사용합니다. \n데이터베이스 복제를 사용하여 요청 시 스테이징 데이터베이스를 생성합니다.",
      "다중 AZ 배포 및 프로덕션용 읽기 전용 복제본과 함께 MySQL 용 Amazon RDS 를 \n사용합니다. 스테이징 데이터베이스에 대해 대기 인스턴스를 사용합니다.",
      "다중 AZ 배포 및 프로덕션용 읽기 전용 복제본과 함께 MySQL 용 Amazon RDS 를 \n사용합니다. mysqldump 유틸리티를 사용하는 백업 및 복원 프로세스를 구현하여 스테이징 \n데이터베이스를 채웁니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85729-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nRDS 에 비해 Aurora 는 항상 3 개의 AZ 에 6 개의 복제본(Replica)를 보유하고 있으므로 \n애플리케이션 가용성에 더 유리. A,B 둘 중 하나가 답.여기서 mysqldump 가 문젠데,  \nQ: MySQL 에서 Amazon Aurora 로 또는 그 반대로 마이그레이션하려면 어떻게 해야 하나요? \n여러 가지 옵션이 있습니다. 표준 mysqldump 유틸리티를 사용하여 MySQL 에서 데이터를 \n내보내고 mysqlimport 유틸리티를 사용하여 Amazon Aurora\n로 데이터를 가져올 수 \n있습니다. 그 반대도 마찬가지입니다. 또한, AWS 관리 콘솔에서 Amazon RDS 의 DB 스냅샷 \n마이그레이션 기능을 이용하여 Amazon RDS for MySQL DB 스냅샷을 Amazon Aurora 로 \n마이그레이션할 수 있습니다. 대부분 고객은 [1 시간 이내]에 마이그레이션을 완료하지만 \n\naws.amazon.com/ko/rds/aurora/faqs/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 94,
    "question": "한 회사에서 사용자가 Amazon S3 에 작은 파일을 업로드하는 애플리케이션을 설계하고 \n있습니다. 사용자가 파일을 업로드한 후 데이터를 변환하고 나중에 분석할 수 있도록 \n데이터를 JSON 형식으로 저장하려면 파일에 일회성 단순 처리가 필요합니다. \n각 파일은 업로드 후 최대한 빨리 처리해야 합니다. 수요는 다양할 것입니다. 어떤 날에는 \n사용자가 많은 수의 파일을 업로드합니다. 다른 날에는 사용자가 몇 개의 파일을 \n업로드하거나 파일을 업로드하지 않습니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 에서 텍스트 파일을 읽도록 Amazon EMR 을 구성합니다. 처리 스크립트를 \n실행하여 데이터를 변환합니다. 결과 JSON 파일을 Amazon Aurora DB 클러스터에 \n저장합니다.",
      "Amazon SQS(Amazon Simple Queue Service) 대기열에 이벤트 알림을 보내도록 Amazon \nS3 를 구성합니다. Amazon EC2 인스턴스를 사용하여 대기열에서 읽고 데이터를 처리합니다. \n결과 JSON 파일을 Amazon DynamoDB 에 저장합니다.",
      "이벤트 알림을 Amazon Simple Queue Service(Amazon SQS) 대기열로 보내도록 \nAmazon S3 를 구성합니다. AWS Lambda 함수를 사용하여 대기열에서 읽고 데이터를 \n처리합니다. 결과 JSON 파일을 Amazon DynamoDB 에 저장합니다.",
      "새 파일이 업로드될 때 Amazon Kinesis Data Streams 에 이벤트를 보내도록 Amazon \nEventBridge(Amazon CloudWatch Events)를 구성합니다. AWS Lambda 함수를 사용하여 \n스트림에서 이벤트를 소비하고 데이터를 처리합니다. 결과 JSON 파일을 Amazon Aurora \nDB 클러스터에 저장합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/86676-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : EMR 은 빅데이터 플랫폼 서비스라 사용 분야가 좀 다르고, 파일을 업로드하지 않는",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 95,
    "question": "응용 프로그램을 사용하면 회사 본사의 사용자가 제품 데이터에 액세스할 수 있습니다. \n제품 데이터는 Amazon RDS MySQL DB 인스턴스에 저장됩니다. 운영 팀은 애플리케이션 \n성능 저하를 격리하고 쓰기 트래픽에서 읽기 트래픽을 분리하려고 합니다. 솔루션 설계자는 \n애플리케이션의 성능을 신속하게 최적화해야 합니다. \n솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "기존 데이터베이스를 다중 AZ 배포로 변경합니다. 기본 가용 영역에서 읽기 요청을 \n\n=== PAGE 105 ===\n제공합니다.",
      "기존 데이터베이스를 다중 AZ 배포로 변경합니다. 보조 가용 영역에서 읽기 요청을 \n제공합니다.",
      "데이터베이스에 대한 읽기 전용 복제본을 생성합니다. 컴퓨팅 및 스토리지 리소스의 \n절반을 원본 데이터베이스로 사용하여 읽기 전용 복제본을 구성합니다.",
      "데이터베이스에 대한 읽기 전용 복제본을 생성합니다. 원본 데이터베이스와 동일한 \n컴퓨팅 및 스토리지 리소스로 읽기 전용 복제본을 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85906-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \n복제가 효과적으로 작동하려면 각 읽기 전용 복제본에 원본 DB 인스턴스와 동일한 양의 \n컴퓨팅 및 스토리지 리소스가 있어야 합니다. 원본 DB 인스턴스를 확장하는 경우 읽기 \n전용 복제본도 확장합니다. \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.R\neadReplicas.html \n \n참조 \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.R\neadReplicas.html",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 96,
    "question": "Amazon EC2 관리자는 여러 사용자가 포함된 IAM 그룹과 연결된 다음 정책을 \n생성했습니다. \n\n=== PAGE 106 ===\n \n이 정책의 효과는 무엇입니까?",
    "options": [
      "사용자는 us-east-1\n을 제외한 모든 AWS 리전에서 EC2 인스턴스를 종료할 수 \n있습니다.",
      "사용자는 us-east-1 리전에서 IP 주소가 10.100.100.1 인 EC2 인스턴스를 종료할 수 \n있습니다.",
      "사용자는 사용자의 소스 IP\n가 10.100.100.254\n일 때 us-east-1 리전에서 EC2 \n인스턴스를 종료할 수 있습니다.",
      "사용자의 소스 IP 가 10.100.100.254 인 경우 사용자는 us-east-1 리전에서 EC2 \n인스턴스를 종료할 수 없습니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/86460-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAllow 문 해석 : 소스 IP 가 10.100.100.0/24 인 모든 리소스(*)에 대해 ec2 인스턴스 종료를 \n허용. \nDeny 문 해석 : ec2 리전이 us-east-1 이 아닌 모든 리소스(*)에 대해 ec2 의 모든 작업을",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 97,
    "question": "회사에는 Microsoft Windows 공유 파일 저장소가 필요한 온프레미스에서 실행되는 대규모 \nMicrosoft \nSharePoint \n배포가 \n있습니다. \n회사는 \n이 \n워크로드를 \nAWS \n클라우드로 \n마이그레이션하기를 원하며 다양한 스토리지 옵션을 고려하고 있습니다. 저장소 솔루션은 \n액세스 제어를 위해 고가용성 및 Active Directory 와 통합되어야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon EFS 스토리지를 구성하고 인증을 위해 Active Directory 도메인을 설정합니다.",
      "두 가용 영역의 AWS Storage Gateway 파일 게이트웨이에 SMB 파일 공유를 \n생성합니다.",
      "Amazon S3 버킷을 생성하고 볼륨으로 탑재하도록 Microsoft Windows Server\n를 \n구성합니다.",
      "AWS 에서 Windows 파일 서버용 Amazon FSx 파일 시스템을 생성하고 인증을 위해 \nActive Directory 도메인을 설정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/86626-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nMcrosoft Active Directory 용 AWS Directory Service : \nAWS Managed Microsoft AD 에 대한 패치 및 유지 관리. 기본적으로 각 디렉터리는 서로 \n다른 가용 영역에 설치된 두 개의 DC 로 구성됩니다. \n\ndocs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_key_concepts_\nmaintenance.html \nWindows 파일 서버용 FSx 를 AWS Managed Microsoft AD 와 통합하면 Windows 기반 \n애플리케이션 및 클라이언트(공유 파일 스토리지 활용)를 AWS 로 쉽게 이동할 수 있는 \n완전 관리형 기본 Microsoft Windows 기반 서버 메시지 블록(SMB) 프로토콜 파일 \n시스템을 제공합니다. \n\ndocs.aws.amazon.com/directoryservice/latest/admin-guide/usecase1.html",
    "glossary": {}
  },
  {
    "id": 98,
    "question": "이미지 처리 회사에는 사용자가 이미지를 업로드하는 데 사용하는 웹 응용 프로그램이 \n있습니다. 애플리케이션은 이미지를 Amazon S3 버킷에 업로드합니다. 회사는 객체 생성 \n이벤트를 Amazon Simple Queue Service(Amazon SQS) 표준 대기열에 게시하도록 S3 \n이벤트 알림을 설정했습니다. SQS 대기열은 이미지를 처리하고 결과를 이메일을 통해 \n사용자에게 보내는 AWS Lambda 함수의 이벤트 소스 역할을 합니다. \n사용자는 업로드된 모든 이미지에 대해 여러 이메일 메시지를 수신하고 있다고 보고합니다. \n솔루션 설계자는 SQS 메시지가 Lambda 함수를 두 번 이상 호출하여 여러 이메일 \n메시지를 생성한다고 판단합니다. \n솔루션 설계자는 이 문제를 최소한의 운영 오버헤드로 해결하기 위해 무엇을 해야 합니까?",
    "options": [
      "ReceiveMessage 대기 시간을 30 초로 늘려 SQS 대기열에서 긴 폴링을 설정합니다.",
      "SQS 표준 대기열을 SQS FIFO 대기열로 변경합니다. 메시지 중복 제거 ID 를 사용하여 \n중복 메시지를 버리십시오.",
      "SQS 대기열의 가시성 제한 시간을 함수 제한 시간과 일괄 처리 창 제한 시간의 \n합계보다 큰 값으로 늘립니다.",
      "처리 전에 메시지를 읽은 직후 SQS 대기열에서 각 메시지를 삭제하도록 Lambda \n함수를 수정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85185-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 긴 폴링 대기 시간의 최대값은 20 초입니다. \n\ndocs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide\n/working-with-messages.html \nB(X) : 솔루션 설계자는 SQS 메시지가 Lambda 함수를 두 번 이상 호출하여 여러 이메일 \n메시지를 생성하는 것이 문제의 원인이라고 보고 있음. 즉, SQS 쪽 문제이지 이미지 생성 \n및 업로드까지는 문제가 없다는 것. 중복 ID 제거는 생산자가 중복 메시지를 발생시키는 \n문제를 SQS FIFO Queue 에서 해결하는 서비스 유형이므로 지문의 상황에는 적합하지 않음. \n더군다나 모든 이미지 업로드 시마다 같은 문제가 계속 발생한다는 건 가끔 중복 메시지가 \n유입되는 정도가 아니라 SQS 대기열 쪽에서 처리가 이루어질 때 문제가 발생했을 \n가능성이 더 높음. \nFIFO 대기열은 중복 메시지가 절대 유입되지 않도록 설계되었습니다. 다만 일부 \n시나리오에서는 메시지 생산자가 중복 메시지를 유입할 수도 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 99,
    "question": "회사는 온프레미스 데이터 센터에서 호스팅되는 게임 애플리케이션을 위한 공유 스토리지 \n솔루션을 구현하고 있습니다. 회사는 Lustre 클라이언트를 사용하여 데이터에 액세스할 수 \n있는 기능이 필요합니다. 솔루션은 완전히 관리되어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS Storage Gateway 파일 게이트웨이를 생성합니다. 필요한 클라이언트 프로토콜을 \n사용하는 파일 공유를 만듭니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "Amazon EC2 Windows 인스턴스를 생성합니다. 인스턴스에 Windows 파일 공유 역할을 \n설치하고 구성합니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성하고 Lustre 를 지원하도록 \n구성합니다. 파일 시스템을 원본 서버에 연결합니다. 응용 프로그램 서버를 파일 시스템에 \n연결합니다.",
      "Lustre 파일 시스템용 Amazon FSx\n를 생성합니다. 파일 시스템을 원본 서버에 \n연결합니다. 응용 프로그램 서버를 파일 시스템에 연결합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/85811-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:・",
      "AWS Storage Gateway 파일 게이트웨이는 Lustre 클라이언트 액세스를 지원하지 \n않습니다.",
      "EC2 Windows 인스턴스에서 Windows 파일 공유를 생성하는 것은 Windows 기반 파일 \n공유에 적합하지만 필요한 Lustre 클라이언트 액세스를 제공하지 않습니다. Lustre 는 고성능 \n\n=== PAGE 110 ===\n컴퓨팅(HPC) 환경에서 주로 사용되는 고성능 병렬 파일 시스템입니다.",
      "EFS 는 기본적으로 Lustre 클라이언트 액세스를 지원하지 않습니다. EFS 는 관리형 파일 \n스토리지 서비스이지만 범용 파일 스토리지용으로 설계되었으며 Lustre 워크로드에 \n최적화되어 있지 않습니다.",
      "Amazon FSx for Lustre 는 Lustre 클라이언트를 포함하여 고성능 컴퓨팅 워크로드에 \n최적화된 완전관리형 파일 시스템입니다. Lustre 클라이언트를 사용하여 관리되고 확장 \n가능한 방식으로 데이터에 액세스할 수 있는 기능을 제공합니다. 이 옵션을 선택함으로써 \n회사는 Lustre 클라이언트 액세스 요구 사항을 충족하면서 Amazon FSx for Lustre 의 성능 \n및 관리 용이성으로부터 이점을 얻을 수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 100,
    "question": "회사의 \n컨테이너화된 \n애플리케이션은 \nAmazon \nEC2 \n인스턴스에서 \n실행됩니다. \n애플리케이션은 다른 비즈니스 애플리케이션과 통신하기 전에 보안 인증서를 다운로드해야 \n합니다. 회사는 거의 실시간으로 인증서를 암호화하고 해독할 수 있는 매우 안전한 \n솔루션을 원합니다. 또한 솔루션은 데이터가 암호화된 후 고가용성 스토리지에 데이터를 \n저장해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "암호화된 인증서에 대한 AWS Secrets Manager 암호를 생성합니다. 필요에 따라 \n인증서를 수동으로 업데이트합니다. 세분화된 IAM 액세스를 사용하여 데이터에 대한 \n액세스를 제어합니다.",
      "Python 암호화 라이브러리를 사용하여 암호화 작업을 수신하고 수행하는 AWS Lambda \n함수를 생성합니다. 함수를 Amazon S3 버킷에 저장합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. EC2 역할이 \n암호화 작업에 KMS 키를 사용하도록 허용합니다. 암호화된 데이터를 Amazon S3\n에 \n저장합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. EC2 역할이 \n암호화 작업에 KMS 키를 사용하도록 허용합니다. 암호화된 데이터를 Amazon Elastic Block \nStore(Amazon EBS) 볼륨에 저장합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85186-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n고가용성 저장소 = S3. B,C 둘 중 하나가 답. \nLambda 보다 KMS 가 암호화 및 해독에 적합. 정답은 C.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  }
];