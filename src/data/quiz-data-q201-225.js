export const quizData = [
  {
    "id": 201,
    "question": "회사에서 모바일 앱 사용자를 대상으로 하는 마케팅 커뮤니케이션 서비스를 개발하고 \n있습니다. 회사는 SMS(Short Message Service)를 통해 사용자에게 확인 메시지를 보내야 \n합니다. 사용자는 SMS 메시지에 회신할 수 있어야 합니다. 회사는 분석을 위해 응답을 1 년 \n동안 저장해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon Connect 통화 흐름을 생성하여 SMS 메시지를 보냅니다. AWS Lambda 를 \n사용하여 응답을 처리합니다.",
      "Amazon Pinpoint 여정을 구축하십시오. 분석 및 보관을 위해 이벤트를 Amazon Kinesis \n데이터 스트림으로 보내도록 Amazon Pinpoint 를 구성합니다.",
      "Amazon Simple Queue Service(Amazon SQS)를 사용하여 SMS 메시지를 배포합니다. \nAWS Lambda 를 사용하여 응답을 처리합니다.",
      "Amazon Simple Notification Service(Amazon SNS) FIFO 주제를 생성합니다. 분석 및 \n보관을 위해 Amazon Kinesis 데이터 스트림을 SNS 주제에 구독합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/89080-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/pinpoint/product-details/sms/ \n양방향 메시징: 고객으로부터 SMS 메시지를 받고 채팅과 같은 대화형 환경에서 회신합니다. \nAmazon Pinpoint 를 사용하면 고객이 특정 키워드가 포함된 메시지를 보낼 때 자동 응답을 \n생성할 수 있습니다. Amazon Lex 를 사용하여 대화형 봇을 만들 수도 있습니다. 대부분의 \n휴대폰 사용자는 들어오는 SMS 메시지를 받은 직후에 읽습니다. 고객에게 긴급하거나",
    "glossary": {}
  },
  {
    "id": 202,
    "question": "회사에서 데이터를 Amazon S3 버킷으로 이동할 계획입니다. 데이터는 S3 버킷에 저장될 \n때 암호화되어야 합니다. 또한 암호화 키는 매년 자동으로 순환되어야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "데이터를 S3 버킷으로 이동합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 \n암호화를 사용합니다. SSE-S3 암호화 키의 기본 제공 키 회전 동작을 사용합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. 자동 키 순환을 \n활성화합니다. 고객 관리형 KMS 키를 사용하도록 S3 버킷의 기본 암호화 동작을 \n설정합니다. 데이터를 S3 버킷으로 이동합니다.",
      "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. 고객 관리형 \nKMS 키를 사용하도록 S3 버킷의 기본 암호화 동작을 설정합니다. 데이터를 S3 버킷으로 \n이동합니다. 매년 KMS 키를 수동으로 교체합니다.",
      "데이터를 S3 버킷으로 이동하기 전에 고객 키 자료로 데이터를 암호화합니다. 키 자료 \n없이 AWS Key Management Service(AWS KMS) 키를 생성합니다. 고객 키 자료를 KMS \n키로 가져옵니다. 자동 키 순환을 활성화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/89081-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nS3 버킷에 저장될 때 암호화되므로 SSE(서버 측 암호화). 만약 S3 버킷으로 보내기 전에 \n암호화하면 CSE(클라이언트 측 암호화)임. \nAmazon S3 버킷에 저장되는 모든 객체를 암호화하는 기본 암호화 동작을 버킷에 설정할 \n수 있습니다. 객체는 Amazon S3 관리형 키를 사용한 서버 측 암호화(SSE-S3) 또는 AWS \nKey \nManagement \nService(AWS \nKMS) \n키를 \n사용한 \n서버 \n측 \n암호화를 \n사용하여 \n암호화됩니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/default-bucket-encrypti\non.html \nA(X) : 먼저 S3 버킷을 암호화한 게 아니라 데이터를 S3 버킷에 담아놓고 암호화를 했기 \n때문에 불필요한 배치 작업이 발생.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 203,
    "question": "금융 회사의 고객은 문자 메시지를 보내 재정 고문과의 약속을 요청합니다. Amazon EC2 \n인스턴스에서 실행되는 웹 애플리케이션은 약속 요청을 수락합니다. 텍스트 메시지는 웹 \n애플리케이션을 통해 Amazon Simple Queue Service(Amazon SQS) 대기열에 게시됩니다. \nEC2 인스턴스에서 실행되는 또 다른 애플리케이션은 회의 초대장과 회의 확인 이메일 \n메시지를 고객에게 보냅니다. 예약에 성공한 후 이 애플리케이션은 회의 정보를 Amazon \nDynamoDB 데이터베이스에 저장합니다. \n회사가 확장됨에 따라 고객은 회의 초대장이 도착하는 데 시간이 더 오래 걸린다고 \n보고합니다. \n솔루션 설계자는 이 문제를 해결하기 위해 무엇을 권장해야 합니까?",
    "options": [
      "DynamoDB 데이터베이스 앞에 DynamoDB Accelerator(DAX) 클러스터를 추가합니다.",
      "약속 요청을 수락하는 웹 애플리케이션 앞에 Amazon API Gateway API 를 추가합니다.",
      "Amazon \nCloudFront \n배포를 \n추가합니다. \n오리진을 \n약속 \n요청을 \n수락하는 \n웹 \n애플리케이션으로 설정합니다.",
      "회의 초대를 보내는 애플리케이션에 대한 Auto Scaling 그룹을 추가합니다. SQS \n대기열의 깊이에 따라 확장되도록 Auto Scaling 그룹을 구성합니다. \n\n=== PAGE 223 ==="
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/89082-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n회의 초대 전달 시간이 길어지는 문제를 해결하기 위해 솔루션 설계자는 회의 초대를 \n보내는 애플리케이션에 대해 Auto Scaling 그룹을 추가하고 SQS 대기열의 깊이에 따라 \n확장되도록 Auto Scaling 그룹을 구성하도록 권장할 수 있습니다. 이렇게 하면 약속 요청 \n수가 증가함에 따라 애플리케이션이 확장되어 회의 초대의 성능 및 배달 시간이 \n향상됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 204,
    "question": "한 온라인 소매 회사는 5 천만 명 이상의 활성 고객을 보유하고 있으며 매일 25,000 건 \n이상의 주문을 받습니다. 회사는 고객의 구매 데이터를 수집하고 이 데이터를 Amazon \nS3 에 저장합니다. 추가 고객 데이터는 Amazon RDS 에 저장됩니다. \n회사는 팀이 분석을 수행할 수 있도록 다양한 팀에서 모든 데이터를 사용할 수 있도록 \n하려고 합니다. 솔루션은 데이터에 대한 세분화된 권한을 관리하는 기능을 제공하고 운영 \n오버헤드를 최소화해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "구매 데이터를 마이그레이션하여 Amazon RDS 에 직접 씁니다. RDS 액세스 제어를 \n사용하여 액세스를 제한하십시오.",
      "Amazon RDS 에서 Amazon S3 로 데이터를 주기적으로 복사하도록 AWS Lambda 함수를 \n예약합니다. AWS Glue 크롤러를 생성합니다. Amazon Athena\n를 사용하여 데이터를 \n쿼리합니다. S3 정책을 사용하여 액세스를 제한하십시오.",
      "AWS Lake Formation 을 사용하여 데이터 레이크를 생성합니다. Amazon RDS 에 대한 \nAWS Glue JDBC 연결을 생성합니다. Lake Formation 에 S3 버킷을 등록합니다. Lake \nFormation 액세스 제어를 사용하여 액세스를 제한하십시오.",
      "Amazon Redshift 클러스터를 생성합니다. Amazon S3 및 Amazon RDS 에서 Amazon \nRedshift 로 데이터를 주기적으로 복사하도록 AWS Lambda 함수를 예약합니다. Amazon \nRedshift 액세스 제어를 사용하여 액세스를 제한하십시오."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/89083-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1:",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 205,
    "question": "회사는 온프레미스 데이터 센터에서 마케팅 웹 사이트를 호스팅합니다. 웹 사이트는 정적 \n문서로 \n구성되며 \n단일 \n서버에서 \n실행됩니다. \n관리자는 \n웹 \n사이트 \n콘텐츠를 \n자주 \n업데이트하지 않고 SFTP 클라이언트를 사용하여 새 문서를 업로드합니다. \n회사는 AWS 에서 웹 사이트를 호스팅하고 Amazon CloudFront 를 사용하기로 결정했습니다. \n회사의 솔루션 아키텍트가 CloudFront 배포를 생성합니다. 솔루션 설계자는 웹 사이트 \n호스팅이 CloudFront 오리진 역할을 할 수 있도록 가장 비용 효율적이고 탄력적인 \n아키텍처를 설계해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Lightsail 을 사용하여 가상 서버를 생성합니다. Lightsail 인스턴스에서 웹 서버를 \n구성합니다. SFTP 클라이언트를 사용하여 웹 사이트 콘텐츠를 업로드합니다.",
      "Amazon EC2 인스턴스에 대한 AWS Auto Scaling 그룹을 생성합니다. Application Load \nBalancer 를 사용하십시오. SFTP 클라이언트를 사용하여 웹 사이트 콘텐츠를 업로드합니다.",
      "프라이빗 Amazon S3 버킷을 생성합니다. S3 버킷 정책을 사용하여 CloudFront 원본 \n액세스 ID(OAI)에서 액세스를 허용합니다. AWS CLI\n를 사용하여 웹사이트 콘텐츠를 \n업로드합니다.",
      "퍼블릭 Amazon S3 버킷을 생성합니다. SFTP 용 AWS 전송을 구성합니다. 웹 사이트 \n호스팅을 위해 S3 버킷을 구성합니다. SFTP 클라이언트를 사용하여 웹 사이트 콘텐츠를 \n업로드합니다. \nAnswer: C \nhttps://www.examtopics.com/discussions/amazon/view/89085-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n\n=== PAGE 226 ===\n \n설명: \n프라이빗 S3 에서 웹사이트를 호스팅하면 정적 웹사이트 콘텐츠를 위한 비용 효율적이고 \n가용성이 높은 스토리지를 제공합니다. CloudFront OAI 의 액세스를 허용하도록 버킷 정책을 \n구성하면 CloudFront 를 통해서만 S3 에 안전하게 액세스할 수 있습니다. 이렇게 하면 웹 \n사이트 콘텐츠가 S3 를 비공개로 유지하면서 CloudFront 를 통해 제공됩니다. AWS CLI 를 \n사용하여 웹 사이트 콘텐츠를 업로드하면 콘텐츠를 쉽고 효율적으로 관리할 수 있습니다.",
      "Lightsail 가상 서버에서 웹 사이트를 호스팅하면 정적 콘텐츠 호스팅에 S3 를 직접 \n사용하는 것과 비교하여 추가 관리 오버헤드와 비용이 발생합니다.",
      "정적 웹 사이트 콘텐츠를 제공하기 위해 EC2 인스턴스 및 ALB 와 함께 AWS ASG 를 \n사용할 필요가 없습니다. 불필요한 복잡성과 비용이 추가됩니다.",
      "AWS Transfer for SFTP 를 사용하면 SFTP 업로드가 가능하지만 AWS CLI 를 사용하여 \n콘텐츠를 S3 에 직접 업로드하는 것과 비교하여 추가 비용과 복잡성이 발생합니다. 또한 \n공용 S3 에서 웹 사이트 콘텐츠를 호스팅하는 것은 보안 관점에서 바람직하지 않을 수 \n있습니다. \n \n참고: \nhttps://docs.aws.amazon.com/cli/latest/reference/transfer/describe-server.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 206,
    "question": "회사에서 Amazon 머신 이미지(AMI)를 관리하려고 합니다. 회사는 현재 AMI 가 생성된 \n동일한 AWS 리전에 AMI 를 복사합니다. 회사는 AWS API 호출을 캡처하고 회사 계정 \n내에서 Amazon EC2 CreateImage API 작업이 호출될 때마다 알림을 보내는 애플리케이션을 \n설계해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS CloudTrail 로그를 쿼리하고 CreateImage API 호출이 감지되면 알림을 보내는 AWS \nLambda 함수를 생성합니다.",
      "업데이트된 로그가 Amazon S3 로 전송될 때 발생하는 Amazon Simple Notification \nService(Amazon SNS) 알림으로 AWS CloudTrail 을 구성합니다. Amazon Athena 를 사용하여 \n새 테이블을 생성하고 API 호출이 감지되면 CreateImage 에서 쿼리합니다.",
      "CreateImage API 호출에 대한 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 \n생성합니다. CreateImage API 호출이 감지되면 알림을 보내도록 대상을 Amazon Simple \nNotification Service(Amazon SNS) 주제로 구성합니다.",
      "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 AWS CloudTrail 로그의 \n\n=== PAGE 227 ===\n대상으로 구성합니다. CreateImage API 호출이 감지되면 Amazon Simple Notification \nService(Amazon SNS) 주제에 알림을 보내는 AWS Lambda 함수를 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/89086-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\ndocs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/monitor-ami-events.\nhtml \nCreateImage API 호출에 대한 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 \n생성하고 CreateImage API 호출이 감지될 때 알림을 보내도록 대상을 Amazon Simple \nNotification Service(Amazon SNS) 주제로 구성하면 운영 오버헤드가 최소인 요구 사항을 \n충족합니다. . \nAmazon EventBridge\n는 자체 애플리케이션, 통합 SaaS(Software as a Service) \n애플리케이션 및 AWS 서비스의 데이터를 사용하여 애플리케이션을 쉽게 함께 연결할 수 \n있게 해주는 서버리스 이벤트 버스입니다. CreateImage API 호출에 대한 EventBridge \n규칙을 생성하여 회사는 계정 내에서 이 작업이 호출될 때마다 경고를 설정할 수 있습니다. \n경고는 SNS 주제로 보낼 수 있으며, 그런 다음 회사의 이메일 또는 기타 원하는 대상으로 \n알림을 보내도록 구성할 수 있습니다. \n \n참고 \n\ndocs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/monitor-ami-events.\nhtml",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 207,
    "question": "회사는 사용자 요청을 수집하고 요청 유형에 따라 처리를 위해 적절한 마이크로 서비스에 \n요청을 발송하는 데 사용되는 비동기 API 를 소유하고 있습니다. 이 회사는 Amazon API \nGateway 를 사용하여 API 프런트 엔드를 배포하고 Amazon DynamoDB 를 호출하여 사용자 \n요청을 처리 마이크로서비스로 보내기 전에 저장하는 AWS Lambda 함수를 사용하고 \n있습니다. \n회사는 예산이 허용하는 한 많은 DynamoDB 처리량을 프로비저닝했지만 회사는 여전히 \n가용성 문제를 겪고 있으며 사용자 요청이 손실되고 있습니다. \n솔루션 설계자는 기존 사용자에게 영향을 주지 않고 이 문제를 해결하기 위해 무엇을 해야 \n합니까?",
    "options": [
      "API 게이트웨이에서 서버 측 조절 제한을 사용하여 조절을 추가합니다. \n\n=== PAGE 228 ===",
      "DynamoDB Accelerator(DAX) 및 Lambda 를 사용하여 DynamoDB 에 대한 쓰기를 \n버퍼링합니다.",
      "사용자 요청이 있는 테이블에 대해 DynamoDB 에서 보조 인덱스를 생성합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열과 Lambda\n를 사용하여 \nDynamoDB 에 대한 쓰기를 버퍼링합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/89087-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n솔루션 설계자는 SQS 대기열과 Lambda 를 사용하여 처리 마이크로서비스에서 API 프런트 \n엔드를 분리하고 시스템의 전반적인 확장성과 가용성을 개선할 수 있습니다. SQS 대기열은 \n버퍼 역할을 하여 API 프런트 엔드가 마이크로서비스 처리에 높은 작업 부하가 발생하거나 \n일시적으로 사용할 수 없는 경우에도 사용자 요청을 계속 수락할 수 있도록 합니다. 그런 \n다음 Lambda 함수는 SQS 대기열에서 요청을 검색하고 DynamoDB 에 기록하여 모든 \n사용자 요청이 저장 및 처리되도록 할 수 있습니다. 이 접근 방식을 통해 회사는 API \n프런트 엔드와 독립적으로 처리 마이크로서비스를 확장할 수 있으므로 수요가 많은 \n기간에도 사용자가 API 를 계속 사용할 수 있습니다. \n \n즉 사용자 요청을 잃고 있음 = SQS 로 해결. 정답은 D.",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 208,
    "question": "회사는 Amazon EC2 인스턴스에서 Amazon S3 버킷으로 데이터를 이동해야 합니다. 회사는 \nAPI 호출 및 데이터가 공용 인터넷 경로를 통해 라우팅되지 않도록 해야 합니다. EC2 \n인스턴스만 S3 버킷에 데이터를 업로드할 수 있는 액세스 권한을 가질 수 있습니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 인스턴스가 있는 서브넷에서 Amazon S3 에 대한 인터페이스 VPC 엔드포인트를 \n생성합니다. EC2 인스턴스의 IAM 역할만 액세스할 수 있도록 리소스 정책을 S3 버킷에 \n연결합니다.",
      "EC2 인스턴스가 있는 가용 영역에서 Amazon S3 에 대한 게이트웨이 VPC 엔드포인트를 \n생성합니다. 엔드포인트에 적절한 보안 그룹을 연결합니다. EC2 인스턴스의 IAM 역할만 \n액세스할 수 있도록 리소스 정책을 S3 버킷에 연결합니다.",
      "EC2 인스턴스 내부에서 nslookup 도구를 실행하여 S3 버킷 서비스 API 엔드포인트의 \n프라이빗 IP 주소를 얻습니다. S3 버킷에 대한 액세스 권한을 EC2 인스턴스에 제공하기 \n위해 VPC 경로 테이블에 경로를 생성합니다. EC2 인스턴스의 IAM 역할만 액세스할 수 \n\n=== PAGE 229 ===\n있도록 리소스 정책을 S3 버킷에 연결합니다.",
      "AWS 에서 제공하고 공개적으로 사용 가능한 ip-ranges.json 파일을 사용하여 S3 버킷 \n서비스 API 엔드포인트의 프라이빗 IP 주소를 얻습니다. S3 버킷에 대한 액세스 권한을 \nEC2 인스턴스에 제공하기 위해 VPC 경로 테이블에 경로를 생성합니다. EC2 인스턴스의 \nIAM 역할만 액세스할 수 있도록 리소스 정책을 S3 버킷에 연결합니다. \nAnswer: A \nhttps://www.examtopics.com/discussions/amazon/view/89088-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nEC2 인스턴스-S3 버킷 간 통신이 인터넷에 노출되지 않음 = S3 Gateway Endpoint. \n \n설명2: \nEC2 인스턴스와 동일한 서브넷에 Amazon S3 용 인터페이스 VPC 종단점을 생성하면 EC2 \n인스턴스와 S3 간의 데이터 전송이 공용 인터넷을 거치지 않고 Amazon 네트워크 내에서 \n비공개로 발생할 수 있습니다. 이렇게 하면 EC2 인스턴스와 S3 간의 안전하고 직접적인 \n통신이 보장됩니다. EC2 인스턴스와 연결된 IAM 역할의 액세스만 허용하는 리소스 정책을 \nS3 버킷에 연결하면 권한이 부여된 인스턴스에 대한 액세스만 추가로 제한됩니다.",
      "Amazon S3 용 게이트웨이 VPC 종단점을 생성하려면 공용 인터넷을 통한 라우팅이 \n여전히 필요하므로 이 경우에는 바람직하지 않습니다.",
      "nslookup 을 실행하거나 VPC 경로 테이블에서 특정 경로를 생성하면 트래픽이 여전히 \n공용 인터넷 경로를 통과할 수 있으므로 원하는 수준의 보안 및 개인 정보 보호를 제공하지 \n않습니다.",
      "공개적으로 사용 가능한 ip-ranges.json 파일을 사용하여 S3 버킷의 서비스 API \n엔드포인트의 프라이빗 IP 주소를 얻는 것은 권장되는 접근 방식이 아닙니다. IP 주소는 \n시간이 지남에 따라 변경될 수 있고 동일한 수준의 보안을 제공하지 않기 때문입니다. VPC \n엔드포인트를 사용합니다. \n \n참고 \nhttps://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-\na-specific-iamrole/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 209,
    "question": "솔루션 아키텍트는 AWS 클라우드에 배포되는 새 애플리케이션의 아키텍처를 설계하고 \n\n=== PAGE 230 ===\n있습니다. 애플리케이션은 Amazon EC2 온디맨드 인스턴스에서 실행되며 여러 가용 \n영역에서 자동으로 확장됩니다. EC2 인스턴스는 하루 종일 자주 확장 및 축소됩니다. \nApplication Load Balancer(ALB)는 부하 분산을 처리합니다. 아키텍처는 분산 세션 데이터 \n관리를 지원해야 합니다. 회사는 필요한 경우 기꺼이 코드를 변경할 수 있습니다. \n아키텍처가 분산 세션 데이터 관리를 지원하도록 하기 위해 솔루션 설계자는 무엇을 해야 \n합니까?",
    "options": [
      "Amazon ElastiCache 를 사용하여 세션 데이터를 관리하고 저장합니다.",
      "ALB 의 세션 선호도(스티키 세션)를 사용하여 세션 데이터를 관리합니다.",
      "AWS Systems Manager 의 Session Manager 를 사용하여 세션을 관리합니다.",
      "AWS Security Token Service(AWS STS)에서 GetSessionToken API 작업을 사용하여 \n세션을 관리합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/89089-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n\naws.amazon.com/vi/caching/session-management/ \n확장성을 해결하고 개별 웹 서버에서 액세스할 수 있는 세션에 대한 공유 데이터 저장소를 \n제공하기 위해 웹 서버 자체에서 HTTP 세션을 추상화할 수 있습니다. \n이에 대한 일반적인 솔루션은 Redis 및 Memcached 와 같은 메모리 내 키/값 저장소를 \n활용하는 것입니다. 메모리 내 키/값 저장소용 ElastiCache 제품에는 복제를 지원할 수 \n있는 Redis 용 ElastiCache 와 복제를 지원하지 않는 Memcached 용 ElastiCache 가 \n포함됩니다. \n \n2: \nA(O) : 분산 세션 관리 : 확장성을 해결하고 개별 웹 서버에서 액세스할 수 있는 세션에 \n대한 공유 데이터 저장소를 제공하기 위해 웹 서버 자체에서 HTTP 세션을 추상화할 수 \n있습니다. 이에 대한 일반적인 솔루션은 Redis 및 Memcached 와 같은 메모리 내 키/값 \n저장소 를 활용하는 것 입니다. \n\naws.amazon.com/ko/caching/session-management/ \nRedis 용 Amazon ElastiCache 는 사용자 인증 토큰, 세션 상태 등 세션 정보를 관리하는 \n세션 스토어로 사용하기에 매우 적합합니다. Redis 용 Amazon ElastiCache 를 세션 키에 \n대한 적절한 TTL 과 함께 빠른 키-값 스토어로 사용하면 세션 정보를 관리할 수 있습니다. \n\naws.amazon.com/ko/elasticache/redis/?nc=sn&loc=2&dn=1#Session_Store \nB(X) : EC2 인스턴스는 하루 종일 자주 확장 및 축소된다고 했는데 Session Affinity(=Sticky \nSession)은 이에 맞지 않음. \"\"개별 노드에 세션 저장을 사용할 때의 단점은 장애가 발생할",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 210,
    "question": "빠르게 성장하고 있는 음식 배달 서비스를 제공하는 회사가 있습니다. 성장으로 인해 \n회사의 주문 처리 시스템은 피크 트래픽 시간 동안 확장 문제를 겪고 있습니다. 현재 \n아키텍처에는 다음이 포함됩니다. \n• 애플리케이션에서 주문을 수집하기 위해 Amazon EC2 Auto Scaling 그룹에서 실행되는 \nAmazon EC2 인스턴스 그룹입니다. \n• 주문을 이행하기 위해 Amazon EC2 Auto Scaling 그룹에서 실행되는 또 다른 EC2 \n인스턴스 그룹. \n주문 수집 프로세스는 빠르게 진행되지만 주문 이행 프로세스는 더 오래 걸릴 수 있습니다. \n스케일링 이벤트로 인해 데이터가 손실되어서는 안 됩니다. \n솔루션 설계자는 주문 수집 프로세스와 주문 이행 프로세스가 트래픽이 가장 많은 시간에 \n적절하게 확장될 수 있는지 확인해야 합니다. 솔루션은 회사의 AWS 리소스 활용을 \n최적화해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon CloudWatch 지표를 사용하여 Auto Scaling 그룹에 있는 각 인스턴스의 CPU 를 \n모니터링합니다. 최대 워크로드 값에 따라 각 Auto Scaling 그룹의 최소 용량을 구성합니다.",
      "Amazon CloudWatch 지표를 사용하여 Auto Scaling 그룹에 있는 각 인스턴스의 CPU 를 \n모니터링합니다. 요청 시 추가 Auto Scaling 그룹을 생성하는 Amazon Simple Notification \nService(Amazon SNS) 주제를 호출하도록 CloudWatch 경보를 구성합니다.",
      "두 개의 Amazon Simple Queue Service(Amazon SQS) 대기열을 프로비저닝합니다. \n하나는 주문 수집용이고 다른 하나는 주문 이행용입니다. 각 대기열을 폴링하도록 EC2 \n인스턴스를 구성합니다. 대기열이 보내는 알림을 기반으로 Auto Scaling 그룹을 조정합니다. \n\n=== PAGE 232 ===",
      "2 개의 Amazon Simple Queue Service(Amazon SQS) 대기열을 프로비저닝합니다. 하나는 \n주문 수집용이고 다른 하나는 주문 이행용입니다. 각 대기열을 폴링하도록 EC2 인스턴스를 \n구성합니다. 인스턴스 계산당 백로그를 기반으로 지표를 만듭니다. 이 지표를 기반으로 \nAuto Scaling 그룹을 조정합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/94992-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nAuto Scaling 그룹의 인스턴스 수는 메시지를 처리하는 데 걸리는 시간과 허용 가능한 지연 \n시간(대기열 지연)에 따라 결정될 수 있습니다. 해결책은 유지 관리할 인스턴스당 허용 \n가능한 백로그인 대상 값과 함께 인스턴스 메트릭당 백로그를 사용하는 것입니다. \n \n설명2:",
      "이 접근 방식은 CPU 사용률에만 초점을 맞추므로 주문 수집 및 이행 프로세스의 확장 \n요구 사항을 정확하게 반영하지 못할 수 있습니다. 분리 및 신뢰할 수 있는 메시지 처리에 \n대한 요구 사항은 다루지 않습니다.",
      "이 접근 방식은 경보를 통합하여 추가 Auto Scaling 그룹을 트리거하지만 SQS 대기열을 \n사용하여 제공되는 분리 및 안정적인 메시지 처리가 부족합니다. 비효율적인 확장 및 \n잠재적인 데이터 손실이 발생할 수 있습니다.",
      "SQS 대기열을 사용하는 것이 올바른 방향으로 나아가는 단계이지만 대기열 알림만을 \n기준으로 확장하는 것은 최적의 리소스 활용을 제공하지 못할 수 있습니다. 인스턴스당 \n백로그를 고려하지 않으며 조정에 대한 세밀한 제어를 허용하지 않습니다. \n \n전반적으로 주문 수집 및 이행을 위해 SQS 대기열을 사용하고, 인스턴스 계산당 백로그를 \n기반으로 메트릭을 생성하고, 이에 따라 Auto Scaling 그룹을 확장하는 옵션 D 는 리소스 \n활용을 최적화하고 보장하면서 확장 문제를 해결하는 가장 적합한 솔루션입니다. 신뢰할 수 \n있는 메시지 처리"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 211,
    "question": "한 회사에서 여러 프로덕션 애플리케이션을 호스팅합니다. 애플리케이션 중 하나는 여러 \nAWS 리전에서 Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification \nService(Amazon SNS) 및 Amazon Simple Queue Service(Amazon SQS)의 리소스로 \n\n=== PAGE 233 ===\n구성됩니다. 모든 회사 리소스에는 \"응용 프로그램\"이라는 태그 이름과 각 응용 프로그램에 \n해당하는 값이 태그로 지정됩니다. 솔루션 설계자는 태그가 지정된 모든 구성 요소를 \n식별하기 위한 가장 빠른 솔루션을 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS CloudTrail 을 사용하여 애플리케이션 태그가 있는 리소스 목록을 생성합니다.",
      "AWS CLI 를 사용하여 모든 리전에서 각 서비스를 쿼리하여 태그가 지정된 구성 요소를 \n보고합니다.",
      "Amazon CloudWatch Logs Insights 에서 쿼리를 실행하여 애플리케이션 태그가 있는 구성 \n요소에 대해 보고합니다.",
      "AWS Resource Groups Tag Editor 로 쿼리를 실행하여 애플리케이션 태그를 사용하여 \n전역적으로 리소스에 대해 보고합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/95145-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nCloudTrail 은 주로 API 활동 캡처 및 로깅에 중점을 두기 때문에 A 는 가장 빠른 솔루션이 \n아닙니다. 리소스 변경에 대한 정보를 제공할 수 있지만 여러 서비스 및 리전에서 태그가 \n지정된 모든 구성 요소를 식별하는 포괄적이고 빠른 방법을 제공하지 않을 수 있습니다. \n \nB 에는 AWS CLI 를 사용하여 각 서비스를 수동으로 쿼리하는 작업이 포함되며, 이는 특히 \n여러 서비스 및 리전을 처리할 때 시간이 많이 걸리고 번거로울 수 있습니다. 태그가 \n지정된 구성 요소를 빠르게 식별하기 위한 가장 효율적인 솔루션은 아닙니다. \n \nC\n는 태그가 지정된 구성 요소를 직접 식별하기보다는 로그 분석에 중점을 둡니다. \nCloudWatch Logs Insights 는 로그에서 정보를 추출하는 데 도움이 될 수 있지만 여러 \n서비스 및 리전에서 태그가 지정된 모든 구성 요소의 통합 목록을 수집하는 간단하고 빠른 \n방법을 제공하지 않을 수 있습니다. \n \nD 는 태그를 기반으로 리소스를 관리하고 구성하도록 특별히 설계된 Resource Groups Tag \nEditor 를 활용하므로 가장 빠른 솔루션입니다. 여러 서비스 및 리전에서 태그가 지정된 \n구성 요소에 대한 보고서를 생성하는 중앙 집중식의 효율적인 접근 방식을 제공합니다. \n \n참고: \n\ndocs.aws.amazon.com/tag-editor/latest/userguide/tagging.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스"
    }
  },
  {
    "id": 212,
    "question": "회사는 다른 팀이 액세스할 수 있도록 데이터베이스를 하루에 한 번 Amazon S3\n로 \n내보내야 합니다. 내보낸 개체 크기는 2GB 에서 5GB 사이입니다. 데이터에 대한 S3 \n액세스 패턴은 가변적이며 빠르게 변경됩니다. 데이터는 즉시 사용할 수 있어야 하며 최대 \n3 개월 동안 액세스할 수 있어야 합니다. 회사는 검색 시간을 늘리지 않는 가장 비용 \n효율적인 솔루션이 필요합니다. \n회사는 이러한 요구 사항을 충족하기 위해 어떤 S3 스토리지 클래스를 사용해야 합니까?",
    "options": [
      "S3 지능형 계층화(S3 Intelligent-Tiering)",
      "S3 Glacier 즉시 검색(S3 Glacier Instant Retrieval)",
      "S3 표준(S3 Standard)",
      "S3 Standard-Infrequent Access(S3 Standard-IA)"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95300-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n옵션 A\n는 액세스 패턴이 변화하는 개체를 위해 설계되었지만 특히 액세스 패턴이 \n가변적이고 빠르게 변경되는 경우 데이터의 장기 저장을 위한 가장 비용 효율적인 솔루션이 \n아닐 수 있습니다. \n \n옵션 B 는 장기 아카이브 저장에 최적화되어 있으며 회사에서 요구하는 즉각적인 액세스를 \n제공하지 않을 수 있습니다. Glacier 스토리지에서 데이터를 검색하면 일반적으로 다른 \n스토리지 클래스에 비해 검색 시간이 더 오래 걸립니다. \n \n옵션 C 는 즉각적인 가용성과 데이터에 대한 빠른 액세스를 위한 적절한 선택입니다. 높은 \n내구성, 가용성 및 낮은 대기 시간 액세스를 제공하므로 회사의 요구 사항에 적합합니다. \n그러나 장기 보관을 위한 가장 비용 효율적인 옵션은 아닙니다. \n \n옵션 D 는 특히 자주 액세스하지 않는 데이터의 경우 S3 Standard 에 비해 비용 효율적인 \n스토리지 클래스입니다. 그러나 데이터에 대한 액세스 패턴이 가변적이고 빠르게 변경되기 \n때문에 S3 Standard-IA 는 빈번한 액세스에 대한 추가 검색 비용이 발생하므로 가장 비용 \n효율적인 솔루션이 아닐 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 213,
    "question": "=== PAGE 235 ===\n회사에서 새로운 모바일 앱을 개발하고 있습니다. 회사는 교차 사이트 스크립팅 또는 SQL \n주입과 같은 일반적인 애플리케이션 수준 공격으로부터 ALB(Application Load Balancer)를 \n보호하기 위해 적절한 트래픽 필터링을 구현해야 합니다. 이 회사는 최소한의 인프라와 \n운영 인력을 보유하고 있습니다. 회사는 AWS 환경의 서버를 관리, 업데이트 및 보호하는 \n책임을 줄여야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "AWS WAF 규칙을 구성하고 이를 ALB 와 연결합니다.",
      "퍼블릭 호스팅이 활성화된 Amazon S3 를 사용하여 애플리케이션을 배포합니다.",
      "AWS Shield Advanced 를 배포하고 ALB 를 보호된 리소스로 추가합니다.",
      "타사 방화벽을 실행하는 Amazon EC2 인스턴스로 트래픽을 보낸 다음 트래픽을 현재 \nALB 로 전달하는 새 ALB 를 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95301-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n솔루션 설계자는 AWS WAF 규칙을 구성하고 이를 ALB 와 연결하는 옵션 A 를 권장해야 \n합니다. 이를 통해 회사는 교차 사이트 스크립팅 또는 SQL 주입과 같은 일반적인 \n애플리케이션 수준 공격으로부터 ALB 를 보호하는 데 필요한 애플리케이션 계층에서 트래픽 \n필터링을 적용할 수 있습니다. AWS WAF 는 애플리케이션 가용성에 영향을 미치거나 보안을 \n손상시키거나 과도한 리소스를 소비할 수 있는 일반적인 웹 익스플로잇으로부터 웹 \n애플리케이션을 쉽게 보호할 수 있게 해주는 관리형 서비스입니다. 회사는 애플리케이션의 \n보안을 보장하기 위해 규칙을 쉽게 관리하고 업데이트할 수 있습니다. \n \n2: \nAWS \nWAF \n규칙을 \n구성하고 \n이를 \nALB\n와 \n연결함으로써 \n회사는 \n악성 \n트래픽이 \n애플리케이션에 도달하기 전에 필터링하고 차단할 수 있습니다. AWS WAF 는 사전 구성된 \n규칙 세트를 제공하고 사용자 지정 규칙 생성을 허용하여 XSS 및 SQL 주입과 같은 \n일반적인 취약성으로부터 보호합니다. \n \n옵션 B 는 애플리케이션 수준 공격으로부터 보호하는 데 필요한 보안 및 트래픽 필터링 \n기능을 제공하지 않습니다. 보안 조치를 구현하는 것보다 정적 콘텐츠를 호스팅하는 데 더 \n적합합니다. \n옵션 C 는 XSS 또는 SQL 주입과 같은 애플리케이션 수준 공격이 아닌 DDoS 보호에 \n중점을 둡니다. AWS Shield Advanced 는 시나리오에 언급된 특정 요구 사항을 다루지 \n않습니다.",
    "glossary": {
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 214,
    "question": "회사의 보고 시스템은 매일 수백 개의 .csv 파일을 Amazon S3 버킷에 전달합니다. 회사는 \n이러한 파일을 Apache Parquet 형식으로 변환하고 변환된 데이터 버킷에 파일을 저장해야 \n합니다. \n최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Apache Spark 가 설치된 Amazon EMR 클러스터를 생성합니다. 데이터를 변환하는 Spark \n애플리케이션을 작성합니다. EMRFS(EMR 파일 시스템)를 사용하여 변환된 데이터 버킷에 \n파일을 씁니다.",
      "AWS Glue 크롤러를 생성하여 데이터를 검색합니다. AWS Glue 추출, 변환 및 로드(ETL) \n작업을 생성하여 데이터를 변환합니다. 출력 단계에서 변환된 데이터 버킷을 지정합니다.",
      "AWS Batch 를 사용하여 Bash 구문으로 작업 정의를 생성하여 데이터를 변환하고 \n데이터를 변환된 데이터 버킷으로 출력합니다. 작업 정의를 사용하여 작업을 제출합니다. \n어레이 작업을 작업 유형으로 지정합니다.",
      "데이터를 변환하고 변환된 데이터 버킷으로 데이터를 출력하는 AWS Lambda 함수를 \n생성합니다. S3 버킷에 대한 이벤트 알림을 구성합니다. 이벤트 알림의 대상으로 Lambda \n함수를 지정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/95154-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAWS Glue 는 분석을 위해 데이터를 준비하고 변환하는 프로세스를 간소화하는 완전 관리형 \nETL 서비스입니다. AWS Glue 를 사용하려면 다른 옵션에 비해 최소한의 개발 노력이 \n필요합니다. \n \n옵션 A 는 데이터 변환을 위한 Spark 애플리케이션 작성과 관련되므로 더 많은 개발 노력이 \n필요합니다. 또한 EMR 클러스터로 추가 인프라 관리를 소개합니다. \n \n옵션 C 는 데이터 변환을 위한 사용자 지정 Bash 스크립트를 작성하고 관리해야 합니다. \n수동 작업이 더 많이 필요하며 데이터 변환을 위한 AWS Glue 의 내장 기능을 제공하지 \n않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 215,
    "question": "회사는 데이터 센터의 NAS(Network Attached Storage)에 700TB 의 백업 데이터를 저장하고 \n있습니다. 이 백업 데이터는 드문 규제 요청을 위해 액세스할 수 있어야 하며 7 년 동안 \n보관해야 합니다. 회사는 이 백업 데이터를 데이터 센터에서 AWS 로 마이그레이션하기로 \n결정했습니다. 마이그레이션은 1 개월 이내에 완료되어야 합니다. 회사는 데이터 전송에 \n사용할 수 있는 공용 인터넷 연결에 500Mbps 의 전용 대역폭을 가지고 있습니다. \n최저 비용으로 데이터를 마이그레이션하고 저장하려면 솔루션 설계자가 무엇을 해야 \n합니까?",
    "options": [
      "데이터를 전송할 AWS Snowball 디바이스를 주문합니다. 수명 주기 정책을 사용하여 \n파일을 Amazon S3 Glacier Deep Archive 로 전환합니다.",
      "데이터 센터와 Amazon VPC 간에 VPN 연결을 배포합니다. AWS CLI 를 사용하여 \n온프레미스에서 Amazon S3 Glacier 로 데이터를 복사합니다.",
      "500Mbps AWS Direct Connect 연결을 프로비저닝하고 데이터를 Amazon S3\n로 \n전송합니다. 수명 주기 정책을 사용하여 파일을 Amazon S3 Glacier Deep Archive 로 \n전환합니다.",
      "AWS DataSync 를 사용하여 데이터를 전송하고 온프레미스에 DataSync 에이전트를 \n배포합니다. DataSync 작업을 사용하여 온프레미스 NAS 스토리지에서 Amazon S3 \nGlacier 로 파일을 복사합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/94983-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \n700TB 나 되는 대용량을 Snowball Edge Device 를 사용하지 않고 네트워크 상으로 옮기는",
    "glossary": {}
  },
  {
    "id": 216,
    "question": "회사에는 Amazon S3 버킷에 수백만 개의 객체가 있는 서버리스 웹 사이트가 있습니다. \n회사는 S3 버킷을 Amazon CloudFront 배포의 오리진으로 사용합니다. 회사는 개체가 \n로드되기 전에 S3 버킷에 암호화를 설정하지 않았습니다. 솔루션 설계자는 모든 기존 \n객체와 향후 S3 버킷에 추가되는 모든 객체에 대해 암호화를 활성화해야 합니다. \n최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "새 S3 버킷을 생성합니다. 새 S3 버킷에 대한 기본 암호화 설정을 켭니다. 모든 기존 \n개체를 임시 로컬 저장소에 다운로드합니다. 새 S3 버킷에 객체를 업로드합니다.",
      "S3 버킷의 기본 암호화 설정을 켭니다. S3 Inventory 기능을 사용하여 암호화되지 않은 \n객체를 나열하는 .csv 파일을 생성합니다. 복사 명령을 사용하여 해당 객체를 암호화하는 \nS3 배치 작업 작업을 실행합니다.",
      "AWS Key Management Service(AWS KMS)를 사용하여 새 암호화 키를 생성합니다. AWS \nKMS 관리형 암호화 키(SSE-KMS)로 서버 측 암호화를 사용하도록 S3 버킷의 설정을 \n변경합니다. S3 버킷에 대한 버전 관리를 켭니다.",
      "AWS Management Console 에서 Amazon S3 로 이동합니다. S3 버킷의 객체를 찾습니다. \n암호화 필드를 기준으로 정렬합니다. 암호화되지 않은 각 개체를 선택합니다. 수정 버튼을 \n사용하여 S3 버킷의 모든 암호화되지 않은 객체에 기본 암호화 설정을 적용합니다. \nAnswer: B \nhttps://www.examtopics.com/discussions/amazon/view/95040-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명: \nS3 에서 기본 암호화 설정을 활성화하면 새로 추가된 모든 객체가 자동으로 암호화됩니다. \n기존 객체를 암호화하기 위해 S3 Inventory 기능을 사용하여 암호화되지 않은 객체 목록을 \n생성할 수 있습니다. 그런 다음 암호화를 적용하는 동안 해당 객체를 복사하기 위해 S3 \n배치 작업 작업을 실행할 수 있습니다.",
      "이 솔루션에는 새 S3 를 생성하고 모든 기존 개체를 수동으로 다운로드 및 업로드하는 \n작업이 포함됩니다. 수백만 개의 개체를 전송하는 데 상당한 노력과 시간이 필요하므로 \n효율성이 떨어지는 솔루션입니다.",
      "AWS KMS 로 SSE 를 활성화하는 것은 S3 에서 객체를 암호화하는 유효한 접근 \n방식이지만 기존 객체를 암호화해야 하는 요구 사항을 해결하지는 않습니다. 버킷에 추가된 \n\n=== PAGE 239 ===\n새 객체에만 암호화를 적용합니다.",
      "기본 암호화 설정을 적용하기 위해 S3 의 각 개체를 수동으로 수정하는 것은 노동 \n집약적이고 오류가 발생하기 쉬운 프로세스입니다. 암호화되지 않은 각 개체를 개별적으로 \n선택하고 수정해야 하므로 많은 수의 개체에 비실용적입니다. \n \n참고: \nhttps://spin.atomicobject.com/2020/09/15/aws-s3-encrypt-existing-objects/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 217,
    "question": "회사는 \nApplication \nLoad \nBalancer \n뒤의 \nAmazon \nEC2 \n인스턴스에서 \n글로벌 \n웹 \n애플리케이션을 실행합니다. 애플리케이션은 Amazon Aurora\n에 데이터를 저장합니다. \n회사는 재해 복구 솔루션을 만들어야 하며 최대 30 분의 다운타임과 잠재적인 데이터 \n손실을 허용할 수 있습니다. 솔루션은 기본 인프라가 정상일 때 부하를 처리할 필요가 \n없습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "필요한 인프라 요소가 있는 애플리케이션을 배치합니다. Amazon Route 53 을 사용하여 \n활성-수동 장애 조치를 구성합니다. 두 번째 AWS 리전에서 Aurora 복제본을 생성합니다.",
      "두 번째 AWS 리전에서 애플리케이션의 축소된 배포를 호스팅합니다. Amazon Route \n53 을 사용하여 활성-활성 장애 조치를 구성합니다. 두 번째 리전에서 Aurora 복제본을 \n생성합니다.",
      "두 번째 AWS 리전에서 기본 인프라를 복제합니다. Amazon Route 53 을 사용하여 \n활성-활성 장애 조치를 구성합니다. 최신 스냅샷에서 복원된 Aurora 데이터베이스를 \n생성합니다.",
      "AWS Backup 으로 데이터를 백업합니다. 백업을 사용하여 두 번째 AWS 리전에 필요한 \n인프라를 생성합니다. Amazon Route 53 을 사용하여 활성-수동 장애 조치를 구성합니다. 두 \n번째 리전에서 Aurora 두 번째 기본 인스턴스를 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95015-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n솔루션은 기본 인프라가 정상일 때 부하를 처리할 필요가 없다고 했으므로 Active/Passive \nFailover 를 사용하면 됨. 따라서 A,D 둘 중 하나가 답. \nA(O) : Q: Amazon Aurora 는 교차 리전 복제를 지원하나요? 예. 물리적 또는 논리적 복제를 \n사용하여 교차 리전 Aurora 복제본을 설정할 수 있습니다. Amazon RDS 콘솔에서 교차",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 218,
    "question": "회사에는 탄력적 IP 주소가 있는 퍼블릭 서브넷의 Amazon EC2 인스턴스에서 실행되는 웹 \n서버가 있습니다. 기본 보안 그룹은 EC2 인스턴스에 할당됩니다. 모든 트래픽을 \n차단하도록 기본 네트워크 ACL 이 수정되었습니다. 솔루션 설계자는 포트 443 을 통해 \n어디에서나 웹 서버에 액세스할 수 있도록 해야 합니다. \n이 작업을 수행할 단계 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "소스 0.0.0.0/0 에서 TCP 포트 443 을 허용하는 규칙으로 보안 그룹을 생성합니다.",
      "대상 0.0.0.0/0 에 대한 TCP 포트 443 을 허용하는 규칙으로 보안 그룹을 생성합니다.",
      "소스 0.0.0.0/0 에서 TCP 포트 443 을 허용하도록 네트워크 ACL 을 업데이트합니다.",
      "소스 0.0.0.0/0\n에서 대상 0.0.0.0/0\n으로 인바운드/아웃바운드 TCP 포트 443\n을 \n허용하도록 네트워크 ACL 을 업데이트합니다.",
      "소스 0.0.0.0/0\n에서 인바운드 TCP 포트 443\n을 허용하고 대상 0.0.0.0/0\n으로 \n아웃바운드 TCP 포트 32768-65535 를 허용하도록 네트워크 ACL 을 업데이트합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95056-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n포트 443 의 모든 위치에서 웹 서버에 액세스할 수 있도록 하는 작업을 수행하는 단계 \n조합은 소스 0.0.0.0/0(A)에서 TCP 포트 443 을 허용하고 네트워크 ACL 을 업데이트하는 \n규칙으로 보안 그룹을 생성하는 것입니다. 소스 0.0.0.0/0(C)에서 인바운드 TCP 포트 \n443 을 허용합니다. \n이렇게 하면 포트 443 에 대한 트래픽이 보안 그룹 수준과 네트워크 ACL 수준 모두에서",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 219,
    "question": "회사의 애플리케이션에 성능 문제가 있습니다. 애플리케이션은 상태 저장이며 Amazon EC2 \n인스턴스에서 인 메모리 작업을 완료해야 합니다. 이 회사는 AWS CloudFormation 을 \n사용하여 인프라를 배포하고 M5 EC2 인스턴스 제품군을 사용했습니다. 트래픽이 증가함에 \n따라 \n애플리케이션 \n성능이 \n저하되었습니다. \n사용자는 \n사용자가 \n애플리케이션에 \n액세스하려고 할 때 지연을 보고합니다. \n운영상 가장 효율적인 방식으로 이러한 문제를 해결하는 솔루션은 무엇입니까?",
    "options": [
      "Auto Scaling 그룹에서 실행되는 T3 EC2 인스턴스로 EC2 인스턴스를 교체합니다. AWS \nManagement Console 을 사용하여 변경합니다.",
      "Auto Scaling 그룹에서 EC2 인스턴스를 실행하도록 CloudFormation 템플릿을 \n수정합니다. 증가가 필요한 경우 Auto Scaling 그룹의 원하는 용량과 최대 용량을 수동으로 \n늘립니다.",
      "CloudFormation 템플릿을 수정합니다. EC2 인스턴스를 R5 EC2 인스턴스로 교체합니다. \nAmazon CloudWatch 내장 EC2 메모리 메트릭을 사용하여 향후 용량 계획을 위해 \n애플리케이션 성능을 추적합니다.",
      "CloudFormation 템플릿을 수정합니다. EC2 인스턴스를 R5 EC2 인스턴스로 교체합니다. \nEC2 인스턴스에 Amazon CloudWatch 에이전트를 배포하여 향후 용량 계획을 위한 사용자 \n지정 애플리케이션 지연 시간 메트릭을 생성합니다. \nAnswer: D \nhttps://www.examtopics.com/discussions/amazon/view/95162-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명: \nM5 \n인스턴스를 \n메모리 \n집약적인 \n워크로드에 \n최적화된 \nR5 \n인스턴스로 \n교체하면 \n애플리케이션에서 메모리 용량과 성능을 높일 수 있습니다. \n또한 EC2 인스턴스에 CloudWatch 에이전트를 배포하면 애플리케이션 성능에 대한 중요한 \n통찰력을 제공할 수 있는 사용자 지정 애플리케이션 대기 시간 메트릭을 생성할 수 \n있습니다. \n이 솔루션은 적절한 인스턴스 유형을 활용하고 더 나은 모니터링 및 향후 용량 계획을 위해 \n사용자 지정 애플리케이션 메트릭을 수집하여 성능 문제를 효율적으로 해결합니다.",
      "T3 인스턴스로 교체하면 인 메모리 작업에 충분한 메모리 용량을 제공하지 못할 수 \n있습니다. \n\n=== PAGE 242 ===",
      "ASG 의 용량을 수동으로 늘리면 성능 문제가 직접적으로 해결되지 않습니다.",
      "내장된 EC2 메모리 메트릭에만 의존하면 메모리 내 작업을 최적화하는 데 충분한 \n세분성을 제공하지 못할 수 있습니다. \n \n가장 효율적인 솔루션은 CloudFormation 템플릿을 수정하고, R5 인스턴스로 교체하고, \n사용자 지정 메트릭을 위해 CloudWatch 에이전트를 배포하는 것입니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 220,
    "question": "솔루션 설계자는 Amazon API Gateway 를 사용하여 사용자의 요청을 수신할 새 API 를 \n설계하고 있습니다. 요청량은 매우 다양합니다. 단일 요청을 받지 않고 몇 시간이 지날 수 \n있습니다. 데이터 처리는 비동기식으로 이루어지지만 요청이 이루어진 후 몇 초 이내에 \n완료되어야 합니다. \n최저 비용으로 요구 사항을 제공하기 위해 솔루션 설계자가 API 를 호출하도록 해야 하는 \n컴퓨팅 서비스는 무엇입니까?",
    "options": [
      "AWS Glue 작업",
      "AWS Lambda 함수",
      "Amazon Elastic Kubernetes Service(Amazon EKS)에서 호스팅되는 컨테이너화된 서비스",
      "Amazon EC2 와 함께 Amazon ECS 에서 호스팅되는 컨테이너화된 서비스 \nAnswer: B  \nhttps://www.examtopics.com/discussions/amazon/view/95306-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nAPI Gateway + Lambda 는 서버리스 아키텍처를 사용하는 최신 애플리케이션을 위한 완벽한 \n솔루션입니다. \n \n설명2: \nLambda 는 요청을 비동기식으로 처리하기 위해 API Gateway 에서 트리거할 수 있는 \n서버리스 컴퓨팅 서비스입니다. 들어오는 요청 볼륨에 따라 자동으로 확장되며 요청을 \n처리하는 데 사용된 실제 컴퓨팅 시간에 대해서만 요금을 부과하여 비용 최적화를 \n허용합니다.",
      "Glue 는 완전히 관리되는 ETL 서비스입니다. API 요청을 제공하는 대신 데이터 처리 및 \n변환 작업을 위해 설계되었습니다. 가변적인 요청량을 처리하고 몇 초 내에 응답을 \n전달하는 데 적합하지 않을 수 있습니다. \n\n=== PAGE 243 ===",
      "EKS\n는 확장성과 유연성을 제공하지만 가변적인 API 요청 볼륨을 처리하기 위해 \n인프라를 관리하고 확장하는 데 추가적인 복잡성과 오버헤드가 발생할 수 있습니다.",
      "이전 옵션과 마찬가지로 EC2 와 함께 ECS 를 사용하려면 인프라 관리 및 확장을 위한 \n추가 노력이 필요하며, 이는 간헐적이고 가변적인 API 요청 볼륨을 처리하는 데 필요하지 \n않을 수 있습니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 221,
    "question": "회사는 Amazon Linux EC2 인스턴스 그룹에서 애플리케이션을 실행합니다. 규정 준수를 \n위해 회사는 모든 애플리케이션 로그 파일을 7 년 동안 보관해야 합니다. 로그 파일은 모든 \n파일에 동시에 액세스할 수 있어야 하는 보고 도구로 분석됩니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": [
      "Amazon Elastic Block Store(Amazon EBS)",
      "Amazon Elastic File System(Amazon EFS)",
      "Amazon EC2 인스턴스 스토어",
      "Amazon S3 \nAnswer: D  \nhttps://www.examtopics.com/discussions/amazon/view/95307-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "EBS 는 EC2 인스턴스와 함께 사용할 블록 수준 스토리지 볼륨을 제공합니다. 내구성과 \n지속성을 제공하지만 로그 파일의 장기 보존을 위한 가장 비용 효율적인 솔루션은 아닙니다. \n또한 이 시나리오의 요구 사항인 파일에 대한 동시 액세스를 제공하지 않습니다.",
      "EFS 는 여러 EC2 인스턴스에 동시에 탑재할 수 있는 확장 가능한 파일 스토리지 \n서비스입니다. 파일에 대한 동시 액세스를 제공하지만 S3 에 비해 가격이 높기 때문에 장기 \n보존을 위한 가장 비용 효율적인 옵션이 아닐 수 있습니다.",
      "인스턴스 스토어는 EC2 인스턴스에 물리적으로 연결된 임시 스토리지 옵션입니다. 규정 \n준수 목적에 필요한 내구성 및 장기 보존을 제공하지 않습니다. 또한 인스턴스 스토어는 \n연결된 특정 EC2 인스턴스 외부에서 액세스할 수 없으므로 보고 도구를 통한 동시 \n액세스가 불가능합니다. \n \n따라서 장기보존, 동시접속, 가성비 등의 요구사항을 고려할 때 S3가 가장 적합하고 가성비 \n좋은 스토리지 솔루션입니다. \n \n참고: \n\n=== PAGE 244 ===\nhttps://docs.aws.amazon.com/efs/latest/ug/transfer-data-to-efs.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 222,
    "question": "회사는 회사의 AWS 계정에서 작업을 수행하기 위해 외부 공급업체를 고용했습니다. 벤더는 \n벤더가 소유한 AWS 계정에서 호스팅되는 자동화 도구를 사용합니다. 벤더는 회사의 AWS \n계정에 대한 IAM 액세스 권한이 없습니다. \n솔루션 설계자는 공급업체에 이 액세스 권한을 어떻게 부여해야 합니까?",
    "options": [
      "공급업체의 IAM 역할에 대한 액세스 권한을 위임하려면 회사 계정에서 IAM 역할을 \n생성합니다. 벤더가 요구하는 권한에 대한 역할에 적절한 IAM 정책을 연결합니다.",
      "암호 복잡성 요구 사항을 충족하는 암호를 사용하여 회사 계정에 IAM 사용자를 \n만듭니다. 벤더가 요구하는 권한에 대해 적절한 IAM 정책을 사용자에게 연결합니다.",
      "회사 계정에 IAM 그룹을 생성합니다. 공급업체 계정의 도구 IAM 사용자를 그룹에 \n추가합니다. 공급업체에 필요한 권한에 대해 적절한 IAM 정책을 그룹에 연결합니다.",
      "IAM 콘솔에서 공급자 유형으로 \"AWS 계정\"을 선택하여 새 자격 증명 공급자를 만듭니다. \n공급업체의 AWS 계정 ID 와 사용자 이름을 제공합니다. 벤더가 요구하는 권한에 대해 \n적절한 IAM 정책을 새 제공자에 연결하십시오."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/95160-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n  \nIAM 역할을 생성하고 공급업체의 IAM 역할에 대한 액세스 권한을 위임함으로써 계정 간에 \n신뢰 관계를 설정합니다. 이렇게 하면 공급업체의 자동화 도구가 회사 계정의 역할을 맡고 \n필요한 리소스에 액세스할 수 있습니다. \n \n적절한 IAM 정책을 역할에 연결하면 해당 도구가 작업을 수행하는 데 벤더가 요구하는 \n정확한 권한을 정의할 수 있습니다. 이렇게 하면 공급업체가 회사 계정에 대한 직접적인 \nIAM 액세스 권한을 부여하지 않고도 필요한 액세스 권한을 가질 수 있습니다. \n \nB 는 암호가 있는 IAM 사용자를 생성하려면 벤더와 자격 증명을 공유해야 하므로 보안상의 \n이유로 권장되지 않습니다. \n \n공급업체의 IAM 사용자를 회사 계정의 IAM 그룹에 추가하면 공급업체 도구에 대한 \n액세스를 위임하는 직접적이고 통제된 방법을 제공하지 않기 때문에 C\n는 올바르지 \n않습니다.",
    "glossary": {
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 223,
    "question": "한 회사에서 Java Spring Boot 애플리케이션을 프라이빗 서브넷의 Amazon Elastic \nKubernetes Service(Amazon EKS)에서 실행되는 포드로 배포했습니다. 애플리케이션은 \nAmazon DynamoDB 테이블에 데이터를 써야 합니다. 솔루션 설계자는 애플리케이션이 \n인터넷에 트래픽을 노출하지 않고 DynamoDB 테이블과 상호 작용할 수 있는지 확인해야 \n합니다. \n이 목표를 달성하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? (2 개 선택)",
    "options": [
      "EKS 포드에 충분한 권한이 있는 IAM 역할을 연결합니다.",
      "EKS 포드에 충분한 권한이 있는 IAM 사용자를 연결합니다.",
      "프라이빗 서브넷의 네트워크 ACL 을 통해 DynamoDB 테이블에 대한 아웃바운드 연결을 \n허용합니다.",
      "DynamoDB 용 VPC 엔드포인트를 생성합니다.",
      "Java Spring Boot 코드에 액세스 키를 삽입합니다. \nAnswer: A, D  \nhttps://www.examtopics.com/discussions/amazon/view/95310-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명:",
      "IAM 역할을 EKS 포드에 연결하면 포드가 DynamoDB 에 액세스하는 데 필요한 권한을 \n부여할 수 있습니다. IAM 역할에는 DynamoDB 테이블에 대한 액세스를 허용하는 적절한 \n정책이 있어야 합니다.",
      "DynamoDB 용 VPC 엔드포인트를 생성하면 EKS 포드가 인터넷 연결 없이도 VPC 내에서 \n비공개로 DynamoDB 에 액세스할 수 있습니다. VPC 엔드포인트는 DynamoDB 에 대한 \n직접적이고 안전한 연결을 제공하므로 트래픽이 인터넷을 통해 흐를 필요가 없습니다. \n \n\n=== PAGE 246 ===\nB 는 IAM 사용자를 포드에 연결하는 것이 권장되는 접근 방식이 아니기 때문에 올바르지 \n않습니다. IAM 사용자는 AWS Management Console 또는 AP 를 통해 AWS 서비스에 \n액세스하기 위한 것입니다. \n \n네트워크 ACL 을 통한 아웃바운드 연결 구성은 DynamoDB 에 대한 안전하고 직접적인 \n연결을 제공하지 않기 때문에 C 는 올바르지 않습니다. \n \n코드에 액세스 키를 포함하는 것은 권장되는 보안 방법이 아니기 때문에 E 는 올바르지 \n않습니다. 잠재적인 보안 취약성이 발생할 수 있습니다. AWS 서비스에 대한 액세스를 \n제공하기 위해 IAM 역할 또는 기타 보안 메커니즘을 사용하는 것이 좋습니다. \n \n참고 \nhttps://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/vpc-endpo\nints-dynamodb.html \nhttps://aws.amazon.com/ko/about-aws/whats-new/2019/09/amazon-eks-adds-support\n-to-assign-iam-permissions-to-kubernetes-service-accounts/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 224,
    "question": "한 회사가 최근 단일 AWS 리전의 Amazon EC2 인스턴스에서 애플리케이션을 다시 \n호스팅하여 웹 애플리케이션을 AWS 로 마이그레이션했습니다. 이 회사는 응용 프로그램 \n아키텍처를 고가용성 및 내결함성을 갖도록 재설계하려고 합니다. 트래픽은 실행 중인 모든 \nEC2 인스턴스에 무작위로 도달해야 합니다. \n회사는 이러한 요구 사항을 충족하기 위해 어떤 조합의 단계를 수행해야 합니까? (2 개 \n선택)",
    "options": [
      "Amazon Route 53 장애 조치 라우팅 정책을 만듭니다.",
      "Amazon Route 53 가중 라우팅 정책을 생성합니다.",
      "Amazon Route 53 다중값 응답 라우팅 정책을 생성합니다.",
      "3 개의 EC2 인스턴스를 시작합니다. 하나의 가용 영역에 있는 2 개의 인스턴스와 다른 \n가용 영역에 있는 하나의 인스턴스입니다.",
      "4 개의 EC2 인스턴스를 시작합니다. 하나의 가용 영역에 2 개의 인스턴스와 다른 가용 \n영역에 2 개의 인스턴스가 있습니다. \nAnswer: C, E \nhttps://www.examtopics.com/discussions/amazon/view/95311-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n\n=== PAGE 247 ===\n설명:",
      "Route 53 의 다중 응답 라우팅 정책을 사용하면 DNS 레코드에 대한 다중 값을 구성할 \n수 있으며 Route 53 은 다중 임의 값으로 DNS 쿼리에 응답합니다. 이를 통해 사용 가능한 \nEC2 인스턴스 간에 트래픽을 무작위로 분산할 수 있습니다.",
      "다른 AZ 에서 EC2 인스턴스를 시작하면 고가용성과 내결함성을 얻을 수 있습니다. \n4 개의 인스턴스(각 AZ 에 2 개)를 시작하면 트래픽 로드를 처리하고 원하는 수준의 \n가용성을 유지하기에 충분한 리소스가 있습니다.",
      "장애 조치 라우팅은 기본 리소스 또는 위치를 사용할 수 없는 경우에만 트래픽을 백업 \n리소스 또는 보조 위치로 보내도록 설계되었습니다.",
      "가중 라우팅 정책을 사용하면 여러 EC2 인스턴스에 트래픽을 분산할 수 있지만 무작위 \n분산이 보장되지는 않습니다.",
      "여러 AZ\n에서 인스턴스를 시작하는 것은 내결함성을 위해 중요하지만 세 개의 \n인스턴스만 있으면 트래픽이 고르게 분산되지 않습니다. 인스턴스가 3 개뿐이면 트래픽이 \n고르게 분산되지 않아 리소스 활용이 불균형해질 수 있습니다. \n \n참고 \nhttps://aws.amazon.com/premiumsupport/knowledge-center/multivalue-versus-simple-p\nolicies/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 225,
    "question": "미디어 회사는 온프레미스에서 사용자 활동 데이터를 수집하고 분석합니다. 회사는 이 \n기능을 AWS\n로 마이그레이션하려고 합니다. 사용자 활동 데이터 저장소는 계속해서 \n성장하여 크기가 페타바이트가 될 것입니다. 회사는 SQL 을 사용하여 기존 데이터 및 새 \n데이터의 온디맨드 분석을 용이하게 하는 고가용성 데이터 수집 솔루션을 구축해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "활동 데이터를 Amazon Kinesis 데이터 스트림으로 보냅니다. 데이터를 Amazon S3 \n버킷으로 전달하도록 스트림을 구성합니다.",
      "활동 데이터를 Amazon Kinesis Data Firehose 전송 스트림으로 보냅니다. 데이터를 \nAmazon Redshift 클러스터로 전달하도록 스트림을 구성합니다.",
      "활동 데이터를 Amazon S3 버킷에 배치합니다. 데이터가 S3 버킷에 도착하면 \n데이터에서 AWS Lambda 함수를 실행하도록 Amazon S3 를 구성합니다.",
      "여러 가용 영역에 분산된 Amazon EC2 인스턴스에서 수집 서비스를 생성합니다. \n데이터를 Amazon RDS 다중 AZ 데이터베이스로 전달하도록 서비스를 구성합니다. \nAnswer: B \n\n=== PAGE 248 ===\nhttps://www.examtopics.com/discussions/amazon/view/94985-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nAmazon Redshift 는 클라우드에서 완벽하게 관리되는 페타바이트 규모의 데이터 웨어하우스 \n서비스입니다. 수백 기가바이트의 데이터로 시작하여 페타바이트 이상으로 확장할 수 \n있습니다. 이를 통해 데이터를 사용하여 비즈니스와 고객에 대한 새로운 통찰력을 얻을 수 \n있습니다. 데이터 웨어하우스를 생성하는 첫 번째 단계는 Amazon Redshift 클러스터라는 \n노드 집합을 시작하는 것입니다. 클러스터를 프로비저닝한 후 데이터 세트를 업로드한 다음 \n데이터 분석 쿼리를 수행할 수 있습니다. 데이터 세트의 크기에 관계없이 Amazon \nRedshift\n는 오늘날 사용하는 것과 동일한 SQL 기반 도구 및 비즈니스 인텔리전스 \n애플리케이션을 사용하여 빠른 쿼리 성능을 제공합니다. \n \n설명2: \nB 는 데이터 수집 및 분석을 위한 완전히 관리되고 확장 가능한 솔루션을 제공합니다. \nKDF 는 대량의 스트리밍 데이터를 처리하도록 자동으로 확장하여 데이터 수집 프로세스를 \n간소화합니다. 강력하고 완전히 관리되는 데이터 웨어하우징 솔루션인 Redshift 클러스터에 \n데이터를 직접 로드할 수 있습니다.",
      "Kinesis 는 스트리밍 데이터를 처리할 수 있지만 분석 솔루션에 데이터를 로드하려면 \n추가 처리가 필요합니다.",
      "S3 및 Lambda 가 데이터 저장 및 처리를 처리할 수 있지만 KDF 및 Redshift 가 \n제공하는 완전관리형 솔루션에 비해 수동 구성 및 관리가 더 많이 필요합니다.",
      "이 옵션은 EC2 인스턴스 및 RDS 데이터베이스 인프라를 수동으로 관리하고 확장해야 \n하므로 더 많은 운영 오버헤드가 필요합니다. \n \n따라서 Redshift 클러스터에 데이터를 제공하는 KDF\n가 포함된 옵션 B\n는 주어진 \n시나리오에서 사용자 활동 데이터를 수집하고 분석하기 위한 가장 간소화되고 운영상 \n효율적인 솔루션을 제공합니다."
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  }
];