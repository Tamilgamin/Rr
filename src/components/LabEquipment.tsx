import React from 'react';

// This component provides mixins and reusable A-Frame entities for lab equipment
export const LabEquipmentAssets = () => {
  return (
    <a-assets>
      {/* Glass Material Mixin */}
      <a-mixin 
        id="glass" 
        material="color: #ffffff; opacity: 0.2; transparent: true; side: double; metalness: 0.2; roughness: 0.1"
      ></a-mixin>
      
      {/* Plastic Material Mixin */}
      <a-mixin 
        id="plastic" 
        material="color: #f0f0f0; opacity: 0.8; transparent: true; metalness: 0.1; roughness: 0.5"
      ></a-mixin>

      {/* Metal Material Mixin */}
      <a-mixin 
        id="metal" 
        material="color: #777; metalness: 0.9; roughness: 0.2"
      ></a-mixin>
    </a-assets>
  );
};

// Reusable Equipment Components
export const Beaker = ({ position = "0 0 0", scale = "1 1 1", liquidColor = "#fff", liquidHeight = 0.7 }) => (
  <a-entity position={position} scale={scale}>
    <a-cylinder radius="0.04" height="0.12" mixin="glass" open-ended="true" position="0 0.06 0"></a-cylinder>
    <a-circle radius="0.04" rotation="-90 0 0" mixin="glass" position="0 0 0"></a-circle>
    {/* Liquid */}
    <a-cylinder 
      radius="0.038" 
      height={0.11 * liquidHeight} 
      position={`0 ${(0.11 * liquidHeight) / 2} 0`} 
      material={`color: ${liquidColor}; opacity: 0.7; transparent: true`}
    ></a-cylinder>
  </a-entity>
);

export const TestTube = ({ position = "0 0 0", scale = "1 1 1", liquidColor = "#fff", liquidHeight = 0.5 }) => (
  <a-entity position={position} scale={scale}>
    <a-cylinder radius="0.01" height="0.1" mixin="glass" open-ended="true" position="0 0.05 0"></a-cylinder>
    <a-sphere radius="0.01" mixin="glass" position="0 0 0" theta-start="90"></a-sphere>
    {/* Liquid */}
    <a-cylinder 
      radius="0.009" 
      height={0.09 * liquidHeight} 
      position={`0 ${(0.09 * liquidHeight) / 2} 0`} 
      material={`color: ${liquidColor}; opacity: 0.7; transparent: true`}
    ></a-cylinder>
  </a-entity>
);

export const ConicalFlask = ({ position = "0 0 0", scale = "1 1 1", liquidColor = "#fff", liquidHeight = 0.4 }) => (
  <a-entity position={position} scale={scale}>
    <a-cone radius-bottom="0.05" radius-top="0.015" height="0.08" mixin="glass" position="0 0.04 0"></a-cone>
    <a-cylinder radius="0.015" height="0.04" mixin="glass" position="0 0.1 0" open-ended="true"></a-cylinder>
    {/* Liquid */}
    <a-cone 
      radius-bottom="0.048" 
      radius-top={0.048 * (1 - liquidHeight)} 
      height={0.08 * liquidHeight} 
      position={`0 ${(0.08 * liquidHeight) / 2} 0`} 
      material={`color: ${liquidColor}; opacity: 0.7; transparent: true`}
    ></a-cone>
  </a-entity>
);

export const BunsenBurner = ({ position = "0 0 0", active = false, flameColor = "#33f" }) => (
  <a-entity position={position}>
    <a-cylinder radius="0.04" height="0.01" mixin="metal" position="0 0.005 0"></a-cylinder>
    <a-cylinder radius="0.008" height="0.1" mixin="metal" position="0 0.05 0"></a-cylinder>
    {active && (
      <a-entity position="0 0.1 0">
        <a-cone radius-bottom="0.01" radius-top="0" height="0.04" material={`color: ${flameColor}; emissive: ${flameColor}; opacity: 0.8; transparent: true`}>
          <a-animation attribute="scale" to="1.2 1.5 1.2" dur="100" direction="alternate" repeat="indefinite"></a-animation>
        </a-cone>
        <a-light type="point" color={flameColor} intensity="0.5" distance="0.2"></a-light>
      </a-entity>
    )}
  </a-entity>
);

export const ReagentBottle = ({ position = "0 0 0", label = "HCl", color = "#333" }) => (
  <a-entity position={position}>
    <a-cylinder radius="0.025" height="0.07" material={`color: ${color}; metalness: 0.5; roughness: 0.5`}></a-cylinder>
    <a-cylinder radius="0.01" height="0.02" position="0 0.045 0" material="color: #111"></a-cylinder>
    <a-plane position="0 0 0.026" width="0.03" height="0.02" material="color: white">
      <a-text value={label} color="black" align="center" width="0.2" position="0 0 0.001"></a-text>
    </a-plane>
  </a-entity>
);

export const Pipette = ({ position = "0 0 0", rotation = "0 0 0" }) => (
  <a-entity position={position} rotation={rotation}>
    <a-cylinder radius="0.005" height="0.3" mixin="glass" position="0 0.15 0"></a-cylinder>
    <a-sphere position="0 0.3 0" radius="0.015" material="color: #ff4444"></a-sphere>
  </a-entity>
);

export const Burette = ({ position = "0 0 0" }) => (
  <a-entity position={position}>
    <a-cylinder radius="0.01" height="0.6" mixin="glass" position="0 0.3 0"></a-cylinder>
    <a-box position="0 0.05 0" width="0.03" height="0.03" depth="0.03" material="color: #333"></a-box>
    <a-cylinder position="0 0 0" radius="0.005" height="0.1" mixin="glass"></a-cylinder>
  </a-entity>
);

export const Funnel = ({ position = "0 0 0" }) => (
  <a-entity position={position}>
    <a-cone radius-bottom="0.05" radius-top="0.01" height="0.06" mixin="glass" position="0 0.06 0"></a-cone>
    <a-cylinder position="0 0.015 0" radius="0.008" height="0.06" mixin="glass"></a-cylinder>
  </a-entity>
);

export const EvaporatingDish = ({ position = "0 0 0" }) => (
  <a-entity position={position}>
    <a-sphere radius="0.06" phi-start="0" phi-length="360" theta-start="90" theta-length="90" mixin="glass" side="double"></a-sphere>
  </a-entity>
);
