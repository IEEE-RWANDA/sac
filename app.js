const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.addEventListener('click', e => { if (e.target.closest('a, button')) { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); } });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('.activity-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const details = {
  readiness: ['EVENTS & OPPORTUNITIES', 'Event preparation checklist', 'Before registering for an event, check the essentials. Confirmed Rwanda announcements and official community channels will be added here once available.', ['Check eligibility, the registration deadline, and the event location.', 'Plan any travel, documentation, costs, and accessibility support you need.', 'Use the organiser’s official registration channel and save the joining details.']],
  membership: ['MEMBERSHIP & COMMUNITY', 'IEEE membership and community', 'A campus branch can help you discover activities and understand how IEEE membership fits your interests.', ['Ask about introductory sessions and opportunities to volunteer.', 'Confirm membership details and any costs through official IEEE channels.', 'Choose an official community channel to follow for announcements; Rwanda channel links are awaiting verification.']],
  spotlight: ['STUDENT BRANCH STORIES', 'Preparing a branch update', 'Future branch spotlights can help students learn from one another. Prepare a short story for review by the SAC team when a submission channel is available.', ['Describe the activity, the students it served, and what they learned.', 'Include outcomes you can verify and lessons another branch could use.', 'Choose photos you have permission to share and credit the people who contributed.']],
  technical: ['TECHNICAL · PROPOSED FORMAT', 'Technical workshops', 'A workshop could bring students together around a small, practical project. Dates, facilitators, and registration are not confirmed.', ['Choose one learning outcome and a project that fits the session.', 'Share prerequisites and equipment needs before the workshop.', 'Leave time for testing, questions, and student demonstrations.']],
  community: ['COMMUNITY · PROPOSED FORMAT', 'Inter-branch meetups', 'A cross-campus meetup could create space for students to share unfinished ideas and discover common interests.', ['Invite short project demonstrations from participating branches.', 'Make time for introductions and small-group conversations.', 'Agree on a follow-up action with potential collaborators.']],
  leadership: ['LEADERSHIP · PROPOSED FORMAT', 'Student leadership sessions', 'A peer-led session could help branch teams exchange practical experience and prepare the next group of student leaders.', ['Discuss welcoming new members and planning useful activities.', 'Share lessons from organising a workshop or community event.', 'Document responsibilities and prepare a handover for the next team.']],
  student: ['GET INVOLVED · STUDENTS', 'Getting started with IEEE', 'The branch directory and official contact details are awaiting verification. In the meantime, here are useful first steps:', ['Ask your engineering or computing department whether your campus has an IEEE student branch.', 'Ask the branch about its next introductory activity and how students can participate.', 'Discuss membership requirements and current fees with an official IEEE representative before joining.']],
  contribute: ['GET INVOLVED · CONTRIBUTORS', 'Speaking and volunteering', 'You could contribute as a speaker, mentor, workshop facilitator, or event volunteer. An official contact channel will be added after verification.', ['Prepare a short description of your topic or proposed contribution.', 'Identify the students it would help and any prerequisites.', 'List your availability and any equipment or support you would need.']]
};
const detailDialog = document.querySelector('#detail-dialog');
function openDialog(dialog) { dialog.showModal(); document.body.classList.add('modal-open'); }
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  const [label, title, intro, bullets] = details[button.dataset.detail];
  document.querySelector('#detail-label').textContent = label;
  document.querySelector('#detail-title').textContent = title;
  const content = document.querySelector('#detail-content'); content.replaceChildren();
  const p = document.createElement('p'); p.textContent = intro; content.append(p);
  const list = document.createElement('ul'); bullets.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); }); content.append(list);
  openDialog(detailDialog);
}));
document.querySelectorAll('dialog').forEach(dialog => { dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close()); dialog.addEventListener('close', () => document.body.classList.remove('modal-open')); dialog.addEventListener('click', e => { if (e.target === dialog) { const rect = dialog.getBoundingClientRect(); if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close(); } }); });
document.querySelector('.dialog-done').addEventListener('click', () => detailDialog.close());
const workspace = document.querySelector('#workspace-dialog');
document.querySelectorAll('[data-workspace]').forEach(button => button.addEventListener('click', () => openDialog(workspace)));
const form = document.querySelector('#activity-form');
const status = document.querySelector('#save-status');
const storageKey = 'sac-rwanda-activity-draft-v1';
const fields = ['title', 'branch', 'format', 'date', 'objective', 'resources', 'audience', 'venue', 'team', 'budget'];
function draftData() { return Object.fromEntries(fields.map(name => [name, form.elements[name].type === 'checkbox' ? form.elements[name].checked : form.elements[name].value])); }
function updateProgress() { document.querySelector('#check-progress').textContent = `${form.querySelectorAll('input[type="checkbox"]:checked').length} of 4 ready`; }
try { const saved = JSON.parse(localStorage.getItem(storageKey)); if (saved && typeof saved === 'object') { fields.forEach(name => { if (!(name in saved)) return; const field = form.elements[name]; if (field.type === 'checkbox') field.checked = saved[name] === true; else if (typeof saved[name] === 'string') field.value = saved[name]; }); status.textContent = 'Saved draft restored'; } } catch { status.textContent = 'Storage unavailable — export to keep your draft'; }
updateProgress();
let clearPending = false;
form.addEventListener('input', () => { clearPending = false; document.querySelector('#clear-draft').textContent = 'Clear draft'; updateProgress(); try { localStorage.setItem(storageKey, JSON.stringify(draftData())); status.textContent = 'Saved in this browser'; } catch { status.textContent = 'Not saved — export to keep your draft'; } });
document.querySelector('#clear-draft').addEventListener('click', e => { if (!clearPending) { clearPending = true; e.target.textContent = 'Click again to clear'; return; } form.reset(); try { localStorage.removeItem(storageKey); } catch {} updateProgress(); status.textContent = 'Draft cleared'; e.target.textContent = 'Clear draft'; clearPending = false; });
form.addEventListener('submit', e => {
  e.preventDefault(); const data = draftData();
  for (const name of ['title','branch','objective']) { if (!data[name].trim()) { form.elements[name].setCustomValidity('Please enter more than spaces.'); form.elements[name].reportValidity(); form.elements[name].addEventListener('input', () => form.elements[name].setCustomValidity(''), { once: true }); return; } }
  const brief = `IEEE SAC Rwanda — Activity planning brief\nDraft for team discussion. Not submitted to SAC.\n\nActivity: ${data.title}\nBranch / campus: ${data.branch}\nFormat: ${data.format}\nProposed date: ${data.date || 'To be confirmed'}\n\nOBJECTIVE\n${data.objective}\n\nRESOURCES AND PRACTICAL NEEDS\n${data.resources || 'To be confirmed'}\n\nREADINESS CHECKLIST\n${[['audience','Audience and outcome defined'],['venue','Venue and accessibility checked'],['team','Team and facilitators identified'],['budget','Resources and budget reviewed']].map(([key,label]) => `[${data[key] ? 'x' : ' '}] ${label}`).join('\n')}\n`;
  const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = `${data.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60) || 'activity'}-brief.txt`; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); status.textContent = 'Brief exported — not submitted';
});

// User-controlled features; no automatic rotation.
const slides = [...document.querySelectorAll('[data-slide]')];
const dots = [...document.querySelectorAll('[data-slide-to]')];
let activeSlide = 0;
function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => { slide.hidden = i !== activeSlide; });
  dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === activeSlide)));
  document.querySelector('#slide-status').textContent = `Feature ${activeSlide + 1} of ${slides.length}`;
}
if (slides.length) {
document.querySelector('.slide-arrow.prev').addEventListener('click', () => showSlide(activeSlide - 1));
document.querySelector('.slide-arrow.next').addEventListener('click', () => showSlide(activeSlide + 1));
dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slideTo))));

}
