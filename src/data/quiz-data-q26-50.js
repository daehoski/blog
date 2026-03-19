export const quizData = [
  {
    "id": 26,
    "question": "회사는 AWS 클라우드 배포를 검토하여 Amazon S3 버킷에 무단 구성 변경이 없는지 \n확인해야 합니다. \n솔루션 설계자는 이 목표를 달성하기 위해 무엇을 해야 합니까?",
    "options": [
      "적절한 규칙으로 AWS Config 를 켭니다.",
      "적절한 검사를 통해 AWS Trusted Advisor 를 켭니다.",
      "적절한 평가 템플릿으로 Amazon Inspector 를 켭니다. \n\n=== PAGE 28 ===",
      "Amazon S3 서버 액세스 로깅을 켭니다. Amazon EventBridge(Amazon Cloud Watch \nEvents)를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/84940-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAWS Config 는 AWS 리소스 구성을 측정, 감사 및 평가할 수 있는 서비스입니다. Config 는 \nAWS 리소스 구성을 지속적으로 모니터링 및 기록하고, 원하는 구성을 기준으로 기록된 \n구성을 자동으로 평가해 줍니다.  \n\naws.amazon.com/ko/config/ \n \n2: \nAmazon S3 버킷에 무단 구성 변경이 없도록 하려면 솔루션 설계자가 적절한 규칙으로 \nAWS Config 를 켜야 합니다. AWS Config 는 사용자가 업계 표준 및 내부 정책을 준수하는지 \nAWS 리소스 구성을 감사하고 평가할 수 있는 서비스입니다. 리소스가 서로 어떻게 \n관련되어 있는지에 대한 정보를 포함하여 리소스 및 해당 구성에 대한 자세한 보기를 \n제공합니다. 적절한 규칙으로 AWS Config 를 켜면 사용자는 Amazon S3 버킷에 대한 무단 \n구성 변경을 식별하고 수정할 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Config": "AWS 리소스의 설정 변경 사항을 기록하고 규정을 준수하는지 확인하는 서비스"
    }
  },
  {
    "id": 27,
    "question": "회사에서 새 애플리케이션을 시작하고 Amazon CloudWatch 대시보드에 애플리케이션 \n지표를 표시합니다. 회사의 제품 관리자는 이 대시보드에 주기적으로 액세스해야 합니다. \n제품 관리자에게 AWS 계정이 없습니다. 솔루션 설계자는 최소 권한 원칙에 따라 제품 \n관리자에 대한 액세스를 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "CloudWatch 콘솔에서 대시보드를 공유합니다. 제품 관리자의 이메일 주소를 입력하고 \n공유 \n단계를 \n완료합니다. \n대시보드에 \n대한 \n공유 \n가능한 \n링크를 \n제품 \n관리자에게 \n제공하십시오.",
      "특히 제품 관리자를 위한 IAM 사용자를 생성합니다. CloudWatchReadOnlyAccess AWS \n관리형 정책을 사용자에게 연결합니다. 새 로그인 자격 증명을 제품 관리자와 공유하십시오. \n올바른 대시보드의 브라우저 URL 을 제품 관리자와 공유하십시오.",
      "회사 직원을 위한 IAM 사용자를 생성합니다. ViewOnlyAccess AWS 관리형 정책을 IAM \n사용자에게 연결합니다. 새 로그인 자격 증명을 제품 관리자와 공유하십시오. 제품 \n관리자에게 CloudWatch \n콘솔로 이동하여 대시보드 섹션에서 이름으로 대시보드를 \n\n=== PAGE 29 ===\n찾으라고 요청합니다.",
      "퍼블릭 서브넷에 배스천 서버를 배포합니다. 제품 관리자가 대시보드에 액세스해야 하는 \n경우 서버를 시작하고 RDP 자격 증명을 공유합니다. 배스천 서버에서 대시보드를 볼 수 \n있는 적절한 권한이 있는 캐시된 AWS 자격 증명으로 대시보드 URL 을 열도록 브라우저가 \n구성되어 있는지 확인합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85227-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nAWS 계정에 직접 액세스할 수 없는 사람들과 CloudWatch 대시보드를 공유할 수 있습니다. \n대시보드를 공유할 때 다음 세 가지 방법으로 대시보드를 볼 수 있는 사람을 지정할 수 \n있습니다. \n◎하나의 대시보드를 공유하고 대시보드를 볼 수 있는 사람들의 특정 이메일 주소를 \n지정합니다. 이러한 각 사용자는 대시보드를 보기 위해 입력해야 하는 고유한 암호를 \n만듭니다. \n◎링크가 있는 모든 사용자가 대시보드를 볼 수 있도록 단일 대시보드를 공개적으로 \n공유합니다. \n◎계정의 모든 CloudWatch 대시보드를 공유하고 대시보드 액세스를 위한 타사 SSO(Single \nSign-On) 공급자를 지정합니다. 이 SSO 공급자 목록의 구성원인 모든 사용자는 계정의 \n모든 대시보드에 액세스할 수 있습니다. 이를 활성화하려면 SSO 공급자를 Amazon \nCognito 와 통합합니다. SSO 공급자는 SAML(Security Assertion Markup Language)을 \n지원해야 합니다. \n\ndocs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashbo\nard-sharing.html",
    "glossary": {
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 28,
    "question": "회사에서 애플리케이션을 AWS\n로 마이그레이션하고 있습니다. 응용 프로그램은 다른 \n계정에 배포됩니다. 회사는 AWS Organizations 를 사용하여 중앙에서 계정을 관리합니다. \n회사의 보안 팀은 회사의 모든 계정에 SSO(Single Sign-On) 솔루션이 필요합니다. 회사는 \n사내 자체 관리 Microsoft Active Directory 에서 사용자 및 그룹을 계속 관리해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS SSO 콘솔에서 AWS Single Sign-On(AWS SSO)을 활성화합니다. 단방향 포리스트 \n트러스트 또는 단방향 도메인 트러스트를 생성하여 Microsoft Active Directory 용 AWS \nDirectory Service 를 사용하여 회사의 자체 관리형 Microsoft Active Directory 를 AWS \n\n=== PAGE 30 ===\nSSO 와 연결합니다.",
      "AWS SSO 콘솔에서 AWS Single Sign-On(AWS SSO)을 활성화합니다. Microsoft Active \nDirectory 용 AWS Directory Service 를 사용하여 회사의 자체 관리형 Microsoft Active \nDirectory 를 AWS SSO 와 연결하는 양방향 포리스트 트러스트를 생성합니다.",
      "AWS 디렉터리 서비스를 사용합니다. 회사의 자체 관리 Microsoft Active Directory 와 \n양방향 신뢰 관계를 만드십시오.",
      "온프레미스에 ID 공급자(IdP)를 배포합니다. AWS SSO 콘솔에서 AWS Single \nSign-On(AWS SSO)을 활성화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85231-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nAWS Organizations 로 SSO 설정하여 Active Directory 사용 가능. \nAWS IAM Identity Center(AWS SSO 의 후속 서비스)를 설정하여 Active Directory 를 통해 \nAWS 계정 및 리소스에 대한 액세스를 제공하며, 별도의 작업 역할에 따라 권한을 사용자 \n지정합니다. \naws.amazon.com/ko/organizations/features/ \nAWS Directory Service 를 사용하여 AWS Managed Microsoft AD 디렉터리에 연결 가능. \nIAM Identity Center 는 AWS Identity and Access Management(IAM)를 기반으로 구축된 \n서비스로, \n여러 \nAWS \n계정, \nAWS \n애플리케이션 \n및 \n다른 \nSAML \n사용 \n클라우드 \n애플리케이션에 대한 액세스 관리를 간소화합니다. AWS Directory Service 를 사용하여 IAM \nIdentity Center 를 온프레미스 Active Directory(AD) 또는 AWS Managed Microsoft AD \n디렉터리에 연결할 수 있습니다. \naws.amazon.com/ko/iam/identity-center/faqs/ \nA(X) : SSO, AWS 관리 콘솔에는 양방향 트러스트가 필요. \nAWS Managed Microsoft AD 는 수신, 발신 및 양방향(양방향)의 세 가지 신뢰 관계 방향을 \n모두 지원합니다. AWS Managed Microsoft AD 는 외부 및 포리스트 트러스트를 모두 \n지원합니다. Amazon Chime, Amazon Connect, Amazon QuickSight, AWS IAM Identity \nCenter(AWS Single Sign-On 의 후속 제품), Amazon WorkDocs, Amazon WorkMail, Amazon \nWorkSpaces 및 AWS Management Console 과 같은 AWS 엔터프라이즈 앱에는 양방향 \n신뢰가 필요합니다. Amazon EC2, Amazon RDS 및 Amazon FSx 는 단방향 또는 양방향 \n신뢰로 작동합니다. \n\ndocs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_setup_trust.ht\nml \nB(O) : A 와 같은 이유로 정답. \nC(X) : SSO 는 온프레미스 Active Directory 나 AWS 관리형 Microsoft AD Directory 에 연결할 \n수 있지, 온프레미스 Microsoft AD Direcotry 에 연결할 수는 없음. ▲위의 설명 참고",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 29,
    "question": "회사는 UDP 연결을 사용하는 VoIP(Voice over Internet Protocol) 서비스를 제공합니다. 이 \n서비스는 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스로 구성됩니다. 회사는 \n여러 AWS 리전에 배포하고 있습니다. \n회사는 지연 시간이 가장 짧은 리전으로 사용자를 라우팅해야 합니다. 이 회사는 또한 지역 \n간 자동 장애 조치가 필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "NLB(Network Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto \nScaling 그룹과 연결합니다. 각 리전에서 NLB 를 AWS Global Accelerator 엔드포인트로 \n사용합니다.",
      "ALB(Application Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto \nScaling 그룹과 연결합니다. 각 리전에서 ALB 를 AWS Global Accelerator 엔드포인트로 \n사용합니다.",
      "NLB(Network Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto \nScaling 그룹과 연결합니다. 각 NLB 의 별칭을 가리키는 Amazon Route 53 지연 시간 \n레코드를 생성합니다. 지연 시간 레코드를 오리진으로 사용하는 Amazon CloudFront 배포를 \n생성합니다.",
      "ALB(Application Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto \nScaling 그룹과 연결합니다. 각 ALB 의 별칭을 가리키는 Amazon Route 53 가중치 레코드를 \n생성합니다. 가중 레코드를 오리진으로 사용하는 Amazon CloudFront 배포를 배포합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85029-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nUDP 연결을 사용한다고 했으므로 NLB. 대기 시간이 가장 짧은 리전으로 라우팅 + UDP \n사용 = AWS Global Accelerator. \nAWS Global Accelerator 에서 제공하는 고정 IP 주소와 AWS 엣지 로케이션의 애니캐스트를 \n리전별 AWS 리소스 또는 엔드포인트(예: Network Load Balancer, Application Load Balancer \nEC2 인스턴스 및 탄력적 IP 주소)에 연결할 수 있습니다. IP 주소는 AWS 엣지",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 30,
    "question": "개발 팀은 성능 개선 도우미가 활성화된 MySQL DB 인스턴스용 범용 Amazon RDS 에서 \n매월 리소스 집약적 테스트를 실행합니다. 테스트는 한 달에 한 번 48 시간 동안 지속되며 \n데이터베이스를 사용하는 유일한 프로세스입니다. 팀은 DB 인스턴스의 컴퓨팅 및 메모리 \n속성을 줄이지 않고 테스트 실행 비용을 줄이려고 합니다. \n어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      "테스트가 완료되면 DB 인스턴스를 중지합니다. 필요한 경우 DB 인스턴스를 다시 \n시작합니다.",
      "DB 인스턴스와 함께 Auto Scaling 정책을 사용하여 테스트가 완료되면 자동으로 \n확장합니다.",
      "테스트가 완료되면 스냅샷을 만듭니다. DB 인스턴스를 종료하고 필요한 경우 스냅샷을 \n복원합니다.",
      "테스트가 완료되면 DB 인스턴스를 저용량 인스턴스로 수정합니다. 필요한 경우 DB \n인스턴스를 다시 수정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85030-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \n한 달에 한 번 48 시간 동안만 사용하고, 가장 비용 효율적인 방법을 사용해야하므로 \n스냅샷이 제일 저렴. \nA(X) : DB 인스턴스를 중지해도 DB 인스턴스가 돌아가는 EBS 볼륨이나 이런 건 사용하지 \n않아도 보유 중인 용량에 따라 요금이 부과됨. \nB(X) : Auto Scaling 을 사용하게 되면 사용하지 않을 때에도 인스턴스가 실행 상태가 되므로",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 31,
    "question": "AWS 에서 웹 애플리케이션을 호스팅하는 회사는 모든 Amazon EC2 인스턴스를 보장하기를 \n원합니다. Amazon RDS DB 인스턴스. Amazon Redshift 클러스터는 태그로 구성됩니다. \n회사는 이 검사를 구성하고 운영하는 노력을 최소화하기를 원합니다. \n솔루션 설계자는 이를 달성하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Config 규칙을 사용하여 적절하게 태그가 지정되지 않은 리소스를 정의하고 \n감지합니다.",
      "비용 탐색기를 사용하여 제대로 태그가 지정되지 않은 리소스를 표시합니다. 해당 \n리소스에 수동으로 태그를 지정합니다.",
      "적절한 태그 할당을 위해 모든 리소스를 확인하는 API 호출을 작성합니다. EC2 \n인스턴스에서 주기적으로 코드를 실행합니다.",
      "적절한 태그 할당을 위해 모든 리소스를 확인하는 API 호출을 작성합니다. Amazon \nCloudWatch 를 통해 AWS Lambda 함수를 예약하여 코드를 주기적으로 실행합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85198-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n사후 대응적 거버넌스는 Resource Groups Tagging API, AWS Config Rules, 사용자 지정 \n스크립트 등의 도구를 사용하여 제대로 태그가 지정되지 않은 리소스를 찾습니다. \n\ndocs.aws.amazon.com/ko_kr/general/latest/gr/aws_tagging.html \n \n2: \n모든 Amazon EC2 인스턴스, Amazon RDS DB 인스턴스 및 Amazon Redshift 클러스터가 \n태그로 구성되도록 하려면 솔루션 설계자가 AWS Config 규칙을 사용하여 적절하게 태그가 \n지정되지 않은 리소스를 정의하고 감지해야 합니다. AWS Config 규칙은 AWS Config 가 \n모범 사례 및 회사 정책을 준수하는지 AWS 리소스 구성을 평가하는 데 사용하는 사용자 \n지정 가능한 규칙 세트입니다. AWS Config 규칙을 사용하면 비준수 리소스를 식별하고 \n담당 팀에 알리는 프로세스를 자동화하므로 이 검사를 구성하고 운영하는 노력을 최소화할 \n수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Config": "AWS 리소스의 설정 변경 사항을 기록하고 규정을 준수하는지 확인하는 서비스"
    }
  },
  {
    "id": 32,
    "question": "개발 팀은 다른 팀이 액세스할 웹사이트를 호스팅해야 합니다. 웹사이트 콘텐츠는 HTML, \nCSS, 클라이언트 측 JavaScript 및 이미지로 구성됩니다. \n웹 사이트 호스팅에 가장 비용 효율적인 방법은 무엇입니까?",
    "options": [
      "웹 사이트를 컨테이너화하고 AWS Fargate 에서 호스팅합니다.",
      "Amazon S3 버킷을 생성하고 거기에서 웹 사이트를 호스팅합니다.",
      "Amazon EC2 인스턴스에 웹 서버를 배포하여 웹 사이트를 호스팅합니다.",
      "Express.js 프레임워크를 사용하는 AWS Lambda 대상으로 Application Load Balancer 를 \n구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85199-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n정적 웹 사이트에서 웹 페이지는 사전 구축된 서버에 의해 반환됩니다. HTML, CSS 또는 \nJavaScript 와 같은 간단한 언어를 사용합니다. 정적 웹 사이트에서는 서버에서(사용자에 \n따라) 콘텐츠를 처리하지 않습니다. 웹 페이지는 변경 없이 서버에 의해 반환되므로 정적 \n웹 사이트는 빠릅니다. 데이터베이스와의 상호 작용이 없습니다. \n또한 호스트가 다른 언어로 서버 측 처리를 지원할 필요가 없기 때문에 비용이 적게 듭니다. \n동적 웹 사이트에서 웹 페이지는 런타임 중에 처리되는 서버에 의해 반환됩니다. 즉, 사전 \n구축된 웹 페이지가 아니라 사용자의 요구에 따라 런타임 중에 구축됩니다. 이들은 PHP, \nNode.js, ASP.NET 및 서버에서 지원하는 더 많은 것과 같은 서버 측 스크립팅 언어를 \n사용합니다. 따라서 정적 웹 사이트보다 느리지만 업데이트 및 데이터베이스와의 상호 \n작용이 가능합니다. \n \n2: \n모두 정적 웹사이트 콘텐츠 유형에 해당. \nAmazon S3\n를 사용하여 웹 서버를 구성하거나 관리할 필요 없이 정적 웹 사이트를 \n호스팅할 수 있습니다. 다음 단계를 완료하여 웹사이트에 모든 고정 자산을 호스팅할 새 \nAmazon S3 버킷을 생성합니다. 이 자산에는 HTML, CSS, JavaScript, 이미지 파일이 \n포함됩니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 33,
    "question": "회사는 AWS 에서 온라인 마켓플레이스 웹 애플리케이션을 실행합니다. 이 애플리케이션은 \n피크 시간에 수십만 명의 사용자에게 서비스를 제공합니다. 이 회사는 수백만 건의 금융 \n거래 세부 정보를 다른 여러 내부 애플리케이션과 공유할 수 있는 확장 가능한 거의 실시간 \n솔루션이 필요합니다. 또한 지연 시간이 짧은 검색을 위해 문서 데이터베이스에 저장하기 \n전에 민감한 데이터를 제거하기 위해 트랜잭션을 처리해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "트랜잭션 데이터를 Amazon DynamoDB 에 저장합니다. 쓰기 시 모든 트랜잭션에서 \n민감한 데이터를 제거하도록 DynamoDB 에서 규칙을 설정합니다. DynamoDB 스트림을 \n사용하여 다른 애플리케이션과 트랜잭션 데이터를 공유합니다.",
      "트랜잭션 데이터를 Amazon Kinesis Data Firehose 로 스트리밍하여 Amazon DynamoDB \n및 Amazon S3 에 데이터를 저장합니다. Kinesis Data Firehose 와 AWS Lambda 통합을 \n사용하여 민감한 데이터를 제거하십시오. 다른 애플리케이션은 Amazon S3\n에 저장된 \n데이터를 사용할 수 있습니다.",
      "트랜잭션 데이터를 Amazon Kinesis Data Streams 로 스트리밍합니다. AWS Lambda \n통합을 사용하여 모든 트랜잭션에서 민감한 데이터를 제거한 다음 Amazon DynamoDB 에 \n트랜잭션 데이터를 저장합니다. 다른 애플리케이션은 Kinesis 데이터 스트림의 트랜잭션 \n데이터를 사용할 수 있습니다.",
      "일괄 처리된 트랜잭션 데이터를 Amazon S3 에 파일로 저장합니다. Amazon S3 에서 \n파일을 업데이트하기 전에 AWS Lambda\n를 사용하여 모든 파일을 처리하고 민감한 \n데이터를 제거하십시오. 그러면 Lambda 함수가 Amazon DynamoDB\n에 데이터를 \n저장합니다. 다른 애플리케이션은 Amazon S3\n에 저장된 트랜잭션 파일을 사용할 수 \n있습니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85201-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n피크 시간에 수십만 명의 사용자에게 서비스 제공 = Kinesis 사용. B,C 둘 중 하나가 답. \nB(X) : Kinesis Data Firehose 는 데이터 변환 및 전송 서비스. 데이터 수집을 하려면 Kinesis \nData Streams 가 필요. \nKinesis Data Firehose 로 데이터를 보내도록 데이터 생산자를 구성하면 지정한 대상으로 \n데이터가 자동으로 전달됩니다. 데이터를 전송하기 전에 변환하도록 Kinesis Data",
    "glossary": {
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 34,
    "question": "회사는 AWS 에서 다중 계층 애플리케이션을 호스팅합니다. 규정 준수, 거버넌스, 감사 및 \n보안을 위해 회사는 AWS 리소스의 구성 변경 사항을 추적하고 이러한 리소스에 대한 API \n호출 기록을 기록해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS CloudTrail 을 사용하여 구성 변경을 추적하고 AWS Config 를 사용하여 API 호출을 \n기록하십시오.",
      "AWS Config 를 사용하여 구성 변경을 추적하고 AWS CloudTrail 을 사용하여 API 호출을 \n기록합니다.",
      "AWS Config 를 사용하여 구성 변경을 추적하고 Amazon CloudWatch 를 사용하여 API \n호출을 기록합니다.",
      "AWS CloudTrail 을 사용하여 구성 변경을 추적하고 Amazon CloudWatch 를 사용하여 API \n호출을 기록합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85202-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n리소스 구성 사항 변경 추적 = AWS Config / 리소스 내역 기록 = CloudTrail \nAWS Config 는 AWS 리소스 인벤토리, 구성 기록, 구성 변경 알림을 제공하여 보안 및 \n거버넌스를 실현하는 완벽한 관리형 서비스입니다. \n\naws.amazon.com/ko/config/faq/ \nAWS Cloudtrail 은 사용자 활동 및 API 사용을 추적하여 감사, 보안 모니터링 및 운영 문제 \n해결을 지원합니다. CloudTrail\n은 AWS 인프라 전체에서 작업과 관련된 계정 활동을 \n로그하고 지속적으로 모니터링하고 보존하여 스토리지, 분석 및 해결 작업을 제어할 수 \n있도록 합니다. \n\naws.amazon.com/ko/cloudtrail/faqs/ \n \n2: \nAWS Config 는 회사가 AWS 리소스의 구성을 평가, 감사 및 평가할 수 있는 완전관리형 \n서비스입니다. 사용 중인 리소스에 대한 자세한 인벤토리를 제공하고 리소스 구성에 대한 \n변경 사항을 추적합니다. AWS Config 는 구성 변경을 감지하고 변경이 발생하면 회사에 \n알릴 수 있습니다. 또한 규정 준수 및 거버넌스 목적에 필수적인 변경 기록 보기를 \n제공합니다. AWS CloudTrail 은 회사의 AWS 리소스에 대한 자세한 API 호출 기록을 \n제공하는 완전 관리형 서비스입니다. API 호출을 한 사람, 호출한 시간, 호출의 영향을 받은 \n리소스를 포함하여 AWS 계정의 모든 API 활동을 기록합니다. 이 정보를 통해 회사는 AWS",
    "glossary": {
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스",
      "Config": "AWS 리소스의 설정 변경 사항을 기록하고 규정을 준수하는지 확인하는 서비스"
    }
  },
  {
    "id": 35,
    "question": "한 회사가 AWS 클라우드에서 공개 웹 애플리케이션 출시를 준비하고 있습니다. 아키텍처는 \nElastic Load Balancer(ELB) 뒤의 VPC 내 Amazon EC2 인스턴스로 구성됩니다. DNS 에는 \n타사 서비스가 사용됩니다. 회사의 솔루션 설계자는 대규모 DDoS 공격을 감지하고 \n보호하기 위한 솔루션을 권장해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "계정에서 Amazon GuardDuty 를 활성화합니다.",
      "EC2 인스턴스에서 Amazon Inspector 를 활성화합니다.",
      "AWS Shield 를 활성화하고 여기에 Amazon Route 53 을 할당합니다.",
      "AWS Shield Advanced 를 활성화하고 ELB 를 할당합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85203-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nA(X) : GuardDuty 는 계정 보호 서비스. \nAmazon GuardDuty 는 AWS 계정 및 워크로드에서 악의적 활동을 모니터링하고 상세한 \n보안 결과를 제공하여 가시성 및 해결을 촉진하는 위협 탐지 서비스입니다. \n\naws.amazon.com/ko/guardduty/ \nB(X) : Amazon Inspector 는 취약점 스캔 서비스. \nAmazon Inspector 는 지속적으로 스캔하는 취약성 관리 서비스입니다. \n\ndocs.aws.amazon.com/ko_kr/inspector/latest/user/what-is-inspector.html \nC(X) : 대규모 DDoS 방어는 AWS Shield Advanced 가 더 적합. \nD(O) : AWS Shield Advanced 는 정교한 대규모 DDoS 공격에 대한 추가 보호 및 완화, \n실시간에 가까운 공격에 대한 가시성, 웹 애플리케이션 방화벽 AWS WAF 와의 통합을 \n제공합니다. DDoS 관련 급증 시 Amazon Elastic Compute Cloud(EC2), Elastic Load \nBalancing(ELB), Amazon CloudFront, AWS Global Accelerator 및 Amazon Route 53 요금 \n보호를 제공합니다. \n\naws.amazon.com/ko/shield/?whats-new-cards.sort-by=item.additionalFields.post\nDateTime&whats-new-cards.sort-order=desc",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 36,
    "question": "회사는 AWS 클라우드에서 애플리케이션을 구축하고 있습니다. 애플리케이션은 두 AWS \n리전의 Amazon S3 버킷에 데이터를 저장합니다. 회사는 AWS Key Management \nService(AWS KMS) 고객 관리형 키를 사용하여 S3 버킷에 저장된 모든 데이터를 \n암호화해야 합니다. 두 S3 버킷의 데이터는 동일한 KMS 키로 암호화 및 복호화해야 \n합니다. 데이터와 키는 두 지역 각각에 저장되어야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "각 리전에서 S3 버킷을 생성합니다. Amazon S3 관리형 암호화 키(SSE-S3)와 함께 서버 \n측 암호화를 사용하도록 S3 버킷을 구성합니다. S3 버킷 간의 복제를 구성합니다.",
      "고객 관리형 다중 지역 KMS 키를 생성합니다. 각 리전에서 S3 버킷을 생성합니다. S3 \n버킷 간의 복제를 구성합니다. 클라이언트 측 암호화와 함께 KMS 키를 사용하도록 \n애플리케이션을 구성합니다.",
      "각 리전에서 고객 관리형 KMS 키와 S3 버킷을 생성합니다. Amazon S3 관리형 암호화 \n키(SSE-S3)와 함께 서버 측 암호화를 사용하도록 S3 버킷을 구성합니다. S3 버킷 간의 \n복제를 구성합니다.",
      "각 리전에서 고객 관리형 KMS 키와 S3 버킷을 생성합니다. AWS KMS 키(SSE-KMS)로 \n서버 측 암호화를 사용하도록 S3 버킷을 구성합니다. S3 버킷 간의 복제를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/84747-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n\ndocs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.ht\nml \n대부분의 사용자는 FIPS 140-2 인증 암호화 모듈로 보호되는 기본 AWS KMS 키 스토어가 \n보안 요구 사항을 충족합니다. 추가 유지 관리 책임 계층이나 추가 서비스에 대한 종속성을 \n추가할 필요가 없습니다. 그러나 조직에 다음과 같은 요구 사항이 있는 경우 사용자 지정 \n키 스토어 생성을 고려할 수 있습니다. 키 자료는 공유 환경에 저장할 수 없습니다. 키 \n자료는 독립적인 보조 감사 경로를 따라야 합니다. 키 자료를 생성하고 저장하는 HSM 은 \nFIPS 140-2 레벨 3 에서 인증을 받아야 합니다. \n\ndocs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.ht\nml \n\ndocs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.ht\nml \n \n2:",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 37,
    "question": "한 회사는 최근 AWS 계정의 Amazon EC2 인스턴스에서 다양한 새로운 워크로드를 \n출시했습니다. 회사는 인스턴스에 원격으로 안전하게 액세스하고 관리하는 전략을 수립해야 \n합니다. 회사는 기본 AWS 서비스와 함께 작동하고 AWS Well-Architected 프레임워크를 \n따르는 반복 가능한 프로세스를 구현해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 직렬 콘솔을 사용하여 관리를 위해 각 인스턴스의 터미널 인터페이스에 직접 \n액세스합니다.",
      "각 기존 인스턴스와 새 인스턴스에 적절한 IAM 역할을 연결합니다. AWS Systems \nManager Session Manager 를 사용하여 원격 SSH 세션을 설정합니다.",
      "관리 SSH 키 쌍을 만듭니다. 공개 키를 각 EC2 인스턴스에 로드합니다. 퍼블릭 \n서브넷에 배스천 호스트를 배포하여 각 인스턴스의 관리를 위한 터널을 제공합니다.",
      "AWS Site-to-Site VPN 연결을 설정합니다. 관리자에게 로컬 온프레미스 머신을 사용하여 \nVPN 터널에서 SSH 키를 사용하여 인스턴스에 직접 연결하도록 지시합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85037-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA(X) : 물리적으로 케이블 갖다 꽂는 것이기 때문에 원격 접속이 아님. \nB(O) : 세션 관리자는 사용자 인스턴스에 SSH 키 또는 인증서를 유지하거나 인바운드",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 38,
    "question": "회사는 Amazon S3 에서 정적 웹 사이트를 호스팅하고 DNS 에 Amazon Route 53 을 \n사용하고 있습니다. 웹 사이트는 전 세계적으로 수요가 증가하고 있습니다. 회사는 웹 \n사이트에 액세스하는 사용자의 대기 시간을 줄여야 합니다. \n어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      "웹 사이트가 포함된 S3 버킷을 모든 AWS 리전에 복제합니다. Route 53 지리적 위치 \n라우팅 항목을 추가합니다.",
      "AWS Global Accelerator 에서 액셀러레이터를 프로비저닝합니다. 제공된 IP 주소를 S3 \n버킷과 연결합니다. 액셀러레이터의 IP 주소를 가리키도록 Route 53 항목을 편집합니다.",
      "S3 버킷 앞에 Amazon CloudFront 배포를 추가합니다. CloudFront 배포를 가리키도록 \nRoute 53 항목을 편집합니다.",
      "버킷에서 S3 Transfer Acceleration 을 활성화합니다. 새 엔드포인트를 가리키도록 Route \n53 항목을 편집합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85238-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nA(X) : S3 버킷을 각 리전마다 복제하면 콘텐츠가 업로드될 때마다 각 리전의 버킷에 \n복제해야하므로 낭비임. CloudFront 를 사용하는 것이 훨씬 더 효율적이고 경제적. \nB(X) : AWS Global Accelerator 는 TCP/UDP 를 사용하는 네트워크 계층에서 동작하는데,",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Route 53": "AWS의 클라우드 DNS(도메인 이름 서비스)"
    }
  },
  {
    "id": 39,
    "question": "회사는 웹 사이트에서 검색 가능한 항목 저장소를 유지 관리합니다. 데이터는 천만 개 \n이상의 행이 포함된 Amazon RDS for MySQL 데이터베이스 테이블에 저장됩니다. \n데이터베이스에는 2TB 의 범용 SSD 스토리지가 있습니다. 회사 웹 사이트를 통해 이 \n\n=== PAGE 43 ===\n데이터에 대한 수백만 건의 업데이트가 매일 있습니다. \n이 회사는 일부 삽입 작업이 10 초 이상 걸리는 것을 확인했습니다. 회사는 데이터베이스 \n스토리지 성능이 문제라고 판단했습니다. \n이 성능 문제를 해결하는 솔루션은 무엇입니까?",
    "options": [
      "스토리지 유형을 프로비저닝된 IOPS SSD 로 변경합니다.",
      "DB 인스턴스를 메모리 최적화 인스턴스 클래스로 변경합니다.",
      "DB 인스턴스를 버스트 가능한 성능 인스턴스 클래스로 변경합니다.",
      "MySQL 기본 비동기 복제로 다중 AZ RDS 읽기 전용 복제본을 활성화합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/84748-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n\naws.amazon.com/ebs/features/ \n프로비저닝된 IOPS 볼륨은 솔리드 스테이트 드라이브(SSD)로 지원되며 중요한 I/O \n집약적인 데이터베이스 애플리케이션을 위해 설계된 최고 성능의 EBS 볼륨입니다. \n이러한 볼륨은 극히 짧은 대기 시간이 필요한 IOPS 집약적 워크로드와 처리량 집약적 \n워크로드 모두에 이상적입니다. \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html \n \n2: \n'삽입' 작업이라고 했으므로 I/O 성능과 관련되어있음을 유추할 수 있음. 그리고 '저장소 \n성능'이 문제라고 판단했고, 범용 'SSD' 스토리지가 있다고 했으므로 A 가 정답. \nD(X) : 버스트 가능한 성능 인스턴스는 잠시 I/O 성능을 끌어올리는 것일 뿐 근본적인 I/O \n성능 개선은 하지 못함. \n획득한 크레딧이 남아 있지 않으면 인스턴스가 기준 CPU 사용률로 점진적으로 저하되고 \n크레딧이 더 많이 적립될 때까지 기준 이상으로 버스트할 수 없습니다. \n\ndocs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-credits-baselin\ne-concepts.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 40,
    "question": "회사에는 매일 1TB 의 상태 알림을 집합적으로 생성하는 수천 개의 에지 장치가 있습니다. \n각 경고의 크기는 약 2KB 입니다. 솔루션 설계자는 향후 분석을 위해 경고를 수집하고 \n저장하는 솔루션을 구현해야 합니다. \n회사는 고가용성 솔루션을 원합니다. 그러나 회사는 비용을 최소화해야 하며 추가 인프라 \n\n=== PAGE 44 ===\n관리를 원하지 않습니다. 또한 회사는 즉각적인 분석을 위해 14\n일 동안의 데이터를 \n유지하고 14 일이 지난 데이터를 보관하기를 원합니다. \n이러한 요구 사항을 충족하는 가장 운영 효율성이 높은 솔루션은 무엇입니까?",
    "options": [
      "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 알림을 수집합니다. Amazon S3 \n버킷에 알림을 전달하도록 Kinesis Data Firehose 스트림을 구성합니다. 14 일 후에 데이터를 \nAmazon S3 Glacier 로 전환하도록 S3 수명 주기 구성을 설정합니다.",
      "두 가용 영역에서 Amazon EC2 인스턴스를 시작하고 Elastic Load Balancer 뒤에 \n배치하여 알림을 수집합니다. Amazon S3 버킷에 경고를 저장할 EC2 인스턴스에 대한 \n스크립트를 생성합니다. 14 일 후에 데이터를 Amazon S3 Glacier 로 전환하도록 S3 수명 \n주기 구성을 설정합니다.",
      "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 알림을 수집합니다. Amazon \nOpenSearch Service(Amazon Elasticsearch Service) 클러스터에 알림을 전달하도록 Kinesis \nData Firehose 스트림을 구성합니다. Amazon OpenSearch Service(Amazon Elasticsearch \nService) 클러스터를 설정하여 매일 수동 스냅샷을 만들고 클러스터에서 14 일이 지난 \n데이터를 삭제합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 생성하여 알림을 수집하고 \n메시지 보존 기간을 14\n일로 설정합니다. SQS 대기열을 폴링하고, 메시지의 수명을 \n확인하고, 필요에 따라 메시지 데이터를 분석하도록 소비자를 구성합니다. 메시지가 14 일이 \n지난 경우 소비자는 메시지를 Amazon S3 버킷에 복사하고 SQS 대기열에서 메시지를 \n삭제해야 합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/85204-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n수 천 개의 Edge 장치로부터 경고 수집 및 저장 = Kinesis. A,C 둘 중 하나가 답. \nA(O) : 정답. \nKinesis Firehose Delivery Stream 에서 데이터 수집 \n다양한 유형의 소스를 사용하여 Kinesis Data Firehose 전송 스트림으로 데이터를 보낼 수 \n있습니다. \ndocs.aws.amazon.com/firehose/latest/dev/basic-write.html \nKinesis Firehose 에서 S3 로 데이터 전송 \nKinesis Data Firehose 전송 스트림을 설정할 때 데이터의 최종 대상을 선택합니다. 대상 \n옵션은 Amazon Simple Storage Service(Amazon S3), Amazon OpenSearch Service 및 \nAmazon Redshift 입니다.  \n\ndocs.aws.amazon.com/ko_kr/ses/latest/dg/event-publishing-kinesis-analytics-fir\nehose-stream.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 41,
    "question": "회사의 애플리케이션은 데이터 수집을 위해 여러 SaaS(Software-as-a-Service) 소스와 \n통합됩니다. 이 회사는 Amazon EC2 인스턴스를 실행하여 데이터를 수신하고 분석을 위해 \n데이터를 Amazon S3 버킷에 업로드합니다. 데이터를 수신하고 업로드하는 동일한 EC2 \n인스턴스도 업로드가 완료되면 사용자에게 알림을 보냅니다. 회사는 느린 응용 프로그램 \n성능을 발견했으며 가능한 한 성능을 개선하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 인스턴스가 확장할 수 있도록 Auto Scaling 그룹을 생성합니다. S3 버킷에 업로드가 \n완료되면 Amazon Simple Notification Service(Amazon SNS) 주제에 이벤트를 보내도록 S3 \n이벤트 알림을 구성합니다.",
      "Amazon AppFlow 흐름을 생성하여 각 SaaS 소스와 S3 버킷 간에 데이터를 전송합니다. \nS3 버킷에 업로드가 완료되면 Amazon Simple Notification Service(Amazon SNS) 주제에 \n이벤트를 보내도록 S3 이벤트 알림을 구성합니다.",
      "각 SaaS 소스에 대해 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 \n생성하여 출력 데이터를 보냅니다. S3 버킷을 규칙의 대상으로 구성합니다. S3 버킷에 \n업로드가 완료되면 이벤트를 전송하는 두 번째 EventBridge(Cloud Watch Events) 규칙을 \n생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 두 번째 규칙의 \n대상으로 구성합니다.",
      "EC2 인스턴스 대신 사용할 Docker 컨테이너를 생성합니다. Amazon Elastic Container \nService(Amazon ECS)에서 컨테이너화된 애플리케이션을 호스팅합니다. S3 버킷에 업로드가 \n완료되면 Amazon Simple Notification Service(Amazon SNS) 주제에 이벤트를 보내도록 \nAmazon CloudWatch Container Insights 를 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85446-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \nAmazon AppFlow\n는 Salesforce, SAP, Zendesk, Slack 및 ServiceNow\n와 같은 \nSaaS(Software-as-a-Service) 애플리케이션과 Amazon S3 및 Amazon Redshift 와 같은 \nAWS 서비스 간에 데이터를 안전하게 전송할 수 있는 완전 관리형 통합 서비스입니다. 클릭 \n몇 번이면 됩니다. \n\naws.amazon.com/appflow/ \n \n2: \nSaaS = Appflow. Appflow 는 완전 관리형 통합 서비스이기 때문에 운영 오버헤드가 적음. \nAmazon AppFlow 는 클릭 몇 번으로 Salesforce, Marketo, Slack 및 ServiceNow 와 같은 \nSaaS(Software-as-a-Service) 애플리케이션과 Amazon S3 및 Amazon Redshift 와 같은 \nAWS 서비스 간에 데이터를 안전하게 전송할 수 있게 해 주는 완전관리형 통합 서비스. \n\naws.amazon.com/ko/appflow/faqs/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 42,
    "question": "회사는 단일 VPC 의 Amazon EC2 인스턴스에서 고가용성 이미지 처리 애플리케이션을 \n실행합니다. EC2 인스턴스는 여러 가용 영역의 여러 서브넷 내에서 실행됩니다. EC2 \n인스턴스는 서로 통신하지 않습니다. 그러나 EC2 인스턴스는 Amazon S3 에서 이미지를 \n다운로드하고 단일 NAT 게이트웨이를 통해 Amazon S3 에 이미지를 업로드합니다. 회사는 \n데이터 전송 요금에 대해 우려하고 있습니다. \n회사가 지역 데이터 전송 요금을 피할 수 있는 가장 비용 효율적인 방법은 무엇입니까?",
    "options": [
      "각 가용 영역에서 NAT 게이트웨이를 시작합니다.",
      "NAT 게이트웨이를 NAT 인스턴스로 교체합니다.",
      "Amazon S3 용 게이트웨이 VPC 엔드포인트를 배포합니다.",
      "EC2 인스턴스를 실행할 EC2 전용 호스트를 프로비저닝합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/85205-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설1: \n데이터 전송 요금이 걱정되니 전용 전송 통로를 뚫으면 됨. VPC-S3 간 전용 통로는 S3 \nVPC Gateway Endpoint. 답은 C.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 43,
    "question": "회사에 Amazon S3 에 백업되는 시간에 민감한 대량의 데이터를 생성하는 온프레미스 \n애플리케이션이 있습니다. 애플리케이션이 성장했고 인터넷 대역폭 제한에 대한 사용자 \n불만이 있습니다. 솔루션 설계자는 Amazon S3\n에 대한 적시 백업을 허용하고 내부 \n사용자의 인터넷 연결에 미치는 영향을 최소화하는 장기 솔루션을 설계해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS VPN 연결을 설정하고 VPC 게이트웨이 엔드포인트를 통해 모든 트래픽을 \n프록시합니다.",
      "새 AWS Direct Connect 연결을 설정하고 이 새 연결을 통해 백업 트래픽을 직접 \n연결합니다.",
      "매일 AWS Snowball 디바이스를 주문합니다. Snowball 디바이스에 데이터를 로드하고 \n디바이스를 매일 AWS 로 반환합니다.",
      "AWS Management 콘솔을 통해 지원 티켓을 제출합니다. 계정에서 S3 서비스 제한 \n제거를 요청합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85206-exam-aws-certified-solut",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 44,
    "question": "회사에 중요한 데이터가 포함된 Amazon S3 버킷이 있습니다. 회사는 우발적인 삭제로부터 \n데이터를 보호해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 취해야 합니까? \n(2 개를 선택하세요.)",
    "options": [
      "S3 버킷에서 버전 관리를 활성화합니다.",
      "S3 버킷에서 MFA 삭제를 활성화합니다.",
      "S3 버킷에 버킷 정책을 생성합니다.",
      "S3 버킷에서 기본 암호화를 활성화합니다.",
      "S3 버킷의 객체에 대한 수명 주기 정책을 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/84750-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 45,
    "question": "회사에는 다음으로 구성된 데이터 수집 워크플로가 있습니다. \n• 새로운 데이터 전송에 대한 알림을 위한 Amazon Simple Notification Service(Amazon \nSNS) 주제 \n• 데이터를 처리하고 메타데이터를 기록하는 AWS Lambda 함수 \n\n=== PAGE 50 ===\n회사는 네트워크 연결 문제로 인해 수집 워크플로가 때때로 실패하는 것을 관찰했습니다. \n이러한 장애가 발생하면 회사에서 수동으로 작업을 다시 실행하지 않는 한 Lambda 함수는 \n해당 데이터를 수집하지 않습니다. \nLambda 함수가 향후 모든 데이터를 수집하도록 하려면 솔루션 설계자가 취해야 하는 작업 \n조합은 무엇입니까? (2 개를 선택하세요.)",
    "options": [
      "여러 가용 영역에 Lambda 함수를 배포합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성하고 SNS 주제를 \n구독합니다.",
      "Lambda 함수에 할당된 CPU 와 메모리를 늘립니다.",
      "Lambda 함수에 대해 프로비저닝된 처리량을 늘립니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열에서 읽도록 Lambda 함수를 \n수정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85408-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n1: \n네트워크 연결 문제로 데이터 수집이 잠시 실패하는 현상이 일어남. 이런 경우 데이터 \n손실이 일어날 위험성이 크므로 데이터를 보관해둘 곳이 필요하고, 대책으로는 SQS \nQueue 가 적절. 또한 SQS Queue 에 머물러 있는 작업들은 Lambda 로 처리 가능. 답은 BE. \nSQS\n를 사용하면 메시지 손실 위험을 감수하거나 다른 서비스를 가동할 필요 없이 \n소프트웨어 구성 요소 간에 모든 볼륨의 메시지를 전송, 저장 및 수신할 수 있습니다.  \n\naws.amazon.com/ko/sqs/ \nLambda 함수를 사용하여 Amazon Simple Queue Service(Amazon SQS) 대기열의 메시지를 \n처리할 수 있습니다. \n\ndocs.aws.amazon.com/ko_kr/lambda/latest/dg/with-sqs.html \n \n2: \n간헐적인 네트워크 연결 문제에도 불구하고 Lambda 함수가 향후 모든 데이터를 \n수집하도록 하려면 다음 조치를 취해야 합니다. \nAmazon Simple Queue Service(SQS) 대기열을 생성하고 SNS 주제를 구독합니다. 이를 \n통해 알림과 처리를 분리할 수 있으므로 처리 Lambda 함수가 실패하더라도 나중에 추가 \n처리를 위해 메시지가 대기열에 남아 있습니다. \nSNS 에서 직접 읽지 않고 SQS 대기열에서 읽도록 Lambda 함수를 수정합니다. 이 분리는 \n재시도 및 내결함성을 허용하고 모든 메시지가 Lambda 함수에 의해 처리되도록 합니다. \n참조:",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)",
      "SNS": "구독자들에게 알림이나 메시지를 전송하는 푸시 서비스"
    }
  },
  {
    "id": 46,
    "question": "회사에 매장에 마케팅 서비스를 제공하는 애플리케이션이 있습니다. 서비스는 매장 고객의 \n이전 구매를 기반으로 합니다. 상점은 SFTP 를 통해 거래 데이터를 회사에 업로드하고 \n데이터를 처리 및 분석하여 새로운 마케팅 제안을 생성합니다. 일부 파일의 크기는 \n200GB 를 초과할 수 있습니다. \n최근에 회사는 일부 상점에서 포함되어서는 안 되는 개인 식별 정보(PII)가 포함된 파일을 \n업로드했음을 발견했습니다. 회사는 PII 가 다시 공유될 경우 관리자에게 경고를 주기를 \n원합니다. 회사는 또한 문제 해결을 자동화하기를 원합니다. \n최소한의 개발 노력으로 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 해야 \n합니까?",
    "options": [
      "Amazon S3 버킷을 보안 전송 지점으로 사용하십시오. Amazon Inspector 를 사용하여 \n버킷의 객체를 스캔합니다. 객체에 PII 가 포함된 경우 S3 수명 주기 정책을 트리거하여 \nPII 가 포함된 객체를 제거합니다.",
      "Amazon S3 버킷을 보안 전송 지점으로 사용합니다. Amazon Macie 를 사용하여 버킷의 \n객체를 스캔합니다. 객체에 PII 가 포함된 경우 Amazon Simple Notification Service(Amazon \nSNS)를 사용하여 관리자에게 PII 가 포함된 객체를 제거하라는 알림을 트리거합니다.",
      "AWS Lambda 함수에서 사용자 지정 스캔 알고리즘을 구현합니다. 객체가 버킷에 로드될 \n때 함수를 트리거합니다. 객체에 PII\n가 포함된 경우 Amazon Simple Notification \nService(Amazon SNS)를 사용하여 관리자에게 PII 가 포함된 객체를 제거하라는 알림을 \n트리거합니다.",
      "AWS Lambda 함수에서 사용자 지정 스캔 알고리즘을 구현합니다. 객체가 버킷에 로드될 \n때 함수를 트리거합니다. 객체에 PII 가 포함된 경우 Amazon Simple Email Service(Amazon \nSES)를 사용하여 관리자에게 알림을 트리거하고 S3 수명 주기 정책을 트리거하여 PII 가 \n포함된 고기를 제거합니다. \nAnswer: B \nhttps://www.examtopics.com/discussions/amazon/view/85264-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n설명1: \nAmazon Macie 는 AWS 에서 PII 와 같은 민감한 데이터를 자동으로 검색, 분류 및 보호하는 \n관리형 서비스입니다. S3 에서 Macie 를 활성화하면 업로드된 객체에서 PII 를 검색할 수 \n\n=== PAGE 52 ===\n있습니다.",
      "Amazon Inspector 를 사용하여 S3 의 객체를 스캔하는 것은 PII 데이터 스캔을 위한 \n최적의 선택이 아닙니다. Amazon Inspector 는 콘텐츠 스캔이 아닌 호스트 수준 취약성 \n평가를 위해 설계되었습니다.",
      "AWS Lambda 함수에서 사용자 지정 검색 알고리즘을 구현하려면 대용량 파일 검색을 \n처리하기 위해 상당한 개발 노력이 필요합니다.",
      "알림에 SES 를 사용하고 S3 수명 주기 정책을 트리거하면 솔루션에 불필요한 복잡성이 \n추가될 수 있습니다. \n \n따라서 최소한의 개발 노력으로 요구 사항을 충족하는 최상의 옵션은 S3 를 안전한 전송 \n지점으로 사용하고 Amazon Macie\n를 PII 스캔에 활용하고 관리자에게 SNS 알림을 \n트리거하는 것입니다(옵션 B). \n \n설명2: \n최소한의 개발 노력으로 PII 가 공유될 때 관리자에게 탐지 및 경고하고 수정을 자동화하는 \n요구 사항을 충족하려면 Amazon S3 버킷을 안전한 전송 지점으로 사용하고 Amazon \nMacie 로 버킷의 객체를 스캔하는 것이 가장 좋습니다. \nAmazon Macie 는 기계 학습 및 패턴 일치를 사용하여 Amazon S3 에 저장된 중요한 \n데이터를 검색하고 보호하는 완전 관리형 데이터 보안 및 데이터 개인 정보 보호 \n서비스입니다. 민감한 데이터를 분류하고, 민감한 데이터에 대한 액세스를 모니터링하고, \n수정 작업을 자동화하는 데 사용할 수 있습니다. \n이 시나리오에서는 파일을 Amazon S3 버킷에 업로드한 후 Amazon Macie 에서 객체를 \n스캔하여 PII 를 찾을 수 있으며, PII 가 감지되면 Amazon Simple Notification Service(SNS) \n알림을 트리거하여 관리자에게 제거하도록 알릴 수 있습니다. PII 를 포함하는 객체. Amazon \nMacie 에는 이미 다양한 형식의 PII 를 탐지할 수 있는 사전 구축된 데이터 분류 규칙이 \n있으므로 이 접근 방식은 최소한의 개발 노력이 필요합니다. \n개인정보 = Macie. 정답은 B. \n참조: \nhtml AWS Well-Architected 프레임워크 - 보안 기반: \nhttps://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"
    ],
    "answer": 0,
    "explanation": "",
    "glossary": {}
  },
  {
    "id": 47,
    "question": "=== PAGE 53 ===\n회사는 1 주일 동안 진행될 예정된 이벤트를 위해 특정 AWS 리전의 3 개의 특정 가용 \n영역에서 보장된 Amazon EC2 용량이 필요합니다. \nEC2 용량을 보장하기 위해 회사는 무엇을 해야 합니까?",
    "options": [
      "필요한 리전을 지정하는 예약 인스턴스를 구매합니다.",
      "필요한 지역을 지정하는 온디맨드 용량 예약을 생성합니다.",
      "필요한 리전과 3 개의 가용 영역을 지정하는 예약 인스턴스를 구매합니다.",
      "필요한 지역과 3 개의 가용 영역을 지정하는 온디맨드 용량 예약을 생성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85529-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n1: \nA(X) : 예약 인스턴스는 1 년 또는 3 년 단위 약정 방식. \n예약 인스턴스(RI)는 1 년 또는 3 년 기간으로 약정하는 경우 EC2 사용 요금을 상당히 \n할인해 주는 EC2 상품입니다. \naws.amazon.com/ko/ec2/faqs/ \nB(X) : 용량 예약을 생성할 때 다음을 지정합니다. ◎용량을 예약할 가용 영역 \n\ndocs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html \nC(X) : 예약 인스턴스는 1 년 또는 3 년 단위 약정 방식. \nD(O) : B 번 참조. \n \n2: \n\ndocs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html \n예비 인스턴스: 비용 효율적이지 않은 전체 기간(1 년 또는 3 년)에 대해 비용을 지불해야 \n합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 48,
    "question": "회사 웹 사이트는 항목 카탈로그에 Amazon EC2 인스턴스 스토어를 사용합니다. 회사는 \n카탈로그의 가용성이 높고 카탈로그가 내구성 있는 위치에 저장되기를 원합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "카탈로그를 Redis 용 Amazon ElastiCache 로 이동합니다.",
      "더 큰 인스턴스 스토어로 더 큰 EC2 인스턴스를 배포합니다.",
      "인스턴스 스토어에서 Amazon S3 Glacier Deep Archive 로 카탈로그를 이동합니다.",
      "카탈로그를 Amazon Elastic File System(Amazon EFS) 파일 시스템으로 이동합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85119-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 49,
    "question": "회사는 매월 통화 기록 파일을 저장합니다. 사용자는 통화 후 1 년 이내에 파일에 무작위로 \n액세스하지만 1 년 이후에는 파일에 자주 액세스하지 않습니다. 이 회사는 사용자에게 1 년 \n미만의 파일을 가능한 한 빨리 쿼리하고 검색할 수 있는 기능을 제공하여 솔루션을 \n최적화하려고 합니다. 오래된 파일을 검색하는 데 있어 지연은 허용됩니다. \n어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      "Amazon S3 Glacier Instant Retrieval 에 태그가 있는 개별 파일을 저장합니다. 태그를 \n쿼리하여 S3 Glacier Instant Retrieval 에서 파일을 검색합니다.",
      "Amazon S3 Intelligent-Tiering 에 개별 파일을 저장합니다. S3 수명 주기 정책을 사용하여 \n1 년 후 파일을 S3 Glacier Flexible Retrieval 로 이동합니다. Amazon Athena 를 사용하여 \nAmazon S3 에 있는 파일을 쿼리하고 검색합니다. S3 Glacier Select 를 사용하여 S3 \nGlacier 에 있는 파일을 쿼리하고 검색합니다.",
      "Amazon S3 Standard 스토리지에 태그가 있는 개별 파일을 저장합니다. Amazon S3 \nStandard 스토리지의 각 아카이브에 대한 검색 메타데이터를 저장합니다. S3 수명 주기 \n정책을 사용하여 1 년 후에 파일을 S3 Glacier Instant Retrieval 로 이동합니다. Amazon \nS3 에서 메타데이터를 검색하여 파일을 쿼리하고 검색합니다.",
      "Amazon S3 Standard 스토리지에 개별 파일을 저장합니다. S3 수명 주기 정책을 \n사용하여 1 년 후에 파일을 S3 Glacier Deep Archive 로 이동합니다. Amazon RDS 에 검색 \n메타데이터를 저장합니다. Amazon RDS\n에서 파일을 쿼리합니다. S3 Glacier Deep \nArchive 에서 파일을 검색합니다. \n\n=== PAGE 55 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/85211-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \n의료 이미지, 뉴스 미디어 자산 또는 유전체학 데이터와 같이 즉각적인 액세스가 필요한 \n아카이브 데이터의 경우 S3 Glacier Instant Retrieve 스토리지 클래스를 선택하십시오. S3 \nGlacier Instant Retrieve 스토리지 클래스는 밀리초 검색으로 최저 비용의 스토리지를 \n제공합니다.  \n즉각적인 액세스가 필요하지는 않지만 백업 또는 재해 복구 사용 사례와 같이 비용 없이 \n대용량 데이터 세트를 검색할 수 있는 유연성이 필요한 아카이브 데이터의 경우 S3 Glacier \nFlexible Retrieve(이전의 S3 Glacier)를 선택하고, 몇 분 내에 검색하거나 5-12 시간 내에 \n대량 검색을 무료로 제공합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 50,
    "question": "회사에 1,000\n개의 Amazon EC2 Linux 인스턴스에서 실행되는 프로덕션 워크로드가 \n있습니다. 워크로드는 타사 소프트웨어에 의해 구동됩니다. 회사는 중요한 보안 취약성을 \n수정하기 위해 가능한 한 빨리 모든 EC2 인스턴스에서 타사 소프트웨어를 패치해야 \n합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Lambda 함수를 생성하여 모든 EC2 인스턴스에 패치를 적용합니다.",
      "모든 EC2 인스턴스에 패치를 적용하도록 AWS Systems Manager Patch Manager 를 \n구성합니다.",
      "AWS Systems Manager 유지 관리 기간을 예약하여 모든 EC2 인스턴스에 패치를 \n적용합니다.",
      "AWS Systems Manager Run Command 를 사용하여 모든 EC2 인스턴스에 패치를 \n적용하는 사용자 지정 명령을 실행합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/85026-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n해설: \nA(X) : 1000 개의 인스턴스에 일일이 다 Lambda 로 패치 적용한다는 것은 비효율적이고 \n번거로움 \nB(X) : 자동 업데이트에는 시간이 좀 걸림. \"\"패치 관리자는 승인 및 거부된 패치 목록과",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
    }
  }
];