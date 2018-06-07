import Vue from 'vue/dist/vue';
import VueSplitCharacters from '../src/v-split-characters.js';

Vue.use(VueSplitCharacters);

describe('split', () => {
    let vm = null;
    beforeEach(()=>{

    })
    afterAll(()=>{

    })

    it ('should be splited into characters with default node', done => {
        vm = new Vue({
            data: {
            },
            mounted() {
            },
            template: `<div>
                    <div class="content" v-split-characters>Should be splited.</div>
                </div>`
        }).$mount();

        expect(vm.$el.querySelectorAll('div .content *').length).toBe("Should be splited.".length);

        const nodes = vm.$el.querySelectorAll('div .content *');
        
        for(let n of nodes){
            expect(n.tagName.toLowerCase()).toBe("span");
        }
        done()
})
    it ('should support dynamic content', done => {
        vm = new Vue({
            data: {
                content:"Should be splited."
            },
            mounted() {
            },
            template: `<div>
                    <div class="content" v-split-characters="content"></div>
                </div>`
        }).$mount();

        vm.content = "TEST TEST TEST";
        vm.$nextTick(()=>{
            expect(vm.$el.querySelectorAll('div .content *').length).toBe(vm.content.length);

            const nodes = vm.$el.querySelectorAll('div .content *');
            
            for(let n of nodes){
                expect(n.tagName.toLowerCase()).toBe("span");
            }
            done()

        })
    })
    it ('should support multibyte characters', done => {
        vm = new Vue({
            data: {
                content:"Should be splited."
            },
            mounted() {
            },
            template: `<div>
                    <div class="content" v-split-characters="content"></div>
                </div>`
        }).$mount();
        expect(vm.$el.querySelectorAll('div .content *').length).toBe(vm.content.length);

        vm.content = "アイウエオalphabet漢字😄😄😄";
        vm.$nextTick(()=>{
            expect(vm.$el.querySelectorAll('div .content *').length).toBe(vm.content.length);
    
            const nodes = vm.$el.querySelectorAll('div .content *');
            
            for(let n of nodes){
                expect(n.tagName.toLowerCase()).toBe("span");
            }
            done()
    
        })
    })

    it ('should support changing tag name with argument syntax', done => {
        vm = new Vue({
            data: {
                content:"Should be splited."
            },
            mounted() {
            },
            template: `<div>
                    <div class="content" v-split-characters:b="content"></div>
                </div>`
        }).$mount();

        expect(vm.$el.querySelectorAll('div .content *').length).toBe(vm.content.length);
    
        const nodes = vm.$el.querySelectorAll('div .content *');
        
        for(let n of nodes){
            expect(n.tagName.toLowerCase()).toBe("b");
        }
        done()
    })

    it ('should append data-letter attribute when data modifier is passed', done => {
        vm = new Vue({
            data: {
            },
            mounted() {
            },
            template: `<div>
                    <div class="content" v-split-characters.data>Should be splited.</div>
                </div>`
        }).$mount();

        expect(vm.$el.querySelectorAll('div .content *').length).toBe("Should be splited.".length);
    
        const nodes = vm.$el.querySelectorAll('div .content *');
        
        
        for(let n of nodes){
            expect(n.getAttribute("data-letter")).toBe(n.innerText);
        }
        done()
    })
    it ('should append data-index attribute', done => {
        vm = new Vue({
            data: {
            },
            mounted() {
            },
            template: `<div>
                    <div class="content" v-split-characters>Should be splited.</div>
                </div>`
        }).$mount();

        expect(vm.$el.querySelectorAll('div .content *').length).toBe("Should be splited.".length);
    
        const nodes = vm.$el.querySelectorAll('div .content *');
        
        let i = 0;
        for(let n of nodes){
            expect(n.getAttribute("data-index")).toBe((i++)+"");
        }
        done()
    })

    it ('should not be updated when changed className', done => {
        vm = new Vue({
            data: {
                className:true
            },
            mounted() {
            },
            template: `<div>
                    <div :class="['content',{className:className}]" v-split-characters>Test Test</div>
                </div>`
        }).$mount();

        expect(vm.$el.querySelectorAll('div .content *').length).toBe("Test Test".length);
    
        const nodes = vm.$el.querySelectorAll('div .content *');

        vm.$nextTick(()=>{
            vm.className = false;
            expect(vm.$el.querySelectorAll('div .content *').length).toBe("Test Test".length);

            expect(vm.$el.querySelector('div .content').getAttribute("data-original")).toBe("Test Test");
            
            done()
    
        })
    })
});
