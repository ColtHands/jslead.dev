---
title: HTML ARIA role attribute - a convenient Testing Library query table
date: 03.02.2023
---

It's March 2023 and there is a good trend going around with using `testing-library` and its `...ByRole` query.
I quite like querying elements this way, but to be honest with you sometimes it's not all that clear wether which role do you have in your components if any.
So I thought I would write a small post about it and include a cheat-sheet for the most common roles.

## HTML ARIA role attribute explained

ARIA roles provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with object in a way that is consistent with user expectations of that type of object. ARIA roles can be used to describe elements that don't natively exist in HTML or exist but don't yet have full browser support.

## Cheat-sheet

HTML Elements default roles are listed in the table below.

Please not that examples that have `role` attribute defined **DO** require those attributes. For example, `<fieldset role="radiogroup"></fieldset>` will not work without `role="radiogroup"`, even though it's more semantically correct than say `<div role="radiogroup"></div>`.

<div class="ARIA-Roles">

| Role | Description | Tag | Category | Example |
| --- | --- | --- | --- | --- |
| **heading** | Defines this element as a heading to a page or section |  **h1..h6** | Document Structure | `<h1></h1>` |
| **button** | A clickable element | **button** | Widget | `<button></button>` |
| **link** | Link only with `href` attribute, otherwise `generic` | **a** | Widget | `<a href="URL"></a>` |
| **img** | An image | **img** | Document Structure | `<img src="URL" alt="placeholder image">` |
| **list** | A list of items | **ul**,**ol**,**menu** | Document Structure | `<ul></ul>` |
| **listitem** | An item in a list | **li** | Document Structure | `<li></li>` |
| **separator** | A divider that separates and distinguishes sections of content or groups  | **hr** | Document Structure | `<hr>` |
| **main** | Main content of the page | **main** | Landmark | `<main></main>` |
| **navigation** | Collection of navigational elements (usually links) for navigating the document or related documents | **nav** | Landmark | `<nav></nav>` |
| **complementary** | Supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content | **aside** | Landmark | `<aside></aside>` |
| **contentinfo** | Footer for its nearest sectioning content or sectioning root element | **footer** | Landmark | `<footer></footer>` |
| **form** | Region that contains a collection of items and objects that, as a whole, combine to create a form | **form** | Landmark | `<form></form>` |
| **region** | Section of the page that contains content that is important enough to be included in a page summary or table of contents | **section** | Landmark | `<section></section>` |
| **search** | Region that contains a collection of items and objects that, as a whole, combine to create a search facility | **form** | Landmark | `<form role="search"></form>` |
| **textbox** | A single-line text box | **input** | Widget | `<input type="text">` |
| **checkbox** | A checkable input that has three possible values: true, false, or mixed | **input** | Widget | `<input type="checkbox">` |
| **radio** | A checkable input that has two possible values: true or false | **input** | Widget | `<input type="radio">` |
| **searchbox** | A single-line text box for entering search queries | **input** | Widget | `<input type="search">` |
| **table** | A table container | **table** | Document Structure | `<table></table>` |
| **rowheader** | A cell containing header information for a row | **th** | Document Structure | `<th scope="row"></th>` |
| **columnheader** | A cell containing header information for a column | **th** | Document Structure | `<th scope="col"></th>` |
| **rowgroup** | A group of rows that consists of a row header and data rows for that row header | **thead**,**tbody**,**tfoot** | Document Structure | `<tbody></tbody>` |
| **row** | A row in a table container | **tr** | Document Structure | `<tr></tr>` |
| **cell** | A cell in a table container. (if the ancestor table element is exposed as a role=table) | **td**,**th** | Document Structure | `<td></td>` |
| **group** | A group of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies | **fieldset** | Widget | `<fieldset></fieldset>` |
| **radiogroup** | A group of radio buttons | ⛔ | Widget | `<fieldset role="radiogroup"></fieldset>` |
| **article** | A section of a page that consists of a composition that forms an independent part of a document, page, or site | **article** | Document Structure | `<article></article>` |
| **term** | A definition of a term | **dfn**,**dt** | Document Structure | `<dfn></dfn>` |
| **definition** | A definition of a term | ⛔ | Document Structure | `<dfn role="definition"></dfn>` |
| **figure** | A section that contains content that is referenced from the main flow of the document, but that could be moved away from the main content without losing meaning | **figure** | Document Structure | `<figure></figure>` |
| **option** | An option in a select list | **option** | Widget | `<option></option>` |
| **progressbar** | An element that displays the progress status for tasks that take a long time | **progress** | Widget | `<progress></progress>` |
| **slider** | A control that allows the user to select a value from within a given range | **input** | Widget | `<input type="range">` |
| **spinbutton:** | A form of range that expects the user to select from among discrete choices | **input** | Widget | `<input type="number">` |

Next time you don't know what role your component elements have, refer to this table. _I know i will_

</div>

## Roles not included in the table

### Roles without default HTML element

* `grid`
* `gridcell`
* `dialog`
* `alert`
* `alertdialog`
* `combobox`
* `menu`
* `menubar`
* `menuitem`
* `menuitemcheckbox`
* `menuitemradio`
* `application`
* `document`
* `feed`
* `tree`
* `treegrid`
* `treeitem`
* `tab`
* `tablist`
* `tabpanel`
* `log`
* `marquee`
* `note`
* `scrollbar`
* `status`
* `switch`
* `timer`
* `toolbar`
* `tooltip`

### Abstract roles

[Abstract roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) are included for completeness of documentation. They should not be used by web authors.

* `command`
* `composite`
* `input`
* `landmark`
* `range`
* `roletype`
* `section`
* `sectionhead`
* `select`
* `structure`
* `widget`
* `window`

### Other roles

* `math` role for `<math>` element cannot by queried by `testing-library`
* `presentation` and `none` - removes an element's implicit ARIA semantics from being exposed to the accessibility tree
* `comment` - a landmark role that is currently in draft proposal
* `mark` role for `<mark>` is currently being drafted also
* `banner` - for `<header>` element which is not really you test for in your React applications
* `generic` - it's a default role for:
  * `<div>` and `<span>` elements
  * `<a>` or `<area>` without `href`
  * `<b>`, `<i>`
  * `<bdi>`, `<bdo>`
  * `<body>`
  * `<header>`
  * `<data>`
  * `<hgroup>`
  * `<pre>`
  * `<q>`
  * `<samp>`
  * `<small>`
  * `<u>`
* `meter` - role for `<meter>` element is not included in the table because it is not supported by `testing-library`
* `suggestion` - role that is currently being drafted

## Resources

* [W3C ARIA](https://www.w3.org/TR/html-aria/#docconformance)
* [MDN ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
