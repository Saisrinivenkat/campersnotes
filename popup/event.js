function start(){
  const addframe = document.querySelector("#start");

  addframe.addEventListener("click",()=>{
    // let [ ctab ] = await chrome.tabs.query(
    //   {
    //     active: true,
    //     currentWindow:true
    //   }
    //   );
      
    chrome.tabs.query({
      active:true,
      currentWindow:true
    },([tab]) =>{
      chrome.tabs.sendMessage(tab.id,{start:true})
    })
  })
}

window.addEventListener("load",start);


function addNewFrame(){
  document.body.style.backgroundColor = "#bcbcbc";
}

