// Android权限列表数据
export const permissions = [
    // 网络相关权限
    {
        name: "android.permission.INTERNET",
        description: "允许应用程序联网，可能产生GPRS流量",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.ACCESS_NETWORK_STATE",
        description: "允许应用程序访问网络状态信息",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.ACCESS_WIFI_STATE",
        description: "允许应用程序访问WiFi网络状态信息",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.CHANGE_WIFI_STATE",
        description: "允许应用程序改变WiFi连接状态",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.CHANGE_NETWORK_STATE",
        description: "允许应用程序改变网络连接状态",
        protectionLevel: "normal",
        selected: false
    },

    // 存储相关权限
    {
        name: "android.permission.READ_EXTERNAL_STORAGE",
        description: "允许应用程序读取外部存储设备",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.WRITE_EXTERNAL_STORAGE",
        description: "允许应用程序写入外部存储设备",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.MANAGE_EXTERNAL_STORAGE",
        description: "允许应用程序管理所有外部存储",
        protectionLevel: "signature",
        selected: false
    },

    // 位置相关权限
    {
        name: "android.permission.ACCESS_FINE_LOCATION",
        description: "允许应用程序访问精确位置信息",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.ACCESS_COARSE_LOCATION",
        description: "允许应用程序访问大概位置信息",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.ACCESS_BACKGROUND_LOCATION",
        description: "允许应用程序在后台访问位置信息",
        protectionLevel: "dangerous",
        selected: false
    },

    // 相机和多媒体
    {
        name: "android.permission.CAMERA",
        description: "允许应用程序访问相机设备",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.RECORD_AUDIO",
        description: "允许应用程序录制音频",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.MODIFY_AUDIO_SETTINGS",
        description: "允许应用程序修改音频设置",
        protectionLevel: "normal",
        selected: false
    },

    // 电话相关权限
    {
        name: "android.permission.READ_PHONE_STATE",
        description: "允许应用程序读取手机状态和身份",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.CALL_PHONE",
        description: "允许应用程序直接拨打电话",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.READ_CALL_LOG",
        description: "允许应用程序读取通话记录",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.WRITE_CALL_LOG",
        description: "允许应用程序写入通话记录",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.ADD_VOICEMAIL",
        description: "允许应用程序添加语音邮件",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.USE_SIP",
        description: "允许应用程序使用SIP视频服务",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.PROCESS_OUTGOING_CALLS",
        description: "允许应用程序处理拨出电话",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.ANSWER_PHONE_CALLS",
        description: "允许应用程序接听来电",
        protectionLevel: "dangerous",
        selected: false
    },

    // 联系人相关权限
    {
        name: "android.permission.READ_CONTACTS",
        description: "允许应用程序读取用户联系人数据",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.WRITE_CONTACTS",
        description: "允许应用程序写入用户联系人数据",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.GET_ACCOUNTS",
        description: "允许应用程序访问账户列表",
        protectionLevel: "dangerous",
        selected: false
    },

    // 日历相关权限
    {
        name: "android.permission.READ_CALENDAR",
        description: "允许应用程序读取用户日历数据",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.WRITE_CALENDAR",
        description: "允许应用程序写入用户日历数据",
        protectionLevel: "dangerous",
        selected: false
    },

    // 短信相关权限
    {
        name: "android.permission.SEND_SMS",
        description: "允许应用程序发送短信",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.RECEIVE_SMS",
        description: "允许应用程序接收短信",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.READ_SMS",
        description: "允许应用程序读取短信内容",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.RECEIVE_WAP_PUSH",
        description: "允许应用程序接收WAP PUSH信息",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.RECEIVE_MMS",
        description: "允许应用程序接收彩信",
        protectionLevel: "dangerous",
        selected: false
    },

    // 传感器相关权限
    {
        name: "android.permission.BODY_SENSORS",
        description: "允许应用程序访问身体传感器数据",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.ACTIVITY_RECOGNITION",
        description: "允许应用程序识别用户的身体活动",
        protectionLevel: "dangerous",
        selected: false
    },

    // 蓝牙相关权限
    {
        name: "android.permission.BLUETOOTH",
        description: "允许应用程序连接到已配对的蓝牙设备",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.BLUETOOTH_ADMIN",
        description: "允许应用程序发现和配对蓝牙设备",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.BLUETOOTH_CONNECT",
        description: "允许应用程序连接到已配对的蓝牙设备",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.BLUETOOTH_SCAN",
        description: "允许应用程序扫描附近的蓝牙设备",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.BLUETOOTH_ADVERTISE",
        description: "允许应用程序向附近的蓝牙设备广播",
        protectionLevel: "dangerous",
        selected: false
    },

    // 系统相关权限
    {
        name: "android.permission.FOREGROUND_SERVICE",
        description: "允许应用程序使用前台服务",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.WAKE_LOCK",
        description: "允许应用程序防止设备进入休眠状态",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.VIBRATE",
        description: "允许应用程序控制振动器",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.RECEIVE_BOOT_COMPLETED",
        description: "允许应用程序在系统启动时自动启动",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
        description: "允许应用程序请求忽略电池优化",
        protectionLevel: "normal",
        selected: false
    },

    // 特权权限
    {
        name: "android.permission.SYSTEM_ALERT_WINDOW",
        description: "允许应用程序在其他应用程序上显示窗口",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.WRITE_SETTINGS",
        description: "允许应用程序修改系统设置",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.REQUEST_INSTALL_PACKAGES",
        description: "允许应用程序安装其他应用程序",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.PACKAGE_USAGE_STATS",
        description: "允许应用程序收集组件使用统计",
        protectionLevel: "signature",
        selected: false
    },

    // 存储访问框架权限
    {
        name: "android.permission.MANAGE_DOCUMENTS",
        description: "允许应用程序管理文档存储",
        protectionLevel: "signature",
        selected: false
    },

    // 硬件相关权限
    {
        name: "android.permission.USE_FINGERPRINT",
        description: "允许应用程序使用指纹硬件",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.USE_BIOMETRIC",
        description: "允许应用程序使用生物识别功能",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.NFC",
        description: "允许应用程序使用NFC功能",
        protectionLevel: "normal",
        selected: false
    },

    // 通知相关权限
    {
        name: "android.permission.POST_NOTIFICATIONS",
        description: "允许应用程序发送通知",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.ACCESS_NOTIFICATION_POLICY",
        description: "允许应用程序访问通知策略",
        protectionLevel: "normal",
        selected: false
    },

    // 应用安装相关
    {
        name: "android.permission.INSTALL_PACKAGES",
        description: "允许应用程序安装其他应用",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.DELETE_PACKAGES",
        description: "允许应用程序删除其他应用",
        protectionLevel: "signature",
        selected: false
    },

    // 系统工具权限
    {
        name: "android.permission.DUMP",
        description: "允许应用程序获取系统内部状态",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.READ_LOGS",
        description: "允许应用程序读取系统日志",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BATTERY_STATS",
        description: "允许应用程序读取电池统计信息",
        protectionLevel: "signature",
        selected: false
    },

    // 开发调试权限
    {
        name: "android.permission.SET_DEBUG_APP",
        description: "允许应用程序启用调试功能",
        protectionLevel: "development",
        selected: false
    },
    {
        name: "android.permission.WRITE_SECURE_SETTINGS",
        description: "允许应用程序修改安全系统设置",
        protectionLevel: "development",
        selected: false
    },

    // 设备管理权限
    {
        name: "android.permission.BIND_DEVICE_ADMIN",
        description: "允许应用程序作为设备管理器",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MANAGE_DEVICE_ADMINS",
        description: "允许应用程序管理设备管理员",
        protectionLevel: "signature",
        selected: false
    },

    // 账户管理权限
    {
        name: "android.permission.AUTHENTICATE_ACCOUNTS",
        description: "允许应用程序验证账户",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.MANAGE_ACCOUNTS",
        description: "允许应用程序管理账户列表",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.USE_CREDENTIALS",
        description: "允许应用程序使用账户凭证",
        protectionLevel: "dangerous",
        selected: false
    },

    // 输入法相关权限
    {
        name: "android.permission.BIND_INPUT_METHOD",
        description: "允许应用程序绑定输入法服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.WRITE_INPUT_METHOD",
        description: "允许应用程序修改输入法设置",
        protectionLevel: "signature",
        selected: false
    },

    // 辅助功能权限
    {
        name: "android.permission.BIND_ACCESSIBILITY_SERVICE",
        description: "允许应用程序绑定辅助功能服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_AUTOFILL_SERVICE",
        description: "允许应用程序绑定自动填充服务",
        protectionLevel: "signature",
        selected: false
    },

    // VPN相关权限
    {
        name: "android.permission.BIND_VPN_SERVICE",
        description: "允许应用程序绑定VPN服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.CONTROL_VPN",
        description: "允许应用程序控制VPN服务",
        protectionLevel: "signature",
        selected: false
    },

    // 壁纸相关权限
    {
        name: "android.permission.SET_WALLPAPER",
        description: "允许应用程序设置壁纸",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.SET_WALLPAPER_HINTS",
        description: "允许应用程序设置壁纸提示",
        protectionLevel: "normal",
        selected: false
    },

    // 任务管理权限
    {
        name: "android.permission.KILL_BACKGROUND_PROCESSES",
        description: "允许应用程序结束后台进程",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.FORCE_STOP_PACKAGES",
        description: "允许应用程序强制停止其他应用",
        protectionLevel: "signature",
        selected: false
    },

    // 系统UI权限
    {
        name: "android.permission.EXPAND_STATUS_BAR",
        description: "允许应用程序展开/收起状态栏",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.STATUS_BAR",
        description: "允许应用程序打开、关闭或禁用状态栏",
        protectionLevel: "signature",
        selected: false
    },

    // 屏幕相关权限
    {
        name: "android.permission.WRITE_DISPLAY_SETTINGS",
        description: "允许应用程序修改显示设置",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BRIGHTNESS_SLIDER_USAGE",
        description: "允许应用程序使用亮度滑块",
        protectionLevel: "signature",
        selected: false
    },

    // 硬件控制权限
    {
        name: "android.permission.CONTROL_LOCATION_UPDATES",
        description: "允许应用程序控制位置更新通知",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.HDMI_CEC",
        description: "允许应用程序使用HDMI CEC功能",
        protectionLevel: "signature",
        selected: false
    },

    // 网络相关高级权限
    {
        name: "android.permission.CONNECTIVITY_INTERNAL",
        description: "允许应用程序访问网络连接内部状态",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.CONNECTIVITY_USE_RESTRICTED_NETWORKS",
        description: "允许应用程序使用受限网络",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.NETWORK_SETTINGS",
        description: "允许应用程序修改网络设置",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.NETWORK_STACK",
        description: "允许应用程序运行网络协议栈",
        protectionLevel: "signature",
        selected: false
    },

    // 安全相关权限
    {
        name: "android.permission.BIND_TRUST_AGENT",
        description: "允许应用程序绑定信任代理服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.TRUST_LISTENER",
        description: "允许应用程序监听信任代理状态",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MANAGE_USERS",
        description: "允许应用程序管理用户",
        protectionLevel: "signature",
        selected: false
    },

    // 应用商店权限
    {
        name: "android.permission.INSTALL_PACKAGES",
        description: "允许应用程序安装应用程序包",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.DELETE_PACKAGES",
        description: "允许应用程序删除应用程序包",
        protectionLevel: "signature",
        selected: false
    },

    // 系统工具权限
    {
        name: "android.permission.RECOVERY",
        description: "允许应用程序与恢复系统交互",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.REBOOT",
        description: "允许应用程序重启设备",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MASTER_CLEAR",
        description: "允许应用程序恢复出厂设置",
        protectionLevel: "signature",
        selected: false
    },

    // 开发者选项权限
    {
        name: "android.permission.SET_ALWAYS_FINISH",
        description: "允许应用程序控制活动是否立即完成",
        protectionLevel: "development",
        selected: false
    },
    {
        name: "android.permission.SIGNAL_PERSISTENT_PROCESSES",
        description: "允许应用程序请求发送信号到所有持久进程",
        protectionLevel: "development",
        selected: false
    },

    // 企业管理权限
    {
        name: "android.permission.MANAGE_PROFILE_AND_DEVICE_OWNERS",
        description: "允许应用程序管理配置文件和设备所有者",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MODIFY_PHONE_STATE",
        description: "允许应用程序修改手机状态",
        protectionLevel: "signature",
        selected: false
    },

    // 媒体相关权限
    {
        name: "android.permission.ACCESS_MEDIA_LOCATION",
        description: "允许访问媒体文件中的位置信息",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.MEDIA_CONTENT_CONTROL",
        description: "允许应用程序控制媒体播放和访问媒体信息",
        protectionLevel: "signature",
        selected: false
    },

    // 存储访问权限
    {
        name: "android.permission.ACCESS_ALL_EXTERNAL_STORAGE",
        description: "允许访问所有外部存储设备",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MANAGE_EXTERNAL_STORAGE",
        description: "允许管理所有外部存储",
        protectionLevel: "signature",
        selected: false
    },

    // 系统设置权限
    {
        name: "android.permission.WRITE_SYNC_SETTINGS",
        description: "允许应用程序修改同步设置",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.READ_SYNC_SETTINGS",
        description: "允许应用程序读取同步设置",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.READ_SYNC_STATS",
        description: "允许应用程序读取同步统计信息",
        protectionLevel: "normal",
        selected: false
    },

    // 应用管理权限
    {
        name: "android.permission.REQUEST_DELETE_PACKAGES",
        description: "允许应用程序请求删除其他应用包",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.QUERY_ALL_PACKAGES",
        description: "允许查询设备上的所有应用包",
        protectionLevel: "normal",
        selected: false
    },

    // 快捷方式权限
    {
        name: "android.permission.INSTALL_SHORTCUT",
        description: "允许应用程序安装快捷方式",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.UNINSTALL_SHORTCUT",
        description: "允许应用程序卸载快捷方式",
        protectionLevel: "normal",
        selected: false
    },

    // 系统时间权限
    {
        name: "android.permission.SET_TIME",
        description: "允许应用程序设置系统时间",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.SET_TIME_ZONE",
        description: "允许应用程序设置系统时区",
        protectionLevel: "signature",
        selected: false
    },

    // 电源管理权限
    {
        name: "android.permission.DEVICE_POWER",
        description: "允许访问底层电源管理",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.POWER_SAVER",
        description: "允许应用程序控制省电模式",
        protectionLevel: "signature",
        selected: false
    },

    // 包管理权限
    {
        name: "android.permission.GET_PACKAGE_SIZE",
        description: "允许应用程序获取任何应用的大小",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.SET_PREFERRED_APPLICATIONS",
        description: "允许应用程序修改首选应用",
        protectionLevel: "signature",
        selected: false
    },

    // 系统工具权限
    {
        name: "android.permission.GET_TASKS",
        description: "允许应用程序获取当前或最近运行的应用",
        protectionLevel: "dangerous",
        selected: false
    },
    {
        name: "android.permission.REORDER_TASKS",
        description: "允许应用程序重新排序系统任务",
        protectionLevel: "normal",
        selected: false
    },

    // 硬件测试权限
    {
        name: "android.permission.HARDWARE_TEST",
        description: "允许访问硬件外设进行测试",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.DIAGNOSTIC",
        description: "允许应用程序进行诊断",
        protectionLevel: "signature",
        selected: false
    },

    // 系统广播权限
    {
        name: "android.permission.BROADCAST_PACKAGE_REMOVED",
        description: "允许应用程序广播应��包已被删除的通知",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BROADCAST_SMS",
        description: "允许应用程序广播收到短信的通知",
        protectionLevel: "signature",
        selected: false
    },

    // 系统UI权限
    {
        name: "android.permission.INTERNAL_SYSTEM_WINDOW",
        description: "允许创建内部系统窗口",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MANAGE_APP_TOKENS",
        description: "允许管理应用程序令牌",
        protectionLevel: "signature",
        selected: false
    },

    // 传感器权限
    {
        name: "android.permission.HIGH_SAMPLING_RATE_SENSORS",
        description: "允许应用程序以高采样率使用传感器",
        protectionLevel: "normal",
        selected: false
    },
    {
        name: "android.permission.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION",
        description: "允许动态注册非导出的广播接收器",
        protectionLevel: "signature",
        selected: false
    },

    // 通知相关权限
    {
        name: "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE",
        description: "允许应用程序绑定通知��听服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_CONDITION_PROVIDER_SERVICE",
        description: "允许应用程序绑定条件提供者服务",
        protectionLevel: "signature",
        selected: false
    },

    // 打印服务权限
    {
        name: "android.permission.BIND_PRINT_SERVICE",
        description: "允许应用程序绑定打印服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_PRINT_SPOOLER_SERVICE",
        description: "允许应用程序绑定打印后台程序服务",
        protectionLevel: "signature",
        selected: false
    },

    // 无障碍服务权限
    {
        name: "android.permission.BIND_ACCESSIBILITY_SERVICE",
        description: "允许应用程序绑定无障碍服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_DREAM_SERVICE",
        description: "允许应用程序绑定梦境服务",
        protectionLevel: "signature",
        selected: false
    },

    // 语音识别权限
    {
        name: "android.permission.BIND_VOICE_INTERACTION",
        description: "允许应用程序绑定语音交互服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_RECOGNITION_SERVICE",
        description: "允许应用程序绑定识别服务",
        protectionLevel: "signature",
        selected: false
    },

    // 壁纸服务权限
    {
        name: "android.permission.BIND_WALLPAPER",
        description: "允许应用程序绑定壁纸服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_QUICK_SETTINGS_TILE",
        description: "允许应用程序绑定快速设置磁贴",
        protectionLevel: "signature",
        selected: false
    },

    // 文件系统权限
    {
        name: "android.permission.MOUNT_UNMOUNT_FILESYSTEMS",
        description: "允许挂载和卸载文件系统",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MOUNT_FORMAT_FILESYSTEMS",
        description: "允许格式化可移动存储设备",
        protectionLevel: "signature",
        selected: false
    },

    // 系统设置权限
    {
        name: "android.permission.WRITE_SECURE_SETTINGS",
        description: "允许应用程序修改系统安全设置",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.READ_SEARCH_INDEXABLES",
        description: "允许应用程序读取搜索索引",
        protectionLevel: "signature",
        selected: false
    },

    // 应用安装权限
    {
        name: "android.permission.CLEAR_APP_CACHE",
        description: "允许应用程序清除应用缓存",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.CLEAR_APP_USER_DATA",
        description: "允许应用程序清除应用用户数据",
        protectionLevel: "signature",
        selected: false
    },

    // 系统状态权限
    {
        name: "android.permission.BATTERY_STATS",
        description: "允许应用程序收集电池统计信息",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.PACKAGE_USAGE_STATS",
        description: "允许应用程序收集组件使用统计信息",
        protectionLevel: "signature",
        selected: false
    },

    // 系统UI权限
    {
        name: "android.permission.BIND_SCREENING_SERVICE",
        description: "允许应用程序绑定筛选服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_TELECOM_CONNECTION_SERVICE",
        description: "允许应用程序绑定电信连接服务",
        protectionLevel: "signature",
        selected: false
    },

    // 系统工具权限
    {
        name: "android.permission.BIND_CARRIER_SERVICES",
        description: "允许应用程序绑定运营商服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_CARRIER_MESSAGING_SERVICE",
        description: "允许应用程序绑定运营商消息服务",
        protectionLevel: "signature",
        selected: false
    },

    // 系统安全权限
    {
        name: "android.permission.BIND_REMOTEVIEWS",
        description: "允许应用程序绑定远程视图服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_TEXT_SERVICE",
        description: "允许应用程序绑定文本服务",
        protectionLevel: "signature",
        selected: false
    },

    // 开发调试权限
    {
        name: "android.permission.DUMP",
        description: "允许应用程序检索系统内部状态",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.READ_LOGS",
        description: "允许应用程序读取系统日志文件",
        protectionLevel: "signature",
        selected: false
    },

    // 系统组件权限
    {
        name: "android.permission.BIND_MIDI_DEVICE_SERVICE",
        description: "允许应用程序绑定MIDI设备服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_INCALL_SERVICE",
        description: "允许应用程序绑定通话中服务",
        protectionLevel: "signature",
        selected: false
    },

    // 应用组件权限
    {
        name: "android.permission.BIND_CHOOSER_TARGET_SERVICE",
        description: "允许应用程序绑定选择器目标服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_COMPANION_DEVICE_SERVICE",
        description: "允许应用程序绑定配套设备服务",
        protectionLevel: "signature",
        selected: false
    },

    // 系统服务权限
    {
        name: "android.permission.BIND_DEVICE_LOCK_SERVICE",
        description: "允许应用程序绑定设备锁定服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_ATTENTION_SERVICE",
        description: "允许应用程序绑定注意力服务",
        protectionLevel: "signature",
        selected: false
    },

    // 系统安全权限
    {
        name: "android.permission.BIND_KEYGUARD_APPWIDGET",
        description: "允许应用程序绑定锁屏小部件",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_DIRECTORY_SEARCH",
        description: "允许应用程序绑定目录搜索",
        protectionLevel: "signature",
        selected: false
    },

    // 系统通信权限
    {
        name: "android.permission.BIND_CALL_REDIRECTION_SERVICE",
        description: "允许应用程序绑定呼叫重定向服务",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE",
        description: "允许应用程序绑定可视语音邮件服务",
        protectionLevel: "signature",
        selected: false
    },

    // 系统控制权限
    {
        name: "android.permission.CONTROL_KEYGUARD",
        description: "允许应用程序控制锁屏",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.CONTROL_REMOTE_APP_TRANSITION_ANIMATIONS",
        description: "允许应用程序控制远程应用转场动画",
        protectionLevel: "signature",
        selected: false
    },

    // 系统状态权限
    {
        name: "android.permission.GET_APP_OPS_STATS",
        description: "允许应用程序获取应用操作统计信息",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.GET_INTENT_SENDER_INTENT",
        description: "允许应用程序获取意图发送者的意图",
        protectionLevel: "signature",
        selected: false
    },

    // 系统设置权限
    {
        name: "android.permission.MANAGE_ACTIVITY_STACKS",
        description: "允许应用程序管理活动栈",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MANAGE_APP_OPS_MODES",
        description: "允许应用程序管理应用操作模式",
        protectionLevel: "signature",
        selected: false
    },

    // 系统组件权限
    {
        name: "android.permission.MANAGE_BIND_INSTANT_SERVICE",
        description: "允许应用程序管理即时服务绑定",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MANAGE_DEBUGGING",
        description: "允许应用程序管理调试",
        protectionLevel: "signature",
        selected: false
    },

    // 系统服务权限
    {
        name: "android.permission.MODIFY_ACCESSIBILITY_DATA",
        description: "允许应用程序修改无障碍数据",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.MODIFY_APPWIDGET_BIND_PERMISSIONS",
        description: "允许应用程序修改小部件绑定权限",
        protectionLevel: "signature",
        selected: false
    },

    // 系统通知权限
    {
        name: "android.permission.MODIFY_PHONE_STATE",
        description: "允许应用程序修改电话状态",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.NOTIFY_PENDING_SYSTEM_UPDATE",
        description: "允许应用程序通知待处理的系统更新",
        protectionLevel: "signature",
        selected: false
    },

    // 系统包管理权限
    {
        name: "android.permission.OBSERVE_APP_USAGE",
        description: "允许应用程序观察应用使用情况",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.OBSERVE_GRANT_REVOKE_PERMISSIONS",
        description: "允许应用程序观察权限的授予和撤销",
        protectionLevel: "signature",
        selected: false
    },

    // 系统调试权限
    {
        name: "android.permission.PACKAGE_VERIFICATION_AGENT",
        description: "允许应用程序验证包",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.PERFORM_CDMA_PROVISIONING",
        description: "允许应用程序执行CDMA配置",
        protectionLevel: "signature",
        selected: false
    },

    // 系统安全权限
    {
        name: "android.permission.READ_PRIVILEGED_PHONE_STATE",
        description: "允许应用程序读取特权电话状态",
        protectionLevel: "signature",
        selected: false
    },
    {
        name: "android.permission.REBOOT",
        description: "允许应用程序重启设备",
        protectionLevel: "signature",
        selected: false
    }
]; 