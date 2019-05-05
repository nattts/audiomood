
const traverseChildren = async htmlCollection => {
 const children = Array.from(htmlCollection.children);
 return children.map((x) => x.style.backgroundColor  = '');
};


const de_highlight = async parent => {
 return parent.map(async(x) => {
  if (x.hasChildNodes()){
   await traverseChildren(x);
  }
  return x.style.backgroundColor  = '';
 
 });
};


export const highlight = async (e, parent) => {
 const yellow = '#ffdab3';
 const lightblue = '#e6f8fe';
 await de_highlight(parent);
 e.target.style.backgroundColor = lightblue;
};


