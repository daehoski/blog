export const quizData = [
  {
    "id": 276,
    "question": "한 회사에 Auto Scaling 그룹의 여러 Amazon EC2 인스턴스에 배포된 다중 계층 \n애플리케이션이 있습니다. Amazon RDS for Oracle 인스턴스는 Oracle 관련 PL/SQL 기능을 \n사용하는 애플리케이션의 데이터 계층입니다. 애플리케이션에 대한 트래픽은 꾸준히 \n증가하고 있습니다. 이로 인해 EC2 인스턴스가 과부하되고 RDS 인스턴스의 스토리지가 \n부족해집니다. Auto Scaling 그룹에는 조정 지표가 없으며 최소 정상 인스턴스 수만 \n정의합니다. 이 회사는 트래픽이 안정되기 전에 꾸준하지만 예측할 수 없는 속도로 계속 \n증가할 것이라고 예측합니다. \n증가된 트래픽에 대해 시스템이 자동으로 확장될 수 있도록 하려면 솔루션 설계자가 무엇을 \n해야 합니까? (2 개 선택)",
    "options": [
      "RDS for Oracle 인스턴스에서 스토리지 Auto Scaling 을 구성합니다.",
      "Auto \nScaling \n스토리지를 \n사용하려면 \n데이터베이스를 \nAmazon \nAurora\n로 \n마이그레이션하십시오.",
      "사용 가능한 저장 공간 부족에 대해 Oracle 인스턴스용 RDS 에서 경보를 구성합니다.",
      "평균 CPU 를 조정 지표로 사용하도록 Auto Scaling 그룹을 구성합니다.",
      "평균 여유 메모리를 조정 지표로 사용하도록 Auto Scaling 그룹을 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99739-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAuto Scaling Storage RDS 는 스토리지 문제를 완화하고 Oracle Pl/Sql 을 Aurora 로 \n마이그레이션하는 것은 번거롭습니다. 또한 Aurora 에는 기본적으로 자동 스토리지 확장 \n기능이 있습니다. \n\ndocs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.\nhtml#USER_PIOPS.Autoscaling",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능",
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 277,
    "question": "회사는 \n비디오 \n콘텐츠를 \n게시하고 \n모든 \n모바일 \n플랫폼에서 \n사용할 \n수 \n있도록 \n트랜스코딩하는 온라인 서비스를 제공합니다. 애플리케이션 아키텍처는 Amazon Elastic File \nSystem(Amazon EFS) Standard 를 사용하여 여러 Amazon EC2 Linux 인스턴스가 처리를 \n위해 비디오 콘텐츠에 액세스할 수 있도록 비디오를 수집하고 저장합니다. 시간이 지남에 \n따라 서비스의 인기가 높아짐에 따라 스토리지 비용이 너무 비싸졌습니다. \n\n=== PAGE 307 ===\n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?",
    "options": [
      "파일용 AWS Storage Gateway 를 사용하여 동영상 콘텐츠를 저장하고 처리합니다.",
      "볼륨에 AWS Storage Gateway 를 사용하여 비디오 콘텐츠를 저장하고 처리합니다.",
      "Amazon EFS 를 사용하여 비디오 콘텐츠를 저장합니다. 처리가 완료되면 파일을 Amazon \nElastic Block Store(Amazon EBS)로 전송합니다.",
      "동영상 콘텐츠 저장을 위해 Amazon S3 를 사용합니다. 처리를 위해 파일을 서버에 \n연결된 Amazon Elastic Block Store(Amazon EBS) 볼륨으로 임시로 이동합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99509-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n* 비디오 콘텐츠의 대규모, 내구성 및 저렴한 스토리지를 위한 Amazon S3. S3 스토리지 \n비용은 EFS 보다 훨씬 저렴합니다. \n* Amazon EBS 는 처리 중에 일시적으로만 가능합니다. 비디오를 처리해야 할 때만 EBS \n볼륨을 마운트하고 그 후에 마운트를 해제함으로써 컨텐츠가 고가의 EBS 스토리지에 \n소요되는 시간을 최소화합니다. \n* EBS 볼륨은 활성 처리에 필요한 워크로드에 맞게 크기를 조정하여 비용을 낮출 수 \n있습니다. 볼륨은 전체 비디오 라이브러리를 장기간 저장할 필요가 없습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 278,
    "question": "회사에서 계층적 구조 관계로 직원 데이터를 저장하는 애플리케이션을 만들고자 합니다. \n회사는 직원 데이터에 대한 트래픽이 많은 쿼리에 대한 최소 대기 시간 응답이 필요하며 \n민감한 데이터를 보호해야 합니다. 회사는 또한 직원 데이터에 재무 정보가 있는 경우 월별 \n이메일 메시지를 받아야 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? \n(2 개 선택)",
    "options": [
      "Amazon Redshift 를 사용하여 직원 데이터를 계층에 저장하십시오. 매월 Amazon S3 에 \n데이터를 언로드합니다.",
      "Amazon DynamoDB 를 사용하여 직원 데이터를 계층에 저장합니다. 매월 데이터를 \nAmazon S3 로 내보냅니다.",
      "AWS 계정에 대해 Amazon Macie 를 구성합니다. Macie 를 Amazon EventBridge 와 \n통합하여 월별 이벤트를 AWS Lambda 로 전송합니다.",
      "Amazon Athena 를 사용하여 Amazon S3 에서 직원 데이터를 분석합니다. Athena 를 \nAmazon QuickSight\n와 통합하여 분석 대시보드를 게시하고 사용자와 대시보드를 \n\n=== PAGE 308 ===\n공유합니다.",
      "AWS 계정에 대해 Amazon Macie 를 구성합니다. Macie 를 Amazon EventBridge 와 \n통합하여 Amazon Simple Notification Service(Amazon SNS) 구독을 통해 월별 알림을 \n보냅니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99940-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n참고: \n\ndocs.aws.amazon.com/ko_kr/prescriptive-guidance/latest/dynamodb-hierarchical\n-data-model/introduction.html",
    "glossary": {}
  },
  {
    "id": 279,
    "question": "회사에 Amazon DynamoDB 테이블이 지원하는 애플리케이션이 있습니다. 회사의 규정 \n준수 요구 사항은 데이터베이스 백업을 매월 수행하고 6 개월 동안 사용할 수 있어야 하며 \n7 년 동안 유지해야 한다고 지정합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "매월 1 일에 DynamoDB 테이블을 백업하는 AWS Backup 계획을 생성합니다. 6 개월 후 \n백업을 콜드 스토리지로 전환하는 수명 주기 정책을 지정합니다. 각 백업의 보존 기간을 \n7 년으로 설정합니다.",
      "매월 1 일에 DynamoDB 테이블의 DynamoDB 온디맨드 백업을 생성합니다. 6 개월 후 \n백업을 Amazon S3 Glacier Flexible Retrieval 로 전환합니다. 7 년보다 오래된 백업을 \n삭제하려면 S3 수명 주기 정책을 생성하십시오.",
      "AWS SDK 를 사용하여 DynamoDB 테이블의 온디맨드 백업을 생성하는 스크립트를 \n개발합니다. 매월 1 일에 스크립트를 실행하는 Amazon EventBridge 규칙을 설정합니다. \n6 개월 이상 된 DynamoDB 백업을 콜드 스토리지로 전환하고 7 년 이상 된 백업을 \n삭제하기 위해 매월 2 일에 실행할 두 번째 스크립트를 생성합니다.",
      "AWS CLI 를 사용하여 DynamoDB 테이블의 온디맨드 백업을 생성합니다. Cron 표현식을 \n사용하여 매월 1 일에 명령을 실행하는 Amazon EventBridge 규칙을 설정합니다. 6 개월 후 \n백업을 콜드 스토리지로 전환하고 7 년 후 백업을 삭제하도록 명령에 지정합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99793-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스"
    }
  },
  {
    "id": 280,
    "question": "회사는 웹 사이트에서 Amazon CloudFront\n를 사용하고 있습니다. 회사는 CloudFront \n배포에서 로깅을 활성화했으며 로그는 회사의 Amazon S3 버킷 중 하나에 저장됩니다. \n회사는 로그에 대한 고급 분석을 수행하고 시각화를 구축해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "Amazon Athena\n에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 \n분석합니다. AWS Glue 로 결과를 시각화합니다.",
      "Amazon Athena\n에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 \n분석합니다. Amazon QuickSight 로 결과를 시각화합니다.",
      "Amazon DynamoDB 에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 \n분석합니다. AWS Glue 로 결과를 시각화합니다.",
      "Amazon DynamoDB 에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 \n분석합니다. Amazon QuickSight 로 결과를 시각화합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99508-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\ndocs.aws.amazon.com/quicksight/latest/user/welcome.html \nAthena 를 사용하여 S3 버킷의 CloudFront 로그를 쿼리하고 QuickSight 를 사용하여 결과를 \n시각화하는 것이 비용 효율적이고 확장 가능하며 인프라 설정이 필요하지 않기 때문에 \n최상의 솔루션입니다. 또한 전담 개발자 팀 없이 회사에서 고급 분석을 수행하고 대화형 \n시각화를 구축할 수 있는 강력한 솔루션을 제공합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구"
    }
  },
  {
    "id": 281,
    "question": "=== PAGE 310 ===\n회사는 PostgreSQL DB 인스턴스용 Amazon RDS 를 사용하여 웹 서버 플릿을 실행합니다. \n일상적인 규정 준수 검사 후 회사는 모든 프로덕션 데이터베이스에 대해 1 초 미만의 복구 \n지점 목표(RPO)를 요구하는 표준을 설정합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "DB 인스턴스에 대해 다중 AZ 배포를 활성화합니다.",
      "하나의 가용 영역에서 DB 인스턴스에 대해 Auto Scaling 을 활성화합니다.",
      "하나의 가용 영역에서 DB 인스턴스를 구성하고 별도의 가용 영역에서 여러 읽기 전용 \n복제본을 생성합니다.",
      "하나의 가용 영역에서 DB 인스턴스를 구성하고 AWS DMS(AWS Database Migration \nService) 변경 데이터 캡처(CDC) 작업을 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99511-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 다른 가용 영역에 있는 대기 인스턴스에 데이터를 자동으로 복제하여 RDS \n데이터베이스 인스턴스에 향상된 가용성과 내구성을 제공하는 DB 인스턴스용 다중 AZ \n배포를 사용하기 때문에 가장 효율적입니다. 또한 대기 인스턴스가 동기식 물리적 복제를 \n사용하여 기본 인스턴스와 동기화 상태를 유지하므로 모든 프로덕션 데이터베이스에 대해 \n1\n초 \n미만의 \n복구 \n지점 \n목표(RPO)를 \n제공합니다. \n이 \n솔루션은 \n모든 \n프로덕션 \n데이터베이스에 대해 1 초 미만의 RPO 요구 사항을 충족합니다. \n옵션 B 는 로드 또는 일정에 따라 DB 인스턴스의 컴퓨팅 용량을 자동으로 조정하는 방법인 \n하나의 가용 영역에서 DB 인스턴스에 대해 Auto Scaling 을 사용하기 때문에 효율성이 \n떨어집니다. \n그러나 이것은 데이터를 다른 가용 영역에 복제하지 않기 때문에 모든 프로덕션 \n데이터베이스에 대해 1 초 미만의 RPO 를 제공하지 않습니다. \n옵션 C 는 읽기 트래픽을 제공하고 조정을 지원할 수 있는 기본 데이터베이스의 읽기 전용 \n복사본인 별도의 가용 영역에서 읽기 전용 복제본을 사용하기 때문에 효율성이 떨어집니다. \n그러나 읽기 전용 복제본은 비동기식 복제를 사용하고 기본 데이터베이스보다 지연될 수 \n있으므로 모든 프로덕션 데이터베이스에 대해 1 초 미만의 RPO 를 제공하지 않습니다. \n옵션 D 는 원본 데이터에 대한 변경 사항을 캡처하고 대상 데이터에 적용하는 작업인 AWS \nDMS(AWS Database Migration Service) 변경 데이터 캡처(CDC) 작업을 사용하기 때문에 \n효율성이 \n떨어집니다. \n그러나 \nAWS \nDMS\n는 \n비동기식 \n복제를 \n사용하고 \n소스 \n데이터베이스보다 지연될 수 있으므로 모든 프로덕션 데이터베이스에 대해 1 초 미만의 \nRPO 를 제공하지 않습니다.",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 282,
    "question": "회사는 VPC의 프라이빗 서브넷에 있는 Amazon EC2 인스턴스에 배포된 웹 애플리케이션을 \n실행합니다. 퍼블릭 서브넷에서 확장되는 ALB(Application Load Balancer)는 웹 트래픽을 \nEC2 인스턴스로 보냅니다. 회사는 ALB\n에서 EC2 인스턴스로의 인바운드 트래픽을 \n제한하는 동시에 EC2 인스턴스의 프라이빗 서브넷 내부 또는 외부의 다른 소스로부터의 \n액세스를 방지하는 새로운 보안 조치를 구현하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "인터넷에서 EC2 인스턴스의 프라이빗 IP 주소로 트래픽을 보내도록 라우팅 테이블의 \n경로를 구성합니다.",
      "ALB\n의 보안 그룹에서 오는 트래픽만 허용하도록 EC2 인스턴스의 보안 그룹을 \n구성합니다.",
      "EC2 인스턴스를 퍼블릭 서브넷으로 이동합니다. EC2 인스턴스에 탄력적 IP 주소 집합을 \n제공합니다.",
      "모든 포트에서 모든 TCP 트래픽을 허용하도록 ALB 에 대한 보안 그룹을 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99660-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nALB 에서 EC2 인스턴스로의 인바운드 트래픽을 제한하려면 EC2 인스턴스의 보안 그룹은 \nALB 의 보안 그룹에서 들어오는 트래픽만 허용해야 합니다. 이렇게 하면 EC2 인스턴스는 \nALB 에서만 요청을 받을 수 있으며 프라이빗 서브넷 내부 또는 외부의 다른 소스에서는 \n요청을 받을 수 없습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치"
    }
  },
  {
    "id": 283,
    "question": "연구 회사는 시뮬레이션 응용 프로그램과 시각화 응용 프로그램으로 구동되는 실험을 \n실행합니다. 시뮬레이션 애플리케이션은 Linux 에서 실행되며 5 분마다 NFS 공유에 중간 \n데이터를 출력합니다. 시각화 응용 프로그램은 시뮬레이션 출력을 표시하고 SMB 파일 \n시스템이 필요한 Windows 데스크톱 응용 프로그램입니다. \n회사는 두 개의 동기화된 파일 시스템을 유지 관리합니다. 이 전략은 데이터 중복 및 \n비효율적인 리소스 사용을 유발합니다. 회사는 애플리케이션에 코드를 변경하지 않고 \n애플리케이션을 AWS 로 마이그레이션해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "두 애플리케이션을 모두 AWS Lambda\n로 마이그레이션합니다. 애플리케이션 간에 \n\n=== PAGE 312 ===\n데이터를 교환할 Amazon S3 버킷을 생성합니다.",
      "두 \n애플리케이션을 \n모두 \nAmazon \nElastic \nContainer \nService(Amazon \nECS)로 \n마이그레이션합니다. 스토리지용 Amazon FSx 파일 게이트웨이를 구성합니다.",
      "시뮬레이션 애플리케이션을 Linux Amazon EC2 인스턴스로 마이그레이션합니다. 시각화 \n애플리케이션을 \nWindows \nEC2 \n인스턴스로 \n마이그레이션합니다. \n애플리케이션 \n간에 \n데이터를 교환하도록 Amazon Simple Queue Service(Amazon SQS)를 구성합니다.",
      "시뮬레이션 애플리케이션을 Linux Amazon EC2 인스턴스로 마이그레이션합니다. 시각화 \n애플리케이션을 Windows EC2 인스턴스로 마이그레이션합니다. 스토리지용 NetApp \nONTAP 용 Amazon FSx 를 구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99512-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 284,
    "question": "예산 계획의 일환으로 경영진은 사용자별로 나열된 AWS 청구 항목에 대한 보고서를 \n원합니다. 데이터는 부서 예산을 만드는 데 사용됩니다. 솔루션 설계자는 이 보고서 정보를 \n얻는 가장 효율적인 방법을 결정해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon Athena 로 쿼리를 실행하여 보고서를 생성합니다.",
      "Cost Explorer 에서 보고서를 생성하고 보고서를 다운로드합니다.",
      "청구 대시보드에서 청구서 세부 정보에 액세스하고 청구서를 다운로드합니다.",
      "Amazon Simple Email Service(Amazon SES)로 알리도록 AWS 예산에서 비용 예산을 \n수정합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99513-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 285,
    "question": "회사는 Amazon S3 를 사용하여 정적 웹 사이트를 호스팅합니다. 회사는 웹 페이지에 \n연락처 양식을 추가하려고 합니다. 연락처 양식에는 사용자가 이름, 이메일 주소, 전화번호 \n및 사용자 메시지를 입력할 수 있는 동적 서버 측 구성 요소가 있습니다. 회사는 매월 \n100 회 미만의 사이트 방문이 있을 것으로 예상합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon Elastic Container Service(Amazon ECS)에서 동적 문의 양식 페이지를 \n\n=== PAGE 313 ===\n호스팅합니다. 타사 이메일 공급자에 연결하도록 Amazon Simple Email Service(Amazon \nSES)를 설정합니다.",
      "Amazon Simple Email Service(Amazon SES)를 호출하는 AWS Lambda 백엔드로 Amazon \nAPI Gateway 엔드포인트를 생성합니다.",
      "Amazon Lightsail 을 배포하여 정적 웹 페이지를 동적으로 변환합니다. 클라이언트 측 \n스크립팅을 사용하여 연락처 양식을 작성하십시오. 양식을 Amazon WorkMail 과 통합합니다.",
      "t2.micro Amazon EC2 인스턴스를 생성합니다. LAMP(Linux, Apache, MySQL, \nPHP/Perl/Python) 스택을 배포하여 웹 페이지를 호스팅합니다. 클라이언트 측 스크립팅을 \n사용하여 연락처 양식을 작성하십시오. 양식을 Amazon WorkMail 과 통합합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99680-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 시간 경과에 따른 AWS 비용 및 사용량을 시각화, 이해 및 관리할 수 있는 \n도구인 Cost Explorer 를 사용하기 때문에 가장 효율적입니다. 비용 탐색기에서 사용자 이름 \n태그를 필터로 사용하여 사용자별로 AWS 청구 항목을 나열하는 보고서를 생성할 수 \n있습니다. 그런 다음 보고서를 CSV 파일로 다운로드하여 예산 계획에 사용할 수 있습니다. \n \n옵션 A 는 표준 SQL 을 사용하여 Amazon S3 의 데이터를 분석할 수 있는 서버리스 대화형 \n쿼리 서비스인 Amazon Athena 를 사용하기 때문에 효율성이 떨어집니다. S3 에서 AWS 비용 \n및 사용 보고서 데이터를 가리키는 Athena 테이블을 설정한 다음 쿼리를 실행하여 \n보고서를 생성해야 합니다. 이렇게 하면 추가 비용과 복잡성이 발생합니다. \n \n옵션 C 는 AWS 비용 및 사용량에 대한 높은 수준의 요약을 제공하는 결제 대시보드를 \n사용하기 때문에 효율성이 떨어집니다. 청구 대시보드에서 청구 세부 정보에 액세스하고 \n청구서를 통해 다운로드할 수 있지만 사용자별로 청구 항목이 나열되지 않습니다. 추가 \n단계가 필요한 사용자 이름별로 비용을 그룹화하려면 태그를 사용해야 합니다. \n \n옵션 D 는 서비스 사용량, 서비스 비용 및 인스턴스 예약을 계획할 수 있는 도구인 AWS \n예산을 사용하기 때문에 효율성이 떨어집니다. Amazon Simple Email Service(Amazon \nSES)로 알리도록 AWS 예산에서 비용 예산을 수정할 수 있지만 이렇게 하면 사용자별로 \nAWS 청구 항목 보고서가 생성되지 않습니다. 이는 실제 또는 예상 비용이 예산 금액을 \n초과하거나 초과할 것으로 예상되는 경우에만 알려줍니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구"
    }
  },
  {
    "id": 286,
    "question": "회사에는 Amazon S3 앞의 Amazon CloudFront 에서 호스팅되는 정적 웹 사이트가 있습니다. \n정적 웹 사이트는 데이터베이스 백엔드를 사용합니다. 회사는 웹사이트가 웹사이트의 Git \n리포지토리에서 이루어진 업데이트를 반영하지 않는다는 사실을 알게 되었습니다. 회사는 \nGit 리포지토리와 Amazon S3 간의 지속적 통합 및 지속적 전달(CI/CD) 파이프라인을 \n확인합니다. 회사는 webhook\n이 제대로 구성되었는지, CI/CD 파이프라인이 성공적인 \n배포를 나타내는 메시지를 보내고 있는지 확인합니다. \n솔루션 설계자는 웹 사이트에 업데이트를 표시하는 솔루션을 구현해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Application Load Balancer 를 추가합니다.",
      "Redis 또는 Memcached 용 Amazon ElastiCache 를 웹 애플리케이션의 데이터베이스 \n계층에 추가합니다.",
      "CloudFront 캐시를 무효화합니다.",
      "AWS Certificate Manager(ACM)를 사용하여 웹 사이트의 SSL 인증서를 확인합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99669-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 287,
    "question": "회사에서 \nWindows \n기반 \n애플리케이션을 \n온프레미스에서 \nAWS \n클라우드로 \n마이그레이션하려고 합니다. 애플리케이션에는 애플리케이션 계층, 비즈니스 계층 및 \nMicrosoft SQL Server 가 포함된 데이터베이스 계층의 세 가지 계층이 있습니다. 회사는 \n기본 백업 및 데이터 품질 서비스와 같은 SQL Server 의 특정 기능을 사용하려고 합니다. \n또한 회사는 계층 간에 처리를 위해 파일을 공유해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 아키텍처를 어떻게 설계해야 합니까?",
    "options": [
      "Amazon EC2 인스턴스에서 세 계층을 모두 호스팅합니다. 계층 간 파일 공유를 위해 \nAmazon FSx File Gateway 를 사용합니다.",
      "Amazon EC2 인스턴스에서 세 계층을 모두 호스팅합니다. 계층 간 파일 공유를 위해 \nAmazon FSx for Windows File Server 를 사용하십시오.",
      "Amazon EC2 인스턴스에서 애플리케이션 계층과 비즈니스 계층을 호스팅합니다. \nAmazon RDS 에서 데이터베이스 계층을 호스팅합니다. 계층 간 파일 공유를 위해 Amazon \nElastic File System(Amazon EFS)을 사용합니다.",
      "Amazon EC2 인스턴스에서 애플리케이션 계층과 비즈니스 계층을 호스팅합니다. \nAmazon RDS\n에서 데이터베이스 계층을 호스팅합니다. 계층 간 파일 공유를 위해 \n프로비저닝된 IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용합니다. \n\n=== PAGE 315 ==="
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99670-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 솔루션을 통해 회사는 Amazon FSx for Windows File Server 를 사용하여 계층 간에 \nWindows 기반 파일 공유를 제공하면서 Amazon EC2 인스턴스에서 세 계층을 모두 \n호스팅할 수 있습니다. 이를 통해 회사는 기본 백업 및 데이터 품질 서비스와 같은 SQL \nServer 의 특정 기능을 사용하면서 계층 간에 처리를 위해 파일을 공유할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 288,
    "question": "회사에서 Linux 기반 웹 서버 그룹을 AWS 로 마이그레이션하고 있습니다. 웹 서버는 일부 \n콘텐츠에 대해 공유 파일 저장소의 파일에 액세스해야 합니다. 회사는 신청서를 변경해서는 \n안됩니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "웹 서버에 대한 액세스 권한이 있는 Amazon S3 Standard 버킷을 생성합니다.",
      "Amazon S3 버킷을 원본으로 사용하여 Amazon CloudFront 배포를 구성합니다.",
      "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. 모든 웹 서버에 \nEFS 파일 시스템을 마운트합니다.",
      "범용 SSD(gp3) Amazon Elastic Block Store(Amazon EBS) 볼륨을 구성합니다. 모든 웹 \n서버에 EBS 볼륨을 마운트합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99671-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAmazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. 모든 웹 서버에 EFS \n파일 시스템을 마운트합니다. 애플리케이션을 변경하지 않고 Linux 기반 웹 서버용 공유 \n파일 스토어를 제공해야 한다는 요구 사항을 충족하려면 Amazon EFS 파일 시스템을 \n사용하는 것이 가장 좋은 솔루션입니다. \nAmazon EFS 는 여러 Linux 기반 인스턴스에서 파일에 대한 공유 액세스를 제공하는 관리형 \nNFS 파일 시스템 서비스이므로 이 사용 사례에 적합합니다. Amazon S3 는 파일 시스템이 \n아닌 객체 스토리지 서비스이고 S3 버킷을 파일 시스템으로 탑재하려면 추가 도구 또는 \n라이브러리가 필요하기 때문에 이 시나리오에 적합하지 않습니다. Amazon CloudFront 는 \n콘텐츠 전송 성능을 개선하는 데 사용할 수 있지만 이 요구 사항에는 필요하지 않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스",
      "EFS": "여러 인스턴스가 동시에 연결해서 사용할 수 있는 공유 파일 스토리지"
    }
  },
  {
    "id": 289,
    "question": "회사에는 동일한 AWS 계정에 있는 Amazon S3 버킷에 대한 읽기 액세스 권한이 필요한 \nAWS Lambda 함수가 있습니다. \n가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "S3 버킷에 대한 읽기 액세스 권한을 부여하는 S3 버킷 정책을 적용합니다.",
      "Lambda 함수에 IAM 역할을 적용합니다. 역할에 IAM 정책을 적용하여 S3 버킷에 대한 \n읽기 액세스 권한을 부여합니다.",
      "Lambda 함수의 코드에 액세스 키와 비밀 키를 내장하여 S3 버킷에 대한 읽기 액세스에 \n필요한 IAM 권한을 부여합니다.",
      "Lambda 함수에 IAM 역할을 적용합니다. 역할에 IAM 정책을 적용하여 계정의 모든 S3 \n버킷에 대한 읽기 액세스 권한을 부여합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99756-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 최소 권한 원칙을 따르고 코드의 자격 증명을 노출하지 않고 Lambda 함수에 \n필요한 권한만 부여하기 때문에 가장 안전합니다. IAM 역할은 Lambda 함수의 실행 역할로 \n구성할 수 있으며 IAM 정책은 S3 버킷 ARN 및 s3:GetObject 작업을 지정할 수 있습니다. \n옵션 A 는 Lambda 함수보다 더 많은 S3 버킷에 대한 액세스 권한이 있는 보안 주체에게 \n읽기 액세스 권한을 부여하기 때문에 덜 안전합니다. \n옵션 C 는 손상되거나 노출될 수 있는 자격 증명을 코드에 내장하기 때문에 덜 안전합니다. \n옵션 D\n는 계정의 모든 S3 버킷에 대한 읽기 액세스 권한을 부여하기 때문에 덜 \n안전합니다. 이는 Lambda 함수에 필요한 것보다 많을 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  },
  {
    "id": 290,
    "question": "회사는 여러 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. EC2 인스턴스는 \n사용자 요구에 따라 확장되는 Auto Scaling 그룹에 있습니다. 회사는 장기적인 약정 없이 \n비용 절감을 최적화하기를 원합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자가 권장해야 하는 EC2 인스턴스 구매 \n옵션은 무엇입니까? \n\n=== PAGE 317 ===",
    "options": [
      "전용 인스턴스만 해당",
      "온디맨드 인스턴스 전용",
      "온디맨드 인스턴스와 스팟 인스턴스의 혼합",
      "온디맨드 인스턴스와 예약 인스턴스의 혼합"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/100006-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n참고 \n\ndocs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/ec2-auto-scaling-mixed\n-instances-groups.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 291,
    "question": "미디어 회사는 공개적으로 사용 가능한 스트리밍 비디오 콘텐츠에 Amazon CloudFront 를 \n사용합니다. 이 회사는 액세스 권한이 있는 사용자를 제어하여 Amazon S3 에서 호스팅되는 \n비디오 콘텐츠를 보호하려고 합니다. 회사의 일부 사용자는 쿠키를 지원하지 않는 사용자 \n지정 HTTP 클라이언트를 사용하고 있습니다. 회사의 일부 사용자는 액세스에 사용하는 \n하드코딩된 URL 을 변경할 수 없습니다. \n사용자에게 미치는 영향을 최소화하면서 이러한 요구 사항을 충족하는 서비스 또는 방법은 \n무엇입니까? (2 개 선택)",
    "options": [
      "서명된 쿠키",
      "서명된 URL",
      "AWS 앱싱크",
      "JSON 웹 토큰(JWT)",
      "AWS Secrets Manager"
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99831-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 292,
    "question": "한 회사가 여러 소스에서 실시간 스트리밍 데이터를 수집할 새로운 데이터 플랫폼을 \n준비하고 있습니다. 회사는 Amazon S3 에 데이터를 쓰기 전에 데이터를 변환해야 합니다. \n회사는 SQL 을 사용하여 변환된 데이터를 쿼리할 수 있는 기능이 필요합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (두 가지를 선택하세요.) \n\n=== PAGE 318 ===",
    "options": [
      "Amazon Kinesis Data Streams 를 사용하여 데이터를 스트리밍합니다. Amazon Kinesis \nData Analytics 를 사용하여 데이터를 변환합니다. Amazon Kinesis Data Firehose 를 사용하여 \nAmazon S3 에 데이터를 씁니다. Amazon Athena 를 사용하여 Amazon S3 에서 변환된 \n데이터를 쿼리합니다.",
      "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 \n스트리밍합니다. AWS Glue 를 사용하여 데이터를 변환하고 데이터를 Amazon S3 에 씁니다. \nAmazon Athena 를 사용하여 Amazon S3 에서 변환된 데이터를 쿼리합니다.",
      "AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 수집합니다. Amazon \nEMR 을 사용하여 데이터를 변환하고 Amazon S3 에 데이터를 씁니다. Amazon Athena 를 \n사용하여 Amazon S3 에서 변환된 데이터를 쿼리합니다.",
      "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 \n스트리밍합니다. Amazon Kinesis Data Analytics 를 사용하여 데이터를 변환하고 데이터를 \nAmazon S3 에 씁니다. Amazon RDS 쿼리 편집기를 사용하여 Amazon S3 에서 변환된 \n데이터를 쿼리합니다.",
      "Amazon Kinesis Data Streams 를 사용하여 데이터를 스트리밍합니다. AWS Glue 를 \n사용하여 데이터를 변환합니다. Amazon Kinesis Data Firehose 를 사용하여 Amazon S3 에 \n데이터를 씁니다. Amazon RDS 쿼리 편집기를 사용하여 Amazon S3 에서 변환된 데이터를 \n쿼리합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99834-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n여러 소스에서 실시간 스트리밍 데이터를 수집, 변환 및 쿼리하려면 Amazon Kinesis 와 \nAmazon MSK 가 적합한 솔루션입니다. Amazon Kinesis Data Streams 는 다양한 소스의 \n데이터를 스트리밍하고 다른 AWS 서비스와 통합할 수 있습니다. Amazon Kinesis Data \nAnalytics 는 SQL 또는 Apache Flink 를 사용하여 데이터를 변환할 수 있습니다. Amazon \nKinesis Data Firehose 는 Amazon S3 또는 다른 대상에 데이터를 쓸 수 있습니다. Amazon \nAthena 는 표준 SQL 을 사용하여 Amazon S3 에서 변환된 데이터를 쿼리할 수 있습니다. \nAmazon MSK 는 데이터 스트리밍을 위한 인기 있는 오픈 소스 플랫폼인 Apache Kafka 를 \n사용하여 데이터를 스트리밍할 수 있습니다. AWS Glue 는 Apache Spark 또는 Python \n스크립트를 사용하여 데이터를 변환하고 Amazon S3 또는 기타 대상에 데이터를 쓸 수 \n있습니다. Amazon Athena 는 표준 SQL 을 사용하여 Amazon S3 에서 변환된 데이터를 \n쿼리할 수도 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Athena": "S3에 있는 대규모 데이터를 SQL 쿼리로 직접 분석하는 도구",
      "Kinesis": "실시간 스트리밍 데이터를 수집하고 분석하는 서비스"
    }
  },
  {
    "id": 293,
    "question": "회사에는 수명이 다한 온프레미스 볼륨 백업 솔루션이 있습니다. 회사는 AWS 를 새로운 \n백업 솔루션의 일부로 사용하고 AWS 에 백업되는 동안 모든 데이터에 대한 로컬 액세스를 \n유지하려고 합니다. 회사는 AWS\n에 백업된 데이터가 자동으로 안전하게 전송되기를 \n원합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "AWS Snowball\n을 사용하여 온프레미스 솔루션에서 Amazon S3\n로 데이터를 \n마이그레이션합니다. \n데이터에 \n대한 \n로컬 \n액세스를 \n제공하기 \n위해 \nSnowball \nS3 \n엔드포인트를 탑재하도록 온프레미스 시스템을 구성합니다.",
      "AWS Snowball Edge 를 사용하여 온프레미스 솔루션에서 Amazon S3 로 데이터를 \n마이그레이션합니다. Snowball Edge 파일 인터페이스를 사용하여 온프레미스 시스템에 \n데이터에 대한 로컬 액세스를 제공합니다.",
      "AWS \nStorage \nGateway\n를 \n사용하고 \n캐시된 \n볼륨 \n게이트웨이를 \n구성합니다. \n온프레미스에서 Storage Gateway 소프트웨어 어플라이언스를 실행하고 로컬로 캐시할 \n데이터 비율을 구성합니다. 데이터에 대한 로컬 액세스를 제공하기 위해 게이트웨이 \n스토리지 볼륨을 마운트합니다.",
      "AWS \nStorage \nGateway\n를 \n사용하고 \n저장된 \n볼륨 \n게이트웨이를 \n구성합니다. \n온프레미스에서 \nStorage \nGateway \n소프트웨어 \n어플라이언스를 \n실행하고 \n게이트웨이 \n스토리지 볼륨을 온프레미스 스토리지에 매핑합니다. 데이터에 대한 로컬 액세스를 \n제공하기 위해 게이트웨이 스토리지 볼륨을 마운트합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99692-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 온프레미스 소프트웨어 어플라이언스와 클라우드 기반 스토리지를 연결하여 \n온프레미스 IT 환경과 AWS 스토리지 인프라 간의 데이터 보안 기능과의 원활한 통합을 \n제공하는 서비스인 AWS Storage Gateway 를 사용하기 때문에 가장 효율적입니다. . 또한 \n기본 데이터를 로컬에 저장하고 데이터의 특정 시점 스냅샷을 Amazon S3 에 비동기식으로 \n백업하는 \n볼륨 \n게이트웨이 \n유형인 \n저장된 \n볼륨 \n게이트웨이를 \n사용합니다. \n또한 \n온프레미스에서 \nStorage \nGateway \n소프트웨어 \n애플리케이션을 \n실행하고 \n게이트웨이 \n스토리지 볼륨을 온프레미스 스토리지에 매핑하므로 기존 스토리지 하드웨어 및 네트워크 \n인프라를 사용할 수 있습니다. 또한 게이트웨이 스토리지 볼륨을 탑재하여 데이터에 대한 \n로컬 액세스를 제공하므로 온프레미스에서 지연 시간이 짧은 액세스를 위해 데이터를 \n사용할 수 있으며 동시에 AWS 에 백업할 수 있습니다. 이 솔루션은 AWS 에 백업되는 동안 \n모든 데이터에 대한 로컬 액세스를 유지하고 AWS 에 백업된 데이터가 자동으로 안전하게",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Storage Gateway": "사내 장비와 AWS 스토리지를 연결해 하이브리드 환경을 만드는 서비스"
    }
  },
  {
    "id": 294,
    "question": "Amazon EC2 인스턴스에서 호스팅되는 애플리케이션은 Amazon S3 버킷에 액세스해야 \n합니다. 트래픽이 인터넷을 통과하면 안 됩니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 액세스를 어떻게 구성해야 합니까?",
    "options": [
      "Amazon Route 53 을 사용하여 프라이빗 호스팅 영역을 생성합니다.",
      "VPC 에서 Amazon S3 에 대한 게이트웨이 VPC 엔드포인트를 설정합니다.",
      "NAT 게이트웨이를 사용하여 S3 버킷에 액세스하도록 EC2 인스턴스를 구성합니다.",
      "VPC 와 S3 버킷 간에 AWS Site-to-Site VPN 연결을 설정합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99954-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 인터넷 게이트웨이나 VPC 용 NAT 장치 없이 Amazon S3 에 대한 안정적인 \n연결을 제공하는 Amazon S3 용 게이트웨이 VPC 엔드포인트를 사용하기 때문에 가장 \n효율적입니다. 게이트웨이 VPC 엔드포인트는 서비스의 접두사 목록을 사용하여 VPC 에서 \nAmazon S3 로 트래픽을 라우팅하고 AWS 네트워크를 벗어나지 않습니다. 이것은 인터넷을",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 295,
    "question": "전자상거래 회사는 테라바이트 규모의 고객 데이터를 AWS 클라우드에 저장합니다. \n데이터에는 개인 식별 정보(PII)가 포함되어 있습니다. 회사는 세 가지 응용 프로그램에서 \n데이터를 사용하려고 합니다. 애플리케이션 중 하나만 PII 를 처리해야 합니다. 다른 두 \n애플리케이션이 데이터를 처리하기 전에 PII 를 제거해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "Amazon DynamoDB 테이블에 데이터를 저장합니다. 각 애플리케이션이 요청하는 \n데이터를 가로채서 처리할 프록시 애플리케이션 계층을 생성합니다.",
      "데이터를 Amazon S3 버킷에 저장합니다. 요청 애플리케이션에 데이터를 반환하기 전에 \nS3 객체 Lambda 를 사용하여 데이터를 처리하고 변환합니다.",
      "데이터를 처리하고 변환된 데이터를 3 개의 개별 Amazon S3 버킷에 저장하여 각 \n애플리케이션이 고유한 사용자 지정 데이터 세트를 갖도록 합니다. 각 애플리케이션이 해당 \nS3 버킷을 가리키도록 합니다.",
      "데이터를 처리하고 변환된 데이터를 3 개의 별도 Amazon DynamoDB 테이블에 저장하여 \n각 애플리케이션이 자체 사용자 지정 데이터 세트를 갖도록 합니다. 각 애플리케이션이 \n해당 DynamoDB 테이블을 가리키도록 합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99956-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 296,
    "question": "개발 팀이 개발 VPC 내부의 Amazon EC2 인스턴스에서 호스팅되는 새로운 애플리케이션을 \n출시했습니다. 솔루션 설계자는 동일한 계정에 새 VPC 를 생성해야 합니다. 새 VPC 는 개발 \nVPC 와 피어링됩니다. 개발용 VPC 의 VPC CIDR 블록은 192.168.0.0/24 입니다. 솔루션 \n설계자는 새 VPC 에 대한 CIDR 블록을 생성해야 합니다. CIDR 블록은 개발 VPC 에 대한 \nVPC 피어링 연결에 대해 유효해야 합니다. \n이러한 요구 사항을 충족하는 가장 작은 CIDR 블록은 무엇입니까?",
    "options": [
      "10.0.1.0/32",
      "192.168.0.0/24",
      "192.168.1.0/32",
      "10.0.1.0/24"
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99651-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n허용되는 블록 크기는 /28 넷마스크와 /16 넷마스크 사이입니다. CIDR 블록은 VPC 와 \n연결된 기존 CIDR 블록과 겹치지 않아야 합니다. \n\ndocs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "VPC": "AWS 클라우드 내에 나만의 전용 가상 네트워크 공간"
    }
  },
  {
    "id": 297,
    "question": "회사에서 5 개의 Amazon EC2 인스턴스에 애플리케이션을 배포합니다. ALB(Application \nLoad Balancer)는 대상 그룹을 사용하여 인스턴스에 트래픽을 분산합니다. 각 인스턴스의 \n평균 CPU 사용량은 대부분 10% 미만이며 때때로 65%까지 급증합니다. \n솔루션 설계자는 애플리케이션의 확장성을 자동화하는 솔루션을 구현해야 합니다. 솔루션은 \n아키텍처의 비용을 최적화하고 급증이 발생할 때 애플리케이션에 충분한 CPU 리소스가 \n있는지 확인해야 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "CPUUtilization 지표가 20% 미만일 때 ALARM 상태로 들어가는 Amazon CloudWatch \n경보를 생성합니다. ALB 대상 그룹의 EC2 인스턴스 중 하나를 종료하기 위해 CloudWatch \n경보가 호출하는 AWS Lambda 함수를 생성합니다.",
      "EC2 Auto Scaling 그룹을 생성합니다. 기존 ALB 를 로드 밸런서로 선택하고 기존 대상 \n그룹을 대상 그룹으로 선택하십시오. ASGAverageCPUUtilization 지표를 기반으로 하는 대상 \n추적 조정 정책을 설정합니다. 최소 인스턴스를 2\n로, 원하는 용량을 3\n으로, 최대 \n\n=== PAGE 323 ===\n인스턴스를 6 으로, 목표 값을 50%로 설정합니다. Auto Scaling 그룹에 EC2 인스턴스를 \n추가합니다.",
      "EC2 Auto Scaling 그룹을 생성합니다. 기존 ALB 를 로드 밸런서로 선택하고 기존 대상 \n그룹을 대상 그룹으로 선택하십시오. 최소 인스턴스를 2 로, 원하는 용량을 3 으로, 최대 \n인스턴스를 6 으로 설정합니다. Auto Scaling 그룹에 EC2 인스턴스를 추가합니다.",
      "두 개의 Amazon CloudWatch 경보를 생성합니다. 평균 CPUUtilization 지표가 20% \n미만일 때 ALARM 상태로 들어가도록 첫 번째 CloudWatch 경보를 구성합니다. 평균 \nCPUUtilization 지표가 50%를 초과하면 ALARM 상태로 들어가도록 두 번째 CloudWatch \n경보를 \n구성합니다. \n이메일 \n메시지를 \n보내기 \n위해 \nAmazon \nSimple \nNotification \nService(Amazon SNS) 주제에 게시하도록 경보를 구성합니다. 메시지를 받은 후 로그인하여 \n실행 중인 EC2 인스턴스 수를 줄이거나 늘립니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99652-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n* Auto Scaling 그룹은 수요 변화에 맞춰 EC2 인스턴스를 자동으로 확장합니다. 이는 \n필요한 만큼의 인스턴스만 실행하여 비용을 최적화합니다. \n* 대상 추적 조정 정책은 ASGAverageCPUUtilization 지표를 모니터링하고 평균 CPU 를 약 \n50% 대상 값으로 유지하도록 조정합니다. 이렇게 하면 CPU 가 급증하는 동안 리소스가 \n충분해집니다. \n* ALB 와 대상 그룹은 재사용되므로 애플리케이션 아키텍처가 변경되지 않습니다. Auto \nScaling 그룹은 기존 로드 밸런서 설정에 연결됩니다. \n* 최소 2 개에서 최대 6 개의 인스턴스는 수요에 따라 필요에 따라 3 개에서 6 개 사이의 \n인스턴스를 확장할 수 있는 기능을 제공합니다. \n* 단 3 개의 인스턴스(원하는 용량)로 시작하고 필요에 따라 확장하여 비용을 최적화합니다. \nCPU 사용량이 떨어지면 원하는 용량에 맞게 인스턴스가 종료됩니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "ALB": "애플리케이션 계층(L7)에서 트래픽을 분산해주는 부하 분산 장치",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 298,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 중요한 비즈니스 \n애플리케이션을 실행하고 있습니다. EC2 인스턴스는 Auto Scaling 그룹에서 실행되며 \nAmazon RDS DB 인스턴스에 액세스합니다. \nEC2 인스턴스와 DB 인스턴스가 모두 단일 가용 영역에 있기 때문에 설계가 운영 검토를 \n통과하지 \n못했습니다. \n솔루션 \n설계자는 \n두 \n번째 \n가용 \n영역을 \n사용하도록 \n설계를 \n업데이트해야 합니다. \n\n=== PAGE 324 ===\n애플리케이션의 가용성을 높이는 솔루션은 무엇입니까?",
    "options": [
      "각 가용 영역에서 서브넷을 프로비저닝합니다. 두 가용 영역에 EC2 인스턴스를 \n배포하도록 Auto Scaling 그룹을 구성합니다. 각 네트워크에 대한 연결로 DB 인스턴스를 \n구성합니다.",
      "두 가용 영역에 걸쳐 확장되는 두 개의 서브넷을 프로비저닝합니다. 두 가용 영역에 \nEC2 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 각 네트워크에 대한 연결로 \nDB 인스턴스를 구성합니다.",
      "각 가용 영역에서 서브넷을 프로비저닝합니다. 두 가용 영역에 EC2 인스턴스를 \n배포하도록 Auto Scaling 그룹을 구성합니다. 다중 AZ 배포를 위해 DB 인스턴스를 \n구성합니다.",
      "두 가용 영역에 걸쳐 확장되는 서브넷을 프로비저닝합니다. 두 가용 영역에 EC2 \n인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 다중 AZ 배포를 위해 DB \n인스턴스를 구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99653-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n참고: \n\naws.amazon.com/ko/vpc/faqs/#:~:text=Can%20a%20subnet%20span%20Availabil\nity",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스",
      "Auto Scaling": "서버 부하에 따라 자동으로 인스턴스 수를 늘리거나 줄이는 기능"
    }
  },
  {
    "id": 299,
    "question": "연구소는 약 8TB 의 데이터를 처리해야 합니다. 실험실에는 스토리지 하위 시스템에 대해 \n1 밀리초 미만의 대기 시간과 최소 6GBps 의 처리량이 필요합니다. Amazon Linux 를 \n실행하는 수백 개의 Amazon EC2 인스턴스가 데이터를 배포하고 처리합니다. \n성능 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "NetApp ONTAP 파일 시스템용 Amazon FSx 를 생성합니다. 각 볼륨의 계층화 정책을 \nALL 로 설정했습니다. 원시 데이터를 파일 시스템으로 가져옵니다. EC2 인스턴스에 fila \n시스템을 탑재합니다.",
      "원시 데이터를 저장할 Amazon S3 버킷을 생성합니다. 영구 SSD 스토리지를 사용하는 \nAmazon FSx for Lustre 파일 시스템을 생성합니다. Amazon S3 에서 데이터를 가져오고 \n내보내는 옵션을 선택합니다. EC2 인스턴스에 파일 시스템을 탑재합니다.",
      "원시 데이터를 저장할 Amazon S3 버킷을 생성합니다. 영구 HDD 스토리지를 사용하는 \nAmazon FSx for Lustre 파일 시스템을 생성합니다. Amazon S3 에서 데이터를 가져오고 \n내보내는 옵션을 선택합니다. EC2 인스턴스에 파일 시스템을 탑재합니다. \n\n=== PAGE 325 ===",
      "NetApp ONTAP 파일 시스템용 Amazon FSx 를 생성합니다. 각 볼륨의 계층화 정책을 \nNONE 으로 설정합니다. 원시 데이터를 파일 시스템으로 가져옵니다. EC2 인스턴스에 파일 \n시스템을 탑재합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99676-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n원시 데이터를 저장할 Amazon S3 버킷 생성 영구 SSD 스토리지를 사용하는 Amazon FSx \nfor Lustre 파일 시스템 생성 Amazon S3 에서 데이터를 가져오고 내보내는 옵션 선택 EC2 \n인스턴스에 파일 시스템을 탑재합니다. Amazon FSx for Lustre 는 밀리초 미만의 지연 \n시간과 최대 6GBps 의 처리량을 위해 SSD 스토리지를 사용하고 Amazon S3 에서 데이터를 \n가져오고 내보낼 수 있습니다. 또한 영구 SSD 스토리지를 선택하는 옵션은 데이터가 \n디스크에 저장되고 파일 시스템이 중지되어도 손실되지 않도록 합니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 300,
    "question": "회사는 하드웨어 용량 제약으로 인해 온프레미스 데이터 센터에서 AWS 클라우드로 레거시 \n애플리케이션을 마이그레이션해야 합니다. 응용 프로그램은 하루 24\n시간, 주 7\n일 \n실행됩니다. \n애플리케이션의 \n데이터베이스 \n스토리지는 \n시간이 \n지남에 \n따라 \n계속 \n증가합니다. \n이러한 요구 사항을 가장 비용 효율적으로 충족하기 위해 솔루션 설계자는 무엇을 해야 \n합니까?",
    "options": [
      "애플리케이션 계층을 Amazon EC2 스팟 인스턴스로 마이그레이션합니다. 데이터 \n스토리지 계층을 Amazon S3 로 마이그레이션합니다.",
      "애플리케이션 계층을 Amazon EC2 예약 인스턴스로 마이그레이션합니다. 데이터 \n스토리지 계층을 Amazon RDS 온디맨드 인스턴스로 마이그레이션합니다.",
      "애플리케이션 계층을 Amazon EC2 예약 인스턴스로 마이그레이션합니다. 데이터 \n스토리지 계층을 Amazon Aurora 예약 인스턴스로 마이그레이션합니다.",
      "애플리케이션 계층을 Amazon EC2 온디맨드 인스턴스로 마이그레이션합니다. 데이터 \n스토리지 계층을 Amazon RDS 예약 인스턴스로 마이그레이션합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99948-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n참고:",
    "glossary": {}
  }
];