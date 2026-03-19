export const quizData = [
  {
    "id": 26,
    "question": "회사는 AWS 클라우드 배포를 검토하여 Amazon S3 버킷에 무단 구성 변경이 없는지 \n확인해야 합니다. \n솔루션 설계자는 이 목표를 달성하기 위해 무엇을 해야 합니까?",
    "options": [
      "적절한 규칙으로 AWS Config 를 켭니다.",
      "적절한 검사를 통해 AWS Trusted Advisor 를 켭니다.",
      "적절한 평가 템플릿으로 Amazon Inspector 를 켭니다.",
      "Amazon S3 서버 액세스 로깅을 켭니다. Amazon EventBridge(Amazon Cloud Watch \nEvents)를 구성합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. S3 버킷의 설정 변경 사항을 실시간으로 감시하고, 규정에 어긋나는 무단 변경이 발생했을 때 이를 기록하고 경고할 수 있는 서비스는 'AWS Config'입니다. Trusted Advisor(B)는 비용이나 성능 최적화 권고용이며, Inspector(C)는 OS 취약점 진단용이라 설정 변경 추적에는 부적절합니다.",
    "glossary": {
      "AWS Config": "AWS 리소스의 설정 변경 내용을 기록하고 정책 준수 여부를 확인하는 서비스",
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 27,
    "question": "회사에서 새 애플리케이션을 시작하고 Amazon CloudWatch 대시보드에 애플리케이션 \n지표를 표시합니다. 회사의 제품 관리자는 이 대시보드에 주기적으로 액세스해야 합니다. \n제품 관리자에게 AWS 계정이 없습니다. 솔루션 설계자는 최소 권한 원칙에 따라 제품 \n관리자에 대한 액세스를 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "CloudWatch 콘솔에서 대시보드를 공유합니다. 제품 관리자의 이메일 주소를 입력하고 \n공유 \n단계를 \n완료합니다. \n대시보드에 \n대한 \n공유 \n가능한 \n링크를 \n제품 \n관리자에게 \n제공하십시오.",
      "특히 제품 관리자를 위한 IAM 사용자를 생성합니다. CloudWatchReadOnlyAccess AWS \n관리형 정책을 사용자에게 연결합니다. 새 로그인 자격 증명을 제품 관리자와 공유하십시오. \n올바른 대시보드의 브라우저 URL 을 제품 관리자와 공유하십시오.",
      "회사 직원을 위한 IAM 사용자를 생성합니다. ViewOnlyAccess AWS 관리형 정책을 IAM \n사용자에게 연결합니다. 새 로그인 자격 증명을 제품 관리자와 공유하십시오. 제품 \n관리자에게 CloudWatch \n콘솔로 이동하여 대시보드 섹션에서 이름으로 대시보드를 \n찾으라고 요청합니다.",
      "퍼블릭 서브넷에 배스천 서버를 배포합니다. 제품 관리자가 대시보드에 액세스해야 하는 \n경우 서버를 시작하고 RDP 자격 증명을 공유합니다. 배스천 서버에서 대시보드를 볼 수 \n있는 적절한 권한이 있는 캐시된 AWS 자격 증명으로 대시보드 URL 을 열도록 브라우저가 \n구성되어 있는지 확인합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. AWS 계정이 없는 외부 사용자에게 특정 대시보드만 전용 링크로 안전하게 공유하는 기능이 CloudWatch에 내장되어 있습니다. 이메일 기반 인증을 사용하면 IAM 사용자를 추가로 만드는 번거로움 없이 최소 권한 원칙을 완벽하게 준수할 수 있습니다.",
    "glossary": {
      "CloudWatch Dashboard": "여러 지표 정보를 한눈에 볼 수 있도록 시각화한 모니터링 판넬",
      "Least Privilege": "업무 처리 시 필요한 최소한의 권한만 부여하는 보안 원칙"
    }
  },
  {
    "id": 28,
    "question": "회사에서 애플리케이션을 AWS\n로 마이그레이션하고 있습니다. 응용 프로그램은 다른 \n계정에 배포됩니다. 회사는 AWS Organizations 를 사용하여 중앙에서 계정을 관리합니다. \n회사의 보안 팀은 회사의 모든 계정에 SSO(Single Sign-On) 솔루션이 필요합니다. 회사는 \n사내 자체 관리 Microsoft Active Directory 에서 사용자 및 그룹을 계속 관리해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS SSO 콘솔에서 AWS Single Sign-On(AWS SSO)을 활성화합니다. 단방향 포리스트 \n트러스트 또는 단방향 도메인 트러스트를 생성하여 Microsoft Active Directory 용 AWS \nDirectory Service 를 사용하여 회사의 자체 관리형 Microsoft Active Directory 를 AWS \nSSO 와 연결합니다.",
      "AWS SSO 콘솔에서 AWS Single Sign-On(AWS SSO)을 활성화합니다. Microsoft Active \nDirectory 용 AWS Directory Service 를 사용하여 회사의 자체 관리형 Microsoft Active \nDirectory 를 AWS SSO 와 연결하는 양방향 포리스트 트러스트를 생성합니다.",
      "AWS 디렉터리 서비스를 사용합니다. 회사의 자체 관리 Microsoft Active Directory 와 \n양방향 신뢰 관계를 만드십시오.",
      "온프레미스에 ID 공급자(IdP)를 배포합니다. AWS SSO 콘솔에서 AWS Single \nSign-On(AWS SSO)을 활성화합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 온프레미스 AD와 AWS SSO(IAM Identity Center)를 연동할 때는 리전 내에 'AWS Managed Microsoft AD'를 설치하고 '양방향 포리스트 트러스트'를 맺는 것이 표준입니다. 이를 통해 온프레미스의 사용자 정보로 AWS 환경에 접속할 수 있는 통합 로그인이 가능해집니다.",
    "glossary": {
      "Identity Center (SSO)": "여러 계정이나 애플리케이션에 한 번의 로그인으로 접근할 수 있게 해주는 ID 관리 서비스",
      "Managed Microsoft AD": "AWS에서 관리해주는 가상화된 Microsoft Active Directory 서비스"
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
    "explanation": "정답은 A입니다. UDP 기반의 서비스(VoIP)에서 전 세계적인 저지연 연결과 빠른 리전 간 장애 조치를 보장하려면 'AWS Global Accelerator'와 'NLB' 조합이 최적입니다. Global Accelerator는 애니캐스트 기술을 통해 사용자에게 가장 가까운 통로를 제공하며, NLB는 UDP 트래픽 처리에 특화되어 있습니다.",
    "glossary": {
      "Global Accelerator": "AWS 전용 망을 사용하여 사용자 트래픽의 성능을 최적화하고 지연 시간을 줄이는 전송 가속 서비스",
      "NLB (Network Load Balancer)": "UDP 및 TCP 트래픽을 처리하며 초저지연 성능을 제공하는 네트워크 계층 로드 밸런서"
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
    "explanation": "정답은 C입니다. 한 달 중 단 48시간만 사용하고 나머지 시간의 비용을 완전히 제거하고 싶다면, '스냅샷'을 찍고 인스턴스를 완전히 삭제하는 것이 가장 저렴합니다. 인스턴스를 단순 '중지(Stop)'하면 인스턴스 비용은 안 나가도 저장소(EBS) 비용은 여전히 발생하기 때문입니다.",
    "glossary": {
      "DB Snapshot": "특정 시점의 데이터베이스 전체 내용을 아카이브 형태로 저장해두는 복합 백업본",
      "RDS": "관계형 데이터베이스를 자동으로 관리해주는 AWS의 대표 서비스"
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
    "explanation": "정답은 A입니다. 전사 리소스가 회사의 태그 규정을 잘 지키고 있는지 감시하고 규정 미준수 시 알림을 보내는 거버넌스 자동화 서비스는 'AWS Config'입니다. 직접 스크립트(C, D)나 API를 짜지 않아도 '관리형 규칙'을 통해 아주 적은 노력으로 즉시 적용 가능합니다.",
    "glossary": {
      "AWS Config Rules": "특정 리소스가 원하는 설정(예: 특정 태그 존재 여부)을 유지하는지 지속적으로 체크하는 규칙",
      "Tagging": "AWS 리소스를 용도, 소유자, 환경 등으로 분류하기 위해 붙이는 꼬리표"
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
    "explanation": "정답은 B입니다. HTML, CSS, JS처럼 고정된 파일을 서빙하는 '정적 웹사이트 호스팅'에는 Amazon S3가 가장 저렴하고 관리할 서버가 없어 효율적입니다. EC2(C)나 Fargate(A)는 인스턴스 유지 비용이 발생하지만, S3는 사용한 저장량과 요청량만큼만 지불하면 됩니다.",
    "glossary": {
      "Static Website Hosting": "서버 측 로직 없이 미리 만들어진 파일만 제공하는 방식. S3에서 기본 제공함",
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
    "explanation": "정답은 C입니다. 대량의 실시간 데이터를 집계하고 '여러 소비 서비스'와 공유하며 중간에 가공(민감 정보 제거)까지 해야 한다면 'Kinesis Data Streams'가 최적입니다. Lambda를 통해 실시간으로 데이터를 가공한 뒤 DynamoDB에 넣고, 동시에 다른 애플리케이션들도 동일한 스트림에서 데이터를 읽어갈 수 있습니다.",
    "glossary": {
      "Kinesis Data Streams": "초당 수백만 건의 데이터를 실시간으로 수집하고 여러 서비스가 동시에 읽어갈 수 있게 해주는 스트리밍 서비스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스"
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
    "explanation": "정답은 B입니다. '누가 언제 어떤 명령을 내렸는가(API 기록)'는 CloudTrail이 담당하고, '리소스의 설정값이 어떻게 변했는가(구성 변경)'는 AWS Config가 담당합니다. 이 두 서비스는 보안 및 감사의 가장 기본이 되는 단짝 솔루션입니다.",
    "glossary": {
      "CloudTrail": "AWS 계정 내 모든 API 활동 내역을 기록하는 감사용 서비스",
      "AWS Config": "리소스의 설정 내역을 추적하고 과거 시점의 구성을 조회할 수 있게 해주는 도구"
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
    "explanation": "정답은 D입니다. 대규모 DDoS 공격으로부터 웹 애플리케이션을 전문적으로 보호하는 최고 수준의 보안 서비스는 'AWS Shield Advanced'입니다. 기본(Standard) 기능은 모두에게 무료지만, Advanced는 전문적인 탐지 및 완화 기능과 함께 피해 발생 시 비용 지원까지 제공합니다.",
    "glossary": {
      "DDoS (Distributed Denial of Service)": "수많은 좀비 PC를 이용해 서버에 과도한 트래픽을 주입하여 서비스를 마비시키는 공격",
      "AWS Shield Advanced": "DDoS 공격에 대한 실시간 모니터링 및 방어 전담 인력을 지원받는 유료 보안 등급"
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
    "explanation": "정답은 B입니다. 여러 리전에서 동일한 키 ID와 동일한 성질의 키 데이터를 공유하며 데이터를 복호활 수 있게 해주는 특별한 KMS 키는 '다중 리전 키(Multi-region Key)'입니다. 이를 사용하면 각 리전에 별도의 키를 만들고 권한을 매핑하는 복잡한 과정 없이 운영 오버헤드를 최소화하며 데이터 복제가 가능합니다.",
    "glossary": {
      "KMS Multi-region Keys": "서로 다른 리전에서 동일한 키 ID와 데이터를 사용해 암복호화를 가능하게 하는 전용 키",
      "S3 Replication": "S3 버킷에 담긴 파일들을 다른 리전의 버킷으로 실시간 자동 복사해주는 기능"
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
    "explanation": "정답은 B입니다. SSH 포트(22)를 열거나 복잡한 키 관리를 하지 않고도 웹 브라우저나 CLI에서 안전하게 인스턴스에 접속하려면 'Session Manager'를 사용하는 것이 현대적인 모범 사례입니다. 인스턴스에 IAM 역할만 부여하면 기록도 남고 훨씬 보안이 강화됩니다.",
    "glossary": {
      "Session Manager": "포트 오픈이나 키 관리 없이 인격적으로 인스턴스에 원격 접속하게 해주는 서비스 (Systems Manager 기능)",
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
    "explanation": "정답은 C입니다. 정적 웹사이트(S3)의 '전 세계 대기 시간 단축'에는 'CloudFront'가 최고입니다. 전 세계 엣지 로케이션에 데이터를 미리 복사(캐싱)해두고 사용자와 가장 가까운 곳에서 전송하므로 매우 빠르고 비용 또한 S3 단독 사용보다 경제적일 수 있습니다.",
    "glossary": {
      "CloudFront": "전 세계 엣지 로케이션을 통해 사용자 요청에 가장 빠른 응답을 제공하는 CDN 제품",
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 39,
    "question": "회사는 웹 사이트에서 검색 가능한 항목 저장소를 유지 관리합니다. 데이터는 천만 개 \n이상의 행이 포함된 Amazon RDS for MySQL 데이터베이스 테이블에 저장됩니다. \n데이터베이스에는 2TB 의 범용 SSD 스토리지가 있습니다. 회사 웹 사이트를 통해 이 \n데이터에 대한 수백만 건의 업데이트가 매일 있습니다. \n이 회사는 일부 삽입 작업이 10 초 이상 걸리는 것을 확인했습니다. 회사는 데이터베이스 \n스토리지 성능이 문제라고 판단했습니다. \n이 성능 문제를 해결하는 솔루션은 무엇입니까?",
    "options": [
      "스토리지 유형을 프로비저닝된 IOPS SSD 로 변경합니다.",
      "DB 인스턴스를 메모리 최적화 인스턴스 클래스로 변경합니다.",
      "DB 인스턴스를 버스트 가능한 성능 인스턴스 클래스로 변경합니다.",
      "MySQL 기본 비동기 복제로 다중 AZ RDS 읽기 전용 복제본을 활성화합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. '데이터베이스 삽입(쓰기)' 작업의 지연은 디스크 쓰기 성능인 I/O 부족 때문일 확률이 매우 높습니다. 범용 SSD(gp2/gp3) 대신 일정한 처리량을 보장해주는 '프로비저닝된 IOPS(io1/io2)' 타입을 사용하면 고부하 상황에서도 안정적인 속도를 유지할 수 있습니다.",
    "glossary": {
      "Provisioned IOPS": "고도의 입출력 성능이 필요한 워크로드를 위해 일정한 처리량(IOPS)을 미리 예약해두는 스토리지 서비스",
      "RDS": "관계형 데이터베이스를 편리하게 운영하기 위해 AWS에서 제공하는 완전 관리 서비스"
    }
  },
  {
    "id": 40,
    "question": "회사에는 매일 1TB 의 상태 알림을 집합적으로 생성하는 수천 개의 에지 장치가 있습니다. \n각 경고의 크기는 약 2KB 입니다. 솔루션 설계자는 향후 분석을 위해 경고를 수집하고 \n저장하는 솔루션을 구현해야 합니다. \n회사는 고가용성 솔루션을 원합니다. 그러나 회사는 비용을 최소화해야 하며 추가 인프라 \n관리를 원하지 않습니다. 또한 회사는 즉각적인 분석을 위해 14\n일 동안의 데이터를 \n유지하고 14 일이 지난 데이터를 보관하기를 원합니다. \n이러한 요구 사항을 충족하는 가장 운영 효율성이 높은 솔루션은 무엇입니까?",
    "options": [
      "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 알림을 수집합니다. Amazon S3 \n버킷에 알림을 전달하도록 Kinesis Data Firehose 스트림을 구성합니다. 14 일 후에 데이터를 \nAmazon S3 Glacier 로 전환하도록 S3 수명 주기 구성을 설정합니다.",
      "두 가용 영역에서 Amazon EC2 인스턴스를 시작하고 Elastic Load Balancer 뒤에 \n배치하여 알림을 수집합니다. Amazon S3 버킷에 경고를 저장할 EC2 인스턴스에 대한 \n스크립트를 생성합니다. 14 일 후에 데이터를 Amazon S3 Glacier 로 전환하도록 S3 수명 \n주기 구성을 설정합니다.",
      "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 알림을 수집합니다. Amazon \nOpenSearch Service(Amazon Elasticsearch Service) 클러스터에 알림을 전달하도록 Kinesis \nData Firehose 스트림을 구성합니다. Amazon OpenSearch Service(Amazon Elasticsearch \nService) 클러스터를 설정하여 매일 수동 스냅샷을 만들고 클러스터에서 14 일이 지난 \n데이터를 삭제합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 생성하여 알림을 수집하고 \n메시지 보존 기간을 14\n일로 설정합니다. SQS 대기열을 폴링하고, 메시지의 수명을 \n확인하고, 필요에 따라 메시지 데이터를 분석하도록 소비자를 구성합니다. 메시지가 14 일이 \n지난 경우 소비자는 메시지를 Amazon S3 버킷에 복사하고 SQS 대기열에서 메시지를 \n삭제해야 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 수천 개의 기기로부터 들어오는 대량의 스트리밍 데이터를 관리 오버헤드 없이 수집하고 S3에 자동으로 저장해주는 서비스는 'Kinesis Data Firehose'입니다. 저장된 후에는 S3의 수명 주기 정책으로 14일 뒤 Glacier로 보내는 자동화된 설계가 가능하여 비용 효율적입니다.",
    "glossary": {
      "Kinesis Data Firehose": "서버리스 방식으로 실시간 데이터를 수집하여 S3나 Redshift 같은 대상으로 전송해주는 서비스",
      "Lifecycle Policy": "시간이 지난 데이터를 자동으로 삭제하거나 더 저렴한 스토리지로 옮겨주는 자동화 설정"
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
    "explanation": "정답은 B입니다. Salesforce나 Slack 같은 외부 SaaS 서비스의 데이터를 코드 작성 없이 AWS로 안전하게 긁어오는 완전 관리형 도구는 'Amazon AppFlow'입니다. 이를 사용하면 EC2 관리 부담을 없애고 성능과 안정성을 동시에 얻을 수 있습니다.",
    "glossary": {
      "Amazon AppFlow": "클릭 몇 번으로 SaaS 앱과 AWS 서비스 간의 데이터를 전송하고 통합하게 해주는 서버리스 도구",
      "S3 Notification": "S3에 파일 업로드 등 이벤트 발생 시 알림을 보내는 기능"
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
    "explanation": "정답은 C입니다. NAT 게이트웨이는 전송되는 데이터 양에 따라 비용이 발생하므로 S3와 통신할 때 비용을 절감하고 싶다면 전용 '게이트웨이 VPC 엔드포인트'를 생성해야 합니다. 엔드포인트는 무료로 생성 가능하며 데이터 처리 비용도 발생하지 않아 가장 경제적입니다.",
    "glossary": {
      "NAT Gateway": "프라이빗 서브넷의 인스턴스가 인터넷에 접근할 수 있게 해주는 중계 브릿지(유료)",
      "Gateway VPC Endpoint": "VPC에서 S3로 가는 전용 프라이빗 도로를 만들어주는 서비스(무료)"
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
    "explanation": "정답은 B입니다. 공용 인터넷 선을 사용하는 VPN은 대역폭 확장이 어렵지만, 전용선인 'AWS Direct Connect (DX)'를 연결하면 인터넷 사용에 영향을 주지 않고 안정된 기가비트급 속도로 S3 백업이 가능해집니다.",
    "glossary": {
      "AWS Direct Connect": "온프레미스와 AWS 사이를 잇는 통신사 기반의 일관된 고속 전용선 연결 서비스",
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 44,
    "question": "회사에는 중요한 데이터가 포함된 Amazon S3 버킷이 있습니다. 회사는 우발적인 삭제로부터 \n데이터를 보호해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 취해야 합니까? \n(2 개를 선택하세요.)",
    "options": [
      "S3 버킷에서 버전 관리를 활성화합니다.",
      "S3 버킷에서 MFA 삭제를 활성화합니다.",
      "S3 버킷에 버킷 정책을 생성합니다.",
      "S3 버킷에서 기본 암호화를 활성화합니다.",
      "S3 버킷의 객체에 대한 수명 주기 정책을 생성합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A와 B입니다. '버전 관리(Versioning)'를 켜면 실수로 덮어쓰거나 삭제해도 이전 본이 남으며, 여기에 'MFA 삭제'를 결합하면 물리적인 보안 키 인증(2차 인증) 없이는 영구 삭제가 아예 불가능해져 보안이 극대화됩니다.",
    "glossary": {
      "S3 Versioning": "파일이 수정/삭제될 때마다 이전 상태를 자동으로 보존해주는 기능",
      "MFA (Multi-Factor Authentication)": "비밀번호 외에 고유한 보안 코드나 실물 카드를 이용한 2차 인증 방식"
    }
  },
  {
    "id": 45,
    "question": "회사에는 다음으로 구성된 데이터 수집 워크플로가 있습니다. \n• 새로운 데이터 전송에 대한 알림을 위한 Amazon Simple Notification Service(Amazon \nSNS) 주제 \n• 데이터를 처리하고 메타데이터를 기록하는 AWS Lambda 함수 \n회사는 네트워크 연결 문제로 인해 수집 워크플로가 때때로 실패하는 것을 관찰했습니다. \n이러한 장애가 발생하면 회사에서 수동으로 작업을 다시 실행하지 않는 한 Lambda 함수는 \n해당 데이터를 수집하지 않습니다. \nLambda 함수가 향후 모든 데이터를 수집하도록 하려면 솔루션 설계자가 취해야 하는 작업 \n조합은 무엇입니까? (2 개를 선택하세요.)",
    "options": [
      "여러 가용 영역에 Lambda 함수를 배포합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성하고 SNS 주제를 \n구독합니다.",
      "Lambda 함수에 할당된 CPU 와 메모리를 늘립니다.",
      "Lambda 함수에 대해 프로비저닝된 처리량을 늘립니다.",
      "Amazon Simple Queue Service(Amazon SQS) 대기열에서 읽도록 Lambda 함수를 \n수정합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B와 E입니다. SNS가 직접 Lambda를 호출하게 되면 오류 시 메시지가 증발할 위험이 있습니다. 중간에 'SQS 대기열'을 두어 메시지를 담아두고 Lambda가 이를 차례로 처리(BE)하는 구조를 짜면, 일시적인 오류 시에도 대기열에 메시지가 남게 되어 '데이터 소실 없는' 안정적인 구조가 완성됩니다.",
    "glossary": {
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스. 비동기식 처리를 통해 시스템 신뢰성을 높임",
      "SNS": "구독자들에게 메시지를 푸시하는 알림 서비스"
    }
  },
  {
    "id": 46,
    "question": "회사는 매장에 마케팅 서비스를 제공하는 애플리케이션이 있습니다. 서비스는 매장 고객의 \n이전 구매를 기반으로 합니다. 상점은 SFTP 를 통해 거래 데이터를 회사에 업로드하고 \n데이터를 처리 및 분석하여 새로운 마케팅 제안을 생성합니다. 일부 파일의 크기는 \n200GB 를 초과할 수 있습니다. \n최근에 회사는 일부 상점에서 포함되어서는 안 되는 개인 식별 정보(PII)가 포함된 파일을 \n업로드했음을 발견했습니다. 회사는 PII 가 다시 공유될 경우 관리자에게 경고를 주기를 \n원합니다. 회사는 또한 문제 해결을 자동화하기를 원합니다. \n최소한의 개발 노력으로 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 해야 \n합니까?",
    "options": [
      "Amazon S3 버킷을 보안 전송 지점으로 사용하십시오. Amazon Inspector 를 사용하여 \n버킷의 객체를 스캔합니다. 객체에 PII 가 포함된 경우 S3 수명 주기 정책을 트리거하여 \nPII 가 포함된 객체를 제거합니다.",
      "Amazon S3 버킷을 보안 전송 지점으로 사용합니다. Amazon Macie 를 사용하여 버킷의 \n객체를 스캔합니다. 객체에 PII 가 포함된 경우 Amazon Simple Notification Service(Amazon \nSNS)를 사용하여 관리자에게 PII 가 포함된 객체를 제거하라는 알림을 트리거합니다.",
      "AWS Lambda 함수에서 사용자 지정 스캔 알고리즘을 구현합니다. 객체가 버킷에 로드될 \n때 함수를 트리거합니다. 객체에 PII\n가 포함된 경우 Amazon Simple Notification \nService(Amazon SNS)를 사용하여 관리자에게 PII 가 포함된 객체를 제거하라는 알림을 \n트리거합니다.",
      "AWS Lambda 함수에서 사용자 지정 스캔 알고리즘을 구현합니다. 객체가 버킷에 로드될 \n때 함수를 트리거합니다. 객체에 PII 가 포함된 경우 Amazon Simple Email Service(Amazon \nSES)를 사용하여 관리자에게 알림을 트리거하고 S3 수명 주기 정책을 트리거하여 PII 가 \n포함된 고기를 제거합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. S3에 업로드된 대용량 파일 내에서 개인정보(PII)를 자동으로 탐지하고 분류하는 전문 보안 서비스는 'Amazon Macie'입니다. 직접 알고리즘을 짤 필요 없이 Macie를 활성화하고 문제가 발견되면 SNS를 통해 알림을 보내는 방식이 '최소한의 개발 노력'에 완벽히 부합합니다.",
    "glossary": {
      "Amazon Macie": "기계 학습을 활용하여 개인 식별 정보(PII) 등 민감한 데이터를 자동으로 탐지하고 관리하는 보안 서비스",
      "PII (Personally Identifiable Information)": "이름, 전화번호 등 특정 개인을 식별할 수 있는 민감한 정보"
    }
  },
  {
    "id": 47,
    "question": "회사는 1 주일 동안 진행될 예정된 이벤트를 위해 특정 AWS 리전의 3 개의 특정 가용 \n영역에서 보장된 Amazon EC2 용량이 필요합니다. \nEC2 용량을 보장하기 위해 회사는 무엇을 해야 합니까?",
    "options": [
      "필요한 리전을 지정하는 예약 인스턴스를 구매합니다.",
      "필요한 지역을 지정하는 온디맨드 용량 예약을 생성합니다.",
      "필요한 리전과 3 개의 가용 영역을 지정하는 예약 인스턴스를 구매합니다.",
      "필요한 지역과 3 개의 가용 영역을 지정하는 온디맨드 용량 예약을 생성합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 비용 절감이 아니라 '물리적인 서버 자원의 선점(Reservation)'이 목적이라면 '온디맨드 용량 예약(Capacity Reservation)'이 정답입니다. 이때 특정 가용 영역(AZ)을 명시해야 그 영역의 자원을 확실히 보장받을 수 있습니다. 예약 인스턴스(A, C)는 주로 비용 할인을 위한 것이며 물리 자원 확보를 항상 보장하지는 않습니다.",
    "glossary": {
      "Capacity Reservation": "특정 가용 영역에서 EC2 인스턴스를 즉시 시작할 수 있도록 컴퓨팅 용량을 미리 확보해두는 기능",
      "On-demand": "필요한 때에 즉시 인스턴스를 생성하고 사용한 만큼 지불하는 과금 방식"
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
    "explanation": "정답은 D입니다. '인스턴스 스토어'는 인스턴스가 삭제되면 데이터도 사라지는 휘발성 저장소이므로 '내구성'이 없습니다. 여러 인스턴스가 동시에 접근할 수 있고 데이터 보존이 영구적인 'Amazon EFS'와 같은 고가용성 파일 공유 시스템으로 옮기는 것이 최선의 구조입니다.",
    "glossary": {
      "Instance Store": "EC2의 물리적 호스트에 직접 붙어 매우 빠르지만 인스턴스가 사라지면 데이터가 날아가는 임시 저장소",
      "EFS": "내구성이 높고 가용 영역 전체에서 데이터 공유가 가능한 표준 파일 스토리지"
    }
  },
  {
    "id": 49,
    "question": "회사는 매월 통화 기록 파일을 저장합니다. 사용자는 통화 후 1 년 이내에 파일에 무작위로 \n액세스하지만 1 년 이후에는 파일에 자주 액세스하지 않습니다. 이 회사는 사용자에게 1 년 \n미만의 파일을 가능한 한 빨리 쿼리하고 검색할 수 있는 기능을 제공하여 솔루션을 \n최적화하려고 합니다. 오래된 파일을 검색하는 데 있어 지연은 허용됩니다. \n어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": [
      "Amazon S3 Glacier Instant Retrieval 에 태그가 있는 개별 파일을 저장합니다. 태그를 \n쿼리하여 S3 Glacier Instant Retrieval 에서 파일을 검색합니다.",
      "Amazon S3 Intelligent-Tiering 에 개별 파일을 저장합니다. S3 수명 주기 정책을 사용하여 \n1 년 후 파일을 S3 Glacier Flexible Retrieval 로 이동합니다. Amazon Athena 를 사용하여 \nAmazon S3 에 있는 파일을 쿼리하고 검색합니다. S3 Glacier Select 를 사용하여 S3 \nGlacier 에 있는 파일을 쿼리하고 검색합니다.",
      "Amazon S3 Standard 스토리지에 태그가 있는 개별 파일을 저장합니다. Amazon S3 \nStandard 스토리지의 각 아카이브에 대한 검색 메타데이터를 저장합니다. S3 수명 주기 \n정책을 사용하여 1 년 후에 파일을 S3 Glacier Instant Retrieval 로 이동합니다. Amazon \nS3 에서 메타데이터를 검색하여 파일을 쿼리하고 검색합니다.",
      "Amazon S3 Standard 스토리지에 개별 파일을 저장합니다. S3 수명 주기 정책을 \n사용하여 1 년 후에 파일을 S3 Glacier Deep Archive 로 이동합니다. Amazon RDS 에 검색 \n메타데이터를 저장합니다. Amazon RDS\n에서 파일을 쿼리합니다. S3 Glacier Deep \nArchive 에서 파일을 검색합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 1년 동안 '무작위'로 접근하는 데이터는 'Intelligent-Tiering'이 자동으로 비용을 최적화해주며, 1년 뒤에는 저렴한 Glacier로 자동 이관하는 수명 주기 정책이 가장 비용 효율적입니다. Athena를 사용하면 S3 데이터를 즉석에서 쿼리할 수 있어 검색 편의성까지 챙길 수 있습니다.",
    "glossary": {
      "Intelligent-Tiering": "접근 패턴이 불규칙한 데이터를 감시하여 자동으로 저렴한 계층으로 이동시켜주는 S3 스토리지 클래스",
      "Glacier Flexible Retrieval": "필요할 때 몇 분에서 몇 시간 내에 데이터를 꺼내 쓸 수 있는 저비용 아카이브 옵션"
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
    "explanation": "정답은 D입니다. '가능한 한 빨리(긴급)' 1,000대의 서버에 한꺼번에 동일한 수동 패치 명령을 내리고 싶다면 'Run Command'가 정답입니다. Patch Manager(B)는 정기적인 OS 패치 관리에 더 최적화되어 있고 수동 타사 소프트웨어 긴급 배포에는 Run Command가 가장 민첩합니다.",
    "glossary": {
      "Run Command": "로그격 없이 수백~수천 대의 서버에 동시에 쉘 명령이나 스크립트를 원격 실행하는 도구",
      "Patch Manager": "AWS 리소스의 보안 패치 설치 여부를 확인하고 자동으로 설치까지 해주는 자동화 도구"
    }
  }
];