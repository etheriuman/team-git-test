
// 取得當前使用者資料  (這條是希望可以加的)
GET('api/get_current_user')

response.data: {
	id, // 當前使用者id
	name, // 當前使用者名稱
	account, // 當前使用者帳號
	avatar, // 當前使用者照片
	role // 當前使用者角色
}


// -------------------- User有關 -------------------- //


// sign up(2)
POST('api/users', payLoad)

payLoad: {
	account, // 使用者帳號
	name, // 使用者名稱
	email, // 使用者email
	password, // 使用者密碼
	passwordCheck // 使用者密碼確認
}


// sign in(3)
POST('api/signin', payLoad)

payLoad: {
	account, // 使用者帳號
	password // 使用者密碼
}

response.data: { // 成功狀態
  token, // 識別碼
  user: {
      id, // 使用者id
      name, // 使用者名稱
			account, // 使用者帳號
			email, // 使用者email
			avatar, // 使用者照片
			role // 使用者角色
}


// setting(4)
PUT(`api/users/${userId}`, fromData)

fromData: {
	account, // 使用者帳號
	name, // 使用者名稱
	email, // 使用者email
	password, // 使用者密碼
	passwordCheck // 使用者密碼確認
}


// 編輯使用者資料(4)
PUT(`api/users/${userId}`, formData) //因為有上傳圖片所以需用formData

formData: {
	cover, // 封面圖片
	avatar, // 使用者照片
	name, // 使用者名稱
	introduction // 使用者簡介
}


// 取得使用者資料(5)
GET(`api/users/${userId}`)

response.data: {
	user: {
		id, // 使用者id
		name, // 使用者名稱
		account, // 使用者帳號
		email, // 使用者email
		tweetsNumber, // 使用者推文數
		avatar, // 使用者照片
		cover, // 使用者封面照片
		introduction, // 使用者簡介
		followingsNumber, // 使用者追蹤數
		followersNumber, // 使用者跟隨數
		isFollowed, // 是否追蹤中
	}
}


// 取得使用者資料，tweets陣列為使用者自己發的推文串(6)
GET(`api/users/${userId}/tweets`)

response.data: {
	tweets: [
		{
			id, // 推文id
			description, // 推文內容
			likesNumber, // 推文like數
			repliesNumber, // 推文回覆數
			isLiked, // 是否按過like
			createdAt, // 推文發布時間
			User: { // 推主資料（這邊的資料其實是自己）
				id, // 推主連結用user.id
				name, // 推主名稱
				account, // 推主帳號
				avatar, // 推主照片
			}
		},
		{},{},{}...
	]
}


// 取得使用者資料，tweets陣列為使用者reply過的推文串(7)
GET(`api/users/${userId}/replied_tweets`)

response.data: {
	tweets: [
		{
			id, // 推文id
			description, // 推文內容
			likesNumber, // 推文like數
			repliesNumber, // 推文回覆數
			isLiked, // 是否按過like
			createdAt, // 推文發布時間
			User: { // 推主資料（這邊的資料其實是自己）
				id, // 推主連結用user.id
				name, // 推主名稱
				account, // 推主帳號
				avatar, // 推主照片
			}
		},
		{},{},{}...
	]
}


// 取得使用者資料與其追蹤者(8)
GET(`api/users/${userId}/followings`)

response.data: {
	user: {
		id, // 使用者id
		name, // 使用者名稱
		tweetsNumber, // 使用者推文數
		followings: [ // 使用者追蹤者串
			{
				id, // 追蹤者id
				name, // 追蹤者名稱
				account, // 追蹤者帳號
				avatar, // 追蹤者照片
				introduction, // 追蹤者簡介
				isFollowed // 是否已追蹤
			},
			{},{},{}...
		]
	}
}


// 取得使用者資料與其追隨者(9)
GET(`api/users/${userId}/followers`)

response.data: {
	user: {
		id, // 使用者id
		name, // 使用者名稱
		tweetsNumber, // 使用者推文數
		followers: [ // 使用者跟隨者串
			{
				id, // 跟隨者id
				name, // 跟隨者名稱
				account, // 跟隨者帳號
				avatar, // 跟隨者照片
				introduction, // 跟隨者簡介
				isFollowed // 是否已追蹤
			},
			{},{},{}...
		]
	}
}


// 取得使用者資料，tweets陣列為使用者like過的推文串(10)
GET(`api/users/${userId}/likes`)

response.data: {
	tweets: [
		{
			id, // 推文id
			description, // 推文內容
			likesNumber, // 推文like數
			repliesNumber, // 推文回覆數
			isLiked, // 是否按過like
			createdAt, // 推文發布時間
			User: { // 推主資料（這邊的資料其實是自己）
				id, // 推主連結用user.id
				name, // 推主名稱
				account, // 推主帳號
				avatar, // 推主照片
			}
		},
		{},{},{}...
	]
}


// 取得前10名熱門使用者名單(11)
GET('api/topuser')

response.data: {
	users: [
		{
			id, // 使用者id
			name, // 使用者名稱
			avatar, // 使用者照片
			account, // 使用者帳號
			isFollowed // 是否追蹤中
		},
		{},{},{}...
	]
}


// -------------------- Follow(追蹤)有關 -------------------- //


// 追蹤使用者(12)
POST(`api/followships/${userId}`, null)


// 退追使用者(13)
DELETE(`api/followships/${userId}`)


// ------------------- Tweet(推文)有關 -------------------- //


// 取得主推文串(14)
GET('api/tweets')
	
response.data: {
  tweets: [
		{
			id, // 推文id
			description, // 推文內容
			likesNumber, // 推文like數
			repliesNumber, // 推文回復數
			createdAt, // 推文發布時間
			isLiked, // 是否按過like
			User: { 
				id, // 連結用user.id
				name, // 推主名稱
				account, // 推主帳號
				avatar // 推主照片
			}
		},
		{},{},{}...
	]
}


// 取得單一推文資料(15)
GET(`api/tweets/${tweetId}`)

response.data: {
	tweet: {
	id, // 推文id
	description, // 推文內容
	likesNumber, // 推文like數
	repliesNumber, // 推文回覆數
	createdAt, // 推文發布時間
	isLiked, // 是否按過like
	User: { // 推主資料
		id, // 連結用user.id
		name, // 推主名稱
		account, // 推主帳號
		avatar, // 推主照片
	},
	Replies: [ //推文回覆串
		{
			id, // 回覆id
			comment, // 回覆內容
			createdAt, // 回覆發布時間
			User: { // 回覆者資料
				id, // 連結用user.id
				name, // 回覆者名稱
				account, // 回覆者帳號
				avatar // 回覆者照片
			}
		},
		{},{},{}...
	]
}


// 取得該推文回覆數(16)
GET(`api/sweets/${tweetId}/replies`)

response.data: {
	repliesNumber // 推文回覆數
}


//取得該推文按讚數(17)
GET(`api/sweets/${tweetId}/likes`)

response.data: {
	likesNumber // 推文回覆數
}


// 新增推文(18)
POST('api/tweets', payLoad)
	
payLoad: {
  userId, // 當前使用者id
  description // 推文內容
}


// 編輯推文內容(19)
PUT(`api/tweets/${tweetId}`, payLoad)

payLoad: {
	description // 推文內容
}


// -------------------- Replies(回覆)有關 -------------------- //


// 新增回覆(20)
POST(`api/tweets/${tweetId}/replies`, payLoad)

payLoad: {
	userId, // 當前使用者id
	comment // 回覆內容
}


// 修改回覆內容(21)
PUT(`api/replies/${replyId}`, payLoad)

payLoad: {
	comment // 回覆內容
}


// 刪除回覆(22)
DELETE(`api/replies/${replyId}`)


// -------------------- Like(按讚)有關 -------------------- //


// 推文按讚(23)
POST(`api/like/${tweetId}`, null)


// 推文收回讚(24)
POST(`api/tweets/${tweetId}/unlike`)


// -------------------- Admin有關 -------------------- //


// 後台登入(25)
POST('api/admin/signin', payLoad)

payLoad: {
	account, // 使用者帳號
	password // 使用者密碼
}

response.data: {
  token, // 憑證
  user: {
      id, // 使用者id
      name, // 使用者名稱
			account, // 使用者帳號
			email, // 使用者email
			avatar, // 使用者照片
			role // 使用者角色
}


// 管理者取得所有推文(26)
GET('api/admin/tweets')

response.data: {
  tweets: [
		{
			id, // 推文id
			description, // 推文內容(限制50字)
			createdAt, // 推文發布時間
			User: { 
				name, // 推主名稱
				id, // 連結用user.id
				account, // 推主帳號
				avatar // 推主照片
			}
		},
		{},{},{}...
	]
}


// 刪除推文(27)
DELETE(`api/admin/tweets/${tweetId}`)


// 管理者取得所有使用者(28)
GET('api/admin/users')

response.data: {
	users: [
		{
			name, // 使用者名稱
			id, // 使用者id
			account, // 使用者帳號
			avatar, // 使用者照片
			cover, // 使用者封面照片
			tweetsNumber, // 使用者被回覆數
			gotLikesNumber, // 使用者被like數
			followingsNumber, // 使用者追蹤數
			followersNumber // 使用者跟隨數
		},
		{},{},{}...
	]
}