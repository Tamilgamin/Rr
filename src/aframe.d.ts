import 'react';

declare global {
  interface Window {
    AFRAME: any;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-marker': any;
      'a-entity': any;
      'a-camera': any;
      'a-cylinder': any;
      'a-sphere': any;
      'a-cone': any;
      'a-text': any;
      'a-assets': any;
      'a-asset-item': any;
      'a-ring': any;
      'ar-hit-test-custom': any;
    }
  }
}
