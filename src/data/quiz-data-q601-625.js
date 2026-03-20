export const quizData = [
  {
    "id": 601,
    "question": "RDS PostgreSQL에서 가동 중지(Downtime)와 데이터 손실을 최소화하면서 고성능 Aurora PostgreSQL로 이사하고 싶습니다. 가장 편한 마이그레이션 방법은?",
    "options": [
      "RDS 스냅샷을 찍어서 새 Aurora 클러스터를 처음부터 다시 만듭니다.",
      "RDS의 'Aurora 읽기 전용 복제본'을 생성한 뒤, 동기가 맞춰지면 이 복제본을 대장(Primary)으로 승격시킵니다.",
      "데이터를 S3에 엑셀 파일로 뽑아낸 뒤 Aurora에서 다시 불러오기(Import)를 수행합니다.",
      "pg_dump 툴을 사용하여 수동으로 백업하고 복원하는 전통적인 방식을 씁니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 사용 중인 RDS의 'Aurora 읽기 전용 복제본'을 만드는 것이 가장 똑똑한 방법입니다. AWS가 배경에서 실시간으로 데이터를 맞춰주기 때문에, 복제가 거의 다 되었을 때 버튼 하나만 눌러 복제본을 대장으로 승격(Promote)시키면 가동 중지 시간을 단 몇 분 내외로 줄일 수 있습니다.\n\nhttps://aws.amazon.com/rds/aurora/",
    "glossary": {
      "Amazon Aurora": "AWS에서 관계형 DB를 클라우드 환경에 최적화하여 5배(MySQL 대비) 이상 빠르게 만든 고성능 엔진",
      "Read Replica (읽기 전용 복제본)": "주 서버의 데이터를 실시간으로 복사해 가지고 있는 조수 서버",
      "Promotion (승격)": "조수(복제본) 서버를 주 서버(Master)로 역할을 바꾸는 과정"
    }
  },
  {
    "id": 602,
    "question": "수백 대의 EC2 서버와 하드디스크(EBS)를 쓰고 있는데, 재난 상황을 대비해 한꺼번에 복구할 수 있는 장치가 필요합니다. 운영 수고가 제일 적은 방법은?",
    "options": [
      "일일이 수동으로 스냅샷을 찍고 CloudFormation 템플릿을 직접 코딩해 관리합니다.",
      "Elastic Beanstalk라는 배포 툴을 써서 전체 인프라 환경을 다시 구축합니다.",
      "AWS Backup 서비스를 사용하여 전체 서버 그룹에 대한 통합 백업 계획을 세웁니다.",
      "람다(Lambda) 함수를 여럿 짜서 스냅샷 찍기와 AMI 복사를 자동화하는 코드를 유지 관리합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 수백 대의 서버를 하나하나 관리할 수는 없습니다. 'AWS Backup'이라는 전용 중앙 관리 서비스를 쓰면, 마우스 클릭 몇 번으로 전체 EC2 그룹에 대한 백업 정책(주기, 보관 기간 등)을 세울 수 있고 복구도 일괄적으로 처리할 수 있어 가장 효율적입니다.\n\nhttps://aws.amazon.com/backup/",
    "glossary": {
      "AWS Backup": "EC2, EBS, RDS 등 다양한 AWS 리소스의 백업을 한곳에서 중앙 관리하는 서비스",
      "Disaster Recovery (재해 복구)": "전산실 화재나 정전 같은 큰 사고가 터졌을 때 시스템을 원래대로 되돌리는 일",
      "Operational Effort (운영 수고)": "시스템을 관리하기 위해 담당자가 들여야 하는 시간과 노력의 양"
    }
  },
  {
    "id": 603,
    "question": "S3에 쌓인 수천 개의 반구조화 데이터(로그, IoT 센서값 등)를 한꺼번에 병렬로 처리하고 싶습니다. 서버 관리 없는 '서버리스' 방식으로 가장 효율적인 지휘 툴은?",
    "options": [
      "AWS Step Functions의 일반(Inline) 맵 상태를 사용하여 데이터를 하나씩 돌립니다.",
      "AWS Step Functions의 '분산 모드(Distributed mode)' 맵 상태를 사용하여 수만 개의 작업을 동시에 처리합니다.",
      "AWS Glue라는 데이터 변환 툴을 써서 배치 처리를 수행합니다.",
      "여러 개의 람다(Lambda) 함수를 수동으로 동시에 호출하여 작동시킵니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. Step Functions의 '분산 맵(Distributed Map)' 모드는 S3에 있는 수백만 개의 객체를 한꺼번에 훑으면서 수천 개의 람다를 동시에 실행할 수 있는 대규모 병렬 처리 기능입니다. 서버 관리 걱정 없이 엄청난 양의 데이터를 쾌속으로 처리하기에 가장 적합한 최신 솔루션입니다.\n\nhttps://docs.aws.amazon.com/step-functions/latest/dg/distributed-map.html",
    "glossary": {
      "AWS Step Functions": "여러 AWS 서비스들을 순서대로 엮어서 하나의 긴 업무 프로세스(워크플로)로 만들어주는 도구",
      "Distributed Map (분산 맵)": "수천 개의 작업을 동시에 병렬로 실행할 수 있게 해주는 Step Functions의 고성능 옵션",
      "Serverless (서버리스)": "사용자가 서버 사양을 고민하거나 운영하지 않아도 AWS가 알아서 자원을 할당해주는 방식"
    }
  },
  {
    "id": 604,
    "question": "10PB(페타바이트)라는 어마어마한 데이터를 6주 안에 S3로 옮겨야 합니다. 인터넷은 느리고 다른 팀과 나눠 써야 하는데, 이 거대한 이사를 끝낼 무기는?",
    "options": [
      "DataSync 서비스를 켜서 인터넷망을 통해 조금씩 전송하며 자동으로 검증하게 합니다.",
      "전통적인 rsync 명령어를 사용하여 인터넷으로 직접 전송을 계속 시도합니다.",
      "AWS CLI 복사 명령을 여러 개 띄워서 24시간 내내 업로드를 돌립니다.",
      "여러 대의 'AWS Snowball Edge' 장비를 한꺼번에 주문해서 데이터를 담아 트럭으로 보냅니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 10PB 데이터를 500Mbps 인터넷망으로 보내면 단순 계산으로도 수년이 걸립니다. 이럴 땐 인터넷을 아예 포기하고 거대 외장 하드 장비인 Snowball에 데이터를 담아 물리적으로 배송하는 것이 유일한 해법입니다.\n\nhttps://aws.amazon.com/snowball/",
    "glossary": {
      "AWS Snowball Edge": "인터넷 속도가 감당 못 할 수준의 대용량 데이터를 물리적으로 담아서 옮겨주는 이동형 데이터 보관 장비",
      "Petabyte (PB)": "1,024테라바이트(TB). 일반적인 하드디스크 수천 개를 합친 엄청난 용량",
      "Bandwidth (대역폭)": "인터넷망이 한 번에 보낼 수 있는 데이터 통로의 크기"
    }
  },
  {
    "id": 605,
    "question": "온프레미스 iSCSI 저장 방식을 그대로 쓰면서, 자주 쓰는 데이터는 바로 내 옆(Local)에 두고 나머지는 S3로 보내고 싶습니다. 어떤 게이트웨이가 딱일까요?",
    "options": [
      "파일 단위로 관리하는 'Amazon S3 파일 게이트웨이'를 설치합니다.",
      "EBS 하드디스크 통째로 S3에 백업하는 단순 백업 방식을 씁니다.",
      "데이터 전부를 로컬 장비에 다 담아두는 '보관된 볼륨(Stored Volume)' 게이트웨이를 씁니다.",
      "자주 쓰는 건 로컬에, 나머지는 클라우드에 두는 '캐시된 볼륨(Cached Volume)' 게이트웨이를 씁니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. '캐시된 볼륨' 모드를 선택하면, 전체 데이터는 저렴한 S3에 보관하되 사람들이 자주 찾는 데이터만 우리 사무실 장비의 메모리(캐시)에 남겨둡니다. 덕분에 하드디스크 증설 비용은 아끼면서도 실제 체감 속도는 로컬 하드디스크를 쓰는 것처럼 빠르게 유지할 수 있습니다.\n\nhttps://docs.aws.amazon.com/filegateway/latest/fileserverpace/what-is-volume-gateway.html",
    "glossary": {
      "AWS Volume Gateway": "기존 iSCSI 방식의 저장 장치를 클라우드 S3와 연결해 하이브리드 저장소로 만들어주는 서비스",
      "Cached Volume (캐시된 볼륨)": "데이터를 S3에 원본으로 두되, 자주 쓰는 것만 로컬 서버에 속도 향상을 위해 남겨두는 방식",
      "iSCSI": "네트워크를 통해 하드디스크(블록) 데이터를 주고받는 표준 통신 규격"
    }
  },
  {
    "id": 606,
    "question": "처음 30일 동안은 자주 보고, 그 이후엔 거의 안 보는 파일들이 있습니다. 파일은 절대 잃어버리면 안 되는데, 가장 가성비 좋은 저장 전략은?",
    "options": [
      "처음부터 아주 저렴한 S3 Glacier에 넣고 30일 뒤에는 삭제 정책을 겁니다.",
      "S3 정식 저장소인 Standard에 두다가 30일이 지나면 'Standard-IA(Infrequent Access)'로 옮깁니다.",
      "비용을 아끼기 위해 30일 뒤에는 한 곳에만 저장하는 'One Zone-IA'로 무조건 보냅니다.",
      "S3 Intelligent-Tiering 기능을 켜고 30일 뒤에 다시 수동으로 Standard-IA로 강제 이동시킵니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 'Standard-IA'는 데이터를 절대 잃어버리지 않는 내구성(여러 곳에 복제)은 standard와 똑같지만, 자주 안 찾는 대신 보관료가 훨씬 저렴한 요금제입니다. 수명 주기(Lifecycle) 설정을 통해 30일 뒤에 자동으로 옮기게 하면 가장 합리적인 선택입니다.\n\nhttps://aws.amazon.com/s3/storage-classes/infrequent-access/",
    "glossary": {
      "S3 Standard-IA": "자주 접속하지 않는 데이터를 저렴하게 보관하면서도, 필요할 때 즉시 읽을 수 있는 요금 등급",
      "Lifecycle Policy (수명 주기 정책)": "시간이 흐름에 따라 파일을 더 저렴한 저장소로 옮기거나 삭제하도록 예약하는 기능",
      "Durability (내구성)": "저장된 데이터가 사고나 하드웨어 고장으로 인해 사라지지 않고 보존되는 정도"
    }
  },
  {
    "id": 607,
    "question": "Oracle DB(RDS)에 수많은 큼직한 문서 파일(BLOB)을 같이 넣었더니 DB가 무겁고 느려졌습니다. 성능도 높이고 비용도 줄이는 묘수는?",
    "options": [
      "DB 서버 사양을 낮추고 하드디스크만 24TB로 늘린 뒤 값싼 자기 테이프(Magnetic) 방식을 씁니다.",
      "DB 서버를 훨씬 큰 사양으로 바꾸고 비싼 프로비저닝된 IOPS(SSD)로 도배합니다.",
      "거대한 문서 데이터는 저렴한 S3 버킷으로 빼고, DB에는 파일이 어디 있는지 알려주는 '주소(메타데이터)'만 남깁니다.",
      "전통적인 관계형 DB를 버리고 NoSQL로 유명한 DynamoDB로 모든 데이터를 강제 마이그레이션합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 덩치 큰 문서 파일은 무제한 창고인 S3에 넣고 DB에는 그 파일 이름(주소)만 기록해두면, DB는 가벼워져서 빨라지고 저장 비용은 획기적으로 줄어듭니다. 이것이 바로 전형적인 'DB 다이어트' 기법입니다.\n\nhttps://aws.amazon.com/s3/",
    "glossary": {
      "S3 Bucket (S3 버킷)": "파일들을 담아두는 클라우드상의 가상 바구니(폴더)",
      "Metadata (메타데이터)": "데이터에 대한 데이터. 여기서는 실제 파일이 어디 있는지 알려주는 주소나 정보를 뜻함",
      "BLOB (Binary Large Object)": "이미지, 문서, 비디오처럼 덩치가 큰 데이터 덩어리"
    }
  },
  {
    "id": 608,
    "question": "전 세계 2만 개 매장 직원들만 접속해야 하는 웹 서비스입니다. 매장에서 미리 등록한 특정 IP 주소들만 들어오게 입구 컷을 하려면?",
    "options": [
      "ALB(로드 밸런서)에 'AWS WAF'를 붙이고, 등록된 IP들만 허용하는 규칙(White List)을 만듭니다.",
      "Firewall Manager를 써서 복잡한 방화벽 스크립트를 수동으로 모든 매장에 배포합니다.",
      "DynamoDB에 IP 목록을 넣고, 접속할 때마다 람다(Lambda) 함수를 띄워 IP를 일일이 대조합니다.",
      "네트워크 ACL(NACL)을 사용하여 2만 개의 IP 규칙을 수동으로 하나하나 등록합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 특정 IP 주소나 국가를 막는 '입구 컷'은 AWS WAF(웹 방화벽)의 전문 분야입니다. WAF를 로드 밸런서 앞에 두면, 허락받지 않은 낯선 IP의 접근을 손쉽게 차단할 수 있습니다. 2만 개 매장 주소 목록을 관리하기에도 WAF의 IP 규칙 세트가 가장 깔끔합니다.\n\nhttps://aws.amazon.com/waf/",
    "glossary": {
      "AWS WAF (Web Application Firewall)": "SQL 삽입이나 특정 IP 차단 등 웹 보안 위협으로부터 서버를 지켜주는 웹 전용 방화벽",
      "White List (화이트리스트)": "모두를 금지하고, 명단에 있는 안전한 사용자만 입장을 허용하는 방식",
      "IP Address Set (IP 세트)": "WAF에서 여러 개의 IP 주소를 그룹화하여 한꺼번에 관리하는 기능"
    }
  },
  {
    "id": 609,
    "question": "데이터 분석 플랫폼(Lake Formation)을 운영 중인데, 특정 부서원은 이름만 보고 다른 부서원은 전화번호까지 보게 하는 등 아주 상세한 보안 설정이 필요합니다.",
    "options": [
      "부서별로 아예 다른 IAM 역할을 만들어서 테이블 접근 권한을 쪼갭니다.",
      "데이터 필터(Data Filters) 기능을 써서 '행(Row)'이나 '셀(Cell)' 단위로 접근을 제한합니다.",
      "데이터를 읽기 전에 람다(Lambda) 함수로 민감한 정보를 가린 뒤 복사본을 따로 만듭니다.",
      "SQL 명령어로 주기적으로 민감한 데이터를 삭제하는 전용 청소 봇을 운영합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. Lake Formation의 강력한 기능 중 하나가 바로 '데이터 필터'입니다. 사용자의 권한에 따라 똑같은 표 안에서도 보지 말아야 할 칸(Cell)이나 줄(Row)을 자동으로 가려줍니다. 가장 세밀하고 정확한 보안 방법입니다.\n\nhttps://aws.amazon.com/lake-formation/",
    "glossary": {
      "AWS Lake Formation": "여러 곳에 흩어진 데이터를 한곳에 모아 안전하게 공유하고 분석할 수 있게 돕는 데이터 호수 관리 서비스",
      "Row-level Security (행 수준 보안)": "자신의 지역 데이터만 볼 수 있게 가로줄(행) 단위로 권한을 주는 기술",
      "Cell-level Security (셀 수준 보안)": "고객의 주소는 봐도 주민번호는 못 보게 특정 칸(열) 단위로 권한을 주는 기술"
    }
  },
  {
    "id": 610,
    "question": "EC2 서버가 S3에 데이터를 올리는데 공용 인터넷을 절대 타면 안 됩니다. 또한 사무실 서버도 이 결과를 안전하게 가져가야 할 때 가장 교과서적인 조합은?",
    "options": [
      "EC2용 인터페이스 VPC 엔드포인트를 깔고 사무실과는 VPN으로 연결합니다.",
      "S3용 게이트웨이 VPC 엔드포인트를 설치하고 사무실과는 Direct Connect(전용선)로 연결합니다.",
      "Transit Gateway를 통해 S3와 직접 통로를 뚫고 전산실과는 VPN을 엮습니다.",
      "NAT 게이트웨이를 겹겹이 쌓아 외부에서는 우리 정체를 모르게 세탁해서 보냅니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. S3에 인터넷 없이 접속하는 가장 싸고 확실한 방법은 '게이트웨이 VPC 엔드포인트'입니다. 여기에 사무실과 AWS를 인터넷이 아닌 물리적 전용선으로 연결하는 'Direct Connect'를 더하면 보안과 속도를 모두 챙길 수 있습니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    "glossary": {
      "Gateway VPC Endpoint": "S3나 DynamoDB를 공용 인터넷망 없이 AWS 전용망으로 바로 연결해주는 가상 통로",
      "AWS Direct Connect": "사무실 전산실과 AWS 데이터 센터를 광케이블로 직접 이어주는 클라우드 전용선",
      "Public Internet (공용 인터넷)": "누구나 접속 가능하여 해킹이나 데이터 가로채기 위험이 있는 공공 망"
    }
  },
  {
    "id": 611,
    "question": "외부 업체가 우리 API에 데이터를 쏘는데, 갑자기 트래픽이 몰리면 503(서버 바쁨) 오류가 납니다. 서버가 터지지 않게 '완충 지대'를 만드는 가장 확장성 있는 설계는?",
    "options": [
      "Kinesis Data Streams를 입구에 두어 일단 데이터를 다 받아두고, 람다(Lambda)가 뒷수습을 하게 합니다.",
      "API Gateway의 '사용량 계획'을 빡빡하게 세워서 업체가 더 이상 못 보내게 막습니다.",
      "SNS(알림 서비스)로 데이터를 수집하고 서버들을 오토 스케일링으로 마냥 늘립니다.",
      "앱을 컨테이너화(ECS)해서 트래픽이 올 때마다 서버 개수를 빠르게 수천 개로 복제합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 실시간으로 쏟아지는 데이터를 일단 '안전하게 담아두는 바구니'가 바로 Kinesis Data Streams입니다. 입구에서 업체들 데이터를 가차 없이 다 받아주기 때문에 업체는 503 오류를 보지 않게 됩니다.\n\nhttps://aws.amazon.com/kinesis/data-streams/",
    "glossary": {
      "Amazon Kinesis Data Streams": "수많은 소스에서 쏟아지는 거대한 데이터를 실시간으로 수집하고 보관하는 대용량 컨베이어 벨트",
      "503 Service Unavailable": "서버가 너무 바쁘거나 점검 중이라 요청을 처리할 수 없을 때 주는 오류 코드",
      "Decoupling (결합 해제)": "입구(데이터 전송)와 출구(데이터 처리)를 분리하여 한쪽이 느려져도 전체가 멈추지 않게 하는 설계 원칙"
    }
  },
  {
    "id": 612,
    "question": "인터넷이 차단된 구역(프라이빗 서브넷)에 있는 EC2가 S3 버킷에 있는 기밀 정보를 읽어야 합니다. 인터넷 세상은 절대 안 거치고 연결하고 싶은데 어떡하죠?",
    "options": [
      "인터넷 게이트웨이를 살짝 열고 S3 버킷 권한만 우리 팀에 허용합니다.",
      "아무도 모르게 VPN을 뚫어서 S3까지 우회해서 접근하게 만듭니다.",
      "NAT 게이트웨이라는 중간 다리를 놔서 인터넷을 통해 내보내되 흔적을 숨깁니다.",
      "VPC 엔드포인트를 구성하여 내부 전용망을 통해 S3와 직접 악수하게 합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 'VPC 엔드포인트'는 AWS 구름 안에서 전용 통로를 뚫는 것과 같습니다. 인터넷망(Public IP)을 전혀 타지 않고도 EC2와 S3가 옆방처럼 대화할 수 있게 해주므로, 기밀 데이터를 인터넷 노출 위험 없이 가장 안전하게 처리할 수 있습니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html",
    "glossary": {
      "VPC Endpoint": "AWS 서비스들을 공용 인터넷을 거치지 않고 VPC 내부 비공개 채널로 연결하는 장치",
      "Private Subnet (프라이빗 서브넷)": "외부 인터넷에서 직접 들어올 수도 없고 나갈 수도 없는 고립된 보안 구역",
      "Public IP": "인터넷상에서 누구나 찾을 수 있는 공용 집 주소"
    }
  },
  {
    "id": 613,
    "question": "EKS(쿠버네티스) 클러스터에서 쓰는 비밀번호나 API 키(Secrets)를 암호화해서 숨기고 싶습니다. 운영 수고가 거의 없는 정석적인 방법은?",
    "options": [
      "개발자가 앱 코드 안에서 직접 AWS KMS를 호출해 암호화하도록 코드를 수정합니다.",
      "EKS 클러스터 설정 메뉴에서 'KMS 암호화' 기능을 켜서 자동으로 숨기게 만듭니다.",
      "비밀 정보를 처리할 때마다 람다(Lambda) 함수를 거쳐 가도록 구조를 바꿉니다.",
      "AWS Systems Manager Parameter Store에 저장하고 매번 불러오게 설정합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. EKS에는 'Kubernetes Secrets' 전용 암호화 기능이 내장되어 있습니다. 이 기능을 켜고 AWS의 금고 열쇠인 KMS와 연결만 해두면, 여러분이 비밀번호를 저장할 때마다 AWS가 배경에서 알아서 척척 암호화해줍니다.\n\nhttps://docs.aws.amazon.com/eks/latest/userguide/kms-encryption.html",
    "glossary": {
      "AWS KMS (Key Management Service)": "데이터를 자물쇠로 잠그고 열 때 쓰는 열쇠(키)를 안전하게 보관하고 관리해주는 보안실",
      "Kubernetes Secrets": "비밀번호, 토큰 등 노출되면 안 되는 정보를 안전하게 저장하는 쿠버네티스의 바구니",
      "Encryption at Rest (저장 시 암호화)": "데이터가 하드디스크에 저장되어 있을 때 누가 훔쳐 가도 못 읽게 암호로 잠가두는 것"
    }
  },
  {
    "id": 614,
    "question": "웹 서버와 앱 서버로 나뉜 구조에서, 앱 서버에는 '오직 우리 웹 서버'만 노크할 수 있게 빗장을 걸고 싶습니다. 어떤 장치를 쓰는 게 가장 좋을까요?",
    "options": [
      "PrivateLink를 앱 서버 앞에 두고 깐깐한 네트워크 ACL로 특정 포트만 엽니다.",
      "VPC 엔드포인트를 배치하고 보안 그룹(Security Group)에서 웹 서버의 그룹 ID만 허용합니다.",
      "Network Load Balancer(NLB)를 쓰고 방화벽 규칙으로 웹 서버 IP를 일일이 등록합니다.",
      "앱 서버들 앞에 'Application Load Balancer(ALB)'를 두고, 보안 그룹을 통해 웹 서버 그룹만 입장을 허용합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 다중 계층(Multi-tier) 앱 보안의 정석은 '보안 그룹(Security Group) 체이닝'입니다. 로드 밸런서(ALB)를 입구에 두고, 보안 그룹 설정에서 "웹 서버 보안 그룹에 속한 녀석들의 80번 포트 요청만 받아줄게"라고 설정하면 됩니다.\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules",
    "glossary": {
      "Security Group (보안 그룹)": "서버의 가상 방화벽으로, 어떤 주소나 어떤 그룹에서 오는 트래픽을 허용할지 결정함",
      "Application Load Balancer (ALB)": "여러 대의 앱 서버에 골고루 트래픽을 나눠주는 똑똑한 안내 데스크",
      "Chaining (체이닝)": "보안 그룹 설정 시 특정 IP 대신 다른 보안 그룹의 ID를 허용 대상으로 지정하는 똑똑한 연동 기법"
    }
  },
  {
    "id": 615,
    "question": "EKS에서 돌아가는 수많은 작은 서비스(마이크로서비스)들의 건강 상태와 로그를 한곳에서 예쁘게 요약해서 보고 싶습니다. 어떤 툴이 적당할까요?",
    "options": [
      "모든 서버에 CloudWatch 에이전트를 수동으로 깔고 텍스트 로그 파일을 직접 훑어봅니다.",
      "App Mesh라는 통신 관리 툴을 써서 서비스들 사이의 대화 로그를 엿듣습니다.",
      "CloudTrail을 켜서 누가 어떤 조작을 했는지 감사 일지를 OpenSearch로 검색합니다.",
      "EKS에 'CloudWatch Container Insights'를 활성화하여 대시보드에서 한눈에 확인합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 컨테이너들의 건강 검진 보고서라고 할 수 있는 'Container Insights'를 켜면 됩니다. CPU 사용량, 메모리, 네트워크 성능은 물론이고 개별 서비스의 로그까지 AWS가 알아서 수집해서 알록달록한 그래프로 보여줍니다.\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html",
    "glossary": {
      "CloudWatch Container Insights": "컨테이너 환경의 지표와 로그를 자동으로 수집하여 분석해주고 시각화해주는 전문 서비스",
      "Metrics (측정항목/지표)": "CPU, 메모리 등 시스템의 상태를 숫자로 나타낸 데이터",
      "Microservices (마이크로서비스)": "하나의 거대 서비스를 여러 개의 작은 독립된 앱으로 쪼개서 운영하는 유행하는 설계법"
    }
  },
  {
    "id": 616,
    "question": "누군가 우리 AWS 계정을 해킹하려고 시도하거나, S3 버킷에 수상한 방식으로 접근하는 걸 실시간으로 감시하고 싶습니다. 대시보드까지 깔끔하게 제공하는 조합은?",
    "options": [
      "Macie 서비스를 써서 개인 정보 유출만 감시하고 Config로 보고합니다.",
      "Inspector로 서버 보안 취약점만 체크하고 CloudTrail에 로그를 남깁니다.",
      "GuardDuty로 악의적 활동을 24시간 감시하고, 결과를 Security Hub에서 모아 봅니다.",
      "Config 기능을 써서 설정 바뀐 것만 체크하고 EventBridge로 알람을 줍니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. AWS의 인공지능 보안 보안팀인 'GuardDuty'는 계정 탈취나 비정상적인 접근 패턴을 귀신같이 찾아냅니다. 여기서 찾아낸 정보들을 'Security Hub'라는 종합 관제 센터로 보내면 리스크를 한눈에 파악할 수 있습니다.\n\nhttps://aws.amazon.com/guardduty/",
    "glossary": {
      "Amazon GuardDuty": "머신러닝과 위협 정보를 활용해 AWS 계정과 리소스에 대한 예기치 못한 활동을 찾아내는 탐정 서비스",
      "AWS Security Hub": "여러 보안 서비스(GuardDuty, Inspector 등)의 결과를 한곳에 모아 우선순위를 정하고 통합 관리하는 관제 센터",
      "Malicious Activity (악의적 활동)": "해킹, 데이터 도난, 이상 접속 등 시스템에 해를 끼치는 모든 행위"
    }
  },
  {
    "id": 617,
    "question": "사무실 공유 드라이브(NFS)에 있는 200GB 데이터를 AWS로 이사하려 합니다. 여러 서버가 동시에 이 데이터를 읽어야 하고, 서비스 중단 없이 옮기고 싶을 때 최고의 듀오는?",
    "options": [
      "FSx for Lustre 저장소를 만들고 수동으로 복사합니다.",
      "Amazon EFS(탄력적 파일 시스템)를 먼저 만들고 대기시킵니다.",
      "S3 버킷을 만들고 모든 데이터를 객체 형태로 업로드합니다.",
      "리눅스 전송 명령어(cp, scp)를 직접 쳐서 수동으로 며칠 동안 전송합니다.",
      "사무실에 'AWS DataSync' 에이전트를 심고, EFS를 목적지로 설정해 동기화를 돌립니다."
    ],
    "answer": [1, 4],
    "explanation": "정답은 E입니다. NFS 방식(공유 드라이브)을 AWS에서도 그대로 쓰려면 'Amazon EFS'가 최선입니다. 여기에 'AWS DataSync'라는 전문 이사 서비스를 더하면, 사무실 데이터를 가동 중단 없이 실시간으로 AWS EFS에 복제해줍니다.\n\nhttps://aws.amazon.com/datasync/",
    "glossary": {
      "Amazon EFS": "여러 서버가 공유해서 쓸 수 있는 용량이 무제한으로 늘어나는 클라우드용 파일 저장소",
      "AWS DataSync": "NFS, SMB 등 로컬 데이터를 AWS로 광속으로 옮겨주는 대규모 전송 전문 서비스",
      "NFS (Network File System)": "네트워크를 통해 여러 컴퓨터가 하나의 하드디스크를 내 거처럼 같이 쓰는 표준 규격"
    }
  },
  {
    "id": 618,
    "question": "미국 동부의 윈도우 파일 서버(FSx)를 서부 리전에 실시간 복제해두고 싶습니다. RPO는 5분 이내여야 하고, 복제된 데이터는 법에 따라 5년간 절대 삭제 안 되게 잠가야 한다면?",
    "options": [
      "단일 영역(Single AZ) FSx를 쓰고 AWS Backup으로 매일 복사합니다. 금고 잠금(Vault Lock)은 일반 모드로 합니다.",
      "다중 영역(Multi-AZ) FSx를 선택하고 일일 백업을 돌립니다. 금고는 관리자도 못 건드리는 '거버넌스' 모드로 잠급니다.",
      "다중 영역(Multi-AZ) FSx를 기본으로 하고 AWS Backup을 통해 서부 리전으로 실시간 복사한 뒤, '규정 준수(Compliance)' 모드로 Vault Lock을 5년 겁니다.",
      "단일 영역 FSx를 쓰되 5년 보존 정책만 걸고 서부 리전으로 천천히 복사합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 안정성을 위해 'Multi-AZ'를 쓰는 게 기본이며, 중요한 데이터 삭제 방지는 'Vault Lock - Compliance(규정 준수) 모드'가 최강입니다. 이 모드로 5년을 설정하면 AWS 직원이라도 5년 전엔 절대 데이터를 지울 수 없습니다.\n\nhttps://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    "glossary": {
      "Amazon FSx for Windows File Server": "윈도우 서버에서 쓰는 공유 드라이브를 AWS에서 그대로 쓰게 해주는 서비스",
      "AWS Backup Vault Lock": "백업된 금고를 잠가서 보존 기간이 끝나기 전까지는 누구도 삭제나 수정을 못 하게 막는 기술",
      "Compliance Mode (규정 준수 모드)": "잠금 설정을 한 번 하면 그 누구(심지어 루트 계정)도 취소하거나 삭제할 수 없는 강력한 보안 옵션"
    }
  },
  {
    "id": 619,
    "question": "개발자들에게 개인 AWS 계정을 줬는데, 이 친구들이 감시 카메라(CloudTrail)를 몰래 끄거나 설정을 바꿀까 봐 걱정됩니다. 관리자 권한을 줘도 이건 못 건드리게 하려면?",
    "options": [
      "각 계정의 루트(Root) 아이디에 'CloudTrail 금지' IAM 정책을 부착합니다.",
      "계정 하나하나 들어가서 '조직 추적' 옵션을 켜달라고 개발자들에게 간곡히 부탁합니다.",
      "서비스 제어 정책(SCP)을 만들어 'CloudTrail 조작 금지' 규칙을 모든 개발자 계정에 강제로 적용합니다.",
      "서비스 연결 역할(SLR)을 만들어서 마스터 계정 주인만 수정 가능하게 막습니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. AWS Organizations의 최강 무기인 'SCP'는 계정의 주인(Root 사용자)조차도 거부할 수 없는 절대적인 규칙입니다. SCP로 특정 서비스(CloudTrail 등)의 설정을 못 바꾸게 못 박아버리면 보안이 철저히 유지됩니다.\n\nhttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    "glossary": {
      "Service Control Policy (SCP)": "조직 내의 계정들이 할 수 있는 행동을 제한하는 가장 강력한 중앙 집권적 보안 정책",
      "CloudTrail": "AWS에서 누가 언제 무엇을 했는지 모든 행동을 녹화하는 블랙박스나 CCTV 같은 역할",
      "Root User (루트 사용자)": "계정의 모든 권한을 가진 절대자이지만, SCP 앞에서는 속수무책임"
    }
  },
  {
    "id": 620,
    "question": "우리 비즈니스의 핵심 서버에는 아주 튼튼하면서도 로딩 속도가 한결같이 빠른 저장 장치가 필요합니다. 지연 시간(Latency)이 거의 없는 최고의 SSD 볼륨은?",
    "options": [
      "임시 저장은 빠르지만 끄면 날아가는 '인스턴스 스토어'를 메인으로 씁니다.",
      "메모리 캐시 서비스인 ElastiCache를 하드디스크 대용으로 사용합니다.",
      "원하는 속도를 돈 주고 예약해서 쓰는 '프로비저닝된 IOPS SSD(io2/io1)' 볼륨을 선택합니다.",
      "용량은 크고 싸지만 속도 편차가 큰 HDD(Throughput Optimized) 방식을 고수합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 성능의 일관성이 가장 중요하다면 '프로비저닝된 IOPS SSD'가 정답입니다. 이 녀석은 "초당 만 번의 클릭(IOPS) 속도를 항상 유지해줘!"라고 돈을 더 내고 약속받는 서비스라 한결같은 쾌적함을 보장합니다.\n\nhttps://aws.amazon.com/ebs/provisioned-iops/",
    "glossary": {
      "Provisioned IOPS SSD": "입출력 속도(IOPS)를 미리 예약하여 성능을 100% 보장받는 최고급 기업용 SSD 볼륨",
      "Latency (지연 시간)": "데이터가 오가는 데 걸리는 미세한 대기 시간. 낮을수록 빠릿빠릿함",
      "Durability (내구성)": "데이터가 망가지지 않고 오래 보존되는 신뢰도를 뜻함"
    }
  },
  {
    "id": 621,
    "question": "미국 서부(us-west-1)에 사진을 올리면, 자동으로 동부(us-east-1) 리전에 복사본이 생기게 하고 싶습니다. 사람 손 안 타고 세팅하는 가장 쉬운 방법은?",
    "options": [
      "S3의 '교차 리전 복제(CRR)' 기능을 켜서 새 사진이 올라올 때마다 알아서 복사하게 합니다.",
      "CORS(교차 출처) 설정을 통해 동부 지역 사용자가 서부 데이터를 직접 읽게 합니다.",
      "S3 수명 주기 규칙을 만들어 0일 뒤에 동부 리전으로 강제 이사를 시킵니다.",
      "람다(Lambda) 함수를 하나 짜서 사진이 올라올 때마다 동부로 복사하라는 코드를 심습니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. S3에는 '복제(Replication)'라는 아주 편한 기능이 있습니다. 한 번만 설정해두면 AWS가 뒤에서 실시간으로 새 파일을 다른 리전으로 옮겨줍니다. 코딩 한 줄 없이 리전 간 백업을 구현할 수 있는 가장 쉬운 방법입니다.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",
    "glossary": {
      "Cross-Region Replication (CRR)": "서로 다른 지리적 리전에 있는 S3 버킷 사이에 데이터를 자동으로 동기화하는 기능",
      "S3 (Simple Storage Service)": "AWS에서 제공하는 사용한 만큼만 돈 내는 무제한 파일 창고",
      "Region (리전)": "지리적으로 멀리 떨어진 데이터 센터 군락 (예: 서울, 도쿄, 버지니아 등)"
    }
  },
  {
    "id": 622,
    "question": "아침엔 수백만 명이 몰리고 나머지 시간엔 조용한 웹 앱을 만드려 합니다. 데이터 구조(스키마)도 수시로 바뀔 것 같은데, 확장성 갑인 2가지 조합은?",
    "options": [
      "DynamoDB를 쓰고 '온디맨드' 모드로 설정해 트래픽 변화에 무한 대응합니다.",
      "Aurora DB를 쓰고 서버리스 모드로 동작시켜서 비용을 아낍니다.",
      "기존처럼 DynamoDB를 쓰되, 사람이 예상 트래픽을 미리 입력하는 '오토 스케일링'을 씁니다.",
      "정적 페이지(이미지 등)는 S3에 담고, 전 세계 배달망인 CloudFront로 쏴줍니다.",
      "웹 서버 수십 대를 띄우고 공유 드라이브(EFS)에 파일을 넣어 동기화합니다."
    ],
    "answer": [0, 3],
    "explanation": "정답은 A와 D입니다. '수백만 명 접속 vs 한산함' + '유연한 데이터 구조'라는 키워드에는 DynamoDB 온디맨드(A)가 찰떡궁합입니다. 여기에 정적 파일은 S3+CloudFront(D) 조합으로 처리하면 전 세계 어디서든 수백만 명 접속에도 끄떡없습니다.\n\nhttps://aws.amazon.com/dynamodb/",
    "glossary": {
      "DynamoDB On-demand": "서버 용량을 미리 정하지 않고, 들어오는 요청 횟수만큼만 돈을 내는 무한 확장 NoSQL DB",
      "CloudFront": "이미지나 정적 파일을 전 세계 곳곳의 Edge 서버에 복사해두고 가장 가까운 곳에서 빠르게 쏴주는 서비스",
      "Schema-less (유연한 구조)": "정해진 틀 없이 데이터 항목을 수시로 맘껏 추가하거나 뺄 수 있는 데이터베이스의 특징"
    }
  },
  {
    "id": 623,
    "question": "API Gateway로 만든 우리 REST API가 SQL 인젝션이나 해킹 공격을 받지 않게 방패를 치고 싶습니다. 가장 빠르고 정확한 운영 방법은?",
    "options": [
      "DDoS 방어 전용인 AWS Shield를 켭니다.",
      "똑똑한 웹 전용 방화벽인 'AWS WAF'를 설정하여 해킹 패턴을 차단합니다.",
      "CloudFront 앞에 Shield를 깔고 모든 트래픽을 검사하게 합니다.",
      "CloudFront 뒤에 WAF를 두고 그 뒤에 다시 API Gateway를 엮는 복잡한 구조를 짭니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. SQL 인젝션이나 크로스 사이트 스크립팅(XSS) 같은 앱 계층의 '지능형 해킹'을 막는 데는 AWS WAF가 정답입니다. API Gateway와 WAF는 단 몇 번의 클릭으로 서로 연결할 수 있어 운영이 매우 간편합니다.\n\nhttps://aws.amazon.com/waf/",
    "glossary": {
      "AWS WAF": "웹 사이트의 주소나 내용을 분석해 나쁜 의도의 메시지가 섞여 있는지 감시하고 막아주는 필터",
      "SQL Injection": "로그인 창 같은 입력 칸에 특수한 DB 명령어를 넣어 서버를 속이고 정보를 빼가는 대표적인 해킹 수법",
      "REST API": "웹 서비스끼리 대화하기 위해 사용하는 표준화된 통신 약속"
    }
  },
  {
    "id": 624,
    "question": "회사 직원 1,500명이 쓰는 윈도우 ID(Active Directory)를 그대로 써서 AWS 리소스에 접속하게 하고 싶습니다. 아이디를 새로 안 만들고 싶은데 어떤 기술이 필요할까요?",
    "options": [
      "어쩔 수 없이 1,500명의 IAM 아이디를 하나씩 일일이 다 만듭니다.",
      "Amazon Cognito를 AD와 억지로 엮어서 복잡한 로그인 앱을 따로 개발합니다.",
      "AD 그룹명을 AWS 역할(Role)과 매핑하는 교차 계정 기술을 도입합니다.",
      "SAML 2.0이라는 국제 표준 연동 방식을 사용하여 회사의 AD 그룹과 AWS 역할(Role)을 연결(Mapping)합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 'SAML 2.0 연동'은 기업용 통합 로그인(SSO)의 표준입니다. 회사의 로그인 서버(AD)에서 본인 확인이 끝나면, AWS가 그 정보를 믿고 해당 직원에게 알맞은 권한(Role)을 잠시 빌려주는 방식입니다.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html",
    "glossary": {
      "SAML 2.0 (Security Assertion Markup Language)": "서로 다른 시스템 간에 로그인 인증 정보를 안전하게 주고받기 위한 국제 표준 규격",
      "Federation (페더레이션/연합)": "한 서비스의 집 주인 증명을 다른 서비스에서도 그대로 인정해주는 '신뢰' 기반의 로그인 연동 기술",
      "Active Directory": "회사 내의 모든 서버와 사용자 아이디를 한곳에서 관리하는 윈도우용 주소록/관리 대장"
    }
  },
  {
    "id": 625,
    "question": "전 세계적으로 콘텐츠마다 판권(배포 권한)이 다릅니다. 한국 손님에겐 한국 영화를, 미국 손님에겐 미국 영화가 나가게 주소를 분기해주려면 어떤 정책이 필요할까요?",
    "options": [
      "WAF 방화벽으로 외국인 IP를 다 차단한 뒤 한국어 페이지만 보여줍니다.",
      "로드 밸런서(ALB) 설정에서 국가 코드를 분석해 직접 라우팅 규칙을 짭니다.",
      "Route 53에서 '지리적 위치(Geolocation)' 라우팅 정책을 사용해 대륙/국가별로 다른 서버 주소를 알려줍니다.",
      "Route 53에서 '지리 근접(Geoproximity)' 라우팅을 써서 편차 기반으로 분산시킵니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 판권 문제는 '어느 나라에서 접속했느냐'가 핵심입니다. Route 53의 지리적 위치 라우팅을 쓰면, 접속자의 국가를 파악해 "한국 손님은 한국 전용 서버 주소로 가세요"라고 친절하게 안내해줄 수 있습니다.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geolocation.html",
    "glossary": {
      "Geolocation Routing (지리적 위치 라우팅)": "접속자의 국가나 대륙 정보를 보고 가장 알맞은 서버 주소를 알려주는 DNS 규칙",
      "Amazon Route 53": "도메인 이름을 IP로 매칭해주며, 지능적인 라우팅으로 전 세계 트래픽을 지휘하는 교통 관제소",
      "Distribution Rights (배포 권한/판권)": "특정 지역에서만 콘텐츠를 보여줄 수 있는 법적인 권리"
    }
  }
];