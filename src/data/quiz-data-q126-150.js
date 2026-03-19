export const quizData = [
  {
    "id": 126,
    "question": "A solutions architect needs to implement a solution to reduce a company's storage costs. All \nthe company's data is in the Amazon S3 Standard storage class. The company must keep all \n\n=== PAGE 139 ===\ndata for at least 25 years. Data from the most recent 2 years must be highly available and \nimmediately retrievable. \nWhich solution will meet these requirements?",
    "options": [
      "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.",
      "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 \nyears.",
      "Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in \nS3 Glacier Deep Archive.",
      "Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 \nOne Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/86731-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 가장 최근 2 년의 데이터는 즉시 검색할 수 있어야 하므로 콜드 스토리지는 부적절. \nB(O) : 정답 \nC(X) : 가장 최근 2 년의 데이터는 모두 가용성이 높아야 하고 즉시 검색할 수 있어야하는 \n데이터이므로 Intelligent-Tiering 이 따로 필요하진 않음. \nD(X) : One Zone-IA 는 고가용성 조건 불충족. \n\naws.amazon.com/ko/about-aws/whats-new/2018/04/announcing-s3-one-zone-i\nnfrequent-access-a-new-amazon-s3-storage-class/?nc1=h_ls",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 127,
    "question": "한 미디어 회사가 시스템을 AWS 클라우드로 이전할 가능성을 평가하고 있습니다. 회사는 \n비디오 처리를 위한 가능한 최대 I/O 성능을 갖춘 최소 10TB 의 스토리지, 미디어 콘텐츠를 \n저장하기 위한 300TB 의 매우 내구성 있는 스토리지, 더 이상 사용하지 않는 아카이브 \n미디어에 대한 요구 사항을 충족하기 위해 900TB 의 스토리지가 필요합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 서비스 세트를 권장해야 합니까?",
    "options": [
      "최고의 성능을 위한 Amazon EBS, 내구성 있는 데이터 스토리지를 위한 Amazon S3, \n아카이브 스토리지를 위한 Amazon S3 Glacier",
      "최고의 성능을 위한 Amazon EBS, 내구성 있는 데이터 스토리지를 위한 Amazon EFS, \n아카이브 스토리지를 위한 Amazon S3 Glacier",
      "최고의 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 데이터 스토리지를 \n위한 Amazon EFS, 아카이브 스토리지를 위한 Amazon S3 \n\n=== PAGE 140 ===",
      "최고의 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 데이터 스토리지를 \n위한 Amazon S3, 아카이브 스토리지를 위한 Amazon S3 Glacier"
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85432-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n고가용성이므로 Auto Scaling 이 들어간 C,D 둘 중 하나가 정답. EFS vs EBS 를 비교해보면 \n보통은 EFS 가 정답인 경우가 많음. 일단 EBS 는 여러 EC2 인스턴스에서 동시 접속할 수 \n없다는 단점이 치명적이기 때문. \nAmazon Elastic File System 은 전체 파일 시스템 액세스 의미 체계를 지원하는 표준 파일 \n시스템 인터페이스를 제공합니다.  \n\ndocs.aws.amazon.com/efs/latest/ug/using-fs.html \nEBS 다중 연결 볼륨에서 표준 파일 시스템 작업은 지원되는 구성이 아닙니다. \n\naws.amazon.com/ko/premiumsupport/knowledge-center/ebs-access-volumes-us\ning-multi-attach/ \n \n참조 \n\ndocs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 128,
    "question": "회사에서 AWS 클라우드의 컨테이너에서 애플리케이션을 실행하려고 합니다. 이러한 \n애플리케이션은 상태 비저장이며 기본 인프라 내에서 중단을 허용할 수 있습니다. 회사는 \n비용과 운영 오버헤드를 최소화하는 솔루션이 필요합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon EC2 Auto Scaling 그룹의 스팟 인스턴스를 사용하여 애플리케이션 컨테이너를 \n실행합니다.",
      "Amazon Elastic Kubernetes Service(Amazon EKS) 관리형 노드 그룹에서 스팟 \n인스턴스를 사용합니다.",
      "Amazon EC2 Auto Scaling 그룹의 온디맨드 인스턴스를 사용하여 애플리케이션 \n컨테이너를 실행합니다.",
      "Amazon Elastic Kubernetes Service(Amazon EKS) 관리형 노드 그룹에서 온디맨드 \n인스턴스를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85404-exam-aws-certified-solut",
    "glossary": {}
  },
  {
    "id": 129,
    "question": "회사에서 \n온프레미스에서 \n다중 \n계층 \n웹 \n애플리케이션을 \n실행하고 \n있습니다. \n웹 \n애플리케이션은 \n컨테이너화되어 \n있으며 \n사용자 \n레코드가 \n포함된 \nPostgreSQL \n데이터베이스에 연결된 여러 Linux 호스트에서 실행됩니다. 인프라 및 용량 계획을 유지 \n관리하는 \n운영 \n오버헤드가 \n회사의 \n성장을 \n제한하고 \n있습니다. \n솔루션 \n설계자는 \n애플리케이션의 인프라를 개선해야 합니다. \n솔루션 설계자는 이를 달성하기 위해 어떤 조합의 조치를 취해야 합니까? (2 개 선택)",
    "options": [
      "PostgreSQL 데이터베이스를 Amazon Aurora 로 마이그레이션합니다.",
      "Amazon EC2 인스턴스에서 호스팅할 웹 애플리케이션을 마이그레이션합니다.",
      "웹 애플리케이션 콘텐츠에 대한 Amazon CloudFront 배포를 설정합니다.",
      "웹 애플리케이션과 PostgreSQL 데이터베이스 간에 Amazon ElastiCache 를 설정합니다.",
      "Amazon Elastic Container Service(Amazon ECS)를 사용하여 AWS Fargate 에서 호스팅할 \n웹 애플리케이션을 마이그레이션합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/86658-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n컨테이너화 되어있음 = ECS(또는 EKS) + Fargate. \nA(O) : Amazon Aurora 는 PostgreSQL 과 호환되고 다중 리전 및 AZ 를 기본적으로 \n지원하므로 인프라 및 용량 계획을 유지 관리 가능. \nAmazon Aurora 는 서버리스 및 기계 학습 기반 애플리케이션의 구축을 위한 규모에 따른 \n성능 및 고가용성, 완전한 오픈 소스 MySQL 및 PostgreSQL 호환 버전과 광범위한 개발자 \n도구를 제공….Amazon Aurora\n는 데이터베이스 볼륨을 10GB 세그먼트로 자동으로 \n분리하여 여러 디스크에 분산합니다. 데이터베이스 볼륨에서 각 10GB 청크가 3 개의 AZ 에 \n6 가지 방법으로 복제됩니다. \naws.amazon.com/ko/rds/aurora/faqs/ \nB(X) : 애플리케이션이 컨테이너화 되어있다고 했으므로 Fargate 사용이 더 적절. \nC(X) : CloudFront 는 CDN 서비스로 지문의 상황엔 적합치 않음. \nD(X) : ElastiCache 는 웹 애플리케이션과 DB 간 캐시 서비스로 지문의 상황엔 적합치 않음.",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "ElastiCache": "데이터를 메모리에 저장해 응답 속도를 대폭 높이는 인메모리 캐시"
    }
  },
  {
    "id": 130,
    "question": "애플리케이션은 여러 가용 영역의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 \nApplication Load Balancer 뒤의 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. \n애플리케이션은 EC2 인스턴스의 CPU 사용률이 40% 또는 거의 40%일 때 가장 잘 \n수행됩니다. \n솔루션 설계자는 그룹의 모든 인스턴스에서 원하는 성능을 유지하기 위해 무엇을 해야 \n합니까?",
    "options": [
      "Auto Scaling 그룹을 동적으로 확장하려면 간단한 확장 정책을 사용합니다.",
      "대상 추적 정책을 사용하여 Auto Scaling 그룹을 동적으로 확장합니다.",
      "AWS Lambda 함수를 사용하여 원하는 Auto Scaling 그룹 용량을 업데이트합니다.",
      "예약된 조정 작업을 사용하여 Auto Scaling 그룹을 확장 및 축소합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/86659-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nCPU 사용률에 따라 Auto Scaling = Target Tracking Policy. 정답은 B. \n\ndocs.aws.amazon.com/autoscaling/application/userguide/application-auto-scalin\ng-targettracking.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 131,
    "question": "한 회사에서 Amazon S3 버킷을 스토리지로 사용할 파일 공유 애플리케이션을 개발 \n중입니다. 회사는 Amazon CloudFront 배포를 통해 모든 파일을 제공하려고 합니다. 회사는 \nS3 URL 에 대한 직접 탐색을 통해 파일에 액세스하는 것을 원하지 않습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "각 S3 버킷에 대한 개별 정책을 작성하여 CloudFront 액세스에 대해서만 읽기 권한을 \n부여합니다.",
      "IAM 사용자를 생성합니다. 사용자에게 S3 버킷의 객체에 대한 읽기 권한을 부여합니다. \n사용자를 CloudFront 에 할당합니다.",
      "CloudFront 배포 ID\n를 보안 주체로 할당하고 대상 S3 버킷을 Amazon 리소스 \n이름(ARN)으로 할당하는 S3 버킷 정책을 작성합니다.",
      "원본 액세스 ID(OAI)를 생성합니다. CloudFront 배포에 OAI 를 할당합니다. OAI 만 읽기 \n권한을 갖도록 S3 버킷 권한을 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85992-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/premiumsupport/knowledge-center/cloudfront-access-to-amaz\non-s3/ \n\ndocs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/private-c\nontent-restricting-access-to-s3.html#private-content-restricting-access-to-s3-overvie\nw \n \nS3 + CloudFront 를 사용하는 상황에서 S3 에 직접 액세스하는 것을 막으려면 OAC 또는 \nOAI 를 사용하면 됨. \nAmazon S3 버킷을 오리진으로 설정하여 CloudFront 를 사용하는 경우 다음과 같은 이점을 \n제공하는 방식으로 CloudFront 및 Amazon S3\n를 구성할 수 있습니다. ◎공개적으로 \n액세스할 수 없도록 Amazon S3 버킷에 대한 액세스를 제한합니다. ◎뷰어(사용자)가 \n지정된 CloudFront 배포를 통해서만 버킷의 콘텐츠에 액세스할 수 있도록 합니다. 즉, \n뷰어가 버킷에서 직접 또는 의도하지 않은 CloudFront 배포를 통해 콘텐츠에 액세스하는 \n것을 방지합니다. 이렇게 하려면 인증된 요청을 Amazon S3 로 보내도록 CloudFront 를 \n구성하고 CloudFront\n의 인증된 요청에 대한 액세스만 허용하도록 Amazon S3\n를 \n구성합니다. CloudFront 는 Amazon S3 오리진에 인증된 요청을 전송하는 두 가지 방법으로",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 132,
    "question": "회사 웹사이트는 사용자에게 다운로드 가능한 과거 실적 보고서를 제공합니다. 웹 \n사이트에는 전 세계적으로 회사의 웹 사이트 요구 사항을 충족하도록 확장할 수 있는 \n솔루션이 필요합니다. 솔루션은 비용 효율적이어야 하고 인프라 리소스 프로비저닝을 \n제한하며 가능한 가장 빠른 응답 시간을 제공해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 조합을 권장해야 합니까?",
    "options": [
      "Amazon CloudFront 및 Amazon S3",
      "AWS Lambda 및 Amazon DynamoDB",
      "Amazon EC2 Auto Scaling 이 있는 Application Load Balancer",
      "내부 Application Load Balancer 가 있는 Amazon Route 53"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/86654-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n전 세계적으로 웹 사이트 요구 충족 = CloudFront.  \n빠른 응답을 위한 Cloudfront 와 인프라를 최소화하기 위한 s3",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 133,
    "question": "회사는 \n온프레미스에서 \nOracle \n데이터베이스를 \n실행합니다. \n회사는 \nAWS\n로 \n마이그레이션하는 과정에서 데이터베이스를 사용 가능한 최신 버전으로 업그레이드하려고 \n합니다. 회사는 또한 데이터베이스에 대한 재해 복구(DR)를 설정하려고 합니다. 회사는 \n정상 운영 및 DR 설정을 위한 운영 오버헤드를 최소화해야 합니다. 회사는 또한 \n데이터베이스의 기본 운영 체제에 대한 액세스를 유지 관리해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Oracle 데이터베이스를 Amazon EC2 인스턴스로 마이그레이션합니다. 다른 AWS \n리전으로 데이터베이스 복제를 설정합니다.",
      "Oracle 데이터베이스를 Oracle 용 Amazon RDS 로 마이그레이션합니다. 교차 리전 자동 \n백업을 활성화하여 다른 AWS 리전에 스냅샷을 복제합니다. \n\n=== PAGE 145 ===",
      "Oracle 데이터베이스를 Oracle 용 Amazon RDS Custom 으로 마이그레이션합니다. 다른 \nAWS 리전의 데이터베이스에 대한 읽기 전용 복제본을 생성합니다.",
      "Oracle 데이터베이스를 Oracle용 Amazon RDS로 마이그레이션합니다. 다른 가용 영역에 \n대기 데이터베이스를 생성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85423-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n기본 운영 체제에 대한 액세스 유지 = Amazon RDS Custom. \nAmazon Relational Database Service(Amazon RDS) Custom 은 기본 OS 및 DB 환경에 \n액세스할 필요가 있는 레거시, 사용자 지정, 패키지 애플리케이션을 위한 관리형 \n데이터베이스 서비스입니다. \n\naws.amazon.com/ko/about-aws/whats-new/2021/10/amazon-rds-custom-oracle\n/ \n \n참고: \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-custom.html \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-custom-oracl\ne.html",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 134,
    "question": "한 회사에서 애플리케이션을 서버리스 솔루션으로 이동하려고 합니다. 서버리스 솔루션은 \nSL 을 사용하여 기존 및 신규 데이터를 분석해야 합니다. 회사는 데이터를 Amazon S3 \n버킷에 저장합니다. 데이터는 암호화가 필요하며 다른 AWS 리전에 복제해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "새 S3 버킷을 생성합니다. 데이터를 새 S3 버킷에 로드합니다. S3 교차 리전 \n복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. AWS KMS \n다중 리전 kay(SSE-KMS)로 서버 측 암호화를 사용합니다. Amazon Athena 를 사용하여 \n데이터를 쿼리합니다.",
      "새 S3 버킷을 생성합니다. 데이터를 새 S3 버킷에 로드합니다. S3 교차 리전 \n복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. AWS KMS \n다중 리전 키(SSE-KMS)로 서버 측 암호화를 사용합니다. Amazon RDS\n를 사용하여 \n데이터를 쿼리합니다.",
      "기존 S3 버킷에 데이터를 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 \n\n=== PAGE 146 ===\n객체를 다른 리전의 S3 버킷에 복제합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 \n측 암호화를 사용합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다.",
      "기존 S3 버킷에 데이터를 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 \n객체를 다른 리전의 S3 버킷에 복제합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 \n측 암호화를 사용합니다. Amazon RDS 를 사용하여 데이터를 쿼리합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85993-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 최소한의 운영 오버헤드라고 했으므로 SSE-KMS 보다는 SSE-S3 가 AWS 에서 다 \n관리하기 때문에 더 적합. 또한 회사는 데이터를 S3 버킷에 저장한다고 했으므로 기존 \n버킷이 있는 것이고, 이는 현재 리전에서 새 S3 버킷을 생성할 필요가 없음을 의미. 그리고 \n지문에서 운영 오버헤드에 대한 언급은 있어도 비용에 대한 언급은 없음. \nB(X) : S3 에 쿼리하는 건 RDS 가 아니라 Athena 가 더 적합. \nC(O) : KMS 필요없이 S3 측에서 암호화할 수 있음. 기존 버킷에 데이터를 로드하고 다른 \n리전으로 복제하는 것이기 때문에 다른 리전에서도 기존 및 신규 데이터를 모두 사용할 수 \n있음. \nD(X) : B 와 같은 이유로 오답.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 135,
    "question": "회사는 AWS 에서 워크로드를 실행합니다. 회사는 외부 공급자의 서비스에 연결해야 합니다. \n서비스는 공급자의 VPC 에서 호스팅됩니다. 회사 보안 팀에 따르면 연결은 비공개여야 하며 \n대상 서비스로 제한되어야 합니다. 연결은 회사의 VPC 에서만 시작되어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "회사의 VPC 와 공급자의 VPC 간에 VPC 피어링 연결을 생성합니다. 대상 서비스에 \n연결하도록 라우팅 테이블을 업데이트합니다.",
      "공급자에게 VPC\n에 가상 프라이빗 게이트웨이를 생성하도록 요청합니다. AWS \nPrivateLink 를 사용하여 대상 서비스에 연결합니다.",
      "회사의 VPUpdate 라우팅 테이블의 퍼블릭 서브넷에 NAT 게이트웨이를 생성하여 대상 \n서비스에 연결합니다.",
      "공급자에게 대상 서비스에 대한 VPC 엔드포인트를 생성하도록 요청합니다. AWS \nPrivateLink 를 사용하여 대상 서비스에 연결합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85994-exam-aws-certified-solut",
    "glossary": {
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 136,
    "question": "회사는 \n온프레미스 \nPostgreSQL \n데이터베이스를 \nAmazon \nAurora \nPostgreSQL\n로 \n마이그레이션하고 \n있습니다. \n온-프레미스 \n데이터베이스는 \n온라인 \n상태를 \n유지하고 \n마이그레이션 중에 액세스할 수 있어야 합니다. Aurora 데이터베이스는 온프레미스 \n데이터베이스와 동기화된 상태를 유지해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 취해야 하는 조치의 조합은 무엇입니까? \n(2 개를 선택하세요.)",
    "options": [
      "지속적인 복제 작업을 만듭니다.",
      "온프레미스 데이터베이스의 데이터베이스 백업을 생성합니다.",
      "AWS Database Migration Service(AWS DMS) 복제 서버를 생성합니다. \n\n=== PAGE 148 ===",
      "AWS Schema Conversion Tool(AWS SCT)을 사용하여 데이터베이스 스키마를 \n변환합니다.",
      "데이터베이스 동기화를 모니터링하는 Amazon EventBridge(Amazon CloudWatch Events) \n규칙을 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85438-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(O) : ongoing replication(진행중인 복제)은 CDC(변경 데이터 캡처)라고도 하며 소스 \n데이터 \n스토어에서 \n진행 \n중인 \n변경 \n사항을 \n복제할 \n때 \n이 \n프로세스를 \n사용. \n(\ndocs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html) \n이는 동기화된 상태를 만들어줌. \"AWS DMS 를 사용하면 일회성 마이그레이션을 수행하고 \n지속적인 변경 사항을 복제하여 소스와 대상을 동기화 상태로 유지할 수 있습니다. \n\ndocs.aws.amazon.com/dms/latest/userguide/Welcome.html \nC(O) : DMS 는 대상이 소스와 동기화된 상태를 유지하도록 지속적 복제를 지원하지만, \nSCT 는 그렇지 않습니다. AWS Database Migration Service(DMS)는 다양한 동종 및 이기종 \n데이터 복제를 지원합니다. \n\naws.amazon.com/ko/dms/faqs/?refid=bef7080f-573e-4a75-b22b-85f316173744 \n \n2: \nAWS Database Migration Service 는 Oracle 에서 Oracle 로의 동종 마이그레이션은 물론 \nOracle 또는 Microsoft SQL Server 에서 Amazon Aurora 로의 서로 다른 데이터베이스 \n플랫폼 간의 이기종 마이그레이션을 지원합니다. AWS Database Migration Service 를 \n사용하면 지원되는 소스에서 지원되는 대상으로 짧은 지연 시간으로 데이터를 지속적으로 \n복제할 수도 있습니다. 예를 들어 여러 소스에서 Amazon Simple Storage Service(Amazon \nS3)로 복제하여 가용성과 확장성이 뛰어난 데이터 레이크 솔루션을 구축할 수 있습니다. \nAmazon Redshift 로 데이터를 스트리밍하여 데이터베이스를 페타바이트 규모의 데이터 \n웨어하우스로 통합할 수도 있습니다. 지원되는 소스 및 대상 데이터베이스에 대해 자세히 \n알아보세요. \n\naws.amazon.com/dms/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 137,
    "question": "회사는 AWS Organizations 를 사용하여 각 사업부에 대한 전용 AWS 계정을 생성하여 요청 \n시 각 사업부의 계정을 독립적으로 관리합니다. 루트 이메일 수신자가 한 계정의 루트 \n\n=== PAGE 149 ===\n사용자 이메일 주소로 전송된 알림을 놓쳤습니다. 회사는 향후 모든 알림을 놓치지 않기를 \n원합니다. 향후 알림은 계정 관리자로 제한되어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS 계정 루트 사용자 이메일 주소로 전송되는 알림 이메일 메시지를 조직의 모든 \n사용자에게 전달하도록 회사 이메일 서버를 구성합니다.",
      "모든 AWS 계정 루트 사용자 이메일 주소를 알림에 응답할 수 있는 소수의 관리자에게 \n전달되는 배포 목록으로 구성합니다. AWS Organizations 콘솔에서 또는 프로그래밍 \n방식으로 AWS 계정 대체 연락처를 구성합니다.",
      "경보를 모니터링하고 해당 경보를 적절한 그룹에 전달할 책임이 있는 한 명의 \n관리자에게 모든 AWS 계정 루트 사용자 이메일 메시지를 보내도록 구성합니다.",
      "동일한 루트 사용자 이메일 주소를 사용하도록 기존의 모든 AWS 계정과 새로 생성된 \n모든 계정을 구성합니다. AWS Organizations 콘솔에서 또는 프로그래밍 방식으로 AWS \n계정 대체 연락처를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85997-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 향후 알림은 계정 관리자로 제한되어야 한다고 했으므로 오답. \nB(O) : AWS Organizations 콘솔에서 또는 AWS CLI 또는 AWS SDK 를 사용하여 프로그래밍 \n방식으로 조직 내 계정의 대체 연락처를 업데이트할 수 있습니다. 조직의 관리 계정을 \n사용하여 조직의 모든 계정에 대한 계정 설정을 보고 편집할 수 있습니다. 기본 계정 \n소유자는 루트 계정의 이메일에 대한 모든 이메일 통신을 계속 수신합니다. \n\ndocs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-\nalternate.html \nC(X) : 루트 이메일 수신자가 한 계정의 루트 사용자 이메일 주소로 전송된 알림을 \n놓쳤다고 했는데, 선택지 C 의 방식은 기존의 방식과 동일함. \nD(X) : 향후 알림은 계정 관리자로 제한되어야 한다고 했으므로 오답. \n \n참고 \n\ndocs.aws.amazon.com/ko_kr/organizations/latest/userguide/orgs_best-practices_\nmgmt-acct.html#best-practices_mgmt-acct_email-address",
    "glossary": {}
  },
  {
    "id": 138,
    "question": "회사는 AWS 에서 전자 상거래 애플리케이션을 실행합니다. 모든 새 주문은 단일 가용 \n\n=== PAGE 150 ===\n영역의 Amazon EC2 인스턴스에서 실행되는 RabbitMQ 대기열에 마사지로 게시됩니다. \n이러한 메시지는 별도의 EC2 인스턴스에서 실행되는 다른 애플리케이션에서 처리됩니다. \n이 애플리케이션은 다른 EC2 인스턴스의 PostgreSQL 데이터베이스에 세부 정보를 \n저장합니다. 모든 EC2 인스턴스는 동일한 가용 영역에 있습니다. \n회사는 최소한의 운영 오버헤드로 최고의 가용성을 제공하도록 아키텍처를 재설계해야 \n합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "대기열을 \nAmazon \nMQ\n에서 \nRabbitMQ \n인스턴스의 \n중복 \n쌍(활성/대기)으로 \n마이그레이션합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대한 다중 AZ Auto \nScaling 그룹을 생성합니다. PostgreSQL 데이터베이스를 호스팅하는 EC2 인스턴스에 대해 \n다른 다중 AZ Auto Scaling 그룹을 생성합니다.",
      "대기열을 \nAmazon \nMQ\n에서 \nRabbitMQ \n인스턴스의 \n중복 \n쌍(활성/대기)으로 \n마이그레이션합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대한 다중 AZ Auto \nScaling 그룹을 생성합니다. PostgreSQL 용 Amazon RDS 의 다중 AZ 배포에서 실행하도록 \n데이터베이스를 마이그레이션합니다.",
      "RabbitMQ 대기열을 호스팅하는 EC2 인스턴스용 다중 AZ Auto Scaling 그룹을 \n생성합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling \n그룹을 생성합니다. PostgreSQL\n용 Amazon RDS\n의 다중 AZ 배포에서 실행하도록 \n데이터베이스를 마이그레이션합니다.",
      "RabbitMQ 대기열을 호스팅하는 EC2 인스턴스용 다중 AZ Auto Scaling 그룹을 \n생성합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling \n그룹을 생성합니다. PostgreSQL 데이터베이스를 호스팅하는 EC2 인스턴스에 대한 세 번째 \n다중 AZ Auto Scaling 그룹을 생성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85999-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n선택지는 활성/대기 인스턴스 쌍을 사용하는 A,B 와 대기열 호스팅 방식을 사용하는 C,D 로 \n나눠짐. \n활성/대기 방식은 활성 인스턴스가 다운되어도 대기 인스턴스가 활성 인스턴스를 대체할 수 \n있으므로 가용성이 높은 방식. 따라서 A,B 둘 중 하나가 답. \nPostgreSQL 데이터베이스를 사용하는 A 보다는 Amazon RDS for Postgre 를 사용하는 B 가 \n운영 오버헤드 절감 효과가 큼. \nAmazon RDS 를 사용하면 클라우드에서 PostgreSQL 배포를 손쉽게 설정, 운영 및 확장할 \n수 있습니다. Amazon RDS 에서는 비용 효율적이고 크기 조정 가능한 하드웨어 용량을 갖춘",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 139,
    "question": "보고 팀은 Amazon S3 버킷에서 매일 파일을 수신합니다. 보고 팀은 이 초기 S3 버킷의 \n파일을 수동으로 검토하고 Amazon QuickSight 와 함께 사용하기 위해 매일 같은 시간에 \n분석 S3 버킷으로 복사합니다. 추가 팀이 초기 S3 버킷에 더 큰 크기의 더 많은 파일을 \n보내기 시작했습니다. \n보고 팀은 파일이 초기 S3 버킷에 들어갈 때 자동으로 분석 S3 버킷을 이동하려고 합니다. \n또한 보고 팀은 AWS Lambda 함수를 사용하여 복사된 데이터에서 패턴 일치 코드를 \n실행하려고 합니다. 또한 보고 팀은 데이터 파일을 Amazon SageMaker Pipelines\n의 \n파이프라인으로 보내려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 해야 \n합니까?",
    "options": [
      "분석 S3 버킷에 파일을 복사하는 Lambda 함수를 생성합니다. 분석 S3 버킷에 대한 S3 \n이벤트 알림을 생성합니다. 이벤트 알림의 대상으로 Lambda 및 SageMaker 파이프라인을 \n구성합니다. s3:ObjectCreated:Put 을 이벤트 유형으로 구성합니다.",
      "분석 \nS3 \n버킷에 \n파일을 \n복사하는 \nLambda \n함수를 \n생성합니다. \nAmazon \nEventBridge(Amazon CloudWatch Events)에 이벤트 알림을 보내도록 분석 S3 버킷을 \n구성합니다. EventBridge(CloudWatch 이벤트)에서 ObjectCreated 규칙을 구성합니다. \n규칙의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다.",
      "S3 버킷 간에 S3 복제를 구성합니다. 분석 S3 버킷에 대한 S3 이벤트 알림을 \n생성합니다. 이벤트 알림의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다. \n\n=== PAGE 152 ===\ns3:ObjectCreated:Put 을 이벤트 유형으로 구성합니다.",
      "S3 버킷 간에 S3 복제를 구성합니다. Amazon EventBridge(Amazon CloudWatch \nEvents)에 이벤트 알림을 보내도록 분석 S3 버킷을 구성합니다. EventBridge(CloudWatch \n이벤트)에서 ObjectCreated 규칙을 구성합니다. 규칙의 대상으로 Lambda 및 SageMaker \n파이프라인을 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85872-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nS3 복제를 사용하면 S3 버킷 간에 자동으로 복제됩니다. S3 이벤트를 CloudWatch \nEvents 에서 감지하여 특정 동작을 수행할 수 있습니다. Amazon S3 복제를 사용하면 S3 \nCRR(교차 리전 복제)을 사용하여 서로 다른 AWS 리전에서, 또는 S3 SRR(동일 리전 \n복제)을 사용하여 같은 AWS 리전 내의 버킷 간에 S3 객체를 자동으로 복제하도록 Amazon \nS3 를 구성할 수 있습니다.  \naws.amazon.com/ko/s3/features/replication/ \nAmazon S3 는 버킷에서 특정 이벤트가 발생할 때마다 Amazon EventBridge 에 이벤트를 \n보낼 수 있습니다. 이벤트 유형 : Object Created \n\ndocs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/EventBridge.html) \nAmazon EventBridge 는 Amazon SageMaker 의 상태 변경 이벤트를 모니터링합니다. \nEventBridge 를 사용하면 SageMaker 를 자동화하고 교육 작업 상태 변경 또는 끝점 상태 \n변경과 같은 이벤트에 자동으로 응답할 수 있습니다. 자동으로 트리거될 수 있는 작업의 몇 \n가지 예는 다음과 같습니다. AWS Lambda 함수 호출 \n\ndocs.aws.amazon.com/sagemaker/latest/dg/automating-sagemaker-with-eventbr\nidge.html \n \n2: \n이 솔루션은 파일을 자동으로 이동하고, 복사된 데이터에서 Lambda 함수를 실행하고, \n최소한의 운영 오버헤드로 데이터 파일을 SageMaker Pipelines 로 보내는 요구 사항을 \n충족합니다. S3 복제는 파일이 도착하면 초기 S3 버킷에서 분석 S3 버킷으로 파일을 \n복사할 수 있습니다. 분석 S3 버킷은 객체가 생성될 때 Amazon EventBridge(Amazon \nCloudWatch Events)에 이벤트 알림을 보낼 수 있습니다. EventBridge 는 Lambda 및 \nSageMaker \n파이프라인을 \nObjectCreated \n규칙의 \n대상으로 \n트리거할 \n수 \n있습니다. \nLambda 는 복사된 데이터에서 패턴 일치 코드를 실행할 수 있으며 SageMaker Pipelines 는 \n데이터 파일로 파이프라인을 실행할 수 있습니다. \n \nS3 복제가 자동으로 수행할 수 있는 경우 분석 S3 버킷에 파일을 복사하는 Lambda",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 140,
    "question": "솔루션 설계자는 회사가 AWS 에서 애플리케이션을 실행하는 비용을 최적화할 수 있도록 \n도와야 합니다. 애플리케이션은 아키텍처 내 컴퓨팅을 위해 Amazon EC2 인스턴스, AWS \nFargate 및 AWS Lambda 를 사용합니다. \nEC2 인스턴스는 애플리케이션의 데이터 수집 계층을 실행합니다. EC2 사용은 산발적이고 \n예측할 수 없습니다. EC2 인스턴스에서 실행되는 워크로드는 언제든지 중단될 수 있습니다. \n애플리케이션 프런트 엔드는 Fargate 에서 실행되고 Lambda 는 API 계층을 제공합니다. \n프론트엔드 활용도와 API 계층 활용도는 내년에 예측할 수 있습니다. \n이 애플리케이션을 호스팅하는 데 가장 비용 효율적인 솔루션을 제공하는 구매 옵션 조합은 \n무엇입니까? (2 개 선택)",
    "options": [
      "데이터 수집 계층에 스팟 인스턴스 사용",
      "데이터 수집 계층에 온디맨드 인스턴스 사용",
      "프런트 엔드 및 API 계층에 대한 1 년 Compute Savings Plan 을 구매합니다.",
      "데이터 수집 계층에 대한 1 년 전체 선결제 예약 인스턴스를 구매합니다.",
      "프런트 엔드 및 API 계층을 위한 1 년 EC2 인스턴스 Savings Plan 을 구매합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/86083-exam-aws-certified-solut",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  },
  {
    "id": 141,
    "question": "한 회사는 사용자에게 글로벌 속보, 지역 경보 및 날씨 업데이트를 제공하는 웹 기반 \n포털을 운영합니다. 포털은 정적 콘텐츠와 동적 콘텐츠를 혼합하여 각 사용자에게 개인화된 \n보기를 제공합니다. 콘텐츠는 ALB(Application Load Balancer) 뒤의 Amazon EC2 \n인스턴스에서 실행되는 API 서버를 통해 HTTPS 를 통해 제공됩니다. 회사는 포털이 이 \n콘텐츠를 가능한 한 빨리 전 세계 사용자에게 제공하기를 원합니다. \n솔루션 설계자는 모든 사용자의 대기 시간을 최소화하도록 애플리케이션을 어떻게 설계해야 \n합니까?",
    "options": [
      "단일 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon CloudFront 를 사용하여 \nALB 를 오리진으로 지정하여 모든 정적 및 동적 콘텐츠를 제공합니다. \n\n=== PAGE 155 ===",
      "두 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon Route 53 지연 시간 라우팅 \n정책을 사용하여 가장 가까운 리전의 ALB 에서 모든 콘텐츠를 제공합니다.",
      "단일 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon CloudFront 를 사용하여 \n정적 콘텐츠를 제공합니다. ALB 에서 직접 동적 콘텐츠를 제공합니다.",
      "두 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon Route 53 지리적 위치 라우팅 \n정책을 사용하여 가장 가까운 리전에서 ALB 의 모든 콘텐츠를 제공합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85439-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nALB 를 오리진으로 사용할 수 있음 \n원본이 하나 이상의 Amazon EC2 인스턴스에서 호스트되는 하나 이상의 HTTP 서버(웹 \n서버)인 경우 Application Load Balancer 를 사용하여 인스턴스에 트래픽을 분산할 수 \n있습니다. Application Load Balancer 를 CloudFront 의 원본으로 사용하는 방법에 대한 \n자세한 내용은 \n\ndocs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Download\nDistS3AndCustomOrigins.html#concept_elb_origin",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 142,
    "question": "게임 회사는 고가용성 아키텍처를 설계하고 있습니다. 애플리케이션은 수정된 Linux \n커널에서 실행되며 UDP 기반 트래픽만 지원합니다. 회사는 최상의 사용자 경험을 제공하기 \n위해 프런트 엔드 계층이 필요합니다. 해당 계층은 대기 시간이 짧고 가장 가까운 엣지 \n로케이션으로 트래픽을 라우팅하고 애플리케이션 엔드포인트에 진입하기 위한 고정 IP \n주소를 제공해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "요청을 Application Load Balancer 로 전달하도록 Amazon Route 53 을 구성합니다. AWS \nApplication Auto Scaling 의 애플리케이션에 AWS Lambda 를 사용합니다.",
      "요청을 Network Load Balancer 로 전달하도록 Amazon CloudFront 를 구성합니다. AWS \nApplication Auto Scaling 그룹의 애플리케이션에 AWS Lambda 를 사용합니다.",
      "요청을 Network Load Balancer 로 전달하도록 AWS Global Accelerator 를 구성합니다. \nEC2 Auto Scaling 그룹의 애플리케이션에 Amazon EC2 인스턴스를 사용합니다.",
      "요청을 Application Load Balancer 로 전달하도록 Amazon API Gateway 를 구성합니다. \nEC2 Auto Scaling 그룹의 애플리케이션에 Amazon EC2 인스턴스를 사용합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/86667-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nTCP/UDP+엔드포인트에 입력할 수 있는 고정 IP 주소를 가져야 한다는 대목에서 Global \nAccelerator 임을 유추할 수 있음.  \n \n2: \nAWS Global Accelerator 와 Amazon CloudFront 는 AWS 글로벌 네트워크와 전 세계 엣지 \n로케이션을 사용하는 별도의 서비스입니다. CloudFront 는 캐시 가능한 콘텐츠(예: 이미지 \n및 비디오)와 동적 콘텐츠(예: API 가속 및 동적 사이트 제공) 모두의 성능을 향상시킵니다. \nGlobal Accelerator 는 하나 이상의 AWS 리전에서 실행되는 애플리케이션에 대해 에지의 \n패킷을 프록시하여 TCP 또는 UDP 를 통해 광범위한 애플리케이션의 성능을 개선합니다. \nGlobal Accelerator 는 게임(UDP), IoT(MQTT) 또는 VoIP 와 같은 비HTTP 사용 사례와 특히 \n고정 IP 주소 또는 결정론적이고 빠른 지역 장애 조치가 필요한 HTTP 사용 사례에 \n적합합니다. 두 서비스 모두 DDoS 보호를 위해 AWS Shield 와 통합됩니다.",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 143,
    "question": "회사에서 기존 온프레미스 모놀리식 애플리케이션을 AWS 로 마이그레이션하려고 합니다. \n회사는 프론트엔드 코드와 백엔드 코드를 최대한 많이 유지하려고 합니다. 그러나 회사는 \n응용 프로그램을 더 작은 응용 프로그램으로 나누기를 원합니다. 다른 팀에서 각 \n애플리케이션을 관리합니다. 회사는 운영 오버헤드를 최소화하는 확장성이 뛰어난 솔루션이 \n필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS Lambda\n에서 애플리케이션을 호스팅합니다. 애플리케이션을 Amazon API \nGateway 와 통합합니다.",
      "AWS Amplify 를 사용하여 애플리케이션을 호스팅합니다. AWS Lambda 와 통합된 Amazon \nAPI Gateway API 에 애플리케이션을 연결합니다.",
      "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Auto Scaling 그룹의 EC2 \n인스턴스를 대상으로 하여 Application Load Balancer 를 설정합니다.",
      "Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. \nAmazon ECS 를 대상으로 하여 Application Load Balancer 를 설정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/86473-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 144,
    "question": "한 회사는 최근 글로벌 전자 상거래 애플리케이션의 데이터 저장소로 Amazon Aurora 를 \n사용하기 시작했습니다. 대규모 보고서가 실행되면 개발자는 전자상거래 애플리케이션의 \n성능이 좋지 않다고 보고합니다. Amazon CloudWatch 의 지표를 검토한 후 솔루션 설계자는 \n월별 \n보고서가 \n실행될 \n때 \nReadIOPS \n및 \nCPUUtilizalion \n지표가 \n급증하고 \n있음을 \n발견했습니다. \n가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": [
      "월별 보고를 Amazon Redshift 로 마이그레이션합니다.",
      "월별 보고를 Aurora 복제본으로 마이그레이션합니다.",
      "Aurora 데이터베이스를 더 큰 인스턴스 클래스로 마이그레이션합니다.",
      "Aurora 인스턴스에서 프로비저닝된 IOPS 를 늘립니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/86781-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n\ndocs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.ht\nml \n#Aurora.Replication.Replicas \nAurora \n복제본에는 \n두 \n가지 \n주요 \n목적이 \n있습니다. \n애플리케이션에 대한 읽기 작업을 확장하기 위해 쿼리를 실행할 수 있습니다. 일반적으로 \n클러스터의 리더 엔드포인트에 연결하여 이를 수행합니다. 이렇게 하면 Aurora\n는",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 145,
    "question": "회사는 단일 Amazon EC2 온디맨드 인스턴스에서 웹 사이트 분석 애플리케이션을 \n호스팅합니다. 분석 소프트웨어는 PHP 로 작성되었으며 MySQL 데이터베이스를 사용합니다. \n분석 소프트웨어, PHP\n를 제공하는 웹 서버 및 데이터베이스 서버는 모두 EC2 \n인스턴스에서 호스팅됩니다. 응용 프로그램은 바쁜 시간 동안 성능 저하 징후를 보이고 5xx \n오류를 표시합니다. 회사는 애플리케이션을 원활하게 확장해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      "데이터베이스를 Amazon RDS for MySQL DB 인스턴스로 마이그레이션합니다. 웹 \n애플리케이션의 AMI 를 생성합니다. AMI 를 사용하여 두 번째 EC2 온디맨드 인스턴스를 \n시작합니다. Application Load Balancer 를 사용하여 각 EC2 인스턴스에 로드를 분산합니다.",
      "데이터베이스를 Amazon RDS for MySQL DB 인스턴스로 마이그레이션합니다. 웹 \n애플리케이션의 AMI 를 생성합니다. AMI 를 사용하여 두 번째 EC2 온디맨드 인스턴스를 \n시작합니다. Amazon Route 53 가중 라우팅을 사용하여 두 EC2 인스턴스에 로드를 \n분산합니다.",
      "데이터베이스를 Amazon Aurora MySQL DB 인스턴스로 마이그레이션합니다. AWS \nLambda 함수를 생성하여 EC2 인스턴스를 중지하고 인스턴스 유형을 변경합니다. CPU \n사용률이 75%를 초과할 때 Lambda 함수를 호출하는 Amazon CloudWatch 경보를 \n생성합니다.",
      "데이터베이스를 Amazon Aurora MySQL DB 인스턴스로 마이그레이션합니다. 웹 \n애플리케이션의 AMI 를 생성합니다. 시작 템플릿에 AMI 를 적용합니다. 시작 템플릿으로 \nAuto Scaling 그룹 생성 스팟 집합을 사용하도록 시작 템플릿을 구성합니다. Auto Scaling \n그룹에 Application Load Balancer 를 연결합니다. \n\n=== PAGE 159 ==="
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/86474-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : 두 번째 온디맨드 인스턴스를 생성하기만 하고 Auto Scaling 설정을 안 하므로 \n확장성이 D 에 비해 떨어짐. \nB(X) : Route 53 Weighted Routing 은 각 리소스로 라우팅되는 트래픽 양을 조절하는 기능 \n가중 라우팅을 사용하면 여러 리소스를 단일 도메인 이름(example.com) 또는 하위 도메인 \n이름(acme.example.com)과 연결하고 각 리소스로 라우팅되는 트래픽 양을 선택할 수 \n있습니다. \n\ndocs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-weighted.h\ntml \nC(X) : CloudWatch 경보는 임계값에 도달하면 자동으로 알림을 보내는 서비스. \n\"\"인스턴스 중 하나에 대한 CloudWatch 지표를 모니터링하는 CloudWatch 경보를 생성할 \n수 있습니다. 지표가 지정된 임계값에 도달하면 CloudWatch\n에서 자동으로 알림을 \n보냅니다. \n\ndocs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/using-cloudwatch-create\nalarm.html \nD(O) : 스팟인스턴스라는 점이 걸리긴 하지만 어차피 인스턴스를 중지해서는 안 된다는 \n말이 나온 것도 아니고, Auto Scaling 이 명시되어있으므로 정답에 가장 가까움. \n \n2: \n데이터베이스를 Amazon Aurora MySQL\n로 마이그레이션합니다. 이렇게 하면 DB\n가 \n자체적으로 확장됩니다. 조정할 필요 없이 자동으로 크기가 조정됩니다. 시작 템플릿을 \n사용하여 웹 앱의 AMI 를 생성합니다. 이렇게 하면 앱의 향후 인스턴스를 원활하게 생성할 \n수 있습니다. 그런 다음 Auto Scaling 그룹에 추가하면 수요에 따라 확장 및 축소되므로 \n비용을 절약할 수 있습니다. \n스팟 집합을 사용하여 인스턴스를 시작합니다. 이것은 아마존이 적합하다고 판단하는 \n시점에 종료되는 비용으로 스팟 인스턴스가 크게 할인되기 때문에 질문의 \"가장 비용 \n효율적인\" 부분을 해결합니다. 이 부분에 대해서는 약간의 이견이 있기 때문이라고 \n생각합니다. 가장 비용 효율적이지만 아마존이 사용량이 많은 기간에 해당 스팟 인스턴스를 \n종료한다면 끔찍한 선택이 될 것입니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 146,
    "question": "=== PAGE 160 ===\n회사는 Application Load Balancer 뒤의 Amazon EC2 온디맨드 인스턴스 그룹에서 \n프로덕션 환경에서 상태 비저장 웹 애플리케이션을 실행합니다. 매일 8\n시간 동안 \n애플리케이션 사용량이 많습니다. 응용 프로그램 사용량은 보통이고 밤새 안정적입니다. \n주말에는 애플리케이션 사용량이 적습니다. \n이 회사는 애플리케이션의 가용성에 영향을 주지 않으면서 EC2 비용을 최소화하려고 \n합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "전체 워크로드에 대해 스팟 인스턴스를 사용합니다.",
      "기본 사용량 수준에 대해 예약 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 \n용량에 대해 스팟 인스턴스를 사용합니다.",
      "기준 사용 수준에 대해 온디맨드 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 \n용량에 대해 스팟 인스턴스를 사용합니다.",
      "기본 사용량 수준에 대해 전용 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 \n용량에 대해 온디맨드 인스턴스를 사용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/86750-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 계속 사용량이 있고, 사용량이 적은 주말에도 꾸준히 사용량은 나오고 있는데 계속 \n작동 중인 걸 스팟인스턴스로 둘 이유가 없음. 스팟 인스턴스는 중지해도 되는 인스턴스에 \n사용되는 인스턴스 유형. 사용량이 많은 시간을 예상할 수 있는 상황에선 예약 인스턴스가 \n적절. \nB(O) : 상태 비저장 애플리케이션이라는 단서가 있으므로 추가 용량에 대해서는 스팟 \n인스턴스를 사용하여 비용 절감 가능. \nC(X) : 기본 사용량 수준은 예상할 수 있으므로 예약 인스턴스가 적절. \nD(X) : Dedicated Instance 는 온디맨드에 비해서도 비용이 많이 들어가는 인스턴스 유형임. \n해당 부분에 대해서는 아래의 링크를 참고할 것. \n\naws.amazon.com/ko/ec2/pricing/on-demand/ \n\naws.amazon.com/ko/ec2/pricing/dedicated-instances/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 147,
    "question": "회사는 중요한 애플리케이션에 대한 애플리케이션 로그 파일을 10 년 동안 보관해야 합니다. \n애플리케이션 팀은 문제 해결을 위해 지난 달의 로그에 정기적으로 액세스하지만 1 개월 \n이상 된 로그는 거의 액세스하지 않습니다. 애플리케이션은 매월 10TB 이상의 로그를 \n\n=== PAGE 161 ===\n생성합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 옵션은 무엇입니까?",
    "options": [
      "Amazon S3 에 로그를 저장합니다. AWS Backup 을 사용하여 1 개월 이상 된 로그를 S3 \nGlacier Deep Archive 로 이동합니다.",
      "Amazon S3 에 로그를 저장합니다. S3 수명 주기 정책을 사용하여 1 개월 이상 된 로그를 \nS3 Glacier Deep Archive 로 이동합니다.",
      "Amazon CloudWatch Logs 에 로그를 저장합니다. AWS Backup 을 사용하여 1 개월 이상 \n된 로그를 S3 Glacier Deep Archive 로 이동합니다.",
      "Amazon CloudWatch Logs 에 로그를 저장합니다. Amazon S3 수명 주기 정책을 사용하여 \n1 개월 이상 된 로그를 S3 Glacier Deep Archive 로 이동합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/86864-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : Life Cycle Policy 를 사용하면 되는데 굳이 AWS Backup 까지 동원할 필요가 없음. \nB(O) : 정답. 한 달 후에 로그를 보관하려면 S3 가 필요합니다. CloudWatch Logs 로는 \n그렇게 할 수 없습니다. \nC(X) : CloudWatch Logs 는 스토리지 서비스가 아님. \nD(X) : C 와 같은 이유로 오답.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 148,
    "question": "회사에는 다음 구성 요소를 포함하는 데이터 수집 워크플로가 있습니다. \n* 새로운 데이터 전송에 대한 알림을 받는 Amazon Simple Notation Service(Amazon SNS) \n주제입니다. \n* 데이터를 처리하고 저장하는 AWS Lambda 함수입니다. \n네트워크 연결 문제로 인해 수집 워크플로가 때때로 실패합니다. 임기가 발생하면 회사에서 \n수동으로 작업을 다시 실행하지 않는 한 해당 데이터가 수집되지 않습니다. \n모든 알림이 최종적으로 처리되도록 하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": [
      "여러 가용 영역에 걸쳐 배포할 Lambda 함수를 구성합니다.",
      "Lambda 함수의 구성을 수정하여 함수에 대한 CPU 및 메모리 할당을 늘립니다.",
      "재시도 횟수와 재시도 간 대기 시간을 모두 늘리도록 SNS 주제의 재시도 전략을 \n구성합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 장애 시 대상으로 구성합니다. \n대기열의 메시지를 처리하도록 Lambda 함수를 수정합니다. \n\n=== PAGE 162 ==="
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85424-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n실패한 메시지를 보관할 SQS 대기열이 필요. 정답은 D.  \n\ndocs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide\n/sqs-dead-letter-queues.html \nC 같은 경우엔 재시도 전략인데, 'When tenure occurs the corresponding data is not \ningested unless company manually reruns the job' (Tenure 가 발생하면 회사에서 수동으로 \n작업을 다시 실행하지 않는 한 해당 데이터가 수집되지 않습니다.) 라는 대목이 있므로 \nC 는 오답. Amazon SNS 가 메시지 전송을 재시도하는 방식이 전송 정책에 따라 결정됩니다. \n전송 정책이 소진되면 Amazon SNS 는 전송 재시도를 중지하고 배달 못한 편지 대기열이 \n구독에 연결되어 있지 않는 한 메시지를 삭제합니다. \n\ndocs.aws.amazon.com/ko_kr/sns/latest/dg/sns-message-delivery-retries.html \n \n참고: \n\ndocs.aws.amazon.com/ko_kr/sns/latest/dg/sns-dead-letter-queues.html",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스"
    }
  },
  {
    "id": 149,
    "question": "회사에 이벤트 데이터를 생성하는 서비스가 있습니다. 회사는 AWS 를 사용하여 이벤트 \n데이터를 수신하는 대로 처리하려고 합니다. 데이터는 처리 전반에 걸쳐 유지되어야 하는 \n특정 순서로 작성됩니다. 회사는 운영 오버헤드를 최소화하는 솔루션을 구현하려고 합니다. \n솔루션 설계자는 이를 어떻게 달성해야 합니까?",
    "options": [
      "메시지를 보관할 Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 \n생성합니다. 대기열의 메시지를 처리하도록 AWS Lambda 함수를 설정합니다.",
      "처리할 페이로드가 포함된 알림을 전달하기 위해 Amazon Simple Notification \nService(Amazon SNS) 주제를 생성합니다. AWS Lambda 함수를 구독자로 구성합니다.",
      "메시지를 보관할 Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 \n생성합니다. 대기열의 메시지를 독립적으로 처리하도록 AWS Lambda 함수를 설정합니다.",
      "처리할 페이로드가 포함된 알림을 전달하기 위해 Amazon Simple Notification \nService(Amazon SNS) 주제를 생성합니다. Amazon Simple Queue Service(Amazon SQS) \n대기열을 구독자로 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/86784-exam-aws-certified-solut",
    "glossary": {}
  },
  {
    "id": 150,
    "question": "회사는 온프레미스 서버에서 Amazon EC2 인스턴스로 애플리케이션을 마이그레이션하고 \n있습니다. 마이그레이션 설계 요구 사항의 일부로 솔루션 설계자는 인프라 메트릭 경보를 \n구현해야 합니다. CPU 사용률이 단기간에 50% 이상으로 증가하는 경우 회사는 조치를 \n취할 필요가 없습니다. 하지만 CPU 사용률이 50% 이상으로 증가하고 디스크의 읽기 \nIOPS 가 동시에 높다면 회사에서 최대한 빨리 조치를 취해야 합니다. 솔루션 설계자는 또한 \n오경보를 줄여야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "가능한 경우 Amazon CloudWatch 복합 경보를 생성합니다.",
      "Amazon CloudWatch 대시보드를 생성하여 지표를 시각화하고 문제에 신속하게 \n대응합니다.",
      "Amazon CloudWatch Synthetics 카나리아를 생성하여 애플리케이션을 모니터링하고 \n경보를 발생시킵니다.",
      "가능한 경우 여러 지표 임계값으로 단일 Amazon CloudWatch 지표 경보를 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/86034-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n자세한 내용은 아래 URL. \n\ndocs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide\n/FIFO-queues.html \nFIFO(First-In-First-Out) 대기열은 작업 및 이벤트 순서가 중요하거나 중복을 허용할 수",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  }
];