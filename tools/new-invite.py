#!/usr/bin/env python3
"""Create (or refresh) a couple's invite page.

    python3 tools/new-invite.py aisha-weds-rahul
    python3 tools/new-invite.py aisha-weds-rahul --template lotus-arch

Creates invites/<slug>/index.html from the template and, if it doesn't exist
yet, invites/<slug>/data.json from the template's sample data. Edit data.json
(or link a Google Sheet via "sheet_csv_url") to fill in the couple's details.

Run it again after changing the names or page title in data.json: that
refreshes the link preview (WhatsApp shows this title, it can't read the sheet).
"""

import argparse
import html
import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE_URL = "https://choprakhushee.github.io/wedding-invites"


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("slug", help="folder name / link, e.g. aisha-weds-rahul")
    parser.add_argument("--template", default="lotus-arch")
    args = parser.parse_args()

    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", args.slug):
        sys.exit("Use lowercase letters, numbers and dashes only, e.g. aisha-weds-rahul")

    template = ROOT / "templates" / args.template
    if not template.is_dir():
        sys.exit(f"No template called {args.template!r} in templates/")

    invite = ROOT / "invites" / args.slug
    invite.mkdir(parents=True, exist_ok=True)

    data_path = invite / "data.json"
    if not data_path.exists():
        shutil.copy(template / "sample-data.json", data_path)
        print(f"Created {data_path.relative_to(ROOT)} (sample details: edit it or link a Google Sheet)")

    data = json.loads(data_path.read_text())
    title = data.get("page_title") or f"{data.get('bride_name', '')} & {data.get('groom_name', '')}"
    when = " ".join(filter(None, [data.get("date_day"), data.get("date_month"), data.get("date_year")]))
    description = "You are invited to our wedding" + (f" on {when}" if when else "")

    page = (template / "page.html").read_text()
    page = page.replace("../../templates/lotus-arch/", f"../../templates/{args.template}/")
    page = (page.replace("{{TITLE}}", html.escape(title))
                .replace("{{DESCRIPTION}}", html.escape(description))
                .replace("{{PREVIEW_IMAGE}}", f"{SITE_URL}/templates/{args.template}/preview.jpg"))
    (invite / "index.html").write_text(page)

    print(f"Wrote invites/{args.slug}/index.html")
    print(f"Live link once pushed: {SITE_URL}/invites/{args.slug}/")


if __name__ == "__main__":
    main()
