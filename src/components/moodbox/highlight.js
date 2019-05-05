
//for button divs
const traverseChildren = async htmlCollection => {
 const children = Array.from(htmlCollection.children);
 return children.map((x) => x.style.backgroundColor  = '');
};

//dehighlights before hightlight the new element
const de_highlight = async parent => {
 return parent.map(async(x) => {
  if (x.hasChildNodes()){
   await traverseChildren(x);
  }
  return x.style.backgroundColor  = '';
 
 });
};


export const highlight = async (e, parent, colour) => {
 await de_highlight(parent);
 e.target.style.backgroundColor = colour;
};


