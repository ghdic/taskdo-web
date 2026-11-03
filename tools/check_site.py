from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids, self.headings, self.lang = [], set(), 0, None
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html": self.lang = attrs.get("lang")
        if tag == "h1": self.headings += 1
        if "id" in attrs:
            assert attrs["id"] not in self.ids, "Duplicate ID"
            self.ids.add(attrs["id"])
        for name in ("href", "src"):
            if name in attrs: self.links.append(attrs[name])
        assert not any(name.startswith("on") for name in attrs), "Inline event handler"
        assert tag != "script" or attrs.get("src"), "Inline script"

def parse(path):
    page = Page()
    page.feed(path.read_text(encoding="utf-8"))
    return page

pages = [ROOT / "index.html", ROOT / "privacy/index.html", ROOT / "terms/index.html"]
links = 0
for path in pages:
    page = parse(path)
    assert page.lang == "ko" and page.headings == 1, path
    for link in page.links:
        url = urlsplit(link)
        if url.scheme:
            assert url.scheme in ("https", "mailto"), link
            continue
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        if target.is_dir(): target /= "index.html"
        assert target.is_relative_to(ROOT) and target.is_file(), (path, link)
        if url.fragment: assert url.fragment in parse(target).ids, (path, link)
        links += 1
print(f"PASS: {len(pages)} static pages, {links} local links, headings and script boundaries")
