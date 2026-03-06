import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chemlab.ar',
  appName: 'Chemistry Lab AR',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
