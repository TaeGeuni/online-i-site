export type Language = 'ko' | 'en' | 'ja';

export const translations = {
  ko: {
    // Navigation
    home: '홈',
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    chat: '채팅',
    backToHome: '홈으로 돌아가기',
    language: '언어',

    // Main Page
    mainTitle: 'HTTP 메서드 학습',
    mainDescription: 'REST API의 핵심 HTTP 메서드를 배워봅시다',
    learnMore: '자세히 알아보기',
    viewDemo: '데모 보기',

    // HTTP Method Cards
    getTitle: 'GET',
    getDesc: '서버에서 데이터를 조회합니다',
    postTitle: 'POST',
    postDesc: '서버에 새로운 데이터를 생성합니다',
    putTitle: 'PUT',
    putDesc: '기존 데이터를 업데이트합니다',
    deleteTitle: 'DELETE',
    deleteDesc: '서버의 데이터를 삭제합니다',
    chatTitle: '실시간 채팅',
    chatDesc: 'WebSocket을 통한 실시간 통신',

    // HTTP Method Modal
    httpMethodsExplain: 'HTTP 메서드란?',
    getExplain: 'GET은 서버에서 리소스를 안전하게 조회하는 메서드입니다. 요청 본문을 포함하지 않습니다.',
    postExplain: 'POST는 서버에 새로운 리소스를 생성하는 메서드입니다. 요청 본문에 데이터를 포함합니다.',
    putExplain: 'PUT은 기존 리소스를 완전히 대체하는 메서드입니다. 전체 데이터를 업데이트합니다.',
    deleteExplain: 'DELETE는 서버의 리소스를 삭제하는 메서드입니다.',
    closeModal: '닫기',

    // Visualization
    request: '요청',
    response: '응답',
    step: '단계',
    example: '예제',
    status: '상태',
    success: '성공',
    error: '오류',

    // Chat
    chatTitle: '실시간 채팅',
    chatDescription: 'WebSocket을 사용한 실시간 메시지 전송',
    enterMessage: '메시지를 입력하세요',
    send: '전송',
    activeUsers: '활성 사용자',
    connectionStatus: '연결 상태',
    connected: '연결됨',
    disconnected: '연결 끊김',
    enterNickname: '닉네임을 입력하세요',
    enter: '입장',
    resetChat: '채팅 리셋',

    // Method Page Headers
    whatIsMethod: '무엇인가요?',
    clientRequest: '클라이언트 요청',
    serverProcessing: '서버 처리',
    serverResponse: '서버 응답',
    requestFlow: '요청 흐름',
    previous: '이전',
    next: '다음',

    // GET specific
    getClientRequest: '클라이언트가 요청 본문 없이 서버에서 데이터를 검색하는 GET 요청을 보냅니다.',
    getServerProcessing: '서버가 GET 요청을 처리하고 요청된 리소스를 검색합니다.',
    getServerResponse: '서버가 응답 본문의 요청된 데이터를 상태 200 OK로 반환합니다.',
    getDescription: 'GET 메서드는 서버에서 데이터를 요청하는 데 사용됩니다. 가장 일반적으로 사용되는 HTTP 메서드 중 하나이며 안전하고 멱등성입니다.',
    getProperties: [
      '✓ 안전함: GET 요청은 서버 상태를 수정하지 않습니다',
      '✓ 멱등성: 동일한 여러 요청이 동일한 결과를 반환합니다',
      '✓ 캐시 가능: GET 응답을 캐시할 수 있습니다',
      '✗ 본문 없음: GET 요청은 일반적으로 요청 본문을 포함하지 않습니다',
    ],
    queryParameters: '쿼리 파라미터',
    queryParametersDesc: 'GET 요청은 URL의 쿼리 파라미터를 통해 데이터를 전달할 수 있습니다:',
    parametersNote: '파라미터는 &로 구분되고 ? 뒤에 추가됩니다',

    // POST specific
    postClientRequest: '클라이언트가 요청 본문에 데이터를 포함하여 새 리소스를 생성하는 POST 요청을 보냅니다.',
    postServerProcessing: '서버가 POST 요청을 검증하고 처리하여 새 리소스를 생성합니다.',
    postServerResponse: '서버가 상태 201 Created로 생성된 리소스를 반환합니다.',
    postDescription: 'POST 메서드는 서버에 새 리소스를 생성하기 위해 데이터를 제출하는 데 사용됩니다. 멱등성이 아니며 안전하지 않은 작업에 사용해야 합니다.',
    postProperties: [
      '✗ 안전하지 않음: POST 요청은 서버 상태를 수정합니다',
      '✗ 멱등성 없음: 동일한 여러 요청이 여러 리소스를 생성합니다',
      '✓ 요청 본문: POST 요청은 요청 본문에 데이터를 포함합니다',
      '✓ 201 생성됨: 성공적인 생성에 대한 일반적인 응답 상태',
    ],
    requestBodyFormats: '요청 본문 형식',
    requestBodyFormatsDesc: 'POST 요청은 다양한 형식으로 데이터를 보낼 수 있습니다:',
    jsonFormat: 'JSON 형식:',
    formDataFormat: '폼 데이터:',

    // PUT specific
    putClientRequest: '클라이언트가 전체 리소스를 업데이트하는 PUT 요청을 보냅니다.',
    putServerProcessing: '서버가 PUT 요청을 처리하고 리소스를 완전히 대체합니다.',
    putServerResponse: '서버가 업데이트된 리소스를 상태 200 OK로 반환합니다.',
    putDescription: 'PUT 메서드는 기존 리소스를 완전히 대체하는 데 사용됩니다. 전체 데이터를 업데이트해야 합니다.',
    putProperties: [
      '✓ 안전하지 않음: PUT 요청은 서버 상태를 수정합니다',
      '✓ 멱등성: 동일한 여러 요청이 동일한 결과를 만듭니다',
      '✓ 요청 본문: PUT 요청은 업데이트할 전체 리소스를 포함합니다',
      '✓ 200 OK: 성공적인 업데이트에 대한 일반적인 응답 상태',
    ],
    putVsPatch: 'PUT vs PATCH',
    putVsPatchDesc: 'PUT과 PATCH의 차이를 이해하는 것이 중요합니다:',
    putFullReplacement: 'PUT - 완전 대체',
    putFullReplacementDesc: '전체 리소스를 대체합니다. 모든 필드를 보내야 합니다.',
    patchPartialUpdate: 'PATCH - 부분 업데이트',
    patchPartialUpdateDesc: '지정한 필드만 업데이트합니다. 생략된 필드는 변경되지 않습니다.',

    // DELETE specific
    deleteClientRequest: '클라이언트가 리소스를 삭제하는 DELETE 요청을 보냅니다.',
    deleteServerProcessing: '서버가 DELETE 요청을 처리하고 리소스를 삭제합니다.',
    deleteServerResponse: '서버가 상태 204 No Content로 응답합니다.',
    deleteDescription: 'DELETE 메서드는 서버에서 리소스를 삭제하는 데 사용됩니다. 멱등성이며 파괴적인 작업입니다.',
    deleteProperties: [
      '✗ 안전하지 않음: DELETE 요청은 서버 상태를 수정합니다',
      '✓ 멱등성: 동일한 여러 요청이 동일한 결과를 만듭니다',
      '✓ 204 No Content: 성공적인 삭제에 대한 일반적인 응답 상태',
      '⚠️ 위험함: 영구 삭제 전에 주의가 필요합니다',
    ],
    securityConsiderations: '보안 고려 사항',
    securityConsiderationsDesc: 'DELETE 요청은 파괴적인 특성 때문에 신중하게 처리해야 합니다:',
    authenticationRequired: '인증 필수: 삭제 전에 사용자 신원을 확인하세요',
    authorizationRequired: '권한 부여: 사용자가 리소스를 삭제할 권한이 있는지 확인하세요',
    auditLogging: '감사 로깅: 규정 준수를 위해 모든 삭제 요청을 기록하세요',
    softDeletes: '소프트 삭제: 삭제하는 대신 삭제됨으로 표시하는 것을 고려하세요',
    deleteConfirmation: '확인: 영구 삭제 전에 사용자에게 경고하세요',

    // Database visualization
    databaseState: '데이터베이스 상태',
    users: '사용자',
    userId: 'ID',
    userName: '이름',
    userEmail: '이메일',
  },
  en: {
    // Navigation
    home: 'Home',
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    chat: 'Chat',
    backToHome: 'Back to Home',
    language: 'Language',

    // Main Page
    mainTitle: 'Learn HTTP Methods',
    mainDescription: 'Master the core HTTP methods of REST APIs',
    learnMore: 'Learn More',
    viewDemo: 'View Demo',

    // HTTP Method Cards
    getTitle: 'GET',
    getDesc: 'Retrieve data from the server',
    postTitle: 'POST',
    postDesc: 'Create new data on the server',
    putTitle: 'PUT',
    putDesc: 'Update existing data on the server',
    deleteTitle: 'DELETE',
    deleteDesc: 'Delete data from the server',
    chatTitle: 'Real-time Chat',
    chatDesc: 'Real-time communication via WebSocket',

    // HTTP Method Modal
    httpMethodsExplain: 'What are HTTP Methods?',
    getExplain: 'GET safely retrieves resources from the server. It does not include a request body.',
    postExplain: 'POST creates a new resource on the server. It includes data in the request body.',
    putExplain: 'PUT completely replaces an existing resource. It updates the entire data.',
    deleteExplain: 'DELETE removes a resource from the server.',
    closeModal: 'Close',

    // Visualization
    request: 'Request',
    response: 'Response',
    step: 'Step',
    example: 'Example',
    status: 'Status',
    success: 'Success',
    error: 'Error',

    // Chat
    chatTitle: 'Real-time Chat',
    chatDescription: 'Real-time message transmission using WebSocket',
    enterMessage: 'Enter a message',
    send: 'Send',
    activeUsers: 'Active Users',
    connectionStatus: 'Connection Status',
    connected: 'Connected',
    disconnected: 'Disconnected',
    enterNickname: 'Enter your nickname',
    enter: 'Enter',
    resetChat: 'Reset Chat',

    // Method Page Headers
    whatIsMethod: 'What is this?',
    clientRequest: 'Client Request',
    serverProcessing: 'Server Processing',
    serverResponse: 'Server Response',
    requestFlow: 'Request Flow',
    previous: 'Previous',
    next: 'Next',

    // GET specific
    getClientRequest: 'The client sends a GET request to retrieve data from the server without a request body.',
    getServerProcessing: 'The server processes the GET request and retrieves the requested resource.',
    getServerResponse: 'The server returns the requested data in the response body with status 200 OK.',
    getDescription: 'The GET method is used to request data from a server. It is one of the most commonly used HTTP methods and is safe and idempotent.',
    getProperties: [
      '✓ Safe: GET requests do not modify server state',
      '✓ Idempotent: Multiple identical requests return the same result',
      '✓ Cacheable: GET responses can be cached',
      '✗ No Body: GET requests typically do not include a request body',
    ],
    queryParameters: 'Query Parameters',
    queryParametersDesc: 'GET requests can pass data through query parameters in the URL:',
    parametersNote: 'Parameters are separated by & and appended after ?',

    // POST specific
    postClientRequest: 'The client sends a POST request with data in the request body to create a new resource.',
    postServerProcessing: 'The server validates and processes the POST request, creating a new resource.',
    postServerResponse: 'The server returns the created resource with status 201 Created.',
    postDescription: 'The POST method is used to submit data to a server to create a new resource. It is not idempotent and should be used for non-safe operations.',
    postProperties: [
      '✗ Not Safe: POST requests modify server state',
      '✗ Not Idempotent: Multiple identical requests create multiple resources',
      '✓ Request Body: POST requests include data in the request body',
      '✓ 201 Created: Common response status for successful creation',
    ],
    requestBodyFormats: 'Request Body Formats',
    requestBodyFormatsDesc: 'POST requests can send data in various formats:',
    jsonFormat: 'JSON Format:',
    formDataFormat: 'Form Data:',

    // PUT specific
    putClientRequest: 'The client sends a PUT request to update the entire resource.',
    putServerProcessing: 'The server processes the PUT request and completely replaces the resource.',
    putServerResponse: 'The server returns the updated resource with status 200 OK.',
    putDescription: 'The PUT method is used to completely replace an existing resource. You must send all fields.',
    putProperties: [
      '✗ Not Safe: PUT requests modify server state',
      '✓ Idempotent: Multiple identical requests produce the same result',
      '✓ Request Body: PUT requests include the entire resource to update',
      '✓ 200 OK: Common response status for successful update',
    ],
    putVsPatch: 'PUT vs PATCH',
    putVsPatchDesc: 'It\'s important to understand the difference between PUT and PATCH:',
    putFullReplacement: 'PUT - Full Replacement',
    putFullReplacementDesc: 'Replaces the entire resource. You must send all fields.',
    patchPartialUpdate: 'PATCH - Partial Update',
    patchPartialUpdateDesc: 'Updates only the fields you specify. Omitted fields are unchanged.',

    // DELETE specific
    deleteClientRequest: 'The client sends a DELETE request to remove a resource.',
    deleteServerProcessing: 'The server processes the DELETE request and removes the resource.',
    deleteServerResponse: 'The server responds with status 204 No Content.',
    deleteDescription: 'The DELETE method is used to remove a resource from the server. It is idempotent and is a destructive operation.',
    deleteProperties: [
      '✗ Not Safe: DELETE requests modify server state',
      '✓ Idempotent: Multiple identical requests produce the same result',
      '✓ 204 No Content: Common response status for successful deletion',
      '⚠️ Dangerous: Caution required before permanent deletion',
    ],
    securityConsiderations: 'Security Considerations',
    securityConsiderationsDesc: 'DELETE requests should be handled carefully due to their destructive nature:',
    authenticationRequired: 'Authentication Required: Verify user identity before deletion',
    authorizationRequired: 'Authorization: Ensure user has permission to delete the resource',
    auditLogging: 'Audit Logging: Log all deletion requests for compliance',
    softDeletes: 'Soft Deletes: Consider marking as deleted instead of removing',
    deleteConfirmation: 'Confirmation: Warn users before permanent deletion',

    // Database visualization
    databaseState: 'Database State',
    users: 'Users',
    userId: 'ID',
    userName: 'Name',
    userEmail: 'Email',
  },
  ja: {
    // Navigation
    home: 'ホーム',
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    chat: 'チャット',
    backToHome: 'ホームに戻る',
    language: '言語',

    // Main Page
    mainTitle: 'HTTPメソッドを学ぶ',
    mainDescription: 'REST APIのコアHTTPメソッドをマスターしましょう',
    learnMore: '詳細を学ぶ',
    viewDemo: 'デモを表示',

    // HTTP Method Cards
    getTitle: 'GET',
    getDesc: 'サーバーからデータを取得します',
    postTitle: 'POST',
    postDesc: 'サーバーに新しいデータを作成します',
    putTitle: 'PUT',
    putDesc: 'サーバー上の既存データを更新します',
    deleteTitle: 'DELETE',
    deleteDesc: 'サーバーからデータを削除します',
    chatTitle: 'リアルタイムチャット',
    chatDesc: 'WebSocketを使用したリアルタイム通信',

    // HTTP Method Modal
    httpMethodsExplain: 'HTTPメソッドとは?',
    getExplain: 'GETはサーバーからリソースを安全に取得するメソッドです。リクエストボディは含まれません。',
    postExplain: 'POSTはサーバーに新しいリソースを作成するメソッドです。リクエストボディにデータを含みます。',
    putExplain: 'PUTは既存のリソースを完全に置き換えるメソッドです。全体のデータを更新します。',
    deleteExplain: 'DELETEはサーバーからリソースを削除するメソッドです。',
    closeModal: '閉じる',

    // Visualization
    request: 'リクエスト',
    response: 'レスポンス',
    step: 'ステップ',
    example: '例',
    status: 'ステータス',
    success: '成功',
    error: 'エラー',

    // Chat
    chatTitle: 'リアルタイムチャット',
    chatDescription: 'WebSocketを使用したリアルタイムメッセージ送信',
    enterMessage: 'メッセージを入力してください',
    send: '送信',
    activeUsers: 'アクティブユーザー',
    connectionStatus: '接続状態',
    connected: '接続済み',
    disconnected: '切断',
    enterNickname: 'ニックネームを入力してください',
    enter: '入場',
    resetChat: 'チャットをリセット',

    // Method Page Headers
    whatIsMethod: 'これは何ですか?',
    clientRequest: 'クライアントリクエスト',
    serverProcessing: 'サーバー処理',
    serverResponse: 'サーバーレスポンス',
    requestFlow: 'リクエストフロー',
    previous: '前へ',
    next: '次へ',

    // GET specific
    getClientRequest: 'クライアントがリクエストボディなしでサーバーからデータを取得するGETリクエストを送信します。',
    getServerProcessing: 'サーバーがGETリクエストを処理し、要求されたリソースを取得します。',
    getServerResponse: 'サーバーがステータス200 OKでレスポンスボディの要求されたデータを返します。',
    getDescription: 'GETメソッドはサーバーからデータをリクエストするために使用されます。最も一般的に使用されるHTTPメソッドの1つであり、安全で冪等です。',
    getProperties: [
      '✓ 安全: GETリクエストはサーバー状態を変更しません',
      '✓ 冪等: 複数の同一リクエストが同じ結果を返します',
      '✓ キャッシュ可能: GETレスポンスはキャッシュできます',
      '✗ ボディなし: GETリクエストは通常リクエストボディを含みません',
    ],
    queryParameters: 'クエリパラメーター',
    queryParametersDesc: 'GETリクエストはURLのクエリパラメーターを介してデータを渡すことができます:',
    parametersNote: 'パラメーターは&で区切られ、?の後に追加されます',

    // POST specific
    postClientRequest: 'クライアントがリクエストボディにデータを含むPOSTリクエストを送信して新しいリソースを作成します。',
    postServerProcessing: 'サーバーがPOSTリクエストを検証して処理し、新しいリソースを作成します。',
    postServerResponse: 'サーバーがステータス201 Createdで作成されたリソースを返します。',
    postDescription: 'POSTメソッドはサーバーにデータを送信して新しいリソースを作成するために使用されます。冪等ではなく、安全でない操作に使用する必要があります。',
    postProperties: [
      '✗ 安全ではない: POSTリクエストはサーバー状態を変更します',
      '✗ 冪等ではない: 複数の同一リクエストが複数のリソースを作成します',
      '✓ リクエストボディ: POSTリクエストはリクエストボディにデータを含みます',
      '✓ 201作成済み: 作成成功の一般的なレスポンスステータス',
    ],
    requestBodyFormats: 'リクエストボディ形式',
    requestBodyFormatsDesc: 'POSTリクエストはさまざまな形式でデータを送信できます:',
    jsonFormat: 'JSON形式:',
    formDataFormat: 'フォームデータ:',

    // PUT specific
    putClientRequest: 'クライアントがリソース全体を更新するPUTリクエストを送信します。',
    putServerProcessing: 'サーバーがPUTリクエストを処理し、リソース全体を置き換えます。',
    putServerResponse: 'サーバーがステータス200 OKで更新されたリソースを返します。',
    putDescription: 'PUTメソッドは既存のリソースを完全に置き換えるために使用されます。すべてのフィールドを送信する必要があります。',
    putProperties: [
      '✗ 安全ではない: PUTリクエストはサーバー状態を変更します',
      '✓ 冪等: 複数の同一リクエストが同じ結果を生成します',
      '✓ リクエストボディ: PUTリクエストは更新するリソース全体を含みます',
      '✓ 200 OK: 更新成功の一般的なレスポンスステータス',
    ],
    putVsPatch: 'PUT vs PATCH',
    putVsPatchDesc: 'PUTとPATCHの違いを理解することが重要です:',
    putFullReplacement: 'PUT - 完全置換',
    putFullReplacementDesc: 'リソース全体を置き換えます。すべてのフィールドを送信する必要があります。',
    patchPartialUpdate: 'PATCH - 部分更新',
    patchPartialUpdateDesc: '指定したフィールドのみを更新します。省略されたフィールドは変更されません。',

    // DELETE specific
    deleteClientRequest: 'クライアントがリソースを削除するDELETEリクエストを送信します。',
    deleteServerProcessing: 'サーバーがDELETEリクエストを処理し、リソースを削除します。',
    deleteServerResponse: 'サーバーがステータス204 No Contentで応答します。',
    deleteDescription: 'DELETEメソッドはサーバーからリソースを削除するために使用されます。冪等であり、破壊的な操作です。',
    deleteProperties: [
      '✗ 安全ではない: DELETEリクエストはサーバー状態を変更します',
      '✓ 冪等: 複数の同一リクエストが同じ結果を生成します',
      '✓ 204内容なし: 削除成功の一般的なレスポンスステータス',
      '⚠️ 危険: 永続的な削除前に注意が必要です',
    ],
    securityConsiderations: 'セキュリティに関する考慮事項',
    securityConsiderationsDesc: 'DELETEリクエストは破壊的な性質のため、慎重に処理する必要があります:',
    authenticationRequired: '認証が必須: 削除前にユーザー ID を確認してください',
    authorizationRequired: '認可: ユーザーがリソースを削除する権限があることを確認してください',
    auditLogging: '監査ログ: コンプライアンスのためにすべての削除リクエストを記録してください',
    softDeletes: 'ソフト削除: 削除する代わりに削除済みとしてマークすることを検討してください',
    deleteConfirmation: '確認: 永続的な削除前にユーザーに警告してください',

    // Database visualization
    databaseState: 'データベース状態',
    users: 'ユーザー',
    userId: 'ID',
    userName: '名前',
    userEmail: 'メール',
  },
};

export const getTranslation = (language: Language, key: keyof typeof translations.en): string => {
  return translations[language][key] || translations.en[key] || key;
};
