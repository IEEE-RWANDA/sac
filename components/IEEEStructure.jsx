'use client';

import { useState } from 'react';

const nodes = {
  ieee: ['IEEE', 'Global organisation', 'The worldwide professional community connects members through geographic units and technical Societies and Councils.', ['region']],
  region: ['IEEE Region 8', 'Regional community', 'Rwanda belongs to Region 8. Regional volunteers and the regional Student Activities Committee support local units and student activities.', ['ieee', 'local']],
  local: ['Section / Subsection', 'Local community', 'IEEE Rwanda Subsection connects the local IEEE community. SAC Rwanda helps support students and campus branches.', ['region', 'branch']],
  branch: ['Student Branch', 'Your campus community', 'The IEEE student community at a university. In Rwanda, our branches include ALU, CMU-Africa, and the University of Rwanda.', ['local', 'chapter']],
  chapter: ['Student Branch Chapter', 'A technical community within a branch', 'A chapter belongs within its Student Branch and also connects to a Society or Technical Council. It brings students together around a technical field.', ['branch', 'society']],
  society: ['IEEE Society / Council', 'Technical community', 'Societies and Technical Councils connect members around technical interests and provide programmes, expertise, and resources. This is a technical connection, alongside the geographic structure.', ['chapter']],
  members: ['Student members', 'Elect the student leadership', 'Branch members elect student officers under their branch constitution. Members take part in activities and can join organising teams.', ['excom']],
  excom: ['Executive Committee', 'Coordinates branch operations', 'The core team includes the Chair, Vice Chair, Secretary, and Treasurer. Chapter chairs also sit on the branch Executive Committee. The branch constitution defines the detailed structure.', ['members', 'chair', 'vice', 'secretary', 'treasurer', 'counselor', 'teams', 'chapters']],
  chair: ['Chair', 'Leads the student team', 'Coordinates branch meetings, plans, and activities, working with the other officers and the faculty counselor.', ['excom']],
  vice: ['Vice Chair', 'Supports the chair', 'Helps coordinate activities and committees and shares the leadership workload.', ['excom']],
  secretary: ['Secretary', 'Keeps branch records', 'Maintains meeting records, correspondence, and branch documentation.', ['excom']],
  treasurer: ['Treasurer', 'Manages finances', 'Helps prepare budgets, manages branch finances, and contributes to financial reporting.', ['excom']],
  counselor: ['Branch Counselor', 'Faculty guidance', 'Advises the student officers and provides continuity between terms. Faculty guidance supports the elected student team.', ['excom']],
  teams: ['Operating committees', 'Turn plans into activities', 'Teams can focus on events, membership, communications, and other needs identified by the branch.', ['excom']],
  chapters: ['Chapter leadership', 'Connects technical groups to the branch', 'Chapter members elect their officers. Chapter chairs serve on the branch Executive Committee and coordinate with chapter advisors and their Society or Council.', ['excom']],
};

export default function IEEEStructure() {
  const [view, setView] = useState('global');
  const [selected, setSelected] = useState('branch');
  const active = nodes[selected];
  function changeView(next) { setView(next); setSelected(next === 'global' ? 'branch' : 'excom'); }
  function node(id, extra = '') {
    const related = active[3].includes(id);
    return <button type="button" className={`flow-node ${selected === id ? 'is-selected' : ''} ${related ? 'is-connected' : ''} ${extra}`} aria-pressed={selected === id} onClick={() => setSelected(id)}><span>{nodes[id][0]}</span><small>{nodes[id][1]}</small></button>;
  }
  return (
    <section id="ieee-structure" className="section tinted" aria-labelledby="ieee-structure-title">
      <span className="eyebrow">EXPLORE THE ORGANISATION</span>
      <h2 id="ieee-structure-title">Where do you fit in IEEE?</h2>
      <p>Choose a view, then select any role or group to explore its connections.</p>
      <div className="flow-switch" role="group" aria-label="Organisation view">
        <button type="button" aria-pressed={view === 'global'} onClick={() => changeView('global')}>Global to campus</button>
        <button type="button" aria-pressed={view === 'branch'} onClick={() => changeView('branch')}>Inside a Student Branch</button>
      </div>
      <div className="flow-explorer">
        <div className="flow-canvas" aria-label={view === 'global' ? 'IEEE geographic and technical connections' : 'Student Branch leadership connections'}>
          {view === 'global' ? <>
            <p className="flow-caption">GEOGRAPHIC COMMUNITY</p>
            <div className="flow-chain">{node('ieee')}{node('region')}{node('local')}{node('branch')}</div>
            <div className="flow-technical"><span className="flow-line-label">Campus and technical connections</span><div>{node('chapter')}{node('society')}</div></div>
          </> : <>
            <div className="flow-member">{node('members')}</div>
            <div className="flow-executive">{node('excom')}{node('counselor', 'flow-advisor')}</div>
            <p className="flow-caption">CORE STUDENT OFFICERS</p>
            <div className="flow-officers">{node('chair')}{node('vice')}{node('secretary')}{node('treasurer')}</div>
            <div className="flow-teams">{node('teams')}{node('chapters')}</div>
          </>}
          <p className="flow-legend"><span aria-hidden="true" />Highlighted nodes connect directly to your selection.</p>
        </div>
        <aside className="flow-inspector" aria-live="polite" aria-atomic="true">
          <span className="eyebrow">{active[1]}</span><h3>{active[0]}</h3><p>{active[2]}</p>
          <span className="flow-detail-label">CONNECTED TO</span>
          <div className="flow-related">{active[3].map(id => <button key={id} type="button" onClick={() => setSelected(id)}>{nodes[id][0]}</button>)}</div>
        </aside>
      </div>
      <p className="mt-5 text-xs">{view === 'global' ? 'A simplified view of geographic and technical connections. Societies and Councils work alongside IEEE’s geographic units.' : 'A typical branch structure. Each branch’s constitution sets its detailed roles and election process; these are not current officer appointments.'}</p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3"><a className="text-link" href="https://mga.ieee.org/volunteer-hub/geographic-unit-operations/geographic-units-and-groups">IEEE geographic units</a><a className="text-link" href="https://students.ieee.org/student-branches/officer-responsibilities-reporting/">Branch officer responsibilities</a><a className="text-link" href="https://r8.ieee.org/sac/resources/student-chapters-guide/">Chapter leadership guide</a></div>
    </section>
  );
}
