import BranchDirectory from "../../components/BranchDirectory";
import BranchSetupGuide from "../../components/BranchSetupGuide";
export const metadata = {title:"Student Branches | IEEE SAC Rwanda"};
export default function Page(){return (<main>
<section className="page-heading"><nav aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Student Branches</span></nav><h1>Student Branches</h1><p>IEEE student communities on campuses across Rwanda.</p></section>
<BranchDirectory />
<BranchSetupGuide />
<section className="section"><div className="two-columns"><div><h2>New to IEEE?</h2><p>Your campus branch can help you understand membership, meet fellow students, and find activities to join.</p><a className="button primary" href="https://ieee.org/join">IEEE membership</a></div><div><h2>For branch officers</h2><p>Find official guidance on branch operations and prepare an activity brief for your team.</p><div className="flex flex-wrap gap-3 page-actions"><a className="button secondary" href="https://students.ieee.org/student-branch-resources/">Branch resources</a><button className="button primary" data-workspace>Open activity planner</button></div></div></div></section>
</main>);}
