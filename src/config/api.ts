const defaultConfig = {
  apiURL: 'http://122.51.249.193:3002',
};

const configs = {
  development: {
    apiURL: 'http://122.51.249.193:3002',
  },
  test: {
    apiURL: 'http://122.51.249.193:3002',
  },
  production: {
    apiURL: 'http://122.51.249.193:3002',
  },
};

// 优先使用外部配置
export default {
  ...defaultConfig,
  ...configs[process.env.NODE_ENV || 'development'],
};
