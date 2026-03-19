export const quizData = [
  {
    "id": 301,
    "question": "대학 연구소는 온프레미스 Windows 파일 서버에서 Amazon FSx for Windows File Server 로 \n30TB\n의 데이터를 마이그레이션해야 합니다. 실험실에는 대학의 다른 많은 부서에서 \n공유하는 1Gbps 네트워크 링크가 있습니다. \n실험실은 데이터 전송 성능을 최대화할 데이터 마이그레이션 서비스를 구현하려고 합니다. \n그러나 실험실은 서비스가 다른 부서에 미치는 영향을 최소화하기 위해 사용하는 대역폭의 \n양을 제어할 수 있어야 합니다. 데이터 마이그레이션은 향후 5 일 이내에 이루어져야 \n합니다. \n이러한 요구 사항을 충족하는 AWS 솔루션은 무엇입니까?",
    "options": [
      "AWS 스노우콘",
      "Amazon FSx 파일 게이트웨이",
      "AWS 데이터싱크",
      "AWS Transfer Family"
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99659-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 302,
    "question": "회사에서 사용자가 모바일 장치에서 슬로우 모션 비디오 클립을 스트리밍할 수 있는 모바일 \n앱을 만들고자 합니다. 현재 이 앱은 비디오 클립을 캡처하고 원시 형식의 비디오 클립을 \nAmazon S3 버킷에 업로드합니다. 앱은 S3 버킷에서 직접 이러한 비디오 클립을 \n검색합니다. 그러나 비디오는 원시 형식이 큽니다. \n사용자는 모바일 장치에서 버퍼링 및 재생 문제를 겪고 있습니다. 회사는 운영 오버헤드를 \n최소화하면서 앱의 성능과 확장성을 극대화하는 솔루션을 구현하고자 합니다. \n이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (2 개 선택)",
    "options": [
      "콘텐츠 전송 및 캐싱을 위해 Amazon CloudFront 를 배포합니다.",
      "AWS DataSync\n를 사용하여 다른 S3 버킷의 AW'S 지역 전체에 비디오 파일을 \n복제합니다.",
      "Amazon Elastic Transcoder\n를 사용하여 비디오 파일을 보다 적절한 형식으로 \n변환합니다.",
      "콘텐츠 전송 및 캐싱을 위해 로컬 영역에 Amazon EC2 인스턴스의 Auto Sealing 그룹을 \n\n=== PAGE 327 ===\n배포합니다.",
      "Amazon EC2 인스턴스의 Auto Scaling 그룹을 배포하여 비디오 파일을 보다 적절한 \n형식으로 변환합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99693-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 303,
    "question": "회사에서 Amazon Elastic Container Service(Amazon ECS) 클러스터에 배포된 새 \n애플리케이션을 시작하고 ECS 작업에 Fargate 시작 유형을 사용하고 있습니다. 회사는 \n실행 시 애플리케이션에 대한 높은 트래픽이 예상되기 때문에 CPU 및 메모리 사용량을 \n모니터링하고 있습니다. 그러나 회사는 활용도가 감소할 때 비용을 절감하기를 원합니다. \n솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": [
      "Amazon EC2 Auto Scaling 을 사용하여 이전 트래픽 패턴을 기반으로 특정 기간에 \n조정합니다.",
      "AWS Lambda 함수를 사용하여 Amazon CloudWatch 경보를 트리거하는 메트릭 위반을 \n기반으로 Amazon ECS 를 확장합니다.",
      "간단한 조정 정책과 함께 Amazon EC2 Auto Scaling 을 사용하여 ECS 메트릭 위반이 \nAmazon CloudWatch 경보를 트리거할 때 조정합니다.",
      "대상 추적 정책과 함께 AWS Application Auto Scaling 을 사용하여 ECS 메트릭 위반이 \nAmazon CloudWatch 경보를 트리거할 때 조정합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99813-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n참고 \n\ndocs.aws.amazon.com/ko_kr/autoscaling/application/userguide/what-is-applicati\non-auto-scaling.html",
    "glossary": {}
  },
  {
    "id": 304,
    "question": "한 회사가 최근 다른 AWS 리전에 재해 복구 사이트를 만들었습니다. 회사는 정기적으로 두 \n리전의 NFS 파일 시스템 간에 대량의 데이터를 주고 받아야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS DataSync 를 사용하십시오. \n\n=== PAGE 328 ===",
      "AWS Snowball 디바이스를 사용합니다.",
      "Amazon EC2 에서 SFTP 서버를 설정합니다.",
      "AWS 데이터베이스 마이그레이션 서비스(AWS DMS)를 사용합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99949-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 온프레미스와 AWS 스토리지 서비스 간에 데이터 이동을 자동화하고 가속화하는 \n안전한 온라인 서비스인 AWS DataSync 를 사용하기 때문에 가장 효율적입니다. 또한 \nDataSync 를 사용하여 정기적으로 두 리전의 NFS 파일 시스템 간에 대량의 데이터를 \n주고받으며 최소한의 운영 오버헤드로 데이터 전송 프로세스를 단순화하고 가속화합니다. \n이 솔루션은 최소한의 운영 오버헤드로 정기적으로 두 리전의 NFS 파일 시스템 간에 \n대량의 데이터를 주고받는 요구 사항을 충족합니다. \n \n옵션 B 는 대량의 데이터를 AWS 안팎으로 전송할 수 있는 물리적 디바이스인 AWS \nSnowball 디바이스를 사용하기 때문에 효율성이 떨어집니다. 그러나 이것은 장치의 수동 \n취급 및 배송을 필요로 하기 때문에 주기적인 데이터 전송 솔루션을 제공하지 않습니다. \n \n옵션 C 는 Amazon S33 에 저장된 파일에 대한 보안 파일 전송 프로토콜(SFTP) 액세스를 \n제공하는 방법인 Amazon EC2 에 SFTP 서버를 설정하기 때문에 효율성이 떨어집니다. \n그러나 파일 전송을 수동으로 시작하고 모니터링해야 하므로 주기적인 데이터 전송 \n솔루션을 제공하지 않습니다. \n \n옵션 D 는 데이터베이스를 AWS 로 빠르고 안전하게 마이그레이션하는 데 도움이 되는 \n서비스인 AWS DMS(AWS Database Migration Service)를 사용하기 때문에 효율성이 \n떨어집니다. 그러나 이것은 관계형 데이터베이스 및 비관계형 데이터 저장소만 지원하므로 \nNFS 파일 시스템용 데이터 전송 솔루션을 제공하지 않습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "DataSync": "대량의 데이터를 AWS로 빠르게 옮겨주는 서비스"
    }
  },
  {
    "id": 305,
    "question": "회사는 AWS 클라우드에서 호스팅되는 게임 애플리케이션을 위한 공유 스토리지 솔루션을 \n설계하고 있습니다. 회사는 SMB 클라이언트를 사용하여 데이터에 액세스할 수 있는 기능이 \n필요합니다. 솔루션은 완전히 관리되어야 합니다. \n어떤 AWS 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "탑재 가능한 파일 시스템으로 데이터를 공유하는 AWS DataSync 작업을 생성합니다. \n\n=== PAGE 329 ===\n파일 시스템을 애플리케이션 서버에 마운트하십시오.",
      "Amazon EC2 Windows 인스턴스를 생성합니다. 인스턴스에 Windows 파일 공유 역할을 \n설치하고 구성합니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "Windows 파일 서버 파일 시스템용 Amazon FSx 를 생성합니다. 원본 서버에 파일 \n시스템을 연결합니다. 애플리케이션 서버를 파일 시스템에 연결하십시오.",
      "Amazon S3 버킷을 생성합니다. 애플리케이션에 IAM 역할을 할당하여 S3 버킷에 대한 \n액세스 권한을 부여합니다. S3 버킷을 애플리케이션 서버에 마운트합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99809-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAmazon FSx for Windows File Server(Amazon FSx)는 서버 메시지 블록(SMB) 프로토콜을 \n사용하는 Windows Server 에 구축된 완전 관리형, 고가용성 및 확장 가능한 파일 스토리지 \n솔루션입니다. 다른 중요한 엔터프라이즈 기능 중에서 Microsoft Active Directory 통합, \n데이터 중복 제거 및 완전히 관리되는 백업을 허용합니다.  \n\naws.amazon.com/blogs/storage/accessing-smb-fileshares-remotely-with-amazo\nn-fsx-for-windows-file-server/",
    "glossary": {}
  },
  {
    "id": 306,
    "question": "회사는 Amazon EC2 인스턴스에서 실행되는 지연 시간에 민감한 애플리케이션을 위해 인 \n메모리 데이터베이스를 실행하려고 합니다. 애플리케이션은 분당 100,000\n개 이상의 \n트랜잭션을 처리하며 높은 네트워크 처리량이 필요합니다. 솔루션 설계자는 데이터 전송 \n비용을 최소화하는 비용 효율적인 네트워크 설계를 제공해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "동일한 AWS 리전 내의 동일한 가용 영역에서 모든 EC2 인스턴스를 시작합니다. EC2 \n인스턴스를 시작할 때 클러스터 전략으로 배치 그룹을 지정합니다.",
      "동일한 AWS 지역 내의 다른 가용 영역에서 모든 EC2 인스턴스를 시작합니다. EC2 \n인스턴스를 시작할 때 파티션 전략으로 배치 그룹을 지정합니다.",
      "Auto Scaling 그룹을 배포하여 네트워크 활용 목표에 따라 다른 가용 영역에서 EC2 \n인스턴스를 시작합니다.",
      "서로 다른 가용 영역에서 EC2 인스턴스를 시작하기 위해 단계 조정 정책으로 Auto \nScaling 그룹을 배포합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99807-exam-aws-certified-solut",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 307,
    "question": "주로 온프레미스에서 애플리케이션 서버를 실행하는 회사가 AWS 로 마이그레이션하기로 \n결정했습니다. 회사는 온프레미스에서 iSCSI(Internet Small Computer Systems Interface) \n스토리지를 확장해야 할 필요성을 최소화하려고 합니다. 회사는 최근에 액세스한 데이터만 \n로컬에 저장하기를 원합니다. \n회사는 이러한 요구 사항을 충족하기 위해 어떤 AWS 솔루션을 사용해야 합니까?",
    "options": [
      "Amazon S3 파일 게이트웨이",
      "AWS Storage Gateway 테이프 게이트웨이",
      "AWS Storage Gateway 볼륨 게이트웨이 저장 볼륨",
      "AWS Storage Gateway 볼륨 게이트웨이 캐시 볼륨"
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99611-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAWS Storage Gateway Volume Gateway 는 iSCSI 스토리지에 연결하기 위한 두 가지 구성, \n즉 저장 볼륨과 캐시 볼륨을 제공합니다. 저장된 볼륨 구성은 전체 데이터 세트를 \n온프레미스에 저장하고 데이터를 AWS 에 비동기식으로 백업합니다. 캐싱된 볼륨 구성은 \n최근에 액세스한 데이터를 온프레미스에 저장하고 나머지 데이터는 Amazon S3\n에 \n저장합니다. 회사는 최근에 액세스한 데이터만 로컬에 저장하기를 원하므로 캐시된 볼륨 \n구성이 가장 적절할 것입니다. 이를 통해 회사는 자주 액세스하는 데이터를 온프레미스에",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "Storage Gateway": "사내 장비와 AWS 스토리지를 연결해 하이브리드 환경을 만드는 서비스"
    }
  },
  {
    "id": 308,
    "question": "회사에 통합 결제를 사용하는 여러 AWS 계정이 있습니다. 이 회사는 90 일 동안 여러 개의 \n활성 고성능 Amazon RDS for Oracle 온디맨드 DB 인스턴스를 실행합니다. 회사의 재무 \n팀은 통합 결제 계정 및 기타 모든 AWS 계정에서 AWS Trusted Advisor 에 액세스할 수 \n있습니다. \n재무 팀은 적절한 AWS 계정을 사용하여 RDS 에 대한 Trusted Advisor 확인 권장 사항에 \n액세스해야 합니다. 재무팀은 적절한 Trusted Advisor 수표를 검토하여 RDS 비용을 줄여야 \n합니다. \n이러한 요구 사항을 충족하기 위해 재무 팀은 어떤 조합의 단계를 수행해야 합니까? (2 개 \n선택)",
    "options": [
      "RDS 인스턴스가 실행 중인 계정의 Trusted Advisor 권장 사항을 사용합니다.",
      "통합 결제 계정의 Trusted Advisor 권장 사항을 사용하여 모든 RDS 인스턴스 확인을 \n동시에 확인합니다.",
      "Amazon RDS 예약 인스턴스 최적화에 대한 Trusted Advisor 검사를 검토합니다.",
      "Amazon RDS 유휴 DB 인스턴스에 대한 Trusted Advisor 검사를 검토합니다.",
      "Amazon Redshift 예약 노드 최적화에 대한 Trusted Advisor 검사를 검토합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99936-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "RDS": "관계형 데이터베이스(MySQL, PostgreSQL 등)를 자동으로 관리해주는 서비스"
    }
  },
  {
    "id": 309,
    "question": "솔루션 설계자는 스토리지 비용을 최적화해야 합니다. 솔루션 설계자는 더 이상 액세스하지 \n않거나 거의 액세스하지 않는 Amazon S3 버킷을 식별해야 합니다. \n최소한의 운영 오버헤드로 이 목표를 달성할 수 있는 솔루션은 무엇입니까?",
    "options": [
      "고급 활동 메트릭에 대한 S3 Storage Lens 대시보드를 사용하여 버킷 액세스 패턴을 \n분석합니다.",
      "AWS Management Console\n에서 S3 대시보드를 사용하여 버킷 액세스 패턴을 \n\n=== PAGE 332 ===\n분석합니다.",
      "버킷에 대한 Amazon CloudWatch BucketSizeBytes 지표를 켭니다. Amazon Athena 에서 \n메트릭 데이터를 사용하여 버킷 액세스 패턴을 분석합니다.",
      "S3 객체 모니터링을 위해 AWS CloudTrail 을 켭니다. Amazon CloudWatch Logs 와 \n통합된 CloudTrail 로그를 사용하여 버킷 액세스 패턴을 분석합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99803-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nS3 Storage Lens 는 객체 스토리지 사용량, 활동 추세 및 비용 최적화를 위한 권장 사항에 \n대한 종합적인 보기를 제공하는 완전관리형 S3 스토리지 분석 솔루션입니다. Storage \nLens 를 사용하면 모든 S3 버킷에서 객체 액세스 패턴을 분석하고 자세한 지표와 보고서를 \n생성할 수 있습니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 310,
    "question": "회사에서 인공 지능 및 기계 학습(AI/ML)을 연구하는 고객에게 데이터 세트를 판매합니다. \n데이터 세트는 us-east-1 리전의 Amazon S3 버킷에 저장되는 형식이 지정된 대용량 \n파일입니다. 회사는 고객이 주어진 데이터 세트에 대한 액세스를 구매하는 데 사용하는 웹 \n애플리케이션을 호스팅합니다. 웹 애플리케이션은 Application Load Balancer 뒤의 여러 \nAmazon EC2 인스턴스에 배포됩니다. 구매 후 고객은 파일에 대한 액세스를 허용하는 S3 \n서명 URL 을 받습니다. \n고객은 북미와 유럽 전역에 분산되어 있습니다. 회사는 데이터 전송과 관련된 비용을 \n줄이고 성능을 유지하거나 개선하고자 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "기존 S3 버킷에서 S3 Transfer Acceleration 을 구성합니다. 고객 요청을 S3 Transfer \nAcceleration 엔드포인트로 안내합니다. 액세스 제어를 위해 S3 서명 URL\n을 계속 \n사용하십시오.",
      "기존 S3 버킷을 원본으로 사용하여 Amazon CloudFront 배포를 배포합니다. 고객 \n요청을 CloudFront URL 로 전달합니다. 액세스 제어를 위해 CloudFront 서명 URL 로 \n전환하십시오.",
      "버킷 사이에 S3 교차 리전 복제가 있는 eu-central-1 리전에서 두 번째 S3 버킷을 \n설정합니다. 가장 가까운 지역으로 고객 요청을 전달합니다. 액세스 제어를 위해 S3 서명 \nURL 을 계속 사용하십시오.",
      "데이터세트를 최종 사용자에게 스트리밍할 수 있도록 웹 애플리케이션을 수정합니다. \n\n=== PAGE 333 ===\n기존 S3 버킷에서 데이터를 읽도록 웹 애플리케이션을 구성합니다. 애플리케이션에서 직접 \n액세스 제어를 구현합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99697-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n참고: \n\ndocs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/PrivateCo\nntent.html",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 311,
    "question": "한 회사에서 AWS 를 사용하여 보험 견적을 처리할 웹 애플리케이션을 설계하고 있습니다. \n사용자는 애플리케이션에서 견적을 요청합니다. 견적은 견적 유형별로 구분되어야 하며, \n24 시간 이내에 응답해야 하며 분실해서는 안 됩니다. 솔루션은 운영 효율성을 극대화하고 \n유지 보수를 최소화해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "견적 유형에 따라 여러 Amazon Kinesis 데이터 스트림을 생성합니다. 적절한 데이터 \n스트림으로 메시지를 보내도록 웹 애플리케이션을 구성합니다. Kinesis Client Library(KCL)를 \n사용하여 자체 데이터 스트림에서 메시지를 풀링하도록 애플리케이션 서버의 각 백엔드 \n그룹을 구성합니다.",
      "각 견적 유형에 \n대해 AWS Lambda \n함수 및 Amazon Simple Notification \nService(Amazon SNS) 주제를 생성합니다. 연결된 SNS 주제에 Lambda 함수를 구독합니다. \n견적 요청을 적절한 SNS 주제에 게시하도록 애플리케이션을 구성합니다.",
      "단일 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. SNS 주제에 \n대한 Amazon Simple Queue Service(Amazon SQS) 대기열을 구독합니다. 견적 유형에 따라 \n적절한 SQS 대기열에 메시지를 게시하도록 SNS 메시지 필터링을 구성합니다. 자체 SQS \n대기열을 사용하도록 각 백엔드 애플리케이션 서버를 구성합니다.",
      "데이터 스트림을 Amazon OpenSearch Service 클러스터로 전달하기 위해 견적 유형을 \n기반으로 여러 Amazon Kinesis Data Firehose 전달 스트림을 생성합니다. 적절한 전송 \n스트림으로 메시지를 보내도록 애플리케이션을 구성합니다. OpenSearch Service\n에서 \n메시지를 검색하고 그에 따라 처리하도록 애플리케이션 서버의 각 백엔드 그룹을 \n구성합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99627-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {}
  },
  {
    "id": 312,
    "question": "한 회사에 여러 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 각 EC2 \n인스턴스에는 여러 Amazon Elastic Block Store(Amazon EBS) 데이터 볼륨이 연결되어 \n있습니다. 애플리케이션의 EC2 인스턴스 구성 및 데이터는 야간에 백업해야 합니다. 또한 \n애플리케이션은 다른 AWS 리전에서 복구 가능해야 합니다. \n운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "애플리케이션 EBS 볼륨의 야간 스냅샷을 예약하고 스냅샷을 다른 리전에 복사하는 \nAWS Lambda 함수를 작성하십시오.",
      "야간 백업을 수행하기 위해 AWS Backup 을 사용하여 백업 계획을 생성합니다. 백업을 \n다른 리전에 복사합니다. 애플리케이션의 EC2 인스턴스를 리소스로 추가합니다.",
      "야간 백업을 수행하기 위해 AWS Backup 을 사용하여 백업 계획을 만듭니다. 백업을 \n다른 리전에 복사합니다. 애플리케이션의 EBS 볼륨을 리소스로 추가합니다.",
      "애플리케이션 EBS 볼륨의 야간 스냅샷을 예약하고 스냅샷을 다른 가용 영역에 복사하는 \nAWS Lambda 함수를 작성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99785-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이러한 요구 사항을 충족하는 운영상 가장 효율적인 솔루션은 AWS Backup 을 사용하여 \n야간 백업을 수행하고 백업을 다른 리전에 복사하는 백업 계획을 만드는 것입니다. \n애플리케이션의 EBS 볼륨을 리소스로 추가하면 애플리케이션의 EC2 인스턴스 구성 및 \n데이터가 백업되고 백업을 다른 리전에 복사하면 애플리케이션을 다른 AWS 리전에서 \n복구할 수 있습니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "EBS": "EC2 인스턴스에 붙여서 사용하는 하드디스크 역할의 저장소"
    }
  },
  {
    "id": 313,
    "question": "회사가 AWS 에서 모바일 앱을 구축하고 있습니다. 회사는 수백만 명의 사용자에게 도달 \n범위를 확장하려고 합니다. 회사는 승인된 사용자가 모바일 장치에서 회사의 콘텐츠를 볼 \n수 있도록 플랫폼을 구축해야 합니다. \n\n=== PAGE 335 ===\n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "퍼블릭 Amazon S3 버킷에 콘텐츠를 게시합니다. AWS Key Management Service(AWS \nKMS) 키를 사용하여 콘텐츠를 스트리밍합니다.",
      "모바일 앱과 AWS 환경 간에 IPsec VPN 을 설정하여 콘텐츠를 스트리밍합니다.",
      "Amazon CloudFront 를 사용합니다. 스트리밍 콘텐츠에 서명된 URL 을 제공합니다.",
      "모바일 앱과 AWS 환경 간에 AWS Client VPN 을 설정하여 콘텐츠를 스트리밍합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/100130-exam-aws-certified-sol\nutions-architect-associate-saa-c03/ \n \n \nAmazon CloudFront 는 짧은 지연 시간과 높은 전송 속도로 데이터, 비디오, 애플리케이션 \n및 API\n를 전 세계 고객에게 안전하게 전달하는 콘텐츠 전송 네트워크(CDN)입니다. \nCloudFront 는 콘텐츠에 대한 인증된 액세스를 제공하는 서명된 URL 을 지원합니다. 이 \n기능을 통해 회사는 콘텐츠에 액세스할 수 있는 사람과 기간을 제어하여 수백만 명의 \n사용자에게 안전하고 확장 가능한 솔루션을 제공할 수 있습니다.",
    "glossary": {
      "CloudFront": "전 세계 사용자에게 콘텐츠를 빠르게 전달하는 CDN 서비스"
    }
  },
  {
    "id": 314,
    "question": "회사에는 드물게 액세스하는 패턴으로 글로벌 영업 팀에서 사용하는 온프레미스 MySQL \n데이터베이스가 있습니다. 영업팀은 데이터베이스의 가동 중지 시간을 최소화해야 합니다. \n데이터베이스 관리자는 향후 더 많은 사용자를 예상하여 특정 인스턴스 유형을 선택하지 \n않고 이 데이터베이스를 AWS 로 마이그레이션하려고 합니다. \n솔루션 설계자는 어떤 서비스를 추천해야 합니까?",
    "options": [
      "아마존 오로라 MySQL",
      "MySQL 용 Amazon Aurora 서버리스",
      "아마존 레드시프트 스펙트럼",
      "MySQL 용 Amazon RDS"
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99769-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAmazon Aurora Serverless for MySQL 은 애플리케이션 수요에 따라 자동으로 확장 또는 \n축소되는 완전관리형 자동 확장 관계형 데이터베이스 서비스입니다. 이 서비스는 고객이 \n데이터베이스 인스턴스를 프로비저닝할 필요 없이 고가용성, 내구성 및 보안과 같은",
    "glossary": {
      "Aurora": "AWS가 구축한 클라우드 전용 고성능 관계형 데이터베이스 엔진"
    }
  },
  {
    "id": 315,
    "question": "회사는 온프레미스 데이터 센터의 여러 애플리케이션에 영향을 미치는 위반을 경험했습니다. \n공격자는 서버에서 실행 중인 맞춤형 애플리케이션의 취약점을 이용했습니다. 이 회사는 \n현재 Amazon EC2 인스턴스에서 실행되도록 애플리케이션을 마이그레이션하고 있습니다. \n이 회사는 EC2 인스턴스의 취약성을 능동적으로 스캔하고 결과를 자세히 설명하는 \n보고서를 보내는 솔루션을 구현하려고 합니다. \n이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Shield\n를 배포하여 EC2 인스턴스의 취약점을 스캔합니다. 결과를 AWS \nCloudTrail 에 기록하는 AWS Lambda 함수를 생성합니다.",
      "Amazon Macie 및 AWS Lambda 함수를 배포하여 EC2 인스턴스의 취약점을 스캔합니다. \n결과를 AWS CloudTrail 에 기록합니다.",
      "Amazon GuardDuty 를 켭니다. GuardDuty 에이전트를 EC2 인스턴스에 배포합니다. \n결과를 자세히 설명하는 보고서의 생성 및 배포를 자동화하도록 AWS Lambda 함수를 \n구성합니다.",
      "Amazon Inspector를 켭니다. Amazon Inspector 에이전트를 EC2 인스턴스에 배포합니다. \n결과를 자세히 설명하는 보고서의 생성 및 배포를 자동화하도록 AWS Lambda 함수를 \n구성합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99808-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAmazon Inspector(Amazon 검사기): \n* EC2 인스턴스의 활성 취약성 스캔을 수행합니다. 소프트웨어 취약성, 의도하지 않은 \n네트워크 접근성 및 기타 보안 문제를 찾습니다. \n* 스캔을 수행하려면 EC2 인스턴스에 에이전트를 설치해야 합니다. 에이전트는 각 \n인스턴스에 배포되어야 합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 316,
    "question": "회사는 Amazon EC2 인스턴스를 사용하여 스크립트를 실행하여 Amazon Simple Queue \nService(Amazon SQS) 대기열에서 메시지를 폴링하고 처리합니다. 이 회사는 대기열에 \n추가되는 점점 더 많은 수의 메시지를 처리할 수 있는 능력을 유지하면서 운영 비용을 \n절감하고자 합니다. \n이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": [
      "메시지를 더 빠르게 처리하려면 EC2 인스턴스의 크기를 늘리십시오.",
      "인스턴스가 충분히 활용되지 않을 때 Amazon EventBridge 를 사용하여 EC2 인스턴스를 \n끕니다.",
      "EC2 \n인스턴스의 \n스크립트를 \n적절한 \n런타임이 \n있는 \nAWS \nLambda \n함수로 \n마이그레이션합니다.",
      "AWS Systems Manager Run Command 를 사용하여 요청 시 스크립트를 실행합니다."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99698-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 317,
    "question": "회사에서 레거시 애플리케이션을 사용하여 데이터를 CSV 형식으로 생성합니다. 레거시 \n애플리케이션은 출력 데이터를 Amazon S3 에 저장합니다. 이 회사는 복잡한 SQL 쿼리를 \n수행하여 Amazon Redshift 및 Amazon S3 에만 저장된 데이터를 분석할 수 있는 새로운 \n상용 기성품(COTS) 애플리케이션을 배포하고 있습니다. 그러나 COTS 애플리케이션은 \n레거시 애플리케이션이 생성하는 .csv 파일을 처리할 수 없습니다. \n회사는 레거시 애플리케이션을 업데이트하여 다른 형식으로 데이터를 생성할 수 없습니다. \n회사는 COTS 애플리케이션이 레거시 애플리케이션이 생성하는 데이터를 사용할 수 있도록 \n솔루션을 구현해야 합니다. \n최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "일정에 따라 실행되는 AWS Glue 추출, 변환 및 로드(ETL) 작업을 생성합니다. .csv \n파일을 처리하고 처리된 데이터를 Amazon Redshift 에 저장하도록 ETL 작업을 구성합니다.",
      "Amazon EC2 인스턴스에서 실행되는 Python 스크립트를 개발하여 .csv 파일을 .sql \n파일로 변환합니다. Cron 일정에서 Python 스크립트를 호출하여 출력 파일을 Amazon S3 에 \n\n=== PAGE 338 ===\n저장합니다.",
      "AWS Lambda 함수와 Amazon DynamoDB 테이블을 생성합니다. S3 이벤트를 사용하여 \nLambda 함수를 호출합니다. ETL(추출, 변환 및 로드) 작업을 수행하여 .csv 파일을 \n처리하고 처리된 데이터를 DynamoDB 테이블에 저장하도록 Lambda 함수를 구성합니다.",
      "Amazon EventBridge\n를 사용하여 매주 일정에 따라 Amazon EMR 클러스터를 \n시작합니다. 추출, 변환 및 로드(ETL) 작업을 수행하여 .csv 파일을 처리하고 처리된 \n데이터를 Amazon Redshift 테이블에 저장하도록 EMR 클러스터를 구성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99817-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 솔루션은 COTS 애플리케이션이 최소한의 운영 오버헤드로 레거시 애플리케이션이 \n생성하는 데이터를 사용할 수 있도록 솔루션 구현 요구 사항을 충족합니다. AWS Glue 는 \n분석을 위해 데이터를 준비하고 로드하는 서버리스 ETL 플랫폼을 제공하는 완전 관리형 \n서비스입니다. \nAWS Glue 는 .csv 파일을 비롯한 다양한 형식의 데이터를 처리하고 복잡한 SQL 쿼리를 \n지원하는 완전관리형 데이터 웨어하우스 서비스인 Amazon Redshift 에 처리된 데이터를 \n저장할 수 있습니다. AWS Glue 는 데이터 처리 및 로드 프로세스를 자동화할 수 있는 \n일정에 따라 ETL 작업을 실행할 수 있습니다. \n \n옵션 B 는 올바르지 않습니다. Amazon EC2 인스턴스에서 실행되는 Python 스크립트를 \n개발하여 .csv 파일을 sql 파일로 변환하면 운영 오버헤드와 복잡성이 증가하고 COTS \n애플리케이션에 일관된 데이터 처리 및 로드를 제공하지 못할 수 있기 때문입니다. \n \n.csv 파일을 처리하고 처리된 데이터를 DynamoDB 테이블에 저장하기 위해 AWS Lambda \n함수 및 Amazon DynamoDB 테이블을 생성하는 것은 Amazon Redshift\n를 COTS \n애플리케이션의 데이터 소스로 사용하기 위한 요구 사항을 충족하지 않기 때문에 옵션 C 는 \n올바르지 않습니다. \n \nAmazon EventBridge(Amazon CloudWatch Events)를 사용하여 주간 일정에 따라 Amazon \nEMR 클러스터를 시작하여 .csv 파일을 처리하고 처리된 데이터를 Amazon Redshift \n테이블에 저장할 수 있으므로 옵션 D 는 올바르지 않습니다. COTS 애플리케이션에 적시에 \n데이터 처리 및 로드를 제공하지 않습니다. \n참조: \n\naws.amazon.com/glue/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "DynamoDB": "매우 빠른 성능과 무한 확장을 제공하는 NoSQL 데이터베이스",
      "CloudWatch": "AWS 리소스 사용량과 로그를 모니터링하는 서비스"
    }
  },
  {
    "id": 318,
    "question": "한 회사가 최근 전체 IT 환경을 AWS 클라우드로 마이그레이션했습니다. 회사는 사용자가 \n적절한 변경 제어 프로세스를 사용하지 않고 과도한 크기의 Amazon EC2 인스턴스를 \n프로비저닝하고 보안 그룹 규칙을 수정하고 있음을 발견했습니다. 솔루션 설계자는 이러한 \n인벤토리 및 구성 변경 사항을 추적하고 감사하기 위한 전략을 고안해야 합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 조치를 취해야 합니까? (2 개 \n선택)",
    "options": [
      "AWS CloudTrail 을 활성화하고 감사에 사용하십시오.",
      "Amazon EC2 인스턴스에 대한 데이터 수명 주기 정책을 사용합니다.",
      "AWS Trusted Advisor 를 활성화하고 보안 대시보드를 참조합니다.",
      "AWS Config 를 활성화하고 감사 및 규정 준수를 위한 규칙을 생성합니다.",
      "AWS CloudFormation 템플릿을 사용하여 이전 리소스 구성을 복원합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99804-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nA) AWS CloudTrail 을 활성화하고 감사에 사용합니다. AWS CloudTrail 은 API 호출 기록을 \n제공하며 EC2 인스턴스 및 보안 그룹에 대한 변경 사항을 감사하는 데 사용할 수 있습니다. \n솔루션 설계자는 CloudTrail 로그를 분석하여 적절한 승인 없이 누가 대규모 인스턴스를 \n프로비저닝했거나 보안 그룹을 수정했는지 추적할 수 있습니다. \nD) AWS Config 를 활성화하고 감사 및 규정 준수를 위한 규칙을 생성합니다. AWS Config 는 \nEC2 인스턴스 및 보안 그룹과 같은 리소스에 대한 구성 변경 사항을 기록할 수 있습니다. \n솔루션 설계자는 특정 인스턴스 유형을 시작하거나 권한 없이 보안 그룹 포트를 여는 것과 \n같은 비준수 변경 사항을 모니터링하기 위해 AWS Config 규칙을 생성할 수 있습니다. AWS \nConfig 는 이러한 규칙 위반에 대해 경고합니다.",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스",
      "CloudTrail": "AWS 계정에서 일어나는 모든 활동을 기록하는 감사 서비스",
      "Config": "AWS 리소스의 설정 변경 사항을 기록하고 규정을 준수하는지 확인하는 서비스"
    }
  },
  {
    "id": 319,
    "question": "회사는 AWS 클라우드에 수백 개의 Amazon EC2 Linux 기반 인스턴스를 보유하고 있습니다. \n시스템 관리자는 공유 SSH 키를 사용하여 인스턴스를 관리했습니다. 최근 감사 후 회사의 \n보안 팀은 모든 공유 키를 제거하도록 지시하고 있습니다. 솔루션 설계자는 EC2 \n인스턴스에 대한 보안 액세스를 제공하는 솔루션을 설계해야 합니다. \n\n=== PAGE 340 ===\n최소한의 관리 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": [
      "AWS Systems Manager Session Manager 를 사용하여 EC2 인스턴스에 연결합니다.",
      "AWS Security Token Service(AWS STS)를 사용하여 온디맨드 방식으로 일회성 SSH 키를 \n생성합니다.",
      "배스천 인스턴스 집합에 대한 공유 SSH 액세스를 허용합니다. 배스천 인스턴스에서 \nSSH 액세스만 허용하도록 다른 모든 인스턴스를 구성합니다.",
      "Amazon Cognito 사용자 지정 권한 부여자를 사용하여 사용자를 인증합니다. AWS \nLambda 함수를 호출하여 임시 SSH 키를 생성합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99628-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nSession Manager\n는 완전히 관리되는 AWS Systems Manager 기능입니다. Session \nManager 를 사용하여 Amazon Elastic Compute Cloud(Amazon EC2) 인스턴스, 에지 장치, \n온프레미스 서버 및 가상 머신(VM)을 관리할 수 있습니다. 대화형 원클릭 브라우저 기반 셸 \n또는 AWS Command Line Interface(AWS CLI)를 사용할 수 있습니다. Session Manager 는 \n인바운드 포트를 열거나 배스천 호스트를 유지하거나 SSH 키를 관리할 필요 없이 안전하고 \n감사 가능한 노드 관리를 제공합니다. \n또한 Session Manager 를 사용하면 관리 노드에 대한 제어된 액세스, 엄격한 보안 관행, \n노드 액세스 세부 정보가 포함된 완전히 감사 가능한 로그가 필요한 기업 정책을 준수하는 \n동시에 최종 사용자에게 관리 노드에 대한 간단한 원클릭 교차 플랫폼 액세스를 제공할 수 \n있습니다. \n\ndocs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 320,
    "question": "회사에서 Amazon EC2 인스턴스 플릿을 사용하여 온프레미스 데이터 소스에서 데이터를 \n수집하고 있습니다. 데이터는 JSON 형식이며 수집 속도는 최대 1MB/s\n입니다. EC2 \n인스턴스가 재부팅되면 진행 중인 데이터가 손실됩니다. 회사의 데이터 과학 팀은 거의 \n실시간으로 수집된 데이터를 쿼리하려고 합니다. \n데이터 손실을 최소화하면서 확장 가능한 거의 실시간 데이터 쿼리를 제공하는 솔루션은 \n무엇입니까?",
    "options": [
      "Amazon Kinesis Data Streams 에 데이터를 게시하고 Kinesis Data Analytics 를 사용하여 \n데이터를 쿼리합니다.",
      "Amazon Redshift 를 대상으로 사용하여 Amazon Kinesis Data Firehose 에 데이터를 \n\n=== PAGE 341 ===\n게시합니다. Amazon Redshift 를 사용하여 데이터를 쿼리합니다.",
      "수집된 데이터를 EC2 인스턴스 스토어에 저장합니다. Amazon S3 를 대상으로 Amazon \nKinesis Data Firehose 에 데이터를 게시합니다. Amazon Athena 를 사용하여 데이터를 \n쿼리합니다.",
      "수집된 데이터를 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장합니다. Redis 용 \nAmazon ElastiCache 에 데이터를 게시합니다. Redis 채널을 구독하여 데이터를 쿼리합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99752-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n참고 \n\ndocs.aws.amazon.com/ko_kr/kinesisanalytics/latest/dev/what-is.html",
    "glossary": {
      "EC2": "클라우드에서 빌려 쓰는 가상 서버 인스턴스"
    }
  },
  {
    "id": 321,
    "question": "솔루션 설계자는 Amazon S3 버킷에 업로드된 모든 객체가 암호화되도록 하려면 어떻게 \n해야 합니까?",
    "options": [
      "PutObject\n에 s3:x-amz-acl 헤더 세트가 없는 경우 거부하도록 버킷 정책을 \n업데이트합니다.",
      "PutObject 에 프라이빗으로 설정된 s3:x-amz-acl 헤더가 없는 경우 거부하도록 버킷 \n정책을 업데이트합니다.",
      "PutObject 에 true 로 설정된 aws:SecureTransport 헤더가 없는 경우 거부하도록 버킷 \n정책을 업데이트합니다.",
      "PutObject 에 x-amz-server-side-encryption 헤더 세트가 없는 경우 거부하도록 버킷 \n정책을 업데이트합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99685-exam-aws-certified-solut\nions-architect-associate-saa-c03/",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 322,
    "question": "솔루션 설계자는 회사를 위한 다중 계층 애플리케이션을 설계하고 있습니다. 애플리케이션 \n사용자는 모바일 장치에서 이미지를 업로드합니다. 애플리케이션은 각 이미지의 썸네일을 \n생성하고 이미지가 성공적으로 업로드되었음을 확인하는 메시지를 사용자에게 반환합니다. \n썸네일 생성에는 최대 60\n초가 소요될 수 있지만 회사는 사용자에게 원본 이미지가 \n수신되었음을 알리기 위해 더 빠른 응답 시간을 제공하고자 합니다. 솔루션 설계자는 서로 \n\n=== PAGE 342 ===\n다른 애플리케이션 계층에 요청을 비동기식으로 전달하도록 애플리케이션을 설계해야 \n합니다. \n솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": [
      "사용자 지정 AWS Lambda 함수를 작성하여 썸네일을 생성하고 사용자에게 알립니다. \n이미지 업로드 프로세스를 이벤트 소스로 사용하여 Lambda 함수를 호출합니다.",
      "AWS Step Functions 워크플로를 생성합니다. 애플리케이션 계층 간의 오케스트레이션을 \n처리하고 썸네일 생성이 완료되면 사용자에게 알리도록 Step Functions 를 구성합니다.",
      "Amazon Simple Queue Service(Amazon SQS) 메시지 대기열을 생성합니다. 이미지가 \n업로드되면 \n썸네일 \n생성을 \n위해 \nSQS \n대기열에 \n메시지를 \n배치합니다. \n이미지가 \n수신되었음을 애플리케이션 메시지를 통해 사용자에게 알립니다.",
      "Amazon Simple Notification Service(Amazon SNS) 알림 주제 및 구독을 생성합니다. \n애플리케이션과 함께 하나의 구독을 사용하여 이미지 업로드가 완료된 후 썸네일을 \n생성하십시오. 섬네일 생성이 완료된 후 푸시 알림을 통해 사용자의 모바일 앱에 메시지를 \n보내려면 두 번째 구독을 사용하십시오."
    ],
    "answer": 2,
    "explanation": "www.examtopics.com/discussions/amazon/view/99753-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n이 옵션은 메시지 손실이나 다른 서비스를 사용할 필요 없이 모든 볼륨의 소프트웨어 구성 \n요소 간에 메시지를 전송, 저장 및 수신할 수 있는 완전 관리형 메시지 대기열 서비스인 \nAmazon SQS 를 사용하기 때문에 가장 효율적입니다. 또한 SQS 메시지 대기열을 사용하여 \n서로 다른 애플리케이션 계층에 요청을 비동기식으로 전달하여 썸네일 생성 프로세스에서 \n이미지 업로드 프로세스를 분리하고 확장성과 안정성을 활성화합니다. 또한 이미지가 \n수신되었다는 애플리케이션 메시지를 통해 사용자에게 경고하므로 섬네일 생성이 완료될 \n때까지 기다리는 것보다 사용자에게 더 빠른 응답 시간을 제공합니다. \n \n옵션 A 는 서버를 프로비저닝하거나 관리하지 않고 코드를 실행하는 방법인 사용자 지정 \nAWS Lambda 함수를 사용하여 썸네일을 생성하고 사용자에게 경고하기 때문에 효율성이 \n떨어집니다. \n그러나 이것은 썸네일 생성 프로세스에서 이미지 업로드 프로세스를 분리하기 위해 비동기 \n디스패치 메커니즘을 사용하지 않습니다. 또한 이미지 업로드 프로세스를 이벤트 소스로 \n사용하여 Lambda 함수를 호출하므로 한 번에 업로드된 이미지가 많은 경우 동시성 문제가 \n발생할 수 있습니다. \n \n옵션 B 는 애플리케이션의 구성 요소를 일련의 단계로 배열하고 시각화하는 그래픽 콘솔을",
    "glossary": {
      "Lambda": "서버 관리 없이 코드만 실행하면 되는 서버리스 컴퓨팅 서비스",
      "SQS": "시스템 간 메시지를 주고받는 대기열 서비스(분산 처리용)"
    }
  },
  {
    "id": 323,
    "question": "회사 시설에는 건물 전체의 모든 입구에 배지 판독기가 있습니다. 배지를 스캔하면 \n판독기가 HTTPS\n를 통해 메시지를 보내 누가 해당 입구에 액세스하려고 시도했는지 \n나타냅니다. \n솔루션 설계자는 센서에서 보내는 이러한 메시지를 처리하는 시스템을 설계해야 합니다. \n솔루션은 가용성이 높아야 하며 회사의 보안 팀이 분석할 수 있도록 결과를 제공해야 \n합니다. \n솔루션 설계자는 어떤 시스템 아키텍처를 추천해야 합니까?",
    "options": [
      "Amazon EC2 인스턴스를 시작하여 HTTPS 엔드포인트 역할을 하고 메시지를 처리합니다. \n결과를 Amazon S3 버킷에 저장하도록 EC2 인스턴스를 구성합니다.",
      "Amazon API Gateway 에서 HTTPS 엔드포인트를 생성합니다. AWS Lambda 함수를 \n호출하여 메시지를 처리하고 결과를 Amazon DynamoDB 테이블에 저장하도록 API \nGateway 엔드포인트를 구성합니다.",
      "Amazon Route 53 을 사용하여 들어오는 센서 메시지를 AWS Lambda 함수로 보냅니다. \n메시지를 처리하고 결과를 Amazon DynamoDB 테이블에 저장하도록 Lambda 함수를 \n구성합니다.",
      "Amazon S3\n용 게이트웨이 VPC 엔드포인트를 생성합니다. 센서 데이터가 VPC \n엔드포인트를 통해 S3 버킷에 직접 기록될 수 있도록 시설 네트워크에서 VPC\n로의 \nSite-to-Site VPN 연결을 구성합니다."
    ],
    "answer": 1,
    "explanation": "www.examtopics.com/discussions/amazon/view/99699-exam-aws-certified-solut",
    "glossary": {}
  },
  {
    "id": 324,
    "question": "회사는 기본 온프레미스 파일 스토리지 볼륨에 대한 재해 복구 계획을 구현하려고 합니다. \n파일 스토리지 볼륨은 로컬 스토리지 서버의 iSCSI(Internet Small Computer Systems \nInterface) 장치에서 마운트됩니다. 파일 스토리지 볼륨은 수백 테라바이트(TB)의 데이터를 \n보유합니다. \n회사는 최종 사용자가 대기 시간 없이 온프레미스 시스템의 모든 파일 유형에 즉시 \n액세스할 수 있기를 원합니다. \n회사의 기존 인프라를 최소한으로 변경하면서 이러한 요구 사항을 충족하는 솔루션은 \n무엇입니까?",
    "options": [
      "온프레미스에서 호스팅되는 가상 머신(VM)으로 Amazon S3 파일 게이트웨이를 \n프로비저닝합니다. 로컬 캐시를 10TB\n로 설정합니다. NFS 프로토콜을 통해 파일에 \n액세스하도록 기존 애플리케이션을 수정합니다. 재해에서 복구하려면 Amazon EC2 \n인스턴스를 프로비저닝하고 파일이 포함된 S3 버킷을 탑재합니다.",
      "AWS Storage Gateway 테이프 게이트웨이를 프로비저닝합니다. 데이터 백업 솔루션을 \n사용하여 모든 기존 데이터를 가상 테이프 라이브러리에 백업하십시오. 초기 백업이 완료된 \n후 야간에 실행되도록 데이터 백업 솔루션을 구성합니다. 재해에서 복구하려면 Amazon \nEC2 인스턴스를 프로비저닝하고 가상 테이프 라이브러리의 볼륨에서 Amazon Elastic Block \nStore(Amazon EBS) 볼륨으로 데이터를 복원합니다.",
      "AWS Storage Gateway 볼륨 게이트웨이 캐시 볼륨을 프로비저닝합니다. 로컬 캐시를 \n10TB 로 설정합니다. iSCSI 를 사용하여 볼륨 게이트웨이 캐싱 볼륨을 기존 파일 서버에 \n마운트하고 모든 파일을 스토리지 볼륨에 복사합니다. 스토리지 볼륨의 예약된 스냅샷을 \n구성합니다. 재해에서 복구하려면 스냅샷을 Amazon Elastic Block Store(Amazon EBS) \n볼륨으로 복원하고 EBS 볼륨을 Amazon EC2 인스턴스에 연결합니다.",
      "기존 파일 스토리지 볼륨과 동일한 양의 디스크 공간으로 AWS Storage Gateway 볼륨 \n게이트웨이 저장 볼륨을 프로비저닝합니다. iSCSI 를 사용하여 볼륨 게이트웨이 저장 볼륨을 \n기존 파일 서버에 마운트하고 모든 파일을 스토리지 볼륨에 복사합니다. 스토리지 볼륨의 \n예약된 스냅샷을 구성합니다. 재해에서 복구하려면 스냅샷을 Amazon Elastic Block \n\n=== PAGE 345 ===\nStore(Amazon EBS) 볼륨으로 복원하고 EBS 볼륨을 Amazon EC2 인스턴스에 연결합니다."
    ],
    "answer": 3,
    "explanation": "www.examtopics.com/discussions/amazon/view/99711-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \n\"회사는 최종 사용자가 온프레미스 시스템의 모든 파일 유형에 즉시 액세스할 수 있기를 \n원합니다.\" \n- 캐싱된 볼륨(Cached volumes): 가장 최근 데이터에 대한 액세스 대기 시간이 짧습니다. \n- 저장 볼륨(Stored volumes): 전체 데이터 세트는 온프레미스이며 S3 로 예약 백업되므로 \n볼륨 게이트웨이 저장 볼륨이 적절한 선택입니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)"
    }
  },
  {
    "id": 325,
    "question": "회사는 Amazon S3 버킷에서 웹 애플리케이션을 호스팅하고 있습니다. 이 애플리케이션은 \nAmazon Cognito 를 자격 증명 공급자로 사용하여 사용자를 인증하고 다른 S3 버킷에 \n저장된 보호된 리소스에 대한 액세스를 제공하는 JSON 웹 토큰(JWT)을 반환합니다. \n응용 프로그램 배포 시 사용자는 오류를 보고하고 보호된 콘텐츠에 액세스할 수 없습니다. \n솔루션 설계자는 사용자가 보호된 콘텐츠에 액세스할 수 있도록 적절한 권한을 제공하여 이 \n문제를 해결해야 합니다. \n어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": [
      "Amazon Cognito 자격 증명 풀을 업데이트하여 보호된 콘텐츠에 액세스하기 위한 적절한 \nIAM 역할을 맡습니다.",
      "애플리케이션이 보호된 콘텐츠에 액세스할 수 있도록 S3 ACL 을 업데이트합니다.",
      "애플리케이션을 Amazon S3 에 재배포하여 S3 버킷의 최종적으로 일관된 읽기가 보호된 \n콘텐츠에 액세스하는 사용자의 기능에 영향을 미치지 않도록 합니다.",
      "자격 증명 풀 내에서 사용자 지정 속성 매핑을 사용하고 사용자에게 보호된 콘텐츠에 \n액세스할 수 있는 적절한 권한을 부여하도록 Amazon Cognito 풀을 업데이트합니다."
    ],
    "answer": 0,
    "explanation": "www.examtopics.com/discussions/amazon/view/99754-exam-aws-certified-solut\nions-architect-associate-saa-c03/ \n \n \nAmazon Cognito 자격 증명 풀은 인증된 사용자에게 AWS 리소스에 액세스할 수 있는 \n권한이 제한된 임시 자격 증명 세트를 할당합니다. 각 사용자의 권한은 생성한 IAM 역할을 \n통해 \n제어됩니다.",
    "glossary": {
      "S3": "AWS에서 제공하는 무제한 파일 저장소(객체 스토리지)",
      "IAM": "AWS 리소스에 대한 접근 권한을 관리하는 보안 시스템"
    }
  }
];