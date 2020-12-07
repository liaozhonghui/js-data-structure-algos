/**
 * 实现trie树结构 假设单词的范围是a-z
 * api: 
 * 1. insert 插入节点
 * 2. search 搜索单词是否在树中
 * 3. startsWith 判断单词是是否在开头
 */
class TrieNode {
    constructor(data) {
        this.data = data;
        this.children = new Array(26);
        this.isEndingChar = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('/');
    }
    // 往trie树种插入单词
    insert (word) {
        let p = this.root
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt() - 'a'.charCodeAt();
            if (!p.children[index]) p.children[index] = new TrieNode(word[i]);
            p = p.children[index];
        }
        p.isEndingChar = true;
    }
    // 搜索单词是否在其中
    search (word) {
        let p = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt() - 'a'.charCodeAt();
            if (!p.children[index]) return false;
            p = p.children[index];
        }
        return p.isEndingChar;
    }
    // 是否以某个前缀开始
    startsWith (prefix) {
        let p = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let index = prefix[i].charCodeAt() - 'a'.charCodeAt();
            if (!p.children[index]) return false;
            p = p.children[index];
        }
        return true;
    }
}

/**
 * test case
 */

let trie = new Trie();
let words = ["how", "hi", "her", "hello", "so", "see"];
for (let word of words) trie.insert(word);
for (let word of words) console.log(trie.search(word));
console.log(trie.startsWith('h'));