export const quizData = [
  {
    "id": 651,
    "question": "S3 이미지를 보관하려 합니다. 처음 180일은 자주 보고, 다음 180일은 가끔 봅니다. 1년 뒤부터는 즉시 조회가 가능해야 하고, 5년 뒤부터는 감사용으로 12시간 안에만 나오면 됩니다. 가장 알뜰한 보관 계획은?",
    "options": [
      "180일 뒤 One Zone-IA로 옮기고, 1년 뒤 Glacier 즉시 검색, 5년 뒤 Deep Archive로 보냅니다.",
      "180일 뒤 One Zone-IA로 보내고, 1년 뒤 Glacier 유연한 검색, 5년 뒤 Deep Archive로 보냅니다.",
      "180일 뒤 Standard-IA로, 1년 뒤 Glacier '즉시 검색(Instant Retrieval)', 5년 뒤 'Deep Archive'로 전환합니다.",
      "180일 뒤 Standard-IA로, 1년 뒤 Glacier 유연한 검색, 5년 뒤 Deep Archive로 보냅니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 데이터 유실을 막으려면 최소 3개 AZ에 저장하는 Standard-IA를 써야 합니다. 1년 뒤 '즉시 사용' 요건은 Glacier Instant Retrieval이 딱이며, 5년 뒤 12시간 이내 검색은 가장 저렴한 Deep Archive가 정답입니다.\n\nhttps://aws.amazon.com/s3/storage-classes/",
    "glossary": {
      "S3 Standard-IA": "가끔 보지만 소중한 데이터를 저렴하게 보관하는 등급",
      "S3 Glacier Instant Retrieval": "거의 안 보지만 필요할 때 1초 만에 꺼낼 수 있는 저렴한 보관소",
      "S3 Glacier Deep Archive": "가장 저렴하지만 꺼내는 데 몇 시간(최대 12~48시간)이 걸리는 창고",
      "Lifecycle Policy (수명 주기 정책)": "시간이 지나면 파일을 자동으로 싼 곳으로 옮겨주는 자동화 규칙"
    }
  },
  {
    "id": 652,
    "question": "매일 6시간 동안 엄청난 양의 데이터를 계산해야 합니다. 도중에 서버가 꺼져도 데이터가 날아가면 안 됩니다. EMR 클러스터를 가장 가성비 좋게 구성하는 방법은?",
    "options": [
      "24시간 켜두는 클러스터를 만들고 작업 노드만 스팟(Spot) 인스턴스로 씁니다.",
      "딱 6시간만 쓰고 버리는 '임시(Transient) 클러스터'를 만들고, 핵심 노드는 온디맨드로, 작업 노드는 스팟으로 씁니다.",
      "모든 노드를 처음부터 끝까지 비싼 온디맨드 인스턴스로만 채웁니다.",
      "관리 노드(Master)까지 스팟으로 채워서 최대한 돈을 아낍니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 하루 6시간만 일하면 되므로, 일이 끝나면 클러스터를 아예 삭제하는 '임시(Transient) 클러스터'가 가장 경제적입니다. 중요한 대장(Master)과 핵심(Core) 노드는 안정적인 온디맨드로, 단순 계산만 돕는 작업(Task) 노드는 90% 저렴한 스팟으로 섞어 쓰는 방식이 효율적입니다.\n\nhttps://aws.amazon.com/emr/",
    "glossary": {
      "Amazon EMR": "빅데이터(Hadoop, Spark 등)를 클라우드에서 쉽고 빠르게 돌려주는 서비스",
      "Transient Cluster (임시 클러스터)": "작업이 끝나면 자동으로 폭파되어 비용을 아끼는 단기 프로젝트용 서버 그룹",
      "Spot Instance (스팟 인스턴스)": "AWS의 남는 서버를 경매 방식으로 매우 저렴하게 빌려 쓰는 대신, 언제든 회수당할 수 있는 모델"
    }
  },
  {
    "id": 653,
    "question": "온프레미스에서 RDS(MySQL)로 이사한 뒤 평소엔 괜찮은데, 한 달에 한 번 보고서를 뽑을 때만 DB가 느려집니다. 일상 업무에 지장을 주지 않고 보고서를 뽑는 비책은?",
    "options": [
      "보고서 전용 '읽기 전용 복제본(Read Replica)'을 만들고 쿼리를 그쪽으로 보냅니다.",
      "매달 보고서를 위해 DB 수동 백업을 받고 새 서버에 복원해서 씁니다.",
      "DB 데이터를 S3로 매번 다 뽑아낸 뒤 Athena로 분석합니다.",
      "보고서 뽑는 날에만 DB 서버 사양을 엄청나게 키웁니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. RDS의 '읽기 전용 복제본'은 조회 전담 조수입니다. 한 달에 한 번 있는 무거운 조회 업무를 이 조수에게 맡기면, 주인이 일하는 메인 DB는 평소처럼 쌩쌩하게 가동됩니다. 가장 쉽고 관리 수고가 적은 표준 방식입니다.\n\nhttps://aws.amazon.com/rds/features/read-replicas/",
    "glossary": {
      "Read Replica (읽기 전용 복제본)": "주 DB의 정보를 실시간으로 복사해 오직 조회 작업만 대신 해주는 도우미 서버",
      "Amazon RDS": "DB 설치, 백업, 보안 패치를 자동으로 해주는 관리형 DB 서비스",
      "Query (쿼리)": "DB에게 정보를 찾아달라고 시키는 명령어"
    }
  },
  {
    "id": 654,
    "question": "Aurora DB를 쓰는데 손님이 너무 많아 '연결 초과' 오류가 납니다. 또한 장애 시 조수 서버가 대장으로 승격되는 시간도 20% 더 줄이고 싶은데, 정답은?",
    "options": [
      "Aurora를 버리고 일반 RDS로 이사 갑니다.",
      "DB 앞에 'Amazon RDS Proxy'를 두어 연결을 관리하게 합니다.",
      "캐시 서비스인 DAX를 도입해서 모든 조회의 짐을 나눕니다.",
      "대용량 분석 전용인 Redshift로 모든 데이터를 이사합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 'RDS Proxy'는 손님들이 DB 문 앞까지 줄을 서게 관리해주는 똑똑한 지배인입니다. 수만 명의 접속을 효과적으로 쪼개서 DB에 전달해주므로 '연결 초과'를 막아주고, 서버 교체(Failover) 시 복구 시간도 획기적으로 줄여줍니다.\n\nhttps://aws.amazon.com/rds/proxy/",
    "glossary": {
      "Amazon RDS Proxy": "DB 연결 통로를 미리 확보(Pooling)해두고 효율적으로 나눠주는 관리형 프록시 서비스",
      "Failover (장애 조치)": "메인 서버가 고장 났을 때 예비 서버로 임무를 즉시 넘기는 기술",
      "Connection Pooling (연결 풀링)": "매번 새 연결을 맺는 대신 미리 열어둔 통로를 재사용하는 기술"
    }
  },
  {
    "id": 655,
    "question": "매일 밤 2MB 정도의 수면 데이터를 S3에 보내는 스마트 매트리스가 있습니다. 이 짧은 데이터를 30초 만에 분석해서 요약하려 할 때 가장 알뜰한 방법은?",
    "options": [
      "대규모 데이터 변환 툴인 AWS Glue(Scala)를 씁니다.",
      "빅데이터 전문가용인 Amazon EMR(Spark)로 분석합니다.",
      "파이썬(Python) 코드를 짠 뒤 'AWS Lambda'로 가볍게 돌립니다.",
      "Glue(PySpark) 작업을 매일 밤 예약해서 처리합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 2MB 데이터와 30초 계산 시간은 람다(Lambda)에게 아주 작은 일입니다. 람다는 서버를 24시간 켜둘 필요도 없고, 정말 일한 수초만큼만 돈을 내면 되므로 이런 소규모 반복 작업에는 가성비 끝판왕입니다.\n\nhttps://aws.amazon.com/lambda/",
    "glossary": {
      "AWS Lambda": "서버 관리 없이 코드만 올리면 알아서 돌아가는 서버리스 실행 환경",
      "Python (파이썬)": "데이터 분석과 인공지능 분야에서 가장 널리 쓰이는 쉽고 강력한 프로그래밍 언어",
      "Cost-effective (비용 효율적)": "성능은 챙기면서 돈은 최대한 아끼는 영리한 방식"
    }
  },
  {
    "id": 656,
    "question": "인공지능을 활용해 사기 행위를 잡아내려 합니다. 방대한 데이터를 수백 대의 서버가 한꺼번에 소통하며 가장 빠르게 처리해야 할 때 필요한 툴은?",
    "options": [
      "쿠버네티스(EKS)에 컨테이너를 수천 개 띄워 봅니다.",
      "HPC 전용 툴인 'AWS ParallelCluster'와 'MPI(메시지 전송 관리)'를 씁니다.",
      "로드 밸런서 뒤에 EC2를 잔뜩 넣고 웹 요청처럼 처리합니다.",
      "수천 개의 람다 함수를 동시에 실행시켜서 각자 계산하게 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 'ParallelCluster'는 수백 대의 서버를 하나의 거대한 슈퍼컴퓨터처럼 묶어주는 전문 도구입니다. 여기에 서버끼리 데이터를 초고속으로 주고받는 약속인 'MPI'를 더하면, 복잡한 사기 탐지 계산을 전 세계에서 가장 빠르게 끝낼 수 있습니다.\n\nhttps://aws.amazon.com/hpc/parallelcluster/",
    "glossary": {
      "AWS ParallelCluster": "AWS 환경에서 슈퍼컴퓨터(HPC)를 클릭 몇 번으로 뚝딱 만들어주는 관리 도구",
      "MPI (Message Passing Interface)": "여러 대의 컴퓨터가 계산 중인 데이터를 광속으로 서로 주고받기 위해 사용하는 표준 통신 규약",
      "Distributed Processing (분산 처리)": "하나의 큰 숙제를 여러 서버가 나눠서 동시에 해결하는 방식"
    }
  },
  {
    "id": 657,
    "question": "EKS(쿠버네티스)로 돌아가는 여러 마이크로서비스가 있습니다. 주소를 보고(예: /orders, /customers) 알맞은 서비스로 안내해줄 가장 알뜰한 안내원은?",
    "options": [
      "단순 통로인 Network Load Balancer(NLB)를 씁니다.",
      "주소(경로)를 이해하는 'Application Load Balancer(ALB)'를 씁니다.",
      "람다(Lambda) 함수를 중간에 거쳐 가게 설계합니다.",
      "API Gateway를 입구에 두고 모든 트래픽을 EKS로 쏘게 합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 쿠버네티스 환경에서 특정 주소(/path)를 보고 알맞은 목적지로 보내주는 일(L7 라우팅)은 ALB가 제일 잘합니다. 'AWS Load Balancer Controller'를 쓰면 관리가 매우 편하고 비용 효율도 좋습니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/application-load-balancer/",
    "glossary": {
      "Application Load Balancer (ALB)": "주소(URL)나 내용을 보고 똑똑하게 길을 안내하는 7계층 로드 밸런서",
      "AWS Load Balancer Controller": "쿠버네티스가 AWS의 로드 밸런서를 직접 조종할 수 있게 해주는 마법의 도구",
      "Path-based Routing (경로 기반 라우팅)": "주소 창의 글자(/orders 등)를 보고 특정 팀 서버로 보내주는 기술"
    }
  },
  {
    "id": 658,
    "question": "온프레미스의 웹 서버와 MySQL DB를 AWS로 옮기려 합니다. 서비스 구조는 최대한 안 바꾸면서 사고에도 튼튼하게(Resilient) 만들고 싶은데, 어떤 2가지를 할까요?",
    "options": [
      "웹 서버는 ALB 로드 밸런서와 '오토 스케일링 그룹(ASG)'으로 묶습니다.",
      "DB 서버에도 Network Load Balancer를 달아줍니다.",
      "DB는 클릭 한 번으로 장애 복구가 되는 'RDS 다중 AZ(Multi-AZ)'로 옮깁니다.",
      "웹 서버를 모두 람다(Lambda)라는 코드로 완전히 다시 짭니다.",
      "MySQL을 쓰기 편한 NoSQL인 DynamoDB로 강제 마이그레이션합니다."
    ],
    "answer": [0, 2],
    "explanation": "정답은 A와 C입니다. 구조를 안 바꾸면서 튼튼하게 만드는 정석은 ①웹 서버를 여러 대 띄우고(ASG) 입구엔 로드 밸런서(ALB)를 두는 것, ②DB는 전문 관리 서비스(RDS)에 맡기되 비상용 서버를 하나 더 두는 '다중 AZ' 기능을 켜는 것입니다.\n\nhttps://aws.amazon.com/rds/features/high-availability/",
    "glossary": {
      "Auto Scaling Group (ASG)": "서버가 고장 나면 자동으로 새 서버를 띄워 머릿수를 유지해주는 보호막",
      "RDS Multi-AZ": "서버 하나가 고장 나도 다른 지역의 예비 서버로 즉시 임무를 넘겨 DB를 살려내는 기술",
      "Resilience (복원력/회복 탄력성)": "시스템이 장애를 겪어도 스스로 버티거나 빠르게 원래대로 돌아오는 능력"
    }
  },
  {
    "id": 659,
    "question": "EKS 개발용 테스트 서버가 필요합니다. 테스트용이라 가끔 꺼져도 괜찮은데, 가장 돈을 적게 들이면서 AWS가 알아서 관리해주는 노드 설정은?",
    "options": [
      "무조건 90% 저렴한 '스팟 인스턴스(Spot)'만 담은 관리형 노드 그룹을 만듭니다.",
      "안전한 온디맨드와 싼 스팟 인스턴스를 반반씩 섞어서 구성합니다.",
      "수동 관리 방식인 Auto Scaling 그룹을 직접 만들고 서버용 코카(EC2) 주소를 넣습니다.",
      "가장 비싼 온디맨드 인스턴스로만 채워서 개발 속도를 높입니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 개발 및 테스트 용도라면 비용 절감이 최우선입니다. 'EKS 관리형 노드 그룹'에서 '스팟 인스턴스'를 선택하면, AWS가 노드의 생명 주기도 챙겨주면서 가격은 온디맨드보다 최대 90%나 저렴하게 쓸 수 있습니다.\n\nhttps://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html",
    "glossary": {
      "Managed Node Group (관리형 노드 그룹)": "쿠버네티스 서버(노드)의 패치와 업데이트, 교체를 AWS가 알아서 다 해주는 모드",
      "Spot Instance (스팟 인스턴스)": "AWS의 남는 자원을 파격가에 빌려 쓰되, 주인이 필요하면 반납해야 하는 알뜰형 모델",
      "Amazon EKS": "복잡한 쿠버네티스를 클릭 몇 번으로 운영해주는 AWS 전용 서비스"
    }
  },
  {
    "id": 660,
    "question": "회사 SMB 파일 서버에 일주일 된 파일은 자주 쓰지만, 그 이후엔 거의 안 봅니다. 7일 뒤엔 저렴하게 저장하고 나중에 필요하면 24시간 안에만 나오면 되는데?",
    "options": [
      "DataSync 서비스를 써서 일주일 된 파일만 골라 매번 S3로 강제 이사를 보냅니다.",
      "S3 파일 게이트웨이를 설치하고, 7일 뒤에 'S3 Glacier Deep Archive'로 보내는 규칙을 겁니다.",
      "FSx 파일 게이트웨이를 만들고 S3로 보내는 복잡한 수동 규칙을 짭니다.",
      "개별 사용자들에게 S3 직접 접속법을 가르쳐주고 7일 뒤에 Glacier로 옮기게 시킵니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 기존 SMB 방식(윈도우 공유 폴더)을 유지하면서 S3의 저렴한 저장 공간을 빌려 쓰는 가장 편한 장비가 'S3 파일 게이트웨이'입니다. 여기에 S3 수명 주기 규칙을 더해 자동 보관 모드(Deep Archive)로 보내면 비용을 획기적으로 줄일 수 있습니다.\n\nhttps://aws.amazon.com/filegateway/",
    "glossary": {
      "S3 File Gateway": "기존의 파일 공유 방식(SMB/NFS)으로 S3에 부드럽게 글을 남기게 해주는 교량 서비스",
      "S3 Glacier Deep Archive": "가장 저렴한 끝판왕 저장소로, 데이터를 꺼내는 데 몇 시간~하루가 걸려도 상관없을 때 씁니다.",
      "SMB (Server Message Block)": "윈도우 컴퓨터들끼리 폴더를 공유할 때 쓰는 표준 통신 규격"
    }
  },
  {
    "id": 661,
    "question": "S3 버킷의 새 파일들을 EFS(공유 폴더)와 다른 S3 버킷으로 '지속적으로' 복사해야 합니다. 파일이 바뀌었을 때만 덮어쓰고 싶은데 가장 편한 도구는?",
    "options": [
      "AWS DataSync에서 '바뀐 것만 전송' 모드를 켜고 복사 작업을 예약합니다.",
      "람다(Lambda) 함수를 하나 짜서 S3 이벤트를 감시하고 일일이 복사하는 코드를 배포합니다.",
      "DataSync 위치만 만들고 한 번에 싹 다 보내는 전체 전송 모드만 씁니다.",
      "EC2 서버에 직접 정기 스케줄러(Cron)를 걸어서 수동 동기화 스크립트를 돌립니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. AWS DataSync는 '똑똑한 이사 센터'입니다. 소스 데이터가 바뀌었는지 자동으로 감지해서 변경된 부분만 골라 전송해주는 기능이 내장되어 있습니다. 람다 코드를 짤 필요도 없고 서버를 관리할 필요도 없는 가장 '최소 운영' 모델입니다.\n\nhttps://aws.amazon.com/datasync/",
    "glossary": {
      "AWS DataSync": "S3, EFS, 온프레미스 저장소 간의 대규모 전송과 동기화를 번개처럼 해주는 서비스",
      "Incremental Copy (증분 복사)": "처음엔 다 옮기고, 그다음부턴 바뀐 부분만 골라 옮겨서 시간과 비용을 아끼는 기술",
      "Minimum Operational Overhead": "관리자가 발 뻗고 잘 수 있게 시스템이 알아서 다 해주는 상태"
    }
  },
  {
    "id": 663,
    "question": "DynamoDB를 쓰는 앱의 반응 속도를 밀리초(ms)에서 마이크로초(μs) 수준으로 확 끌어올리고 싶습니다. '캐기 기능'이 내장된 가장 쉬운 해결책은?",
    "options": [
      "DynamoDB의 터보 엔진인 'DAX (DynamoDB Accelerator)'를 장착합니다.",
      "데이터를 분석 전문인 Redshift로 옮겨서 다시 계산합니다.",
      "관계형 DB인 RDS로 이사 가서 성능을 높여 봅니다.",
      "범용 캐시 서비스인 ElastiCache Redis를 따로 구축해서 연결합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. DAX는 DynamoDB 전용 '인메모리 캐시' 엔진입니다. 앱 코드를 거의 안 고치고도 버튼 하나로 읽기 속도를 10배 이상(마이크로초 수준) 빠르게 만들 수 있습니다. DynamoDB 사용자라면 이보다 편하고 강력한 가속기는 없습니다.\n\nhttps://aws.amazon.com/dynamodb/dax/",
    "glossary": {
      "DAX (DynamoDB Accelerator)": "DynamoDB의 읽기 요청을 메모리에 저장해두고 빛의 속도로 응답해주는 전용 캐시 서비스",
      "Microsecond (마이크로초)": "100만 분의 1초. 눈 깜빡임보다 압도적으로 빠른 찰나의 시간",
      "In-memory Cache": "느린 하드디스크 대신 빠른 메모리(RAM)에 데이터를 미리 올려두고 빌려주는 기술"
    }
  },
  {
    "id": 664,
    "question": "회사의 복잡한 HPC(고성능 계산) 장비들을 AWS로 옮기려 합니다. NFS/SMB를 동시에 지원해야 하고 서버들 사이의 '광속 응답(최저 레이턴시)'이 필수라면? (2개 선택)",
    "options": [
      "컴퓨터들을 한곳에 꽉 붙여두는 '클러스터 배치 그룹(Cluster Placement Group)'에 넣습니다.",
      "컴퓨터들을 여러 곳에 흩어놓는 파티션 배치 그룹을 씁니다.",
      "리눅스 전용인 FSx for Lustre를 어떻게든 엮어 봅니다.",
      "오픈 소스 전용인 FSx for OpenZFS를 시도합니다.",
      "만능 저장소인 'NetApp ONTAP용 Amazon FSx'에 연결합니다."
    ],
    "answer": [0, 4],
    "explanation": "정답은 A와 E입니다. 최저 레이턴시(속도)를 위해서는 물리적으로 서버들을 바짝 붙여놓는 '클러스터 배치 그룹'이 필수입니다. 또한 NFS와 SMB 방식을 동시에 만족시키는 저장소는 'FSx for NetApp ONTAP'이 가장 적합합니다.\n\nhttps://aws.amazon.com/fsx/netapp-ontap/",
    "glossary": {
      "Cluster Placement Group": "네트워크 지연 시간을 극단적으로 줄이기 위해 EC2 서버들을 물리적으로 한 랙에 모아두는 설정",
      "Amazon FSx for NetApp ONTAP": "NFS, SMB, iSCSI 등 모든 방식을 다 지원하는 팔방미인 고성능 저장소 서비스",
      "Latency (지연 시간)": "데이터가 오가는 데 걸리는 시간. HPC에서는 0.001초 차이가 성패를 가름"
    }
  },
  {
    "id": 665,
    "question": "SQL Server 엔터프라이즈를 운영 중인데, 관리 수고는 줄이고 싶고 분석팀용 보고서 쿼리가 운영 서버에 짐이 되지 않게 하고 싶습니다. 가장 깔끔한 방법은?",
    "options": [
      "RDS SQL Server로 옮기고, 보고서 전용 '읽기 복제본'을 만듭니다.",
      "EC2 서버를 직접 운영하며 SQL Server의 복제 기능을 수동으로 관리합니다.",
      "NoSQL인 DynamoDB로 강제 마이그레이션해서 보고서를 뽑습니다.",
      "엔진을 Aurora MySQL로 완전히 바꿔서 이사 갑니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 가장 '관리형'에 가까운 정답은 RDS입니다. RDS SQL Server는 보고서용 '읽기 복제본' 생성을 클릭 한 번으로 지원합니다. 주 서버는 장사를 하고, 복제본 서버는 보고서를 뽑으면 운영 서버의 성능 저하 없이 평화롭게 지낼 수 있습니다.\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/SQLServerUserGuide/SQLServer.ReadReplicas.html",
    "glossary": {
      "Amazon RDS for SQL Server": "마이크로소프트의 SQL 서버를 AWS가 대신 돌려주는 관리형 서비스",
      "Read Replica (읽기 전용 복제본)": "주 DB의 업무를 방해하지 않고 옆에서 조용히 데이터 조회만 돕는 도우미 서버",
      "Operational Overhead": "누가 직접 서버를 고치고 관리해야 하는 귀찮음의 정도"
    }
  },
  {
    "id": 666,
    "question": "누가 어떤 리소스를 만들었는지, 비용 센터 ID(RDS에 저장됨)를 찾아 자동으로 태그를 달고 싶습니다. Organizations 환경에서 가장 자동화된 방식은?",
    "options": [
      "SCP(서비스 제어 정책)를 써서 태그가 없는 리소스 생성을 아예 막아버립니다.",
      "리소스 생성 '실시간 이벤트(CloudTrail)'를 감지해, '람다'가 RDS를 조회한 뒤 즉시 태그를 달게 합니다.",
      "CloudFormation 스택을 써서 매일 정해진 시간마다 태그 정리 봇을 돌립니다.",
      "태그가 빠진 것만 골라내는 EventBridge 규칙을 만들고 람다로 기본값 태그만 입힙니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 실시간으로 반응하는 자동화가 핵심입니다. CloudTrail이 '누가 뭘 만들었다'라고 소리치면(Event), 똑똑한 람다가 즉시 RDS DB를 뒤져서 그 사람의 부서 번호를 알아온 뒤 리소스에 이름표(Tag)를 붙여주는 방식이 정석입니다.\n\nhttps://aws.amazon.com/eventbridge/",
    "glossary": {
      "AWS Lambda": "이벤트가 발생할 때만 반짝 나타나서 정해진 업무를 수행하고 사라지는 서버리스 요정",
      "Tagging (태그 지정)": "리소스에 '부서: 마케팅' 같은 이름표를 붙여 나중에 비용을 계산하기 편하게 만드는 작업",
      "Amazon EventBridge": "AWS에서 일어나는 모든 일을 다른 서비스로 연결해주는 중앙 이벤트 허브"
    }
  },
  {
    "id": 667,
    "question": "EBS 스냅샷이 실수로 지워지는 걸 막고 싶습니다. 관리자 권한은 그대로 두면서 사고 수습 기회만 만들고 싶다면, 최소한의 노력으로 적용할 기능은?",
    "options": [
      "명령줄 도구(CLI)로만 스냅샷을 지울 수 있게 복잡한 IAM 그룹을 짭니다.",
      "관리자들에게 '지우지 마세요'라는 깐깐한 보안 정책을 강제로 붙입니다.",
      "스냅샷 전용 '휴지통(Recycle Bin)' 보관 규칙을 만들어 둡니다.",
      "한 번 만들면 절대 안 지워지게 스냅샷을 꽁꽁 잠가버립니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. '휴지통(Recycle Bin)' 기능을 켜두면, 누군가 실수로 스냅샷을 삭제하더라도 즉시 사라지지 않고 며칠간 휴지통에 머뭅니다. 관리자 권한을 뺏지 않으면서도 실수로 데이터를 날려먹는 상황을 막아주는 안전장치입니다.\n\nhttps://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin-working-with.html",
    "glossary": {
      "Recycle Bin for EBS Snapshots": "삭제된 백업 파일을 바로 안 버리고 일정 기간 보관해주는 클라우드판 휴지통",
      "Accidental Deletion (실수 삭제)": "잘못 클릭하거나 명령어를 잘못 입력해 중요한 자료를 날려먹는 상황",
      "Retention Rule (보관 규칙)": "휴지통에 들어온 파일을 며칠 동안 살려둘지 정하는 기간 설정"
    }
  },
  {
    "id": 668,
    "question": "사무실의 LDAP(아이디 가방)을 그대로 써서 AWS 콘솔에 로그인하고 싶은데, 이게 하필 옛날 방식(SAML 미지원)입니다. 로그인을 가능하게 할 중개 서비스는?",
    "options": [
      "AWS IAM Identity Center(SSO)를 어떻게든 강제로 연결해 봅니다.",
      "IAM 비밀번호 정책을 사무실 LDAP 규정에 맞춰서 수동으로 똑같이 세팅합니다.",
      "LDAP 비밀번호가 바뀔 때마다 AWS 비밀번호를 바꾸는 자동화 스크립트를 관리합니다.",
      "사내망에 '자격 증명 브로커(Custom Broker)' 앱을 만들어 STS로부터 임시 열쇠를 받아오게 합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. SAML 같은 현대적인 대화법이 안 통할 때는 중간에 통역사(자격 증명 브로커)를 세워야 합니다. 이 앱이 사내 LDAP에서 아이디를 확인한 뒤, AWS 보안실(STS)에 가서 임시 열쇠를 받아와 로그인하게 해주는 방식이 정석입니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federation.html",
    "glossary": {
      "Identity Broker (자격 증명 브로커)": "서로 다른 로그인 시스템 사이에서 인증 정보를 확인하고 연결해주는 중간 다리 역할",
      "AWS STS (Security Token Service)": "잠시만 쓰고 버리는 보안용 임시 열쇠를 발급해주는 서비스",
      "LDAP": "회사 직원들의 아이디와 비밀번호를 관리하는 거대한 주소록/인증 시스템"
    }
  },
  {
    "id": 669,
    "question": "웹 사이트를 운영 중인데 특정 악성 IP가 SQL 공격을 하는 걸 발견했습니다. CloudFront-ALB-WAF 순서로 방패를 쓰고 있다면, 어디를 고치는 게 제일 정확할까요?",
    "options": [
      "네트워크 ACL에서 그 IP를 거부(Deny)하는 규칙을 1번으로 추가합니다.",
      "입구 방패인 AWS WAF 설정에서 해당 IP를 차단하는 'IP 일치 규칙'을 넣습니다.",
      "ALB 뒷단 서버들의 네트워크 ACL을 복잡하게 수정합니다.",
      "서버들의 보안 그룹(Security Group)에서 그 IP의 입장을 아예 닫아버립니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 이미 'AWS WAF(웹 방화벽)'라는 훌륭한 입구 방패를 쓰고 있으므로, 그 방패의 블랙리스트 명단에 해당 악성 IP를 추가하는 것이 가장 깔끔하고 정확합니다. WAF는 SQL 인젝션 방어와 시너지가 매우 좋습니다.\n\nhttps://aws.amazon.com/waf/",
    "glossary": {
      "AWS WAF": "웹 사이트로 들어오는 나쁜 요청이나 특정 IP 주소를 깐깐하게 검사해서 막아주는 방화벽",
      "SQL Injection (SQL 주입)": "로그인 창 같은 곳에 나쁜 코드를 넣어 데이터베이스를 휘젓는 해킹 기법",
      "Edge Location (엣지 로케이션)": "CloudFront가 손님과 가장 가깝게 만나는 접점. 여기서 WAF가 먼저 방어함"
    }
  },
  {
    "id": 670,
    "question": "EC2 한 대에 모든 걸 다 넣은 '모놀리스' 앱이 패치 때마다 서비스가 멈춥니다. 20분 걸리는 보고서 생성 작업도 도중에 끊기면 처음부터 다시 해야 하는데, 정답은?",
    "options": [
      "람다(Lambda) 함수 하나에 모든 코드를 때려 넣어 실행합니다.",
      "가장 싼 스팟(Spot) 서버 대기조를 만들어 마이크로서비스를 돌립니다.",
      "컨테이너 관리 서비스인 'Amazon ECS'에서 업무별로 쪼갠 '마이크로서비스'로 운영합니다.",
      "Elastic Beanstalk에 다 올려서 AWS가 알아서 한꺼번에 관리하게 합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 시스템을 기능별로 작게 쪼개는 '마이크로서비스'와, 이를 안전하게 관리해주는 'ECS(컨테이너)' 조합이 정석입니다. 서비스를 쪼개면 특정 기능만 업데이트할 때 전체가 멈추지 않아도 되고, 보고서 같은 무거운 일도 독립적으로 처리할 수 있습니다.\n\nhttps://aws.amazon.com/ecs/",
    "glossary": {
      "Monolith (모놀리스)": "모든 기능을 하나의 커다란 성 안에 몽땅 집어넣어, 하나가 고장 나면 전체가 위험한 설계 방식",
      "Microservices (마이크로서비스)": "시스템을 작은 단위로 쪼개어 서로 협력하게 만드는 유연한 설계 방식",
      "Amazon ECS": "도커 컨테이너를 AWS가 알아서 척척 관리하고 배포해주는 지휘 통제실"
    }
  },
  {
    "id": 671,
    "question": "컨테이너 앱을 3개 지역(AZ)에 골고루 배치해 가용성을 높이려 합니다. 운영 수고는 최소로 하면서 앱 구조는 거의 안 바꾸고 싶은데, 어떤 툴이 적당할까요?",
    "options": [
      "Amazon ECS를 쓰고, '분산(Spread)' 전략을 설정해 3개 AZ에 최소 3개를 띄웁니다.",
      "EKS(쿠버네티스) 서버를 직접 하나하나 세팅하고 수동으로 분산을 관리합니다.",
      "값비싼 EC2 예약 인스턴스를 직접 사서 배치 그룹으로 묶어 봅니다.",
      "모든 컨테이너 코드를 람다(Lambda)로 완전히 다시 작성해서 배포합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. '최소 운영 오버헤드' 요건에는 AWS가 이미 다 차려놓은 밥상인 ECS가 최고입니다. '작업 배치 전략'에서 'Spread' 옵션만 켜주면 AWS가 알아서 3개 영역에 컨테이너를 골고루 뿌려 가용성을 높여줍니다.\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html",
    "glossary": {
      "Amazon ECS (Elastic Container Service)": "AWS에서 컨테이너를 가장 쉽고 빠르게 돌릴 수 있는 관리형 도구",
      "High Availability (고가용성)": "서버 하나, 전산실 하나가 고장 나도 서비스는 멈추지 않고 계속 돌아가는 능력",
      "Task Placement Strategy (작업 배치 전략)": "컨테이너를 어떤 서버나 지역에 우선적으로 배치할지 결정하는 규칙"
    }
  },
  {
    "id": 672,
    "question": "람다(Lambda)가 갑자기 몰리는 메시지를 CPU를 팍팍 써가며 처리 중입니다. 고객 대기 시간은 짧게 유지하면서 '계산 비용'도 조금이라도 아끼고 싶다면?",
    "options": [
      "람다의 예약 동시성을 걸고, 돈 아끼게 메모리(Memory)를 확 줄입니다.",
      "예약 동시성을 걸고, 메모리를 늘려 봅니다.",
      "미리 대기시키는 '프로비저닝된 동시성'을 끄고 메모리만 줄입니다.",
      "미리 대기시키는 '프로비저닝된 동시성'을 설정하고, 'Compute Optimizer' 권장대로 메모리를 늘립니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 람다는 메모리를 늘리면 비례해서 CPU 파워도 강해집니다. 'Compute Optimizer'의 상담을 받아 메모리를 적절히 늘리면 작업 속도가 빨라져 오히려 비용이 줄어들 수 있습니다. '프로비저닝된 동시성'으로 예열까지 하면 완벽합니다.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    "glossary": {
      "Provisioned Concurrency (프로비저닝된 동시성)": "람다가 즉시 출동할 수 있게 미리 따뜻하게 데워진 상태로 대기시켜 조회 지연을 없애는 기능",
      "AWS Compute Optimizer": "머신러닝을 통해 내 서버나 람다의 사양이 적정하지 분석해주는 공짜 조언 서비스",
      "CPU-intensive (CPU 집약적)": "단순 저장보다는 복잡한 수학 계산이나 암호 풀기 등에 인텔/AMD 머리를 많이 쓰는 상태"
    }
  },
  {
    "id": 673,
    "question": "다음 달 제조 공장에 필요한 부품 양을 예측하려 합니다. S3에 과거 데이터가 잔뜩 있는데, 머신러닝(ML) 지식이 없는 사람이 가장 편하게 쓸 서비스는? (2개 선택)",
    "options": [
      "직업 분석가가 쓰는 SageMaker 모델을 직접 만들어 봅니다.",
      "SageMaker로 데이터를 학습시키고 엔드포인트를 직접 따냅니다.",
      "예측 결과 주소를 람다(Lambda) URL로 만들어 직원이 쉽게 보게 짜줍니다.",
      "데이터 분석 및 시각화 전용인 QuickSight만 믿고 기다립니다.",
      "과거 데이터를 넣으면 미래를 점쳐주는 'Amazon Forecast'에 학습을 맡깁니다."
    ],
    "answer": [2, 4],
    "explanation": "정답은 C와 E입니다. AI 지식이 없어도 과거 기록만 던져주면 미래 수요를 알려주는 전문 서비스가 'Amazon Forecast'입니다. 학습시킨 뒤 결과값을 람다(Lambda) 함수 등으로 시각화하거나 불러오게 만들면 훌륭한 시스템이 완성됩니다.\n\nhttps://aws.amazon.com/forecast/",
    "glossary": {
      "Amazon Forecast": "과거 기록을 바탕으로 미래의 수요, 판매량, 재고 등을 인공지능이 대신 예측해주는 '점쟁이' 서비스",
      "Machine Learning (기계 학습)": "컴퓨터가 방대한 데이터를 공부해서 스스로 규칙을 찾아내도록 만드는 인공지능 기술",
      "TimeSeries Data (시계열 데이터)": "시간의 흐름에 따라 순서대로 기록된 데이터 (예: 날씨, 주가, 일일 부품 소모량)"
    }
  },
  {
    "id": 674,
    "question": "전 세계에서 접속하는 HTTP 앱의 속도를 높이고, 해커들의 공격도 막으면서 '고정된 공개 IP'까지 보장받고 싶습니다. 환상의 방어 조합은?",
    "options": [
      "NLB 앞에 WAF를 붙이고 Global Accelerator를 연결합니다.",
      "ALB 로드 밸런서 앞에 'AWS WAF'를 붙이고 입구에 'Global Accelerator'를 세웁니다.",
      "CloudFront로 요청을 받고 Route 53으로 지역마다 주소를 나눠줍니다.",
      "Route 53 지연 시간 라우팅과 CloudFront+WAF 조합으로 모든 걸 해결합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 'Global Accelerator'는 전 세계 어디서든 변하지 않는 2개의 '고정 IP'를 줍니다. 여기서 들어온 손님을 'ALB'로 안내하고 그 길목에 'WAF'라는 보안 필터를 설치하면 성능과 고정 IP, 보안을 완벽히 잡을 수 있습니다.\n\nhttps://aws.amazon.com/global-accelerator/",
    "glossary": {
      "AWS Global Accelerator": "전 세계 사용자 트래픽을 AWS 전용 광랜으로 안내하여 가속하고 고정 IP를 제공하는 하이패스 서비스",
      "Anycast IP (애니캐스트 IP)": "전 세계 어디서든 똑같은 주소(고정 IP)를 쓰지만, 접속한 곳과 가장 가까운 대문으로 연결되는 마법의 기술",
      "AWS WAF": "웹 사이트에 나쁜 의도를 가진 사람이 오지 못하게 주소를 검사하는 보안 필터"
    }
  },
  {
    "id": 675,
    "question": "세일 기간에 손님이 갑자기 100배로 불어날 것 같습니다. 여러 지역에 서버를 수백 대 띄워야 하는데, 가장 가성비 좋고 설정 쉬운 확장 비법은?",
    "options": [
      "미리 서버 200대를 띄워놓고 반쯤 끈 뒤, 손님이 오면 하나씩 켭니다.",
      "확장할 필요도 없게 처음부터 최대 용량으로 1,000대쯤 예약해 둡니다.",
      "화면은 미리 다 S3에 저장(캐싱)해두고 오토 스케일링 인스턴스를 하나만 둡니다.",
      "트래픽에 맞춰 자동으로 늘어나는 'Auto Scaling 그룹'과 미리 구워둔 '이미지(AMI)'를 씁니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 'Auto Scaling'은 손님의 수에 맞춰 서버 대수를 알아서 늘렸다 줄였다 하는 마법 같은 기능입니다. 미리 설정이 끝난 'AMI(이미지)'를 준비해두면 새 인스턴스가 1분 만에 투입되어 수많은 손님을 감당할 수 있습니다.\n\nhttps://aws.amazon.com/ec2/autoscaling/",
    "glossary": {
      "Auto Scaling": "서버 부하에 따라 자동으로 컴퓨터 대수를 조절하는 클라우드의 핵심 기술",
      "AMI (Amazon Machine Image)": "운영체제와 웹 서버 설정을 미리 싹 다 구워놓은 '복제용 붕어빵 틀'",
      "Cost-effective (비용 효율적)": "필요할 때만 쓰고 안 쓸 땐 아껴서 총비용을 최소화하는 영리한 설계"
    }
  }
];