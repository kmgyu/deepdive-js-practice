import React, { useState } from 'react';
import LevelNode from './LevelNode';
import SidebarPanel from './SidebarPanel';
import '../styles/graph.css'; // 위치/선 스타일 정의

// 레벨 정보가 추가된 노드 목록
const nodes = [
  { id: 'start', label: '막간의 여흥', type: 'ROLL', level: 0 },
  { id: 'combat1', label: '작전', type: 'COMBAT', level: 1 },
  { id: 'combat2', label: '작전', type: 'COMBAT', level: 2 },
  { id: 'meet', label: '우연한 만남', type: 'ENCOUNTER', level: 3 },
  { id: 'emergency', label: '긴급 작전', type: 'EMERGENCY', level: 3 },
];

const edges = [
  ['start', 'combat1'],
  ['combat1', 'combat2'],
  ['combat2', 'meet'],
  ['combat2', 'emergency'],
];

function LevelGraph() {
  const [selectedNode, setSelectedNode] = useState(null);

  // level별로 그룹핑
  const levelGroups = nodes.reduce((acc, node) => {
    acc[node.level] = acc[node.level] || [];
    acc[node.level].push(node);
    return acc;
  }, {});

  const levels = Object.keys(levelGroups).sort((a, b) => a - b);

  return (
    <div className="graph-container">
      {/* SVG 라인 */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5"
                orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L10,5 L0,10 Z" fill="#aaa" />
        </marker>
      </defs>
      <svg className="graph-lines">
        {edges.map(([fromId, toId], idx) => {
          const fromElem = document.getElementById(`node-${fromId}`);
          const toElem = document.getElementById(`node-${toId}`);
          if (!fromElem || !toElem) return null;
          const fromRect = fromElem.getBoundingClientRect();
          const toRect = toElem.getBoundingClientRect();
          return (
            <line
              key={idx}
              x1={fromRect.left + fromRect.width / 2}
              y1={fromRect.top + fromRect.height / 2}
              x2={toRect.left + toRect.width / 2}
              y2={toRect.top + toRect.height / 2}
              stroke="white"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          );
        })}
      </svg>

      {/* 노드들 */}
      <div className="graph-levels">
        {levels.map(level => (
          <div key={level} className="graph-level">
            {levelGroups[level].map(node => (
              <div key={node.id} className="node-wrapper">
                <LevelNode
                  node={node}
                  id={`node-${node.id}`}
                  onClick={() => setSelectedNode(node)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <SidebarPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
    </div>
  );
}

export default LevelGraph;
