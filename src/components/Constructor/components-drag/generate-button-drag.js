const title = {
  label: 'h1',
  className: 'drag-title',
  dropOnParent: true,
  dropChild: false,
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
const MainBtn = {
  label: 'section',
  className: 'drag-section',
  dropOnParent: true,
  dropChild: false,
  area: 'main',
  css: {},
};
export const arrBtnArea = [title, headerBtn, MainBtn];
