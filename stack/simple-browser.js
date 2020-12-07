/**
 * 实现浏览器的前进后退功能
 * api: pushNormal, back, front, displayAllStack
 */
const Stack = require('./stack-baseonlinkedlist');

class SimpleBrowser {
    constructor () {
        this.normalStack = new Stack();
        this.backStack = new Stack()
    }
    pushNormal (name) {
        this.normalStack.push(name);
        this.backStack.clear();
        this.displayAllStack();
    }
    back () {
        const value = this.normalStack.pop();
        if (value != -1) {
            this.backStack.push(value);
            this.displayAllStack();
        } else {
            console.log('无法后退');
        }
    }
    front () {
        const value = this.backStack.pop();
        if (value != -1) {
            this.normalStack.push(value);
            this.displayAllStack();
        } else {
            console.log('无法前进');
        }
    }
    displayAllStack () {
        console.log('浏览页面:');
        this.normalStack.display();
        console.log('后退页面:');
        this.backStack.display();
    }
}
/**
 * test cases
 */
const browser = new SimpleBrowser();
browser.pushNormal('www.google.com');
browser.pushNormal('www.baidu.com');
browser.pushNormal('www.github.com');

// 后退
browser.back();
browser.back();
browser.front();
browser.pushNormal('www.new.com');