const branches = [
  { id: 'alu', name: 'ALU', university: 'African Leadership University', image: '/assets/rwanda-students.jpg', alt: 'Students at an IEEE ALU Student Branch gathering', website: null, album: '72177720335078644' },
  { id: 'cmu-africa', name: 'CMU-Africa', university: 'Carnegie Mellon University Africa', image: '/assets/cmu-africa.jpg', alt: 'Students attending an IEEE panel at CMU-Africa', website: null, album: '72177720333344522' },
  { id: 'ur', name: 'University of Rwanda', university: 'University of Rwanda', image: '/assets/ur-students.jpg', alt: 'Participants at the Tartan Synergy activity at UR CST', website: null, album: '72177720333391508' },
];

export default function BranchDirectory() {
  return (
    <section className="section branch-directory">
      <div className="section-heading"><div><span className="eyebrow">CAMPUS COMMUNITIES</span><h2>Find your student branch</h2></div></div>
      <p className="section-description">Connect with students at your university, take part in technical activities, and get involved in running your branch.</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {branches.map(branch => (
          <article key={branch.id} id={branch.id} className="campus-card flex flex-col overflow-hidden rounded-md bg-white">
            <img className="block aspect-[16/10] w-full object-cover" src={branch.image} alt={branch.alt} loading="lazy" />
            <div className="flex flex-1 flex-col px-6 pt-6 pb-5">
              <span className="campus-card-label">IEEE STUDENT BRANCH</span>
              <h3>{branch.name}</h3>
              <p className="campus-card-university">{branch.id === 'ur' ? 'UR student community' : branch.university}</p>
              <div className="campus-card-actions mt-auto">
                {branch.website ? (
                  <a className="campus-card-link" href={branch.website}>View branch website</a>
                ) : (
                  <span className="campus-card-unavailable" aria-disabled="true">View branch website<small>Link coming soon</small></span>
                )}
                <a className="campus-card-link" href={`https://www.flickr.com/photos/ieeerwanda/albums/${branch.album}`}>View branch activities</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="directory-note">Branch officers and contact details will be added after confirmation.</p>
    </section>
  );
}
