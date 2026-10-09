const formationGuide = 'https://mga.ieee.org/volunteer-hub/geographic-unit-operations/formations-and-petitions';
const petitionPortal = 'https://petition.ieee.org/bpmsignin/geopetitions?https://live.runmyprocess.com/live/2215365968/appli/233967?P_mode=LIVE&P_version=';

export default function BranchSetupGuide() {
  return (
    <section id="start-a-branch" className="section tinted" aria-labelledby="branch-setup-title">
      <span className="eyebrow">START A CAMPUS COMMUNITY</span>
      <h2 id="branch-setup-title">Student Branch or Student Branch Chapter?</h2>
      <p className="max-w-3xl">A Student Branch brings IEEE students together across your university. A Student Branch Chapter sits within that branch and focuses on the technical interests of an IEEE Society or Council.</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <article className="flex flex-col border-t border-[#dce4e9] pt-6">
          <h3>Set up a Student Branch</h3>
          <p>Start here if your university does not have an IEEE Student Branch.</p>
          <ol className="list-decimal space-y-4 pl-5 text-sm leading-7">
            <li><strong>Bring students together.</strong> You need 12 active IEEE Student or Graduate Student Members at your institution. An eligible student organiser leads the petition and serves as interim chair.</li>
            <li><strong>Arrange university support.</strong> Secure endorsements from a department head, a faculty counselor, and two other faculty members. The counselor and faculty endorsers must be active IEEE members at Graduate Student grade or higher, teaching in IEEE fields of interest.</li>
            <li><strong>Start the online petition.</strong> Select Student Branch in the IEEE petition system, then follow the endorsement, member signature, and approval steps.</li>
          </ol>
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
            <a className="button primary" href={petitionPortal}>Petition for a Student Branch</a>
            <a className="text-link" href={`${formationGuide}#student`}>Full branch requirements</a>
          </div>
        </article>
        <article className="flex flex-col border-t border-[#dce4e9] pt-6">
          <h3>Set up a Student Branch Chapter</h3>
          <p>Start here for a technical community within an active Student Branch.</p>
          <ol className="list-decimal space-y-4 pl-5 text-sm leading-7">
            <li><strong>Choose your technical focus.</strong> Your institution must already have an active Student Branch. Identify the IEEE Society or Council your chapter will belong to.</li>
            <li><strong>Gather members and an advisor.</strong> You need 6 active IEEE Student or Graduate Student Members at your institution who also belong to the relevant Society or Council. The student organiser must belong too. Your faculty chapter advisor needs that membership and active IEEE membership at Graduate Student grade or higher.</li>
            <li><strong>Submit a chapter petition.</strong> Select Student Branch Chapter. Your branch counselor and chapter advisor endorse it, followed by member signatures and IEEE approvals.</li>
          </ol>
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
            <a className="button primary" href={petitionPortal}>Petition for a Chapter</a>
            <a className="text-link" href={`${formationGuide}#branch-chapters`}>Full chapter requirements</a>
          </div>
        </article>
      </div>
      <p className="mt-8 mb-0 text-xs">Both petitions use the same IEEE portal and require an IEEE account. Review the linked requirements before applying.</p>
    </section>
  );
}
