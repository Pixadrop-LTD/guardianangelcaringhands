import React from 'react'

export type ProcessFlowBlock = {
  blockType: 'processFlow'
  title: string
}

export const ProcessFlow: React.FC<ProcessFlowBlock> = ({ title }) => {
  return (
    <div className="process-flow">
      <h2 className="text-center mb-8">{title}</h2>
      <div className="process-flow__diagram">
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="flowTitle flowDesc"
        >
          <title id="flowTitle">Guardian Angels Caring Hands Program Execution Flow</title>
          <desc id="flowDesc">
            A comprehensive flow diagram showing the complete program execution process from
            pre-implementation through continuous improvement
          </desc>

          {/* Definitions for reusable elements */}
          <defs>
            {/* Drop shadow filter */}
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0,0,0,0.1)" />
            </filter>

            {/* Arrow marker */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0,0 0,6 9,3" fill="#E6E6E6" />
            </marker>

            {/* Dashed arrow marker */}
            <marker
              id="arrowheadDashed"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0,0 0,6 9,3" fill="#E6E6E6" opacity="0.7" />
            </marker>
          </defs>

          {/* Title */}
          <text
            x="600"
            y="30"
            text-anchor="middle"
            font-size="18"
            font-weight="600"
            fill="#333333"
            font-family="system-ui, sans-serif"
          >
            Guardian Angels Caring Hands - Program Execution Process
          </text>

          {/* Phase 1: Pre-Implementation */}
          <g id="phase1">
            {/* Start Node */}
            <rect
              x="50"
              y="80"
              width="200"
              height="80"
              rx="8"
              fill="#00ACEF"
              filter="url(#dropShadow)"
            />
            <text
              x="150"
              y="115"
              text-anchor="middle"
              font-size="16"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              <tspan x="150" dy="0">
                Program Initiation
              </tspan>
              <tspan x="150" dy="18">
                & Planning
              </tspan>
            </text>

            {/* Resource Development */}
            <rect
              x="310"
              y="80"
              width="180"
              height="60"
              rx="8"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="400"
              y="115"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              Resource Development
            </text>

            {/* Quality Assurance Setup */}
            <rect
              x="550"
              y="80"
              width="180"
              height="60"
              rx="8"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="640"
              y="115"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              Quality Assurance Setup
            </text>
          </g>

          {/* Phase 2: Implementation Decision */}
          <g id="phase2">
            {/* Implementation Decision Diamond */}
            <polygon
              points="840,60 920,120 840,180 760,120"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="840"
              y="115"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              <tspan x="840" dy="-5">
                Ready for
              </tspan>
              <tspan x="840" dy="16">
                Implementation?
              </tspan>
            </text>

            {/* Implementation Phase */}
            <rect
              x="980"
              y="80"
              width="180"
              height="80"
              rx="8"
              fill="#00ACEF"
              filter="url(#dropShadow)"
            />
            <text
              x="1070"
              y="115"
              text-anchor="middle"
              font-size="16"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              <tspan x="1070" dy="0">
                Implementation
              </tspan>
              <tspan x="1070" dy="18">
                Phase
              </tspan>
            </text>
          </g>

          {/* Phase 3: Community Engagement */}
          <g id="phase3">
            <rect
              x="50"
              y="220"
              width="180"
              height="60"
              rx="8"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="140"
              y="255"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              Community Engagement
            </text>

            {/* Safety & Protection */}
            <rect
              x="290"
              y="220"
              width="180"
              height="60"
              rx="8"
              fill="#FF8C42"
              filter="url(#dropShadow)"
            />
            <text
              x="380"
              y="255"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              Safety & Protection
            </text>

            {/* Documentation */}
            <rect
              x="530"
              y="220"
              width="180"
              height="60"
              rx="8"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="620"
              y="255"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              Documentation & Reporting
            </text>
          </g>

          {/* Phase 4: Assessment */}
          <g id="phase4">
            {/* Impact Assessment */}
            <rect
              x="770"
              y="220"
              width="180"
              height="60"
              rx="8"
              fill="#FFC857"
              filter="url(#dropShadow)"
            />
            <text
              x="860"
              y="255"
              text-anchor="middle"
              font-size="14"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Impact Assessment
            </text>

            {/* Communication */}
            <rect
              x="1010"
              y="220"
              width="180"
              height="60"
              rx="8"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="1100"
              y="250"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              <tspan x="1100" dy="0">
                Communication &
              </tspan>
              <tspan x="1100" dy="16">
                Transparency
              </tspan>
            </text>
          </g>

          {/* Phase 5: Evaluation */}
          <g id="phase5">
            {/* Success Evaluation Diamond */}
            <polygon
              points="400,340 480,400 400,460 320,400"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="400"
              y="395"
              text-anchor="middle"
              font-size="14"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              <tspan x="400" dy="-5">
                Program
              </tspan>
              <tspan x="400" dy="16">
                Successful?
              </tspan>
            </text>

            {/* Continuous Improvement */}
            <rect
              x="580"
              y="370"
              width="180"
              height="60"
              rx="8"
              fill="#FFC857"
              filter="url(#dropShadow)"
            />
            <text
              x="670"
              y="405"
              text-anchor="middle"
              font-size="14"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Continuous Improvement
            </text>

            {/* Program Completion */}
            <rect
              x="820"
              y="370"
              width="180"
              height="60"
              rx="8"
              fill="#FFC857"
              filter="url(#dropShadow)"
            />
            <text
              x="910"
              y="405"
              text-anchor="middle"
              font-size="14"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Program Completion
            </text>
          </g>

          {/* Resource Management (Side process) */}
          <g id="resourceManagement">
            <rect
              x="50"
              y="500"
              width="200"
              height="80"
              rx="8"
              fill="#45A29E"
              filter="url(#dropShadow)"
            />
            <text
              x="150"
              y="535"
              text-anchor="middle"
              font-size="16"
              fill="white"
              font-family="system-ui, sans-serif"
            >
              <tspan x="150" dy="0">
                Resource Management
              </tspan>
              <tspan x="150" dy="18">
                (Ongoing)
              </tspan>
            </text>
          </g>

          {/* Milestone Indicators */}
          <g id="milestones">
            {/* Milestone 1 */}
            <rect
              x="50"
              y="630"
              width="150"
              height="40"
              rx="8"
              fill="#FFC857"
              filter="url(#dropShadow)"
            />
            <text
              x="125"
              y="655"
              text-anchor="middle"
              font-size="12"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Phase 1 Complete
            </text>

            {/* Milestone 2 */}
            <rect
              x="250"
              y="630"
              width="150"
              height="40"
              rx="8"
              fill="#FFC857"
              filter="url(#dropShadow)"
            />
            <text
              x="325"
              y="655"
              text-anchor="middle"
              font-size="12"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Implementation Active
            </text>

            {/* Milestone 3 */}
            <rect
              x="450"
              y="630"
              width="150"
              height="40"
              rx="8"
              fill="#FFC857"
              filter="url(#dropShadow)"
            />
            <text
              x="525"
              y="655"
              text-anchor="middle"
              font-size="12"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Assessment Complete
            </text>

            {/* Milestone 4 */}
            <rect
              x="650"
              y="630"
              width="150"
              height="40"
              rx="8"
              fill="#FFC857"
              filter="url(#dropShadow)"
            />
            <text
              x="725"
              y="655"
              text-anchor="middle"
              font-size="12"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Program Success
            </text>
          </g>

          {/* Flow Lines */}
          <g
            id="flowLines"
            stroke="#E6E6E6"
            stroke-width="2"
            fill="none"
            marker-end="url(#arrowhead)"
          >
            {/* Main horizontal flow */}
            <line x1="250" y1="120" x2="310" y2="120" />
            <line x1="490" y1="110" x2="550" y2="110" />
            <line x1="730" y1="110" x2="760" y2="120" />
            <line x1="920" y1="120" x2="980" y2="120" />

            {/* Vertical connections to phase 3 */}
            <line x1="150" y1="160" x2="150" y2="220" />
            <line x1="400" y1="140" x2="400" y2="220" />
            <line x1="640" y1="140" x2="640" y2="220" />

            {/* Phase 3 horizontal flow */}
            <line x1="230" y1="250" x2="290" y2="250" />
            <line x1="470" y1="250" x2="530" y2="250" />
            <line x1="710" y1="250" x2="770" y2="250" />
            <line x1="950" y1="250" x2="1010" y2="250" />

            {/* To evaluation diamond */}
            <line x1="380" y1="280" x2="380" y2="340" />

            {/* From evaluation diamond */}
            <line x1="480" y1="400" x2="580" y2="400" />
            <line x1="760" y1="400" x2="820" y2="400" />

            {/* Resource management connections (dashed) */}
            <line
              x1="150"
              y1="500"
              x2="150"
              y2="460"
              stroke-dasharray="5,5"
              marker-end="url(#arrowheadDashed)"
            />
            <line
              x1="250"
              y1="520"
              x2="380"
              y2="460"
              stroke-dasharray="5,5"
              marker-end="url(#arrowheadDashed)"
            />
          </g>

          {/* Feedback loop (dashed) - using straight lines with sharp corners */}
          <g
            id="feedbackLoop"
            stroke="#E6E6E6"
            stroke-width="2"
            fill="none"
            stroke-dasharray="5,5"
            marker-end="url(#arrowheadDashed)"
          >
            <polyline points="320,400 200,400 200,320 150,320 150,300" />
          </g>

          {/* Legend */}
          <g id="legend" transform="translate(950, 480)">
            <rect
              x="0"
              y="0"
              width="220"
              height="140"
              fill="white"
              stroke="#E6E6E6"
              stroke-width="1"
              rx="8"
            />
            <text
              x="10"
              y="20"
              font-size="14"
              font-weight="600"
              fill="#333333"
              font-family="system-ui, sans-serif"
            >
              Legend
            </text>

            {/* Main Process */}
            <rect x="10" y="30" width="30" height="15" fill="#00ACEF" />
            <text x="50" y="42" font-size="12" fill="#333333" font-family="system-ui, sans-serif">
              Main Process
            </text>

            {/* Sub Process */}
            <rect x="10" y="50" width="30" height="15" fill="#45A29E" />
            <text x="50" y="62" font-size="12" fill="#333333" font-family="system-ui, sans-serif">
              Sub Process
            </text>

            {/* Milestone */}
            <rect x="10" y="70" width="30" height="15" fill="#FFC857" />
            <text x="50" y="82" font-size="12" fill="#333333" font-family="system-ui, sans-serif">
              Milestone
            </text>

            {/* Warning */}
            <rect x="10" y="90" width="30" height="15" fill="#FF8C42" />
            <text x="50" y="102" font-size="12" fill="#333333" font-family="system-ui, sans-serif">
              Critical Point
            </text>

            {/* Line types */}
            <line x1="10" y1="115" x2="40" y2="115" stroke="#E6E6E6" stroke-width="2" />
            <text x="50" y="119" font-size="12" fill="#333333" font-family="system-ui, sans-serif">
              Required Path
            </text>

            <line
              x1="10"
              y1="130"
              x2="40"
              y2="130"
              stroke="#E6E6E6"
              stroke-width="2"
              stroke-dasharray="3,3"
            />
            <text x="50" y="134" font-size="12" fill="#333333" font-family="system-ui, sans-serif">
              Optional Path
            </text>
          </g>

          {/* Phase Labels */}
          <g id="phaseLabels" font-size="12" fill="#666666" font-family="system-ui, sans-serif">
            <text x="50" y="70">
              Pre-Implementation
            </text>
            <text x="760" y="70">
              Implementation
            </text>
            <text x="50" y="210">
              Execution & Monitoring
            </text>
            <text x="320" y="330">
              Evaluation
            </text>
            <text x="50" y="490">
              Support Systems
            </text>
            <text x="50" y="620">
              Milestones
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
