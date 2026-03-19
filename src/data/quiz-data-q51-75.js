export const quizData = [
  {
    "id": 51,
    "question": "회사는 REST API 로 검색하기 위해 주문 배송 통계를 제공하는 애플리케이션을 개발 \n중입니다. 이 회사는 배송 통계를 추출하고 데이터를 읽기 쉬운 HTML 형식으로 구성하고 \n매일 아침 여러 이메일 주소로 보고서를 보내려고 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 취해야 합니까? \n(2 개를 선택하세요.)",
    "options": [
      "데이터를 Amazon Kinesis Data Firehose 로 보내도록 애플리케이션을 구성합니다.",
      "Amazon Simple Email Service(Amazon SES)를 사용하여 데이터 형식을 지정하고 \n보고서를 이메일로 보냅니다.",
      "AWS Glue 작업을 호출하여 데이터에 대한 애플리케이션의 API 를 쿼리하는 Amazon \nEventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성합니다.",
      "AWS Lambda 함수를 호출하여 데이터에 대한 애플리케이션의 API 를 쿼리하는 Amazon \nEventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성합니다.",
      "Amazon S3 에 애플리케이션 데이터를 저장합니다. 보고서를 이메일로 보낼 S3 이벤트 \n대상으로 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85557-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1:",
    "glossary": {}
  },
  {
    "id": 52,
    "question": "회사에서 온프레미스 애플리케이션을 AWS 로 마이그레이션하려고 합니다. 애플리케이션은 \n수십 기가바이트에서 수백 테라바이트까지 다양한 크기의 출력 파일을 생성합니다. \n애플리케이션 데이터는 표준 파일 시스템 구조로 저장되어야 합니다. 회사는 자동으로 \n확장되는 솔루션을 원합니다. 고가용성이며 최소한의 운영 오버헤드가 필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon \nElastic \nContainer \nService(Amazon \nECS)에서 \n컨테이너로 \n실행되도록 \n애플리케이션을 마이그레이션합니다. 스토리지에 Amazon S3 를 사용합니다.",
      "Amazon Elastic Kubernetes Service(Amazon EKS)에서 컨테이너로 실행되도록 \n애플리케이션을 마이그레이션합니다. 스토리지에 Amazon Elastic Block Store(Amazon \nEBS)를 사용합니다.",
      "다중 \nAZ \nAuto \nScaling \n그룹의 \nAmazon \nEC2 \n인스턴스로 \n애플리케이션을 \n마이그레이션합니다. 스토리지에 Amazon Elastic File System(Amazon EFS)을 사용합니다.",
      "다중 \nAZ \nAuto \nScaling \n그룹의 \nAmazon \nEC2 \n인스턴스로 \n애플리케이션을 \n마이그레이션합니다. 스토리지에 Amazon Elastic Block Store(Amazon EBS)를 사용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85265-exam-aws-certified-solut",
    "glossary": {}
  },
  {
    "id": 53,
    "question": "회사는 Amazon S3 에 회계 기록을 저장해야 합니다. 기록은 1 년 동안 즉시 액세스할 수 \n있어야 하며 그 후 추가로 9 년 동안 보관해야 합니다. 관리자 및 루트 사용자를 포함하여 \n회사의 그 누구도 전체 10\n년 동안 기록을 삭제할 수 없습니다. 기록은 최대한의 \n복원력으로 저장해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "전체 10 년 동안 S3 Glacier 에 기록을 저장합니다. 접근통제 정책을 사용하여 10 년 동안 \n기록 삭제를 거부합니다.",
      "S3 Intelligent-Tiering 을 사용하여 레코드를 저장합니다. IAM 정책을 사용하여 레코드 \n삭제를 거부합니다. 10 년 후 삭제를 허용하도록 IAM 정책을 변경합니다.",
      "S3 수명 주기 정책을 사용하여 1 년 후에 S3 Standard 에서 S3 Glacier Deep Archive 로 \n레코드를 전환합니다. 10 년 동안 규정 준수 모드에서 S3 Object Lock 을 사용합니다.",
      "S3 수명 주기 정책을 사용하여 1\n년 후 레코드를 S3 Standard\n에서 S3 One \nZone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 10 년 동안 거버넌스 모드에서 S3 \nObject Lock 을 사용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85532-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 54,
    "question": "회사는 AWS 에서 여러 Windows 워크로드를 실행합니다. 회사 직원은 두 개의 Amazon \nEC2 인스턴스에서 호스팅되는 Windows 파일 공유를 사용합니다. 파일 공유는 서로 간에 \n데이터를 동기화하고 중복 복사본을 유지합니다. 이 회사는 사용자가 현재 파일에 \n액세스하는 방식을 보존하는 고가용성 및 내구성 스토리지 솔루션을 원합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "모든 데이터를 Amazon S3 로 마이그레이션합니다. 사용자가 파일에 액세스할 수 있도록 \nIAM 인증을 설정합니다.",
      "Amazon S3 파일 게이트웨이를 설정합니다. 기존 EC2 인스턴스에 S3 파일 게이트웨이를 \n탑재합니다.",
      "다중 AZ 구성을 사용하여 파일 공유 환경을 Windows 파일 서버용 Amazon FSx 로 \n확장합니다. 모든 데이터를 Windows 파일 서버용 FSx 로 마이그레이션합니다.",
      "다중 AZ 구성을 사용하여 파일 공유 환경을 Amazon Elastic File System(Amazon \nEFS)으로 확장합니다. 모든 데이터를 Amazon EFS 로 마이그레이션합니다. \n\n=== PAGE 60 ==="
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85574-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nWindows File 공유가 핵심 키워드. 답은 C. \n \n2: \n\ndocs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AmazonEFS.html \nAmazon FSx for Windows File Server 는 완전히 네이티브로 지원되는 완전히 관리되는 \nMicrosoft Windows 파일 서버를 제공합니다. \n윈도우 파일 시스템. \n\ndocs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지"
    }
  },
  {
    "id": 55,
    "question": "솔루션 설계자는 여러 서브넷을 포함하는 VPC 아키텍처를 개발 중입니다. 아키텍처는 \nAmazon EC2 인스턴스 및 Amazon RDS DB 인스턴스를 사용하는 애플리케이션을 \n호스팅합니다. 아키텍처는 2 개의 가용 영역에 있는 6 개의 서브넷으로 구성됩니다. 각 가용 \n영역에는 퍼블릭 서브넷, 프라이빗 서브넷 및 데이터베이스용 전용 서브넷이 포함됩니다. \n프라이빗 서브넷에서 실행되는 EC2 인스턴스만 RDS 데이터베이스에 액세스할 수 \n있습니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "퍼블릭 서브넷의 CIDR 블록에 대한 경로를 제외하는 새 라우팅 테이블을 생성합니다. \n라우팅 테이블을 데이터베이스 서브넷과 연결합니다.",
      "퍼블릭 서브넷의 인스턴스에 할당된 보안 그룹의 인바운드 트래픽을 거부하는 보안 \n그룹을 생성합니다. 보안 그룹을 DB 인스턴스에 연결합니다.",
      "프라이빗 서브넷의 인스턴스에 할당된 보안 그룹의 인바운드 트래픽을 허용하는 보안 \n그룹을 생성합니다. 보안 그룹을 DB 인스턴스에 연결합니다.",
      "퍼블릭 서브넷과 프라이빗 서브넷 사이에 새로운 피어링 연결을 생성합니다. 프라이빗 \n서브넷과 데이터베이스 서브넷 간에 다른 피어링 연결을 만듭니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85409-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 56,
    "question": "회사는 Amazon Route 53 에 도메인 이름을 등록했습니다. 이 회사는 ca-central-1 리전의 \nAmazon API Gateway 를 백엔드 마이크로서비스 API 의 공용 인터페이스로 사용합니다. 타사 \n서비스는 API 를 안전하게 사용합니다. 회사는 타사 서비스에서 HTTPS 를 사용할 수 있도록 \n회사의 도메인 이름 및 해당 인증서로 API 게이트웨이 URL 을 설계하려고 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "API Gateway 에서 Name=\"Endpoint-URL\" 및 Value=\"Company Domain Name\"으로 단계 \n변수를 생성하여 기본 URL 을 덮어씁니다. 회사의 도메인 이름과 연결된 공인 인증서를 \nAWS Certificate Manager(ACM)로 가져옵니다.",
      "회사의 도메인 이름으로 Route 53 DNS 레코드를 생성합니다. 별칭 레코드가 리전 API \n게이트웨이 단계 엔드포인트를 가리키도록 합니다. 회사의 도메인 이름과 연결된 공인 \n인증서를 us-east-1 리전의 AWS Certificate Manager(ACM)로 가져옵니다.",
      "리전 API 게이트웨이 엔드포인트를 생성합니다. API Gateway 엔드포인트를 회사의 \n도메인 이름과 연결합니다. 회사의 도메인 이름과 연결된 공인 인증서를 동일한 리전의 \nAWS Certificate Manager(ACM)로 가져옵니다. API Gateway 엔드포인트에 인증서를 \n연결합니다. API Gateway 엔드포인트로 트래픽을 라우팅하도록 Route 53 을 구성합니다.",
      "리전 API 게이트웨이 엔드포인트를 생성합니다. API Gateway 엔드포인트를 회사의 \n도메인 이름과 연결합니다. 회사의 도메인 이름과 연결된 공인 인증서를 us-east-1 리전의 \nAWS Certificate Manager(ACM)로 가져옵니다. API Gateway API 에 인증서를 연결합니다. \n회사의 도메인 이름으로 Route 53 DNS 레코드를 생성합니다. A 레코드가 회사의 도메인 \n이름을 가리키도록 합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85266-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n사용자 정의 도메인 이름 은 API 사용자에게 제공할 수 있는 더 간단하고 직관적인 \nURL 입니다. API 를 배포한 후 귀하(및 귀하의 고객)는 다음 형식의 기본 기본 URL 을 \n사용하여 API 를 호출할 수 있습니다. \n\ndocs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domai\nns.html \n \n리전 사용자 지정 도메인 이름은 API 와 동일한 AWS 리전에 있는 SSL/TLS 인증서를 \n사용해야 합니다. \n\naws.amazon.com/ko/premiumsupport/knowledge-center/custom-domain-name-\namazon-api-gateway/ \n \n여기서 API Gateway URL 이란, Route 53 에 등록된 도메인 이름으로, 이를 통해 API 를 \n호출할 수 있음. \n인증서는 HTTPS 에 사용됨. HTTPS=HTTL + SSL 인데, SSL 에 인증서가 필요하기 때문. \n인증서는 ACM 으로 가져올 수 있음. \n \n1. 리전 API 게이트웨이 엔드포인트 생성 및 회사 도메인 이름과 연결 \n또한 API Gateway REST API, Amazon CLI 또는 Amazon SDK 중 하나를 호출하여 사용자 \n지정 도메인 이름을 호스트 이름으로 사용하여 API\n의 기본 경로 매핑을 설정할 수 \n있습니다. \n\ndocs.amazonaws.cn/en_us/apigateway/latest/developerguide/how-to-edge-opti\nmized-custom-domain-name.html#how-to-custom-domains-mapping-console \n2. 회사 도메인 이름과 연결된 공인 인증서를 동일 리전의 ACM 으로 가져옴 \nAPI Gateway 리전 사용자 지정 도메인 이름의 경우 API 와 동일한 리전에서 인증서를 \n요청하거나 가져와야 합니다......도메인 이름에 대한 인증서를 ACM 으로 가져오려면.... \n\ndocs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domai\nns-prerequisites.html \n3. API 게이트웨이 엔드포인트에 인증서 연결 \nACM 인증서로 리전 사용자 지정 도메인 이름을 생성(또는 마이그레이션)하면 API \nGateway 는 해당 계정에 서비스 연결 역할을 생성합니다(이 역할이 아직 없는 경우). \n서비스 연결 역할은 ACM 인증서를 해당 리전 엔드포인트에 연결하는 데 필요합니다. \n\ndocs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/apigateway-regio",
    "glossary": {
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 57,
    "question": "한 회사에서 인기 있는 소셜 미디어 웹사이트를 운영하고 있습니다. 웹사이트는 사용자에게 \n이미지를 업로드하여 다른 사용자와 공유할 수 있는 기능을 제공합니다. 회사는 이미지에 \n부적절한 콘텐츠가 포함되지 않았는지 확인하고 싶습니다. 회사는 개발 노력을 최소화하는 \n솔루션이 필요합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon Comprehend\n를 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 \n\n=== PAGE 64 ===\n예측에는 인적 검토를 사용합니다.",
      "Amazon Rekognition\n을 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 \n예측에는 인적 검토를 사용합니다.",
      "Amazon SageMaker 를 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 예측에 \n레이블을 지정하려면 정답을 사용합니다.",
      "AWS Fargate 를 사용하여 사용자 지정 기계 학습 모델을 배포하여 부적절한 콘텐츠를 \n감지합니다. 신뢰도가 낮은 예측에 레이블을 지정하려면 정답을 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85452-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAmazon Rekognition\n을 사용하여 부적절하거나 원치 않거나 불쾌감을 주는 콘텐츠를 \n감지할 수 있습니다. \n\ndocs.aws.amazon.com/rekognition/latest/dg/moderation.html \n \n참조 \n\ndocs.aws.amazon.com/rekognition/latest/dg/moderation.html?pg=ln&sec=ft \n\ndocs.aws.amazon.com/rekognition/latest/dg/a2i-rekognition.html",
    "glossary": {}
  },
  {
    "id": 58,
    "question": "회사는 확장성 및 가용성에 대한 요구 사항을 충족하기 위해 컨테이너에서 중요한 응용 \n프로그램을 실행하려고 합니다. 회사는 중요한 응용 프로그램의 유지 관리에 집중하는 것을 \n선호합니다. 회사는 컨테이너화된 워크로드를 실행하는 기본 인프라의 프로비저닝 및 \n관리에 대한 책임을 원하지 않습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon EC2 인스턴스를 사용하고 인스턴스에 Docker 를 설치합니다.",
      "Amazon EC2 작업자 노드에서 Amazon Elastic Container Service(Amazon ECS)를 \n사용합니다.",
      "AWS Fargate 에서 Amazon Elastic Container Service(Amazon ECS)를 사용합니다.",
      "Amazon \nElastic \nContainer \nService(Amazon \nECS)에 \n최적화된 \nAmazon \n머신 \n이미지(AMI)의 Amazon EC2 인스턴스를 사용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85453-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 59,
    "question": "회사는 300 개 이상의 글로벌 웹사이트 및 애플리케이션을 호스팅합니다. 이 회사는 매일 \n30TB 이상의 클릭스트림 데이터를 분석할 플랫폼이 필요합니다. \n솔루션 설계자는 클릭스트림 데이터를 전송하고 처리하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Data Pipeline 을 설계하여 데이터를 Amazon S3 버킷에 보관하고 데이터로 Amazon \nEMR 클러스터를 실행하여 분석을 생성합니다.",
      "Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성하여 데이터를 처리하고 Amazon \nRedshift 가 분석에 사용할 수 있도록 Amazon S3 데이터 레이크로 보냅니다.",
      "데이터를 Amazon CloudFront 에 캐시합니다. Amazon S3 버킷에 데이터를 저장합니다. \n객체가 S3 버킷에 추가될 때. AWS Lambda 함수를 실행하여 분석용 데이터를 처리합니다.",
      "Amazon Kinesis Data Streams\n에서 데이터를 수집합니다. Amazon Kinesis Data \nFirehose 를 사용하여 Amazon S3 데이터 레이크로 데이터를 전송합니다. 분석을 위해 \nAmazon Redshift 에 데이터를 로드합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85793-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n대량의 스트림 데이터 수집 = Kinesis Data Streams. 정답은 D. \n※실제 사례가 있음. \n◎전 세계 300 개 이상의 Hearst 웹사이트에서 스트리밍되는 하루 30 테라바이트 이상의 \n클릭스트림 데이터를 전송하고 처리하는 클릭스트림 분석 플랫폼을 구축했습니다.",
    "glossary": {
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 60,
    "question": "회사에 AWS 에서 호스팅되는 웹 사이트가 있습니다. 웹 사이트는 HTTP 와 HTTPS 를 \n별도로 처리하도록 구성된 ALB(Application Load Balancer) 뒤에 있습니다. 회사는 요청이 \nHTTPS 를 사용하도록 모든 요청을 웹사이트로 전달하려고 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "HTTPS 트래픽만 허용하도록 ALB 의 네트워크 ACL 을 업데이트합니다.",
      "URL 의 HTTP 를 HTTPS 로 바꾸는 규칙을 만듭니다.",
      "ALB 에서 리스너 규칙을 생성하여 HTTP 트래픽을 HTTPS 로 리디렉션합니다.",
      "ALB 를 SNI(서버 이름 표시)를 사용하도록 구성된 Network Load Balancer 로 교체합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85121-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nApplication Load Balancer 를 위한 리스너…..쿼리 문자열 조건을 사용하여 쿼리 문자열의 \n키/값 페어 또는 값을 기반으로 요청을 라우팅하는 규칙을 구성할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/elasticloadbalancing/latest/application/load-balance\nr-listeners.html \nApplication Load Balancer 리스너 규칙을 사용하여 HTTP 요청을 HTTPS 로 리디렉션하려고 \n합니다. 어떻게 해야 하나요? \n①HTTP 요청을 HTTPS 로 리디렉션하는 HTTP 리스너 규칙 생성. \n②HTTPS 리스너 생성. \n③Application Load Balancer 의 보안 그룹이 443 의 트래픽을 허용하는지 확인 \n\naws.amazon.com/ko/premiumsupport/knowledge-center/elb-redirect-http-to-htt\nps-using-alb/",
    "glossary": {
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 61,
    "question": "한 회사가 AWS 에서 2 계층 웹 애플리케이션을 개발하고 있습니다. 회사 개발자는 백엔드 \nAmazon RDS 데이터베이스에 직접 연결되는 Amazon EC2 인스턴스에 애플리케이션을 \n배포했습니다. 회사는 애플리케이션에 데이터베이스 자격 증명을 하드코딩해서는 안 됩니다. \n또한 회사는 정기적으로 데이터베이스 자격 증명을 자동으로 교체하는 솔루션을 구현해야 \n합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "인스턴스 \n메타데이터에 \n데이터베이스 \n자격 \n증명을 \n저장합니다. \nAmazon \nEventBridge(Amazon CloudWatch Events) 규칙을 사용하여 RDS 자격 증명과 인스턴스 \n메타데이터를 동시에 업데이트하는 예약된 AWS Lambda 함수를 실행합니다.",
      "암호화된 Amazon S3 버킷의 구성 파일에 데이터베이스 자격 증명을 저장합니다. \nAmazon EventBridge(Amazon CloudWatch Events) 규칙을 사용하여 RDS 자격 증명과 구성 \n파일의 자격 증명을 동시에 업데이트하는 예약된 AWS Lambda 함수를 실행합니다. S3 버전 \n관리를 사용하여 이전 값으로 폴백하는 기능을 보장합니다.",
      "데이터베이스 자격 증명을 AWS Secrets Manager 에 암호로 저장합니다. 보안 비밀에 \n대한 자동 순환을 켭니다. EC2 역할에 필요한 권한을 연결하여 보안 암호에 대한 액세스 \n권한을 부여합니다.",
      "데이터베이스 자격 증명을 AWS Systems Manager Parameter Store\n에 암호화된 \n파라미터로 저장합니다. 암호화된 매개변수에 대해 자동 회전을 켭니다. EC2 역할에 필요한 \n권한을 연결하여 암호화된 파라미터에 대한 액세스 권한을 부여합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85580-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n애플리케이션에 자격증명 하드코딩 안 됨 = Secrets Manager. \nSecrets Manager\n를 사용하면 애플리케이션 소스 코드에서 하드 코딩된 자격 증명을 \n제거하고 애플리케이션 자체에 자격 증명을 저장하지 않음으로써 보안 태세를 개선할 수 \n있습니다. 사용자의 개입 없이 지정한 일정에 따라 자동으로 보안 암호를 교체하도록",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 62,
    "question": "회사에서 AWS 에 새로운 공개 웹 애플리케이션을 배포하고 있습니다. 애플리케이션은 \nALB(Application Load Balancer) 뒤에서 실행됩니다. 애플리케이션은 외부 CA(인증 \n기관)에서 발급한 SSL/TLS 인증서를 사용하여 에지에서 암호화해야 합니다. 인증서가 \n만료되기 전에 매년 인증서를 교체해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 발급합니다. 인증서를 \nALB 에 적용합니다. 관리형 갱신 기능을 사용하여 인증서를 자동으로 교체합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 발급합니다. 인증서에서 \n키 자료를 가져옵니다. AL\n에 인증서 적용 관리되는 갱신 기능을 사용하여 인증서를 \n자동으로 교체합니다.",
      "AWS Certificate Manager(ACM) 사설 인증 기관을 사용하여 루트 CA 에서 SSL/TLS \n인증서를 발급합니다. 인증서를 ALB 에 적용합니다. 관리형 갱신 기능을 사용하여 인증서를 \n자동으로 교체합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 가져옵니다. 인증서를 \nALB 에 적용합니다. Amazon EventBridge(Amazon CloudWatch Events)를 사용하여 인증서가 \n만료될 때 알림을 보냅니다. 인증서를 수동으로 교체합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85524-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n외부 인증기관에서 발급한 SSL/TLS 인증서가 이미 있고 이를 사용해야하므로 ACM 쪽에서 \nSSL/TLS 인증서를 발급하는 A,B 는 모두 오답. \nC(X) : 인증서가 있는데 또 발급받을 필요가 없음. \n\nwww.amazonaws.cn/en/certificate-manager/faqs/#Managed_renewal_and_deploy\nment",
    "glossary": {
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 63,
    "question": "회사는 AWS 에서 인프라를 실행하고 문서 관리 애플리케이션에 대해 700,000 명의 등록 \n기반을 보유하고 있습니다. 회사는 큰 .pdf 파일을 .jpg 이미지 파일로 변환하는 제품을 \n만들려고 합니다. .pdf 파일의 크기는 평균 5MB 입니다. 회사는 원본 파일과 변환 파일을 \n보관해야 합니다. 솔루션 설계자는 시간이 지남에 따라 빠르게 증가할 수요를 수용할 수 \n있는 확장 가능한 솔루션을 설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      ".pdf 파일을 Amazon S3 에 저장합니다. AWS Lambda 함수를 호출하여 파일을 .jpg \n형식으로 변환하고 Amazon S3 에 다시 저장하도록 S3 PUT 이벤트를 구성합니다.",
      ".pdf 파일을 Amazon DynamoD 에 저장 DynamoDB 스트림 기능을 사용하여 AWS \nLambda 함수를 호출하여 파일을 .jpg 형식으로 변환하고 DynamoDB 에 다시 저장합니다.",
      "Amazon EC2 인스턴스, Amazon Elastic Block Store(Amazon EBS) 스토리지 및 Auto \nScaling 그룹이 포함된 AWS Elastic Beanstalk 애플리케이션에 .pdf 파일을 업로드합니다. \nEC2 인스턴스의 프로그램을 사용하여 파일을 .jpg 형식으로 변환합니다. .pdf 파일과 .jpg \n파일을 EBS 스토어에 저장합니다.",
      ".pdf 파일을 Amazon EC2 인스턴스, Amazon Elastic File System(Amazon EFS) 스토리지 \n및 Auto Scaling 그룹이 포함된 AWS Elastic Beanstalk 애플리케이션에 업로드합니다. EC2 \n인스턴스의 프로그램을 사용하여 파일을 .jpg 형식으로 변환합니다. .pdf 파일과 .jpg \n파일을 EBS 스토어에 저장합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85795-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(O) : S3 에 넣으면 Lambda 를 통해 자동으로 처리가 되도록 하는 거라 OK. S3 는 저렴함. \nB(X) : dynamodb 는 이미지 저장용으론… \nC(X) : 저렴한 S3 가 있는데 굳이... 인스턴스 비용도 나감. \nD(x) : C 와 마찬가지. \n \n2: \nElastic BeanStalk 는 비싸고 DocumentDB 는 최대 400KB 의 파일을 업로드할 수 있습니다. \n따라서 Lambda 와 S3 가 하나여야 합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 64,
    "question": "회사는 온프레미스에서 실행되는 Windows 파일 서버에 5TB 이상의 파일 데이터를 가지고 \n있습니다. 사용자와 애플리케이션은 매일 데이터와 상호 작용합니다. \n이 회사는 Windows 워크로드를 AWS\n로 이전하고 있습니다. 회사가 이 프로세스를 \n계속함에 따라 회사는 최소 지연 시간으로 AWS 및 온프레미스 파일 스토리지에 액세스할 \n수 있어야 합니다. 회사는 운영 오버헤드를 최소화하고 기존 파일 액세스 패턴을 크게 \n변경할 필요가 없는 솔루션이 필요합니다. 회사는 AWS 연결을 위해 AWS Site-to-Site VPN \n연결을 사용합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS 에서 Windows 파일 서버용 Amazon FSx 를 배포 및 구성합니다. 온-프레미스 파일 \n데이터를 Windows 파일 서버용 FSx로 이동합니다. AWS에서 Windows 파일 서버용 FSx를 \n사용하도록 워크로드를 재구성합니다.",
      "온프레미스에 Amazon S3 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 \n데이터를 S3 파일 게이트웨이로 이동합니다. S3 파일 게이트웨이를 사용하도록 온프레미스 \n워크로드 및 클라우드 워크로드를 재구성합니다.",
      "온프레미스에 Amazon S3 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 \n데이터를 Amazon S3 로 이동합니다. Amazon S3 를 직접 사용하거나 S3 파일 게이트웨이를 \n사용하도록 워크로드를 재구성합니다. 각 워크로드의 위치에 따라 다릅니다.",
      "AWS 에서 Windows 파일 서버용 Amazon FSx 를 배포 및 구성합니다. 온프레미스에 \nAmazon FSx 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 데이터를 FSx 파일 \n게이트웨이로 이동합니다. AWS 의 Windows 파일 서버용 FSx 를 사용하도록 클라우드 \n워크로드를 구성합니다. FSx 파일 게이트웨이를 사용하도록 온프레미스 워크로드를 \n구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85173-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nWindows File Server + AWS 로 이동 = Amazon FSx File Gateway. \nAmazon FSx 파일 게이트웨이는 Amazon FSx 의 Windows 파일 공유에 대한 온프레미스 \n액세스를 최적화하여 사용자가 짧은 지연 시간과 공유 대역폭을 유지하면서 Windows 파일 \n서버용 FSx 데이터에 쉽게 액세스할 수 있도록 합니다. 사용자는 액세스할 수 있는 자주 \n사용하는 데이터의 로컬 캐시를 활용하여 성능을 높이고 데이터 전송 트래픽을 줄일 수 \n있습니다. 파일 읽기 및 쓰기와 같은 파일 시스템 작업은 모두 로컬 캐시에 대해 수행되는 \n반면 Amazon FSx 파일 게이트웨이는 변경된 데이터를 백그라운드에서 Windows 파일 \n서버용 FSx 와 동기화합니다. 이러한 기능을 사용하면 Windows 파일 서버용 FSx 에서",
    "glossary": {}
  },
  {
    "id": 65,
    "question": "병원은 최근 Amazon API Gateway 및 AWS Lambda 와 함께 RESTful API 를 배포했습니다. \n병원은 API Gateway 및 Lambda\n를 사용하여 PDF 형식 및 JPEG 형식의 보고서를 \n업로드합니다. 병원은 보고서에서 보호되는 건강 정보(PHI)를 식별하기 위해 Lambda \n코드를 수정해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "기존 Python 라이브러리를 사용하여 보고서에서 텍스트를 추출하고 추출된 텍스트에서 \nPHI 를 식별합니다.",
      "Amazon Textract 를 사용하여 보고서에서 텍스트를 추출합니다. Amazon SageMaker 를 \n사용하여 추출된 텍스트에서 PHI 를 식별합니다.",
      "Amazon Textract 를 사용하여 보고서에서 텍스트를 추출합니다. Amazon Comprehend \nMedical 을 사용하여 추출된 텍스트에서 PHI 를 식별합니다.",
      "Amazon \nRekognition\n을 \n사용하여 \n보고서에서 \n텍스트를 \n추출합니다. \nAmazon \n\n=== PAGE 72 ===\nComprehend Medical 을 사용하여 추출된 텍스트에서 PHI 를 식별합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85367-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nTextract 로 텍스트 추출, Comprehend Medical 을 통해 식별 \nA(X) : Textract 와 Comprehend Medical 을 사용하는 것이 파이썬 코드를 별도로 관리할 \n필요가 없어서 운영하기 편함. \nB(X) : SageMaker 는 기계 학습 모델 서비스. \nAmazon SageMaker 는 완전관리형 인프라, 도구 및 워크플로를 사용하여 모든 사용 사례에 \n대해 기계 학습(ML) 모델을 구축, 훈련 및 배포하는 완전관리형 서비스입니다.  \n\naws.amazon.com/ko/sagemaker/faqs/ \nC(O) : Textract 는 OCR 같은 서비스. Comprehend 는 의료용 텍스트 식별 서비스. \nAmazon Textract 는 스캔한 문서에서 텍스트, 필기 및 데이터를 자동으로 추출하는 기계 \n학습(ML) 서비스입니다. 단순한 광학 문자 인식(OCR) 이상으로 양식 및 표의 데이터를 \n식별하고 이해하며 추출합니다. \n\naws.amazon.com/ko/textract/ \nAmazon Comprehend Medical 은 HIPAA 적격 자연어 처리(NLP) 서비스로, 미리 학습된 \n기계 학습을 사용하여 처방전, 처치, 진단과 같은 의료 텍스트에서 의료 데이터를 파악하고 \n추출합니다.  \n\naws.amazon.com/ko/comprehend/medical/ \nD(X) : Rekognition 은 이미지나 비디오 분석 서비스지 텍스트 추출 서비스가 아님. \nAmazon Rekognition 은 애플리케이션에 강력한 시각 분석 기능을 쉽게 추가할 수 있게 해 \n주는 서비스입니다. Rekognition Image 를 통해 수백만 개의 이미지를 검색, 확인 및 구성할 \n수 있는 강력한 애플리케이션을 쉽게 구축할 수 있습니다. Rekognition Video 를 통해 \n저장된 동영상 또는 실시간 스트림 동영상에서 동작 기반 컨텍스트를 추출하고 이를 분석할 \n수 있습니다.  \n\naws.amazon.com/ko/rekognition/faqs/?nc=sn&loc=7 \n \n2: \n대기 시간을 최소화하면서 AWS 와 온프레미스 파일 스토리지 모두에 액세스해야 하는 \n회사의 요구 사항을 충족하기 위해 하이브리드 클라우드 아키텍처를 사용할 수 있습니다. \n한 가지 솔루션은 완벽하게 관리되는 Windows 파일 서버를 제공하는 AWS 에서 Windows \n파일 서버용 Amazon FSx\n를 배포 및 구성하는 것입니다. 온프레미스 파일 데이터는 \n온프레미스와 AWS 파일 스토리지 간의 브리지 역할을 할 수 있는 FSx 파일 게이트웨이로",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 66,
    "question": "회사에 각각 크기가 약 5MB 인 많은 수의 파일을 생성하는 응용 프로그램이 있습니다. \n파일은 Amazon S3 에 저장됩니다. 회사 정책에 따라 파일을 삭제하려면 4 년 동안 보관해야 \n합니다. 파일에는 재생산하기 쉽지 않은 중요한 비즈니스 데이터가 포함되어 있으므로 \n즉각적인 액세스가 항상 필요합니다. 파일은 객체 생성 후 처음 30\n일 동안 자주 \n액세스되지만 처음 30 일 후에는 거의 액세스되지 않습니다. \n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?",
    "options": [
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Glacier 로 파일을 이동하는 S3 버킷 수명 \n주기 정책을 생성합니다. 객체 생성 후 4 년이 지나면 파일을 삭제합니다.",
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 One Zone-Infrequent Access(S3 One \nZone-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 후 4 년이 \n지나면 파일을 삭제합니다.",
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Standard-Infrequent Access(S3 \nStandard-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 후 \n4 년이 지나면 파일을 삭제합니다.",
      "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Standard-Infrequent Access(S3 \nStandard-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 4 년 후 \n파일을 S3 Glacier 로 이동합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85310-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 즉각적인 액세스가 항상 필요하다고 했기 때문에 S3 Glacier 사용은 적합하지 않음. \nB(X) : 재생산하기 쉽지 않은 중요한 비즈니스 데이터라고 했기 때문에 One Zone-IA",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 67,
    "question": "회사는 여러 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 애플리케이션은 \nAmazon SQS 대기열의 메시지를 처리하고 Amazon RDS 테이블에 쓰고 대기열에서 \n메시지를 삭제합니다. RDS 테이블에서 가끔 중복 레코드가 발견됩니다. SQS 대기열에는 \n중복 메시지가 없습니다. \n메시지가 한 번만 처리되도록 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "CreateQueue API 호출을 사용하여 새 대기열을 만듭니다.",
      "AddPermission API 호출을 사용하여 적절한 권한을 추가합니다.",
      "ReceiveMessage API 호출을 사용하여 적절한 대기 시간을 설정합니다.",
      "ChangeMessageVisibility API 호출을 사용하여 가시성 시간 초과를 늘립니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85583-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n가시성 제한 시간은 Amazon SQS 가 메시지를 반환할 때 시작됩니다. 이 시간 동안 \n소비자는 메시지를 처리하고 삭제합니다. 그러나 메시지를 삭제하기 전에 소비자가 \n실패하고 \n가시성 \n제한 \n시간이 \n만료되기 \n전에 \n시스템에서 \n해당 \n메시지에 \n대한 \nDeleteMessage 작업을 호출하지 않으면 메시지가 다른 소비자에게 표시되고 메시지가 \n다시 수신됩니다. 메시지를 한 번만 수신해야 하는 경우 소비자는 가시성 제한 시간 내에 \n메시지를 삭제해야 합니다. \n\ndocs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide\n/sqs-visibility-timeout.html \n키워드: Amazon RDS 에 대한 SQS 대기열 쓰기 여기에서 옵션 D 최상의 기타 옵션",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 68,
    "question": "솔루션 설계자는 회사의 온프레미스 인프라를 AWS 로 확장하기 위해 새로운 하이브리드 \n아키텍처를 설계하고 있습니다. 이 회사는 AWS 리전에 대해 일관되게 짧은 지연 시간과 \n고가용성 연결이 필요합니다. 회사는 비용을 최소화해야 하며 기본 연결이 실패할 경우 더 \n느린 트래픽을 기꺼이 받아들입니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. 기본 Direct Connect \n연결이 실패하는 경우 백업으로 VPN 연결을 프로비저닝합니다.",
      "개인 연결을 위해 지역에 VPN 터널 연결을 프로비저닝합니다. 기본 VPN 연결이 실패할 \n경우 개인 연결 및 백업으로 두 번째 VPN 터널을 프로비저닝합니다.",
      "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. 기본 Direct Connect \n연결이 \n실패하는 \n경우 \n백업과 \n동일한 \n지역에 \n두 \n번째 \nDirect \nConnect \n연결을 \n프로비저닝합니다.",
      "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. AWS CLI 에서 Direct \nConnect 장애 조치 속성을 사용하여 기본 Direct Connect 연결이 실패할 경우 백업 연결을 \n자동으로 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85593-exam-aws-certified-solut",
    "glossary": {}
  },
  {
    "id": 69,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 비즈니스 크리티컬 웹 \n애플리케이션을 실행하고 있습니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. \n애플리케이션은 단일 가용 영역에 배포된 Amazon Aurora PostgreSQL 데이터베이스를 \n사용합니다. 회사는 다운타임과 데이터 손실을 최소화하면서 애플리케이션의 고가용성을 \n원합니다. \n최소한의 운영 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 인스턴스를 다른 AWS 리전에 배치합니다. Amazon Route 53 상태 확인을 사용하여 \n트래픽을 리디렉션합니다. Aurora PostgreSQL 교차 리전 복제를 사용합니다.",
      "여러 가용 영역을 사용하도록 Auto Scaling 그룹을 구성합니다. 데이터베이스를 다중 \nAZ 로 구성합니다. 데이터베이스에 대한 Amazon RDS 프록시 인스턴스를 구성합니다.",
      "하나의 가용 영역을 사용하도록 Auto Scaling 그룹을 구성합니다. 데이터베이스의 \n시간별 스냅샷을 생성합니다. 장애가 발생한 경우 스냅샷에서 데이터베이스를 복구합니다.",
      "여러 AWS 리전을 사용하도록 Auto Scaling 그룹을 구성합니다. 애플리케이션의 \n데이터를 Amazon S3 에 씁니다. S3 이벤트 알림을 사용하여 AWS Lambda 함수를 시작하여 \n데이터베이스에 데이터를 씁니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85594-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 70,
    "question": "회사의 HTTP 애플리케이션은 NLB(Network Load Balancer) 뒤에 있습니다. NLB 의 대상 \n그룹은 웹 서비스를 실행하는 여러 EC2 인스턴스와 함께 Amazon EC2 Auto Scaling 그룹을 \n사용하도록 구성됩니다. \n회사는 NLB\n가 애플리케이션에 대한 HTTP 오류를 감지하지 못한다는 것을 알게 \n되었습니다. 이러한 오류는 웹 서비스를 실행하는 EC2 인스턴스를 수동으로 다시 시작해야 \n합니다. 회사는 사용자 정의 스크립트나 코드를 작성하지 않고 애플리케이션의 가용성을 \n개선해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "NLB 에서 HTTP 상태 확인을 활성화하고 회사 응용 프로그램의 URL 을 제공합니다.",
      "EC2 인스턴스에 cron 작업을 추가하여 1 분에 한 번씩 로컬 애플리케이션의 로그를 \n확인합니다. HTTP 오류가 감지된 경우. 응용 프로그램이 다시 시작됩니다.",
      "NLB 를 Application Load Balancer 로 교체합니다. 회사 애플리케이션의 URL 을 제공하여 \nHTTP 상태 확인을 활성화합니다. 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 \n구성합니다.",
      "NLB 에 대한 UnhealthyHostCount 지표를 모니터링하는 Amazon Cloud Watch 경보를 \n생성합니다. 경보가 ALARM 상태일 때 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 \n구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85734-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 71,
    "question": "한 회사는 Amazon DynamoDB 를 사용하여 고객 정보를 저장하는 쇼핑 애플리케이션을 \n실행합니다. 데이터 손상의 경우 솔루션 설계자는 15 분의 RPO(복구 시점 목표)와 1 시간의 \nRTO(복구 시간 목표)를 충족하는 솔루션을 설계해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "DynamoDB 전역 테이블을 구성합니다. RPO 복구의 경우 애플리케이션이 다른 AWS \n리전을 가리키도록 합니다. \n\n=== PAGE 79 ===",
      "DynamoDB 지정 시간 복구를 구성합니다. RPO 복구의 경우 원하는 시점으로 \n복원합니다.",
      "DynamoDB 데이터를 매일 Amazon S3 Glacier 로 내보냅니다. RPO 복구의 경우 S3 \nGlacier 에서 DynamoDB 로 데이터를 가져옵니다.",
      "DynamoDB 테이블에 대한 Amazon Elastic Block Store(Amazon EBS) 스냅샷을 \n15 분마다 예약합니다. RPO 복구의 경우 EBS 스냅샷을 사용하여 DynamoDB 테이블을 \n복원합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85603-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n \nA(X) : 리전 장애 발생 시 리디렉션에는 탁월하나 데이터 손상에는 취약함. 글로벌 \n테이블에서 새로 작성된 항목은 1 초 이내에 모든 복제본 테이블에 전파되는데, 이는 \n데이터를 잘못 건드리면 1 초 이내에 모든 복제본 테이블에 해당 변경 사항이 적용되기 \n때문. \n전역 테이블에서 새로 작성된 항목은 일반적으로 1\n초 이내에 모든 복제본 테이블에 \n전파됩니다. \n\ndocs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_H\nowItWorks.html \nB(O) : DynamoDB 는 주문형 백업 기능을 제공합니다. 이를 통해 규정 준수 요구 사항에 \n대한 장기 보존 및 보관을 위해 테이블의 전체 백업을 생성할 수 있습니다. 주문형 백업을 \n생성하고 Amazon DynamoDB 테이블에 대한 특정 시점 복구를 활성화할 수 있습니다. \n지정 시간 복구는 우발적인 쓰기 또는 삭제 작업으로부터 테이블을 보호하는 데 도움이 \n됩니다. 특정 시점 복구를 사용하면 지난 35 일 동안의 특정 시점으로 테이블을 복원할 수 \n있습니다. \n\ndocs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html \nC(X) : S3 Glacier 는 콜드 스토리지로 액세스 시간이 더 김. 괜히 RTO 만 늘어남. \nD(X) : DynamoDB\n는 서버리스라 EBS 스냅샷을 찍을 수 있는지도 의문이고 애초에 \nPITR(특정 시점으로 복구)이 더 좋은 옵션임. \n \n참조 \n\ndocs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/PointInTim\neRecovery.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 72,
    "question": "회사는 동일한 AWS 리전에 있는 Amazon S3 버킷에서 사진을 자주 업로드 및 \n다운로드해야 하는 사진 처리 애플리케이션을 실행합니다. 솔루션 설계자는 데이터 전송 \n비용이 증가한다는 사실을 알게 되었고 이러한 비용을 줄이기 위한 솔루션을 구현해야 \n합니다. \n솔루션 설계자는 이 요구 사항을 어떻게 충족할 수 있습니까?",
    "options": [
      "Amazon API Gateway 를 퍼블릭 서브넷에 배포하고 이를 통해 S3 호출을 라우팅하도록 \n라우팅 테이블을 조정합니다.",
      "NAT 게이트웨이를 퍼블릭 서브넷에 배포하고 S3 버킷에 대한 액세스를 허용하는 \n엔드포인트 정책을 연결합니다.",
      "애플리케이션을 퍼블릭 서브넷에 배포하고 S3 버킷에 액세스하기 위해 인터넷 \n게이트웨이를 통해 라우팅하도록 허용합니다.",
      "S3 VPC 게이트웨이 엔드포인트를 VPC 에 배포하고 S3 버킷에 대한 액세스를 허용하는 \n엔드포인트 정책을 연결합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85604-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : VPC-온프레미스 간 통신은 이루어지나 VPC 간 통신은 이루어지지 않고 있음. \nB(X) : A 와 같은 이유로 오답. \nC(X) : A 와 같은 이유로 오답. \nD(O) : Transit Gateway\n는 동일한 리전 내에 있는 여러 VPC\n들을 연결하는 전송 \n'허브'이므로 Transit Gateway 를 거쳐 VPC 끼리 통신이 가능 \nAWS Transit Gateway 는 동일한 리전의 VPC 를 상호 연결하여 Amazon VPC 라우팅 구성을 \n한 곳에 통합하는 네트워크 전송 허브입니다. \n\ndocs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-dir\nect-connect-aws-transit-gateway.html \n \n2: \n정답은 옵션 D 입니다. S3 VPC 게이트웨이 엔드포인트를 VPC 에 배포하고 S3 버킷에 대한 \n액세스를 허용하는 엔드포인트 정책을 연결합니다. S3 VPC 게이트웨이 엔드포인트를 \n배포하면 애플리케이션이 VPC 내의 프라이빗 네트워크 연결을 통해 S3 버킷에 액세스할 \n수 있으므로 인터넷을 통한 데이터 전송이 필요하지 않습니다. 이를 통해 데이터 전송 \n비용을 줄이고 애플리케이션의 성능을 향상시킬 수 있습니다. 엔드포인트 정책을 사용하여 \n애플리케이션이 액세스할 수 있는 S3 버킷을 지정할 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "Transit Gateway": "수많은 VPC와 온프레미스 네트워크를 중앙에서 연결하는 네트워크 허브"
    }
  },
  {
    "id": 73,
    "question": "한 회사는 최근 프라이빗 서브넷의 Amazon EC2 에서 Linux 기반 애플리케이션 인스턴스를 \n시작하고 VPC 의 퍼블릭 서브넷에 있는 Amazon EC2 인스턴스에서 Linux 기반 배스천 \n호스트를 시작했습니다. 솔루션 설계자는 사내 네트워크에서 회사의 인터넷 연결을 통해 \n배스천 호스트 및 애플리케이션 서버에 연결해야 합니다. 솔루션 설계자는 모든 EC2 \n인스턴스의 보안 그룹이 해당 액세스를 허용하는지 확인해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 취해야 합니까? \n(2 개를 선택하세요.)",
    "options": [
      "배스천 호스트의 현재 보안 그룹을 애플리케이션 인스턴스의 인바운드 액세스만 \n허용하는 보안 그룹으로 교체합니다.",
      "배스천 호스트의 현재 보안 그룹을 회사의 내부 IP 범위에서만 인바운드 액세스를 \n허용하는 보안 그룹으로 교체합니다.",
      "배스천 호스트의 현재 보안 그룹을 회사의 외부 IP 범위에서만 인바운드 액세스를 \n허용하는 보안 그룹으로 교체합니다.",
      "애플리케이션 인스턴스의 현재 보안 그룹을 배스천 호스트의 개인 IP 주소에서만 \n인바운드 SSH 액세스를 허용하는 보안 그룹으로 교체합니다.",
      "애플리케이션 인스턴스의 현재 보안 그룹을 배스천 호스트의 공용 IP 주소에서만 \n인바운드 SSH 액세스를 허용하는 보안 그룹으로 교체합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85613-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n전체적인 프로세스는 사내네트워크 -> 외부 인터넷 -> Bastion Host(퍼블릭서브넷 내에 \nNAT 게이트웨이와 함께 위치) -> Application(프라이빗서브넷 내에 위치)으로 이루어짐. \nBastion Host 는 내부네트워크(여기서는 Application 이 있는 곳)에 접속할 수 있는 유일한 \n창구로, SSH 접속도 여길 통과해야만 가능함. \n일단 Bastion Host 에 오는 트래픽(인바운드 트래픽)은 외부 인터넷을 통해서 온 회사의 \nIP(즉, 외부 IP)이므로 C 가 정답. \n그 다음으로는 Bastion Host 로부터 Application 으로 오는 트래픽(인바운드 트래픽)을 \n허용해야하는데 이미 Bastion Host 에서 안쪽의 내부 네트워크와 통신하려고 프라이빗 IP 를 \n들고 온 상태임. 따라서 D 가 정답이며 최종적으로는 C,D 가 정답. \n \n내부 아이피는 온프레미스 환경 사내 안에서 쓰는 아이피를 보통 뜻하고 인터넷으로 나오는",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 74,
    "question": "솔루션 설계자는 2 계층 웹 애플리케이션을 설계하고 있습니다. 애플리케이션은 퍼블릭 \n서브넷의 Amazon EC2 에서 호스팅되는 퍼블릭 웹 티어로 구성됩니다. 데이터베이스 계층은 \n프라이빗 서브넷의 Amazon EC2 에서 실행되는 Microsoft SQL Server 로 구성됩니다. 보안은 \n회사의 최우선 과제입니다. \n이 상황에서 보안 그룹을 어떻게 구성해야 합니까? (2 개를 선택하세요.)",
    "options": [
      "0.0.0.0/0 에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 계층에 대한 보안 그룹을 \n구성합니다.",
      "0.0.0.0/0 에서 포트 443 의 아웃바운드 트래픽을 허용하도록 웹 계층에 대한 보안 \n그룹을 구성합니다.",
      "웹 계층에 대한 보안 그룹에서 포트 1433\n의 인바운드 트래픽을 허용하도록 \n데이터베이스 계층에 대한 보안 그룹을 구성합니다.",
      "데이터베이스 계층의 보안 그룹을 구성하여 포트 443 및 1433 의 아웃바운드 트래픽을 \n웹 계층의 보안 그룹으로 보냅니다.",
      "웹 계층에 대한 보안 그룹의 포트 443 및 1433 에서 인바운드 트래픽을 허용하도록 \n데이터베이스 계층에 대한 보안 그룹을 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85346-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n전체적인 구조는 EC2 인스턴스에서 실행되는 웹 애플리케이션(퍼블릭 서브넷 내에 \n위치)---->EC2 인스턴스에서 실행되는 데이터베이스(프라이빗 서브넷 내에 위치)으로 \n되어있고, 인스턴스 단위의 보안은 보안 그룹이 담당. \n보안 그룹은 기본적으로 인바운드 트래픽에 관해서는 허용만 지정할 수 있고, 허용하지 \n않은 건 기본적으로 모두 차단하기 때문에 외부 인터넷->웹 애플리케이션으로의 액세스를 \n허용하려면 0.0.0.0/0 으로부터 온 포트 443(HTTPS)를 허용해야 함. \n그 다음으로 웹 애플리케이션->데이터베이스로의 액세스를 허용하려면 웹 애플리케이션이 \n있는 웹 계층에서 오는 포트 1433(MySQL) 인바운드 트래픽을 허용하도록 보안 그룹 \n설정을 해야 함. 따라서 정답은 A,C. \n \n2:",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 75,
    "question": "한 회사에서 애플리케이션의 성능을 개선하기 위해 다계층 애플리케이션을 온프레미스에서 \nAWS 클라우드로 이동하려고 합니다. 애플리케이션은 RESTful 서비스를 통해 서로 \n통신하는 \n애플리케이션 \n계층으로 \n구성됩니다. \n한 \n계층이 \n오버로드되면 \n트랜잭션이 \n삭제됩니다. 솔루션 설계자는 이러한 문제를 해결하고 애플리케이션을 현대화하는 솔루션을 \n설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": [
      "Amazon API Gateway\n를 사용하고 애플리케이션 계층으로 AWS Lambda 함수에 \n트랜잭션을 전달합니다. Amazon Simple Queue Service(Amazon SQS)를 애플리케이션 \n서비스 간의 통신 계층으로 사용합니다.",
      "Amazon CloudWatch 지표를 사용하여 애플리케이션 성능 기록을 분석하여 성능 장애 \n동안 서버의 최대 사용률을 결정합니다. 최대 요구 사항을 충족하도록 애플리케이션 서버의 \nAmazon EC2 인스턴스 크기를 늘립니다.",
      "Amazon Simple Notification Service(Amazon SNS)를 사용하여 Auto Scaling 그룹의 \nAmazon EC2\n에서 실행되는 애플리케이션 서버 간의 메시징을 처리합니다. Amazon \nCloudWatch\n를 사용하여 SNS 대기열 길이를 모니터링하고 필요에 따라 확장 및 \n축소합니다.",
      "Amazon Simple Queue Service(Amazon SQS)를 사용하여 Auto Scaling 그룹의 Amazon \nEC2 에서 실행되는 애플리케이션 서버 간의 메시징을 처리합니다. Amazon CloudWatch 를 \n사용하여 SQS 대기열 길이를 모니터링하고 통신 오류가 감지되면 확장합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/86120-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  }
];