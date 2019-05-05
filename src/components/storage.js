export const eventTarget = async() => {
 
 let eTarget;
 return {
  setTarget: function(ev){
   eTarget = ev;
    
  },
  getTarget:function async(){
   return eTarget;
  }
 };
  
  
};

//export let t = eventTarget();




