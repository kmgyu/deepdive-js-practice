import React, { useState } from 'react';
import LevelNode from './LevelNode';
import SidebarPanel from './SidebarPanel';
import '../styles/graph.css'; // 위치/선 스타일 정의

// 맵에 그려지는 그래프
const nodes = [
  { id: 'start', label: '막간의 여흥', type: 'ROLL', x: 50, y: 100 },
  { id: 'combat1', label: '작전', type: 'COMBAT', x: 250, y: 100 },
  { id: 'combat2', label: '작전', type: 'COMBAT', x: 450, y: 100 },
  { id: 'meet', label: '우연한 만남', type: 'ENCOUNTER', x: 650, y: 150 },
  { id: 'emergency', label: '긴급 작전', type: 'EMERGENCY', x: 650, y: 250 },
];

const edges = [
  ['start', 'combat1'],
  ['combat1', 'combat2'],
  ['combat2', 'meet'],
  ['combat2', 'emergency'],
];

function LevelGraph() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="graph-container">
      <svg className="graph-lines">
        {edges.map(([from, to], idx) => {
          const fromNode = nodes.find(n => n.id === from);
          const toNode = nodes.find(n => n.id === to);
          return (
            <line
              key={idx}
              x1={fromNode.x + 80}
              y1={fromNode.y + 20}
              x2={toNode.x}
              y2={toNode.y + 20}
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <LevelNode key={node.id} node={node} onClick={() => setSelectedNode(node)} />
      ))}

      <SidebarPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
    </div>
  );
}

export default LevelGraph;
