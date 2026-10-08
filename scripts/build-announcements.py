"""Render the homepage's latest three and the archive from one dated list."""
import json
import re
from datetime import date
from html import escape
from pathlib import Path

root = Path(__file__).resolve().parent.parent
posts = json.loads((root / 'data/announcements.json').read_text())
posts.sort(key=lambda post: date.fromisoformat(post['date']), reverse=True)

def card(post):
    published = date.fromisoformat(post['date'])
    label = f'{published.day} {published:%B %Y}'
    url = escape(post['url'], quote=True)
    image = escape(post['image'], quote=True)
    alt = escape(post['imageAlt'], quote=True)
    return f'''<article><a class="news-image" href="{url}"><img src="{image}" alt="{alt}" loading="lazy"></a><div class="news-body"><span class="eyebrow">REGION 8 · {escape(post['category'].upper())}</span><time datetime="{published.isoformat()}">{label}</time><h3><a href="{url}">{escape(post['title'])}</a></h3><p>{escape(post['summary'])}</p><a class="text-link" href="{url}">Read announcement</a></div></article>'''

for filename, limit in [('index.html', 3), ('opportunities.html', None)]:
    if limit:
        intro = '<div class="section-heading"><div><span class="eyebrow">OPPORTUNITIES &amp; ANNOUNCEMENTS</span><h2>Latest announcements</h2></div><a class="text-link" href="opportunities.html">View all opportunities &amp; announcements</a></div><p class="section-description">The latest updates from IEEE Region 8 for students and branch leaders.</p>'
        tail = ''
    else:
        intro = '<div class="section-heading"><h2>From across IEEE Region 8</h2></div><p class="section-description">Newest announcements first. Past announcements remain available for reference; check each official post for dates and eligibility.</p>'
        tail = '<div class="archive-more"><a class="button secondary" href="https://r8.ieee.org/sac/home/announcements/">More from IEEE Region 8 SAC</a></div>'
    section = '<section id="opportunities" class="section announcements">' + intro + '<div class="news-grid announcement-grid">' + ''.join(card(post) for post in posts[:limit]) + '</div>' + tail + '</section>'
    path = root / filename
    content = path.read_text()
    content, count = re.subn(r'<!-- announcements:start -->.*?<!-- announcements:end -->', lambda _: '<!-- announcements:start -->\n' + section + '\n<!-- announcements:end -->', content, flags=re.S)
    assert count == 1, f'Missing announcement markers in {filename}'
    path.write_text(content)
