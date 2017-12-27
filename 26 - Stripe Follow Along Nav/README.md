# 26 - Follow Along Nav
Subnav that "follows along" like the nav on Stripe's website.

Note: this will only work if the dropdowns' contents don't change size after mouseover, e.g. some hover effect on each link showing more content.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [x] Change useless class names like 'top' and 'cool' to more semantic names like 'nav' and 'nav__list'
- [ ] Change code so only one visible class is needed, rather than 1 for `display: block;` and 1 for `opacity: 1;`
- [x] Move dropdownBackground to child of body so its parent's (or parents') position(s) don't matter.

## Things I learned:
