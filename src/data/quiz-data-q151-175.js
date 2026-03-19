export const quizData = [
  {
    "id": 151,
    "question": "회사에서 온프레미스 데이터 센터를 AWS 로 마이그레이션하려고 합니다. 회사의 규정 준수 \n요구 사항에 따라 회사는 ap-northeast-3 지역만 사용할 수 있습니다. 회사 관리자는 \nVPC 를 인터넷에 연결할 수 없습니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까? (2 개를 선택하세요.)",
    "options": [
      "AWS Control Tower 를 사용하여 데이터 상주 가드레일을 구현하여 인터넷 액세스를 \n거부하고 ap-northeast-3 을 제외한 모든 AWS 리전에 대한 액세스를 거부합니다.",
      "AWS WAF 의 규칙을 사용하여 인터넷 액세스를 방지합니다. AWS 계정 설정에서 \nap-northeast-3 을 제외한 모든 AWS 리전에 대한 액세스를 거부합니다.",
      "AWS Organizations 를 사용하여 VPC 가 인터넷에 액세스하지 못하도록 하는 서비스 제어 \n정책(SCPS)을 구성합니다. ap-northeast-3 을 제외한 모든 AWS 리전에 대한 액세스를 \n거부합니다.",
      "각 VPC 의 네트워크 ACL 에 대한 아웃바운드 규칙을 생성하여 0.0.0.0/0 의 모든 \n트래픽을 거부합니다. ap-northeast-3 이외의 AWS 리전을 사용하지 못하도록 각 사용자에 \n대한 IAM 정책을 생성합니다.",
      "AWS Config 를 사용하여 관리형 규칙을 활성화하여 인터넷 게이트웨이를 감지 및 \n경고하고 ap-northeast-3 외부에 배포된 새 리소스를 감지 및 경고합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/86475-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(O) : AWS Control Tower Guardrail 을 사용해 SCP 를 통한 AWS API 액세스를 제한하여 \n특정 AWS 리전에서의 특정 리소스 방지 가능. \n오늘부터 AWS Control Tower 를 사용하여 가드레일 이라고 하는 데이터 상주 예방 및 탐지 \n제어를 배포할 수 있습니다 . 이러한 가드레일은 서비스 제어 정책(SCP) 을 통해 AWS \nAPI 에 대한 액세스를 제한하여 원치 않는 AWS 리전에서 리소스 프로비저닝을 방지합니다. \n예를 들어 독일의 AWS 고객은 AWS Identity and Access Management(IAM) 및 AWS \nOrganizations 와 같은 글로벌 서비스를 제외하고 프랑크푸르트 이외의 지역에서 AWS \n서비스에 대한 액세스를 거부할 수 있습니다. 또한 AWS Control Tower 는 Amazon Simple",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 152,
    "question": "회사에서 3\n계층 웹 응용 프로그램을 사용하여 신입 직원에게 교육을 제공합니다. \n애플리케이션은 매일 12 시간 동안만 액세스됩니다. 회사는 Amazon RDS for MySQL DB \n인스턴스를 사용하여 정보를 저장하고 비용을 최소화하려고 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Systems Manager Session Manager 에 대한 IAM 정책을 구성합니다. 정책에 대한 \nIAM 역할을 생성합니다. 역할의 신뢰 관계를 업데이트하십시오. DB 인스턴스에 대한 자동 \n시작 및 중지를 설정합니다.",
      "DB 인스턴스가 중지될 때 사용자가 캐시의 데이터에 액세스할 수 있는 기능을 제공하는 \nRedis 용 Amazon ElastiCache 캐시 클러스터를 생성합니다. DB 인스턴스가 시작된 후 \n캐시를 무효화합니다. \n\n=== PAGE 166 ===",
      "Amazon EC2 인스턴스를 시작합니다. Amazon RDS 에 대한 액세스 권한을 부여하는 IAM \n역할을 생성합니다. 역할을 EC2 인스턴스에 연결합니다. 원하는 일정에 따라 EC2 \n인스턴스를 시작 및 중지하도록 크론 작업을 구성합니다.",
      "AWS Lambda 함수를 생성하여 DB 인스턴스를 시작 및 중지합니다. Amazon \nEventBridge(Amazon CloudWatch Events) \n예약 규칙을 생성하여 Lambda \n함수를 \n호출합니다. 규칙에 대한 이벤트 대상으로 Lambda 함수를 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/86046-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 권한에 대한 언급이 없는데 굳이 IAM 을 사용할 이유가 없음. \nB(X) : ElastiCache 는 웹 애플리케이션과 DB 간의 캐시 서비스. \nC(X) : A 와 같은 이유로 오답. \nD(O) : EC2 인스턴스를 자동으로 중지 및 시작하여 Amazon Elastic Compute \nCloud(Amazon EC2) 사용량을 줄이려고 합니다. 이를 위해 AWS Lambda 및 Amazon \nEventBridge 를 사용하려면 어떻게 해야 하나요? \n이하의 항목 참고 \n\naws.amazon.com/ko/premiumsupport/knowledge-center/start-stop-lambda-even\ntbridge/ \n \n2: \n일반적인 개발 환경에서 개발 및 테스트 데이터베이스는 대부분 하루 8 시간 동안 사용되며 \n사용하지 않을 때는 유휴 상태입니다. 그러나 데이터베이스에는 이 유휴 시간 동안 컴퓨팅 \n및 스토리지 비용이 청구됩니다. 전체 비용을 줄이기 위해 Amazon RDS 에서는 인스턴스를 \n일시적으로 중지할 수 있습니다. 인스턴스가 중지된 동안에는 스토리지 및 백업에 대한 \n요금이 부과되지만 DB 인스턴스 시간에 대한 요금은 부과되지 않습니다. 중지된 \n인스턴스는 7 일 후에 자동으로 시작됩니다. 이 게시물은 컴퓨팅 비용을 절감하기 위해 \n특정 태그로 유휴 데이터베이스를 중지 및 시작하도록 Lambda 함수를 예약할 수 있는 \nAWS Lambda 및 Amazon EventBridge 를 사용하는 솔루션을 제시합니다. 두 번째 게시물은 \nAWS Systems Manager 를 사용하여 유휴 Amazon RDS 데이터베이스의 중지 및 시작을 \n수행하는 솔루션을 제시합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 153,
    "question": "회사에서 인기 있는 노래 클립으로 만든 벨소리를 판매합니다. 벨소리가 포함된 파일은 \n\n=== PAGE 167 ===\nAmazon S3 Standard 에 저장되며 크기는 최소 128KB 입니다. 이 회사에는 수백만 개의 \n파일이 있지만 90 일보다 오래된 벨소리의 경우 다운로드가 드뭅니다. 회사는 가장 많이 \n액세스하는 파일을 사용자가 쉽게 사용할 수 있도록 유지하면서 스토리지 비용을 절약해야 \n합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하기 위해 회사는 어떤 조치를 취해야 \n합니까?",
    "options": [
      "객체의 초기 스토리지 계층에 대해 S3 Standard-Infrequent Access(S3 Standard-IA) \n스토리지를 구성합니다.",
      "파일을 S3 Intelligent-Tiering 으로 이동하고 90 일 후에 객체를 더 저렴한 스토리지 \n계층으로 이동하도록 구성합니다.",
      "객체를 관리하도록 S3 인벤토리를 구성하고 90 일 후에 객체를 S3 Standard-Infrequent \nAccess(S3 Standard-1A)로 이동합니다.",
      "90 일 후에 객체를 S3 Standard 에서 S3 Standard-Infrequent Access(S3 Standard-1A)로 \n이동하는 S3 수명 주기 정책을 구현합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/86933-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 초기에는 사용량이 많으므로 S3 Standard 가 적절. \nB(X) : 90 일 이상된 벨소리는 다운로드가 드물다고 했으므로 부적절. \nC(X) : Amazon S3 Inventory 는 Amazon S3 에서 스토리지 관리를 지원하기 위해 제공하는 \n도구 중 하나로, 이 인벤토리를 사용하여 비즈니스, 규정 준수 및 규제 요건에 대한 객체의 \n복제 및 암호화 상태를 감사하고 보고할 수 있습니다. 또한 Amazon S3 동기식 List API \n작업의 대안으로 Amazon S3 인벤토리를 사용하면 비즈니스 워크플로 및 빅 데이터 업무를 \n단순화하고 속도를 높일 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/storage-inventory.html \nD(O) : 90 일 이전에는 S3 Standard 로 빈번한 액세스 처리, 90 일 이후에는 다운로드가 \n드물지만 가장 많이 액세스하는 일부 파일은 쉽게 사용, 즉 빠르게 액세스할 수 있어야 \n하므로 액세스 소요 시간이 적은 S3 Standard-IA 사용이 적절. \n \n2: \n이 솔루션은 사용자가 가장 많이 액세스하는 파일을 쉽게 사용할 수 있도록 유지하면서 \n스토리지 비용을 절약해야 하는 요구 사항을 충족합니다. S3 수명 주기 정책은 사전 정의된 \n규칙에 따라 한 스토리지 클래스에서 다른 스토리지 클래스로 객체를 자동으로 이동할 수 \n있습니다. S3 Standard-IA 는 자주 액세스하지 않지만 필요할 때 신속하게 액세스해야 하는",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 154,
    "question": "회사는 의료 시험의 결과를 Amazon S3 리포지토리에 저장해야 합니다. 리포지토리는 일부 \n과학자가 새 파일을 추가할 수 있도록 허용해야 하고 다른 모든 사용자는 읽기 전용 \n액세스로 제한해야 합니다. 어떤 사용자도 저장소의 파일을 수정하거나 삭제할 수 없습니다. \n회사는 모든 파일을 생성일로부터 최소 1 년 동안 저장소에 보관해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "거버넌스 모드에서 1 년의 법적 보유 기간으로 S3 Object Lock 을 사용하십시오.",
      "보존 기간이 365 일인 규정 준수 모드에서 S3 Object Lock 을 사용합니다.",
      "IAM 역할을 사용하여 모든 사용자가 S3 버킷의 객체를 삭제하거나 변경하지 못하도록 \n제한합니다. S3 버킷 정책을 사용하여 IAM 역할만 허용합니다.",
      "객체가 추가될 때마다 AWS Lambda 함수를 호출하도록 S3 버킷을 구성합니다. 수정된 \n개체가 그에 따라 표시될 수 있도록 저장된 개체의 해시를 추적하는 기능을 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/86359-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nS3 객체 수정 및 삭제 방지 = S3 Object Lock. \nS3 객체 잠금을 사용하면 write once, read many(WORM) 모델을 사용하여 객체를 저장할",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 155,
    "question": "대규모 미디어 회사는 AWS 에서 웹 애플리케이션을 호스팅합니다. 이 회사는 전 세계 \n사용자가 파일에 안정적으로 액세스할 수 있도록 기밀 미디어 파일 캐싱을 시작하려고 \n합니다. 콘텐츠는 Amazon S3 버킷에 저장됩니다. 회사는 요청의 지리적 위치에 관계없이 \n콘텐츠를 신속하게 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS DataSync 를 사용하여 S3 버킷을 웹 애플리케이션에 연결합니다.",
      "AWS Global Accelerator 를 배포하여 S3 버킷을 웹 애플리케이션에 연결합니다.",
      "Amazon CloudFront 를 배포하여 S3 버킷을 CloudFront 엣지 서버에 연결합니다.",
      "Amazon Simple Queue Service(Amazon SQS)를 사용하여 S3 버킷을 웹 애플리케이션에 \n\n=== PAGE 170 ===\n연결합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/86795-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nS3 버킷에 저장 + 요청이 지리적으로 어디에서 발생했는지에 관계없이 콘텐츠를 신속하게 \n제공 = S3 + CloudFront. 답은 C. \n \n2: \nCloudFront 는 로컬 캐시를 사용하여 응답을 제공하고, AWS Global Accelerator 는 요청을 \n프록시하고 응답을 위해 항상 애플리케이션에 연결합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 156,
    "question": "회사는 다른 데이터베이스에서 가져온 배치 데이터를 생성합니다. 이 회사는 또한 네트워크 \n센서 및 애플리케이션 API 에서 라이브 스트림 데이터를 생성합니다. 회사는 비즈니스 \n분석을 위해 모든 데이터를 한 곳으로 통합해야 합니다. 회사는 수신 데이터를 처리한 다음 \n다른 Amazon S3 버킷에 데이터를 준비해야 합니다. 팀은 나중에 일회성 쿼리를 실행하고 \n데이터를 비즈니스 인텔리전스 도구로 가져와 핵심 성과 지표(KPI)를 표시합니다. \n가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개를 \n선택하세요.)",
    "options": [
      "일회성 쿼리에는 Amazon Athena 를 사용하십시오. Amazon QuickSight 를 사용하여 \nKPI 용 대시보드를 생성합니다.",
      "일회성 쿼리에 Amazon Kinesis Data Analytics 를 사용합니다. Amazon QuickSight 를 \n사용하여 KPI 용 대시보드를 생성합니다.",
      "개별 레코드를 데이터베이스에서 Amazon Redshift 클러스터로 이동하는 사용자 지정 \nAWS Lambda 함수를 생성합니다.",
      "AWS Glue 추출, 변환 및 로드(ETL) 작업을 사용하여 데이터를 JSON 형식으로 \n변환합니다. 여러 Amazon OpenSearch Service(Amazon Elasticsearch Service) 클러스터에 \n데이터를 로드합니다.",
      "AWS Lake Formation 의 청사진을 사용하여 데이터 레이크에 수집할 수 있는 데이터를 \n식별합니다. AWS Glue\n를 사용하여 소스를 크롤링하고, 데이터를 추출하고, 데이터를 \nApache Parquet 형식으로 Amazon S3 에 로드합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85770-exam-aws-certified-solut",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 157,
    "question": "회사는 Amazon Aurora PostgreSQL DB 클러스터에 데이터를 저장합니다. 회사는 모든 \n데이터를 5 년간 보관하고 5 년이 지나면 모든 데이터를 삭제해야 합니다. 회사는 또한 \n데이터베이스 내에서 수행되는 작업의 감사 로그를 무기한으로 유지해야 합니다. 현재 이 \n회사는 Aurora 용으로 자동 백업을 구성했습니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? \n(두 가지를 선택하세요.)",
    "options": [
      "DB 클러스터의 수동 스냅샷을 생성합니다.",
      "자동 백업에 대한 수명 주기 정책을 만듭니다.",
      "5 년 동안 자동 백업 보존을 구성합니다.",
      "DB 클러스터에 대한 Amazon CloudWatch Logs 내보내기를 구성합니다.",
      "AWS Backup 을 사용하여 백업을 수행하고 5 년 동안 백업을 보관합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/87629-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이전에는 특히 AWS 서비스 전체에서 백업을 조정할 때 수동 Aurora 클러스터 스냅샷에 \n대한 백업 일정을 자동화하거나 보존 정책을 적용하거나 백업 활동을 통합하기 위해 사용자 \n지정 스크립트를 생성해야 했습니다. AWS Backup 을 사용하면 스냅샷 예약 및 스냅샷 보존 \n관리 기능이 있는 완전 관리형 정책 기반 백업 솔루션을 얻을 수 있습니다. 이제 \nPostgreSQL 호환 및 MySQL 호환 Aurora 버전 모두에 대해 AWS Backup 콘솔에서 직접 \nAurora 백업을 생성, 관리 및 복원할 수 있습니다. \n시작하려면 AWS Backup 콘솔에서 Amazon Aurora 클러스터를 선택하고 온디맨드 백업을 \n수행하거나 클러스터를 백업 계획에 할당하기만 하면 됩니다.",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 158,
    "question": "솔루션 아키텍트가 다가올 음악 행사를 위해 웹사이트를 최적화하고 있습니다. 공연 영상은 \n실시간으로 스트리밍되며 주문형으로 제공된다. 이 행사는 전 세계 온라인 청중을 끌어들일 \n것으로 예상됩니다. \n실시간 및 온디맨드 스트리밍의 성능을 모두 향상시키는 서비스는 무엇입니까?",
    "options": [
      "Amazon CloudFront \n\n=== PAGE 173 ===",
      "AWS Global Accelerator",
      "Amazon Route 53",
      "Amazon S3 Transfer Acceleration"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87514-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nCloudFront 를 사용하여 모든 HTTP 오리진을 사용하여 주문형 비디오(VOD) 또는 라이브 \n스트리밍 비디오를 제공할 수 있습니다. \n클라우드에서 비디오 워크플로를 설정할 수 있는 한 가지 방법은 CloudFront 를 AWS Media \nServices 와 함께 사용하는 것입니다. \n\ndocs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/on-demand-str\neamingvideo.html",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 159,
    "question": "회사에서 Amazon API Gateway 및 AWS Lambda 를 사용하는 공개적으로 액세스 가능한 \n서버리스 \n애플리케이션을 \n실행하고 \n있습니다. \n최근 \n봇넷의 \n사기성 \n요청으로 \n인해 \n애플리케이션의 트래픽이 급증했습니다. \n승인되지 않은 사용자의 요청을 차단하기 위해 솔루션 설계자는 어떤 단계를 수행해야 \n합니까? (두 가지를 선택하세요.)",
    "options": [
      "정품 사용자에게만 공유되는 API 키로 사용량 계획을 생성합니다.",
      "사기성 IP 주소의 요청을 무시하도록 Lambda 함수 내에 논리를 통합합니다.",
      "악성 요청을 대상으로 하는 AWS WAF 규칙을 구현하고 이를 필터링하는 작업을 \n트리거합니다.",
      "기존 공개 API 를 비공개 API 로 전환합니다. DNS 레코드를 업데이트하여 사용자를 새 \nAPI 엔드포인트로 리디렉션합니다.",
      "API 에 액세스를 시도하는 각 사용자에 대해 IAM 역할을 생성합니다. 사용자는 API 호출 \n시 역할을 맡게 됩니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87516-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAPI 사용 계획을 WAF 로 보완 가능. \"\"비용을 제어하거나 API 에 대한 액세스를 차단하기",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 160,
    "question": "전자상거래 \n회사는 \nAWS \n클라우드에서 \n분석 \n애플리케이션을 \n호스팅합니다. \n이 \n애플리케이션은 매월 약 300MB\n의 데이터를 생성합니다. 데이터는 JSON 형식으로 \n저장됩니다. 회사는 데이터 백업을 위한 재해 복구 솔루션을 평가하고 있습니다. 데이터는 \n필요한 경우 밀리초 단위로 액세스할 수 있어야 하며 데이터는 30 일 동안 보관되어야 \n합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon OpenSearch Service (Amazon Elasticsearch Service)",
      "Amazon S3 Glacier",
      "Amazon S3 Standard",
      "Amazon RDS for PostgreSQL"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/87632-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : Amazon OpenSerach Service 는 분석 및 모니터링 서비스인데 이미 회사에서 분석 \n애플리케이션을 따로 사용 중이므로 데이터를 저장하는 서비스만 필요한 상황이라 필요가 \n없음. Amazon OpenSearch Service 는 AWS 클라우드에서 OpenSearch 클러스터를 손쉽게 \n배포, 운영 및 확장할 수 있도록 해주는 관리형 서비스입니다. OpenSearch 는 로그 분석, \n실시간 애플리케이션 모니터링, 클릭 스트림 분석 같은 사용 사례를 위한 완전한 오픈 소스 \n검색 및 분석 엔진입니다. \n\ndocs.aws.amazon.com/ko_kr/opensearch-service/latest/developerguide/what-is.h\ntml \nB(X) : 아무리 빨라봤자 액세스 타임이 1 분 정도 걸림. \n\ndocs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-op",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 161,
    "question": "회사에는 JSON 문서를 처리하고 그 결과를 온프레미스 SQL 데이터베이스에 출력하는 \n작은 Python 애플리케이션이 있습니다. 이 애플리케이션은 매일 수천 번 실행됩니다. \n회사는 애플리케이션을 \nAWS \n클라우드로 이동하려고 합니다. 이 회사는 확장성을 \n최대화하고 운영 오버헤드를 최소화하는 고가용성 솔루션이 필요합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 176 ===",
    "options": [
      "JSON 문서를 Amazon S3 버킷에 넣습니다. 여러 Amazon EC2 인스턴스에서 Python \n코드를 실행하여 문서를 처리합니다. 결과를 Amazon Aurora DB 클러스터에 저장합니다.",
      "JSON 문서를 Amazon S3 버킷에 넣습니다. 문서가 S3 버킷에 도착하면 이를 처리하기 \n위해 Python 코드를 실행하는 AWS Lambda 함수를 생성합니다. 결과를 Amazon Aurora DB \n클러스터에 저장합니다.",
      "JSON 문서를 Amazon Elastic Block Store(Amazon EBS) 볼륨에 넣습니다. EBS 다중 \n연결 기능을 사용하여 볼륨을 여러 Amazon EC2 인스턴스에 연결합니다. EC2 인스턴스에서 \nPython 코드를 실행하여 문서를 처리합니다. Amazon RDS DB 인스턴스에 결과를 \n저장합니다.",
      "JSON 문서를 Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지로 \n배치합니다. Amazon EC2 시작 유형으로 구성된 Amazon Elastic Container Service(Amazon \nECS) 클러스터에 Python 코드를 컨테이너로 배포합니다. 컨테이너를 사용하여 SQS \n메시지를 처리합니다. Amazon RDS DB 인스턴스에 결과를 저장합니다. \nAnswer: B \nhttps://www.examtopics.com/discussions/amazon/view/87633-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nLambda 를 사용하면 서버를 관리하고 프로비저닝할 필요가 없으므로 확장성이 보장되고 \n운영 오버헤드가 최소화됩니다. S3 는 JSON 문서를 위한 내구성 있고 가용성이 높은 \n스토리지를 제공합니다. Lambda\n는 새 문서가 S3 버킷에 추가될 때마다 자동으로 \n트리거되어 실시간 처리가 가능합니다. 결과를 Aurora DB 클러스터에 저장하면 처리된 \n데이터의 고가용성과 확장성이 보장됩니다. 이 솔루션은 서버리스 아키텍처를 활용하여 \n인프라를 관리할 필요 없이 자동 확장 및 고가용성을 허용하므로 가장 적합한 선택입니다.",
      "이 옵션을 사용하려면 EC2 인스턴스를 수동으로 관리하고 확장해야 하므로 운영 \n오버헤드와 복잡성이 높아집니다.",
      "이 접근 방식에는 여전히 EC2 인스턴스의 수동 관리 및 확장이 포함되어 운영 복잡성과 \n오버헤드가 증가합니다.",
      "이 솔루션은 ECS 클러스터를 관리하고 확장해야 하므로 운영 오버헤드와 복잡성이 \n추가됩니다. SQS 를 활용하면 시스템에 복잡성이 추가되어 Python 코드에서 메시지 소비 및 \n처리를 사용자 지정 처리해야 합니다. \n \n설명2: \nJSON 문서를 S3 버킷에 넣으면 문서가 내구성과 확장성이 뛰어난 객체 스토리지 서비스에 \n저장됩니다. AWS Lambda 를 사용하면 회사는 Python 코드를 실행하여 기본 인프라에 대해 \n걱정할 필요 없이 S3 버킷에 도착하는 문서를 처리할 수 있습니다. 또한 AWS Lambda 가 \n\n=== PAGE 177 ===\n들어오는 요청 비율에 따라 함수의 인스턴스 수를 자동으로 조정하므로 수평적 확장성이 \n가능합니다. 결과는 MySQL 및 PostgreSQL 과 호환되는 완전 관리형 고성능 데이터베이스 \n서비스인 Amazon Aurora DB 클러스터에 저장할 수 있습니다. 이는 처리 결과에 필요한 \n내구성과 확장성을 제공합니다. \nhttps://aws.amazon.com/rds/aurora/"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 162,
    "question": "회사에서 재무 위험 모델링을 위해 AWS 에서 고성능 컴퓨팅(HPC) 인프라를 사용하려고 \n합니다. 회사의 HPC 워크로드는 Linux 에서 실행됩니다. 각 HPC 워크플로는 수백 개의 \nAmazon EC2 스팟 인스턴스에서 실행되고 수명이 짧으며 궁극적으로 분석 및 향후 장기적 \n사용을 위해 영구 스토리지에 저장되는 수천 개의 출력 파일을 생성합니다. \n이 회사는 모든 EC2 인스턴스에서 데이터를 처리할 수 있도록 온프레미스 데이터를 장기 \n영구 스토리지로 복사할 수 있는 클라우드 스토리지 솔루션을 찾고 있습니다. 솔루션은 \n또한 데이터 세트와 출력 파일을 읽고 쓰기 위해 영구 스토리지와 통합된 고성능 파일 \n시스템이어야 합니다. \n이러한 요구 사항을 충족하는 AWS 서비스 조합은 무엇입니까?",
    "options": [
      "Amazon S3 와 통합된 Amazon FSx for Lustre",
      "Amazon S3 와 통합된 Windows 파일 서버용 Amazon FSx",
      "Amazon Elastic Block Store(Amazon EBS)와 통합된 Amazon S3 Glacier",
      "Amazon Elastic Block Store(Amazon EBS) 범용 SSD(gp2) 볼륨과 통합된 VPC \n엔드포인트가 있는 Amazon S3 버킷"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87634-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/fsx/lustre/ \nAmazon FSx for Lustre 는 컴퓨팅 워크로드를 위한 비용 효율적이고 확장 가능한 고성능 \n스토리지를 제공하는 완전관리형 서비스입니다. 기계 학습, 고성능 컴퓨팅(HPC), 비디오 \n렌더링, 재무 시뮬레이션과 같은 많은 워크로드는 고성능 공유 스토리지를 통해 동일한 \n데이터 세트에 액세스하는 컴퓨팅 인스턴스에 의존합니다. \n \nHPC = Amazon FSx for Lustre. 정답은 A.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 163,
    "question": "한 회사가 온프레미스에서 컨테이너화된 애플리케이션을 구축하고 애플리케이션을 AWS 로 \n이전하기로 결정했습니다. 응용 프로그램은 배포된 직후 수천 명의 사용자를 보유하게 \n됩니다. 회사는 규모에 맞게 컨테이너 배포를 관리하는 방법을 확신하지 못합니다. 회사는 \n운영 오버헤드를 최소화하는 고가용성 아키텍처에 컨테이너화된 애플리케이션을 배포해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 컨테이너 이미지를 \n저장합니다. AWS Fargate 시작 유형과 함께 Amazon Elastic Container Service(Amazon ECS) \n클러스터를 사용하여 컨테이너를 실행합니다. 대상 추적을 사용하여 수요에 따라 자동으로 \n확장합니다.",
      "컨테이너 이미지를 Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 \n저장합니다. Amazon EC2 시작 유형과 함께 Amazon Elastic Container Service(Amazon ECS) \n클러스터를 사용하여 컨테이너를 실행합니다. 대상 추적을 사용하여 수요에 따라 자동으로 \n확장합니다.",
      "Amazon EC2 인스턴스에서 실행되는 리포지토리에 컨테이너 이미지를 저장합니다. 여러 \n가용 영역에 분산된 EC2 인스턴스에서 컨테이너를 실행합니다. Amazon CloudWatch 에서 \n평균 CPU 사용률을 모니터링합니다. 필요에 따라 새 EC2 인스턴스를 시작합니다.",
      "컨테이너 이미지가 포함된 Amazon EC2 Amazon 머신 이미지(AMI)를 생성합니다. 여러 \n가용 영역의 Auto Scaling 그룹에서 EC2 인스턴스를 시작합니다. 평균 CPU 사용률 \n임계값을 초과하면 Amazon CloudWatch 경보를 사용하여 EC2 인스턴스를 확장합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/87509-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAWS Fargate 는 사용자 애플리케이션을 위한 서버리스 환경으로, 사용자는 서버 구성 및 \n관리 대신 애플리케이션 구축에 집중할 수 있습니다. 또한 Fargate 는 리소스 관리를 \n자동화하여 사용자가 수요에 따라 애플리케이션을 쉽게 확장할 수 있도록 합니다. \n \n컨테이너화된 애플리케이션 배포 = Fargate + ECS. 정답은 A.",
    "glossary": {}
  },
  {
    "id": 164,
    "question": "회사에는 처리할 페이로드가 포함된 메시지를 보내는 발신자 애플리케이션과 페이로드가 \n포함된 메시지를 수신하기 위한 처리 애플리케이션의 두 가지 애플리케이션이 있습니다. \n\n=== PAGE 179 ===\n회사는 두 애플리케이션 간의 메시지를 처리하기 위해 AWS 서비스를 구현하려고 합니다. \n발신자 애플리케이션은 매시간 약 1,000\n개의 메시지를 보낼 수 있습니다. 메시지를 \n처리하는 데 최대 2 일이 걸릴 수 있습니다. 메시지를 처리하지 못한 경우 나머지 메시지 \n처리에 영향을 주지 않도록 보관해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": [
      "Redis 데이터베이스를 실행하는 Amazon EC2 인스턴스를 설정합니다. 인스턴스를 \n사용하도록 두 애플리케이션을 모두 구성합니다. 메시지를 각각 저장, 처리 및 삭제합니다.",
      "Amazon Kinesis 데이터 스트림을 사용하여 발신자 애플리케이션에서 메시지를 \n수신합니다. 처리 애플리케이션을 Kinesis Client Library(KCL)와 통합합니다.",
      "발신자 및 프로세서 애플리케이션을 Amazon Simple Queue Service(Amazon SQS) \n대기열과 통합합니다. 처리에 실패한 메시지를 수집하도록 배달 못한 편지 대기열을 \n구성합니다.",
      "처리할 \n알림을 \n수신하려면 \n처리 \n애플리케이션을 \nAmazon \nSimple \nNotification \nService(Amazon SNS) 주제에 구독합니다. 발신자 애플리케이션을 통합하여 SNS 주제에 \n씁니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/87523-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n메시지 처리에 실패하면 = SQS Dead Letter Queue. 정답은 C. \n \n2: \n발신자 및 프로세서 애플리케이션을 모두 SQS\n와 통합하면 처리를 위해 발신자에서 \n프로세서 애플리케이션으로 메시지를 안정적으로 보낼 수 있습니다. SQS 는 최소 1 회 \n전달을 제공하여 메시지가 전송 중에 손실되지 않도록 합니다. 메시지 처리에 실패하면 \n다른 메시지 처리에 영향을 주지 않고 대기열에 보관하고 다시 시도할 수 있습니다. DLQ 를 \n구성하면 반복적으로 처리에 실패하는 메시지를 수집할 수 있으므로 문제 해결 및 분석을 \n위해 실패한 메시지를 볼 수 있습니다. \nA 는 운영 오버헤드 및 유지 관리 요구 사항을 추가하는 Redis 를 실행하는 EC2 인스턴스의 \n관리 및 구성과 관련되므로 최적의 선택이 아닙니다. \nB\n는 Amazon Kinesis 데이터 스트림을 사용하고 메시지 처리를 위해 Kinesis Client \nLibrary 와 통합함으로써 추가적인 복잡성을 도입하므로 운영상 가장 효율적인 솔루션은 \n아닙니다. \nSNS 를 사용하는 D는 두 애플리케이션 간의 메시지 처리라는 특정 요구 사항보다 Pub/Sub \n메시징 및 방송 알림에 더 적합하므로 시나리오에 가장 적합하지 않습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 165,
    "question": "솔루션 설계자는 정적 웹 사이트를 저장하기 위해 Amazon S3 오리진과 함께 Amazon \nCloudFront 를 사용하는 솔루션을 설계해야 합니다. 회사의 보안 정책에 따라 모든 웹 \n사이트 트래픽은 AWS WAF 에서 검사해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 어떻게 준수해야 합니까?",
    "options": [
      "AWS WAF Amazon 리소스 이름(ARN)에서만 오는 요청을 수락하도록 S3 버킷 정책을 \n구성합니다.",
      "S3 오리진에서 콘텐츠를 요청하기 전에 모든 수신 요청을 AWS WAF 로 전달하도록 \nAmazon CloudFront 를 구성합니다.",
      "Amazon CloudFront IP 주소가 Amazon S3 에만 액세스하도록 허용하는 보안 그룹을 \n구성합니다. AWS WAF 를 CloudFront 에 연결합니다.",
      "원본 액세스 ID(OAI)를 사용하여 S3 버킷에 대한 액세스를 제한하도록 Amazon \nCloudFront 및 Amazon S3 를 구성합니다. 배포에서 AWS WAF 를 활성화합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/87524-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nCloudFront 로만 접속할 수 있도록 한 뒤에 WAF 로 검사해야 함. \nAmazon S3 버킷을 오리진으로 설정하여 CloudFront 를 사용하는 경우 다음과 같은 이점을 \n제공하는 방식으로 CloudFront 및 Amazon S3 를 구성할 수 있습니다.  \n◎공개적으로 액세스할 수 없도록 Amazon S3 버킷에 대한 액세스를 제한합니다.  \n◎뷰어(사용자)가 지정된 CloudFront 배포를 통해서만 버킷의 콘텐츠에 액세스할 수 있도록 \n합니다. 즉, 뷰어가 버킷에서 직접 또는 의도하지 않은 CloudFront 배포를 통해 콘텐츠에 \n액세스하는 것을 방지합니다. 이렇게 하려면 인증된 요청을 Amazon S3\n로 보내도록 \nCloudFront 를 구성하고 CloudFront 의 인증된 요청에 대한 액세스만 허용하도록 Amazon \nS3 를 구성합니다. CloudFront 는 Amazon S3 오리진에 인증된 요청을 전송하는 두 가지 \n방법으로 오리진 액세스 제어(OAC)와 오리진 액세스 ID(OAI)를 제공합니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/private-c\nontent-restricting-access-to-s3.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 166,
    "question": "글로벌 이벤트의 주최자는 일일 보고서를 정적 HTML 페이지로 온라인에 게시하려고 \n합니다. 이 페이지는 전 세계 사용자로부터 수백만 건의 조회수를 생성할 것으로 \n예상됩니다. 파일은 Amazon S3 버킷에 저장됩니다. 솔루션 설계자는 효율적이고 효과적인 \n솔루션을 설계하라는 요청을 받았습니다. \n이를 달성하기 위해 솔루션 설계자는 어떤 조치를 취해야 합니까?",
    "options": [
      "파일에 대해 미리 서명된 URL 을 생성합니다.",
      "모든 리전에 교차 리전 복제를 사용합니다.",
      "Amazon Route 53 의 지리적 근접성 기능을 사용합니다.",
      "S3 버킷과 함께 Amazon CloudFront 를 원본으로 사용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/87522-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n정적 HTML 페이지 + 전 세계 사용자의 조회 + S3 버킷에 저장된 데이터 = S3 + \nCloudFront 조합. 답은 D. \n \n2: \nAmazon CloudFront 는 HTML 페이지, 이미지 및 비디오와 같은 정적 및 동적 웹 콘텐츠의 \n전송 속도를 높이는 콘텐츠 전송 네트워크(CDN)입니다. CloudFront 를 사용하면 HTML \n페이지가 가장 가까운 엣지 로케이션에서 사용자에게 제공되므로 더 빠르게 전달되고 더",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 167,
    "question": "회사는 \nAmazon \nEC2 \n인스턴스 \n플릿에서 \n프로덕션 \n애플리케이션을 \n실행합니다. \n애플리케이션은 Amazon SQS 대기열에서 데이터를 읽고 병렬로 메시지를 처리합니다. \n메시지 볼륨은 예측할 수 없으며 종종 트래픽이 간헐적으로 발생합니다. 이 애플리케이션은 \n다운타임 없이 지속적으로 메시지를 처리해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "스팟 인스턴스를 독점적으로 사용하여 필요한 최대 용량을 처리하십시오.",
      "예약 인스턴스를 독점적으로 사용하여 필요한 최대 용량을 처리합니다.",
      "기본 용량으로 예약 인스턴스를 사용하고 추가 용량을 처리하려면 스팟 인스턴스를 \n사용합니다.",
      "기본 용량에는 예약 인스턴스를 사용하고 추가 용량을 처리하려면 온디맨드 인스턴스를 \n사용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/87510-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 가동 중지 시간이 없어야 한다고 했으므로 중지될 위험이 잇는 스팟 인스턴스는 \n적절치 않음. \nB(X) : 메시지 볼륨을 예측할 수 없고 간헐적인 트래픽이 발생하는 상황에서 예측할 수 \n있는 트래픽이 발생하는 데에 적합한 예약 인스턴스는 맞지 않음. \nC(X) : A 와 같은 이유로 오답. \nD(O) : 최소 사용량을 기준 용량으로 삼아 예약 인스턴스를 사용함으로서 비용을 절감하고, \n추가적이고 유동적인 트래픽은 온디맨드 인스턴스로 유연하게 처리 가능. \n \n2: \n중단할 수 없는 단기적이고 불규칙한 워크로드가 있는 애플리케이션에는 온디맨드 \n인스턴스를 사용하는 것이 좋습니다. \n\ndocs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.ht\nml",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 168,
    "question": "보안 팀은 팀의 모든 AWS 계정에서 특정 서비스 또는 작업에 대한 액세스를 제한하려고 \n합니다. 모든 계정은 AWS Organizations\n의 대규모 조직에 속합니다. 솔루션은 확장 \n가능해야 하며 권한을 유지할 수 있는 단일 지점이 있어야 합니다. \n이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "ACL 을 생성하여 서비스 또는 작업에 대한 액세스를 제공합니다.",
      "계정을 허용할 보안 그룹을 생성하고 사용자 그룹에 연결합니다.",
      "각 계정에서 교차 계정 역할을 생성하여 서비스 또는 작업에 대한 액세스를 거부합니다.",
      "루트 조직 단위에 서비스 제어 정책을 만들어 서비스 또는 작업에 대한 액세스를 \n거부합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/87512-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n권한을 유지할 수 있는 단일 지점이 핵심 키워드. 답은 D. \n서비스 제어 정책(SCP)은 조직에서 권한을 관리하는 데 사용할 수 있는 조직 정책 \n유형입니다. SCP\n는 조직의 모든 계정에 대해 사용 가능한 최대 권한을 중앙에서 \n제어합니다. \n\ndocs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps\n.html \n \n2: \n서비스 제어 정책(SCP)은 조직을 관리하는 데 사용할 수 있는 정책 유형 중 하나입니다. \nSCP 는 조직의 모든 계정에 대해 사용 가능한 최대 권한에 대한 중앙 제어를 제공하므로 \n계정이 조직의 액세스 제어 지침을 준수하도록 할 수 있습니다. \n\ndocs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.\nhtml",
    "glossary": {}
  },
  {
    "id": 169,
    "question": "회사는 최근 웹 공격으로 인해 공용 웹 애플리케이션의 보안에 대해 우려하고 있습니다. \n애플리케이션은 \nApplication \nLoad \nBalancer(ALB)를 \n사용합니다. \n솔루션 \n설계자는 \n애플리케이션에 대한 DDoS 공격의 위험을 줄여야 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까? \n\n=== PAGE 184 ===",
    "options": [
      "ALB 에 Amazon Inspector 에이전트를 추가합니다.",
      "공격을 방지하도록 Amazon Macie 를 구성합니다.",
      "공격을 방지하려면 AWS Shield Advanced 를 활성화하십시오.",
      "ALB 를 모니터링하도록 Amazon GuardDuty 를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/87526-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAWS Shield Standard, AWS Shield Advanced 는 애플리케이션 계층에서 DDoS 공격을 방어. \nAWS Shield\n는 AWS\n에서 실행되는 애플리케이션을 보호하는 디도스(DDoS) 보호 \n서비스입니다. AWS Shield 에는 두 계층 – Standard 및 Advanced 가 있습니다. \n\naws.amazon.com/ko/shield/?whats-new-cards.sort-by=item.additionalFields.post\nDateTime&whats-new-cards.sort-order=desc \n \n2: \nAWS Shield Advanced 는 Amazon EC2 인스턴스, Elastic Load Balancing 로드 밸런서, \nCloudFront 배포, Route 53 호스팅 영역 및 AWS Global Accelerator 표준 가속기에 대해 \n확장된 DDoS 공격 보호 기능을 제공합니다. \n\ndocs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 170,
    "question": "회사의 웹 애플리케이션이 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 \n실행되고 있습니다. 이 회사는 최근 정책을 변경하여 이제 특정 국가에서만 애플리케이션에 \n액세스하도록 요구합니다. \n이 요구 사항을 충족하는 구성은 무엇입니까?",
    "options": [
      "EC2 인스턴스에 대한 보안 그룹을 구성합니다.",
      "Application Load Balancer 에서 보안 그룹을 구성합니다.",
      "VPC 의 Application Load Balancer 에서 AWS WAF 를 구성합니다.",
      "EC2 인스턴스를 포함하는 서브넷에 대한 네트워크 ACL 을 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/87528-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 171,
    "question": "회사는 사용자에게 항목 가격을 기반으로 세금 계산을 위한 조회를 자동화하는 API 를 \n제공합니다. 회사는 연휴 기간에만 더 많은 수의 문의가 발생하여 응답 시간이 느려집니다. \n솔루션 설계자는 확장 가능하고 탄력적인 솔루션을 설계해야 합니다. \n이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": [
      "Amazon EC2 인스턴스에서 호스팅되는 API 를 제공합니다. EC2 인스턴스는 API 요청이 \n있을 때 필요한 계산을 수행합니다.",
      "항목 이름을 허용하는 Amazon API Gateway 를 사용하여 REST API 를 설계합니다. API \nGateway 는 세금 계산을 위해 항목 이름을 AWS Lambda 에 전달합니다.",
      "두 개의 Amazon EC2 인스턴스가 있는 Application Load Balancer 를 생성합니다. EC2 \n인스턴스는 받은 항목 이름에 대한 세금을 계산합니다.",
      "Amazon EC2 인스턴스에서 호스팅되는 API 와 연결되는 Amazon API Gateway 를 \n사용하여 REST API 를 설계합니다. API Gateway 는 세금 계산을 위해 항목 이름을 수락하고 \nEC2 인스턴스에 전달합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87529-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAPI 제공 + 탄력적인 = API Gateway + Lambda. 답은 B. \n \n2: \nLambda 서버리스는 EC2 api 게이트웨이 솔루션보다 확장 가능하고 탄력적입니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 172,
    "question": "=== PAGE 186 ===\n솔루션 설계자가 애플리케이션을 위한 새로운 Amazon CloudFront 배포를 생성하고 \n있습니다. 사용자가 제출한 정보 중 일부는 민감한 정보입니다. 애플리케이션은 HTTPS 를 \n사용하지만 다른 보안 계층이 필요합니다. 민감한 정보는 전체 애플리케이션 스택에서 \n보호되어야 하며 정보에 대한 액세스는 특정 애플리케이션으로 제한되어야 합니다. \n솔루션 설계자는 어떤 조치를 취해야 합니까?",
    "options": [
      "CloudFront 서명 URL 을 구성합니다.",
      "CloudFront 서명 쿠키를 구성합니다.",
      "CloudFront 필드 수준 암호화 프로필을 구성합니다.",
      "CloudFront 를 구성하고 뷰어 프로토콜 정책에 대해 오리진 프로토콜 정책 설정을 \nHTTPS 전용으로 설정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/87517-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAmazon CloudFront 를 사용하면 HTTPS 를 통해 오리진 서버에 대한 종단 간 보안 연결을 \n적용할 수 있습니다. 필드 레벨 암호화는 추가 보안 레이어를 추가하여 시스템 처리 \n전체에서 특정 데이터를 보호하고 특정 애플리케이션만 이를 볼 수 있도록 합니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/field-level\n-encryption.html \n \n2: \n\ndocs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-levelencry\nption.html \n\"Amazon CloudFront 를 사용하면 HTTPS 를 사용하여 오리진 서버에 대한 엔드 투 엔드 \n보안 연결을 적용할 수 있습니다. \n필드 수준 암호화는 특정 애플리케이션만 볼 수 있도록 시스템 처리 전반에 걸쳐 특정 \n데이터를 보호할 수 있는 추가 보안 계층을 추가합니다.\"",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 173,
    "question": "게임 회사는 AWS\n에서 브라우저 기반 애플리케이션을 호스팅합니다. 애플리케이션 \n사용자는 Amazon S3 에 저장된 많은 수의 비디오 및 이미지를 소비합니다. 이 내용은 모든 \n사용자에게 동일합니다. \n이 응용 프로그램은 인기가 높아졌으며 전 세계적으로 수백만 명의 사용자가 이러한 미디어 \n파일에 액세스합니다. 회사는 원본에 대한 부하를 줄이면서 사용자에게 파일을 제공하려고 \n\n=== PAGE 187 ===\n합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "웹 서버 앞에 AWS Global Accelerator 액셀러레이터를 배포합니다.",
      "S3 버킷 앞에 Amazon CloudFront 웹 배포를 배포합니다.",
      "웹 서버 앞에 Redis 인스턴스용 Amazon ElastiCache 를 배포합니다.",
      "웹 서버 앞에 Amazon ElastiCache for Memcached 인스턴스를 배포합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87530-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nS3 + 많은 수의 비디오와 이미지 + 수백만명 액세스가 핵심. S3 + CloudFront 로 CDN \n서비스 사용해야 부하를 줄일 수 있음. \n \n2: \nElastiCache 는 완전 관리형 인 메모리 데이터 저장소에서 정보를 신속하게 검색하여 웹 \n애플리케이션의 성능을 향상시킵니다. Memcached 및 Redis 를 활용하고 애플리케이션이 \n디스크 기반 데이터베이스에서 데이터를 읽는 데 걸리는 시간을 상당히 단축합니다. \nAmazon CloudFront 는 TCP(전송 제어 프로토콜) 프로토콜을 기반으로 하는 HTTP 및 \nWebSocket 프로토콜의 동적 콘텐츠를 지원합니다. 일반적인 사용 사례에는 동적 API 호출, \n웹 페이지 및 웹 애플리케이션뿐만 아니라 오디오 및 이미지와 같은 애플리케이션의 정적 \n파일이 포함됩니다. 또한 HTTP 를 통한 주문형 미디어 스트리밍을 지원합니다. AWS Global \nAccelerator는 UDP(사용자 데이터그램 프로토콜)와 TCP 기반 프로토콜을 모두 지원합니다. \n일반적으로 게임, IoT 및 VoIP(Voice over IP)와 같은 비HTTP 사용 사례에 사용됩니다. 고정 \nIP 주소 또는 빠른 지역 장애 조치가 필요한 HTTP 사용 사례에도 적합합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 174,
    "question": "회사에는 ALB(Application Load Balancer) 뒤의 단일 가용 영역에 있는 Amazon EC2 Auto \nScaling 그룹에서 6 개의 프런트 엔드 웹 서버를 실행하는 다중 계층 애플리케이션이 \n있습니다. 솔루션 설계자는 애플리케이션을 수정하지 않고 인프라를 고가용성으로 수정해야 \n합니다. \n고가용성을 제공하는 솔루션 설계자는 어떤 아키텍처를 선택해야 합니까?",
    "options": [
      "두 리전 각각에서 세 개의 인스턴스를 사용하는 Auto Scaling 그룹을 만듭니다.",
      "2\n개의 가용 영역 각각에서 3\n개의 인스턴스를 사용하도록 Auto Scaling 그룹을 \n수정합니다. \n\n=== PAGE 188 ===",
      "다른 리전에서 더 많은 인스턴스를 빠르게 생성하는 데 사용할 수 있는 Auto Scaling \n템플릿을 생성합니다.",
      "라운드 로빈 구성에서 Amazon EC2 인스턴스 앞의 ALB 를 변경하여 웹 계층에 대한 \n트래픽의 균형을 맞춥니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87533-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n다중 AZ 를 사용해야 하는 상황. \nA(X) : 리전 간 Auto Scaling 은 불가. \n지리적 이중화의 안전성과 안정성을 활용하려면 Auto Scaling 그룹을 리전 내의 여러 가용 \n영역에 걸쳐 확장하고 로드 밸런서를 연결하여 해당 가용 영역에 들어오는 트래픽을 \n분산하십시오. \n\ndocs.aws.amazon.com/autoscaling/ec2/userguide/as-add-availability-zone.html \n \n2: \n여러 가용 영역을 사용하도록 기존 Auto Scaling 그룹을 수정하여 이 아키텍처에 대해 매우 \n간단하게 고가용성을 활성화할 수 있습니다. ASG 는 부하를 자동으로 분산하므로 실제로 \nAZ 당 인스턴스를 지정할 필요가 없습니다. \n참조: \n\naws.amazon.com/ec2/autoscaling/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 175,
    "question": "전자 상거래 회사에는 Amazon API Gateway 및 AWS Lambda 함수를 사용하는 주문 처리 \n애플리케이션이 있습니다. 애플리케이션은 Amazon Aurora PostgreSQL 데이터베이스에 \n데이터를 저장합니다. 최근 판매 행사 중에 고객 주문이 갑자기 급증했습니다. 일부 고객은 \n시간 초과를 경험했고 애플리케이션은 해당 고객의 주문을 처리하지 않았습니다. \n솔루션 설계자는 많은 수의 열린 연결로 인해 데이터베이스에서 CPU 사용률과 메모리 \n사용률이 높다고 판단했습니다. 솔루션 설계자는 응용 프로그램을 최소한으로 변경하면서 \n시간 초과 오류를 방지해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Lambda 함수에 대해 프로비저닝된 동시성을 구성합니다. 여러 AWS 리전에서 글로벌 \n데이터베이스가 되도록 데이터베이스를 수정합니다.",
      "Amazon \nRDS \n프록시를 \n사용하여 \n데이터베이스에 \n대한 \n프록시를 \n생성합니다. \n\n=== PAGE 189 ===\n데이터베이스 엔드포인트 대신 RDS 프록시 엔드포인트를 사용하도록 Lambda 함수를 \n수정합니다.",
      "다른 AWS 리전에서 데이터베이스에 대한 읽기 전용 복제본을 생성합니다. API \nGateway\n에서 쿼리 문자열 파라미터를 사용하여 트래픽을 읽기 전용 복제본으로 \n라우팅합니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 Aurora PostgreSQL 에서 \nAmazon DynamoDB 로 데이터를 마이그레이션합니다. DynamoDB 테이블을 사용하도록 \nLambda 함수를 수정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/87533-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n연결 수가 많음 = RDS Proxy. 정답은 B. \nRDS 프록시를 사용하여 예기치 않은 데이터베이스 트래픽 급증을 처리할 수 있습니다. \n급증을 처리하지 않으면 연결 초과 구독 또는 빠른 속도의 새 연결 생성으로 인한 문제가 \n발생할 수 있습니다. RDS 프록시는 데이터베이스 연결 풀을 설정하고 이 풀에서 연결을 \n재사용합니다. 이 접근 방식은 매번 새 데이터베이스 연결을 여는 데서 오는 메모리 및 \nCPU 오버헤드 를 방지합니다. 과다 구독으로부터 데이터베이스를 보호하기 위해 생성되는 \n데이터베이스 연결 수를 제어할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/rds-proxy.html \n \n2: \n최신 \n서버리스 \n아키텍처에 \n구축된 \n애플리케이션을 \n포함하여 \n많은 \n애플리케이션은 \n데이터베이스 서버에 대해 많은 수의 열린 연결을 가질 수 있으며 빠른 속도로 \n데이터베이스 연결을 열고 닫을 수 있으므로 데이터베이스 메모리와 컴퓨팅 리소스가 \n고갈될 수 있습니다. Amazon RDS Proxy 를 사용하면 애플리케이션이 데이터베이스와 \n설정된 연결을 풀링하고 공유하여 데이터베이스 효율성과 애플리케이션 확장성을 개선할 수 \n있습니다. \n\naws.amazon.com/id/rds/proxy/",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  }
];