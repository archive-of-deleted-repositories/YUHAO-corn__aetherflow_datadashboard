// 简化版Firebase配置
// 注意：此版本不再使用Firebase Admin SDK进行认证
// 仅保留项目ID用于UI显示

// 从环境变量获取Firebase项目ID
export const firebaseProjectId = process.env.FIREBASE_PROJECT_ID || 'aetherflow-b6459';

// 导出用于显示的函数
export function getFirebaseProjectInfo() {
  return {
    projectId: firebaseProjectId,
    environment: firebaseProjectId === 'aetherflow-b6459' ? '生产环境' : '开发环境'
  };
} 