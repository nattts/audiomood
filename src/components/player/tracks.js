import * as h from 'utils/helpers.js';


const getDivs = async data => {
 let batch = await h.divBatch(data, h.divBuilder);
 return batch;
};

export const display = async data => {
 let divsArr = await getDivs(data);
 return await h.attach(divsArr,'.playlist');
};

