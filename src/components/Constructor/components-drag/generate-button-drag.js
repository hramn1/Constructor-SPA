const title = {
  label: 'h1',
  className: 'drag-title',
  dropChild: false,
  dropOnParent: true,
  area: 'common',
  css: {},
};
const container = {
  label: 'container',
  className: 'drag-container',
  dropChild: false,
  dropOnParent: true,
  area: 'common',
  css: {},
};
const headerBtn = {
  label: 'header',
  className: 'drag-header',
  dropOnParent: true,
  dropChild: false,
  area: 'header',
  css: { padding: '20px', backgroundColor: 'azure' },
};
const mainBtn = {
  label: 'section',
  className: 'drag-section',
  dropOnParent: true,
  dropChild: false,
  area: 'main',
  css: {},
};
export const arrBtnArea = [title, headerBtn, mainBtn, container];
