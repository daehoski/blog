export const quizData = [
  {
    "id": 326,
    "question": "이미지 호스팅 회사는 대규모 자산을 Amazon S3 Standard 버킷에 업로드합니다. 회사는 \nS3 API 를 사용하여 멀티파트 업로드를 병렬로 사용하고 동일한 객체가 다시 업로드되면 \n덮어씁니다. 업로드 후 처음 30 일 동안 개체에 자주 액세스합니다. 개체는 30 일 후에 덜 \n자주 사용되지만 각 개체에 대한 액세스 패턴은 일관되지 않습니다. 회사는 저장된 자산의 \n고가용성과 탄력성을 유지하면서 S3 스토리지 비용을 최적화해야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 권장해야 하는 작업 조합은 무엇입니까? \n(두 가지를 선택하세요.)",
    "options": [
      "30 일 후에 자산을 S3 Intelligent-Tiering 으로 이동합니다.",
      "불완전한 멀티파트 업로드를 정리하도록 S3 수명 주기 정책을 구성합니다.",
      "만료된 개체 삭제 마커를 정리하도록 S3 수명 주기 정책을 구성합니다.",
      "30 일 후에 자산을 S3 Standard-Infrequent Access(S3 Standard-IA)로 이동합니다.",
      "30 일 후 자산을 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 이동합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99755-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nS3 Intelligent-Tiering 은 성능 영향, 검색 비용 또는 운영 오버헤드 없이 액세스 빈도에 \n따라 가장 비용 효율적인 액세스 계층으로 데이터를 자동으로 이동하는 스토리지 \n클래스입니다. 회사 자산과 같이 액세스 패턴을 알 수 없거나 변경하는 데이터에 \n이상적입니다. 30 일 후에 자산을 S3 Intelligent-Tiering 으로 이동함으로써 회사는 저장된 \n자산의 고가용성과 복원력을 유지하면서 스토리지 비용을 최적화할 수 있습니다. \nS3 수명 주기는 개체가 수명 주기 동안 비용 효율적으로 저장되도록 개체를 관리할 수 \n있게 해주는 기능입니다. 수명 주기 규칙을 생성하여 Amazon S3 가 객체 그룹에 적용하는 \n작업을 정의할 수 있습니다. 작업 중 하나는 업로드가 중단될 때 발생할 수 있는 불완전한 \n멀티파트 업로드를 중단하는 것입니다. 불완전한 멀티파트 업로드를 정리하도록 S3 수명 \n주기 정책을 구성함으로써 회사는 스토리지 비용을 줄이고 사용하지 않는 부분에 대한 비용 \n지불을 피할 수 있습니다. \n만료된 객체 삭제 마커는 Amazon S3 에서 자동으로 삭제되고 스토리지 비용이 발생하지 \n않기 때문에 옵션 C 는 올바르지 않습니다. 따라서 만료된 객체 삭제 마커를 정리하도록 S3 \n수명 주기 정책을 구성해도 회사의 스토리지 비용에는 영향을 미치지 않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 327,
    "question": "솔루션 설계자는 Amazon EC2 인스턴스를 호스팅하는 VPC 네트워크를 보호해야 합니다. \nEC2 인스턴스는 매우 민감한 데이터를 포함하고 프라이빗 서브넷에서 실행됩니다. 회사 \n정책에 따라 VPC 에서 실행되는 EC2 인스턴스는 타사 URL 을 사용하는 소프트웨어 제품 \n업데이트를 위해 인터넷에서 승인된 타사 소프트웨어 리포지토리에만 액세스할 수 있습니다. \n다른 인터넷 트래픽은 차단되어야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "아웃바운드 트래픽을 AWS 네트워크 방화벽 방화벽으로 라우팅하도록 프라이빗 \n서브넷의 라우팅 테이블을 업데이트합니다. 도메인 목록 규칙 그룹을 구성합니다.",
      "AWS WAF 웹 ACL 을 설정합니다. 소스 및 대상 IP 주소 범위 집합을 기반으로 트래픽 \n요청을 필터링하는 사용자 지정 규칙 집합을 만듭니다.",
      "엄격한 인바운드 보안 그룹 규칙을 구현합니다. URL 을 지정하여 인터넷에서 승인된 \n소프트웨어 리포지토리에 대한 트래픽만 허용하는 아웃바운드 규칙을 구성합니다.",
      "EC2 인스턴스 앞에 Application Load Balancer(ALB)를 구성합니다. 모든 아웃바운드 \n트래픽을 ALB 로 보냅니다. 인터넷에 대한 아웃바운드 액세스를 위해 ALB 의 대상 그룹에서 \n\n=== PAGE 348 ===\nURL 기반 규칙 리스너를 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99795-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nEC2\n에서 네트워크 방화벽으로 아웃바운드 연결을 보냅니다. 네트워크 방화벽에서 \n소프트웨어 패치 다운로드를 위해 특정 도메인을 허용하고 다른 모든 도메인을 거부하는 \n상태 저장 아웃바운드 규칙을 생성합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 328,
    "question": "한 회사가 AWS 클라우드에서 3 계층 전자상거래 애플리케이션을 호스팅하고 있습니다. \n회사는 Amazon S3 에서 웹사이트를 호스팅하고 웹사이트를 판매 요청을 처리하는 API 와 \n통합합니다. 이 회사는 ALB(Application Load Balancer) 뒤에 있는 3 개의 Amazon EC2 \n인스턴스에서 API 를 호스팅합니다. API 는 판매 요청을 비동기식으로 처리하는 백엔드 \n작업자와 함께 정적 및 동적 프런트 엔드 콘텐츠로 구성됩니다. \n회사는 신제품 출시 이벤트 기간 동안 판매 요청 건수가 급격하게 급증할 것으로 예상하고 \n있다. \n모든 요청이 성공적으로 처리되도록 하려면 솔루션 설계자가 무엇을 권장해야 합니까?",
    "options": [
      "동적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. 트래픽 증가를 처리하기 \n위해 EC2 인스턴스 수를 늘립니다.",
      "정적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. Auto Scaling 그룹에 EC2 \n인스턴스를 배치하여 네트워크 트래픽을 기반으로 새 인스턴스를 시작합니다.",
      "동적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. ALB 앞에 Amazon \nElastiCache 인스턴스를 추가하여 API 가 처리할 트래픽을 줄입니다.",
      "정적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. Amazon Simple Queue \nService(Amazon SQS) 대기열을 추가하여 나중에 EC2 인스턴스에서 처리할 수 있도록 웹 \n사이트에서 요청을 수신합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99704-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 329,
    "question": "보안 감사 결과 Amazon EC2 인스턴스가 정기적으로 패치되지 않는 것으로 나타났습니다. \n\n=== PAGE 349 ===\n솔루션 설계자는 대규모 EC2 인스턴스 전체에 대해 정기적인 보안 스캔을 실행할 솔루션을 \n제공해야 합니다. 또한 솔루션은 정기적으로 EC2 인스턴스를 패치하고 각 인스턴스의 패치 \n상태에 대한 보고서를 제공해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "EC2 인스턴스에서 소프트웨어 취약성을 스캔하도록 Amazon Macie 를 설정합니다. 각 \nEC2 인스턴스에서 cron 작업을 설정하여 정기적인 일정에 따라 인스턴스를 패치합니다.",
      "계정에서 Amazon GuardDuty 를 켭니다. 소프트웨어 취약성에 대해 EC2 인스턴스를 \n스캔하도록 GuardDuty 를 구성합니다. 정기적인 일정에 따라 EC2 인스턴스를 패치하도록 \nAWS Systems Manager Session Manager 를 설정합니다.",
      "소프트웨어 취약성에 대해 EC2 인스턴스를 스캔하도록 Amazon Detective 를 설정합니다. \n정기적인 일정에 따라 EC2 인스턴스를 패치하도록 Amazon EventBridge 예약 규칙을 \n설정합니다.",
      "계정에서 Amazon Inspector 를 켭니다. 소프트웨어 취약성에 대해 EC2 인스턴스를 \n스캔하도록 Amazon Inspector\n를 구성합니다. 정기적인 일정에 따라 EC2 인스턴스를 \n패치하도록 AWS Systems Manager Patch Manager 를 설정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99796-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 330,
    "question": "회사에서 Amazon RDS DB 인스턴스에 데이터를 저장할 계획입니다. 회사는 미사용 \n데이터를 암호화해야 합니다. \n솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Key Management Service(AWS KMS)에서 키를 생성합니다. DB 인스턴스에 대한 \n암호화를 활성화합니다.",
      "암호화 키를 생성합니다. AWS Secrets Manager 에 키를 저장합니다. 키를 사용하여 DB \n인스턴스를 암호화합니다.",
      "AWS Certificate Manager(ACM)에서 인증서를 생성합니다. 인증서를 사용하여 DB \n인스턴스에서 SSL/TLS 를 활성화합니다.",
      "AWS Identity and Access Management(IAM)에서 인증서를 생성합니다. 인증서를 \n사용하여 DB 인스턴스에서 SSL/TLS 를 활성화합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99702-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 331,
    "question": "회사는 30일 이내에 데이터 센터에서 AWS 클라우드로 20TB의 데이터를 마이그레이션해야 \n합니다. 회사의 네트워크 대역폭은 15Mbps\n로 제한되며 사용률이 70%를 초과할 수 \n없습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Snowball 을 사용하십시오.",
      "AWS DataSync 를 사용합니다.",
      "안전한 VPN 연결을 사용하십시오.",
      "Amazon S3 Transfer Acceleration 을 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99603-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAWS Snowball 은 AWS 클라우드 안팎으로 대량의 데이터 이동을 가속화하는 안전한 데이터 \n전송 솔루션입니다. 한 번에 최대 80TB 의 데이터를 이동할 수 있고 최대 50Mbps 의 \n네트워크 대역폭을 제공하므로 작업에 적합합니다. 또한 안전하고 사용하기 쉬우므로 이 \n마이그레이션에 이상적인 솔루션입니다.",
    "glossary": {}
  },
  {
    "id": 332,
    "question": "회사는 직원들에게 기밀 및 민감한 파일에 대한 안전한 액세스를 제공해야 합니다. 회사는 \n권한이 있는 사용자만 파일에 액세스할 수 있기를 원합니다. 파일은 직원의 장치에 \n안전하게 다운로드되어야 합니다. \n파일은 온프레미스 Windows 파일 서버에 저장됩니다. 그러나 원격 사용량의 증가로 인해 \n파일 서버의 용량이 부족합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? \n\n=== PAGE 351 ===",
    "options": [
      "파일 서버를 퍼블릭 서브넷의 Amazon EC2 인스턴스로 마이그레이션합니다. 인바운드 \n트래픽을 직원의 IP 주소로 제한하도록 보안 그룹을 구성합니다.",
      "파일을 Amazon FSx for Windows File Server 파일 시스템으로 마이그레이션합니다. \nAmazon FSx 파일 시스템을 온프레미스 Active Directory 와 통합합니다. AWS 클라이언트 \nVPN 을 구성합니다.",
      "파일을 Amazon S3\n로 마이그레이션하고 프라이빗 VPC 엔드포인트를 생성합니다. \n다운로드를 허용하려면 서명된 URL 을 만듭니다.",
      "파일을 Amazon S3 로 마이그레이션하고 퍼블릭 VPC 엔드포인트를 생성합니다. 직원이 \nAWS IAM Identity Center(AWS Single Sign-On)로 로그인하도록 허용합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99792-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nWindows 파일 서버는 온프레미스이며 데이터를 클라우드에 복제할 무언가가 필요합니다. \n우리가 가진 유일한 옵션은 Windows 파일 서버용 AWS FSx 입니다. 또한 정보가 기밀이고 \n민감하기 때문에 적절한 사용자가 안전한 방식으로 정보에 액세스할 수 있도록 해야 \n합니다. \n\ndocs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html",
    "glossary": {}
  },
  {
    "id": 333,
    "question": "회사의 애플리케이션은 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 \n실행됩니다. 인스턴스는 여러 가용 영역에 걸쳐 Amazon EC2 Auto Scaling 그룹에서 \n실행됩니다. 매월 1 일 자정에 월말 재무 계산 일괄 처리가 실행되면 응용 프로그램이 훨씬 \n느려집니다. \n이로 \n인해 \nEC2 \n인스턴스의 \nCPU \n사용률이 \n즉시 \n100%에 \n도달하여 \n애플리케이션이 중단됩니다. \n애플리케이션이 워크로드를 처리하고 다운타임을 방지할 수 있도록 하기 위해 솔루션 \n설계자는 무엇을 권장해야 합니까?",
    "options": [
      "ALB 앞에 Amazon CloudFront 배포를 구성합니다.",
      "CPU 사용률을 기반으로 EC2 Auto Scaling 단순 조정 정책을 구성합니다.",
      "월별 일정을 기반으로 EC2 Auto Scaling 예약 조정 정책을 구성합니다.",
      "EC2 인스턴스에서 일부 워크로드를 제거하도록 Amazon ElastiCache 를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99791-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 334,
    "question": "회사는 고객이 온프레미스 Microsoft Active Directory 를 사용하여 Amazon S3 에 저장된 \n파일을 다운로드할 수 있는 기능을 제공하려고 합니다. 고객의 애플리케이션은 SFTP \n클라이언트를 사용하여 파일을 다운로드합니다. \n운영 오버헤드를 최소화하고 고객의 애플리케이션을 변경하지 않으면서 이러한 요구 사항을 \n충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon S3 용 SFTP 로 AWS Transfer Family 를 설정합니다. 통합된 Active Directory \n인증을 구성합니다.",
      "온프레미스 클라이언트를 Amazon S3\n와 동기화하도록 AWS DMS(AWS Database \nMigration Service)를 설정합니다. 통합된 Active Directory 인증을 구성합니다.",
      "AWS IAM Identity Center(AWS Single Sign-On)를 사용하여 온프레미스 위치와 S3 위치 \n간에 동기화하도록 AWS DataSync 를 설정합니다.",
      "SFTP 로 Windows Amazon EC2 인스턴스를 설정하여 온프레미스 클라이언트를 Amazon \nS3 와 연결합니다. AWS Identity and Access Management(IAM)를 통합합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99703-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 335,
    "question": "회사에서 갑자기 수요가 증가하고 있습니다. 회사는 Amazon 머신 이미지(AMI)에서 대규모 \nAmazon EC2 인스턴스를 프로비저닝해야 합니다. 인스턴스는 Auto Scaling 그룹에서 \n\n=== PAGE 353 ===\n실행됩니다. 회사는 요구 사항을 충족하기 위해 최소 초기화 대기 시간을 제공하는 \n솔루션이 필요합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "aws ec2 register-image 명령을 사용하여 스냅샷에서 AMI 를 생성합니다. AWS Step \nFunctions 를 사용하여 Auto Scaling 그룹의 AMI 를 교체하십시오.",
      "스냅샷에서 Amazon Elastic Block Store(Amazon EBS) 빠른 스냅샷 복원을 활성화합니다. \n스냅샷을 사용하여 AMI 를 프로비저닝합니다. Auto Scaling 그룹의 AMI 를 새 AMI 로 \n교체합니다.",
      "Amazon Data Lifecycle Manager(Amazon DLM)에서 AMI 생성을 활성화하고 수명 주기 \n규칙을 정의합니다. Auto Scaling 그룹에서 AMI\n를 수정하는 AWS Lambda 함수를 \n생성합니다.",
      "Amazon EventBridge 를 사용하여 AMI 를 프로비저닝하는 AWS Backup 수명 주기 정책을 \n호출합니다. EventBridge 에서 Auto Scaling 그룹 용량 제한을 이벤트 소스로 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99686-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n스냅샷에서 Amazon Elastic Block Store(Amazon EBS) 빠른 스냅샷 복원을 활성화하면 \n스냅샷에서 새 Amazon Machine Image(AMI)를 빠르게 생성할 수 있으므로 새 인스턴스를 \n프로비저닝할 때 초기화 지연 시간을 줄이는 데 도움이 됩니다. AMI 가 프로비저닝되면 \nAuto Scaling 그룹의 AMI 를 새 AMI 로 교체할 수 있습니다. 이렇게 하면 업데이트된 \nAMI 에서 새 인스턴스가 시작되고 증가된 수요를 신속하게 충족할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 336,
    "question": "회사는 Amazon Aurora MySQL DB 클러스터를 스토리지로 사용하는 다중 계층 웹 \n애플리케이션을 \n호스팅합니다. \n애플리케이션 \n계층은 \nAmazon \nEC2 \n인스턴스에서 \n호스팅됩니다. 회사의 IT 보안 지침에 따라 데이터베이스 자격 증명을 암호화하고 14 일마다 \n교체해야 합니다. \n최소한의 운영 노력으로 이 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": [
      "새 AWS Key Management Service(AWS KMS) 암호화 키를 생성합니다. AWS Secrets \nManager 를 사용하여 적절한 자격 증명과 함께 KMS 키를 사용하는 새 암호를 생성합니다. \n암호를 Aurora DB 클러스터와 연결합니다. 14 일의 사용자 지정 순환 기간을 구성합니다.",
      "AWS Systems Manager Parameter Store 에서 두 개의 매개변수를 생성합니다. 하나는 \n사용자 이름을 문자열 매개변수로 사용하고 다른 하나는 SecureString 유형을 암호로 \n\n=== PAGE 354 ===\n사용합니다. 암호 매개변수에 대해 AWS Key Management Service(AWS KMS) 암호화를 \n선택하고 애플리케이션 계층에서 이러한 매개변수를 로드합니다. 14 일마다 암호를 교체하는 \nAWS Lambda 함수를 구현합니다.",
      "자격 증명이 포함된 파일을 AWS KMS(AWS Key Management Service) 암호화 Amazon \nElastic File System(Amazon EFS) 파일 시스템에 저장합니다. 애플리케이션 계층의 모든 \nEC2 인스턴스에 EFS 파일 시스템을 탑재합니다. 응용 프로그램이 파일을 읽을 수 있고 \n슈퍼 사용자만 파일을 수정할 수 있도록 파일 시스템의 파일에 대한 액세스를 제한합니다. \n14 일마다 Aurora 에서 키를 교체하고 새 자격 증명을 파일에 쓰는 AWS Lambda 함수를 \n구현합니다.",
      "애플리케이션이 자격 증명을 로드하는 데 사용하는 AWS KMS(AWS Key Management \nService) 암호화 Amazon S3 버킷에 자격 증명이 포함된 파일을 저장합니다. 올바른 자격 \n증명이 사용되도록 정기적으로 파일을 응용 프로그램에 다운로드하십시오. 14 일마다 Aurora \n자격 증명을 교체하고 이 자격 증명을 S3 버킷의 파일에 업로드하는 AWS Lambda 함수를 \n구현합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99790-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 337,
    "question": "회사에서 AWS 에 웹 애플리케이션을 배포했습니다. 이 회사는 조정 요구 사항을 지원하기 \n위해 기본 DB 인스턴스와 5 개의 읽기 전용 복제본을 사용하여 MySQL 용 Amazon \nRDS 에서 백엔드 데이터베이스를 호스팅합니다. 읽기 전용 복제본은 기본 DB 인스턴스보다 \n1 초 이상 뒤처져서는 안 됩니다. 데이터베이스는 정기적으로 예약된 저장 프로시저를 \n실행합니다. \n웹 사이트의 트래픽이 증가함에 따라 복제본은 피크 로드 기간 동안 추가 지연을 \n경험합니다. 솔루션 설계자는 복제 지연을 최대한 줄여야 합니다. 솔루션 설계자는 \n애플리케이션 코드에 대한 변경을 최소화하고 지속적인 운영 오버헤드를 최소화해야 \n합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "데이터베이스를 Amazon Aurora MySQL 로 마이그레이션합니다. 읽기 전용 복제본을 \nAurora 복제본으로 교체하고 Aurora Auto Scaling 을 구성합니다. 저장 프로시저를 Aurora \nMySQL 기본 함수로 바꿉니다.",
      "데이터베이스 앞에 Redis 클러스터용 Amazon ElastiCache\n를 배포합니다. 응용 \n프로그램이 \n데이터베이스를 \n쿼리하기 \n전에 \n캐시를 \n확인하도록 \n응용 \n프로그램을 \n수정하십시오. 저장 프로시저를 AWS Lambda 함수로 바꿉니다. \n\n=== PAGE 355 ===",
      "데이터베이스를 \nAmazon \nEC2 \n인스턴스에서 \n실행되는 \nMySQL \n데이터베이스로 \n마이그레이션합니다. 모든 복제본 노드에 대해 컴퓨팅에 최적화된 대규모 EC2 인스턴스를 \n선택합니다. EC2 인스턴스에서 저장 프로시저를 유지합니다.",
      "데이터베이스를 Amazon DynamoDB 로 마이그레이션합니다. 필요한 처리량을 지원하고 \n온디맨드 용량 확장을 구성하기 위해 많은 수의 RCU(읽기 용량 단위)를 프로비저닝합니다. \n저장 프로시저를 DynamoDB 스트림으로 바꿉니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99871-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n옵션 A 는 애플리케이션 코드를 크게 변경하지 않고 복제 지연을 줄이고 진행 중인 운영 \n오버헤드를 최소화하는 가장 적합한 솔루션입니다. 데이터베이스를 Amazon Aurora \nMySQL 로 마이그레이션하면 MySQL 용 Amazon RDS 에 비해 복제 성능과 확장성이 \n향상됩니다. Aurora 복제본은 더 빠른 복제를 제공하여 복제 지연을 줄이고 Aurora Auto \nScaling 은 들어오는 트래픽을 처리하기에 충분한 Aurora 복제본이 있는지 확인합니다. 또한 \nAurora MySQL 기본 기능은 저장 프로시저를 대체하여 데이터베이스의 부하를 줄이고 \n성능을 향상시킬 수 있습니다.",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 338,
    "question": "솔루션 설계자는 대용량 SaaS(Software as a Service) 플랫폼에 대한 재해 복구(DR) 계획을 \n만들어야 합니다. 플랫폼의 모든 데이터는 Amazon Aurora MySQL DB 클러스터에 \n저장됩니다. \nDR 계획은 데이터를 보조 AWS 리전에 복제해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "보조 리전의 Aurora 클러스터에 MySQL 바이너리 로그 복제를 사용합니다. 보조 \n리전에서 Aurora 클러스터용 DB 인스턴스 1 개를 프로비저닝합니다.",
      "DB 클러스터에 대한 Aurora 글로벌 데이터베이스를 설정합니다. 설정이 완료되면 보조 \n리전에서 DB 인스턴스를 제거합니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 보조 리전의 Aurora \n클러스터에 지속적으로 복제합니다. 보조 리전에서 DB 인스턴스를 제거합니다.",
      "DB 클러스터에 대한 Aurora 글로벌 데이터베이스를 설정합니다. 보조 리전에서 최소 \n하나의 DB 인스턴스를 지정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99758-exam-aws-certified-solut",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 339,
    "question": "회사에는 Amazon RDS MySQL DB 인스턴스에서 정보를 검색하는 자격 증명이 내장된 \n사용자 \n지정 \n애플리케이션이 \n있습니다. \n경영진은 \n최소한의 \n프로그래밍 \n노력으로 \n애플리케이션을 더 안전하게 만들어야 한다고 말합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "AWS Key Management Service(AWS KMS)를 사용하여 키를 생성합니다. AWS KMS 에서 \n데이터베이스 자격 증명을 로드하도록 애플리케이션을 구성합니다. 자동 키 순환을 \n활성화합니다.",
      "애플리케이션 사용자를 위해 RDS for MySQL 데이터베이스에서 자격 증명을 생성하고 \n자격 증명을 AWS Secrets Manager 에 저장합니다. Secrets Manager 에서 데이터베이스 자격 \n증명을 로드하도록 애플리케이션을 구성합니다. Secret Manager 에서 자격 증명을 교체하는 \nAWS Lambda 함수를 생성합니다.",
      "애플리케이션 사용자를 위해 RDS for MySQL 데이터베이스에서 자격 증명을 생성하고 \n자격 증명을 AWS Secrets Manager 에 저장합니다. Secrets Manager 에서 데이터베이스 자격 \n증명을 로드하도록 애플리케이션을 구성합니다. Secrets Manager 를 사용하여 RDS for \nMySQL 데이터베이스에서 애플리케이션 사용자의 자격 증명 교체 일정을 설정합니다.",
      "애플리케이션 사용자를 위해 RDS for MySQL 데이터베이스에서 자격 증명을 생성하고 \n자격 증명을 AWS Systems Manager Parameter Store 에 저장합니다. Parameter Store 에서 \n데이터베이스 자격 증명을 로드하도록 애플리케이션을 구성합니다. Parameter Store 를 \n사용하여 RDS for MySQL 데이터베이스에서 애플리케이션 사용자에 대한 자격 증명 교체 \n일정을 설정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99705-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 340,
    "question": "미디어 회사는 AWS\n에서 웹 사이트를 호스팅합니다. 웹 사이트 애플리케이션의 \n아키텍처에는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스 플릿과 \nAmazon Aurora 에서 호스팅되는 데이터베이스가 포함됩니다. 회사의 사이버 보안 팀은 \n애플리케이션이 SQL 주입에 취약하다고 보고합니다. \n회사는 이 문제를 어떻게 해결해야 할까요?",
    "options": [
      "ALB 앞에서 AWS WAF 를 사용합니다. 적절한 웹 ACL 을 AWS WAF 와 연결합니다.",
      "고정 응답으로 SQL 주입에 응답하는 ALB 수신기 규칙을 생성합니다.",
      "모든 SQL 삽입 시도를 자동으로 차단하려면 AWS Shield Advanced 에 가입하십시오.",
      "모든 SQL 주입 시도를 자동으로 차단하도록 Amazon Inspector 를 설정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99708-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 341,
    "question": "회사에는 AWS Lake Formation 에서 관리하는 Amazon S3 데이터 레이크가 있습니다. 이 \n회사는 데이터 레이크의 데이터를 Amazon Aurora MySQL 데이터베이스에 저장된 운영 \n데이터와 결합하여 Amazon QuickSight 에서 시각화를 생성하려고 합니다. 회사는 회사의 \n마케팅 팀이 데이터베이스의 열 하위 집합에만 액세스할 수 있도록 열 수준 권한을 \n적용하려고 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon EMR 을 사용하여 데이터베이스에서 QuickSight SPICE 엔진으로 직접 데이터를 \n수집하십시오. 필요한 열만 포함합니다.",
      "AWS Glue Studio\n를 사용하여 데이터베이스에서 S3 데이터 레이크로 데이터를 \n수집합니다. IAM 정책을 QuickSight 사용자에게 연결하여 열 수준 액세스 제어를 \n적용합니다. QuickSight 에서 Amazon S3 를 데이터 원본으로 사용합니다.",
      "AWS Glue Elastic Views 를 사용하여 Amazon S3 의 데이터베이스에 대한 구체화된 \n보기를 생성합니다. QuickSight 사용자에 대한 열 수준 액세스 제어를 적용하려면 S3 버킷 \n정책을 생성합니다. QuickSight 에서 Amazon S3 를 데이터 원본으로 사용합니다.",
      "Lake Formation 청사진을 사용하여 데이터베이스에서 S3 데이터 레이크로 데이터를 \n수집합니다. Lake Formation 을 사용하여 QuickSight 사용자에 대한 열 수준 액세스 제어를 \n적용합니다. QuickSight 에서 Amazon Athena 를 데이터 원본으로 사용합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99710-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 342,
    "question": "트랜잭션 처리 회사에는 Amazon EC2 인스턴스에서 실행되는 매주 스크립팅된 배치 작업이 \n있습니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. 트랜잭션 수는 다를 수 있지만 \n각 실행에서 기록되는 기준 CPU 사용률은 60% 이상입니다. 회사는 작업이 실행되기 30 분 \n전에 용량을 프로비저닝해야 합니다. \n현재 엔지니어는 Auto Scaling 그룹 파라미터를 수동으로 수정하여 이 작업을 완료합니다. \n회사에는 Auto Scaling 그룹 수에 필요한 용량 추세를 분석할 리소스가 없습니다. 회사는 \nAuto Scaling 그룹의 원하는 용량을 수정하는 자동화된 방법이 필요합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Auto Scaling 그룹에 대한 동적 조정 정책을 생성합니다. CPU 사용률 메트릭을 기반으로 \n확장하도록 정책을 구성합니다. 지표의 대상 값을 60%로 설정합니다.",
      "Auto Scaling 그룹에 대한 예약 조정 정책을 생성합니다. 원하는 적정 용량, 최소 용량, \n최대 용량을 설정합니다. 반복을 매주로 설정합니다. 일괄 작업이 실행되기 전 30 분으로 \n시작 시간을 설정합니다.",
      "Auto Scaling 그룹에 대한 예측 조정 정책을 생성합니다. 예측을 기반으로 확장하도록 \n정책을 구성합니다. 스케일링 지표를 CPU 사용률로 설정합니다. 지표의 대상 값을 60%로 \n설정합니다. 정책에서 작업이 실행되기 30 분 전에 사전 실행되도록 인스턴스를 설정합니다.",
      "Auto Scaling 그룹의 CPU 사용률 지표 값이 60%에 도달하면 AWS Lambda 함수를 \n호출하는 Amazon EventBridge 이벤트를 생성합니다. Auto Scaling 그룹의 원하는 용량과 \n최대 용량을 20% 늘리도록 Lambda 함수를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/100204-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 옵션은 기계 학습을 사용하여 CloudWatch 의 기록 데이터를 기반으로 용량 요구 사항을 \n예측하는 일종의 조정 정책인 Auto Scaling 그룹에 대한 예측 조정 정책을 사용하기 때문에 \n가장 효율적입니다. 또한 Auto Scaling 그룹이 트래픽 변경에 앞서 용량을 조정할 수 \n있도록 예측을 기반으로 확장하도록 정책을 구성합니다. 또한 조정 메트릭을 CPU 사용률로",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 343,
    "question": "솔루션 설계자는 회사의 재해 복구(DR) 아키텍처를 설계하고 있습니다. 이 회사에는 예약된 \n백업이 \n있는 \n프라이빗 \n서브넷의 \nAmazon \nEC2 \n인스턴스에서 \n실행되는 \nMySQL \n데이터베이스가 있습니다. DR 설계에는 여러 AWS 리전이 포함되어야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "MySQL 데이터베이스를 여러 EC2 인스턴스로 마이그레이션합니다. DR 지역에서 대기 \nEC2 인스턴스를 구성합니다. 복제를 켭니다.",
      "MySQL 데이터베이스를 Amazon RDS\n로 마이그레이션합니다. 다중 AZ 배포를 \n사용합니다. 다른 가용 영역에서 기본 DB 인스턴스에 대한 읽기 복제를 켭니다.",
      "MySQL 데이터베이스를 Amazon Aurora 글로벌 데이터베이스로 마이그레이션합니다. \n기본 리전에서 기본 DB 클러스터를 호스팅합니다. DR 리전에서 보조 DB 클러스터를 \n호스팅합니다.",
      "S3 CRR(Cross-Region Replication)용으로 구성된 Amazon S3 버킷에 MySQL \n\n=== PAGE 360 ===\n데이터베이스의 예약된 백업을 저장합니다. 데이터 백업을 사용하여 DR 지역에서 \n데이터베이스를 복원하십시오."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/100302-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nMySQL 데이터베이스를 Amazon Aurora 글로벌 데이터베이스로 마이그레이션하는 것이 \n최소한의 운영 오버헤드가 필요하기 때문에 최상의 솔루션입니다. Aurora 는 자동 장애 \n조치를 제공하는 관리형 서비스이므로 대기 인스턴스를 수동으로 구성할 필요가 없습니다. \n기본 DB 클러스터는 기본 리전에서 호스팅할 수 있고 보조 DB 클러스터는 DR 리전에서 \n호스팅할 수 있습니다. 이 접근 방식을 통해 상당한 수동 개입 없이 데이터를 여러 \n리전에서 항상 사용 가능하고 최신 상태로 유지할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 344,
    "question": "회사에는 Amazon Simple Queue Service(Amazon SQS)를 사용하여 메시지를 구문 분석하는 \nJava 애플리케이션이 있습니다. 애플리케이션은 크기가 256KB 보다 큰 메시지를 구문 \n분석할 수 없습니다. 회사는 응용 프로그램이 50MB 만큼 큰 메시지를 구문 분석할 수 있는 \n기능을 제공하는 솔루션을 구현하려고 합니다. \n코드를 가장 적게 변경하여 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Java\n용 Amazon SQS 확장 클라이언트 라이브러리를 사용하여 Amazon S3\n에서 \n256KB 보다 큰 메시지를 호스팅합니다.",
      "Amazon SQS 대신 Amazon EventBridge 를 사용하여 애플리케이션에서 큰 메시지를 \n게시합니다.",
      "256KB 보다 큰 메시지를 처리하도록 Amazon SQS 의 제한을 변경합니다.",
      "Amazon Elastic File System(Amazon EFS)에 256KB 보다 큰 메시지를 저장합니다. \n메시지에서 이 위치를 참조하도록 Amazon SQS 를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/100202-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 345,
    "question": "회사에서 주요 웹 애플리케이션 중 하나의 콘텐츠에 대한 액세스를 제한하고 AWS 에서 \n사용할 수 있는 권한 부여 기술을 사용하여 콘텐츠를 보호하려고 합니다. 이 회사는 \n\n=== PAGE 361 ===\n서버리스 아키텍처와 100 명 미만의 사용자를 위한 인증 솔루션을 구현하려고 합니다. \n솔루션은 기본 웹 애플리케이션과 통합하고 웹 콘텐츠를 전역적으로 제공해야 합니다. \n솔루션은 또한 회사의 사용자 기반이 성장함에 따라 확장되어야 하며 가능한 한 가장 낮은 \n로그인 대기 시간을 제공해야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "인증에 Amazon Cognito 를 사용하십시오. 인증을 위해 Lambda@Edge 를 사용합니다. \nAmazon CloudFront 를 사용하여 전 세계적으로 웹 애플리케이션을 제공합니다.",
      "인증을 위해 Microsoft Active Directory 용 AWS Directory Service 를 사용합니다. 승인을 \n위해 AWS Lambda\n를 사용합니다. Application Load Balancer\n를 사용하여 웹 \n애플리케이션을 전역적으로 제공합니다.",
      "인증에 Amazon Cognito 를 사용합니다. 승인을 위해 AWS Lambda 를 사용합니다. \nAmazon S3 Transfer Acceleration\n을 사용하여 전 세계적으로 웹 애플리케이션을 \n제공합니다.",
      "인증을 위해 Microsoft Active Directory 용 AWS Directory Service 를 사용합니다. 인증을 \n위해 Lambda@Edge 를 사용합니다. AWS Elastic Beanstalk 를 사용하여 전 세계적으로 웹 \n애플리케이션을 제공합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/100341-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\naws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-h\neadersusing-lambdaedge-and-amazon-cloudfront/ \nAmazon CloudFront 는 웹 콘텐츠, 비디오 및 API 를 대규모로 안전하게 전송할 수 있는 \n글로벌 콘텐츠 전송 네트워크(CDN) 서비스입니다. 인증을 위해 Cognito와 통합하고 인증을 \n위해 Lambda@Edge 와 통합하므로 전 세계적으로 웹 콘텐츠를 제공하는 데 이상적인 \n선택입니다. Lambda@Edge\n는 AWS Lambda 기능을 사용자에게 더 가까운 곳에서 \n전역적으로 실행할 수 있는 서비스로, 지연 시간을 줄이고 응답 시간을 단축합니다. 또한 \nCloudFront 의 콘텐츠를 보호하기 위해 에지에서 인증 로직을 처리할 수 있습니다. 이 \n시나리오에서 Lambda@Edge 는 에지에서 실행하는 짧은 대기 시간 이점을 활용하면서 웹 \n애플리케이션에 대한 권한 부여를 제공할 수 있습니다.",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 346,
    "question": "회사의 데이터 센터에 노후화된 NAS(Network-Attached Storage) 어레이가 있습니다. NAS \n어레이는 SMB 공유 및 NFS 공유를 클라이언트 워크스테이션에 제공합니다. 회사는 새 \n\n=== PAGE 362 ===\nNAS 어레이를 구매하기를 원하지 않습니다. 회사는 또한 NAS 어레이의 지원 계약을 \n갱신하는 데 드는 비용을 원하지 않습니다. 일부 데이터는 자주 액세스되지만 대부분의 \n데이터는 비활성 상태입니다. \n솔루션 설계자는 데이터를 Amazon S3 로 마이그레이션하고 S3 수명 주기 정책을 사용하며 \n클라이언트 워크스테이션에 대해 동일한 모양과 느낌을 유지하는 솔루션을 구현해야 합니다. \n솔루션 설계자는 AWS Storage Gateway 를 솔루션의 일부로 식별했습니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 유형의 스토리지 게이트웨이를 \n프로비저닝해야 합니까?",
    "options": [
      "볼륨 게이트웨이",
      "테이프 게이트웨이",
      "Amazon FSx 파일 게이트웨이",
      "Amazon S3 파일 게이트웨이"
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/100220-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Storage Gateway": "사내 장비와 AWS 스토리지를 연결해 하이브리드 환경을 만드는 서비스"
    }
  },
  {
    "id": 347,
    "question": "회사에는 Amazon EC2 인스턴스에서 실행 중인 애플리케이션이 있습니다. 솔루션 설계자는 \n회사의 현재 요구 사항을 기반으로 특정 인스턴스 제품군 및 다양한 인스턴스 크기로 \n회사를 표준화했습니다. \n회사는 향후 3\n년 동안 애플리케이션의 비용 절감을 극대화하고자 합니다. 회사는 \n애플리케이션 인기도 및 사용량에 따라 향후 6 개월 내에 인스턴스 패밀리 및 크기를 \n변경할 수 있어야 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "컴퓨팅 절감 플랜(Compute Savings Plan)",
      "EC2 인스턴스 절감 계획(EC2 Instance Savings Plan)",
      "영역 예약 인스턴스(Zonal Reserved Instances)",
      "표준 예약 인스턴스(Standard Reserved Instances)"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/100221-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 348,
    "question": "회사는 웨어러블 장치를 사용하는 많은 참가자로부터 데이터를 수집합니다. 회사는 \n\n=== PAGE 363 ===\n데이터를 Amazon DynamoDB 테이블에 저장하고 애플리케이션을 사용하여 데이터를 \n분석합니다. 데이터 워크로드는 일정하고 예측 가능합니다. 회사는 DynamoDB 에 대한 \n예상 예산 이하를 유지하려고 합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "프로비저닝 모드와 DynamoDB Standard-Infrequent Access(DynamoDB Standard-IA)를 \n사용합니다. 예상 워크로드에 대한 용량을 예약합니다.",
      "프로비저닝 모드를 사용합니다. RCU(읽기 용량 단위) 및 WCU(쓰기 용량 단위)를 \n지정합니다.",
      "주문형 모드를 사용합니다. 읽기 용량 단위(RCU) 및 쓰기 용량 단위(WCU)를 \n워크로드의 변경 사항을 수용할 수 있을 만큼 높게 설정합니다.",
      "주문형 모드를 사용합니다. 예약 용량이 있는 RCU(읽기 용량 단위) 및 WCU(쓰기 용량 \n단위)를 지정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/100222-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n이 옵션은 테이블에서 읽기 및 쓰기를 처리하기 위한 읽기/쓰기 용량 모드인 프로비저닝 \n모드를 사용하기 때문에 가장 효율적입니다. 이를 통해 애플리케이션이 수행할 것으로 \n예상되는 읽기 및 쓰기 처리량을 지정할 수 있습니다. 또한 애플리케이션이 초당 읽거나 \n써야 하는 데이터의 양인 RCU(읽기 용량 단위) 및 WCU(쓰기 용량 단위)를 지정합니다. \n또한 프로비저닝 모드는 예측 가능한 워크로드에 대해 온디맨드 모드보다 비용이 낮기 \n때문에 DynamoDB 에 대한 예상 예산 이하로 유지해야 하는 요구 사항을 충족합니다. \n이 솔루션은 일정하고 예측 가능한 데이터 워크로드가 있는 웨어러블 장치를 사용하는 많은 \n참여자로부터 데이터를 수집해야 하는 요구 사항을 충족합니다. \n \n옵션 A\n는 프로비저닝 모드와 DynamoDB Standard-Infrequent Access(DynamoDB \nStandard-IA)를 사용하기 때문에 덜 효율적입니다. DynamoDB Standard-Infrequent \nAccess 는 밀리초의 지연 시간이 필요한 자주 액세스하지 않는 항목을 위한 스토리지 \n클래스입니다. 그러나 이는 일정하고 예측 가능한 데이터 워크로드가 있는 웨어러블 장치를 \n사용하는 많은 참여자로부터 데이터를 수집해야 하는 요구 사항을 충족하지 않습니다. \nDynamoDB Standard-IA 는 액세스 빈도가 30 일에 한 번 미만인 항목에 더 적합하기 \n때문입니다. \n \n옵션 C 는 수요 변화에 따라 테이블 용량을 자동으로 조정하여 사용한 만큼만 비용을 \n지불하는 읽기/쓰기 용량 모드인 온디맨드 모드를 사용하기 때문에 효율성이 떨어집니다.",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 349,
    "question": "회사는 ap-southeast-3 리전의 Amazon Aurora PostgreSQL 데이터베이스에 기밀 데이터를 \n저장합니다. 데이터베이스는 AWS Key Management Service(AWS KMS) 고객 관리형 키로 \n암호화됩니다. 이 회사는 최근에 인수되었으며 ap-southeast-3 에서 인수 회사의 AWS \n계정과 데이터베이스 백업을 안전하게 공유해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "데이터베이스 스냅샷을 생성합니다. 스냅샷을 암호화되지 않은 새 스냅샷에 복사합니다. \n인수 회사의 AWS 계정과 새 스냅샷을 공유합니다.",
      "데이터베이스 스냅샷을 생성합니다. 인수 회사의 AWS 계정을 KMS 키 정책에 \n추가합니다. 인수 회사의 AWS 계정과 스냅샷을 공유합니다.",
      "다른 AWS 관리형 KMS 키를 사용하는 데이터베이스 스냅샷을 생성합니다. 인수 회사의 \nAWS 계정을 KMS 키 별칭에 추가합니다. 인수 회사의 AWS 계정과 스냅샷을 공유합니다.",
      "데이터베이스 스냅샷을 생성합니다. 데이터베이스 스냅샷을 다운로드합니다. Amazon S3 \n버킷에 데이터베이스 스냅샷을 업로드합니다. 인수 회사의 AWS 계정에서 액세스를 \n허용하도록 S3 버킷 정책을 업데이트합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/100299-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \n\ndocs.aws.amazon.com/ko_kr/kms/latest/developerguide/key-policy-modifying-ex\nternal-accounts.html \n다른 사용자 지정 AWS KMS 키를 생성할 필요가 없습니다. \n\naws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-sn",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진",
      "KMS": "데이터 암호화에 사용되는 키를 생성하고 관리하는 보안 서비스"
    }
  },
  {
    "id": 350,
    "question": "한 회사에서 us-east-1 리전의 Microsoft SQL Server 단일 AZ DB 인스턴스용 100GB \nAmazon RDS\n를 사용하여 고객 트랜잭션을 저장합니다. 회사는 DB 인스턴스에 대한 \n고가용성 및 자동 복구가 필요합니다. \n또한 회사는 1 년에 여러 번 RDS 데이터베이스에 대한 보고서를 실행해야 합니다. 보고 \n프로세스로 인해 트랜잭션이 고객 계정에 게시되는 데 평소보다 오래 걸립니다. 회사는 \n보고 프로세스의 성능을 향상시킬 솔루션이 필요합니다. \n이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "단일 AZ DB 인스턴스에서 다중 AZ 배포로 DB 인스턴스를 수정합니다.",
      "현재 DB 인스턴스의 스냅샷을 찍습니다. 다른 가용 영역의 새 RDS 배포로 스냅샷을 \n복원합니다.",
      "다른 가용 영역에서 DB 인스턴스의 읽기 전용 복제본을 생성합니다. 보고서에 대한 \n모든 요청은 읽기 전용 복제본을 가리킵니다.",
      "데이터베이스를 RDS Custom 으로 마이그레이션합니다.",
      "RDS Proxy 를 사용하여 보고 요청을 유지 관리 기간으로 제한합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/100300-exam-aws-certified-sol\nutions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  }
];