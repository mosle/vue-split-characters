const vSplitCharacters = {
    install(Vue) {
        Vue.directive('split-characters', {
            bind(el,binding,vnode){
                split(el,binding,vnode);
            },
            update(el, binding, vnode, oldVnode){
                split(el,binding,vnode,oldVnode);
            }
        });
    }
};
function split(el,binding,vnode,oldVnode){

    const isDynamic = !!binding.value;
    let text = null;
    if(isDynamic){
        text = binding.value;
        if(el.getAttribute("data-original") === text) return;
    }
    else{
        if(el.getAttribute("data-original")) return;
        text = el.innerText;
    }
    
    el.setAttribute("data-original",text);
    const tagName = binding.arg || "span";
    const letter = binding.modifiers.letter;
    const characters = text.split("");
    /*if(!el.getAttribute("data-splited"))*/ el.innerHTML = "";
    
    let i = 0;
    for(let c of characters){
        
        const node = document.createElement(tagName);
        node.innerText = c;
        if(letter){
            node.setAttribute("data-letter",c);
        }
        node.setAttribute("data-index",i);
        el.appendChild(node);
        i++;
    }    
    el.setAttribute("data-splited","true");
}
if (window.Vue) {
    window.Vue.use(vSplitCharacters);
}

export default vSplitCharacters;