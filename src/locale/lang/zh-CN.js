export default {
  // 导航栏
  nav: {
    home: "首页",
    discover: "发现",
    discoverChildren: {
      playlists: "歌单",
      toplists: "排行榜",
      artists: "歌手",
    },
    user: "音乐库",
    userChildren: {
      login: "登录账号",
      playlist: "我的歌单",
      like: "收藏的歌单",
      album: "收藏的专辑",
      artist: "收藏的歌手",
      cloud: "音乐云盘",
      results: "的音乐库",
    },
    avatar: {
      dark: "深色模式",
      light: "浅色模式",
      login: "登录账号",
      logout: "退出登录",
      notLogin: "未登录",
      notLoginSubtitle: "登录后享受完整功能",
      loginError: "等级信息获取失败",
      history: "播放历史",
      setting: "全局设置",
      about: "关于本站",
      tip: "确认退出当前用户登录？",
      success: "成功退出登录",
    },
    search: {
      placeholder: "搜索音乐/视频",
      history: "搜索历史",
      delHistory: "删除搜索历史",
      hotList: "热搜榜",
      searchTip: "努力搜索中",
      noSuggestions: "暂无搜索结果",
      songs: "单曲",
      artists: "歌手",
      albums: "专辑",
      playlists: "歌单",
      tip: "确认删除全部的搜索历史记录？",
      results: "的搜索结果",
    },
    officialList: "官方榜",
    globalList: "全球榜",
  },
  // 首页
  home: {
    title: {
      exclusive: "专属推荐",
      playlists: "推荐歌单",
      artists: "歌手推荐",
      newAlbum: "新碟上架",
      more: "更多",
    },
    modules: {
      dailySongs: {
        title: "每日推荐",
        subtitle: "根据你的音乐口味 · 每日 6:00 更新",
      },
      radar: {
        title: "私人雷达",
        subtitle: "根据听歌记录为你打造",
      },
      likeSong: {
        title: "喜欢的音乐",
        subtitle: "发现你独特的音乐品味",
      },
      papersonalfm: {
        title: "私人FM",
        subtitle: "未登录模式",
      },
    },
  },
  // Login
  login: {
    login: "登录 {name}",
    qr: "扫码登录",
    phone: "验证码登录",
    email: "邮箱登录",
    canNotUse: "该登录方式暂时无法使用",
    loggedIn: "已登录，请勿重复登录",
    qrText1: "请打开云音乐 APP 扫码登录",
    qrText2: "当前二维码已失效，请重新扫码",
    qrText3: "扫描成功，请在客户端确认登录",
    qrText4: "登录成功",
    qrText5: "登录出错，请重试",
    qrText6: "登录二维码生成失败",
  },
  // 菜单
  menu: {
    play: "立即播放",
    nextPlay: "下一首播放",
    add: "添加到歌单",
    create: "新建歌单",
    download: "歌曲下载",
    comment: "前往评论区",
    mv: "观看 MV",
    delete: "从云盘中删除",
    deleteQuestion: "确认从云盘中删除歌曲 {name} ？删除后将不可恢复！",
    match: "歌曲信息匹配",
    search: "同名搜索",
    copy: "复制{name}{other}",
    update: "编辑歌单",
    del: "删除歌单",
    delQuestion: "确认删除歌单 {name} ？删除后将不可恢复！",
    unableToDelete: "默认歌单无法删除",
    collection: "收藏{name}",
    cancelCollection: "取消收藏{name}",
  },
  // 通用
  general: {
    type: {
      hot: "热门",
      all: "全部",
      china: "华语",
      chinaMale: "华语男",
      chinaFemale: "华语女",
      chinaGroup: "华语组合",
      western: "欧美",
      westernMale: "欧美男",
      westernFemale: "欧美女",
      westernGroup: "欧美组合",
      japan: "日本",
      japanMale: "日本男",
      japanFemale: "日本女",
      japanGroup: "日本组合",
      korea: "韩国",
      koreaMale: "韩国男",
      koreaFemale: "韩国女",
      koreaGroup: "韩国组合",
      other: "其他",
      quality: {
        l: "标准音质",
        m: "较高音质",
        h: "极高音质",
        sq: "无损音质",
      },
    },
    name: {
      song: "歌曲",
      hotSong: "热门歌曲",
      playlist: "歌单",
      videos: "视频",
      playlists: "播放列表",
      toplists: "排行榜",
      artists: "歌手",
      album: "专辑",
      link: "链接",
      cloud: "云盘",
      songSize: "{size} 首",
      albumSize: "{size} 张专辑",
      mvSize: "{size} 个 MV",
      unknownSong: "未知歌曲",
      unknownArtist: "未知歌手",
      itemCount: "共{size}项",
      goto: "前往",
      pageSizes: "{num}条/页",
      desc: "{name}简介",
      allDesc: "全部简介",
      allSong: "全部歌曲",
      allPLaylist: "全部歌单",
      artistDesc: "歌手介绍",
      play: "播放",
      add: "添加",
      comment: "评论",
      noKeywords: "参数不完整",
      goBack: "返回上一级",
      reload: "重新载入",
      allComments: "全部评论",
      hotComments: "热门评论",
      toCurrentlySong: "前往当前播放歌曲",
      loadMore: "加载更多",
      playlistType: "歌单分类",
      bestPlaylist: "精品歌单",
      upCloud: "云盘上传",
      cloudUsed: "已用 {used}%，剩余 {remaining} G",
      simiVideo: "相似视频",
      restore: "恢复默认",
      random: "随机播放",
      single: "单曲循环",
      normal: "列表循环",
      mute: "静音",
      unmute: "取消静音",
      customTheme: "自定义主题",
      primaryColor: "主色",
    },
    dialog: {
      check: "检查",
      cancel: "取消",
      success: "成功",
      failed: "失败",
      delete: "确认删除",
      match: "匹配歌曲",
      create: "新建",
      download: "下载",
      downloadingNow: "正在下载",
      editor: "编辑",
      resetUp: "重新上传",
    },
    message: {
      copySuccess: "复制成功",
      copyFailure: "复制失败",
      addSuccess: "添加歌曲至歌单成功",
      addFailure: "添加失败，请重试",
      createSuccess: "歌单新建成功",
      createFailed: "歌单新建失败，请重试",
      deleteSuccess: "删除成功",
      deleteFailure: "删除失败",
      downloadSuccess: "{name} 下载完成",
      downloadFailure: "下载失败，请尝试其他音质",
      downloadError: "下载出现错误，请重试",
      upCloudSuccess: "{name} 上传成功",
      upCloudFailure: "歌曲上传出现错误",
      upCloudError: "歌曲上传出错，请重试",
      upCloudNotHas: "上传歌曲详细信息获取失败，可尝试歌曲匹配",
      editorSuccess: "编辑成功",
      editorFailed: "编辑失败，请重试",
      operationFailed: "操作失败，请重试",
      acquisitionFailed: "获取失败",
      notSupported: "您的浏览器暂不支持该操作",
      jumpOut: "即将跳转至站外链接",
      needLogin: "请登录账号后使用",
      needVip: "该操作需要账号为黑胶会员",
      needCheck: "请检查您的输入",
      isLoading: "数据加载中",
      vipTip: "当前歌曲为 VIP 专享，仅可试听",
      playError: "当前歌曲播放失败，跳至下一首",
      signInSuccess: "签到成功",
      signInSuccessDesc: "每日签到及云贝签到成功",
      signInFailed: "签到失败",
    },
  },
  // State
  state: {
    prohibition: "禁止访问",
    prohibitionDesc: "总有些门是对你关闭的",
    notFound: "资源不存在",
    notFoundDesc: "怎么跑到这来了？",
    error: "服务器错误",
    errorDesc: "服务器寄了，等会再试吧",
  },
  // Other
  other: {
    sData: "原歌曲信息",
    asId: "匹配的 ID",
    asIdDes: "请输入要匹配的歌曲 ID",
    noNeedMatch: "与原歌曲 ID 一致，无需匹配",
    plaseCheck: "请先点击检查",
    matchSuccess: "歌曲匹配成功",
    matchFailed: "歌曲匹配失败，请重试",
    matchError: "非正常歌曲 ID，无法匹配",
    newPlaylistName: "请输入新歌单标题",
    setPrivacy: "设置为隐私歌单",
    cloudTip: "当前为云盘歌曲，下载的文件均为最高音质",
    playlistEmpty: "暂无歌曲，请前往列表添加",
    plName: "歌单名称",
    plNameTip: "请输入歌单名称",
    plDes: "歌单描述",
    plDesTip: "请输入歌单描述",
    plTag: "歌单标签",
    plTagTip: "请输入歌单标签",
    lrcClicks: "点击选中的歌词以调整播放进度",
    noSong: "暂无歌曲",
    noHistory: "暂无播放历史",
    justShow: "仅显示最近 {num} 首",
    noDesc: "太懒了吧，连简介都不写",
    containing: "包含这首歌的歌单",
    loginExpired: "登录已失效，请重新登录",
    cleanAll: "重置成功",
  },
  setting: {
    dev: "开发中功能",
    main: "基础",
    player: "播放器",
    themeChange: "主题色更换为 {name}",
    themeType: "主题色选择",
    themeTypeTip: "更换全站主题色，即时生效",
    themeTypeDialog: "确认恢复全站主题色为默认？",
    language: "语言",
    changeLanguage: "语言已切换为 {name}",
    theme: "明暗模式",
    themeAuto: "明暗模式跟随系统",
    autoSignIn: "每日签到",
    autoSignInTip: "是否自动进行每日签到",
    bannerShow: "显示轮播图",
    listClickMode: "列表点击方式",
    listClickModeTip: "移动端该设置项无效，单击同时生效",
    dblclick: "双击播放",
    click: "单击播放",
    searchHistory: "显示搜索历史",
    bottomLyricShow: "显示底栏歌词",
    bottomLyricShowTip: "是否在播放时显示歌词",
    songVolumeFade: "歌曲渐入渐出",
    songVolumeFadeTip: "是否在歌曲暂停 / 播放时渐入渐出",
    memoryLastPlaybackPosition: "记忆播放位置",
    memoryLastPlaybackPositionTip: "是否在刷新后恢复上次播放进度",
    songLevel: "歌曲音质",
    songLevelTip: "无损音质及以上需要您为黑胶会员",
    standard: "标准",
    higher: "较高",
    exhigh: "极高",
    lossless: "无损",
    hires: "Hi-Res",
    jyeffect: "鲸云臻音",
    jymaster: "鲸云母带",
    useUnmServerShow: "尝试替换无法播放的歌曲",
    useUnmServerShowTip1: "是否使用 UNM 替换无法播放的歌曲链接",
    useUnmServerShowTip2: "请配置 UNM-Server 后使用解灰功能",
    showLyricSetting: "播放页快捷设置",
    showLyricSettingTip: "是否在播放页面显示快捷设置",
    resetApp: "程序重置",
    resetAppTip: "若程序显示异常或出现问题时可尝试此操作",
    resetAppWarning: "确认重置为默认状态？你的登录状态以及自定义设置都将丢失！",
    playerStyle: "播放器样式",
    playerStyleTip: "播放器左侧功能区样式",
    cover: "封面模式",
    record: "唱片模式",
    backgroundImageShow: "播放背景样式",
    solid: "封面主色",
    blur: "封面模糊",
    backgroundImageShowTip1: "将专辑封面模糊显示",
    backgroundImageShowTip2: "提取专辑主色作为背景颜色",
    showTransl: "显示歌词翻译",
    showTranslTip: "是否在具有翻译歌词时显示",
    showRoma: "显示歌词音译",
    showRomaTip: "是否在具有音译歌词时显示",
    countDownShow: "显示前奏等待",
    countDownShowTip: "部分歌曲前奏可能存在显示错误",
    showYrc: "显示逐字歌词",
    showYrcTip: "是否在歌曲具有逐字歌词时显示",
    showYrcAnimation: "逐字歌词步进动画",
    showYrcAnimationTip: "是否显示逐字歌词步进动画，较耗费性能",
    showYrcTransform: "逐字歌词上浮",
    showYrcTransformTip: "是否显示逐字歌词文字上浮动画",
    lrcMousePause: "智能暂停滚动",
    lrcMousePauseTip: "鼠标移入歌词区域是否暂停滚动",
    lyricsBlock: "歌词滚动位置",
    lyricsBlockTip: "歌词高亮时所处的位置",
    blockStart: "靠近顶部",
    blockCenter: "水平居中",
    lyricsFontSize: "歌词文本大小",
    lyrics1: "最小",
    lyrics2: "默认",
    lyrics3: "最大",
    lyricsPosition: "默认歌词位置",
    positionLeft: "居左",
    positionCenter: "居中",
    lyricsBlur: "歌词模糊",
    lyricsBlurTip: "除当前播放歌词外模糊显示，实验性功能",
    bottomClick: "点击底栏展开播放器",
    bottomClickTip: "可能会造成误触，请谨慎开启",
  },
};
